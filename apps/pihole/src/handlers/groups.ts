import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsNameRoute,
  getGroupsNameRoute,
  getGroupsRoute,
  postGroupsRoute,
  putGroupsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
