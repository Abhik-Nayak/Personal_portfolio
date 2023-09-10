import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";

function Navbar1() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 className="nav-logo nav-name">An</h3>

			<nav ref={navRef}>
				<div className="nav-logo">
					<p className="nav-name">An</p>
					<span>.</span>
				</div>
				<a href="/" className="nav-link">Home</a>
				<a href="/about" className="nav-link">About</a>
				<a href="/project" className="nav-link">Projects</a>
				<a href="/contact" className="nav-link">Contact</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar1;