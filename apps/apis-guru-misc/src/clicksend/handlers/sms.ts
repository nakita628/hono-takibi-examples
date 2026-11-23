import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsEmailSmsEmailAddressIdRoute,
  deleteSmsEmailSmsStrippedStringsRuleIdRoute,
  deleteSmsTemplatesTemplateIdRoute,
  getSmsEmailSmsEmailAddressIdRoute,
  getSmsEmailSmsRoute,
  getSmsEmailSmsStrippedStringsRoute,
  getSmsEmailSmsStrippedStringsRuleIdRoute,
  getSmsHistoryDateFromDateFromDateToDateToRoute,
  getSmsHistoryExportFilenameFilenameRoute,
  getSmsInboundOutboundMessageIdRoute,
  getSmsInboundRoute,
  getSmsReceiptsMessageIdRoute,
  getSmsReceiptsRoute,
  getSmsTemplatesRoute,
  postSmsEmailSmsRoute,
  postSmsEmailSmsStrippedStringsRoute,
  postSmsInboundRoute,
  postSmsPriceRoute,
  postSmsReceiptsRoute,
  postSmsSendRoute,
  postSmsTemplatesRoute,
  putSmsCancelAllRoute,
  putSmsEmailSmsEmailAddressIdRoute,
  putSmsEmailSmsStrippedStringsRuleIdRoute,
  putSmsInboundReadMessageIdRoute,
  putSmsInboundReadRoute,
  putSmsMessageIdCancelRoute,
  putSmsReceiptsReadRoute,
  putSmsTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app
  .openapi(putSmsCancelAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsEmailSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsStrippedStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsEmailSmsStrippedStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsEmailSmsStrippedStringsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsEmailSmsEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsEmailSmsEmailAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsEmailSmsEmailAddressIdRoute, (c) => {
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
  .openapi(getSmsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsMessageIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
