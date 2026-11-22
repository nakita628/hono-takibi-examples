import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagingGroupsIdRoute,
  getPackagingGroupsIdRoute,
  getPackagingGroupsRoute,
  postPackagingGroupsRoute,
  putPackagingGroupsIdConfigureLogsRoute,
  putPackagingGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagingGroupsHandler = app
  .openapi(putPackagingGroupsIdConfigureLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPackagingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagingGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPackagingGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
