import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4SystemConfigPoliciesClassificationsRoute,
  getV4SystemConfigPoliciesGuestUsersRoute,
  getV4SystemConfigPoliciesMfaRoute,
  getV4SystemConfigPoliciesPasswordsPasswordTypeRoute,
  getV4SystemConfigPoliciesPasswordsRoute,
  postV4SystemConfigPoliciesPasswordsEnforceChangeRoute,
  putV4SystemConfigPoliciesClassificationsRoute,
  putV4SystemConfigPoliciesGuestUsersRoute,
  putV4SystemConfigPoliciesMfaRoute,
  putV4SystemConfigPoliciesPasswordsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemPoliciesConfigHandler = app
  .openapi(getV4SystemConfigPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesClassificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesGuestUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesMfaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigPoliciesPasswordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigPoliciesPasswordsEnforceChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigPoliciesPasswordsPasswordTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
