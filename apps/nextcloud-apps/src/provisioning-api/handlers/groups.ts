import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpCloudGroupsGroupIdRoute,
  getOcsV2PhpCloudGroupsDetailsRoute,
  getOcsV2PhpCloudGroupsGroupIdRoute,
  getOcsV2PhpCloudGroupsGroupIdSubadminsRoute,
  getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute,
  getOcsV2PhpCloudGroupsGroupIdUsersRoute,
  getOcsV2PhpCloudGroupsRoute,
  postOcsV2PhpCloudGroupsRoute,
  putOcsV2PhpCloudGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getOcsV2PhpCloudGroupsGroupIdSubadminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpCloudGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpCloudGroupsGroupIdUsersDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
