import { OpenAPIHono } from '@hono/zod-openapi'
import { getBetaRoute } from '../routes'

const app = new OpenAPIHono()

export const betaHandler = app.openapi(getBetaRoute, (c) => {
  throw new Error('Not implemented')
})
