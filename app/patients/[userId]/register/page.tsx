import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RegisterForm } from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'

const Register = async({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);

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

                    <RegisterForm user={user}/>

                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="copyright py-12">
                            © 2024 Medical Clinic
                        </p>
                    </div>
                </div>
            </section>

            <div className="items-center justify-center">
                <Image
                    src="/assets/images/register-img.png"
                    height={1000}
                    width={1000}
                    alt="patient"
                    className="side-img max-w-[390px]"
                />
            </div>
        </div>
    )
}

export default Register