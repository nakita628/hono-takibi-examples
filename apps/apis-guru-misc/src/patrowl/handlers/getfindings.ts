import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetfindingsScanIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getfindingsHandler = app.openapi(getGetfindingsScanIdRoute, (c) => {
  throw new Error('Not implemented')
})
