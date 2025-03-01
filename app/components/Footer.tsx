const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Subscribe, Get 15% Off</h3>
                    <p className="mb-4">Sign up for exclusive offers and updates.</p>
                    <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-md bg-gray-800 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Victor Awe</h3>
                    <ul>
                        <li>Collection</li>
                        <li>Privacy Policy</li>
                        <li>Support System</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
                    <ul>
                        <li>Orders & Shipping</li>
                        <li>Returns & Refunds</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; 2025 Victor Awe. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;