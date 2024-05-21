import Navbar from "./navbar";

export default function Gift() {
    return (
        <>
            <div className="gift">
                <section>
                    <h4 className="mb-5">Do'a Untuk Pengantin</h4>
                    <p className="fw-bolder">Baarakallahu laka wa baarakaa alaika wa jama'a bainakumaa fii khoir</p>
                    <p className="my-3">Artinya: mudah-mudahan Allah memberkahimu, baik dalam suka maupun duka dan selalu mengumpulkan kamu berdua pada kebaikan</p>
                    <button style={{margin: '0 auto'}}>Kirim Ucapan</button>
                </section>
                <section className="inputUcapan">
                    <div>
                        <section className="mb-2">
                            <div className="d-flex justify-content-between">
                                <p>Azwan :</p>
                                <button>Hadir</button>
                            </div>
                            <span>
                                <p style={{ fontSize: '13px' }}>Selamat, smoga Sakinah mawaddatan Marahmah</p>
                                <p style={{ fontSize: '10px', color: '#581D35' }}>Mei, 27 2024 10:19</p>
                            </span>
                        </section>
                        <section>
                            <div className="d-flex justify-content-between">
                                <p>Azwan :</p>
                                <button>Hadir</button>
                            </div>
                            <span>
                                <p style={{ fontSize: '13px' }}>Selamat, smoga Sakinah mawaddatan Marahmah</p>
                                <p style={{ fontSize: '10px', color: '#581D35' }}>Mei, 27 2024 10:19</p>
                            </span>
                        </section>
                    </div>
                    <section className="inputan d-flex" style={{ flexDirection: 'column' }}>
                        <h5 style={{ margin: 'auto' }}>Form Ucapan</h5>
                        <input type="text" placeholder="Nama tamu" />
                        <select>
                            <option value="">Kehadiran</option>
                            <option value="Hadir">Hadir</option>
                            <option value="Tidak Hadir">Tidak Hadir</option>
                        </select>
                        <textarea placeholder="Komentar / ucapan"></textarea>
                    </section>
                </section>
            </div>
        </>
    )
}