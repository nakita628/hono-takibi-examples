import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameProtectedResourcesSummaryRoute,
  getV1ParentCryptoKeysRoute,
  getV1ScopeProtectedResourcesSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1NameProtectedResourcesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCryptoKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ScopeProtectedResourcesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
