import { createRoute, z } from '@hono/zod-openapi'

const AsymmetricDecryptRequestSchema = z
  .object({
    ciphertext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The data encrypted with the named CryptoKeyVersion's public key using OAEP.",
      }),
    ciphertextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the AsymmetricDecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received AsymmetricDecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricDecryptRequest.ciphertext) is equal to AsymmetricDecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({
    description: 'Request message for KeyManagementService.AsymmetricDecrypt.',
    required: [],
  })
  .openapi('AsymmetricDecryptRequest')

const AsymmetricDecryptResponseSchema = z
  .object({
    plaintext: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The decrypted data originally encrypted with the matching public key.',
      }),
    plaintextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned AsymmetricDecryptResponse.plaintext. An integrity check of AsymmetricDecryptResponse.plaintext can be performed by computing the CRC32C checksum of AsymmetricDecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion used in decryption.' }),
    verifiedCiphertextCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether AsymmetricDecryptRequest.ciphertext_crc32c was received by KeyManagementService and used for the integrity verification of the ciphertext. A false value of this field indicates either that AsymmetricDecryptRequest.ciphertext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricDecryptRequest.ciphertext_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.AsymmetricDecrypt.',
    required: [],
  })
  .openapi('AsymmetricDecryptResponse')

const DigestSchema = z
  .object({
    sha256: z
      .string()
      .exactOptional()
      .openapi({ description: 'A message digest produced with the SHA-256 algorithm.' }),
    sha384: z
      .string()
      .exactOptional()
      .openapi({ description: 'A message digest produced with the SHA-384 algorithm.' }),
    sha512: z
      .string()
      .exactOptional()
      .openapi({ description: 'A message digest produced with the SHA-512 algorithm.' }),
  })
  .openapi({ description: 'A Digest holds a cryptographic message digest.', required: [] })
  .openapi('Digest')

const AsymmetricSignRequestSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The data to sign. It can't be supplied if AsymmetricSignRequest.digest is supplied.",
      }),
    dataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the AsymmetricSignRequest.data. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.data) is equal to AsymmetricSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    digest: DigestSchema.exactOptional().openapi({
      description:
        "Optional. The digest of the data to sign. The digest must be produced with the same digest algorithm as specified by the key version's algorithm. This field may not be supplied if AsymmetricSignRequest.data is supplied.",
    }),
    digestCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the AsymmetricSignRequest.digest. If specified, KeyManagementService will verify the integrity of the received AsymmetricSignRequest.digest using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(AsymmetricSignRequest.digest) is equal to AsymmetricSignRequest.digest_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({
    description: 'Request message for KeyManagementService.AsymmetricSign.',
    required: [],
  })
  .openapi('AsymmetricSignRequest')

const AsymmetricSignResponseSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion used for signing.' }),
    signature: z.string().exactOptional().openapi({ description: 'The created signature.' }),
    signatureCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned AsymmetricSignResponse.signature. An integrity check of AsymmetricSignResponse.signature can be performed by computing the CRC32C checksum of AsymmetricSignResponse.signature and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    verifiedDataCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether AsymmetricSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that AsymmetricSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
    verifiedDigestCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether AsymmetricSignRequest.digest_crc32c was received by KeyManagementService and used for the integrity verification of the digest. A false value of this field indicates either that AsymmetricSignRequest.digest_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set AsymmetricSignRequest.digest_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.AsymmetricSign.',
    required: [],
  })
  .openapi('AsymmetricSignResponse')

const AuditLogConfigSchema = z
  .object({
    exemptedMembers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members.',
      }),
    logType: z
      .enum(['LOG_TYPE_UNSPECIFIED', 'ADMIN_READ', 'DATA_WRITE', 'DATA_READ'])
      .exactOptional()
      .openapi({ description: 'The log type that this config enables.' }),
  })
  .openapi({
    description:
      'Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables \'DATA_READ\' and \'DATA_WRITE\' logging, while exempting jose@example.com from DATA_READ logging.',
    required: [],
  })
  .openapi('AuditLogConfig')

const AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(AuditLogConfigSchema)
      .exactOptional()
      .openapi({ description: 'The configuration for logging of each type of permission.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services.',
      }),
  })
  .openapi({
    description:
      'Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging.',
    required: [],
  })
  .openapi('AuditConfig')

const ExprSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.',
      }),
    expression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Textual representation of an expression in Common Expression Language syntax.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.',
      }),
  })
  .openapi({
    description:
      'Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != \'private\' && document.type != \'internal\'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "\'New message received at \' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.',
    required: [],
  })
  .openapi('Expr')

