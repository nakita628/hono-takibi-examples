import { OpenAPIHono } from '@hono/zod-openapi'
import { getLegalSearchIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const legalHandler = app.openapi(getLegalSearchIndexRoute, (c) => {
  throw new Error('Not implemented')
})
