import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeCustomFieldsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdCustomFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
