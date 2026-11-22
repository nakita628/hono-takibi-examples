import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestInquiryBatchHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryBatchItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
