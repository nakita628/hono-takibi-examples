import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingBatchDetailRecordsVoiceId2Route,
  deleteLegacyReportingBatchDetailRecordsVoiceIdRoute,
  getLegacyReportingBatchDetailRecordsVoice2Route,
  getLegacyReportingBatchDetailRecordsVoiceFields2Route,
  getLegacyReportingBatchDetailRecordsVoiceFieldsRoute,
  getLegacyReportingBatchDetailRecordsVoiceId2Route,
  getLegacyReportingBatchDetailRecordsVoiceIdRoute,
  getLegacyReportingBatchDetailRecordsVoiceRoute,
  postLegacyReportingBatchDetailRecordsVoice2Route,
  postLegacyReportingBatchDetailRecordsVoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cdrReportsHandler = app
  .openapi(getLegacyReportingBatchDetailRecordsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsVoiceFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsVoice2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsVoice2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsVoiceFields2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsVoiceId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsVoiceId2Route, (c) => {
    throw new Error('Not implemented')
  })
