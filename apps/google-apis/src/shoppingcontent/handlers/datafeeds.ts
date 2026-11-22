import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdDatafeedsDatafeedIdRoute,
  getMerchantIdDatafeedsDatafeedIdRoute,
  getMerchantIdDatafeedsRoute,
  postDatafeedsBatchRoute,
  postMerchantIdDatafeedsDatafeedIdFetchNowRoute,
  postMerchantIdDatafeedsRoute,
  putMerchantIdDatafeedsDatafeedIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const datafeedsHandler = app
  .openapi(postDatafeedsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdDatafeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdDatafeedsDatafeedIdFetchNowRoute, (c) => {
    throw new Error('Not implemented')
  })
