"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Star,
  Baby,
  Instagram,
  MessageCircle,
  Mail,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";

const translations = {
  es: {
    // SEO
    title: "Decoraciones hechas a mano – Regalos personalizados para bebés",
    description:
      "Carteles personalizados, letras decorativas y regalos hechos a mano con amor. Envíos desde Estepona a toda España.",

    // Navigation
    language: "Idioma",

    // Hero
    heroTitle: "Decoraciones hechas a mano con amor para todos los gustos",
    heroSubtitle:
      "Creamos piezas únicas y personalizadas que llenan de magia cada rincón",

    // What We Do
    whatWeDoTitle: "Lo que hacemos",
    whatWeDoItems: [
      "Letras y personajes decorativos personalizados.",
      "Regalos para recién nacid@, cumpleaños, baby showers, etc.",
      "Souvenir y recuerdos de boda, comunion, fiesta de empresa, etc.",
    ],

    // Gallery
    galleryTitle: "Nuestras creaciones",
    categories: {
      nameDecorations: "Decoraciones de nombres",
      babyPacks: "Packs para bebés",
      themedSigns: "Carteles temáticos",
    },
    priceFrom: "Desde",
    perLetter: "por letra",

    // Products
    products: {
      feltLetters: {
        title: "Letras de fieltro personalizadas",
        description:
          "Letras suaves y coloridas perfectas para decorar habitaciones",
        price: "€3 por letra",
      },
      babyPack: {
        title: "Pack completo para bebé",
        description: "Set completo con nombre, nubes y estrellas",
        price: "€25",
      },
      themedSign: {
        title: "Cartel temático personalizado",
        description: "Carteles únicos para ocasiones especiales",
        price: "€15",
      },
    },

    // Order Form
    orderTitle: "Haz tu pedido y consulta presupuesto",
    orderSubtitle: "Cuéntanos qué te gustaría y lo haremos realidad",
    formFields: {
      name: "Tu nombre",
      namePlaceholder: "Escribe tu nombre",
      order: "¿Qué te gustaría pedir?",
      orderPlaceholder: "Describe lo que necesitas...",
      colors: "Colores o tema preferido",
      colorsPlaceholder: "Rosa, azul, tema unicornio...",
    },
    submitButton: "Enviar pedido",

    // Footer
    footerText:
      "Estamos en Madrid y Estepona, Málaga, hacemos envios a toda España.",
    followUs: "Síguenos",
    contactUs: "Contáctanos",
  },
  en: {
    // SEO
    title: "Handmade Decorations from Estepona – Personalized Baby Gifts",
    description:
      "Personalized signs, decorative letters and handmade gifts with love. Shipping from Estepona to all of Spain.",
    // Navigation
    language: "Language",
    // Hero
    heroTitle: "Handmade decorations with love for the little ones",
    heroSubtitle:
      "We create unique and personalized pieces that fill every corner with magic",
    // What We Do
    whatWeDoTitle: "What we do",
    whatWeDoItems: [
      "Personalized decorative letters and characters.",
      "Gifts for births, birthdays, baby showers, etc.",
      "Souvenirs and keepsakes for weddings, communions, company parties, etc.",
    ],
    // Gallery
    galleryTitle: "Our creations",
    categories: {
      nameDecorations: "Name decorations",
      babyPacks: "Baby packs",
      themedSigns: "Themed signs",
    },
    priceFrom: "From",
    perLetter: "per letter",
    // Products
    products: {
      feltLetters: {
        title: "Personalized felt letters",
        description: "Soft and colorful letters perfect for decorating rooms",
        price: "€3 per letter",
      },
      babyPack: {
        title: "Complete baby pack",
        description: "Complete set with name, clouds and stars",
        price: "€25",
      },
      themedSign: {
        title: "Personalized themed sign",
        description: "Unique signs for special occasions",
        price: "€15",
      },
    },
    // Order Form
    orderTitle: "Place your order and request a quote",
    orderSubtitle: "Tell us what you'd like and we'll make it happen",
    formFields: {
      name: "Your name",
      namePlaceholder: "Enter your name",
      order: "What would you like to order?",
      orderPlaceholder: "Describe what you need...",
      colors: "Preferred colors or theme",
      colorsPlaceholder: "Pink, blue, unicorn theme...",
    },
    submitButton: "Send order",
    // Footer
    footerText:
      "We are in Madrid and Estepona, Málaga, and we ship all over Spain.",
    followUs: "Follow us",
    contactUs: "Contact us",
  },
};

