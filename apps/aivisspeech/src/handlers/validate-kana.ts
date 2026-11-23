import { OpenAPIHono } from '@hono/zod-openapi'
import { postValidateKanaRoute } from '../routes'

const app = new OpenAPIHono()

export const validateKanaHandler = app.openapi(postValidateKanaRoute, (c) => {
  throw new Error('Not implemented')
})
