import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
  postV21AccountsAccountIdUsersUserIdSignaturesRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute,
  putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userSignaturesHandler = app
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdUsersUserIdSignaturesSignatureIdImageTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
