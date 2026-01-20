import React from 'react';

const services = [
    {
        title: 'Premium Vehicle Shipping',
        desc: 'Pengiriman aman dan berasuransi untuk mobil mewah, klasik, dan sport ke seluruh kota besar.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6ksRczsQpcAIS0W33CJv8lg1SBzG2x_Ln7UHTOd5zANYQqT8_UiOVExbEZGYoLrZiKn0Isjkp7-V0ZOZv7LGO-j-BxU5a82UWBFrQG7juWt4345THE4IbEgvu94MedkpSp5Z_t806FrZ9O-zPQ14Y76OMmK5csqsTZnapCDZN5_nQnAZyNhzsbiWhFSzXFt31lPTOZ28Quz0wHosqfalOgVB76a3ulgdMviHzWwsHLv9CzWyZYiZEjkd2h1JqAAyoOXWaApAo0A',
        icon: 'workspace_premium'
    },
    {
        title: 'Emergency Evacuation',
        desc: 'Bantuan darurat 24/7 untuk mogok di jalan tol, kecelakaan, atau kondisi darurat lainnya.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsd-OgOuU0A7d2XEmIHefJXfUrqxCGYgSYcgC5p-7cu2xXphVRAeDZmBddtJuRzHEtUfEnSvUNsgN1DMcFF8CKkeWvFXPEgg-e03FlJoqN7SY8OaSwg_6Bt1xgFIh8r2TX9uSqAMQ8Ln7nyf_R_GbHu2uGWDoRMVVlz_bcGNw843SnWxFnMCcFrQCToalEcrxxlbfk189EwQfuQxt3uBbq825fcqANOQoGu6-g8mGHoCxSLxbeCCQ4JsULmWmYXWRrMSO8ZFpqqw',
        icon: 'sos'
    },
    {
        title: 'Motorcycle Towing',
        desc: 'Penanganan khusus untuk Moge (Motor Gede) dengan peralatan strapping yang aman.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkSFgs1DXbiJrSomxaDsuH1EocqfKaPp2NnGRRAgub0-5yFbhaY5OeUt7S5_-GSCeGRID72AaqtZW-A5TlBliWoArSl-MtikoNQdiBXPjU0IxqcppK018Dhmu-qN-3m7DKR_kOMPsUba9xtJR9FeaqIHdnZhY0XYCfZIDLj4dQgxOjAynYhpkWHImORhJP1L1A8o4rqRhEU2VZipMXlqIVjFQO35OQMf7kqevBNpWH8maSTL8UgrMPXHziLWYnmWzbns7jlJMjAQ',
        icon: 'two_wheeler'
    },
    {
        title: 'Heavy Duty Towing',
        desc: 'Derek untuk kendaraan berat seperti Bus, Truk, dan alat berat industri.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKkjJ8GZhu-hKMmM-7GzZwII3VkmEQ0LML9BklTo6NXl2_Eu5bRbMWqyBe0GEEZMvnetj9IgTr2QivbFl1g8tYr_MYvk5ga08gf78qr7FYBFIJ-QOz5TjfoqythDtcAel6jgPwzudovVgy4sSNehBdDlRaMEwDCeu3rsSBFdKvBKD1kBX_OusLpMfQT9-r3MrT-cQRL8lbFStQZl8Io-1hpUzX3x23_QHu-qPh_l8Zqb0x1WMYZPro8lSi9iSiVMNA8IjJa-9yiw',
        icon: 'local_shipping'
    }
];

export default function Services() {
    return (
        <section className="relative w-full bg-[#0F1316] py-32 overflow-hidden">
            <div className="w-full">
                {/* Section Header */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-center text-center">
                    <h2 className="mb-4 text-4xl font-medium leading-tight font-display text-white md:text-5xl tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-xl text-white/60 font-light max-w-xl">
                        Comprehensive mobility solutions tailored for every scenario.
                    </p>
                </div>

                {/* Infinite Carousel */}
                <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                    <div className="flex w-max gap-8 animate-scroll active:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
                        {[...services, ...services, ...services].map((service, index) => (
                            <div
                                key={index}
                                className="group relative min-w-[340px] max-w-[400px] flex-shrink-0 cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-white/5 rounded-lg">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-2xl font-medium text-white group-hover:text-white/80 transition-colors font-display">
                                        {service.title}
                                    </h3>
                                    <p className="text-base leading-relaxed text-white/50">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
