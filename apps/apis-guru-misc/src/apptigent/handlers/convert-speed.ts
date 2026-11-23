import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertSpeedRoute } from '../routes'

const app = new OpenAPIHono()

export const convertSpeedHandler = app.openapi(postConvertSpeedRoute, (c) => {
  throw new Error('Not implemented')
})
