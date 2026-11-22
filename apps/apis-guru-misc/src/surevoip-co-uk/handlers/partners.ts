import { OpenAPIHono } from '@hono/zod-openapi'
import { getPartnersRoute } from '../routes'

const app = new OpenAPIHono()

export const partnersHandler = app.openapi(getPartnersRoute, (c) => {
  throw new Error('Not implemented')
})
