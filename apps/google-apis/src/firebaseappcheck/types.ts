type GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest = {
  artifact?: string | undefined
  assertion?: string | undefined
  challenge?: string | undefined
}
type GoogleFirebaseAppcheckV1AppCheckToken = {
  token?: string | undefined
  ttl?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest = {
  attestationStatement?: string | undefined
  challenge?: string | undefined
  keyId?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse = {
  appCheckToken?: GoogleFirebaseAppcheckV1AppCheckToken | undefined
  artifact?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest = { customToken?: string | undefined }
type GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest = { debugToken?: string | undefined }
type GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest = { deviceToken?: string | undefined }
type GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest = {
  playIntegrityToken?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest = {
  recaptchaEnterpriseToken?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest = {
  recaptchaV3Token?: string | undefined
}
type GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest = { safetyNetToken?: string | undefined }
type GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest = { [x: string]: unknown }
type GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse = {
  challenge?: string | undefined
  ttl?: string | undefined
}
type GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest = { [x: string]: unknown }
type GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse = {
  challenge?: string | undefined
  ttl?: string | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleFirebaseAppcheckV1Service = {
  enforcementMode?: 'OFF' | 'UNENFORCED' | 'ENFORCED' | undefined
  name?: string | undefined
}
type GoogleFirebaseAppcheckV1AppAttestConfig = {
  name?: string | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1AppAttestConfig[] | undefined
}
type GoogleFirebaseAppcheckV1DeviceCheckConfig = {
  keyId?: string | undefined
  name?: string | undefined
  privateKey?: string | undefined
  privateKeySet?: boolean | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1DeviceCheckConfig[] | undefined
}
type GoogleFirebaseAppcheckV1PlayIntegrityConfig = {
  name?: string | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1PlayIntegrityConfig[] | undefined
}
type GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig = {
  name?: string | undefined
  siteKey?: string | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[] | undefined
}
type GoogleFirebaseAppcheckV1RecaptchaV3Config = {
  name?: string | undefined
  siteSecret?: string | undefined
  siteSecretSet?: boolean | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1RecaptchaV3Config[] | undefined
}
type GoogleFirebaseAppcheckV1SafetyNetConfig = {
  name?: string | undefined
  tokenTtl?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse = {
  configs?: GoogleFirebaseAppcheckV1SafetyNetConfig[] | undefined
}
type GoogleFirebaseAppcheckV1DebugToken = {
  displayName?: string | undefined
  name?: string | undefined
  token?: string | undefined
}
type GoogleFirebaseAppcheckV1ListDebugTokensResponse = {
  debugTokens?: GoogleFirebaseAppcheckV1DebugToken[] | undefined
  nextPageToken?: string | undefined
}
type GoogleFirebaseAppcheckV1ListServicesResponse = {
  nextPageToken?: string | undefined
  services?: GoogleFirebaseAppcheckV1Service[] | undefined
}
type GoogleFirebaseAppcheckV1UpdateServiceRequest = {
  service?: GoogleFirebaseAppcheckV1Service | undefined
  updateMask?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchUpdateServicesRequest = {
  requests?: GoogleFirebaseAppcheckV1UpdateServiceRequest[] | undefined
  updateMask?: string | undefined
}
type GoogleFirebaseAppcheckV1BatchUpdateServicesResponse = {
  services?: GoogleFirebaseAppcheckV1Service[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:app:exchangeAppAttestAssertion': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeAppAttestAssertionRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeAppAttestAttestation': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationRequest }
        output: GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeCustomToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeCustomTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeDebugToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeDebugTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeDeviceCheckToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangePlayIntegrityToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangePlayIntegrityTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeRecaptchaEnterpriseToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeRecaptchaV3Token': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:exchangeSafetyNetToken': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1ExchangeSafetyNetTokenRequest }
        output: GoogleFirebaseAppcheckV1AppCheckToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:generateAppAttestChallenge': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeRequest }
        output: GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:app:generatePlayIntegrityChallenge': {
      $post: {
        input: { param: { app: string } } & {
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
        } & { json: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeRequest }
        output: GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
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
        output: GoogleFirebaseAppcheckV1Service
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
        } & { json: GoogleFirebaseAppcheckV1Service }
        output: GoogleFirebaseAppcheckV1Service
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/appAttestConfig:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/deviceCheckConfig:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/playIntegrityConfig:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/recaptchaEnterpriseConfig:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/recaptchaV3Config:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/apps/-/safetyNetConfig:batchGet': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            names?: string[] | undefined
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
        output: GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/debugTokens': {
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
        output: GoogleFirebaseAppcheckV1ListDebugTokensResponse
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
        } & { json: GoogleFirebaseAppcheckV1DebugToken }
        output: GoogleFirebaseAppcheckV1DebugToken
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/services': {
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
        output: GoogleFirebaseAppcheckV1ListServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/services:batchUpdate': {
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
        } & { json: GoogleFirebaseAppcheckV1BatchUpdateServicesRequest }
        output: GoogleFirebaseAppcheckV1BatchUpdateServicesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
