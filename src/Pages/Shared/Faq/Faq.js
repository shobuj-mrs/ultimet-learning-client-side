import React from 'react';

const Faq = () => {
	return (
		<section className="dark:bg-gray-300">
			<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
				<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Some Questions</h2>
				<div className="divide-y divide-gray-700">
					<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
						<h3 className="font-semibold md:col-span-5">1. Explain this client side?</h3>
						<p className="md:pl-0 md:col-span-7">As much as you want as many eyeballs on your about page as possible, you won't do business with every single website visitor. That's why you must identify and mention your core customer.Your about page should explain who your business is dedicated to helping. This allows prospects to identify if your service is aligned with their needs.</p>
					</div>
					<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
						<h3 className="font-semibold md:col-span-5"> 2. Our Services?</h3>
						<h className="md:pl-0 md:col-span-7">
							<p> * A mission statement. This describes the purpose of your business as it relates to the industry or market you serve.</p>
							<p>* A vision statement. The future of your business is outlined in this section.
								Your values. Core values help the reader connect with you and your business on a personal level.</p>
							<p>
								* A target market summary. Your site visitors want to know that they're in the right place and that your company can help them.
							</p>
							<p>* A brief company history. In addition to piquing your visitors’ interest, a brief company history can help the press describe your business accurately.</p></h>
					</div>
					<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
						<h3 className="font-semibold md:col-span-5">3. Our Mission ?</h3>
						<p className="md:pl-0 md:col-span-7">There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
					</div>
					<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
						<h3 className="font-semibold md:col-span-5">4. Our Story?</h3>
						<p className="md:pl-0 md:col-span-7">As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the way people shop and buy. Consumers were no longer tolerating interruptive bids for their attention — in fact, they'd gotten really, really good at ignoring them.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq;