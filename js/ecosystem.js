// Ecosystem page specific functionality

// Node information data
const nodeInfo = {
    shippers: {
        title: "Shippers / Manufacturers",
        icon: "fas fa-industry",
        description: "Companies that produce goods and initiate the shipping process. They are responsible for packaging, labeling, and preparing products for transport.",
        details: [
            "Create shipping documentation and manifests",
            "Coordinate with freight forwarders and carriers",
            "Manage inventory and production schedules",
            "Ensure regulatory compliance for exported goods",
            "Track shipment progress and delivery confirmation"
        ],
        vulnerabilities: [
            "Falsified shipping manifests",
            "Compromised production systems",
            "Supply chain data manipulation"
        ]
    },
    forwarders: {
        title: "Freight Forwarders / 3PL & 4PL",
        icon: "fas fa-shipping-fast",
        description: "Intermediaries that manage transport, warehousing, and optimization services. They coordinate between multiple parties to ensure efficient logistics operations.",
        details: [
            "Coordinate multi-modal transportation",
            "Manage customs clearance and documentation",
            "Optimize routing and consolidate shipments",
            "Provide warehousing and distribution services",
            "Handle insurance and risk management"
        ],
        vulnerabilities: [
            "Compromised routing algorithms",
            "Fraudulent documentation",
            "Third-party system breaches"
        ]
    },
    carriers: {
        title: "Carriers (Air, Sea, Rail, Road)",
        icon: "fas fa-truck",
        description: "Companies that physically transport goods across different modes of transportation. They form the backbone of the physical logistics network.",
        details: [
            "Operate transportation vehicles and infrastructure",
            "Maintain real-time tracking systems",
            "Ensure cargo security during transit",
            "Coordinate with ports and terminals",
            "Manage driver schedules and vehicle maintenance"
        ],
        vulnerabilities: [
            "Vehicle tracking system manipulation",
            "GPS spoofing and route hijacking",
            "Cargo theft and security breaches"
        ]
    },
    customs: {
        title: "Customs & Regulators",
        icon: "fas fa-passport",
        description: "Government authorities responsible for overseeing compliance, duties, and security at borders and checkpoints.",
        details: [
            "Inspect and validate shipping documentation",
            "Collect duties and taxes on imported goods",
            "Enforce trade regulations and sanctions",
            "Screen cargo for security threats",
            "Maintain trade data and statistics"
        ],
        vulnerabilities: [
            "Document forgery and fraud",
            "System bypasses for contraband",
            "Corruption and insider threats"
        ]
    },
    warehouses: {
        title: "Warehouses & Distribution Centers",
        icon: "fas fa-warehouse",
        description: "Facilities that handle storage, cross-docking, and fulfillment operations. They serve as critical nodes in the supply chain network.",
        details: [
            "Receive, store, and dispatch inventory",
            "Manage automated sorting and picking systems",
            "Coordinate with transportation providers",
            "Track inventory levels and movements",
            "Handle returns and quality control"
        ],
        vulnerabilities: [
            "Automated system hijacking",
            "Inventory data manipulation",
            "Unauthorized access to facilities"
        ]
    },
    retailers: {
        title: "Retailers / End Customers",
        icon: "fas fa-store",
        description: "Final demand nodes in the logistics network. They receive goods and interact with end consumers, completing the supply chain cycle.",
        details: [
            "Place orders and manage demand forecasting",
            "Receive and verify delivered goods",
            "Manage customer expectations and communications",
            "Handle returns and exchanges",
            "Provide feedback on service quality"
        ],
        vulnerabilities: [
            "Order manipulation and fraud",
            "Customer data breaches",
            "Delivery confirmation spoofing"
        ]
    },
    tms: {
        title: "TMS / WMS Systems",
        icon: "fas fa-desktop",
        description: "Transport Management Systems and Warehouse Management Systems that coordinate and optimize logistics operations through software platforms.",
        details: [
            "Route optimization and planning",
            "Inventory management and tracking",
            "Integration with carrier systems",
            "Performance analytics and reporting",
            "Automated workflow management"
        ],
        vulnerabilities: [
            "System vulnerabilities and exploits",
            "Data integrity attacks",
            "API security breaches"
        ]
    },
    iot: {
        title: "IoT Tracking (GPS, RFID, Sensors)",
        icon: "fas fa-wifi",
        description: "Internet of Things devices that provide real-time tracking and monitoring capabilities throughout the logistics network.",
        details: [
            "Real-time location tracking via GPS",
            "RFID tags for inventory identification",
            "Environmental sensors (temperature, humidity)",
            "Security sensors and alerts",
            "Telematics for vehicle monitoring"
        ],
        vulnerabilities: [
            "Sensor data manipulation",
            "GPS spoofing and jamming",
            "IoT device compromises"
        ]
    },
    blockchain: {
        title: "Blockchain Solutions",
        icon: "fas fa-link",
        description: "Distributed ledger technology used for visibility, smart contracts, and immutable record-keeping in logistics operations.",
        details: [
            "Immutable transaction records",
            "Smart contracts for automated payments",
            "Supply chain traceability",
            "Multi-party consensus mechanisms",
            "Decentralized verification systems"
        ],
        vulnerabilities: [
            "Smart contract vulnerabilities",
            "51% attacks on networks",
            "Private key compromises"
        ]
    },
    ai: {
        title: "AI-Driven Platforms",
        icon: "fas fa-brain",
        description: "Artificial Intelligence platforms used for routing optimization, demand forecasting, predictive maintenance, and autonomous decision-making.",
        details: [
            "Machine learning for demand forecasting",
            "Route optimization algorithms",
            "Predictive maintenance systems",
            "Autonomous threat detection",
            "Natural language processing for communications"
        ],
        vulnerabilities: [
            "Adversarial AI attacks",
            "Training data poisoning",
            "Model manipulation and bias"
        ]
    },
    edi: {
        title: "EDI Standards",
        icon: "fas fa-file-code",
        description: "Electronic Data Interchange standards that enable structured communication between different logistics systems and partners.",
        details: [
            "Standardized document formats",
            "Automated data exchange",
            "Integration between legacy systems",
            "Compliance with industry standards",
            "Error reduction in communications"
        ],
        vulnerabilities: [
            "Protocol vulnerabilities",
            "Man-in-the-middle attacks",
            "Data format exploits"
        ]
    },
    apis: {
        title: "APIs & Cloud Platforms",
        icon: "fas fa-cloud",
        description: "Application Programming Interfaces and cloud-based platforms that enable integration and data sharing across the logistics ecosystem.",
        details: [
            "Real-time data synchronization",
            "Third-party integrations",
            "Scalable cloud infrastructure",
            "API gateway management",
            "Microservices architecture"
        ],
        vulnerabilities: [
            "API security vulnerabilities",
            "Cloud misconfigurations",
            "Authentication bypasses"
        ]
    },
    dashboards: {
        title: "Shared Visibility Dashboards",
        icon: "fas fa-chart-line",
        description: "Centralized platforms that provide real-time visibility and analytics across supply chain partners and operations.",
        details: [
            "Real-time shipment tracking",
            "Performance metrics and KPIs",
            "Alert and notification systems",
            "Multi-tenant data views",
            "Predictive analytics and insights"
        ],
        vulnerabilities: [
            "Dashboard manipulation",
            "False data injection",
            "Unauthorized access to sensitive data"
        ]
    }
};

