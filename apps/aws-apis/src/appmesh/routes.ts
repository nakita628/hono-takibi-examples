import { createRoute, z } from '@hono/zod-openapi'

const AwsCloudMapInstanceAttributeKeySchema = z
  .string()
  .regex(/^[a-zA-Z0-9!-~]+$/)
  .min(1)
  .max(255)
  .openapi('AwsCloudMapInstanceAttributeKey')

const AwsCloudMapInstanceAttributeValueSchema = z
  .string()
  .regex(/^([a-zA-Z0-9!-~][  a-zA-Z0-9!-~]*){0,1}[a-zA-Z0-9!-~]{0,1}$/)
  .min(1)
  .max(1024)
  .openapi('AwsCloudMapInstanceAttributeValue')

const AwsCloudMapInstanceAttributeSchema = z
  .object({
    key: AwsCloudMapInstanceAttributeKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is returned.',
        }),
    ),
    value: AwsCloudMapInstanceAttributeValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of an Cloud Map service instance attribute key. Any Cloud Map service instance that contains the specified key and value is returned.',
        }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      '<p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>',
  })
  .openapi('AwsCloudMapInstanceAttribute')

const AwsCloudMapInstanceAttributesSchema = z
  .array(AwsCloudMapInstanceAttributeSchema)
  .openapi('AwsCloudMapInstanceAttributes')

const IpPreferenceSchema = z
  .enum(['IPv6_PREFERRED', 'IPv4_PREFERRED', 'IPv4_ONLY', 'IPv6_ONLY'])
  .openapi('IpPreference')

const AwsCloudMapNameSchema = z.string().min(1).max(1024).openapi('AwsCloudMapName')

const AwsCloudMapServiceDiscoverySchema = z
  .object({
    attributes: AwsCloudMapInstanceAttributesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string map that contains attributes with values that you can use to filter instances by any custom attribute that you specified when you registered the instance. Only instances that match all of the specified key/value pairs will be returned.',
        }),
    ).exactOptional(),
    ipPreference: IpPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.',
        }),
    ).exactOptional(),
    namespaceName: AwsCloudMapNameSchema.and(
      z.any().openapi({ description: 'The name of the Cloud Map namespace to use.' }),
    ),
    serviceName: AwsCloudMapNameSchema.and(
      z.any().openapi({ description: 'The name of the Cloud Map service to use.' }),
    ),
  })
  .openapi({
    required: ['namespaceName', 'serviceName'],
    description:
      '<p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>',
  })
  .openapi('AwsCloudMapServiceDiscovery')

const HostnameSchema = z.string().openapi('Hostname')

const DnsResponseTypeSchema = z.enum(['LOADBALANCER', 'ENDPOINTS']).openapi('DnsResponseType')

const DnsServiceDiscoverySchema = z
  .object({
    hostname: HostnameSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the DNS service discovery hostname for the virtual node. ',
        }),
    ),
    ipPreference: IpPreferenceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The preferred IP version that this virtual node uses. Setting the IP preference on the virtual node only overrides the IP preference set for the mesh on this specific node.',
        }),
    ).exactOptional(),
    responseType: DnsResponseTypeSchema.and(
      z.any().openapi({ description: 'Specifies the DNS response type for the virtual node.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['hostname'],
    description:
      'An object that represents the DNS service discovery information for your virtual node.',
  })
  .openapi('DnsServiceDiscovery')

type ServiceDiscoveryType = {
  awsCloudMap?: z.infer<typeof AwsCloudMapServiceDiscoverySchema> & { [key: string]: unknown }
  dns?: z.infer<typeof DnsServiceDiscoverySchema> & { [key: string]: unknown }
}

const JsonKeySchema = z.string().min(1).max(100).openapi('JsonKey')

const JsonValueSchema = z.string().min(1).max(100).openapi('JsonValue')

const JsonFormatRefSchema = z
  .object({
    key: JsonKeySchema.and(z.any().openapi({ description: 'The specified key for the JSON.' })),
    value: JsonValueSchema.and(
      z.any().openapi({ description: 'The specified value for the JSON.' }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description: 'An object that represents the key value pairs for the JSON.',
  })
  .openapi('JsonFormatRef')

const JsonFormatSchema = z.array(JsonFormatRefSchema).openapi('JsonFormat')

const TextFormatSchema = z.string().min(1).max(1000).openapi('TextFormat')

const LoggingFormatSchema = z
  .object({
    json: JsonFormatSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
    text: TextFormatSchema.and(z.any().openapi({ description: '<p/>' })).exactOptional(),
  })
  .openapi({ description: 'An object that represents the format for the logs.', required: [] })
  .openapi('LoggingFormat')

const FilePathSchema = z.string().min(1).max(255).openapi('FilePath')

const FileAccessLogSchema = z
  .object({
    format: LoggingFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specified format for the logs. The format is either <code>json_format</code> or <code>text_format</code>.',
        }),
    ).exactOptional(),
    path: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The file path to write access logs to. You can use <code>/dev/stdout</code> to send access logs to standard out and configure your Envoy container to use a log driver, such as <code>awslogs</code>, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.</p> <pre><code> &lt;note&gt; &lt;p&gt;The Envoy process must have write permissions to the path that you specify here. Otherwise, Envoy fails to bootstrap properly.&lt;/p&gt; &lt;/note&gt; </code></pre>",
        }),
    ),
  })
  .openapi({ required: ['path'], description: 'An object that represents an access log file.' })
  .openapi('FileAccessLog')

type AccessLogType = { file?: z.infer<typeof FileAccessLogSchema> & { [key: string]: unknown } }

const ListenerTlsFileCertificateSchema = z
  .object({
    certificateChain: FilePathSchema.and(
      z.any().openapi({ description: 'The certificate chain for the certificate.' }),
    ),
    privateKey: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for a certificate stored on the file system of the virtual node that the proxy is running on.',
        }),
    ),
  })
  .openapi({
    required: ['certificateChain', 'privateKey'],
    description:
      'An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.',
  })
  .openapi('ListenerTlsFileCertificate')

const SdsSecretNameSchema = z.string().openapi('SdsSecretName')

const ListenerTlsSdsCertificateSchema = z
  .object({
    secretName: SdsSecretNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents the name of the secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.',
        }),
    ),
  })
  .openapi({
    required: ['secretName'],
    description:
      'An object that represents the listener\'s Secret Discovery Service certificate. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.',
  })
  .openapi('ListenerTlsSdsCertificate')

const ClientTlsCertificateSchema = z
  .object({
    file: ListenerTlsFileCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">Transport Layer Security (TLS)</a>.',
        }),
    ).exactOptional(),
    sds: ListenerTlsSdsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a client's TLS Secret Discovery Service certificate.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: "An object that represents the client's certificate.", required: [] })
  .openapi('ClientTlsCertificate')

const BooleanSchema = z.boolean().openapi('Boolean')

const PortNumberSchema = z.int().min(1).max(65535).openapi('PortNumber')

const PortSetSchema = z.array(PortNumberSchema).openapi('PortSet')

const SubjectAlternativeNameSchema = z.string().min(1).max(254).openapi('SubjectAlternativeName')

const SubjectAlternativeNameListSchema = z
  .array(SubjectAlternativeNameSchema)
  .openapi('SubjectAlternativeNameList')

const SubjectAlternativeNameMatchersSchema = z
  .object({
    exact: SubjectAlternativeNameListSchema.and(
      z.any().openapi({ description: 'The values sent must match the specified values exactly.' }),
    ),
  })
  .openapi({
    required: ['exact'],
    description:
      'An object that represents the methods by which a subject alternative name on a peer Transport Layer Security (TLS) certificate can be matched.',
  })
  .openapi('SubjectAlternativeNameMatchers')

const SubjectAlternativeNamesSchema = z
  .object({
    match: SubjectAlternativeNameMatchersSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a SANs match.',
        }),
    ),
  })
  .openapi({
    required: ['match'],
    description:
      'An object that represents the subject alternative names secured by the certificate.',
  })
  .openapi('SubjectAlternativeNames')

const ArnSchema = z.string().openapi('Arn')

const CertificateAuthorityArnsSchema = z
  .array(ArnSchema)
  .min(1)
  .max(3)
  .openapi('CertificateAuthorityArns')

const TlsValidationContextAcmTrustSchema = z
  .object({
    certificateAuthorityArns: CertificateAuthorityArnsSchema.and(
      z.any().openapi({ description: 'One or more ACM Amazon Resource Name (ARN)s.' }),
    ),
  })
  .openapi({
    required: ['certificateAuthorityArns'],
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.',
  })
  .openapi('TlsValidationContextAcmTrust')

const TlsValidationContextFileTrustSchema = z
  .object({
    certificateChain: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.',
        }),
    ),
  })
  .openapi({
    required: ['certificateChain'],
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
  })
  .openapi('TlsValidationContextFileTrust')

const TlsValidationContextSdsTrustSchema = z
  .object({
    secretName: SdsSecretNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents the name of the secret for a Transport Layer Security (TLS) Secret Discovery Service validation context trust.',
        }),
    ),
  })
  .openapi({
    required: ['secretName'],
    description:
      'An object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.',
  })
  .openapi('TlsValidationContextSdsTrust')

const TlsValidationContextTrustSchema = z
  .object({
    acm: TlsValidationContextAcmTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.',
        }),
    ).exactOptional(),
    file: TlsValidationContextFileTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
        }),
    ).exactOptional(),
    sds: TlsValidationContextSdsTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) Secret Discovery Service validation context trust.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust.',
    required: [],
  })
  .openapi('TlsValidationContextTrust')

const TlsValidationContextSchema = z
  .object({
    subjectAlternativeNames: SubjectAlternativeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents the SANs for a Transport Layer Security (TLS) validation context. If you don't specify SANs on the <i>terminating</i> mesh endpoint, the Envoy proxy for that node doesn't verify the SAN on a peer client certificate. If you don't specify SANs on the <i>originating</i> mesh endpoint, the SAN on the certificate provided by the terminating endpoint must match the mesh endpoint service discovery configuration. Since SPIRE vended certificates have a SPIFFE ID as a name, you must set the SAN since the name doesn't match the service discovery name.",
        }),
    ).exactOptional(),
    trust: TlsValidationContextTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.',
        }),
    ),
  })
  .openapi({
    required: ['trust'],
    description:
      'An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.',
  })
  .openapi('TlsValidationContext')

const ClientPolicyTlsSchema = z
  .object({
    certificate: ClientTlsCertificateSchema.and(
      z
        .any()
        .openapi({
          description: "A reference to an object that represents a client's TLS certificate.",
        }),
    ).exactOptional(),
    enforce: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.",
        }),
    ).exactOptional(),
    ports: PortSetSchema.and(
      z.any().openapi({ description: 'One or more ports that the policy is enforced for.' }),
    ).exactOptional(),
    validation: TlsValidationContextSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents a TLS validation context.',
        }),
    ),
  })
  .openapi({
    required: ['validation'],
    description:
      'A reference to an object that represents a Transport Layer Security (TLS) client policy.',
  })
  .openapi('ClientPolicyTls')

const ClientPolicySchema = z
  .object({
    tls: ClientPolicyTlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) client policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a client policy.', required: [] })
  .openapi('ClientPolicy')

const ServiceNameSchema = z.string().openapi('ServiceName')

const VirtualServiceBackendSchema = z
  .object({
    clientPolicy: ClientPolicySchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents the client policy for a backend.',
        }),
    ).exactOptional(),
    virtualServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the virtual service that is acting as a virtual node backend.',
        }),
    ),
  })
  .openapi({
    required: ['virtualServiceName'],
    description: 'An object that represents a virtual service backend for a virtual node.',
  })
  .openapi('VirtualServiceBackend')

type BackendType = {
  virtualService?: z.infer<typeof VirtualServiceBackendSchema> & { [key: string]: unknown }
}

const ResourceNameSchema = z.string().min(1).max(255).openapi('ResourceName')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AccountIdSchema = z.string().length(12).openapi('AccountId')

const StringSchema = z.string().openapi('String')

const LongSchema = z.int().openapi('Long')

const ResourceMetadataSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The full Amazon Resource Name (ARN) for the resource.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    uid: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier for the resource.' }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
  })
  .openapi({
    required: ['arn', 'createdAt', 'lastUpdatedAt', 'meshOwner', 'resourceOwner', 'uid', 'version'],
    description: 'An object that represents metadata for a resource.',
  })
  .openapi('ResourceMetadata')

const DefaultGatewayRouteRewriteSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('DefaultGatewayRouteRewrite')

const GatewayRouteHostnameRewriteSchema = z
  .object({
    defaultTargetHostname: DefaultGatewayRouteRewriteSchema.and(
      z.any().openapi({ description: 'The default target host name to write to.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the gateway route host name to rewrite.',
    required: [],
  })
  .openapi('GatewayRouteHostnameRewrite')

const GrpcGatewayRouteRewriteSchema = z
  .object({
    hostname: GatewayRouteHostnameRewriteSchema.and(
      z.any().openapi({ description: 'The host name of the gateway route to rewrite.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents the gateway route to rewrite.', required: [] })
  .openapi('GrpcGatewayRouteRewrite')

const ListenerPortSchema = z.int().min(1).max(65535).openapi('ListenerPort')

const GatewayRouteVirtualServiceSchema = z
  .object({
    virtualServiceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the virtual service that traffic is routed to.' }),
    ),
  })
  .openapi({
    required: ['virtualServiceName'],
    description: 'An object that represents the virtual service that traffic is routed to.',
  })
  .openapi('GatewayRouteVirtualService')

const GatewayRouteTargetSchema = z
  .object({
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number of the gateway route target.' }),
    ).exactOptional(),
    virtualService: GatewayRouteVirtualServiceSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents a virtual service gateway route target.',
        }),
    ),
  })
  .openapi({
    required: ['virtualService'],
    description: 'An object that represents a gateway route target.',
  })
  .openapi('GatewayRouteTarget')

const GrpcGatewayRouteActionSchema = z
  .object({
    rewrite: GrpcGatewayRouteRewriteSchema.and(
      z.any().openapi({ description: 'The gateway route action to rewrite.' }),
    ).exactOptional(),
    target: GatewayRouteTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the target that traffic is routed to when a request matches the gateway route.',
        }),
    ),
  })
  .openapi({
    required: ['target'],
    description: 'An object that represents the action to take if a match is determined.',
  })
  .openapi('GrpcGatewayRouteAction')

const ExactHostNameSchema = z.string().min(1).max(253).openapi('ExactHostName')

const SuffixHostnameSchema = z.string().min(1).max(253).openapi('SuffixHostname')

const GatewayRouteHostnameMatchSchema = z
  .object({
    exact: ExactHostNameSchema.and(
      z.any().openapi({ description: 'The exact host name to match on.' }),
    ).exactOptional(),
    suffix: SuffixHostnameSchema.and(
      z
        .any()
        .openapi({ description: 'The specified ending characters of the host name to match on.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the gateway route host name to match.',
    required: [],
  })
  .openapi('GatewayRouteHostnameMatch')

const HeaderMatchSchema = z.string().min(1).max(255).openapi('HeaderMatch')

const MatchRangeSchema = z
  .object({
    end: LongSchema.and(z.any().openapi({ description: 'The end of the range.' })),
    start: LongSchema.and(z.any().openapi({ description: 'The start of the range.' })),
  })
  .openapi({
    required: ['end', 'start'],
    description:
      'An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.',
  })
  .openapi('MatchRange')

const GrpcMetadataMatchMethodSchema = z
  .object({
    exact: HeaderMatchSchema.and(
      z.any().openapi({ description: 'The exact method header to be matched on.' }),
    ).exactOptional(),
    prefix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The specified beginning characters of the method header to be matched on.',
        }),
    ).exactOptional(),
    range: MatchRangeSchema.exactOptional(),
    regex: HeaderMatchSchema.and(
      z.any().openapi({ description: 'The regex used to match the method header.' }),
    ).exactOptional(),
    suffix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The specified ending characters of the method header to match on.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing the method header to be matched.', required: [] })
  .openapi('GrpcMetadataMatchMethod')

const HeaderNameSchema = z.string().min(1).max(50).openapi('HeaderName')

const GrpcGatewayRouteMetadataSchema = z
  .object({
    invert: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.',
        }),
    ).exactOptional(),
    match: GrpcMetadataMatchMethodSchema.and(
      z.any().openapi({ description: 'The criteria for determining a metadata match.' }),
    ).exactOptional(),
    name: HeaderNameSchema.and(
      z.any().openapi({ description: 'A name for the gateway route metadata.' }),
    ),
  })
  .openapi({
    required: ['name'],
    description: 'An object representing the metadata of the gateway route.',
  })
  .openapi('GrpcGatewayRouteMetadata')

