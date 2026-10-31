import { createRoute, z } from '@hono/zod-openapi'

const AuthorizationAttemptInfoSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Human readable explanation for reaching the state. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use FailureReason enum.',
        readOnly: true,
      }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Domain name of the authorization attempt.' }),
    failureReason: z
      .enum(['FAILURE_REASON_UNSPECIFIED', 'CONFIG', 'CAA', 'RATE_LIMITED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Reason for failure of the authorization attempt for the domain.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'AUTHORIZING', 'AUTHORIZED', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'Output only. State of the domain for managed certificate issuance.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'State of the latest attempt to authorize a domain for certificate issuance.',
    required: [],
  })
  .openapi('AuthorizationAttemptInfo')

const ProvisioningIssueSchema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Human readable explanation about the issue. Provided to help address the configuration issues. Not guaranteed to be stable. For programmatic access use Reason enum.',
        readOnly: true,
      }),
    reason: z
      .enum(['REASON_UNSPECIFIED', 'AUTHORIZATION_ISSUE', 'RATE_LIMITED'])
      .exactOptional()
      .openapi({ description: 'Output only. Reason for provisioning failures.', readOnly: true }),
  })
  .openapi({
    description: 'Information about issues with provisioning a Managed Certificate.',
    required: [],
  })
  .openapi('ProvisioningIssue')

const ManagedCertificateSchema = z
  .object({
    authorizationAttemptInfo: z
      .array(AuthorizationAttemptInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Detailed state of the latest authorization attempt for each domain specified for managed certificate resource.',
        readOnly: true,
      }),
    dnsAuthorizations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Immutable. Authorizations that will be used for performing domain authorization.',
      }),
    domains: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Immutable. The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.',
      }),
    issuanceConfig: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format `projects/*/locations/*/certificateIssuanceConfigs/*`. If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.',
      }),
    provisioningIssue: ProvisioningIssueSchema.exactOptional().openapi({
      description: 'Output only. Information about issues with provisioning a Managed Certificate.',
      readOnly: true,
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PROVISIONING', 'FAILED', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description: 'Output only. State of the managed certificate resource.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Configuration and state of a Managed Certificate. Certificate Manager provisions and renews Managed Certificates automatically, for as long as it's authorized to do so.",
    required: [],
  })
  .openapi('ManagedCertificate')

const SelfManagedCertificateSchema = z
  .object({
    pemCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The PEM-encoded certificate chain. Leaf certificate comes first, followed by intermediate ones if any.',
      }),
    pemPrivateKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Input only. The PEM-encoded private key of the leaf certificate.' }),
  })
  .openapi({
    description:
      "Certificate data for a SelfManaged Certificate. SelfManaged Certificates are uploaded by the user. Updating such certificates before they expire remains the user's responsibility.",
    required: [],
  })
  .openapi('SelfManagedCertificate')

type CertificateType = {
  createTime?: string
  description?: string
  expireTime?: string
  labels?: { [key: string]: string }
  managed?: z.infer<typeof ManagedCertificateSchema>
  name?: string
  pemCertificate?: string
  sanDnsnames?: string[]
  scope?: 'DEFAULT' | 'EDGE_CACHE'
  selfManaged?: z.infer<typeof SelfManagedCertificateSchema>
  updateTime?: string
}

const CancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('CancelOperationRequest')

