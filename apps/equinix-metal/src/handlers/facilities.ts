import { OpenAPIHono } from '@hono/zod-openapi'
import { getFacilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const facilitiesHandler = app.openapi(getFacilitiesRoute, (c) => {
  throw new Error('Not implemented')
})
