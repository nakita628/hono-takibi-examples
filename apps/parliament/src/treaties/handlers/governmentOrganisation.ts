import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiGovernmentOrganisationRoute } from '../routes'

const app = new OpenAPIHono()

export const governmentOrganisationHandler = app.openapi(getApiGovernmentOrganisationRoute, (c) => {
  throw new Error('Not implemented')
})
