import { OpenAPIHono } from '@hono/zod-openapi'
import { getCivicinfoV2DivisionsRoute } from '../routes'

const app = new OpenAPIHono()

export const divisionsHandler = app.openapi(getCivicinfoV2DivisionsRoute, (c) => {
  throw new Error('Not implemented')
})
