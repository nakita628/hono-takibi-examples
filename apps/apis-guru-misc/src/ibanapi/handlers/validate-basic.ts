import { OpenAPIHono } from '@hono/zod-openapi'
import { getValidateBasicRoute } from '../routes'

const app = new OpenAPIHono()

export const validateBasicHandler = app.openapi(getValidateBasicRoute, (c) => {
  throw new Error('Not implemented')
})
