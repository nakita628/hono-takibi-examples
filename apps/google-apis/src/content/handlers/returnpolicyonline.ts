import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  getMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  getMerchantIdReturnpolicyonlineRoute,
  patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  postMerchantIdReturnpolicyonlineRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnpolicyonlineHandler = app
  .openapi(getMerchantIdReturnpolicyonlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnpolicyonlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
