import { OpenAPIHono } from '@hono/zod-openapi'
import { postPromotionalGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionalGrantsHandler = app.openapi(postPromotionalGrantsRoute, (c) => {
  throw new Error('Not implemented')
})
