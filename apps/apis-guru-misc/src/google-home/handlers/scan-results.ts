import { OpenAPIHono } from '@hono/zod-openapi'
import { getScanResultsRoute } from '../routes'

const app = new OpenAPIHono()

export const scanResultsHandler = app.openapi(getScanResultsRoute, (c) => {
  throw new Error('Not implemented')
})
