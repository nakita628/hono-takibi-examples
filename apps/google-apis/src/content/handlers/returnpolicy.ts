import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdReturnpolicyReturnPolicyIdRoute,
  getMerchantIdReturnpolicyReturnPolicyIdRoute,
  getMerchantIdReturnpolicyRoute,
  postMerchantIdReturnpolicyRoute,
  postReturnpolicyBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnpolicyHandler = app
  .openapi(postReturnpolicyBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnpolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
