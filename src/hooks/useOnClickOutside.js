import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // console.log("event.target", event.target)
            if(!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler();
        };
        
        document.addEventListener("mousedown", listener); //마우스클릭시핸들러함수동작
        document.addEventListener("touchstart", listener); //손으로터치시
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      }
    }, [ref, handler])
    
}