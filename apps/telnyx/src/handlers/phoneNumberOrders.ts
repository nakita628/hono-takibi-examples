import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommentsIdRoute,
  getCommentsRoute,
  getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  getNumberOrderPhoneNumbersRoute,
  getNumberOrdersNumberOrderIdRoute,
  getNumberOrdersRoute,
  getSubNumberOrdersReportReportId2Route,
  getSubNumberOrdersReportReportIdDownload2Route,
  getSubNumberOrdersReportReportIdDownloadRoute,
  getSubNumberOrdersReportReportIdRoute,
  getSubNumberOrdersRoute,
  getSubNumberOrdersSubNumberOrderIdRoute,
  patchCommentsIdReadRoute,
  patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute,
  patchNumberOrdersNumberOrderIdRoute,
  patchSubNumberOrdersSubNumberOrderIdCancelRoute,
  patchSubNumberOrdersSubNumberOrderIdRoute,
  postCommentsRoute,
  postNumberOrdersRoute,
  postSubNumberOrdersReport2Route,
  postSubNumberOrdersReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberOrdersHandler = app
  .openapi(getCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommentsIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrderPhoneNumbersNumberOrderPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNumberOrdersNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubNumberOrdersReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersReportReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersReportReportIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubNumberOrdersSubNumberOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSubNumberOrdersSubNumberOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSubNumberOrdersReport2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersReportReportId2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubNumberOrdersReportReportIdDownload2Route, (c) => {
    throw new Error('Not implemented')
  })
