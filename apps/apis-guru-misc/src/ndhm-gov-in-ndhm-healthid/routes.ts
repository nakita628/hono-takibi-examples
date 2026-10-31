import { createRoute, z } from '@hono/zod-openapi'

type FileType = {
  absolute?: boolean
  absoluteFile?: FileType
  absolutePath?: string
  canonicalFile?: FileType
  canonicalPath?: string
  directory?: boolean
  file?: boolean
  freeSpace?: bigint
  hidden?: boolean
  name?: string
  parent?: string
  parentFile?: FileType
  path?: string
  totalSpace?: bigint
  usableSpace?: bigint
}

const AadharNumberRequestPayloadSchema = z
  .object({
    aadhaar: z
      .string()
      .regex(/^(\d{12}|\d{16})*$/)
      .exactOptional(),
  })
  .openapi({ title: 'AadharNumberRequestPayload', required: [] })
  .openapi('AadharNumberRequestPayload')

const AadharOtpGenerateRequestPayLoadSchema = z
  .object({
    aadhaar: z
      .string()
      .regex(/^(\d{12}|\d{16})*$/)
      .exactOptional(),
  })
  .openapi({ title: 'AadharOtpGenerateRequestPayLoad', required: [] })
  .openapi('AadharOtpGenerateRequestPayLoad')

const AuthAccountAadhaarBioRequestSchema = z
  .object({
    authType: z.enum(['FINGERSCAN', 'IRIS', 'OTP']).exactOptional(),
    bioType: z.string().exactOptional(),
    pid: z.string().exactOptional(),
    txnId: z.uuid().exactOptional(),
  })
  .openapi({ title: 'AuthAccountAadhaarBioRequest', required: [] })
  .openapi('AuthAccountAadhaarBioRequest')

const AuthAccountAadhaarOTPRequestSchema = z
  .object({ otp: z.string().regex(/^([1-9][0-9]*)$/), txnId: z.uuid() })
  .openapi({ required: ['otp', 'txnId'], title: 'AuthAccountAadhaarOTPRequest' })
  .openapi('AuthAccountAadhaarOTPRequest')

const AuthAccountMobileOTPRequestSchema = z
  .object({ otp: z.string().exactOptional(), txnId: z.string().exactOptional() })
  .openapi({ title: 'AuthAccountMobileOTPRequest', required: [] })
  .openapi('AuthAccountMobileOTPRequest')

const AuthAccountWithDemographicsRequestSchema = z
  .object({
    gender: z
      .string()
      .regex(/^(M|F|O|U)$/)
      .exactOptional(),
    name: z.string().exactOptional(),
    txnId: z.uuid(),
    yearOfBirth: z
      .string()
      .regex(/^(\d{4})$/)
      .exactOptional(),
  })
  .openapi({ required: ['txnId'], title: 'AuthAccountWithDemographicsRequest' })
  .openapi('AuthAccountWithDemographicsRequest')

const AuthInitRequestSchema = z
  .object({
    authMethod: z.enum(['AADHAAR_OTP', 'MOBILE_OTP', 'PASSWORD', 'DEMOGRAPHICS', 'AADHAAR_BIO']),
    healthid: z.string().exactOptional(),
  })
  .openapi({ required: ['authMethod'], title: 'AuthInitRequest' })
  .openapi('AuthInitRequest')

const AuthMobileOTPRequestSchema = z
  .object({ healthid: z.string().exactOptional() })
  .openapi({ title: 'AuthMobileOTPRequest', required: [] })
  .openapi('AuthMobileOTPRequest')

