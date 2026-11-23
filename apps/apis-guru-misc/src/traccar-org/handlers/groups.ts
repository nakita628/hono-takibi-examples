import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteGroupsIdRoute, getGroupsRoute, postGroupsRoute, putGroupsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
