class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="nav-container">
        <nav>
            <ul class="desktop-nav-items">
                <li>
                    <a class="logo" href="/">
                        <img class="lynq-logo-white" src="./assets/icons/lynq-logo-white.svg" alt="LYNQ Studio Logo" />
                        <img class="lynq-logo-color" src="./assets/icons/lynq-studio-logo-with-typeface.svg"
                            alt="LYNQ Studio Logo" />
                    </a>
                </li>
                <li>
                    <a href="./lynq-studio"><strong>LYNQ</strong> Studio</a>
                </li>
                <li>
                    <a href="./lynq-space"><strong>LYNQ</strong> Space</a>
                </li>
                <li>
                    <a href="./lynq-flow"><strong>LYNQ</strong> Flow</a>
                </li>
                <li>
                    <a href="./lynq-journal"><strong>LYNQ</strong> Journal</a>
                </li>
            </ul>

            <!-- mobile nav TODO: -->

            <div class="mobile-nav">
                <div class="mobile-nav-menu">
                    <a class="lynq-logo" href="/">
                        <img class="lynq-logo" src="./assets/icons/lynq-logo-white.svg" alt="LYNQ Studio Logo" />
                    </a>
                    <div class="menu-icon-container">
                        <div class="menu-icon">
                            <span class="line-1"></span>
                            <span class="line-2"></span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </section>

    <div class="mobile-nav-items">
        <ul>
            <li>
                    <a href="./lynq-studio"><strong>LYNQ</strong> Studio</a>
                </li>
                <li>
                    <a href="./lynq-space"><strong>LYNQ</strong> Space</a>
                </li>
                <li>
                    <a href="./lynq-flow"><strong>LYNQ</strong> Flow</a>
                </li>
                <li>
                    <a href="./lynq-journal"><strong>LYNQ</strong> Journal</a>
                </li>
        </ul>
        <div class="divider"></div>
        <div class="lynq-logo">
            <img class="lynq-logo-color" src="./assets/icons/lynq-studio-logo-with-typeface.svg"
                alt="LYNQ Studio Logo" />
        </div>
    </div>
        `
    }
}

// TODO:  Special Footer

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <div class="social-media">
                <ul>
                    <li>
                        <a href="">
                            <img src="../assets/icons/behance.svg" alt="behance.lynqStudio">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/icons/instagram.svg" alt="instagram.lynqStudio">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/icons/facebook.svg" alt="facebook.lynqStudio">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/icons/linkedin.svg" alt="linkedin.lynqStudio">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="lynq-studio">
                <img class="lynq-logo" src="../assets/icons/lynq-studio-text-logo.svg" alt="lynq Studio Text Logo">
                <img class="lynq-signature" src="../assets/icons/lynq-signature-dark.svg" alt="lynq Studio Signature">
            </div>

            <div class="contacts-details">
                <p class="studio">
                    <strong>LYNQ</strong> Studio
                </p>
                <p class="contact">
                    +263 77 401 8766
                </p>
                <p class="mail">
                    info@lynqstudio.co.zw
                </p>
            </div>
            <img class="logo-symbol" src="../assets/icons/lynq-favicon-logo.svg" alt="lynq Studio Symbol">

            <div class="legal">
                <div class="horizontal-divider"></div>
                <div class="links">
                    <a href="./lynq-studio"><strong>LYNQ</strong> Studio</a>
                    <div class="divider"></div>
                    <a href="./lynq-journal"><strong>LYNQ</strong> Journal</a>
                    <div class="divider"></div>
                    <div class="copyright" href="">@2026 <strong>LYNQ</strong> Studio</div>
                </div>

            </div>
        </div>
    </footer>
        `
    }
}



customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)
customElements.define("special-subhead", SpecialSubhead)