// Dashboard functionality

let threatChart;

document.addEventListener('DOMContentLoaded', function() {
    updateCurrentTime();
    setInterval(updateCurrentTime, 1000);
    initializeThreatChart();
    initializeDashboardAnimations();
});

function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleString();
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = timeString;
    }
}

// AI Agent Management Functions
function refreshAgents() {
    const refreshBtn = document.querySelector('.card-controls .btn-icon');
    if (refreshBtn) {
        refreshBtn.style.transform = 'rotate(360deg)';
        refreshBtn.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            refreshBtn.style.transform = 'rotate(0deg)';
        }, 500);
        
        // Simulate data refresh
        updateAgentMetrics();
    }
}

function updateAgentMetrics() {
    // Simulate real-time updates to agent metrics
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        if (metric.textContent.includes('%')) {
            const currentValue = parseFloat(metric.textContent);
            const variation = (Math.random() - 0.5) * 2; // ±1% variation
            const newValue = Math.max(90, Math.min(100, currentValue + variation));
            metric.textContent = newValue.toFixed(1) + '%';
        } else if (!isNaN(parseInt(metric.textContent))) {
            const currentValue = parseInt(metric.textContent);
            const variation = Math.floor((Math.random() - 0.5) * 20);
            metric.textContent = Math.max(0, currentValue + variation);
        }
    });
}

function viewAgentDetails(agentType) {
    // Simulate opening agent details
    alert(`Opening detailed view for ${agentType} agent. This would show:\n- Detailed performance metrics\n- Configuration settings\n- Training data status\n- Recent decisions and logs`);
}

function pauseAgent(agentType) {
    const agentCard = document.querySelector(`[data-agent="${agentType}"]`);
    if (agentCard) {
        const statusLight = agentCard.querySelector('.status-light');
        const pauseBtn = agentCard.querySelector('.agent-actions .btn-small.secondary');
        
        if (agentCard.classList.contains('active')) {
            // Pause agent
            agentCard.classList.remove('active');
            agentCard.classList.add('inactive');
            statusLight.classList.remove('active');
            statusLight.classList.add('inactive');
            pauseBtn.textContent = 'Resume';
        } else {
            // Resume agent
            agentCard.classList.remove('inactive');
            agentCard.classList.add('active');
            statusLight.classList.remove('inactive');
            statusLight.classList.add('active');
            pauseBtn.textContent = 'Pause';
        }
    }
}

function activateAgent(agentType) {
    const agentCard = document.querySelector(`[data-agent="${agentType}"]`);
    if (agentCard) {
        agentCard.classList.remove('inactive');
        agentCard.classList.add('active');
        
        const statusLight = agentCard.querySelector('.status-light');
        statusLight.classList.remove('inactive');
        statusLight.classList.add('active');
        
        const activateBtn = agentCard.querySelector('.btn-small.primary');
        activateBtn.textContent = 'Pause';
        activateBtn.classList.remove('primary');
        activateBtn.classList.add('secondary');
        activateBtn.onclick = () => pauseAgent(agentType);
        
        // Update metrics
        const metrics = agentCard.querySelectorAll('.metric-value');
        metrics.forEach(metric => {
            if (metric.textContent === '--') {
                metric.textContent = Math.floor(Math.random() * 1000) + 1;
            }
        });
    }
}

// Emergency Stop Functions
function showEmergencyStop() {
    const modal = document.getElementById('emergencyModal');
    modal.classList.remove('hidden');
    document.getElementById('confirmationInput').focus();
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    
    // Reset confirmation input
    const input = document.getElementById('confirmationInput');
    if (input) {
        input.value = '';
    }
}

function executeEmergencyStop() {
    const input = document.getElementById('confirmationInput');
    if (input.value === 'EMERGENCY STOP') {
        // Simulate emergency stop
        const agentCards = document.querySelectorAll('.agent-card.active');
        agentCards.forEach(card => {
            card.classList.remove('active');
            card.classList.add('inactive');
            
            const statusLight = card.querySelector('.status-light');
            statusLight.classList.remove('active');
            statusLight.classList.add('inactive');
        });
        
        // Add emergency alert
        addEmergencyAlert();
        closeModal('emergencyModal');
        
        alert('EMERGENCY STOP EXECUTED\nAll AI agents have been stopped and system is in manual override mode.');
    } else {
        alert('Invalid confirmation text. Please type "EMERGENCY STOP" exactly.');
    }
}

function addEmergencyAlert() {
    const alertsList = document.getElementById('alertsList');
    const emergencyAlert = document.createElement('div');
    emergencyAlert.className = 'alert-item critical';
    emergencyAlert.innerHTML = `
        <div class="alert-icon">
            <i class="fas fa-stop-circle"></i>
        </div>
        <div class="alert-content">
            <div class="alert-title">Emergency Stop Executed</div>
            <div class="alert-description">All AI agents have been stopped and system is operating in manual override mode</div>
            <div class="alert-meta">
                <span class="alert-time">Just now</span>
                <span class="alert-source">System Administrator</span>
            </div>
        </div>
        <div class="alert-actions">
            <button class="btn-small" onclick="restoreAgents()">Restore System</button>
        </div>
    `;
    
    alertsList.insertBefore(emergencyAlert, alertsList.firstChild);
}

