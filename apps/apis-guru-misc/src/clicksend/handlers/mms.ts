import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMmsHistoryExportFilenameFilenameRoute,
  getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRoute,
  getMmsReceiptsMessageIdRoute,
  getMmsReceiptsRoute,
  postMmsPriceRoute,
  postMmsSendRoute,
  putMmsCancelAllRoute,
  putMmsMessageIdCancelRoute,
  putMmsReceiptsReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mmsHandler = app
  .openapi(putMmsCancelAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMmsHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMmsHistoryQQOrderByOrderByDateFromDateFromDateToDateToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMmsReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMmsReceiptsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMmsReceiptsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMmsMessageIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
