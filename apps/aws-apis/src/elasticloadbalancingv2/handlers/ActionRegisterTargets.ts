import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRegisterTargetsRoute, postActionRegisterTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterTargetsHandler = app
  .openapi(getActionRegisterTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
