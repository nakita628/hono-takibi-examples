import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiKeysMerchantIdKeyIdRoute,
  getApiKeysMerchantIdKeyIdRoute,
  getApiKeysMerchantIdListRoute,
  postApiKeysMerchantIdKeyIdRoute,
  postApiKeysMerchantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app
  .openapi(postApiKeysMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysMerchantIdKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiKeysMerchantIdKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiKeysMerchantIdKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiKeysMerchantIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
