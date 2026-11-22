import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdCheckMemberGroupsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdCheckMemberObjectsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdGetMemberGroupsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdGetMemberObjectsRoute,
  postDirectoryRoleTemplatesDirectoryRoleTemplateIdRestoreRoute,
  postDirectoryRoleTemplatesGetAvailableExtensionPropertiesRoute,
  postDirectoryRoleTemplatesGetByIdsRoute,
  postDirectoryRoleTemplatesValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryRoleTemplatesDirectoryRoleTemplateActionsHandler = app
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesDirectoryRoleTemplateIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryRoleTemplatesValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
