import { OpenAPIHono } from '@hono/zod-openapi'
import { getSanctionsSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const sanctionsHandler = app.openapi(getSanctionsSourceRoute, (c) => {
  throw new Error('Not implemented')
})
