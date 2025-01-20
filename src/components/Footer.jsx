import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More Ways to shop: {' '}
                        <span className="text-blue underline cursor-pointer">Find an Apple Store {' '}</span>{' '}or {' '}
                        <span className="text-blue underline cursor-pointer">other retailer{' '}</span>near you
                    </p>
                    <p className="text-gray font-semibold text-xs">Or call 08123456789</p>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px]" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="text-gray font-semibold text-xs">Copyrights @ 2024 Apple Inc. All rights reserved.</p>
                    <div className="flex cursor-pointer">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="font-semibold text-gray text-xs">
                                {link}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer