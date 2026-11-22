import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSmsHistoryDateFromDateFromDateToDateToRoute,
  getSmsHistoryExportFilenameFilenameRoute,
  getSmsInboundOutboundMessageIdRoute,
  getSmsInboundRoute,
  getSmsReceiptsMessageIdRoute,
  getSmsReceiptsRoute,
  postSmsInboundRoute,
  postSmsPriceRoute,
  postSmsReceiptsRoute,
  postSmsSendRoute,
  putSmsCancelAllRoute,
  putSmsInboundReadMessageIdRoute,
  putSmsInboundReadRoute,
  putSmsMessageIdCancelRoute,
  putSmsReceiptsReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app
  .openapi(putSmsCancelAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsHistoryDateFromDateFromDateToDateToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsInboundReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsInboundReadMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsInboundOutboundMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsReceiptsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsReceiptsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsMessageIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
