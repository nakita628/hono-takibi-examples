import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRoute,
  getFaxHistoryExportFilenameFilenameRoute,
  getFaxReceiptsMessageIdRoute,
  getFaxReceiptsRoute,
  postFaxPriceRoute,
  postFaxReceiptsRoute,
  postFaxSendRoute,
  putFaxReceiptsReadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const faxHandler = app
  .openapi(getFaxHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxHistoryDateFromDateFromDateToDateToQQOrderByOrderByRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putFaxReceiptsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFaxReceiptsMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFaxSendRoute, (c) => {
    throw new Error('Not implemented')
  })
