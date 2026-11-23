type GenerateRandomBytesRequest = {
  lengthBytes?: number | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
}
type GenerateRandomBytesResponse = { data?: string | undefined; dataCrc32c?: string | undefined }
type CertificateChains = {
  caviumCerts?: string[] | undefined
  googleCardCerts?: string[] | undefined
  googlePartitionCerts?: string[] | undefined
}
type KeyOperationAttestation = {
  certChains?: CertificateChains | undefined
  content?: string | undefined
  format?:
    | 'ATTESTATION_FORMAT_UNSPECIFIED'
    | 'CAVIUM_V1_COMPRESSED'
    | 'CAVIUM_V2_COMPRESSED'
    | undefined
}
type WrappingPublicKey = { pem?: string | undefined }
type ImportJob = {
  attestation?: KeyOperationAttestation | undefined
  createTime?: string | undefined
  expireEventTime?: string | undefined
  expireTime?: string | undefined
  generateTime?: string | undefined
  importMethod?:
    | 'IMPORT_METHOD_UNSPECIFIED'
    | 'RSA_OAEP_3072_SHA1_AES_256'
    | 'RSA_OAEP_4096_SHA1_AES_256'
    | 'RSA_OAEP_3072_SHA256_AES_256'
    | 'RSA_OAEP_4096_SHA256_AES_256'
    | 'RSA_OAEP_3072_SHA256'
    | 'RSA_OAEP_4096_SHA256'
    | undefined
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  publicKey?: WrappingPublicKey | undefined
  state?: 'IMPORT_JOB_STATE_UNSPECIFIED' | 'PENDING_GENERATION' | 'ACTIVE' | 'EXPIRED' | undefined
}
type ExternalProtectionLevelOptions = {
  ekmConnectionKeyPath?: string | undefined
  externalKeyUri?: string | undefined
}
type CryptoKeyVersion = {
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
  attestation?: KeyOperationAttestation | undefined
  createTime?: string | undefined
  destroyEventTime?: string | undefined
  destroyTime?: string | undefined
  externalDestructionFailureReason?: string | undefined
  externalProtectionLevelOptions?: ExternalProtectionLevelOptions | undefined
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
type Location = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type ListLocationsResponse = {
  locations?: Location[] | undefined
  nextPageToken?: string | undefined
}
type PublicKey = {
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
  name?: string | undefined
  pem?: string | undefined
  pemCrc32c?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
}
type AsymmetricDecryptRequest = {
  ciphertext?: string | undefined
  ciphertextCrc32c?: string | undefined
}
type AsymmetricDecryptResponse = {
  plaintext?: string | undefined
  plaintextCrc32c?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  verifiedCiphertextCrc32c?: boolean | undefined
}
type Digest = {
  sha256?: string | undefined
  sha384?: string | undefined
  sha512?: string | undefined
}
type AsymmetricSignRequest = {
  data?: string | undefined
  dataCrc32c?: string | undefined
  digest?: Digest | undefined
  digestCrc32c?: string | undefined
}
type AsymmetricSignResponse = {
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  signature?: string | undefined
  signatureCrc32c?: string | undefined
  verifiedDataCrc32c?: boolean | undefined
  verifiedDigestCrc32c?: boolean | undefined
}
type DecryptRequest = {
  additionalAuthenticatedData?: string | undefined
  additionalAuthenticatedDataCrc32c?: string | undefined
  ciphertext?: string | undefined
  ciphertextCrc32c?: string | undefined
}
type DecryptResponse = {
  plaintext?: string | undefined
  plaintextCrc32c?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  usedPrimary?: boolean | undefined
}
type DestroyCryptoKeyVersionRequest = { [x: string]: unknown }
type EncryptRequest = {
  additionalAuthenticatedData?: string | undefined
  additionalAuthenticatedDataCrc32c?: string | undefined
  plaintext?: string | undefined
  plaintextCrc32c?: string | undefined
}
type EncryptResponse = {
  ciphertext?: string | undefined
  ciphertextCrc32c?: string | undefined
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  verifiedAdditionalAuthenticatedDataCrc32c?: boolean | undefined
  verifiedPlaintextCrc32c?: boolean | undefined
}
type MacSignRequest = { data?: string | undefined; dataCrc32c?: string | undefined }
type MacSignResponse = {
  mac?: string | undefined
  macCrc32c?: string | undefined
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  verifiedDataCrc32c?: boolean | undefined
}
type MacVerifyRequest = {
  data?: string | undefined
  dataCrc32c?: string | undefined
  mac?: string | undefined
  macCrc32c?: string | undefined
}
type MacVerifyResponse = {
  name?: string | undefined
  protectionLevel?:
    | 'PROTECTION_LEVEL_UNSPECIFIED'
    | 'SOFTWARE'
    | 'HSM'
    | 'EXTERNAL'
    | 'EXTERNAL_VPC'
    | undefined
  success?: boolean | undefined
  verifiedDataCrc32c?: boolean | undefined
  verifiedMacCrc32c?: boolean | undefined
  verifiedSuccessIntegrity?: boolean | undefined
}
type RestoreCryptoKeyVersionRequest = { [x: string]: unknown }
type UpdateCryptoKeyPrimaryVersionRequest = { cryptoKeyVersionId?: string | undefined }
type CryptoKeyVersionTemplate = {
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
type CryptoKey = {
  createTime?: string | undefined
  cryptoKeyBackend?: string | undefined
  destroyScheduledDuration?: string | undefined
  importOnly?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  nextRotationTime?: string | undefined
  primary?: CryptoKeyVersion | undefined
  purpose?:
    | 'CRYPTO_KEY_PURPOSE_UNSPECIFIED'
    | 'ENCRYPT_DECRYPT'
    | 'ASYMMETRIC_SIGN'
    | 'ASYMMETRIC_DECRYPT'
    | 'MAC'
    | undefined
  rotationPeriod?: string | undefined
  versionTemplate?: CryptoKeyVersionTemplate | undefined
}
type VerifyConnectivityResponse = { [x: string]: unknown }
type ListCryptoKeyVersionsResponse = {
  cryptoKeyVersions?: CryptoKeyVersion[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type ImportCryptoKeyVersionRequest = {
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
  cryptoKeyVersion?: string | undefined
  importJob?: string | undefined
  rsaAesWrappedKey?: string | undefined
  wrappedKey?: string | undefined
}
type ListCryptoKeysResponse = {
  cryptoKeys?: CryptoKey[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type Certificate = {
  issuer?: string | undefined
  notAfterTime?: string | undefined
  notBeforeTime?: string | undefined
  parsed?: boolean | undefined
  rawDer?: string | undefined
  serialNumber?: string | undefined
  sha256Fingerprint?: string | undefined
  subject?: string | undefined
  subjectAlternativeDnsNames?: string[] | undefined
}
type ServiceResolver = {
  endpointFilter?: string | undefined
  hostname?: string | undefined
  serverCertificates?: Certificate[] | undefined
  serviceDirectoryService?: string | undefined
}
type EkmConnection = {
  createTime?: string | undefined
  cryptoSpacePath?: string | undefined
  etag?: string | undefined
  keyManagementMode?: 'KEY_MANAGEMENT_MODE_UNSPECIFIED' | 'MANUAL' | 'CLOUD_KMS' | undefined
  name?: string | undefined
  serviceResolvers?: ServiceResolver[] | undefined
}
type ListEkmConnectionsResponse = {
  ekmConnections?: EkmConnection[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type ListImportJobsResponse = {
  importJobs?: ImportJob[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type KeyRing = { createTime?: string | undefined; name?: string | undefined }
type ListKeyRingsResponse = {
  keyRings?: KeyRing[] | undefined
  nextPageToken?: string | undefined
  totalSize?: number | undefined
}
type AuditLogConfig = {
  exemptedMembers?: string[] | undefined
  logType?: 'LOG_TYPE_UNSPECIFIED' | 'ADMIN_READ' | 'DATA_WRITE' | 'DATA_READ' | undefined
}
type AuditConfig = { auditLogConfigs?: AuditLogConfig[] | undefined; service?: string | undefined }
type Expr = {
  description?: string | undefined
  expression?: string | undefined
  location?: string | undefined
  title?: string | undefined
}
type Binding = {
  condition?: Expr | undefined
  members?: string[] | undefined
  role?: string | undefined
}
type Policy = {
  auditConfigs?: AuditConfig[] | undefined
  bindings?: Binding[] | undefined
  etag?: string | undefined
  version?: number | undefined
}
type SetIamPolicyRequest = { policy?: Policy | undefined; updateMask?: string | undefined }
type TestIamPermissionsRequest = { permissions?: string[] | undefined }
type TestIamPermissionsResponse = { permissions?: string[] | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:location:generateRandomBytes': {
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
        } & { json: GenerateRandomBytesRequest }
        output: GenerateRandomBytesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
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
        output: ImportJob
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
        } & { json: CryptoKeyVersion }
        output: CryptoKeyVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/locations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
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
        output: ListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/publicKey': {
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
        output: PublicKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:asymmetricDecrypt': {
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
        } & { json: AsymmetricDecryptRequest }
        output: AsymmetricDecryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:asymmetricSign': {
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
        } & { json: AsymmetricSignRequest }
        output: AsymmetricSignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:decrypt': {
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
        } & { json: DecryptRequest }
        output: DecryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:destroy': {
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
        } & { json: DestroyCryptoKeyVersionRequest }
        output: CryptoKeyVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:encrypt': {
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
        } & { json: EncryptRequest }
        output: EncryptResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:macSign': {
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
        } & { json: MacSignRequest }
        output: MacSignResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:macVerify': {
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
        } & { json: MacVerifyRequest }
        output: MacVerifyResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:restore': {
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
        } & { json: RestoreCryptoKeyVersionRequest }
        output: CryptoKeyVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:updatePrimaryVersion': {
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
        } & { json: UpdateCryptoKeyPrimaryVersionRequest }
        output: CryptoKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:verifyConnectivity': {
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
        output: VerifyConnectivityResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/cryptoKeyVersions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED' | 'FULL' | undefined
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
        output: ListCryptoKeyVersionsResponse
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
        } & { json: CryptoKeyVersion }
        output: CryptoKeyVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/cryptoKeyVersions:import': {
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
        } & { json: ImportCryptoKeyVersionRequest }
        output: CryptoKeyVersion
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/cryptoKeys': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            versionView?: 'CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED' | 'FULL' | undefined
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
        output: ListCryptoKeysResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            cryptoKeyId?: string | undefined
            skipInitialVersionCreation?: boolean | undefined
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
        } & { json: CryptoKey }
        output: CryptoKey
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/ekmConnections': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListEkmConnectionsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            ekmConnectionId?: string | undefined
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
        } & { json: EkmConnection }
        output: EkmConnection
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/importJobs': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListImportJobsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            importJobId?: string | undefined
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
        } & { json: ImportJob }
        output: ImportJob
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/keyRings': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            orderBy?: string | undefined
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
        output: ListKeyRingsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            keyRingId?: string | undefined
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
        } & { json: KeyRing }
        output: KeyRing
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:getIamPolicy': {
      $get: {
        input: { param: { resource: string } } & {
          query: {
            'options.requestedPolicyVersion'?: number | undefined
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
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:setIamPolicy': {
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
        } & { json: SetIamPolicyRequest }
        output: Policy
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:resource:testIamPermissions': {
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
        } & { json: TestIamPermissionsRequest }
        output: TestIamPermissionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
