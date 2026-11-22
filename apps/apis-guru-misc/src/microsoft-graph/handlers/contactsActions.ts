import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postContactsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postContactsMicrosoftGraphGetByIdsRoute,
  postContactsMicrosoftGraphValidatePropertiesRoute,
  postContactsOrgContactIdMicrosoftGraphCheckMemberGroupsRoute,
  postContactsOrgContactIdMicrosoftGraphCheckMemberObjectsRoute,
  postContactsOrgContactIdMicrosoftGraphGetMemberGroupsRoute,
  postContactsOrgContactIdMicrosoftGraphGetMemberObjectsRoute,
  postContactsOrgContactIdMicrosoftGraphRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactsActionsHandler = app
  .openapi(postContactsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactsOrgContactIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
