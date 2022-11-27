import Link from "next/link";

export default function Logo() {
    return (
      <>
        <Link href="/">
          <span className="group text-xl font-black leading-none text-base-900">
            <span>Jstn</span>
            <span className="group-hover:text-indigo-500 transition ease-in-out delay-100">LT</span>
            <span className="text-indigo-600">.</span>
          </span>
        </Link>
      </>
    );
}