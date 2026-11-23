import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlaysRoute } from '../routes'

const app = new OpenAPIHono()

export const playsHandler = app.openapi(getPlaysRoute, (c) => {
  throw new Error('Not implemented')
})
