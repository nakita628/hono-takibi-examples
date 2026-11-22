import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsIdRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  patchGroupsIdRoute,
  postGroupsRoute,
  putGroupsIdRoute,
} from '../routes'

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
  .openapi(getGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
