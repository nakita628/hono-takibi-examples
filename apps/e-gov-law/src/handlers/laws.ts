import { OpenAPIHono } from '@hono/zod-openapi'
import { getLawsRoute } from '../routes'

const app = new OpenAPIHono()

export const lawsHandler = app.openapi(getLawsRoute, (c) => {
  throw new Error('Not implemented')
})
