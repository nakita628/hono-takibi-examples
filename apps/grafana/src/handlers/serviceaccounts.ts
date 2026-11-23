import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServiceaccountsServiceAccountIdRoute,
  deleteServiceaccountsServiceAccountIdTokensTokenIdRoute,
  getServiceaccountsSearchRoute,
  getServiceaccountsServiceAccountIdRoute,
  getServiceaccountsServiceAccountIdTokensRoute,
  patchServiceaccountsServiceAccountIdRoute,
  postServiceaccountsRoute,
  postServiceaccountsServiceAccountIdTokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceaccountsHandler = app
  .openapi(postServiceaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceaccountsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServiceaccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceaccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServiceaccountsServiceAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceaccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServiceaccountsServiceAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServiceaccountsServiceAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
