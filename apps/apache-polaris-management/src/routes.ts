import { createRoute, z } from '@hono/zod-openapi'

const StorageConfigInfoSchema = z
  .object({
    storageType: z
      .enum(['S3', 'GCS', 'AZURE', 'FILE'])
      .openapi({
        description:
          'The cloud provider type this storage is built on. FILE is supported for testing purposes only',
      }),
    allowedLocations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        examples: [
          'For AWS [s3://bucketname/prefix/], for AZURE [abfss://container@storageaccount.blob.core.windows.net/prefix/], for GCP [gs://bucketname/prefix/]',
        ],
      }),
    storageName: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional name referencing a server-side storage configuration' }),
  })
  .openapi({
    description: 'A storage configuration used by catalogs',
    required: ['storageType'],
    discriminator: {
      propertyName: 'storageType',
      mapping: {
        S3: '#/components/schemas/AwsStorageConfigInfo',
        AZURE: '#/components/schemas/AzureStorageConfigInfo',
        GCS: '#/components/schemas/GcpStorageConfigInfo',
        FILE: '#/components/schemas/FileStorageConfigInfo',
      },
    },
  })
  .openapi('StorageConfigInfo')

const CatalogSchema = z
  .object({
    type: z
      .enum(['INTERNAL', 'EXTERNAL'])
      .default('INTERNAL')
      .openapi({ description: 'the type of catalog - internal or external' }),
    name: z
      .string()
      .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
      .min(1)
      .max(256)
      .openapi({ description: 'The name of the catalog' }),
    properties: z
      .object({ 'default-base-location': z.string() })
      .catchall(z.string())
      .openapi({ 'x-polaris-skip-valid-annotation': true, required: ['default-base-location'] }),
    createTimestamp: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The creation time represented as unix epoch timestamp in milliseconds',
      }),
    lastUpdateTimestamp: z
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
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The last update time represented as unix epoch timestamp in milliseconds',
      }),
    entityVersion: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The version of the catalog object used to determine if the catalog metadata has changed',
      }),
    storageConfigInfo: StorageConfigInfoSchema,
  })
  .openapi({
    description:
      'A catalog object. A catalog may be internal or external. External catalogs are managed entirely by an external catalog interface. Third party catalogs may be other Iceberg REST implementations or other services with their own proprietary APIs',
    required: ['name', 'type', 'storageConfigInfo', 'properties'],
    discriminator: {
      propertyName: 'type',
      mapping: {
        INTERNAL: '#/components/schemas/PolarisCatalog',
        EXTERNAL: '#/components/schemas/ExternalCatalog',
      },
    },
  })
  .openapi('Catalog')

const CatalogsSchema = z
  .object({ catalogs: z.array(CatalogSchema) })
  .openapi({ description: 'A list of Catalog objects', required: ['catalogs'] })
  .openapi('Catalogs')

const CreateCatalogRequestSchema = z
  .object({ catalog: CatalogSchema })
  .openapi({ description: 'Request to create a new catalog', required: ['catalog'] })
  .openapi('CreateCatalogRequest')

const PolarisCatalogSchema = CatalogSchema.openapi({
  description:
    'The base catalog type - this contains all the fields necessary to construct an INTERNAL catalog',
}).openapi('PolarisCatalog')

const AuthenticationParametersSchema = z
  .object({
    authenticationType: z
      .enum(['OAUTH', 'BEARER', 'SIGV4', 'IMPLICIT', 'GCP'])
      .openapi({
        description: 'The type of authentication to use when connecting to the remote rest service',
      }),
  })
  .openapi({
    description: 'Authentication-specific information for a connection',
    required: ['authenticationType'],
    discriminator: {
      propertyName: 'authenticationType',
      mapping: {
        OAUTH: '#/components/schemas/OAuthClientCredentialsParameters',
        BEARER: '#/components/schemas/BearerAuthenticationParameters',
        SIGV4: '#/components/schemas/SigV4AuthenticationParameters',
        IMPLICIT: '#/components/schemas/ImplicitAuthenticationParameters',
        GCP: '#/components/schemas/GcpAuthenticationParameters',
      },
    },
  })
  .openapi('AuthenticationParameters')

const ServiceIdentityInfoSchema = z
  .object({
    identityType: z
      .literal('AWS_IAM')
      .openapi({ description: 'The type of identity used to access external resources' }),
  })
  .openapi({
    description: 'Identity metadata for the Polaris service used to access external resources.',
    readOnly: true,
    required: ['identityType'],
    discriminator: {
      propertyName: 'identityType',
      mapping: { AWS_IAM: '#/components/schemas/AwsIamServiceIdentityInfo' },
    },
  })
  .openapi('ServiceIdentityInfo')

const ConnectionConfigInfoSchema = z
  .object({
    connectionType: z
      .enum(['ICEBERG_REST', 'HADOOP', 'HIVE', 'BIGQUERY'])
      .openapi({
        description: 'The type of remote catalog service represented by this connection',
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI to the remote catalog service. Required for ICEBERG_REST and HIVE. Optional for\nBIGQUERY, where it defaults to the public BigQuery endpoint. `uri` is ignored for HADOOP.\n',
      }),
    authenticationParameters: AuthenticationParametersSchema.exactOptional(),
    serviceIdentity: ServiceIdentityInfoSchema.exactOptional(),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Additional connection properties' }),
  })
  .openapi({
    description:
      'A connection configuration representing a remote catalog service. IMPORTANT - Specifying a ConnectionConfigInfo in an ExternalCatalog is currently an experimental API and is subject to change. The authenticationParameters field is required when creating an external catalog; a request without it is rejected with HTTP 400.',
    required: ['connectionType'],
    discriminator: {
      propertyName: 'connectionType',
      mapping: {
        ICEBERG_REST: '#/components/schemas/IcebergRestConnectionConfigInfo',
        HADOOP: '#/components/schemas/HadoopConnectionConfigInfo',
        HIVE: '#/components/schemas/HiveConnectionConfigInfo',
        BIGQUERY: '#/components/schemas/BigQueryMetastoreConnectionConfigInfo',
      },
    },
  })
  .openapi('ConnectionConfigInfo')

const ExternalCatalogSchema = CatalogSchema.and(
  z
    .object({ connectionConfigInfo: ConnectionConfigInfoSchema.exactOptional() })
    .openapi({ required: [] }),
)
  .openapi({ description: 'An externally managed catalog' })
  .openapi('ExternalCatalog')

