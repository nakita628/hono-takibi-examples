import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
  putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const classificationsOnFoldersHandler = app
  .openapi(getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWoRoute, (c) => {
    throw new Error('Not implemented')
  })
