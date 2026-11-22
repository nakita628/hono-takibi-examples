import { OpenAPIHono } from '@hono/zod-openapi'
import { getApodRoute } from '../routes'

const app = new OpenAPIHono()

export const requestTagHandler = app.openapi(getApodRoute, (c) => {
  throw new Error('Not implemented')
})
