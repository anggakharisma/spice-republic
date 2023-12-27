import { ReactNode, forwardRef } from "react";

/* eslint-disable react/display-name */
const Modal = forwardRef<HTMLInputElement, { children: ReactNode, showModal: boolean }>(({ children, showModal }: { children: ReactNode, showModal: boolean }, ref) => {
	return showModal && <div className="dark:bg-black dark:bg-opacity-80 fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center align-middle bg-black z-50">
		<div ref={ref} className="bg-white p-4 mx-24 rounded-md relative">
			{children}
			<p className="text-2xl absolute top-2 right-4 text-black">x</p>
		</div>
	</div>
});

export default Modal;
