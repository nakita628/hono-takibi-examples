import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimezoneTxtRoute } from '../routes'

const app = new OpenAPIHono()

export const timezoneTxtHandler = app.openapi(getTimezoneTxtRoute, (c) => {
  throw new Error('Not implemented')
})
