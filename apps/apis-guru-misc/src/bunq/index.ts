import { OpenAPIHono } from '@hono/zod-openapi'
import {
  attachmentPublicHandler,
  avatarHandler,
  deviceHandler,
  deviceServerHandler,
  installationHandler,
  paymentServiceProviderCredentialHandler,
  placeLookupHandler,
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
  .route('/', attachmentPublicHandler)
  .route('/', avatarHandler)
  .route('/', deviceHandler)
  .route('/', deviceServerHandler)
  .route('/', installationHandler)
  .route('/', paymentServiceProviderCredentialHandler)
  .route('/', placeLookupHandler)
  .route('/', sandboxUserCompanyHandler)
  .route('/', sandboxUserPersonHandler)
  .route('/', serverErrorHandler)
  .route('/', sessionServerHandler)
  .route('/', sessionHandler)
  .route('/', userHandler)
  .route('/', userCompanyHandler)
  .route('/', userPaymentServiceProviderHandler)
  .route('/', userPersonHandler)

export default app
