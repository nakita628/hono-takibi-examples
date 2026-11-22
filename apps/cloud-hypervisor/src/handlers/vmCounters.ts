import { OpenAPIHono } from '@hono/zod-openapi'
import { getVmCountersRoute } from '../routes'

const app = new OpenAPIHono()

export const vmCountersHandler = app.openapi(getVmCountersRoute, (c) => {
  throw new Error('Not implemented')
})