const CertificateSchema: z.ZodType<CertificateType> = z
  .lazy(() =>
    z
      .object({
        createTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The creation timestamp of a Certificate.',
            readOnly: true,
          }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'One or more paragraphs of text description of a certificate.' }),
        expireTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The expiry timestamp of a Certificate.',
            readOnly: true,
          }),
        labels: z
          .record(z.string(), z.string())
          .exactOptional()
          .openapi({ description: 'Set of labels associated with a Certificate.' }),
        managed: ManagedCertificateSchema.exactOptional().openapi({
          description: 'If set, contains configuration and state of a managed certificate.',
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`.',
          }),
        pemCertificate: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The PEM-encoded certificate chain.',
            readOnly: true,
          }),
        sanDnsnames: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              "Output only. The list of Subject Alternative Names of dnsName type defined in the certificate (see RFC 5280 4.2.1.6). Managed certificates that haven't been provisioned yet have this field populated with a value of the managed.domains field.",
            readOnly: true,
          }),
        scope: z
          .enum(['DEFAULT', 'EDGE_CACHE'])
          .exactOptional()
          .openapi({ description: 'Immutable. The scope of the certificate.' }),
        selfManaged: SelfManagedCertificateSchema.exactOptional().openapi({
          description: 'If set, defines data of a self-managed certificate.',
        }),
        updateTime: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Output only. The last update timestamp of a Certificate.',
            readOnly: true,
          }),
      })
      .openapi({ description: 'Defines TLS certificate.', required: [] }),
  )
  .openapi('Certificate')

const CertificateAuthorityServiceConfigSchema = z
  .object({
    caPool: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A CA pool resource used to issue a certificate. The CA pool string has a relative resource path following the form "projects/{project}/locations/{location}/caPools/{ca_pool}".',
      }),
  })
  .openapi({ description: 'Contains information required to contact CA service.', required: [] })
  .openapi('CertificateAuthorityServiceConfig')

const CertificateAuthorityConfigSchema = z
  .object({
    certificateAuthorityServiceConfig:
      CertificateAuthorityServiceConfigSchema.exactOptional().openapi({
        description: 'Defines a CertificateAuthorityServiceConfig.',
      }),
  })
  .openapi({
    description:
      'The CA that issues the workload certificate. It includes CA address, type, authentication to CA service, etc.',
    required: [],
  })
  .openapi('CertificateAuthorityConfig')

const CertificateIssuanceConfigSchema = z
  .object({
    certificateAuthorityConfig: CertificateAuthorityConfigSchema.exactOptional().openapi({
      description:
        'Required. The CA that issues the workload certificate. It includes the CA address, type, authentication to CA service, etc.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a CertificateIssuanceConfig.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One or more paragraphs of text description of a CertificateIssuanceConfig.',
      }),
    keyAlgorithm: z
      .enum(['KEY_ALGORITHM_UNSPECIFIED', 'RSA_2048', 'ECDSA_P256'])
      .exactOptional()
      .openapi({
        description: 'Required. The key algorithm to use when generating the private key.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with a CertificateIssuanceConfig.' }),
    lifetime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Workload certificate lifetime requested.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`.',
      }),
    rotationWindowPercentage: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. Must be a number between 1-99, inclusive.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of a CertificateIssuanceConfig.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'CertificateIssuanceConfig specifies how to issue and manage a certificate.',
    required: [],
  })
  .openapi('CertificateIssuanceConfig')

const IpConfigSchema = z
  .object({
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. An external IP address.', readOnly: true }),
    ports: z
      .array(z.uint32())
      .exactOptional()
      .openapi({ description: 'Output only. Ports.', readOnly: true }),
  })
  .openapi({
    description: 'Defines IP configuration where this Certificate Map is serving.',
    required: [],
  })
  .openapi('IpConfig')

