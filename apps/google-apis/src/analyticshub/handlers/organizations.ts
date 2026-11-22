import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OrganizationDataExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app.openapi(getV1OrganizationDataExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
