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
} from '../routes'

const app = new OpenAPIHono()

export const v05Handler = app
  .openapi(postV05CareContextsOnDiscoverRoute, (c) => {
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
  .openapi(postV05ConsentsHipOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHiuOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05HeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkAddContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsProfileOnShareRoute, (c) => {
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
