import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertAreaRoute } from '../routes'

const app = new OpenAPIHono()

export const convertAreaHandler = app.openapi(postConvertAreaRoute, (c) => {
  throw new Error('Not implemented')
})
