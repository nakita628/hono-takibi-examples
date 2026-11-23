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
} from './routes'
import {
  deleteV1AccountProfileRouteHandler,
  deleteV1HaTagsRouteHandler,
  getV1AccountBenefitsRouteHandler,
  getV1AccountChangePasswdGenerateAadhaarOTPRouteHandler,
  getV1AccountChangePasswdGenerateMobileOTPRouteHandler,
  getV1AccountGetCardRouteHandler,
  getV1AccountGetPngCardRouteHandler,
  getV1AccountGetSvgCardRouteHandler,
  getV1AccountProfileRouteHandler,
  getV1AccountQrCodeRouteHandler,
  getV1AuthCertRouteHandler,
  getV1HaLgdDistrictsRouteHandler,
  getV1HaLgdStatesRouteHandler,
  getV1HaTagsRouteHandler,
  getV1HealthFacilityGetSvgCardRouteHandler,
  postV1AccountAadhaarGenerateOTPRouteHandler,
  postV1AccountAadhaarVerifyOTPRouteHandler,
  postV1AccountChangePasswdByAadhaarRouteHandler,
  postV1AccountChangePasswdByMobileRouteHandler,
  postV1AccountChangePasswordRouteHandler,
  postV1AccountProfileRouteHandler,
  postV1AccountTokenRouteHandler,
  postV1AuthAuthPasswordRouteHandler,
  postV1AuthAuthWithMobileRouteHandler,
  postV1AuthAuthWithMobileTokenRouteHandler,
  postV1AuthConfirmWithAadhaarBioRouteHandler,
  postV1AuthConfirmWithAadhaarOtpRouteHandler,
  postV1AuthConfirmWithDemographicsRouteHandler,
  postV1AuthConfirmWithMobileOTPRouteHandler,
  postV1AuthConfirmWithPasswordRouteHandler,
  postV1AuthInitRouteHandler,
  postV1AuthResendAuthOTPRouteHandler,
  postV1ForgotHealthIdAadhaarGenerateOtpRouteHandler,
  postV1ForgotHealthIdAadhaarRouteHandler,
  postV1ForgotHealthIdMobileGenerateOtpRouteHandler,
  postV1ForgotHealthIdMobileRouteHandler,
  postV1HaTagsRouteHandler,
  postV1HealthFacilityAuthenticateRouteHandler,
  postV1HealthFacilityChangePasswordRouteHandler,
  postV1HealthFacilityCreateHealthIdWithPreVerifiedRouteHandler,
  postV1HealthFacilityGenerateOtpRouteHandler,
  postV1HealthFacilityGeneratePasswordRouteHandler,
  postV1HealthFacilityResetPasswordRouteHandler,
  postV1HidBenefitAadhaarGenerateOtpRouteHandler,
  postV1HidBenefitAadhaarVerifyAadharOtpRouteHandler,
  postV1HidBenefitAadhaarVerifyBioRouteHandler,
  postV1HidBenefitCreateHealthIdDemoAuthRouteHandler,
  postV1HidBenefitDelinkRouteHandler,
  postV1HidBenefitLinkRouteHandler,
  postV1HidBenefitMobileCreateHealthIdRouteHandler,
  postV1HidBenefitMobileGenerateOtpRouteHandler,
  postV1HidBenefitNotifyBenefitRouteHandler,
  postV1HidBenefitSearchAadhaarRouteHandler,
  postV1HidBenefitSearchHealthIdNumberRouteHandler,
  postV1HidBenefitUpdateMobileRouteHandler,
  postV1HidBenefitUpdateProfileRouteHandler,
  postV1HidBenefitUpdateStatusRouteHandler,
  postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRouteHandler,
  postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRouteHandler,
  postV1RegistrationAadhaarGenerateMobileOTPRouteHandler,
  postV1RegistrationAadhaarGenerateOtpRouteHandler,
  postV1RegistrationAadhaarResendAadhaarOtpRouteHandler,
  postV1RegistrationAadhaarSearchAadharRouteHandler,
  postV1RegistrationAadhaarVerifyBioRouteHandler,
  postV1RegistrationAadhaarVerifyMobileOTPRouteHandler,
  postV1RegistrationAadhaarVerifyOTPRouteHandler,
  postV1RegistrationMobileCreateHealthIdRouteHandler,
  postV1RegistrationMobileGenerateOtpRouteHandler,
  postV1RegistrationMobileResendOtpRouteHandler,
  postV1RegistrationMobileVerifyOtpRouteHandler,
  postV1SearchExistsByHealthIdRouteHandler,
  postV1SearchSearchByHealthIdRouteHandler,
  postV1SearchSearchByMobileRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AccountAadhaarGenerateOTPRoute, postV1AccountAadhaarGenerateOTPRouteHandler)
  .openapi(postV1AccountAadhaarVerifyOTPRoute, postV1AccountAadhaarVerifyOTPRouteHandler)
  .openapi(getV1AccountBenefitsRoute, getV1AccountBenefitsRouteHandler)
  .openapi(postV1AccountChangePasswdByAadhaarRoute, postV1AccountChangePasswdByAadhaarRouteHandler)
  .openapi(postV1AccountChangePasswdByMobileRoute, postV1AccountChangePasswdByMobileRouteHandler)
  .openapi(
    getV1AccountChangePasswdGenerateAadhaarOTPRoute,
    getV1AccountChangePasswdGenerateAadhaarOTPRouteHandler,
  )
  .openapi(
    getV1AccountChangePasswdGenerateMobileOTPRoute,
    getV1AccountChangePasswdGenerateMobileOTPRouteHandler,
  )
  .openapi(postV1AccountChangePasswordRoute, postV1AccountChangePasswordRouteHandler)
  .openapi(getV1AccountGetCardRoute, getV1AccountGetCardRouteHandler)
  .openapi(getV1AccountGetPngCardRoute, getV1AccountGetPngCardRouteHandler)
  .openapi(getV1AccountGetSvgCardRoute, getV1AccountGetSvgCardRouteHandler)
  .openapi(deleteV1AccountProfileRoute, deleteV1AccountProfileRouteHandler)
  .openapi(getV1AccountProfileRoute, getV1AccountProfileRouteHandler)
  .openapi(postV1AccountProfileRoute, postV1AccountProfileRouteHandler)
  .openapi(getV1AccountQrCodeRoute, getV1AccountQrCodeRouteHandler)
  .openapi(postV1AccountTokenRoute, postV1AccountTokenRouteHandler)
  .openapi(postV1AuthAuthPasswordRoute, postV1AuthAuthPasswordRouteHandler)
  .openapi(postV1AuthAuthWithMobileRoute, postV1AuthAuthWithMobileRouteHandler)
  .openapi(postV1AuthAuthWithMobileTokenRoute, postV1AuthAuthWithMobileTokenRouteHandler)
  .openapi(getV1AuthCertRoute, getV1AuthCertRouteHandler)
  .openapi(postV1AuthConfirmWithAadhaarBioRoute, postV1AuthConfirmWithAadhaarBioRouteHandler)
  .openapi(postV1AuthConfirmWithAadhaarOtpRoute, postV1AuthConfirmWithAadhaarOtpRouteHandler)
  .openapi(postV1AuthConfirmWithDemographicsRoute, postV1AuthConfirmWithDemographicsRouteHandler)
  .openapi(postV1AuthConfirmWithMobileOTPRoute, postV1AuthConfirmWithMobileOTPRouteHandler)
  .openapi(postV1AuthConfirmWithPasswordRoute, postV1AuthConfirmWithPasswordRouteHandler)
  .openapi(postV1AuthInitRoute, postV1AuthInitRouteHandler)
  .openapi(postV1AuthResendAuthOTPRoute, postV1AuthResendAuthOTPRouteHandler)
  .openapi(postV1ForgotHealthIdAadhaarRoute, postV1ForgotHealthIdAadhaarRouteHandler)
  .openapi(
    postV1ForgotHealthIdAadhaarGenerateOtpRoute,
    postV1ForgotHealthIdAadhaarGenerateOtpRouteHandler,
  )
  .openapi(postV1ForgotHealthIdMobileRoute, postV1ForgotHealthIdMobileRouteHandler)
  .openapi(
    postV1ForgotHealthIdMobileGenerateOtpRoute,
    postV1ForgotHealthIdMobileGenerateOtpRouteHandler,
  )
  .openapi(getV1HaLgdDistrictsRoute, getV1HaLgdDistrictsRouteHandler)
  .openapi(getV1HaLgdStatesRoute, getV1HaLgdStatesRouteHandler)
  .openapi(deleteV1HaTagsRoute, deleteV1HaTagsRouteHandler)
  .openapi(getV1HaTagsRoute, getV1HaTagsRouteHandler)
  .openapi(postV1HaTagsRoute, postV1HaTagsRouteHandler)
  .openapi(postV1HealthFacilityAuthenticateRoute, postV1HealthFacilityAuthenticateRouteHandler)
  .openapi(postV1HealthFacilityChangePasswordRoute, postV1HealthFacilityChangePasswordRouteHandler)
  .openapi(
    postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute,
    postV1HealthFacilityCreateHealthIdWithPreVerifiedRouteHandler,
  )
  .openapi(
    postV1HealthFacilityGeneratePasswordRoute,
    postV1HealthFacilityGeneratePasswordRouteHandler,
  )
  .openapi(postV1HealthFacilityGenerateOtpRoute, postV1HealthFacilityGenerateOtpRouteHandler)
  .openapi(getV1HealthFacilityGetSvgCardRoute, getV1HealthFacilityGetSvgCardRouteHandler)
  .openapi(postV1HealthFacilityResetPasswordRoute, postV1HealthFacilityResetPasswordRouteHandler)
  .openapi(postV1HidBenefitAadhaarGenerateOtpRoute, postV1HidBenefitAadhaarGenerateOtpRouteHandler)
  .openapi(
    postV1HidBenefitAadhaarVerifyAadharOtpRoute,
    postV1HidBenefitAadhaarVerifyAadharOtpRouteHandler,
  )
  .openapi(postV1HidBenefitAadhaarVerifyBioRoute, postV1HidBenefitAadhaarVerifyBioRouteHandler)
  .openapi(
    postV1HidBenefitCreateHealthIdDemoAuthRoute,
    postV1HidBenefitCreateHealthIdDemoAuthRouteHandler,
  )
  .openapi(postV1HidBenefitDelinkRoute, postV1HidBenefitDelinkRouteHandler)
  .openapi(postV1HidBenefitLinkRoute, postV1HidBenefitLinkRouteHandler)
  .openapi(
    postV1HidBenefitMobileCreateHealthIdRoute,
    postV1HidBenefitMobileCreateHealthIdRouteHandler,
  )
  .openapi(postV1HidBenefitMobileGenerateOtpRoute, postV1HidBenefitMobileGenerateOtpRouteHandler)
  .openapi(postV1HidBenefitNotifyBenefitRoute, postV1HidBenefitNotifyBenefitRouteHandler)
  .openapi(postV1HidBenefitSearchAadhaarRoute, postV1HidBenefitSearchAadhaarRouteHandler)
  .openapi(
    postV1HidBenefitSearchHealthIdNumberRoute,
    postV1HidBenefitSearchHealthIdNumberRouteHandler,
  )
  .openapi(postV1HidBenefitUpdateMobileRoute, postV1HidBenefitUpdateMobileRouteHandler)
  .openapi(postV1HidBenefitUpdateProfileRoute, postV1HidBenefitUpdateProfileRouteHandler)
  .openapi(postV1HidBenefitUpdateStatusRoute, postV1HidBenefitUpdateStatusRouteHandler)
  .openapi(
    postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRoute,
    postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRouteHandler,
  )
  .openapi(
    postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRoute,
    postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRouteHandler,
  )
  .openapi(
    postV1RegistrationAadhaarGenerateMobileOTPRoute,
    postV1RegistrationAadhaarGenerateMobileOTPRouteHandler,
  )
  .openapi(
    postV1RegistrationAadhaarGenerateOtpRoute,
    postV1RegistrationAadhaarGenerateOtpRouteHandler,
  )
  .openapi(
    postV1RegistrationAadhaarResendAadhaarOtpRoute,
    postV1RegistrationAadhaarResendAadhaarOtpRouteHandler,
  )
  .openapi(
    postV1RegistrationAadhaarSearchAadharRoute,
    postV1RegistrationAadhaarSearchAadharRouteHandler,
  )
  .openapi(postV1RegistrationAadhaarVerifyBioRoute, postV1RegistrationAadhaarVerifyBioRouteHandler)
  .openapi(
    postV1RegistrationAadhaarVerifyMobileOTPRoute,
    postV1RegistrationAadhaarVerifyMobileOTPRouteHandler,
  )
  .openapi(postV1RegistrationAadhaarVerifyOTPRoute, postV1RegistrationAadhaarVerifyOTPRouteHandler)
  .openapi(
    postV1RegistrationMobileCreateHealthIdRoute,
    postV1RegistrationMobileCreateHealthIdRouteHandler,
  )
  .openapi(
    postV1RegistrationMobileGenerateOtpRoute,
    postV1RegistrationMobileGenerateOtpRouteHandler,
  )
  .openapi(postV1RegistrationMobileResendOtpRoute, postV1RegistrationMobileResendOtpRouteHandler)
  .openapi(postV1RegistrationMobileVerifyOtpRoute, postV1RegistrationMobileVerifyOtpRouteHandler)
  .openapi(postV1SearchExistsByHealthIdRoute, postV1SearchExistsByHealthIdRouteHandler)
  .openapi(postV1SearchSearchByHealthIdRoute, postV1SearchSearchByHealthIdRouteHandler)
  .openapi(postV1SearchSearchByMobileRoute, postV1SearchSearchByMobileRouteHandler)

export default app