export default function HandmadeDecorationsPage() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const t = translations[language];
  // Gallery zoom state
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  // Header hide on scroll
  const [hideHeader, setHideHeader] = useState(false);
  const lastScroll = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y === 0) {
        setHideHeader(false);
      } else {
        setHideHeader(true);
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gallery show more state
  const [showAllGallery, setShowAllGallery] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Get form data
    const form = e.target as HTMLFormElement;
    const name =
      (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const order =
      (form.elements.namedItem("order") as HTMLInputElement)?.value || "";
    const colors =
      (form.elements.namedItem("colors") as HTMLInputElement)?.value || "";
    // Build WhatsApp message
    let message = `Hola! Me gustaría hacer un pedido.\n\nNombre: ${name}\nPedido: ${order}\nColores/tema: ${colors}`;
    const phone = "34655719145";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    form.reset();
  };

  const galleryImages = [
    "biagio",
    "daniel",
    "david",
    "ositos colgantes",
    "decoracion pajaros",
    "eda",
    "hugo",
    "julia2",
    "lara",
    "llaveros",
    "llavero boton",
    "llavero corazon",
    "llavero flor",
    "olaya",
    "sofia",
    "carmen",
    "martin",
    "marcos",
  ];

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header
        className={`w-full flex items-center justify-between px-6 py-4 md:py-6 fixed top-0 left-0 z-50 bg-transparent pointer-events-none transition-all duration-500 ${
          hideHeader ? "opacity-0 -translate-y-8" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-2">
          <span
            className="text-4xl md:text-6xl font-quicksand font-bold tracking-wide"
            style={{
              color: "#B39DDB",
              textShadow: "0 4px 16px rgba(179,157,219,0.2)",
            }}
          >
            Mis Cositas
          </span>
          <span
            className="text-3xl md:text-4xl align-middle"
            aria-label="rainbow"
            role="img"
          >
            🌈
          </span>
        </div>
        <div className="hidden md:block" style={{ minWidth: 120 }}></div>{" "}
        {/* Spacer for language switcher */}
      </header>

      <div
        className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 pt-20 md:pt-24"
        lang={language}
      >
        {/* Language Switcher */}
        <div className="fixed top-4 right-4 z-50 md:top-6 md:right-6 pointer-events-auto">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <Globe className="w-4 h-4 text-gray-600" />
            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === "es"
                  ? "bg-pink-200 text-pink-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-pink-200 text-pink-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-blue-100/50 to-purple-100/50" />
          <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <Heart className="w-6 h-6 text-pink-400" />
                <Star className="w-5 h-5 text-yellow-400" />
                <Baby className="w-6 h-6 text-blue-400" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">{t.heroSubtitle}</p>
              <Button
                className="bg-pink-300 hover:bg-pink-400 text-pink-900 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                onClick={() =>
                  document
                    .getElementById("order")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {language === "es" ? "Hacer pedido" : "Place order"} ✨
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-3xl transform rotate-3" />
              <Image
                src="/img/abecedario.webp"
                alt={
                  language === "es"
                    ? "Cartel abecedario de fieltro decorativo"
                    : "Felt alphabet sign decorative"
                }
                width={500}
                height={500}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section
          className="py-20 px-4 bg-white/50 relative"
          style={{
            backgroundImage: 'url(/img/logo.webp)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'lighten',
            opacity: 1,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
              {t.whatWeDoTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {t.whatWeDoItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all rounded-2xl"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && (
                        <Heart className="w-6 h-6 text-pink-600" />
                      )}
                      {index === 1 && (
                        <Baby className="w-6 h-6 text-blue-600" />
                      )}
                      {index === 2 && (
                        <Star className="w-6 h-6 text-yellow-600" />
                      )}
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
              {t.galleryTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {(showAllGallery ? galleryImages : galleryImages.slice(0, 6)).map((img) => {
                // Custom display names for certain images
                let title = img;
                if (
                  [
                    "ositos colgantes",
                    "decoracion pajaros",
                    "llaveros",
                    "llavero boton",
                    "llavero corazon",
                    "llavero flor",
                  ].includes(img)
                ) {
                  if (img === "ositos colgantes") {
                    title = language === 'es' ? "Organizadores de horquillas" : "Bobby pin organizers";
                  } else if (img === "decoracion pajaros") {
                    title = language === 'es' ? "Decoración pajaros" : "Decoration with birds";
                  } else {
                    title = img.charAt(0).toUpperCase() + img.slice(1);
                  }
                } else if (img === "julia2") {
                  title = "Julia";
                } else {
                  title = img.charAt(0).toUpperCase() + img.slice(1);
                }
                // Map display names to actual filenames
                const filenameMap: { [key: string]: string } = {
                  "ositos colgantes": "decosos.webp",
                  "decoracion pajaros": "decopajaros.webp",
                  llaveros: "llavero.webp",
                  "llavero boton": "llavero botones.jpeg",
                  "llavero corazon": "llavero corazones.jpeg",
                  "llavero flor": "llavero flor.jpeg",
                };
                const actualFilename = filenameMap[img] || img + ".webp";
                const src = `/img/${actualFilename}`;
                const alt = title;
                return (
                  <Card
                    key={img}
                    className="bg-white/80 border-0 shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden card-hover flex flex-col items-center"
                  >
                    <div
                      className="w-full flex justify-center items-center bg-gradient-to-br from-pink-50 to-blue-50"
                      style={{ minHeight: 192 }}
                    >
                      <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={300}
                        className="object-contain max-h-48 w-auto h-48 mx-auto cursor-pointer transition-transform duration-200 hover:scale-105"
                        onClick={() => setZoomImg(src)}
                        tabIndex={0}
                        role="button"
                        aria-label={
                          language === "es"
                            ? `Ampliar imagen de ${title}`
                            : `Enlarge image of ${title}`
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ")
                            setZoomImg(src);
                        }}
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col items-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                        {title}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            {!showAllGallery && (
              <div className="flex justify-center mt-8">
                <button
                  className="px-6 py-3 rounded-full bg-pink-200 text-pink-800 font-semibold shadow hover:bg-pink-300 transition-all"
                  onClick={() => setShowAllGallery(true)}
                >
                  {language === 'es' ? 'Ver más' : 'See more'}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Order Form Section */}
        <section
          id="order"
          className="py-20 px-4 bg-gradient-to-br from-pink-50 to-blue-50"
        >
          <div className="max-w-2xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {t.orderTitle}
              </h2>
              <p className="text-xl text-gray-600">{t.orderSubtitle}</p>
            </div>
            {/* Info message about deposit */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 shadow-sm max-w-2xl mx-auto w-full">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-yellow-200 text-yellow-700 text-lg font-bold">
                  !
                </span>
                <span className="text-sm md:text-base text-yellow-900 text-left">
                  {language === 'es'
                    ? 'Trabajamos con mucho amor en cada pedido. Por eso, solicitamos un adelanto del 50% al realizar tu encargo, y el resto lo abonas cuando recibas tu paquete.'
                    : 'We put a lot of love into every order. That’s why we ask for a 50% deposit when you place your order, and the rest is paid upon delivery of your package.'}
                </span>
              </div>
            </div>

            <Card className="bg-white/80 border-0 shadow-xl rounded-3xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formFields.name}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      placeholder={t.formFields.namePlaceholder}
                      className="rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.formFields.order}
                    </label>
                    <Textarea
                      name="order"
                      placeholder={t.formFields.orderPlaceholder}
                      className="rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300 min-h-[100px]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text sm font-medium text-gray-700 mb-2">
                      {t.formFields.colors}
                    </label>
                    <Input
                      type="text"
                      name="colors"
                      placeholder={t.formFields.colorsPlaceholder}
                      className="rounded-xl border-gray-200 focus:border-pink-300 focus:ring-pink-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 text-gray-800 rounded-xl py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                    {t.submitButton} 💕
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white/80 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start justify-between">
              <div>
                <p className="text-gray-700 text-lg mb-4">{t.footerText}</p>
                <div className="flex items-start gap-4">
                  <span className="text-gray-600 font-medium">
                    {t.followUs}:
                  </span>
                  <a
                    href="https://www.instagram.com/miscositas__decoracion/"
                    className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5" />
                    @miscositas__decoracion
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 items-end">
                <span className="text-gray-600 font-medium">
                  {t.contactUs}:
                </span>
                <a
                  href="https://wa.me/34655719145"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href="mailto:hello@handmadedecorations.com"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  alicianails.es@gmail.com
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-8 pt-8 text-center">
              <p className="text-gray-500">
                © 2024 Mis Cositas.{" "}
                {language === "es" ? (
                  <>
                    Desarrollado con 💕 por{" "}
                    <a
                      href="https://clickandfix.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600"
                    >
                      Click & Fix
                    </a>
                  </>
                ) : (
                  <>
                    Developed with 💕 by{" "}
                    <a
                      href="https://app.clickfix.work/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600"
                    >
                      Click & Fix
                    </a>
                  </>
                )}
              </p>
            </div>
          </div>
        </footer>

        {/* Gallery Zoom Modal */}
        {zoomImg && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setZoomImg(null)}
            aria-modal="true"
            role="dialog"
            tabIndex={-1}
          >
            <div
              className="max-w-3xl max-h-[90vh] p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={zoomImg}
                alt="Zoomed gallery item"
                className="rounded-2xl shadow-2xl w-full h-auto max-h-[80vh] object-contain bg-white"
                style={{ background: "white" }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
