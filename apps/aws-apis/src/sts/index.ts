import { OpenAPIHono } from '@hono/zod-openapi'
import {
  ActionAssumeRoleHandler,
  ActionAssumeRoleWithSAMLHandler,
  ActionAssumeRoleWithWebIdentityHandler,
  ActionDecodeAuthorizationMessageHandler,
  ActionGetAccessKeyInfoHandler,
  ActionGetCallerIdentityHandler,
  ActionGetFederationTokenHandler,
  ActionGetSessionTokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ActionAssumeRoleHandler)
  .route('/', ActionAssumeRoleWithSAMLHandler)
  .route('/', ActionAssumeRoleWithWebIdentityHandler)
  .route('/', ActionDecodeAuthorizationMessageHandler)
  .route('/', ActionGetAccessKeyInfoHandler)
  .route('/', ActionGetCallerIdentityHandler)
  .route('/', ActionGetFederationTokenHandler)
  .route('/', ActionGetSessionTokenHandler)

export default app
