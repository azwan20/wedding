import Navbar from "./navbar";

export default function Thankss() {
    const nama = [
        "Bapak Jamaluddin",
        "Ibu Maimunah ",
        "Dr. Fatahillah",
        "Ibu Hajar",
        "Keluarga Ambongi",
        "Kedua mempelai",
    ]
    return (
        <>
            <div className="px-3">
                <section className="mb-5 px-5 fw-bolder">
                    <p className="fw-bolder lh-lg">Merupakan suatu harapan dan kehormatan atas kehadiran anda untuk merestui hubungan kami.</p>
                </section>
                <section>
                    <h3 className="mb-3">Turut Mengundang</h3>
                    <span className="my-4">
                    {nama.map((item, index) => (
                        <span key={item} className="my-0" style={{color: '#581D35'}}>
                            <p className="my-0">{item}</p>
                        </span>
                    ))}
                    </span>
                    <h5 className="mt-5 fw-bold">Wassalamualaikum waragmatullahi Wabarakatu</h5>
                </section>
            </div>
        </>
    )
}