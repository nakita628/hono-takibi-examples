import { OpenAPIHono } from '@hono/zod-openapi'
import { getInputsRoute } from '../routes'

const app = new OpenAPIHono()

export const inputsHandler = app.openapi(getInputsRoute, (c) => {
  throw new Error('Not implemented')
})
