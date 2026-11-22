import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1LivechatInquiriesGetOneRoute,
  getApiV1LivechatInquiriesListRoute,
  getApiV1LivechatInquiriesQueuedForUserRoute,
  postApiV1LivechatInquiriesReturnAsInquiryRoute,
  postApiV1LivechatInquiriesTakeRoute,
  putApiV1LivechatInquirySetSLARoute,
} from '../routes'

const app = new OpenAPIHono()

export const omnichannelInquiriesHandler = app
  .openapi(getApiV1LivechatInquiriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatInquiriesTakeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatInquiriesQueuedForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LivechatInquiriesGetOneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1LivechatInquirySetSLARoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1LivechatInquiriesReturnAsInquiryRoute, (c) => {
    throw new Error('Not implemented')
  })
