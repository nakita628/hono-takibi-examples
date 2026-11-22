import { OpenAPIHono } from '@hono/zod-openapi'
import { postServiceGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const ServiceGraphHandler = app.openapi(postServiceGraphRoute, (c) => {
  throw new Error('Not implemented')
})
