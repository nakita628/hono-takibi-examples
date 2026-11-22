import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRoute,
  postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRoute,
  postV1RegistrationAadhaarGenerateMobileOTPRoute,
  postV1RegistrationAadhaarGenerateOtpRoute,
  postV1RegistrationAadhaarResendAadhaarOtpRoute,
  postV1RegistrationAadhaarSearchAadharRoute,
  postV1RegistrationAadhaarVerifyBioRoute,
  postV1RegistrationAadhaarVerifyMobileOTPRoute,
  postV1RegistrationAadhaarVerifyOTPRoute,
} from '../routes'

const app = new OpenAPIHono()

export const registrationWithAadhaarHandler = app
  .openapi(postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarGenerateMobileOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarResendAadhaarOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarSearchAadharRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarVerifyBioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarVerifyMobileOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RegistrationAadhaarVerifyOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
