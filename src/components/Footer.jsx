import { resourcesLinks } from "../constants"
import { platformLinks } from "../constants"
import { communityLinks } from "../constants"

const Footer = () => {
  return (
    <div className="footer w-full min-h-[40vh] flex items-center">
        <div className="footerContainer w-full sm:max-w-4xl flex flex-col sm:flex-row items-center gap-10 sm:justify-between sm:mx-auto py-8">
            <div className="resources flex flex-col gap-2">
                <h3 className="text-2xl font-medium">Resources</h3>
                {resourcesLinks.map((elem, index) => {
                return <a key={index} href="#" className="text-md text-neutral-600">{elem.text}</a>
                })}
            </div>
            <div className="platform flex flex-col gap-2">
                <h3 className="text-2xl font-medium">Platforms</h3>
                {platformLinks.map((elem, index) => {
                return <a key={index} href="#" className="text-md text-neutral-600">{elem.text}</a>
                })}
            </div>
            <div className="community flex flex-col gap-2">
                <h3 className="text-2xl font-medium">Community</h3>
                {communityLinks.map((elem, index) => {
                return <a key={index} href="#" className="text-md text-neutral-600">{elem.text}</a>
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer