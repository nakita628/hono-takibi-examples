import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteApplicationHandler = app.openapi(postDeleteApplicationRoute, (c) => {
  throw new Error('Not implemented')
})
