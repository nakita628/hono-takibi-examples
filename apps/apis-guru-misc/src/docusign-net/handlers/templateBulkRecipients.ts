import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRoute } from '../routes'

const app = new OpenAPIHono()

export const templateBulkRecipientsHandler = app.openapi(
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdBulkRecipientsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
