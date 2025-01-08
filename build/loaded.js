class myNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <nav class="bg-slate-100 shadow-lg shadow-indigo-500 py-4 top-0 sticky z-10 ">
              <div class="max-w-[90%] md:max-w-[80%] mx-auto flex items-center justify-between">
                  <h1 class="text-2xl font-bold"><a class="text-indigo-600" href="index.html#hero">🧊GlacierPath</a></h1>
                  <ul class="navbar hidden nav_b:flex items-center shadow-2xl shadow-red-500  flex-col bg-indigo-500 nav_b:bg-transparent  nav_b:h-auto max-w-[75%] nav_b:max-w-auto w-full nav_b:w-auto nav_b:flex-row absolute top-0 right-0 mt-[70px] nav_b:mt-0 nav_b:space-x-7 nav_b:static">
                      <li class="flex justify-center border border-t-white w-full nav_b:w-auto nav_b:border-none p-4 nav_b:p-0  nav_b:mt-0"><a class="text-white nav_b:text-indigo-700  font-semibold text-xl  flex items-center w-full justify-center" href="index.html#about">About</a></li>
                      <li class="flex justify-center border border-t-white w-full nav_b:w-auto nav_b:border-none p-4 nav_b:p-0  nav_b:mt-0"><a class="text-white nav_b:text-indigo-700  font-semibold text-xl  flex items-center w-full justify-center" href="index.html#jobs">Jobs</a></li>
                      <li class="flex justify-center border border-t-white w-full nav_b:w-auto nav_b:border-none p-4 nav_b:p-0 nav_b:mt-0"><a class="text-white nav_b:text-indigo-700  font-semibold text-xl  flex items-center w-full justify-center" href="index.html#testimonials">Testimonials</a></li>
                      <li class="flex justify-center border border-t-white w-full nav_b:w-auto nav_b:border-none p-4 nav_b:p-0 nav_b:mt-0"><a class="text-white nav_b:text-indigo-700  font-semibold text-xl  flex items-center w-full justify-center" href="index.html#faqs">FAQs</a></li>
                      <li class="flex justify-center border border-t-white w-full nav_b:w-auto nav_b:border-none p-4 nav_b:p-0 nav_b:mt-0"><a class="text-white nav_b:text-indigo-700  font-semibold text-xl  flex items-center w-full justify-center" href="index.html#contact">Contact Us</a></li>
                  </ul>
                  <button class="outline-none nav_b:hidden text-4xl nav_open_btn font-semibold">
                    &#9776;
                  </button>
                  
              </div>
          </nav>
        `
    }
}


customElements.define('my-nav', myNav);


class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="mt-12 bg-bg-input">
        <div class="grid max-w-[90%] mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xxg:grid-cols-4 p-8 gap-6 place-content-center justify-center">
            <div class="md:flex flex-col space-y-2 hidden items-center justify-center">
                <h1 class="text-3xl font-bold text-white"><a href="#hero">GlacierPath</a></h1>
                <p class="text-white">Stay updated with our latest news and offers. Enter your email to subscribe to our newsletter.</p>
                <div class="flex items-center">
                  <input class="p-3 border-none outline-none"  type="email" required placeholder="Enter Email" >
                  <button class="bg-indigo-500 border-none py-2 px-3"><i class="fas fa-arrow-right text-white text-2xl"></i></button>
               
                </div>
                

            </div>
            <div class="xxg:flex lg:flex-col hidden">
                <ul class="flex items-center flex-col space-y-2">
                    <h3 class="text-lg font-bold text-white">Navigation</h3>
                    <li class="flex items-center"><a class="text-white hover:text-gray-300" href="#about">About</a></li>
                    <li class="flex items-center"><a class="text-white hover:text-gray-300" href="#jobs">Jobs</a></li>
                    <li class="flex items-center"><a class="text-white hover:text-gray-300" href="#testimonials">Testimonials</a></li>
                    <li class="flex items-center"><a class="text-white hover:text-gray-300" href="#faqs">FAQs</a></li>
                    <li class="flex items-center"><a class="text-white hover:text-gray-300" href="#contact">Contact Us</a></li>
                </ul>
            </div>

            <div class="flex flex-col space-y-2 items-center">
                <h3 class="text-lg font-bold text-white">Contact Us</h3>
                <a class="text-white hover:text-gray-300" href="mailto:netchucker254@gmail.com">netchucker254@gmail.com</a>
            
                <a class="text-white hover:text-gray-300" href="tel: +254 51305530">Phone: +254 51305530</a>
              
                <p class="text-white">Location: Nairobi, Kenya</p>
            </div>
            <div class="flex  items-center space-y-2  flex-col">
                <div>
                    <h3 class="text-lg font-bold text-white">Socials</h3>
                </div>

                <div class="flex space-x-6">
                    <a href="https://www.facebook.com" target="_blank" class="text-white  hover:text-blue-500">
                        <i class="fab fa-facebook-f text-4xl"></i>
                      </a>
                      <a href="https://wa.me/1234567890" target="_blank" class="text-white  hover:text-green-500">
                        <i class="fab fa-whatsapp text-4xl"></i>
                      </a>
                      <a href="https://www.instagram.com" target="_blank" class="text-white  hover:text-pink-500">
                        <i class="fab fa-instagram text-4xl"></i>
                      </a>
                      <a href="mailto:support@glacierpath.com" target="_blank" class="text-white  hover:text-red-500">
                        <i class="fas fa-envelope text-4xl"></i>
                      </a>
                </div>
                
                
            </div>
              
            
        </div>

        <div class="border-t-2 border-gray-300 py-4 text-center text-white">
          Copyright &copy;2025. All Rights Reserved. GlacierPath
        </div>

    </footer>
    `
  }
}


customElements.define('my-footer', myFooter)