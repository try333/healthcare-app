import { PatientForm } from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
<div className="flex h-screen">
  {/* TODO: OTP Verification | Passkey model */}
  
  <section className="remove-scrollbar container flex-1 flex flex-col justify-between mb-10">
    <div className="sub-container max-w-[496px] mx-auto my-auto">
      <Image
        src="/assets/icons/logo-full.svg"
        height={1000}
        width={1000}
        alt="patient"
        className="mb-12 h-10 w-fit"
      />
      <PatientForm />

      <div className="text-14-regular mt-20 flex justify-between">
        <p className="text-dark-600 xl:text-left">
          © 2024 CarePulse
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