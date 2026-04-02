export default function Page(){
    return(
     <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center text-4xl mb-5">Welcome to nudgebot!</h1>
        <h1 className="mb-4 text-center" >We just need a bit more information in order to be of assistance</h1>
        <form className="rounded-xl p-3 bg-[#3080ff]" action="" method="post">
            <div className="mb-2 flex flex-col form-input">
                <label className="text-center mb-1" htmlFor="phone-number">Enter 10 digit Phone number:</label>
                <input className="bg-white rounded-md" type="number" id="phone-number" minLength={10} maxLength={10} required={true}></input>
            </div>
            <div className="mb-2.5 flex flex-col form-input">
                <label className="text-center mb-1" htmlFor="first-name">Enter your first name:</label>
                <input className="bg-white rounded-md" type="text" id="first-name"required={true}></input>
            </div>
            <div className="flex justify-center">
                <input className="bg-white p-1 rounded-md" type="submit" value="Submit" />
            </div>
        </form>
    </div> 
    )
}