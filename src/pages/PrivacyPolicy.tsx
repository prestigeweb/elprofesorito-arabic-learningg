import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-spanish-navy mb-8 text-center">
              {t('footer.legal.privacy')}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.introduction.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.introduction.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.collection.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.collection.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t('privacy.collection.items.name')}</li>
                  <li>{t('privacy.collection.items.email')}</li>
                  <li>{t('privacy.collection.items.phone')}</li>
                  <li>{t('privacy.collection.items.address')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.use.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.use.content')}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>{t('privacy.use.items.communication')}</li>
                  <li>{t('privacy.use.items.services')}</li>
                  <li>{t('privacy.use.items.improvement')}</li>
                  <li>{t('privacy.use.items.legal')}</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.sharing.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.sharing.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.security.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.security.content')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-spanish-navy mb-4">
                  {t('privacy.contact.title')}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('privacy.contact.content')}
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@elprofesoritoeg.com<br />
                    <strong>Phone:</strong> +20 100 123 4567<br />
                    <strong>Address:</strong> {t('contact.ways.address.value')}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
