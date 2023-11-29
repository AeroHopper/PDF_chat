import Script from 'next/script'

export default function MainHeader() {

	return (
		<div className="flex w-full flex-col items-center justify-between md:flex-row">
			<div className="flex w-full flex-row justify-between md:w-1/4">
				<a href="/">
					<svg width="126" height="24" viewBox="0 0 126 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 15.5469V12.2969H8.67188C10.1302 12.2969 11.2552 11.9271 12.0469 11.1875C12.849 10.4375 13.25 9.38542 13.25 8.03125V8C13.25 6.63542 12.849 5.58333 12.0469 4.84375C11.2552 4.10417 10.1302 3.73438 8.67188 3.73438H3V0.453125H9.67188C11.1927 0.453125 12.526 0.765625 13.6719 1.39062C14.8281 2.01562 15.7292 2.89583 16.375 4.03125C17.0208 5.15625 17.3438 6.47396 17.3438 7.98438V8.01562C17.3438 9.51562 17.0208 10.8333 16.375 11.9688C15.7292 13.0938 14.8281 13.974 13.6719 14.6094C12.526 15.2344 11.1927 15.5469 9.67188 15.5469H3ZM0.984375 23V0.453125H5.01562V23H0.984375ZM20.2969 23V0.453125H28.5312C30.7812 0.453125 32.7031 0.890625 34.2969 1.76562C35.8906 2.64062 37.1146 3.91146 37.9688 5.57812C38.8229 7.24479 39.25 9.26562 39.25 11.6406V11.6719C39.25 14.0469 38.8229 16.0833 37.9688 17.7812C37.125 19.4688 35.901 20.7604 34.2969 21.6562C32.7031 22.5521 30.7812 23 28.5312 23H20.2969ZM24.3281 19.6094H28.1094C29.6302 19.6094 30.9115 19.3073 31.9531 18.7031C32.9948 18.0885 33.7865 17.1979 34.3281 16.0312C34.8698 14.8542 35.1406 13.4062 35.1406 11.6875V11.6562C35.1406 9.97917 34.8646 8.55729 34.3125 7.39062C33.7708 6.22396 32.974 5.34375 31.9219 4.75C30.8802 4.14583 29.6094 3.84375 28.1094 3.84375H24.3281V19.6094ZM42.4531 23V0.453125H56.8281V3.84375H46.4844V10.5156H55.9375V13.7969H46.4844V23H42.4531ZM69.5781 23.3906C67.4219 23.3906 65.5469 22.9167 63.9531 21.9688C62.3698 21.0208 61.1458 19.6771 60.2812 17.9375C59.4271 16.1875 59 14.1146 59 11.7188V11.7031C59 9.30729 59.4323 7.23958 60.2969 5.5C61.1615 3.76042 62.3854 2.42188 63.9688 1.48438C65.5521 0.536458 67.4219 0.0625 69.5781 0.0625C71.3073 0.0625 72.8542 0.395833 74.2188 1.0625C75.5938 1.72917 76.7135 2.65104 77.5781 3.82812C78.4427 5.00521 78.974 6.35938 79.1719 7.89062L79.1875 8.04688H75.2344L75.1562 7.75C74.9375 6.88542 74.5781 6.14062 74.0781 5.51562C73.5781 4.89062 72.9479 4.40625 72.1875 4.0625C71.4271 3.71875 70.5573 3.54688 69.5781 3.54688C68.2656 3.54688 67.125 3.88021 66.1562 4.54688C65.1875 5.21354 64.4375 6.15625 63.9062 7.375C63.375 8.58333 63.1094 10.026 63.1094 11.7031V11.7188C63.1094 13.3854 63.375 14.8333 63.9062 16.0625C64.4375 17.2812 65.1875 18.2292 66.1562 18.9062C67.1354 19.5729 68.276 19.9062 69.5781 19.9062C70.5365 19.9062 71.3906 19.7396 72.1406 19.4062C72.901 19.0625 73.5417 18.5677 74.0625 17.9219C74.5833 17.276 74.9635 16.4896 75.2031 15.5625L75.25 15.4062H79.2031L79.1719 15.5781C78.9844 17.1094 78.4583 18.4635 77.5938 19.6406C76.7292 20.8177 75.6094 21.7396 74.2344 22.4062C72.8594 23.0625 71.3073 23.3906 69.5781 23.3906ZM81.9844 23V0.453125H85.875V9.21875H85.9531C86.3906 8.21875 87.0417 7.44792 87.9062 6.90625C88.7812 6.36458 89.8333 6.09375 91.0625 6.09375C92.2604 6.09375 93.2969 6.36979 94.1719 6.92188C95.0469 7.46354 95.724 8.22917 96.2031 9.21875C96.6823 10.1979 96.9219 11.3542 96.9219 12.6875V23H93.0312V13.4531C93.0312 12.1823 92.724 11.1875 92.1094 10.4688C91.4948 9.73958 90.6302 9.375 89.5156 9.375C88.7865 9.375 88.1458 9.55208 87.5938 9.90625C87.0521 10.25 86.6302 10.7292 86.3281 11.3438C86.026 11.9479 85.875 12.651 85.875 13.4531V23H81.9844ZM104.953 23.2812C103.859 23.2812 102.891 23.0729 102.047 22.6562C101.214 22.2292 100.562 21.6406 100.094 20.8906C99.6354 20.1302 99.4062 19.2604 99.4062 18.2812V18.25C99.4062 17.2604 99.651 16.4167 100.141 15.7188C100.641 15.0104 101.359 14.4531 102.297 14.0469C103.234 13.6302 104.37 13.3802 105.703 13.2969L112.031 12.9062V15.4844L106.25 15.8438C105.292 15.9062 104.557 16.1354 104.047 16.5312C103.536 16.9271 103.281 17.4531 103.281 18.1094V18.125C103.281 18.8021 103.536 19.3385 104.047 19.7344C104.568 20.1198 105.255 20.3125 106.109 20.3125C106.859 20.3125 107.526 20.1615 108.109 19.8594C108.703 19.5573 109.172 19.1458 109.516 18.625C109.859 18.1042 110.031 17.5156 110.031 16.8594V11.8906C110.031 11.0573 109.766 10.401 109.234 9.92188C108.714 9.43229 107.958 9.1875 106.969 9.1875C106.052 9.1875 105.318 9.38542 104.766 9.78125C104.214 10.1667 103.87 10.6667 103.734 11.2812L103.703 11.4219H100.109L100.125 11.2344C100.208 10.2552 100.536 9.38021 101.109 8.60938C101.682 7.82812 102.474 7.21354 103.484 6.76562C104.505 6.31771 105.714 6.09375 107.109 6.09375C108.495 6.09375 109.693 6.32292 110.703 6.78125C111.724 7.23958 112.51 7.88021 113.062 8.70312C113.625 9.52604 113.906 10.4948 113.906 11.6094V23H110.031V20.4531H109.938C109.625 21.026 109.219 21.526 108.719 21.9531C108.219 22.3802 107.646 22.7083 107 22.9375C106.365 23.1667 105.682 23.2812 104.953 23.2812ZM123.203 23.3281C121.484 23.3281 120.203 22.9531 119.359 22.2031C118.526 21.4531 118.109 20.224 118.109 18.5156V9.4375H115.766V6.4375H118.109V2.23438H122.062V6.4375H125.141V9.4375H122.062V18.2031C122.062 19.0052 122.24 19.5625 122.594 19.875C122.958 20.1771 123.49 20.3281 124.188 20.3281C124.385 20.3281 124.557 20.3229 124.703 20.3125C124.859 20.2917 125.005 20.276 125.141 20.2656V23.1875C124.911 23.2188 124.63 23.25 124.297 23.2812C123.974 23.3125 123.609 23.3281 123.203 23.3281Z" fill="black" />
					</svg>
				</a>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					id="menu-button"
					className="block h-6 w-6 cursor-pointer md:hidden"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</div>

			<div
				className="mt-4 w-full rounded-t-md bg-white md:mt-0 md:w-auto md:bg-neutral-100"
			>
				<nav id="nav" className="hidden w-full px-4 py-4 md:flex">
					<ul
						className="flex flex-col space-y-1 text-base font-medium text-gray-900 md:flex-row md:space-x-8 md:space-y-0"
					>
						<li><a className="hover:text-gray-500" href="/#faqs">FAQs</a></li>
						<li><a className="hover:text-gray-500" href="/#benefits">Benefits</a></li>
					</ul>
				</nav>
			</div>
			<div
				id="buttons"
				className="hidden w-full flex-col justify-end space-y-2 space-x-0 rounded-b-md bg-white px-3 pb-4 md:flex md:w-1/4 md:flex-row md:space-y-0 md:space-x-4 md:bg-neutral-100 md:px-0 md:pb-0"
			>
				<a
					className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-base font-medium hover:text-gray-500 md:w-auto"
					href="/chat"
				>
					Chat NOW!
				</a>
			</div>
			<Script id="show-banner" strategy="afterInteractive">
				{`const button = document.querySelector("#menu-button");
      const buttons = document.querySelector("#buttons");
      const nav = document.querySelector("#nav");

      button.addEventListener("click", () => {
        buttons.classList.toggle("hidden");
        nav.classList.toggle("hidden");
      })`}
			</Script>

		</div>

	);
}
