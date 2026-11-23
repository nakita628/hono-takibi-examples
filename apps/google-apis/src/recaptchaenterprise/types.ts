type GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse = {
  legacySecretKey?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudRecaptchaenterpriseV1ChallengeMetrics = {
  failedCount?: string | undefined
  nocaptchaCount?: string | undefined
  pageloadCount?: string | undefined
  passedCount?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1ScoreDistribution = {
  scoreBuckets?: { [x: string]: string } | undefined
}
type GoogleCloudRecaptchaenterpriseV1ScoreMetrics = {
  actionMetrics?: { [x: string]: GoogleCloudRecaptchaenterpriseV1ScoreDistribution } | undefined
  overallMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreDistribution | undefined
}
type GoogleCloudRecaptchaenterpriseV1Metrics = {
  challengeMetrics?: GoogleCloudRecaptchaenterpriseV1ChallengeMetrics[] | undefined
  name?: string | undefined
  scoreMetrics?: GoogleCloudRecaptchaenterpriseV1ScoreMetrics[] | undefined
  startTime?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1AndroidKeySettings = {
  allowAllPackageNames?: boolean | undefined
  allowedPackageNames?: string[] | undefined
  supportNonGoogleAppStoreDistribution?: boolean | undefined
}
type GoogleCloudRecaptchaenterpriseV1IOSKeySettings = {
  allowAllBundleIds?: boolean | undefined
  allowedBundleIds?: string[] | undefined
}
type GoogleCloudRecaptchaenterpriseV1TestingOptions = {
  testingChallenge?:
    | 'TESTING_CHALLENGE_UNSPECIFIED'
    | 'NOCAPTCHA'
    | 'UNSOLVABLE_CHALLENGE'
    | undefined
  testingScore?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1WafSettings = {
  wafFeature?:
    | 'WAF_FEATURE_UNSPECIFIED'
    | 'CHALLENGE_PAGE'
    | 'SESSION_TOKEN'
    | 'ACTION_TOKEN'
    | 'EXPRESS'
    | undefined
  wafService?: 'WAF_SERVICE_UNSPECIFIED' | 'CA' | 'FASTLY' | undefined
}
type GoogleCloudRecaptchaenterpriseV1WebKeySettings = {
  allowAllDomains?: boolean | undefined
  allowAmpTraffic?: boolean | undefined
  allowedDomains?: string[] | undefined
  challengeSecurityPreference?:
    | 'CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED'
    | 'USABILITY'
    | 'BALANCE'
    | 'SECURITY'
    | undefined
  integrationType?: 'INTEGRATION_TYPE_UNSPECIFIED' | 'SCORE' | 'CHECKBOX' | 'INVISIBLE' | undefined
}
type GoogleCloudRecaptchaenterpriseV1Key = {
  androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  iosSettings?: GoogleCloudRecaptchaenterpriseV1IOSKeySettings | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions | undefined
  wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings | undefined
  webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionEvent = {
  eventTime?: string | undefined
  eventType?:
    | 'TRANSACTION_EVENT_TYPE_UNSPECIFIED'
    | 'MERCHANT_APPROVE'
    | 'MERCHANT_DENY'
    | 'MANUAL_REVIEW'
    | 'AUTHORIZATION'
    | 'AUTHORIZATION_DECLINE'
    | 'PAYMENT_CAPTURE'
    | 'PAYMENT_CAPTURE_DECLINE'
    | 'CANCEL'
    | 'CHARGEBACK_INQUIRY'
    | 'CHARGEBACK_ALERT'
    | 'FRAUD_NOTIFICATION'
    | 'CHARGEBACK'
    | 'CHARGEBACK_REPRESENTMENT'
    | 'CHARGEBACK_REVERSE'
    | 'REFUND_REQUEST'
    | 'REFUND_DECLINE'
    | 'REFUND'
    | 'REFUND_REVERSE'
    | undefined
  reason?: string | undefined
  value?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest = {
  annotation?:
    | 'ANNOTATION_UNSPECIFIED'
    | 'LEGITIMATE'
    | 'FRAUDULENT'
    | 'PASSWORD_CORRECT'
    | 'PASSWORD_INCORRECT'
    | undefined
  hashedAccountId?: string | undefined
  reasons?:
    | (
        | 'REASON_UNSPECIFIED'
        | 'CHARGEBACK'
        | 'CHARGEBACK_FRAUD'
        | 'CHARGEBACK_DISPUTE'
        | 'REFUND'
        | 'REFUND_FRAUD'
        | 'TRANSACTION_ACCEPTED'
        | 'TRANSACTION_DECLINED'
        | 'PAYMENT_HEURISTICS'
        | 'INITIATED_TWO_FACTOR'
        | 'PASSED_TWO_FACTOR'
        | 'FAILED_TWO_FACTOR'
        | 'CORRECT_PASSWORD'
        | 'INCORRECT_PASSWORD'
        | 'SOCIAL_SPAM'
      )[]
    | undefined
  transactionEvent?: GoogleCloudRecaptchaenterpriseV1TransactionEvent | undefined
}
type GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse = { [x: string]: unknown }
type GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest = { skipBillingCheck?: boolean | undefined }
type GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment = {
  labels?:
    | (
        | 'ACCOUNT_DEFENDER_LABEL_UNSPECIFIED'
        | 'PROFILE_MATCH'
        | 'SUSPICIOUS_LOGIN_ACTIVITY'
        | 'SUSPICIOUS_ACCOUNT_CREATION'
        | 'RELATED_ACCOUNTS_NUMBER_HIGH'
      )[]
    | undefined
}
type GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo = {
  emailAddress?: string | undefined
  lastVerificationTime?: string | undefined
  phoneNumber?: string | undefined
  requestToken?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo = {
  endpoints?: GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo[] | undefined
  languageCode?: string | undefined
  latestVerificationResult?:
    | 'RESULT_UNSPECIFIED'
    | 'SUCCESS_USER_VERIFIED'
    | 'ERROR_USER_NOT_VERIFIED'
    | 'ERROR_SITE_ONBOARDING_INCOMPLETE'
    | 'ERROR_RECIPIENT_NOT_ALLOWED'
    | 'ERROR_RECIPIENT_ABUSE_LIMIT_EXHAUSTED'
    | 'ERROR_CRITICAL_INTERNAL'
    | 'ERROR_CUSTOMER_QUOTA_EXHAUSTED'
    | 'ERROR_VERIFICATION_BYPASSED'
    | 'ERROR_VERDICT_MISMATCH'
    | undefined
  username?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionDataAddress = {
  address?: string[] | undefined
  administrativeArea?: string | undefined
  locality?: string | undefined
  postalCode?: string | undefined
  recipient?: string | undefined
  regionCode?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo = {
  avsResponseCode?: string | undefined
  cvvResponseCode?: string | undefined
  gatewayResponseCode?: string | undefined
  name?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionDataItem = {
  merchantAccountId?: string | undefined
  name?: string | undefined
  quantity?: string | undefined
  value?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionDataUser = {
  accountId?: string | undefined
  creationMs?: string | undefined
  email?: string | undefined
  emailVerified?: boolean | undefined
  phoneNumber?: string | undefined
  phoneVerified?: boolean | undefined
}
type GoogleCloudRecaptchaenterpriseV1TransactionData = {
  billingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress | undefined
  cardBin?: string | undefined
  cardLastFour?: string | undefined
  currencyCode?: string | undefined
  gatewayInfo?: GoogleCloudRecaptchaenterpriseV1TransactionDataGatewayInfo | undefined
  items?: GoogleCloudRecaptchaenterpriseV1TransactionDataItem[] | undefined
  merchants?: GoogleCloudRecaptchaenterpriseV1TransactionDataUser[] | undefined
  paymentMethod?: string | undefined
  shippingAddress?: GoogleCloudRecaptchaenterpriseV1TransactionDataAddress | undefined
  shippingValue?: number | undefined
  transactionId?: string | undefined
  user?: GoogleCloudRecaptchaenterpriseV1TransactionDataUser | undefined
  value?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1Event = {
  expectedAction?: string | undefined
  express?: boolean | undefined
  firewallPolicyEvaluation?: boolean | undefined
  hashedAccountId?: string | undefined
  headers?: string[] | undefined
  ja3?: string | undefined
  requestedUri?: string | undefined
  siteKey?: string | undefined
  token?: string | undefined
  transactionData?: GoogleCloudRecaptchaenterpriseV1TransactionData | undefined
  userAgent?: string | undefined
  userIpAddress?: string | undefined
  wafTokenAssessment?: boolean | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction = { [x: string]: unknown }
type GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction = { [x: string]: unknown }
type GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction = { [x: string]: unknown }
type GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction = {
  key?: string | undefined
  value?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction = { path?: string | undefined }
type GoogleCloudRecaptchaenterpriseV1FirewallAction = {
  allow?: GoogleCloudRecaptchaenterpriseV1FirewallActionAllowAction | undefined
  block?: GoogleCloudRecaptchaenterpriseV1FirewallActionBlockAction | undefined
  redirect?: GoogleCloudRecaptchaenterpriseV1FirewallActionRedirectAction | undefined
  setHeader?: GoogleCloudRecaptchaenterpriseV1FirewallActionSetHeaderAction | undefined
  substitute?: GoogleCloudRecaptchaenterpriseV1FirewallActionSubstituteAction | undefined
}
type GoogleCloudRecaptchaenterpriseV1FirewallPolicy = {
  actions?: GoogleCloudRecaptchaenterpriseV1FirewallAction[] | undefined
  condition?: string | undefined
  description?: string | undefined
  name?: string | undefined
  path?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment = {
  error?: GoogleRpcStatus | undefined
  firewallPolicy?: GoogleCloudRecaptchaenterpriseV1FirewallPolicy | undefined
}
type GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict = {
  trust?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict = {
  risk?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict = {
  risk?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment = {
  behavioralTrustVerdict?:
    | GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentBehavioralTrustVerdict
    | undefined
  cardTestingVerdict?:
    | GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentCardTestingVerdict
    | undefined
  stolenInstrumentVerdict?:
    | GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessmentStolenInstrumentVerdict
    | undefined
  transactionRisk?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification = {
  encryptedLeakMatchPrefixes?: string[] | undefined
  encryptedUserCredentialsHash?: string | undefined
  lookupHashPrefix?: string | undefined
  reencryptedUserCredentialsHash?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1RiskAnalysis = {
  extendedVerdictReasons?: string[] | undefined
  reasons?:
    | (
        | 'CLASSIFICATION_REASON_UNSPECIFIED'
        | 'AUTOMATION'
        | 'UNEXPECTED_ENVIRONMENT'
        | 'TOO_MUCH_TRAFFIC'
        | 'UNEXPECTED_USAGE_PATTERNS'
        | 'LOW_CONFIDENCE_SCORE'
        | 'SUSPECTED_CARDING'
        | 'SUSPECTED_CHARGEBACK'
      )[]
    | undefined
  score?: number | undefined
}
type GoogleCloudRecaptchaenterpriseV1TokenProperties = {
  action?: string | undefined
  androidPackageName?: string | undefined
  createTime?: string | undefined
  hostname?: string | undefined
  invalidReason?:
    | 'INVALID_REASON_UNSPECIFIED'
    | 'UNKNOWN_INVALID_REASON'
    | 'MALFORMED'
    | 'EXPIRED'
    | 'DUPE'
    | 'MISSING'
    | 'BROWSER_ERROR'
    | undefined
  iosBundleId?: string | undefined
  valid?: boolean | undefined
}
type GoogleCloudRecaptchaenterpriseV1Assessment = {
  accountDefenderAssessment?: GoogleCloudRecaptchaenterpriseV1AccountDefenderAssessment | undefined
  accountVerification?: GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo | undefined
  event?: GoogleCloudRecaptchaenterpriseV1Event | undefined
  firewallPolicyAssessment?: GoogleCloudRecaptchaenterpriseV1FirewallPolicyAssessment | undefined
  fraudPreventionAssessment?: GoogleCloudRecaptchaenterpriseV1FraudPreventionAssessment | undefined
  name?: string | undefined
  privatePasswordLeakVerification?:
    | GoogleCloudRecaptchaenterpriseV1PrivatePasswordLeakVerification
    | undefined
  riskAnalysis?: GoogleCloudRecaptchaenterpriseV1RiskAnalysis | undefined
  tokenProperties?: GoogleCloudRecaptchaenterpriseV1TokenProperties | undefined
}
type GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse = {
  firewallPolicies?: GoogleCloudRecaptchaenterpriseV1FirewallPolicy[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1ListKeysResponse = {
  keys?: GoogleCloudRecaptchaenterpriseV1Key[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership = {
  hashedAccountId?: string | undefined
  name?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse = {
  nextPageToken?: string | undefined
  relatedAccountGroupMemberships?:
    | GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[]
    | undefined
}
type GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup = { name?: string | undefined }
type GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse = {
  nextPageToken?: string | undefined
  relatedAccountGroups?: GoogleCloudRecaptchaenterpriseV1RelatedAccountGroup[] | undefined
}
type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest = {
  hashedAccountId?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse = {
  nextPageToken?: string | undefined
  relatedAccountGroupMemberships?:
    | GoogleCloudRecaptchaenterpriseV1RelatedAccountGroupMembership[]
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:key:retrieveLegacySecretKey': {
      $get: {
        input: { param: { key: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: GoogleCloudRecaptchaenterpriseV1Metrics
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
        } & { json: GoogleCloudRecaptchaenterpriseV1Key }
        output: GoogleCloudRecaptchaenterpriseV1Key
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:annotate': {
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
        } & { json: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentRequest }
        output: GoogleCloudRecaptchaenterpriseV1AnnotateAssessmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:migrate': {
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
        } & { json: GoogleCloudRecaptchaenterpriseV1MigrateKeyRequest }
        output: GoogleCloudRecaptchaenterpriseV1Key
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/assessments': {
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
        } & { json: GoogleCloudRecaptchaenterpriseV1Assessment }
        output: GoogleCloudRecaptchaenterpriseV1Assessment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/firewallpolicies': {
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
        output: GoogleCloudRecaptchaenterpriseV1ListFirewallPoliciesResponse
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
        } & { json: GoogleCloudRecaptchaenterpriseV1FirewallPolicy }
        output: GoogleCloudRecaptchaenterpriseV1FirewallPolicy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keys': {
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
        output: GoogleCloudRecaptchaenterpriseV1ListKeysResponse
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
        } & { json: GoogleCloudRecaptchaenterpriseV1Key }
        output: GoogleCloudRecaptchaenterpriseV1Key
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/memberships': {
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
        output: GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/relatedaccountgroups': {
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
        output: GoogleCloudRecaptchaenterpriseV1ListRelatedAccountGroupsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:project/relatedaccountgroupmemberships:search': {
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
        } & { json: GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsRequest }
        output: GoogleCloudRecaptchaenterpriseV1SearchRelatedAccountGroupMembershipsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
