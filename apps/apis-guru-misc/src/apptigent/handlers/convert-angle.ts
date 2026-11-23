import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertAngleRoute } from '../routes'

const app = new OpenAPIHono()

export const convertAngleHandler = app.openapi(postConvertAngleRoute, (c) => {
  throw new Error('Not implemented')
})
