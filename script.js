// Function to create a product or blog card
function createCard(item, type) {
  const isProduct = type === 'product';
  return `
    <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div class="h-48 md:h-64 overflow-hidden">
        <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${item.title}</h3>
        <p class="text-gray-600 text-sm mb-4">${item.description}</p>
        ${isProduct 
          ? `<a href="${item.link}" target="_blank" class="w-full block text-center bg-indigo-600 text-white font-bold py-3 px-4 rounded-full hover:bg-indigo-700 transition-colors shadow-md">Buy Now & Earn</a>` 
          : `<a href="${item.link}" class="text-indigo-600 font-semibold hover:underline">Read More &rarr;</a>`}
      </div>
    </div>
  `;
}

// Data for Health products and blog posts (for index.html)
const products = [
  // You can find your placeholder links here and replace them with your own affiliate links.
  { image: 'https://placehold.co/600x400/818CF8/FFFFFF?text=Premium+Health+Course', title: 'Premium Health & Longevity Course', description: 'A comprehensive online course designed by experts to optimize your long-term health and well-being.', link: 'https://your-affiliate-link-1.com' },
  { image: 'https://placehold.co/600x400/9333ea/FFFFFF?text=AI+Fitness+Coach', title: 'AI-Powered Personal Fitness Coach', description: 'Get a personalized workout plan and real-time form correction from an intelligent AI assistant.', link: 'https://your-affiliate-link-2.com' },
  { image: 'https://placehold.co/600x400/C026D3/FFFFFF?text=Smart+Nutrition+App', title: 'Elite Nutrition & Meal Planning App', description: 'An advanced app that creates personalized meal plans based on your dietary needs and goals.', link: 'https://your-affiliate-link-3.com' },
  { image: 'https://placehold.co/600x400/DB2777/FFFFFF?text=Sleep+Monitor', title: 'High-Tech Sleep Optimization System', description: 'A complete system with a smart wearable and an app to analyze and improve your sleep quality.', link: 'https://your-affiliate-link-4.com' },
  { image: 'https://placehold.co/600x400/E11D48/FFFFFF?text=Mindfulness+Subscription', title: 'Premium Mindfulness Subscription', description: 'Unlock a library of exclusive guided meditations, soundscapes, and wellness workshops.', link: 'https://your-affiliate-link-5.com' },
  { image: 'https://placehold.co/600x400/f87171/FFFFFF?text=Genetic+Analysis', title: 'Genetic Health & Ancestry Analysis', description: 'Receive a detailed report on your genetic predispositions for health and wellness.', link: 'https://your-affiliate-link-6.com' }
];

const blogPosts = [
  { image: 'https://placehold.co/600x400/1D4ED8/FFFFFF?text=Longevity+Secrets', title: 'The Ultimate Guide to Digital Longevity', description: 'Explore the latest research and digital tools to extend your healthspan and live longer.', link: '#' },
  { image: 'https://placehold.co/600x400/9D174D/FFFFFF?text=Future+of+Wellness', title: 'The Future of Wellness is Digital', description: 'An in-depth look at how technology is revolutionizing personal health and fitness.', link: '#' },
  { image: 'https://placehold.co/600x400/0F766E/FFFFFF?text=Personalized+Health', title: 'Personalized Health: A New Era', description: 'How AI and data are making health and nutrition plans truly unique to each person.', link: '#' }
];