const BindingSchema = z
  .object({
    condition: ExprSchema.exactOptional().openapi({
      description:
        'The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
    }),
    members: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.',
      }),
    role: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.',
      }),
  })
  .openapi({ description: 'Associates `members`, or principals, with a `role`.', required: [] })
  .openapi('Binding')

const CertificateSchema = z
  .object({
    issuer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The issuer distinguished name in RFC 2253 format. Only present if parsed is true.',
        readOnly: true,
      }),
    notAfterTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The certificate is not valid after this time. Only present if parsed is true.',
        readOnly: true,
      }),
    notBeforeTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The certificate is not valid before this time. Only present if parsed is true.',
        readOnly: true,
      }),
    parsed: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. True if the certificate was parsed successfully.',
        readOnly: true,
      }),
    rawDer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The raw certificate bytes in DER format.' }),
    serialNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The certificate serial number as a hex string. Only present if parsed is true.',
        readOnly: true,
      }),
    sha256Fingerprint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SHA-256 certificate fingerprint as a hex string. Only present if parsed is true.',
        readOnly: true,
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The subject distinguished name in RFC 2253 format. Only present if parsed is true.',
        readOnly: true,
      }),
    subjectAlternativeDnsNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. The subject Alternative DNS names. Only present if parsed is true.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A Certificate represents an X.509 certificate used to authenticate HTTPS connections to EKM replicas.',
    required: [],
  })
  .openapi('Certificate')

const CertificateChainsSchema = z
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
  .openapi('CertificateChains')

const KeyOperationAttestationSchema = z
  .object({
    certChains: CertificateChainsSchema.exactOptional().openapi({
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
  .openapi('KeyOperationAttestation')

const ExternalProtectionLevelOptionsSchema = z
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
  .openapi('ExternalProtectionLevelOptions')

const CryptoKeyVersionSchema = z
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
    attestation: KeyOperationAttestationSchema.exactOptional().openapi({
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
    externalProtectionLevelOptions: ExternalProtectionLevelOptionsSchema.exactOptional().openapi({
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
  .openapi('CryptoKeyVersion')

const CryptoKeyVersionTemplateSchema = z
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
  .openapi('CryptoKeyVersionTemplate')

const CryptoKeySchema = z
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
    primary: CryptoKeyVersionSchema.exactOptional().openapi({
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
    versionTemplate: CryptoKeyVersionTemplateSchema.exactOptional().openapi({
      description:
        'A template describing settings for new CryptoKeyVersion instances. The properties of new CryptoKeyVersion instances created by either CreateCryptoKeyVersion or auto-rotation are controlled by this template.',
    }),
  })
  .openapi({
    description:
      'A CryptoKey represents a logical key that can be used for cryptographic operations. A CryptoKey is made up of zero or more versions, which represent the actual key material used in cryptographic operations.',
    required: [],
  })
  .openapi('CryptoKey')

const DecryptRequestSchema = z
  .object({
    additionalAuthenticatedData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Optional data that must match the data originally supplied in EncryptRequest.additional_authenticated_data.',
      }),
    additionalAuthenticatedDataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the DecryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.additional_authenticated_data) is equal to DecryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    ciphertext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The encrypted data originally returned in EncryptResponse.ciphertext.',
      }),
    ciphertextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the DecryptRequest.ciphertext. If specified, KeyManagementService will verify the integrity of the received DecryptRequest.ciphertext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(DecryptRequest.ciphertext) is equal to DecryptRequest.ciphertext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({ description: 'Request message for KeyManagementService.Decrypt.', required: [] })
  .openapi('DecryptRequest')

const DecryptResponseSchema = z
  .object({
    plaintext: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The decrypted data originally supplied in EncryptRequest.plaintext.',
      }),
    plaintextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion used in decryption.' }),
    usedPrimary: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the Decryption was performed using the primary key version.',
      }),
  })
  .openapi({ description: 'Response message for KeyManagementService.Decrypt.', required: [] })
  .openapi('DecryptResponse')

const DestroyCryptoKeyVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for KeyManagementService.DestroyCryptoKeyVersion.' })
  .openapi('DestroyCryptoKeyVersionRequest')

const EkmConfigSchema = z
  .object({
    defaultEkmConnection: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource name of the default EkmConnection. Setting this field to the empty string removes the default.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for the EkmConfig in the format `projects/*/locations/*/ekmConfig`.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An EkmConfig is a singleton resource that represents configuration parameters that apply to all CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC in a given project and location.',
    required: [],
  })
  .openapi('EkmConfig')

const ServiceResolverSchema = z
  .object({
    endpointFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The hostname of the EKM replica used at TLS and HTTP layers.',
      }),
    serverCertificates: z
      .array(CertificateSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A list of leaf server certificates used to authenticate HTTPS connections to the EKM replica. Currently, a maximum of 10 Certificate is supported.',
      }),
    serviceDirectoryService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the Service Directory service pointing to an EKM replica, in the format `projects/*/locations/*/namespaces/*/services/*`.',
      }),
  })
  .openapi({
    description:
      'A ServiceResolver represents an EKM replica that can be reached within an EkmConnection.',
    required: [],
  })
  .openapi('ServiceResolver')

const EkmConnectionSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the EkmConnection was created.',
        readOnly: true,
      }),
    cryptoSpacePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Etag of the currently stored EkmConnection.' }),
    keyManagementMode: z
      .enum(['KEY_MANAGEMENT_MODE_UNSPECIFIED', 'MANUAL', 'CLOUD_KMS'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for the EkmConnection in the format `projects/*/locations/*/ekmConnections/*`.',
        readOnly: true,
      }),
    serviceResolvers: z
      .array(ServiceResolverSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of ServiceResolvers where the EKM can be reached. There should be one ServiceResolver per EKM replica. Currently, only a single ServiceResolver is supported.',
      }),
  })
  .openapi({
    description:
      'An EkmConnection represents an individual EKM connection. It can be used for creating CryptoKeys and CryptoKeyVersions with a ProtectionLevel of EXTERNAL_VPC, as well as performing cryptographic operations using keys created within the EkmConnection.',
    required: [],
  })
  .openapi('EkmConnection')

const EncryptRequestSchema = z
  .object({
    additionalAuthenticatedData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Optional data that, if specified, must also be provided during decryption through DecryptRequest.additional_authenticated_data. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys the AAD must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.",
      }),
    additionalAuthenticatedDataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the EncryptRequest.additional_authenticated_data. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.additional_authenticated_data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.additional_authenticated_data) is equal to EncryptRequest.additional_authenticated_data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    plaintext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The data to encrypt. Must be no larger than 64KiB. The maximum size depends on the key version's protection_level. For SOFTWARE, EXTERNAL, and EXTERNAL_VPC keys, the plaintext must be no larger than 64KiB. For HSM keys, the combined length of the plaintext and additional_authenticated_data fields must be no larger than 8KiB.",
      }),
    plaintextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the EncryptRequest.plaintext. If specified, KeyManagementService will verify the integrity of the received EncryptRequest.plaintext using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(EncryptRequest.plaintext) is equal to EncryptRequest.plaintext_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({ description: 'Request message for KeyManagementService.Encrypt.', required: [] })
  .openapi('EncryptRequest')

const EncryptResponseSchema = z
  .object({
    ciphertext: z.string().exactOptional().openapi({ description: 'The encrypted data.' }),
    ciphertextCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion used in encryption.' }),
    verifiedAdditionalAuthenticatedDataCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
    verifiedPlaintextCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
  })
  .openapi({ description: 'Response message for KeyManagementService.Encrypt.', required: [] })
  .openapi('EncryptResponse')

const GenerateRandomBytesRequestSchema = z
  .object({
    lengthBytes: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({
        description:
          'The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.',
      }),
  })
  .openapi({
    description: 'Request message for KeyManagementService.GenerateRandomBytes.',
    required: [],
  })
  .openapi('GenerateRandomBytesRequest')

const GenerateRandomBytesResponseSchema = z
  .object({
    data: z.string().exactOptional().openapi({ description: 'The generated data.' }),
    dataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.GenerateRandomBytes.',
    required: [],
  })
  .openapi('GenerateRandomBytesResponse')

