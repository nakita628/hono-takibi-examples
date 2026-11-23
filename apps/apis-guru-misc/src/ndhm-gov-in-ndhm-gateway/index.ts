import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05HeartbeatRoute,
  getV05HiServicesServiceIdRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05CareContextsDiscoverRoute,
  postV05CareContextsOnDiscoverRoute,
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsOnInitRoute,
  postV05ConsentRequestsOnStatusRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHipNotifyRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05ConsentsHiuNotifyRoute,
  postV05ConsentsHiuOnNotifyRoute,
  postV05ConsentsOnFetchRoute,
  postV05HealthInformationCmOnRequestRoute,
  postV05HealthInformationCmRequestRoute,
  postV05HealthInformationHipOnRequestRoute,
  postV05HealthInformationHipRequestRoute,
  postV05HealthInformationNotifyRoute,
  postV05LinksLinkAddContextsRoute,
  postV05LinksLinkConfirmRoute,
  postV05LinksLinkInitRoute,
  postV05LinksLinkOnAddContextsRoute,
  postV05LinksLinkOnConfirmRoute,
  postV05LinksLinkOnInitRoute,
  postV05PatientsFindRoute,
  postV05PatientsOnFindRoute,
  postV05PatientsProfileOnShareRoute,
  postV05PatientsProfileShareRoute,
  postV05PatientsSmsNotifyRoute,
  postV05PatientsSmsOnNotifyRoute,
  postV05SessionsRoute,
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsCmOnInitRoute,
  postV05SubscriptionRequestsHiuNotifyRoute,
  postV05SubscriptionRequestsHiuOnNotifyRoute,
  postV05SubscriptionsHiuNotifyRoute,
  postV05SubscriptionsHiuOnNotifyRoute,
  postV05UsersAuthConfirmRoute,
  postV05UsersAuthFetchModesRoute,
  postV05UsersAuthInitRoute,
  postV05UsersAuthNotifyRoute,
  postV05UsersAuthOnConfirmRoute,
  postV05UsersAuthOnFetchModesRoute,
  postV05UsersAuthOnInitRoute,
  postV05UsersAuthOnNotifyRoute,
} from './routes'
import {
  getV05CertsRouteHandler,
  getV05HeartbeatRouteHandler,
  getV05HiServicesServiceIdRouteHandler,
  getV05WellKnownOpenidConfigurationRouteHandler,
  postV05CareContextsDiscoverRouteHandler,
  postV05CareContextsOnDiscoverRouteHandler,
  postV05ConsentRequestsInitRouteHandler,
  postV05ConsentRequestsOnInitRouteHandler,
  postV05ConsentRequestsOnStatusRouteHandler,
  postV05ConsentRequestsStatusRouteHandler,
  postV05ConsentsFetchRouteHandler,
  postV05ConsentsHipNotifyRouteHandler,
  postV05ConsentsHipOnNotifyRouteHandler,
  postV05ConsentsHiuNotifyRouteHandler,
  postV05ConsentsHiuOnNotifyRouteHandler,
  postV05ConsentsOnFetchRouteHandler,
  postV05HealthInformationCmOnRequestRouteHandler,
  postV05HealthInformationCmRequestRouteHandler,
  postV05HealthInformationHipOnRequestRouteHandler,
  postV05HealthInformationHipRequestRouteHandler,
  postV05HealthInformationNotifyRouteHandler,
  postV05LinksLinkAddContextsRouteHandler,
  postV05LinksLinkConfirmRouteHandler,
  postV05LinksLinkInitRouteHandler,
  postV05LinksLinkOnAddContextsRouteHandler,
  postV05LinksLinkOnConfirmRouteHandler,
  postV05LinksLinkOnInitRouteHandler,
  postV05PatientsFindRouteHandler,
  postV05PatientsOnFindRouteHandler,
  postV05PatientsProfileOnShareRouteHandler,
  postV05PatientsProfileShareRouteHandler,
  postV05PatientsSmsNotifyRouteHandler,
  postV05PatientsSmsOnNotifyRouteHandler,
  postV05SessionsRouteHandler,
  postV05SubscriptionRequestsCmInitRouteHandler,
  postV05SubscriptionRequestsCmOnInitRouteHandler,
  postV05SubscriptionRequestsHiuNotifyRouteHandler,
  postV05SubscriptionRequestsHiuOnNotifyRouteHandler,
  postV05SubscriptionsHiuNotifyRouteHandler,
  postV05SubscriptionsHiuOnNotifyRouteHandler,
  postV05UsersAuthConfirmRouteHandler,
  postV05UsersAuthFetchModesRouteHandler,
  postV05UsersAuthInitRouteHandler,
  postV05UsersAuthNotifyRouteHandler,
  postV05UsersAuthOnConfirmRouteHandler,
  postV05UsersAuthOnFetchModesRouteHandler,
  postV05UsersAuthOnInitRouteHandler,
  postV05UsersAuthOnNotifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV05WellKnownOpenidConfigurationRoute, getV05WellKnownOpenidConfigurationRouteHandler)
  .openapi(postV05CareContextsDiscoverRoute, postV05CareContextsDiscoverRouteHandler)
  .openapi(postV05CareContextsOnDiscoverRoute, postV05CareContextsOnDiscoverRouteHandler)
  .openapi(getV05CertsRoute, getV05CertsRouteHandler)
  .openapi(postV05ConsentRequestsInitRoute, postV05ConsentRequestsInitRouteHandler)
  .openapi(postV05ConsentRequestsOnInitRoute, postV05ConsentRequestsOnInitRouteHandler)
  .openapi(postV05ConsentRequestsOnStatusRoute, postV05ConsentRequestsOnStatusRouteHandler)
  .openapi(postV05ConsentRequestsStatusRoute, postV05ConsentRequestsStatusRouteHandler)
  .openapi(postV05ConsentsFetchRoute, postV05ConsentsFetchRouteHandler)
  .openapi(postV05ConsentsHipNotifyRoute, postV05ConsentsHipNotifyRouteHandler)
  .openapi(postV05ConsentsHipOnNotifyRoute, postV05ConsentsHipOnNotifyRouteHandler)
  .openapi(postV05ConsentsHiuNotifyRoute, postV05ConsentsHiuNotifyRouteHandler)
  .openapi(postV05ConsentsHiuOnNotifyRoute, postV05ConsentsHiuOnNotifyRouteHandler)
  .openapi(postV05ConsentsOnFetchRoute, postV05ConsentsOnFetchRouteHandler)
  .openapi(
    postV05HealthInformationCmOnRequestRoute,
    postV05HealthInformationCmOnRequestRouteHandler,
  )
  .openapi(postV05HealthInformationCmRequestRoute, postV05HealthInformationCmRequestRouteHandler)
  .openapi(
    postV05HealthInformationHipOnRequestRoute,
    postV05HealthInformationHipOnRequestRouteHandler,
  )
  .openapi(postV05HealthInformationHipRequestRoute, postV05HealthInformationHipRequestRouteHandler)
  .openapi(postV05HealthInformationNotifyRoute, postV05HealthInformationNotifyRouteHandler)
  .openapi(getV05HeartbeatRoute, getV05HeartbeatRouteHandler)
  .openapi(getV05HiServicesServiceIdRoute, getV05HiServicesServiceIdRouteHandler)
  .openapi(postV05LinksLinkAddContextsRoute, postV05LinksLinkAddContextsRouteHandler)
  .openapi(postV05LinksLinkConfirmRoute, postV05LinksLinkConfirmRouteHandler)
  .openapi(postV05LinksLinkInitRoute, postV05LinksLinkInitRouteHandler)
  .openapi(postV05LinksLinkOnAddContextsRoute, postV05LinksLinkOnAddContextsRouteHandler)
  .openapi(postV05LinksLinkOnConfirmRoute, postV05LinksLinkOnConfirmRouteHandler)
  .openapi(postV05LinksLinkOnInitRoute, postV05LinksLinkOnInitRouteHandler)
  .openapi(postV05PatientsFindRoute, postV05PatientsFindRouteHandler)
  .openapi(postV05PatientsOnFindRoute, postV05PatientsOnFindRouteHandler)
  .openapi(postV05PatientsProfileOnShareRoute, postV05PatientsProfileOnShareRouteHandler)
  .openapi(postV05PatientsProfileShareRoute, postV05PatientsProfileShareRouteHandler)
  .openapi(postV05PatientsSmsNotifyRoute, postV05PatientsSmsNotifyRouteHandler)
  .openapi(postV05PatientsSmsOnNotifyRoute, postV05PatientsSmsOnNotifyRouteHandler)
  .openapi(postV05SessionsRoute, postV05SessionsRouteHandler)
  .openapi(postV05SubscriptionRequestsCmInitRoute, postV05SubscriptionRequestsCmInitRouteHandler)
  .openapi(
    postV05SubscriptionRequestsCmOnInitRoute,
    postV05SubscriptionRequestsCmOnInitRouteHandler,
  )
  .openapi(
    postV05SubscriptionRequestsHiuNotifyRoute,
    postV05SubscriptionRequestsHiuNotifyRouteHandler,
  )
  .openapi(
    postV05SubscriptionRequestsHiuOnNotifyRoute,
    postV05SubscriptionRequestsHiuOnNotifyRouteHandler,
  )
  .openapi(postV05SubscriptionsHiuNotifyRoute, postV05SubscriptionsHiuNotifyRouteHandler)
  .openapi(postV05SubscriptionsHiuOnNotifyRoute, postV05SubscriptionsHiuOnNotifyRouteHandler)
  .openapi(postV05UsersAuthConfirmRoute, postV05UsersAuthConfirmRouteHandler)
  .openapi(postV05UsersAuthFetchModesRoute, postV05UsersAuthFetchModesRouteHandler)
  .openapi(postV05UsersAuthInitRoute, postV05UsersAuthInitRouteHandler)
  .openapi(postV05UsersAuthNotifyRoute, postV05UsersAuthNotifyRouteHandler)
  .openapi(postV05UsersAuthOnConfirmRoute, postV05UsersAuthOnConfirmRouteHandler)
  .openapi(postV05UsersAuthOnFetchModesRoute, postV05UsersAuthOnFetchModesRouteHandler)
  .openapi(postV05UsersAuthOnInitRoute, postV05UsersAuthOnInitRouteHandler)
  .openapi(postV05UsersAuthOnNotifyRoute, postV05UsersAuthOnNotifyRouteHandler)

export default app
