import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRegisterImageRoute, postActionRegisterImageRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterImageHandler = app
  .openapi(getActionRegisterImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterImageRoute, (c) => {
    throw new Error('Not implemented')
  })
