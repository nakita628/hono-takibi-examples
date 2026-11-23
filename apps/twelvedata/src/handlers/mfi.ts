import { OpenAPIHono } from '@hono/zod-openapi'
import { getMfiRoute } from '../routes'

const app = new OpenAPIHono()

export const mfiHandler = app.openapi(getMfiRoute, (c) => {
  throw new Error('Not implemented')
})
