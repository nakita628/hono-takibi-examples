import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1RegistrationMobileCreateHealthIdRoute,
  postV1RegistrationMobileGenerateOtpRoute,
  postV1RegistrationMobileResendOtpRoute,
  postV1RegistrationMobileVerifyOtpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrationWithMobileNumberHandler = app
  .openapi(postV1RegistrationMobileCreateHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationMobileGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationMobileResendOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationMobileVerifyOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