const IcebergRestConnectionConfigInfoSchema = ConnectionConfigInfoSchema.and(
  z
    .object({
      remoteCatalogName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "The name of a remote catalog instance within the remote catalog service; in some older systems this is specified as the 'warehouse' when multiple logical catalogs are served under the same base uri, and often translates into a 'prefix' added to all REST resource paths",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Configuration necessary for connecting to an Iceberg REST Catalog' })
  .openapi('IcebergRestConnectionConfigInfo')

const HadoopConnectionConfigInfoSchema = ConnectionConfigInfoSchema.and(
  z
    .object({
      warehouse: z
        .string()
        .exactOptional()
        .openapi({ description: 'The file path to where this catalog should store tables' }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'Configuration necessary for connecting to a Hadoop Catalog. The catalog is initialized from\n`warehouse`; `uri` is ignored.\n',
  })
  .openapi('HadoopConnectionConfigInfo')

const HiveConnectionConfigInfoSchema = ConnectionConfigInfoSchema.and(
  z
    .object({
      warehouse: z
        .string()
        .exactOptional()
        .openapi({ description: 'The warehouse location for the hive catalog.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Configuration necessary for connecting to a Hive Catalog' })
  .openapi('HiveConnectionConfigInfo')

const BigQueryMetastoreConnectionConfigInfoSchema = ConnectionConfigInfoSchema.openapi({
  description:
    'Configuration necessary for connecting to a BigQuery Metastore Catalog.\nRequired properties in the properties map:\n- gcp.bigquery.project-id: The GCP project ID\n- warehouse: The warehouse location for the BigQuery Metastore Catalog\n',
}).openapi('BigQueryMetastoreConnectionConfigInfo')

const GcpAuthenticationParametersSchema = AuthenticationParametersSchema.openapi({
  description: 'Uses GCP authentication from the Iceberg codebase',
}).openapi('GcpAuthenticationParameters')

const OAuthClientCredentialsParametersSchema = AuthenticationParametersSchema.and(
  z
    .object({
      tokenUri: z.string().exactOptional().openapi({ description: 'Token server URI' }),
      clientId: z.string().exactOptional().openapi({ description: 'oauth client id' }),
      clientSecret: z
        .string()
        .exactOptional()
        .openapi({ description: 'oauth client secret (input-only)' }),
      scopes: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description: 'oauth scopes to specify when exchanging for a short-lived access token',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'OAuth authentication based on client_id/client_secret' })
  .openapi('OAuthClientCredentialsParameters')

const BearerAuthenticationParametersSchema = AuthenticationParametersSchema.and(
  z
    .object({
      bearerToken: z.string().exactOptional().openapi({ description: 'Bearer token (input-only)' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'Bearer authentication directly embedded in request auth headers' })
  .openapi('BearerAuthenticationParameters')

const SigV4AuthenticationParametersSchema = AuthenticationParametersSchema.and(
  z
    .object({
      roleArn: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The AWS IAM role ARN assumed by Polaris when signing requests through STS.',
          example: 'arn:aws:iam::123456789001:role/role-that-has-remote-catalog-access',
        }),
      storageName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The name of a server-side AWS credential. Polaris uses it to sign requests directly when roleArn is missing. It is ignored when roleArn is set. Applies to any SigV4 Iceberg REST catalog, including AWS services such as Glue.',
          example: 'my-sigv4-catalog',
        }),
      roleSessionName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The role session name to be used by the SigV4 protocol for signing requests',
          examples: ['polaris-remote-catalog-access'],
        }),
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An optional external id used to establish a trust relationship with AWS in the trust policy',
          examples: ['external-id-1234'],
        }),
      signingRegion: z
        .string()
        .openapi({
          description: 'Region to be used by the SigV4 protocol for signing requests',
          examples: ['us-west-2'],
        }),
      signingName: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'The service name to be used by the SigV4 protocol for signing requests, the default signing name is "execute-api" is if not provided',
          examples: ['glue'],
        }),
      sessionPolicy: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "An optional IAM session policy (JSON) attached to the STS AssumeRole request. This policy intersects with the IAM role's permissions to further restrict the vended credentials. When omitted, no session policy is applied and the credentials inherit the full permissions of the assumed role.",
          examples: [
            '{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Action":["glue:*","s3:GetObject","s3:ListBucket"],"Resource":"*"}]}',
          ],
        }),
      stsEndpoint: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'An optional STS endpoint URI used by Polaris to call AWS STS AssumeRole for this connection. When omitted, the default AWS STS endpoint for the signing region is used. Must be an absolute http or https URI.',
          examples: ['https://sts.example.com:1234'],
        }),
    })
    .openapi({ required: ['signingRegion'] }),
)
  .openapi({ description: 'AWS Signature Version 4 authentication', required: ['signingRegion'] })
  .openapi('SigV4AuthenticationParameters')

const ImplicitAuthenticationParametersSchema = AuthenticationParametersSchema.openapi({
  description:
    'Polaris does not explicitly accept any authentication parameters for the connection. Authentication parameters found in the environment and/or configuration files will be used for this connection.',
}).openapi('ImplicitAuthenticationParameters')

