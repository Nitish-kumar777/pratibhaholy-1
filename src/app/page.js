import CoursesSection from "@/components/2";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import HeroSection from "@/components/FashionInstitute";
import FashionCourseSlider from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import StudentReviews from "@/components/StudentReviews";
import TrainingGallery from "@/components/TrainingGallery";


export default function Home() {
  return (
    <div>
      <FashionCourseSlider/>
      <HeroSection/>
      <CoursesSection/>
      <StatsCounter/>
      <TrainingGallery/>
      <StudentReviews/>
      <AdmissionsBanner/>
    </div>
  );
}
