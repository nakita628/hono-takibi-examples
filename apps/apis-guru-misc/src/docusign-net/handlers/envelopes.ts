import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRoute,
  getV21AccountsAccountIdEnvelopesRoute,
  postV21AccountsAccountIdEnvelopesRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRoute,
  putV21AccountsAccountIdEnvelopesStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopesHandler = app
  .openapi(getV21AccountsAccountIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdAuditEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdDocumentsDocumentIdPagesPageNumberPageImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdInitialsImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdSignatureImageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
