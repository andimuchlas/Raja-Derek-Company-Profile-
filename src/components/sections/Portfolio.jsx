import React from 'react';
import { Verified, Cross, Truck, Plane, Lock, Clock } from 'lucide-react';

const portfolioItems = [
    {
        title: 'Ferrari 488 Spider',
        location: 'Jakarta - Safe Transport',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWAf6PimmWVLvPFKsikrhJzVn7rtt7olQTzyy6Bqmeu8Z55hw4gDglsTI2d8RAKQBExRE4MR2ZqhclWDRpsEc7GGPE9tyz__m3i14Zolw5mg4PN5Mfmb7-FTKM7KtPjR9vofF_16wquo5e1K4j5yUA16_s7_du3cLlgVip1KNBqro408WKaAwUmXqs9F_aJn0DSGxx9HNQswJ4_O4uAty9uDilK-n1hYG5AhBsOyaNFgK4qW6_ZADCSP3fmWn9VN89d3hjeJyvtw',
        icon: <Verified className="h-4 w-4 text-primary" />
    },
    {
        title: 'Porsche 911 Carrera',
        location: 'Bandung - Emergency Recovery',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjS6aLk0XczcCT7ZTPdR5dPlB6n6xEus6sGCYc3M035s4wgKgdK0lr-mduEw1_5cq1NBOm23iirQn6ZKVUe_wxzjaX5C3qqXdMmpxXT4Zn2DowiiYvXblWWRTXv7kEgXYs5iTZKC_YFQefMO2gPlzPelNXgpw2rzvc7wYwulA9uSai9qotlxv-uooC8anwK5ExqrI1mTwbv2WD06_20IPIbddzbuUqrqZNvILnFZ0-YNXTb7XQaZRIQQ1fCgxKE8oAru6INHU9uw',
        icon: <Cross className="h-4 w-4 text-primary" />
    },
    {
        title: 'BMW M5 Competition',
        location: 'Surabaya - Premium Towing',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVhR0wULDd0h_2L3eTJErdF1SEtUqibLZXzw602NMQXrBhXcsdIdzFZUVWQJP9FgKwB-YITNB1srbnmNQnEAkjTtspr58PBuSwr2jig2eyA9e1PthZdsJ6b514uzDWeuAnj_z-tzeV93q9r9R-TeeeCreMeeVI9kBsDIl3zLxtfc40p2byUD3d4-IEYofxwE6KVDrbz2XjI-NflFJeD6R-MilVXvlnfOrE5TcIJskkvFh-u0EieYMbWXx8P8djKR2038-5U1IcwQ',
        icon: <Truck className="h-4 w-4 text-primary" />
    },
    {
        title: 'Mercedes-AMG GT',
        location: 'Bali - Airport Transfer',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Nrd9k4Pw9apgA0kYXWLx8R-Mx_Lz1SlC7tvetKq7eaq5PNKOW0XX5L9yXD9PDGCpnHt-oqy9atePieWwVQ9qdgJ1OBJ1SSVwwgE79AYLgji1tU5cNlIxQmr_R8VMlR_8TKI_OZch5g2PLYCjLHzOJ09HK9KXiLJ8N_M9Mwnwx8UP6u0qYIHtgPTwgCTFpPZogjbHYWbyLtyl3C4VaVaCPl_kLWBCH1HAlMMpCPhBnsQ0Pqzp0ZU-Lo6hrSJbLGIIN89Lku6dvw',
        icon: <Plane className="h-4 w-4 text-primary" />
    },
    {
        title: 'Lamborghini Huracán',
        location: 'Medan - Secure Handling',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHd4A0DMY9BSUZ8WxtRRDRzR2gBMzcbwEPMWYjm4FFo-Bb4cYdbARHlATNIENyOWuV5p5HJozANdK1R1PBLCC2aHCDre5-Co9NE1ldZe6iKhFoDJ3tCvSXHF6CR0dNIBXjQO2nKblnmhm92nslv0g1VxeecObO0GkeXIiuHki8dIVcVWMR7rVvHTQNbnGUrTLHkPwzx63fjySBVZZGI6h-YySEJvJImDEaJCBB_WtlRLzFB6hIOVmQMkIdRUYI1P6SVZnVPm4yaQ',
        icon: <Lock className="h-4 w-4 text-primary" />
    },
    {
        title: 'Audi R8 V10',
        location: 'Semarang - 24/7 Service',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG_1LoYWSy0SOGsFIp8AM94Gcs7-3Xlxui24e_eXbLna1BgSjQG4uIuHzTC0L7IynCnNqVY0J9oXCS-PIXQJPWhPTPA_lmbCcJAksGwxmjhy9xA7bRRinLzg6TJsVa-RLqMWVqtyUNGX-L9p4e3JIwLxXu3FkuckkVqXhVloKrFUff2n6pVIkei2K51ij7mnK-2Cr42U3qwbn2ZbXgfoKO-DuBIHyDXX0lntvmlzkWR5_8cmic5rRwBX-GjuH3cxbmSTTljKYz3A',
        icon: <Clock className="h-4 w-4 text-primary" />
    }
];

export default function Portfolio() {
    return (
        <section className="w-full py-24 bg-background-light dark:bg-[#050403]">
            <div className="mx-auto max-w-7xl px-6 md:px-12 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white font-display uppercase mb-4">
                    Our Latest Operations
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Seamlessly handling premium assets across the nation.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group cursor-pointer flex flex-col gap-4">
                            <div className="relative overflow-hidden aspect-[4/3] rounded-lg bg-neutral-900">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${item.image}")` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            <div className="flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display tracking-wide">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 mt-2 text-primary">
                                    {item.icon}
                                    <span className="text-sm font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                                        {item.location.split(' - ')[0]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
