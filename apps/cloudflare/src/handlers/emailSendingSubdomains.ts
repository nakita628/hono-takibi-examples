import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  getZonesZoneIdEmailSendingSubdomainsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsStatusRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdReputationComplaintsRoute,
  getZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  patchZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute,
  postZonesZoneIdEmailSendingSubdomainsPreviewRoute,
  postZonesZoneIdEmailSendingSubdomainsRoute,
  postZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSendingSubdomainsHandler = app
  .openapi(getZonesZoneIdEmailSendingSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailSendingSubdomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailSendingSubdomainsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdEmailSendingSubdomainsSubdomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailSendingSubdomainsSubdomainIdDnsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdEmailSendingSubdomainsSubdomainIdReputationComplaintsRoute, (c) => {
    throw new Error('Not implemented')
  })