const GrpcGatewayRouteMetadataListSchema = z
  .array(GrpcGatewayRouteMetadataSchema)
  .min(1)
  .max(10)
  .openapi('GrpcGatewayRouteMetadataList')

const GrpcGatewayRouteMatchSchema = z
  .object({
    hostname: GatewayRouteHostnameMatchSchema.and(
      z.any().openapi({ description: 'The gateway route host name to be matched on.' }),
    ).exactOptional(),
    metadata: GrpcGatewayRouteMetadataListSchema.and(
      z.any().openapi({ description: 'The gateway route metadata to be matched on.' }),
    ).exactOptional(),
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number to match from the request.' }),
    ).exactOptional(),
    serviceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified domain name for the service to match from the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the criteria for determining a request match.',
    required: [],
  })
  .openapi('GrpcGatewayRouteMatch')

const GrpcGatewayRouteSchema = z
  .object({
    action: GrpcGatewayRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the action to take if a match is determined.',
        }),
    ),
    match: GrpcGatewayRouteMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a request match.',
        }),
    ),
  })
  .openapi({
    required: ['action', 'match'],
    description: 'An object that represents a gRPC gateway route.',
  })
  .openapi('GrpcGatewayRoute')

const HttpPathExactSchema = z.string().min(1).max(255).openapi('HttpPathExact')

const HttpGatewayRoutePathRewriteSchema = z
  .object({
    exact: HttpPathExactSchema.and(
      z.any().openapi({ description: 'The exact path to rewrite.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents the path to rewrite.', required: [] })
  .openapi('HttpGatewayRoutePathRewrite')

const HttpGatewayRoutePrefixSchema = z.string().min(1).max(255).openapi('HttpGatewayRoutePrefix')

const HttpGatewayRoutePrefixRewriteSchema = z
  .object({
    defaultPrefix: DefaultGatewayRouteRewriteSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default prefix used to replace the incoming route prefix when rewritten.',
        }),
    ).exactOptional(),
    value: HttpGatewayRoutePrefixSchema.and(
      z
        .any()
        .openapi({
          description: 'The value used to replace the incoming route prefix when rewritten.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the beginning characters of the route to rewrite.',
    required: [],
  })
  .openapi('HttpGatewayRoutePrefixRewrite')

const HttpGatewayRouteRewriteSchema = z
  .object({
    hostname: GatewayRouteHostnameRewriteSchema.and(
      z.any().openapi({ description: 'The host name to rewrite.' }),
    ).exactOptional(),
    path: HttpGatewayRoutePathRewriteSchema.and(
      z.any().openapi({ description: 'The path to rewrite.' }),
    ).exactOptional(),
    prefix: HttpGatewayRoutePrefixRewriteSchema.and(
      z.any().openapi({ description: 'The specified beginning characters to rewrite.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing the gateway route to rewrite.', required: [] })
  .openapi('HttpGatewayRouteRewrite')

const HttpGatewayRouteActionSchema = z
  .object({
    rewrite: HttpGatewayRouteRewriteSchema.and(
      z.any().openapi({ description: 'The gateway route action to rewrite.' }),
    ).exactOptional(),
    target: GatewayRouteTargetSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the target that traffic is routed to when a request matches the gateway route.',
        }),
    ),
  })
  .openapi({
    required: ['target'],
    description: 'An object that represents the action to take if a match is determined.',
  })
  .openapi('HttpGatewayRouteAction')

const HeaderMatchMethodSchema = z
  .object({
    exact: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must match the specified value exactly.',
        }),
    ).exactOptional(),
    prefix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must begin with the specified characters.',
        }),
    ).exactOptional(),
    range: MatchRangeSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the range of values to match on.' }),
    ).exactOptional(),
    regex: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must include the specified characters.',
        }),
    ).exactOptional(),
    suffix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must end with the specified characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the method and value to match with the header value sent in a request. Specify one match method.',
    required: [],
  })
  .openapi('HeaderMatchMethod')

const HttpGatewayRouteHeaderSchema = z
  .object({
    invert: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.',
        }),
    ).exactOptional(),
    match: HeaderMatchMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the method and value to match with the header value sent in a request. Specify one match method.',
        }),
    ).exactOptional(),
    name: HeaderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name for the HTTP header in the gateway route that will be matched on.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description: 'An object that represents the HTTP header in the gateway route.',
  })
  .openapi('HttpGatewayRouteHeader')

const HttpGatewayRouteHeadersSchema = z
  .array(HttpGatewayRouteHeaderSchema)
  .min(1)
  .max(10)
  .openapi('HttpGatewayRouteHeaders')

const HttpMethodSchema = z
  .enum(['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'TRACE', 'PATCH'])
  .openapi('HttpMethod')

const HttpPathRegexSchema = z.string().min(1).max(255).openapi('HttpPathRegex')

const HttpPathMatchSchema = z
  .object({
    exact: HttpPathExactSchema.and(
      z.any().openapi({ description: 'The exact path to match on.' }),
    ).exactOptional(),
    regex: HttpPathRegexSchema.and(
      z.any().openapi({ description: 'The regex used to match the path.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing the path to match in the request.',
    required: [],
  })
  .openapi('HttpPathMatch')

const QueryParameterMatchSchema = z
  .object({
    exact: StringSchema.and(
      z.any().openapi({ description: 'The exact query parameter to match on.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing the query parameter to match.', required: [] })
  .openapi('QueryParameterMatch')

const QueryParameterNameSchema = z.string().openapi('QueryParameterName')

const HttpQueryParameterSchema = z
  .object({
    match: QueryParameterMatchSchema.and(
      z.any().openapi({ description: 'The query parameter to match on.' }),
    ).exactOptional(),
    name: QueryParameterNameSchema.and(
      z.any().openapi({ description: 'A name for the query parameter that will be matched on.' }),
    ),
  })
  .openapi({
    required: ['name'],
    description: 'An object that represents the query parameter in the request.',
  })
  .openapi('HttpQueryParameter')

const HttpQueryParametersSchema = z
  .array(HttpQueryParameterSchema)
  .min(1)
  .max(10)
  .openapi('HttpQueryParameters')

const HttpGatewayRouteMatchSchema = z
  .object({
    headers: HttpGatewayRouteHeadersSchema.and(
      z.any().openapi({ description: 'The client request headers to match on.' }),
    ).exactOptional(),
    hostname: GatewayRouteHostnameMatchSchema.and(
      z.any().openapi({ description: 'The host name to match on.' }),
    ).exactOptional(),
    method: HttpMethodSchema.and(
      z.any().openapi({ description: 'The method to match on.' }),
    ).exactOptional(),
    path: HttpPathMatchSchema.and(
      z.any().openapi({ description: 'The path to match on.' }),
    ).exactOptional(),
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number to match on.' }),
    ).exactOptional(),
    prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the path to match requests with. This parameter must always start with <code>/</code>, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is <code>my-service.local</code> and you want the route to match requests to <code>my-service.local/metrics</code>, your prefix should be <code>/metrics</code>.',
        }),
    ).exactOptional(),
    queryParameters: HttpQueryParametersSchema.and(
      z.any().openapi({ description: 'The query parameter to match on.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the criteria for determining a request match.',
    required: [],
  })
  .openapi('HttpGatewayRouteMatch')

const HttpGatewayRouteSchema = z
  .object({
    action: HttpGatewayRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the action to take if a match is determined.',
        }),
    ),
    match: HttpGatewayRouteMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a request match.',
        }),
    ),
  })
  .openapi({
    required: ['action', 'match'],
    description: 'An object that represents an HTTP gateway route.',
  })
  .openapi('HttpGatewayRoute')

const GatewayRoutePrioritySchema = z.int().min(0).max(1000).openapi('GatewayRoutePriority')

const GatewayRouteSpecSchema = z
  .object({
    grpcRoute: GrpcGatewayRouteSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the specification of a gRPC gateway route.',
        }),
    ).exactOptional(),
    http2Route: HttpGatewayRouteSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the specification of an HTTP/2 gateway route.',
        }),
    ).exactOptional(),
    httpRoute: HttpGatewayRouteSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the specification of an HTTP gateway route.',
        }),
    ).exactOptional(),
    priority: GatewayRoutePrioritySchema.and(
      z.any().openapi({ description: 'The ordering of the gateway routes spec.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents a gateway route specification. Specify one gateway route type.',
    required: [],
  })
  .openapi('GatewayRouteSpec')

const GatewayRouteStatusCodeSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
  .openapi('GatewayRouteStatusCode')

const GatewayRouteStatusSchema = z
  .object({
    status: GatewayRouteStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status for the gateway route.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the current status of a gateway route.',
  })
  .openapi('GatewayRouteStatus')

const GatewayRouteDataSchema = z
  .object({
    gatewayRouteName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the gateway route.' }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service mesh that the resource resides in. ' }),
    ),
    metadata: ResourceMetadataSchema,
    spec: GatewayRouteSpecSchema.and(
      z.any().openapi({ description: 'The specifications of the gateway route.' }),
    ),
    status: GatewayRouteStatusSchema.and(
      z.any().openapi({ description: 'The status of the gateway route.' }),
    ),
    virtualGatewayName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The virtual gateway that the gateway route is associated with.' }),
    ),
  })
  .openapi({
    required: ['gatewayRouteName', 'meshName', 'metadata', 'spec', 'status', 'virtualGatewayName'],
    description: 'An object that represents a gateway route returned by a describe operation.',
  })
  .openapi('GatewayRouteData')

const CreateGatewayRouteOutputSchema = z
  .object({
    gatewayRoute: GatewayRouteDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your gateway route following the create call.',
        }),
    ),
  })
  .openapi({ required: ['gatewayRoute'] })
  .openapi('CreateGatewayRouteOutput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagRefSchema = z
  .object({
    key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values.',
        }),
    ),
    value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A <code>value</code> acts as a descriptor within a tag category (key).',
        }),
    ),
  })
  .openapi({
    required: ['key', 'value'],
    description:
      'Optional metadata that you apply to a resource to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
  })
  .openapi('TagRef')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const EgressFilterTypeSchema = z.enum(['ALLOW_ALL', 'DROP_ALL']).openapi('EgressFilterType')

const EgressFilterSchema = z
  .object({
    type: EgressFilterTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows egress only from virtual nodes to other defined resources in the service mesh (and any traffic to <code>*.amazonaws.com</code> for Amazon Web Services API calls). You can set the egress filter type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or outside of the service mesh.',
        }),
    ),
  })
  .openapi({
    required: ['type'],
    description: 'An object that represents the egress filter rules for a service mesh.',
  })
  .openapi('EgressFilter')

const MeshServiceDiscoverySchema = z
  .object({
    ipPreference: IpPreferenceSchema.and(
      z.any().openapi({ description: 'The IP version to use to control traffic within the mesh.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the service discovery information for a service mesh.',
    required: [],
  })
  .openapi('MeshServiceDiscovery')

const MeshSpecSchema = z
  .object({
    egressFilter: EgressFilterSchema.and(
      z.any().openapi({ description: 'The egress filter rules for the service mesh.' }),
    ).exactOptional(),
    serviceDiscovery: MeshServiceDiscoverySchema.exactOptional(),
  })
  .openapi({
    description: 'An object that represents the specification of a service mesh.',
    required: [],
  })
  .openapi('MeshSpec')

const MeshStatusCodeSchema = z.enum(['ACTIVE', 'INACTIVE', 'DELETED']).openapi('MeshStatusCode')

const MeshStatusSchema = z
  .object({
    status: MeshStatusCodeSchema.and(
      z.any().openapi({ description: 'The current mesh status.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents the status of a service mesh.', required: [] })
  .openapi('MeshStatus')

const MeshDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service mesh.' }),
    ),
    metadata: ResourceMetadataSchema.and(
      z.any().openapi({ description: 'The associated metadata for the service mesh.' }),
    ),
    spec: MeshSpecSchema.and(
      z.any().openapi({ description: 'The associated specification for the service mesh.' }),
    ),
    status: MeshStatusSchema.and(
      z.any().openapi({ description: 'The status of the service mesh.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'spec', 'status'],
    description: 'An object that represents a service mesh returned by a describe operation.',
  })
  .openapi('MeshData')

const CreateMeshOutputSchema = z
  .object({
    mesh: MeshDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your service mesh following the create call.',
        }),
    ),
  })
  .openapi({ required: ['mesh'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('CreateMeshOutput')

const PercentIntSchema = z.int().min(0).max(100).openapi('PercentInt')

const WeightedTargetSchema = z
  .object({
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The targeted port of the weighted object.' }),
    ).exactOptional(),
    virtualNode: ResourceNameSchema.and(
      z.any().openapi({ description: 'The virtual node to associate with the weighted target.' }),
    ),
    weight: PercentIntSchema.and(
      z.any().openapi({ description: 'The relative weight of the weighted target.' }),
    ),
  })
  .openapi({
    required: ['virtualNode', 'weight'],
    description:
      'An object that represents a target and its relative weight. Traffic is distributed across targets according to their relative weight. For example, a weighted target with a relative weight of 50 receives five times as much traffic as one with a relative weight of 10. The total weight for all targets combined must be less than or equal to 100.',
  })
  .openapi('WeightedTarget')

const WeightedTargetsSchema = z
  .array(WeightedTargetSchema)
  .min(1)
  .max(10)
  .openapi('WeightedTargets')

const GrpcRouteActionSchema = z
  .object({
    weightedTargets: WeightedTargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the targets that traffic is routed to when a request matches the route.',
        }),
    ),
  })
  .openapi({
    required: ['weightedTargets'],
    description: 'An object that represents the action to take if a match is determined.',
  })
  .openapi('GrpcRouteAction')

const GrpcRouteMetadataMatchMethodSchema = z
  .object({
    exact: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must match the specified value exactly.',
        }),
    ).exactOptional(),
    prefix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must begin with the specified characters.',
        }),
    ).exactOptional(),
    range: MatchRangeSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the range of values to match on.' }),
    ).exactOptional(),
    regex: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must include the specified characters.',
        }),
    ).exactOptional(),
    suffix: HeaderMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'The value sent by the client must end with the specified characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the match method. Specify one of the match values.',
    required: [],
  })
  .openapi('GrpcRouteMetadataMatchMethod')

const GrpcRouteMetadataSchema = z
  .object({
    invert: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.',
        }),
    ).exactOptional(),
    match: GrpcRouteMetadataMatchMethodSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the data to match from the request.' }),
    ).exactOptional(),
    name: HeaderNameSchema.and(z.any().openapi({ description: 'The name of the route.' })),
  })
  .openapi({
    required: ['name'],
    description: 'An object that represents the match metadata for the route.',
  })
  .openapi('GrpcRouteMetadata')

const GrpcRouteMetadataListSchema = z
  .array(GrpcRouteMetadataSchema)
  .min(1)
  .max(10)
  .openapi('GrpcRouteMetadataList')

