import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeTemplatesHandler = app
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdTemplatesTemplateIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
