import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeEmailSettingsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdEmailSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
