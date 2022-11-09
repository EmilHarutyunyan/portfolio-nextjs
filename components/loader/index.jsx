// Style
import { preloader, container, loader} from "../../styles/Loader.module.scss";

export default function Loader() {
  return (
    <div className={preloader}>
        <div className={container}>
            <div className={loader}></div>
        </div>
    </div>
  )
}
