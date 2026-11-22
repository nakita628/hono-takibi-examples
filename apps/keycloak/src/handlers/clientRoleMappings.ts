import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
  postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const clientRoleMappingsHandler = app
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdAvailableRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminRealmsRealmOrganizationsOrgIdGroupsGroupIdRoleMappingsClientsClientIdCompositeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdCompositeRoute, (c) => {
    throw new Error('Not implemented')
  })
