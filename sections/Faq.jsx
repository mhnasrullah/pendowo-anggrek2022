import { useContext } from "react";
import GroupHeading from "../components/GroupHeading";
import { DataContext } from "../pages";

export default function Faq() {

    const {headingFaq,subHeadingFaq} = useContext(DataContext);
  return (
    <section className='mt-20 lg:mt-44 bg-white'>
        <div className="container mx-auto">
            <GroupHeading
            direction="center"
            sub={subHeadingFaq}
            heading={headingFaq}/>
        </div>
    </section>
  )
}
