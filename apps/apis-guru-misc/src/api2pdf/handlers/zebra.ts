import { OpenAPIHono } from '@hono/zod-openapi'
import { getZebraRoute } from '../routes'

const app = new OpenAPIHono()

export const zebraHandler = app.openapi(getZebraRoute, (c) => {
  throw new Error('Not implemented')
})