const ImportCryptoKeyVersionRequestSchema = z
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
          'Required. The algorithm of the key being imported. This does not need to match the version_template of the CryptoKey this version imports into.',
      }),
    cryptoKeyVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The optional name of an existing CryptoKeyVersion to target for an import operation. If this field is not present, a new CryptoKeyVersion containing the supplied key material is created. If this field is present, the supplied key material is imported into the existing CryptoKeyVersion. To import into an existing CryptoKeyVersion, the CryptoKeyVersion must be a child of ImportCryptoKeyVersionRequest.parent, have been previously created via ImportCryptoKeyVersion, and be in DESTROYED or IMPORT_FAILED state. The key material and algorithm must match the previous CryptoKeyVersion exactly if the CryptoKeyVersion has ever contained key material.',
      }),
    importJob: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the ImportJob that was used to wrap this key material.',
      }),
    rsaAesWrappedKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This field has the same meaning as wrapped_key. Prefer to use that field in new work. Either that field or this field (but not both) must be specified.',
      }),
    wrappedKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The wrapped key material to import. Before wrapping, key material must be formatted. If importing symmetric key material, the expected key material format is plain bytes. If importing asymmetric key material, the expected key material format is PKCS#8-encoded DER (the PrivateKeyInfo structure from RFC 5208). When wrapping with import methods (RSA_OAEP_3072_SHA1_AES_256 or RSA_OAEP_4096_SHA1_AES_256 or RSA_OAEP_3072_SHA256_AES_256 or RSA_OAEP_4096_SHA256_AES_256), this field must contain the concatenation of: 1. An ephemeral AES-256 wrapping key wrapped with the public_key using RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty label. 2. The formatted key to be imported, wrapped with the ephemeral AES-256 key using AES-KWP (RFC 5649). This format is the same as the format produced by PKCS#11 mechanism CKM_RSA_AES_KEY_WRAP. When wrapping with import methods (RSA_OAEP_3072_SHA256 or RSA_OAEP_4096_SHA256), this field must contain the formatted key to be imported, wrapped with the public_key using RSAES-OAEP with SHA-256, MGF1 with SHA-256, and an empty label.',
      }),
  })
  .openapi({
    description: 'Request message for KeyManagementService.ImportCryptoKeyVersion.',
    required: [],
  })
  .openapi('ImportCryptoKeyVersionRequest')

const WrappingPublicKeySchema = z
  .object({
    pem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).',
      }),
  })
  .openapi({
    description:
      'The public key component of the wrapping key. For details of the type of key this public key corresponds to, see the ImportMethod.',
    required: [],
  })
  .openapi('WrappingPublicKey')

const ImportJobSchema = z
  .object({
    attestation: KeyOperationAttestationSchema.exactOptional().openapi({
      description:
        'Output only. Statement that was generated and signed by the key creator (for example, an HSM) at key creation time. Use this statement to verify attributes of the key as stored on the HSM, independently of Google. Only present if the chosen ImportMethod is one with a protection level of HSM.',
      readOnly: true,
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this ImportJob was created.',
        readOnly: true,
      }),
    expireEventTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time this ImportJob expired. Only present if state is EXPIRED.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which this ImportJob is scheduled for expiration and can no longer be used to import key material.',
        readOnly: true,
      }),
    generateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. The time this ImportJob's key material was generated.",
        readOnly: true,
      }),
    importMethod: z
      .enum([
        'IMPORT_METHOD_UNSPECIFIED',
        'RSA_OAEP_3072_SHA1_AES_256',
        'RSA_OAEP_4096_SHA1_AES_256',
        'RSA_OAEP_3072_SHA256_AES_256',
        'RSA_OAEP_4096_SHA256_AES_256',
        'RSA_OAEP_3072_SHA256',
        'RSA_OAEP_4096_SHA256',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The wrapping method to be used for incoming key material.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for this ImportJob in the format `projects/*/locations/*/keyRings/*/importJobs/*`.',
        readOnly: true,
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The protection level of the ImportJob. This must match the protection_level of the version_template on the CryptoKey you attempt to import into.',
      }),
    publicKey: WrappingPublicKeySchema.exactOptional().openapi({
      description:
        'Output only. The public key with which to wrap key material prior to import. Only returned if state is ACTIVE.',
      readOnly: true,
    }),
    state: z
      .enum(['IMPORT_JOB_STATE_UNSPECIFIED', 'PENDING_GENERATION', 'ACTIVE', 'EXPIRED'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The current state of the ImportJob, indicating if it can be used.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'An ImportJob can be used to create CryptoKeys and CryptoKeyVersions using pre-existing key material, generated outside of Cloud KMS. When an ImportJob is created, Cloud KMS will generate a "wrapping key", which is a public/private key pair. You use the wrapping key to encrypt (also known as wrap) the pre-existing key material to protect it during the import process. The nature of the wrapping key depends on the choice of import_method. When the wrapping key generation is complete, the state will be set to ACTIVE and the public_key can be fetched. The fetched public key can then be used to wrap your pre-existing key material. Once the key material is wrapped, it can be imported into a new CryptoKeyVersion in an existing CryptoKey by calling ImportCryptoKeyVersion. Multiple CryptoKeyVersions can be imported with a single ImportJob. Cloud KMS uses the private key portion of the wrapping key to unwrap the key material. Only Cloud KMS has access to the private key. An ImportJob expires 3 days after it is created. Once expired, Cloud KMS will no longer be able to import or unwrap any key material that was wrapped with the ImportJob\'s public key. For more information, see [Importing a key](https://cloud.google.com/kms/docs/importing-a-key).',
    required: [],
  })
  .openapi('ImportJob')

const KeyRingSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this KeyRing was created.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name for the KeyRing in the format `projects/*/locations/*/keyRings/*`.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A KeyRing is a toplevel logical grouping of CryptoKeys.', required: [] })
  .openapi('KeyRing')

const ListCryptoKeyVersionsResponseSchema = z
  .object({
    cryptoKeyVersions: z
      .array(CryptoKeyVersionSchema)
      .exactOptional()
      .openapi({ description: 'The list of CryptoKeyVersions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in ListCryptoKeyVersionsRequest.page_token to retrieve the next page of results.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of CryptoKeyVersions that matched the query.' }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.ListCryptoKeyVersions.',
    required: [],
  })
  .openapi('ListCryptoKeyVersionsResponse')

const ListCryptoKeysResponseSchema = z
  .object({
    cryptoKeys: z
      .array(CryptoKeySchema)
      .exactOptional()
      .openapi({ description: 'The list of CryptoKeys.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in ListCryptoKeysRequest.page_token to retrieve the next page of results.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of CryptoKeys that matched the query.' }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.ListCryptoKeys.',
    required: [],
  })
  .openapi('ListCryptoKeysResponse')

const ListEkmConnectionsResponseSchema = z
  .object({
    ekmConnections: z
      .array(EkmConnectionSchema)
      .exactOptional()
      .openapi({ description: 'The list of EkmConnections.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in ListEkmConnectionsRequest.page_token to retrieve the next page of results.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of EkmConnections that matched the query.' }),
  })
  .openapi({ description: 'Response message for EkmService.ListEkmConnections.', required: [] })
  .openapi('ListEkmConnectionsResponse')

const ListImportJobsResponseSchema = z
  .object({
    importJobs: z
      .array(ImportJobSchema)
      .exactOptional()
      .openapi({ description: 'The list of ImportJobs.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in ListImportJobsRequest.page_token to retrieve the next page of results.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of ImportJobs that matched the query.' }),
  })
  .openapi({
    description: 'Response message for KeyManagementService.ListImportJobs.',
    required: [],
  })
  .openapi('ListImportJobsResponse')

const ListKeyRingsResponseSchema = z
  .object({
    keyRings: z
      .array(KeyRingSchema)
      .exactOptional()
      .openapi({ description: 'The list of KeyRings.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve next page of results. Pass this value in ListKeyRingsRequest.page_token to retrieve the next page of results.',
      }),
    totalSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of KeyRings that matched the query.' }),
  })
  .openapi({ description: 'Response message for KeyManagementService.ListKeyRings.', required: [] })
  .openapi('ListKeyRingsResponse')

const LocationSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly name for this location, typically a nearby city name. For example, "Tokyo".',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"}',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The canonical id for this location. For example: `"us-east1"`.' }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata. For example the available capacity at the given location.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`',
      }),
  })
  .openapi({
    description: 'A resource that represents Google Cloud Platform location.',
    required: [],
  })
  .openapi('Location')

const ListLocationsResponseSchema = z
  .object({
    locations: z
      .array(LocationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of locations that matches the specified filter in the request.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
  })
  .openapi({ description: 'The response message for Locations.ListLocations.', required: [] })
  .openapi('ListLocationsResponse')

const LocationMetadataSchema = z
  .object({
    ekmAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether CryptoKeys with protection_level EXTERNAL can be created in this location.',
      }),
    hsmAvailable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether CryptoKeys with protection_level HSM can be created in this location.',
      }),
  })
  .openapi({
    description: 'Cloud KMS metadata for the given google.cloud.location.Location.',
    required: [],
  })
  .openapi('LocationMetadata')

const MacSignRequestSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The data to sign. The MAC tag is computed over this data field based on the specific algorithm.',
      }),
    dataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the MacSignRequest.data. If specified, KeyManagementService will verify the integrity of the received MacSignRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacSignRequest.data) is equal to MacSignRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({ description: 'Request message for KeyManagementService.MacSign.', required: [] })
  .openapi('MacSignRequest')

