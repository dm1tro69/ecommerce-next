import { AppProps } from "next/app";
import {FC} from 'react'
import '../assets/main.css'
import {Layout} from "../components/common";


// const Noop: FC = ({children}) => <>{children}</>
//
// function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
//     const Layout = Component.Layout ?? Noop
//   return (
//     <Layout>
//             <Component {...pageProps} />
//     </Layout>
//   )
// }
//
// export default MyApp;


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp;
