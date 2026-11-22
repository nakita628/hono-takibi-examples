import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumbersJobsIdRoute,
  getPhoneNumbersJobsRoute,
  postPhoneNumbersJobsDeletePhoneNumbersRoute,
  postPhoneNumbersJobsUpdateEmergencySettingsRoute,
  postPhoneNumbersJobsUpdatePhoneNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkPhoneNumberOperationsHandler = app
  .openapi(getPhoneNumbersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsDeletePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsUpdateEmergencySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneNumbersJobsUpdatePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneNumbersJobsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
