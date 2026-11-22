import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1HidBenefitAadhaarGenerateOtpRoute,
  postV1HidBenefitAadhaarVerifyAadharOtpRoute,
  postV1HidBenefitAadhaarVerifyBioRoute,
  postV1HidBenefitCreateHealthIdDemoAuthRoute,
  postV1HidBenefitDelinkRoute,
  postV1HidBenefitLinkRoute,
  postV1HidBenefitMobileCreateHealthIdRoute,
  postV1HidBenefitMobileGenerateOtpRoute,
  postV1HidBenefitNotifyBenefitRoute,
  postV1HidBenefitSearchAadhaarRoute,
  postV1HidBenefitSearchHealthIdNumberRoute,
  postV1HidBenefitUpdateMobileRoute,
  postV1HidBenefitUpdateProfileRoute,
  postV1HidBenefitUpdateStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integratedProgramsHandler = app
  .openapi(postV1HidBenefitAadhaarGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitAadhaarVerifyAadharOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitAadhaarVerifyBioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitCreateHealthIdDemoAuthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitDelinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitMobileCreateHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitMobileGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitNotifyBenefitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitSearchAadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitSearchHealthIdNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitUpdateMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitUpdateProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HidBenefitUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
