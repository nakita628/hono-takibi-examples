import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimezonesRoute } from '../routes'

const app = new OpenAPIHono()

export const timezonesHandler = app.openapi(getTimezonesRoute, (c) => {
  throw new Error('Not implemented')
})
