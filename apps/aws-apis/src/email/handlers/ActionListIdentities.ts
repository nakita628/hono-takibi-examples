import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListIdentitiesRoute, postActionListIdentitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListIdentitiesHandler = app
  .openapi(getActionListIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
