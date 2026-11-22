import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdRoute,
  getGroupsGroupIdRoute,
  getGroupsRoute,
  postGroupsRoute,
  postGroupsTerminateSessionsRoute,
  putGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsTerminateSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
