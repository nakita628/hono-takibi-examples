import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaRoute,
  postMetadataTemplatesSchemaClassificationsRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAddRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDeleteRoute,
  putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationsHandler = app
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
  .openapi(postMetadataTemplatesSchemaClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
