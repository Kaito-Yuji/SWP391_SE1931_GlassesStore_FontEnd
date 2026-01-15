import '../css/App.css';

function App() {
    return (
        <div className="page">
            <header className="header">
                <div className="brand">MOSCOT</div>
                <nav className="nav">
                    {['Eyeglasses', 'Sunglasses', 'Collections', 'Story', 'Shops'].map((item) => (
                        <a key={item} className="nav-link" href="#">{item}</a>
                    ))}
                </nav>
                <div className="actions">
                    <button className="icon-btn flag" aria-label="Switch to Vietnam">
                        <VietnamFlagIcon />
                    </button>
                    <button className="icon-btn" aria-label="Choose currency">
                        VND ₫
                    </button>
                    <button className="icon-btn" aria-label="User profile">
                        <UserIcon />
                    </button>
                    <button className="icon-btn" aria-label="Search products">
                        <SearchIcon />
                    </button>
                    <button className="icon-btn" aria-label="Shopping cart">
                        <CartIcon />
                    </button>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <p className="eyebrow">NEW YEAR / NEW LOOK</p>
                        <h1>Vintage-inspired eyewear for bold personalities.</h1>
                        <p className="lede">
                            Discover handcrafted frames with timeless silhouettes and modern comfort. Choose your
                            perfect pair and get free adjustments at any shop.
                        </p>
                        <div className="hero-actions">
                            <a className="primary" href="#">Shop Eyeglasses</a>
                            <a className="ghost" href="#">Shop Sunglasses</a>
                        </div>
                        <div className="chips">
                            <span>Premium acetate</span>
                            <span>Optician fit</span>
                            <span>2-year warranty</span>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="glass-card">
                            <div className="glass-photo" />
                            <div className="glass-info">
                                <p className="model">Lemtosh Classic</p>
                                <p className="price">from 4.500.000₫</p>
                                <div className="color-dots">
                                    <span className="dot amber" />
                                    <span className="dot smoke" />
                                    <span className="dot clear" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid">
                    <article className="tile">
                        <p className="eyebrow">Editor's pick</p>
                        <h3>Round frames that frame every face.</h3>
                        <p className="muted">Balanced proportions, lightweight temples, ready for prescription lenses.</p>
                        <a href="#" className="link">Explore the Lemtosh line →</a>
                    </article>
                    <article className="tile dark">
                        <p className="eyebrow">Sun ready</p>
                        <h3>Polarized lenses with vintage hues.</h3>
                        <p className="muted">Cut the glare, keep the vibe. Custom tints on demand.</p>
                        <a href="#" className="link">See sunglasses →</a>
                    </article>
                    <article className="tile">
                        <p className="eyebrow">In-store service</p>
                        <h3>Book a fit and tune session.</h3>
                        <p className="muted">Find your nearest shop for adjustments, cleanings, and fittings.</p>
                        <a href="#" className="link">Find a shop →</a>
                    </article>
                </section>
            </main>
        </div>
    );
}

function VietnamFlagIcon() {
    return (
        <svg viewBox="0 0 24 16" className="flag-icon" aria-hidden="true" focusable="false">
            <rect width="24" height="16" rx="2.5" fill="#d81e05" />
            <path
                d="M12 3l1.472 4.527h4.758l-3.85 2.795 1.472 4.527L12 12.055l-3.852 2.794 1.474-4.527-3.852-2.795h4.758z"
                fill="#ffda44"
            />
        </svg>
    );
}

function SearchIcon() {
    return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function UserIcon() {
    return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
            <path
                d="M5 21c1.5-3 4-5 7-5s5.5 2 7 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CartIcon() {
    return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
            <circle cx="9" cy="20" r="1.5" fill="currentColor" />
            <circle cx="17" cy="20" r="1.5" fill="currentColor" />
            <path
                d="M4 4h2l2 12h9l2-9H7.5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default App;
