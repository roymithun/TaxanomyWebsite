function showTab(tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
  
    // Show the selected tab content
    const selectedTabContent = document.getElementById(tabId);
    selectedTabContent.classList.add('active');
  
    // Update active tab appearance
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    const selectedTab = document.querySelector(`.tab#${tabId}`);
    selectedTab.classList.add('active');
}