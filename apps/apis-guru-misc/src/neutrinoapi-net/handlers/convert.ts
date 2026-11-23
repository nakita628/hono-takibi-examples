import { OpenAPIHono } from '@hono/zod-openapi'
import { getConvertRoute } from '../routes'

const app = new OpenAPIHono()

export const convertHandler = app.openapi(getConvertRoute, (c) => {
  throw new Error('Not implemented')
})
