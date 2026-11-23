import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentPublicHandler,
  avatarHandler,
  deviceHandler,
  deviceServerHandler,
  healthCheckHandler,
  installationHandler,
  paymentServiceProviderCredentialHandler,
  sandboxUserCompanyHandler,
  sandboxUserPersonHandler,
  serverErrorHandler,
  sessionHandler,
  sessionServerHandler,
  userCompanyHandler,
  userHandler,
  userPaymentServiceProviderHandler,
  userPersonHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', userHandler)
  .route('/', attachmentPublicHandler)
  .route('/', avatarHandler)
  .route('/', deviceHandler)
  .route('/', deviceServerHandler)
  .route('/', healthCheckHandler)
  .route('/', installationHandler)
  .route('/', userCompanyHandler)
  .route('/', paymentServiceProviderCredentialHandler)
  .route('/', sandboxUserCompanyHandler)
  .route('/', sandboxUserPersonHandler)
  .route('/', serverErrorHandler)
  .route('/', sessionHandler)
  .route('/', sessionServerHandler)
  .route('/', userPaymentServiceProviderHandler)
  .route('/', userPersonHandler)

export default app
