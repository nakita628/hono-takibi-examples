import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  deleteMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesEnterpriseRoute,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  getMetadataTemplatesGlobalRoute,
  getMetadataTemplatesRoute,
  getMetadataTemplatesScopeTemplateKeySchemaRoute,
  getMetadataTemplatesTemplateIdRoute,
  postMetadataTemplatesSchemaClassificationsRoute,
  postMetadataTemplatesSchemaRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
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
  .openapi(deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMetadataTemplatesGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTemplatesSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTemplatesSchemaClassificationsRoute, (c) => {
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
