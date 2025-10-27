import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import AboutStory from '../pages/abouthigc/Story.vue'
import Team from '../pages/abouthigc/Team.vue'
import CoreValue from '../pages/abouthigc/CoreValue.vue'
import Services from '@/pages/ServicesView/Services.vue'
import CommunityHealth from '@/pages/ServicesView/CommunityHealth.vue'
import MedicalSupplies from '@/pages/ServicesView/MedicalSupplies.vue'
import Innovation from '@/pages/ServicesView/Innovation.vue'
import Consulting from '@/pages/ServicesView/Consulting.vue'
import SocialImpact from '@/pages/ServicesView/SocialImpact.vue'
import Products from '@/pages/Products.vue'
import News from '@/pages/NewsView/News.vue'
import NewsUpdate from '@/pages/NewsView/NewsSingle.vue'
import Terms from '@/pages/TermsAndConditions.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'
// import About from '../pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact-us', component: Contact },
  { path: '/about/our-story', component: AboutStory },
  { path: '/about/our-team', component: Team },
  { path: '/about/core-values', component: CoreValue },
  { path: '/services', component: Services },
  { path: '/services/community-health', component: CommunityHealth },
  { path: '/services/medical-supplies', component: MedicalSupplies },
  { path: '/services/innovation', component: Innovation },
  { path: '/services/consulting', component: Consulting },
  { path: '/services/social-impact', component: SocialImpact },
  { path: '/products', component: Products },
  { path: '/news', component: News },
  { path: '/news/update', component: NewsUpdate },
  { path: '/terms-and-conditions', component: Terms },
  { path: '/privacy-policy', component: PrivacyPolicy },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
