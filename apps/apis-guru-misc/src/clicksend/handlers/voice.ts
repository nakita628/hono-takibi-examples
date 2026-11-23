import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVoiceHistoryDateFromDateFromDateToDateToRoute,
  getVoiceHistoryExportFilenameFilenameRoute,
  getVoiceLangRoute,
  getVoiceReceiptsMessageIdRoute,
  getVoiceReceiptsRoute,
  postVoicePriceRoute,
  postVoiceReceiptsRoute,
  postVoiceSendRoute,
  putVoiceCancelAllRoute,
  putVoiceMessageIdCancelRoute,
  putVoiceReceiptsReadDateBeforeDateBeforeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceHandler = app
  .openapi(putVoiceCancelAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceHistoryDateFromDateFromDateToDateToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceLangRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoicePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceReceiptsReadDateBeforeDateBeforeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceReceiptsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceMessageIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
