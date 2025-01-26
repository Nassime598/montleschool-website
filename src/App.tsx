import React, { useState } from 'react';
import { BookOpen, Users, Trophy, Calendar, ArrowRight, GraduationCap, Globe2, Heart, Sparkles, Music, Palette, Code, Coins, DoorOpen, HandHeart, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

function App() {
  const { t } = useLanguage();
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <LanguageSwitcher />
      
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="bg-yellow-500 text-black px-4 py-1 rounded-full inline-block mb-4 font-semibold">
                {t('publicSchool')}
              </div>
              <h1 className="text-5xl font-bold mb-6">{t('welcome')}</h1>
              <p className="text-xl mb-4">{t('qualityEducation')}</p>
              <p className="text-lg mb-8">{t('description')}</p>
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center gap-2">
                {t('joinCommunity')} <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Banner */}
      <div className="bg-yellow-500 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-semibold text-lg">{t('accessibility')}</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('welcomeEveryone')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <Coins className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('freeEducation')}</h3>
              <p className="text-gray-600">{t('freeEducationDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <DoorOpen className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('openAdmission')}</h3>
              <p className="text-gray-600">{t('openAdmissionDesc')}</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
              <HandHeart className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('inclusiveSupport')}</h3>
              <p className="text-gray-600">{t('inclusiveSupportDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('freePrograms')}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Sparkles className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">{t('stem')}</h3>
              <p className="text-gray-600">{t('stemDesc')}</p>
            </div>
            <div className="text-center p-6">
              <Palette className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">{t('arts')}</h3>
              <p className="text-gray-600">{t('artsDesc')}</p>
            </div>
            <div className="text-center p-6">
              <Music className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">{t('music')}</h3>
              <p className="text-gray-600">{t('musicDesc')}</p>
            </div>
            <div className="text-center p-6">
              <Code className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
              <h3 className="font-bold mb-2">{t('digital')}</h3>
              <p className="text-gray-600">{t('digitalDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <BookOpen className="w-8 h-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">15:1</div>
              <div className="text-lg">{t('studentRatio')}</div>
            </div>
            <div>
              <Users className="w-8 h-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg">{t('diverseStudents')}</div>
            </div>
            <div>
              <Trophy className="w-8 h-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg">{t('achievement')}</div>
            </div>
            <div>
              <Calendar className="w-8 h-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">{t('freeActivities')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Modal */}
      {showLearnMore && (
        <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full p-6 relative">
              <button 
                onClick={() => setShowLearnMore(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold mb-6">{t('aboutUsTitle')}</h2>
                <p className="text-gray-600 mb-6">{t('aboutUsDesc')}</p>
                
                <h3 className="text-2xl font-bold mb-4">{t('ourMission')}</h3>
                <p className="text-gray-600 mb-6">{t('missionDesc')}</p>
                
                <h3 className="text-2xl font-bold mb-4">{t('ourValues')}</h3>
                <ul className="grid md:grid-cols-2 gap-4 mb-8">
                  <li className="flex items-start gap-2">
                    <Heart className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">{t('valueInclusion')}</h4>
                      <p className="text-gray-600">Welcoming all students regardless of background</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <GraduationCap className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">{t('valueExcellence')}</h4>
                      <p className="text-gray-600">Striving for the highest standards in education</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">{t('valueCommunity')}</h4>
                      <p className="text-gray-600">Building strong partnerships with our community</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">{t('valueGrowth')}</h4>
                      <p className="text-gray-600">Nurturing each student's individual development</p>
                    </div>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">{t('visitUs')}</h3>
                <p className="text-gray-600 mb-6">{t('visitUsDesc')}</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">{t('addressTitle')}</h4>
                    <address className="not-italic text-gray-600">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                        <div>
                          {t('addressStreet')}<br />
                          {t('addressCity')}<br />
                          {t('addressState')}<br />
                          {t('addressPostal')}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-5 h-5 text-yellow-500" />
                        <span>info@montleschool.co.za</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-yellow-500" />
                        <span>+27 123 456 789</span>
                      </div>
                    </address>
                  </div>
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.727989694411!2d25.156641315674337!3d-28.070995982649946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9a38936741313f%3A0x431fdf643c526e9!2sMontle%20Primary%20School!5e0!3m2!1sen!2sza!4v1646305283123!5m2!1sen!2sza"
                      className="w-full h-full rounded-lg"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section with Map */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-8">{t('futureStarts')}</h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('ctaDescription')}
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="https://www.google.com/maps?q=Montle+Primary+School"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition flex items-center gap-2 justify-center"
                >
                  <MapPin className="w-5 h-5" />
                  {t('visitUs')}
                </a>
                <button 
                  onClick={() => setShowLearnMore(true)}
                  className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-full font-semibold hover:bg-yellow-50 transition"
                >
                  {t('learnMore')}
                </button>
              </div>
            </div>
            <div className="aspect-video">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.727989694411!2d25.156641315674337!3d-28.070995982649946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9a38936741313f%3A0x431fdf643c526e9!2sMontle%20Primary%20School!5e0!3m2!1sen!2sza!4v1646305283123!5m2!1sen!2sza"
                className="w-full h-full rounded-lg shadow-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Montleschool</h3>
              <p className="text-gray-400">{t('footerDescription')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('enrollment')}</li>
                <li>{t('schoolPrograms')}</li>
                <li>{t('supportServices')}</li>
                <li>{t('transportation')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('contact')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Education Street</li>
                <li>Cape Town, South Africa</li>
                <li>info@montleschool.com</li>
                <li>+27 659705600</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('community')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>{t('parentResources')}</li>
                <li>{t('communityEvents')}</li>
                <li>{t('newsletter')}</li>
                <li>{t('volunteer')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;