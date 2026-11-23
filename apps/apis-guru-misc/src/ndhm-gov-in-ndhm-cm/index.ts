import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05HeartbeatRoute,
  postV05CareContextsOnDiscoverRoute,
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05ConsentsHiuOnNotifyRoute,
  postV05HealthInformationNotifyRoute,
  postV05HealthInformationOnRequestRoute,
  postV05HealthInformationRequestRoute,
  postV05LinksLinkAddContextsRoute,
  postV05LinksLinkOnConfirmRoute,
  postV05LinksLinkOnInitRoute,
  postV05PatientsFindRoute,
  postV05PatientsProfileOnShareRoute,
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsHiuOnNotifyRoute,
  postV05SubscriptionsHiuOnNotifyRoute,
  postV05UsersAuthConfirmRoute,
  postV05UsersAuthFetchModesRoute,
  postV05UsersAuthInitRoute,
  postV05UsersAuthOnNotifyRoute,
} from './routes'
import {
  getV05HeartbeatRouteHandler,
  postV05CareContextsOnDiscoverRouteHandler,
  postV05ConsentRequestsInitRouteHandler,
  postV05ConsentRequestsStatusRouteHandler,
  postV05ConsentsFetchRouteHandler,
  postV05ConsentsHipOnNotifyRouteHandler,
  postV05ConsentsHiuOnNotifyRouteHandler,
  postV05HealthInformationNotifyRouteHandler,
  postV05HealthInformationOnRequestRouteHandler,
  postV05HealthInformationRequestRouteHandler,
  postV05LinksLinkAddContextsRouteHandler,
  postV05LinksLinkOnConfirmRouteHandler,
  postV05LinksLinkOnInitRouteHandler,
  postV05PatientsFindRouteHandler,
  postV05PatientsProfileOnShareRouteHandler,
  postV05SubscriptionRequestsCmInitRouteHandler,
  postV05SubscriptionRequestsHiuOnNotifyRouteHandler,
  postV05SubscriptionsHiuOnNotifyRouteHandler,
  postV05UsersAuthConfirmRouteHandler,
  postV05UsersAuthFetchModesRouteHandler,
  postV05UsersAuthInitRouteHandler,
  postV05UsersAuthOnNotifyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV05CareContextsOnDiscoverRoute, postV05CareContextsOnDiscoverRouteHandler)
  .openapi(postV05ConsentRequestsInitRoute, postV05ConsentRequestsInitRouteHandler)
  .openapi(postV05ConsentRequestsStatusRoute, postV05ConsentRequestsStatusRouteHandler)
  .openapi(postV05ConsentsFetchRoute, postV05ConsentsFetchRouteHandler)
  .openapi(postV05ConsentsHipOnNotifyRoute, postV05ConsentsHipOnNotifyRouteHandler)
  .openapi(postV05ConsentsHiuOnNotifyRoute, postV05ConsentsHiuOnNotifyRouteHandler)
  .openapi(postV05HealthInformationNotifyRoute, postV05HealthInformationNotifyRouteHandler)
  .openapi(postV05HealthInformationOnRequestRoute, postV05HealthInformationOnRequestRouteHandler)
  .openapi(postV05HealthInformationRequestRoute, postV05HealthInformationRequestRouteHandler)
  .openapi(getV05HeartbeatRoute, getV05HeartbeatRouteHandler)
  .openapi(postV05LinksLinkAddContextsRoute, postV05LinksLinkAddContextsRouteHandler)
  .openapi(postV05LinksLinkOnConfirmRoute, postV05LinksLinkOnConfirmRouteHandler)
  .openapi(postV05LinksLinkOnInitRoute, postV05LinksLinkOnInitRouteHandler)
  .openapi(postV05PatientsFindRoute, postV05PatientsFindRouteHandler)
  .openapi(postV05PatientsProfileOnShareRoute, postV05PatientsProfileOnShareRouteHandler)
  .openapi(postV05SubscriptionRequestsCmInitRoute, postV05SubscriptionRequestsCmInitRouteHandler)
  .openapi(
    postV05SubscriptionRequestsHiuOnNotifyRoute,
    postV05SubscriptionRequestsHiuOnNotifyRouteHandler,
  )
  .openapi(postV05SubscriptionsHiuOnNotifyRoute, postV05SubscriptionsHiuOnNotifyRouteHandler)
  .openapi(postV05UsersAuthConfirmRoute, postV05UsersAuthConfirmRouteHandler)
  .openapi(postV05UsersAuthFetchModesRoute, postV05UsersAuthFetchModesRouteHandler)
  .openapi(postV05UsersAuthInitRoute, postV05UsersAuthInitRouteHandler)
  .openapi(postV05UsersAuthOnNotifyRoute, postV05UsersAuthOnNotifyRouteHandler)

export default app
