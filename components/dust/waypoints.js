import { InView } from 'react-intersection-observer';

export default function Waypoints({target, children}) {
    return (
      <>
        <InView
          as="div"
          onChange={(inView, entry) => {
            let el = document.getElementById(target).classList;
            if(inView) {
                el.add("text-indigo-600");
            } else {
                el.remove("text-indigo-600");
            }
          }}
        >
          {children}
        </InView>
      </>
    );
}