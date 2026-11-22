import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrmTaskSeries202609Route } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app.openapi(postCrmTaskSeries202609Route, (c) => {
  throw new Error('Not implemented')
})