const MethodNameSchema = z.string().min(1).max(50).openapi('MethodName')

const GrpcRouteMatchSchema = z
  .object({
    metadata: GrpcRouteMetadataListSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the data to match from the request.' }),
    ).exactOptional(),
    methodName: MethodNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The method name to match from the request. If you specify a name, you must also specify a <code>serviceName</code>.',
        }),
    ).exactOptional(),
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number to match on.' }),
    ).exactOptional(),
    serviceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The fully qualified domain name for the service to match from the request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the criteria for determining a request match.',
    required: [],
  })
  .openapi('GrpcRouteMatch')

const GrpcRetryPolicyEventSchema = z
  .enum(['cancelled', 'deadline-exceeded', 'internal', 'resource-exhausted', 'unavailable'])
  .openapi('GrpcRetryPolicyEvent')

const GrpcRetryPolicyEventsSchema = z
  .array(GrpcRetryPolicyEventSchema)
  .min(1)
  .max(5)
  .openapi('GrpcRetryPolicyEvents')

const HttpRetryPolicyEventSchema = z.string().min(1).max(25).openapi('HttpRetryPolicyEvent')

const HttpRetryPolicyEventsSchema = z
  .array(HttpRetryPolicyEventSchema)
  .min(1)
  .max(25)
  .openapi('HttpRetryPolicyEvents')

const MaxRetriesSchema = z.int().min(0).openapi('MaxRetries')

const DurationUnitSchema = z.enum(['s', 'ms']).openapi('DurationUnit')

const DurationValueSchema = z.int().min(0).openapi('DurationValue')

const DurationSchema = z
  .object({
    unit: DurationUnitSchema.and(
      z.any().openapi({ description: 'A unit of time.' }),
    ).exactOptional(),
    value: DurationValueSchema.and(
      z.any().openapi({ description: 'A number of time units.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a duration of time.', required: [] })
  .openapi('Duration')

const TcpRetryPolicyEventSchema = z.literal('connection-error').openapi('TcpRetryPolicyEvent')

const TcpRetryPolicyEventsSchema = z
  .array(TcpRetryPolicyEventSchema)
  .length(1)
  .openapi('TcpRetryPolicyEvents')

const GrpcRetryPolicySchema = z
  .object({
    grpcRetryEvents: GrpcRetryPolicyEventsSchema.and(
      z.any().openapi({ description: 'Specify at least one of the valid values.' }),
    ).exactOptional(),
    httpRetryEvents: HttpRetryPolicyEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify at least one of the following values.</p> <ul> <li> <p> <b>server-error</b> – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511</p> </li> <li> <p> <b>gateway-error</b> – HTTP status codes 502, 503, and 504</p> </li> <li> <p> <b>client-error</b> – HTTP status code 409</p> </li> <li> <p> <b>stream-error</b> – Retry on refused stream</p> </li> </ul>',
        }),
    ).exactOptional(),
    maxRetries: MaxRetriesSchema.and(
      z.any().openapi({ description: 'The maximum number of retry attempts.' }),
    ),
    perRetryTimeout: DurationSchema.and(
      z.any().openapi({ description: 'The timeout for each retry attempt.' }),
    ),
    tcpRetryEvents: TcpRetryPolicyEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['maxRetries', 'perRetryTimeout'],
    description:
      'An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.',
  })
  .openapi('GrpcRetryPolicy')

const GrpcTimeoutSchema = z
  .object({
    idle: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.',
        }),
    ).exactOptional(),
    perRequest: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents types of timeouts. ', required: [] })
  .openapi('GrpcTimeout')

const GrpcRouteSchema = z
  .object({
    action: GrpcRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the action to take if a match is determined.',
        }),
    ),
    match: GrpcRouteMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a request match.',
        }),
    ),
    retryPolicy: GrpcRetryPolicySchema.and(
      z.any().openapi({ description: 'An object that represents a retry policy.' }),
    ).exactOptional(),
    timeout: GrpcTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['action', 'match'],
    description: 'An object that represents a gRPC route type.',
  })
  .openapi('GrpcRoute')

const HttpRouteActionSchema = z
  .object({
    weightedTargets: WeightedTargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the targets that traffic is routed to when a request matches the route.',
        }),
    ),
  })
  .openapi({
    required: ['weightedTargets'],
    description: 'An object that represents the action to take if a match is determined.',
  })
  .openapi('HttpRouteAction')

const HttpRouteHeaderSchema = z
  .object({
    invert: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify <code>True</code> to match anything except the match criteria. The default value is <code>False</code>.',
        }),
    ).exactOptional(),
    match: HeaderMatchMethodSchema.and(
      z.any().openapi({ description: 'The <code>HeaderMatchMethod</code> object.' }),
    ).exactOptional(),
    name: HeaderNameSchema.and(
      z
        .any()
        .openapi({
          description: 'A name for the HTTP header in the client request that will be matched on.',
        }),
    ),
  })
  .openapi({
    required: ['name'],
    description: 'An object that represents the HTTP header in the request.',
  })
  .openapi('HttpRouteHeader')

const HttpRouteHeadersSchema = z
  .array(HttpRouteHeaderSchema)
  .min(1)
  .max(10)
  .openapi('HttpRouteHeaders')

const HttpSchemeSchema = z.enum(['http', 'https']).openapi('HttpScheme')

const HttpRouteMatchSchema = z
  .object({
    headers: HttpRouteHeadersSchema.and(
      z.any().openapi({ description: 'The client request headers to match on.' }),
    ).exactOptional(),
    method: HttpMethodSchema.and(
      z.any().openapi({ description: 'The client request method to match on. Specify only one.' }),
    ).exactOptional(),
    path: HttpPathMatchSchema.and(
      z.any().openapi({ description: 'The client request path to match on.' }),
    ).exactOptional(),
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number to match on.' }),
    ).exactOptional(),
    prefix: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the path to match requests with. This parameter must always start with <code>/</code>, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is <code>my-service.local</code> and you want the route to match requests to <code>my-service.local/metrics</code>, your prefix should be <code>/metrics</code>.',
        }),
    ).exactOptional(),
    queryParameters: HttpQueryParametersSchema.and(
      z.any().openapi({ description: 'The client request query parameters to match on.' }),
    ).exactOptional(),
    scheme: HttpSchemeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client request scheme to match on. Specify only one. Applicable only for HTTP2 routes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the requirements for a route to match HTTP requests for a virtual router.',
    required: [],
  })
  .openapi('HttpRouteMatch')

const HttpRetryPolicySchema = z
  .object({
    httpRetryEvents: HttpRetryPolicyEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify at least one of the following values.</p> <ul> <li> <p> <b>server-error</b> – HTTP status codes 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, and 511</p> </li> <li> <p> <b>gateway-error</b> – HTTP status codes 502, 503, and 504</p> </li> <li> <p> <b>client-error</b> – HTTP status code 409</p> </li> <li> <p> <b>stream-error</b> – Retry on refused stream</p> </li> </ul>',
        }),
    ).exactOptional(),
    maxRetries: MaxRetriesSchema.and(
      z.any().openapi({ description: 'The maximum number of retry attempts.' }),
    ),
    perRetryTimeout: DurationSchema.and(
      z.any().openapi({ description: 'The timeout for each retry attempt.' }),
    ),
    tcpRetryEvents: TcpRetryPolicyEventsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify a valid value. The event occurs before any processing of a request has started and is encountered when the upstream is temporarily or permanently unavailable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['maxRetries', 'perRetryTimeout'],
    description:
      'An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.',
  })
  .openapi('HttpRetryPolicy')

const HttpTimeoutSchema = z
  .object({
    idle: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.',
        }),
    ).exactOptional(),
    perRequest: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a per request timeout. The default value is 15 seconds. If you set a higher timeout, then make sure that the higher value is set for each App Mesh resource in a conversation. For example, if a virtual node backend uses a virtual router provider to route to another virtual node, then the timeout should be greater than 15 seconds for the source and destination virtual node and the route.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents types of timeouts. ', required: [] })
  .openapi('HttpTimeout')

const HttpRouteSchema = z
  .object({
    action: HttpRouteActionSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the action to take if a match is determined.',
        }),
    ),
    match: HttpRouteMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a request match.',
        }),
    ),
    retryPolicy: HttpRetryPolicySchema.and(
      z.any().openapi({ description: 'An object that represents a retry policy.' }),
    ).exactOptional(),
    timeout: HttpTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['action', 'match'],
    description: 'An object that represents an HTTP or HTTP/2 route type.',
  })
  .openapi('HttpRoute')

const RoutePrioritySchema = z.int().min(0).max(1000).openapi('RoutePriority')

const TcpRouteActionSchema = z
  .object({
    weightedTargets: WeightedTargetsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents the targets that traffic is routed to when a request matches the route.',
        }),
    ),
  })
  .openapi({
    required: ['weightedTargets'],
    description: 'An object that represents the action to take if a match is determined.',
  })
  .openapi('TcpRouteAction')

const TcpRouteMatchSchema = z
  .object({
    port: ListenerPortSchema.and(
      z.any().openapi({ description: 'The port number to match on.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object representing the TCP route to match.', required: [] })
  .openapi('TcpRouteMatch')

const TcpTimeoutSchema = z
  .object({
    idle: DurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents an idle timeout. An idle timeout bounds the amount of time that a connection may be idle. The default value is none.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents types of timeouts. ', required: [] })
  .openapi('TcpTimeout')

const TcpRouteSchema = z
  .object({
    action: TcpRouteActionSchema.and(
      z.any().openapi({ description: 'The action to take if a match is determined.' }),
    ),
    match: TcpRouteMatchSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the criteria for determining a request match.',
        }),
    ).exactOptional(),
    timeout: TcpTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['action'], description: 'An object that represents a TCP route type.' })
  .openapi('TcpRoute')

const RouteSpecSchema = z
  .object({
    grpcRoute: GrpcRouteSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the specification of a gRPC route.' }),
    ).exactOptional(),
    http2Route: HttpRouteSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents the specification of an HTTP/2 route.',
        }),
    ).exactOptional(),
    httpRoute: HttpRouteSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the specification of an HTTP route.' }),
    ).exactOptional(),
    priority: RoutePrioritySchema.and(
      z
        .any()
        .openapi({
          description:
            'The priority for the route. Routes are matched based on the specified value, where 0 is the highest priority.',
        }),
    ).exactOptional(),
    tcpRoute: TcpRouteSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents the specification of a TCP route.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents a route specification. Specify one route type.',
    required: [],
  })
  .openapi('RouteSpec')

const RouteStatusCodeSchema = z.enum(['ACTIVE', 'INACTIVE', 'DELETED']).openapi('RouteStatusCode')

const RouteStatusSchema = z
  .object({
    status: RouteStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status for the route.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the current status of a route.',
  })
  .openapi('RouteStatus')

const RouteDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service mesh that the route resides in.' }),
    ),
    metadata: ResourceMetadataSchema.and(
      z.any().openapi({ description: 'The associated metadata for the route.' }),
    ),
    routeName: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the route.' })),
    spec: RouteSpecSchema.and(z.any().openapi({ description: 'The specifications of the route.' })),
    status: RouteStatusSchema.and(z.any().openapi({ description: 'The status of the route.' })),
    virtualRouterName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The virtual router that the route is associated with.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'routeName', 'spec', 'status', 'virtualRouterName'],
    description: 'An object that represents a route returned by a describe operation.',
  })
  .openapi('RouteData')

const CreateRouteOutputSchema = z
  .object({
    route: RouteDataSchema.and(
      z
        .any()
        .openapi({ description: 'The full description of your mesh following the create call.' }),
    ),
  })
  .openapi({ required: ['route'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('CreateRouteOutput')

const VirtualGatewayListenerTlsFileCertificateSchema = z
  .object({
    certificateChain: FilePathSchema.and(
      z.any().openapi({ description: 'The certificate chain for the certificate.' }),
    ),
    privateKey: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The private key for a certificate stored on the file system of the mesh endpoint that the proxy is running on.',
        }),
    ),
  })
  .openapi({
    required: ['certificateChain', 'privateKey'],
    description:
      'An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.',
  })
  .openapi('VirtualGatewayListenerTlsFileCertificate')

const VirtualGatewaySdsSecretNameSchema = z.string().openapi('VirtualGatewaySdsSecretName')

const VirtualGatewayListenerTlsSdsCertificateSchema = z
  .object({
    secretName: VirtualGatewaySdsSecretNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents the name of the secret secret requested from the Secret Discovery Service provider representing Transport Layer Security (TLS) materials like a certificate or certificate chain.',
        }),
    ),
  })
  .openapi({
    required: ['secretName'],
    description:
      'An object that represents the virtual gateway\'s listener\'s Secret Discovery Service certificate.The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh<a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info. ',
  })
  .openapi('VirtualGatewayListenerTlsSdsCertificate')

const VirtualGatewayClientTlsCertificateSchema = z
  .object({
    file: VirtualGatewayListenerTlsFileCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a local file certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html"> Transport Layer Security (TLS) </a>.',
        }),
    ).exactOptional(),
    sds: VirtualGatewayListenerTlsSdsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's client's Secret Discovery Service certificate.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents the virtual gateway's client's Transport Layer Security (TLS) certificate.",
    required: [],
  })
  .openapi('VirtualGatewayClientTlsCertificate')

const VirtualGatewayCertificateAuthorityArnsSchema = z
  .array(ArnSchema)
  .min(1)
  .max(3)
  .openapi('VirtualGatewayCertificateAuthorityArns')

const VirtualGatewayTlsValidationContextAcmTrustSchema = z
  .object({
    certificateAuthorityArns: VirtualGatewayCertificateAuthorityArnsSchema.and(
      z.any().openapi({ description: 'One or more ACM Amazon Resource Name (ARN)s.' }),
    ),
  })
  .openapi({
    required: ['certificateAuthorityArns'],
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.',
  })
  .openapi('VirtualGatewayTlsValidationContextAcmTrust')

const VirtualGatewayTlsValidationContextFileTrustSchema = z
  .object({
    certificateChain: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            'The certificate trust chain for a certificate stored on the file system of the virtual node that the proxy is running on.',
        }),
    ),
  })
  .openapi({
    required: ['certificateChain'],
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
  })
  .openapi('VirtualGatewayTlsValidationContextFileTrust')

const VirtualGatewayTlsValidationContextSdsTrustSchema = z
  .object({
    secretName: VirtualGatewaySdsSecretNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents the name of the secret for a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
        }),
    ),
  })
  .openapi({
    required: ['secretName'],
    description:
      'An object that represents a virtual gateway\'s listener\'s Transport Layer Security (TLS) Secret Discovery Service validation context trust. The proxy must be configured with a local SDS provider via a Unix Domain Socket. See App Mesh <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html">TLS documentation</a> for more info.',
  })
  .openapi('VirtualGatewayTlsValidationContextSdsTrust')

const VirtualGatewayTlsValidationContextTrustSchema = z
  .object({
    acm: VirtualGatewayTlsValidationContextAcmTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) validation context trust for an Certificate Manager certificate.',
        }),
    ).exactOptional(),
    file: VirtualGatewayTlsValidationContextFileTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
        }),
    ).exactOptional(),
    sds: VirtualGatewayTlsValidationContextSdsTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents a Transport Layer Security (TLS) validation context trust.',
    required: [],
  })
  .openapi('VirtualGatewayTlsValidationContextTrust')

const VirtualGatewayTlsValidationContextSchema = z
  .object({
    subjectAlternativeNames: SubjectAlternativeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents the SANs for a virtual gateway's listener's Transport Layer Security (TLS) validation context.",
        }),
    ).exactOptional(),
    trust: VirtualGatewayTlsValidationContextTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.',
        }),
    ),
  })
  .openapi({
    required: ['trust'],
    description: 'An object that represents a Transport Layer Security (TLS) validation context.',
  })
  .openapi('VirtualGatewayTlsValidationContext')

