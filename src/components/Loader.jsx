import { Html } from "@react-three/drei"
import { ThreeDots } from "react-loader-spinner"

const Loader = () => {
    return (
        <Html>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex justify-center items-center">
                <div className="justify-center items-center h-[10vw] w-[10vw]">
                    <ThreeDots
                        height="100"
                        width="100"
                        radius="10"
                        color="gray"
                        ariaLabel="loading"
                        wrapperClass

                    />
                </div>
            </div>
        </Html>
    )
}

export default Loader