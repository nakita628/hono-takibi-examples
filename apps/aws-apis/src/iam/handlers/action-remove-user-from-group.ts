import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRemoveUserFromGroupRoute, postActionRemoveUserFromGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionRemoveUserFromGroupHandler = app
  .openapi(getActionRemoveUserFromGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRemoveUserFromGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
