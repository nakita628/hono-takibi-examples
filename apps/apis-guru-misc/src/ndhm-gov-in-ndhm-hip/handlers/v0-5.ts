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
} from '../routes'

const app = new OpenAPIHono()

export const v05Handler = app
  .openapi(getV05WellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05CareContextsDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05CareContextsOnDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05ConsentsHipOnNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHipOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHipRequestRoute, (c) => {
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
  .openapi(postV05LinksLinkAddContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05LinksLinkOnAddContextsRoute, (c) => {
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
  .openapi(postV05PatientsProfileShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsSmsNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05PatientsSmsOnNotifyRoute, (c) => {
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
