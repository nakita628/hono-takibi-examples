import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMarketingTransactional202609SmtpTokensTokenIdRoute,
  getMarketingTransactional202609SmtpTokensRoute,
  getMarketingTransactional202609SmtpTokensTokenIdRoute,
  postMarketingTransactional202609SingleEmailSendRoute,
  postMarketingTransactional202609SmtpTokensRoute,
  postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRoute,
} from './routes'
import {
  deleteMarketingTransactional202609SmtpTokensTokenIdRouteHandler,
  getMarketingTransactional202609SmtpTokensRouteHandler,
  getMarketingTransactional202609SmtpTokensTokenIdRouteHandler,
  postMarketingTransactional202609SingleEmailSendRouteHandler,
  postMarketingTransactional202609SmtpTokensRouteHandler,
  postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMarketingTransactional202609SingleEmailSendRoute,
    postMarketingTransactional202609SingleEmailSendRouteHandler,
  )
  .openapi(
    getMarketingTransactional202609SmtpTokensRoute,
    getMarketingTransactional202609SmtpTokensRouteHandler,
  )
  .openapi(
    postMarketingTransactional202609SmtpTokensRoute,
    postMarketingTransactional202609SmtpTokensRouteHandler,
  )
  .openapi(
    getMarketingTransactional202609SmtpTokensTokenIdRoute,
    getMarketingTransactional202609SmtpTokensTokenIdRouteHandler,
  )
  .openapi(
    deleteMarketingTransactional202609SmtpTokensTokenIdRoute,
    deleteMarketingTransactional202609SmtpTokensTokenIdRouteHandler,
  )
  .openapi(
    postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRoute,
    postMarketingTransactional202609SmtpTokensTokenIdPasswordResetRouteHandler,
  )

export default app
