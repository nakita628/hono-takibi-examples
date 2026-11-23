import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1AccountAadhaarGenerateOTP(
  args: InferRequestType<typeof client.v1.account.aadhaar.generateOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.aadhaar.generateOTP.$post(args, options))
}

export async function postV1AccountAadhaarVerifyOTP(
  args: InferRequestType<typeof client.v1.account.aadhaar.verifyOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.aadhaar.verifyOTP.$post(args, options))
}

export async function getV1AccountBenefits(
  args: InferRequestType<typeof client.v1.account.benefits.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.benefits.$get(args, options))
}

export async function postV1AccountChangePasswdByAadhaar(
  args: InferRequestType<typeof client.v1.account.change.passwd.byAadhaar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.change.passwd.byAadhaar.$post(args, options))
}

export async function postV1AccountChangePasswdByMobile(
  args: InferRequestType<typeof client.v1.account.change.passwd.byMobile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.change.passwd.byMobile.$post(args, options))
}

export async function getV1AccountChangePasswdGenerateAadhaarOTP(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateAadhaarOTP.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.change.passwd.generateAadhaarOTP.$get(args, options))
}

export async function getV1AccountChangePasswdGenerateMobileOTP(
  args: InferRequestType<typeof client.v1.account.change.passwd.generateMobileOTP.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.change.passwd.generateMobileOTP.$get(args, options))
}

export async function postV1AccountChangePassword(
  args: InferRequestType<typeof client.v1.account.change.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.change.password.$post(args, options))
}

export async function getV1AccountGetCard(
  args: InferRequestType<typeof client.v1.account.getCard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.getCard.$get(args, options))
}

export async function getV1AccountGetPngCard(
  args: InferRequestType<typeof client.v1.account.getPngCard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.getPngCard.$get(args, options))
}

export async function getV1AccountGetSvgCard(
  args: InferRequestType<typeof client.v1.account.getSvgCard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.getSvgCard.$get(args, options))
}

export async function getV1AccountProfile(
  args: InferRequestType<typeof client.v1.account.profile.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.profile.$get(args, options))
}

export async function postV1AccountProfile(
  args: InferRequestType<typeof client.v1.account.profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.profile.$post(args, options))
}

export async function deleteV1AccountProfile(
  args: InferRequestType<typeof client.v1.account.profile.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.profile.$delete(args, options))
}

export async function getV1AccountQrCode(
  args: InferRequestType<typeof client.v1.account.qrCode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.qrCode.$get(args, options))
}

export async function postV1AccountToken(
  args: InferRequestType<typeof client.v1.account.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.account.token.$post(args, options))
}

export async function postV1AuthAuthPassword(
  args: InferRequestType<typeof client.v1.auth.authPassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.authPassword.$post(args, options))
}

export async function postV1AuthAuthWithMobile(
  args: InferRequestType<typeof client.v1.auth.authWithMobile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.authWithMobile.$post(args, options))
}

export async function postV1AuthAuthWithMobileToken(
  args: InferRequestType<typeof client.v1.auth.authWithMobileToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.authWithMobileToken.$post(args, options))
}

export async function getV1AuthCert(
  args: InferRequestType<typeof client.v1.auth.cert.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.cert.$get(args, options))
}

export async function postV1AuthConfirmWithAadhaarBio(
  args: InferRequestType<typeof client.v1.auth.confirmWithAadhaarBio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.confirmWithAadhaarBio.$post(args, options))
}

export async function postV1AuthConfirmWithAadhaarOtp(
  args: InferRequestType<typeof client.v1.auth.confirmWithAadhaarOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.confirmWithAadhaarOtp.$post(args, options))
}

export async function postV1AuthConfirmWithDemographics(
  args: InferRequestType<typeof client.v1.auth.confirmWithDemographics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.confirmWithDemographics.$post(args, options))
}

export async function postV1AuthConfirmWithMobileOTP(
  args: InferRequestType<typeof client.v1.auth.confirmWithMobileOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.confirmWithMobileOTP.$post(args, options))
}

export async function postV1AuthConfirmWithPassword(
  args: InferRequestType<typeof client.v1.auth.confirmWithPassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.confirmWithPassword.$post(args, options))
}

