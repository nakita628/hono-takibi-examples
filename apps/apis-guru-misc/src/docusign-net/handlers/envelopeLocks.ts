import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  getV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  postV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const envelopeLocksHandler = app
  .openapi(deleteV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdLockRoute, (c) => {
    throw new Error('Not implemented')
  })
