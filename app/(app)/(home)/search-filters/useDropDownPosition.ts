import { RefObject } from "react"


const useDropDownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropDownPosition = () => {
    if (!ref.current ) return {top: 0, left: 0}
    const rect = ref.current.getBoundingClientRect()
    const dropdownWidth = 240

    // calculate the initial position
    let left  = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // check of dropdown would go off the right edge of the view port
    if (left + dropdownWidth > window.innerWidth) {
        // aligh to right eded of button instead
        left = rect.right + window.scrollX - dropdownWidth

        // if still of sccreen alight to the right edge of the viewport with some padding-
        if (left < 0) {
            left = window.innerWidth - dropdownWidth - 16
        }
    }

    if (left < 0 ) {
        left = 16
    }

    return {top, left}
}

  return  {getDropDownPosition}
}

export default useDropDownPosition