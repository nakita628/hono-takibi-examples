import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AuthCertRoute,
  postV1AuthAuthPasswordRoute,
  postV1AuthAuthWithMobileRoute,
  postV1AuthAuthWithMobileTokenRoute,
  postV1AuthConfirmWithAadhaarBioRoute,
  postV1AuthConfirmWithAadhaarOtpRoute,
  postV1AuthConfirmWithDemographicsRoute,
  postV1AuthConfirmWithMobileOTPRoute,
  postV1AuthConfirmWithPasswordRoute,
  postV1AuthInitRoute,
  postV1AuthResendAuthOTPRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authenticationHandler = app
  .openapi(postV1AuthAuthPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthAuthWithMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthAuthWithMobileTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AuthCertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthConfirmWithAadhaarBioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthConfirmWithAadhaarOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthConfirmWithDemographicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthConfirmWithMobileOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthConfirmWithPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthInitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AuthResendAuthOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
