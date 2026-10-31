import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudKmsV1KeyOperationAttestationCertificateChainsSchema = z
  .object({
    caviumCerts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Cavium certificate chain corresponding to the attestation.' }),
    googleCardCerts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Google card certificate chain corresponding to the attestation.' }),
    googlePartitionCerts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Google partition certificate chain corresponding to the attestation.',
      }),
  })
  .openapi({
    description:
      'Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.',
    required: [],
  })
  .openapi('GoogleCloudKmsV1KeyOperationAttestationCertificateChains')

const GoogleCloudKmsV1KeyOperationAttestationSchema = z
  .object({
    certChains:
      GoogleCloudKmsV1KeyOperationAttestationCertificateChainsSchema.exactOptional().openapi({
        description: 'Output only. The certificate chains needed to validate the attestation',
        readOnly: true,
      }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The attestation data provided by the HSM when the key operation was performed.',
        readOnly: true,
      }),
    format: z
      .enum(['ATTESTATION_FORMAT_UNSPECIFIED', 'CAVIUM_V1_COMPRESSED', 'CAVIUM_V2_COMPRESSED'])
      .exactOptional()
      .openapi({ description: 'Output only. The format of the attestation data.', readOnly: true }),
  })
  .openapi({
    description:
      'Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).',
    required: [],
  })
  .openapi('GoogleCloudKmsV1KeyOperationAttestation')

const GoogleCloudKmsV1ExternalProtectionLevelOptionsSchema = z
  .object({
    ekmConnectionKeyPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The path to the external key material on the EKM when using EkmConnection e.g., "v0/my/key". Set this field instead of external_key_uri when using an EkmConnection.',
      }),
    externalKeyUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URI for an external resource that this CryptoKeyVersion represents.',
      }),
  })
  .openapi({
    description:
      'ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.',
    required: [],
  })
  .openapi('GoogleCloudKmsV1ExternalProtectionLevelOptions')

