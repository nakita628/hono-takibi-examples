import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePublicV1GroupsGroupIdPermissionsPermissionIdRoute,
  getPublicV1GroupsGroupIdPermissionsRoute,
  postPublicV1GroupsGroupIdPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const publicGroupPermissionsHandler = app
  .openapi(getPublicV1GroupsGroupIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPublicV1GroupsGroupIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePublicV1GroupsGroupIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
