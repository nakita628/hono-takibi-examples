import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVerifyProfilesVerifyProfileIdRoute,
  getVerificationsByPhoneNumberPhoneNumberRoute,
  getVerificationsVerificationIdRoute,
  getVerifyProfilesRoute,
  getVerifyProfilesVerifyProfileIdRoute,
  patchVerifyProfilesVerifyProfileIdRoute,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
  postVerificationsCallRoute,
  postVerificationsFlashcallRoute,
  postVerificationsPsd2Route,
  postVerificationsSmsRoute,
  postVerificationsWhatsappRoute,
  postVerifyProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verifyHandler = app
  .openapi(getVerificationsByPhoneNumberPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsFlashcallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsPsd2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsWhatsappRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerificationsVerificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerifyProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVerifyProfilesVerifyProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
