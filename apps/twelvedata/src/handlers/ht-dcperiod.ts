import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtDcperiodRoute } from '../routes'

const app = new OpenAPIHono()

export const htDcperiodHandler = app.openapi(getHtDcperiodRoute, (c) => {
  throw new Error('Not implemented')
})
