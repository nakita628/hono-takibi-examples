import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSelfServiceLoginTestRoute,
  deleteSelfServiceLogoutApiRoute,
  getSelfServiceErrorsRoute,
  getSelfServiceFedCmParametersRoute,
  getSelfServiceLoginApiRoute,
  getSelfServiceLoginBrowserRoute,
  getSelfServiceLoginFlowsRoute,
  getSelfServiceLogoutBrowserRoute,
  getSelfServiceLogoutRoute,
  getSelfServiceRecoveryApiRoute,
  getSelfServiceRecoveryBrowserRoute,
  getSelfServiceRecoveryFlowsRoute,
  getSelfServiceRegistrationApiRoute,
  getSelfServiceRegistrationBrowserRoute,
  getSelfServiceRegistrationFlowsRoute,
  getSelfServiceSettingsApiRoute,
  getSelfServiceSettingsBrowserRoute,
  getSelfServiceSettingsFlowsRoute,
  getSelfServiceVerificationApiRoute,
  getSelfServiceVerificationBrowserRoute,
  getSelfServiceVerificationFlowsRoute,
  postSelfServiceFedCmTokenRoute,
  postSelfServiceLoginRoute,
  postSelfServiceRecoveryRoute,
  postSelfServiceRegistrationRoute,
  postSelfServiceSettingsRoute,
  postSelfServiceVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const selfServiceHandler = app
  .openapi(getSelfServiceErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceFedCmParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceFedCmTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceLoginApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceLoginBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceLoginFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfServiceLoginTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfServiceLogoutApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceLogoutBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRecoveryApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRecoveryBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRecoveryFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceRegistrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRegistrationApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRegistrationBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceRegistrationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceSettingsApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceSettingsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceSettingsFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfServiceVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceVerificationApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceVerificationBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfServiceVerificationFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
