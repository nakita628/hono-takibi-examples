import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupSettingTemplatesGetAvailableExtensionPropertiesRoute,
  postGroupSettingTemplatesGetByIdsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdCheckMemberGroupsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdCheckMemberObjectsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdGetMemberGroupsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdGetMemberObjectsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdRestoreRoute,
  postGroupSettingTemplatesValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSettingTemplatesGroupSettingTemplateActionsHandler = app
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
