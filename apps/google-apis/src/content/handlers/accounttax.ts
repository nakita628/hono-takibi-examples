import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdAccounttaxAccountIdRoute,
  getMerchantIdAccounttaxRoute,
  postAccounttaxBatchRoute,
  putMerchantIdAccounttaxAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accounttaxHandler = app
  .openapi(postAccounttaxBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccounttaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccounttaxAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdAccounttaxAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