const MacSignResponseSchema = z
  .object({
    mac: z.string().exactOptional().openapi({ description: 'The created signature.' }),
    macCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion used for signing.' }),
    verifiedDataCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
  })
  .openapi({ description: 'Response message for KeyManagementService.MacSign.', required: [] })
  .openapi('MacSignResponse')

const MacVerifyRequestSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The data used previously as a MacSignRequest.data to generate the MAC tag.',
      }),
    dataCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the MacVerifyRequest.data. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.data using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.data) is equal to MacVerifyRequest.data_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
    mac: z.string().exactOptional().openapi({ description: 'Required. The signature to verify.' }),
    macCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. An optional CRC32C checksum of the MacVerifyRequest.mac. If specified, KeyManagementService will verify the integrity of the received MacVerifyRequest.mac using this checksum. KeyManagementService will report an error if the checksum verification fails. If you receive a checksum error, your client should verify that CRC32C(MacVerifyRequest.tag) is equal to MacVerifyRequest.mac_crc32c, and if so, perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.',
      }),
  })
  .openapi({ description: 'Request message for KeyManagementService.MacVerify.', required: [] })
  .openapi('MacVerifyRequest')

const MacVerifyResponseSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the CryptoKeyVersion used for verification. Check this field to verify that the intended resource was used for verification.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({
        description: 'The ProtectionLevel of the CryptoKeyVersion used for verification.',
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'This field indicates whether or not the verification operation for MacVerifyRequest.mac over MacVerifyRequest.data was successful.',
      }),
    verifiedDataCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether MacVerifyRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
    verifiedMacCrc32c: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Integrity verification field. A flag indicating whether MacVerifyRequest.mac_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacVerifyRequest.mac_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacVerifyRequest.mac_crc32c but this field is still false, discard the response and perform a limited number of retries.",
      }),
    verifiedSuccessIntegrity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. This value is used for the integrity verification of [MacVerifyResponse.success]. If the value of this field contradicts the value of [MacVerifyResponse.success], discard the response and perform a limited number of retries.',
      }),
  })
  .openapi({ description: 'Response message for KeyManagementService.MacVerify.', required: [] })
  .openapi('MacVerifyResponse')

const PolicySchema = z
  .object({
    auditConfigs: z
      .array(AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(BindingSchema)
      .exactOptional()
      .openapi({
        description:
          'Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.',
      }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.',
      }),
    version: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
      }),
  })
  .openapi({
    description:
      'An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp(\'2020-10-01T00:00:00.000Z\')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp(\'2020-10-01T00:00:00.000Z\') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).',
    required: [],
  })
  .openapi('Policy')

const PublicKeySchema = z
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
      .openapi({ description: 'The Algorithm associated with this key.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the CryptoKeyVersion public key. Provided here for verification. NOTE: This field is in Beta.',
      }),
    pem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The public key, encoded in PEM format. For more information, see the [RFC 7468](https://tools.ietf.org/html/rfc7468) sections for [General Considerations](https://tools.ietf.org/html/rfc7468#section-2) and [Textual Encoding of Subject Public Key Info] (https://tools.ietf.org/html/rfc7468#section-13).',
      }),
    pemCrc32c: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Integrity verification field. A CRC32C checksum of the returned PublicKey.pem. An integrity check of PublicKey.pem can be performed by computing the CRC32C checksum of PublicKey.pem and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type. NOTE: This field is in Beta.',
      }),
    protectionLevel: z
      .enum(['PROTECTION_LEVEL_UNSPECIFIED', 'SOFTWARE', 'HSM', 'EXTERNAL', 'EXTERNAL_VPC'])
      .exactOptional()
      .openapi({ description: 'The ProtectionLevel of the CryptoKeyVersion public key.' }),
  })
  .openapi({
    description: 'The public key for a given CryptoKeyVersion. Obtained via GetPublicKey.',
    required: [],
  })
  .openapi('PublicKey')

const RestoreCryptoKeyVersionRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for KeyManagementService.RestoreCryptoKeyVersion.' })
  .openapi('RestoreCryptoKeyVersionRequest')

const SetIamPolicyRequestSchema = z
  .object({
    policy: PolicySchema.exactOptional().openapi({
      description:
        'REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"`',
      }),
  })
  .openapi({ description: 'Request message for `SetIamPolicy` method.', required: [] })
  .openapi('SetIamPolicyRequest')

const TestIamPermissionsRequestSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).',
      }),
  })
  .openapi({ description: 'Request message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsRequest')

const TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('TestIamPermissionsResponse')

const UpdateCryptoKeyPrimaryVersionRequestSchema = z
  .object({
    cryptoKeyVersionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The id of the child CryptoKeyVersion to use as primary.',
      }),
  })
  .openapi({
    description: 'Request message for KeyManagementService.UpdateCryptoKeyPrimaryVersion.',
    required: [],
  })
  .openapi('UpdateCryptoKeyPrimaryVersionRequest')

const VerifyConnectivityResponseSchema = z
  .object({})
  .openapi({ description: 'Response message for EkmService.VerifyConnectivity.' })
  .openapi('VerifyConnectivityResponse')

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
        'https://www.googleapis.com/auth/cloudkms':
          'View and manage your keys and secrets stored in Cloud Key Management Service',
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
        'https://www.googleapis.com/auth/cloudkms':
          'View and manage your keys and secrets stored in Cloud Key Management Service',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postV1LocationGenerateRandomBytesRoute = createRoute({
  method: 'post',
  path: '/v1/{location}:generateRandomBytes',
  tags: ['projects'],
  description:
    'Generate random bytes using the Cloud KMS randomness source in the provided location.',
  operationId: 'cloudkms.projects.locations.generateRandomBytes',
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
      location: z
        .string()
        .openapi({
          param: {
            description:
              'The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1".',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenerateRandomBytesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenerateRandomBytesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Returns metadata for a given ImportJob.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.get',
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
            description: 'Required. The name of the ImportJob to get.',
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
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    "Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.",
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. List of fields to be updated in this request.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CryptoKeyVersionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeyVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'cloudkms.projects.locations.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).',
            in: 'query',
            name: 'filter',
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
              'The maximum number of results to return. If not set, the service selects a default.',
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
              'A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The resource that owns the locations collection, if applicable.',
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
      content: { 'application/json': { schema: ListLocationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1NamePublicKeyRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/publicKey',
  tags: ['projects'],
  description:
    'Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey',
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
            description: 'Required. The name of the CryptoKeyVersion public key to get.',
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
      content: { 'application/json': { schema: PublicKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameAsymmetricDecryptRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:asymmetricDecrypt',
  tags: ['projects'],
  description:
    'Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.',
  operationId:
    'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt',
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
            description:
              'Required. The resource name of the CryptoKeyVersion to use for decryption.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AsymmetricDecryptRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AsymmetricDecryptResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameAsymmetricSignRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:asymmetricSign',
  tags: ['projects'],
  description:
    'Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign',
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
            description: 'Required. The resource name of the CryptoKeyVersion to use for signing.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AsymmetricSignRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AsymmetricSignResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameDecryptRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:decrypt',
  tags: ['projects'],
  description:
    'Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.decrypt',
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
            description:
              'Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DecryptRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DecryptResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameDestroyRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:destroy',
  tags: ['projects'],
  description:
    'Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy',
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
            description: 'Required. The resource name of the CryptoKeyVersion to destroy.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DestroyCryptoKeyVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeyVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameEncryptRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:encrypt',
  tags: ['projects'],
  description:
    'Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.encrypt',
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
            description:
              'Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EncryptRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EncryptResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameMacSignRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:macSign',
  tags: ['projects'],
  description:
    'Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign',
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
            description: 'Required. The resource name of the CryptoKeyVersion to use for signing.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MacSignRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MacSignResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameMacVerifyRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:macVerify',
  tags: ['projects'],
  description:
    'Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify',
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
            description:
              'Required. The resource name of the CryptoKeyVersion to use for verification.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MacVerifyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MacVerifyResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameRestoreRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:restore',
  tags: ['projects'],
  description:
    'Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore',
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
            description: 'Required. The resource name of the CryptoKeyVersion to restore.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RestoreCryptoKeyVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeyVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1NameUpdatePrimaryVersionRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:updatePrimaryVersion',
  tags: ['projects'],
  description:
    'Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion',
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
            description: 'Required. The resource name of the CryptoKey to update.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCryptoKeyPrimaryVersionRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1NameVerifyConnectivityRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:verifyConnectivity',
  tags: ['projects'],
  description:
    'Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.',
  operationId: 'cloudkms.projects.locations.ekmConnections.verifyConnectivity',
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
            description: 'Required. The name of the EkmConnection to verify.',
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
      content: { 'application/json': { schema: VerifyConnectivityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ParentCryptoKeyVersionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/cryptoKeyVersions',
  tags: ['projects'],
  description: 'Lists CryptoKeyVersions.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'orderBy',
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
              'Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.',
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
              'Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The fields to include in the response.',
            in: 'query',
            name: 'view',
            schema: { enum: ['CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED', 'FULL'], type: 'string' },
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
              'Required. The resource name of the CryptoKey to list, in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`.',
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
      content: { 'application/json': { schema: ListCryptoKeyVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentCryptoKeyVersionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/cryptoKeyVersions',
  tags: ['projects'],
  description:
    'Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the CryptoKey associated with the CryptoKeyVersions.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CryptoKeyVersionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeyVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentCryptoKeyVersionsImportRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/cryptoKeyVersions:import',
  tags: ['projects'],
  description:
    'Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import',
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
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportCryptoKeyVersionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeyVersionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ParentCryptoKeysRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/cryptoKeys',
  tags: ['projects'],
  description: 'Lists CryptoKeys.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'orderBy',
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
              'Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.',
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
              'Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      versionView: z
        .enum(['CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The fields of the primary version to include in the response.',
            in: 'query',
            name: 'versionView',
            schema: { enum: ['CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED', 'FULL'], type: 'string' },
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
              'Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`.',
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
      content: { 'application/json': { schema: ListCryptoKeysResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentCryptoKeysRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/cryptoKeys',
  tags: ['projects'],
  description:
    'Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.',
  operationId: 'cloudkms.projects.locations.keyRings.cryptoKeys.create',
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
      cryptoKeyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`',
            in: 'query',
            name: 'cryptoKeyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skipInitialVersionCreation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey.',
            in: 'query',
            name: 'skipInitialVersionCreation',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the KeyRing associated with the CryptoKeys.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CryptoKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CryptoKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ParentEkmConnectionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/ekmConnections',
  tags: ['projects'],
  description: 'Lists EkmConnections.',
  operationId: 'cloudkms.projects.locations.ekmConnections.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'orderBy',
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
              'Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.',
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
              'Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token.',
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
              'Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListEkmConnectionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentEkmConnectionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/ekmConnections',
  tags: ['projects'],
  description: 'Creates a new EkmConnection in a given Project and Location.',
  operationId: 'cloudkms.projects.locations.ekmConnections.create',
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
      ekmConnectionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.',
            in: 'query',
            name: 'ekmConnectionId',
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
              'Required. The resource name of the location associated with the EkmConnection, in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EkmConnectionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EkmConnectionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ParentImportJobsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/importJobs',
  tags: ['projects'],
  description: 'Lists ImportJobs.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'orderBy',
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
              'Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.',
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
              'Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token.',
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
              'Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`.',
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
      content: { 'application/json': { schema: ListImportJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentImportJobsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/importJobs',
  tags: ['projects'],
  description: 'Create a new ImportJob within a KeyRing. ImportJob.import_method is required.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.create',
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
      importJobId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}`',
            in: 'query',
            name: 'importJobId',
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
            description: 'Required. The name of the KeyRing associated with the ImportJobs.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportJobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ImportJobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ParentKeyRingsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/keyRings',
  tags: ['projects'],
  description: 'Lists KeyRings.',
  operationId: 'cloudkms.projects.locations.keyRings.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering).',
            in: 'query',
            name: 'orderBy',
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
              'Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default.',
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
              'Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token.',
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
              'Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListKeyRingsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ParentKeyRingsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keyRings',
  tags: ['projects'],
  description: 'Create a new KeyRing in a given Project and Location.',
  operationId: 'cloudkms.projects.locations.keyRings.create',
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
      keyRingId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`',
            in: 'query',
            name: 'keyRingId',
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
              'Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: KeyRingSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: KeyRingSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const getV1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1/{resource}:getIamPolicy',
  tags: ['projects'],
  description:
    'Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.getIamPolicy',
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
      'options.requestedPolicyVersion': z
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
              'Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).',
            in: 'query',
            name: 'options.requestedPolicyVersion',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:setIamPolicy',
  tags: ['projects'],
  description:
    'Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.setIamPolicy',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})

export const postV1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:testIamPermissions',
  tags: ['projects'],
  description:
    'Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.',
  operationId: 'cloudkms.projects.locations.keyRings.importJobs.testIamPermissions',
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
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TestIamPermissionsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/cloudkms'],
      Oauth2c: ['https://www.googleapis.com/auth/cloudkms'],
    },
  ],
})