const VirtualGatewayClientPolicyTlsSchema = z
  .object({
    certificate: VirtualGatewayClientTlsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's client's Transport Layer Security (TLS) certificate.",
        }),
    ).exactOptional(),
    enforce: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Whether the policy is enforced. The default is <code>True</code>, if a value isn't specified.",
        }),
    ).exactOptional(),
    ports: PortSetSchema.and(
      z.any().openapi({ description: 'One or more ports that the policy is enforced for.' }),
    ).exactOptional(),
    validation: VirtualGatewayTlsValidationContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) validation context.',
        }),
    ),
  })
  .openapi({
    required: ['validation'],
    description: 'An object that represents a Transport Layer Security (TLS) client policy.',
  })
  .openapi('VirtualGatewayClientPolicyTls')

const VirtualGatewayClientPolicySchema = z
  .object({
    tls: VirtualGatewayClientPolicyTlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents a Transport Layer Security (TLS) client policy.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents a client policy.', required: [] })
  .openapi('VirtualGatewayClientPolicy')

const VirtualGatewayBackendDefaultsSchema = z
  .object({
    clientPolicy: VirtualGatewayClientPolicySchema.and(
      z.any().openapi({ description: 'A reference to an object that represents a client policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the default properties for a backend.',
    required: [],
  })
  .openapi('VirtualGatewayBackendDefaults')

const MaxRequestsSchema = z.int().min(1).openapi('MaxRequests')

const VirtualGatewayGrpcConnectionPoolSchema = z
  .object({
    maxRequests: MaxRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.',
        }),
    ),
  })
  .openapi({
    required: ['maxRequests'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualGatewayGrpcConnectionPool')

const MaxConnectionsSchema = z.int().min(1).openapi('MaxConnections')

const MaxPendingRequestsSchema = z.int().min(1).openapi('MaxPendingRequests')

const VirtualGatewayHttpConnectionPoolSchema = z
  .object({
    maxConnections: MaxConnectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.',
        }),
    ),
    maxPendingRequests: MaxPendingRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of overflowing requests after <code>max_connections</code> Envoy will queue to upstream cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['maxConnections'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualGatewayHttpConnectionPool')

const VirtualGatewayHttp2ConnectionPoolSchema = z
  .object({
    maxRequests: MaxRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.',
        }),
    ),
  })
  .openapi({
    required: ['maxRequests'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualGatewayHttp2ConnectionPool')

const VirtualGatewayConnectionPoolSchema = z
  .object({
    grpc: VirtualGatewayGrpcConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool. ' }),
    ).exactOptional(),
    http: VirtualGatewayHttpConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
    http2: VirtualGatewayHttp2ConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that represents the type of virtual gateway connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p>',
    required: [],
  })
  .openapi('VirtualGatewayConnectionPool')

const VirtualGatewayHealthCheckThresholdSchema = z
  .int()
  .min(2)
  .max(10)
  .openapi('VirtualGatewayHealthCheckThreshold')

const VirtualGatewayHealthCheckIntervalMillisSchema = z
  .int()
  .min(5000)
  .max(300000)
  .openapi('VirtualGatewayHealthCheckIntervalMillis')

const VirtualGatewayPortProtocolSchema = z
  .enum(['http', 'http2', 'grpc'])
  .openapi('VirtualGatewayPortProtocol')

const VirtualGatewayHealthCheckTimeoutMillisSchema = z
  .int()
  .min(2000)
  .max(60000)
  .openapi('VirtualGatewayHealthCheckTimeoutMillis')

const VirtualGatewayHealthCheckPolicySchema = z
  .object({
    healthyThreshold: VirtualGatewayHealthCheckThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive successful health checks that must occur before declaring the listener healthy.',
        }),
    ),
    intervalMillis: VirtualGatewayHealthCheckIntervalMillisSchema.and(
      z
        .any()
        .openapi({
          description: 'The time period in milliseconds between each health check execution.',
        }),
    ),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.',
        }),
    ).exactOptional(),
    port: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination port for the health check request. This port must match the port defined in the <a>PortMapping</a> for the listener.',
        }),
    ).exactOptional(),
    protocol: VirtualGatewayPortProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for the health check request. If you specify <code>grpc</code>, then your service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health Checking Protocol</a>.',
        }),
    ),
    timeoutMillis: VirtualGatewayHealthCheckTimeoutMillisSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait when receiving a response from the health check, in milliseconds.',
        }),
    ),
    unhealthyThreshold: VirtualGatewayHealthCheckThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive failed health checks that must occur before declaring a virtual gateway unhealthy.',
        }),
    ),
  })
  .openapi({
    required: [
      'healthyThreshold',
      'intervalMillis',
      'protocol',
      'timeoutMillis',
      'unhealthyThreshold',
    ],
    description:
      "An object that represents the health check policy for a virtual gateway's listener.",
  })
  .openapi('VirtualGatewayHealthCheckPolicy')

const VirtualGatewayPortMappingSchema = z
  .object({
    port: PortNumberSchema.and(
      z.any().openapi({ description: 'The port used for the port mapping. Specify one protocol.' }),
    ),
    protocol: VirtualGatewayPortProtocolSchema.and(
      z.any().openapi({ description: 'The protocol used for the port mapping.' }),
    ),
  })
  .openapi({
    required: ['port', 'protocol'],
    description: 'An object that represents a port mapping.',
  })
  .openapi('VirtualGatewayPortMapping')

const VirtualGatewayListenerTlsAcmCertificateSchema = z
  .object({
    certificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.',
        }),
    ),
  })
  .openapi({
    required: ['certificateArn'],
    description: 'An object that represents an Certificate Manager certificate.',
  })
  .openapi('VirtualGatewayListenerTlsAcmCertificate')

const VirtualGatewayListenerTlsCertificateSchema = z
  .object({
    acm: VirtualGatewayListenerTlsAcmCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents an Certificate Manager certificate.',
        }),
    ).exactOptional(),
    file: VirtualGatewayListenerTlsFileCertificateSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents a local file certificate.',
        }),
    ).exactOptional(),
    sds: VirtualGatewayListenerTlsSdsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's listener's Secret Discovery Service certificate.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents a listener's Transport Layer Security (TLS) certificate.",
    required: [],
  })
  .openapi('VirtualGatewayListenerTlsCertificate')

const VirtualGatewayListenerTlsModeSchema = z
  .enum(['STRICT', 'PERMISSIVE', 'DISABLED'])
  .openapi('VirtualGatewayListenerTlsMode')

const VirtualGatewayListenerTlsValidationContextTrustSchema = z
  .object({
    file: VirtualGatewayTlsValidationContextFileTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
        }),
    ).exactOptional(),
    sds: VirtualGatewayTlsValidationContextSdsTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context trust.",
    required: [],
  })
  .openapi('VirtualGatewayListenerTlsValidationContextTrust')

const VirtualGatewayListenerTlsValidationContextSchema = z
  .object({
    subjectAlternativeNames: SubjectAlternativeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents the SANs for a virtual gateway listener's Transport Layer Security (TLS) validation context.",
        }),
    ).exactOptional(),
    trust: VirtualGatewayListenerTlsValidationContextTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.',
        }),
    ),
  })
  .openapi({
    required: ['trust'],
    description:
      "An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.",
  })
  .openapi('VirtualGatewayListenerTlsValidationContext')

const VirtualGatewayListenerTlsSchema = z
  .object({
    certificate: VirtualGatewayListenerTlsCertificateSchema.and(
      z
        .any()
        .openapi({
          description: 'An object that represents a Transport Layer Security (TLS) certificate.',
        }),
    ),
    mode: VirtualGatewayListenerTlsModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one of the following modes.</p> <ul> <li> <p> <b/>STRICT – Listener only accepts connections with TLS enabled. </p> </li> <li> <p> <b/>PERMISSIVE – Listener accepts connections with or without TLS enabled.</p> </li> <li> <p> <b/>DISABLED – Listener only accepts connections without TLS. </p> </li> </ul>',
        }),
    ),
    validation: VirtualGatewayListenerTlsValidationContextSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['certificate', 'mode'],
    description:
      'An object that represents the Transport Layer Security (TLS) properties for a listener.',
  })
  .openapi('VirtualGatewayListenerTls')

const VirtualGatewayListenerSchema = z
  .object({
    connectionPool: VirtualGatewayConnectionPoolSchema.and(
      z
        .any()
        .openapi({
          description: 'The connection pool information for the virtual gateway listener.',
        }),
    ).exactOptional(),
    healthCheck: VirtualGatewayHealthCheckPolicySchema.and(
      z.any().openapi({ description: 'The health check information for the listener.' }),
    ).exactOptional(),
    portMapping: VirtualGatewayPortMappingSchema.and(
      z.any().openapi({ description: 'The port mapping information for the listener.' }),
    ),
    tls: VirtualGatewayListenerTlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents the Transport Layer Security (TLS) properties for the listener.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['portMapping'],
    description: 'An object that represents a listener for a virtual gateway.',
  })
  .openapi('VirtualGatewayListener')

const VirtualGatewayListenersSchema = z
  .array(VirtualGatewayListenerSchema)
  .openapi('VirtualGatewayListeners')

const VirtualGatewayFileAccessLogSchema = z
  .object({
    format: LoggingFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The specified format for the virtual gateway access logs. It can be either <code>json_format</code> or <code>text_format</code>.',
        }),
    ).exactOptional(),
    path: FilePathSchema.and(
      z
        .any()
        .openapi({
          description:
            "The file path to write access logs to. You can use <code>/dev/stdout</code> to send access logs to standard out and configure your Envoy container to use a log driver, such as <code>awslogs</code>, to export the access logs to a log storage service such as Amazon CloudWatch Logs. You can also specify a path in the Envoy container's file system to write the files to disk.",
        }),
    ),
  })
  .openapi({ required: ['path'], description: 'An object that represents an access log file.' })
  .openapi('VirtualGatewayFileAccessLog')

const VirtualGatewayAccessLogSchema = z
  .object({
    file: VirtualGatewayFileAccessLogSchema.and(
      z.any().openapi({ description: 'The file object to send virtual gateway access logs to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The access log configuration for a virtual gateway.', required: [] })
  .openapi('VirtualGatewayAccessLog')

const VirtualGatewayLoggingSchema = z
  .object({
    accessLog: VirtualGatewayAccessLogSchema.and(
      z.any().openapi({ description: 'The access log configuration.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An object that represents logging information.', required: [] })
  .openapi('VirtualGatewayLogging')

const VirtualGatewaySpecSchema = z
  .object({
    backendDefaults: VirtualGatewayBackendDefaultsSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents the defaults for backends.',
        }),
    ).exactOptional(),
    listeners: VirtualGatewayListenersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.',
        }),
    ),
    logging: VirtualGatewayLoggingSchema.exactOptional(),
  })
  .openapi({
    required: ['listeners'],
    description: 'An object that represents the specification of a service mesh resource.',
  })
  .openapi('VirtualGatewaySpec')

const VirtualGatewayStatusCodeSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
  .openapi('VirtualGatewayStatusCode')

const VirtualGatewayStatusSchema = z
  .object({
    status: VirtualGatewayStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the status of the mesh resource.',
  })
  .openapi('VirtualGatewayStatus')

const VirtualGatewayDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service mesh that the virtual gateway resides in.',
        }),
    ),
    metadata: ResourceMetadataSchema,
    spec: VirtualGatewaySpecSchema.and(
      z.any().openapi({ description: 'The specifications of the virtual gateway.' }),
    ),
    status: VirtualGatewayStatusSchema.and(
      z.any().openapi({ description: 'The current status of the virtual gateway.' }),
    ),
    virtualGatewayName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual gateway.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'spec', 'status', 'virtualGatewayName'],
    description: 'An object that represents a virtual gateway returned by a describe operation.',
  })
  .openapi('VirtualGatewayData')

const CreateVirtualGatewayOutputSchema = z
  .object({
    virtualGateway: VirtualGatewayDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your virtual gateway following the create call.',
        }),
    ),
  })
  .openapi({ required: ['virtualGateway'] })
  .openapi('CreateVirtualGatewayOutput')

const BackendDefaultsSchema = z
  .object({
    clientPolicy: ClientPolicySchema.and(
      z.any().openapi({ description: 'A reference to an object that represents a client policy.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the default properties for a backend.',
    required: [],
  })
  .openapi('BackendDefaults')

const BackendSchema: z.ZodType<BackendType> = z
  .lazy(() =>
    z
      .object({
        virtualService: VirtualServiceBackendSchema.and(
          z.any().openapi({ description: 'Specifies a virtual service to use as a backend. ' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An object that represents the backends that a virtual node is expected to send outbound traffic to.',
        required: [],
      }),
  )
  .openapi('Backend')

const BackendsSchema = z.array(BackendSchema).openapi('Backends')

const VirtualNodeGrpcConnectionPoolSchema = z
  .object({
    maxRequests: MaxRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.',
        }),
    ),
  })
  .openapi({
    required: ['maxRequests'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualNodeGrpcConnectionPool')

const VirtualNodeHttpConnectionPoolSchema = z
  .object({
    maxConnections: MaxConnectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.',
        }),
    ),
    maxPendingRequests: MaxPendingRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of overflowing requests after <code>max_connections</code> Envoy will queue to upstream cluster.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['maxConnections'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualNodeHttpConnectionPool')

const VirtualNodeHttp2ConnectionPoolSchema = z
  .object({
    maxRequests: MaxRequestsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of inflight requests Envoy can concurrently support across hosts in upstream cluster.',
        }),
    ),
  })
  .openapi({
    required: ['maxRequests'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualNodeHttp2ConnectionPool')

const VirtualNodeTcpConnectionPoolSchema = z
  .object({
    maxConnections: MaxConnectionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum number of outbound TCP connections Envoy can establish concurrently with all hosts in upstream cluster.',
        }),
    ),
  })
  .openapi({
    required: ['maxConnections'],
    description: 'An object that represents a type of connection pool.',
  })
  .openapi('VirtualNodeTcpConnectionPool')

const VirtualNodeConnectionPoolSchema = z
  .object({
    grpc: VirtualNodeGrpcConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
    http: VirtualNodeHttpConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
    http2: VirtualNodeHttp2ConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
    tcp: VirtualNodeTcpConnectionPoolSchema.and(
      z.any().openapi({ description: 'An object that represents a type of connection pool.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>An object that represents the type of virtual node connection pool.</p> <p>Only one protocol is used at a time and should be the same protocol as the one chosen under port mapping.</p> <p>If not present the default value for <code>maxPendingRequests</code> is <code>2147483647</code>.</p> <p/>',
    required: [],
  })
  .openapi('VirtualNodeConnectionPool')

const HealthCheckThresholdSchema = z.int().min(2).max(10).openapi('HealthCheckThreshold')

const HealthCheckIntervalMillisSchema = z
  .int()
  .min(5000)
  .max(300000)
  .openapi('HealthCheckIntervalMillis')

const PortProtocolSchema = z.enum(['http', 'tcp', 'http2', 'grpc']).openapi('PortProtocol')

const HealthCheckTimeoutMillisSchema = z
  .int()
  .min(2000)
  .max(60000)
  .openapi('HealthCheckTimeoutMillis')

const HealthCheckPolicySchema = z
  .object({
    healthyThreshold: HealthCheckThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive successful health checks that must occur before declaring listener healthy.',
        }),
    ),
    intervalMillis: HealthCheckIntervalMillisSchema.and(
      z
        .any()
        .openapi({
          description: 'The time period in milliseconds between each health check execution.',
        }),
    ),
    path: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination path for the health check request. This value is only used if the specified protocol is HTTP or HTTP/2. For any other protocol, this value is ignored.',
        }),
    ).exactOptional(),
    port: PortNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            'The destination port for the health check request. This port must match the port defined in the <a>PortMapping</a> for the listener.',
        }),
    ).exactOptional(),
    protocol: PortProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            'The protocol for the health check request. If you specify <code>grpc</code>, then your service must conform to the <a href="https://github.com/grpc/grpc/blob/master/doc/health-checking.md">GRPC Health Checking Protocol</a>.',
        }),
    ),
    timeoutMillis: HealthCheckTimeoutMillisSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time to wait when receiving a response from the health check, in milliseconds.',
        }),
    ),
    unhealthyThreshold: HealthCheckThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of consecutive failed health checks that must occur before declaring a virtual node unhealthy. ',
        }),
    ),
  })
  .openapi({
    required: [
      'healthyThreshold',
      'intervalMillis',
      'protocol',
      'timeoutMillis',
      'unhealthyThreshold',
    ],
    description: "An object that represents the health check policy for a virtual node's listener.",
  })
  .openapi('HealthCheckPolicy')

const OutlierDetectionMaxEjectionPercentSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi('OutlierDetectionMaxEjectionPercent')

const OutlierDetectionMaxServerErrorsSchema = z
  .int()
  .min(1)
  .openapi('OutlierDetectionMaxServerErrors')

const OutlierDetectionSchema = z
  .object({
    baseEjectionDuration: DurationSchema.and(
      z.any().openapi({ description: 'The base amount of time for which a host is ejected.' }),
    ),
    interval: DurationSchema.and(
      z.any().openapi({ description: 'The time interval between ejection sweep analysis.' }),
    ),
    maxEjectionPercent: OutlierDetectionMaxEjectionPercentSchema.and(
      z
        .any()
        .openapi({
          description:
            'Maximum percentage of hosts in load balancing pool for upstream service that can be ejected. Will eject at least one host regardless of the value.',
        }),
    ),
    maxServerErrors: OutlierDetectionMaxServerErrorsSchema.and(
      z
        .any()
        .openapi({
          description: 'Number of consecutive <code>5xx</code> errors required for ejection. ',
        }),
    ),
  })
  .openapi({
    required: ['baseEjectionDuration', 'interval', 'maxEjectionPercent', 'maxServerErrors'],
    description: "An object that represents the outlier detection for a virtual node's listener.",
  })
  .openapi('OutlierDetection')

const PortMappingSchema = z
  .object({
    port: PortNumberSchema.and(
      z.any().openapi({ description: 'The port used for the port mapping.' }),
    ),
    protocol: PortProtocolSchema.and(
      z
        .any()
        .openapi({ description: 'The protocol used for the port mapping. Specify one protocol.' }),
    ),
  })
  .openapi({
    required: ['port', 'protocol'],
    description: 'An object that represents a port mapping.',
  })
  .openapi('PortMapping')

const ListenerTimeoutSchema = z
  .object({
    grpc: GrpcTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
    http: HttpTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
    http2: HttpTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
    tcp: TcpTimeoutSchema.and(
      z.any().openapi({ description: 'An object that represents types of timeouts. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents timeouts for different protocols.',
    required: [],
  })
  .openapi('ListenerTimeout')

const ListenerTlsAcmCertificateSchema = z
  .object({
    certificateArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the certificate. The certificate must meet specific requirements and you must have proxy authorization enabled. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/tls.html#virtual-node-tls-prerequisites">Transport Layer Security (TLS)</a>.',
        }),
    ),
  })
  .openapi({
    required: ['certificateArn'],
    description: 'An object that represents an Certificate Manager certificate.',
  })
  .openapi('ListenerTlsAcmCertificate')

const ListenerTlsCertificateSchema = z
  .object({
    acm: ListenerTlsAcmCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents an Certificate Manager certificate.',
        }),
    ).exactOptional(),
    file: ListenerTlsFileCertificateSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents a local file certificate.',
        }),
    ).exactOptional(),
    sds: ListenerTlsSdsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a listener's Secret Discovery Service certificate.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents a listener's Transport Layer Security (TLS) certificate.",
    required: [],
  })
  .openapi('ListenerTlsCertificate')

const ListenerTlsModeSchema = z
  .enum(['STRICT', 'PERMISSIVE', 'DISABLED'])
  .openapi('ListenerTlsMode')

const ListenerTlsValidationContextTrustSchema = z
  .object({
    file: TlsValidationContextFileTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that represents a Transport Layer Security (TLS) validation context trust for a local file.',
        }),
    ).exactOptional(),
    sds: TlsValidationContextSdsTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a listener's Transport Layer Security (TLS) Secret Discovery Service validation context trust.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "An object that represents a listener's Transport Layer Security (TLS) validation context trust.",
    required: [],
  })
  .openapi('ListenerTlsValidationContextTrust')

const ListenerTlsValidationContextSchema = z
  .object({
    subjectAlternativeNames: SubjectAlternativeNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents the SANs for a listener's Transport Layer Security (TLS) validation context.",
        }),
    ).exactOptional(),
    trust: ListenerTlsValidationContextTrustSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to where to retrieve the trust chain when validating a peer’s Transport Layer Security (TLS) certificate.',
        }),
    ),
  })
  .openapi({
    required: ['trust'],
    description:
      "An object that represents a listener's Transport Layer Security (TLS) validation context.",
  })
  .openapi('ListenerTlsValidationContext')

const ListenerTlsSchema = z
  .object({
    certificate: ListenerTlsCertificateSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a listener's Transport Layer Security (TLS) certificate.",
        }),
    ),
    mode: ListenerTlsModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one of the following modes.</p> <ul> <li> <p> <b/>STRICT – Listener only accepts connections with TLS enabled. </p> </li> <li> <p> <b/>PERMISSIVE – Listener accepts connections with or without TLS enabled.</p> </li> <li> <p> <b/>DISABLED – Listener only accepts connections without TLS. </p> </li> </ul>',
        }),
    ),
    validation: ListenerTlsValidationContextSchema.and(
      z
        .any()
        .openapi({
          description:
            "A reference to an object that represents a listener's Transport Layer Security (TLS) validation context.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['certificate', 'mode'],
    description:
      'An object that represents the Transport Layer Security (TLS) properties for a listener.',
  })
  .openapi('ListenerTls')

const ListenerSchema = z
  .object({
    connectionPool: VirtualNodeConnectionPoolSchema.and(
      z.any().openapi({ description: 'The connection pool information for the listener.' }),
    ).exactOptional(),
    healthCheck: HealthCheckPolicySchema.and(
      z.any().openapi({ description: 'The health check information for the listener.' }),
    ).exactOptional(),
    outlierDetection: OutlierDetectionSchema.and(
      z.any().openapi({ description: 'The outlier detection information for the listener.' }),
    ).exactOptional(),
    portMapping: PortMappingSchema.and(
      z.any().openapi({ description: 'The port mapping information for the listener.' }),
    ),
    timeout: ListenerTimeoutSchema.and(
      z
        .any()
        .openapi({ description: 'An object that represents timeouts for different protocols.' }),
    ).exactOptional(),
    tls: ListenerTlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A reference to an object that represents the Transport Layer Security (TLS) properties for a listener.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['portMapping'],
    description: 'An object that represents a listener for a virtual node.',
  })
  .openapi('Listener')

const ListenersSchema = z.array(ListenerSchema).openapi('Listeners')

const AccessLogSchema: z.ZodType<AccessLogType> = z
  .lazy(() =>
    z
      .object({
        file: FileAccessLogSchema.and(
          z.any().openapi({ description: 'The file object to send virtual node access logs to.' }),
        ).exactOptional(),
      })
      .openapi({
        description: 'An object that represents the access logging information for a virtual node.',
        required: [],
      }),
  )
  .openapi('AccessLog')

const LoggingSchema = z
  .object({
    accessLog: AccessLogSchema.and(
      z.any().openapi({ description: 'The access log configuration for a virtual node.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the logging information for a virtual node.',
    required: [],
  })
  .openapi('Logging')

const ServiceDiscoverySchema: z.ZodType<ServiceDiscoveryType> = z
  .lazy(() =>
    z
      .object({
        awsCloudMap: AwsCloudMapServiceDiscoverySchema.and(
          z
            .any()
            .openapi({ description: 'Specifies any Cloud Map information for the virtual node.' }),
        ).exactOptional(),
        dns: DnsServiceDiscoverySchema.and(
          z.any().openapi({ description: 'Specifies the DNS information for the virtual node.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An object that represents the service discovery information for a virtual node.',
        required: [],
      }),
  )
  .openapi('ServiceDiscovery')

const VirtualNodeSpecSchema = z
  .object({
    backendDefaults: BackendDefaultsSchema.and(
      z
        .any()
        .openapi({
          description: 'A reference to an object that represents the defaults for backends.',
        }),
    ).exactOptional(),
    backends: BackendsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The backends that the virtual node is expected to send outbound traffic to.',
        }),
    ).exactOptional(),
    listeners: ListenersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.',
        }),
    ).exactOptional(),
    logging: LoggingSchema.and(
      z
        .any()
        .openapi({
          description: 'The inbound and outbound access logging information for the virtual node.',
        }),
    ).exactOptional(),
    serviceDiscovery: ServiceDiscoverySchema.and(
      z
        .any()
        .openapi({
          description:
            'The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a <code>listener</code>, then you must specify service discovery information.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the specification of a virtual node.',
    required: [],
  })
  .openapi('VirtualNodeSpec')

const VirtualNodeStatusCodeSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
  .openapi('VirtualNodeStatusCode')

const VirtualNodeStatusSchema = z
  .object({
    status: VirtualNodeStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status of the virtual node.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the current status of the virtual node.',
  })
  .openapi('VirtualNodeStatus')

const VirtualNodeDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service mesh that the virtual node resides in.' }),
    ),
    metadata: ResourceMetadataSchema.and(
      z.any().openapi({ description: 'The associated metadata for the virtual node.' }),
    ),
    spec: VirtualNodeSpecSchema.and(
      z.any().openapi({ description: 'The specifications of the virtual node.' }),
    ),
    status: VirtualNodeStatusSchema.and(
      z.any().openapi({ description: 'The current status for the virtual node.' }),
    ),
    virtualNodeName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual node.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'spec', 'status', 'virtualNodeName'],
    description: 'An object that represents a virtual node returned by a describe operation.',
  })
  .openapi('VirtualNodeData')

const CreateVirtualNodeOutputSchema = z
  .object({
    virtualNode: VirtualNodeDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your virtual node following the create call.',
        }),
    ),
  })
  .openapi({ required: ['virtualNode'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('CreateVirtualNodeOutput')

const VirtualRouterListenerSchema = z
  .object({ portMapping: PortMappingSchema })
  .openapi({
    required: ['portMapping'],
    description: 'An object that represents a virtual router listener.',
  })
  .openapi('VirtualRouterListener')

const VirtualRouterListenersSchema = z
  .array(VirtualRouterListenerSchema)
  .openapi('VirtualRouterListeners')

const VirtualRouterSpecSchema = z
  .object({
    listeners: VirtualRouterListenersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The listeners that the virtual router is expected to receive inbound traffic from. You can specify one listener.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the specification of a virtual router.',
    required: [],
  })
  .openapi('VirtualRouterSpec')

const VirtualRouterStatusCodeSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
  .openapi('VirtualRouterStatusCode')

const VirtualRouterStatusSchema = z
  .object({
    status: VirtualRouterStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status of the virtual router.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the status of a virtual router. ',
  })
  .openapi('VirtualRouterStatus')

const VirtualRouterDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service mesh that the virtual router resides in.',
        }),
    ),
    metadata: ResourceMetadataSchema.and(
      z.any().openapi({ description: 'The associated metadata for the virtual router.' }),
    ),
    spec: VirtualRouterSpecSchema.and(
      z.any().openapi({ description: 'The specifications of the virtual router.' }),
    ),
    status: VirtualRouterStatusSchema.and(
      z.any().openapi({ description: 'The current status of the virtual router.' }),
    ),
    virtualRouterName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual router.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'spec', 'status', 'virtualRouterName'],
    description: 'An object that represents a virtual router returned by a describe operation.',
  })
  .openapi('VirtualRouterData')

const CreateVirtualRouterOutputSchema = z
  .object({
    virtualRouter: VirtualRouterDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your virtual router following the create call.',
        }),
    ),
  })
  .openapi({ required: ['virtualRouter'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('CreateVirtualRouterOutput')

const VirtualNodeServiceProviderSchema = z
  .object({
    virtualNodeName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the virtual node that is acting as a service provider.',
        }),
    ),
  })
  .openapi({
    required: ['virtualNodeName'],
    description: 'An object that represents a virtual node service provider.',
  })
  .openapi('VirtualNodeServiceProvider')

const VirtualRouterServiceProviderSchema = z
  .object({
    virtualRouterName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the virtual router that is acting as a service provider.',
        }),
    ),
  })
  .openapi({
    required: ['virtualRouterName'],
    description: 'An object that represents a virtual node service provider.',
  })
  .openapi('VirtualRouterServiceProvider')

const VirtualServiceProviderSchema = z
  .object({
    virtualNode: VirtualNodeServiceProviderSchema.and(
      z.any().openapi({ description: 'The virtual node associated with a virtual service.' }),
    ).exactOptional(),
    virtualRouter: VirtualRouterServiceProviderSchema.and(
      z.any().openapi({ description: 'The virtual router associated with a virtual service.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the provider for a virtual service.',
    required: [],
  })
  .openapi('VirtualServiceProvider')

const VirtualServiceSpecSchema = z
  .object({
    provider: VirtualServiceProviderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that represents the specification of a virtual service.',
    required: [],
  })
  .openapi('VirtualServiceSpec')

const VirtualServiceStatusCodeSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'DELETED'])
  .openapi('VirtualServiceStatusCode')

const VirtualServiceStatusSchema = z
  .object({
    status: VirtualServiceStatusCodeSchema.and(
      z.any().openapi({ description: 'The current status of the virtual service.' }),
    ),
  })
  .openapi({
    required: ['status'],
    description: 'An object that represents the status of a virtual service.',
  })
  .openapi('VirtualServiceStatus')

const VirtualServiceDataSchema = z
  .object({
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service mesh that the virtual service resides in.',
        }),
    ),
    metadata: ResourceMetadataSchema,
    spec: VirtualServiceSpecSchema.and(
      z.any().openapi({ description: 'The specifications of the virtual service.' }),
    ),
    status: VirtualServiceStatusSchema.and(
      z.any().openapi({ description: 'The current status of the virtual service.' }),
    ),
    virtualServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual service.' }),
    ),
  })
  .openapi({
    required: ['meshName', 'metadata', 'spec', 'status', 'virtualServiceName'],
    description: 'An object that represents a virtual service returned by a describe operation.',
  })
  .openapi('VirtualServiceData')

