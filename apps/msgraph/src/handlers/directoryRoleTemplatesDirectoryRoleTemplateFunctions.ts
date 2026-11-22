import { OpenAPIHono } from '@hono/zod-openapi'
import { getDirectoryRoleTemplatesDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const directoryRoleTemplatesDirectoryRoleTemplateFunctionsHandler = app.openapi(
  getDirectoryRoleTemplatesDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
