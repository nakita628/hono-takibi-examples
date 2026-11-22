import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateDocumentTabsHandler = app
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberTabsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