// Initialize ecosystem interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeEcosystemNodes();
    drawConnectionLines();
    animateNodes();
});

function initializeEcosystemNodes() {
    const nodes = document.querySelectorAll('.node[data-info]');
    
    nodes.forEach(node => {
        node.addEventListener('click', function() {
            const infoType = this.getAttribute('data-info');
            showInfoPanel(infoType);
        });
        
        // Add hover effects
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(8px) scale(1.02)';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
}

function showInfoPanel(infoType) {
    const panel = document.getElementById('info-panel');
    const details = document.getElementById('info-details');
    const info = nodeInfo[infoType];
    
    if (!info) return;
    
    details.innerHTML = `
        <h3 class="info-title">
            <i class="${info.icon}"></i>
            ${info.title}
        </h3>
        <p class="info-description">${info.description}</p>
        
        <h4 style="color: #667eea; margin-bottom: 1rem;">Key Functions:</h4>
        <ul class="info-details-list">
            ${info.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        
        <div class="info-highlight">
            <h4 style="margin-bottom: 1rem;"><i class="fas fa-exclamation-triangle"></i> Security Vulnerabilities:</h4>
            <ul style="list-style: none; padding: 0;">
                ${info.vulnerabilities.map(vuln => `<li style="margin-bottom: 0.5rem;"><i class="fas fa-shield-alt" style="margin-right: 0.5rem;"></i>${vuln}</li>`).join('')}
            </ul>
        </div>
    `;
    
    panel.classList.remove('hidden');
    setTimeout(() => {
        panel.classList.add('active');
    }, 10);
}

function closeInfoPanel() {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('active');
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 300);
}

function drawConnectionLines() {
    const svg = document.querySelector('.connection-lines');
    const nodes = document.querySelectorAll('.node');
    
    // Create connection paths between related nodes
    const connections = [
        // Core stakeholder connections
        { from: '.shipper', to: '.forwarder', delay: 0 },
        { from: '.forwarder', to: '.carrier', delay: 0.2 },
        { from: '.carrier', to: '.customs', delay: 0.4 },
        { from: '.customs', to: '.warehouse', delay: 0.6 },
        { from: '.warehouse', to: '.retailer', delay: 0.8 },
        
        // Technology integrations
        { from: '.tms', to: '.iot', delay: 1.0 },
        { from: '.iot', to: '.blockchain', delay: 1.2 },
        { from: '.blockchain', to: '.ai-platforms', delay: 1.4 },
        
        // Data flow connections
        { from: '.edi', to: '.apis', delay: 1.6 },
        { from: '.apis', to: '.dashboards', delay: 1.8 }
    ];
    
    connections.forEach((conn, index) => {
        setTimeout(() => {
            const fromNode = document.querySelector(conn.from);
            const toNode = document.querySelector(conn.to);
            
            if (fromNode && toNode) {
                const fromRect = fromNode.getBoundingClientRect();
                const toRect = toNode.getBoundingClientRect();
                const svgRect = svg.getBoundingClientRect();
                
                const x1 = fromRect.left + fromRect.width / 2 - svgRect.left;
                const y1 = fromRect.top + fromRect.height / 2 - svgRect.top;
                const x2 = toRect.left + toRect.width / 2 - svgRect.left;
                const y2 = toRect.top + toRect.height / 2 - svgRect.top;
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const midX = (x1 + x2) / 2;
                const midY = Math.min(y1, y2) - 50;
                
                const pathData = `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`;
                line.setAttribute('d', pathData);
                line.classList.add('connection-line');
                line.style.animationDelay = `${conn.delay}s`;
                
                svg.appendChild(line);
            }
        }, index * 100);
    });
}

function animateNodes() {
    const groups = document.querySelectorAll('.stakeholder-group');
    
    groups.forEach((group, index) => {
        setTimeout(() => {
            group.style.opacity = '1';
            group.style.transform = 'translateY(0)';
        }, index * 200);
        
        // Initial hidden state
        group.style.opacity = '0';
        group.style.transform = 'translateY(30px)';
        group.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Close info panel when clicking outside
document.addEventListener('click', function(e) {
    const panel = document.getElementById('info-panel');
    const isClickInsidePanel = panel.contains(e.target);
    const isClickOnNode = e.target.closest('.node[data-info]');
    
    if (!isClickInsidePanel && !isClickOnNode && panel.classList.contains('active')) {
        closeInfoPanel();
    }
});

// Keyboard accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeInfoPanel();
    }
});