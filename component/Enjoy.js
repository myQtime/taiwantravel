import ImgCard from './ImgCard.js'
import CardSwiper3 from './cardSwiper3.js'

export default function home() {
    return (
        <>
            <div className="pb-5">
                {' '}
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-6 cursor-default pt-5">
                            <h2 className="fs-1 color-text-title mb-4">Enjoy</h2>
                            <h1 className="fs-1 color-text mb-4">享受在地獨特風味</h1>
                        </div>

                        <div className="col-6 pt-5">
                            <p className="fs-5 color-text mb-3 cursor-default">
                                充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。{' '}
                            </p>
                            <div className="d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary rounded-pill bottonEffect px-4"
                                >
                                    更多台灣美食
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pb-5">
                    <CardSwiper3 />
                </div>
            </div>
        </>
    )
}
