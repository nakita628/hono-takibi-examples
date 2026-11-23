import { OpenAPIHono } from '@hono/zod-openapi'
import { postDateTimeInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const dateTimeInfoHandler = app.openapi(postDateTimeInfoRoute, (c) => {
  throw new Error('Not implemented')
})
