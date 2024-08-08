import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';

export const eventDetailsData = {
    '1': {
        id: '1',
        name: 'Wedding Event',
        description: 'A beautiful wedding event with all the necessary arrangements.',
        categories: [
            { name: 'Stage Decoration', description: 'Elegant and thematic stage decorations.' },
            { name: 'Food Decoration', description: 'Delicious and well-presented food arrangements.' },
            { name: 'Venue Decoration', description: 'Beautifully decorated venues with flowers and lights.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Lighting', description: 'Atmospheric lighting to enhance the event ambiance.' },
            { name: 'Photography', description: 'Professional photography and videography services.' },
            { name: 'Invitation Design', description: 'Custom designed invitations for the event.' }
        ],
        cost: '$5000',
        images: [
            'https://img.staticmb.com/mbcontent//images/uploads/2022/5/wedding%20stage%20decoration.jpg',
            'https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/005/030/657/new_large/framed.memoirs.jpg?1665076124',
            'https://i.pinimg.com/736x/c6/6c/bd/c66cbdd8ea391f259081d19d90330e28.jpg',
            'https://media.weddingz.in/images/09909f5de0dc38961cee6f533cb96fbf/Wedding-Reception-Stage-Decoration-Ideas29.jpg',
            'https://img.freepik.com/free-psd/wedding-invitation-greeting-cards-elegant-vintage-style_1340-49441.jpg',
        ],
    },
    '2': {
        id: '2',
        name: 'Funeral Event',
        description: 'A respectful funeral event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Respectful and serene decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Catering', description: 'Respectful and thoughtful catering services.' },
            { name: 'Floral Arrangements', description: 'Beautiful and respectful floral arrangements.' },
            { name: 'Memorial Service', description: 'Thoughtful and respectful memorial services.' }
        ],
        cost: '$3000',
        images: [
            'https://www.shutterstock.com/image-photo/funeral-coffin-decorated-wreaths-farewell-260nw-1320035894.jpg',
            'https://files.elfsight.com/storage/6c1d1bfb-8ed5-440e-9c6e-a47bec30008a/91668493-6168-49e5-8d3e-724fa76cfa92.jpg',
            'https://static.vecteezy.com/system/resources/previews/030/790/572/non_2x/closeup-shot-of-a-colorful-casket-in-a-hearse-or-chapel-before-funeral-or-burial-at-cemetery-ai-generated-photo.jpg',
        ],
    },
    '3': {
        id: '3',
        name: 'Bachelor Party',
        description: 'A fun and exciting bachelor party with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Exciting and thematic decorations.' },
            { name: 'Entertainment', description: 'Live performances and entertainment services.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Lighting', description: 'Vibrant lighting to enhance the party atmosphere.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$4000',
        images: [
            'https://www.happywedding.app/blog/wp-content/uploads/2019/07/Tips-and-Ideas-for-Groom-Bachelor-Party.jpg',
            'https://static1.bigstockphoto.com/8/1/2/large1500/218335510.jpg',
            'https://images.ctfassets.net/77l22z9el0aa/3tsqFK8yqAYtlWDMjoh4FA/7633b0eb185f8df51dfe0d0ae0cedef8/kats-weil-CLD1i8hp008-unsplash.jpg',
        ],
    },
    '4': {
        id: '4',
        name: 'Baby Shower',
        description: 'A joyful baby shower event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Cute and thematic decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Games and Activities', description: 'Fun games and activities for guests.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$3500',
        images: [
            'https://haplun.in/uploads/product_images/large/1674803702_7689241290.webp',
            'https://rukminim2.flixcart.com/image/850/1000/l4ln8nk0/birthday-combo/u/l/y/baby-shower-decoration-items-kit-party-supplies-pack-of-52pcs-original-imagfgt8zyqzw32k.jpeg?q=90&crop=false',
            'https://cdn.togetherv.com/purple-themed-baby-shower-decor-main_1680693444.webp',
        ],
    },
    '5': {
        id: '5',
        name: 'House Warming',
        description: 'A welcoming house warming event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Warm and welcoming decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Lighting', description: 'Atmospheric lighting to enhance the event ambiance.' }
        ],
        cost: '$3000',
        images: [
            'https://5.imimg.com/data5/LI/UN/MY-49955448/house-warming-decoration.png',
            'https://nailahsuhaila.com/wp-content/uploads/2021/06/house-warming-4-of-6-2.jpg',
            'https://cheetah.cherishx.com/uploads/1654164023_large.jpg',
        ],
    },
    '6': {
        id: '6',
        name: 'Bride to Be',
        description: 'A special Bride to Be event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Elegant and thematic decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$3500',
        images: [
            'https://haplun.in/uploads/product_images/medium/1669702778_3642517622.webp',
            'https://specialyou.in/cdn/shop/files/71_oC8j40fL._SL1500.jpg?v=1688717155&width=2048',
            'https://cdn.shopify.com/s/files/1/0674/5289/5554/files/Bride_to_be_decorations_bridal_shower_bachelorette_party_pune37_480x480.png?v=1680275581',
        ],
    },
    '7': {
        id: '7',
        name: 'Groom to Be',
        description: 'A special Groom to Be event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Elegant and thematic decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$3500',
        images: [
            'https://m.media-amazon.com/images/I/81eP9B0GP9L.jpg',
            'https://images.meesho.com/images/products/245673608/waupr_512.webp',
            'https://m.media-amazon.com/images/I/81Ifriw173L.jpg',
        ],
    },
    '8': {
        id: '8',
        name: 'Engagement',
        description: 'A memorable engagement event with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Elegant and thematic decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$4500',
        images: [
            'https://assets-news.housing.com/news/wp-content/uploads/2022/01/11220447/wedding-stage-decoration-shutterstock_1193416354-1200x700-compressed.jpg',
            'https://miro.medium.com/v2/resize:fit:700/0*TjXxZqcN4m94q6zx.png',
            'https://miro.medium.com/v2/resize:fit:1400/0*mhKLE6fXL-n6uAIf.jpeg',
        ],
    },
    '9': {
        id: '9',
        name: 'Birthday Party',
        description: 'A fun and exciting birthday party with all the necessary arrangements.',
        categories: [
            { name: 'Venue Decoration', description: 'Exciting and thematic decorations.' },
            { name: 'Seating Arrangement', description: 'Comfortable and organized seating for guests.' },
            { name: 'Food and Drinks', description: 'Delicious food and drink arrangements.' },
            { name: 'Entertainment', description: 'Live music and performances to entertain guests.' },
            { name: 'Photography', description: 'Professional photography and videography services.' }
        ],
        cost: '$3000',
        images: [
            'https://d3gzwr12tvi9b5.cloudfront.net/wp-content/uploads/2021/11/Birthday-Decoration-For-Her-Loviesta-004-jpg.webp',
            'https://cheetah.cherishx.com/uploads/1654579222_large.jpg',
            'https://5.imimg.com/data5/SELLER/Default/2023/3/WZ/YX/WO/142579589/mickey-mouse-theme-birthday-decoration.jpg',
        ],
    },
};


function EventDetails() {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const event = eventDetailsData[eventId];

    if (!event) {
        return <div>Event not found</div>;
    }

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleBookNow = () => {
        navigate(`/booking/${eventId}`); // Navigate to the booking page
    };

    return (
        <div className="container mx-auto p-4 flex flex-col min-h-screen">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex-1">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{event.name}</h1>
                <p className="mb-4 text-gray-800 dark:text-gray-300">{event.description}</p>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Categories</h2>
                {event.categories.map((category, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
                        <p className="text-gray-800 dark:text-gray-300">{category.description}</p>
                    </div>
                ))}
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Cost</h2>
                <p className="text-gray-800 dark:text-gray-300">{event.cost}</p>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {event.images.map((image, index) => (
                        <img key={index} src={image} alt={`${event.name} ${index + 1}`} className="rounded-lg shadow-md" />
                    ))}
                </div>
                <div className="mt-6">
                    <button
                        onClick={handleBookNow}
                        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 duration-200"
                    >
                        Book Now
                    </button>
                </div>
            </div>
            <div className="mt-auto mb-4">
                <button
                    onClick={handleGoBack}
                    className="px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 duration-200"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default EventDetails;