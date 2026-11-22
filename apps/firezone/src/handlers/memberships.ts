import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGroupsGroupIdMembershipsRoute,
  patchGroupsGroupIdMembershipsRoute,
  putGroupsGroupIdMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membershipsHandler = app
  .openapi(getGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
