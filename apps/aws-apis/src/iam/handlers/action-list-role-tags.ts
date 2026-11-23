import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListRoleTagsRoute, postActionListRoleTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListRoleTagsHandler = app
  .openapi(getActionListRoleTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListRoleTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
