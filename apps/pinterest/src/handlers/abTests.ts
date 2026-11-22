import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdAbTestsAbTestIdRoute,
  getAdAccountsAdAccountIdAbTestsRoute,
  patchAdAccountsAdAccountIdAbTestsRoute,
  postAdAccountsAdAccountIdAbTestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abTestsHandler = app
  .openapi(patchAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdAbTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdAbTestsAbTestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