const AwsStorageConfigInfoSchema = StorageConfigInfoSchema.and(
  z
    .object({
      roleArn: z
        .string()
        .exactOptional()
        .openapi({
          description: 'the aws role arn that grants privileges on the S3 buckets',
          examples: ['arn:aws:iam::123456789001:principal/abc1-b-self1234'],
        }),
      externalId: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'an optional external id used to establish a trust relationship with AWS in the trust policy',
        }),
      userArn: z
        .string()
        .exactOptional()
        .openapi({
          description: 'the aws user arn used to assume the aws role',
          examples: ['arn:aws:iam::123456789001:user/abc1-b-self1234'],
        }),
      currentKmsKey: z
        .string()
        .exactOptional()
        .openapi({
          deprecated: true,
          description:
            'Deprecated. Use encryptionKeys instead. The AWS KMS key ARN used to encrypt and decrypt S3 data.',
          examples: ['arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012'],
        }),
      allowedKmsKeys: z
        .array(z.string())
        .exactOptional()
        .openapi({
          deprecated: true,
          description:
            'Deprecated. Use encryptionKeys instead. The list of KMS keys that this catalog and its clients may use to encrypt and decrypt S3 data.',
          examples: [
            ['arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012'],
          ],
        }),
      encryptionKeys: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'A list of KMS keys that can be used to encrypt S3 data. These keys are also granted decryption permissions.',
          examples: [
            ['arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012'],
          ],
        }),
      decryptionKeys: z
        .array(z.string())
        .exactOptional()
        .openapi({
          description:
            'A list of KMS keys that can be used to decrypt S3 data. Keeping this list separate from encryptionKeys is recommended, though overlapping keys are allowed.',
          examples: [
            ['arn:aws:kms:us-east-1:123456789001:key/12345678-1234-1234-1234-123456789012'],
          ],
        }),
      region: z
        .string()
        .exactOptional()
        .openapi({ description: 'the aws region where data is stored', examples: ['us-east-2'] }),
      endpoint: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'endpoint for S3 requests (optional). Clients always see this value (if it is set). Polaris Servers may be configured to use a different endpoint URI via the `endpointInternal` property.',
          examples: ['https://s3.example.com:1234'],
        }),
      stsEndpoint: z
        .string()
        .exactOptional()
        .openapi({
          description:
            "endpoint for STS requests made by the Polaris Server (optional). If not set, defaults to 'endpointInternal' (which in turn defaults to `endpoint`).",
          examples: ['https://sts.example.com:1234'],
        }),
      stsUnavailable: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'if set to `true`, instructs Polaris Servers to avoid using the STS endpoints when obtaining credentials for accessing data and metadata files within the related catalog. Setting this property to `true` effectively disables vending storage credentials to clients. This setting is intended for configuring catalogs with S3-compatible storage implementations that do not support STS.',
        }),
      endpointInternal: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'endpoint for S3 requests made by the Polaris Server (optional). If set, Polaris Service will use this value instead of `endpoint`. If not set, defaults to `endpoint`. Iceberg REST API clients never see this value.',
          examples: ['https://s3.internal.example.com:1234'],
        }),
      pathStyleAccess: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            "Whether S3 requests to files in this catalog should use 'path-style addressing for buckets'.",
          examples: [true],
        }),
      kmsUnavailable: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'if set to `true`, instructs Polaris Servers to avoid adding KMS key policies.',
        }),
      credentialVendingMechanism: z
        .string()
        .exactOptional()
        .openapi({
          examples: ['STS'],
          description:
            "How Polaris vends subscoped storage credentials for this catalog. Leave the field empty\nto use the server's default mechanism, which is STS in Apache Polaris.\n\nApache Polaris supports these values:\n- `STS`: STS AssumeRole against the configured role.\n- `R2_LOCAL_SIGNING`: temporary Cloudflare R2 credentials that the server signs\n  locally, scoped to the table's location.\n\nLater releases may add values. The server returns HTTP 400 for a value it does not\nsupport.\n",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'aws storage configuration info' })
  .openapi('AwsStorageConfigInfo')

const AzureStorageConfigInfoSchema = StorageConfigInfoSchema.and(
  z
    .object({
      tenantId: z
        .string()
        .openapi({ description: 'the tenant id that the storage accounts belong to' }),
      multiTenantAppName: z
        .string()
        .exactOptional()
        .openapi({ description: 'the name of the azure client application' }),
      consentUrl: z
        .string()
        .exactOptional()
        .openapi({ description: 'URL to the Azure permissions request page' }),
      hierarchical: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            "If set to `true`, instructs Polaris Servers to scope SAS tokens down to the most specific path in the storage container (in most cases the table's base location). This flag should be set only if hierarchical namespace is enabled in the Azure storage account. Using this feature with  non-hierarchical storage will lead to storage authorization errors in runtime in most cases.",
        }),
    })
    .openapi({ required: ['tenantId'] }),
)
  .openapi({ description: 'azure storage configuration info' })
  .openapi('AzureStorageConfigInfo')

const GcpStorageConfigInfoSchema = StorageConfigInfoSchema.and(
  z
    .object({
      gcsServiceAccount: z
        .string()
        .exactOptional()
        .openapi({ description: 'a Google cloud storage service account' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ description: 'gcp storage configuration info' })
  .openapi('GcpStorageConfigInfo')

const FileStorageConfigInfoSchema = StorageConfigInfoSchema.openapi({
  description: 'file storage configuration info',
}).openapi('FileStorageConfigInfo')

const AwsIamServiceIdentityInfoSchema = ServiceIdentityInfoSchema.and(
  z
    .object({
      iamArn: z
        .string()
        .openapi({
          description:
            'The ARN of the IAM user or IAM role Polaris uses to assume roles and then access external resources.',
          examples: ['arn:aws:iam::111122223333:user/polaris-service-user'],
        }),
    })
    .openapi({ required: ['iamArn'] }),
)
  .openapi({ required: ['iamArn'] })
  .openapi('AwsIamServiceIdentityInfo')

const UpdateCatalogRequestSchema = z
  .object({
    currentEntityVersion: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.',
      }),
    properties: z.record(z.string(), z.string()).exactOptional(),
    storageConfigInfo: StorageConfigInfoSchema.exactOptional(),
  })
  .openapi({
    description:
      'Updates to apply to a Catalog. Any fields which are required in the Catalog will remain unaltered if omitted from the contents of this Update request.',
    required: [],
  })
  .openapi('UpdateCatalogRequest')

const PrincipalSchema = z
  .object({
    name: z
      .string()
      .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
      .min(1)
      .max(256),
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The output-only OAuth clientId associated with this principal if applicable',
      }),
    properties: z.record(z.string(), z.string()).exactOptional(),
    createTimestamp: z
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
    lastUpdateTimestamp: z
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
    entityVersion: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The version of the principal object used to determine if the principal metadata has changed',
      }),
  })
  .openapi({ description: 'A Polaris principal.', required: ['name'] })
  .openapi('Principal')

const PrincipalsSchema = z
  .object({ principals: z.array(PrincipalSchema) })
  .openapi({ description: 'A list of Principals', required: ['principals'] })
  .openapi('Principals')

const PrincipalWithCredentialsSchema = z
  .object({
    principal: PrincipalSchema,
    credentials: z
      .object({ clientId: z.string().exactOptional(), clientSecret: z.string().exactOptional() })
      .openapi({ required: [] }),
  })
  .openapi({
    description:
      'A user with its client id and secret. This type is returned when a new principal is created or when its credentials are rotated',
    required: ['principal', 'credentials'],
  })
  .openapi('PrincipalWithCredentials')

