import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmGroupsIdRoleMappingsRealmRoute,
  deleteRealmUsersIdRoleMappingsRealmRoute,
  getRealmGroupsIdRoleMappingsRealmAvailableRoute,
  getRealmGroupsIdRoleMappingsRealmCompositeRoute,
  getRealmGroupsIdRoleMappingsRealmRoute,
  getRealmGroupsIdRoleMappingsRoute,
  getRealmUsersIdRoleMappingsRealmAvailableRoute,
  getRealmUsersIdRoleMappingsRealmCompositeRoute,
  getRealmUsersIdRoleMappingsRealmRoute,
  getRealmUsersIdRoleMappingsRoute,
  postRealmGroupsIdRoleMappingsRealmRoute,
  postRealmUsersIdRoleMappingsRealmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleMapperHandler = app
  .openapi(getRealmGroupsIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
