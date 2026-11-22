import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupSettingTemplatesGroupSettingTemplateIdRoute,
  getGroupSettingTemplatesCountRoute,
  getGroupSettingTemplatesGroupSettingTemplateIdRoute,
  getGroupSettingTemplatesRoute,
  patchGroupSettingTemplatesGroupSettingTemplateIdRoute,
  postGroupSettingTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupSettingTemplatesGroupSettingTemplateHandler = app
  .openapi(getGroupSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupSettingTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupSettingTemplatesGroupSettingTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupSettingTemplatesGroupSettingTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupSettingTemplatesGroupSettingTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupSettingTemplatesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
