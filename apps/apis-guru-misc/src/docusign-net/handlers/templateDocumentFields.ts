import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateDocumentFieldsHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
