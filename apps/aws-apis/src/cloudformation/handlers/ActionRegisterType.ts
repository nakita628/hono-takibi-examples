import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRegisterTypeRoute, postActionRegisterTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterTypeHandler = app
  .openapi(getActionRegisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
