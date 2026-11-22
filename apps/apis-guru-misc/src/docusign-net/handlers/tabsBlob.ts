import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute,
  putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tabsBlobHandler = app
  .openapi(getV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdEnvelopesEnvelopeIdTabsBlobRoute, (c) => {
    throw new Error('Not implemented')
  })