const CreatePrincipalRequestSchema = z
  .object({
    principal: PrincipalSchema.exactOptional(),
    credentialRotationRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'If true, the initial credentials can only be used to call rotateCredentials',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreatePrincipalRequest')

const UpdatePrincipalRequestSchema = z
  .object({
    currentEntityVersion: z
      .int()
      .openapi({
        description:
          'The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.',
      }),
    properties: z.record(z.string(), z.string()),
  })
  .openapi({
    description: 'Updates to apply to a Principal',
    required: ['currentEntityVersion', 'properties'],
  })
  .openapi('UpdatePrincipalRequest')

const ResetPrincipalRequestSchema = z
  .object({
    clientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional client ID to set for the principal. Must be a valid client ID previously generated by this service.\n',
      }),
    clientSecret: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional client secret to set for the principal. Polaris service implementations may impose extra requirements on what is accepted as a secret (special chars, length, etc.)\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResetPrincipalRequest')

const PrincipalRoleSchema = z
  .object({
    name: z
      .string()
      .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
      .min(1)
      .max(256)
      .openapi({ description: 'The name of the role' }),
    federated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Whether the principal role is a federated role (that is, managed by an external identity provider)',
      }),
    properties: z.record(z.string(), z.string()).exactOptional(),
    createTimestamp: z
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
    lastUpdateTimestamp: z
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
    entityVersion: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The version of the principal role object used to determine if the principal role metadata has changed',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('PrincipalRole')

const PrincipalRolesSchema = z
  .object({ roles: z.array(PrincipalRoleSchema) })
  .openapi({ required: ['roles'] })
  .openapi('PrincipalRoles')

const GrantPrincipalRoleRequestSchema = z
  .object({ principalRole: PrincipalRoleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GrantPrincipalRoleRequest')

const CreatePrincipalRoleRequestSchema = z
  .object({ principalRole: PrincipalRoleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreatePrincipalRoleRequest')

const UpdatePrincipalRoleRequestSchema = z
  .object({
    currentEntityVersion: z
      .int()
      .openapi({
        description:
          'The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.',
      }),
    properties: z.record(z.string(), z.string()),
  })
  .openapi({
    description: 'Updates to apply to a Principal Role',
    required: ['currentEntityVersion', 'properties'],
  })
  .openapi('UpdatePrincipalRoleRequest')

const CatalogRoleSchema = z
  .object({
    name: z
      .string()
      .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
      .min(1)
      .max(256)
      .openapi({ description: 'The name of the role' }),
    properties: z.record(z.string(), z.string()).exactOptional(),
    createTimestamp: z
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
    lastUpdateTimestamp: z
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
    entityVersion: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The version of the catalog role object used to determine if the catalog role metadata has changed',
      }),
  })
  .openapi({ required: ['name'] })
  .openapi('CatalogRole')

const CatalogRolesSchema = z
  .object({
    roles: z.array(CatalogRoleSchema).openapi({ description: 'The list of catalog roles' }),
  })
  .openapi({ required: ['roles'] })
  .openapi('CatalogRoles')

const GrantCatalogRoleRequestSchema = z
  .object({ catalogRole: CatalogRoleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GrantCatalogRoleRequest')

const CreateCatalogRoleRequestSchema = z
  .object({ catalogRole: CatalogRoleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateCatalogRoleRequest')

const UpdateCatalogRoleRequestSchema = z
  .object({
    currentEntityVersion: z
      .int()
      .openapi({
        description:
          'The version of the object onto which this update is applied; if the object changed, the update will fail and the caller should retry after fetching the latest version.',
      }),
    properties: z.record(z.string(), z.string()),
  })
  .openapi({
    description: 'Updates to apply to a Catalog Role',
    required: ['currentEntityVersion', 'properties'],
  })
  .openapi('UpdateCatalogRoleRequest')

const ViewPrivilegeSchema = z
  .enum([
    'CATALOG_MANAGE_ACCESS',
    'VIEW_DROP',
    'VIEW_LIST',
    'VIEW_READ_PROPERTIES',
    'VIEW_WRITE_PROPERTIES',
    'VIEW_FULL_METADATA',
    'VIEW_READ_LINEAGE',
    'VIEW_INGEST_LINEAGE',
  ])
  .openapi('ViewPrivilege')

const TablePrivilegeSchema = z
  .enum([
    'CATALOG_MANAGE_ACCESS',
    'TABLE_DROP',
    'TABLE_LIST',
    'TABLE_READ_PROPERTIES',
    'TABLE_WRITE_PROPERTIES',
    'TABLE_READ_DATA',
    'TABLE_WRITE_DATA',
    'TABLE_READ_METRICS',
    'TABLE_FULL_METADATA',
    'TABLE_ATTACH_POLICY',
    'TABLE_DETACH_POLICY',
    'TABLE_ASSIGN_UUID',
    'TABLE_UPGRADE_FORMAT_VERSION',
    'TABLE_ADD_SCHEMA',
    'TABLE_SET_CURRENT_SCHEMA',
    'TABLE_ADD_PARTITION_SPEC',
    'TABLE_ADD_SORT_ORDER',
    'TABLE_SET_DEFAULT_SORT_ORDER',
    'TABLE_ADD_SNAPSHOT',
    'TABLE_SET_SNAPSHOT_REF',
    'TABLE_REMOVE_SNAPSHOTS',
    'TABLE_REMOVE_SNAPSHOT_REF',
    'TABLE_SET_LOCATION',
    'TABLE_SET_PROPERTIES',
    'TABLE_REMOVE_PROPERTIES',
    'TABLE_SET_STATISTICS',
    'TABLE_REMOVE_STATISTICS',
    'TABLE_REMOVE_PARTITION_SPECS',
    'TABLE_MANAGE_STRUCTURE',
    'TABLE_READ_LINEAGE',
    'TABLE_INGEST_LINEAGE',
  ])
  .openapi('TablePrivilege')

const SemanticModelPrivilegeSchema = z
  .enum([
    'CATALOG_MANAGE_ACCESS',
    'SEMANTIC_MODEL_READ',
    'SEMANTIC_MODEL_WRITE',
    'SEMANTIC_MODEL_DROP',
    'SEMANTIC_MODEL_FULL_METADATA',
    'SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE',
  ])
  .openapi('SemanticModelPrivilege')

const PolicyPrivilegeSchema = z
  .enum([
    'CATALOG_MANAGE_ACCESS',
    'POLICY_READ',
    'POLICY_DROP',
    'POLICY_WRITE',
    'POLICY_LIST',
    'POLICY_FULL_METADATA',
    'POLICY_ATTACH',
    'POLICY_DETACH',
  ])
  .openapi('PolicyPrivilege')

const NamespacePrivilegeSchema = z
  .enum([
    'SEMANTIC_MODEL_LIST',
    'SEMANTIC_MODEL_CREATE',
    'SEMANTIC_MODEL_READ',
    'SEMANTIC_MODEL_WRITE',
    'SEMANTIC_MODEL_DROP',
    'SEMANTIC_MODEL_FULL_METADATA',
    'SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE',
    'CATALOG_MANAGE_ACCESS',
    'CATALOG_MANAGE_CONTENT',
    'CATALOG_MANAGE_METADATA',
    'NAMESPACE_CREATE',
    'TABLE_CREATE',
    'VIEW_CREATE',
    'NAMESPACE_DROP',
    'TABLE_DROP',
    'VIEW_DROP',
    'NAMESPACE_LIST',
    'TABLE_LIST',
    'VIEW_LIST',
    'NAMESPACE_READ_PROPERTIES',
    'TABLE_READ_PROPERTIES',
    'VIEW_READ_PROPERTIES',
    'NAMESPACE_WRITE_PROPERTIES',
    'TABLE_WRITE_PROPERTIES',
    'VIEW_WRITE_PROPERTIES',
    'TABLE_READ_DATA',
    'TABLE_WRITE_DATA',
    'TABLE_READ_METRICS',
    'NAMESPACE_FULL_METADATA',
    'TABLE_FULL_METADATA',
    'VIEW_FULL_METADATA',
    'POLICY_CREATE',
    'POLICY_WRITE',
    'POLICY_READ',
    'POLICY_DROP',
    'POLICY_LIST',
    'POLICY_FULL_METADATA',
    'NAMESPACE_ATTACH_POLICY',
    'NAMESPACE_DETACH_POLICY',
    'TABLE_ASSIGN_UUID',
    'TABLE_UPGRADE_FORMAT_VERSION',
    'TABLE_ADD_SCHEMA',
    'TABLE_SET_CURRENT_SCHEMA',
    'TABLE_ADD_PARTITION_SPEC',
    'TABLE_ADD_SORT_ORDER',
    'TABLE_SET_DEFAULT_SORT_ORDER',
    'TABLE_ADD_SNAPSHOT',
    'TABLE_SET_SNAPSHOT_REF',
    'TABLE_REMOVE_SNAPSHOTS',
    'TABLE_REMOVE_SNAPSHOT_REF',
    'TABLE_SET_LOCATION',
    'TABLE_SET_PROPERTIES',
    'TABLE_REMOVE_PROPERTIES',
    'TABLE_SET_STATISTICS',
    'TABLE_REMOVE_STATISTICS',
    'TABLE_REMOVE_PARTITION_SPECS',
    'TABLE_MANAGE_STRUCTURE',
    'TABLE_READ_LINEAGE',
    'TABLE_INGEST_LINEAGE',
    'VIEW_READ_LINEAGE',
    'VIEW_INGEST_LINEAGE',
  ])
  .openapi('NamespacePrivilege')

const CatalogPrivilegeSchema = z
  .enum([
    'SEMANTIC_MODEL_LIST',
    'SEMANTIC_MODEL_CREATE',
    'SEMANTIC_MODEL_READ',
    'SEMANTIC_MODEL_WRITE',
    'SEMANTIC_MODEL_DROP',
    'SEMANTIC_MODEL_FULL_METADATA',
    'SEMANTIC_MODEL_MANAGE_GRANTS_ON_SECURABLE',
    'CATALOG_MANAGE_ACCESS',
    'CATALOG_MANAGE_CONTENT',
    'CATALOG_MANAGE_METADATA',
    'CATALOG_READ_PROPERTIES',
    'CATALOG_READ_CONFIG',
    'CATALOG_WRITE_PROPERTIES',
    'NAMESPACE_CREATE',
    'TABLE_CREATE',
    'VIEW_CREATE',
    'NAMESPACE_DROP',
    'TABLE_DROP',
    'VIEW_DROP',
    'NAMESPACE_LIST',
    'TABLE_LIST',
    'VIEW_LIST',
    'NAMESPACE_READ_PROPERTIES',
    'TABLE_READ_PROPERTIES',
    'VIEW_READ_PROPERTIES',
    'NAMESPACE_WRITE_PROPERTIES',
    'TABLE_WRITE_PROPERTIES',
    'VIEW_WRITE_PROPERTIES',
    'TABLE_READ_DATA',
    'TABLE_WRITE_DATA',
    'TABLE_READ_METRICS',
    'NAMESPACE_FULL_METADATA',
    'TABLE_FULL_METADATA',
    'VIEW_FULL_METADATA',
    'POLICY_CREATE',
    'POLICY_WRITE',
    'POLICY_READ',
    'POLICY_DROP',
    'POLICY_LIST',
    'POLICY_FULL_METADATA',
    'CATALOG_ATTACH_POLICY',
    'CATALOG_DETACH_POLICY',
    'TABLE_ASSIGN_UUID',
    'TABLE_UPGRADE_FORMAT_VERSION',
    'TABLE_ADD_SCHEMA',
    'TABLE_SET_CURRENT_SCHEMA',
    'TABLE_ADD_PARTITION_SPEC',
    'TABLE_ADD_SORT_ORDER',
    'TABLE_SET_DEFAULT_SORT_ORDER',
    'TABLE_ADD_SNAPSHOT',
    'TABLE_SET_SNAPSHOT_REF',
    'TABLE_REMOVE_SNAPSHOTS',
    'TABLE_REMOVE_SNAPSHOT_REF',
    'TABLE_SET_LOCATION',
    'TABLE_SET_PROPERTIES',
    'TABLE_REMOVE_PROPERTIES',
    'TABLE_SET_STATISTICS',
    'TABLE_REMOVE_STATISTICS',
    'TABLE_REMOVE_PARTITION_SPECS',
    'TABLE_MANAGE_STRUCTURE',
    'TABLE_READ_LINEAGE',
    'TABLE_INGEST_LINEAGE',
    'VIEW_READ_LINEAGE',
    'VIEW_INGEST_LINEAGE',
  ])
  .openapi('CatalogPrivilege')

const GrantResourceSchema = z
  .object({ type: z.enum(['catalog', 'namespace', 'table', 'view', 'policy', 'semantic-model']) })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: {
        catalog: '#/components/schemas/CatalogGrant',
        namespace: '#/components/schemas/NamespaceGrant',
        table: '#/components/schemas/TableGrant',
        view: '#/components/schemas/ViewGrant',
        policy: '#/components/schemas/PolicyGrant',
        'semantic-model': '#/components/schemas/SemanticModelGrant',
      },
    },
    required: ['type'],
  })
  .openapi('GrantResource')

const AddGrantRequestSchema = z
  .object({ grant: GrantResourceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AddGrantRequest')

const RevokeGrantRequestSchema = z
  .object({ grant: GrantResourceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('RevokeGrantRequest')

const ViewGrantSchema = GrantResourceSchema.and(
  z
    .object({
      namespace: z.array(z.string()),
      viewName: z.string().min(1).max(256),
      privilege: ViewPrivilegeSchema,
    })
    .openapi({ required: ['namespace', 'viewName', 'privilege'] }),
).openapi('ViewGrant')

const TableGrantSchema = GrantResourceSchema.and(
  z
    .object({
      namespace: z.array(z.string()),
      tableName: z.string().min(1).max(256),
      privilege: TablePrivilegeSchema,
    })
    .openapi({ required: ['namespace', 'tableName', 'privilege'] }),
).openapi('TableGrant')

const SemanticModelGrantSchema = GrantResourceSchema.and(
  z
    .object({
      namespace: z.array(z.string()),
      semanticModelName: z.string().min(1).max(256),
      privilege: SemanticModelPrivilegeSchema,
    })
    .openapi({ required: ['namespace', 'semanticModelName', 'privilege'] }),
).openapi('SemanticModelGrant')

const PolicyGrantSchema = GrantResourceSchema.and(
  z
    .object({
      namespace: z.array(z.string()),
      policyName: z.string(),
      privilege: PolicyPrivilegeSchema,
    })
    .openapi({ required: ['namespace', 'policyName', 'privilege'] }),
).openapi('PolicyGrant')

const NamespaceGrantSchema = GrantResourceSchema.and(
  z
    .object({ namespace: z.array(z.string()), privilege: NamespacePrivilegeSchema })
    .openapi({ required: ['namespace', 'privilege'] }),
).openapi('NamespaceGrant')

const CatalogGrantSchema = GrantResourceSchema.and(
  z.object({ privilege: CatalogPrivilegeSchema }).openapi({ required: ['privilege'] }),
).openapi('CatalogGrant')

const GrantResourcesSchema = z
  .object({ grants: z.array(GrantResourceSchema) })
  .openapi({ required: ['grants'] })
  .openapi('GrantResources')

const OAuth2SecurityScheme = {
  type: 'oauth2',
  description: 'Uses OAuth 2 with client credentials flow',
  flows: { implicit: { authorizationUrl: '{scheme}://{host}/api/v1/oauth/tokens', scopes: {} } },
}

export const getCatalogsRoute = createRoute({
  method: 'get',
  path: '/catalogs',
  description: 'List all catalogs in this polaris service',
  operationId: 'listCatalogs',
  responses: {
    200: {
      description: 'List of catalogs in the polaris service',
      content: { 'application/json': { schema: CatalogsSchema } },
    },
    403: { description: 'The caller does not have permission to list catalog details' },
  },
})

export const postCatalogsRoute = createRoute({
  method: 'post',
  path: '/catalogs',
  description: 'Add a new Catalog',
  operationId: 'createCatalog',
  request: {
    body: {
      description: 'The Catalog to create',
      content: { 'application/json': { schema: CreateCatalogRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CatalogSchema } },
    },
    400: {
      description:
        'The request is invalid, for example an unsupported or incomplete storage or connection configuration',
    },
    403: { description: 'The caller does not have permission to create a catalog' },
    404: { description: 'The catalog does not exist' },
    409: { description: 'A catalog with the specified name already exists' },
  },
})

export const getCatalogsCatalogNameRoute = createRoute({
  method: 'get',
  path: '/catalogs/{catalogName}',
  description: 'Get the details of a catalog',
  operationId: 'getCatalog',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The name of the catalog',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The catalog details',
      content: { 'application/json': { schema: CatalogSchema } },
    },
    403: { description: 'The caller does not have permission to read catalog details' },
    404: { description: 'The catalog does not exist' },
  },
})

export const putCatalogsCatalogNameRoute = createRoute({
  method: 'put',
  path: '/catalogs/{catalogName}',
  description: 'Update an existing catalog',
  operationId: 'updateCatalog',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The name of the catalog',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: {
      description: 'The catalog details to use in the update',
      content: { 'application/json': { schema: UpdateCatalogRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The catalog details',
      content: { 'application/json': { schema: CatalogSchema } },
    },
    403: { description: 'The caller does not have permission to update catalog details' },
    404: { description: 'The catalog does not exist' },
    409: {
      description:
        "The entity version doesn't match the currentEntityVersion; retry after fetching latest version",
    },
  },
})

export const deleteCatalogsCatalogNameRoute = createRoute({
  method: 'delete',
  path: '/catalogs/{catalogName}',
  description: 'Delete an existing catalog. The catalog must be empty.',
  operationId: 'deleteCatalog',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The name of the catalog',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success, no content' },
    403: { description: 'The caller does not have permission to delete a catalog' },
    404: { description: 'The catalog does not exist' },
  },
})

export const getPrincipalsRoute = createRoute({
  method: 'get',
  path: '/principals',
  description: 'List the principals for the current catalog',
  operationId: 'listPrincipals',
  responses: {
    200: {
      description: 'List of principals for this catalog',
      content: { 'application/json': { schema: PrincipalsSchema } },
    },
    403: { description: 'The caller does not have permission to list catalog admins' },
    404: { description: 'The catalog does not exist' },
  },
})

export const postPrincipalsRoute = createRoute({
  method: 'post',
  path: '/principals',
  description: 'Create a principal',
  operationId: 'createPrincipal',
  request: {
    body: {
      description: 'The principal to create',
      content: {
        'application/json': {
          schema: CreatePrincipalRequestSchema,
          example: {
            principal: { name: 'alice', properties: { department: 'engineering' } },
            credentialRotationRequired: false,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrincipalWithCredentialsSchema } },
    },
    403: { description: 'The caller does not have permission to add a principal' },
  },
})

export const getPrincipalsPrincipalNameRoute = createRoute({
  method: 'get',
  path: '/principals/{principalName}',
  description: 'Get the principal details',
  operationId: 'getPrincipal',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The principal name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested principal',
      content: { 'application/json': { schema: PrincipalSchema } },
    },
    403: { description: 'The caller does not have permission to get principal details' },
    404: { description: 'The catalog or principal does not exist' },
  },
})

export const putPrincipalsPrincipalNameRoute = createRoute({
  method: 'put',
  path: '/principals/{principalName}',
  description: 'Update an existing principal',
  operationId: 'updatePrincipal',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The principal name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: {
      description: 'The principal details to use in the update',
      content: { 'application/json': { schema: UpdatePrincipalRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated principal',
      content: { 'application/json': { schema: PrincipalSchema } },
    },
    403: { description: 'The caller does not have permission to update principal details' },
    404: { description: 'The principal does not exist' },
    409: {
      description:
        "The entity version doesn't match the currentEntityVersion; retry after fetching latest version",
    },
  },
})

export const deletePrincipalsPrincipalNameRoute = createRoute({
  method: 'delete',
  path: '/principals/{principalName}',
  description: 'Remove a principal from polaris',
  operationId: 'deletePrincipal',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The principal name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success, no content' },
    403: { description: 'The caller does not have permission to delete a principal' },
    404: { description: 'The principal does not exist' },
  },
})

export const postPrincipalsPrincipalNameRotateRoute = createRoute({
  method: 'post',
  path: '/principals/{principalName}/rotate',
  description:
    "Rotate a principal's credentials. The new credentials will be returned in the response. This is the only API, aside from createPrincipal, that returns the user's credentials. This API is *not* idempotent.",
  operationId: 'rotateCredentials',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The user name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The principal details along with the newly rotated credentials',
      content: { 'application/json': { schema: PrincipalWithCredentialsSchema } },
    },
    403: { description: 'The caller does not have permission to rotate credentials' },
    404: { description: 'The principal does not exist' },
  },
})

export const postPrincipalsPrincipalNameResetRoute = createRoute({
  method: 'post',
  path: '/principals/{principalName}/reset',
  description:
    "Reset a principal's credentials to a new set. By default, the system generates random credentials unless explicitly allowed to accept user-provided credentials via configuration.   This API is *not* idempotent and will return the newly created credentials.",
  operationId: 'resetCredentials',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: "The principal's name",
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ResetPrincipalRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The principal details along with the newly reset credentials',
      content: { 'application/json': { schema: PrincipalWithCredentialsSchema } },
    },
    403: { description: 'The caller does not have permission to reset credentials' },
    404: { description: 'The principal does not exist' },
  },
})