const CreateVirtualServiceOutputSchema = z
  .object({
    virtualService: VirtualServiceDataSchema.and(
      z
        .any()
        .openapi({
          description: 'The full description of your virtual service following the create call.',
        }),
    ),
  })
  .openapi({ required: ['virtualService'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('CreateVirtualServiceOutput')

const DeleteGatewayRouteOutputSchema = z
  .object({
    gatewayRoute: GatewayRouteDataSchema.and(
      z.any().openapi({ description: 'The gateway route that was deleted.' }),
    ),
  })
  .openapi({ required: ['gatewayRoute'] })
  .openapi('DeleteGatewayRouteOutput')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DeleteMeshOutputSchema = z
  .object({
    mesh: MeshDataSchema.and(
      z.any().openapi({ description: 'The service mesh that was deleted.' }),
    ),
  })
  .openapi({ required: ['mesh'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteMeshOutput')

const DeleteRouteOutputSchema = z
  .object({
    route: RouteDataSchema.and(z.any().openapi({ description: 'The route that was deleted.' })),
  })
  .openapi({ required: ['route'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteRouteOutput')

const DeleteVirtualGatewayOutputSchema = z
  .object({
    virtualGateway: VirtualGatewayDataSchema.and(
      z.any().openapi({ description: 'The virtual gateway that was deleted.' }),
    ),
  })
  .openapi({ required: ['virtualGateway'] })
  .openapi('DeleteVirtualGatewayOutput')

const DeleteVirtualNodeOutputSchema = z
  .object({
    virtualNode: VirtualNodeDataSchema.and(
      z.any().openapi({ description: 'The virtual node that was deleted.' }),
    ),
  })
  .openapi({ required: ['virtualNode'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteVirtualNodeOutput')

const DeleteVirtualRouterOutputSchema = z
  .object({
    virtualRouter: VirtualRouterDataSchema.and(
      z.any().openapi({ description: 'The virtual router that was deleted.' }),
    ),
  })
  .openapi({ required: ['virtualRouter'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteVirtualRouterOutput')

const DeleteVirtualServiceOutputSchema = z
  .object({
    virtualService: VirtualServiceDataSchema.and(
      z.any().openapi({ description: 'The virtual service that was deleted.' }),
    ),
  })
  .openapi({ required: ['virtualService'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteVirtualServiceOutput')

const DescribeGatewayRouteOutputSchema = z
  .object({
    gatewayRoute: GatewayRouteDataSchema.and(
      z.any().openapi({ description: 'The full description of your gateway route.' }),
    ),
  })
  .openapi({ required: ['gatewayRoute'] })
  .openapi('DescribeGatewayRouteOutput')

const DescribeMeshOutputSchema = z
  .object({
    mesh: MeshDataSchema.and(
      z.any().openapi({ description: 'The full description of your service mesh.' }),
    ),
  })
  .openapi({ required: ['mesh'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeMeshOutput')

const DescribeRouteOutputSchema = z
  .object({
    route: RouteDataSchema.and(
      z.any().openapi({ description: 'The full description of your route.' }),
    ),
  })
  .openapi({ required: ['route'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeRouteOutput')

const DescribeVirtualGatewayOutputSchema = z
  .object({
    virtualGateway: VirtualGatewayDataSchema.and(
      z.any().openapi({ description: 'The full description of your virtual gateway.' }),
    ),
  })
  .openapi({ required: ['virtualGateway'] })
  .openapi('DescribeVirtualGatewayOutput')

const DescribeVirtualNodeOutputSchema = z
  .object({
    virtualNode: VirtualNodeDataSchema.and(
      z.any().openapi({ description: 'The full description of your virtual node.' }),
    ),
  })
  .openapi({ required: ['virtualNode'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeVirtualNodeOutput')

const DescribeVirtualRouterOutputSchema = z
  .object({
    virtualRouter: VirtualRouterDataSchema.and(
      z.any().openapi({ description: 'The full description of your virtual router.' }),
    ),
  })
  .openapi({ required: ['virtualRouter'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeVirtualRouterOutput')

const DescribeVirtualServiceOutputSchema = z
  .object({
    virtualService: VirtualServiceDataSchema.and(
      z.any().openapi({ description: 'The full description of your virtual service.' }),
    ),
  })
  .openapi({ required: ['virtualService'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeVirtualServiceOutput')

const GatewayRouteRefSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The full Amazon Resource Name (ARN) for the gateway route.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    gatewayRouteName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the gateway route.' }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service mesh that the resource resides in. ' }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualGatewayName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The virtual gateway that the gateway route is associated with.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'gatewayRouteName',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
      'virtualGatewayName',
    ],
    description: 'An object that represents a gateway route returned by a list operation.',
  })
  .openapi('GatewayRouteRef')

const GatewayRouteListSchema = z.array(GatewayRouteRefSchema).openapi('GatewayRouteList')

const ListGatewayRoutesOutputSchema = z
  .object({
    gatewayRoutes: GatewayRouteListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of existing gateway routes for the specified service mesh and virtual gateway.',
        }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListGatewayRoutes</code> request. When the results of a <code>ListGatewayRoutes</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['gatewayRoutes'] })
  .openapi('ListGatewayRoutesOutput')

const MeshRefSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The full Amazon Resource Name (ARN) of the service mesh.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service mesh.' }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
    ],
    description: 'An object that represents a service mesh returned by a list operation.',
  })
  .openapi('MeshRef')

const MeshListSchema = z.array(MeshRefSchema).openapi('MeshList')

const ListMeshesOutputSchema = z
  .object({
    meshes: MeshListSchema.and(
      z.any().openapi({ description: 'The list of existing service meshes.' }),
    ),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListMeshes</code> request. When the results of a <code>ListMeshes</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['meshes'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListMeshesOutput')

const RouteRefSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The full Amazon Resource Name (ARN) for the route.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the service mesh that the route resides in.' }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    routeName: ResourceNameSchema.and(z.any().openapi({ description: 'The name of the route.' })),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualRouterName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The virtual router that the route is associated with.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'routeName',
      'version',
      'virtualRouterName',
    ],
    description: 'An object that represents a route returned by a list operation.',
  })
  .openapi('RouteRef')

const RouteListSchema = z.array(RouteRefSchema).openapi('RouteList')

const ListRoutesOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListRoutes</code> request. When the results of a <code>ListRoutes</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    routes: RouteListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of existing routes for the specified service mesh and virtual router.',
        }),
    ),
  })
  .openapi({ required: ['routes'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListRoutesOutput')

const TagListSchema = z.array(TagRefSchema).min(0).max(50).openapi('TagList')

const ListTagsForResourceOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListTagsForResource</code> request. When the results of a <code>ListTagsForResource</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    tags: TagListSchema.and(z.any().openapi({ description: 'The tags for the resource.' })),
  })
  .openapi({ required: ['tags'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListTagsForResourceOutput')

const VirtualGatewayRefSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The full Amazon Resource Name (ARN) for the resource.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service mesh that the resource resides in.' }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualGatewayName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
      'virtualGatewayName',
    ],
    description: 'An object that represents a virtual gateway returned by a list operation.',
  })
  .openapi('VirtualGatewayRef')

const VirtualGatewayListSchema = z.array(VirtualGatewayRefSchema).openapi('VirtualGatewayList')

const ListVirtualGatewaysOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListVirtualGateways</code> request. When the results of a <code>ListVirtualGateways</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    virtualGateways: VirtualGatewayListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of existing virtual gateways for the specified service mesh.',
        }),
    ),
  })
  .openapi({ required: ['virtualGateways'] })
  .openapi('ListVirtualGatewaysOutput')

const VirtualNodeRefSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The full Amazon Resource Name (ARN) for the virtual node.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the service mesh that the virtual node resides in.' }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualNodeName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual node.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
      'virtualNodeName',
    ],
    description: 'An object that represents a virtual node returned by a list operation.',
  })
  .openapi('VirtualNodeRef')

const VirtualNodeListSchema = z.array(VirtualNodeRefSchema).openapi('VirtualNodeList')

const ListVirtualNodesOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListVirtualNodes</code> request. When the results of a <code>ListVirtualNodes</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    virtualNodes: VirtualNodeListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of existing virtual nodes for the specified service mesh.',
        }),
    ),
  })
  .openapi({ required: ['virtualNodes'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualNodesOutput')

const VirtualRouterRefSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The full Amazon Resource Name (ARN) for the virtual router.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service mesh that the virtual router resides in.',
        }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualRouterName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual router.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
      'virtualRouterName',
    ],
    description: 'An object that represents a virtual router returned by a list operation.',
  })
  .openapi('VirtualRouterRef')

const VirtualRouterListSchema = z.array(VirtualRouterRefSchema).openapi('VirtualRouterList')

const ListVirtualRoutersOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListVirtualRouters</code> request. When the results of a <code>ListVirtualRouters</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    virtualRouters: VirtualRouterListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of existing virtual routers for the specified service mesh.',
        }),
    ),
  })
  .openapi({ required: ['virtualRouters'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualRoutersOutput')

const VirtualServiceRefSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The full Amazon Resource Name (ARN) for the virtual service.' }),
    ),
    createdAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The Unix epoch timestamp in seconds for when the resource was created.',
        }),
    ),
    lastUpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Unix epoch timestamp in seconds for when the resource was last updated.',
        }),
    ),
    meshName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the service mesh that the virtual service resides in.',
        }),
    ),
    meshOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    resourceOwner: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Web Services IAM account ID of the resource owner. If the account ID is not your own, then it\'s the ID of the mesh owner or of another account that the mesh is shared with. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
        }),
    ),
    version: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            "The version of the resource. Resources are created at version 1, and this version is incremented each time that they're updated.",
        }),
    ),
    virtualServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name of the virtual service.' }),
    ),
  })
  .openapi({
    required: [
      'arn',
      'createdAt',
      'lastUpdatedAt',
      'meshName',
      'meshOwner',
      'resourceOwner',
      'version',
      'virtualServiceName',
    ],
    description: 'An object that represents a virtual service returned by a list operation.',
  })
  .openapi('VirtualServiceRef')

const VirtualServiceListSchema = z.array(VirtualServiceRefSchema).openapi('VirtualServiceList')

