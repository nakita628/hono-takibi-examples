import { OpenAPIHono } from '@hono/zod-openapi'
import { getManagedJobTemplatesRoute, getManagedJobTemplatesTemplateNameRoute } from '../routes'

const app = new OpenAPIHono()

export const managedJobTemplatesHandler = app
  .openapi(getManagedJobTemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedJobTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
