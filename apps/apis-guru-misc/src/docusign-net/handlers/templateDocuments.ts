import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateDocumentsHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
