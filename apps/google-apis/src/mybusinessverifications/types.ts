type PostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type Location = {
  address?: PostalAddress | undefined
  name?: string | undefined
  primaryCategoryId?: string | undefined
  primaryPhone?: string | undefined
  websiteUri?: string | undefined
}
type GenerateVerificationTokenRequest = { location?: Location | undefined }
type VerificationToken = { tokenString?: string | undefined }
type GenerateVerificationTokenResponse = { token?: VerificationToken | undefined }
type ServiceBusinessContext = { address?: PostalAddress | undefined }
type FetchVerificationOptionsRequest = {
  context?: ServiceBusinessContext | undefined
  languageCode?: string | undefined
}
type AddressVerificationData = {
  address?: PostalAddress | undefined
  business?: string | undefined
  expectedDeliveryDaysRegion?: number | undefined
}
type EmailVerificationData = {
  domain?: string | undefined
  isUserNameEditable?: boolean | undefined
  user?: string | undefined
}
type VerificationOption = {
  addressData?: AddressVerificationData | undefined
  announcement?: string | undefined
  emailData?: EmailVerificationData | undefined
  phoneNumber?: string | undefined
  verificationMethod?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | 'VETTED_PARTNER'
    | undefined
}
type FetchVerificationOptionsResponse = { options?: VerificationOption[] | undefined }
type ComplyWithGuidelines = {
  recommendationReason?:
    | 'RECOMMENDATION_REASON_UNSPECIFIED'
    | 'BUSINESS_LOCATION_SUSPENDED'
    | 'BUSINESS_LOCATION_DISABLED'
    | undefined
}
type ResolveOwnershipConflict = { [x: string]: unknown }
type Verify = { hasPendingVerification?: boolean | undefined }
type WaitForVoiceOfMerchant = { [x: string]: unknown }
type VoiceOfMerchantState = {
  complyWithGuidelines?: ComplyWithGuidelines | undefined
  hasBusinessAuthority?: boolean | undefined
  hasVoiceOfMerchant?: boolean | undefined
  resolveOwnershipConflict?: ResolveOwnershipConflict | undefined
  verify?: Verify | undefined
  waitForVoiceOfMerchant?: WaitForVoiceOfMerchant | undefined
}
type CompleteVerificationRequest = { pin?: string | undefined }
type Verification = {
  announcement?: string | undefined
  createTime?: string | undefined
  method?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | 'VETTED_PARTNER'
    | undefined
  name?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'PENDING' | 'COMPLETED' | 'FAILED' | undefined
}
type CompleteVerificationResponse = { verification?: Verification | undefined }
type VerifyLocationRequest = {
  context?: ServiceBusinessContext | undefined
  emailAddress?: string | undefined
  languageCode?: string | undefined
  mailerContact?: string | undefined
  method?:
    | 'VERIFICATION_METHOD_UNSPECIFIED'
    | 'ADDRESS'
    | 'EMAIL'
    | 'PHONE_CALL'
    | 'SMS'
    | 'AUTO'
    | 'VETTED_PARTNER'
    | undefined
  phoneNumber?: string | undefined
  token?: VerificationToken | undefined
}
type VerifyLocationResponse = { verification?: Verification | undefined }
type ListVerificationsResponse = {
  nextPageToken?: string | undefined
  verifications?: Verification[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/verificationTokens:generate': {
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
        } & { json: GenerateVerificationTokenRequest }
        output: GenerateVerificationTokenResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location:fetchVerificationOptions': {
      $post: {
        input: { param: { location: string } } & {
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
        } & { json: FetchVerificationOptionsRequest }
        output: FetchVerificationOptionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/VoiceOfMerchantState': {
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
        output: VoiceOfMerchantState
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:complete': {
      $post: {
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
        } & { json: CompleteVerificationRequest }
        output: CompleteVerificationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:verify': {
      $post: {
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
        } & { json: VerifyLocationRequest }
        output: VerifyLocationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/verifications': {
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
        output: ListVerificationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
