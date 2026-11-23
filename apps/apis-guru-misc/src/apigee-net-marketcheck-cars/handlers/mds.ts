import { OpenAPIHono } from '@hono/zod-openapi'
import { getMdsCarRoute } from '../routes'

const app = new OpenAPIHono()

export const mdsHandler = app.openapi(getMdsCarRoute, (c) => {
  throw new Error('Not implemented')
})
