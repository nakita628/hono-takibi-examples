import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRoute,
  postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestInquiryHandler = app
  .openapi(postUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDRequestInquiryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