export const getPrincipalsPrincipalNamePrincipalRolesRoute = createRoute({
  method: 'get',
  path: '/principals/{principalName}/principal-roles',
  description: 'List the roles assigned to the principal',
  operationId: 'listPrincipalRolesAssigned',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The name of the target principal',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of roles assigned to this principal',
      content: { 'application/json': { schema: PrincipalRolesSchema } },
    },
    403: { description: 'The caller does not have permission to list roles' },
    404: { description: 'The principal or catalog does not exist' },
  },
})

export const putPrincipalsPrincipalNamePrincipalRolesRoute = createRoute({
  method: 'put',
  path: '/principals/{principalName}/principal-roles',
  description: 'Add a role to the principal',
  operationId: 'assignPrincipalRole',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The name of the target principal',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: {
      description: 'The principal role to assign',
      content: { 'application/json': { schema: GrantPrincipalRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Successful response' },
    403: {
      description: 'The caller does not have permission to add assign a role to the principal',
    },
    404: { description: 'The catalog, the principal, or the role does not exist' },
  },
})

export const deletePrincipalsPrincipalNamePrincipalRolesPrincipalRoleNameRoute = createRoute({
  method: 'delete',
  path: '/principals/{principalName}/principal-roles/{principalRoleName}',
  description: 'Remove a role from a catalog principal',
  operationId: 'revokePrincipalRole',
  request: {
    params: z.object({
      principalName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalName',
            in: 'path',
            description: 'The name of the target principal',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The name of the role',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success, no content' },
    403: { description: 'The caller does not have permission to remove a role from the principal' },
    404: { description: 'The catalog or principal does not exist' },
  },
})

export const getPrincipalRolesRoute = createRoute({
  method: 'get',
  path: '/principal-roles',
  description: 'List the principal roles',
  operationId: 'listPrincipalRoles',
  responses: {
    200: {
      description: 'List of principal roles',
      content: { 'application/json': { schema: PrincipalRolesSchema } },
    },
    403: { description: 'The caller does not have permission to list principal roles' },
    404: { description: 'The catalog does not exist' },
  },
})

export const postPrincipalRolesRoute = createRoute({
  method: 'post',
  path: '/principal-roles',
  description: 'Create a principal role',
  operationId: 'createPrincipalRole',
  request: {
    body: {
      description: 'The principal to create',
      content: { 'application/json': { schema: CreatePrincipalRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: PrincipalRoleSchema } },
    },
    403: { description: 'The caller does not have permission to add a principal role' },
  },
})

export const getPrincipalRolesPrincipalRoleNameRoute = createRoute({
  method: 'get',
  path: '/principal-roles/{principalRoleName}',
  description: 'Get the principal role details',
  operationId: 'getPrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The requested principal role',
      content: { 'application/json': { schema: PrincipalRoleSchema } },
    },
    403: { description: 'The caller does not have permission to get principal role details' },
    404: { description: 'The principal role does not exist' },
  },
})

