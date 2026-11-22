import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute,
  getV1OrganizationsOrganizationIdNotificationsRoute,
  getV1OrganizationsOrganizationIdNotificationTypesRoute,
  patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getV1OrganizationsOrganizationIdNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdNotificationTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1OrganizationsOrganizationIdMembersUserIdNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
