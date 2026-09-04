class SpecialFlowHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="nav-container">
        <nav>
            <ul class="desktop-nav-items">
                <li>
                    <a class="logo" href="/">
                        <img class="lynq-logo-white" src="./assets/icons/lynq-studio-logo.svg" alt="LYNQ Studio Logo" />
                        <img class="lynq-logo-color" src="./assets/icons/lynq-studio-logo-hover.svg"
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

                        <img class="color-logo" src="./assets/icons/lynq-studio-logo.svg" alt="LYNQ Studio Logo" />

                        <img class="white-logo" src="./assets/icons/lynq-logo-white.svg" alt="LYNQ Studio Logo" />

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



customElements.define("special-flow-header", SpecialFlowHeader)