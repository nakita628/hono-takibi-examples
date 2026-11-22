import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2TemplatesNamespaceKindNameParameterSchemaRoute, postV2DryRunRoute } from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getV2TemplatesNamespaceKindNameParameterSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DryRunRoute, (c) => {
    throw new Error('Not implemented')
  })
