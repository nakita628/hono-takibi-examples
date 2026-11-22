import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRoute,
  get10dlcPhoneNumberAssignmentByProfileTaskIdRoute,
  post10dlcPhoneNumberAssignmentByProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkPhoneNumberCampaignsHandler = app
  .openapi(post10dlcPhoneNumberAssignmentByProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPhoneNumberAssignmentByProfileTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPhoneNumberAssignmentByProfileTaskIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
