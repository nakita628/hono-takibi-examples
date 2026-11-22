import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMobilePushCredentialsPushCredentialIdRoute,
  getMobilePushCredentialsPushCredentialIdRoute,
  getMobilePushCredentialsRoute,
  postMobilePushCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushCredentialsHandler = app
  .openapi(getMobilePushCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobilePushCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMobilePushCredentialsPushCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMobilePushCredentialsPushCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
