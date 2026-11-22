import { OpenAPIHono } from '@hono/zod-openapi'
import { getMultipleResponsesObjectRoute } from '../routes'

const app = new OpenAPIHono()

export const multipleResponsesHandler = app.openapi(getMultipleResponsesObjectRoute, (c) => {
  throw new Error('Not implemented')
})
