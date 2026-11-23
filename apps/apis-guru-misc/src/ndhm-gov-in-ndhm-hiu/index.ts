import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05HeartbeatRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsOnInitRoute,
  postV05ConsentRequestsOnStatusRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHiuNotifyRoute,
  postV05ConsentsHiuOnNotifyRoute,
  postV05ConsentsOnFetchRoute,
  postV05HealthInformationCmRequestRoute,
  postV05HealthInformationHiuOnRequestRoute,
  postV05HealthInformationNotifyRoute,
  postV05HealthInformationTransferRoute,
  postV05PatientsFindRoute,
  postV05PatientsOnFindRoute,
  postV05SessionsRoute,
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsHiuNotifyRoute,
  postV05SubscriptionRequestsHiuOnInitRoute,
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
  getV05WellKnownOpenidConfigurationRouteHandler,
  postV05ConsentRequestsInitRouteHandler,
  postV05ConsentRequestsOnInitRouteHandler,
  postV05ConsentRequestsOnStatusRouteHandler,
  postV05ConsentRequestsStatusRouteHandler,
  postV05ConsentsFetchRouteHandler,
  postV05ConsentsHiuNotifyRouteHandler,
  postV05ConsentsHiuOnNotifyRouteHandler,
  postV05ConsentsOnFetchRouteHandler,
  postV05HealthInformationCmRequestRouteHandler,
  postV05HealthInformationHiuOnRequestRouteHandler,
  postV05HealthInformationNotifyRouteHandler,
  postV05HealthInformationTransferRouteHandler,
  postV05PatientsFindRouteHandler,
  postV05PatientsOnFindRouteHandler,
  postV05SessionsRouteHandler,
  postV05SubscriptionRequestsCmInitRouteHandler,
  postV05SubscriptionRequestsHiuNotifyRouteHandler,
  postV05SubscriptionRequestsHiuOnInitRouteHandler,
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
  .openapi(getV05CertsRoute, getV05CertsRouteHandler)
  .openapi(postV05ConsentRequestsInitRoute, postV05ConsentRequestsInitRouteHandler)
  .openapi(postV05ConsentRequestsOnInitRoute, postV05ConsentRequestsOnInitRouteHandler)
  .openapi(postV05ConsentRequestsOnStatusRoute, postV05ConsentRequestsOnStatusRouteHandler)
  .openapi(postV05ConsentRequestsStatusRoute, postV05ConsentRequestsStatusRouteHandler)
  .openapi(postV05ConsentsFetchRoute, postV05ConsentsFetchRouteHandler)
  .openapi(postV05ConsentsHiuNotifyRoute, postV05ConsentsHiuNotifyRouteHandler)
  .openapi(postV05ConsentsHiuOnNotifyRoute, postV05ConsentsHiuOnNotifyRouteHandler)
  .openapi(postV05ConsentsOnFetchRoute, postV05ConsentsOnFetchRouteHandler)
  .openapi(postV05HealthInformationCmRequestRoute, postV05HealthInformationCmRequestRouteHandler)
  .openapi(
    postV05HealthInformationHiuOnRequestRoute,
    postV05HealthInformationHiuOnRequestRouteHandler,
  )
  .openapi(postV05HealthInformationNotifyRoute, postV05HealthInformationNotifyRouteHandler)
  .openapi(postV05HealthInformationTransferRoute, postV05HealthInformationTransferRouteHandler)
  .openapi(getV05HeartbeatRoute, getV05HeartbeatRouteHandler)
  .openapi(postV05PatientsFindRoute, postV05PatientsFindRouteHandler)
  .openapi(postV05PatientsOnFindRoute, postV05PatientsOnFindRouteHandler)
  .openapi(postV05SessionsRoute, postV05SessionsRouteHandler)
  .openapi(postV05SubscriptionRequestsCmInitRoute, postV05SubscriptionRequestsCmInitRouteHandler)
  .openapi(
    postV05SubscriptionRequestsHiuNotifyRoute,
    postV05SubscriptionRequestsHiuNotifyRouteHandler,
  )
  .openapi(
    postV05SubscriptionRequestsHiuOnInitRoute,
    postV05SubscriptionRequestsHiuOnInitRouteHandler,
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
