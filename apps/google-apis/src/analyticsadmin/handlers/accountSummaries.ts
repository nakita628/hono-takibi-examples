import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1betaAccountSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const accountSummariesHandler = app.openapi(getV1betaAccountSummariesRoute, (c) => {
  throw new Error('Not implemented')
})
