import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserUserIDCardCardIDReplaceRoute } from '../routes'

const app = new OpenAPIHono()

export const replaceHandler = app.openapi(postUserUserIDCardCardIDReplaceRoute, (c) => {
  throw new Error('Not implemented')
})