export const putPrincipalRolesPrincipalRoleNameRoute = createRoute({
  method: 'put',
  path: '/principal-roles/{principalRoleName}',
  description: 'Update an existing principalRole',
  operationId: 'updatePrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: {
      description: 'The principalRole details to use in the update',
      content: { 'application/json': { schema: UpdatePrincipalRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated principal role',
      content: { 'application/json': { schema: PrincipalRoleSchema } },
    },
    403: { description: 'The caller does not have permission to update principal role details' },
    404: { description: 'The principal role does not exist' },
    409: {
      description:
        "The entity version doesn't match the currentEntityVersion; retry after fetching latest version",
    },
  },
})

export const deletePrincipalRolesPrincipalRoleNameRoute = createRoute({
  method: 'delete',
  path: '/principal-roles/{principalRoleName}',
  description: 'Remove a principal role from polaris',
  operationId: 'deletePrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success, no content' },
    403: { description: 'The caller does not have permission to delete a principal role' },
    404: { description: 'The principal role does not exist' },
  },
})

export const getPrincipalRolesPrincipalRoleNamePrincipalsRoute = createRoute({
  method: 'get',
  path: '/principal-roles/{principalRoleName}/principals',
  description: 'List the Principals to whom the target principal role has been assigned',
  operationId: 'listAssigneePrincipalsForPrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List the Principals to whom the target principal role has been assigned',
      content: { 'application/json': { schema: PrincipalsSchema } },
    },
    403: { description: 'The caller does not have permission to list principals' },
    404: { description: 'The principal role does not exist' },
  },
})

