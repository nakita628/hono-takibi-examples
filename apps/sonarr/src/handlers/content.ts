import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentPathRoute } from '../routes'

const app = new OpenAPIHono()

export const contentHandler = app.openapi(getContentPathRoute, (c) => {
  throw new Error('Not implemented')
})
