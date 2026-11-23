import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAssumeRoleHandler,
  actionAssumeRoleWithSamlHandler,
  actionAssumeRoleWithWebIdentityHandler,
  actionDecodeAuthorizationMessageHandler,
  actionGetAccessKeyInfoHandler,
  actionGetCallerIdentityHandler,
  actionGetFederationTokenHandler,
  actionGetSessionTokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAssumeRoleHandler)
  .route('/', actionAssumeRoleWithSamlHandler)
  .route('/', actionAssumeRoleWithWebIdentityHandler)
  .route('/', actionDecodeAuthorizationMessageHandler)
  .route('/', actionGetAccessKeyInfoHandler)
  .route('/', actionGetCallerIdentityHandler)
  .route('/', actionGetFederationTokenHandler)
  .route('/', actionGetSessionTokenHandler)

export default app
