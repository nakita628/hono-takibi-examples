import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProfileAppsAppIdRoute,
  deleteProfileDevicesDeviceIdRoute,
  deleteProfilePhoneNumberRoute,
  deleteProfileSshkeysSshKeyIdRoute,
  deleteProfileTokensTokenIdRoute,
  getProfileAppsAppIdRoute,
  getProfileAppsRoute,
  getProfileDevicesDeviceIdRoute,
  getProfileDevicesRoute,
  getProfileGrantsRoute,
  getProfileLoginsLoginIdRoute,
  getProfileLoginsRoute,
  getProfilePreferencesRoute,
  getProfileRoute,
  getProfileSecurityQuestionsRoute,
  getProfileSshkeysRoute,
  getProfileSshkeysSshKeyIdRoute,
  getProfileTokensRoute,
  getProfileTokensTokenIdRoute,
  postProfilePhoneNumberRoute,
  postProfilePhoneNumberVerifyRoute,
  postProfileSecurityQuestionsRoute,
  postProfileSshkeysRoute,
  postProfileTfaDisableRoute,
  postProfileTfaEnableConfirmRoute,
  postProfileTfaEnableRoute,
  postProfileTokensRoute,
  putProfilePreferencesRoute,
  putProfileRoute,
  putProfileSshkeysSshKeyIdRoute,
  putProfileTokensTokenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileHandler = app
  .openapi(getProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileGrantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfilePhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfilePhoneNumberVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfilePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileSecurityQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileSshkeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfileSshkeysSshKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileTfaDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileTfaEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileTfaEnableConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProfileTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
