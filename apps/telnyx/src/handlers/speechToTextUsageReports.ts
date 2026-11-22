import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLegacyReportingUsageReportsSpeechToText2Route,
  getLegacyReportingUsageReportsSpeechToTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const speechToTextUsageReportsHandler = app
  .openapi(getLegacyReportingUsageReportsSpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsSpeechToText2Route, (c) => {
    throw new Error('Not implemented')
  })
