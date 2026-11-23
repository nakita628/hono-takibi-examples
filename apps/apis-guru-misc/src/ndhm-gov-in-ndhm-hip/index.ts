import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05HeartbeatRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05CareContextsDiscoverRoute,
  postV05CareContextsOnDiscoverRoute,
  postV05ConsentsHipNotifyRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05HealthInformationHipOnRequestRoute,
  postV05HealthInformationHipRequestRoute,
  postV05HealthInformationNotifyRoute,
  postV05HealthInformationTransferRoute,
  postV05LinksLinkAddContextsRoute,
  postV05LinksLinkConfirmRoute,
  postV05LinksLinkInitRoute,
  postV05LinksLinkOnAddContextsRoute,
  postV05LinksLinkOnConfirmRoute,
  postV05LinksLinkOnInitRoute,
  postV05PatientsProfileOnShareRoute,
  postV05PatientsProfileShareRoute,
  postV05PatientsSmsNotifyRoute,
  postV05PatientsSmsOnNotifyRoute,
  postV05SessionsRoute,
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
  postV05CareContextsDiscoverRouteHandler,
  postV05CareContextsOnDiscoverRouteHandler,
  postV05ConsentsHipNotifyRouteHandler,
  postV05ConsentsHipOnNotifyRouteHandler,
  postV05HealthInformationHipOnRequestRouteHandler,
  postV05HealthInformationHipRequestRouteHandler,
  postV05HealthInformationNotifyRouteHandler,
  postV05HealthInformationTransferRouteHandler,
  postV05LinksLinkAddContextsRouteHandler,
  postV05LinksLinkConfirmRouteHandler,
  postV05LinksLinkInitRouteHandler,
  postV05LinksLinkOnAddContextsRouteHandler,
  postV05LinksLinkOnConfirmRouteHandler,
  postV05LinksLinkOnInitRouteHandler,
  postV05PatientsProfileOnShareRouteHandler,
  postV05PatientsProfileShareRouteHandler,
  postV05PatientsSmsNotifyRouteHandler,
  postV05PatientsSmsOnNotifyRouteHandler,
  postV05SessionsRouteHandler,
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
  .openapi(postV05ConsentsHipNotifyRoute, postV05ConsentsHipNotifyRouteHandler)
  .openapi(postV05ConsentsHipOnNotifyRoute, postV05ConsentsHipOnNotifyRouteHandler)
  .openapi(
    postV05HealthInformationHipOnRequestRoute,
    postV05HealthInformationHipOnRequestRouteHandler,
  )
  .openapi(postV05HealthInformationHipRequestRoute, postV05HealthInformationHipRequestRouteHandler)
  .openapi(postV05HealthInformationNotifyRoute, postV05HealthInformationNotifyRouteHandler)
  .openapi(postV05HealthInformationTransferRoute, postV05HealthInformationTransferRouteHandler)
  .openapi(getV05HeartbeatRoute, getV05HeartbeatRouteHandler)
  .openapi(postV05LinksLinkAddContextsRoute, postV05LinksLinkAddContextsRouteHandler)
  .openapi(postV05LinksLinkConfirmRoute, postV05LinksLinkConfirmRouteHandler)
  .openapi(postV05LinksLinkInitRoute, postV05LinksLinkInitRouteHandler)
  .openapi(postV05LinksLinkOnAddContextsRoute, postV05LinksLinkOnAddContextsRouteHandler)
  .openapi(postV05LinksLinkOnConfirmRoute, postV05LinksLinkOnConfirmRouteHandler)
  .openapi(postV05LinksLinkOnInitRoute, postV05LinksLinkOnInitRouteHandler)
  .openapi(postV05PatientsProfileOnShareRoute, postV05PatientsProfileOnShareRouteHandler)
  .openapi(postV05PatientsProfileShareRoute, postV05PatientsProfileShareRouteHandler)
  .openapi(postV05PatientsSmsNotifyRoute, postV05PatientsSmsNotifyRouteHandler)
  .openapi(postV05PatientsSmsOnNotifyRoute, postV05PatientsSmsOnNotifyRouteHandler)
  .openapi(postV05SessionsRoute, postV05SessionsRouteHandler)
  .openapi(postV05UsersAuthConfirmRoute, postV05UsersAuthConfirmRouteHandler)
  .openapi(postV05UsersAuthFetchModesRoute, postV05UsersAuthFetchModesRouteHandler)
  .openapi(postV05UsersAuthInitRoute, postV05UsersAuthInitRouteHandler)
  .openapi(postV05UsersAuthNotifyRoute, postV05UsersAuthNotifyRouteHandler)
  .openapi(postV05UsersAuthOnConfirmRoute, postV05UsersAuthOnConfirmRouteHandler)
  .openapi(postV05UsersAuthOnFetchModesRoute, postV05UsersAuthOnFetchModesRouteHandler)
  .openapi(postV05UsersAuthOnInitRoute, postV05UsersAuthOnInitRouteHandler)
  .openapi(postV05UsersAuthOnNotifyRoute, postV05UsersAuthOnNotifyRouteHandler)

export default app
