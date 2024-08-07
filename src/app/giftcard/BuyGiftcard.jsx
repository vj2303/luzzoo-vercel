"use client"
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import GiftCardModal from "./GiftCardModal";
const BuyGiftcard = () => {
    const [amount, setAmount] = useState(null)
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        defaultValues: amount !== null ? { amount: amount } : undefined
    })
    const [currentForm, setCurrentForm] = useState("senderDetails")
    const [info, setInfo] = useState({})
    const modalRef = useRef(null)


    const handleSubmitFirstForm = (data) => {
        setCurrentForm("recepientDetails")
        setInfo({ ...info, ...data })
    }

    const handleOpenModal = (data) => {
        setInfo({ ...info, ...data })
        modalRef.current.showModal()

    }

    const handleEnterDetailsClick = () => {
        setCurrentForm("senderDetails")
    }
    const handlePaymentClick = () => {
        if (info.name && info.number && info.amount && !errors.name && !errors.number && !errors.amount) {
            setCurrentForm("recepientDetails")
            console.log("running");
        }
    }

    const handleCloseModal = () =>{
        setCurrentForm("senderDetails")
        setAmount(null)
        reset()
        modalRef.current.close()
    }

    useEffect(() => {
        reset({ amount: amount })
    }, [amount])

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    //   }, [currentForm]);

    return (
        <div className="sm:px-[120px] px-[10px] py-[60px]">
            <h1 className="text-[28px] font-medium leading-[35px] text-[#404040]">Buy Gift Card</h1>
            <p className="text-[#051036] leading-[24px] font-medium text-[16px] mt-[10px] ">The gift card is valid for 1 year and can be used to pay at 700+ salons, spas & dermatologists across Mumbai, Pune & Bengaluru with the LUZO app.</p>
            <div className="flex flex-row gap-[20px] cursor-pointer py-[20px]">
                <h1 className={`text-[20px] ${currentForm === "senderDetails" ? "text-[#60A5FA]" : "text-black"} leading-[24px]`} onClick={handleEnterDetailsClick}>Enter Details</h1>
                <h1 className={`text-[20px] ${currentForm === "recepientDetails" ? "text-[#60A5FA]" : "text-black"} leading-[24px]`} onClick={handlePaymentClick}>Payment</h1>
            </div>
            <hr className="border border-b border-[#60A5FA] w-full " />

            {currentForm === "senderDetails" ? <form onSubmit={handleSubmit(handleSubmitFirstForm)} className="flex flex-col sm:flex-row sm:gap-[90px] justify-between px-[20px] sm:px-[50px]">
                <div className="flex flex-col w-full">
                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Your Name</h1>
                        <input type="text" placeholder="Enter Name" className="border   px-[10px] rounded-[10px] py-[10px]" {...register("name", { required: "Please enter your name" })} />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Your Number</h1>
                        <input type="text" min="0" placeholder="Enter Number" className="border  px-[10px] rounded-[10px] py-[10px]" {...register("number", { required: "Please enter your number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                        {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Gift Card Amount</h1>
                        <input type="number" placeholder="Enter amount" className="border  px-[10px] rounded-[10px] py-[10px]" {...register("amount", { required: "Value between 250 and 25000", min: { value: 250, message: "Value between 250 and 25000" }, max: { value: 25000, message: "Value between 250 and 25000" } })} />
                        {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
                        <div className="mt-[10px] flex cursor-pointer flex-row gap-[10px]">
                            <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(1000)} type="button">₹1000</p>
                            <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(2000)} type="button">₹2000</p>
                            <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(5000)} type="button">₹5000</p>
                            <p className="border text-center font-normal text-[16px]  leading-[24px] rounded-[10px] py-[6px] w-[66px]" onClick={() => setAmount(10000)} type="button">₹10000</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1 className="font-medium my-[20px]">Message for your loved one! (Optional)</h1>
                        <textarea placeholder="Prompt for yourself" className="border w-[295px]  sm:w-[442px] px-[10px] rounded-[10px] pb-[80px]" {...register("description")} />
                    </div>

                    <button className="border mt-[10px]  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]" type="submit">Add receiver&apos;s details</button>
                </div>

            </form> :
                <form onSubmit={handleSubmit(handleOpenModal)} className="flex flex-col justify-between w-full sm:max-w-[50%] px-[20px] sm:px-[50px]">

                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Receiver&apos;s Name</h1>
                        <input type="text" placeholder="Receiver&apos;s Name" className="border  px-[10px] rounded-[10px] py-[10px]" {...register("receiverName", { required: "Please enter receiver's name" })} />
                        {errors.receiverName && <span className="text-red-500">{errors.receiverName.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Receiver&apos;s Contact Number</h1>
                        <input type="number" min="0" placeholder="Enter Receiver&apos;s Number" className="border  px-[10px] rounded-[10px] py-[10px]" {...register("receiverPhoneNumber", { required: "Please enter receiver's number", minLength: { value: 10, message: "Enter a valid number" }, maxLength: { value: 11, message: "Enter a valid number" } })} />
                        {errors.receiverPhoneNumber && <span className="text-red-500">{errors.receiverPhoneNumber.message}</span>}
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-medium my-[20px]">Receiver&apos;s Email (Optional)</h1>
                        <input type="text" min="0" placeholder="Enter Receiver&apos;s Email" className="border px-[10px] rounded-[10px] py-[10px]" {...register("receiverEmail", { validate: (val) => { return !val ? true : val.includes("@") ? true : "Enter a valid Email" } })} />
                        {errors.receiverEmail && <span className="text-red-500">{errors.receiverEmail.message}</span>}
                    </div>



                    <button className="border mt-[12px] self-start  bg-[#42a5f5] text-[white] rounded-[10px] px-[20px] py-[10px]" type="submit">Continue to purchase gift card</button>


                </form>
            }

            <dialog ref={modalRef} className="backdrop:backdrop-blur-sm rounded-2xl shadow-2xl ">
                <GiftCardModal intialInfo={info} handleCloseModal={handleCloseModal} />
            </dialog>

        </div>
    )
}

export default BuyGiftcard