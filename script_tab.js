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
    if (tabId == 'tab1') {
        loadTabContent(document.getElementById('flora-json-data'), 'https://5z4j4.wiremockapi.cloud/flora-data')
    } else {
        loadTabContent(document.getElementById('fauna-json-data'), 'https://5z4j4.wiremockapi.cloud/fauna-data')
    }
}