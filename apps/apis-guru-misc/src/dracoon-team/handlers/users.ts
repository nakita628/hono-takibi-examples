import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4UsersUserIdRoute,
  deleteV4UsersUserIdUserAttributesKeyRoute,
  getV4UsersRoute,
  getV4UsersUserIdGroupsRoute,
  getV4UsersUserIdLastAdminRoomsRoute,
  getV4UsersUserIdRolesRoute,
  getV4UsersUserIdRoomsRoute,
  getV4UsersUserIdRoute,
  getV4UsersUserIdUserAttributesRoute,
  postV4UsersRoute,
  postV4UsersUserIdMfaEmergencyCodeRoute,
  postV4UsersUserIdUserAttributesRoute,
  putV4UsersUserIdRoute,
  putV4UsersUserIdUserAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdLastAdminRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersUserIdMfaEmergencyCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdRoomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4UsersUserIdUserAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4UsersUserIdUserAttributesKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
