import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetDirectRoutingCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
  getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetPstnCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationsFunctionsHandler = app
  .openapi(
    getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetDirectRoutingCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getCommunicationsCallRecordsMicrosoftGraphCallRecordsGetPstnCallsFromDateTimeFromDateTimeToDateTimeToDateTimeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
