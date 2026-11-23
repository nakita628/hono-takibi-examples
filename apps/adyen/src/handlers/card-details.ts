import { OpenAPIHono } from '@hono/zod-openapi'
import { postCardDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const cardDetailsHandler = app.openapi(postCardDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
