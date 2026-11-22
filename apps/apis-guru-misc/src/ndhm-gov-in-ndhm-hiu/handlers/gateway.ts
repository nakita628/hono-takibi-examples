import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05ConsentRequestsInitRoute,
  postV05ConsentRequestsStatusRoute,
  postV05ConsentsFetchRoute,
  postV05ConsentsHiuOnNotifyRoute,
  postV05HealthInformationCmRequestRoute,
  postV05HealthInformationNotifyRoute,
  postV05PatientsFindRoute,
  postV05SessionsRoute,
  postV05SubscriptionRequestsCmInitRoute,
  postV05SubscriptionRequestsHiuOnNotifyRoute,
  postV05SubscriptionsHiuOnNotifyRoute,
  postV05UsersAuthConfirmRoute,
  postV05UsersAuthFetchModesRoute,
  postV05UsersAuthInitRoute,
  postV05UsersAuthOnNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gatewayHandler = app
  .openapi(getV05WellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationCmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsCmInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthFetchModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
