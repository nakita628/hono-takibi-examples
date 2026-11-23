import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertCaseRoute } from '../routes'

const app = new OpenAPIHono()

export const convertCaseHandler = app.openapi(postConvertCaseRoute, (c) => {
  throw new Error('Not implemented')
})
