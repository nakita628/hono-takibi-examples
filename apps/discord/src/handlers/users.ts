import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersMeApplicationsApplicationIdRoleConnectionRoute,
  deleteUsersMeGuildsGuildIdRoute,
  getUsersMeApplicationsApplicationIdEntitlementsRoute,
  getUsersMeApplicationsApplicationIdRoleConnectionRoute,
  getUsersMeConnectionsRoute,
  getUsersMeGuildsGuildIdMemberRoute,
  getUsersMeGuildsRoute,
  getUsersMeRoute,
  getUsersUserIdRoute,
  patchUsersMeRoute,
  postUsersMeChannelsRoute,
  putUsersMeApplicationsApplicationIdRoleConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeApplicationsApplicationIdEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeApplicationsApplicationIdRoleConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersMeApplicationsApplicationIdRoleConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeApplicationsApplicationIdRoleConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersMeChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeGuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersMeGuildsGuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersMeGuildsGuildIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