// Data for Digital Products (for digital.html)
const digitalProducts = [
  { image: 'https://placehold.co/600x400/4B5563/FFFFFF?text=Advanced+Business+Course', title: 'The Elite Business Automation Course', description: 'A masterclass that teaches you how to scale your business with advanced digital automation tools.', link: 'https://your-digital-affiliate-link-1.com' },
  { image: 'https://placehold.co/600x400/1F2937/FFFFFF?text=Pro+Video+Editor', title: 'Professional Video Editing Software Suite', description: 'High-end software used by industry professionals for stunning video production and editing.', link: 'https://your-digital-affiliate-link-2.com' },
  { image: 'https://placehold.co/600x400/374151/FFFFFF?text=Web+Dev+Bootcamp', title: 'Full-Stack Web Development Bootcamp', description: 'An intensive online bootcamp that guarantees job placement after you complete the program.', link: 'https://your-digital-affiliate-link-3.com' },
  { image: 'https://placehold.co/600x400/4B5563/FFFFFF?text=AI+Marketing+Platform', title: 'AI-Powered Marketing & Sales Platform', description: 'A comprehensive platform that uses AI to automate marketing, generate leads, and close sales.', link: 'https://your-digital-affiliate-link-4.com' },
  { image: 'https://placehold.co/600x400/1e40af/FFFFFF?text=Crypto+Course', title: 'The Cryptocurrency Investment Masterclass', description: 'An advanced course teaching you the strategies for high-ticket cryptocurrency and blockchain investments.', link: 'https://your-digital-affiliate-link-5.com' }
];

// Data for travel and tech content (for travel-tech.html)
const gearItems = [
  { image: 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Portable+Studio+Laptop', title: 'High-Performance Portable Laptop', description: 'A professional-grade laptop with a dedicated graphics card for video editing and high-demand tasks on the road.', link: 'https://your-travel-affiliate-link-1.com' },
  { image: 'https://placehold.co/600x400/06B6D4/FFFFFF?text=Drone', title: 'Professional Travel Drone', description: 'Capture stunning aerial photography and 4K video with this compact and powerful travel drone.', link: 'https://your-travel-affiliate-link-2.com' },
  { image: 'https://placehold.co/600x400/0891B2/FFFFFF?text=Satellite+Internet', title: 'Portable Satellite Internet Hub', description: 'Stay connected anywhere in the world with a high-speed satellite internet device.', link: 'https://your-travel-affiliate-link-3.com' },
  { image: 'https://placehold.co/600x400/60a5fa/FFFFFF?text=Action+Camera', title: 'Advanced Action Camera Bundle', description: 'A complete bundle with the latest action camera, extra batteries, and mount accessories for any adventure.', link: 'https://your-travel-affiliate-link-4.com' }
];

const travelBlogPosts = [
  { image: 'https://placehold.co/600x400/0D9488/FFFFFF?text=Luxury+Nomad+Guide', title: 'The High-End Digital Nomad Guide', description: 'A guide to staying at luxury resorts and traveling first-class as a remote worker.', link: '#' },
  { image: 'https://placehold.co/600x400/059669/FFFFFF?text=Remote+Work+Locations', title: 'Top 10 Remote Work Locations for High Earners', description: 'Discover the best destinations with fast internet, luxury amenities, and a high quality of life.', link: '#' },
  { image: 'https://placehold.co/600x400/047857/FFFFFF?text=High-Ticket+Travel', title: 'How to Land High-Ticket Travel Deals', description: 'Strategies for securing exclusive travel partnerships and sponsored trips.', link: '#' }
];

// Event listener to populate the pages when the content loads
document.addEventListener('DOMContentLoaded', () => {
  const productList = document.getElementById('product-list');
  const blogList = document.getElementById('blog-list');
  const digitalProductList = document.getElementById('digital-product-list');
  const gearList = document.getElementById('gear-list');
  const travelBlogList = document.getElementById('blog-travel-list');

  // Populate Health Hub content (index.html)
  if (productList) {
    products.forEach(product => productList.innerHTML += createCard(product, 'product'));
  }
  if (blogList) {
    blogPosts.forEach(post => blogList.innerHTML += createCard(post, 'blog'));
  }

  // Populate Digital Products page (digital.html)
  if (digitalProductList) {
    digitalProducts.forEach(item => digitalProductList.innerHTML += createCard(item, 'product'));
  }
  
  // Populate Travel & Tech content (travel-tech.html)
  if (gearList) {
    gearItems.forEach(item => gearList.innerHTML += createCard(item, 'product'));
  }
  if (travelBlogList) {
    travelBlogPosts.forEach(post => travelBlogList.innerHTML += createCard(post, 'blog'));
  }

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});