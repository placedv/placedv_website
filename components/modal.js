import {signIn, signOut, useSession} from "next-auth/react";
import {BiLogOut, BiUser} from "react-icons/bi";
import {FaGithub} from "react-icons/fa";
import {useRouter} from "next/router";
import {CloseModalForce} from "./closeModalForce";

function Modal() {
    const router = useRouter()
    const {data: session} = useSession()
    const { locale } = useRouter();
    const enLanguage = locale === 'en'
    return <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            {session
                ? <div className="modal-content p-5 shadow-lg rounded-4">
                    <div className="modal-header border-0 d-flex justify-content-center">
                        <h3 className="fw-bold d-flex align-items-center gap-2">
                            Profile settings
                        </h3>
                    </div>
                    <div className="modal-body">
                        <div className="mb-2">
                            <button
                                onClick={() => signOut()}
                                className="container fw-semibold btn btn-outline-secondary btn-lg d-flex align-items-center justify-content-center gap-2"
                            >
                                <BiLogOut size={20}/> Logout
                            </button>
                        </div>
                    </div>
                </div>
                : <div className="modal-content p-5 shadow-lg rounded-4">
                    <div className="modal-header d-block border-0">
                        <h3 className="fw-bold mb-3">
                            {enLanguage ? 'Login' : 'Accedi'}
                        </h3>
                        <h3 className="text-secondary fs-5">
                            Facendo click su &quot;Accedi con GitHub&quot;, inizierai da subito a far parte della nostra community.
                        </h3>
                    </div>
                    <div className="modal-body">
                        <div className="mb-2">
                            <button
                                onClick={() => signIn('github')}
                                className="simplonmono-regular container fw-semibold btn btn-dark btn-lg d-flex align-items-center justify-content-center gap-2"
                            >
                                <FaGithub size={20}/> {enLanguage ? 'Login with' : 'Accedi con'} GitHub
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
}

export default Modal
