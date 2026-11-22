import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
  putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templateRecipientTabsHandler = app
  .openapi(deleteV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTemplatesTemplateIdRecipientsRecipientIdTabsRoute, (c) => {
    throw new Error('Not implemented')
  })
