import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05CareContextsOnDiscoverRoute,
  postV05ConsentsHipOnNotifyRoute,
  postV05HealthInformationHipOnRequestRoute,
  postV05HealthInformationNotifyRoute,
  postV05LinksLinkAddContextsRoute,
  postV05LinksLinkOnConfirmRoute,
  postV05LinksLinkOnInitRoute,
  postV05PatientsProfileOnShareRoute,
  postV05PatientsSmsNotifyRoute,
  postV05SessionsRoute,
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
  .openapi(postV05CareContextsOnDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHipOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
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
  .openapi(postV05PatientsProfileOnShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsSmsNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SessionsRoute, (c) => {
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
