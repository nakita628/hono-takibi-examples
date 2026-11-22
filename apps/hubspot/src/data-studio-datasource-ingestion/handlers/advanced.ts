import { OpenAPIHono } from '@hono/zod-openapi'
import { postDataStudioDataSource202609Route } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(postDataStudioDataSource202609Route, (c) => {
  throw new Error('Not implemented')
})
