import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphCheckMemberGroupsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphCheckMemberObjectsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphGetMemberGroupsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphGetMemberObjectsRoute,
  postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphRestoreRoute,
  postGroupSettingTemplatesMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postGroupSettingTemplatesMicrosoftGraphGetByIdsRoute,
  postGroupSettingTemplatesMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSettingTemplatesActionsHandler = app
  .openapi(postGroupSettingTemplatesMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphCheckMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphCheckMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphGetMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphGetMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postGroupSettingTemplatesGroupSettingTemplateIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
