import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2ApiusageRoute } from '../routes'

const app = new OpenAPIHono()

export const checkAPIUsageHandler = app.openapi(getV2ApiusageRoute, (c) => {
  throw new Error('Not implemented')
})
