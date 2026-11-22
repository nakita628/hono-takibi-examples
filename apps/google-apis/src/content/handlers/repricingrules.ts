import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdRepricingrulesRuleIdRoute,
  getMerchantIdRepricingrulesRoute,
  getMerchantIdRepricingrulesRuleIdRepricingreportsRoute,
  getMerchantIdRepricingrulesRuleIdRoute,
  patchMerchantIdRepricingrulesRuleIdRoute,
  postMerchantIdRepricingrulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repricingrulesHandler = app
  .openapi(getMerchantIdRepricingrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRepricingrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRepricingrulesRuleIdRepricingreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
