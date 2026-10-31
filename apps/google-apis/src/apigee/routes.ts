import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudApigeeV1SchemaSchemaPropertySchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time the field was created in RFC3339 string form. For example: `2016-02-26T10:23:09.592Z`.',
      }),
    custom: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether the field is standard in the dataset or a custom field created by the customer. `true` indicates that it is a custom field.',
      }),
    type: z.string().exactOptional().openapi({ description: 'Data type of the field.' }),
  })
  .openapi({ description: 'Properties for the schema field.', required: [] })
  .openapi('GoogleCloudApigeeV1SchemaSchemaProperty')

const GoogleCloudApigeeV1SchemaSchemaElementSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Name of the field.' }),
    properties: GoogleCloudApigeeV1SchemaSchemaPropertySchema.exactOptional().openapi({
      description:
        'Properties for the schema field. For example: { "createTime": "2016-02-26T10:23:09.592Z", "custom": "false", "type": "string" }',
    }),
  })
  .openapi({ description: 'Message type for the schema element', required: [] })
  .openapi('GoogleCloudApigeeV1SchemaSchemaElement')

type GoogleCloudApigeeV1SchemaType = {
  dimensions?: z.infer<typeof GoogleCloudApigeeV1SchemaSchemaElementSchema>[]
  meta?: string[]
  metrics?: z.infer<typeof GoogleCloudApigeeV1SchemaSchemaElementSchema>[]
}

const EdgeConfigstoreBundleBadBundleViolationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of why the bundle is invalid and how to fix it.' }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The filename (including relative path from the bundle root) in which the error occurred.',
      }),
  })
  .openapi({
    description: 'A message type used to describe a single bundle validation error.',
    required: [],
  })
  .openapi('EdgeConfigstoreBundleBadBundleViolation')

const EdgeConfigstoreBundleBadBundleSchema = z
  .object({
    violations: z
      .array(EdgeConfigstoreBundleBadBundleViolationSchema)
      .exactOptional()
      .openapi({ description: 'Describes all precondition violations.' }),
  })
  .openapi({
    description: 'Describes why a bundle is invalid. Intended for use in error details.',
    required: [],
  })
  .openapi('EdgeConfigstoreBundleBadBundle')

const GoogleApiHttpBodySchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
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
          'Application specific response metadata. Must be set in the first response for streaming APIs.',
      }),
  })
  .openapi({
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('GoogleApiHttpBody')

const GoogleCloudApigeeV1AccessGetSchema = z
  .object({ name: z.string().exactOptional(), value: z.string().exactOptional() })
  .openapi({
    description: 'Get action. For example, "Get" : { "name" : "target.name", "value" : "default" }',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1AccessGet')

const GoogleCloudApigeeV1AccessRemoveSchema = z
  .object({ name: z.string().exactOptional(), success: z.boolean().exactOptional() })
  .openapi({
    description:
      'Remove action. For example, "Remove" : { "name" : "target.name", "success" : true }',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1AccessRemove')

const GoogleCloudApigeeV1AccessSetSchema = z
  .object({
    name: z.string().exactOptional(),
    success: z.boolean().exactOptional(),
    value: z.string().exactOptional(),
  })
  .openapi({
    description:
      'Set action. For example, "Set" : { "name" : "target.name", "success" : true, "value" : "default" }',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1AccessSet')

const GoogleCloudApigeeV1AccessSchema = z
  .object({
    Get: GoogleCloudApigeeV1AccessGetSchema.exactOptional(),
    Remove: GoogleCloudApigeeV1AccessRemoveSchema.exactOptional(),
    Set: GoogleCloudApigeeV1AccessSetSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Access')

const GoogleCloudApigeeV1ActivateNatAddressRequestSchema = z
  .object({})
  .openapi({
    description: 'Request for ActivateNatAddressRequest. Activate the nat address request.',
  })
  .openapi('GoogleCloudApigeeV1ActivateNatAddressRequest')

const GoogleCloudApigeeV1AdvancedApiOpsConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that specifies whether the Advanced API Ops add-on is enabled.',
      }),
  })
  .openapi({ description: 'Configuration for the Advanced API Ops add-on.', required: [] })
  .openapi('GoogleCloudApigeeV1AdvancedApiOpsConfig')

const GoogleCloudApigeeV1ApiSecurityConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag that specifies whether the API security add-on is enabled.' }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the API Security add-on expires in in milliseconds since epoch. If unspecified, the add-on will never expire.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Configurations of the API Security add-on.', required: [] })
  .openapi('GoogleCloudApigeeV1ApiSecurityConfig')

const GoogleCloudApigeeV1ConnectorsPlatformConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Flag that specifies whether the Connectors Platform add-on is enabled.',
      }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the Connectors Platform add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Configuration for the Connectors Platform add-on.', required: [] })
  .openapi('GoogleCloudApigeeV1ConnectorsPlatformConfig')

const GoogleCloudApigeeV1IntegrationConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag that specifies whether the Integration add-on is enabled.' }),
  })
  .openapi({ description: 'Configuration for the Integration add-on.', required: [] })
  .openapi('GoogleCloudApigeeV1IntegrationConfig')

const GoogleCloudApigeeV1MonetizationConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag that specifies whether the Monetization add-on is enabled.' }),
  })
  .openapi({ description: 'Configuration for the Monetization add-on.', required: [] })
  .openapi('GoogleCloudApigeeV1MonetizationConfig')

const GoogleCloudApigeeV1AddonsConfigSchema = z
  .object({
    advancedApiOpsConfig: GoogleCloudApigeeV1AdvancedApiOpsConfigSchema.exactOptional().openapi({
      description: 'Configuration for the Advanced API Ops add-on.',
    }),
    apiSecurityConfig: GoogleCloudApigeeV1ApiSecurityConfigSchema.exactOptional().openapi({
      description: 'Configuration for the API Security add-on.',
    }),
    connectorsPlatformConfig:
      GoogleCloudApigeeV1ConnectorsPlatformConfigSchema.exactOptional().openapi({
        description: 'Configuration for the Connectors Platform add-on.',
      }),
    integrationConfig: GoogleCloudApigeeV1IntegrationConfigSchema.exactOptional().openapi({
      description: 'Configuration for the Integration add-on.',
    }),
    monetizationConfig: GoogleCloudApigeeV1MonetizationConfigSchema.exactOptional().openapi({
      description: 'Configuration for the Monetization add-on.',
    }),
  })
  .openapi({ description: 'Add-on configurations for the Apigee organization.', required: [] })
  .openapi('GoogleCloudApigeeV1AddonsConfig')

const GoogleTypeMoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('GoogleTypeMoney')

const GoogleCloudApigeeV1AdjustDeveloperBalanceRequestSchema = z
  .object({
    adjustment: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        '* A positive value of `adjustment` means that that the API provider wants to adjust the balance for an under-charged developer i.e. the balance of the developer will decrease. * A negative value of `adjustment` means that that the API provider wants to adjust the balance for an over-charged developer i.e. the balance of the developer will increase.',
    }),
  })
  .openapi({ description: 'Request for AdjustDeveloperBalance.', required: [] })
  .openapi('GoogleCloudApigeeV1AdjustDeveloperBalanceRequest')

const GoogleCloudApigeeV1CertInfoSchema = z
  .object({
    basicConstraints: z
      .string()
      .exactOptional()
      .openapi({ description: 'X.509 basic constraints extension.' }),
    expiryDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'X.509 `notAfter` validity period in milliseconds since epoch.' }),
    isValid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether the certificate is valid. Flag is set to `Yes` if the certificate is valid, `No` if expired, or `Not yet` if not yet valid.',
      }),
    issuer: z.string().exactOptional().openapi({ description: 'X.509 issuer.' }),
    publicKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Public key component of the X.509 subject public key info.' }),
    serialNumber: z.string().exactOptional().openapi({ description: 'X.509 serial number.' }),
    sigAlgName: z.string().exactOptional().openapi({ description: 'X.509 signatureAlgorithm.' }),
    subject: z.string().exactOptional().openapi({ description: 'X.509 subject.' }),
    subjectAlternativeNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'X.509 subject alternative names (SANs) extension.' }),
    validFrom: z
      .string()
      .exactOptional()
      .openapi({ description: 'X.509 `notBefore` validity period in milliseconds since epoch.' }),
    version: z.int32().exactOptional().openapi({ description: 'X.509 version.' }),
  })
  .openapi({ description: 'X.509 certificate as defined in RFC 5280.', required: [] })
  .openapi('GoogleCloudApigeeV1CertInfo')

const GoogleCloudApigeeV1CertificateSchema = z
  .object({
    certInfo: z
      .array(GoogleCloudApigeeV1CertInfoSchema)
      .exactOptional()
      .openapi({ description: 'Chain of certificates under this name.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Certificate')

const GoogleCloudApigeeV1AliasSchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource ID for this alias. Values must match the regular expression `[^/]{1,255}`.',
      }),
    certsInfo: GoogleCloudApigeeV1CertificateSchema.exactOptional().openapi({
      description: 'Chain of certificates under this alias.',
    }),
    type: z
      .enum(['ALIAS_TYPE_UNSPECIFIED', 'CERT', 'KEY_CERT'])
      .exactOptional()
      .openapi({ description: 'Type of alias.' }),
  })
  .openapi({ description: 'Reference to a certificate or key/certificate pair.', required: [] })
  .openapi('GoogleCloudApigeeV1Alias')

