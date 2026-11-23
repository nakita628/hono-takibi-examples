import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVerificationsByPhoneNumberPhoneNumberRoute,
  getVerificationsVerificationIdRoute,
  postVerificationsByPhoneNumberPhoneNumberActionsVerifyRoute,
  postVerificationsCallRoute,
  postVerificationsFlashcallRoute,
  postVerificationsPsd2Route,
  postVerificationsSmsRoute,
  postVerificationsWhatsappRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verificationsHandler = app
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
