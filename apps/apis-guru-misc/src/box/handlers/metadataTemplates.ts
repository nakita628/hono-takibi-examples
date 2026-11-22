import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesEnterpriseRoute,
  getMetadataTemplatesGlobalRoute,
  getMetadataTemplatesRoute,
  getMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesTemplateIdRoute,
  postMetadataTemplatesSchemaRoute,
  putMetadataTemplatesScopeTemplateKeySchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataTemplatesHandler = app
  .openapi(getMetadataTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesEnterpriseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTemplatesSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