const GoogleCloudKmsV1CryptoKeyVersionSchema = z
  .object({
    algorithm: z
      .enum([
        'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED',
        'GOOGLE_SYMMETRIC_ENCRYPTION',
        'RSA_SIGN_PSS_2048_SHA256',
        'RSA_SIGN_PSS_3072_SHA256',
        'RSA_SIGN_PSS_4096_SHA256',
        'RSA_SIGN_PSS_4096_SHA512',
        'RSA_SIGN_PKCS1_2048_SHA256',
        'RSA_SIGN_PKCS1_3072_SHA256',
        'RSA_SIGN_PKCS1_4096_SHA256',
        'RSA_SIGN_PKCS1_4096_SHA512',
        'RSA_SIGN_RAW_PKCS1_2048',
        'RSA_SIGN_RAW_PKCS1_3072',
        'RSA_SIGN_RAW_PKCS1_4096',
        'RSA_DECRYPT_OAEP_2048_SHA256',
        'RSA_DECRYPT_OAEP_3072_SHA256',
        'RSA_DECRYPT_OAEP_4096_SHA256',
        'RSA_DECRYPT_OAEP_4096_SHA512',
        'RSA_DECRYPT_OAEP_2048_SHA1',
        'RSA_DECRYPT_OAEP_3072_SHA1',
        'RSA_DECRYPT_OAEP_4096_SHA1',
        'EC_SIGN_P256_SHA256',
        'EC_SIGN_P384_SHA384',
        'EC_SIGN_SECP256K1_SHA256',
        'HMAC_SHA256',
        'HMAC_SHA1',
        'HMAC_SHA384',
        'HMAC_SHA512',
        'HMAC_SHA224',
        'EXTERNAL_SYMMETRIC_ENCRYPTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. The CryptoKeyVersionAlgorithm that this CryptoKeyVersion supports.',
        readOnly: true,
      }),
    attestation: GoogleCloudKmsV1KeyOperationAttestationSchema.exactOptional().openapi({
      description:
        'Output only. Statement that was generated and signed by the HSM at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only provided for key versions with protection_level HSM.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this CryptoKeyVersion was created.',
        readOnly: true,
      }),
    destroyEventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The time this CryptoKeyVersion's key material was destroyed. Only present if state is DESTROYED.",
        readOnly: true,
      }),
    destroyTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The time this CryptoKeyVersion's key material is scheduled for destruction. Only present if state is DESTROY_SCHEDULED.",
        readOnly: true,
      }),
    externalDestructionFailureReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The root cause of the most recent external destruction failure. Only present if state is EXTERNAL_DESTRUCTION_FAILED.',
        readOnly: true,
      }),
    externalProtectionLevelOptions:
      GoogleCloudKmsV1ExternalProtectionLevelOptionsSchema.exactOptional().openapi({
        description:
          'ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.',
      }),
    generateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The time this CryptoKeyVersion's key material was generated.",
        readOnly: true,
      }),
    generationFailureReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The root cause of the most recent generation failure. Only present if state is GENERATION_FAILED.',
        readOnly: true,
      }),
    importFailureReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The root cause of the most recent import failure. Only present if state is IMPORT_FAILED.',
        readOnly: true,
      }),
    importJob: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the ImportJob used in the most recent import of this CryptoKeyVersion. Only present if the underlying key material was imported.',
        readOnly: true,
      }),
    importTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The time at which this CryptoKeyVersion's key material was most recently imported.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.',
        readOnly: true,
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The ProtectionLevel describing how crypto operations are performed with this CryptoKeyVersion.',
        readOnly: true,
      }),
    reimportEligible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether or not this key version is eligible for reimport, by being specified as a target in ImportCryptoKeyVersionRequest.crypto_key_version.',
        readOnly: true,
      }),
    state: z
      .enum([
        'CRYPTO_KEY_VERSION_STATE_UNSPECIFIED',
        'PENDING_GENERATION',
        'ENABLED',
        'DISABLED',
        'DESTROYED',
        'DESTROY_SCHEDULED',
        'PENDING_IMPORT',
        'IMPORT_FAILED',
        'GENERATION_FAILED',
        'PENDING_EXTERNAL_DESTRUCTION',
        'EXTERNAL_DESTRUCTION_FAILED',
      ])
      .exactOptional()
      .openapi({ description: 'The current state of the CryptoKeyVersion.' }),
  })
  .openapi({
    description:
      'A CryptoKeyVersion represents an individual cryptographic key, and the associated key material. An ENABLED version can be used for cryptographic operations. For security reasons, the raw cryptographic key material represented by a CryptoKeyVersion can never be viewed or exported. It can only be used to encrypt, decrypt, or sign data when an authorized user or application invokes Cloud KMS.',
    required: [],
  })
  .openapi('GoogleCloudKmsV1CryptoKeyVersion')

const GoogleCloudKmsV1CryptoKeyVersionTemplateSchema = z
  .object({
    algorithm: z
      .enum([
        'CRYPTO_KEY_VERSION_ALGORITHM_UNSPECIFIED',
        'GOOGLE_SYMMETRIC_ENCRYPTION',
        'RSA_SIGN_PSS_2048_SHA256',
        'RSA_SIGN_PSS_3072_SHA256',
        'RSA_SIGN_PSS_4096_SHA256',
        'RSA_SIGN_PSS_4096_SHA512',
        'RSA_SIGN_PKCS1_2048_SHA256',
        'RSA_SIGN_PKCS1_3072_SHA256',
        'RSA_SIGN_PKCS1_4096_SHA256',
        'RSA_SIGN_PKCS1_4096_SHA512',
        'RSA_SIGN_RAW_PKCS1_2048',
        'RSA_SIGN_RAW_PKCS1_3072',
        'RSA_SIGN_RAW_PKCS1_4096',
        'RSA_DECRYPT_OAEP_2048_SHA256',
        'RSA_DECRYPT_OAEP_3072_SHA256',
        'RSA_DECRYPT_OAEP_4096_SHA256',
        'RSA_DECRYPT_OAEP_4096_SHA512',
        'RSA_DECRYPT_OAEP_2048_SHA1',
        'RSA_DECRYPT_OAEP_3072_SHA1',
        'RSA_DECRYPT_OAEP_4096_SHA1',
        'EC_SIGN_P256_SHA256',
        'EC_SIGN_P384_SHA384',
        'EC_SIGN_SECP256K1_SHA256',
        'HMAC_SHA256',
        'HMAC_SHA1',
        'HMAC_SHA384',
        'HMAC_SHA512',
        'HMAC_SHA224',
        'EXTERNAL_SYMMETRIC_ENCRYPTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({
        description:
          'ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE.',
      }),
  })
  .openapi({
    description:
      'A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.',
    required: [],
  })
  .openapi('GoogleCloudKmsV1CryptoKeyVersionTemplate')

