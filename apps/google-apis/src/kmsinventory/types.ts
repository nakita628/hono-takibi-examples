type GoogleCloudKmsInventoryV1ProtectedResourcesSummary = {
  cloudProducts?: { [x: string]: string } | undefined
  locations?: { [x: string]: string } | undefined
  name?: string | undefined
  projectCount?: number | undefined
  resourceCount?: string | undefined
  resourceTypes?: { [x: string]: string } | undefined
}
type GoogleCloudKmsV1KeyOperationAttestationCertificateChains = {
  caviumCerts?: string[] | undefined
  googleCardCerts?: string[] | undefined
  googlePartitionCerts?: string[] | undefined
}
type GoogleCloudKmsV1KeyOperationAttestation = {
  certChains?: GoogleCloudKmsV1KeyOperationAttestationCertificateChains | undefined
  content?: string | undefined
  format?:
    | 'ATTESTATION_FORMAT_UNSPECIFIED'
    | 'CAVIUM_V1_COMPRESSED'
    | 'CAVIUM_V2_COMPRESSED'
    | undefined
}
type GoogleCloudKmsV1ExternalProtectionLevelOptions = {
  ekmConnectionKeyPath?: string | undefined
  externalKeyUri?: string | undefined
}
type GoogleCloudKmsV1CryptoKeyVersion = {
  algorithm?:
    | 'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED'
    | 'GOOGLE_SYMMETRIC_ENCRYPTION'
    | 'RSA_SIGN_PSS_2048_SHA256'
    | 'RSA_SIGN_PSS_3072_SHA256'
    | 'RSA_SIGN_PSS_4096_SHA256'
    | 'RSA_SIGN_PSS_4096_SHA512'
    | 'RSA_SIGN_PKCS1_2048_SHA256'
    | 'RSA_SIGN_PKCS1_3072_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA512'
    | 'RSA_SIGN_RAW_PKCS1_2048'
    | 'RSA_SIGN_RAW_PKCS1_3072'
    | 'RSA_SIGN_RAW_PKCS1_4096'
    | 'RSA_DECRYPT_OAEP_2048_SHA256'
    | 'RSA_DECRYPT_OAEP_3072_SHA256'
    | 'RSA_DECRYPT_OAEP_4096_SHA256'
    | 'RSA_DECRYPT_OAEP_4096_SHA512'
    | 'RSA_DECRYPT_OAEP_2048_SHA1'
    | 'RSA_DECRYPT_OAEP_3072_SHA1'
    | 'RSA_DECRYPT_OAEP_4096_SHA1'
    | 'EC_SIGN_P256_SHA256'
    | 'EC_SIGN_P384_SHA384'
    | 'EC_SIGN_SECP256K1_SHA256'
    | 'HMAC_SHA256'
    | 'HMAC_SHA1'
    | 'HMAC_SHA384'
    | 'HMAC_SHA512'
    | 'HMAC_SHA224'
    | 'EXTERNAL_SYMMETRIC_ENCRYPTION'
    | undefined
  attestation?: GoogleCloudKmsV1KeyOperationAttestation | undefined
  createTime?: string | undefined
  destroyEventTime?: string | undefined
  destroyTime?: string | undefined
  externalDestructionFailureReason?: string | undefined
  externalProtectionLevelOptions?: GoogleCloudKmsV1ExternalProtectionLevelOptions | undefined
  generateTime?: string | undefined
  generationFailureReason?: string | undefined
  importFailureReason?: string | undefined
  importJob?: string | undefined
  importTime?: string | undefined
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  reimportEligible?: boolean | undefined
  state?:
    | 'CRYPTO_KEY_VERSION_STATE_UNSPECIFIED'
    | 'PENDING_GENERATION'
    | 'ENABLED'
    | 'DISABLED'
    | 'DESTROYED'
    | 'DESTROY_SCHEDULED'
    | 'PENDING_IMPORT'
    | 'IMPORT_FAILED'
    | 'GENERATION_FAILED'
    | 'PENDING_EXTERNAL_DESTRUCTION'
    | 'EXTERNAL_DESTRUCTION_FAILED'
    | undefined
}
type GoogleCloudKmsV1CryptoKeyVersionTemplate = {
  algorithm?:
    | 'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED'
    | 'GOOGLE_SYMMETRIC_ENCRYPTION'
    | 'RSA_SIGN_PSS_2048_SHA256'
    | 'RSA_SIGN_PSS_3072_SHA256'
    | 'RSA_SIGN_PSS_4096_SHA256'
    | 'RSA_SIGN_PSS_4096_SHA512'
    | 'RSA_SIGN_PKCS1_2048_SHA256'
    | 'RSA_SIGN_PKCS1_3072_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA256'
    | 'RSA_SIGN_PKCS1_4096_SHA512'
    | 'RSA_SIGN_RAW_PKCS1_2048'
    | 'RSA_SIGN_RAW_PKCS1_3072'
    | 'RSA_SIGN_RAW_PKCS1_4096'
    | 'RSA_DECRYPT_OAEP_2048_SHA256'
    | 'RSA_DECRYPT_OAEP_3072_SHA256'
    | 'RSA_DECRYPT_OAEP_4096_SHA256'
    | 'RSA_DECRYPT_OAEP_4096_SHA512'
    | 'RSA_DECRYPT_OAEP_2048_SHA1'
    | 'RSA_DECRYPT_OAEP_3072_SHA1'
    | 'RSA_DECRYPT_OAEP_4096_SHA1'
    | 'EC_SIGN_P256_SHA256'
    | 'EC_SIGN_P384_SHA384'
    | 'EC_SIGN_SECP256K1_SHA256'
    | 'HMAC_SHA256'
    | 'HMAC_SHA1'
    | 'HMAC_SHA384'
    | 'HMAC_SHA512'
    | 'HMAC_SHA224'
    | 'EXTERNAL_SYMMETRIC_ENCRYPTION'
    | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
}
type GoogleCloudKmsV1CryptoKey = {
  createTime?: string | undefined
  cryptoKeyBackend?: string | undefined
  destroyScheduledDuration?: string | undefined
  importOnly?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nextRotationTime?: string | undefined
  primary?: GoogleCloudKmsV1CryptoKeyVersion | undefined
  purpose?:
    | 'CRYPTO_KEY_PURPOSE_UNSPECIFIED'
    | 'ENCRYPT_DECRYPT'
    | 'ASYMMETRIC_SIGN'
    | 'ASYMMETRIC_DECRYPT'
    | 'MAC'
    | undefined
  rotationPeriod?: string | undefined
  versionTemplate?: GoogleCloudKmsV1CryptoKeyVersionTemplate | undefined
}
type GoogleCloudKmsInventoryV1ListCryptoKeysResponse = {
  cryptoKeys?: GoogleCloudKmsV1CryptoKey[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudKmsInventoryV1ProtectedResource = {
  cloudProduct?: string | undefined
  createTime?: string | undefined
  cryptoKeyVersion?: string | undefined
  cryptoKeyVersions?: string[] | undefined
  labels?: { [x: string]: string } | undefined
  location?: string | undefined
  name?: string | undefined
  project?: string | undefined
  projectId?: string | undefined
  resourceType?: string | undefined
}
type GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse = {
  nextPageToken?: string | undefined
  protectedResources?: GoogleCloudKmsInventoryV1ProtectedResource[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name/protectedResourcesSummary': {
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
        output: GoogleCloudKmsInventoryV1ProtectedResourcesSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/cryptoKeys': {
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
        output: GoogleCloudKmsInventoryV1ListCryptoKeysResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:scope/protectedResources:search': {
      $get: {
        input: { param: { scope: string } } & {
          query: {
            cryptoKey?: string | undefined
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
        output: GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
