import p1Image from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import p1ImageTablet from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";
import p1ImageTabletSeparate from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import p2Image from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import p2ImageTablet from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";
import p2ImageSeparate from "../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import p3Image from "../assets/shared/desktop/image-xx59-headphones.jpg";
import p3ImageTablet from "../assets/shared/mobile/image-xx59-headphones.jpg";
import p3ImageSeparate from "../assets/product-xx59-headphones/tablet/image-product.jpg";
import p4Image from "../assets/shared/desktop/image-zx9-speaker.jpg";
import p4ImageTablet from "../assets/shared/mobile/image-zx9-speaker.jpg";
import p4ImageSeparate from "../assets/product-zx9-speaker/tablet/image-product.jpg";
import p5Image from "../assets/shared/desktop/image-zx7-speaker.jpg";
import p5ImageTablet from "../assets/shared/mobile/image-zx7-speaker.jpg";
import p5ImageSeparate from "../assets/product-zx7-speaker/tablet/image-product.jpg";
import p6Image from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import p1img1 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import p1img2 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import p1img3 from "../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
import p2img1 from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";
import p2img2 from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import p2img3 from "../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";
import p3img1 from "../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import p3img2 from "../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";
import p3img3 from "../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";
import p4img1 from "../assets/product-zx9-speaker/mobile/image-gallery-1.jpg";
import p4img2 from "../assets/product-zx9-speaker/mobile/image-gallery-2.jpg";
import p4img3 from "../assets/product-zx9-speaker/mobile/image-gallery-3.jpg";
import p5img1 from "../assets/product-zx7-speaker/mobile/image-gallery-1.jpg";
import p5img2 from "../assets/product-zx7-speaker/mobile/image-gallery-2.jpg";
import p5img3 from "../assets/product-zx7-speaker/mobile/image-gallery-3.jpg";
import p6img1 from "../assets/product-yx1-earphones/mobile/image-gallery-1.jpg";
import p6img2 from "../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import p6img3 from "../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
import p1preview from "../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import p2preview from "../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import p3preview from "../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import p4preview from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import p5preview from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import p6preview from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";

export const allProducts = [
  {
    id: "p1",
    category: "headphones",
    newProduct: true,
    name: "XX99 Mark II Headphones",
    price: 2999,
    image: p1Image,
    imageTablet: p1ImageTablet,
    separateImageTablet: p1ImageTabletSeparate,
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features1:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.",
    features2:
      "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    includes: [
      { product: "Headphone Unit", qty: 1 },
      { product: "Replacement Earcups", qty: 2 },
      { product: "User Manual", qty: 1 },
      { product: "3.5mm 5m Audio Cable", qty: 1 },
      { product: "Travel Bag", qty: 1 },
    ],
    images: [p1img1, p1img2, p1img3],
    suggestions: ["p2", "p3", "p4"],
    previewImg: p1preview,
  },
  {
    id: "p2",
    category: "headphones",
    newProduct: false,
    name: "XX99 Mark I Headphones",
    price: 1750,
    image: p2Image,
    imageTablet: p2ImageTablet,
    separateImageTablet: p2ImageSeparate,
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    features1:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. ",
    features2:
      "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    includes: [
      { product: "Headphone Unit", qty: 1 },
      { product: "Replacement Earcups", qty: 2 },
      { product: "User Manual", qty: 1 },
      { product: "3.5mm 5m Audio Cable", qty: 1 },
    ],
    images: [p2img1, p2img2, p2img3],
    suggestions: ["p1", "p3", "p4"],
    previewImg: p2preview,
  },
  {
    id: "p3",
    category: "headphones",
    newProduct: false,
    name: "XX59 Headphones",
    price: 899,
    image: p3Image,
    imageTablet: p3ImageTablet,
    separateImageTablet: p3ImageSeparate,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    features1:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.",
    features2:
      "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    includes: [
      { product: "Headphone Unit", qty: 1 },
      { product: "Replacement Earcups", qty: 2 },
      { product: "User Manual", qty: 1 },
      { product: "3.5mm 5m Audio Cable", qty: 1 },
    ],
    images: [p3img1, p3img2, p3img3],
    suggestions: ["p1", "p2", "p4"],
    previewImg: p3preview,
  },
  {
    id: "p4",
    category: "speakers",
    newProduct: true,
    name: "ZX9 Speaker",
    price: 4500,
    image: p4Image,
    imageTablet: p4ImageTablet,
    separateImageTablet: p4ImageSeparate,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    features1:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).",
    features2:
      "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    includes: [
      { product: "Speaker Unit", qty: 2 },
      { product: "Speaker Cloth Panel", qty: 2 },
      { product: "User Manual", qty: 1 },
      { product: "3.5mm 5m Audio Cable", qty: 1 },
      { product: "10m Optical Cable", qty: 1 },
    ],
    images: [p4img1, p4img2, p4img3],
    suggestions: ["p5", "p2", "p3"],
    previewImg: p4preview,
  },
  {
    id: "p5",
    category: "speakers",
    newProduct: true,
    name: "ZX7 Speaker",
    price: 3500,
    image: p5Image,
    imageTablet: p5ImageTablet,
    separateImageTablet: p5ImageSeparate,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    features1:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. ",
    features2:
      "The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    includes: [
      { product: "Speaker Unit", qty: 2 },
      { product: "Speaker Cloth Panel", qty: 2 },
      { product: "User Manual", qty: 1 },
      { product: "3.5mm 5m Audio Cable", qty: 1 },
      { product: "7.5m Optical Cable", qty: 1 },
    ],
    images: [p5img1, p5img2, p5img3],
    suggestions: ["p4", "p2", "p3"],
    previewImg: p5preview,
  },
  {
    id: "p6",
    category: "earphones",
    newProduct: true,
    name: "YX1 WIRELESS Earphones",
    price: 599,
    image: p6Image,
    imageTablet: p6Image,
    separateImageTablet: p6Image,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    features1:
      "Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.",
    features2:
      "The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    includes: [
      { product: "Earphone Unit", qty: 2 },
      { product: "Multi-size Earplugs", qty: 6 },
      { product: "User Manual", qty: 1 },
      { product: "USB-C Charging Cable", qty: 1 },
      { product: "Travel Pouch", qty: 1 },
    ],
    images: [p6img1, p6img2, p6img3],
    suggestions: ["p2", "p3", "p4"],
    previewImg: p6preview,
  },
];
