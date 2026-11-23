import { OpenAPIHono } from '@hono/zod-openapi'
import { getRdwservicesAdditionaltaxliabilityRoute } from '../routes'

const app = new OpenAPIHono()

export const rdwservicesHandler = app.openapi(getRdwservicesAdditionaltaxliabilityRoute, (c) => {
  throw new Error('Not implemented')
})