export const getPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute = createRoute({
  method: 'get',
  path: '/principal-roles/{principalRoleName}/catalog-roles/{catalogName}',
  description: 'Get the catalog roles mapped to the principal role',
  operationId: 'listCatalogRolesForPrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the catalogRoles reside',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of catalog roles mapped to the principal role',
      content: { 'application/json': { schema: CatalogRolesSchema } },
    },
    403: { description: 'The caller does not have permission to list catalog roles' },
    404: { description: 'The principal role does not exist' },
  },
})

export const putPrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameRoute = createRoute({
  method: 'put',
  path: '/principal-roles/{principalRoleName}/catalog-roles/{catalogName}',
  description: 'Assign a catalog role to a principal role',
  operationId: 'assignCatalogRoleToPrincipalRole',
  request: {
    params: z.object({
      principalRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'principalRoleName',
            in: 'path',
            description: 'The principal role name',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the catalogRoles reside',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: {
      description: 'The principal to create',
      content: { 'application/json': { schema: GrantCatalogRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Successful response' },
    403: { description: 'The caller does not have permission to assign a catalog role' },
  },
})

export const deletePrincipalRolesPrincipalRoleNameCatalogRolesCatalogNameCatalogRoleNameRoute =
  createRoute({
    method: 'delete',
    path: '/principal-roles/{principalRoleName}/catalog-roles/{catalogName}/{catalogRoleName}',
    description: 'Remove a catalog role from a principal role',
    operationId: 'revokeCatalogRoleFromPrincipalRole',
    request: {
      params: z.object({
        principalRoleName: z
          .string()
          .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'principalRoleName',
              in: 'path',
              description: 'The principal role name',
              required: true,
              schema: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
                pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
              },
            },
          }),
        catalogName: z
          .string()
          .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'catalogName',
              in: 'path',
              description: 'The name of the catalog that contains the role to revoke',
              required: true,
              schema: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
                pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
              },
            },
          }),
        catalogRoleName: z
          .string()
          .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
          .min(1)
          .max(256)
          .openapi({
            param: {
              name: 'catalogRoleName',
              in: 'path',
              description: 'The name of the catalog role that should be revoked',
              required: true,
              schema: {
                type: 'string',
                minLength: 1,
                maxLength: 256,
                pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
              },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'Success, no content' },
      403: { description: 'The caller does not have permission to revoke a catalog role' },
      404: { description: 'The principal role does not exist' },
    },
  })

