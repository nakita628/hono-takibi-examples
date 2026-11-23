import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesEnterpriseRoute,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  getMetadataTemplatesGlobalRoute,
  getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute,
  getMetadataTemplatesRoute,
  getMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesTemplateIdRoute,
  postMetadataTemplatesSchemaClassificationsRoute,
  postMetadataTemplatesSchemaRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
  putMetadataTemplatesScopeTemplateKeySchemaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataTemplatesHandler = app
  .openapi(getMetadataTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataTemplatesScopeTemplateKeySchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesEnterpriseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTemplatesSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTemplatesSchemaClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
