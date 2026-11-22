import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWebhooksOrganizationsOrganizationIdInitializationStatusRoute,
  postWebhooksOrganizationsOrganizationIdAppPortalAccessRoute,
  postWebhooksOrganizationsOrganizationIdInitializeRoute,
  postWebhooksOrganizationsOrganizationIdRefreshEndpointsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(postWebhooksOrganizationsOrganizationIdAppPortalAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebhooksOrganizationsOrganizationIdInitializationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksOrganizationsOrganizationIdInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWebhooksOrganizationsOrganizationIdRefreshEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