const GoogleCloudKmsV1CryptoKeySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this CryptoKey was created.',
        readOnly: true,
      }),
    cryptoKeyBackend: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the backend environment where the key material for all CryptoKeyVersions associated with this CryptoKey reside and where all related cryptographic operations are performed. Only applicable if CryptoKeyVersions have a ProtectionLevel of EXTERNAL_VPC, with the resource name in the format `projects/*/locations/*/ekmConnections/*`. Note, this list is non-exhaustive and may apply to additional ProtectionLevels in the future.',
      }),
    destroyScheduledDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The period of time that versions of this key spend in the DESTROY_SCHEDULED state before transitioning to DESTROYED. If not specified at creation time, the default duration is 24 hours.',
      }),
    importOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Immutable. Whether this key may contain imported versions only.' }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Labels with user-defined metadata. For more information, see [Labeling Keys](https://cloud.google.com/kms/docs/labeling-keys).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for this CryptoKey in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`.',
        readOnly: true,
      }),
    nextRotationTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'At next_rotation_time, the Key Management Service will automatically: 1. Create a new version of this CryptoKey. 2. Mark the new version as primary. Key rotations performed manually via CreateCryptoKeyVersion and UpdateCryptoKeyPrimaryVersion do not affect next_rotation_time. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.',
      }),
    primary: GoogleCloudKmsV1CryptoKeyVersionSchema.exactOptional().openapi({
      description:
        'Output only. A copy of the "primary" CryptoKeyVersion that will be used by Encrypt when this CryptoKey is given in EncryptRequest.name. The CryptoKey\'s primary version can be updated via UpdateCryptoKeyPrimaryVersion. Keys with purpose ENCRYPT_DECRYPT may have a primary. For other keys, this field will be omitted.',
      readOnly: true,
    }),
    purpose: z
      .enum([
        'CRYPTO_KEY_PURPOSE_UNSPECIFIED',
        'ENCRYPT_DECRYPT',
        'ASYMMETRIC_SIGN',
        'ASYMMETRIC_DECRYPT',
        'MAC',
      ])
      .exactOptional()
      .openapi({ description: 'Immutable. The immutable purpose of this CryptoKey.' }),
    rotationPeriod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'next_rotation_time will be advanced by this period when the service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours. If rotation_period is set, next_rotation_time must also be set. Keys with purpose ENCRYPT_DECRYPT support automatic rotation. For other keys, this field must be omitted.',
      }),
    versionTemplate: GoogleCloudKmsV1CryptoKeyVersionTemplateSchema.exactOptional().openapi({
      description:
        'A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.',
    }),
  })
  .openapi({
    description:
      'A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.',
    required: [],
  })
  .openapi('GoogleCloudKmsV1CryptoKey')

const GoogleCloudKmsInventoryV1ListCryptoKeysResponseSchema = z
  .object({
    cryptoKeys: z
      .array(GoogleCloudKmsV1CryptoKeySchema)
      .exactOptional()
      .openapi({ description: 'The list of CryptoKeys.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The page token returned from the previous response if the next page is desired.',
      }),
  })
  .openapi({
    description: 'Response message for KeyDashboardService.ListCryptoKeys.',
    required: [],
  })
  .openapi('GoogleCloudKmsInventoryV1ListCryptoKeysResponse')

