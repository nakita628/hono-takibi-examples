import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationsOnFilesHandler = app
  .openapi(getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