const AuthWithMobileTxnAndUserDataSchema = z
  .object({
    gender: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    name: z.string().exactOptional(),
    token: z.string().exactOptional(),
    txnId: z.string(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ required: ['txnId'], title: 'AuthWithMobileTxnAndUserData' })
  .openapi('AuthWithMobileTxnAndUserData')

const AuthWithPasswordRequestSchema = z
  .object({ password: z.string(), txnId: z.uuid() })
  .openapi({ required: ['password', 'txnId'], title: 'AuthWithPasswordRequest' })
  .openapi('AuthWithPasswordRequest')

const BenefitDTOSchema = z
  .object({
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    description: z.string().exactOptional(),
    linkageDate: z.iso.datetime({ offset: true }).exactOptional(),
    programName: z.string().exactOptional(),
    validity: z.iso.date().exactOptional(),
  })
  .openapi({ title: 'BenefitDTO', required: [] })
  .openapi('BenefitDTO')

const FileSchema: z.ZodType<FileType> = z
  .lazy(() =>
    z
      .object({
        absolute: z.boolean().exactOptional(),
        absoluteFile: FileSchema.exactOptional(),
        absolutePath: z.string().exactOptional(),
        canonicalFile: FileSchema.exactOptional(),
        canonicalPath: z.string().exactOptional(),
        directory: z.boolean().exactOptional(),
        file: z.boolean().exactOptional(),
        freeSpace: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        hidden: z.boolean().exactOptional(),
        name: z.string().exactOptional(),
        parent: z.string().exactOptional(),
        parentFile: FileSchema.exactOptional(),
        path: z.string().exactOptional(),
        totalSpace: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
        usableSpace: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64' }),
      })
      .openapi({ title: 'File', required: [] }),
  )
  .openapi('File')

const InputStreamSchema = z.object({}).openapi({ title: 'InputStream' }).openapi('InputStream')

const URISchema = z
  .object({
    absolute: z.boolean().exactOptional(),
    authority: z.string().exactOptional(),
    fragment: z.string().exactOptional(),
    host: z.string().exactOptional(),
    opaque: z.boolean().exactOptional(),
    path: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    query: z.string().exactOptional(),
    rawAuthority: z.string().exactOptional(),
    rawFragment: z.string().exactOptional(),
    rawPath: z.string().exactOptional(),
    rawQuery: z.string().exactOptional(),
    rawSchemeSpecificPart: z.string().exactOptional(),
    rawUserInfo: z.string().exactOptional(),
    scheme: z.string().exactOptional(),
    schemeSpecificPart: z.string().exactOptional(),
    userInfo: z.string().exactOptional(),
  })
  .openapi({ title: 'URI', required: [] })
  .openapi('URI')

const URLSchema = z
  .object({
    authority: z.string().exactOptional(),
    content: z.object({}).exactOptional(),
    defaultPort: z.int32().exactOptional(),
    file: z.string().exactOptional(),
    host: z.string().exactOptional(),
    path: z.string().exactOptional(),
    port: z.int32().exactOptional(),
    protocol: z.string().exactOptional(),
    query: z.string().exactOptional(),
    ref: z.string().exactOptional(),
    userInfo: z.string().exactOptional(),
  })
  .openapi({ title: 'URL', required: [] })
  .openapi('URL')

const ByteArrayResourceSchema = z
  .object({
    byteArray: z
      .string()
      .regex(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/)
      .exactOptional(),
    description: z.string().exactOptional(),
    file: FileSchema.exactOptional(),
    filename: z.string().exactOptional(),
    inputStream: InputStreamSchema.exactOptional(),
    open: z.boolean().exactOptional(),
    readable: z.boolean().exactOptional(),
    uri: URISchema.exactOptional(),
    url: URLSchema.exactOptional(),
  })
  .openapi({ title: 'ByteArrayResource', required: [] })
  .openapi('ByteArrayResource')

const CovinTxnResponseSchema = z
  .object({ mobileNumber: z.string().exactOptional(), txnId: z.uuid().exactOptional() })
  .openapi({ title: 'CovinTxnResponse', required: [] })
  .openapi('CovinTxnResponse')

const CreateAccountByVerifiedMobileRequestSchema = z
  .object({
    address: z.string().exactOptional(),
    dayOfBirth: z
      .string()
      .regex(/^(0?[1-9]|[12][0-9]|3[01])$/)
      .exactOptional(),
    districtCode: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z
      .string()
      .regex(/^(M|F|O|U)$/)
      .exactOptional(),
    healthId: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    monthOfBirth: z
      .string()
      .regex(/^([1-9]|1[012])$/)
      .exactOptional(),
    name: z.string().exactOptional(),
    password: z.string().exactOptional(),
    pincode: z.int32().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    restrictions: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    subdistrictCode: z.string().exactOptional(),
    token: z.string().exactOptional(),
    townCode: z.string().exactOptional(),
    txnId: z.string(),
    villageCode: z.string().exactOptional(),
    wardCode: z.string().exactOptional(),
    yearOfBirth: z
      .string()
      .regex(/^(\d{4})$/)
      .exactOptional(),
  })
  .openapi({ required: ['txnId'], title: 'CreateAccountByVerifiedMobileRequest' })
  .openapi('CreateAccountByVerifiedMobileRequest')

const CreateAccountJwtResponseSchema = z
  .object({
    authMethods: z
      .array(z.enum(['AADHAAR_OTP', 'MOBILE_OTP', 'PASSWORD', 'DEMOGRAPHICS', 'AADHAAR_BIO']))
      .exactOptional(),
    dayOfBirth: z.string().exactOptional(),
    districtCode: z.string().exactOptional(),
    districtName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    kycPhoto: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    monthOfBirth: z.string().exactOptional(),
    name: z.string().exactOptional(),
    new: z.boolean().exactOptional(),
    stateCode: z.string().exactOptional(),
    stateName: z.string().exactOptional(),
    tags: z.record(z.string(), z.string()).exactOptional(),
    token: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateAccountJwtResponse', required: [] })
  .openapi('CreateAccountJwtResponse')

const CreateAccountWithAadhaarOtpSchema = z
  .object({
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    otp: z.string().exactOptional(),
    password: z.string().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    restrictions: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
    username: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateAccountWithAadhaarOtp', required: [] })
  .openapi('CreateAccountWithAadhaarOtp')

const CreateAccountWithPreVerifiedAadhaarSchema = z
  .object({
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    password: z.string().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateAccountWithPreVerifiedAadhaar', required: [] })
  .openapi('CreateAccountWithPreVerifiedAadhaar')

const CreateHIdDemoAuthRequestSchema = z
  .object({
    aadharNumber: z
      .string()
      .regex(/^(\d{12}|\d{16})*$/)
      .exactOptional(),
    autoGeneratedBenefitId: z.boolean().exactOptional(),
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    consentHealthId: z.boolean().exactOptional(),
    dateOfBirth: z.string().exactOptional(),
    gender: z
      .string()
      .regex(/^(M|F|T)$/)
      .exactOptional(),
    mobileNumber: z.string().exactOptional(),
    name: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateHIdDemoAuthRequest', required: [] })
  .openapi('CreateHIdDemoAuthRequest')

const CreateHealthIdOptRequestSchema = z
  .object({
    autoGeneratedBenefitId: z.boolean().exactOptional(),
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    consentHealthId: z.boolean().exactOptional(),
    mobileNumber: z.string().exactOptional(),
    otp: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateHealthIdOptRequest', required: [] })
  .openapi('CreateHealthIdOptRequest')

const CreateHidBiometricRequestSchema = z
  .object({
    aadhaar: z
      .string()
      .regex(/^(\d{12}|\d{16})*$/)
      .exactOptional(),
    autoGeneratedBenefitId: z.boolean().exactOptional(),
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    bioType: z.string().exactOptional(),
    consentHealthId: z.boolean().exactOptional(),
    mobileNumber: z.string().exactOptional(),
    pid: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateHidBiometricRequest', required: [] })
  .openapi('CreateHidBiometricRequest')

const CreateHidMobileRequestSchema = z
  .object({
    autoGeneratedBenefitId: z.boolean().exactOptional(),
    benefitDocType: z
      .enum([
        'VOTER_ID_CARD',
        'RATION_CARD',
        'PAN_CARD',
        'DRIVING_LICENSE',
        'PENSIONER_PHOTO_CARD',
        'KISSAN_PHOTO_PASSBOOK',
        'FREEDOM_FIGHTER_PHOTO_CARD',
        'CERTIFICATE_IDENTIFY',
        'DISABILITY_ID_CARD',
        'MNREGA_JOB_CARD',
        'BIRTH_CERTIFICATE',
        'MARRIAGE_CERTIFICATE',
        'OTHER_GOVERNMENT_ID',
        'ADOPTION_CERTIFICATE',
      ])
      .exactOptional(),
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    consentHealthId: z.boolean().exactOptional(),
    dateOfBirth: z.string().exactOptional(),
    docNumber: z.string().exactOptional(),
    fileType: z.string().exactOptional(),
    gender: z
      .string()
      .regex(/^(M|F|T)$/)
      .exactOptional(),
    name: z.string().exactOptional(),
    otp: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
    uploadedDoc: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateHidMobileRequest', required: [] })
  .openapi('CreateHidMobileRequest')

const CreateHidNotifyBenefitRequestSchema = z
  .object({
    aadharNumberOrUidToken: z.string().exactOptional(),
    autoGeneratedBenefitId: z.boolean().exactOptional(),
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    consentHealthId: z.boolean().exactOptional(),
    dateOfBirth: z.string().exactOptional(),
    gender: z
      .string()
      .regex(/^(M|F|T)$/)
      .exactOptional(),
    mobileNumber: z.string().exactOptional(),
    name: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'CreateHidNotifyBenefitRequest', required: [] })
  .openapi('CreateHidNotifyBenefitRequest')

const DistrictDTOSchema = z
  .object({ code: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ title: 'DistrictDTO', required: [] })
  .openapi('DistrictDTO')

const GenerateMobileOTPForTxnRequestSchema = z
  .object({ mobile: z.string().exactOptional(), txnId: z.string().exactOptional() })
  .openapi({ title: 'GenerateMobileOTPForTxnRequest', required: [] })
  .openapi('GenerateMobileOTPForTxnRequest')

const GenerateMobileOTPRequestSchema = z
  .object({ mobile: z.string().exactOptional() })
  .openapi({ title: 'GenerateMobileOTPRequest', required: [] })
  .openapi('GenerateMobileOTPRequest')

const HealthFacilityAuthenticationRequestSchema = z
  .object({ hfrUid: z.string().exactOptional(), password: z.string().exactOptional() })
  .openapi({ title: 'HealthFacilityAuthenticationRequest', required: [] })
  .openapi('HealthFacilityAuthenticationRequest')

const HealthFacilityAuthenticationResponseSchema = z
  .object({ changePassword: z.boolean().exactOptional(), token: z.string().exactOptional() })
  .openapi({ title: 'HealthFacilityAuthenticationResponse', required: [] })
  .openapi('HealthFacilityAuthenticationResponse')

const HealthFacilityChangedPasswordRequestSchema = z
  .object({
    hfrUid: z.string().exactOptional(),
    newPassword: z.string().exactOptional(),
    oldPassword: z.string().exactOptional(),
  })
  .openapi({ title: 'HealthFacilityChangedPasswordRequest', required: [] })
  .openapi('HealthFacilityChangedPasswordRequest')

const HealthFacilityPasswordRequestSchema = z
  .object({ hfrUid: z.string().exactOptional() })
  .openapi({ title: 'HealthFacilityPasswordRequest', required: [] })
  .openapi('HealthFacilityPasswordRequest')

const HealthFacilityPasswordResponseSchema = z
  .object({ password: z.string().exactOptional() })
  .openapi({ title: 'HealthFacilityPasswordResponse', required: [] })
  .openapi('HealthFacilityPasswordResponse')

const HidBenefitDelinkRequestPayloadSchema = z
  .object({ benefitName: z.string().exactOptional(), uidToken: z.string().exactOptional() })
  .openapi({ title: 'HidBenefitDelinkRequestPayload', required: [] })
  .openapi('HidBenefitDelinkRequestPayload')

const HidBenefitLinkedRequestPayloadSchema = z
  .object({
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    uidToken: z.string().exactOptional(),
    validity: z.string().exactOptional(),
  })
  .openapi({ title: 'HidBenefitLinkedRequestPayload', required: [] })
  .openapi('HidBenefitLinkedRequestPayload')

const HidBenefitLinkedResponsePayloadSchema = z
  .object({
    benefitName: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    status: z.string().exactOptional(),
  })
  .openapi({ title: 'HidBenefitLinkedResponsePayload', required: [] })
  .openapi('HidBenefitLinkedResponsePayload')

const HidBenefitNameSearchRequestSchema = z
  .object({ benefitId: z.string().exactOptional(), healthId: z.string().exactOptional() })
  .openapi({ title: 'HidBenefitNameSearchRequest', required: [] })
  .openapi('HidBenefitNameSearchRequest')

const HidBenefitRequestPayloadSchema = z
  .object({
    address: z.string().exactOptional(),
    authMethods: z
      .array(z.enum(['AADHAAR_OTP', 'MOBILE_OTP', 'PASSWORD', 'DEMOGRAPHICS', 'AADHAAR_BIO']))
      .exactOptional(),
    benefitId: z.string().exactOptional(),
    dayOfBirth: z.string().exactOptional(),
    districtCode: z.string().exactOptional(),
    districtName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    kycPhoto: z.string().exactOptional(),
    kycVerified: z.boolean().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    monthOfBirth: z.string().exactOptional(),
    name: z.string().exactOptional(),
    new: z.boolean().exactOptional(),
    pincode: z.string().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    stateName: z.string().exactOptional(),
    status: z.string().exactOptional(),
    subDistrictCode: z.string().exactOptional(),
    subdistrictName: z.string().exactOptional(),
    tags: z.record(z.string(), z.string()).exactOptional(),
    token: z.string().exactOptional(),
    townCode: z.string().exactOptional(),
    townName: z.string().exactOptional(),
    villageCode: z.string().exactOptional(),
    villageName: z.string().exactOptional(),
    wardCode: z.string().exactOptional(),
    wardName: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'HidBenefitRequestPayload', required: [] })
  .openapi('HidBenefitRequestPayload')

const HidBenefitSearchResponsePayloadSchema = z
  .object({
    benefitId: z.string().exactOptional(),
    benefitName: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
  })
  .openapi({ title: 'HidBenefitSearchResponsePayload', required: [] })
  .openapi('HidBenefitSearchResponsePayload')

const HidChangePasswordRequestPayloadSchema = z
  .object({ newPassword: z.string().exactOptional(), oldPassword: z.string().exactOptional() })
  .openapi({ title: 'HidChangePasswordRequestPayload', required: [] })
  .openapi('HidChangePasswordRequestPayload')

const HidOtpRequestPaylaodSchema = z
  .object({
    newPassword: z.string().exactOptional(),
    otp: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
  })
  .openapi({ title: 'HidOtpRequestPaylaod', required: [] })
  .openapi('HidOtpRequestPaylaod')

const HidStatusRequestPayloadSchema = z
  .object({ healthIdNumber: z.string().exactOptional() })
  .openapi({ title: 'HidStatusRequestPayload', required: [] })
  .openapi('HidStatusRequestPayload')

const HidUpdateAccountRequestSchema = z
  .object({
    address: z.string().exactOptional(),
    dayOfBirth: z.string().exactOptional(),
    districtCode: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    monthOfBirth: z.string().exactOptional(),
    password: z.string().exactOptional(),
    pincode: z.int32().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    subdistrictCode: z.string().exactOptional(),
    townCode: z.string().exactOptional(),
    villageCode: z.string().exactOptional(),
    wardCode: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'HidUpdateAccountRequest', required: [] })
  .openapi('HidUpdateAccountRequest')

const HidUpdateMobiletRequestSchema = z
  .object({ healthIdNumber: z.string().exactOptional(), mobile: z.string().exactOptional() })
  .openapi({ title: 'HidUpdateMobiletRequest', required: [] })
  .openapi('HidUpdateMobiletRequest')

const JwtRequestSchema = z
  .object({ healthId: z.string().exactOptional(), password: z.string().exactOptional() })
  .openapi({ title: 'JwtRequest', required: [] })
  .openapi('JwtRequest')

const JwtResponseSchema = z
  .object({ token: z.string().exactOptional() })
  .openapi({ title: 'JwtResponse', required: [] })
  .openapi('JwtResponse')

const MobileVerificationTokenSchema = z
  .object({ token: z.string().exactOptional() })
  .openapi({ title: 'MobileVerificationToken', required: [] })
  .openapi('MobileVerificationToken')

const ResendOTPRequestSchema = z
  .object({ txnId: z.string() })
  .openapi({ required: ['txnId'], title: 'ResendOTPRequest' })
  .openapi('ResendOTPRequest')

const ResponseEntitySchema = z
  .object({
    body: z.object({}).exactOptional(),
    statusCode: z
      .enum([
        '100 CONTINUE',
        '101 SWITCHING_PROTOCOLS',
        '102 PROCESSING',
        '103 CHECKPOINT',
        '200 OK',
        '201 CREATED',
        '202 ACCEPTED',
        '203 NON_AUTHORITATIVE_INFORMATION',
        '204 NO_CONTENT',
        '205 RESET_CONTENT',
        '206 PARTIAL_CONTENT',
        '207 MULTI_STATUS',
        '208 ALREADY_REPORTED',
        '226 IM_USED',
        '300 MULTIPLE_CHOICES',
        '301 MOVED_PERMANENTLY',
        '302 FOUND',
        '302 MOVED_TEMPORARILY',
        '303 SEE_OTHER',
        '304 NOT_MODIFIED',
        '305 USE_PROXY',
        '307 TEMPORARY_REDIRECT',
        '308 PERMANENT_REDIRECT',
        '400 BAD_REQUEST',
        '401 UNAUTHORIZED',
        '402 PAYMENT_REQUIRED',
        '403 FORBIDDEN',
        '404 NOT_FOUND',
        '405 METHOD_NOT_ALLOWED',
        '406 NOT_ACCEPTABLE',
        '407 PROXY_AUTHENTICATION_REQUIRED',
        '408 REQUEST_TIMEOUT',
        '409 CONFLICT',
        '410 GONE',
        '411 LENGTH_REQUIRED',
        '412 PRECONDITION_FAILED',
        '413 PAYLOAD_TOO_LARGE',
        '413 REQUEST_ENTITY_TOO_LARGE',
        '414 URI_TOO_LONG',
        '414 REQUEST_URI_TOO_LONG',
        '415 UNSUPPORTED_MEDIA_TYPE',
        '416 REQUESTED_RANGE_NOT_SATISFIABLE',
        '417 EXPECTATION_FAILED',
        '418 I_AM_A_TEAPOT',
        '419 INSUFFICIENT_SPACE_ON_RESOURCE',
        '420 METHOD_FAILURE',
        '421 DESTINATION_LOCKED',
        '422 UNPROCESSABLE_ENTITY',
        '423 LOCKED',
        '424 FAILED_DEPENDENCY',
        '426 UPGRADE_REQUIRED',
        '428 PRECONDITION_REQUIRED',
        '429 TOO_MANY_REQUESTS',
        '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
        '451 UNAVAILABLE_FOR_LEGAL_REASONS',
        '500 INTERNAL_SERVER_ERROR',
        '501 NOT_IMPLEMENTED',
        '502 BAD_GATEWAY',
        '503 SERVICE_UNAVAILABLE',
        '504 GATEWAY_TIMEOUT',
        '505 HTTP_VERSION_NOT_SUPPORTED',
        '506 VARIANT_ALSO_NEGOTIATES',
        '507 INSUFFICIENT_STORAGE',
        '508 LOOP_DETECTED',
        '509 BANDWIDTH_LIMIT_EXCEEDED',
        '510 NOT_EXTENDED',
        '511 NETWORK_AUTHENTICATION_REQUIRED',
      ])
      .exactOptional(),
    statusCodeValue: z.int32().exactOptional(),
  })
  .openapi({ title: 'ResponseEntity', required: [] })
  .openapi('ResponseEntity')

const RetrieveHealthIdPayloadResponseSchema = z
  .object({ healthId: z.string().exactOptional(), healthIdNumber: z.string().exactOptional() })
  .openapi({ title: 'RetrieveHealthIdPayloadResponse', required: [] })
  .openapi('RetrieveHealthIdPayloadResponse')

const RetriveHealthIdMobilePayLoadSchema = z
  .object({
    dayOfBirth: z
      .string()
      .regex(/^(0?[1-9]|[12][0-9]|3[01])$/)
      .exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z
      .string()
      .regex(/^(M|F|O|U)$/)
      .exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    monthOfBirth: z
      .string()
      .regex(/^(0?[1-9]|1[012])$/)
      .exactOptional(),
    name: z.string().exactOptional(),
    otp: z.string().exactOptional(),
    txnId: z.string(),
    yearOfBirth: z
      .string()
      .regex(/^(\d{4})$/)
      .exactOptional(),
  })
  .openapi({ required: ['txnId'], title: 'RetriveHealthIdMobilePayLoad' })
  .openapi('RetriveHealthIdMobilePayLoad')

const SearchByHealthIdRequestSchema = z
  .object({ healthId: z.string().exactOptional() })
  .openapi({ title: 'SearchByHealthIdRequest', required: [] })
  .openapi('SearchByHealthIdRequest')

const SearchByMobileRequestSchema = z
  .object({
    gender: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    name: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'SearchByMobileRequest', required: [] })
  .openapi('SearchByMobileRequest')

const SearchResponseSingleSchema = z
  .object({
    authMethods: z
      .array(z.enum(['AADHAAR_OTP', 'MOBILE_OTP', 'PASSWORD', 'DEMOGRAPHICS', 'AADHAAR_BIO']))
      .exactOptional(),
    healthId: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    name: z.string().exactOptional(),
    tags: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ title: 'SearchResponseSingle', required: [] })
  .openapi('SearchResponseSingle')

const StatesDTOSchema = z
  .object({
    code: z.string().exactOptional(),
    districts: z.array(DistrictDTOSchema).exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ title: 'StatesDTO', required: [] })
  .openapi('StatesDTO')

const TagRequestSchema = z
  .object({
    healthId: z.string().exactOptional(),
    tags: z.record(z.string(), z.string()).exactOptional(),
  })
  .openapi({ title: 'TagRequest', required: [] })
  .openapi('TagRequest')

const TxnResponseSchema = z
  .object({ txnId: z.uuid().exactOptional() })
  .openapi({ title: 'TxnResponse', required: [] })
  .openapi('TxnResponse')

const UpdateAccountRequestSchema = z
  .object({
    address: z.string().exactOptional(),
    dayOfBirth: z.string().exactOptional(),
    districtCode: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    monthOfBirth: z.string().exactOptional(),
    password: z.string().exactOptional(),
    pincode: z.int32().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    subdistrictCode: z.string().exactOptional(),
    townCode: z.string().exactOptional(),
    villageCode: z.string().exactOptional(),
    wardCode: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'UpdateAccountRequest', required: [] })
  .openapi('UpdateAccountRequest')

const UserDTOSchema = z
  .object({
    address: z.string().exactOptional(),
    authMethods: z
      .array(z.enum(['AADHAAR_OTP', 'MOBILE_OTP', 'PASSWORD', 'DEMOGRAPHICS', 'AADHAAR_BIO']))
      .exactOptional(),
    dayOfBirth: z.string().exactOptional(),
    districtCode: z.string().exactOptional(),
    districtName: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    gender: z.string().exactOptional(),
    healthId: z.string().exactOptional(),
    healthIdNumber: z.string().exactOptional(),
    kycPhoto: z.string().exactOptional(),
    kycVerified: z.boolean().exactOptional(),
    lastName: z.string().exactOptional(),
    middleName: z.string().exactOptional(),
    mobile: z.string().exactOptional(),
    monthOfBirth: z.string().exactOptional(),
    name: z.string().exactOptional(),
    new: z.boolean().exactOptional(),
    pincode: z.string().exactOptional(),
    profilePhoto: z.string().exactOptional(),
    stateCode: z.string().exactOptional(),
    stateName: z.string().exactOptional(),
    subDistrictCode: z.string().exactOptional(),
    subdistrictName: z.string().exactOptional(),
    tags: z.record(z.string(), z.string()).exactOptional(),
    townCode: z.string().exactOptional(),
    townName: z.string().exactOptional(),
    villageCode: z.string().exactOptional(),
    villageName: z.string().exactOptional(),
    wardCode: z.string().exactOptional(),
    wardName: z.string().exactOptional(),
    yearOfBirth: z.string().exactOptional(),
  })
  .openapi({ title: 'UserDTO', required: [] })
  .openapi('UserDTO')

const ValidateTokenRequestSchema = z
  .object({ authToken: z.string().exactOptional() })
  .openapi({ title: 'ValidateTokenRequest', required: [] })
  .openapi('ValidateTokenRequest')

const VerifyAadhaarOtpSchema = z
  .object({
    otp: z.string().exactOptional(),
    restrictions: z.string().exactOptional(),
    txnId: z.string().exactOptional(),
  })
  .openapi({ title: 'VerifyAadhaarOtp', required: [] })
  .openapi('VerifyAadhaarOtp')

const VerifyAadhaarWithBioSchema = z
  .object({
    aadhaar: z
      .string()
      .regex(/^(\d{12}|\d{16})*$/)
      .exactOptional(),
    bioType: z.string().exactOptional(),
    pid: z.string().exactOptional(),
    restrictions: z.string().exactOptional(),
  })
  .openapi({ title: 'VerifyAadhaarWithBio', required: [] })
  .openapi('VerifyAadhaarWithBio')

const VerifyMobileRequestSchema = z
  .object({ otp: z.string().exactOptional(), txnId: z.string().exactOptional() })
  .openapi({ title: 'VerifyMobileRequest', required: [] })
  .openapi('VerifyMobileRequest')

const AuthorizationSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

const XHIPIDSecurityScheme = { in: 'header', name: 'X-HIP-ID', type: 'apiKey' }

export const postV1AccountAadhaarGenerateOTPRoute = createRoute({
  method: 'post',
  path: '/v1/account/aadhaar/generateOTP',
  tags: ['Profile'],
  summary: 'Generate Aadhaar OTP on registrered for link account with aadhar number',
  description: 'Generate Aadhaar OTP on registrered for link account with aadhar number',
  operationId: 'generatereKycAadharOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountAadhaarVerifyOTPRoute = createRoute({
  method: 'post',
  path: '/v1/account/aadhaar/verifyOTP',
  tags: ['Profile'],
  summary: 'Verify Aadhaar OTP to complete KYC/re-KYC verification.',
  description: 'Verify Aadhaar OTP to complete KYC/re-KYC verification',
  operationId: 'verifyAadharOTPOnlyUsingPOST_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'verifyAadhaarOtp',
      content: { 'application/json': { schema: VerifyAadhaarOtpSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountBenefitsRoute = createRoute({
  method: 'get',
  path: '/v1/account/benefits',
  tags: ['Profile'],
  summary: 'Get List of Benefits associated with HealthID.',
  operationId: 'getBenefitsUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer XToken',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountChangePasswdByAadhaarRoute = createRoute({
  method: 'post',
  path: '/v1/account/change/passwd/byAadhaar',
  tags: ['Profile'],
  summary: 'Change password via Aadhar for heath id.',
  description: 'Change password via Aadhar for heath id.',
  operationId: 'changePasswordViaAadharUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'hidOtpRequestPaylaod',
      content: { 'application/json': { schema: HidOtpRequestPaylaodSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountChangePasswdByMobileRoute = createRoute({
  method: 'post',
  path: '/v1/account/change/passwd/byMobile',
  tags: ['Profile'],
  summary: 'Change password via mobile for heath id.',
  description: 'Change password via mobile for heath id.',
  operationId: 'changePasswordViaMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'hidOtpRequestPaylaod',
      content: { 'application/json': { schema: HidOtpRequestPaylaodSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountChangePasswdGenerateAadhaarOTPRoute = createRoute({
  method: 'get',
  path: '/v1/account/change/passwd/generateAadhaarOTP',
  tags: ['Profile'],
  summary: 'Generate Aadhaar OTP on registrered mobile number.',
  description: 'Generate Aadhaar OTP on registrered mobile number.',
  operationId: 'generateAadharOTPUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountChangePasswdGenerateMobileOTPRoute = createRoute({
  method: 'get',
  path: '/v1/account/change/passwd/generateMobileOTP',
  tags: ['Profile'],
  summary: 'Generate Mobile OTP to start registration.',
  description: 'Generate Mobile OTP to start registration.',
  operationId: 'generateMobileOTPUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountChangePasswordRoute = createRoute({
  method: 'post',
  path: '/v1/account/change/password',
  tags: ['Profile'],
  summary: 'Change password via password for heath id.',
  description: 'Change password via password for heath id.',
  operationId: 'changePasswordViaUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'healthFacilityPasswordRequest',
      content: { 'application/json': { schema: HidChangePasswordRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountGetCardRoute = createRoute({
  method: 'get',
  path: '/v1/account/getCard',
  tags: ['Profile'],
  summary: 'Generate Health ID card in PDF format',
  operationId: 'generateCardUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountGetPngCardRoute = createRoute({
  method: 'get',
  path: '/v1/account/getPngCard',
  tags: ['Profile'],
  summary: 'Generate Health ID card PNG',
  operationId: 'generatePngCardUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountGetSvgCardRoute = createRoute({
  method: 'get',
  path: '/v1/account/getSvgCard',
  tags: ['Profile'],
  summary: 'Generate Health ID card SVG',
  operationId: 'generateSvgCardUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountProfileRoute = createRoute({
  method: 'get',
  path: '/v1/account/profile',
  tags: ['Profile'],
  summary: 'Get account information.',
  operationId: 'getAccountInformationUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer XToken',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountProfileRoute = createRoute({
  method: 'post',
  path: '/v1/account/profile',
  tags: ['Profile'],
  summary: 'Update account information',
  operationId: 'updateAccountInformationUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: UpdateAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const deleteV1AccountProfileRoute = createRoute({
  method: 'delete',
  path: '/v1/account/profile',
  tags: ['Profile'],
  summary: 'Delete account',
  operationId: 'deleteAccountUsingDELETE',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    204: { description: 'No Content', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AccountQrCodeRoute = createRoute({
  method: 'get',
  path: '/v1/account/qrCode',
  tags: ['Profile'],
  summary: 'Get Quick Response code in PNG format for this account.',
  operationId: 'getQrCodeUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer XToken',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.string() }, 'image/png': { schema: z.string() } },
    },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AccountTokenRoute = createRoute({
  method: 'post',
  path: '/v1/account/token',
  tags: ['Profile'],
  summary: 'Validate auth token',
  operationId: 'validateTokenUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: ValidateTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthAuthPasswordRoute = createRoute({
  method: 'post',
  path: '/v1/auth/authPassword',
  tags: ['Authentication'],
  summary: 'Authenticate using Health ID number / Health ID and password',
  operationId: 'authenticateWithPasswordUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: JwtRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthAuthWithMobileRoute = createRoute({
  method: 'post',
  path: '/v1/auth/authWithMobile',
  tags: ['Authentication'],
  summary: 'Authenticate request to generate Mobile OTP using Health ID number / Health ID',
  operationId: 'authenticateUserUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authRequest',
      content: { 'application/json': { schema: AuthMobileOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthAuthWithMobileTokenRoute = createRoute({
  method: 'post',
  path: '/v1/auth/authWithMobileToken',
  tags: ['Authentication'],
  summary: 'Authenticate using verified Mobile Number and user data',
  operationId: 'authWithMobileTokenUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authRequest',
      content: { 'application/json': { schema: AuthWithMobileTxnAndUserDataSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1AuthCertRoute = createRoute({
  method: 'get',
  path: '/v1/auth/cert',
  tags: ['Authentication'],
  summary: 'Auth token public key.',
  operationId: 'certUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthConfirmWithAadhaarBioRoute = createRoute({
  method: 'post',
  path: '/v1/auth/confirmWithAadhaarBio',
  tags: ['Authentication'],
  summary: 'Authentication with Aadhaar Biometric based auth transaction.',
  operationId: 'confirmWithAadhaarBioUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: AuthAccountAadhaarBioRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthConfirmWithAadhaarOtpRoute = createRoute({
  method: 'post',
  path: '/v1/auth/confirmWithAadhaarOtp',
  tags: ['Authentication'],
  summary: 'Authentication with Aadhaar OTP based auth transaction.',
  operationId: 'confirmWithAadhaarOtpUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: AuthAccountAadhaarOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthConfirmWithDemographicsRoute = createRoute({
  method: 'post',
  path: '/v1/auth/confirmWithDemographics',
  tags: ['Authentication'],
  summary: 'Authenticate using demographic data of user.',
  operationId: 'confirmWithDemographicsUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: AuthAccountWithDemographicsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthConfirmWithMobileOTPRoute = createRoute({
  method: 'post',
  path: '/v1/auth/confirmWithMobileOTP',
  tags: ['Authentication'],
  summary: 'Authentication with Mobile OTP based auth transaction.',
  operationId: 'confirmWithMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: AuthAccountMobileOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthConfirmWithPasswordRoute = createRoute({
  method: 'post',
  path: '/v1/auth/confirmWithPassword',
  tags: ['Authentication'],
  summary: 'Authentication with PASSWORD based auth transaction.',
  operationId: 'authAccountPasswordRequestUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authenticationRequest',
      content: { 'application/json': { schema: AuthWithPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: JwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthInitRoute = createRoute({
  method: 'post',
  path: '/v1/auth/init',
  tags: ['Authentication'],
  summary: 'Initiate authentication process for given Health ID',
  operationId: 'initiateAuthUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authRequest',
      content: { 'application/json': { schema: AuthInitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1AuthResendAuthOTPRoute = createRoute({
  method: 'post',
  path: '/v1/auth/resendAuthOTP',
  tags: ['Authentication'],
  summary: 'Resend Aadhaar/Mobile OTP for Authentication Transaction.',
  operationId: 'resendAuthMobileOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'resendOtpRequest',
      content: { 'application/json': { schema: ResendOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1ForgotHealthIdAadhaarRoute = createRoute({
  method: 'post',
  path: '/v1/forgot/healthId/aadhaar',
  tags: ['Forgot health id/number'],
  summary: 'Verify aadhar OTP sent as part of forgetHealth id.',
  description: 'Verify aadhar OTP sent as part of forgetHealth id.',
  operationId: 'retrievalHealthIdByAadharUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'authAccountAadhaarOTPRequest',
      content: { 'application/json': { schema: AuthAccountAadhaarOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: RetrieveHealthIdPayloadResponseSchema } },
    },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1ForgotHealthIdAadhaarGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/forgot/healthId/aadhaar/generateOtp',
  tags: ['Forgot health id/number'],
  summary: 'Generate Aadhaar OTP on registrered mobile number',
  description: 'Generate Aadhaar OTP on registrered mobile number',
  operationId: 'generateAadharOTPUsingPOST_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: AadharOtpGenerateRequestPayLoadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1ForgotHealthIdMobileRoute = createRoute({
  method: 'post',
  path: '/v1/forgot/healthId/mobile',
  tags: ['Forgot health id/number'],
  summary: 'Verify Mobile OTP sent as  part of forgetHealth id.',
  description: 'Verify Mobile OTP sent as  part of forgetHealth id.',
  operationId: 'retrievalHealthIdByMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'retriveHealthIdMobilePayLoad',
      content: { 'application/json': { schema: RetriveHealthIdMobilePayLoadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: RetrieveHealthIdPayloadResponseSchema } },
    },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1ForgotHealthIdMobileGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/forgot/healthId/mobile/generateOtp',
  tags: ['Forgot health id/number'],
  summary: 'Generate Mobile OTP to start registration',
  description: 'Generate Mobile OTP to start registration transaction.',
  operationId: 'generateMobileOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: GenerateMobileOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1HaLgdDistrictsRoute = createRoute({
  method: 'get',
  path: '/v1/ha/lgd/districts',
  tags: ['Utility'],
  summary: 'Get a list of districts in a given  State as per LGD.',
  operationId: 'getDistrictsInStateUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    query: z.object({
      stateCode: z
        .string()
        .openapi({
          param: {
            description: 'stateCode',
            in: 'query',
            name: 'stateCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(DistrictDTOSchema) } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1HaLgdStatesRoute = createRoute({
  method: 'get',
  path: '/v1/ha/lgd/states',
  tags: ['Utility'],
  summary: 'Get a list of states as per LGD.',
  operationId: 'getStatesUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(StatesDTOSchema) } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1HaTagsRoute = createRoute({
  method: 'get',
  path: '/v1/ha/tags',
  tags: ['Tags'],
  summary: 'Get list of Tags against HealthID.',
  operationId: 'getTagsUsingGET',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.object({}) } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HaTagsRoute = createRoute({
  method: 'post',
  path: '/v1/ha/tags',
  tags: ['Tags'],
  summary: 'Add tag against HealthId.',
  operationId: 'addTagUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'tagRequest',
      content: { 'application/json': { schema: TagRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(TagRequestSchema) } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const deleteV1HaTagsRoute = createRoute({
  method: 'delete',
  path: '/v1/ha/tags',
  tags: ['Tags'],
  summary: 'Delete tag against HealthId.',
  operationId: 'deleteTagUsingDELETE',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'tagRequest',
      content: { '*/*': { schema: TagRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(TagRequestSchema) } } },
    204: { description: 'No Content', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityAuthenticateRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/authenticate',
  tags: ['Health Facility'],
  summary: 'Generate token for heath facility id.',
  description: 'Generate token for heath facility id.',
  operationId: 'authenticateHealthFacilityUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'healthFacilityAuthenticationRequest',
      content: { 'application/json': { schema: HealthFacilityAuthenticationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityChangePasswordRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/change/password',
  tags: ['Health Facility'],
  summary: 'Change password for heath facility id.',
  description: 'Change password for heath facility id.',
  operationId: 'changePasswordUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'healthFacilityPasswordRequest',
      content: { 'application/json': { schema: HealthFacilityChangedPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityCreateHealthIdWithPreVerifiedRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/createHealthIdWithPreVerified',
  tags: ['Health Facility'],
  summary: 'Generate Health ID card SVG',
  operationId: 'createAadhaarAccountUsingPOST_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'accountRequest',
      content: { 'application/json': { schema: CreateAccountWithPreVerifiedAadhaarSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CreateAccountJwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityGeneratePasswordRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/generate/password',
  tags: ['Health Facility'],
  summary: 'Generates password for heath facility id.',
  description: 'Generates password for heath facility id.',
  operationId: 'generatePasswordUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'healthFacilityPasswordRequest',
      content: { 'application/json': { schema: HealthFacilityPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/generateOtp',
  tags: ['Health Facility'],
  summary: 'Generate health hacility OTP on registrered mobile number',
  description: 'Generate health facility OTP on registrered mobile number',
  operationId: 'generateFacilityOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer XToken',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: AadharOtpGenerateRequestPayLoadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const getV1HealthFacilityGetSvgCardRoute = createRoute({
  method: 'get',
  path: '/v1/health/facility/getSvgCard',
  tags: ['Health Facility'],
  summary: 'generateSvgCard',
  operationId: 'generateSvgCardUsingGET_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
      'Health-ID': z
        .string()
        .openapi({
          param: {
            description: 'Your health id',
            example: 'demo@ndhm',
            in: 'header',
            name: 'Health-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
      'X-Token': z
        .string()
        .openapi({
          param: {
            description: 'Auth Token',
            example: 'Bearer X-Token',
            in: 'header',
            name: 'X-Token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HealthFacilityResetPasswordRoute = createRoute({
  method: 'post',
  path: '/v1/health/facility/reset/password',
  tags: ['Health Facility'],
  summary: 'Reset password for heath facility id.',
  description: 'Reset password for heath facility id.',
  operationId: 'resetPasswordUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'healthFacilityPasswordRequest',
      content: { 'application/json': { schema: HealthFacilityPasswordRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.string() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitAadhaarGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/aadhaar/generateOtp',
  tags: ['Integrated Programs'],
  summary: 'Generate Aadhaar OTP on registrered mobile number',
  description: 'Generate Aadhaar OTP on registrered mobile number',
  operationId: 'generateAadharOTPUsingPOST_2',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: AadharOtpGenerateRequestPayLoadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitAadhaarVerifyAadharOtpRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/aadhaar/verifyAadharOtp',
  tags: ['Integrated Programs'],
  summary: 'Create health id using Aadhaar Number Otp.',
  description: 'Create health id using Aadhaar number opt',
  operationId: 'verifyAadharOtpUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createHealthIdOptRequest',
      content: { 'application/json': { schema: CreateHealthIdOptRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: HidBenefitRequestPayloadSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitAadhaarVerifyBioRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/aadhaar/verifyBio',
  tags: ['Integrated Programs'],
  summary: 'Create health id using Biometric Authentication.',
  description: 'Create health id using Biometric Authentication.',
  operationId: 'verifyBioUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createHidBiometricRequest',
      content: { 'application/json': { schema: CreateHidBiometricRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: HidBenefitRequestPayloadSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitCreateHealthIdDemoAuthRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/createHealthId/demo/auth',
  tags: ['Integrated Programs'],
  summary: 'Create health id using Aadhaar Demo Auth.',
  description: 'Create health id using Aadhaar Demo Auth.',
  operationId: 'createHealthIdByDemoAuthUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createHIdDemoAuthRequest',
      content: { 'application/json': { schema: CreateHIdDemoAuthRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: HidBenefitRequestPayloadSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitDelinkRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/delink',
  tags: ['Integrated Programs'],
  summary: 'De-Linked with hid.',
  description: 'De-Linked with hid.',
  operationId: 'delinkHidBenefitUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'hidBenefitLinkedRequestPayload',
      content: { 'application/json': { schema: HidBenefitDelinkRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: HidBenefitLinkedResponsePayloadSchema } },
    },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitLinkRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/link',
  tags: ['Integrated Programs'],
  summary: 'Linked with hid.',
  description: 'Linked with hid.',
  operationId: 'linkHidBenefitUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'hidBenefitLinkedRequestPayload',
      content: { 'application/json': { schema: HidBenefitLinkedRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: HidBenefitLinkedResponsePayloadSchema } },
    },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitMobileCreateHealthIdRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/mobile/createHealthId',
  tags: ['Integrated Programs'],
  summary: 'Create health id using mobile Authentication.',
  description: 'Create health id using mobile Authentication.',
  operationId: 'createHealthIdByMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createHidMobileRequest',
      content: { 'application/json': { schema: CreateHidMobileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitMobileGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/mobile/generateOtp',
  tags: ['Integrated Programs'],
  summary: 'Generate mobile OTP on registrered mobile number',
  description: 'Generate mobile OTP on registrered mobile number',
  operationId: 'generateMobileOtpUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: GenerateMobileOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitNotifyBenefitRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/notify/benefit',
  tags: ['Integrated Programs'],
  summary: 'Create health id using notify Benefit.',
  description: 'Create health id using notify Benefit.',
  operationId: 'notifyBenefitUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createHidNotifyBenefitRequest',
      content: { 'application/json': { schema: CreateHidNotifyBenefitRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: HidBenefitRequestPayloadSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitSearchAadhaarRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/search/aadhaar',
  tags: ['Integrated Programs'],
  summary: 'Search health id number using aadhar or aadhar token.',
  description: 'Search health id number using aadhar or aadhar token.',
  operationId: 'findByAadharUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'aadharNumberRequestPayload',
      content: { 'application/json': { schema: AadharNumberRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(z.object({})) } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitSearchHealthIdNumberRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/search/healthIdNumber',
  tags: ['Integrated Programs'],
  summary: 'Search benefit using health id number.',
  description: 'Search benefit using health id number',
  operationId: 'findByHealthIdUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'searchRequest',
      content: { 'application/json': { schema: HidBenefitNameSearchRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { '*/*': { schema: z.array(HidBenefitSearchResponsePayloadSchema) } },
    },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitUpdateMobileRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/update/mobile',
  tags: ['Integrated Programs'],
  summary: 'Update mobile number for account.',
  operationId: 'updateMobileInformationUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: HidUpdateMobiletRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitUpdateProfileRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/update/profile',
  tags: ['Integrated Programs'],
  summary: 'Update account information',
  operationId: 'updateAccountInformationUsingPOST_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: HidUpdateAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: UserDTOSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1HidBenefitUpdateStatusRoute = createRoute({
  method: 'post',
  path: '/v1/hid/benefit/update/status',
  tags: ['Integrated Programs'],
  summary: 'Update health id status .',
  description: 'Update health id status.',
  operationId: 'updateStatusUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: HidStatusRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarCreateHealthIdWithAadhaarOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/createHealthIdWithAadhaarOtp',
  tags: ['Registration with Aadhaar'],
  summary: 'Verify Aadhaar OTP on registrered mobile number to create Health ID.',
  description: 'Verify Aadhar OTP received on registrered mobile number',
  operationId: 'verifyAadharOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'verifyAadharOtpRequest',
      content: { 'application/json': { schema: CreateAccountWithAadhaarOtpSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CreateAccountJwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarCreateHealthIdWithPreVerifiedRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/createHealthIdWithPreVerified',
  tags: ['Registration with Aadhaar'],
  summary: 'Create Health ID using pre-verified Aadhaar & Mobile.',
  description: 'Create Health ID using pre-verified Aadhaar & Mobile.',
  operationId: 'createAadhaarAccountUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'accountRequest',
      content: { 'application/json': { schema: CreateAccountWithPreVerifiedAadhaarSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CreateAccountJwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarGenerateMobileOTPRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/generateMobileOTP',
  tags: ['Registration with Aadhaar'],
  summary: 'Generate Mobile OTP for verification.',
  description: 'Generate Mobile OTP to verify mobile number.',
  operationId: 'generateMobileOTPForTxnUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: GenerateMobileOTPForTxnRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/generateOtp',
  tags: ['Registration with Aadhaar'],
  summary: 'Generate Aadhaar OTP on registrered mobile number',
  description: 'Generate Aadhaar OTP on registrered mobile number',
  operationId: 'generateAadharOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: AadharOtpGenerateRequestPayLoadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarResendAadhaarOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/resendAadhaarOtp',
  tags: ['Registration with Aadhaar'],
  summary: 'Resend Aadhaar OTP on registrered mobile number to create Health ID.',
  description: 'Resend Aadhar OTP on registrered mobile number',
  operationId: 'resendAadharOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: ResendOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CreateAccountJwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarSearchAadharRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/search/aadhar',
  tags: ['Registration with Aadhaar'],
  summary: 'Search health id number using aadhar.',
  description: 'Search health id number using aadhar.',
  operationId: 'getHealthIdNumbersByAadharUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'aadharNumberRequestPayload',
      content: { 'application/json': { schema: AadharNumberRequestPayloadSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.array(z.object({})) } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarVerifyBioRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/verifyBio',
  tags: ['Registration with Aadhaar'],
  summary: 'Verify Aadhaar using biometrics.',
  description: 'Verify Aadhaar using biometrics',
  operationId: 'verifyAadharBioUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'verifyAadharOtpRequest',
      content: { 'application/json': { schema: VerifyAadhaarWithBioSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarVerifyMobileOTPRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/verifyMobileOTP',
  tags: ['Registration with Aadhaar'],
  summary: 'Verify Mobile OTP in an existing transaction.',
  description: 'Verify Mobile OTP in an existing transaction.',
  operationId: 'verifyMobileOTPForTxnUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'request',
      content: { 'application/json': { schema: VerifyMobileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationAadhaarVerifyOTPRoute = createRoute({
  method: 'post',
  path: '/v1/registration/aadhaar/verifyOTP',
  tags: ['Registration with Aadhaar'],
  summary: 'Verify Aadhaar OTP and continue for mobile verification.',
  description: 'Verify Aadhaar OTP received on registrered mobile number',
  operationId: 'verifyAadharOTPOnlyUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'verifyAadhaarOtp',
      content: { 'application/json': { schema: VerifyAadhaarOtpSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationMobileCreateHealthIdRoute = createRoute({
  method: 'post',
  path: '/v1/registration/mobile/createHealthId',
  tags: ['Registration with mobile number'],
  summary: 'Create Health ID with verified mobile token',
  operationId: 'verifyUserViaMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'createAccountRequest',
      content: { 'application/json': { schema: CreateAccountByVerifiedMobileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: CreateAccountJwtResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationMobileGenerateOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/mobile/generateOtp',
  tags: ['Registration with mobile number'],
  summary: 'Generate Mobile OTP to start registration',
  description: 'Generate Mobile OTP to start registration transaction.',
  operationId: 'generateMobileOTPUsingPOST_1',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'generateOtpRequest',
      content: { 'application/json': { schema: GenerateMobileOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: TxnResponseSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationMobileResendOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/mobile/resendOtp',
  tags: ['Registration with mobile number'],
  summary: 'Resend Mobile OTP for Health ID registration',
  description: 'Resend Mobile OTP in an existing transaction in case previous OTP is not received.',
  operationId: 'resentOtpUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'resendRequest',
      content: { 'application/json': { schema: ResendOTPRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.boolean() } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1RegistrationMobileVerifyOtpRoute = createRoute({
  method: 'post',
  path: '/v1/registration/mobile/verifyOtp',
  tags: ['Registration with mobile number'],
  summary: 'Verify Mobile OTP sent as part of registration transaction.',
  description: 'Verify Mobile OTP in current registration transaction.',
  operationId: 'verifyMobileOTPUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'verifyOtpRequest',
      content: { 'application/json': { schema: VerifyMobileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: MobileVerificationTokenSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1SearchExistsByHealthIdRoute = createRoute({
  method: 'post',
  path: '/v1/search/existsByHealthId',
  tags: ['Search'],
  summary: 'Search a user by Health IDs.',
  operationId: 'searchUserByUseridUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'searchDTO',
      content: { 'application/json': { schema: SearchByHealthIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: z.object({}) } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1SearchSearchByHealthIdRoute = createRoute({
  method: 'post',
  path: '/v1/search/searchByHealthId',
  tags: ['Search'],
  summary: 'Search a user by Health ID Number.',
  operationId: 'searchUserByAccountUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'searchRequest',
      content: { 'application/json': { schema: SearchByHealthIdRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: SearchResponseSingleSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})

export const postV1SearchSearchByMobileRoute = createRoute({
  method: 'post',
  path: '/v1/search/searchByMobile',
  tags: ['Search'],
  summary: 'Search users with a mobile number.',
  operationId: 'searchUserByMobileUsingPOST',
  request: {
    headers: z.object({
      'Accept-Language': z
        .string()
        .default('en-US')
        .exactOptional()
        .openapi({
          param: {
            in: 'header',
            name: 'Accept-Language',
            schema: { default: 'en-US', type: 'string' },
            required: false,
          },
        }),
    }),
    body: {
      description: 'searchRequest',
      content: { 'application/json': { schema: SearchByMobileRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { '*/*': { schema: SearchResponseSingleSchema } } },
    201: { description: 'Created', content: {} },
    401: { description: 'Unauthorized', content: {} },
    403: { description: 'Forbidden', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  security: [{ Authorization: [] }, { 'X-HIP-ID': [] }],
})
