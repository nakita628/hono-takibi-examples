import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeConsumerDisclosuresHandler = app
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV21AccountsAccountIdEnvelopesEnvelopeIdRecipientsRecipientIdConsumerDisclosureLangCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
