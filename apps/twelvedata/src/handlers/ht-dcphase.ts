import { OpenAPIHono } from '@hono/zod-openapi'
import { getHtDcphaseRoute } from '../routes'

const app = new OpenAPIHono()

export const htDcphaseHandler = app.openapi(getHtDcphaseRoute, (c) => {
  throw new Error('Not implemented')
})
