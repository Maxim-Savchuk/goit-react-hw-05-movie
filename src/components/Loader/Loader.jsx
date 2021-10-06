import Loader from "react-loader-spinner";

import { LoaderContainer } from "./Loader.styled";

export const LoaderSpinner = () => {
    return (
        <LoaderContainer>
            <Loader
                type="ThreeDots"
                color="#e02141"
                height={80}
                width={100}
                timeout={3000}
            />
        </LoaderContainer>
    )
}