// Handle button clicks on index.html
document.querySelectorAll('.button-target').forEach(button => {
    button.addEventListener('click', () => {
        // Get the category from the data-category attribute of the clicked button
        const category = button.getAttribute('data-category');
        
        // Redirect to jobs.html with the selected category in the URL query string
        window.location.href = `jobs.html?category=${category}`;
    });
});

// Update content on jobs.html when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the 'category' parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const content = document.getElementById('content'); // Ensure there's an element with id="content"

    // Define content for different job categories
    const jobsData = {
        transcription: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/transcription.png" alt="Transcription">
                <h3 class="text-red-500 text-xl md:text-2xl font-bold">Transcription</h3>
            </div>
            <p class="text-lg">Transcription involves converting audio or speech into written text.</p>
            <p class="text-lg my-3">Interested in transcription jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `,
        dataentry: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/data_entry.png" alt="Data Entry">
                <h3 class="text-green-500 text-xl md:text-2xl font-bold">Data Entry</h3>
            </div>
            <p class="text-lg">Data Entry involves inputting and managing information in various forms.</p>
            <p class="text-lg my-3">Interested in Data Entry jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `,
        surveys: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/online_survey.png" alt="Surveys">
                <h3 class="text-blue-500 text-xl md:text-2xl font-bold">Surveys</h3>
            </div>
            <p class="text-lg">Surveys help gather insights through a series of questions to inform decisions.</p>
            <p class="text-lg my-3">Interested in Online survey jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `,
        assistance: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/assistance.png" alt="Virtual Assistance">
                <h3 class="text-yellow-500 text-xl md:text-2xl font-bold">Virtual Assistance</h3>
            </div>
            <p class="text-lg">Virtual Assistance provides remote administrative support to businesses.</p>
            <p class="text-lg my-3">Interested in Virtual assistance jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `,
        freelance: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/freelance.png" alt="Freelance Writing">
                <h3 class="text-purple-500 text-xl md:text-2xl font-bold">Freelance Writing</h3>
            </div>
            <p class="text-lg">Freelance Writing involves creating content for websites, blogs, and articles.</p>
            <p class="text-lg my-3">Interested in Freelance writing jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `,
        testing: `
            <div class="flex items-center gap-2">
                <img class="h-8" src="imgs/testing.png" alt="Product Testing">
                <h3 class="text-pink-500 text-xl md:text-2xl font-bold">Product Testing</h3>
            </div>
            <p class="text-lg">Product Testing involves testing new products and providing feedback to improve them.</p>
            <p class="text-lg my-3">Interested in Product Testing jobs? Provide your email to join and start earning with us today.</p>
            ${generateForm()}
        `
    };

    // Update the content based on the selected category or display fallback message
    content.innerHTML = jobsData[category] || "<h1>Explore All Jobs</h1><p>Please select a category from the homepage.</p>";

    // Form reset logic
    const form = document.getElementById('jobForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            setTimeout(() => {
                form.reset();
            }, 3000);  // Reset form after 5 seconds
        });
    }
});

// Form generation function
function generateForm() {
    return `
        <form id="jobForm" class="mt-4 p-4 bg-gray-100 rounded-lg shadow-md " action="https://formspree.io/f/mdkkpzaa"
  method="POST">
            <h3 class="text-lg font-semibold mb-2">Sign Up</h3>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" required 
                    class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300">
            </div>
            <div class="mb-4">
                <label for="phone" class="block text-sm font-medium">Phone Number</label>
                <input type="tel" id="phone" name="phone" required 
                    class="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-300">
            </div>
            <button type="submit" class="w-full bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                Submit
            </button>
        </form>
    `;
}















