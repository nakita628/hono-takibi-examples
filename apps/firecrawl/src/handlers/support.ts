import { OpenAPIHono } from '@hono/zod-openapi'
import { postSupportAskRoute } from '../routes'

const app = new OpenAPIHono()

export const supportHandler = app.openapi(postSupportAskRoute, (c) => {
  throw new Error('Not implemented')
})
