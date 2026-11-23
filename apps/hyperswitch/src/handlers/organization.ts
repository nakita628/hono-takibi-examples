import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationIdRoute, postOrganizationRoute, putOrganizationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationHandler = app
  .openapi(postOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
