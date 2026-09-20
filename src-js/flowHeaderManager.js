class SpecialFlowHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="nav-container">
        <nav>
            <ul class="desktop-nav-items">
                <li>
                    <a class="logo" href="/">
                        <strong>LYNQ</strong> Studio
                    </a>
                </li>
                <li>
                    <a href="./lynq-story"><strong>LYNQ</strong> Story</a>
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

                        <strong>LYNQ</strong> Studio

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
                <a href="./lynq-story.html"><strong>LYNQ</strong> Story</a>
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
            <img class="lynq-logo-color" src="./assets/icons/lynq-favicon-logo.svg" alt="LYNQ Studio Logo" />
        </div>
    </div>
        `
    }
}



customElements.define("special-flow-header", SpecialFlowHeader)
