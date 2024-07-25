import { PatientForm } from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="remove-scrollbar container flex-1 flex flex-col justify-between mb-10">
        <div className="sub-container max-w-[496px] mx-auto my-auto">
          <Image
            src="/assets/icons/logo-medical.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-28 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="text-dark-600 xl:text-left">
              © 2024 Medical Clinic
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/assets/images/onboarding-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="h-full object-cover"
        />
      </div>
    </div>

  )
}