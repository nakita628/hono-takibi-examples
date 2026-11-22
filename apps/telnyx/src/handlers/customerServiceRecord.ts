import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCustomerServiceRecordsCustomerServiceRecordIdRoute,
  getCustomerServiceRecordsRoute,
  postCustomerServiceRecordsPhoneNumberCoveragesRoute,
  postCustomerServiceRecordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerServiceRecordHandler = app
  .openapi(getCustomerServiceRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomerServiceRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCustomerServiceRecordsPhoneNumberCoveragesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCustomerServiceRecordsCustomerServiceRecordIdRoute, (c) => {
    throw new Error('Not implemented')
  })
