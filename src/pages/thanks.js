import Navbar from "./navbar";

export default function Thanks() {
    return (
        <>
            <div className="gift my-5">
                <section>
                    <h4 className="fs-1" style={{fontWeight: '900'}}>Terima kasih</h4>
                    <p className="px-5">Terima kasih atas partisipasi kehadiran dan hadiah anda</p>
                    <button style={{margin: '0 auto'}}>Kirim Hadiah</button>
                </section>
                <section className="inputUcapan" style={{height: 'fitContent', width: '65%'}}>
                    <div className="my-auto">
                        <section className="mb-4 d-flex justify-content-center align-items-center">
                            BRI
                            <span>
                                <p style={{ fontSize: '13px' }}>556677864</p>
                                <p style={{ fontSize: '10px' }}>Hilmy Nor Fauzy</p>
                            </span>
                        </section>
                        <section className="mb-2 d-flex justify-content-center align-items-center">
                            BRI
                            <span>
                                <p style={{ fontSize: '13px' }}>556677864</p>
                                <p style={{ fontSize: '10px' }}>Hilmy Nor Fauzy</p>
                            </span>
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}