import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmGroupsIdRoleMappingsClientsClientRoute,
  deleteRealmUsersIdRoleMappingsClientsClientRoute,
  getRealmGroupsIdRoleMappingsClientsClientAvailableRoute,
  getRealmGroupsIdRoleMappingsClientsClientCompositeRoute,
  getRealmGroupsIdRoleMappingsClientsClientRoute,
  getRealmUsersIdRoleMappingsClientsClientAvailableRoute,
  getRealmUsersIdRoleMappingsClientsClientCompositeRoute,
  getRealmUsersIdRoleMappingsClientsClientRoute,
  postRealmGroupsIdRoleMappingsClientsClientRoute,
  postRealmUsersIdRoleMappingsClientsClientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientRoleMappingsHandler = app
  .openapi(deleteRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoleMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmUsersIdRoleMappingsClientsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmUsersIdRoleMappingsClientsClientCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
