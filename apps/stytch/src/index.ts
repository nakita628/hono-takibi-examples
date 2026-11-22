import { OpenAPIHono } from '@hono/zod-openapi'
import {
  b2BIdpHandler,
  b2BImpersonationHandler,
  b2BMagicHandler,
  b2BMagicLinksHandler,
  b2BOauthHandler,
  b2BOtpHandler,
  b2BPasswordsHandler,
  b2BRbacHandler,
  b2BRecoveryCodesHandler,
  b2BScimHandler,
  b2BTotpHandler,
  clientsHandler,
  connectedAppsHandler,
  consumerRbacHandler,
  cryptoWalletHandler,
  debugHandler,
  discoveryHandler,
  emailHandler,
  fraudHandler,
  idpHandler,
  impersonationHandler,
  m2MHandler,
  magicHandler,
  magicLinksHandler,
  membersHandler,
  oauthHandler,
  organizationHandler,
  organizationsHandler,
  otpHandler,
  passwordHandler,
  passwordsHandler,
  projectHandler,
  sessionHandler,
  ssoHandler,
  totpHandler,
  userHandler,
  webauthnHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', connectedAppsHandler)
  .route('/', clientsHandler)
  .route('/', b2BScimHandler)
  .route('/', organizationHandler)
  .route('/', organizationsHandler)
  .route('/', membersHandler)
  .route('/', b2BIdpHandler)
  .route('/', userHandler)
  .route('/', sessionHandler)
  .route('/', b2BImpersonationHandler)
  .route('/', b2BRbacHandler)
  .route('/', b2BRecoveryCodesHandler)
  .route('/', b2BTotpHandler)
  .route('/', consumerRbacHandler)
  .route('/', cryptoWalletHandler)
  .route('/', debugHandler)
  .route('/', discoveryHandler)
  .route('/', fraudHandler)
  .route('/', idpHandler)
  .route('/', impersonationHandler)
  .route('/', m2MHandler)
  .route('/', magicHandler)
  .route('/', magicLinksHandler)
  .route('/', b2BMagicHandler)
  .route('/', b2BMagicLinksHandler)
  .route('/', emailHandler)
  .route('/', b2BOauthHandler)
  .route('/', b2BOtpHandler)
  .route('/', passwordHandler)
  .route('/', passwordsHandler)
  .route('/', b2BPasswordsHandler)
  .route('/', oauthHandler)
  .route('/', otpHandler)
  .route('/', projectHandler)
  .route('/', ssoHandler)
  .route('/', totpHandler)
  .route('/', webauthnHandler)

export default app
