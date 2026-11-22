import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ClientsOrganizationIdRoute, getV2ClientsRoute } from '../routes'

const app = new OpenAPIHono()

export const clientsAPIHandler = app
  .openapi(getV2ClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ClientsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
