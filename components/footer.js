import Link from "next/link";
import { FaCode, FaHeart, FaGithub, FaFacebook, FaYoutube, FaInstagram, FaNpm } from "react-icons/fa"

export default function Footer() {
  return (
    <>
      <div className="px-6">
        <div className="border-b border-gray-200"></div>
      </div>
      <footer className="footer p-10">
        <div>
          <p>
            <FaCode className="fill-indigo-500 hover:scale-110 transition delay-75 inline-block" />
            {` with `}
            <FaHeart className="fill-error hover:scale-110 transition delay-75 inline-block" />{" "}
            by{" "}
            <Link href="/">
              <span className="text-xl font-black leading-none text-base-900">
                <span>JstnLT</span>
                <span className="text-indigo-600">.</span>
              </span>
            </Link>
            <br />
            &copy; {new Date().getFullYear()} Copyright JstnLT.
          </p>
        </div>
        <div>
          <span className="footer-title ml-2">Social</span>
          <div className="social-network flex md:space-x-6 space-x-4 text-2xl text-gray-500 ml-2">
            <a href="/github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:fill-black transition delay-150" />
            </a>
            <a href="/facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:fill-brand-fb transition delay-150" />
            </a>
            <a href="/youtube" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:fill-red-500 transition delay-150" />
            </a>
            <a href="/instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:fill-[url(#instagram-gradient)] transition delay-150" />
            </a>
            <a href="/npm" target="_blank" rel="noopener noreferrer">
              <FaNpm className="hover:fill-red-500 transition delay-150" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
