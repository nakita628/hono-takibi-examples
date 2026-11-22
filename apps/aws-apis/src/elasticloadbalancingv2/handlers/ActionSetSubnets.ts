import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSetSubnetsRoute, postActionSetSubnetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSetSubnetsHandler = app
  .openapi(getActionSetSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSubnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