const GclbTargetSchema = z
  .object({
    ipConfigs: z
      .array(IpConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. IP configurations for this Target Proxy where the Certificate Map is serving.',
        readOnly: true,
      }),
    targetHttpsProxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/*/global/targetHttpsProxies/*`.',
        readOnly: true,
      }),
    targetSslProxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. This field returns the resource name in the following format: `//compute.googleapis.com/projects/*/global/targetSslProxies/*`.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Describes a Target Proxy that uses this Certificate Map.',
    required: [],
  })
  .openapi('GclbTarget')

const CertificateMapSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a Certificate Map.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'One or more paragraphs of text description of a certificate map.' }),
    gclbTargets: z
      .array(GclbTargetSchema)
      .exactOptional()
      .openapi({
        description:
          "Output only. A list of GCLB targets that use this Certificate Map. A Target Proxy is only present on this list if it's attached to a Forwarding Rule.",
        readOnly: true,
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with a Certificate Map.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*`.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The update timestamp of a Certificate Map.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Defines a collection of certificate configurations.', required: [] })
  .openapi('CertificateMap')

const CertificateMapEntrySchema = z
  .object({
    certificates: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of Certificates defines for the given `hostname`. There can be defined up to four certificates in each Certificate Map Entry. Each certificate must match pattern `projects/*/locations/*/certificates/*`.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a Certificate Map Entry.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One or more paragraphs of text description of a certificate map entry.',
      }),
    hostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A Hostname (FQDN, e.g. `example.com`) or a wildcard hostname expression (`*.example.com`) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with a Certificate Map Entry.' }),
    matcher: z
      .enum(['MATCHER_UNSPECIFIED', 'PRIMARY'])
      .exactOptional()
      .openapi({
        description: 'A predefined matcher for particular cases, other than SNI selection.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`.',
      }),
    state: z
      .enum(['SERVING_STATE_UNSPECIFIED', 'ACTIVE', 'PENDING'])
      .exactOptional()
      .openapi({
        description: 'Output only. A serving state of this Certificate Map Entry.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The update timestamp of a Certificate Map Entry.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Defines a certificate map entry.', required: [] })
  .openapi('CertificateMapEntry')

const DnsResourceRecordSchema = z
  .object({
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Data of the DNS Resource Record.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Fully qualified name of the DNS Resource Record. e.g. `_acme-challenge.example.com`',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Type of the DNS Resource Record. Currently always set to "CNAME".',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'The structure describing the DNS Resource Record that needs to be added to DNS configuration for the authorization to be usable by certificate.',
    required: [],
  })
  .openapi('DnsResourceRecord')

const DnsAuthorizationSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a DnsAuthorization.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'One or more paragraphs of text description of a DnsAuthorization.',
      }),
    dnsResourceRecord: DnsResourceRecordSchema.exactOptional().openapi({
      description: 'Output only. DNS Resource Record that needs to be added to DNS configuration.',
      readOnly: true,
    }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. A domain that is being authorized. A DnsAuthorization resource covers a single domain and its wildcard, e.g. authorization for `example.com` can be used to issue certificates for `example.com` and `*.example.com`.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with a DnsAuthorization.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/*/locations/*/dnsAuthorizations/*`.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of a DnsAuthorization.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.',
    required: [],
  })
  .openapi('DnsAuthorization')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const IntermediateCASchema = z
  .object({
    pemCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM intermediate certificate used for building up paths for validation. Each certificate provided in PEM format may occupy up to 5kB.',
      }),
  })
  .openapi({ description: 'Defines an intermediate CA.', required: [] })
  .openapi('IntermediateCA')

const ListCertificateIssuanceConfigsResponseSchema = z
  .object({
    certificateIssuanceConfigs: z
      .array(CertificateIssuanceConfigSchema)
      .exactOptional()
      .openapi({ description: 'A list of certificate configs for the parent resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({
    description: 'Response for the `ListCertificateIssuanceConfigs` method.',
    required: [],
  })
  .openapi('ListCertificateIssuanceConfigsResponse')

const ListCertificateMapEntriesResponseSchema = z
  .object({
    certificateMapEntries: z
      .array(CertificateMapEntrySchema)
      .exactOptional()
      .openapi({ description: 'A list of certificate map entries for the parent resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for the `ListCertificateMapEntries` method.', required: [] })
  .openapi('ListCertificateMapEntriesResponse')

const ListCertificateMapsResponseSchema = z
  .object({
    certificateMaps: z
      .array(CertificateMapSchema)
      .exactOptional()
      .openapi({ description: 'A list of certificate maps for the parent resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for the `ListCertificateMaps` method.', required: [] })
  .openapi('ListCertificateMapsResponse')

const ListCertificatesResponseSchema = z
  .object({
    certificates: z
      .array(CertificateSchema)
      .exactOptional()
      .openapi({ description: 'A list of certificates for the parent resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for the `ListCertificates` method.', required: [] })
  .openapi('ListCertificatesResponse')

const ListDnsAuthorizationsResponseSchema = z
  .object({
    dnsAuthorizations: z
      .array(DnsAuthorizationSchema)
      .exactOptional()
      .openapi({ description: 'A list of dns authorizations for the parent resource.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for the `ListDnsAuthorizations` method.', required: [] })
  .openapi('ListDnsAuthorizationsResponse')

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

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const OperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: StatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
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
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
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
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('Operation')

const ListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(OperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('ListOperationsResponse')

const TrustAnchorSchema = z
  .object({
    pemCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.',
      }),
  })
  .openapi({ description: 'Defines a trust anchor.', required: [] })
  .openapi('TrustAnchor')

const TrustStoreSchema = z
  .object({
    intermediateCas: z
      .array(IntermediateCASchema)
      .exactOptional()
      .openapi({
        description:
          'Set of intermediate CA certificates used for the path building phase of chain validation. The field is currently not supported if TrustConfig is used for the workload certificate feature.',
      }),
    trustAnchors: z
      .array(TrustAnchorSchema)
      .exactOptional()
      .openapi({
        description:
          'List of Trust Anchors to be used while performing validation against a given TrustStore.',
      }),
  })
  .openapi({ description: 'Defines a trust store.', required: [] })
  .openapi('TrustStore')

const TrustConfigSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The creation timestamp of a TrustConfig.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'One or more paragraphs of text description of a TrustConfig.' }),
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Set of labels associated with a TrustConfig.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.',
      }),
    trustStores: z
      .array(TrustStoreSchema)
      .exactOptional()
      .openapi({
        description:
          'Set of trust stores to perform validation against. This field is supported when TrustConfig is configured with Load Balancers, currently not supported for SPIFFE certificate validation. Only one TrustStore specified is currently allowed.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The last update timestamp of a TrustConfig.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Defines a trust config.', required: [] })
  .openapi('TrustConfig')

const ListTrustConfigsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.',
      }),
    trustConfigs: z
      .array(TrustConfigSchema)
      .exactOptional()
      .openapi({ description: 'A list of TrustConfigs for the parent resource.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Locations that could not be reached.' }),
  })
  .openapi({ description: 'Response for the `ListTrustConfigs` method.', required: [] })
  .openapi('ListTrustConfigsResponse')

const OperationMetadataSchema = z
  .object({
    apiVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version used to start the operation.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    requestedCancellation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.',
      }),
    statusMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable status of the operation, if any.' }),
    target: z
      .string()
      .exactOptional()
      .openapi({ description: 'Server-defined resource path for the target of the operation.' }),
    verb: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the verb executed by the operation.' }),
  })
  .openapi({
    description: 'Represents the metadata of the long-running operation. Output only.',
    required: [],
  })
  .openapi('OperationMetadata')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets details of a single TrustConfig.',
  operationId: 'certificatemanager.projects.locations.trustConfigs.get',
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
              'Required. A name of the TrustConfig to describe. Must be in the format `projects/*/locations/*/trustConfigs/*`.',
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
      content: { 'application/json': { schema: TrustConfigSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes a single TrustConfig.',
  operationId: 'certificatemanager.projects.locations.trustConfigs.delete',
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
      etag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned.',
            in: 'query',
            name: 'etag',
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
              'Required. A name of the TrustConfig to delete. Must be in the format `projects/*/locations/*/trustConfigs/*`.',
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
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates a TrustConfig.',
  operationId: 'certificatemanager.projects.locations.trustConfigs.patch',
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
            description:
              'Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask.',
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
              'A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TrustConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameLocationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/locations',
  tags: ['projects'],
  description: 'Lists information about the supported locations for this service.',
  operationId: 'certificatemanager.projects.locations.list',
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
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'certificatemanager.projects.locations.operations.list',
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
            description: 'The standard list filter.',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'certificatemanager.projects.locations.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CancelOperationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCertificateIssuanceConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/certificateIssuanceConfigs',
  tags: ['projects'],
  description: 'Lists CertificateIssuanceConfigs in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateIssuanceConfigs.list',
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
            description: 'Filter expression to restrict the Certificates Configs returned.',
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
              'A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
            description: 'Maximum number of certificate configs to return per call.',
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
              'The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListCertificateIssuanceConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCertificateIssuanceConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/certificateIssuanceConfigs',
  tags: ['projects'],
  description: 'Creates a new CertificateIssuanceConfig in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateIssuanceConfigs.create',
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
      certificateIssuanceConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the certificate config.',
            in: 'query',
            name: 'certificateIssuanceConfigId',
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
              'Required. The parent resource of the certificate issuance config. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CertificateIssuanceConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCertificateMapEntriesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/certificateMapEntries',
  tags: ['projects'],
  description: 'Lists CertificateMapEntries in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateMaps.certificateMapEntries.list',
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
            description: 'Filter expression to restrict the returned Certificate Map Entries.',
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
              'A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
              'Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data.',
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
              'Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/*/locations/*/certificateMaps/*`.',
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
      content: { 'application/json': { schema: ListCertificateMapEntriesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCertificateMapEntriesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/certificateMapEntries',
  tags: ['projects'],
  description: 'Creates a new CertificateMapEntry in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateMaps.certificateMapEntries.create',
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
      certificateMapEntryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the certificate map entry.',
            in: 'query',
            name: 'certificateMapEntryId',
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
              'Required. The parent resource of the certificate map entry. Must be in the format `projects/*/locations/*/certificateMaps/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CertificateMapEntrySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCertificateMapsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/certificateMaps',
  tags: ['projects'],
  description: 'Lists CertificateMaps in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateMaps.list',
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
            description: 'Filter expression to restrict the Certificates Maps returned.',
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
              'A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
            description: 'Maximum number of certificate maps to return per call.',
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
              'The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the certificate maps should be listed, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListCertificateMapsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCertificateMapsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/certificateMaps',
  tags: ['projects'],
  description: 'Creates a new CertificateMap in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificateMaps.create',
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
      certificateMapId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the certificate map.',
            in: 'query',
            name: 'certificateMapId',
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
              'Required. The parent resource of the certificate map. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CertificateMapSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentCertificatesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/certificates',
  tags: ['projects'],
  description: 'Lists Certificates in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificates.list',
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
            description: 'Filter expression to restrict the Certificates returned.',
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
              'A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
            description: 'Maximum number of certificates to return per call.',
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
              'The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListCertificatesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCertificatesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/certificates',
  tags: ['projects'],
  description: 'Creates a new Certificate in a given project and location.',
  operationId: 'certificatemanager.projects.locations.certificates.create',
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
      certificateId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the certificate.',
            in: 'query',
            name: 'certificateId',
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
              'Required. The parent resource of the certificate. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CertificateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDnsAuthorizationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/dnsAuthorizations',
  tags: ['projects'],
  description: 'Lists DnsAuthorizations in a given project and location.',
  operationId: 'certificatemanager.projects.locations.dnsAuthorizations.list',
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
            description: 'Filter expression to restrict the Dns Authorizations returned.',
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
              'A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
            description: 'Maximum number of dns authorizations to return per call.',
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
              'The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListDnsAuthorizationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentDnsAuthorizationsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/dnsAuthorizations',
  tags: ['projects'],
  description: 'Creates a new DnsAuthorization in a given project and location.',
  operationId: 'certificatemanager.projects.locations.dnsAuthorizations.create',
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
      dnsAuthorizationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the dns authorization.',
            in: 'query',
            name: 'dnsAuthorizationId',
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
              'Required. The parent resource of the dns authorization. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DnsAuthorizationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTrustConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/trustConfigs',
  tags: ['projects'],
  description: 'Lists TrustConfigs in a given project and location.',
  operationId: 'certificatemanager.projects.locations.trustConfigs.list',
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
            description: 'Filter expression to restrict the TrustConfigs returned.',
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
              'A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix " desc".',
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
            description: 'Maximum number of TrustConfigs to return per call.',
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
              'The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data.',
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
              'Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/*/locations/*`.',
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
      content: { 'application/json': { schema: ListTrustConfigsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentTrustConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/trustConfigs',
  tags: ['projects'],
  description: 'Creates a new TrustConfig in a given project and location.',
  operationId: 'certificatemanager.projects.locations.trustConfigs.create',
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
      trustConfigId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. A user-provided name of the TrustConfig.',
            in: 'query',
            name: 'trustConfigId',
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
              'Required. The parent resource of the TrustConfig. Must be in the format `projects/*/locations/*`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TrustConfigSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
