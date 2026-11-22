import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeDocumentVisibilityHandler = app
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsDocumentVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdDocumentVisibilityRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
