import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountProfileRoute,
  deleteV1HaTagsRoute,
  getV1AccountBenefitsRoute,
  getV1AccountChangePasswdGenerateAadhaarOTPRoute,
  getV1AccountChangePasswdGenerateMobileOTPRoute,
  getV1AccountGetCardRoute,
  getV1AccountGetPngCardRoute,
  getV1AccountGetSvgCardRoute,
  getV1AccountProfileRoute,
  getV1AccountQrCodeRoute,
  getV1AuthCertRoute,
  getV1HaLgdDistrictsRoute,
  getV1HaLgdStatesRoute,
  getV1HaTagsRoute,
  getV1HealthFacilityGetSvgCardRoute,
  postV1AccountAadhaarGenerateOTPRoute,
  postV1AccountAadhaarVerifyOTPRoute,
  postV1AccountChangePasswdByAadhaarRoute,
  postV1AccountChangePasswdByMobileRoute,
  postV1AccountChangePasswordRoute,
  postV1AccountProfileRoute,
  postV1AccountTokenRoute,
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
  postV1ForgotHealthIdAadhaarGenerateOtpRoute,
  postV1ForgotHealthIdAadhaarRoute,
  postV1ForgotHealthIdMobileGenerateOtpRoute,
  postV1ForgotHealthIdMobileRoute,
  postV1HaTagsRoute,
  postV1HealthFacilityAuthenticateRoute,
  postV1HealthFacilityChangePasswordRoute,
  postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute,
  postV1HealthFacilityGenerateOtpRoute,
  postV1HealthFacilityGeneratePasswordRoute,
  postV1HealthFacilityResetPasswordRoute,
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
  postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRoute,
  postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRoute,
  postV1RegistrationAadhaarGenerateMobileOTPRoute,
  postV1RegistrationAadhaarGenerateOtpRoute,
  postV1RegistrationAadhaarResendAadhaarOtpRoute,
  postV1RegistrationAadhaarSearchAadharRoute,
  postV1RegistrationAadhaarVerifyBioRoute,
  postV1RegistrationAadhaarVerifyMobileOTPRoute,
  postV1RegistrationAadhaarVerifyOTPRoute,
  postV1RegistrationMobileCreateHealthIdRoute,
  postV1RegistrationMobileGenerateOtpRoute,
  postV1RegistrationMobileResendOtpRoute,
  postV1RegistrationMobileVerifyOtpRoute,
  postV1SearchExistsByHealthIdRoute,
  postV1SearchSearchByHealthIdRoute,
  postV1SearchSearchByMobileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AccountAadhaarGenerateOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountAadhaarVerifyOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountBenefitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswdByAadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswdByMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountChangePasswdGenerateAadhaarOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountChangePasswdGenerateMobileOTPRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetPngCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountGetSvgCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountQrCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postV1ForgotHealthIdAadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdAadhaarGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ForgotHealthIdMobileGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HaLgdDistrictsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HaLgdStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HaTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityGeneratePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityGenerateOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HealthFacilityGetSvgCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HealthFacilityResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postV1SearchExistsByHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SearchSearchByHealthIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SearchSearchByMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
