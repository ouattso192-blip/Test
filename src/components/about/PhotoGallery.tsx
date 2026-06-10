import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Nouvelles images de la galerie avec noms corrigés
import img1 from "@/assets/gallery/aminata.jpg";
import img2 from "@/assets/gallery/barbara.jpg";
import img3 from "@/assets/gallery/gallery1.png";
import img4 from "@/assets/gallery/gallery2.png";
import img5 from "@/assets/gallery/gallery3.png";
import img6 from "@/assets/gallery/gallery4.png";
import img7 from "@/assets/gallery/gallery5.png";
import img8 from "@/assets/gallery/gallery6.png";
import img9 from "@/assets/gallery/gallery7.png";

const photos = [
  { src: img1, alt: "Aminata Semega", span: "row-span-2" },
  { src: img3, alt: "XOYAM Event 1", span: "" },
  { src: img4, alt: "XOYAM Event 2", span: "" },
  { src: img2, alt: "Barbara Alcius", span: "row-span-2" },
  { src: img5, alt: "XOYAM Event 3", span: "col-span-2" },
  { src: img6, alt: "XOYAM Event 4", span: "row-span-2" },
  { src: img7, alt: "XOYAM Event 5", span: "" },
  { src: img8, alt: "XOYAM Event 6", span: "" },
  { src: img9, alt: "XOYAM Event 7", span: "col-span-2" },
];

export function PhotoGallery() {
  return (
    <section className="container-x mt-20 sm:mt-28 pb-8">
      <div className="mb-8 flex items-center gap-3">
        <span className="inline-block h-px w-8 bg-[color:var(--magenta)]" />
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-[color:var(--magenta)]">
          Galerie · Communauté XOYAM
        </span>
      </div>

      <div
        className="grid gap-3 sm:gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "300px",
        }}
      >
        {photos.map((p, i) => (
          <Dialog key={i}>
            <DialogTrigger asChild>
              <div
                className={`relative cursor-pointer overflow-hidden rounded-2xl bg-secondary ${p.span}`}
                style={
                  p.span === "row-span-2"
                    ? { gridRow: "span 2" }
                    : p.span === "col-span-2"
                    ? { gridColumn: "span 2" }
                    : {}
                }
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Voir</span>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
              <div className="relative h-full w-full flex items-center justify-center">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="max-h-[90vh] max-w-full rounded-lg object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
