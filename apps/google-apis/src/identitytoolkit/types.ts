type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo = {
  androidVerificationProof?: string | undefined
  code?: string | undefined
  phoneNumber?: string | undefined
  sessionInfo?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo = {
  sessionInfo?: string | undefined
  verificationCode?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest = {
  displayName?: string | undefined
  idToken?: string | undefined
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo | undefined
  tenantId?: string | undefined
  totpVerificationInfo?:
    | GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentRequestInfo
    | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo = {
  androidVerificationProof?: string | undefined
  androidVerificationProofExpireTime?: string | undefined
  phoneNumber?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo = { [x: string]: unknown }
type GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse = {
  idToken?: string | undefined
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo | undefined
  refreshToken?: string | undefined
  totpAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaTotpEnrollmentResponseInfo | undefined
}
type GoogleCloudIdentitytoolkitV2AutoRetrievalInfo = { appSignatureHash?: string | undefined }
type GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo = {
  autoRetrievalInfo?: GoogleCloudIdentitytoolkitV2AutoRetrievalInfo | undefined
  iosReceipt?: string | undefined
  iosSecret?: string | undefined
  phoneNumber?: string | undefined
  playIntegrityToken?: string | undefined
  recaptchaToken?: string | undefined
  safetyNetToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo = { [x: string]: unknown }
type GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest = {
  idToken?: string | undefined
  phoneEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo | undefined
  tenantId?: string | undefined
  totpEnrollmentInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentRequestInfo | undefined
}
type GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo = { sessionInfo?: string | undefined }
type GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo = {
  finalizeEnrollmentTime?: string | undefined
  hashingAlgorithm?: string | undefined
  periodSec?: number | undefined
  sessionInfo?: string | undefined
  sharedSecretKey?: string | undefined
  verificationCodeLength?: number | undefined
}
type GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse = {
  phoneSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo | undefined
  totpSessionInfo?: GoogleCloudIdentitytoolkitV2StartMfaTotpEnrollmentResponseInfo | undefined
}
type GoogleCloudIdentitytoolkitV2WithdrawMfaRequest = {
  idToken?: string | undefined
  mfaEnrollmentId?: string | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2WithdrawMfaResponse = {
  idToken?: string | undefined
  refreshToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo = {
  verificationCode?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest = {
  mfaEnrollmentId?: string | undefined
  mfaPendingCredential?: string | undefined
  phoneVerificationInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo | undefined
  tenantId?: string | undefined
  totpVerificationInfo?: GoogleCloudIdentitytoolkitV2MfaTotpSignInRequestInfo | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse = {
  idToken?: string | undefined
  phoneAuthInfo?: GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo | undefined
  refreshToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartMfaSignInRequest = {
  mfaEnrollmentId?: string | undefined
  mfaPendingCredential?: string | undefined
  phoneSignInInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartMfaSignInResponse = {
  phoneResponseInfo?: GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo | undefined
}
type GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse = {
  attestationObject?: string | undefined
  clientDataJson?: string | undefined
  transports?: string[] | undefined
}
type GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse = {
  authenticatorAttestationResponse?:
    | GoogleCloudIdentitytoolkitV2AuthenticatorAttestationResponse
    | undefined
  credentialId?: string | undefined
  credentialType?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest = {
  authenticatorRegistrationResponse?:
    | GoogleCloudIdentitytoolkitV2AuthenticatorRegistrationResponse
    | undefined
  idToken?: string | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse = {
  idToken?: string | undefined
  refreshToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest = {
  idToken?: string | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria = {
  authenticatorAttachment?: string | undefined
  requireResidentKey?: boolean | undefined
  userVerification?: string | undefined
}
type GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor = {
  credentialId?: string | undefined
  credentialType?: string | undefined
  transports?: string[] | undefined
}
type GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters = {
  alg?: string | undefined
  credentialType?: string | undefined
}
type GoogleCloudIdentitytoolkitV2RpEntity = { id?: string | undefined }
type GoogleCloudIdentitytoolkitV2UserEntity = { id?: string | undefined }
type GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions = {
  authenticatorSelection?: GoogleCloudIdentitytoolkitV2AuthenticatorSelectionCriteria | undefined
  challenge?: string | undefined
  excludeCredentials?: GoogleCloudIdentitytoolkitV2PublicKeyCredentialDescriptor[] | undefined
  pubKeyCredParams?: GoogleCloudIdentitytoolkitV2PublicKeyCredentialParameters[] | undefined
  rp?: GoogleCloudIdentitytoolkitV2RpEntity | undefined
  user?: GoogleCloudIdentitytoolkitV2UserEntity | undefined
}
type GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse = {
  credentialCreationOptions?:
    | GoogleCloudIdentitytoolkitV2PublicKeyCredentialCreationOptions
    | undefined
}
type GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse = {
  authenticatorData?: string | undefined
  clientDataJson?: string | undefined
  signature?: string | undefined
  userHandle?: string | undefined
}
type GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse = {
  authenticatorAssertionResponse?:
    | GoogleCloudIdentitytoolkitV2AuthenticatorAssertionResponse
    | undefined
  credentialId?: string | undefined
  credentialType?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest = {
  authenticatorAuthenticationResponse?:
    | GoogleCloudIdentitytoolkitV2AuthenticatorAuthenticationResponse
    | undefined
  sessionId?: string | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse = {
  idToken?: string | undefined
  refreshToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest = {
  sessionId?: string | undefined
  tenantId?: string | undefined
}
type GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions = {
  challenge?: string | undefined
  rpId?: string | undefined
  userVerification?: string | undefined
}
type GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse = {
  credentialRequestOptions?:
    | GoogleCloudIdentitytoolkitV2PublicKeyCredentialRequestOptions
    | undefined
}
type GoogleCloudIdentitytoolkitV2RevokeTokenRequest = {
  idToken?: string | undefined
  providerId?: string | undefined
  redirectUri?: string | undefined
  tenantId?: string | undefined
  token?: string | undefined
  tokenType?: 'TOKEN_TYPE_UNSPECIFIED' | 'REFRESH_TOKEN' | 'ACCESS_TOKEN' | 'CODE' | undefined
}
type GoogleCloudIdentitytoolkitV2RevokeTokenResponse = { [x: string]: unknown }
type GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp = {
  description?: string | undefined
  idpId?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse = {
  defaultSupportedIdps?: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdp[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState = {
  enforcementState?: 'ENFORCEMENT_STATE_UNSPECIFIED' | 'OFF' | 'AUDIT' | 'ENFORCE' | undefined
  provider?: 'RECAPTCHA_PROVIDER_UNSPECIFIED' | 'EMAIL_PASSWORD_PROVIDER' | undefined
}
type GoogleCloudIdentitytoolkitV2RecaptchaConfig = {
  recaptchaEnforcementState?: GoogleCloudIdentitytoolkitV2RecaptchaEnforcementState[] | undefined
  recaptchaKey?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudIdentitytoolkitAdminV2OAuthResponseType = {
  code?: boolean | undefined
  idToken?: boolean | undefined
  token?: boolean | undefined
}
type GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig = {
  clientId?: string | undefined
  clientSecret?: string | undefined
  displayName?: string | undefined
  enabled?: boolean | undefined
  issuer?: string | undefined
  name?: string | undefined
  responseType?: GoogleCloudIdentitytoolkitAdminV2OAuthResponseType | undefined
}
type GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig = {
  keyId?: string | undefined
  privateKey?: string | undefined
  teamId?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig = {
  bundleIds?: string[] | undefined
  codeFlowConfig?: GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig | undefined
}
type GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig = {
  appleSignInConfig?: GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig | undefined
  clientId?: string | undefined
  clientSecret?: string | undefined
  enabled?: boolean | undefined
  name?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse = {
  defaultSupportedIdpConfigs?:
    | GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig[]
    | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2IdpCertificate = { x509Certificate?: string | undefined }
type GoogleCloudIdentitytoolkitAdminV2IdpConfig = {
  idpCertificates?: GoogleCloudIdentitytoolkitAdminV2IdpCertificate[] | undefined
  idpEntityId?: string | undefined
  signRequest?: boolean | undefined
  ssoUrl?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2SpCertificate = {
  expiresAt?: string | undefined
  x509Certificate?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2SpConfig = {
  callbackUri?: string | undefined
  spCertificates?: GoogleCloudIdentitytoolkitAdminV2SpCertificate[] | undefined
  spEntityId?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig = {
  displayName?: string | undefined
  enabled?: boolean | undefined
  idpConfig?: GoogleCloudIdentitytoolkitAdminV2IdpConfig | undefined
  name?: string | undefined
  spConfig?: GoogleCloudIdentitytoolkitAdminV2SpConfig | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse = {
  inboundSamlConfigs?: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse = {
  nextPageToken?: string | undefined
  oauthIdpConfigs?: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig[] | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ClientPermissions = {
  disabledUserDeletion?: boolean | undefined
  disabledUserSignup?: boolean | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig = {
  permissions?: GoogleCloudIdentitytoolkitAdminV2ClientPermissions | undefined
}
type GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig = {
  enableImprovedEmailPrivacy?: boolean | undefined
}
type GoogleCloudIdentitytoolkitAdminV2HashConfig = {
  algorithm?:
    | 'HASH_ALGORITHM_UNSPECIFIED'
    | 'HMAC_SHA256'
    | 'HMAC_SHA1'
    | 'HMAC_MD5'
    | 'SCRYPT'
    | 'PBKDF_SHA1'
    | 'MD5'
    | 'HMAC_SHA512'
    | 'SHA1'
    | 'BCRYPT'
    | 'PBKDF2_SHA256'
    | 'SHA256'
    | 'SHA512'
    | 'STANDARD_SCRYPT'
    | undefined
  memoryCost?: number | undefined
  rounds?: number | undefined
  saltSeparator?: string | undefined
  signerKey?: string | undefined
}
type GoogleCloudIdentitytoolkitAdminV2Inheritance = { emailSendingConfig?: boolean | undefined }
type GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig = {
  adjacentIntervals?: number | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ProviderConfig = {
  state?: 'MFA_STATE_UNSPECIFIED' | 'DISABLED' | 'ENABLED' | 'MANDATORY' | undefined
  totpProviderConfig?: GoogleCloudIdentitytoolkitAdminV2TotpMfaProviderConfig | undefined
}
type GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig = {
  enabledProviders?: ('PROVIDER_UNSPECIFIED' | 'PHONE_SMS')[] | undefined
  providerConfigs?: GoogleCloudIdentitytoolkitAdminV2ProviderConfig[] | undefined
  state?: 'STATE_UNSPECIFIED' | 'DISABLED' | 'ENABLED' | 'MANDATORY' | undefined
}
type GoogleCloudIdentitytoolkitAdminV2RequestLogging = { enabled?: boolean | undefined }
type GoogleCloudIdentitytoolkitAdminV2MonitoringConfig = {
  requestLogging?: GoogleCloudIdentitytoolkitAdminV2RequestLogging | undefined
}
type GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule = {
  action?: 'RECAPTCHA_ACTION_UNSPECIFIED' | 'BLOCK' | undefined
  endScore?: number | undefined
}
type GoogleCloudIdentitytoolkitAdminV2RecaptchaKey = {
  key?: string | undefined
  type?: 'CLIENT_TYPE_UNSPECIFIED' | 'WEB' | 'IOS' | 'ANDROID' | undefined
}
type GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig = {
  emailPasswordEnforcementState?:
    | 'RECAPTCHA_PROVIDER_ENFORCEMENT_STATE_UNSPECIFIED'
    | 'OFF'
    | 'AUDIT'
    | 'ENFORCE'
    | undefined
  managedRules?: GoogleCloudIdentitytoolkitAdminV2RecaptchaManagedRule[] | undefined
  recaptchaKeys?: GoogleCloudIdentitytoolkitAdminV2RecaptchaKey[] | undefined
  useAccountDefender?: boolean | undefined
}
type GoogleCloudIdentitytoolkitAdminV2AllowByDefault = { disallowedRegions?: string[] | undefined }
type GoogleCloudIdentitytoolkitAdminV2AllowlistOnly = { allowedRegions?: string[] | undefined }
type GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig = {
  allowByDefault?: GoogleCloudIdentitytoolkitAdminV2AllowByDefault | undefined
  allowlistOnly?: GoogleCloudIdentitytoolkitAdminV2AllowlistOnly | undefined
}
type GoogleCloudIdentitytoolkitAdminV2Tenant = {
  allowPasswordSignup?: boolean | undefined
  autodeleteAnonymousUsers?: boolean | undefined
  client?: GoogleCloudIdentitytoolkitAdminV2ClientPermissionConfig | undefined
  disableAuth?: boolean | undefined
  displayName?: string | undefined
  emailPrivacyConfig?: GoogleCloudIdentitytoolkitAdminV2EmailPrivacyConfig | undefined
  enableAnonymousUser?: boolean | undefined
  enableEmailLinkSignin?: boolean | undefined
  hashConfig?: GoogleCloudIdentitytoolkitAdminV2HashConfig | undefined
  inheritance?: GoogleCloudIdentitytoolkitAdminV2Inheritance | undefined
  mfaConfig?: GoogleCloudIdentitytoolkitAdminV2MultiFactorAuthConfig | undefined
  monitoring?: GoogleCloudIdentitytoolkitAdminV2MonitoringConfig | undefined
  name?: string | undefined
  recaptchaConfig?: GoogleCloudIdentitytoolkitAdminV2RecaptchaConfig | undefined
  smsRegionConfig?: GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig | undefined
  testPhoneNumbers?: { [x: string]: string } | undefined
}
type GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse = {
  nextPageToken?: string | undefined
  tenants?: GoogleCloudIdentitytoolkitAdminV2Tenant[] | undefined
}
type GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest = { [x: string]: unknown }
type GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse = { [x: string]: unknown }
type GoogleIamV1GetPolicyOptions = { requestedPolicyVersion?: number | undefined }
type GoogleIamV1GetIamPolicyRequest = { options?: GoogleIamV1GetPolicyOptions | undefined }
type GoogleIamV1AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type GoogleIamV1AuditConfig = {
  auditLogConfigs?: GoogleIamV1AuditLogConfig[] | undefined
  service?: string | undefined
}
type GoogleTypeExpr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type GoogleIamV1Binding = {
  condition?: GoogleTypeExpr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type GoogleIamV1Policy = {
  auditConfigs?: GoogleIamV1AuditConfig[] | undefined
  bindings?: GoogleIamV1Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type GoogleIamV1SetIamPolicyRequest = {
  policy?: GoogleIamV1Policy | undefined
  updateMask?: string | undefined
}
type GoogleIamV1TestIamPermissionsRequest = { permissions?: string[] | undefined }
type GoogleIamV1TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v2/accounts/mfaEnrollment:finalize': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest }
        output: GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/mfaEnrollment:start': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest }
        output: GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/mfaEnrollment:withdraw': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2WithdrawMfaRequest }
        output: GoogleCloudIdentitytoolkitV2WithdrawMfaResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/mfaSignIn:finalize': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest }
        output: GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/mfaSignIn:start': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2StartMfaSignInRequest }
        output: GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/passkeyEnrollment:finalize': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentRequest }
        output: GoogleCloudIdentitytoolkitV2FinalizePasskeyEnrollmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/passkeyEnrollment:start': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentRequest }
        output: GoogleCloudIdentitytoolkitV2StartPasskeyEnrollmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/passkeySignIn:finalize': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2FinalizePasskeySignInRequest }
        output: GoogleCloudIdentitytoolkitV2FinalizePasskeySignInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts/passkeySignIn:start': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2StartPasskeySignInRequest }
        output: GoogleCloudIdentitytoolkitV2StartPasskeySignInResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/accounts:revokeToken': {
      $post: {
        input: {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitV2RevokeTokenRequest }
        output: GoogleCloudIdentitytoolkitV2RevokeTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/defaultSupportedIdps': {
      $get: {
        input: {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/recaptchaConfig': {
      $get: {
        input: {
          query: {
            clientType?:
              | 'CLIENT_TYPE_UNSPECIFIED'
              | 'CLIENT_TYPE_WEB'
              | 'CLIENT_TYPE_ANDROID'
              | 'CLIENT_TYPE_IOS'
              | undefined
            tenantId?: string | undefined
            version?: 'RECAPTCHA_VERSION_UNSPECIFIED' | 'RECAPTCHA_ENTERPRISE' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitV2RecaptchaConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig }
        output: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/defaultSupportedIdpConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2ListDefaultSupportedIdpConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            idpId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig }
        output: GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/inboundSamlConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2ListInboundSamlConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            inboundSamlConfigId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig }
        output: GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/oauthIdpConfigs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2ListOAuthIdpConfigsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            oauthIdpConfigId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig }
        output: GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:parent/tenants': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudIdentitytoolkitAdminV2ListTenantsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2Tenant }
        output: GoogleCloudIdentitytoolkitAdminV2Tenant
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:project/identityPlatform:initializeAuth': {
      $post: {
        input: { param: { project: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformRequest }
        output: GoogleCloudIdentitytoolkitAdminV2InitializeIdentityPlatformResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:getIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleIamV1GetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:setIamPolicy': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleIamV1SetIamPolicyRequest }
        output: GoogleIamV1Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v2/:resource:testIamPermissions': {
      $post: {
        input: { param: { resource: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleIamV1TestIamPermissionsRequest }
        output: GoogleIamV1TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
