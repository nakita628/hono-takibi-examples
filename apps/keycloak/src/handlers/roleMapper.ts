import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsRoute,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute,
  postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const roleMapperHandler = app
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsRealmCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoleMappingsRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsRealmCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
