import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiExternalAccountsIdRoute,
  getApiExternalAccountsIdRoute,
  getApiExternalAccountsRoute,
  patchApiExternalAccountsIdRoute,
  postApiExternalAccountsIdCompleteVerificationRoute,
  postApiExternalAccountsIdVerifyRoute,
  postApiExternalAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalAccountHandler = app
  .openapi(getApiExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiExternalAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsIdCompleteVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiExternalAccountsIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
