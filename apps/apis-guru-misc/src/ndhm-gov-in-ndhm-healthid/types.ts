type TxnResponse = { txnId?: string | undefined }
type VerifyAadhaarOtp = {
  otp?: string | undefined
  restrictions?: string | undefined
  txnId?: string | undefined
}
type UserDTO = {
  address?: string | undefined
  authMethods?:
    | ('AADHAAR_OTP' | 'MOBILE_OTP' | 'PASSWORD' | 'DEMOGRAPHICS' | 'AADHAAR_BIO')[]
    | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  districtName?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  healthId?: string | undefined
  healthIdNumber?: string | undefined
  kycPhoto?: string | undefined
  kycVerified?: boolean | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  mobile?: string | undefined
  monthOfBirth?: string | undefined
  name?: string | undefined
  new?: boolean | undefined
  pincode?: string | undefined
  profilePhoto?: string | undefined
  stateCode?: string | undefined
  stateName?: string | undefined
  subDistrictCode?: string | undefined
  subdistrictName?: string | undefined
  tags?: { [x: string]: string } | undefined
  townCode?: string | undefined
  townName?: string | undefined
  villageCode?: string | undefined
  villageName?: string | undefined
  wardCode?: string | undefined
  wardName?: string | undefined
  yearOfBirth?: string | undefined
}
type HidOtpRequestPaylaod = {
  newPassword?: string | undefined
  otp?: string | undefined
  txnId?: string | undefined
}
type HidChangePasswordRequestPayload = {
  newPassword?: string | undefined
  oldPassword?: string | undefined
}
type UpdateAccountRequest = {
  address?: string | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  healthId?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  monthOfBirth?: string | undefined
  password?: string | undefined
  pincode?: number | undefined
  profilePhoto?: string | undefined
  stateCode?: string | undefined
  subdistrictCode?: string | undefined
  townCode?: string | undefined
  villageCode?: string | undefined
  wardCode?: string | undefined
  yearOfBirth?: string | undefined
}
type ValidateTokenRequest = { authToken?: string | undefined }
type JwtRequest = { healthId?: string | undefined; password?: string | undefined }
type JwtResponse = { token?: string | undefined }
type AuthMobileOTPRequest = { healthid?: string | undefined }
type AuthWithMobileTxnAndUserData = {
  gender?: string | undefined
  healthId?: string | undefined
  name?: string | undefined
  token?: string | undefined
  txnId: string
  yearOfBirth?: string | undefined
}
type AuthAccountAadhaarBioRequest = {
  authType?: 'FINGERSCAN' | 'IRIS' | 'OTP' | undefined
  bioType?: string | undefined
  pid?: string | undefined
  txnId?: string | undefined
}
type AuthAccountAadhaarOTPRequest = { otp: string; txnId: string }
type AuthAccountWithDemographicsRequest = {
  gender?: string | undefined
  name?: string | undefined
  txnId: string
  yearOfBirth?: string | undefined
}
type AuthAccountMobileOTPRequest = { otp?: string | undefined; txnId?: string | undefined }
type AuthWithPasswordRequest = { password: string; txnId: string }
type AuthInitRequest = {
  authMethod: 'AADHAAR_OTP' | 'MOBILE_OTP' | 'PASSWORD' | 'DEMOGRAPHICS' | 'AADHAAR_BIO'
  healthid?: string | undefined
}
type ResendOTPRequest = { txnId: string }
type RetrieveHealthIdPayloadResponse = {
  healthId?: string | undefined
  healthIdNumber?: string | undefined
}
type AadharOtpGenerateRequestPayLoad = { aadhaar?: string | undefined }
type RetriveHealthIdMobilePayLoad = {
  dayOfBirth?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  monthOfBirth?: string | undefined
  name?: string | undefined
  otp?: string | undefined
  txnId: string
  yearOfBirth?: string | undefined
}
type GenerateMobileOTPRequest = { mobile?: string | undefined }
type DistrictDTO = { code?: string | undefined; name?: string | undefined }
type StatesDTO = {
  code?: string | undefined
  districts?: DistrictDTO[] | undefined
  name?: string | undefined
}
type TagRequest = { healthId?: string | undefined; tags?: { [x: string]: string } | undefined }
type HealthFacilityAuthenticationRequest = {
  hfrUid?: string | undefined
  password?: string | undefined
}
type HealthFacilityChangedPasswordRequest = {
  hfrUid?: string | undefined
  newPassword?: string | undefined
  oldPassword?: string | undefined
}
type CreateAccountWithPreVerifiedAadhaar = {
  email?: string | undefined
  firstName?: string | undefined
  healthId?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  password?: string | undefined
  profilePhoto?: string | undefined
  txnId?: string | undefined
}
type CreateAccountJwtResponse = {
  authMethods?:
    | ('AADHAAR_OTP' | 'MOBILE_OTP' | 'PASSWORD' | 'DEMOGRAPHICS' | 'AADHAAR_BIO')[]
    | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  districtName?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  healthId?: string | undefined
  healthIdNumber?: string | undefined
  kycPhoto?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  mobile?: string | undefined
  monthOfBirth?: string | undefined
  name?: string | undefined
  new?: boolean | undefined
  stateCode?: string | undefined
  stateName?: string | undefined
  tags?: { [x: string]: string } | undefined
  token?: string | undefined
  yearOfBirth?: string | undefined
}
type HealthFacilityPasswordRequest = { hfrUid?: string | undefined }
type CreateHealthIdOptRequest = {
  autoGeneratedBenefitId?: boolean | undefined
  benefitId?: string | undefined
  benefitName?: string | undefined
  consentHealthId?: boolean | undefined
  mobileNumber?: string | undefined
  otp?: string | undefined
  txnId?: string | undefined
  validity?: string | undefined
}
type HidBenefitRequestPayload = {
  address?: string | undefined
  authMethods?:
    | ('AADHAAR_OTP' | 'MOBILE_OTP' | 'PASSWORD' | 'DEMOGRAPHICS' | 'AADHAAR_BIO')[]
    | undefined
  benefitId?: string | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  districtName?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  healthId?: string | undefined
  healthIdNumber?: string | undefined
  kycPhoto?: string | undefined
  kycVerified?: boolean | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  mobile?: string | undefined
  monthOfBirth?: string | undefined
  name?: string | undefined
  new?: boolean | undefined
  pincode?: string | undefined
  profilePhoto?: string | undefined
  stateCode?: string | undefined
  stateName?: string | undefined
  status?: string | undefined
  subDistrictCode?: string | undefined
  subdistrictName?: string | undefined
  tags?: { [x: string]: string } | undefined
  token?: string | undefined
  townCode?: string | undefined
  townName?: string | undefined
  villageCode?: string | undefined
  villageName?: string | undefined
  wardCode?: string | undefined
  wardName?: string | undefined
  yearOfBirth?: string | undefined
}
type CreateHidBiometricRequest = {
  aadhaar?: string | undefined
  autoGeneratedBenefitId?: boolean | undefined
  benefitId?: string | undefined
  benefitName?: string | undefined
  bioType?: string | undefined
  consentHealthId?: boolean | undefined
  mobileNumber?: string | undefined
  pid?: string | undefined
  validity?: string | undefined
}
type CreateHIdDemoAuthRequest = {
  aadharNumber?: string | undefined
  autoGeneratedBenefitId?: boolean | undefined
  benefitId?: string | undefined
  benefitName?: string | undefined
  consentHealthId?: boolean | undefined
  dateOfBirth?: string | undefined
  gender?: string | undefined
  mobileNumber?: string | undefined
  name?: string | undefined
  validity?: string | undefined
}
type HidBenefitDelinkRequestPayload = {
  benefitName?: string | undefined
  uidToken?: string | undefined
}
type HidBenefitLinkedResponsePayload = {
  benefitName?: string | undefined
  healthId?: string | undefined
  status?: string | undefined
}
type HidBenefitLinkedRequestPayload = {
  benefitId?: string | undefined
  benefitName?: string | undefined
  stateCode?: string | undefined
  uidToken?: string | undefined
  validity?: string | undefined
}
type CreateHidMobileRequest = {
  autoGeneratedBenefitId?: boolean | undefined
  benefitDocType?:
    | 'VOTER_ID_CARD'
    | 'RATION_CARD'
    | 'PAN_CARD'
    | 'DRIVING_LICENSE'
    | 'PENSIONER_PHOTO_CARD'
    | 'KISSAN_PHOTO_PASSBOOK'
    | 'FREEDOM_FIGHTER_PHOTO_CARD'
    | 'CERTIFICATE_IDENTIFY'
    | 'DISABILITY_ID_CARD'
    | 'MNREGA_JOB_CARD'
    | 'BIRTH_CERTIFICATE'
    | 'MARRIAGE_CERTIFICATE'
    | 'OTHER_GOVERNMENT_ID'
    | 'ADOPTION_CERTIFICATE'
    | undefined
  benefitId?: string | undefined
  benefitName?: string | undefined
  consentHealthId?: boolean | undefined
  dateOfBirth?: string | undefined
  docNumber?: string | undefined
  fileType?: string | undefined
  gender?: string | undefined
  name?: string | undefined
  otp?: string | undefined
  txnId?: string | undefined
  uploadedDoc?: string | undefined
  validity?: string | undefined
}
type CreateHidNotifyBenefitRequest = {
  aadharNumberOrUidToken?: string | undefined
  autoGeneratedBenefitId?: boolean | undefined
  benefitId?: string | undefined
  benefitName?: string | undefined
  consentHealthId?: boolean | undefined
  dateOfBirth?: string | undefined
  gender?: string | undefined
  mobileNumber?: string | undefined
  name?: string | undefined
  stateCode?: string | undefined
  validity?: string | undefined
}
type AadharNumberRequestPayload = { aadhaar?: string | undefined }
type HidBenefitNameSearchRequest = { benefitId?: string | undefined; healthId?: string | undefined }
type HidBenefitSearchResponsePayload = {
  benefitId?: string | undefined
  benefitName?: string | undefined
  healthIdNumber?: string | undefined
  stateCode?: string | undefined
}
type HidUpdateMobiletRequest = { healthIdNumber?: string | undefined; mobile?: string | undefined }
type HidUpdateAccountRequest = {
  address?: string | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  healthId?: string | undefined
  healthIdNumber?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  monthOfBirth?: string | undefined
  password?: string | undefined
  pincode?: number | undefined
  profilePhoto?: string | undefined
  stateCode?: string | undefined
  subdistrictCode?: string | undefined
  townCode?: string | undefined
  villageCode?: string | undefined
  wardCode?: string | undefined
  yearOfBirth?: string | undefined
}
type HidStatusRequestPayload = { healthIdNumber?: string | undefined }
type CreateAccountWithAadhaarOtp = {
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  mobile?: string | undefined
  otp?: string | undefined
  password?: string | undefined
  profilePhoto?: string | undefined
  restrictions?: string | undefined
  txnId?: string | undefined
  username?: string | undefined
}
type GenerateMobileOTPForTxnRequest = { mobile?: string | undefined; txnId?: string | undefined }
type VerifyAadhaarWithBio = {
  aadhaar?: string | undefined
  bioType?: string | undefined
  pid?: string | undefined
  restrictions?: string | undefined
}
type VerifyMobileRequest = { otp?: string | undefined; txnId?: string | undefined }
type CreateAccountByVerifiedMobileRequest = {
  address?: string | undefined
  dayOfBirth?: string | undefined
  districtCode?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  gender?: string | undefined
  healthId?: string | undefined
  lastName?: string | undefined
  middleName?: string | undefined
  monthOfBirth?: string | undefined
  name?: string | undefined
  password?: string | undefined
  pincode?: number | undefined
  profilePhoto?: string | undefined
  restrictions?: string | undefined
  stateCode?: string | undefined
  subdistrictCode?: string | undefined
  token?: string | undefined
  townCode?: string | undefined
  txnId: string
  villageCode?: string | undefined
  wardCode?: string | undefined
  yearOfBirth?: string | undefined
}
type MobileVerificationToken = { token?: string | undefined }
type SearchByHealthIdRequest = { healthId?: string | undefined }
type SearchResponseSingle = {
  authMethods?:
    | ('AADHAAR_OTP' | 'MOBILE_OTP' | 'PASSWORD' | 'DEMOGRAPHICS' | 'AADHAAR_BIO')[]
    | undefined
  healthId?: string | undefined
  healthIdNumber?: string | undefined
  name?: string | undefined
  tags?: { [x: string]: string } | undefined
}
type SearchByMobileRequest = {
  gender?: string | undefined
  mobile?: string | undefined
  name?: string | undefined
  yearOfBirth?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/account/aadhaar/generateOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/aadhaar/verifyOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: VerifyAadhaarOtp
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/benefits': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/change/passwd/byAadhaar': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/change/passwd/byMobile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidOtpRequestPaylaod
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/change/passwd/generateAadhaarOTP': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/change/passwd/generateMobileOTP': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/change/password': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidChangePasswordRequestPayload
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidChangePasswordRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidChangePasswordRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidChangePasswordRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: HidChangePasswordRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/getCard': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/getPngCard': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/getSvgCard': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/profile': {
      $delete:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: UpdateAccountRequest
            }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: UpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: UpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: UpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: UpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/qrCode': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/account/token': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ValidateTokenRequest
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ValidateTokenRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ValidateTokenRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ValidateTokenRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ValidateTokenRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/authPassword': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: JwtRequest }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: JwtRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: JwtRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: JwtRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: JwtRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/authWithMobile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthMobileOTPRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/authWithMobileToken': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithMobileTxnAndUserData
            }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithMobileTxnAndUserData
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithMobileTxnAndUserData
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithMobileTxnAndUserData
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithMobileTxnAndUserData
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/cert': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/confirmWithAadhaarBio': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarBioRequest
            }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarBioRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarBioRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarBioRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarBioRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/confirmWithAadhaarOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/confirmWithDemographics': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountWithDemographicsRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountWithDemographicsRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountWithDemographicsRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountWithDemographicsRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountWithDemographicsRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/confirmWithMobileOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountMobileOTPRequest
            }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/confirmWithPassword': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithPasswordRequest
            }
            output: JwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthWithPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/init': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthInitRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthInitRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthInitRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthInitRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthInitRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/auth/resendAuthOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/forgot/healthId/aadhaar': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: RetrieveHealthIdPayloadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AuthAccountAadhaarOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/forgot/healthId/aadhaar/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/forgot/healthId/mobile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: RetriveHealthIdMobilePayLoad
            }
            output: RetrieveHealthIdPayloadResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: RetriveHealthIdMobilePayLoad
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: RetriveHealthIdMobilePayLoad
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: RetriveHealthIdMobilePayLoad
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: RetriveHealthIdMobilePayLoad
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/forgot/healthId/mobile/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/ha/lgd/districts': {
      $get:
        | {
            input: { query: { stateCode: string } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: DistrictDTO[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { stateCode: string } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { stateCode: string } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { stateCode: string } } & {
              header: { 'Accept-Language'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/ha/lgd/states': {
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: StatesDTO[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/ha/tags': {
      $delete:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: TagRequest[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
      $get:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: TagRequest }
            output: TagRequest[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: TagRequest }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: TagRequest }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: TagRequest }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & { json: TagRequest }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/authenticate': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityAuthenticationRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityAuthenticationRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityAuthenticationRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityAuthenticationRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityAuthenticationRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/change/password': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityChangedPasswordRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityChangedPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityChangedPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityChangedPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityChangedPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/createHealthIdWithPreVerified': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: CreateAccountJwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/generate/password': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined; 'X-Token': string } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/getSvgCard': {
      $get:
        | {
            input: {
              header: {
                'Accept-Language'?: string | undefined
                'Health-ID': string
                'X-Token': string
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                'Accept-Language'?: string | undefined
                'Health-ID': string
                'X-Token': string
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              header: {
                'Accept-Language'?: string | undefined
                'Health-ID': string
                'X-Token': string
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              header: {
                'Accept-Language'?: string | undefined
                'Health-ID': string
                'X-Token': string
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/health/facility/reset/password': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HealthFacilityPasswordRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/aadhaar/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/aadhaar/verifyAadharOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHealthIdOptRequest
            }
            output: HidBenefitRequestPayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHealthIdOptRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHealthIdOptRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHealthIdOptRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHealthIdOptRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/aadhaar/verifyBio': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidBiometricRequest
            }
            output: HidBenefitRequestPayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidBiometricRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidBiometricRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidBiometricRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidBiometricRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/createHealthId/demo/auth': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHIdDemoAuthRequest
            }
            output: HidBenefitRequestPayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHIdDemoAuthRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHIdDemoAuthRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHIdDemoAuthRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHIdDemoAuthRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/delink': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitDelinkRequestPayload
            }
            output: HidBenefitLinkedResponsePayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitDelinkRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitDelinkRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitDelinkRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitDelinkRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/link': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitLinkedRequestPayload
            }
            output: HidBenefitLinkedResponsePayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitLinkedRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitLinkedRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitLinkedRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitLinkedRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/mobile/createHealthId': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidMobileRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidMobileRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidMobileRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidMobileRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidMobileRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/mobile/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/notify/benefit': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidNotifyBenefitRequest
            }
            output: HidBenefitRequestPayload
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidNotifyBenefitRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidNotifyBenefitRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidNotifyBenefitRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateHidNotifyBenefitRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/search/aadhaar': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/search/healthIdNumber': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitNameSearchRequest
            }
            output: HidBenefitSearchResponsePayload[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitNameSearchRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitNameSearchRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitNameSearchRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidBenefitNameSearchRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/update/mobile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateMobiletRequest
            }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateMobiletRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateMobiletRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateMobiletRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateMobiletRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/update/profile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateAccountRequest
            }
            output: UserDTO
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidUpdateAccountRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/hid/benefit/update/status': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidStatusRequestPayload
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidStatusRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidStatusRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidStatusRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: HidStatusRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/createHealthIdWithAadhaarOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithAadhaarOtp
            }
            output: CreateAccountJwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/createHealthIdWithPreVerified': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: CreateAccountJwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountWithPreVerifiedAadhaar
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/generateMobileOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPForTxnRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPForTxnRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPForTxnRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPForTxnRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPForTxnRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharOtpGenerateRequestPayLoad
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/resendAadhaarOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: CreateAccountJwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/search/aadhar': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: { [x: string]: unknown }[]
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: AadharNumberRequestPayload
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/verifyBio': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarWithBio
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarWithBio
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarWithBio
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarWithBio
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarWithBio
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/verifyMobileOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/aadhaar/verifyOTP': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarOtp
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyAadhaarOtp
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/mobile/createHealthId': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountByVerifiedMobileRequest
            }
            output: CreateAccountJwtResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountByVerifiedMobileRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountByVerifiedMobileRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountByVerifiedMobileRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: CreateAccountByVerifiedMobileRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/mobile/generateOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: TxnResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: GenerateMobileOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/mobile/resendOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: boolean
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: ResendOTPRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/registration/mobile/verifyOtp': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: MobileVerificationToken
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: VerifyMobileRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/search/existsByHealthId': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/search/searchByHealthId': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: SearchResponseSingle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByHealthIdRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/v1/search/searchByMobile': {
      $post:
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByMobileRequest
            }
            output: SearchResponseSingle
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByMobileRequest
            }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByMobileRequest
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByMobileRequest
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { header: { 'Accept-Language'?: string | undefined } } & {
              json: SearchByMobileRequest
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
