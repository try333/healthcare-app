import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PatientForm } from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";

export default async function NewAppointment({ params: { userId } }: SearchParamProps) {
    const patient = await getPatient(userId);
    return (
        <div className="flex h-screen max-h-screen">

            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                    <Image
                        src="/assets/icons/logo-medical.png"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-28 w-fit"
                    />

                    <AppointmentForm
                        patientId={patient?.$id}
                        userId={userId}
                        type="create"
                    />

                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="copyright py-12">
                            © 2024 Medical Clinic
                        </p>
                    </div>
                </div>
            </section>

            <div className="items-center justify-center">
                <Image
                    src="/assets/images/appointment-img.png"
                    height={1000}
                    width={1000}
                    alt="appointment"
                    className="side-img max-w-[390px]"
                />
            </div>
        </div>

    )
}