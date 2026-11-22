import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIdMembersUserIdRoute,
  deleteOrgOrgIdProvisionRoute,
  deleteOrgOrgIdRoute,
  getOrgOrgIdMembersRoute,
  getOrgOrgIdNotificationSettingsRoute,
  getOrgOrgIdProvisionRoute,
  getOrgOrgIdSettingsRoute,
  getOrgsRoute,
  postOrgOrgIdInviteRoute,
  postOrgOrgIdProvisionRoute,
  postOrgRoute,
  putOrgOrgIdMembersUpdateUserIdRoute,
  putOrgOrgIdMembersUserIdRoute,
  putOrgOrgIdNotificationSettingsRoute,
  putOrgOrgIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(postOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdMembersUpdateUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProvisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
