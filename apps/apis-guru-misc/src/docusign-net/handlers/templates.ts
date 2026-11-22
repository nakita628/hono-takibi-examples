import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute,
  getV21AccountsAccountIdTemplatesRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRoute,
  getV21AccountsAccountIdTemplatesTemplateIdNotificationRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRoute,
  postV21AccountsAccountIdTemplatesRoute,
  putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  putV21AccountsAccountIdTemplatesTemplateIdNotificationRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRoute,
  putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getV21AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdTemplatesTemplateIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdTemplatePartRoute, (c) => {
    throw new Error('Not implemented')
  })
