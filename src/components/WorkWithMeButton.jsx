import '../assets/pdf/Chetna-Bhatia-Resume.pdf'


const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/Chetna-Bhatia-Resume.pdf";
  link.download = "Chetna-Bhatia-Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default function WorkWithMeButton({ className = "" }) {
  return (
    <>
      <a
        href="#contact"
        className={`inline-flex items-center gap-2 rounded-full bg-blush text-cocoa-deep px-5 py-2 text-sm font-medium hover:-translate-y-0.5 hover:shadow-md transition ${className}`}
      >
        Work with me <span aria-hidden>→</span>
      </a> 
    </>
  );
}