export async function postV1AuthInit(
  args: InferRequestType<typeof client.v1.auth.init.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.init.$post(args, options))
}

export async function postV1AuthResendAuthOTP(
  args: InferRequestType<typeof client.v1.auth.resendAuthOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.auth.resendAuthOTP.$post(args, options))
}

export async function postV1ForgotHealthIdAadhaar(
  args: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forgot.healthId.aadhaar.$post(args, options))
}

export async function postV1ForgotHealthIdAadhaarGenerateOtp(
  args: InferRequestType<typeof client.v1.forgot.healthId.aadhaar.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forgot.healthId.aadhaar.generateOtp.$post(args, options))
}

export async function postV1ForgotHealthIdMobile(
  args: InferRequestType<typeof client.v1.forgot.healthId.mobile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forgot.healthId.mobile.$post(args, options))
}

export async function postV1ForgotHealthIdMobileGenerateOtp(
  args: InferRequestType<typeof client.v1.forgot.healthId.mobile.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.forgot.healthId.mobile.generateOtp.$post(args, options))
}

export async function getV1HaLgdDistricts(
  args: InferRequestType<typeof client.v1.ha.lgd.districts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ha.lgd.districts.$get(args, options))
}

export async function getV1HaLgdStates(
  args: InferRequestType<typeof client.v1.ha.lgd.states.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ha.lgd.states.$get(args, options))
}

export async function getV1HaTags(
  args: InferRequestType<typeof client.v1.ha.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ha.tags.$get(args, options))
}

export async function postV1HaTags(
  args: InferRequestType<typeof client.v1.ha.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ha.tags.$post(args, options))
}

export async function deleteV1HaTags(
  args: InferRequestType<typeof client.v1.ha.tags.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.ha.tags.$delete(args, options))
}

export async function postV1HealthFacilityAuthenticate(
  args: InferRequestType<typeof client.v1.health.facility.authenticate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.authenticate.$post(args, options))
}

export async function postV1HealthFacilityChangePassword(
  args: InferRequestType<typeof client.v1.health.facility.change.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.change.password.$post(args, options))
}

export async function postV1HealthFacilityCreateHealthIdWithPreVerified(
  args: InferRequestType<typeof client.v1.health.facility.createHealthIdWithPreVerified.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.health.facility.createHealthIdWithPreVerified.$post(args, options),
  )
}

export async function postV1HealthFacilityGeneratePassword(
  args: InferRequestType<typeof client.v1.health.facility.generate.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.generate.password.$post(args, options))
}

export async function postV1HealthFacilityGenerateOtp(
  args: InferRequestType<typeof client.v1.health.facility.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.generateOtp.$post(args, options))
}

export async function getV1HealthFacilityGetSvgCard(
  args: InferRequestType<typeof client.v1.health.facility.getSvgCard.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.getSvgCard.$get(args, options))
}

export async function postV1HealthFacilityResetPassword(
  args: InferRequestType<typeof client.v1.health.facility.reset.password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.health.facility.reset.password.$post(args, options))
}

export async function postV1HidBenefitAadhaarGenerateOtp(
  args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.aadhaar.generateOtp.$post(args, options))
}

export async function postV1HidBenefitAadhaarVerifyAadharOtp(
  args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.aadhaar.verifyAadharOtp.$post(args, options))
}

export async function postV1HidBenefitAadhaarVerifyBio(
  args: InferRequestType<typeof client.v1.hid.benefit.aadhaar.verifyBio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.aadhaar.verifyBio.$post(args, options))
}

export async function postV1HidBenefitCreateHealthIdDemoAuth(
  args: InferRequestType<typeof client.v1.hid.benefit.createHealthId.demo.auth.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.createHealthId.demo.auth.$post(args, options))
}

export async function postV1HidBenefitDelink(
  args: InferRequestType<typeof client.v1.hid.benefit.delink.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.delink.$post(args, options))
}

export async function postV1HidBenefitLink(
  args: InferRequestType<typeof client.v1.hid.benefit.link.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.link.$post(args, options))
}

export async function postV1HidBenefitMobileCreateHealthId(
  args: InferRequestType<typeof client.v1.hid.benefit.mobile.createHealthId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.mobile.createHealthId.$post(args, options))
}

