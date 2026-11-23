import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckPushRoute } from '../routes'

const app = new OpenAPIHono()

export const checkPushHandler = app.openapi(postCheckPushRoute, (c) => {
  throw new Error('Not implemented')
})