// Threat Chart Functions
function initializeThreatChart() {
    const ctx = document.getElementById('threatChart');
    if (!ctx) return;
    
    const chartData = {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
        datasets: [
            {
                label: 'Critical Threats',
                data: [2, 1, 3, 5, 4, 2, 1],
                borderColor: '#dc3545',
                backgroundColor: 'rgba(220, 53, 69, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'High Priority',
                data: [8, 12, 15, 18, 14, 10, 7],
                borderColor: '#fd7e14',
                backgroundColor: 'rgba(253, 126, 20, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'Medium Priority',
                data: [25, 30, 35, 40, 32, 28, 22],
                borderColor: '#ffc107',
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                tension: 0.4,
                fill: true
            }
        ]
    };

    const chartConfig = {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: 'index'
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#667eea',
                    borderWidth: 1
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: true,
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    };

    threatChart = new Chart(ctx, chartConfig);
}

function updateThreatChart(timeRange) {
    if (!threatChart) return;
    
    let labels, criticalData, highData, mediumData;
    
    switch(timeRange) {
        case '24h':
            labels = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
            criticalData = [2, 1, 3, 5, 4, 2, 1];
            highData = [8, 12, 15, 18, 14, 10, 7];
            mediumData = [25, 30, 35, 40, 32, 28, 22];
            break;
        case '7d':
            labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            criticalData = [15, 12, 18, 22, 19, 8, 5];
            highData = [85, 92, 78, 95, 88, 65, 42];
            mediumData = [220, 245, 198, 285, 255, 180, 145];
            break;
        case '30d':
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            criticalData = [67, 54, 72, 61];
            highData = [412, 385, 445, 398];
            mediumData = [1250, 1180, 1320, 1275];
            break;
    }
    
    threatChart.data.labels = labels;
    threatChart.data.datasets[0].data = criticalData;
    threatChart.data.datasets[1].data = highData;
    threatChart.data.datasets[2].data = mediumData;
    threatChart.update();
}

// Alert Management Functions
function filterAlerts(type) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const alerts = document.querySelectorAll('.alert-item');
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter alerts
    alerts.forEach(alert => {
        if (type === 'all') {
            alert.style.display = 'flex';
        } else if (type === 'critical' && alert.classList.contains('critical')) {
            alert.style.display = 'flex';
        } else if (type === 'warnings' && alert.classList.contains('warning')) {
            alert.style.display = 'flex';
        } else {
            alert.style.display = 'none';
        }
    });
}

function investigateAlert(alertId) {
    alert(`Opening investigation details for Alert ${alertId}. This would show:\n- Alert context and timeline\n- Related system logs\n- Affected components\n- Recommended actions\n- Similar past incidents`);
}

function dismissAlert(alertId) {
    const alerts = document.querySelectorAll('.alert-item');
    if (alerts[alertId - 1]) {
        alerts[alertId - 1].style.opacity = '0';
        alerts[alertId - 1].style.transform = 'translateX(-100%)';
        setTimeout(() => {
            alerts[alertId - 1].remove();
        }, 300);
    }
}

function viewTrainingReport() {
    alert('Opening AI model training report. This would show:\n- Training data statistics\n- Model performance metrics\n- Validation results\n- Comparison with previous versions\n- Deployment recommendations');
}

// Governance Functions
function showGovernanceDetails() {
    alert('Opening AI Governance Framework details. This would show:\n- Detailed policy configurations\n- Compliance audit logs\n- Risk assessment history\n- Human oversight statistics\n- Regulatory compliance status');
}

// Dashboard Animations
function initializeDashboardAnimations() {
    const cards = document.querySelectorAll('.dashboard-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Auto-refresh dashboard data
setInterval(() => {
    updateAgentMetrics();
}, 30000); // Update every 30 seconds

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'r':
                e.preventDefault();
                refreshAgents();
                break;
            case 'e':
                if (e.shiftKey) {
                    e.preventDefault();
                    showEmergencyStop();
                }
                break;
        }
    }
    
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal:not(.hidden)');
        modals.forEach(modal => modal.classList.add('hidden'));
    }
});

// Restore agents function
function restoreAgents() {
    const agentCards = document.querySelectorAll('.agent-card.inactive');
    agentCards.forEach(card => {
        if (!card.classList.contains('predictive-maintenance')) {
            card.classList.remove('inactive');
            card.classList.add('active');
            
            const statusLight = card.querySelector('.status-light');
            statusLight.classList.remove('inactive');
            statusLight.classList.add('active');
        }
    });
    
    alert('AI agents have been restored to operational status.');
}