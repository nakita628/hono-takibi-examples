import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateDocumentVisibilityHandler = app
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsDocumentVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
