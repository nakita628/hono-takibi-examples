import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRoute,
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeRecipientsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdIdentityProofTokenRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdViewsIdentityManualReviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
