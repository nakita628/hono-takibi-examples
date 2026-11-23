import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIntegrationsCommerceExternalBusinessIdRoute,
  getIntegrationsCommerceExternalBusinessIdRoute,
  getIntegrationsIdRoute,
  getIntegrationsRoute,
  patchIntegrationsCommerceExternalBusinessIdRoute,
  postIntegrationsCommerceRoute,
  postIntegrationsLogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsCommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsCommerceExternalBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIntegrationsCommerceExternalBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIntegrationsCommerceExternalBusinessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
