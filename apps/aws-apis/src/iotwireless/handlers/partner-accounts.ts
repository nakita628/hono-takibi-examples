import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePartnerAccountsPartnerAccountIdPartnerTypeRoute,
  getPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  getPartnerAccountsRoute,
  patchPartnerAccountsPartnerAccountIdPartnerTypeRoute,
  postPartnerAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnerAccountsHandler = app
  .openapi(postPartnerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartnerAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePartnerAccountsPartnerAccountIdPartnerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartnerAccountsPartnerAccountIdPartnerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPartnerAccountsPartnerAccountIdPartnerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
