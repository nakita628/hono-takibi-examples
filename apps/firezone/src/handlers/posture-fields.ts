import { OpenAPIHono } from '@hono/zod-openapi'
import { getPostureFieldsRoute } from '../routes'

const app = new OpenAPIHono()

export const postureFieldsHandler = app.openapi(getPostureFieldsRoute, (c) => {
  throw new Error('Not implemented')
})
