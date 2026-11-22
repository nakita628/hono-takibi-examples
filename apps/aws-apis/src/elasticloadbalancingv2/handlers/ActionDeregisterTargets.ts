import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeregisterTargetsRoute, postActionDeregisterTargetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeregisterTargetsHandler = app
  .openapi(getActionDeregisterTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
