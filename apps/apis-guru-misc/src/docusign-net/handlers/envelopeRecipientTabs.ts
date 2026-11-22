import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeRecipientTabsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