const ListVirtualServicesOutputSchema = z
  .object({
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> value to include in a future <code>ListVirtualServices</code> request. When the results of a <code>ListVirtualServices</code> request exceed <code>limit</code>, you can use this value to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
    virtualServices: VirtualServiceListSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of existing virtual services for the specified service mesh.',
        }),
    ),
  })
  .openapi({ required: ['virtualServices'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualServicesOutput')

const TagResourceOutputSchema = z
  .object({})
  .openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('TagResourceOutput')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const UntagResourceOutputSchema = z
  .object({})
  .openapi({ description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UntagResourceOutput')

const UpdateGatewayRouteOutputSchema = z
  .object({
    gatewayRoute: GatewayRouteDataSchema.and(
      z.any().openapi({ description: 'A full description of the gateway route that was updated.' }),
    ),
  })
  .openapi({ required: ['gatewayRoute'] })
  .openapi('UpdateGatewayRouteOutput')

const UpdateMeshOutputSchema = z
  .object({ mesh: MeshDataSchema })
  .openapi({ required: ['mesh'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UpdateMeshOutput')

const UpdateRouteOutputSchema = z
  .object({
    route: RouteDataSchema.and(
      z.any().openapi({ description: 'A full description of the route that was updated.' }),
    ),
  })
  .openapi({ required: ['route'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UpdateRouteOutput')

const UpdateVirtualGatewayOutputSchema = z
  .object({
    virtualGateway: VirtualGatewayDataSchema.and(
      z
        .any()
        .openapi({ description: 'A full description of the virtual gateway that was updated.' }),
    ),
  })
  .openapi({ required: ['virtualGateway'] })
  .openapi('UpdateVirtualGatewayOutput')

const UpdateVirtualNodeOutputSchema = z
  .object({
    virtualNode: VirtualNodeDataSchema.and(
      z.any().openapi({ description: 'A full description of the virtual node that was updated.' }),
    ),
  })
  .openapi({ required: ['virtualNode'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UpdateVirtualNodeOutput')

const UpdateVirtualRouterOutputSchema = z
  .object({
    virtualRouter: VirtualRouterDataSchema.and(
      z
        .any()
        .openapi({ description: 'A full description of the virtual router that was updated.' }),
    ),
  })
  .openapi({ required: ['virtualRouter'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UpdateVirtualRouterOutput')

const UpdateVirtualServiceOutputSchema = z
  .object({
    virtualService: VirtualServiceDataSchema.and(
      z
        .any()
        .openapi({ description: 'A full description of the virtual service that was updated.' }),
    ),
  })
  .openapi({ required: ['virtualService'], description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('UpdateVirtualServiceOutput')

const CreateGatewayRouteInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    gatewayRouteName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the gateway route.' }),
    ),
    spec: GatewayRouteSpecSchema.and(
      z.any().openapi({ description: 'The gateway route specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['gatewayRouteName', 'spec'], title: 'CreateGatewayRouteInput' })
  .openapi('CreateGatewayRouteInput')

const CreateMeshInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    meshName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the service mesh.' }),
    ),
    spec: MeshSpecSchema.and(
      z.any().openapi({ description: 'The service mesh specification to apply.' }),
    ).exactOptional(),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['meshName'],
    title: 'CreateMeshInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('CreateMeshInput')

const CreateRouteInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    routeName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the route.' }),
    ),
    spec: RouteSpecSchema.and(
      z.any().openapi({ description: 'The route specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['routeName', 'spec'],
    title: 'CreateRouteInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('CreateRouteInput')

const CreateVirtualGatewayInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualGatewaySpecSchema.and(
      z.any().openapi({ description: 'The virtual gateway specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
    virtualGatewayName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the virtual gateway.' }),
    ),
  })
  .openapi({ required: ['spec', 'virtualGatewayName'], title: 'CreateVirtualGatewayInput' })
  .openapi('CreateVirtualGatewayInput')

const CreateVirtualNodeInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualNodeSpecSchema.and(
      z.any().openapi({ description: 'The virtual node specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
    virtualNodeName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the virtual node.' }),
    ),
  })
  .openapi({
    required: ['spec', 'virtualNodeName'],
    title: 'CreateVirtualNodeInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('CreateVirtualNodeInput')

const CreateVirtualRouterInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualRouterSpecSchema.and(
      z.any().openapi({ description: 'The virtual router specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
    virtualRouterName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the virtual router.' }),
    ),
  })
  .openapi({
    required: ['spec', 'virtualRouterName'],
    title: 'CreateVirtualRouterInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('CreateVirtualRouterInput')

const CreateVirtualServiceInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualServiceSpecSchema.and(
      z.any().openapi({ description: 'The virtual service specification to apply.' }),
    ),
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ).exactOptional(),
    virtualServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The name to use for the virtual service.' }),
    ),
  })
  .openapi({
    required: ['spec', 'virtualServiceName'],
    title: 'CreateVirtualServiceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('CreateVirtualServiceInput')

const DeleteGatewayRouteInputSchema = z
  .object({})
  .openapi({ title: 'DeleteGatewayRouteInput' })
  .openapi('DeleteGatewayRouteInput')

const DeleteMeshInputSchema = z
  .object({})
  .openapi({ title: 'DeleteMeshInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteMeshInput')

const DeleteRouteInputSchema = z
  .object({})
  .openapi({ title: 'DeleteRouteInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteRouteInput')

const DeleteVirtualGatewayInputSchema = z
  .object({})
  .openapi({ title: 'DeleteVirtualGatewayInput' })
  .openapi('DeleteVirtualGatewayInput')

const DeleteVirtualNodeInputSchema = z
  .object({})
  .openapi({ title: 'DeleteVirtualNodeInput', description: 'Deletes a virtual node input.' })
  .openapi('DeleteVirtualNodeInput')

const DeleteVirtualRouterInputSchema = z
  .object({})
  .openapi({ title: 'DeleteVirtualRouterInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DeleteVirtualRouterInput')

const DeleteVirtualServiceInputSchema = z
  .object({})
  .openapi({
    title: 'DeleteVirtualServiceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('DeleteVirtualServiceInput')

const DescribeGatewayRouteInputSchema = z
  .object({})
  .openapi({ title: 'DescribeGatewayRouteInput' })
  .openapi('DescribeGatewayRouteInput')

const DescribeMeshInputSchema = z
  .object({})
  .openapi({ title: 'DescribeMeshInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeMeshInput')

const DescribeRouteInputSchema = z
  .object({})
  .openapi({ title: 'DescribeRouteInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeRouteInput')

const DescribeVirtualGatewayInputSchema = z
  .object({})
  .openapi({ title: 'DescribeVirtualGatewayInput' })
  .openapi('DescribeVirtualGatewayInput')

const DescribeVirtualNodeInputSchema = z
  .object({})
  .openapi({ title: 'DescribeVirtualNodeInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('DescribeVirtualNodeInput')

const DescribeVirtualRouterInputSchema = z
  .object({})
  .openapi({
    title: 'DescribeVirtualRouterInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('DescribeVirtualRouterInput')

const DescribeVirtualServiceInputSchema = z
  .object({})
  .openapi({
    title: 'DescribeVirtualServiceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('DescribeVirtualServiceInput')

const ListGatewayRoutesLimitSchema = z.int().min(1).max(100).openapi('ListGatewayRoutesLimit')

const ListGatewayRoutesInputSchema = z
  .object({})
  .openapi({ title: 'ListGatewayRoutesInput' })
  .openapi('ListGatewayRoutesInput')

const ListMeshesLimitSchema = z.int().min(1).max(100).openapi('ListMeshesLimit')

const ListMeshesInputSchema = z
  .object({})
  .openapi({ title: 'ListMeshesInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListMeshesInput')

const ListRoutesLimitSchema = z.int().min(1).max(100).openapi('ListRoutesLimit')

const ListRoutesInputSchema = z
  .object({})
  .openapi({ title: 'ListRoutesInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListRoutesInput')

const TagsLimitSchema = z.int().min(1).max(50).openapi('TagsLimit')

const ListTagsForResourceInputSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListTagsForResourceInput')

const ListVirtualGatewaysLimitSchema = z.int().min(1).max(100).openapi('ListVirtualGatewaysLimit')

const ListVirtualGatewaysInputSchema = z
  .object({})
  .openapi({ title: 'ListVirtualGatewaysInput' })
  .openapi('ListVirtualGatewaysInput')

const ListVirtualNodesLimitSchema = z.int().min(1).max(100).openapi('ListVirtualNodesLimit')

const ListVirtualNodesInputSchema = z
  .object({})
  .openapi({ title: 'ListVirtualNodesInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualNodesInput')

const ListVirtualRoutersLimitSchema = z.int().min(1).max(100).openapi('ListVirtualRoutersLimit')

const ListVirtualRoutersInputSchema = z
  .object({})
  .openapi({ title: 'ListVirtualRoutersInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualRoutersInput')

const ListVirtualServicesLimitSchema = z.int().min(1).max(100).openapi('ListVirtualServicesLimit')

const ListVirtualServicesInputSchema = z
  .object({})
  .openapi({ title: 'ListVirtualServicesInput', description: '<zonbook></zonbook><xhtml></xhtml>' })
  .openapi('ListVirtualServicesInput')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceInputSchema = z
  .object({
    tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
        }),
    ),
  })
  .openapi({
    required: ['tags'],
    title: 'TagResourceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('TagResourceInput')

const UntagResourceInputSchema = z
  .object({
    tagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({
    required: ['tagKeys'],
    title: 'UntagResourceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('UntagResourceInput')

const UpdateGatewayRouteInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: GatewayRouteSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new gateway route specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({ required: ['spec'], title: 'UpdateGatewayRouteInput' })
  .openapi('UpdateGatewayRouteInput')

const UpdateMeshInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: MeshSpecSchema.and(
      z.any().openapi({ description: 'The service mesh specification to apply.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateMeshInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
    required: [],
  })
  .openapi('UpdateMeshInput')

const UpdateRouteInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: RouteSpecSchema.and(
      z
        .any()
        .openapi({
          description: 'The new route specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({
    required: ['spec'],
    title: 'UpdateRouteInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('UpdateRouteInput')

const UpdateVirtualGatewayInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualGatewaySpecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new virtual gateway specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({ required: ['spec'], title: 'UpdateVirtualGatewayInput' })
  .openapi('UpdateVirtualGatewayInput')

const UpdateVirtualNodeInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualNodeSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new virtual node specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({
    required: ['spec'],
    title: 'UpdateVirtualNodeInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('UpdateVirtualNodeInput')

const UpdateVirtualRouterInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualRouterSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new virtual router specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({
    required: ['spec'],
    title: 'UpdateVirtualRouterInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('UpdateVirtualRouterInput')

const UpdateVirtualServiceInputSchema = z
  .object({
    clientToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
        }),
    ).exactOptional(),
    spec: VirtualServiceSpecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The new virtual service specification to apply. This overwrites the existing data.',
        }),
    ),
  })
  .openapi({
    required: ['spec'],
    title: 'UpdateVirtualServiceInput',
    description: '<zonbook></zonbook><xhtml></xhtml>',
  })
  .openapi('UpdateVirtualServiceInput')

const XAmzContentSha256ParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Content-Sha256',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzDateParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Date', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzAlgorithmParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Algorithm', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzCredentialParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Credential', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSecurityTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-Security-Token',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const XAmzSignatureParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: { name: 'X-Amz-Signature', in: 'header', schema: { type: 'string' }, required: false },
  })

const XAmzSignedHeadersParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'X-Amz-SignedHeaders',
      in: 'header',
      schema: { type: 'string' },
      required: false,
    },
  })

const HmacSecurityScheme = {
  type: 'apiKey',
  name: 'Authorization',
  in: 'header',
  description: 'Amazon Signature authorization v4',
  'x-amazon-apigateway-authtype': 'awsSigv4',
}

export const getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesRoute =
  createRoute({
    method: 'get',
    path: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes',
    description:
      'Returns a list of existing gateway routes that are associated to a virtual gateway.',
    operationId: 'ListGatewayRoutes',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      query: z.object({
        limit: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(100),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'limit',
              in: 'query',
              required: false,
              description:
                "The maximum number of results returned by <code>ListGatewayRoutes</code> in paginated output. When you use this parameter, <code>ListGatewayRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListGatewayRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListGatewayRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
              schema: { type: 'integer', minimum: 1, maximum: 100 },
            },
          }),
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
        nextToken: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description:
                'The <code>nextToken</code> value returned from a previous paginated <code>ListGatewayRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
              schema: { type: 'string' },
            },
          }),
      }),
      params: z.object({
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh to list gateway routes in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualGatewayName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualGatewayName',
              in: 'path',
              required: true,
              description: 'The name of the virtual gateway to list gateway routes in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListGatewayRoutesOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const putV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesRoute =
  createRoute({
    method: 'put',
    path: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes',
    description:
      '<p>Creates a gateway route.</p> <p>A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.</p> <p>For more information about gateway routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html">Gateway routes</a>.</p>',
    operationId: 'CreateGatewayRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh to create the gateway route in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualGatewayName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualGatewayName',
              in: 'path',
              required: true,
              description:
                'The name of the virtual gateway to associate the gateway route with. If the virtual gateway is in a shared mesh, then you must be the owner of the virtual gateway resource.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                clientToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                  }),
                gatewayRouteName: z
                  .string()
                  .min(1)
                  .max(255)
                  .openapi({ description: 'The name to use for the gateway route.' }),
                spec: z
                  .object({
                    grpcRoute: GrpcGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of a gRPC gateway route.',
                        }),
                    ).exactOptional(),
                    http2Route: HttpGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP/2 gateway route.',
                        }),
                    ).exactOptional(),
                    httpRoute: HttpGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP gateway route.',
                        }),
                    ).exactOptional(),
                    priority: GatewayRoutePrioritySchema.and(
                      z.any().openapi({ description: 'The ordering of the gateway routes spec.' }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'An object that represents a gateway route specification. Specify one gateway route type.',
                    required: [],
                  }),
                tags: z
                  .array(TagRefSchema)
                  .min(0)
                  .max(50)
                  .exactOptional()
                  .openapi({
                    description:
                      'Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                  }),
              })
              .openapi({ required: ['gatewayRouteName', 'spec'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateGatewayRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const getV20190125MeshesRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes',
  description: 'Returns a list of existing service meshes.',
  operationId: 'ListMeshes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListMeshes</code> in paginated output. When you use this parameter, <code>ListMeshes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListMeshes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListMeshes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              '<p>The <code>nextToken</code> value returned from a previous paginated <code>ListMeshes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.</p> <note> <p>This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</p> </note>',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMeshesOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes',
  description:
    '<p>Creates a service mesh.</p> <p> A service mesh is a logical boundary for network traffic between services that are represented by resources within the mesh. After you create your service mesh, you can create virtual services, virtual nodes, virtual routers, and routes to distribute traffic between the applications in your mesh.</p> <p>For more information about service meshes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/meshes.html">Service meshes</a>.</p>',
  operationId: 'CreateMesh',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              meshName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name to use for the service mesh.' }),
              spec: z
                .object({
                  egressFilter: EgressFilterSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The egress filter rules for the service mesh.' }),
                  ).exactOptional(),
                  serviceDiscovery: MeshServiceDiscoverySchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object that represents the specification of a service mesh.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the service mesh to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
            })
            .openapi({ required: ['meshName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMeshOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
  description: 'Returns a list of existing routes in a service mesh.',
  operationId: 'ListRoutes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListRoutes</code> in paginated output. When you use this parameter, <code>ListRoutes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListRoutes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListRoutes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListRoutes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to list routes in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualRouterName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualRouterName',
            in: 'path',
            required: true,
            description: 'The name of the virtual router to list routes in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRoutesOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes',
  description:
    '<p>Creates a route that is associated with a virtual router.</p> <p> You can route several different protocols and define a retry policy for a route. Traffic can be routed to one or more virtual nodes.</p> <p>For more information about routes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/routes.html">Routes</a>.</p>',
  operationId: 'CreateRoute',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to create the route in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualRouterName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualRouterName',
            in: 'path',
            required: true,
            description:
              'The name of the virtual router in which to create the route. If the virtual router is in a shared mesh, then you must be the owner of the virtual router resource.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              routeName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name to use for the route.' }),
              spec: z
                .object({
                  grpcRoute: GrpcRouteSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'An object that represents the specification of a gRPC route.',
                      }),
                  ).exactOptional(),
                  http2Route: HttpRouteSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that represents the specification of an HTTP/2 route.',
                      }),
                  ).exactOptional(),
                  httpRoute: HttpRouteSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'An object that represents the specification of an HTTP route.',
                      }),
                  ).exactOptional(),
                  priority: RoutePrioritySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The priority for the route. Routes are matched based on the specified value, where 0 is the highest priority.',
                      }),
                  ).exactOptional(),
                  tcpRoute: TcpRouteSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'An object that represents the specification of a TCP route.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An object that represents a route specification. Specify one route type.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
            })
            .openapi({ required: ['routeName', 'spec'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateRouteOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualGatewaysRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualGateways',
  description: 'Returns a list of existing virtual gateways in a service mesh.',
  operationId: 'ListVirtualGateways',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListVirtualGateways</code> in paginated output. When you use this parameter, <code>ListVirtualGateways</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualGateways</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualGateways</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualGateways</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to list virtual gateways in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualGatewaysOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualGatewaysRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualGateways',
  description:
    '<p>Creates a virtual gateway.</p> <p>A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.</p> <p>For more information about virtual gateways, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html">Virtual gateways</a>. </p>',
  operationId: 'CreateVirtualGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to create the virtual gateway in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  backendDefaults: VirtualGatewayBackendDefaultsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A reference to an object that represents the defaults for backends.',
                      }),
                  ).exactOptional(),
                  listeners: VirtualGatewayListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                  logging: VirtualGatewayLoggingSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'An object that represents the specification of a service mesh resource.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the virtual gateway to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
              virtualGatewayName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name to use for the virtual gateway.' }),
            })
            .openapi({ required: ['spec', 'virtualGatewayName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVirtualGatewayOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualNodesRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualNodes',
  description: 'Returns a list of existing virtual nodes.',
  operationId: 'ListVirtualNodes',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListVirtualNodes</code> in paginated output. When you use this parameter, <code>ListVirtualNodes</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualNodes</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualNodes</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualNodes</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to list virtual nodes in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualNodesOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualNodesRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualNodes',
  description:
    '<p>Creates a virtual node within a service mesh.</p> <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can specify the service discovery information for your task group, and whether the proxy running in a task group will communicate with other proxies using Transport Layer Security (TLS).</p> <p>You define a <code>listener</code> for any inbound traffic that your virtual node expects. Any virtual service that your virtual node expects to communicate to is specified as a <code>backend</code>.</p> <p>The response metadata for your new virtual node contains the <code>arn</code> that is associated with the virtual node. Set this value to the full ARN; for example, <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>) as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group\'s Envoy proxy container in your task definition or pod spec. This is then mapped to the <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p> <note> <p>By default, App Mesh uses the name of the resource you specified in <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and traces. You can override this behavior by setting the <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p> </note> <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when setting these variables. For more information aboutApp Mesh Envoy variables, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy image</a> in the App Mesh User Guide.</p>',
  operationId: 'CreateVirtualNode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to create the virtual node in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  backendDefaults: BackendDefaultsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A reference to an object that represents the defaults for backends.',
                      }),
                  ).exactOptional(),
                  backends: BackendsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The backends that the virtual node is expected to send outbound traffic to.',
                      }),
                  ).exactOptional(),
                  listeners: ListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                  logging: LoggingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The inbound and outbound access logging information for the virtual node.',
                      }),
                  ).exactOptional(),
                  serviceDiscovery: ServiceDiscoverySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a <code>listener</code>, then you must specify service discovery information.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual node.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the virtual node to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
              virtualNodeName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name to use for the virtual node.' }),
            })
            .openapi({ required: ['spec', 'virtualNodeName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVirtualNodeOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualRoutersRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualRouters',
  description: 'Returns a list of existing virtual routers in a service mesh.',
  operationId: 'ListVirtualRouters',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListVirtualRouters</code> in paginated output. When you use this parameter, <code>ListVirtualRouters</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualRouters</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualRouters</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualRouters</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to list virtual routers in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualRoutersOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualRoutersRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualRouters',
  description:
    '<p>Creates a virtual router within a service mesh.</p> <p>Specify a <code>listener</code> for any inbound traffic that your virtual router receives. Create a virtual router for each protocol and port that you need to route. Virtual routers handle traffic for one or more virtual services within your mesh. After you create your virtual router, create and associate routes for your virtual router that direct incoming requests to different virtual nodes.</p> <p>For more information about virtual routers, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_routers.html">Virtual routers</a>.</p>',
  operationId: 'CreateVirtualRouter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to create the virtual router in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  listeners: VirtualRouterListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listeners that the virtual router is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual router.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the virtual router to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
              virtualRouterName: z
                .string()
                .min(1)
                .max(255)
                .openapi({ description: 'The name to use for the virtual router.' }),
            })
            .openapi({ required: ['spec', 'virtualRouterName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVirtualRouterOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualServicesRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualServices',
  description: 'Returns a list of existing virtual services in a service mesh.',
  operationId: 'ListVirtualServices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of results returned by <code>ListVirtualServices</code> in paginated output. When you use this parameter, <code>ListVirtualServices</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListVirtualServices</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListVirtualServices</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListVirtualServices</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to list virtual services in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVirtualServicesOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualServicesRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualServices',
  description:
    '<p>Creates a virtual service within a service mesh.</p> <p>A virtual service is an abstraction of a real service that is provided by a virtual node directly or indirectly by means of a virtual router. Dependent services call your virtual service by its <code>virtualServiceName</code>, and those requests are routed to the virtual node or virtual router that is specified as the provider for the virtual service.</p> <p>For more information about virtual services, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_services.html">Virtual services</a>.</p>',
  operationId: 'CreateVirtualService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to create the virtual service in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then the account that you specify must share the mesh with your account before you can create the resource in the service mesh. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  provider: VirtualServiceProviderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual service.',
                  required: [],
                }),
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'Optional metadata that you can apply to the virtual service to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
              virtualServiceName: z
                .string()
                .openapi({ description: 'The name to use for the virtual service.' }),
            })
            .openapi({ required: ['spec', 'virtualServiceName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVirtualServiceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameRoute =
  createRoute({
    method: 'get',
    path: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
    description: 'Describes an existing gateway route.',
    operationId: 'DescribeGatewayRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        gatewayRouteName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'gatewayRouteName',
              in: 'path',
              required: true,
              description: 'The name of the gateway route to describe.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh that the gateway route resides in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualGatewayName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualGatewayName',
              in: 'path',
              required: true,
              description:
                'The name of the virtual gateway that the gateway route is associated with.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeGatewayRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const putV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameRoute =
  createRoute({
    method: 'put',
    path: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
    description:
      'Updates an existing gateway route that is associated to a specified virtual gateway in a service mesh.',
    operationId: 'UpdateGatewayRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        gatewayRouteName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'gatewayRouteName',
              in: 'path',
              required: true,
              description: 'The name of the gateway route to update.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh that the gateway route resides in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualGatewayName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualGatewayName',
              in: 'path',
              required: true,
              description:
                'The name of the virtual gateway that the gateway route is associated with.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                clientToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                  }),
                spec: z
                  .object({
                    grpcRoute: GrpcGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of a gRPC gateway route.',
                        }),
                    ).exactOptional(),
                    http2Route: HttpGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP/2 gateway route.',
                        }),
                    ).exactOptional(),
                    httpRoute: HttpGatewayRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP gateway route.',
                        }),
                    ).exactOptional(),
                    priority: GatewayRoutePrioritySchema.and(
                      z.any().openapi({ description: 'The ordering of the gateway routes spec.' }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'An object that represents a gateway route specification. Specify one gateway route type.',
                    required: [],
                  }),
              })
              .openapi({ required: ['spec'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateGatewayRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const deleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteNameRoute =
  createRoute({
    method: 'delete',
    path: '/v20190125/meshes/{meshName}/virtualGateway/{virtualGatewayName}/gatewayRoutes/{gatewayRouteName}',
    description: 'Deletes an existing gateway route.',
    operationId: 'DeleteGatewayRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        gatewayRouteName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'gatewayRouteName',
              in: 'path',
              required: true,
              description: 'The name of the gateway route to delete.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh to delete the gateway route from.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualGatewayName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualGatewayName',
              in: 'path',
              required: true,
              description: 'The name of the virtual gateway to delete the route from.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteGatewayRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'ResourceInUseException',
        content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const getV20190125MeshesMeshNameRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}',
  description: 'Describes an existing service mesh.',
  operationId: 'DescribeMesh',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to describe.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMeshOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}',
  description: 'Updates an existing service mesh.',
  operationId: 'UpdateMesh',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to update.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  egressFilter: EgressFilterSchema.and(
                    z
                      .any()
                      .openapi({ description: 'The egress filter rules for the service mesh.' }),
                  ).exactOptional(),
                  serviceDiscovery: MeshServiceDiscoverySchema.exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'An object that represents the specification of a service mesh.',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateMeshOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const deleteV20190125MeshesMeshNameRoute = createRoute({
  method: 'delete',
  path: '/v20190125/meshes/{meshName}',
  description:
    '<p>Deletes an existing service mesh.</p> <p>You must delete all resources (virtual services, routes, virtual routers, and virtual nodes) in the service mesh before you can delete the mesh itself.</p>',
  operationId: 'DeleteMesh',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMeshOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameRoute =
  createRoute({
    method: 'get',
    path: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
    description: 'Describes an existing route.',
    operationId: 'DescribeRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh that the route resides in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        routeName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'routeName',
              in: 'path',
              required: true,
              description: 'The name of the route to describe.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualRouterName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualRouterName',
              in: 'path',
              required: true,
              description: 'The name of the virtual router that the route is associated with.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DescribeRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      485: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const putV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameRoute =
  createRoute({
    method: 'put',
    path: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
    description: 'Updates an existing route for a specified service mesh and virtual router.',
    operationId: 'UpdateRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh that the route resides in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        routeName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'routeName',
              in: 'path',
              required: true,
              description: 'The name of the route to update.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualRouterName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualRouterName',
              in: 'path',
              required: true,
              description: 'The name of the virtual router that the route is associated with.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                clientToken: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                  }),
                spec: z
                  .object({
                    grpcRoute: GrpcRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of a gRPC route.',
                        }),
                    ).exactOptional(),
                    http2Route: HttpRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP/2 route.',
                        }),
                    ).exactOptional(),
                    httpRoute: HttpRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of an HTTP route.',
                        }),
                    ).exactOptional(),
                    priority: RoutePrioritySchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'The priority for the route. Routes are matched based on the specified value, where 0 is the highest priority.',
                        }),
                    ).exactOptional(),
                    tcpRoute: TcpRouteSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'An object that represents the specification of a TCP route.',
                        }),
                    ).exactOptional(),
                  })
                  .openapi({
                    description:
                      'An object that represents a route specification. Specify one route type.',
                    required: [],
                  }),
              })
              .openapi({ required: ['spec'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'ConflictException',
        content: { 'application/json': { schema: ConflictExceptionSchema } },
      },
      483: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      484: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
      487: {
        description: 'LimitExceededException',
        content: { 'application/json': { schema: LimitExceededExceptionSchema } },
      },
    },
  })

export const deleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteNameRoute =
  createRoute({
    method: 'delete',
    path: '/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}',
    description: 'Deletes an existing route.',
    operationId: 'DeleteRoute',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      }),
      params: z.object({
        meshName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'meshName',
              in: 'path',
              required: true,
              description: 'The name of the service mesh to delete the route in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        routeName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'routeName',
              in: 'path',
              required: true,
              description: 'The name of the route to delete.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
        virtualRouterName: z
          .string()
          .min(1)
          .max(255)
          .openapi({
            param: {
              name: 'virtualRouterName',
              in: 'path',
              required: true,
              description: 'The name of the virtual router to delete the route in.',
              schema: { type: 'string', minLength: 1, maxLength: 255 },
            },
          }),
      }),
      query: z.object({
        meshOwner: z
          .string()
          .length(12)
          .exactOptional()
          .openapi({
            param: {
              name: 'meshOwner',
              in: 'query',
              required: false,
              description:
                'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
              schema: { type: 'string', minLength: 12, maxLength: 12 },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteRouteOutputSchema } },
      },
      480: {
        description: 'NotFoundException',
        content: { 'application/json': { schema: NotFoundExceptionSchema } },
      },
      481: {
        description: 'BadRequestException',
        content: { 'application/json': { schema: BadRequestExceptionSchema } },
      },
      482: {
        description: 'TooManyRequestsException',
        content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
      },
      483: {
        description: 'ForbiddenException',
        content: { 'application/json': { schema: ForbiddenExceptionSchema } },
      },
      484: {
        description: 'ResourceInUseException',
        content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
      },
      485: {
        description: 'ServiceUnavailableException',
        content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
      },
      486: {
        description: 'InternalServerErrorException',
        content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
      },
    },
  })

export const getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
  description: 'Describes an existing virtual gateway.',
  operationId: 'DescribeVirtualGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the gateway route resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualGatewayName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualGatewayName',
            in: 'path',
            required: true,
            description: 'The name of the virtual gateway to describe.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVirtualGatewayOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
  description: 'Updates an existing virtual gateway in a specified service mesh.',
  operationId: 'UpdateVirtualGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual gateway resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualGatewayName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualGatewayName',
            in: 'path',
            required: true,
            description: 'The name of the virtual gateway to update.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  backendDefaults: VirtualGatewayBackendDefaultsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A reference to an object that represents the defaults for backends.',
                      }),
                  ).exactOptional(),
                  listeners: VirtualGatewayListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listeners that the mesh endpoint is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                  logging: VirtualGatewayLoggingSchema.exactOptional(),
                })
                .openapi({
                  description:
                    'An object that represents the specification of a service mesh resource.',
                  required: [],
                }),
            })
            .openapi({ required: ['spec'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVirtualGatewayOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayNameRoute = createRoute({
  method: 'delete',
  path: '/v20190125/meshes/{meshName}/virtualGateways/{virtualGatewayName}',
  description:
    'Deletes an existing virtual gateway. You cannot delete a virtual gateway if any gateway routes are associated to it.',
  operationId: 'DeleteVirtualGateway',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to delete the virtual gateway from.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualGatewayName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualGatewayName',
            in: 'path',
            required: true,
            description: 'The name of the virtual gateway to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualGatewayOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualNodesVirtualNodeNameRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
  description: 'Describes an existing virtual node.',
  operationId: 'DescribeVirtualNode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual node resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualNodeName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualNodeName',
            in: 'path',
            required: true,
            description: 'The name of the virtual node to describe.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVirtualNodeOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualNodesVirtualNodeNameRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
  description: 'Updates an existing virtual node in a specified service mesh.',
  operationId: 'UpdateVirtualNode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual node resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualNodeName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualNodeName',
            in: 'path',
            required: true,
            description: 'The name of the virtual node to update.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  backendDefaults: BackendDefaultsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A reference to an object that represents the defaults for backends.',
                      }),
                  ).exactOptional(),
                  backends: BackendsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The backends that the virtual node is expected to send outbound traffic to.',
                      }),
                  ).exactOptional(),
                  listeners: ListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listener that the virtual node is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                  logging: LoggingSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The inbound and outbound access logging information for the virtual node.',
                      }),
                  ).exactOptional(),
                  serviceDiscovery: ServiceDiscoverySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The service discovery information for the virtual node. If your virtual node does not expect ingress traffic, you can omit this parameter. If you specify a <code>listener</code>, then you must specify service discovery information.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual node.',
                  required: [],
                }),
            })
            .openapi({ required: ['spec'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVirtualNodeOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteV20190125MeshesMeshNameVirtualNodesVirtualNodeNameRoute = createRoute({
  method: 'delete',
  path: '/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}',
  description:
    '<p>Deletes an existing virtual node.</p> <p>You must delete any virtual services that list a virtual node as a service provider before you can delete the virtual node itself.</p>',
  operationId: 'DeleteVirtualNode',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to delete the virtual node in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualNodeName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualNodeName',
            in: 'path',
            required: true,
            description: 'The name of the virtual node to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualNodeOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
  description: 'Describes an existing virtual router.',
  operationId: 'DescribeVirtualRouter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual router resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualRouterName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualRouterName',
            in: 'path',
            required: true,
            description: 'The name of the virtual router to describe.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVirtualRouterOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
  description: 'Updates an existing virtual router in a specified service mesh.',
  operationId: 'UpdateVirtualRouter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual router resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualRouterName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualRouterName',
            in: 'path',
            required: true,
            description: 'The name of the virtual router to update.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  listeners: VirtualRouterListenersSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The listeners that the virtual router is expected to receive inbound traffic from. You can specify one listener.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual router.',
                  required: [],
                }),
            })
            .openapi({ required: ['spec'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVirtualRouterOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterNameRoute = createRoute({
  method: 'delete',
  path: '/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}',
  description:
    '<p>Deletes an existing virtual router.</p> <p>You must delete any routes associated with the virtual router before you can delete the router itself.</p>',
  operationId: 'DeleteVirtualRouter',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to delete the virtual router in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualRouterName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'virtualRouterName',
            in: 'path',
            required: true,
            description: 'The name of the virtual router to delete.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualRouterOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV20190125MeshesMeshNameVirtualServicesVirtualServiceNameRoute = createRoute({
  method: 'get',
  path: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
  description: 'Describes an existing virtual service.',
  operationId: 'DescribeVirtualService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual service resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualServiceName: z
        .string()
        .openapi({
          param: {
            name: 'virtualServiceName',
            in: 'path',
            required: true,
            description: 'The name of the virtual service to describe.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVirtualServiceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125MeshesMeshNameVirtualServicesVirtualServiceNameRoute = createRoute({
  method: 'put',
  path: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
  description: 'Updates an existing virtual service in a specified service mesh.',
  operationId: 'UpdateVirtualService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh that the virtual service resides in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualServiceName: z
        .string()
        .openapi({
          param: {
            name: 'virtualServiceName',
            in: 'path',
            required: true,
            description: 'The name of the virtual service to update.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              clientToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Up to 36 letters, numbers, hyphens, and underscores are allowed.',
                }),
              spec: z
                .object({
                  provider: VirtualServiceProviderSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The App Mesh object that is acting as the provider for a virtual service. You can specify a single virtual node or virtual router.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description: 'An object that represents the specification of a virtual service.',
                  required: [],
                }),
            })
            .openapi({ required: ['spec'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVirtualServiceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
    487: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
  },
})

export const deleteV20190125MeshesMeshNameVirtualServicesVirtualServiceNameRoute = createRoute({
  method: 'delete',
  path: '/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}',
  description: 'Deletes an existing virtual service.',
  operationId: 'DeleteVirtualService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    params: z.object({
      meshName: z
        .string()
        .min(1)
        .max(255)
        .openapi({
          param: {
            name: 'meshName',
            in: 'path',
            required: true,
            description: 'The name of the service mesh to delete the virtual service in.',
            schema: { type: 'string', minLength: 1, maxLength: 255 },
          },
        }),
      virtualServiceName: z
        .string()
        .openapi({
          param: {
            name: 'virtualServiceName',
            in: 'path',
            required: true,
            description: 'The name of the virtual service to delete.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      meshOwner: z
        .string()
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'meshOwner',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services IAM account ID of the service mesh owner. If the account ID is not your own, then it\'s the ID of the account that shared the mesh with your account. For more information about mesh sharing, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html">Working with shared meshes</a>.',
            schema: { type: 'string', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVirtualServiceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const getV20190125TagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/v20190125/tags#resourceArn',
  description: 'List the tags for an App Mesh resource.',
  operationId: 'ListTagsForResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(50),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              "The maximum number of tag results returned by <code>ListTagsForResource</code> in paginated output. When this parameter is used, <code>ListTagsForResource</code> returns only <code>limit</code> results in a single page along with a <code>nextToken</code> response element. You can see the remaining results of the initial request by sending another <code>ListTagsForResource</code> request with the returned <code>nextToken</code> value. This value can be between 1 and 100. If you don't use this parameter, <code>ListTagsForResource</code> returns up to 100 results and a <code>nextToken</code> value if applicable.",
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description:
              'The <code>nextToken</code> value returned from a previous paginated <code>ListTagsForResource</code> request where <code>limit</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value.',
            schema: { type: 'string' },
          },
        }),
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) that identifies the resource to list the tags for.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125TagResourceArnRoute = createRoute({
  method: 'put',
  path: '/v20190125/tag#resourceArn',
  description:
    "Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource aren't specified in the request parameters, they aren't changed. When a resource is deleted, the tags associated with that resource are also deleted.",
  operationId: 'TagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource to add tags to.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .array(TagRefSchema)
                .min(0)
                .max(50)
                .openapi({
                  description:
                    'The tags to add to the resource. A tag is an array of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    485: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    486: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})

export const putV20190125UntagResourceArnRoute = createRoute({
  method: 'put',
  path: '/v20190125/untag#resourceArn',
  description: 'Deletes specified tags from a resource.',
  operationId: 'UntagResource',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
    }),
    query: z.object({
      resourceArn: z
        .string()
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the resource to delete tags from.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tagKeys: z
                .array(TagKeySchema)
                .min(0)
                .max(50)
                .openapi({ description: 'The keys of the tags to be removed.' }),
            })
            .openapi({ required: ['tagKeys'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
    484: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    485: {
      description: 'InternalServerErrorException',
      content: { 'application/json': { schema: InternalServerErrorExceptionSchema } },
    },
  },
})
