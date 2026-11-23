import { OpenAPIHono } from '@hono/zod-openapi'
import { postApplicationGetRoute } from '../routes'

const app = new OpenAPIHono()

export const applicationHandler = app.openapi(postApplicationGetRoute, (c) => {
  throw new Error('Not implemented')
})
