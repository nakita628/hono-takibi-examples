import { OpenAPIHono } from '@hono/zod-openapi'
import { postCompareStringsRoute } from '../routes'

const app = new OpenAPIHono()

export const compareStringsHandler = app.openapi(postCompareStringsRoute, (c) => {
  throw new Error('Not implemented')
})
