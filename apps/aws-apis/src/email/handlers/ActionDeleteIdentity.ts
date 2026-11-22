import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIdentityRoute, postActionDeleteIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIdentityHandler = app
  .openapi(getActionDeleteIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
