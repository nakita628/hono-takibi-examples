import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersInstanceIdUserIdRoute,
  getUsersInstanceIdUserIdRoute,
  postUsersInstanceIdUserIdContactRoute,
  postUsersInstanceIdUserIdHierarchyRoute,
  postUsersInstanceIdUserIdIdentityInfoRoute,
  postUsersInstanceIdUserIdPhoneConfigRoute,
  postUsersInstanceIdUserIdRoutingProfileRoute,
  postUsersInstanceIdUserIdSecurityProfilesRoute,
  putUsersInstanceIdRoute,
  putUsersInstanceIdUserIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(putUsersInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersInstanceIdUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersInstanceIdUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersInstanceIdUserIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdHierarchyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdIdentityInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdPhoneConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdRoutingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInstanceIdUserIdSecurityProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
