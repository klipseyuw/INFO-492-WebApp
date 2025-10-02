const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const host = 'localhost';

// MIME types for different file extensions
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL and remove query parameters
    let filePath = req.url.split('?')[0];
    
    // Default to index.html for root path
    if (filePath === '/') {
        filePath = '/index.html';
    }
    
    // Build full file path
    const fullPath = path.join(__dirname, filePath);
    
    // Get file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'text/plain';
    
    // Check if file exists
    fs.access(fullPath, fs.constants.F_OK, (err) => {
        if (err) {
            // File not found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`
                <h1>404 - File Not Found</h1>
                <p>The requested file <code>${filePath}</code> was not found.</p>
                <p><a href="/">Return to Home</a></p>
            `);
            return;
        }
        
        // Read and serve the file
        fs.readFile(fullPath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`
                    <h1>500 - Internal Server Error</h1>
                    <p>Error reading file: ${err.message}</p>
                `);
                return;
            }
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
    });
});

server.listen(port, host, () => {
    console.log(`🚀 Thesis Web App Server running at:`);
    console.log(`   Local:   http://${host}:${port}/`);
    console.log(`   Network: http://localhost:${port}/`);
    console.log(`\n📁 Serving files from: ${__dirname}`);
    console.log(`\n🌐 Open your browser and navigate to the URL above`);
    console.log(`\n⏹️  Press Ctrl+C to stop the server`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`❌ Port ${port} is already in use. Try a different port or stop the other server.`);
    } else {
        console.log(`❌ Server error: ${err.message}`);
    }
});