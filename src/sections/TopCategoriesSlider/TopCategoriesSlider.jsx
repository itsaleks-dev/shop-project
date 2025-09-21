import React, { useRef, useEffect } from 'react';
import shampooImg from "../../assets/images/newsha.jpg"

import './TopCategoriesSlider.scss';

const CategoriesSlider = () => {
    const rootRef = useRef(null);
    const viewportRef = useRef(null);
    const trackRef = useRef(null);
    const firstCardRef = useRef(null);

    const categories = [
        { title: "Шампуні", image: shampooImg },
        { title: "Кондиціонери", image: shampooImg },
        { title: "Стайлінг", image: shampooImg },
        { title: "Travel size", image: shampooImg },
        { title: "Маски", image: shampooImg },
        { title: "Олія", image: shampooImg },
        { title: "Термозахист", image: shampooImg },
        { title: "Додатковий догляд", image: shampooImg },
    ];

    useEffect(() => {
        const root = rootRef.current;
        const viewport = viewportRef.current;
        const track = trackRef.current;
        const firstCard = firstCardRef.current;

        if (!root || !viewport || !track || !firstCard) return;

        function getGapPX() {
            const st = getComputedStyle(track);
            const raw = st.gap ?? st.columnGap ?? "0px";
            return Number.parseFloat(String(raw)) || 0;
        }

        function cardStep() {
            const w = firstCard.getBoundingClientRect().width;
            return Math.round(w + getGapPX());
        }

        function scrollByStep(dir) {
            viewport.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
        }

        function handleKey(e) {
            if (e.key === "ArrowLeft") scrollByStep(-1);
            if (e.key === "ArrowRight") scrollByStep(1);
        }

        root.addEventListener("keydown", handleKey);
        root.tabIndex = 0;

        return () => {
            root.removeEventListener("keydown", handleKey);
        };
    }, []);

    return (
        <section className='container container-categories' ref={rootRef}>
            <div className='content content-categories'>
                <div className='categories-inner'>
                    <span className='categories-inner__title'>Популярні категорії</span>
                </div>

                <div className='categories-slider'>
                    <div className='categories-slider__viewport' ref={viewportRef}>
                        <div className='categories-slider__track' ref={trackRef}>
                            {categories.map((item, i) => (
                                <div
                                    className='category'
                                    key={i}
                                    ref={i === 0 ? firstCardRef : null}
                                >
                                    <a href='#' className='category__link'>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className='category__image'
                                        />
                                    </a>
                                    <h3 className='category__title'>{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSlider;