const GoogleCloudApigeeV1AliasRevisionConfigSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Location of the alias file. For example, a Google Cloud Storage URI.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the alias revision included in the keystore in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}/revisions/{rev}`',
      }),
    type: z.enum(['ALIAS_TYPE_UNSPECIFIED', 'CERT', 'KEY_CERT']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1AliasRevisionConfig')

const GoogleCloudApigeeV1ApiCategoryDataSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'ID of the category (a UUID).' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the category.' }),
    siteId: z.string().exactOptional().openapi({ description: 'Name of the portal.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the category was last modified in milliseconds since epoch.' }),
  })
  .openapi({ description: 'the Api category resource.', required: [] })
  .openapi('GoogleCloudApigeeV1ApiCategoryData')

const GoogleCloudApigeeV1ApiCategorySchema = z
  .object({
    data: GoogleCloudApigeeV1ApiCategoryDataSchema.exactOptional().openapi({
      description: 'Details of category.',
    }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find errors in the log files.' }),
    message: z.string().exactOptional().openapi({ description: 'Description of the operation.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find request details in the log files.' }),
    status: z.string().exactOptional().openapi({ description: 'Status of the operation.' }),
  })
  .openapi({
    description: 'the Api category resource wrapped with response status, error_code etc.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ApiCategory')

const GoogleCloudApigeeV1AttributeSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'API key of the attribute.' }),
    value: z.string().exactOptional().openapi({ description: 'Value of the attribute.' }),
  })
  .openapi({ description: 'Key-value pair to store extra metadata.', required: [] })
  .openapi('GoogleCloudApigeeV1Attribute')

const GoogleCloudApigeeV1GraphQLOperationSchema = z
  .object({
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GraphQL operation name. The name and operation type will be used to apply quotas. If no name is specified, the quota will be applied to all GraphQL operations irrespective of their operation names in the payload.',
      }),
    operationTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. GraphQL operation types. Valid values include `query` or `mutation`. **Note**: Apigee does not currently support `subscription` types.',
      }),
  })
  .openapi({
    description:
      'Represents the pairing of GraphQL operation types and the GraphQL operation name.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1GraphQLOperation')

const GoogleCloudApigeeV1QuotaSchema = z
  .object({
    interval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Time interval over which the number of request messages is calculated.',
      }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected.',
      }),
    timeUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time unit defined for the `interval`. Valid values include `minute`, `hour`, `day`, or `month`. If `limit` and `interval` are valid, the default value is `hour`; otherwise, the default is null.',
      }),
  })
  .openapi({
    description:
      'Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Quota')

const GoogleCloudApigeeV1GraphQLOperationConfigSchema = z
  .object({
    apiSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the API proxy endpoint or remote service with which the GraphQL operation and quota are associated.',
      }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'Custom attributes associated with the operation.' }),
    operations: z
      .array(GoogleCloudApigeeV1GraphQLOperationSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. List of GraphQL name/operation type pairs for the proxy or remote service to which quota will be applied. If only operation types are specified, the quota will be applied to all GraphQL requests irrespective of the GraphQL name. **Note**: Currently, you can specify only a single GraphQLOperation. Specifying more than one will cause the operation to fail.',
      }),
    quota: GoogleCloudApigeeV1QuotaSchema.exactOptional().openapi({
      description:
        'Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.',
    }),
  })
  .openapi({
    description:
      'Binds the resources in a proxy or remote service with the GraphQL operation and its associated quota enforcement.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1GraphQLOperationConfig')

const GoogleCloudApigeeV1GraphQLOperationGroupSchema = z
  .object({
    operationConfigType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product.',
      }),
    operationConfigs: z
      .array(GoogleCloudApigeeV1GraphQLOperationConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.',
      }),
  })
  .openapi({
    description:
      'List of graphQL operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1GraphQLOperationGroup')

const GoogleCloudApigeeV1OperationSchema = z
  .object({
    methods: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed.',
      }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. REST resource path associated with the API proxy or remote service.',
      }),
  })
  .openapi({
    description:
      'Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Operation')

const GoogleCloudApigeeV1OperationConfigSchema = z
  .object({
    apiSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the API proxy or remote service with which the resources, methods, and quota are associated.',
      }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'Custom attributes associated with the operation.' }),
    operations: z
      .array(GoogleCloudApigeeV1OperationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of resource/method pairs for the API proxy or remote service to which quota will applied. **Note**: Currently, you can specify only a single resource/method pair. The call will fail if more than one resource/method pair is provided.',
      }),
    quota: GoogleCloudApigeeV1QuotaSchema.exactOptional().openapi({
      description:
        'Quota parameters to be enforced for the resources, methods, and API source combination. If none are specified, quota enforcement will not be done.',
    }),
  })
  .openapi({
    description:
      'Binds the resources in an API proxy or remote service with the allowed REST methods and associated quota enforcement.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1OperationConfig')

const GoogleCloudApigeeV1OperationGroupSchema = z
  .object({
    operationConfigType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifes whether the configuration is for Apigee API proxy or a remote service. Valid values include `proxy` or `remoteservice`. Defaults to `proxy`. Set to `proxy` when Apigee API proxies are associated with the API product. Set to `remoteservice` when non-Apigee proxies like Istio-Envoy are associated with the API product.',
      }),
    operationConfigs: z
      .array(GoogleCloudApigeeV1OperationConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. List of operation configurations for either Apigee API proxies or other remote services that are associated with this API product.',
      }),
  })
  .openapi({
    description:
      'List of operation configuration details associated with Apigee API proxies or remote services. Remote services are non-Apigee proxies, such as Istio-Envoy.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1OperationGroup')

const GoogleCloudApigeeV1ApiProductSchema = z
  .object({
    apiResources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the `proxy.pathsuffix` variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the `apiResources` element is defined to be `/forecastrss` and the base path defined for the API proxy is `/weather`, then only requests to `/weather/forecastrss` are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - `/**`: Indicates that all sub-URIs are included. - `/*` : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is `/v1/weatherapikey`, then the API product supports requests to `/v1/weatherapikey` and to any sub-URIs, such as `/v1/weatherapikey/forecastrss`, `/v1/weatherapikey/region/CA`, and so on. For more information, see Managing API products.',
      }),
    approvalType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to `manual`, the consumer key is generated and returned in "pending" state. In this case, the API keys won\'t work until they have been explicitly approved. If set to `auto`, the consumer key is generated and returned in "approved" state and can be used immediately. **Note:** Typically, `auto` is used to provide access to free or trial API products that provide limited quota or capabilities.',
      }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either `public`, `private`, or `internal`. Only products marked `public` are available to developers in the Apigee developer portal. For example, you can set a product to `internal` while it is in development and then change access to `public` when it is ready to release on the portal. API products marked as `private` do not appear on the portal, but can be accessed by external developers.',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Response only. Creation time of this environment as milliseconds since epoch.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Description of the API product. Include key information about the API product that is not captured by other fields.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name displayed in the UI or developer portal to developers registering for API access.',
      }),
    environments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in `prod` from being accessed by API proxies deployed in `test`.',
      }),
    graphqlOperationGroup: GoogleCloudApigeeV1GraphQLOperationGroupSchema.exactOptional().openapi({
      description:
        'Configuration used to group Apigee proxies or remote services with graphQL operation name, graphQL operation type and quotas. This grouping allows us to precisely set quota for a particular combination of graphQL name and operation type for a particular proxy request. If graphQL name is not set, this would imply quota will be applied on all graphQL requests matching the operation type.',
    }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Response only. Modified time of this environment as milliseconds since epoch.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Internal name of the API product. Characters you can use in the name are restricted to: `A-Z0-9._\\-$ %`. **Note:** The internal name cannot be edited when updating the API product.',
      }),
    operationGroup: GoogleCloudApigeeV1OperationGroupSchema.exactOptional().openapi({
      description:
        'Configuration used to group Apigee proxies or remote services with resources, method types, and quotas. The resource refers to the resource URI (excluding the base path). With this grouping, the API product creator is able to fine-tune and give precise control over which REST methods have access to specific resources and how many calls can be made (using the `quota` setting). **Note:** The `api_resources` setting cannot be specified for both the API product and operation group; otherwise the call will fail.',
    }),
    proxies: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation.',
      }),
    quota: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of request messages permitted per app by this API product for the specified `quotaInterval` and `quotaTimeUnit`. For example, a `quota` of 50, for a `quotaInterval` of 12 and a `quotaTimeUnit` of hours means 50 requests are allowed every 12 hours.',
      }),
    quotaCounterScope: z
      .enum(['QUOTA_COUNTER_SCOPE_UNSPECIFIED', 'PROXY', 'OPERATION'])
      .exactOptional()
      .openapi({
        description:
          'Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself.',
      }),
    quotaInterval: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time interval over which the number of request messages is calculated.',
      }),
    quotaTimeUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time unit defined for the `quotaInterval`. Valid values include `minute`, `hour`, `day`, or `month`.',
      }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ApiProduct')

const GoogleCloudApigeeV1ApiProductRefSchema = z
  .object({
    apiproduct: z.string().exactOptional().openapi({ description: 'Name of the API product.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status of the API product. Valid values are `approved` or `revoked`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ApiProductRef')

const GoogleCloudApigeeV1EntityMetadataSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time at which the API proxy was created, in milliseconds since epoch.',
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which the API proxy was most recently modified, in milliseconds since epoch.',
      }),
    subType: z.string().exactOptional().openapi({ description: 'The type of entity described' }),
  })
  .openapi({ description: 'Metadata common to many entities in this API.', required: [] })
  .openapi('GoogleCloudApigeeV1EntityMetadata')

const GoogleCloudApigeeV1ApiProxySchema = z
  .object({
    apiProxyType: z
      .enum(['API_PROXY_TYPE_UNSPECIFIED', 'PROGRAMMABLE', 'CONFIGURABLE'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of the API proxy.', readOnly: true }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'User labels applied to this API Proxy.' }),
    latestRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The id of the most recently created revision for this api proxy.',
        readOnly: true,
      }),
    metaData: GoogleCloudApigeeV1EntityMetadataSchema.exactOptional().openapi({
      description: 'Output only. Metadata describing the API proxy.',
      readOnly: true,
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the API proxy.', readOnly: true }),
    readOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Whether this proxy is read-only. A read-only proxy cannot have new revisions created through calls to CreateApiProxyRevision. A proxy is read-only if it was generated by an archive.',
        readOnly: true,
      }),
    revision: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. List of revisions defined for the API proxy.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata describing the API proxy', required: [] })
  .openapi('GoogleCloudApigeeV1ApiProxy')

const GoogleCloudApigeeV1ConfigVersionSchema = z
  .object({
    majorVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Major version of the API proxy configuration schema.' }),
    minorVersion: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minor version of the API proxy configuration schema.' }),
  })
  .openapi({
    description: 'Version of the API proxy configuration schema. Currently, only 4.0 is supported.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ConfigVersion')

const GoogleCloudApigeeV1ResourceFileSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'ID of the resource file.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource file type. {{ resource_file_type }}' }),
  })
  .openapi({ description: 'Metadata about a resource file.', required: [] })
  .openapi('GoogleCloudApigeeV1ResourceFile')

const GoogleCloudApigeeV1ResourceFilesSchema = z
  .object({
    resourceFile: z
      .array(GoogleCloudApigeeV1ResourceFileSchema)
      .exactOptional()
      .openapi({ description: 'List of resource files.' }),
  })
  .openapi({ description: 'List of resource files.', required: [] })
  .openapi('GoogleCloudApigeeV1ResourceFiles')

const GoogleCloudApigeeV1ApiProxyRevisionSchema = z
  .object({
    archive: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The archive that generated this proxy revision. This field is only present on proxy revisions that were generated by an archive. Proxies generated by archives cannot be updated, deleted, or deployed to other environments. Format: `organizations/*/environments/*/archiveDeployments/*`',
        readOnly: true,
      }),
    basepaths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Base URL of the API proxy.' }),
    configurationVersion: GoogleCloudApigeeV1ConfigVersionSchema.exactOptional().openapi({
      description:
        'Version of the API proxy configuration schema to which the API proxy conforms. Currently, the only supported value is 4.0 (`majorVersion.minorVersion`). This setting may be used in the future to track the evolution of the API proxy format.',
    }),
    contextInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Revision number, app name, and organization for the API proxy.' }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time that the API proxy revision was created in milliseconds since epoch.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the API proxy revision.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable name of the API proxy.' }),
    entityMetaDataAsProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Metadata describing the API proxy revision as a key-value map.' }),
    integrationEndpoints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "List of IntegrationEndpoints in the '/integration-endpoints' directory of the API proxy. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.",
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time that the API proxy revision was last modified in milliseconds since epoch.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the API proxy.' }),
    policies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of policy names included in the API proxy revision..' }),
    proxies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of proxy names included in the API proxy revision.' }),
    proxyEndpoints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "List of ProxyEndpoints in the `/proxies` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.",
      }),
    resourceFiles: GoogleCloudApigeeV1ResourceFilesSchema.exactOptional().openapi({
      description: 'List of resource files included in the API proxy revision.',
    }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of the resources included in the API proxy revision formatted as "{type}://{name}".',
      }),
    revision: z.string().exactOptional().openapi({ description: 'API proxy revision.' }),
    sharedFlows: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of the shared flows included in the API proxy revision.' }),
    spec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'OpenAPI Specification that is associated with the API proxy. The value is set to a URL or to a path in the specification store.',
      }),
    targetEndpoints: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "List of TargetEndpoints in the `/targets` directory of the API proxy. Typically, this element is included only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.",
      }),
    targetServers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "List of TargetServers referenced in any TargetEndpoint in the API proxy. Typically, you will see this element only when the API proxy was created using the Edge UI. This is a 'manifest' setting designed to provide visibility into the contents of the API proxy.",
      }),
    targets: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of the targets included in the API proxy revision.' }),
    teams: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of the teams included in the API proxy revision.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type. Set to `Application`. Maintained for compatibility with the Apigee Edge API.',
      }),
  })
  .openapi({ description: 'API proxy revision.', required: [] })
  .openapi('GoogleCloudApigeeV1ApiProxyRevision')

const GoogleCloudApigeeV1ApiResponseWrapperSchema = z
  .object({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find errors in the log files.' }),
    message: z.string().exactOptional().openapi({ description: 'Description of the operation.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find request details in the log files.' }),
    status: z.string().exactOptional().openapi({ description: 'Status of the operation.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ApiResponseWrapper')

const GoogleCloudApigeeV1ApiSecurityRuntimeConfigSchema = z
  .object({
    location: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of up to 5 Cloud Storage Blobs that contain SecurityActions.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the environment API Security Runtime configuration resource. Format: `organizations/{org}/environments/{env}/apiSecurityRuntimeConfig`',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision ID of the API Security Runtime configuration. The higher the value, the more recently the configuration was deployed.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID for the API Security Runtime configuration. The ID will only change if the environment is deleted and recreated.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that the API Security Runtime configuration was updated.' }),
  })
  .openapi({
    description:
      'Response for GetApiSecurityRuntimeConfig[EnvironmentService.GetApiSecurityRuntimeConfig].',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ApiSecurityRuntimeConfig')

const GoogleCloudApigeeV1CredentialSchema = z
  .object({
    apiProducts: z
      .array(GoogleCloudApigeeV1ApiProductRefSchema)
      .exactOptional()
      .openapi({ description: 'List of API products this credential can be used for.' }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'List of attributes associated with this credential.' }),
    consumerKey: z.string().exactOptional().openapi({ description: 'Consumer key.' }),
    consumerSecret: z.string().exactOptional().openapi({ description: 'Secret key.' }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the credential will expire in milliseconds since epoch.' }),
    issuedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the credential was issued in milliseconds since epoch.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of scopes to apply to the app. Specified scopes must already exist on the API product that you associate with the app.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status of the credential. Valid values include `approved` or `revoked`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Credential')

const GoogleCloudApigeeV1AppSchema = z
  .object({
    apiProducts: z
      .array(GoogleCloudApigeeV1ApiProductRefSchema)
      .exactOptional()
      .openapi({ description: 'List of API products associated with the app.' }),
    appId: z.string().exactOptional().openapi({ description: 'ID of the app.' }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'List of attributes.' }),
    callbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to apps.',
      }),
    companyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the company that owns the app.' }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Unix time when the app was created.', readOnly: true }),
    credentials: z
      .array(GoogleCloudApigeeV1CredentialSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Set of credentials for the app. Credentials are API key/secret pairs associated with API products.',
        readOnly: true,
      }),
    developerId: z.string().exactOptional().openapi({ description: 'ID of the developer.' }),
    keyExpiresIn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Duration, in milliseconds, of the consumer key that will be generated for the app. The default value, -1, indicates an infinite validity period. Once set, the expiration can't be updated. json key: keyExpiresIn",
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last modified time as milliseconds since epoch.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the app.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Scopes to apply to the app. The specified scope names must already exist on the API product that you associate with the app.',
      }),
    status: z.string().exactOptional().openapi({ description: 'Status of the credential.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1App')

const GoogleCloudApigeeV1ArchiveDeploymentSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the Archive Deployment was created in milliseconds since the epoch.',
        readOnly: true,
      }),
    gcsUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The Google Cloud Storage signed URL returned from GenerateUploadUrl and used to upload the Archive zip file.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'User-supplied key-value pairs used to organize ArchiveDeployments. Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: \\p{Ll}\\p{Lo}{0,62} Label values must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must conform to the following PCRE regular expression: [\\p{Ll}\\p{Lo}\\p{N}_-]{0,63} No more than 64 labels can be associated with a given store.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the Archive Deployment in the following format: `organizations/{org}/environments/{env}/archiveDeployments/{id}`.',
      }),
    operation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A reference to the LRO that created this Archive Deployment in the following format: `organizations/{org}/operations/{id}`',
        readOnly: true,
      }),
    updatedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the Archive Deployment was updated in milliseconds since the epoch.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Archive Deployment information.', required: [] })
  .openapi('GoogleCloudApigeeV1ArchiveDeployment')

const GoogleCloudApigeeV1QueryMetadataSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Dimensions of the AsyncQuery.' }),
    endTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'End timestamp of the query range.' }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Metrics of the AsyncQuery. Example: ["name:message_count,func:sum,alias:sum_message_count"]',
      }),
    outputFormat: z.string().exactOptional().openapi({ description: 'Output format.' }),
    startTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start timestamp of the query range.' }),
    timeUnit: z.string().exactOptional().openapi({ description: 'Query GroupBy time unit.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1QueryMetadata')

const GoogleCloudApigeeV1AsyncQueryResultSchema = z
  .object({
    expires: z
      .string()
      .exactOptional()
      .openapi({ description: 'Query result will be unaccessable after this time.' }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Self link of the query results. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1AsyncQueryResult')

const GoogleCloudApigeeV1AsyncQuerySchema = z
  .object({
    created: z.string().exactOptional().openapi({ description: 'Creation time of the query.' }),
    envgroupHostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hostname is available only when query is executed at host level.' }),
    error: z.string().exactOptional().openapi({ description: 'Error is set when query fails.' }),
    executionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'ExecutionTime is available only after the query is completed.' }),
    name: z.string().exactOptional().openapi({ description: 'Asynchronous Query Name.' }),
    queryParams: GoogleCloudApigeeV1QueryMetadataSchema.exactOptional().openapi({
      description: 'Contains information like metrics, dimenstions etc of the AsyncQuery.',
    }),
    reportDefinitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Asynchronous Report ID.' }),
    result: GoogleCloudApigeeV1AsyncQueryResultSchema.exactOptional().openapi({
      description: 'Result is available only after the query is completed.',
    }),
    resultFileSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'ResultFileSize is available only after the query is completed.' }),
    resultRows: z
      .string()
      .exactOptional()
      .openapi({ description: 'ResultRows is available only after the query is completed.' }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Self link of the query. Example: `/organizations/myorg/environments/myenv/queries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostQueries/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Query state could be "enqueued", "running", "completed", "failed".',
      }),
    updated: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last updated timestamp for the query.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1AsyncQuery')

const GoogleCloudApigeeV1AsyncQueryResultViewSchema = z
  .object({
    code: z.int32().exactOptional().openapi({ description: 'Error code when there is a failure.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message when there is a failure.' }),
    metadata: GoogleCloudApigeeV1QueryMetadataSchema.exactOptional().openapi({
      description: 'Metadata contains information like metrics, dimenstions etc of the AsyncQuery.',
    }),
    rows: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}',
      }),
    state: z.string().exactOptional().openapi({ description: 'State of retrieving ResultView.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1AsyncQueryResultView')

const GoogleCloudApigeeV1AttributesSchema = z
  .object({
    attribute: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'List of attributes.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Attributes')

const GoogleCloudApigeeV1CanaryEvaluationMetricLabelsSchema = z
  .object({
    env: z
      .string()
      .exactOptional()
      .openapi({ description: 'The environment ID associated with the metrics.' }),
    instance_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The instance ID associated with the metrics. In Apigee Hybrid, the value is configured during installation.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The location associated with the metrics.' }),
  })
  .openapi({ description: 'Labels that can be used to filter Apigee metrics.', required: [] })
  .openapi('GoogleCloudApigeeV1CanaryEvaluationMetricLabels')

const GoogleCloudApigeeV1CanaryEvaluationSchema = z
  .object({
    control: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The stable version that is serving requests.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Create time of the canary evaluation.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. End time for the evaluation's analysis." }),
    metricLabels: GoogleCloudApigeeV1CanaryEvaluationMetricLabelsSchema.exactOptional().openapi({
      description: 'Required. Labels used to filter the metrics used for a canary evaluation.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the canary evalution.', readOnly: true }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. Start time for the canary evaluation's analysis." }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'RUNNING', 'SUCCEEDED'])
      .exactOptional()
      .openapi({
        description: 'Output only. The current state of the canary evaluation.',
        readOnly: true,
      }),
    treatment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The newer version that is serving requests.' }),
    verdict: z
      .enum(['VERDICT_UNSPECIFIED', 'NONE', 'FAIL', 'PASS'])
      .exactOptional()
      .openapi({
        description:
          'Output only. The resulting verdict of the canary evaluations: NONE, PASS, or FAIL.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'CanaryEvaluation represents the canary analysis between two versions of the runtime that is serving requests.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1CanaryEvaluation')

const GoogleCloudApigeeV1CommonNameConfigSchema = z
  .object({ matchWildCards: z.boolean().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1CommonNameConfig')

const GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterSchema = z
  .object({
    scorePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Return scores for this component. Example: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"',
      }),
  })
  .openapi({
    description:
      'Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are highly constrained and predictable.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter')

const GoogleTypeIntervalSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.',
      }),
  })
  .openapi({
    description:
      'Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.',
    required: [],
  })
  .openapi('GoogleTypeInterval')

const GoogleCloudApigeeV1ComputeEnvironmentScoresRequestSchema = z
  .object({
    filters: z
      .array(GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned. Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path: "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than this value. If unspecified, at most 100 subcomponents will be returned in a single page.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    timeRange: GoogleTypeIntervalSchema.exactOptional().openapi({
      description:
        'Required. Time range for score calculation. At most 14 days of scores will be returned.',
    }),
  })
  .openapi({ description: 'Request for ComputeEnvironmentScores.', required: [] })
  .openapi('GoogleCloudApigeeV1ComputeEnvironmentScoresRequest')

const GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextSchema = z
  .object({
    documentationLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Documentation link for the action.' }),
  })
  .openapi({
    description: 'Action context are all the relevant details for the action.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContext')

const GoogleCloudApigeeV1ScoreComponentRecommendationActionSchema = z
  .object({
    actionContext:
      GoogleCloudApigeeV1ScoreComponentRecommendationActionActionContextSchema.exactOptional().openapi(
        { description: 'Action context for the action.' },
      ),
    description: z.string().exactOptional().openapi({ description: 'Description of the action.' }),
  })
  .openapi({ description: 'Action to improve security score.', required: [] })
  .openapi('GoogleCloudApigeeV1ScoreComponentRecommendationAction')

const GoogleCloudApigeeV1ScoreComponentRecommendationSchema = z
  .object({
    actions: z
      .array(GoogleCloudApigeeV1ScoreComponentRecommendationActionSchema)
      .exactOptional()
      .openapi({ description: 'Actions for the recommendation to improve the security score.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the recommendation.' }),
    impact: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Potential impact of this recommendation on the overall score. This denotes how important this recommendation is to improve the score.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title represents recommendation title.' }),
  })
  .openapi({ description: 'Recommendation based on security concerns and score.', required: [] })
  .openapi('GoogleCloudApigeeV1ScoreComponentRecommendation')

const GoogleCloudApigeeV1ScoreComponentSchema = z
  .object({
    calculateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time when score was calculated.' }),
    dataCaptureTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time in the requested time period when data was last captured to compute the score.',
      }),
    drilldownPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of paths for next components.' }),
    recommendations: z
      .array(GoogleCloudApigeeV1ScoreComponentRecommendationSchema)
      .exactOptional()
      .openapi({ description: 'List of recommendations to improve API security.' }),
    score: z.int32().exactOptional().openapi({ description: 'Score for the component.' }),
    scorePath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path of the component. Example: /org@myorg/envgroup@myenvgroup/proxies/proxy@myproxy',
      }),
  })
  .openapi({
    description: 'Component is an individual security element that is scored.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ScoreComponent')

const GoogleCloudApigeeV1ScoreSchema = z
  .object({
    component: GoogleCloudApigeeV1ScoreComponentSchema.exactOptional().openapi({
      description: 'Component containing score, recommendations and actions.',
    }),
    subcomponents: z
      .array(GoogleCloudApigeeV1ScoreComponentSchema)
      .exactOptional()
      .openapi({ description: 'List of all the drilldown score components.' }),
    timeRange: GoogleTypeIntervalSchema.exactOptional().openapi({
      description: 'Start and end time for the score.',
    }),
  })
  .openapi({ description: 'Represents Security Score.', required: [] })
  .openapi('GoogleCloudApigeeV1Score')

const GoogleCloudApigeeV1ComputeEnvironmentScoresResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A page token, received from a previous `ComputeScore` call. Provide this to retrieve the subsequent page.',
      }),
    scores: z
      .array(GoogleCloudApigeeV1ScoreSchema)
      .exactOptional()
      .openapi({ description: 'List of scores. One score per day.' }),
  })
  .openapi({ description: 'Response for ComputeEnvironmentScores.', required: [] })
  .openapi('GoogleCloudApigeeV1ComputeEnvironmentScoresResponse')

const GoogleCloudApigeeV1CreditDeveloperBalanceRequestSchema = z
  .object({
    transactionAmount: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'The amount of money to be credited. The wallet corresponding to the currency specified within `transaction_amount` will be updated. For example, if you specified `currency_code` within `transaction_amount` as "USD", then the amount would be added to the wallet which has the "USD" currency or if no such wallet exists, a new wallet will be created with the "USD" currency.',
    }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Each transaction_id uniquely identifies a credit balance request. If multiple requests are received with the same transaction_id, only one of them will be considered.',
      }),
  })
  .openapi({ description: 'Request for CreditDeveloperBalance.', required: [] })
  .openapi('GoogleCloudApigeeV1CreditDeveloperBalanceRequest')

const GoogleCloudApigeeV1CustomReportMetricSchema = z
  .object({
    function: z.string().exactOptional().openapi({ description: 'aggregate function' }),
    name: z.string().exactOptional().openapi({ description: 'name of the metric' }),
  })
  .openapi({
    description:
      'This encapsulates a metric property of the form sum(message_count) where name is message_count and function is sum',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1CustomReportMetric')

const GoogleCloudApigeeV1ReportPropertySchema = z
  .object({
    property: z.string().exactOptional().openapi({ description: 'name of the property' }),
    value: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'property values' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ReportProperty')

const GoogleCloudApigeeV1CustomReportSchema = z
  .object({
    chartType: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field contains the chart type for the report' }),
    comments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Legacy field: not used. This field contains a list of comments associated with custom report',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Unix time when the app was created json key: createdAt',
        readOnly: true,
      }),
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'This contains the list of dimensions for the report' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'This is the display name for the report' }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Environment name', readOnly: true }),
    filter: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field contains the filter expression' }),
    fromTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legacy field: not used. Contains the from time for the report' }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt',
        readOnly: true,
      }),
    lastViewedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last viewed time of this entity as milliseconds since epoch',
        readOnly: true,
      }),
    limit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Legacy field: not used This field contains the limit for the result retrieved',
      }),
    metrics: z
      .array(GoogleCloudApigeeV1CustomReportMetricSchema)
      .exactOptional()
      .openapi({ description: 'Required. This contains the list of metrics' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id',
      }),
    offset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Legacy field: not used. This field contains the offset for the data',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Organization name', readOnly: true }),
    properties: z
      .array(GoogleCloudApigeeV1ReportPropertySchema)
      .exactOptional()
      .openapi({ description: 'This field contains report properties such as ui metadata etc.' }),
    sortByCols: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Legacy field: not used much. Contains the list of sort by columns',
      }),
    sortOrder: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Legacy field: not used much. Contains the sort order for the sort columns',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Legacy field: not used. This field contains a list of tags associated with custom report',
      }),
    timeUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'This field contains the time unit of aggregation for the report' }),
    toTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Legacy field: not used. Contains the end time for the report' }),
    topk: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Legacy field: not used. This field contains the top k parameter value for restricting the result',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1CustomReport')

const GoogleCloudApigeeV1DataCollectorSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the data collector was created in milliseconds since the epoch.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the data collector.' }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the Data Collector was last updated in milliseconds since the epoch.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the data collector. Must begin with `dc_`.' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'INTEGER', 'FLOAT', 'STRING', 'BOOLEAN', 'DATETIME'])
      .exactOptional()
      .openapi({ description: 'Immutable. The type of data this data collector will collect.' }),
  })
  .openapi({ description: 'Data collector configuration.', required: [] })
  .openapi('GoogleCloudApigeeV1DataCollector')

const GoogleCloudApigeeV1DataCollectorConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the data collector in the following format: `organizations/{org}/datacollectors/{datacollector}`',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'INTEGER', 'FLOAT', 'STRING', 'BOOLEAN', 'DATETIME'])
      .exactOptional()
      .openapi({ description: 'Data type accepted by the data collector.' }),
  })
  .openapi({ description: 'Data collector and its configuration.', required: [] })
  .openapi('GoogleCloudApigeeV1DataCollectorConfig')

const GoogleCloudApigeeV1DatastoreConfigSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the Cloud Storage bucket. Required for `gcs` target_type.',
      }),
    datasetName: z
      .string()
      .exactOptional()
      .openapi({ description: 'BigQuery dataset name Required for `bigquery` target_type.' }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path of Cloud Storage bucket Required for `gcs` target_type.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. GCP project in which the datastore exists' }),
    tablePrefix: z
      .string()
      .exactOptional()
      .openapi({ description: 'Prefix of BigQuery table Required for `bigquery` target_type.' }),
  })
  .openapi({ description: 'Configuration detail for datastore', required: [] })
  .openapi('GoogleCloudApigeeV1DatastoreConfig')

const GoogleCloudApigeeV1DatastoreSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z',
        readOnly: true,
      }),
    datastoreConfig: GoogleCloudApigeeV1DatastoreConfigSchema.exactOptional().openapi({
      description: 'Datastore Configurations.',
    }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name in UI' }),
    lastUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z',
        readOnly: true,
      }),
    org: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Organization that the datastore belongs to',
        readOnly: true,
      }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource link of Datastore. Example: `/organizations/{org}/analytics/datastores/{uuid}`',
        readOnly: true,
      }),
    targetType: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination storage type. Supported types `gcs` or `bigquery`.' }),
  })
  .openapi({
    description:
      'The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Datastore')

const GoogleCloudApigeeV1DateRangeSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. End date (exclusive) of the data to export in the format `yyyy-mm-dd`. The date range ends at 00:00:00 UTC on the end date- which will not be in the output.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Start date of the data to export in the format `yyyy-mm-dd`. The date range begins at 00:00:00 UTC on the start date.',
      }),
  })
  .openapi({ description: 'Date range of the data to export.', required: [] })
  .openapi('GoogleCloudApigeeV1DateRange')

const GoogleCloudApigeeV1DebugMaskSchema = z
  .object({
    faultJSONPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of JSON paths that specify the JSON elements to be filtered from JSON payloads in error flows.',
      }),
    faultXPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of XPaths that specify the XML elements to be filtered from XML payloads in error flows.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the debug mask.' }),
    namespaces: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Map of namespaces to URIs.' }),
    requestJSONPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of JSON paths that specify the JSON elements to be filtered from JSON request message payloads.',
      }),
    requestXPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of XPaths that specify the XML elements to be filtered from XML request message payloads.',
      }),
    responseJSONPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of JSON paths that specify the JSON elements to be filtered from JSON response message payloads.',
      }),
    responseXPaths: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of XPaths that specify the XML elements to be filtered from XML response message payloads.',
      }),
    variables: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of variables that should be masked from the debug output.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1DebugMask')

const GoogleCloudApigeeV1DebugSessionSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The first transaction creation timestamp, recorded by UAP.',
        readOnly: true,
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition.',
      }),
    name: z.string().exactOptional().openapi({ description: 'A unique ID for this DebugSession.' }),
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided.',
      }),
    tracesize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120.',
      }),
    validity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in the control plane. Min = 1, Max = 15, Default = 10.",
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1DebugSession')

const GoogleCloudApigeeV1PropertySchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The property key' }),
    value: z.string().exactOptional().openapi({ description: 'The property value' }),
  })
  .openapi({ description: 'A single property entry in the Properties message.', required: [] })
  .openapi('GoogleCloudApigeeV1Property')

const GoogleCloudApigeeV1PropertiesSchema = z
  .object({
    property: z
      .array(GoogleCloudApigeeV1PropertySchema)
      .exactOptional()
      .openapi({ description: 'List of all properties in the object' }),
  })
  .openapi({
    description:
      'Message for compatibility with legacy Edge specification for Java Properties object in JSON.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Properties')

const GoogleCloudApigeeV1ResultSchema = z
  .object({
    ActionResult: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the action result. Can be one of the five: DebugInfo, RequestMessage, ResponseMessage, ErrorMessage, VariableAccess',
      }),
    accessList: z
      .array(GoogleCloudApigeeV1AccessSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of variable access actions agaist the api proxy. Supported values: Get, Set, Remove.',
      }),
    content: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error message content. for example, "content" : "{\\"fault\\":{\\"faultstring\\":\\"API timed out\\",\\"detail\\":{\\"errorcode\\":\\"flow.APITimedOut\\"}}}"',
      }),
    headers: z
      .array(GoogleCloudApigeeV1PropertySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of HTTP headers. for example, \'"headers" : [ { "name" : "Content-Length", "value" : "83" }, { "name" : "Content-Type", "value" : "application/json" } ]\'',
      }),
    properties: GoogleCloudApigeeV1PropertiesSchema.exactOptional().openapi({
      description: 'Name value pairs used for DebugInfo ActionResult.',
    }),
    reasonPhrase: z.string().exactOptional().openapi({ description: 'HTTP response phrase' }),
    statusCode: z.string().exactOptional().openapi({ description: 'HTTP response code' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timestamp of when the result is recorded. Its format is dd-mm-yy hh:mm:ss:xxx. For example, `"timestamp" : "12-08-19 00:31:59:960"`',
      }),
    uRI: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The relative path of the api proxy. for example, `"uRI" : "/iloveapis"`',
      }),
    verb: z.string().exactOptional().openapi({ description: 'HTTP method verb' }),
  })
  .openapi({
    description:
      'Result is short for "action result", could be different types identified by "action_result" field. Supported types: 1. DebugInfo : generic debug info collected by runtime recorded as a list of properties. For example, the contents could be virtual host info, state change result, or execution metadata. Required fields : properties, timestamp 2. RequestMessage: information of a http request. Contains headers, request URI and http methods type.Required fields : headers, uri, verb 3. ResponseMessage: information of a http response. Contains headers, reason phrase and http status code. Required fields : headers, reasonPhrase, statusCode 4. ErrorMessage: information of a http error message. Contains detail error message, reason phrase and status code. Required fields : content, headers, reasonPhrase, statusCode 5. VariableAccess: a list of variable access actions, can be Get, Set and Remove. Required fields : accessList',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Result')

const GoogleCloudApigeeV1PointSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Name of a step in the transaction.' }),
    results: z
      .array(GoogleCloudApigeeV1ResultSchema)
      .exactOptional()
      .openapi({ description: 'List of results extracted from a given debug point.' }),
  })
  .openapi({
    description:
      'Point is a group of information collected by runtime plane at critical points of the message flow of the processed API request. This is a list of supported point IDs, categorized to three major buckets. For each category, debug points that we are currently supporting are listed below: - Flow status debug points: StateChange FlowInfo Condition Execution DebugMask Error - Flow control debug points: FlowCallout Paused Resumed FlowReturn BreakFlow Error - Runtime debug points: ScriptExecutor FlowCalloutStepDefinition CustomTarget StepDefinition Oauth2ServicePoint RaiseFault NodeJS The detail information of the given debug point is stored in a list of results.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Point')

const GoogleCloudApigeeV1DebugSessionTransactionSchema = z
  .object({
    completed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag indicating whether a transaction is completed or not' }),
    point: z
      .array(GoogleCloudApigeeV1PointSchema)
      .exactOptional()
      .openapi({
        description:
          'List of debug data collected by runtime plane at various defined points in the flow.',
      }),
  })
  .openapi({
    description:
      'A transaction contains all of the debug information of the entire message flow of an API call processed by the runtime plane. The information is collected and recorded at critical points of the message flow in the runtime apiproxy.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DebugSessionTransaction')

const GoogleCloudApigeeV1DeleteCustomReportResponseSchema = z
  .object({
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The response contains only a message field.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1DeleteCustomReportResponse')

const GoogleRpcStatusSchema = z
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
  .openapi('GoogleRpcStatus')

const GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionSchema = z
  .object({
    percentage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Percentage of MP replicas reporting this revision.' }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'API proxy revision reported as deployed.' }),
  })
  .openapi({ description: 'Revisions deployed in the MPs.', required: [] })
  .openapi('GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision')

const GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteSchema = z
  .object({
    basepath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base path in the routing table.' }),
    envgroup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Environment group where this route is installed.' }),
    environment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Destination environment. This will be empty if the route is not yet reported.',
      }),
    percentage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Percentage of ingress replicas reporting this route.' }),
  })
  .openapi({ description: 'Route deployed in the ingress routing table.', required: [] })
  .openapi('GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute')

const GoogleCloudApigeeV1InstanceDeploymentStatusSchema = z
  .object({
    deployedRevisions: z
      .array(GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionSchema)
      .exactOptional()
      .openapi({ description: 'Revisions currently deployed in MPs.' }),
    deployedRoutes: z
      .array(GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteSchema)
      .exactOptional()
      .openapi({
        description:
          'Current routes deployed in the ingress routing table. A route which is missing will appear in `missing_routes`.',
      }),
    instance: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the instance reporting the status.' }),
  })
  .openapi({
    description: 'The status of a deployment as reported by a single instance.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1InstanceDeploymentStatus')

const GoogleCloudApigeeV1PodStatusSchema = z
  .object({
    appVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'Version of the application running in the pod.' }),
    deploymentStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the deployment. Valid values include: - `deployed`: Successful. - `error` : Failed. - `pending` : Pod has not yet reported on the deployment.',
      }),
    deploymentStatusTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time the deployment status was reported in milliseconds since epoch.',
      }),
    deploymentTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the proxy was deployed in milliseconds since epoch.' }),
    podName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the pod which is reporting the status.' }),
    podStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Overall status of the pod (not this specific deployment). Valid values include: - `active`: Up to date. - `stale` : Recently out of date. Pods that have not reported status in a long time are excluded from the output.',
      }),
    podStatusTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the pod status was reported in milliseconds since epoch.' }),
    statusCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code associated with the deployment status.' }),
    statusCodeDetails: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable message associated with the status code.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1PodStatus')

const GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentSchema = z
  .object({
    apiProxy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the deployed API proxy revision containing the base path.',
      }),
    basepath: z.string().exactOptional().openapi({ description: 'Base path receiving traffic.' }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the environment in which the proxy is deployed.' }),
    revision: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the deployed API proxy revision containing the base path.',
      }),
  })
  .openapi({
    description: 'Tuple representing a base path and the deployment containing it.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment')

const GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema = z
  .object({
    conflictingDeployment:
      GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentSchema.exactOptional().openapi({
        description: 'Existing base path/deployment causing the conflict.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of this conflict.' }),
    environmentGroup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the environment group in which this conflict exists.' }),
  })
  .openapi({
    description:
      'Describes a routing conflict that may cause a deployment not to receive traffic at some base path.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict')

const GoogleCloudApigeeV1DeploymentSchema = z
  .object({
    apiProxy: z.string().exactOptional().openapi({ description: 'API proxy.' }),
    deployStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time the API proxy was marked `deployed` in the control plane in millisconds since epoch.',
      }),
    environment: z.string().exactOptional().openapi({ description: 'Environment.' }),
    errors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field is displayed only when viewing deployment status.',
      }),
    instances: z
      .array(GoogleCloudApigeeV1InstanceDeploymentStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment status.',
      }),
    pods: z
      .array(GoogleCloudApigeeV1PodStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report instance level status rather than pod status.',
      }),
    revision: z.string().exactOptional().openapi({ description: 'API proxy revision.' }),
    routeConflicts: z
      .array(GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema)
      .exactOptional()
      .openapi({
        description:
          "Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be `ERROR`, but it will mean that some of the deployment's base paths are not routed to its environment. If the conflicts change, the state will transition to `PROGRESSING` until the latest configuration is rolled out to all instances. **Note**: This field is displayed only when viewing deployment status.",
      }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full resource name of Cloud IAM Service Account that this deployment is using, eg, `projects/-/serviceAccounts/{email}`.',
      }),
    state: z
      .enum(['RUNTIME_STATE_UNSPECIFIED', 'READY', 'PROGRESSING', 'ERROR'])
      .exactOptional()
      .openapi({
        description:
          'Current state of the deployment. **Note**: This field is displayed only when viewing deployment status.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Deployment')

const GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human-readable description of this routing change.' }),
    environmentGroup: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the environment group affected by this routing change.' }),
    fromDeployment:
      GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentSchema.exactOptional().openapi({
        description: 'Base path/deployment that may stop receiving some traffic.',
      }),
    shouldSequenceRollout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set to `true` if using sequenced rollout would make this routing change safer. **Note**: This does not necessarily imply that automated sequenced rollout mode is supported for the operation.',
      }),
    toDeployment:
      GoogleCloudApigeeV1DeploymentChangeReportRoutingDeploymentSchema.exactOptional().openapi({
        description:
          'Base path/deployment that may start receiving that traffic. May be null if no deployment is able to receive the traffic.',
      }),
  })
  .openapi({
    description:
      'Describes a potential routing change that may occur as a result of some deployment operation.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeploymentChangeReportRoutingChange')

const GoogleRpcPreconditionFailureViolationSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: "Terms of service not accepted".',
      }),
    subject: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the "TOS" type would indicate which terms of service is being referenced.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, "TOS" for "Terms of Service violation".',
      }),
  })
  .openapi({
    description: 'A message type used to describe a single precondition failure.',
    required: [],
  })
  .openapi('GoogleRpcPreconditionFailureViolation')

const GoogleRpcPreconditionFailureSchema = z
  .object({
    violations: z
      .array(GoogleRpcPreconditionFailureViolationSchema)
      .exactOptional()
      .openapi({ description: 'Describes all precondition violations.' }),
  })
  .openapi({
    description:
      'Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.',
    required: [],
  })
  .openapi('GoogleRpcPreconditionFailure')

const GoogleCloudApigeeV1DeploymentChangeReportSchema = z
  .object({
    routingChanges: z
      .array(GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeSchema)
      .exactOptional()
      .openapi({ description: 'All routing changes that may result from a deployment request.' }),
    routingConflicts: z
      .array(GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictSchema)
      .exactOptional()
      .openapi({ description: 'All base path conflicts detected for a deployment request.' }),
    validationErrors: GoogleRpcPreconditionFailureSchema.exactOptional().openapi({
      description:
        'Validation errors that would cause the deployment change request to be rejected.',
    }),
  })
  .openapi({
    description:
      'Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeploymentChangeReport')

const GoogleCloudApigeeV1DeploymentConfigSchema = z
  .object({
    attributes: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Additional key-value metadata for the deployment.' }),
    basePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Base path where the application will be hosted. Defaults to "/".' }),
    deploymentGroups: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of deployment groups in which this proxy should be deployed. Not currently populated for shared flows.',
      }),
    endpoints: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A mapping from basepaths to proxy endpoint names in this proxy. Not populated for shared flows.',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location of the API proxy bundle as a URI.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the API or shared flow revision to be deployed in the following format: `organizations/{org}/apis/{api}/revisions/{rev}` or `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`',
      }),
    proxyUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique ID of the API proxy revision.' }),
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The service account identity associated with this deployment. If non-empty, will be in the following format: `projects/-/serviceAccounts/{account_email}`',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID. The ID will only change if the deployment is deleted and recreated.',
      }),
  })
  .openapi({ description: 'NEXT ID: 11', required: [] })
  .openapi('GoogleCloudApigeeV1DeploymentConfig')

const GoogleCloudApigeeV1DeploymentGroupConfigSchema = z
  .object({
    deploymentGroupType: z
      .enum(['DEPLOYMENT_GROUP_TYPE_UNSPECIFIED', 'STANDARD', 'EXTENSIBLE'])
      .exactOptional()
      .openapi({
        description: 'Type of the deployment group, which will be either Standard or Extensible.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the deployment group in the following format: `organizations/{org}/environments/{env}/deploymentGroups/{group}`.',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision number which can be used by the runtime to detect if the deployment group has changed between two versions.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID. The ID will only change if the deployment group is deleted and recreated.',
      }),
  })
  .openapi({
    description:
      'DeploymentGroupConfig represents a deployment group that should be present in a particular environment.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeploymentGroupConfig')

const GoogleCloudApigeeV1DeveloperSchema = z
  .object({
    accessType: z.string().exactOptional().openapi({ description: 'Access type.' }),
    appFamily: z.string().exactOptional().openapi({ description: 'Developer app family.' }),
    apps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of apps associated with the developer.' }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Developer attributes (name/value pairs). The custom attribute limit is 18.',
      }),
    companies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of companies associated with the developer.' }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the developer was created in milliseconds since epoch.',
        readOnly: true,
      }),
    developerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to stay the same over time.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Email address of the developer. This value is used to uniquely identify the developer in Apigee hybrid. Note that the email address has to be in lowercase only.',
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. First name of the developer.' }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the developer was last modified in milliseconds since epoch.',
        readOnly: true,
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Last name of the developer.' }),
    organizationName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the Apigee organization in which the developer resides.',
        readOnly: true,
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the developer. Valid values are `active` and `inactive`.',
        readOnly: true,
      }),
    userName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. User name of the developer. Not used by Apigee hybrid.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Developer')

const GoogleCloudApigeeV1DeveloperAppSchema = z
  .object({
    apiProducts: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of API products associated with the developer app.' }),
    appFamily: z.string().exactOptional().openapi({ description: 'Developer app family.' }),
    appId: z.string().exactOptional().openapi({ description: 'ID of the developer app.' }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'List of attributes for the developer app.' }),
    callbackUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to developer apps.',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time the developer app was created in milliseconds since epoch.',
        readOnly: true,
      }),
    credentials: z
      .array(GoogleCloudApigeeV1CredentialSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Set of credentials for the developer app consisting of the consumer key/secret pairs associated with the API products.',
        readOnly: true,
      }),
    developerId: z.string().exactOptional().openapi({ description: 'ID of the developer.' }),
    keyExpiresIn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Expiration time, in milliseconds, for the consumer key that is generated for the developer app. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.",
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the developer app was modified in milliseconds since epoch.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the developer app.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Scopes to apply to the developer app. The specified scopes must already exist for the API product that you associate with the developer app.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status of the credential. Valid values include `approved` or `revoked`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1DeveloperApp')

const GoogleCloudApigeeV1DeveloperAppKeySchema = z
  .object({
    apiProducts: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'List of API products for which the credential can be used. **Note**: Do not specify the list of API products when creating a consumer key and secret for a developer app. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created.',
      }),
    attributes: z
      .array(GoogleCloudApigeeV1AttributeSchema)
      .exactOptional()
      .openapi({ description: 'List of attributes associated with the credential.' }),
    consumerKey: z.string().exactOptional().openapi({ description: 'Consumer key.' }),
    consumerSecret: z.string().exactOptional().openapi({ description: 'Secret key.' }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the developer app expires in milliseconds since epoch.' }),
    expiresInSeconds: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Input only. Expiration time, in seconds, for the consumer key. If not set or left to the default value of `-1`, the API key never expires. The expiration time can't be updated after it is set.",
      }),
    issuedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time the developer app was created in milliseconds since epoch.' }),
    scopes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Scopes to apply to the app. The specified scope names must already be defined for the API product that you associate with the app.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Status of the credential. Valid values include `approved` or `revoked`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1DeveloperAppKey')

const GoogleCloudApigeeV1DeveloperBalanceWalletSchema = z
  .object({
    balance: GoogleTypeMoneySchema.exactOptional().openapi({
      description: 'Current remaining balance of the developer for a particular currency.',
    }),
    lastCreditTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time at which the developer last added credit to the account in milliseconds since epoch.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Wallet used to manage an account balance for a particular currency.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1DeveloperBalanceWallet')

const GoogleCloudApigeeV1DeveloperBalanceSchema = z
  .object({
    wallets: z
      .array(GoogleCloudApigeeV1DeveloperBalanceWalletSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. List of all wallets. Each individual wallet stores the account balance for a particular currency.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Account balance for the developer.', required: [] })
  .openapi('GoogleCloudApigeeV1DeveloperBalance')

const GoogleCloudApigeeV1DeveloperMonetizationConfigSchema = z
  .object({
    billingType: z
      .enum(['BILLING_TYPE_UNSPECIFIED', 'PREPAID', 'POSTPAID'])
      .exactOptional()
      .openapi({ description: 'Billing type.' }),
  })
  .openapi({ description: 'Monetization configuration for the developer.', required: [] })
  .openapi('GoogleCloudApigeeV1DeveloperMonetizationConfig')

const GoogleCloudApigeeV1DeveloperSubscriptionSchema = z
  .object({
    apiproduct: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the API product for which the developer is purchasing a subscription.',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when the API product subscription was created in milliseconds since epoch.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time when the API product subscription ends in milliseconds since epoch.',
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time when the API product subscription was last modified in milliseconds since epoch.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Name of the API product subscription.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time when the API product subscription starts in milliseconds since epoch.',
      }),
  })
  .openapi({ description: 'Structure of a DeveloperSubscription.', required: [] })
  .openapi('GoogleCloudApigeeV1DeveloperSubscription')

const GoogleCloudApigeeV1MetricSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Metric name.' }),
    values: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'List of metric values. Possible value formats include: `"values":["39.0"]` or `"values":[ { "value": "39.0", "timestamp": 1232434354} ]`',
      }),
  })
  .openapi({
    description:
      'Encapsulates the metric data point. For example: ```{ "name": "sum(message_count)", "values" : [ { "timestamp": 1549004400000, "value": "39.0" }, { "timestamp" : 1548997200000, "value" : "0.0" } ] }``` or ```{ "name": "sum(message_count)", "values" : ["39.0"] }```',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Metric')

const GoogleCloudApigeeV1DimensionMetricSchema = z
  .object({
    metrics: z
      .array(GoogleCloudApigeeV1MetricSchema)
      .exactOptional()
      .openapi({ description: 'List of metrics.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the dimension.' }),
  })
  .openapi({ description: 'Encapsulates a metric grouped by dimension.', required: [] })
  .openapi('GoogleCloudApigeeV1DimensionMetric')

const GoogleCloudApigeeV1EndpointAttachmentSchema = z
  .object({
    connectionState: z
      .enum([
        'CONNECTION_STATE_UNSPECIFIED',
        'UNAVAILABLE',
        'PENDING',
        'ACCEPTED',
        'REJECTED',
        'CLOSED',
        'FROZEN',
        'NEEDS_ATTENTION',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the endpoint attachment connection to the service attachment.',
        readOnly: true,
      }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Host that can be used in either the HTTP target endpoint directly or as the host in target server.',
        readOnly: true,
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Location of the endpoint attachment.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the endpoint attachment. Use the following structure in your request: `organizations/{org}/endpointAttachments/{endpoint_attachment}`',
      }),
    serviceAttachment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format: projects/*/regions/*/serviceAttachments/*' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the endpoint attachment. Values other than `ACTIVE` mean the resource is not ready to use.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Apigee endpoint attachment. For more information, see [Southbound networking patterns] (https://cloud.google.com/apigee/docs/api-platform/architecture/southbound-networking-patterns-endpoints).',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1EndpointAttachment')

const GoogleCloudApigeeV1EndpointChainingRuleSchema = z
  .object({
    deploymentGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The deployment group to target for cross-shard chaining calls to these proxies.',
      }),
    proxyIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of proxy ids which may be found in the given deployment group.',
      }),
  })
  .openapi({
    description:
      'EndpointChainingRule specifies the proxies contained in a particular deployment group, so that other deployment groups can find them in chaining calls.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1EndpointChainingRule')

const GoogleCloudApigeeV1NodeConfigSchema = z
  .object({
    currentAggregateNodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The current total number of gateway nodes that each environment currently has across all instances.',
        readOnly: true,
      }),
    maxNodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended maximum number of nodes for that gateway.',
      }),
    minNodeCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The minimum total number of gateway nodes that the is reserved for all instances that has the specified environment. If not specified, the default is determined by the recommended minimum number of nodes for that gateway.',
      }),
  })
  .openapi({
    description:
      'NodeConfig for setting the min/max number of nodes associated with the environment.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1NodeConfig')

const GoogleCloudApigeeV1EnvironmentSchema = z
  .object({
    apiProxyType: z
      .enum(['API_PROXY_TYPE_UNSPECIFIED', 'PROGRAMMABLE', 'CONFIGURABLE'])
      .exactOptional()
      .openapi({
        description:
          'Optional. API Proxy type supported by the environment. The type can be set when creating the Environment and cannot be changed.',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Creation time of this environment as milliseconds since epoch.',
        readOnly: true,
      }),
    deploymentType: z
      .enum(['DEPLOYMENT_TYPE_UNSPECIFIED', 'PROXY', 'ARCHIVE'])
      .exactOptional()
      .openapi({
        description:
          'Optional. Deployment type supported by the environment. The deployment type can be set when creating the environment and cannot be changed. When you enable archive deployment, you will be **prevented from performing** a [subset of actions](/apigee/docs/api-platform/local-development/overview#prevented-actions) within the environment, including: * Managing the deployment of API proxy or shared flow revisions * Creating, updating, or deleting resource files * Creating, updating, or deleting target servers',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the environment.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Display name for this environment.' }),
    forwardProxyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Url of the forward proxy to be applied to the runtime instances in this environment. Must be in the format of {scheme}://{hostname}:{port}. Note that scheme must be one of "http" or "https", and port must be supplied.',
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Last modification time of this environment as milliseconds since epoch.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Name of the environment. Values must match the regular expression `^[.\\\\p{Alnum}-_]{1,255}$`',
      }),
    nodeConfig: GoogleCloudApigeeV1NodeConfigSchema.exactOptional().openapi({
      description: 'Optional. NodeConfig of the environment.',
    }),
    properties: GoogleCloudApigeeV1PropertiesSchema.exactOptional().openapi({
      description: 'Optional. Key-value pairs that may be used for customizing the environment.',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Environment')

const GoogleCloudApigeeV1FlowHookConfigSchema = z
  .object({
    continueOnError: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to `true` (continue on error).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the flow hook in the following format: `organizations/{org}/environments/{env}/flowhooks/{point}`. Valid `point` values include: `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, and `PostTargetFlowHook`',
      }),
    sharedFlowName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the shared flow to invoke in the following format: `organizations/{org}/sharedflows/{sharedflow}`',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1FlowHookConfig')

const GoogleCloudApigeeV1KeystoreConfigSchema = z
  .object({
    aliases: z
      .array(GoogleCloudApigeeV1AliasRevisionConfigSchema)
      .exactOptional()
      .openapi({ description: 'Aliases in the keystore.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}`',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1KeystoreConfig')

const GoogleCloudApigeeV1ReferenceConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the reference in the following format: `organizations/{org}/environments/{env}/references/{reference}`',
      }),
    resourceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the referenced resource in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` Only references to keystore resources are supported.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ReferenceConfig')

const GoogleCloudApigeeV1ResourceConfigSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Location of the resource as a URI.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name in the following format: `organizations/{org}/environments/{env}/resourcefiles/{type}/{file}/revisions/{rev}` Only environment-scoped resource files are supported.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ResourceConfig')

const GoogleCloudApigeeV1KeyAliasReferenceSchema = z
  .object({
    aliasId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Alias ID. Must exist in the keystore referred to by the reference.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reference name in the following format: `organizations/{org}/environments/{env}/references/{reference}`',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1KeyAliasReference')

const GoogleCloudApigeeV1TlsInfoConfigSchema = z
  .object({
    ciphers: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of ciphers that are granted access.' }),
    clientAuthEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether client-side authentication is enabled for the target server. Enables two-way TLS.',
      }),
    commonName: GoogleCloudApigeeV1CommonNameConfigSchema.exactOptional().openapi({
      description: 'Common name to validate the target server against.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether one-way TLS is enabled. Set to `true` to enable one-way TLS.',
      }),
    ignoreValidationErrors: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that specifies whether to ignore TLS certificate validation errors. Set to `true` to ignore errors.',
      }),
    keyAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the alias used for client-side authentication in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`',
      }),
    keyAliasReference: GoogleCloudApigeeV1KeyAliasReferenceSchema.exactOptional().openapi({
      description: 'Reference name and alias pair to use for client-side authentication.',
    }),
    protocols: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of TLS protocols that are granted access.' }),
    trustStore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the keystore or keystore reference containing trusted certificates for the server in the following format: `organizations/{org}/environments/{env}/keystores/{keystore}` or `organizations/{org}/environments/{env}/references/{reference}`',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1TlsInfoConfig')

const GoogleCloudApigeeV1TargetServerConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the target server is enabled. An empty/omitted value for this field should be interpreted as true.',
      }),
    host: z.string().exactOptional().openapi({ description: 'Host name of the target server.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target server revision name in the following format: `organizations/{org}/environments/{env}/targetservers/{targetserver}/revisions/{rev}`',
      }),
    port: z.int32().exactOptional().openapi({ description: 'Port number for the target server.' }),
    protocol: z
      .enum(['PROTOCOL_UNSPECIFIED', 'HTTP', 'GRPC'])
      .exactOptional()
      .openapi({ description: 'The protocol used by this target server.' }),
    tlsInfo: GoogleCloudApigeeV1TlsInfoConfigSchema.exactOptional().openapi({
      description: 'TLS settings for the target server.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1TargetServerConfig')

const GoogleCloudApigeeV1RuntimeTraceSamplingConfigSchema = z
  .object({
    sampler: z
      .enum(['SAMPLER_UNSPECIFIED', 'OFF', 'PROBABILITY'])
      .exactOptional()
      .openapi({ description: 'Sampler of distributed tracing. OFF is the default value.' }),
    samplingRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.',
      }),
  })
  .openapi({
    description:
      'NEXT ID: 3 RuntimeTraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RuntimeTraceSamplingConfig')

const GoogleCloudApigeeV1RuntimeTraceConfigOverrideSchema = z
  .object({
    apiProxy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the API proxy that will have its trace configuration overridden following format: `organizations/{org}/apis/{api}`',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the trace config override in the following format: `organizations/{org}/environment/{env}/traceConfig/overrides/{override}`',
      }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp that the revision was created or updated.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision number which can be used by the runtime to detect if the trace config override has changed between two versions.',
      }),
    samplingConfig: GoogleCloudApigeeV1RuntimeTraceSamplingConfigSchema.exactOptional().openapi({
      description: 'Trace configuration override for a specific API proxy in an environment.',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name\'s "override" field.',
      }),
  })
  .openapi({
    description:
      'NEXT ID: 7 Trace configuration override for a specific API proxy in an environment.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RuntimeTraceConfigOverride')

const GoogleCloudApigeeV1RuntimeTraceConfigSchema = z
  .object({
    endpoint: z.string().exactOptional().openapi({ description: 'Endpoint of the exporter.' }),
    exporter: z
      .enum(['EXPORTER_UNSPECIFIED', 'JAEGER', 'CLOUD_TRACE'])
      .exactOptional()
      .openapi({
        description:
          'Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the trace config in the following format: `organizations/{org}/environment/{env}/traceConfig`',
      }),
    overrides: z
      .array(GoogleCloudApigeeV1RuntimeTraceConfigOverrideSchema)
      .exactOptional()
      .openapi({ description: 'List of trace configuration overrides for spicific API proxies.' }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp that the revision was created or updated.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision number which can be used by the runtime to detect if the trace config has changed between two versions.',
      }),
    samplingConfig: GoogleCloudApigeeV1RuntimeTraceSamplingConfigSchema.exactOptional().openapi({
      description: 'Trace configuration for all API proxies in an environment.',
    }),
  })
  .openapi({
    description:
      'NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RuntimeTraceConfig')

const GoogleCloudApigeeV1EnvironmentConfigSchema = z
  .object({
    arcConfigLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location for the config blob of API Runtime Control, aka Envoy Adapter, for op-based authentication as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time that the environment configuration was created.' }),
    dataCollectors: z
      .array(GoogleCloudApigeeV1DataCollectorConfigSchema)
      .exactOptional()
      .openapi({
        description: 'List of data collectors used by the deployments in the environment.',
      }),
    debugMask: GoogleCloudApigeeV1DebugMaskSchema.exactOptional().openapi({
      description: 'Debug mask that applies to all deployments in the environment.',
    }),
    deploymentGroups: z
      .array(GoogleCloudApigeeV1DeploymentGroupConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of deployment groups in the environment.' }),
    deployments: z
      .array(GoogleCloudApigeeV1DeploymentConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of deployments in the environment.' }),
    envScopedRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision ID for environment-scoped resources (e.g. target servers, keystores) in this config. This ID will increment any time a resource not scoped to a deployment group changes.',
      }),
    featureFlags: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Feature flags inherited from the organization and environment.' }),
    flowhooks: z
      .array(GoogleCloudApigeeV1FlowHookConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of flow hooks in the environment.' }),
    forwardProxyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The forward proxy's url to be used by the runtime. When set, runtime will send requests to the target via the given forward proxy. This is only used by programmable gateways.",
      }),
    gatewayConfigLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location for the gateway config blob as a URI, e.g. a Cloud Storage URI. This is only used by Envoy-based gateways.',
      }),
    keystores: z
      .array(GoogleCloudApigeeV1KeystoreConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of keystores in the environment.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the environment configuration in the following format: `organizations/{org}/environments/{env}/configs/{config}`',
      }),
    provider: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used by the Control plane to add context information to help detect the source of the document during diagnostics and debugging.',
      }),
    pubsubTopic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the PubSub topic for the environment.' }),
    resourceReferences: z
      .array(GoogleCloudApigeeV1ReferenceConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of resource references in the environment.' }),
    resources: z
      .array(GoogleCloudApigeeV1ResourceConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of resource versions in the environment.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision ID of the environment configuration. The higher the value, the more recently the configuration was deployed.',
      }),
    sequenceNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'DEPRECATED: Use revision_id.' }),
    targets: z
      .array(GoogleCloudApigeeV1TargetServerConfigSchema)
      .exactOptional()
      .openapi({
        description:
          'List of target servers in the environment. Disabled target servers are not displayed.',
      }),
    traceConfig: GoogleCloudApigeeV1RuntimeTraceConfigSchema.exactOptional().openapi({
      description:
        'Trace configurations. Contains config for the environment and config overrides for specific API proxies.',
    }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique ID for the environment configuration. The ID will only change if the environment is deleted and recreated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1EnvironmentConfig')

const GoogleCloudApigeeV1EnvironmentGroupSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the environment group was created as milliseconds since epoch.',
        readOnly: true,
      }),
    hostnames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. Host names for this environment group.' }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the environment group was last updated as milliseconds since epoch.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'ID of the environment group.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'EnvironmentGroup configuration. An environment group is used to group one or more Apigee environments under a single host name.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1EnvironmentGroup')

const GoogleCloudApigeeV1EnvironmentGroupAttachmentSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the environment group attachment was created as milliseconds since epoch.',
        readOnly: true,
      }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. ID of the attached environment.' }),
    environmentGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ID of the environment group.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the environment group attachment.' }),
  })
  .openapi({
    description:
      'EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an environment group.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1EnvironmentGroupAttachment')

const GoogleCloudApigeeV1RoutingRuleSchema = z
  .object({
    basepath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI path prefix used to route to the specified environment. May contain one or more wildcards. For example, path segments consisting of a single `*` character will match any string.',
      }),
    deploymentGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a deployment group in an environment bound to the environment group in the following format: `organizations/{org}/environment/{env}/deploymentGroups/{group}` Only one of environment or deployment_group will be set.',
      }),
    envGroupRevision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The env group config revision_id when this rule was added or last updated. This value is set when the rule is created and will only update if the the environment_id changes. It is used to determine if the runtime is up to date with respect to this rule. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.',
      }),
    environment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of an environment bound to the environment group in the following format: `organizations/{org}/environments/{env}`. Only one of environment or deployment_group will be set.',
      }),
    otherTargets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Conflicting targets, which will be resource names specifying either deployment groups or environments.',
      }),
    receiver: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the proxy revision that is receiving this basepath in the following format: `organizations/{org}/apis/{api}/revisions/{rev}`. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unix timestamp when this rule was updated. This is updated whenever env_group_revision is updated. This field is omitted from the IngressConfig unless the GetDeployedIngressConfig API is called with view=FULL.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1RoutingRule')

const GoogleCloudApigeeV1EnvironmentGroupConfigSchema = z
  .object({
    endpointChainingRules: z
      .array(GoogleCloudApigeeV1EndpointChainingRuleSchema)
      .exactOptional()
      .openapi({
        description: 'A list of proxies in each deployment group for proxy chaining calls.',
      }),
    hostnames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Host names for the environment group.' }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'When this message appears in the top-level IngressConfig, this field will be populated in lieu of the inlined routing_rules and hostnames fields. Some URL for downloading the full EnvironmentGroupConfig for this group.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the environment group in the following format: `organizations/{org}/envgroups/{envgroup}`.',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision id that defines the ordering of the EnvironmentGroupConfig resource. The higher the revision, the more recently the configuration was deployed.',
      }),
    routingRules: z
      .array(GoogleCloudApigeeV1RoutingRuleSchema)
      .exactOptional()
      .openapi({
        description:
          "Ordered list of routing rules defining how traffic to this environment group's hostnames should be routed to different environments.",
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique id for the environment group config that will only change if the environment group is deleted and recreated.',
      }),
  })
  .openapi({
    description:
      'EnvironmentGroupConfig is a revisioned snapshot of an EnvironmentGroup and its associated routing rules.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1EnvironmentGroupConfig')

const GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequestSchema = z
  .object({})
  .openapi({ description: 'Request for ExpireDeveloperSubscription.' })
  .openapi('GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequest')

const GoogleCloudApigeeV1ExportSchema = z
  .object({
    created: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time the export job was created.', readOnly: true }),
    datastoreName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the datastore that is the destination of the export job [datastore]',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the export job.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Error is set when export fails', readOnly: true }),
    executionTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Execution time for this export job. If the job is still in progress, it will be set to the amount of time that has elapsed since`created`, in seconds. Else, it will set to (`updated` - `created`), in seconds.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Display name of the export job.' }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Self link of the export job. A URI that can be used to retrieve the status of an export job. Example: `/organizations/myorg/environments/myenv/analytics/exports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`',
        readOnly: true,
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Status of the export job. Valid values include `enqueued`, `running`, `completed`, and `failed`.',
        readOnly: true,
      }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time the export job was last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Details of an export job.', required: [] })
  .openapi('GoogleCloudApigeeV1Export')

const GoogleCloudApigeeV1ExportRequestSchema = z
  .object({
    csvDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\\t`).',
      }),
    datastoreName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the preconfigured datastore.' }),
    dateRange: GoogleCloudApigeeV1DateRangeSchema.exactOptional().openapi({
      description: 'Required. Date range of the data to export.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the export job.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name of the export job.' }),
    outputFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Output format of the export. Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the `csvDelimiter` property.',
      }),
  })
  .openapi({ description: 'Request body for [CreateExportRequest]', required: [] })
  .openapi('GoogleCloudApigeeV1ExportRequest')

const GoogleCloudApigeeV1FlowHookSchema = z
  .object({
    continueOnError: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to `true` to continue execution. Set to `false` to stop execution if the flow hook throws an exception. Defaults to `true`.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the flow hook.' }),
    flowHookPoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Where in the API call flow the flow hook is invoked. Must be one of `PreProxyFlowHook`, `PostProxyFlowHook`, `PreTargetFlowHook`, or `PostTargetFlowHook`.',
        readOnly: true,
      }),
    sharedFlow: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shared flow attached to this flow hook, or empty if there is none attached.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1FlowHook')

const GoogleCloudApigeeV1GenerateDownloadUrlRequestSchema = z
  .object({})
  .openapi({ description: 'Request for GenerateDownloadUrl method.' })
  .openapi('GoogleCloudApigeeV1GenerateDownloadUrlRequest')

const GoogleCloudApigeeV1GenerateDownloadUrlResponseSchema = z
  .object({
    downloadUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Storage signed URL that can be used to download the Archive zip file.',
      }),
  })
  .openapi({ description: 'Response for GenerateDownloadUrl method.', required: [] })
  .openapi('GoogleCloudApigeeV1GenerateDownloadUrlResponse')

const GoogleCloudApigeeV1GenerateUploadUrlRequestSchema = z
  .object({})
  .openapi({ description: 'Request for GenerateUploadUrl method.' })
  .openapi('GoogleCloudApigeeV1GenerateUploadUrlRequest')

const GoogleCloudApigeeV1GenerateUploadUrlResponseSchema = z
  .object({
    uploadUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Google Cloud Storage signed URL that can be used to upload a new Archive zip file.',
      }),
  })
  .openapi({ description: 'Response for GenerateUploadUrl method.', required: [] })
  .openapi('GoogleCloudApigeeV1GenerateUploadUrlResponse')

const GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfoSchema = z
  .object({
    md5: z.string().exactOptional().openapi({ description: 'The MD5 Hash of the JSON data' }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size of the returned file in bytes' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The signed URL of the JSON data. Will be of the form `https://storage.googleapis.com/example-bucket/cat.jpeg?X-Goog-Algorithm= GOOG4-RSA-SHA256&X-Goog-Credential=example%40example-project.iam.gserviceaccount .com%2F20181026%2Fus-central1%2Fstorage%2Fgoog4_request&X-Goog-Date=20181026T18 1309Z&X-Goog-Expires=900&X-Goog-SignedHeaders=host&X-Goog-Signature=247a2aa45f16 9edf4d187d54e7cc46e4731b1e6273242c4f4c39a1d2507a0e58706e25e3a85a7dbb891d62afa849 6def8e260c1db863d9ace85ff0a184b894b117fe46d1225c82f2aa19efd52cf21d3e2022b3b868dc c1aca2741951ed5bf3bb25a34f5e9316a2841e8ff4c530b22ceaa1c5ce09c7cbb5732631510c2058 0e61723f5594de3aea497f195456a2ff2bdd0d13bad47289d8611b6f9cfeef0c46c91a455b94e90a 66924f722292d21e24d31dcfb38ce0c0f353ffa5a9756fc2a9f2b40bc2113206a81e324fc4fd6823 a29163fa845c8ae7eca1fcf6e5bb48b3200983c56c5ca81fffb151cca7402beddfc4a76b13344703 2ea7abedc098d2eb14a7`',
      }),
  })
  .openapi({
    description: 'A Signed URL and the relevant metadata associated with it.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfo')

const GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseSchema = z
  .object({
    urls: z
      .array(GoogleCloudApigeeV1GetAsyncQueryResultUrlResponseURLInfoSchema)
      .exactOptional()
      .openapi({
        description: 'The list of Signed URLs generated by the CreateAsyncQuery request',
      }),
  })
  .openapi({ description: 'The response for GetAsyncQueryResultUrl', required: [] })
  .openapi('GoogleCloudApigeeV1GetAsyncQueryResultUrlResponse')

const GoogleCloudApigeeV1GetSyncAuthorizationRequestSchema = z
  .object({})
  .openapi({ description: 'Request for GetSyncAuthorization.' })
  .openapi('GoogleCloudApigeeV1GetSyncAuthorizationRequest')

const GoogleCloudApigeeV1IngressConfigSchema = z
  .object({
    environmentGroups: z
      .array(GoogleCloudApigeeV1EnvironmentGroupConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of environment groups in the organization.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource in the following format: `organizations/{org}/deployedIngressConfig`.',
      }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Time at which the IngressConfig revision was created.' }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Revision id that defines the ordering on IngressConfig resources. The higher the revision, the more recently the configuration was deployed.',
      }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique id for the ingress config that will only change if the organization is deleted and recreated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1IngressConfig')

const GoogleCloudApigeeV1InstanceSchema = z
  .object({
    consumerAcceptList: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time the instance was created in milliseconds since epoch.',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Description of the instance.' }),
    diskEncryptionKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer Managed Encryption Key (CMEK) used for disk and volume encryption. Required for Apigee paid subscriptions only. Use the following format: `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Display name for the instance.' }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.',
        readOnly: true,
      }),
    ipRange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`',
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the instance was last modified in milliseconds since epoch.',
        readOnly: true,
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Compute Engine location where the instance resides.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource ID of the instance. Values must match the regular expression `^a-z{0,30}[a-z\\d]$`.',
      }),
    peeringCidrRange: z
      .enum([
        'CIDR_RANGE_UNSPECIFIED',
        'SLASH_16',
        'SLASH_17',
        'SLASH_18',
        'SLASH_19',
        'SLASH_20',
        'SLASH_22',
        'SLASH_23',
      ])
      .exactOptional()
      .openapi({
        description:
          'Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.',
      }),
    port: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Port number of the exposed Apigee endpoint.',
        readOnly: true,
      }),
    runtimeVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.',
        readOnly: true,
      }),
    serviceAttachment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the service attachment created for the instance in the format: `projects/*/regions/*/serviceAttachments/*` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.',
        readOnly: true,
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Apigee runtime instance.', required: [] })
  .openapi('GoogleCloudApigeeV1Instance')

const GoogleCloudApigeeV1InstanceAttachmentSchema = z
  .object({
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time the attachment was created in milliseconds since epoch.',
        readOnly: true,
      }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the attached environment.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. ID of the attachment.', readOnly: true }),
  })
  .openapi({
    description:
      'InstanceAttachment represents the installation of an environment onto an instance.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1InstanceAttachment')

const GoogleCloudApigeeV1KeyValueEntrySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource URI that can be used to identify the scope of the key value map entries.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Data or payload that is being retrieved and associated with the unique key.',
      }),
  })
  .openapi({
    description:
      'Key value map pair where the value represents the data associated with the corresponding key. **Note**: Supported for Apigee hybrid 1.8.x and higher.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1KeyValueEntry')

const GoogleCloudApigeeV1KeyValueMapSchema = z
  .object({
    encrypted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Flag that specifies whether entry values will be encrypted. This field is retained for backward compatibility and the value of encrypted will always be `true`. Apigee X and hybrid do not support unencrypted key value maps.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Required. ID of the key value map.' }),
  })
  .openapi({ description: 'Collection of key/value string pairs.', required: [] })
  .openapi('GoogleCloudApigeeV1KeyValueMap')

const GoogleCloudApigeeV1KeystoreSchema = z
  .object({
    aliases: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Output only. Aliases in this keystore.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource ID for this keystore. Values must match the regular expression `[\\w[:space:].-]{1,255}`.',
      }),
  })
  .openapi({ description: 'Datastore for Certificates and Aliases.', required: [] })
  .openapi('GoogleCloudApigeeV1Keystore')

const GoogleCloudApigeeV1ListApiCategoriesResponseSchema = z
  .object({
    data: z
      .array(GoogleCloudApigeeV1ApiCategoryDataSchema)
      .exactOptional()
      .openapi({ description: 'Details of categories.' }),
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find errors in the log files.' }),
    message: z.string().exactOptional().openapi({ description: 'Description of the operation.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that can be used to find request details in the log files.' }),
    status: z.string().exactOptional().openapi({ description: 'Status of the operation.' }),
  })
  .openapi({ description: 'the response for ListApiCategoriesRequest.', required: [] })
  .openapi('GoogleCloudApigeeV1ListApiCategoriesResponse')

const GoogleCloudApigeeV1ListApiProductsResponseSchema = z
  .object({
    apiProduct: z
      .array(GoogleCloudApigeeV1ApiProductSchema)
      .exactOptional()
      .openapi({ description: 'Lists all API product names defined for an organization.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListApiProductsResponse')

const GoogleCloudApigeeV1ListApiProxiesResponseSchema = z
  .object({ proxies: z.array(GoogleCloudApigeeV1ApiProxySchema).exactOptional() })
  .openapi({
    description:
      'To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ListApiProxiesResponse')

const GoogleCloudApigeeV1ListAppsResponseSchema = z
  .object({ app: z.array(GoogleCloudApigeeV1AppSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListAppsResponse')

const GoogleCloudApigeeV1ListArchiveDeploymentsResponseSchema = z
  .object({
    archiveDeployments: z
      .array(GoogleCloudApigeeV1ArchiveDeploymentSchema)
      .exactOptional()
      .openapi({ description: 'Archive Deployments in the specified environment.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListArchiveDeployments request to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListArchiveDeployments method.', required: [] })
  .openapi('GoogleCloudApigeeV1ListArchiveDeploymentsResponse')

const GoogleCloudApigeeV1ListAsyncQueriesResponseSchema = z
  .object({
    queries: z
      .array(GoogleCloudApigeeV1AsyncQuerySchema)
      .exactOptional()
      .openapi({ description: 'The asynchronous queries belong to requested resource name.' }),
  })
  .openapi({ description: 'The response for ListAsyncQueries.', required: [] })
  .openapi('GoogleCloudApigeeV1ListAsyncQueriesResponse')

const GoogleCloudApigeeV1ListCustomReportsResponseSchema = z
  .object({ qualifier: z.array(GoogleCloudApigeeV1CustomReportSchema).exactOptional() })
  .openapi({
    description: 'This message encapsulates a list of custom report definitions',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ListCustomReportsResponse')

const GoogleCloudApigeeV1ListDataCollectorsResponseSchema = z
  .object({
    dataCollectors: z
      .array(GoogleCloudApigeeV1DataCollectorSchema)
      .exactOptional()
      .openapi({ description: 'Data collectors in the specified organization.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListDataCollectors request to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListDataCollectors.', required: [] })
  .openapi('GoogleCloudApigeeV1ListDataCollectorsResponse')

const GoogleCloudApigeeV1ListDatastoresResponseSchema = z
  .object({
    datastores: z
      .array(GoogleCloudApigeeV1DatastoreSchema)
      .exactOptional()
      .openapi({ description: 'A list of datastores' }),
  })
  .openapi({ description: 'The response for ListDatastores', required: [] })
  .openapi('GoogleCloudApigeeV1ListDatastoresResponse')

const GoogleCloudApigeeV1SessionSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'The debug session ID.' }),
    timestampMs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The first transaction creation timestamp in millisecond, recorded by UAP.',
      }),
  })
  .openapi({
    description: 'Session carries the debug session id and its creation time.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Session')

const GoogleCloudApigeeV1ListDebugSessionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
    sessions: z
      .array(GoogleCloudApigeeV1SessionSchema)
      .exactOptional()
      .openapi({
        description:
          'Session info that includes debug session ID and the first transaction creation timestamp.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListDebugSessionsResponse')

const GoogleCloudApigeeV1ListDeploymentsResponseSchema = z
  .object({
    deployments: z
      .array(GoogleCloudApigeeV1DeploymentSchema)
      .exactOptional()
      .openapi({ description: 'List of deployments.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListDeploymentsResponse')

const GoogleCloudApigeeV1ListDeveloperAppsResponseSchema = z
  .object({
    app: z
      .array(GoogleCloudApigeeV1DeveloperAppSchema)
      .exactOptional()
      .openapi({ description: 'List of developer apps and their credentials.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListDeveloperAppsResponse')

const GoogleCloudApigeeV1ListDeveloperSubscriptionsResponseSchema = z
  .object({
    developerSubscriptions: z
      .array(GoogleCloudApigeeV1DeveloperSubscriptionSchema)
      .exactOptional()
      .openapi({ description: 'List of all subscriptions.' }),
    nextStartKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response for ListDeveloperSubscriptions.', required: [] })
  .openapi('GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse')

const GoogleCloudApigeeV1ListEndpointAttachmentsResponseSchema = z
  .object({
    endpointAttachments: z
      .array(GoogleCloudApigeeV1EndpointAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Endpoint attachments in the specified organization.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in an `ListEndpointAttachments` request to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListEndpointAttachments method.', required: [] })
  .openapi('GoogleCloudApigeeV1ListEndpointAttachmentsResponse')

const GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseSchema = z
  .object({
    environmentGroupAttachments: z
      .array(GoogleCloudApigeeV1EnvironmentGroupAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'EnvironmentGroupAttachments for the specified environment group.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListEnvironmentGroupAttachments.', required: [] })
  .openapi('GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse')

const GoogleCloudApigeeV1ListEnvironmentGroupsResponseSchema = z
  .object({
    environmentGroups: z
      .array(GoogleCloudApigeeV1EnvironmentGroupSchema)
      .exactOptional()
      .openapi({ description: 'EnvironmentGroups in the specified organization.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListEnvironmentGroups request to retrieve the next page. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListEnvironmentGroups.', required: [] })
  .openapi('GoogleCloudApigeeV1ListEnvironmentGroupsResponse')

const GoogleCloudApigeeV1ListEnvironmentResourcesResponseSchema = z
  .object({
    resourceFile: z
      .array(GoogleCloudApigeeV1ResourceFileSchema)
      .exactOptional()
      .openapi({ description: 'List of resources files.' }),
  })
  .openapi({ description: 'Response for ListEnvironmentResources', required: [] })
  .openapi('GoogleCloudApigeeV1ListEnvironmentResourcesResponse')

const GoogleCloudApigeeV1ListExportsResponseSchema = z
  .object({
    exports: z
      .array(GoogleCloudApigeeV1ExportSchema)
      .exactOptional()
      .openapi({ description: 'Details of the export jobs.' }),
  })
  .openapi({ description: 'The response for ListExports', required: [] })
  .openapi('GoogleCloudApigeeV1ListExportsResponse')

const GoogleCloudApigeeV1ServiceIssuersMappingSchema = z
  .object({
    emailIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of trusted issuer email ids.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({ description: 'String indicating the Apigee service name.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ServiceIssuersMapping')

const GoogleCloudApigeeV1ListHybridIssuersResponseSchema = z
  .object({
    issuers: z
      .array(GoogleCloudApigeeV1ServiceIssuersMappingSchema)
      .exactOptional()
      .openapi({ description: 'Lists of hybrid services and its trusted issuer email ids.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListHybridIssuersResponse')

const GoogleCloudApigeeV1ListInstanceAttachmentsResponseSchema = z
  .object({
    attachments: z
      .array(GoogleCloudApigeeV1InstanceAttachmentSchema)
      .exactOptional()
      .openapi({ description: 'Attachments for the instance.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListInstanceAttachments.', required: [] })
  .openapi('GoogleCloudApigeeV1ListInstanceAttachmentsResponse')

const GoogleCloudApigeeV1ListInstancesResponseSchema = z
  .object({
    instances: z
      .array(GoogleCloudApigeeV1InstanceSchema)
      .exactOptional()
      .openapi({ description: 'Instances in the specified organization.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListInstance request to retrieve the next page of content. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListInstances.', required: [] })
  .openapi('GoogleCloudApigeeV1ListInstancesResponse')

const GoogleCloudApigeeV1ListKeyValueEntriesResponseSchema = z
  .object({
    keyValueEntries: z
      .array(GoogleCloudApigeeV1KeyValueEntrySchema)
      .exactOptional()
      .openapi({ description: 'One or more key value map keys and values.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token that can be sent as `next_page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({
    description:
      'The request structure for listing key value map keys and its corresponding values.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ListKeyValueEntriesResponse')

const GoogleCloudApigeeV1NatAddressSchema = z
  .object({
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The static IPV4 address.', readOnly: true }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Resource ID of the NAT address.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'RESERVED', 'ACTIVE', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the nat address.', readOnly: true }),
  })
  .openapi({
    description:
      'Apigee NAT(network address translation) address. A NAT address is a static external IP address used for Internet egress traffic.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1NatAddress')

const GoogleCloudApigeeV1ListNatAddressesResponseSchema = z
  .object({
    natAddresses: z
      .array(GoogleCloudApigeeV1NatAddressSchema)
      .exactOptional()
      .openapi({ description: 'List of NAT Addresses for the instance.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Page token that you can include in a ListNatAddresses request to retrieve the next page of content. If omitted, no subsequent pages exist.',
      }),
  })
  .openapi({ description: 'Response for ListNatAddresses.', required: [] })
  .openapi('GoogleCloudApigeeV1ListNatAddressesResponse')

const GoogleCloudApigeeV1ListOfDevelopersResponseSchema = z
  .object({
    developer: z
      .array(GoogleCloudApigeeV1DeveloperSchema)
      .exactOptional()
      .openapi({ description: 'List of developers.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListOfDevelopersResponse')

const GoogleCloudApigeeV1OrganizationProjectMappingSchema = z
  .object({
    location: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The Google Cloud region where control plane data is located. For more information, see https://cloud.google.com/about/locations/.',
        readOnly: true,
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the Apigee organization.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Google Cloud project associated with the Apigee organization' }),
    projectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED: Use `project_id`. An Apigee Organization is mapped to a single project.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1OrganizationProjectMapping')

const GoogleCloudApigeeV1ListOrganizationsResponseSchema = z
  .object({
    organizations: z
      .array(GoogleCloudApigeeV1OrganizationProjectMappingSchema)
      .exactOptional()
      .openapi({
        description: 'List of Apigee organizations and associated Google Cloud projects.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1ListOrganizationsResponse')

const GoogleCloudApigeeV1RateRangeSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Ending value of the range. Set to 0 or `null` for the last range of values.',
      }),
    fee: GoogleTypeMoneySchema.exactOptional().openapi({
      description: 'Fee to charge when total number of API calls falls within this range.',
    }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Starting value of the range. Set to 0 or `null` for the initial range of values.',
      }),
  })
  .openapi({
    description:
      'API call volume range and the fees charged when the total number of API calls is within the range.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RateRange')

const GoogleCloudApigeeV1RevenueShareRangeSchema = z
  .object({
    end: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Ending value of the range. Set to 0 or `null` for the last range of values.',
      }),
    sharePercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Percentage of the revenue to be shared with the developer. For example, to share 21 percent of the total revenue with the developer, set this value to 21. Specify a decimal number with a maximum of two digits following the decimal point.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Starting value of the range. Set to 0 or `null` for the initial range of values.',
      }),
  })
  .openapi({
    description:
      'API call volume range and the percentage of revenue to share with the developer when the total number of API calls is within the range.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RevenueShareRange')

const GoogleCloudApigeeV1RatePlanSchema = z
  .object({
    apiproduct: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the API product that the rate plan is associated with.' }),
    billingPeriod: z
      .enum(['BILLING_PERIOD_UNSPECIFIED', 'WEEKLY', 'MONTHLY'])
      .exactOptional()
      .openapi({ description: 'Frequency at which the customer will be billed.' }),
    consumptionPricingRates: z
      .array(GoogleCloudApigeeV1RateRangeSchema)
      .exactOptional()
      .openapi({
        description:
          'API call volume ranges and the fees charged when the total number of API calls is within a given range. The method used to calculate the final fee depends on the selected pricing model. For example, if the pricing model is `STAIRSTEP` and the ranges are defined as follows: ``` { "start": 1, "end": 100, "fee": 75 }, { "start": 101, "end": 200, "fee": 100 }, } ``` Then the following fees would be charged based on the total number of API calls (assuming the currency selected is `USD`): * 1 call costs $75 * 50 calls cost $75 * 150 calls cost $100 The number of API calls cannot exceed 200.',
      }),
    consumptionPricingType: z
      .enum([
        'CONSUMPTION_PRICING_TYPE_UNSPECIFIED',
        'FIXED_PER_UNIT',
        'BANDED',
        'TIERED',
        'STAIRSTEP',
      ])
      .exactOptional()
      .openapi({ description: 'Pricing model used for consumption-based charges.' }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time that the rate plan was created in milliseconds since epoch.',
        readOnly: true,
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency to be used for billing. Consists of a three-letter code as defined by the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) standard.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the rate plan.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the rate plan.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time when the rate plan will expire in milliseconds since epoch. Set to 0 or `null` to indicate that the rate plan should never expire.',
      }),
    fixedFeeFrequency: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Frequency at which the fixed fee is charged.' }),
    fixedRecurringFee: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'Fixed amount that is charged at a defined interval and billed in advance of use of the API product. The fee will be prorated for the first billing period.',
    }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time the rate plan was last modified in milliseconds since epoch.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the rate plan.', readOnly: true }),
    paymentFundingModel: z
      .enum(['PAYMENT_FUNDING_MODEL_UNSPECIFIED', 'PREPAID', 'POSTPAID'])
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED: This field is no longer supported and will eventually be removed when Apigee Hybrid 1.5/1.6 is no longer supported. Instead, use the `billingType` field inside `DeveloperMonetizationConfig` resource. Flag that specifies the billing account type, prepaid or postpaid.',
      }),
    revenueShareRates: z
      .array(GoogleCloudApigeeV1RevenueShareRangeSchema)
      .exactOptional()
      .openapi({ description: 'Details of the revenue sharing model.' }),
    revenueShareType: z
      .enum(['REVENUE_SHARE_TYPE_UNSPECIFIED', 'FIXED', 'VOLUME_BANDED'])
      .exactOptional()
      .openapi({
        description: 'Method used to calculate the revenue that is shared with developers.',
      }),
    setupFee: GoogleTypeMoneySchema.exactOptional().openapi({
      description: 'Initial, one-time fee paid when purchasing the API product.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time when the rate plan becomes active in milliseconds since epoch.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'DRAFT', 'PUBLISHED'])
      .exactOptional()
      .openapi({ description: 'Current state of the rate plan (draft or published).' }),
  })
  .openapi({ description: 'Rate plan details.', required: [] })
  .openapi('GoogleCloudApigeeV1RatePlan')

const GoogleCloudApigeeV1ListRatePlansResponseSchema = z
  .object({
    nextStartKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value that can be sent as `startKey` to retrieve the next page of content. If this field is omitted, there are no subsequent pages.',
      }),
    ratePlans: z
      .array(GoogleCloudApigeeV1RatePlanSchema)
      .exactOptional()
      .openapi({ description: 'List of rate plans in an organization.' }),
  })
  .openapi({ description: 'Response for ListRatePlans.', required: [] })
  .openapi('GoogleCloudApigeeV1ListRatePlansResponse')

const GoogleCloudApigeeV1SecurityIncidentSchema = z
  .object({
    detectionTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the security incident.' }),
    firstDetectedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when events associated with the incident were first detected.',
        readOnly: true,
      }),
    lastDetectedTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when events associated with the incident were last detected.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111',
      }),
    riskLevel: z
      .enum(['RISK_LEVEL_UNSPECIFIED', 'LOW', 'MODERATE', 'SEVERE'])
      .exactOptional()
      .openapi({ description: 'Output only. Risk level of the incident.', readOnly: true }),
    trafficCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Total traffic detected as part of the incident.' }),
  })
  .openapi({ description: 'Represents an SecurityIncident resource.', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityIncident')

const GoogleCloudApigeeV1ListSecurityIncidentsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    securityIncidents: z
      .array(GoogleCloudApigeeV1SecurityIncidentSchema)
      .exactOptional()
      .openapi({ description: 'List of security incidents in the organization' }),
  })
  .openapi({ description: 'Response for ListSecurityIncidents.', required: [] })
  .openapi('GoogleCloudApigeeV1ListSecurityIncidentsResponse')

const GoogleCloudApigeeV1SecurityProfileEnvironmentSchema = z
  .object({
    attachTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time at which environment was attached to the security profile.',
        readOnly: true,
      }),
    environment: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the environment.', readOnly: true }),
  })
  .openapi({
    description:
      'Environment information of attached environments. Scoring an environment is enabled only if it is attached to a security profile.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1SecurityProfileEnvironment')

const GoogleCloudApigeeV1SecurityProfileScoringConfigSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the config.' }),
    scorePath: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path of the component config used for scoring.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the config.' }),
  })
  .openapi({ description: 'Security configurations to manage scoring.', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityProfileScoringConfig')

const GoogleCloudApigeeV1SecurityProfileSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display name of the security profile.' }),
    environments: z
      .array(GoogleCloudApigeeV1SecurityProfileEnvironmentSchema)
      .exactOptional()
      .openapi({ description: 'List of environments attached to security profile.' }),
    maxScore: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Maximum security score that can be generated by this profile.',
        readOnly: true,
      }),
    minScore: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. Minimum security score that can be generated by this profile.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the security profile resource. Format: organizations/{org}/securityProfiles/{profile}',
      }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when revision was created.', readOnly: true }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Revision ID of the security profile.',
        readOnly: true,
      }),
    revisionPublishTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when revision was published. Once published, the security profile revision cannot be updated further and can be attached to environments.',
        readOnly: true,
      }),
    revisionUpdateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when revision was updated.', readOnly: true }),
    scoringConfigs: z
      .array(GoogleCloudApigeeV1SecurityProfileScoringConfigSchema)
      .exactOptional()
      .openapi({ description: 'List of profile scoring configs in this revision.' }),
  })
  .openapi({ description: 'Represents a SecurityProfile resource.', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityProfile')

const GoogleCloudApigeeV1ListSecurityProfileRevisionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    securityProfiles: z
      .array(GoogleCloudApigeeV1SecurityProfileSchema)
      .exactOptional()
      .openapi({
        description:
          'List of security profile revisions. The revisions may be attached or unattached to any environment.',
      }),
  })
  .openapi({ description: 'Response for ListSecurityProfileRevisions.', required: [] })
  .openapi('GoogleCloudApigeeV1ListSecurityProfileRevisionsResponse')

const GoogleCloudApigeeV1ListSecurityProfilesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    securityProfiles: z
      .array(GoogleCloudApigeeV1SecurityProfileSchema)
      .exactOptional()
      .openapi({
        description:
          'List of security profiles in the organization. The profiles may be attached or unattached to any environment. This will return latest revision of each profile.',
      }),
  })
  .openapi({ description: 'Response for ListSecurityProfiles.', required: [] })
  .openapi('GoogleCloudApigeeV1ListSecurityProfilesResponse')

const GoogleCloudApigeeV1SecurityReportMetadataSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Dimensions of the SecurityReport.' }),
    endTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'End timestamp of the query range.' }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Metrics of the SecurityReport. Example: ["name:bot_count,func:sum,alias:sum_bot_count"]',
      }),
    mimeType: z.string().exactOptional().openapi({ description: 'MIME type / Output format.' }),
    startTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start timestamp of the query range.' }),
    timeUnit: z
      .string()
      .exactOptional()
      .openapi({ description: 'Query GroupBy time unit. Example: "seconds", "minute", "hour"' }),
  })
  .openapi({ description: 'Metadata for the security report.', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityReportMetadata')

const GoogleCloudApigeeV1SecurityReportResultMetadataSchema = z
  .object({
    expires: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Expire_time is set to 7 days after report creation. Query result will be unaccessable after this time. Example: "2021-05-04T13:38:52-07:00"',
        readOnly: true,
      }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Self link of the query results. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd/result`',
      }),
  })
  .openapi({
    description: 'Contains informations about the security report results.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1SecurityReportResultMetadata')

const GoogleCloudApigeeV1SecurityReportSchema = z
  .object({
    created: z.string().exactOptional().openapi({ description: 'Creation time of the query.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Name specified by the user.' }),
    envgroupHostname: z
      .string()
      .exactOptional()
      .openapi({ description: 'Hostname is available only when query is executed at host level.' }),
    error: z.string().exactOptional().openapi({ description: 'Error is set when query fails.' }),
    executionTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'ExecutionTime is available only after the query is completed.' }),
    queryParams: GoogleCloudApigeeV1SecurityReportMetadataSchema.exactOptional().openapi({
      description: 'Contains information like metrics, dimenstions etc of the Security Report.',
    }),
    reportDefinitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report Definition ID.' }),
    result: GoogleCloudApigeeV1SecurityReportResultMetadataSchema.exactOptional().openapi({
      description: 'Result is available only after the query is completed.',
    }),
    resultFileSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'ResultFileSize is available only after the query is completed.' }),
    resultRows: z
      .string()
      .exactOptional()
      .openapi({ description: 'ResultRows is available only after the query is completed.' }),
    self: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Self link of the query. Example: `/organizations/myorg/environments/myenv/securityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd` or following format if query is running at host level: `/organizations/myorg/hostSecurityReports/9cfc0d85-0f30-46d6-ae6f-318d0cb961bd`',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Query state could be "enqueued", "running", "completed", "expired" and "failed".',
      }),
    updated: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Last updated timestamp for the query.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'SecurityReport saves all the information about the created security report.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1SecurityReport')

const GoogleCloudApigeeV1ListSecurityReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the number of security reports exceeded the page size requested, the token can be used to fetch the next page in a subsequent call. If the response is the last page and there are no more reports to return this field is left empty.',
      }),
    securityReports: z
      .array(GoogleCloudApigeeV1SecurityReportSchema)
      .exactOptional()
      .openapi({ description: 'The security reports belong to requested resource name.' }),
  })
  .openapi({ description: 'The response for SecurityReports.', required: [] })
  .openapi('GoogleCloudApigeeV1ListSecurityReportsResponse')

const GoogleCloudApigeeV1SharedFlowSchema = z
  .object({
    latestRevisionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id of the most recently created revision for this shared flow.',
      }),
    metaData: GoogleCloudApigeeV1EntityMetadataSchema.exactOptional().openapi({
      description: 'Metadata describing the shared flow.',
    }),
    name: z.string().exactOptional().openapi({ description: 'The ID of the shared flow.' }),
    revision: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of revisions of this shared flow.' }),
  })
  .openapi({ description: 'The metadata describing a shared flow', required: [] })
  .openapi('GoogleCloudApigeeV1SharedFlow')

const GoogleCloudApigeeV1ListSharedFlowsResponseSchema = z
  .object({ sharedFlows: z.array(GoogleCloudApigeeV1SharedFlowSchema).exactOptional() })
  .openapi({
    description:
      'To change this message, in the same CL add a change log in go/changing-api-proto-breaks-ui',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1ListSharedFlowsResponse')

const GoogleCloudApigeeV1TraceSamplingConfigSchema = z
  .object({
    sampler: z
      .enum(['SAMPLER_UNSPECIFIED', 'OFF', 'PROBABILITY'])
      .exactOptional()
      .openapi({ description: 'Sampler of distributed tracing. OFF is the default value.' }),
    samplingRate: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are > 0 and <= 0.5.',
      }),
  })
  .openapi({
    description:
      'TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1TraceSamplingConfig')

const GoogleCloudApigeeV1TraceConfigOverrideSchema = z
  .object({
    apiProxy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the API proxy that will have its trace configuration overridden.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'ID of the trace configuration override specified as a system-generated UUID.',
      }),
    samplingConfig: GoogleCloudApigeeV1TraceSamplingConfigSchema.exactOptional().openapi({
      description: 'Trace configuration to override.',
    }),
  })
  .openapi({ description: 'A representation of a configuration override.', required: [] })
  .openapi('GoogleCloudApigeeV1TraceConfigOverride')

const GoogleCloudApigeeV1ListTraceConfigOverridesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token value that can be passed as `page_token` to retrieve the next page of content.',
      }),
    traceConfigOverrides: z
      .array(GoogleCloudApigeeV1TraceConfigOverrideSchema)
      .exactOptional()
      .openapi({ description: 'List all trace configuration overrides in an environment.' }),
  })
  .openapi({ description: 'Response for ListTraceConfigOverrides.', required: [] })
  .openapi('GoogleCloudApigeeV1ListTraceConfigOverridesResponse')

const GoogleCloudApigeeV1MetadataSchema = z
  .object({
    errors: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of error messages as strings.' }),
    notices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of additional information such as data source, if result was truncated. For example: ``` "notices": [ "Source:Postgres", "PG Host:uappg0rw.e2e.apigeeks.net", "query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed", "Table used: edge.api.uapgroup2.agg_api" ]```',
      }),
  })
  .openapi({
    description: 'Encapsulates additional information about query execution.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Metadata')

const GoogleCloudApigeeV1MetricAggregationSchema = z
  .object({
    aggregation: z
      .enum(['AGGREGATION_FUNCTION_UNSPECIFIED', 'AVG', 'SUM', 'MIN', 'MAX', 'COUNT_DISTINCT'])
      .exactOptional()
      .openapi({ description: 'Aggregation function associated with the metric.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the metric' }),
    order: z
      .enum(['ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({
        description:
          'Ordering for this aggregation in the result. For time series this is ignored since the ordering of points depends only on the timestamp, not the values.',
      }),
  })
  .openapi({
    description: 'The optionally aggregated metric to query with its ordering.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1MetricAggregation')

const GoogleCloudApigeeV1OperationMetadataProgressSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: "Description of the operation's progress." }),
    details: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({ description: 'The additional details of the progress.' }),
    percentDone: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The percentage of the operation progress.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NOT_STARTED', 'IN_PROGRESS', 'FINISHED'])
      .exactOptional()
      .openapi({ description: 'State of the operation.' }),
  })
  .openapi({ description: 'Information about operation progress.', required: [] })
  .openapi('GoogleCloudApigeeV1OperationMetadataProgress')

const GoogleCloudApigeeV1OperationMetadataSchema = z
  .object({
    operationType: z
      .enum(['OPERATION_TYPE_UNSPECIFIED', 'INSERT', 'DELETE', 'UPDATE'])
      .exactOptional(),
    progress: GoogleCloudApigeeV1OperationMetadataProgressSchema.exactOptional().openapi({
      description: 'Progress of the operation.',
    }),
    state: z.enum(['STATE_UNSPECIFIED', 'NOT_STARTED', 'IN_PROGRESS', 'FINISHED']).exactOptional(),
    targetResourceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the resource for which the operation is operating on.' }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Warnings encountered while executing the operation.' }),
  })
  .openapi({ description: 'Metadata describing an Operation.', required: [] })
  .openapi('GoogleCloudApigeeV1OperationMetadata')

const GoogleCloudApigeeV1OptimizedStatsNodeSchema = z
  .object({ data: z.array(z.any()).exactOptional() })
  .openapi({
    description:
      'Encapsulates a data node as represented below: ``` { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] } ] }``` or ``` { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }``` Depending on whether a dimension is present in the query or not the data node type can be a simple metric value or dimension identifier with list of metrics.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1OptimizedStatsNode')

const GoogleCloudApigeeV1OptimizedStatsResponseSchema = z
  .object({
    TimeUnit: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of time unit values. Time unit refers to an epoch timestamp value.',
      }),
    metaData: GoogleCloudApigeeV1MetadataSchema.exactOptional().openapi({
      description: 'Metadata information about the query executed.',
    }),
    resultTruncated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean flag that indicates whether the results were truncated based on the limit parameter.',
      }),
    stats: GoogleCloudApigeeV1OptimizedStatsNodeSchema.exactOptional().openapi({
      description: '`stats` results.',
    }),
  })
  .openapi({
    description: 'Encapsulates a response format for JavaScript Optimized Scenario.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1OptimizedStatsResponse')

const GoogleCloudApigeeV1OptimizedStatsSchema = z
  .object({
    Response: GoogleCloudApigeeV1OptimizedStatsResponseSchema.exactOptional().openapi({
      description:
        'Wraps the `stats` response for JavaScript Optimized Scenario with a response key. For example: ```{ "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres", "Table used: edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data": [ { "identifier": { "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)", "values": [ 36.0 ] }, { "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }```',
    }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1OptimizedStats')

const GoogleCloudApigeeV1OrganizationSchema = z
  .object({
    addonsConfig: GoogleCloudApigeeV1AddonsConfigSchema.exactOptional().openapi({
      description: 'Addon configurations of the Apigee organization.',
    }),
    analyticsRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. DEPRECATED: This field will be deprecated once Apigee supports DRZ. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).',
      }),
    apiConsumerDataEncryptionKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud KMS key name used for encrypting API consumer data. Required for US/EU regions when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION` or the region is not US/EU, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`',
      }),
    apiConsumerDataLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This field is needed only for customers with control plane in US or EU. Apigee stores some control plane data only in single region. This field determines which single region Apigee should use. For example: "us-west1" when control plane is in US or "europe-west2" when control plane is in EU.',
      }),
    apigeeProjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Apigee Project ID associated with the organization. Use this project to allowlist Apigee in the Service Attachment when using private service connect with Apigee.',
        readOnly: true,
      }),
    attributes: z.array(z.string()).exactOptional().openapi({ description: 'Not used by Apigee.' }),
    authorizedNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.',
      }),
    billingType: z
      .enum(['BILLING_TYPE_UNSPECIFIED', 'SUBSCRIPTION', 'EVALUATION', 'PAYG'])
      .exactOptional()
      .openapi({
        description:
          'Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).',
      }),
    caCertificate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.',
        readOnly: true,
      }),
    controlPlaneEncryptionKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud KMS key name used for encrypting control plane data that is stored in a multi region. Required when [BillingType](#BillingType) is `SUBSCRIPTION`. When [BillingType](#BillingType) is `EVALUATION`, a Google-Managed encryption key will be used. Format: `projects/*/locations/*/keyRings/*/cryptoKeys/*`',
      }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time that the Apigee organization was created in milliseconds since epoch.',
        readOnly: true,
      }),
    customerName: z.string().exactOptional().openapi({ description: 'Not used by Apigee.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the Apigee organization.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Display name for the Apigee organization. Unused, but reserved for future use.',
      }),
    environments: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. List of environments in the Apigee organization.',
        readOnly: true,
      }),
    expiresAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Time that the Apigee organization is scheduled for deletion.',
        readOnly: true,
      }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Time that the Apigee organization was last modified in milliseconds since epoch.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Name of the Apigee organization.', readOnly: true }),
    portalDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Configuration for the Portals settings.' }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Project ID associated with the Apigee organization.',
        readOnly: true,
      }),
    properties: GoogleCloudApigeeV1PropertiesSchema.exactOptional().openapi({
      description: 'Properties defined in the Apigee organization profile.',
    }),
    runtimeDatabaseEncryptionKeyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. Required when [RuntimeType](#RuntimeType) is `CLOUD`. If not specified when [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.',
      }),
    runtimeType: z
      .enum(['RUNTIME_TYPE_UNSPECIFIED', 'CLOUD', 'HYBRID'])
      .exactOptional()
      .openapi({
        description:
          'Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'CREATING', 'ACTIVE', 'DELETING', 'UPDATING'])
      .exactOptional()
      .openapi({
        description:
          'Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.',
        readOnly: true,
      }),
    subscriptionType: z
      .enum(['SUBSCRIPTION_TYPE_UNSPECIFIED', 'PAID', 'TRIAL'])
      .exactOptional()
      .openapi({
        description:
          'Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/).',
        readOnly: true,
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'TYPE_TRIAL', 'TYPE_PAID', 'TYPE_INTERNAL'])
      .exactOptional()
      .openapi({ description: 'Not used by Apigee.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Organization')

const GoogleCloudApigeeV1ProvisionOrganizationRequestSchema = z
  .object({
    analyticsRegion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Primary Cloud Platform region for analytics data storage. For valid values, see [Create an organization](https://cloud.google.com/apigee/docs/hybrid/latest/precog-provision). Defaults to `us-west1`.',
      }),
    authorizedNetwork: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork`',
      }),
    runtimeLocation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Platform location for the runtime instance. Defaults to zone `us-west1-a`. If a region is provided, `EVAL` organizations will use the region for automatically selecting a zone for the runtime instance.',
      }),
  })
  .openapi({ description: 'Request for ProvisionOrganization.', required: [] })
  .openapi('GoogleCloudApigeeV1ProvisionOrganizationRequest')

const GoogleCloudApigeeV1QueryMetricSchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alias for the metric. Alias will be used to replace metric name in query results.',
      }),
    function: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregation function: avg, min, max, or sum.' }),
    name: z.string().exactOptional().openapi({ description: 'Required. Metric name.' }),
    operator: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of `+`, `-`, `/`, `%`, `*`.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Operand value should be provided when operator is set.' }),
  })
  .openapi({
    description:
      'More info about Metric: https://docs.apigee.com/api-platform/analytics/analytics-reference#metrics',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1QueryMetric')

const GoogleCloudApigeeV1QuerySchema = z
  .object({
    csvDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\\t`).',
      }),
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions',
      }),
    envgroupHostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostAsyncQuery where analytics data will be grouped by organization and hostname.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax',
      }),
    groupByTimeUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of rows that can be returned in the result.' }),
    metrics: z
      .array(GoogleCloudApigeeV1QueryMetricSchema)
      .exactOptional()
      .openapi({ description: 'A list of Metrics.' }),
    name: z.string().exactOptional().openapi({ description: 'Asynchronous Query Name.' }),
    outputFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.',
      }),
    reportDefinitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Asynchronous Report ID.' }),
    timeRange: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1Query')

const GoogleCloudApigeeV1QueryTabularStatsRequestSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Required. List of dimension names to group the aggregations by.' }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters",
      }),
    metrics: z
      .array(GoogleCloudApigeeV1MetricAggregationSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of metrics and their aggregations.' }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Page size represents the number of rows.' }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies a sequence of rows.' }),
    timeRange: GoogleTypeIntervalSchema.exactOptional().openapi({
      description: 'Time range for the stats.',
    }),
  })
  .openapi({
    description:
      'Request payload representing the query to be run for fetching security statistics as rows.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1QueryTabularStatsRequest')

const GoogleCloudApigeeV1QueryTabularStatsResponseSchema = z
  .object({
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Column names corresponding to the same order as the inner values in the stats field.',
      }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    values: z
      .array(z.array(z.any()))
      .exactOptional()
      .openapi({ description: 'Resultant rows from the executed query.' }),
  })
  .openapi({
    description:
      'Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1QueryTabularStatsResponse')

const GoogleCloudApigeeV1QueryTimeSeriesStatsRequestSchema = z
  .object({
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line representing the requested metric aggregations grouped by environment is returned.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions. Example, apiproxy eq 'foobar'. https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters",
      }),
    metrics: z
      .array(GoogleCloudApigeeV1MetricAggregationSchema)
      .exactOptional()
      .openapi({ description: 'Required. List of metrics and their aggregations.' }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Page size represents the number of time series sequences, one per unique set of dimensions and their values.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Page token stands for a specific collection of time series sequences.',
      }),
    timeRange: GoogleTypeIntervalSchema.exactOptional().openapi({
      description: 'Required. Time range for the stats.',
    }),
    timestampOrder: z
      .enum(['ORDER_UNSPECIFIED', 'ASCENDING', 'DESCENDING'])
      .exactOptional()
      .openapi({
        description:
          'Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps (latest first).',
      }),
    windowSize: z
      .enum(['WINDOW_SIZE_UNSPECIFIED', 'MINUTE', 'HOUR', 'DAY', 'MONTH'])
      .exactOptional()
      .openapi({ description: 'Time buckets to group the stats by.' }),
  })
  .openapi({
    description:
      'QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1QueryTimeSeriesStatsRequest')

const GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceSchema = z
  .object({
    dimensions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map of dimensions and their values that uniquely identifies a time series sequence.',
      }),
    points: z
      .array(z.array(z.any()))
      .exactOptional()
      .openapi({ description: 'List of points. First value of each inner list is a timestamp.' }),
  })
  .openapi({ description: 'A sequence of time series.', required: [] })
  .openapi('GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequence')

const GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSchema = z
  .object({
    columns: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Column names corresponding to the same order as the inner values in the stats field.',
      }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'Next page token.' }),
    values: z
      .array(GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSequenceSchema)
      .exactOptional()
      .openapi({ description: 'Results of the query returned as a JSON array.' }),
  })
  .openapi({
    description: 'Represents security stats result as a collection of time series sequences.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1QueryTimeSeriesStatsResponse')

const GoogleCloudApigeeV1ReferenceSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A human-readable description of this reference.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource id of this reference. Values must match the regular expression [\\w\\s\\-.]+.',
      }),
    refers: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resource_type.',
      }),
    resourceType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.",
      }),
  })
  .openapi({
    description:
      'A Reference configuration. References must refer to a keystore that also exists in the parent environment.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1Reference')

const GoogleCloudApigeeV1UpdateErrorSchema = z
  .object({
    code: z
      .enum([
        'OK',
        'CANCELLED',
        'UNKNOWN',
        'INVALID_ARGUMENT',
        'DEADLINE_EXCEEDED',
        'NOT_FOUND',
        'ALREADY_EXISTS',
        'PERMISSION_DENIED',
        'UNAUTHENTICATED',
        'RESOURCE_EXHAUSTED',
        'FAILED_PRECONDITION',
        'ABORTED',
        'OUT_OF_RANGE',
        'UNIMPLEMENTED',
        'INTERNAL',
        'UNAVAILABLE',
        'DATA_LOSS',
      ])
      .exactOptional()
      .openapi({ description: 'Status code.' }),
    message: z.string().exactOptional().openapi({ description: 'User-friendly error message.' }),
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sub resource specific to this error (e.g. a proxy deployed within the EnvironmentConfig). If empty the error refers to the top level resource.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string that uniquely identifies the type of error. This provides a more reliable means to deduplicate errors across revisions and instances.',
      }),
  })
  .openapi({ description: 'Details on why a resource update failed in the runtime.', required: [] })
  .openapi('GoogleCloudApigeeV1UpdateError')

const GoogleCloudApigeeV1RevisionStatusSchema = z
  .object({
    errors: z
      .array(GoogleCloudApigeeV1UpdateErrorSchema)
      .exactOptional()
      .openapi({ description: 'Errors reported when attempting to load this revision.' }),
    jsonSpec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The json content of the resource revision. Large specs should be sent individually via the spec field to avoid hitting request size limits.',
      }),
    replicas: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of replicas that have successfully loaded this revision.',
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The revision of the resource.' }),
  })
  .openapi({ description: 'The status of a specific resource revision.', required: [] })
  .openapi('GoogleCloudApigeeV1RevisionStatus')

const GoogleCloudApigeeV1ResourceStatusSchema = z
  .object({
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name. Currently only two resources are supported: EnvironmentGroup - organizations/{org}/envgroups/{envgroup} EnvironmentConfig - organizations/{org}/environments/{environment}/deployedConfig',
      }),
    revisions: z
      .array(GoogleCloudApigeeV1RevisionStatusSchema)
      .exactOptional()
      .openapi({ description: 'Revisions of the resource currently deployed in the instance.' }),
    totalReplicas: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of replicas that should have this resource.' }),
    uid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The uid of the resource. In the unexpected case that the instance has multiple uids for the same name, they should be reported under separate ResourceStatuses.',
      }),
  })
  .openapi({ description: 'The status of a resource loaded in the runtime.', required: [] })
  .openapi('GoogleCloudApigeeV1ResourceStatus')

const GoogleCloudApigeeV1ReportInstanceStatusRequestSchema = z
  .object({
    instanceUid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes with the same instance ID.',
      }),
    reportTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An instance should space out it's status reports so that clock skew does not play a factor.",
      }),
    resources: z
      .array(GoogleCloudApigeeV1ResourceStatusSchema)
      .exactOptional()
      .openapi({ description: 'Status for config resources' }),
  })
  .openapi({ description: 'Request for ReportInstanceStatus.', required: [] })
  .openapi('GoogleCloudApigeeV1ReportInstanceStatusRequest')

const GoogleCloudApigeeV1ReportInstanceStatusResponseSchema = z
  .object({})
  .openapi({ description: 'Placeholder for future enhancements to status reporting protocol' })
  .openapi('GoogleCloudApigeeV1ReportInstanceStatusResponse')

const GoogleCloudApigeeV1RuntimeConfigSchema = z
  .object({
    analyticsBucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud Storage bucket used for uploading Analytics records.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the resource in the following format: `organizations/{org}/runtimeConfig`.',
      }),
    tenantProjectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Tenant project ID associated with the Apigee organization. The tenant project is used to host Google-managed resources that are dedicated to this Apigee organization. Clients have limited access to resources within the tenant project used to support Apigee runtime instances. Access to the tenant project is managed using SetSyncAuthorization. It can be empty if the tenant project hasn't been created yet.",
        readOnly: true,
      }),
    traceBucket: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud Storage bucket used for uploading Trace records.' }),
  })
  .openapi({
    description: 'Runtime configuration for the organization. Response for GetRuntimeConfig.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1RuntimeConfig')

const GoogleCloudApigeeV1SchemaSchema: z.ZodType<GoogleCloudApigeeV1SchemaType> = z
  .lazy(() =>
    z
      .object({
        dimensions: z
          .array(GoogleCloudApigeeV1SchemaSchemaElementSchema)
          .exactOptional()
          .openapi({ description: 'List of schema fields grouped as dimensions.' }),
        meta: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              'Additional metadata associated with schema. This is a legacy field and usually consists of an empty array of strings.',
          }),
        metrics: z
          .array(GoogleCloudApigeeV1SchemaSchemaElementSchema)
          .exactOptional()
          .openapi({
            description:
              'List of schema fields grouped as dimensions that can be used with an aggregate function such as `sum`, `avg`, `min`, and `max`.',
          }),
      })
      .openapi({ description: 'Response for Schema call', required: [] }),
  )
  .openapi('GoogleCloudApigeeV1Schema')

const GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationSchema = z
  .object({
    attachTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when environment was attached to the security profile.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Name of the profile-environment association resource. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}',
      }),
    securityProfileRevisionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Revision ID of the security profile.' }),
  })
  .openapi({
    description: 'Represents a SecurityProfileEnvironmentAssociation resource.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1SecurityProfileEnvironmentAssociation')

const GoogleCloudApigeeV1SecurityReportQueryMetricSchema = z
  .object({
    aggregationFunction: z
      .string()
      .exactOptional()
      .openapi({ description: 'Aggregation function: avg, min, max, or sum.' }),
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Alias for the metric. Alias will be used to replace metric name in query results.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Required. Metric name.' }),
    operator: z
      .string()
      .exactOptional()
      .openapi({ description: 'One of `+`, `-`, `/`, `%`, `*`.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Operand value should be provided when operator is set.' }),
  })
  .openapi({ description: 'Metric of the Query', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityReportQueryMetric')

const GoogleCloudApigeeV1SecurityReportQuerySchema = z
  .object({
    csvDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Delimiter used in the CSV file, if `outputFormat` is set to `csv`. Defaults to the `,` (comma) character. Supported delimiter characters include comma (`,`), pipe (`|`), and tab (`\\t`).',
      }),
    dimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of dimensions. https://docs.apigee.com/api-platform/analytics/analytics-reference#dimensions',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Security Report display name which users can specify.' }),
    envgroupHostname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hostname needs to be specified if query intends to run at host level. This field is only allowed when query is submitted by CreateHostSecurityReport where analytics data will be grouped by organization and hostname.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Boolean expression that can be used to filter data. Filter expressions can be combined using AND/OR terms and should be fully parenthesized to avoid ambiguity. See Analytics metrics, dimensions, and filters reference https://docs.apigee.com/api-platform/analytics/analytics-reference for more information on the fields available to filter on. For more information on the tokens that you use to build filter expressions, see Filter expression syntax. https://docs.apigee.com/api-platform/analytics/asynch-reports-api#filter-expression-syntax',
      }),
    groupByTimeUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time unit used to group the result set. Valid values include: second, minute, hour, day, week, or month. If a query includes groupByTimeUnit, then the result is an aggregation based on the specified time unit and the resultant timestamp does not include milliseconds precision. If a query omits groupByTimeUnit, then the resultant timestamp includes milliseconds precision.',
      }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of rows that can be returned in the result.' }),
    metrics: z
      .array(GoogleCloudApigeeV1SecurityReportQueryMetricSchema)
      .exactOptional()
      .openapi({ description: 'A list of Metrics.' }),
    mimeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Valid values include: `csv` or `json`. Defaults to `json`. Note: Configure the delimiter for CSV output using the csvDelimiter property.',
      }),
    reportDefinitionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Report Definition ID.' }),
    timeRange: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Required. Time range for the query. Can use the following predefined strings to specify the time range: `last60minutes` `last24hours` `last7days` Or, specify the timeRange as a structure describing start and end timestamps in the ISO format: yyyy-mm-ddThh:mm:ssZ. Example: "timeRange": { "start": "2018-07-29T00:13:00Z", "end": "2018-08-01T00:18:00Z" }',
      }),
  })
  .openapi({
    description: 'Body structure when user makes a request to create a security report.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1SecurityReportQuery')

const GoogleCloudApigeeV1SecurityReportResultViewSchema = z
  .object({
    code: z.int32().exactOptional().openapi({ description: 'Error code when there is a failure.' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message when there is a failure.' }),
    metadata: GoogleCloudApigeeV1SecurityReportMetadataSchema.exactOptional().openapi({
      description:
        'Metadata contains information like metrics, dimenstions etc of the security report.',
    }),
    rows: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          'Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not set)",…}',
      }),
    state: z.string().exactOptional().openapi({ description: 'State of retrieving ResultView.' }),
  })
  .openapi({ description: 'The response for security report result view APIs.', required: [] })
  .openapi('GoogleCloudApigeeV1SecurityReportResultView')

const GoogleCloudApigeeV1SetAddonsRequestSchema = z
  .object({
    addonsConfig: GoogleCloudApigeeV1AddonsConfigSchema.exactOptional().openapi({
      description: 'Required. Add-on configurations.',
    }),
  })
  .openapi({ description: 'Request for SetAddons.', required: [] })
  .openapi('GoogleCloudApigeeV1SetAddonsRequest')

const GoogleCloudApigeeV1SharedFlowRevisionSchema = z
  .object({
    configurationVersion: GoogleCloudApigeeV1ConfigVersionSchema.exactOptional().openapi({
      description:
        'The version of the configuration schema to which this shared flow conforms. The only supported value currently is majorVersion 4 and minorVersion 0. This setting may be used in the future to enable evolution of the shared flow format.',
    }),
    contextInfo: z
      .string()
      .exactOptional()
      .openapi({ description: 'A textual description of the shared flow revision.' }),
    createdAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which this shared flow revision was created, in milliseconds since epoch.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the shared flow revision.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable name of this shared flow.' }),
    entityMetaDataAsProperties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'A Key-Value map of metadata about this shared flow revision.' }),
    lastModifiedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time at which this shared flow revision was most recently modified, in milliseconds since epoch.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource ID of the parent shared flow.' }),
    policies: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of policy names included in this shared flow revision.' }),
    resourceFiles: GoogleCloudApigeeV1ResourceFilesSchema.exactOptional().openapi({
      description: 'The resource files included in this shared flow revision.',
    }),
    resources: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of the resources included in this shared flow revision formatted as "{type}://{name}".',
      }),
    revision: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource ID of this revision.' }),
    sharedFlows: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A list of the shared flow names included in this shared flow revision.',
      }),
    type: z.string().exactOptional().openapi({ description: 'The string "Application"' }),
  })
  .openapi({ description: 'The metadata describing a shared flow revision.', required: [] })
  .openapi('GoogleCloudApigeeV1SharedFlowRevision')

const GoogleCloudApigeeV1StatsEnvironmentStatsSchema = z
  .object({
    dimensions: z
      .array(GoogleCloudApigeeV1DimensionMetricSchema)
      .exactOptional()
      .openapi({ description: 'List of metrics grouped under dimensions.' }),
    metrics: z
      .array(GoogleCloudApigeeV1MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only top-level metrics is provided. If dimensions are included, then there will be a top-level dimensions field under environments which will contain metrics values and the dimension name. Example: ``` "environments": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "prod" } ]``` or ```"environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ]``` List of metric values.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the environment.' }),
  })
  .openapi({
    description:
      'Encapsulates the environment wrapper: ``` "environments": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "prod" } ]```',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1StatsEnvironmentStats')

const GoogleCloudApigeeV1StatsHostStatsSchema = z
  .object({
    dimensions: z
      .array(GoogleCloudApigeeV1DimensionMetricSchema)
      .exactOptional()
      .openapi({ description: 'List of metrics grouped under dimensions.' }),
    metrics: z
      .array(GoogleCloudApigeeV1MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only the top-level metrics are provided. If dimensions are included, then there will be a top-level dimensions field under hostnames which will contain metrics values and the dimension name. Example: ``` "hosts": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ] } ], "name": "nit_proxy" } ], "name": "example.com" } ]``` OR ```"hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "example.com" } ]``` List of metric values.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Hostname used in query.' }),
  })
  .openapi({
    description:
      'Encapsulates the hostname wrapper: ``` "hosts": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.52056245E8" ] } ], "name": "example.com" } ]```',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1StatsHostStats')

const GoogleCloudApigeeV1StatsSchema = z
  .object({
    environments: z
      .array(GoogleCloudApigeeV1StatsEnvironmentStatsSchema)
      .exactOptional()
      .openapi({ description: 'List of query results on the environment level.' }),
    hosts: z
      .array(GoogleCloudApigeeV1StatsHostStatsSchema)
      .exactOptional()
      .openapi({ description: 'List of query results grouped by host.' }),
    metaData: GoogleCloudApigeeV1MetadataSchema.exactOptional().openapi({
      description: 'Metadata information.',
    }),
  })
  .openapi({ description: 'Encapsulates a `stats` response.', required: [] })
  .openapi('GoogleCloudApigeeV1Stats')

const GoogleCloudApigeeV1SubscriptionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full name of the Pub/Sub subcription. Use the following structure in your request: `subscription "projects/foo/subscription/bar"`',
      }),
  })
  .openapi({ description: 'Pub/Sub subscription of an environment.', required: [] })
  .openapi('GoogleCloudApigeeV1Subscription')

const GoogleCloudApigeeV1SyncAuthorizationSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other. For example, when you call [getSyncAuthorization](organizations/getSyncAuthorization) an ETag is returned in the response. Pass that ETag when calling the [setSyncAuthorization](organizations/setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. **Note**: We strongly recommend that you use the ETag in the read-modify-write cycle to avoid race conditions.",
      }),
    identities: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:` service-account-name. The service-account-name is formatted like an email address. For example: `my-synchronizer-manager-service_account@my_project_id.iam.gserviceaccount.com` You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one. The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/latest/sa-about#create-the-service-accounts).',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1SyncAuthorization')

const GoogleCloudApigeeV1TlsInfoCommonNameSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The TLS Common Name string of the certificate.' }),
    wildcardMatch: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the cert should be matched against as a wildcard cert.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudApigeeV1TlsInfoCommonName')

const GoogleCloudApigeeV1TlsInfoSchema = z
  .object({
    ciphers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.',
      }),
    clientAuthEnabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional. Enables two-way TLS.' }),
    commonName: GoogleCloudApigeeV1TlsInfoCommonNameSchema.exactOptional().openapi({
      description: 'The TLS Common Name of the certificate.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Enables TLS. If false, neither one-way nor two-way TLS will be enabled.',
      }),
    ignoreValidationErrors: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.',
      }),
    keyAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `client_auth_enabled` is true. The resource ID for the alias containing the private key and cert.',
      }),
    keyStore: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required if `client_auth_enabled` is true. The resource ID of the keystore.',
      }),
    protocols: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The TLS versioins to be used.' }),
    trustStore: z
      .string()
      .exactOptional()
      .openapi({ description: 'The resource ID of the truststore.' }),
  })
  .openapi({
    description: 'TLS configuration information for virtual hosts and TargetServers.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1TlsInfo')

const GoogleCloudApigeeV1TargetServerSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A human-readable description of this TargetServer.' }),
    host: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The host name this target connects to. Value must be a valid hostname as described by RFC-1123.',
      }),
    isEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource id of this target server. Values must match the regular expression ',
      }),
    port: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.',
      }),
    protocol: z
      .enum(['PROTOCOL_UNSPECIFIED', 'HTTP', 'GRPC'])
      .exactOptional()
      .openapi({ description: 'Immutable. The protocol used by this TargetServer.' }),
    sSLInfo: GoogleCloudApigeeV1TlsInfoSchema.exactOptional().openapi({
      description:
        'Optional. Specifies TLS configuration info for this TargetServer. The JSON name is `sSLInfo` for legacy/backwards compatibility reasons -- Edge originally supported SSL, and the name is still used for TLS configuration.',
    }),
  })
  .openapi({
    description:
      'TargetServer configuration. TargetServers are used to decouple a proxy TargetEndpoint HTTPTargetConnections from concrete URLs for backend services.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1TargetServer')

const GoogleCloudApigeeV1TestDatastoreResponseSchema = z
  .object({
    error: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Error message of test connection failure',
        readOnly: true,
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. It could be `completed` or `failed`', readOnly: true }),
  })
  .openapi({ description: 'The response for TestDatastore', required: [] })
  .openapi('GoogleCloudApigeeV1TestDatastoreResponse')

const GoogleCloudApigeeV1TraceConfigSchema = z
  .object({
    endpoint: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Endpoint of the exporter.' }),
    exporter: z
      .enum(['EXPORTER_UNSPECIFIED', 'JAEGER', 'CLOUD_TRACE'])
      .exactOptional()
      .openapi({
        description:
          'Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.',
      }),
    samplingConfig: GoogleCloudApigeeV1TraceSamplingConfigSchema.exactOptional().openapi({
      description:
        'Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.',
    }),
  })
  .openapi({
    description: 'TraceConfig defines the configurations in an environment of distributed trace.',
    required: [],
  })
  .openapi('GoogleCloudApigeeV1TraceConfig')

const GoogleIamV1AuditLogConfigSchema = z
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
  .openapi('GoogleIamV1AuditLogConfig')

const GoogleIamV1AuditConfigSchema = z
  .object({
    auditLogConfigs: z
      .array(GoogleIamV1AuditLogConfigSchema)
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
  .openapi('GoogleIamV1AuditConfig')

const GoogleTypeExprSchema = z
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
  .openapi('GoogleTypeExpr')

const GoogleIamV1BindingSchema = z
  .object({
    condition: GoogleTypeExprSchema.exactOptional().openapi({
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
  .openapi('GoogleIamV1Binding')

const GoogleIamV1PolicySchema = z
  .object({
    auditConfigs: z
      .array(GoogleIamV1AuditConfigSchema)
      .exactOptional()
      .openapi({ description: 'Specifies cloud audit logging configuration for this policy.' }),
    bindings: z
      .array(GoogleIamV1BindingSchema)
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
  .openapi('GoogleIamV1Policy')

const GoogleIamV1SetIamPolicyRequestSchema = z
  .object({
    policy: GoogleIamV1PolicySchema.exactOptional().openapi({
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
  .openapi('GoogleIamV1SetIamPolicyRequest')

const GoogleIamV1TestIamPermissionsRequestSchema = z
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
  .openapi('GoogleIamV1TestIamPermissionsRequest')

const GoogleIamV1TestIamPermissionsResponseSchema = z
  .object({
    permissions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'A subset of `TestPermissionsRequest.permissions` that the caller is allowed.',
      }),
  })
  .openapi({ description: 'Response message for `TestIamPermissions` method.', required: [] })
  .openapi('GoogleIamV1TestIamPermissionsResponse')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
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
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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

export const postV1OrganizationsRoute = createRoute({
  method: 'post',
  path: '/v1/organizations',
  tags: ['organizations'],
  description:
    'Creates an Apigee organization. See [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).',
  operationId: 'apigee.organizations.create',
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
      parent: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Name of the Google Cloud project in which to associate the Apigee organization. Pass the information as a query parameter using the following structure in your request: `projects/`',
            in: 'query',
            name: 'parent',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1OrganizationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1InstanceReportStatusRoute = createRoute({
  method: 'post',
  path: '/v1/{instance}:reportStatus',
  tags: ['organizations'],
  description: 'Reports the latest status for a runtime instance.',
  operationId: 'apigee.organizations.instances.reportStatus',
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
      instance: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the instance reporting this status. For SaaS the request will be rejected if no instance exists under this name. Format is organizations/{org}/instances/{instance}',
            in: 'path',
            name: 'instance',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ReportInstanceStatusRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ReportInstanceStatusResponseSchema },
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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['organizations'],
  description: 'Gets a category on the portal.',
  operationId: 'apigee.organizations.sites.apicategories.get',
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
      format: z
        .enum(['INGRESS_CONFIG_VIEW_UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify `bundle` to export the contents of the shared flow bundle. Otherwise, the bundle metadata is returned.',
            in: 'query',
            name: 'format',
            schema: { enum: ['INGRESS_CONFIG_VIEW_UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
            required: false,
          },
        }),
      envgroupHostname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Hostname for which the interactive query will be executed.',
            in: 'query',
            name: 'envgroupHostname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter that enables you to drill-down on specific dimension values.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Maximum number of result items to return. The default and maximum value that can be returned is 14400.',
            in: 'query',
            name: 'limit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Offset value. Use `offset` with `limit` to enable pagination of results. For example, to display results 11-20, set limit to `10` and offset to `10`.',
            in: 'query',
            name: 'offset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      realtime: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'No longer used by Apigee. Supported for backwards compatibility.',
            in: 'query',
            name: 'realtime',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      select: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Comma-separated list of metrics. For example: `sum(message_count),sum(error_count)`',
            in: 'query',
            name: 'select',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether the sort order should be ascending or descending. Valid values include `DESC` and `ASC`.',
            in: 'query',
            name: 'sort',
            schema: { type: 'string' },
            required: false,
          },
        }),
      sortby: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma-separated list of columns used to sort the final result.',
            in: 'query',
            name: 'sortby',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timeRange: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Time interval for the interactive query. Time range is specified in GMT as `start~end`. For example: `04/15/2017 00:00~05/15/2017 23:59`.',
            in: 'query',
            name: 'timeRange',
            schema: { type: 'string' },
            required: false,
          },
        }),
      timeUnit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Granularity of metrics returned. Valid values include: `second`, `minute`, `hour`, `day`, `week`, or `month`.',
            in: 'query',
            name: 'timeUnit',
            schema: { type: 'string' },
            required: false,
          },
        }),
      topk: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Top number of results to return. For example, to return the top 5 results, set `topk=5`.',
            in: 'query',
            name: 'topk',
            schema: { type: 'string' },
            required: false,
          },
        }),
      tsAscending: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to list timestamps in ascending (`true`) or descending (`false`) order. Apigee recommends that you set this value to `true` if you are using `sortby` with `sort=DESC`.',
            in: 'query',
            name: 'tsAscending',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      tzo: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Timezone offset value.',
            in: 'query',
            name: 'tzo',
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
              'Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1NameRoute = createRoute({
  method: 'put',
  path: '/v1/{name}',
  tags: ['organizations'],
  description: 'Update an existing custom report definition',
  operationId: 'apigee.organizations.reports.update',
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
      ignoreExpiryValidation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.',
            in: 'query',
            name: 'ignoreExpiryValidation',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ignoreNewlineValidation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.',
            in: 'query',
            name: 'ignoreNewlineValidation',
            schema: { type: 'boolean' },
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
              'Required. Custom Report name of the form: `organizations/{organization_id}/reports/{report_name}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1CustomReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1CustomReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameRoute = createRoute({
  method: 'post',
  path: '/v1/{name}',
  tags: ['organizations'],
  description:
    'Updates a shared flow revision. This operation is only allowed on revisions which have never been deployed. After deployment a revision becomes immutable, even if it becomes undeployed. The payload is a ZIP-formatted shared flow. Content type must be either multipart/form-data or application/octet-stream.',
  operationId: 'apigee.organizations.sharedflows.revisions.updateSharedFlowRevision',
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
      validate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ignored. All uploads are validated regardless of the value of this field. It is kept for compatibility with existing APIs. Must be `true` or `false` if provided.',
            in: 'query',
            name: 'validate',
            schema: { type: 'boolean' },
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
              'Required. The name of the shared flow revision to update. Must be of the form: `organizations/{organization_id}/sharedflows/{shared_flow_id}/revisions/{revision_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SharedFlowRevisionSchema } },
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
  tags: ['organizations'],
  description: 'Deletes a category from the portal.',
  operationId: 'apigee.organizations.sites.apicategories.delete',
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
      retention: z
        .enum(['DELETION_RETENTION_UNSPECIFIED', 'MINIMUM'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. This setting is applicable only for organizations that are soft-deleted (i.e., BillingType is not EVALUATION). It controls how long Organization data will be retained after the initial delete operation completes. During this period, the Organization may be restored to its last known state. After this period, the Organization will no longer be able to be restored.',
            in: 'query',
            name: 'retention',
            schema: { enum: ['DELETION_RETENTION_UNSPECIFIED', 'MINIMUM'], type: 'string' },
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
              'Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiResponseWrapperSchema } },
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
  tags: ['organizations'],
  description: 'Updates a category on the portal.',
  operationId: 'apigee.organizations.sites.apicategories.patch',
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
            description: 'List of fields to be updated.',
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
              'Required. Name of the category. Use the following structure in your request: `organizations/{org}/sites/{site}/apicategories/{apicategory}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1ApiCategoryDataSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAttributesRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/attributes',
  tags: ['organizations'],
  description:
    'Updates attributes for a developer app. This API replaces the current attributes with those specified in the request.',
  operationId: 'apigee.organizations.developers.apps.attributes',
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
              'Required. Name of the developer app. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps/{app}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1AttributesSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1AttributesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameCertificateRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/certificate',
  tags: ['organizations'],
  description: 'Gets the certificate from an alias in PEM-encoded form.',
  operationId: 'apigee.organizations.environments.keystores.aliases.getCertificate',
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
              'Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.',
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
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameCsrRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/csr',
  tags: ['organizations'],
  description: 'Generates a PKCS #10 Certificate Signing Request for the private key in an alias.',
  operationId: 'apigee.organizations.environments.keystores.aliases.csr',
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
              'Required. Name of the alias. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}/aliases/{alias}`.',
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
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameDataRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}/data',
  tags: ['organizations'],
  description:
    'Deletes the data from a debug session. This does not cancel the debug session or prevent further data from being collected if the session is still active in runtime pods.',
  operationId: 'apigee.organizations.environments.apis.revisions.debugsessions.deleteData',
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
              'Required. The name of the debug session to delete. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}/debugsessions/{debugsession}`.',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/deployments',
  tags: ['organizations'],
  description:
    'Gets the deployment of a shared flow revision and actual state reported by runtime pods.',
  operationId: 'apigee.organizations.environments.sharedflows.revisions.getDeployments',
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
              'Required. Name representing a shared flow in an environment in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/deployments',
  tags: ['organizations'],
  description:
    'Deploys a revision of a shared flow. If another revision of the same shared flow is currently deployed, set the `override` parameter to `true` to have this revision replace the currently deployed revision. You cannot use a shared flow until it has been deployed to an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.deploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`',
  operationId: 'apigee.organizations.environments.sharedflows.revisions.deploy',
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
      override: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether the new deployment replaces other deployed revisions of the shared flow in the environment. Set `override` to `true` to replace other deployed revisions. By default, `override` is `false` and the deployment is rejected if other revisions of the shared flow are deployed in the environment.',
            in: 'query',
            name: 'override',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      serviceAccount: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Google Cloud IAM service account. The service account represents the identity of the deployed proxy, and determines what permissions it has. The format must be `{ACCOUNT_ID}@{PROJECT}.iam.gserviceaccount.com`.',
            in: 'query',
            name: 'serviceAccount',
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
              'Required. Name of the shared flow revision to deploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeploymentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameDeploymentsRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}/deployments',
  tags: ['organizations'],
  description:
    'Undeploys a shared flow revision from an environment. For a request path `organizations/{org}/environments/{env}/sharedflows/{sf}/revisions/{rev}/deployments`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.sharedflowrevisions.undeploy` on the resource `organizations/{org}/sharedflows/{sf}/revisions/{rev}`',
  operationId: 'apigee.organizations.environments.sharedflows.revisions.undeploy',
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
      sequencedRollout: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to enable sequenced rollout. If set to `true`, the environment group routing rules corresponding to this deployment will be removed before removing the deployment from the runtime. This is likely to be a rare use case; it is only needed when the intended effect of undeploying this proxy is to cause the traffic it currently handles to be rerouted to some other existing proxy in the environment group. The [GenerateUndeployChangeReport API](GenerateUndeployChangeReport) may be used to examine routing changes before issuing the undeployment request, and its response will indicate if a sequenced rollout is recommended for the undeployment.',
            in: 'query',
            name: 'sequencedRollout',
            schema: { type: 'boolean' },
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
              'Required. Name of the shared flow revision to undeploy in the following format: `organizations/{org}/environments/{env}/sharedflows/{sharedflow}/revisions/{rev}`',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDeploymentsGenerateDeployChangeReportRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/deployments:generateDeployChangeReport',
  tags: ['organizations'],
  description:
    'Generates a report for a dry run analysis of a DeployApiProxy request without committing the deployment. In addition to the standard validations performed when adding deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being created. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run DeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateDeployChangeReport`, two permissions are required: * `apigee.deployments.create` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.deploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`',
  operationId:
    'apigee.organizations.environments.apis.revisions.deployments.generateDeployChangeReport',
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
      override: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to force the deployment of the new revision over the currently deployed revision by overriding conflict checks.',
            in: 'query',
            name: 'override',
            schema: { type: 'boolean' },
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
              'Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeploymentChangeReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDeploymentsGenerateUndeployChangeReportRoute = createRoute({
  method: 'post',
  path: '/v1/{name}/deployments:generateUndeployChangeReport',
  tags: ['organizations'],
  description:
    'Generates a report for a dry run analysis of an UndeployApiProxy request without committing the undeploy. In addition to the standard validations performed when removing deployments, additional analysis will be done to detect possible traffic routing changes that would result from this deployment being removed. Any potential routing conflicts or unsafe changes will be reported in the response. This routing analysis is not performed for a non-dry-run UndeployApiProxy request. For a request path `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}/deployments:generateUndeployChangeReport`, two permissions are required: * `apigee.deployments.delete` on the resource `organizations/{org}/environments/{env}` * `apigee.proxyrevisions.undeploy` on the resource `organizations/{org}/apis/{api}/revisions/{rev}`',
  operationId:
    'apigee.organizations.environments.apis.revisions.deployments.generateUndeployChangeReport',
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
              'Name of the API proxy revision deployment in the following format: `organizations/{org}/environments/{env}/apis/{api}/revisions/{rev}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeploymentChangeReportSchema } },
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
  tags: ['organizations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'apigee.organizations.operations.list',
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameActivateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:activate',
  tags: ['organizations'],
  description:
    'Activates the NAT address. The Apigee instance can now use this for Internet egress traffic. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.natAddresses.activate',
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
              'Required. Name of the nat address. Use the following structure in your request: `organizations/{org}/instances/{instances}/natAddresses/{nataddress}``',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ActivateNatAddressRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameAdjustRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:adjust',
  tags: ['organizations'],
  description:
    'Adjust the prepaid balance for the developer. This API will be used in scenarios where the developer has been under-charged or over-charged.',
  operationId: 'apigee.organizations.developers.balance.adjust',
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
              'Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1AdjustDeveloperBalanceRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperBalanceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCreditRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:credit',
  tags: ['organizations'],
  description: 'Credits the account balance for the developer.',
  operationId: 'apigee.organizations.developers.balance.credit',
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
              'Required. Account balance for the developer. Use the following structure in your request: `organizations/{org}/developers/{developer}/balance`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1CreditDeveloperBalanceRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperBalanceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameExpireRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:expire',
  tags: ['organizations'],
  description: 'Expires an API product subscription immediately.',
  operationId: 'apigee.organizations.developers.subscriptions.expire',
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
              'Required. Name of the API product subscription. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/subscriptions/{subscription}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ExpireDeveloperSubscriptionRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperSubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameGenerateDownloadUrlRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:generateDownloadUrl',
  tags: ['organizations'],
  description:
    'Generates a signed URL for downloading the original zip file used to create an Archive Deployment. The URL is only valid for a limited period and should be used within minutes after generation. Each call returns a new upload URL.',
  operationId: 'apigee.organizations.environments.archiveDeployments.generateDownloadUrl',
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
            description: 'Required. The name of the Archive Deployment you want to download.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1GenerateDownloadUrlRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1GenerateDownloadUrlResponseSchema },
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

export const getV1NameGetProjectMappingRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:getProjectMapping',
  tags: ['organizations'],
  description: 'Gets the project ID and region for an Apigee organization.',
  operationId: 'apigee.organizations.getProjectMapping',
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
              'Required. Apigee organization name in the following format: `organizations/{org}`',
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
        'application/json': { schema: GoogleCloudApigeeV1OrganizationProjectMappingSchema },
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

export const postV1NameGetSyncAuthorizationRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:getSyncAuthorization',
  tags: ['organizations'],
  description:
    "Lists the service accounts with the permissions required to allow the Synchronizer to download environment data from the control plane. An ETag is returned in the response to `getSyncAuthorization`. Pass that ETag when calling [setSyncAuthorization](setSyncAuthorization) to ensure that you are updating the correct version. If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.",
  operationId: 'apigee.organizations.getSyncAuthorization',
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
              'Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1GetSyncAuthorizationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SyncAuthorizationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameListRevisionsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:listRevisions',
  tags: ['organizations'],
  description: 'ListSecurityProfileRevisions lists all the revisions of the security profile.',
  operationId: 'apigee.organizations.securityProfiles.listRevisions',
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
              'The maximum number of profile revisions to return. The service may return fewer than this value. If unspecified, at most 50 revisions will be returned.',
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
              'A page token, received from a previous `ListSecurityProfileRevisions` call. Provide this to retrieve the subsequent page.',
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
            description:
              'Required. For a specific profile, list all the revisions. Format: `organizations/{org}/securityProfiles/{profile}`',
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
        'application/json': {
          schema: GoogleCloudApigeeV1ListSecurityProfileRevisionsResponseSchema,
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

export const postV1NameSetSyncAuthorizationRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:setSyncAuthorization',
  tags: ['organizations'],
  description:
    "Sets the permissions required to allow the Synchronizer to download environment data from the control plane. You must call this API to enable proper functioning of hybrid. Pass the ETag when calling `setSyncAuthorization` to ensure that you are updating the correct version. To get an ETag, call [getSyncAuthorization](getSyncAuthorization). If you don't pass the ETag in the call to `setSyncAuthorization`, then the existing authorization is overwritten indiscriminately. For more information, see [Configure the Synchronizer](https://cloud.google.com/apigee/docs/hybrid/latest/synchronizer-access). **Note**: Available to Apigee hybrid only.",
  operationId: 'apigee.organizations.setSyncAuthorization',
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
              'Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1SyncAuthorizationSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SyncAuthorizationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1OrgenvSecurityStatsQueryTabularStatsRoute = createRoute({
  method: 'post',
  path: '/v1/{orgenv}/securityStats:queryTabularStats',
  tags: ['organizations'],
  description: 'Retrieve security statistics as tabular rows.',
  operationId: 'apigee.organizations.environments.securityStats.queryTabularStats',
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
      orgenv: z
        .string()
        .openapi({
          param: {
            description: 'Required. Should be of the form organizations//environments/.',
            in: 'path',
            name: 'orgenv',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1QueryTabularStatsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1QueryTabularStatsResponseSchema },
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

export const postV1OrgenvSecurityStatsQueryTimeSeriesStatsRoute = createRoute({
  method: 'post',
  path: '/v1/{orgenv}/securityStats:queryTimeSeriesStats',
  tags: ['organizations'],
  description: 'Retrieve security statistics as a collection of time series.',
  operationId: 'apigee.organizations.environments.securityStats.queryTimeSeriesStats',
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
      orgenv: z
        .string()
        .openapi({
          param: {
            description: 'Required. Should be of the form organizations//environments/.',
            in: 'path',
            name: 'orgenv',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1QueryTimeSeriesStatsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1QueryTimeSeriesStatsResponseSchema },
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

export const postV1OrgSetAddonsRoute = createRoute({
  method: 'post',
  path: '/v1/{org}:setAddons',
  tags: ['organizations'],
  description:
    'Configures the add-ons for the Apigee organization. The existing add-on configuration will be fully replaced.',
  operationId: 'apigee.organizations.setAddons',
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
      org: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}`',
            in: 'path',
            name: 'org',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1SetAddonsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}',
  tags: ['organizations'],
  description:
    'Lists the Apigee organizations and associated Google Cloud projects that you have permission to access. See [Understanding organizations](https://cloud.google.com/apigee/docs/api-platform/fundamentals/organization-structure).',
  operationId: 'apigee.organizations.list',
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
            description: 'Required. Use the following structure in your request: `organizations`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListOrganizationsResponseSchema },
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

export const postV1ParentAliasesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/aliases',
  tags: ['organizations'],
  description:
    'Creates an alias from a key/certificate pair. The structure of the request is controlled by the `format` query parameter: - `keycertfile` - Separate PEM-encoded key and certificate files are uploaded. Set `Content-Type: multipart/form-data` and include the `keyFile`, `certFile`, and `password` (if keys are encrypted) fields in the request body. If uploading to a truststore, omit `keyFile`. - `pkcs12` - A PKCS12 file is uploaded. Set `Content-Type: multipart/form-data`, provide the file in the `file` field, and include the `password` field if the file is encrypted in the request body. - `selfsignedcert` - A new private key and certificate are generated. Set `Content-Type: application/json` and include CertificateGenerationSpec in the request body.',
  operationId: 'apigee.organizations.environments.keystores.aliases.create',
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
      _password: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'DEPRECATED: For improved security, specify the password in the request body instead of using the query parameter. To specify the password in the request body, set `Content-type: multipart/form-data` part with name `password`. Password for the private key file, if required.',
            in: 'query',
            name: '_password',
            schema: { type: 'string' },
            required: false,
          },
        }),
      alias: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Alias for the key/certificate pair. Values must match the regular expression `[\\w\\s-.]{1,255}`. This must be provided for all formats except `selfsignedcert`; self-signed certs may specify the alias in either this parameter or the JSON body.',
            in: 'query',
            name: 'alias',
            schema: { type: 'string' },
            required: false,
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Format of the data. Valid values include: `selfsignedcert`, `keycertfile`, or `pkcs12`',
            in: 'query',
            name: 'format',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ignoreExpiryValidation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to ignore expiry validation. If set to `true`, no expiry validation will be performed.',
            in: 'query',
            name: 'ignoreExpiryValidation',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ignoreNewlineValidation: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to ignore newline validation. If set to `true`, no error is thrown when the file contains a certificate chain with no newline between each certificate. Defaults to `false`.',
            in: 'query',
            name: 'ignoreNewlineValidation',
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
            description:
              'Required. Name of the keystore. Use the following format in your request: `organizations/{org}/environments/{env}/keystores/{keystore}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1AliasSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAnalyticsDatastoresRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/analytics/datastores',
  tags: ['organizations'],
  description: 'List Datastores',
  operationId: 'apigee.organizations.analytics.datastores.list',
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
      targetType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. TargetType is used to fetch all Datastores that match the type',
            in: 'query',
            name: 'targetType',
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
              'Required. The parent organization name. Must be of the form `organizations/{org}`.',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListDatastoresResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAnalyticsDatastoresRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/analytics/datastores',
  tags: ['organizations'],
  description: 'Create a Datastore for an org',
  operationId: 'apigee.organizations.analytics.datastores.create',
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
              'Required. The parent organization name. Must be of the form `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DatastoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DatastoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAnalyticsDatastoresTestRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/analytics/datastores:test',
  tags: ['organizations'],
  description:
    'Test if Datastore configuration is correct. This includes checking if credentials provided by customer have required permissions in target destination storage',
  operationId: 'apigee.organizations.analytics.datastores.test',
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
              'Required. The parent organization name Must be of the form `organizations/{org}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DatastoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1TestDatastoreResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAnalyticsExportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/analytics/exports',
  tags: ['organizations'],
  description:
    'Lists the details and status of all analytics export jobs belonging to the parent organization and environment.',
  operationId: 'apigee.organizations.environments.analytics.exports.list',
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
              'Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListExportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAnalyticsExportsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/analytics/exports',
  tags: ['organizations'],
  description:
    'Submit a data export job to be processed in the background. If the request is successful, the API returns a 201 status, a URI that can be used to retrieve the status of the export job, and the `state` value of "enqueued".',
  operationId: 'apigee.organizations.environments.analytics.exports.create',
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
              'Required. Names of the parent organization and environment. Must be of the form `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1ExportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ExportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentApicategoriesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apicategories',
  tags: ['organizations'],
  description: 'Lists the categories on the portal.',
  operationId: 'apigee.organizations.sites.apicategories.list',
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
              'Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListApiCategoriesResponseSchema },
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

export const postV1ParentApicategoriesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/apicategories',
  tags: ['organizations'],
  description: 'Creates a new category on the portal.',
  operationId: 'apigee.organizations.sites.apicategories.create',
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
              'Required. Name of the portal. Use the following structure in your request: `organizations/{org}/sites/{site}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1ApiCategoryDataSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiCategorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentApiproductsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apiproducts',
  tags: ['organizations'],
  description:
    'Lists all API product names for an organization. Filter the list by passing an `attributename` and `attibutevalue`. The maximum number of API products returned is 1000. You can paginate the list of API products returned using the `startKey` and `count` query parameters.',
  operationId: 'apigee.organizations.apiproducts.list',
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
      attributename: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the attribute used to filter the search.',
            in: 'query',
            name: 'attributename',
            schema: { type: 'string' },
            required: false,
          },
        }),
      attributevalue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Value of the attribute used to filter the search.',
            in: 'query',
            name: 'attributevalue',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Enter the number of API products you want returned in the API call. The limit is 1000.',
            in: 'query',
            name: 'count',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API.',
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Gets a list of API products starting with a specific API product in the list. For example, if you're returning 50 API products at a time (using the `count` query parameter), you can view products 50-99 by entering the name of the 50th API product in the first API (without using `startKey`). Product name is case sensitive.",
            in: 'query',
            name: 'startKey',
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
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListApiProductsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentApiproductsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/apiproducts',
  tags: ['organizations'],
  description:
    "Creates an API product in an organization. You create API products after you have proxied backend services using API proxies. An API product is a collection of API resources combined with quota settings and metadata that you can use to deliver customized and productized API bundles to your developer community. This metadata can include: - Scope - Environments - API proxies - Extensible profile API products enable you repackage APIs on the fly, without having to do any additional coding or configuration. Apigee recommends that you start with a simple API product including only required elements. You then provision credentials to apps to enable them to start testing your APIs. After you have authentication and authorization working against a simple API product, you can iterate to create finer-grained API products, defining different sets of API resources for each API product. **WARNING:** - If you don't specify an API proxy in the request body, *any* app associated with the product can make calls to *any* API in your entire organization. - If you don't specify an environment in the request body, the product allows access to all environments. For more information, see What is an API product?",
  operationId: 'apigee.organizations.apiproducts.create',
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
              'Required. Name of the organization in which the API product will be created. Use the following structure in your request: `organizations/{org}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1ApiProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentApisRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apis',
  tags: ['organizations'],
  description:
    'Lists the names of all API proxies in an organization. The names returned correspond to the names defined in the configuration files for each API proxy.',
  operationId: 'apigee.organizations.apis.list',
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
      includeMetaData: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to include API proxy metadata in the response.',
            in: 'query',
            name: 'includeMetaData',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeRevisions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to include a list of revisions in the response.',
            in: 'query',
            name: 'includeRevisions',
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
            description:
              'Required. Name of the organization in the following format: `organizations/{org}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListApiProxiesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentApisRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/apis',
  tags: ['organizations'],
  description:
    'Creates an API proxy. The API proxy created will not be accessible at runtime until it is deployed to an environment. Create a new API proxy by setting the `name` query parameter to the name of the API proxy. Import an API proxy configuration bundle stored in zip format on your local machine to your organization by doing the following: * Set the `name` query parameter to the name of the API proxy. * Set the `action` query parameter to `import`. * Set the `Content-Type` header to `multipart/form-data`. * Pass as a file the name of API proxy configuration bundle stored in zip format on your local machine using the `file` form field. **Note**: To validate the API proxy configuration bundle only without importing it, set the `action` query parameter to `validate`. When importing an API proxy configuration bundle, if the API proxy does not exist, it will be created. If the API proxy exists, then a new revision is created. Invalid API proxy configurations are rejected, and a list of validation errors is returned to the client.',
  operationId: 'apigee.organizations.apis.create',
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
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Action to perform when importing an API proxy configuration bundle. Set this parameter to one of the following values: * `import` to import the API proxy configuration bundle. * `validate` to validate the API proxy configuration bundle without importing it.',
            in: 'query',
            name: 'action',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the API proxy. Restrict the characters used to: A-Za-z0-9._-',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validate: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Ignored. All uploads are validated regardless of the value of this field. Maintained for compatibility with Apigee Edge API.',
            in: 'query',
            name: 'validate',
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
            description:
              'Required. Name of the organization in the following format: `organizations/{org}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ApiProxyRevisionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAppsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/apps',
  tags: ['organizations'],
  description:
    'Lists all apps created by a developer in an Apigee organization. Optionally, you can request an expanded view of the developer apps. A maximum of 100 developer apps are returned per API call. You can paginate the list of deveoper apps returned using the `startKey` and `count` query parameters.',
  operationId: 'apigee.organizations.developers.apps.list',
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
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Number of developer apps to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.',
            in: 'query',
            name: 'count',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.',
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      shallowExpand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Specifies whether to expand the results in shallow mode. Set to `true` to expand the results in shallow mode.',
            in: 'query',
            name: 'shallowExpand',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "**Note**: Must be used in conjunction with the `count` parameter. Name of the developer app from which to start displaying the list of developer apps. For example, if you're returning 50 developer apps at a time (using the `count` query parameter), you can view developer apps 50-99 by entering the name of the 50th developer app. The developer app name is case sensitive.",
            in: 'query',
            name: 'startKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeCred: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Flag that specifies whether to include credentials in the response.',
            in: 'query',
            name: 'includeCred',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      keyStatus: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Key status of the app. Valid values include `approved` or `revoked`. Defaults to `approved`.',
            in: 'query',
            name: 'keyStatus',
            schema: { type: 'string' },
            required: false,
          },
        }),
      rows: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Maximum number of app IDs to return. Defaults to 10000.',
            in: 'query',
            name: 'rows',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filter by the status of the app. Valid values are `approved` or `revoked`. Defaults to `approved`.',
            in: 'query',
            name: 'status',
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
              'Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListDeveloperAppsResponseSchema },
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

export const postV1ParentAppsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/apps',
  tags: ['organizations'],
  description:
    "Creates an app associated with a developer. This API associates the developer app with the specified API product and auto-generates an API key for the app to use in calls to API proxies inside that API product. The `name` is the unique ID of the app that you can use in API calls. The `DisplayName` (set as an attribute) appears in the UI. If you don't set the `DisplayName` attribute, the `name` appears in the UI.",
  operationId: 'apigee.organizations.developers.apps.create',
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
              'Required. Name of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentArchiveDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/archiveDeployments',
  tags: ['organizations'],
  description: 'Lists the ArchiveDeployments in the specified Environment.',
  operationId: 'apigee.organizations.environments.archiveDeployments.list',
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
              'Optional. An optional query used to return a subset of Archive Deployments using the semantics defined in https://google.aip.dev/160.',
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
              'Optional. Maximum number of Archive Deployments to return. If unspecified, at most 25 deployments will be returned.',
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
              'Optional. Page token, returned from a previous ListArchiveDeployments call, that you can use to retrieve the next page.',
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
              'Required. Name of the Environment for which to list Archive Deployments in the format: `organizations/{org}/environments/{env}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListArchiveDeploymentsResponseSchema },
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

export const postV1ParentArchiveDeploymentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/archiveDeployments',
  tags: ['organizations'],
  description: 'Creates a new ArchiveDeployment.',
  operationId: 'apigee.organizations.environments.archiveDeployments.create',
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
            description: 'Required. The Environment this Archive Deployment will be created in.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1ArchiveDeploymentSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentArchiveDeploymentsGenerateUploadUrlRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/archiveDeployments:generateUploadUrl',
  tags: ['organizations'],
  description:
    'Generates a signed URL for uploading an Archive zip file to Google Cloud Storage. Once the upload is complete, the signed URL should be passed to CreateArchiveDeployment. When uploading to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * Source file size should not exceed 1GB limit. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` * `x-goog-content-length-range: 0,1073741824` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`',
  operationId: 'apigee.organizations.environments.archiveDeployments.generateUploadUrl',
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
            description: 'Required. The organization and environment to upload to.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1GenerateUploadUrlRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1GenerateUploadUrlResponseSchema },
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

export const getV1ParentAttachmentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/attachments',
  tags: ['organizations'],
  description: 'Lists all attachments to an instance. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.attachments.list',
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
            description: 'Maximum number of instance attachments to return. Defaults to 25.',
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
              'Page token, returned by a previous ListInstanceAttachments call, that you can use to retrieve the next page of content.',
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
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListInstanceAttachmentsResponseSchema },
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

export const postV1ParentAttachmentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/attachments',
  tags: ['organizations'],
  description:
    'Creates a new attachment of an environment to an instance. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.attachments.create',
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
              'Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1InstanceAttachmentSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAttributesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/attributes',
  tags: ['organizations'],
  description: 'Returns a list of all developer attributes.',
  operationId: 'apigee.organizations.developers.attributes.list',
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
              'Required. Email address of the developer for which attributes are being listed. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1AttributesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAttributesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/attributes',
  tags: ['organizations'],
  description:
    "Updates developer attributes. This API replaces the existing attributes with those specified in the request. Add new attributes, and include or exclude any existing attributes that you want to retain or remove, respectively. The custom attribute limit is 18. **Note**: OAuth access tokens and Key Management Service (KMS) entities (apps, developers, and API products) are cached for 180 seconds (default). Any custom attributes associated with these entities are cached for at least 180 seconds after the entity is accessed at runtime. Therefore, an `ExpiresIn` element on the OAuthV2 policy won't be able to expire an access token in less than 180 seconds.",
  operationId: 'apigee.organizations.developers.attributes',
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
              'Required. Email address of the developer for which attributes are being updated. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1AttributesSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1AttributesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentCanaryevaluationsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/canaryevaluations',
  tags: ['organizations'],
  description: 'Creates a new canary evaluation for an organization.',
  operationId: 'apigee.organizations.instances.canaryevaluations.create',
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
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}/instances/{instance}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1CanaryEvaluationSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDatacollectorsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/datacollectors',
  tags: ['organizations'],
  description: 'Lists all data collectors.',
  operationId: 'apigee.organizations.datacollectors.list',
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
              'Maximum number of data collectors to return. The page size defaults to 25.',
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
              'Page token, returned from a previous ListDataCollectors call, that you can use to retrieve the next page.',
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
              'Required. Name of the organization for which to list data collectors in the following format: `organizations/{org}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListDataCollectorsResponseSchema },
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

export const postV1ParentDatacollectorsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/datacollectors',
  tags: ['organizations'],
  description: 'Creates a new data collector.',
  operationId: 'apigee.organizations.datacollectors.create',
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
      dataCollectorId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the data collector. Overrides any ID in the data collector resource. Must be a string beginning with `dc_` that contains only letters, numbers, and underscores.',
            in: 'query',
            name: 'dataCollectorId',
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
              'Required. Name of the organization in which to create the data collector in the following format: `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DataCollectorSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DataCollectorSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDebugsessionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/debugsessions',
  tags: ['organizations'],
  description: 'Lists debug sessions that are currently active in the given API Proxy revision.',
  operationId: 'apigee.organizations.environments.apis.revisions.debugsessions.list',
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
              'Maximum number of debug sessions to return. The page size defaults to 25.',
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
              'Page token, returned from a previous ListDebugSessions call, that you can use to retrieve the next page.',
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
              'Required. The name of the API Proxy revision deployment for which to list debug sessions. Must be of the form: `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListDebugSessionsResponseSchema },
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

export const postV1ParentDebugsessionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/debugsessions',
  tags: ['organizations'],
  description: 'Creates a debug session for a deployed API Proxy revision.',
  operationId: 'apigee.organizations.environments.apis.revisions.debugsessions.create',
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
      timeout: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The time in seconds after which this DebugSession should end. A timeout specified in DebugSession will overwrite this value.',
            in: 'query',
            name: 'timeout',
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
              'Required. The resource name of the API Proxy revision deployment for which to create the DebugSession. Must be of the form `organizations/{organization}/environments/{environment}/apis/{api}/revisions/{revision}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DebugSessionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DebugSessionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDeploymentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/deployments',
  tags: ['organizations'],
  description: 'Lists all deployments of a shared flow revision.',
  operationId: 'apigee.organizations.sharedflows.revisions.deployments.list',
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
      sharedFlows: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Flag that specifies whether to return shared flow or API proxy deployments. Set to `true` to return shared flow deployments; set to `false` to return API proxy deployments. Defaults to `false`.',
            in: 'query',
            name: 'sharedFlows',
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
            description:
              'Required. Name of the API proxy revision for which to return deployment information in the following format: `organizations/{org}/sharedflows/{sharedflow}/revisions/{rev}`.',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListDeploymentsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentDevelopersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/developers',
  tags: ['organizations'],
  description:
    'Lists all developers in an organization by email address. By default, the response does not include company developers. Set the `includeCompany` query parameter to `true` to include company developers. **Note**: A maximum of 1000 developers are returned in the response. You paginate the list of developers returned using the `startKey` and `count` query parameters.',
  operationId: 'apigee.organizations.developers.list',
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
      app: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. List only Developers that are associated with the app. Note that start_key, count are not applicable for this filter criteria.',
            in: 'query',
            name: 'app',
            schema: { type: 'string' },
            required: false,
          },
        }),
      count: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Number of developers to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The limit is 1000.',
            in: 'query',
            name: 'count',
            schema: { type: 'string' },
            required: false,
          },
        }),
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specifies whether to expand the results. Set to `true` to expand the results. This query parameter is not valid if you use the `count` or `startKey` query parameters.',
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. List of IDs to include, separated by commas.',
            in: 'query',
            name: 'ids',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeCompany: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag that specifies whether to include company details in the response.',
            in: 'query',
            name: 'includeCompany',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      startKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**Note**: Must be used in conjunction with the `count` parameter. Email address of the developer from which to start displaying the list of developers. For example, if the an unfiltered list returns: ``` westley@example.com fezzik@example.com buttercup@example.com ``` and your `startKey` is `fezzik@example.com`, the list returned will be ``` fezzik@example.com buttercup@example.com ```',
            in: 'query',
            name: 'startKey',
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
              'Required. Name of the Apigee organization. Use the following structure in your request: `organizations/{org}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListOfDevelopersResponseSchema },
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

export const postV1ParentDevelopersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/developers',
  tags: ['organizations'],
  description:
    'Creates a developer. Once created, the developer can register an app and obtain an API key. At creation time, a developer is set as `active`. To change the developer status, use the SetDeveloperStatus API.',
  operationId: 'apigee.organizations.developers.create',
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
              'Required. Name of the Apigee organization in which the developer is created. Use the following structure in your request: `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEndpointAttachmentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/endpointAttachments',
  tags: ['organizations'],
  description: 'Lists the endpoint attachments in an organization.',
  operationId: 'apigee.organizations.endpointAttachments.list',
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
              'Optional. Maximum number of endpoint attachments to return. If unspecified, at most 25 attachments will be returned.',
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
              'Optional. Page token, returned from a previous `ListEndpointAttachments` call, that you can use to retrieve the next page.',
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
              'Required. Name of the organization for which to list endpoint attachments. Use the following structure in your request: `organizations/{org}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListEndpointAttachmentsResponseSchema },
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

export const postV1ParentEndpointAttachmentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/endpointAttachments',
  tags: ['organizations'],
  description: 'Creates an endpoint attachment. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.endpointAttachments.create',
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
      endpointAttachmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID to use for the endpoint attachment. ID must start with a lowercase letter followed by up to 31 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. The minimum length is 2.',
            in: 'query',
            name: 'endpointAttachmentId',
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
            description: 'Required. Organization the endpoint attachment will be created in.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1EndpointAttachmentSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEntriesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/entries',
  tags: ['organizations'],
  description:
    'Lists key value entries for key values maps scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.',
  operationId: 'apigee.organizations.keyvaluemaps.entries.list',
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
              'Optional. Maximum number of key value entries to return. If unspecified, at most 100 entries will be returned.',
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
              'Optional. Page token. If provides, must be a valid key value entry returned from a previous call that can be used to retrieve the next page.',
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
              'Required. Scope as indicated by the URI in which to list key value maps. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListKeyValueEntriesResponseSchema },
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

export const postV1ParentEntriesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/entries',
  tags: ['organizations'],
  description:
    'Creates key value entries in a key value map scoped to an organization, environment, or API proxy. **Note**: Supported for Apigee hybrid 1.8.x and higher.',
  operationId: 'apigee.organizations.keyvaluemaps.entries.create',
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
              'Required. Scope as indicated by the URI in which to create the key value map entry. Use **one** of the following structures in your request: * `organizations/{organization}/apis/{api}/keyvaluemaps/{keyvaluemap}`. * `organizations/{organization}/environments/{environment}/keyvaluemaps/{keyvaluemap}` * `organizations/{organization}/keyvaluemaps/{keyvaluemap}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1KeyValueEntrySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1KeyValueEntrySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentEnvgroupsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/envgroups',
  tags: ['organizations'],
  description: 'Lists all environment groups.',
  operationId: 'apigee.organizations.envgroups.list',
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
              'Maximum number of environment groups to return. The page size defaults to 25.',
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
              'Page token, returned from a previous ListEnvironmentGroups call, that you can use to retrieve the next page.',
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
              'Required. Name of the organization for which to list environment groups in the following format: `organizations/{org}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListEnvironmentGroupsResponseSchema },
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

export const postV1ParentEnvgroupsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/envgroups',
  tags: ['organizations'],
  description: 'Creates a new environment group.',
  operationId: 'apigee.organizations.envgroups.create',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'ID of the environment group. Overrides any ID in the environment_group resource.',
            in: 'query',
            name: 'name',
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
              'Required. Name of the organization in which to create the environment group in the following format: `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1EnvironmentGroupSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/environments',
  tags: ['organizations'],
  description:
    'CreateSecurityProfileEnvironmentAssociation creates profile environment association i.e. attaches environment to security profile.',
  operationId: 'apigee.organizations.securityProfiles.environments.create',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Name of the environment.',
            in: 'query',
            name: 'name',
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
              'Required. Name of organization and security profile ID. Format: organizations/{org}/securityProfiles/{profile}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudApigeeV1SecurityProfileEnvironmentAssociationSchema,
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

export const getV1ParentHostQueriesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/hostQueries',
  tags: ['organizations'],
  description: 'Return a list of Asynchronous Queries at host level.',
  operationId: 'apigee.organizations.hostQueries.list',
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
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by dataset. Example: `api`, `mint`',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      envgroupHostname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Filter response list by hostname.',
            in: 'query',
            name: 'envgroupHostname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.",
            in: 'query',
            name: 'from',
            schema: { type: 'string' },
            required: false,
          },
        }),
      inclQueriesWithoutReport: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Flag to include asynchronous queries that don't have a report denifition.",
            in: 'query',
            name: 'inclQueriesWithoutReport',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by asynchronous query status.',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      submittedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by user who submitted queries.',
            in: 'query',
            name: 'submittedBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.",
            in: 'query',
            name: 'to',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListAsyncQueriesResponseSchema },
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

export const postV1ParentHostQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/hostQueries',
  tags: ['organizations'],
  description:
    'Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.',
  operationId: 'apigee.organizations.hostQueries.create',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1QuerySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1AsyncQuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentHostSecurityReportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/hostSecurityReports',
  tags: ['organizations'],
  description: 'Return a list of Security Reports at host level.',
  operationId: 'apigee.organizations.hostSecurityReports.list',
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
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by dataset. Example: `api`, `mint`',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      envgroupHostname: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Filter response list by hostname.',
            in: 'query',
            name: 'envgroupHostname',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.",
            in: 'query',
            name: 'from',
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
            description: 'The maximum number of security report to return in the list response.',
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
            description: 'Token returned from the previous list response to fetch the next page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by security report status.',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      submittedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by user who submitted queries.',
            in: 'query',
            name: 'submittedBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.",
            in: 'query',
            name: 'to',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListSecurityReportsResponseSchema },
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

export const postV1ParentHostSecurityReportsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/hostSecurityReports',
  tags: ['organizations'],
  description:
    'Submit a query at host level to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.',
  operationId: 'apigee.organizations.hostSecurityReports.create',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1SecurityReportQuerySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SecurityReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentInstancesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/instances',
  tags: ['organizations'],
  description:
    'Lists all Apigee runtime instances for the organization. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.list',
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
            description: 'Maximum number of instances to return. Defaults to 25.',
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
              'Page token, returned from a previous ListInstances call, that you can use to retrieve the next page of content.',
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
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListInstancesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentInstancesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/instances',
  tags: ['organizations'],
  description:
    'Creates an Apigee runtime instance. The instance is accessible from the authorized network configured on the organization. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.create',
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
              'Required. Name of the organization. Use the following structure in your request: `organizations/{org}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1InstanceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentKeysRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keys',
  tags: ['organizations'],
  description:
    'Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.',
  operationId: 'apigee.organizations.developers.apps.keys.create',
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
              'Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentKeysCreateRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keys/create',
  tags: ['organizations'],
  description:
    'Creates a custom consumer key and secret for a developer app. This is particularly useful if you want to migrate existing consumer keys and secrets to Apigee from another system. Consumer keys and secrets can contain letters, numbers, underscores, and hyphens. No other special characters are allowed. To avoid service disruptions, a consumer key and secret should not exceed 2 KBs each. **Note**: When creating the consumer key and secret, an association to API products will not be made. Therefore, you should not specify the associated API products in your request. Instead, use the UpdateDeveloperAppKey API to make the association after the consumer key and secret are created. If a consumer key and secret already exist, you can keep them or delete them using the DeleteDeveloperAppKey API.',
  operationId: 'apigee.organizations.developers.apps.keys.create.create',
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
              'Parent of the developer app key. Use the following structure in your request: `organizations/{org}/developers/{developer_email}/apps`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppKeySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperAppKeySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentKeystoresRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keystores',
  tags: ['organizations'],
  description:
    "Creates a keystore or truststore. - Keystore: Contains certificates and their associated keys. - Truststore: Contains trusted certificates used to validate a server's certificate. These certificates are typically self-signed certificates or certificates that are not signed by a trusted CA.",
  operationId: 'apigee.organizations.environments.keystores.create',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Name of the keystore. Overrides the value in Keystore.',
            in: 'query',
            name: 'name',
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
              'Required. Name of the environment in which to create the keystore. Use the following format in your request: `organizations/{org}/environments/{env}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1KeystoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1KeystoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentKeyvaluemapsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/keyvaluemaps',
  tags: ['organizations'],
  description: 'Creates a key value map in an organization.',
  operationId: 'apigee.organizations.keyvaluemaps.create',
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
              'Required. Name of the organization in which to create the key value map file. Use the following structure in your request: `organizations/{org}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1KeyValueMapSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1KeyValueMapSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentNatAddressesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/natAddresses',
  tags: ['organizations'],
  description:
    'Lists the NAT addresses for an Apigee instance. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.natAddresses.list',
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
            description: 'Maximum number of natAddresses to return. Defaults to 25.',
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
              'Page token, returned from a previous ListNatAddresses call, that you can use to retrieve the next page of content.',
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
              'Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListNatAddressesResponseSchema },
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

export const postV1ParentNatAddressesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/natAddresses',
  tags: ['organizations'],
  description:
    'Creates a NAT address. The address is created in the RESERVED state and a static external IP address will be provisioned. At this time, the instance will not use this IP address for Internet egress traffic. The address can be activated for use once any required firewall IP whitelisting has been completed. **Note:** Not supported for Apigee hybrid.',
  operationId: 'apigee.organizations.instances.natAddresses.create',
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
              'Required. Name of the instance. Use the following structure in your request: `organizations/{org}/instances/{instance}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1NatAddressSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentOverridesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/overrides',
  tags: ['organizations'],
  description: 'Lists all of the distributed trace configuration overrides in an environment.',
  operationId: 'apigee.organizations.environments.traceConfig.overrides.list',
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
              'Maximum number of trace configuration overrides to return. If not specified, the maximum number returned is 25. The maximum number cannot exceed 100.',
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
              'A page token, returned from a previous `ListTraceConfigOverrides` call. Token value that can be used to retrieve the subsequent page. When paginating, all other parameters provided to `ListTraceConfigOverrides` must match those specified in the call to obtain the page token.',
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
              'Required. Parent resource of the trace configuration override. Use the following structure in your request: "organizations/*/environments/*/traceConfig".',
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
        'application/json': { schema: GoogleCloudApigeeV1ListTraceConfigOverridesResponseSchema },
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

export const postV1ParentOverridesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/overrides',
  tags: ['organizations'],
  description:
    'Creates a trace configuration override. The response contains a system-generated UUID, that can be used to view, update, or delete the configuration override. Use the List API to view the existing trace configuration overrides.',
  operationId: 'apigee.organizations.environments.traceConfig.overrides.create',
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
              'Required. Parent resource of the trace configuration override. Use the following structure in your request. "organizations/*/environments/*/traceConfig".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1TraceConfigOverrideSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1TraceConfigOverrideSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentQueriesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/queries',
  tags: ['organizations'],
  description: 'Return a list of Asynchronous Queries',
  operationId: 'apigee.organizations.environments.queries.list',
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
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by dataset. Example: `api`, `mint`',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning asynchronous queries that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.",
            in: 'query',
            name: 'from',
            schema: { type: 'string' },
            required: false,
          },
        }),
      inclQueriesWithoutReport: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Flag to include asynchronous queries that don't have a report denifition.",
            in: 'query',
            name: 'inclQueriesWithoutReport',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by asynchronous query status.',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      submittedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by user who submitted queries.',
            in: 'query',
            name: 'submittedBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning asynchronous queries that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.",
            in: 'query',
            name: 'to',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListAsyncQueriesResponseSchema },
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

export const postV1ParentQueriesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/queries',
  tags: ['organizations'],
  description:
    'Submit a query to be processed in the background. If the submission of the query succeeds, the API returns a 201 status and an ID that refer to the query. In addition to the HTTP status 201, the `state` of "enqueued" means that the request succeeded.',
  operationId: 'apigee.organizations.environments.queries.create',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1QuerySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1AsyncQuerySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentRateplansRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/rateplans',
  tags: ['organizations'],
  description: 'Lists all the rate plans for an API product.',
  operationId: 'apigee.organizations.apiproducts.rateplans.list',
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
      count: z
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
              'Number of rate plans to return in the API call. Use with the `startKey` parameter to provide more targeted filtering. The maximum limit is 1000. Defaults to 100.',
            in: 'query',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag that specifies whether to expand the results. Set to `true` to get expanded details about each API. Defaults to `false`.',
            in: 'query',
            name: 'expand',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the attribute used for sorting. Valid values include: * `name`: Name of the rate plan. * `state`: State of the rate plan (`DRAFT`, `PUBLISHED`). * `startTime`: Time when the rate plan becomes active. * `endTime`: Time when the rate plan expires. **Note**: Not supported by Apigee at this time.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the rate plan from which to start displaying the list of rate plans. If omitted, the list starts from the first item. For example, to view the rate plans from 51-150, set the value of `startKey` to the name of the 51st rate plan and set the value of `count` to 100.',
            in: 'query',
            name: 'startKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .enum(['STATE_UNSPECIFIED', 'DRAFT', 'PUBLISHED'])
        .exactOptional()
        .openapi({
          param: {
            description: 'State of the rate plans (`DRAFT`, `PUBLISHED`) that you want to display.',
            in: 'query',
            name: 'state',
            schema: { enum: ['STATE_UNSPECIFIED', 'DRAFT', 'PUBLISHED'], type: 'string' },
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
              'Required. Name of the API product. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}` Use `organizations/{org}/apiproducts/-` to return rate plans for all API products within the organization.',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListRatePlansResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentRateplansRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/rateplans',
  tags: ['organizations'],
  description:
    "Create a rate plan that is associated with an API product in an organization. Using rate plans, API product owners can monetize their API products by configuring one or more of the following: - Billing frequency - Initial setup fees for using an API product - Payment funding model (postpaid only) - Fixed recurring or consumption-based charges for using an API product - Revenue sharing with developer partners An API product can have multiple rate plans associated with it but *only one* rate plan can be active at any point of time. **Note: From the developer's perspective, they purchase API products not rate plans.",
  operationId: 'apigee.organizations.apiproducts.rateplans.create',
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
              'Required. Name of the API product that is associated with the rate plan. Use the following structure in your request: `organizations/{org}/apiproducts/{apiproduct}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1RatePlanSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1RatePlanSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentReferencesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/references',
  tags: ['organizations'],
  description: 'Creates a Reference in the specified environment.',
  operationId: 'apigee.organizations.environments.references.create',
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
              'Required. The parent environment name under which the Reference will be created. Must be of the form `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1ReferenceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ReferenceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentReportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/reports',
  tags: ['organizations'],
  description: 'Return a list of Custom Reports',
  operationId: 'apigee.organizations.reports.list',
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
      expand: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: "Set to 'true' to get expanded details about each custom report.",
            in: 'query',
            name: 'expand',
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
            description:
              'Required. The parent organization name under which the API product will be listed `organizations/{organization_id}/reports`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListCustomReportsResponseSchema },
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

export const postV1ParentReportsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/reports',
  tags: ['organizations'],
  description:
    'Creates a Custom Report for an Organization. A Custom Report provides Apigee Customers to create custom dashboards in addition to the standard dashboards which are provided. The Custom Report in its simplest form contains specifications about metrics, dimensions and filters. It is important to note that the custom report by itself does not provide an executable entity. The Edge UI converts the custom report definition into an analytics query and displays the result in a chart.',
  operationId: 'apigee.organizations.reports.create',
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
              'Required. The parent organization name under which the Custom Report will be created. Must be of the form: `organizations/{organization_id}/reports`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1CustomReportSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1CustomReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentResourcefilesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/resourcefiles',
  tags: ['organizations'],
  description:
    'Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.list',
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
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Type of resource files to list. {{ resource_file_type }}',
            in: 'query',
            name: 'type',
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
              'Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListEnvironmentResourcesResponseSchema },
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

export const postV1ParentResourcefilesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/resourcefiles',
  tags: ['organizations'],
  description:
    'Creates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.create',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. Name of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\\\!@#$%^&{}\\[\\]()+\\-=,.~'` ]{1,255}",
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Resource file type. {{ resource_file_type }}',
            in: 'query',
            name: 'type',
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
              'Required. Name of the environment in which to create the resource file in the following format: `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ResourceFileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentResourcefilesTypeRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/resourcefiles/{type}',
  tags: ['organizations'],
  description:
    'Lists all resource files, optionally filtering by type. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.listEnvironmentResources',
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
              'Required. Name of the environment in which to list resource files in the following format: `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Optional. Type of resource files to list. {{ resource_file_type }}',
            in: 'path',
            name: 'type',
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
        'application/json': { schema: GoogleCloudApigeeV1ListEnvironmentResourcesResponseSchema },
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

export const getV1ParentResourcefilesTypeNameRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/resourcefiles/{type}/{name}',
  tags: ['organizations'],
  description:
    'Gets the contents of a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.get',
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
              'Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource file type. {{ resource_file_type }}',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. ID of the resource file. Must match the regular expression: [a-zA-Z0-9:/\\\\!@#$%^&{}\\[\\]()+\\-=,.~'` ]{1,255}",
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
      content: { 'application/json': { schema: GoogleApiHttpBodySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const putV1ParentResourcefilesTypeNameRoute = createRoute({
  method: 'put',
  path: '/v1/{parent}/resourcefiles/{type}/{name}',
  tags: ['organizations'],
  description:
    'Updates a resource file. Specify the `Content-Type` as `application/octet-stream` or `multipart/form-data`. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.update',
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
              'Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource file type. {{ resource_file_type }}',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. ID of the resource file to update. Must match the regular expression: [a-zA-Z0-9:/\\\\!@#$%^&{}\\[\\]()+\\-=,.~'` ]{1,255}",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1ResourceFileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1ParentResourcefilesTypeNameRoute = createRoute({
  method: 'delete',
  path: '/v1/{parent}/resourcefiles/{type}/{name}',
  tags: ['organizations'],
  description:
    'Deletes a resource file. For more information about resource files, see [Resource files](https://cloud.google.com/apigee/docs/api-platform/develop/resource-files).',
  operationId: 'apigee.organizations.environments.resourcefiles.delete',
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
              'Required. Name of the environment in the following format: `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource file type. {{ resource_file_type }}',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              "Required. ID of the resource file to delete. Must match the regular expression: [a-zA-Z0-9:/\\\\!@#$%^&{}\\[\\]()+\\-=,.~'` ]{1,255}",
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ResourceFileSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSecurityIncidentsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/securityIncidents',
  tags: ['organizations'],
  description:
    'ListSecurityIncidents lists all the security incident associated with the environment.',
  operationId: 'apigee.organizations.environments.securityIncidents.list',
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
              'The filter expression to be used to get the list of security incidents, where filtering can be done on API Proxies. Example: filter = "api_proxy = /", "first_detected_time >", "last_detected_time <"',
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
              'The maximum number of incidents to return. The service may return fewer than this value. If unspecified, at most 50 incidents will be returned.',
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
              'A page token, received from a previous `ListSecurityIncident` call. Provide this to retrieve the subsequent page.',
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
              'Required. For a specific organization, list of all the security incidents. Format: `organizations/{org}/environments/{environment}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListSecurityIncidentsResponseSchema },
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

export const getV1ParentSecurityProfilesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/securityProfiles',
  tags: ['organizations'],
  description:
    'ListSecurityProfiles lists all the security profiles associated with the org including attached and unattached profiles.',
  operationId: 'apigee.organizations.securityProfiles.list',
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
              'The maximum number of profiles to return. The service may return fewer than this value. If unspecified, at most 50 profiles will be returned.',
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
              'A page token, received from a previous `ListSecurityProfiles` call. Provide this to retrieve the subsequent page.',
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
              'Required. For a specific organization, list of all the security profiles. Format: `organizations/{org}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListSecurityProfilesResponseSchema },
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

export const getV1ParentSecurityReportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/securityReports',
  tags: ['organizations'],
  description: 'Return a list of Security Reports',
  operationId: 'apigee.organizations.environments.securityReports.list',
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
      dataset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by dataset. Example: `api`, `mint`',
            in: 'query',
            name: 'dataset',
            schema: { type: 'string' },
            required: false,
          },
        }),
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning security reports that created after this date time. Time must be in ISO date-time format like '2011-12-03T10:15:30Z'.",
            in: 'query',
            name: 'from',
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
            description: 'The maximum number of security report to return in the list response.',
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
            description: 'Token returned from the previous list response to fetch the next page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by security reports status.',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
      submittedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter response list by user who submitted queries.',
            in: 'query',
            name: 'submittedBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      to: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Filter response list by returning security reports that created before this date time. Time must be in ISO date-time format like '2011-12-03T10:16:30Z'.",
            in: 'query',
            name: 'to',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.',
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
        'application/json': { schema: GoogleCloudApigeeV1ListSecurityReportsResponseSchema },
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

export const postV1ParentSecurityReportsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/securityReports',
  tags: ['organizations'],
  description:
    'Submit a report request to be processed in the background. If the submission succeeds, the API returns a 200 status and an ID that refer to the report request. In addition to the HTTP status 200, the `state` of "enqueued" means that the request succeeded.',
  operationId: 'apigee.organizations.environments.securityReports.create',
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
              'Required. The parent resource name. Must be of the form `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1SecurityReportQuerySchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SecurityReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSharedflowsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/sharedflows',
  tags: ['organizations'],
  description: 'Lists all shared flows in the organization.',
  operationId: 'apigee.organizations.sharedflows.list',
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
      includeMetaData: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates whether to include shared flow metadata in the response.',
            in: 'query',
            name: 'includeMetaData',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeRevisions: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Indicates whether to include a list of revisions in the response.',
            in: 'query',
            name: 'includeRevisions',
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
            description:
              'Required. The name of the parent organization under which to get shared flows. Must be of the form: `organizations/{organization_id}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1ListSharedFlowsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentSharedflowsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/sharedflows',
  tags: ['organizations'],
  description:
    'Uploads a ZIP-formatted shared flow configuration bundle to an organization. If the shared flow already exists, this creates a new revision of it. If the shared flow does not exist, this creates it. Once imported, the shared flow revision must be deployed before it can be accessed at runtime. The size limit of a shared flow bundle is 15 MB.',
  operationId: 'apigee.organizations.sharedflows.create',
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
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Must be set to either `import` or `validate`.',
            in: 'query',
            name: 'action',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The name to give the shared flow',
            in: 'query',
            name: 'name',
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
              'Required. The name of the parent organization under which to create the shared flow. Must be of the form: `organizations/{organization_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleApiHttpBodySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1SharedFlowRevisionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentSubscriptionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/subscriptions',
  tags: ['organizations'],
  description: 'Lists all API product subscriptions for a developer.',
  operationId: 'apigee.organizations.developers.subscriptions.list',
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
      count: z
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
              'Number of API product subscriptions to return in the API call. Use with `startKey` to provide more targeted filtering. Defaults to 100. The maximum limit is 1000.',
            in: 'query',
            name: 'count',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      startKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Name of the API product subscription from which to start displaying the list of subscriptions. If omitted, the list starts from the first item. For example, to view the API product subscriptions from 51-150, set the value of `startKey` to the name of the 51st subscription and set the value of `count` to 100.',
            in: 'query',
            name: 'startKey',
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
              'Required. Email address of the developer. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
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
        'application/json': { schema: GoogleCloudApigeeV1ListDeveloperSubscriptionsResponseSchema },
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

export const postV1ParentSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/subscriptions',
  tags: ['organizations'],
  description: 'Creates a subscription to an API product. ',
  operationId: 'apigee.organizations.developers.subscriptions.create',
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
              'Required. Email address of the developer that is purchasing a subscription to the API product. Use the following structure in your request: `organizations/{org}/developers/{developer_email}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperSubscriptionSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1DeveloperSubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentTargetserversRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/targetservers',
  tags: ['organizations'],
  description: 'Creates a TargetServer in the specified environment.',
  operationId: 'apigee.organizations.environments.targetservers.create',
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The ID to give the TargetServer. This will overwrite the value in TargetServer.',
            in: 'query',
            name: 'name',
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
              'Required. The parent environment name under which the TargetServer will be created. Must be of the form `organizations/{org}/environments/{env}`.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1TargetServerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudApigeeV1TargetServerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentSubscribeRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:subscribe',
  tags: ['organizations'],
  description:
    'Creates a subscription for the environment\'s Pub/Sub topic. The server will assign a random name for this subscription. The "name" and "push_config" must *not* be specified.',
  operationId: 'apigee.organizations.environments.subscribe',
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
              'Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`',
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
      content: { 'application/json': { schema: GoogleCloudApigeeV1SubscriptionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentUnsubscribeRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:unsubscribe',
  tags: ['organizations'],
  description: "Deletes a subscription for the environment's Pub/Sub topic.",
  operationId: 'apigee.organizations.environments.unsubscribe',
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
              'Required. Name of the environment. Use the following structure in your request: `organizations/{org}/environments/{env}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudApigeeV1SubscriptionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProfileEnvironmentComputeEnvironmentScoresRoute = createRoute({
  method: 'post',
  path: '/v1/{profileEnvironment}:computeEnvironmentScores',
  tags: ['organizations'],
  description:
    'ComputeEnvironmentScores calculates scores for requested time range for the specified security profile and environment.',
  operationId: 'apigee.organizations.securityProfiles.environments.computeEnvironmentScores',
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
      profileEnvironment: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of organization and environment and profile id for which score needs to be computed. Format: organizations/{org}/securityProfiles/{profile}/environments/{env}',
            in: 'path',
            name: 'profileEnvironment',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ComputeEnvironmentScoresRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ComputeEnvironmentScoresResponseSchema },
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

export const postV1ProjectProvisionOrganizationRoute = createRoute({
  method: 'post',
  path: '/v1/{project}:provisionOrganization',
  tags: ['projects'],
  description:
    'Provisions a new Apigee organization with a functioning runtime. This is the standard way to create trial organizations for a free Apigee trial.',
  operationId: 'apigee.projects.provisionOrganization',
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
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Name of the GCP project with which to associate the Apigee organization.',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudApigeeV1ProvisionOrganizationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ResourceGetIamPolicyRoute = createRoute({
  method: 'get',
  path: '/v1/{resource}:getIamPolicy',
  tags: ['organizations'],
  description:
    'Gets the IAM policy on an environment. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.getIamPolicy` permission to call this API.',
  operationId: 'apigee.organizations.environments.getIamPolicy',
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
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceSetIamPolicyRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:setIamPolicy',
  tags: ['organizations'],
  description:
    'Sets the IAM policy on an environment, if the policy already exists it will be replaced. For more information, see [Manage users, roles, and permissions using the API](https://cloud.google.com/apigee/docs/api-platform/system-administration/manage-users-roles). You must have the `apigee.environments.setIamPolicy` permission to call this API.',
  operationId: 'apigee.organizations.environments.setIamPolicy',
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
    body: { content: { 'application/json': { schema: GoogleIamV1SetIamPolicyRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1PolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ResourceTestIamPermissionsRoute = createRoute({
  method: 'post',
  path: '/v1/{resource}:testIamPermissions',
  tags: ['organizations'],
  description:
    'Tests the permissions of a user on an environment, and returns a subset of permissions that the user has on the environment. If the environment does not exist, an empty permission set is returned (a NOT_FOUND error is not returned).',
  operationId: 'apigee.organizations.environments.testIamPermissions',
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
    body: {
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleIamV1TestIamPermissionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
