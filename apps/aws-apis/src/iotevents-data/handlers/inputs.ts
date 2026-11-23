import { OpenAPIHono } from '@hono/zod-openapi'
import { postInputsMessagesRoute } from '../routes'

const app = new OpenAPIHono()

export const inputsHandler = app.openapi(postInputsMessagesRoute, (c) => {
  throw new Error('Not implemented')
})