const GoogleCloudKmsInventoryV1ProtectedResourceSchema = z
  .object({
    cloudProduct: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Cloud product that owns the resource. Example: `compute`' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which this resource was created. The granularity is in seconds. Timestamp.nanos will always be 0.',
        readOnly: true,
      }),
    cryptoKeyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key version data to Asset Inventory. If there are multiple key versions protecting the resource, then this is same value as the first element of crypto_key_versions.',
      }),
    cryptoKeyVersions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of the Cloud KMS [CryptoKeyVersion](https://cloud.google.com/kms/docs/reference/rest/v1/projects.locations.keyRings.cryptoKeys.cryptoKeyVersions?hl=en) used to protect this resource via CMEK. This field is empty if the Google Cloud product owning the resource does not provide key versions data to Asset Inventory. The first element of this field is stored in crypto_key_version.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: "A key-value pair of the resource's labels (v1) to their values." }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Location can be `global`, regional like `us-east1`, or zonal like `us-west1-b`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of the resource. Example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`.',
      }),
    project: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format: `projects/{PROJECT_NUMBER}`.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the project that owns the resource.' }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Example: `compute.googleapis.com/Disk`' }),
  })
  .openapi({ description: 'Metadata about a resource protected by a Cloud KMS key.', required: [] })
  .openapi('GoogleCloudKmsInventoryV1ProtectedResource')

const GoogleCloudKmsInventoryV1ProtectedResourcesSummarySchema = z
  .object({
    cloudProducts: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The number of resources protected by the key grouped by Cloud product.',
      }),
    locations: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'The number of resources protected by the key grouped by region.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the ProtectedResourcesSummary resource. Example: projects/test-project/locations/us/keyRings/test-keyring/cryptoKeys/test-key/protectedResourcesSummary',
      }),
    projectCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of distinct Cloud projects in the same Cloud organization as the key that have resources protected by the key.',
      }),
    resourceCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of protected resources in the same Cloud organization as the key.',
      }),
    resourceTypes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description: 'The number of resources protected by the key grouped by resource type.',
      }),
  })
  .openapi({
    description:
      'Aggregate information about the resources protected by a Cloud KMS key in the same Cloud organization as the key.',
    required: [],
  })
  .openapi('GoogleCloudKmsInventoryV1ProtectedResourcesSummary')

const GoogleCloudKmsInventoryV1SearchProtectedResourcesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    protectedResources: z
      .array(GoogleCloudKmsInventoryV1ProtectedResourceSchema)
      .exactOptional()
      .openapi({ description: 'Protected resources for this page.' }),
  })
  .openapi({
    description: 'Response message for KeyTrackingService.SearchProtectedResources.',
    required: [],
  })
  .openapi('GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameProtectedResourcesSummaryRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/protectedResourcesSummary',
  tags: ['projects'],
  description:
    'Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.',
  operationId: 'kmsinventory.projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the CryptoKey.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudKmsInventoryV1ProtectedResourcesSummarySchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCryptoKeysRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/cryptoKeys',
  tags: ['projects'],
  description:
    'Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.',
  operationId: 'kmsinventory.projects.cryptoKeys.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Pass this into a subsequent request in order to receive the next page of results.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudKmsInventoryV1ListCryptoKeysResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ScopeProtectedResourcesSearchRoute = createRoute({
  method: 'get',
  path: '/v1/{scope}/protectedResources:search',
  tags: ['organizations'],
  description:
    'Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.',
  operationId: 'kmsinventory.organizations.protectedResources.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      cryptoKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The resource name of the CryptoKey.',
            in: 'query',
            name: 'cryptoKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      scope: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the organization. Example: organizations/123',
            in: 'path',
            name: 'scope',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudKmsInventoryV1SearchProtectedResourcesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
