import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdLogoRoute,
  deleteOrganizationsOrganizationIdRoute,
  getOrganizationsOrganizationIdBillingCreditsRoute,
  getOrganizationsOrganizationIdBillingSubscriptionRoute,
  getOrganizationsOrganizationIdRoute,
  getOrganizationsRoute,
  patchOrganizationsOrganizationIdMetadataRoute,
  patchOrganizationsOrganizationIdRoute,
  postOrganizationsOrganizationIdBillingCreditsRoute,
  postOrganizationsRoute,
  putOrganizationsOrganizationIdLogoRoute,
  putOrganizationsOrganizationIdMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrganizationIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBillingSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdBillingCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
