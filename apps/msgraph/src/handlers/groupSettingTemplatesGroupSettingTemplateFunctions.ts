import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupSettingTemplatesDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const groupSettingTemplatesGroupSettingTemplateFunctionsHandler = app.openapi(
  getGroupSettingTemplatesDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
