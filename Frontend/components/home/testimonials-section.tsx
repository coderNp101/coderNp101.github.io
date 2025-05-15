import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Yoga Instructor",
    content:
      "Destiny Engine provided insights into my birth chart that were remarkably accurate. The AI interpretations helped me understand my strengths and challenges in a way traditional readings never could.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    content:
      "As someone who values both tradition and technology, I was impressed by how Destiny Engine blends ancient Vedic wisdom with modern AI. The Dasha predictions have been particularly helpful for my career planning.",
    avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Rajiv Malhotra",
    role: "Business Consultant",
    content:
      "The level of detail in my Kundali report was outstanding. I've consulted with several astrologers before, but the clarity and depth provided by Destiny Engine was truly exceptional.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300">
            Discover how Destiny Engine has helped people gain deeper insights into their cosmic journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow transition-all hover:shadow-md"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
              <blockquote className="mb-6 text-muted-foreground">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;