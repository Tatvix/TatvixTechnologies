import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Tatvix Technologies Terms of Service. Read our terms and conditions for using our embedded systems and IoT development services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
            <div className="prose prose-invert max-w-4xl space-y-8 text-gray-300 text-justify">
                <p>Last Updated: {new Date().toLocaleDateString()}</p>
                <section>
                    <p>
                        Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the website and services operated by Tatvix (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
                    </p>
                    <p>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Services and Scope of Work</h2>
                    <p>
                        Tatvix provides embedded systems design, IoT solutions, and software development services (the &quot;Services&quot;). Specific deliverables, timelines, and costs for custom projects will be outlined in separate Statements of Work (SOW) or Master Services Agreements (MSA) signed by both parties. In the event of a conflict between these Terms and a specific SOW/MSA, the specific agreement shall control.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
                    <p>
                        <strong>Our IP:</strong> The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Tatvix and its licensors. The Service is protected by copyright, trademark, and other laws of both the India and foreign countries.
                    </p>
                    <p className="mt-2">
                        <strong>Client IP:</strong> For custom development projects, intellectual property rights regarding the deliverables will be governed by the specific SOW/MSA regarding that project. Generally, upon full payment, the Client obtains rights to the custom code developed specifically for them, while Tatvix retains rights to background IP, reusable libraries, and tools.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Use Of Service & Prohibited Acts</h2>
                    <p>You agree not to do any of the following:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Post, upload, publish, submit or transmit any Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability; (iii) is fraudulent, false, misleading or deceptive; (iv) is defamatory, obscene, pornographic, vulgar or offensive; or (v) promotes discrimination, bigotry, racism, hatred, harassment or harm against any individual or group.</li>
                        <li>Use, display, mirror or frame the Services or any individual element within the Services, Tatvix’s name, any Tatvix trademark, logo or other proprietary information, or the layout and design of any page or form contained on a page, without Tatvix’s express written consent.</li>
                        <li>Attempt to decipher, decompile, disassemble or reverse engineer any of the software used to provide the Services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Confidentiality</h2>
                    <p>
                        During the term of our relationship, both parties may disclose confidential information to one another. Both parties agree to hold such information in strict confidence and not to disclose it to any third parties without prior written consent, except as required by law.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer of Warranties</h2>
                    <p>
                        Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
                    </p>
                    <p className="mt-2">
                        Tatvix does not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                    <p>
                        In no event shall Tatvix, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">7. Indemnification</h2>
                    <p>
                        You agree to defend, indemnify and hold harmless Tatvix and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&apos;s fees), resulting from or arising out of a) your use and access of the Service, or b) a breach of these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, specifically the courts of Gujarat, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">9. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">10. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us.
                    </p>
                    <p className="mt-4 text-white">
                        <strong>Tatvix</strong><br />
                        Ahmedabad, Gujarat, India<br />
                        Email: <strong>info@tatvixtech.com</strong><br />
                        Phone: <strong>+91 87587 29042</strong>
                    </p>
                </section>
            </div>
        </div>
    );
}
