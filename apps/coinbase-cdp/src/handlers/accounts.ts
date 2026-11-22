import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2AccountsAccountIdBalancesAssetRoute,
  getV2AccountsAccountIdBalancesRoute,
  getV2AccountsAccountIdRoute,
  getV2AccountsRoute,
  postV2AccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2AccountsAccountIdBalancesAssetRoute, (c) => {
    throw new Error('Not implemented')
  })
