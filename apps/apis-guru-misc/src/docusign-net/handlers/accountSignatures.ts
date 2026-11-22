import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  deleteV21AccountsAccountIdSignaturesSignatureIdRoute,
  getV21AccountsAccountIdSignaturesRoute,
  getV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  getV21AccountsAccountIdSignaturesSignatureIdRoute,
  postV21AccountsAccountIdSignaturesRoute,
  putV21AccountsAccountIdSignaturesRoute,
  putV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute,
  putV21AccountsAccountIdSignaturesSignatureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountSignaturesHandler = app
  .openapi(getV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
