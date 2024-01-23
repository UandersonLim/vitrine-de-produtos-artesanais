import { Footer } from "./style"

export const Component_Footer = (props) => {
    return(
        <Footer>
            <div>
                <img src={props.gif}/>
            </div>
            <p>ArteMania Artesanato | Sua Loja Online de Artesanato</p>
        </Footer>
    )
}