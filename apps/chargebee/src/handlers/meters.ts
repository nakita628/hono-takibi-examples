import { OpenAPIHono } from '@hono/zod-openapi'
import { getMetersRoute } from '../routes'

const app = new OpenAPIHono()

export const metersHandler = app.openapi(getMetersRoute, (c) => {
  throw new Error('Not implemented')
})
