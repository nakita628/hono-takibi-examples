import { OpenAPIHono } from '@hono/zod-openapi'
import { getListAllGroupsRoute, postListAllGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const listAllGroupsHandler = app
  .openapi(getListAllGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postListAllGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
