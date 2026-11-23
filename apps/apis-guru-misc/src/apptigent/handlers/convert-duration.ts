import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertDurationRoute } from '../routes'

const app = new OpenAPIHono()

export const convertDurationHandler = app.openapi(postConvertDurationRoute, (c) => {
  throw new Error('Not implemented')
})
