import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRoute,
  postV21AccountsAccountIdViewsConsoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeViewsHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsCorrectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsRecipientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSenderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdViewsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdViewsConsoleRoute, (c) => {
    throw new Error('Not implemented')
  })
