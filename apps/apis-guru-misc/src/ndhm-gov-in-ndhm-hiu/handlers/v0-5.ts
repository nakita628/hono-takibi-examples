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
} from '../routes'

const app = new OpenAPIHono()

export const v05Handler = app
  .openapi(getV05WellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsOnStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentRequestsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsOnFetchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationCmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHiuOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05HeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsOnFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsCmInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionRequestsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SubscriptionsHiuNotifyRoute, (c) => {
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
  .openapi(postV05UsersAuthNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnFetchModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05UsersAuthOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