export const getCatalogsCatalogNameCatalogRolesRoute = createRoute({
  method: 'get',
  path: '/catalogs/{catalogName}/catalog-roles',
  description: 'List existing roles in the catalog',
  operationId: 'listCatalogRoles',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The catalog for which we are reading/updating roles',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of roles that exist in this catalog',
      content: { 'application/json': { schema: CatalogRolesSchema } },
    },
  },
})

export const postCatalogsCatalogNameCatalogRolesRoute = createRoute({
  method: 'post',
  path: '/catalogs/{catalogName}/catalog-roles',
  description: 'Create a new role in the catalog',
  operationId: 'createCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The catalog for which we are reading/updating roles',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateCatalogRoleRequestSchema } } },
  },
  responses: {
    201: {
      description: 'Successful response',
      content: { 'application/json': { schema: CatalogRoleSchema } },
    },
    403: { description: 'The principal is not authorized to create roles' },
    404: { description: 'The catalog does not exist' },
  },
})

export const getCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute = createRoute({
  method: 'get',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}',
  description: 'Get the details of an existing role',
  operationId: 'getCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The catalog for which we are retrieving roles',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            description: 'The name of the role',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The specified role details',
      content: { 'application/json': { schema: CatalogRoleSchema } },
    },
    403: { description: 'The principal is not authorized to read role data' },
    404: { description: 'The catalog or the role does not exist' },
  },
})

export const putCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute = createRoute({
  method: 'put',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}',
  description: 'Update an existing role in the catalog',
  operationId: 'updateCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The catalog for which we are retrieving roles',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            description: 'The name of the role',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateCatalogRoleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'The specified role details',
      content: { 'application/json': { schema: CatalogRoleSchema } },
    },
    403: { description: 'The principal is not authorized to update roles' },
    404: { description: 'The catalog or the role does not exist' },
    409: {
      description:
        "The entity version doesn't match the currentEntityVersion; retry after fetching latest version",
    },
  },
})

export const deleteCatalogsCatalogNameCatalogRolesCatalogRoleNameRoute = createRoute({
  method: 'delete',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}',
  description:
    'Delete an existing role from the catalog. All associated grants will also be deleted',
  operationId: 'deleteCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            description: 'The catalog for which we are retrieving roles',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            description: 'The name of the role',
            required: true,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success, no content' },
    403: { description: 'The principal is not authorized to delete roles' },
    404: { description: 'The catalog or the role does not exist' },
  },
})

export const getCatalogsCatalogNameCatalogRolesCatalogRoleNamePrincipalRolesRoute = createRoute({
  method: 'get',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}/principal-roles',
  description: 'List the PrincipalRoles to which the target catalog role has been assigned',
  operationId: 'listAssigneePrincipalRolesForCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the catalog role resides',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            required: true,
            description: 'The name of the catalog role',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List the PrincipalRoles to which the target catalog role has been assigned',
      content: { 'application/json': { schema: PrincipalRolesSchema } },
    },
    403: { description: 'The caller does not have permission to list principal roles' },
    404: { description: 'The catalog or catalog role does not exist' },
  },
})

export const getCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute = createRoute({
  method: 'get',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants',
  description: 'List the grants the catalog role holds',
  operationId: 'listGrantsForCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the role will receive the grant',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            required: true,
            description: 'The name of the role receiving the grant (must exist)',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of all grants given to the role in this catalog',
      content: { 'application/json': { schema: GrantResourcesSchema } },
    },
  },
})

export const putCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute = createRoute({
  method: 'put',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants',
  description: 'Add a new grant to the catalog role',
  operationId: 'addGrantToCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the role will receive the grant',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            required: true,
            description: 'The name of the role receiving the grant (must exist)',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddGrantRequestSchema } } },
  },
  responses: {
    201: { description: 'Successful response' },
    403: { description: 'The principal is not authorized to create grants' },
    404: { description: 'The catalog or the role does not exist' },
  },
})

export const postCatalogsCatalogNameCatalogRolesCatalogRoleNameGrantsRoute = createRoute({
  method: 'post',
  path: '/catalogs/{catalogName}/catalog-roles/{catalogRoleName}/grants',
  description:
    'Delete a specific grant from the role. This may be a subset or a superset of the grants the role has. In case of a subset, the role will retain the grants not specified. If the `cascade` parameter is true, grant revocation will have a cascading effect - that is, if a principal has specific grants on a subresource, and grants are revoked on a parent resource, the grants present on the subresource will be revoked as well. By default, this behavior is disabled and grant revocation only affects the specified resource.',
  operationId: 'revokeGrantFromCatalogRole',
  request: {
    params: z.object({
      catalogName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogName',
            in: 'path',
            required: true,
            description: 'The name of the catalog where the role will receive the grant',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
      catalogRoleName: z
        .string()
        .regex(/^(?!\s*[sS][yY][sS][tT][eE][mM]\$).*$/)
        .min(1)
        .max(256)
        .openapi({
          param: {
            name: 'catalogRoleName',
            in: 'path',
            required: true,
            description: 'The name of the role receiving the grant (must exist)',
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 256,
              pattern: '^(?!\\s*[sS][yY][sS][tT][eE][mM]\\$).*$',
            },
          },
        }),
    }),
    query: z.object({
      cascade: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'cascade',
            in: 'query',
            schema: { type: 'boolean', default: false },
            description: 'If true, the grant revocation cascades to all subresources.',
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RevokeGrantRequestSchema } } },
  },
  responses: {
    201: { description: 'Successful response' },
    403: { description: 'The principal is not authorized to create grants' },
    404: { description: 'The catalog or the role does not exist' },
  },
})
