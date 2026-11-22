import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
  deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
  getLegacyReportingBatchDetailRecordsSpeechToText2Route,
  getLegacyReportingBatchDetailRecordsSpeechToTextId2Route,
  getLegacyReportingBatchDetailRecordsSpeechToTextIdRoute,
  getLegacyReportingBatchDetailRecordsSpeechToTextRoute,
  postLegacyReportingBatchDetailRecordsSpeechToText2Route,
  postLegacyReportingBatchDetailRecordsSpeechToTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const speechToTextBatchReportsHandler = app
  .openapi(getLegacyReportingBatchDetailRecordsSpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsSpeechToTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsSpeechToTextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsSpeechToTextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsSpeechToText2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLegacyReportingBatchDetailRecordsSpeechToText2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegacyReportingBatchDetailRecordsSpeechToTextId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLegacyReportingBatchDetailRecordsSpeechToTextId2Route, (c) => {
    throw new Error('Not implemented')
  })
