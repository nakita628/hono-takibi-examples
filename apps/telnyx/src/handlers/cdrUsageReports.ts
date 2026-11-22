import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingUsageReportsVoiceId2Route,
  deleteLegacyReportingUsageReportsVoiceIdRoute,
  getLegacyReportingUsageReportsVoice2Route,
  getLegacyReportingUsageReportsVoiceId2Route,
  getLegacyReportingUsageReportsVoiceIdRoute,
  getLegacyReportingUsageReportsVoiceRoute,
  getReportsCdrUsageReportsSyncRoute,
  postLegacyReportingUsageReportsVoice2Route,
  postLegacyReportingUsageReportsVoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cdrUsageReportsHandler = app
  .openapi(getLegacyReportingUsageReportsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsVoice2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingUsageReportsVoice2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingUsageReportsVoiceId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingUsageReportsVoiceId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsCdrUsageReportsSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
