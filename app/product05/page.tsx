import React from "react";
import Header from "../_components/header";
import Footer from "../_components/footer";

export default function Product05() {
    return (
        <>
            <Header />

            <main>
                <div className="productItemContainer">
                    <div className="itemContainer">
                        <div className="itemText">
                            <section id="itemEntry01" className="itemEntry">
                                <div><img className="itemPhoto" src="images/shoes05.jpeg" alt="Shoes05 photo" />
                                </div>
                                <div>

                                    <h2>Rose - Women's Latin Dance Shoes</h2>
                                    <h3>$150 CAD</h3>

                                    <p>Rose women's Latin dance shoes offer a perfect blend of style and functionality, designed to meet the demands of Latin dance styles. With their sleek design and elegant finish, these shoes add a touch of sophistication to any performance while ensuring maximum comfort.</p>

                                    <p>The shoes feature an adjustable fit and a stable heel, providing the support needed for precise footwork and quick movements. Their lightweight construction allows dancers to glide effortlessly across the floor, enhancing both speed and control.</p>

                                    <p>Ideal for Latin dances like salsa, cha-cha, or samba, Rose shoes are both practical and stylish. They offer the perfect balance of durability and elegance, making them an excellent choice for dancers who want to look and feel their best on the dance floor.</p>
                                </div>
                            </section>
                            <a className="goBack" href="./">Back to Catalog</a>
                        </div>
                    </div>



                </div>
            </main>
            <Footer />
        </>
    );
}
