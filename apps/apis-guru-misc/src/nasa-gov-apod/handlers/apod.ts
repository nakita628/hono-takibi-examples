import { OpenAPIHono } from '@hono/zod-openapi'
import { getApodRoute } from '../routes'

const app = new OpenAPIHono()

export const apodHandler = app.openapi(getApodRoute, (c) => {
  throw new Error('Not implemented')
})
