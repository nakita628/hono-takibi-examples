import { OpenAPIHono } from '@hono/zod-openapi'
import { getOctocatRoute } from '../routes'

const app = new OpenAPIHono()

export const octocatHandler = app.openapi(getOctocatRoute, (c) => {
  throw new Error('Not implemented')
})
