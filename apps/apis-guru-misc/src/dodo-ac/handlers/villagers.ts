import { OpenAPIHono } from '@hono/zod-openapi'
import { getVillagersRoute } from '../routes'

const app = new OpenAPIHono()

export const villagersHandler = app.openapi(getVillagersRoute, (c) => {
  throw new Error('Not implemented')
})
