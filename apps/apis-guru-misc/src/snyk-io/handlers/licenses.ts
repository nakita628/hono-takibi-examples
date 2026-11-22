import { OpenAPIHono } from '@hono/zod-openapi'
import { postOrgOrgIdLicensesRoute } from '../routes'

const app = new OpenAPIHono()

export const licensesHandler = app.openapi(postOrgOrgIdLicensesRoute, (c) => {
  throw new Error('Not implemented')
})
