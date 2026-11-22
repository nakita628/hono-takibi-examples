import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdRoute,
  postGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsGroupHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
