import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRoute,
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateRecipientsHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdViewsRecipientPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
