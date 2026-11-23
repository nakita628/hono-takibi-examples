import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingTransactional202609SmtpTokensTokenIdRoute,
  getMarketingTransactional202609SmtpTokensRoute,
  getMarketingTransactional202609SmtpTokensTokenIdRoute,
  postMarketingTransactional202609SingleEmailSendRoute,
  postMarketingTransactional202609SmtpTokensRoute,
  postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketingHandler = app
  .openapi(postMarketingTransactional202609SingleEmailSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingTransactional202609SmtpTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingTransactional202609SmtpTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketingTransactional202609SmtpTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMarketingTransactional202609SmtpTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRoute, (c) => {
    throw new Error('Not implemented')
  })
