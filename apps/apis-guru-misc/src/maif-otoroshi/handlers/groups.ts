import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiGroupsServiceGroupIdRoute,
  getApiGroupsRoute,
  getApiGroupsServiceGroupIdRoute,
  patchApiGroupsServiceGroupIdRoute,
  postApiGroupsRoute,
  putApiGroupsServiceGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getApiGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiGroupsServiceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
