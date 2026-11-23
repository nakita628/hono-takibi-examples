import { OpenAPIHono } from '@hono/zod-openapi'
import {
  adminHandler,
  authorizeHandler,
  callbackHandler,
  factorsHandler,
  healthHandler,
  inviteHandler,
  logoutHandler,
  magiclinkHandler,
  oauthHandler,
  otpHandler,
  reauthenticateHandler,
  recoverHandler,
  resendHandler,
  samlHandler,
  settingsHandler,
  signupHandler,
  ssoHandler,
  tokenHandler,
  userHandler,
  verifyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', tokenHandler)
  .route('/', logoutHandler)
  .route('/', verifyHandler)
  .route('/', authorizeHandler)
  .route('/', signupHandler)
  .route('/', recoverHandler)
  .route('/', resendHandler)
  .route('/', magiclinkHandler)
  .route('/', otpHandler)
  .route('/', userHandler)
  .route('/', reauthenticateHandler)
  .route('/', factorsHandler)
  .route('/', callbackHandler)
  .route('/', ssoHandler)
  .route('/', samlHandler)
  .route('/', inviteHandler)
  .route('/', adminHandler)
  .route('/', oauthHandler)
  .route('/', healthHandler)
  .route('/', settingsHandler)

export default app
