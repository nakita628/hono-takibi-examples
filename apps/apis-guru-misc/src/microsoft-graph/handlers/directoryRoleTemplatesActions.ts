import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphCheckMemberGroupsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphCheckMemberObjectsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphGetMemberGroupsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphGetMemberObjectsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphRestoreRoute,
  postDirectoryRoleTemplatesMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDirectoryRoleTemplatesMicrosoftGraphGetByIdsRoute,
  postDirectoryRoleTemplatesMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRoleTemplatesActionsHandler = app
  .openapi(postDirectoryRoleTemplatesMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphCheckMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphCheckMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphGetMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphGetMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
