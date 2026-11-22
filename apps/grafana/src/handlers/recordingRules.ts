import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRecordingRulesRecordingRuleIDRoute,
  deleteRecordingRulesWriterRoute,
  getRecordingRulesRoute,
  getRecordingRulesWriterRoute,
  postRecordingRulesRoute,
  postRecordingRulesTestRoute,
  postRecordingRulesWriterRoute,
  putRecordingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recordingRulesHandler = app
  .openapi(getRecordingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRecordingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordingRulesTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingRulesWriterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingRulesWriterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRecordingRulesWriterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRecordingRulesRecordingRuleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