export async function postV1HidBenefitMobileGenerateOtp(
  args: InferRequestType<typeof client.v1.hid.benefit.mobile.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.mobile.generateOtp.$post(args, options))
}

export async function postV1HidBenefitNotifyBenefit(
  args: InferRequestType<typeof client.v1.hid.benefit.notify.benefit.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.notify.benefit.$post(args, options))
}

export async function postV1HidBenefitSearchAadhaar(
  args: InferRequestType<typeof client.v1.hid.benefit.search.aadhaar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.search.aadhaar.$post(args, options))
}

export async function postV1HidBenefitSearchHealthIdNumber(
  args: InferRequestType<typeof client.v1.hid.benefit.search.healthIdNumber.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.search.healthIdNumber.$post(args, options))
}

export async function postV1HidBenefitUpdateMobile(
  args: InferRequestType<typeof client.v1.hid.benefit.update.mobile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.update.mobile.$post(args, options))
}

export async function postV1HidBenefitUpdateProfile(
  args: InferRequestType<typeof client.v1.hid.benefit.update.profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.update.profile.$post(args, options))
}

export async function postV1HidBenefitUpdateStatus(
  args: InferRequestType<typeof client.v1.hid.benefit.update.status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.hid.benefit.update.status.$post(args, options))
}

export async function postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtp(
  args: InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registration.aadhaar.createHealthIdWithAadhaarOtp.$post(args, options),
  )
}

export async function postV1RegistrationAadhaarCreateHealthIdWithPreVerified(
  args: InferRequestType<typeof client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.registration.aadhaar.createHealthIdWithPreVerified.$post(args, options),
  )
}

export async function postV1RegistrationAadhaarGenerateMobileOTP(
  args: InferRequestType<typeof client.v1.registration.aadhaar.generateMobileOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.generateMobileOTP.$post(args, options))
}

export async function postV1RegistrationAadhaarGenerateOtp(
  args: InferRequestType<typeof client.v1.registration.aadhaar.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.generateOtp.$post(args, options))
}

export async function postV1RegistrationAadhaarResendAadhaarOtp(
  args: InferRequestType<typeof client.v1.registration.aadhaar.resendAadhaarOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.resendAadhaarOtp.$post(args, options))
}

export async function postV1RegistrationAadhaarSearchAadhar(
  args: InferRequestType<typeof client.v1.registration.aadhaar.search.aadhar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.search.aadhar.$post(args, options))
}

export async function postV1RegistrationAadhaarVerifyBio(
  args: InferRequestType<typeof client.v1.registration.aadhaar.verifyBio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.verifyBio.$post(args, options))
}

export async function postV1RegistrationAadhaarVerifyMobileOTP(
  args: InferRequestType<typeof client.v1.registration.aadhaar.verifyMobileOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.verifyMobileOTP.$post(args, options))
}

export async function postV1RegistrationAadhaarVerifyOTP(
  args: InferRequestType<typeof client.v1.registration.aadhaar.verifyOTP.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.aadhaar.verifyOTP.$post(args, options))
}

export async function postV1RegistrationMobileCreateHealthId(
  args: InferRequestType<typeof client.v1.registration.mobile.createHealthId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.mobile.createHealthId.$post(args, options))
}

export async function postV1RegistrationMobileGenerateOtp(
  args: InferRequestType<typeof client.v1.registration.mobile.generateOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.mobile.generateOtp.$post(args, options))
}

export async function postV1RegistrationMobileResendOtp(
  args: InferRequestType<typeof client.v1.registration.mobile.resendOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.mobile.resendOtp.$post(args, options))
}

export async function postV1RegistrationMobileVerifyOtp(
  args: InferRequestType<typeof client.v1.registration.mobile.verifyOtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.registration.mobile.verifyOtp.$post(args, options))
}

export async function postV1SearchExistsByHealthId(
  args: InferRequestType<typeof client.v1.search.existsByHealthId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.search.existsByHealthId.$post(args, options))
}

export async function postV1SearchSearchByHealthId(
  args: InferRequestType<typeof client.v1.search.searchByHealthId.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.search.searchByHealthId.$post(args, options))
}

export async function postV1SearchSearchByMobile(
  args: InferRequestType<typeof client.v1.search.searchByMobile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.search.searchByMobile.$post(args, options))
}
