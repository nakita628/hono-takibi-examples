import { OpenAPIHono } from '@hono/zod-openapi'
import { getCabwiseSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const cabwiseHandler = app.openapi(getCabwiseSearchRoute, (c) => {
  throw new Error('Not implemented')
})
