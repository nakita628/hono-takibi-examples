import { createRoute, z } from '@hono/zod-openapi'

const BooleanSchema = z.boolean().openapi('Boolean')

const ConnectorTypeSchema = z
  .enum([
    'Salesforce',
    'Singular',
    'Slack',
    'Redshift',
    'S3',
    'Marketo',
    'Googleanalytics',
    'Zendesk',
    'Servicenow',
    'Datadog',
    'Trendmicro',
    'Snowflake',
    'Dynatrace',
    'Infornexus',
    'Amplitude',
    'Veeva',
    'EventBridge',
    'LookoutMetrics',
    'Upsolver',
    'Honeycode',
    'CustomerProfiles',
    'SAPOData',
    'CustomConnector',
    'Pardot',
  ])
  .openapi('ConnectorType')

const ConnectorTypeListSchema = z
  .array(ConnectorTypeSchema)
  .min(0)
  .max(100)
  .openapi('ConnectorTypeList')

const ScheduleFrequencyTypeSchema = z
  .enum(['BYMINUTE', 'HOURLY', 'DAILY', 'WEEKLY', 'MONTHLY', 'ONCE'])
  .openapi('ScheduleFrequencyType')

const SchedulingFrequencyTypeListSchema = z
  .array(ScheduleFrequencyTypeSchema)
  .openapi('SchedulingFrequencyTypeList')

const TriggerTypeSchema = z.enum(['Scheduled', 'Event', 'OnDemand']).openapi('TriggerType')

const TriggerTypeListSchema = z.array(TriggerTypeSchema).openapi('TriggerTypeList')

const AmplitudeMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Amplitude. ' })
  .openapi('AmplitudeMetadata')

const DatadogMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Datadog. ' })
  .openapi('DatadogMetadata')

const DynatraceMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Dynatrace. ' })
  .openapi('DynatraceMetadata')

const OAuthScopeSchema = z.string().regex(/\S+/).max(128).openapi('OAuthScope')

const OAuthScopeListSchema = z.array(OAuthScopeSchema).openapi('OAuthScopeList')

const GoogleAnalyticsMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: ' The desired authorization scope for the Google Analytics account. ',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Google Analytics. ', required: [] })
  .openapi('GoogleAnalyticsMetadata')

const InforNexusMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Infor Nexus. ' })
  .openapi('InforNexusMetadata')

const MarketoMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Marketo. ' })
  .openapi('MarketoMetadata')

const RedshiftMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Amazon Redshift. ' })
  .openapi('RedshiftMetadata')

const S3MetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Amazon S3. ' })
  .openapi('S3Metadata')

const SalesforceDataTransferApiSchema = z
  .enum(['AUTOMATIC', 'BULKV2', 'REST_SYNC'])
  .openapi('SalesforceDataTransferApi')

const SalesforceDataTransferApiListSchema = z
  .array(SalesforceDataTransferApiSchema)
  .openapi('SalesforceDataTransferApiList')

const SalesforceMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: ' The desired authorization scope for the Salesforce account. ',
    }),
    dataTransferApis: SalesforceDataTransferApiListSchema.exactOptional().openapi({
      description:
        'The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers data to or from Salesforce.',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Salesforce. ', required: [] })
  .openapi('SalesforceMetadata')

const ServiceNowMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to ServiceNow. ' })
  .openapi('ServiceNowMetadata')

const SingularMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Singular. ' })
  .openapi('SingularMetadata')

const SlackMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: ' The desired authorization scope for the Slack account. ',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Slack. ', required: [] })
  .openapi('SlackMetadata')

const RegionSchema = z.string().regex(/\S+/).max(64).openapi('Region')

const RegionListSchema = z.array(RegionSchema).openapi('RegionList')

const SnowflakeMetadataSchema = z
  .object({
    supportedRegions: RegionListSchema.exactOptional().openapi({
      description: ' Specifies the supported Amazon Web Services Regions when using Snowflake. ',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Snowflake. ', required: [] })
  .openapi('SnowflakeMetadata')

const TrendmicroMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Trend Micro. ' })
  .openapi('TrendmicroMetadata')

const VeevaMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Veeva. ' })
  .openapi('VeevaMetadata')

const ZendeskMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: ' The desired authorization scope for the Zendesk account. ',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Zendesk. ', required: [] })
  .openapi('ZendeskMetadata')

const EventBridgeMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Amazon EventBridge. ' })
  .openapi('EventBridgeMetadata')

const UpsolverMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to Upsolver. ' })
  .openapi('UpsolverMetadata')

const CustomerProfilesMetadataSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector metadata specific to Amazon Connect Customer Profiles. ',
  })
  .openapi('CustomerProfilesMetadata')

const HoneycodeMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: ' The desired authorization scope for the Amazon Honeycode account. ',
    }),
  })
  .openapi({ description: ' The connector metadata specific to Amazon Honeycode. ', required: [] })
  .openapi('HoneycodeMetadata')

const SAPODataMetadataSchema = z
  .looseObject({})
  .openapi({ description: ' The connector metadata specific to SAPOData. ' })
  .openapi('SAPODataMetadata')

const PardotMetadataSchema = z
  .looseObject({})
  .openapi({ description: 'The connector metadata specific to Salesforce Pardot.' })
  .openapi('PardotMetadata')

const ConnectorMetadataSchema = z
  .object({
    Amplitude: AmplitudeMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amplitude. ',
    }),
    Datadog: DatadogMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Datadog. ',
    }),
    Dynatrace: DynatraceMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Dynatrace. ',
    }),
    GoogleAnalytics: GoogleAnalyticsMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Google Analytics. ',
    }),
    InforNexus: InforNexusMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Infor Nexus. ',
    }),
    Marketo: MarketoMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Marketo. ',
    }),
    Redshift: RedshiftMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amazon Redshift. ',
    }),
    S3: S3MetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amazon S3. ',
    }),
    Salesforce: SalesforceMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Salesforce. ',
    }),
    ServiceNow: ServiceNowMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to ServiceNow. ',
    }),
    Singular: SingularMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Singular. ',
    }),
    Slack: SlackMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Slack. ',
    }),
    Snowflake: SnowflakeMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Snowflake. ',
    }),
    Trendmicro: TrendmicroMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Trend Micro. ',
    }),
    Veeva: VeevaMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Veeva. ',
    }),
    Zendesk: ZendeskMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Zendesk. ',
    }),
    EventBridge: EventBridgeMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amazon EventBridge. ',
    }),
    Upsolver: UpsolverMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Upsolver. ',
    }),
    CustomerProfiles: CustomerProfilesMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amazon Connect Customer Profiles. ',
    }),
    Honeycode: HoneycodeMetadataSchema.exactOptional().openapi({
      description: ' The connector metadata specific to Amazon Honeycode. ',
    }),
    SAPOData: SAPODataMetadataSchema.exactOptional(),
    Pardot: PardotMetadataSchema.exactOptional().openapi({
      description: 'The connector metadata specific to Salesforce Pardot.',
    }),
  })
  .openapi({
    description:
      ' A structure to specify connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. ',
    required: [],
  })
  .openapi('ConnectorMetadata')

const ConnectorLabelSchema = z
  .string()
  .regex(/[a-zA-Z0-9][\w!@#.-]+/)
  .max(256)
  .openapi('ConnectorLabel')

const ConnectorDescriptionSchema = z
  .string()
  .regex(/[\w!@#\-.?,\s]*/)
  .max(2048)
  .openapi('ConnectorDescription')

const ConnectorOwnerSchema = z.string().regex(/.*/).max(256).openapi('ConnectorOwner')

const ConnectorNameSchema = z.string().regex(/.*/).max(256).openapi('ConnectorName')

const ConnectorVersionSchema = z.string().regex(/\S+/).max(256).openapi('ConnectorVersion')

const ARNSchema = z
  .string()
  .regex(/arn:aws:.*:.*:[0-9]+:.*/)
  .max(512)
  .openapi('ARN')

const ConnectorModeSchema = z.string().regex(/\S+/).max(256).openapi('ConnectorMode')

const ConnectorModeListSchema = z.array(ConnectorModeSchema).openapi('ConnectorModeList')

const TokenUrlSchema = z
  .string()
  .regex(/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('TokenUrl')

const TokenUrlListSchema = z.array(TokenUrlSchema).openapi('TokenUrlList')

const AuthCodeUrlSchema = z
  .string()
  .regex(/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('AuthCodeUrl')

const AuthCodeUrlListSchema = z.array(AuthCodeUrlSchema).openapi('AuthCodeUrlList')

const OAuth2GrantTypeSchema = z
  .enum(['CLIENT_CREDENTIALS', 'AUTHORIZATION_CODE'])
  .openapi('OAuth2GrantType')

const OAuth2GrantTypeSupportedListSchema = z
  .array(OAuth2GrantTypeSchema)
  .openapi('OAuth2GrantTypeSupportedList')

const KeySchema = z.string().regex(/\S+/).max(512).openapi('Key')

const LabelSchema = z.string().regex(/.*/).max(128).openapi('Label')

const DescriptionSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(1024)
  .openapi('Description')

const ConnectorSuppliedValueSchema = z
  .string()
  .regex(/\S+/)
  .max(256)
  .openapi('ConnectorSuppliedValue')

const ConnectorSuppliedValueListSchema = z
  .array(ConnectorSuppliedValueSchema)
  .openapi('ConnectorSuppliedValueList')

const OAuth2CustomPropTypeSchema = z.enum(['TOKEN_URL', 'AUTH_URL']).openapi('OAuth2CustomPropType')

const OAuth2CustomParameterSchema = z
  .object({
    key: KeySchema.exactOptional().openapi({
      description: 'The key of the custom parameter required for OAuth 2.0 authentication.',
    }),
    isRequired: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether the custom parameter for OAuth 2.0 authentication is required.',
    }),
    label: LabelSchema.exactOptional().openapi({
      description: 'The label of the custom parameter used for OAuth 2.0 authentication.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'A description about the custom parameter used for OAuth 2.0 authentication.',
    }),
    isSensitiveField: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether this authentication custom parameter is a sensitive field.',
    }),
    connectorSuppliedValues: ConnectorSuppliedValueListSchema.exactOptional().openapi({
      description:
        'Contains default values for this authentication parameter that are supplied by the connector.',
    }),
    type: OAuth2CustomPropTypeSchema.exactOptional().openapi({
      description: 'Indicates whether custom parameter is used with TokenUrl or AuthUrl.',
    }),
  })
  .openapi({ description: 'Custom parameter required for OAuth 2.0 authentication.', required: [] })
  .openapi('OAuth2CustomParameter')

const OAuth2CustomPropertiesListSchema = z
  .array(OAuth2CustomParameterSchema)
  .openapi('OAuth2CustomPropertiesList')

const OAuth2DefaultsSchema = z
  .object({
    oauthScopes: OAuthScopeListSchema.exactOptional().openapi({
      description: 'OAuth 2.0 scopes that the connector supports.',
    }),
    tokenUrls: TokenUrlListSchema.exactOptional().openapi({
      description: 'Token URLs that can be used for OAuth 2.0 authentication.',
    }),
    authCodeUrls: AuthCodeUrlListSchema.exactOptional().openapi({
      description: 'Auth code URLs that can be used for OAuth 2.0 authentication.',
    }),
    oauth2GrantTypesSupported: OAuth2GrantTypeSupportedListSchema.exactOptional().openapi({
      description: 'OAuth 2.0 grant types supported by the connector.',
    }),
    oauth2CustomProperties: OAuth2CustomPropertiesListSchema.exactOptional().openapi({
      description: 'List of custom parameters required for OAuth 2.0 authentication.',
    }),
  })
  .openapi({
    description: 'Contains the default values required for OAuth 2.0 authentication.',
    required: [],
  })
  .openapi('OAuth2Defaults')

const CustomAuthenticationTypeSchema = z
  .string()
  .regex(/\S+/)
  .max(256)
  .openapi('CustomAuthenticationType')

const AuthParameterSchema = z
  .object({
    key: KeySchema.exactOptional().openapi({
      description: 'The authentication key required to authenticate with the connector.',
    }),
    isRequired: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether this authentication parameter is required.',
    }),
    label: LabelSchema.exactOptional().openapi({
      description: 'Label used for authentication parameter.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'A description about the authentication parameter.',
    }),
    isSensitiveField: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether this authentication parameter is a sensitive field.',
    }),
    connectorSuppliedValues: ConnectorSuppliedValueListSchema.exactOptional().openapi({
      description:
        'Contains default values for this authentication parameter that are supplied by the connector.',
    }),
  })
  .openapi({ description: 'Information about required authentication parameters.', required: [] })
  .openapi('AuthParameter')

const AuthParameterListSchema = z.array(AuthParameterSchema).openapi('AuthParameterList')

const CustomAuthConfigSchema = z
  .object({
    customAuthenticationType: CustomAuthenticationTypeSchema.exactOptional().openapi({
      description: 'The authentication type that the custom connector uses.',
    }),
    authParameters: AuthParameterListSchema.exactOptional().openapi({
      description: 'Information about authentication parameters required for authentication.',
    }),
  })
  .openapi({
    description: 'Configuration information required for custom authentication.',
    required: [],
  })
  .openapi('CustomAuthConfig')

const CustomAuthConfigListSchema = z.array(CustomAuthConfigSchema).openapi('CustomAuthConfigList')

const AuthenticationConfigSchema = z
  .object({
    isBasicAuthSupported: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether basic authentication is supported by the connector.',
    }),
    isApiKeyAuthSupported: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether API key authentication is supported by the connector',
    }),
    isOAuth2Supported: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether OAuth 2.0 authentication is supported by the connector.',
    }),
    isCustomAuthSupported: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether custom authentication is supported by the connector',
    }),
    oAuth2Defaults: OAuth2DefaultsSchema.exactOptional().openapi({
      description: 'Contains the default values required for OAuth 2.0 authentication.',
    }),
    customAuthConfigs: CustomAuthConfigListSchema.exactOptional().openapi({
      description: 'Contains information required for custom authentication.',
    }),
  })
  .openapi({
    description:
      'Contains information about the authentication config that the connector supports.',
    required: [],
  })
  .openapi('AuthenticationConfig')

const ConnectorRuntimeSettingDataTypeSchema = z
  .string()
  .regex(/\S+/)
  .max(256)
  .openapi('ConnectorRuntimeSettingDataType')

const ConnectorRuntimeSettingScopeSchema = z
  .string()
  .regex(/\S+/)
  .max(256)
  .openapi('ConnectorRuntimeSettingScope')

const ConnectorSuppliedValueOptionListSchema = z
  .array(ConnectorSuppliedValueSchema)
  .openapi('ConnectorSuppliedValueOptionList')

const ConnectorRuntimeSettingSchema = z
  .object({
    key: KeySchema.exactOptional().openapi({
      description: 'Contains value information about the connector runtime setting.',
    }),
    dataType: ConnectorRuntimeSettingDataTypeSchema.exactOptional().openapi({
      description: 'Data type of the connector runtime setting.',
    }),
    isRequired: BooleanSchema.exactOptional().openapi({
      description: 'Indicates whether this connector runtime setting is required.',
    }),
    label: LabelSchema.exactOptional().openapi({
      description: 'A label used for connector runtime setting.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: 'A description about the connector runtime setting.',
    }),
    scope: ConnectorRuntimeSettingScopeSchema.exactOptional().openapi({
      description: 'Indicates the scope of the connector runtime setting.',
    }),
    connectorSuppliedValueOptions: ConnectorSuppliedValueOptionListSchema.exactOptional().openapi({
      description:
        'Contains default values for the connector runtime setting that are supplied by the connector.',
    }),
  })
  .openapi({
    description:
      'Contains information about the connector runtime settings that are required for flow execution.',
    required: [],
  })
  .openapi('ConnectorRuntimeSetting')

const ConnectorRuntimeSettingListSchema = z
  .array(ConnectorRuntimeSettingSchema)
  .openapi('ConnectorRuntimeSettingList')

const SupportedApiVersionSchema = z.string().regex(/\S+/).max(256).openapi('SupportedApiVersion')

const SupportedApiVersionListSchema = z
  .array(SupportedApiVersionSchema)
  .openapi('SupportedApiVersionList')

const OperatorsSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'CONTAINS',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('Operators')

const SupportedOperatorListSchema = z.array(OperatorsSchema).openapi('SupportedOperatorList')

const WriteOperationTypeSchema = z
  .enum(['INSERT', 'UPSERT', 'UPDATE', 'DELETE'])
  .openapi({
    description:
      ' The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. ',
  })
  .openapi('WriteOperationType')

const SupportedWriteOperationListSchema = z
  .array(WriteOperationTypeSchema)
  .openapi('SupportedWriteOperationList')

const ConnectorProvisioningTypeSchema = z
  .literal('LAMBDA')
  .openapi({ description: 'The type of provisioning that the connector supports, such as Lambda.' })
  .openapi('ConnectorProvisioningType')

const LambdaConnectorProvisioningConfigSchema = z
  .object({
    lambdaArn: ARNSchema.openapi({ description: 'Lambda ARN of the connector being registered.' }),
  })
  .openapi({
    required: ['lambdaArn'],
    description:
      'Contains information about the configuration of the lambda which is being registered as the connector.',
  })
  .openapi('LambdaConnectorProvisioningConfig')

const ConnectorProvisioningConfigSchema = z
  .object({
    lambda: LambdaConnectorProvisioningConfigSchema.exactOptional().openapi({
      description:
        'Contains information about the configuration of the lambda which is being registered as the connector.',
    }),
  })
  .openapi({
    description: 'Contains information about the configuration of the connector being registered.',
    required: [],
  })
  .openapi('ConnectorProvisioningConfig')

const LogoURLSchema = z
  .string()
  .regex(/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('LogoURL')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const RegisteredBySchema = z.string().regex(/\S+/).max(512).openapi('RegisteredBy')

const ConnectorConfigurationSchema = z
  .object({
    canUseAsSource: BooleanSchema.exactOptional().openapi({
      description: ' Specifies whether the connector can be used as a source. ',
    }),
    canUseAsDestination: BooleanSchema.exactOptional().openapi({
      description: ' Specifies whether the connector can be used as a destination. ',
    }),
    supportedDestinationConnectors: ConnectorTypeListSchema.exactOptional().openapi({
      description: ' Lists the connectors that are available for use as destinations. ',
    }),
    supportedSchedulingFrequencies: SchedulingFrequencyTypeListSchema.exactOptional().openapi({
      description: ' Specifies the supported flow frequency for that connector. ',
    }),
    isPrivateLinkEnabled: BooleanSchema.exactOptional().openapi({
      description: ' Specifies if PrivateLink is enabled for that connector. ',
    }),
    isPrivateLinkEndpointUrlRequired: BooleanSchema.exactOptional().openapi({
      description: ' Specifies if a PrivateLink endpoint URL is required. ',
    }),
    supportedTriggerTypes: TriggerTypeListSchema.exactOptional().openapi({
      description: ' Specifies the supported trigger types for the flow. ',
    }),
    connectorMetadata: ConnectorMetadataSchema.exactOptional().openapi({
      description:
        ' Specifies connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. ',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: 'The connector type.',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description: 'The label used for registering the connector.',
    }),
    connectorDescription: ConnectorDescriptionSchema.exactOptional().openapi({
      description: 'A description about the connector.',
    }),
    connectorOwner: ConnectorOwnerSchema.exactOptional().openapi({
      description: 'The owner who developed the connector.',
    }),
    connectorName: ConnectorNameSchema.exactOptional().openapi({
      description: 'The connector name.',
    }),
    connectorVersion: ConnectorVersionSchema.exactOptional().openapi({
      description: 'The connector version.',
    }),
    connectorArn: ARNSchema.exactOptional().openapi({
      description: 'The Amazon Resource Name (ARN) for the registered connector.',
    }),
    connectorModes: ConnectorModeListSchema.exactOptional().openapi({
      description: 'The connection modes that the connector supports.',
    }),
    authenticationConfig: AuthenticationConfigSchema.exactOptional().openapi({
      description: 'The authentication config required for the connector.',
    }),
    connectorRuntimeSettings: ConnectorRuntimeSettingListSchema.exactOptional().openapi({
      description: 'The required connector runtime settings.',
    }),
    supportedApiVersions: SupportedApiVersionListSchema.exactOptional().openapi({
      description: 'A list of API versions that are supported by the connector.',
    }),
    supportedOperators: SupportedOperatorListSchema.exactOptional().openapi({
      description: 'A list of operators supported by the connector.',
    }),
    supportedWriteOperations: SupportedWriteOperationListSchema.exactOptional().openapi({
      description: 'A list of write operations supported by the connector.',
    }),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.exactOptional().openapi({
      description: 'The provisioning type used to register the connector.',
    }),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.exactOptional().openapi({
      description: 'The configuration required for registering the connector.',
    }),
    logoURL: LogoURLSchema.exactOptional().openapi({ description: 'Logo URL of the connector.' }),
    registeredAt: DateSchema.exactOptional().openapi({
      description: 'The date on which the connector was registered.',
    }),
    registeredBy: RegisteredBySchema.exactOptional().openapi({
      description: 'Information about who registered the connector.',
    }),
  })
  .openapi({
    description: ' The configuration settings related to a given connector. ',
    required: [],
  })
  .openapi('ConnectorConfiguration')

type DescribeConnectorResponseType = {
  connectorConfiguration?: z.infer<typeof ConnectorConfigurationSchema>
}

type ConnectorConfigurationsMapType = {
  [key: string]: z.infer<typeof ConnectorConfigurationSchema>
}

const ConnectorConfigurationsMapSchema: z.ZodType<ConnectorConfigurationsMapType> = z
  .record(z.string(), ConnectorConfigurationSchema)
  .openapi('ConnectorConfigurationsMap')

const ApplicationTypeSchema = z.string().regex(/\S+/).max(512).openapi('ApplicationType')

const ConnectorDetailSchema = z
  .object({
    connectorDescription: ConnectorDescriptionSchema.exactOptional().openapi({
      description: 'A description about the registered connector.',
    }),
    connectorName: ConnectorNameSchema.exactOptional().openapi({
      description: 'The name of the connector.',
    }),
    connectorOwner: ConnectorOwnerSchema.exactOptional().openapi({
      description: 'The owner of the connector.',
    }),
    connectorVersion: ConnectorVersionSchema.exactOptional().openapi({
      description: 'The connector version.',
    }),
    applicationType: ApplicationTypeSchema.exactOptional().openapi({
      description: 'The application type of the connector.',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: 'The connector type.',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description: 'A label used for the connector.',
    }),
    registeredAt: DateSchema.exactOptional().openapi({
      description: 'The time at which the connector was registered.',
    }),
    registeredBy: RegisteredBySchema.exactOptional().openapi({
      description: 'The user who registered the connector.',
    }),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.exactOptional().openapi({
      description: 'The provisioning type that the connector uses.',
    }),
    connectorModes: ConnectorModeListSchema.exactOptional().openapi({
      description: 'The connection mode that the connector supports.',
    }),
  })
  .openapi({ description: 'Information about the registered connector.', required: [] })
  .openapi('ConnectorDetail')

const ConnectorListSchema = z.array(ConnectorDetailSchema).openapi('ConnectorList')

const NextTokenSchema = z.string().regex(/\S+/).max(2048).openapi('NextToken')

type DescribeConnectorsResponseType = {
  connectorConfigurations?: z.infer<typeof ConnectorConfigurationsMapSchema>
  connectors?: z.infer<typeof ConnectorListSchema>
  nextToken?: z.infer<typeof NextTokenSchema>
}

const FlowArnSchema = z
  .string()
  .regex(/arn:aws:appflow:.*:[0-9]+:.*/)
  .max(512)
  .openapi('FlowArn')

const FlowDescriptionSchema = z
  .string()
  .regex(/[\w!@#\-.?,\s]*/)
  .max(2048)
  .openapi('FlowDescription')

const FlowNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9][\w!@#.-]+/)
  .max(256)
  .openapi('FlowName')

const KMSArnSchema = z
  .string()
  .regex(/arn:aws:kms:.*:[0-9]+:.*/)
  .min(20)
  .max(2048)
  .openapi('KMSArn')

const FlowStatusSchema = z
  .enum(['Active', 'Deprecated', 'Deleted', 'Draft', 'Errored', 'Suspended'])
  .openapi('FlowStatus')

const FlowStatusMessageSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(2048)
  .openapi('FlowStatusMessage')

const ApiVersionSchema = z.string().regex(/\S+/).max(256).openapi('ApiVersion')

const ConnectorProfileNameSchema = z
  .string()
  .regex(/[\w\/!@#+=.-]+/)
  .max(256)
  .openapi('ConnectorProfileName')

const ObjectSchema = z.string().regex(/\S+/).max(512).openapi('Object')

const AmplitudeSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Amplitude flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Amplitude is being used as a source. ',
  })
  .openapi('AmplitudeSourceProperties')

const DatadogSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Datadog flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Datadog is being used as a source. ',
  })
  .openapi('DatadogSourceProperties')

const DynatraceSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Dynatrace flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Dynatrace is being used as a source. ',
  })
  .openapi('DynatraceSourceProperties')

const GoogleAnalyticsSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Google Analytics flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Google Analytics is being used as a source. ',
  })
  .openapi('GoogleAnalyticsSourceProperties')

const InforNexusSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Infor Nexus flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Infor Nexus is being used as a source. ',
  })
  .openapi('InforNexusSourceProperties')

const MarketoSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Marketo flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Marketo is being used as a source. ',
  })
  .openapi('MarketoSourceProperties')

const BucketNameSchema = z.string().regex(/\S+/).min(3).max(63).openapi('BucketName')

const BucketPrefixSchema = z.string().regex(/.*/).max(512).openapi('BucketPrefix')

const S3InputFileTypeSchema = z.enum(['CSV', 'JSON']).openapi('S3InputFileType')

const S3InputFormatConfigSchema = z
  .object({
    s3InputFileType: S3InputFileTypeSchema.exactOptional().openapi({
      description: ' The file type that Amazon AppFlow gets from your Amazon S3 bucket. ',
    }),
  })
  .openapi({
    description:
      ' When you use Amazon S3 as the source, the configuration format that you provide the flow input data. ',
    required: [],
  })
  .openapi('S3InputFormatConfig')

const S3SourcePropertiesSchema = z
  .object({
    bucketName: BucketNameSchema.openapi({
      description: ' The Amazon S3 bucket name where the source files are stored. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the Amazon S3 bucket in which the source files are stored. ',
    }),
    s3InputFormatConfig: S3InputFormatConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['bucketName'],
    description:
      ' The properties that are applied when Amazon S3 is being used as the flow source. ',
  })
  .openapi('S3SourceProperties')

const SalesforceSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Salesforce flow source. ',
    }),
    enableDynamicFieldUpdate: BooleanSchema.exactOptional().openapi({
      description:
        ' The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow. ',
    }),
    includeDeletedRecords: BooleanSchema.exactOptional().openapi({
      description: ' Indicates whether Amazon AppFlow includes deleted files in the flow run. ',
    }),
    dataTransferApi: SalesforceDataTransferApiSchema.exactOptional().openapi({
      description:
        "<p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data from Salesforce.</p> <dl> <dt>AUTOMATIC</dt> <dd> <p>The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers from Salesforce. If your flow transfers fewer than 1,000,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p> <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900,000 records, and it might use Bulk API 2.0 on the next day to transfer 1,100,000 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.</p> <p>By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.</p> </dd> <dt>BULKV2</dt> <dd> <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.</p> <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p> </dd> <dt>REST_SYNC</dt> <dd> <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail wituh a timed out error.</p> </dd> </dl>",
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Salesforce is being used as a source. ',
  })
  .openapi('SalesforceSourceProperties')

const ServiceNowSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the ServiceNow flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when ServiceNow is being used as a source. ',
  })
  .openapi('ServiceNowSourceProperties')

const SingularSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Singular flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Singular is being used as a source. ',
  })
  .openapi('SingularSourceProperties')

const SlackSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Slack flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Slack is being used as a source. ',
  })
  .openapi('SlackSourceProperties')

const TrendmicroSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Trend Micro flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when using Trend Micro as a flow source. ',
  })
  .openapi('TrendmicroSourceProperties')

const DocumentTypeSchema = z
  .string()
  .regex(/[\s\w_-]+/)
  .max(512)
  .openapi('DocumentType')

const VeevaSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Veeva flow source. ',
    }),
    documentType: DocumentTypeSchema.exactOptional().openapi({
      description: 'The document type specified in the Veeva document extract flow.',
    }),
    includeSourceFiles: BooleanSchema.exactOptional().openapi({
      description: 'Boolean value to include source files in Veeva document extract flow.',
    }),
    includeRenditions: BooleanSchema.exactOptional().openapi({
      description: 'Boolean value to include file renditions in Veeva document extract flow.',
    }),
    includeAllVersions: BooleanSchema.exactOptional().openapi({
      description: 'Boolean value to include All Versions of files in Veeva document extract flow.',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when using Veeva as a flow source. ',
  })
  .openapi('VeevaSourceProperties')

const ZendeskSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Zendesk flow source. ',
    }),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when using Zendesk as a flow source. ',
  })
  .openapi('ZendeskSourceProperties')

const SAPODataSourcePropertiesSchema = z
  .object({
    objectPath: ObjectSchema.exactOptional().openapi({
      description: ' The object path specified in the SAPOData flow source. ',
    }),
  })
  .openapi({
    description: ' The properties that are applied when using SAPOData as a flow source. ',
    required: [],
  })
  .openapi('SAPODataSourceProperties')

const EntityNameSchema = z.string().regex(/\S+/).max(1024).openapi('EntityName')

const CustomPropertyValueSchema = z.string().regex(/\S+/).max(2048).openapi('CustomPropertyValue')

const CustomPropertiesSchema = z
  .record(z.string(), CustomPropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('CustomProperties')

const CustomConnectorSourcePropertiesSchema = z
  .object({
    entityName: EntityNameSchema.openapi({
      description: 'The entity specified in the custom connector as a source in the flow.',
    }),
    customProperties: CustomPropertiesSchema.exactOptional().openapi({
      description: 'Custom properties that are required to use the custom connector as a source.',
    }),
  })
  .openapi({
    required: ['entityName'],
    description:
      'The properties that are applied when the custom connector is being used as a source.',
  })
  .openapi('CustomConnectorSourceProperties')

const PardotSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: 'The object specified in the Salesforce Pardot flow source.',
    }),
  })
  .openapi({
    required: ['object'],
    description:
      'The properties that are applied when Salesforce Pardot is being used as a source.',
  })
  .openapi('PardotSourceProperties')

const SourceConnectorPropertiesSchema = z
  .object({
    Amplitude: AmplitudeSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Amplitude. ',
    }),
    Datadog: DatadogSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Datadog. ',
    }),
    Dynatrace: DynatraceSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Dynatrace. ',
    }),
    GoogleAnalytics: GoogleAnalyticsSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Google Analytics. ',
    }),
    InforNexus: InforNexusSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Infor Nexus. ',
    }),
    Marketo: MarketoSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Marketo. ',
    }),
    S3: S3SourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Amazon S3. ',
    }),
    Salesforce: SalesforceSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Salesforce. ',
    }),
    ServiceNow: ServiceNowSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying ServiceNow. ',
    }),
    Singular: SingularSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Singular. ',
    }),
    Slack: SlackSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Slack. ',
    }),
    Trendmicro: TrendmicroSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Trend Micro. ',
    }),
    Veeva: VeevaSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Veeva. ',
    }),
    Zendesk: ZendeskSourcePropertiesSchema.exactOptional().openapi({
      description: ' Specifies the information that is required for querying Zendesk. ',
    }),
    SAPOData: SAPODataSourcePropertiesSchema.exactOptional(),
    CustomConnector: CustomConnectorSourcePropertiesSchema.exactOptional(),
    Pardot: PardotSourcePropertiesSchema.exactOptional().openapi({
      description: 'Specifies the information that is required for querying Salesforce Pardot.',
    }),
  })
  .openapi({
    description: ' Specifies the information that is required to query a particular connector. ',
    required: [],
  })
  .openapi('SourceConnectorProperties')

const DatetimeTypeFieldNameSchema = z.string().regex(/.*/).max(256).openapi('DatetimeTypeFieldName')

const IncrementalPullConfigSchema = z
  .object({
    datetimeTypeFieldName: DatetimeTypeFieldNameSchema.exactOptional().openapi({
      description:
        ' A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source. ',
    }),
  })
  .openapi({
    description:
      ' Specifies the configuration used when importing incremental records from the source. ',
    required: [],
  })
  .openapi('IncrementalPullConfig')

const SourceFlowConfigSchema = z
  .object({
    connectorType: ConnectorTypeSchema.openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    apiVersion: ApiVersionSchema.exactOptional().openapi({
      description: "The API version of the connector when it's used as a source in the flow.",
    }),
    connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
    }),
    sourceConnectorProperties: SourceConnectorPropertiesSchema.openapi({
      description:
        ' Specifies the information that is required to query a particular source connector. ',
    }),
    incrementalPullConfig: IncrementalPullConfigSchema.exactOptional().openapi({
      description:
        ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
    }),
  })
  .openapi({
    required: ['connectorType', 'sourceConnectorProperties'],
    description:
      ' Contains information about the configuration of the source connector used in the flow. ',
  })
  .openapi('SourceFlowConfig')

const ErrorHandlingConfigSchema = z
  .object({
    failOnFirstDestinationError: BooleanSchema.exactOptional().openapi({
      description:
        ' Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description: ' Specifies the Amazon S3 bucket prefix. ',
    }),
    bucketName: BucketNameSchema.exactOptional().openapi({
      description: ' Specifies the name of the Amazon S3 bucket. ',
    }),
  })
  .openapi({
    description:
      ' The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
    required: [],
  })
  .openapi('ErrorHandlingConfig')

const RedshiftDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Amazon Redshift flow destination. ',
    }),
    intermediateBucketName: BucketNameSchema.openapi({
      description:
        ' The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the bucket in which Amazon AppFlow places the destination files. ',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional().openapi({
      description:
        ' The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
    }),
  })
  .openapi({
    required: ['object', 'intermediateBucketName'],
    description:
      ' The properties that are applied when Amazon Redshift is being used as a destination. ',
  })
  .openapi('RedshiftDestinationProperties')

const FileTypeSchema = z.enum(['CSV', 'JSON', 'PARQUET']).openapi('FileType')

const PrefixTypeSchema = z.enum(['FILENAME', 'PATH', 'PATH_AND_FILENAME']).openapi('PrefixType')

const PrefixFormatSchema = z
  .enum(['YEAR', 'MONTH', 'DAY', 'HOUR', 'MINUTE'])
  .openapi('PrefixFormat')

const PathPrefixSchema = z.enum(['EXECUTION_ID', 'SCHEMA_VERSION']).openapi('PathPrefix')

const PathPrefixHierarchySchema = z.array(PathPrefixSchema).openapi('PathPrefixHierarchy')

const PrefixConfigSchema = z
  .object({
    prefixType: PrefixTypeSchema.exactOptional().openapi({
      description:
        'Determines the format of the prefix, and whether it applies to the file name, file path, or both. ',
    }),
    prefixFormat: PrefixFormatSchema.exactOptional().openapi({
      description:
        "Determines the level of granularity for the date and time that's included in the prefix. ",
    }),
    pathPrefixHierarchy: PathPrefixHierarchySchema.exactOptional().openapi({
      description:
        '<p>Specifies whether the destination file path includes either or both of the following elements:</p> <dl> <dt>EXECUTION_ID</dt> <dd> <p>The ID that Amazon AppFlow assigns to the flow run.</p> </dd> <dt>SCHEMA_VERSION</dt> <dd> <p>The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:</p> <ul> <li> <p>Source-to-destination field mappings</p> </li> <li> <p>Field data types</p> </li> <li> <p>Partition keys</p> </li> </ul> </dd> </dl>',
    }),
  })
  .openapi({
    description:
      'Specifies elements that Amazon AppFlow includes in the file and folder names in the flow destination.',
    required: [],
  })
  .openapi('PrefixConfig')

const AggregationTypeSchema = z.enum(['None', 'SingleFile']).openapi('AggregationType')

const LongSchema = z.int().openapi('Long')

const AggregationConfigSchema = z
  .object({
    aggregationType: AggregationTypeSchema.exactOptional().openapi({
      description:
        ' Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated. ',
    }),
    targetFileSize: LongSchema.exactOptional().openapi({
      description:
        'The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. For each file, Amazon AppFlow attempts to achieve the size that you specify. The actual file sizes might differ from this target based on the number and size of the records that each file contains.',
    }),
  })
  .openapi({
    description:
      ' The aggregation settings that you can use to customize the output format of your flow data. ',
    required: [],
  })
  .openapi('AggregationConfig')

const JavaBooleanSchema = z.boolean().openapi('JavaBoolean')

const S3OutputFormatConfigSchema = z
  .object({
    fileType: FileTypeSchema.exactOptional().openapi({
      description: ' Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket. ',
    }),
    prefixConfig: PrefixConfigSchema.exactOptional().openapi({
      description:
        ' Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. ',
    }),
    aggregationConfig: AggregationConfigSchema.exactOptional(),
    preserveSourceDataTyping: JavaBooleanSchema.exactOptional().openapi({
      description:
        '<p>If your file output format is Parquet, use this parameter to set whether Amazon AppFlow preserves the data types in your source data when it writes the output to Amazon S3. </p> <ul> <li> <p> <code>true</code>: Amazon AppFlow preserves the data types when it writes to Amazon S3. For example, an integer or <code>1</code> in your source data is still an integer in your output.</p> </li> <li> <p> <code>false</code>: Amazon AppFlow converts all of the source data into strings when it writes to Amazon S3. For example, an integer of <code>1</code> in your source data becomes the string <code>"1"</code> in the output.</p> </li> </ul>',
    }),
  })
  .openapi({
    description:
      ' The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. ',
    required: [],
  })
  .openapi('S3OutputFormatConfig')

const S3DestinationPropertiesSchema = z
  .object({
    bucketName: BucketNameSchema.openapi({
      description:
        ' The Amazon S3 bucket name in which Amazon AppFlow places the transferred data. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
    }),
    s3OutputFormatConfig: S3OutputFormatConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['bucketName'],
    description: ' The properties that are applied when Amazon S3 is used as a destination. ',
  })
  .openapi('S3DestinationProperties')

const NameSchema = z.string().regex(/\S+/).max(128).openapi('Name')

const IdFieldNameListSchema = z
  .array(NameSchema)
  .min(0)
  .openapi({
    description:
      ' A list of field names that can be used as an ID field when performing a write operation. ',
  })
  .openapi('IdFieldNameList')

const SalesforceDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Salesforce flow destination. ',
    }),
    idFieldNames: IdFieldNameListSchema.exactOptional().openapi({
      description:
        ' The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update or delete. ',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional().openapi({
      description:
        ' The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
    }),
    writeOperationType: WriteOperationTypeSchema.exactOptional().openapi({
      description:
        ' This specifies the type of write operation to be performed in Salesforce. When the value is <code>UPSERT</code>, then <code>idFieldNames</code> is required. ',
    }),
    dataTransferApi: SalesforceDataTransferApiSchema.exactOptional().openapi({
      description:
        "<p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.</p> <dl> <dt>AUTOMATIC</dt> <dd> <p>The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p> <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to transfer 1,100 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.</p> <p>By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.</p> </dd> <dt>BULKV2</dt> <dd> <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.</p> <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p> </dd> <dt>REST_SYNC</dt> <dd> <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail with a timed out error.</p> </dd> </dl>",
    }),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Salesforce is being used as a destination. ',
  })
  .openapi('SalesforceDestinationProperties')

const SnowflakeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Snowflake flow destination. ',
    }),
    intermediateBucketName: BucketNameSchema.openapi({
      description:
        ' The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional().openapi({
      description:
        ' The settings that determine how Amazon AppFlow handles an error when placing data in the Snowflake destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
    }),
  })
  .openapi({
    required: ['object', 'intermediateBucketName'],
    description: ' The properties that are applied when Snowflake is being used as a destination. ',
  })
  .openapi('SnowflakeDestinationProperties')

const EventBridgeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Amazon EventBridge flow destination. ',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Amazon EventBridge is being used as a destination. ',
  })
  .openapi('EventBridgeDestinationProperties')

const LookoutMetricsDestinationPropertiesSchema = z
  .looseObject({})
  .openapi({
    description:
      ' The properties that are applied when Amazon Lookout for Metrics is used as a destination. ',
  })
  .openapi('LookoutMetricsDestinationProperties')

const UpsolverBucketNameSchema = z
  .string()
  .regex(/^(upsolver-appflow)\S*/)
  .min(16)
  .max(63)
  .openapi('UpsolverBucketName')

const UpsolverS3OutputFormatConfigSchema = z
  .object({
    fileType: FileTypeSchema.exactOptional().openapi({
      description:
        ' Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket. ',
    }),
    prefixConfig: PrefixConfigSchema,
    aggregationConfig: AggregationConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['prefixConfig'],
    description:
      ' The configuration that determines how Amazon AppFlow formats the flow output data when Upsolver is used as the destination. ',
  })
  .openapi('UpsolverS3OutputFormatConfig')

const UpsolverDestinationPropertiesSchema = z
  .object({
    bucketName: UpsolverBucketNameSchema.openapi({
      description:
        ' The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files. ',
    }),
    s3OutputFormatConfig: UpsolverS3OutputFormatConfigSchema.openapi({
      description:
        ' The configuration that determines how data is formatted when Upsolver is used as the flow destination. ',
    }),
  })
  .openapi({
    required: ['bucketName', 's3OutputFormatConfig'],
    description: ' The properties that are applied when Upsolver is used as a destination. ',
  })
  .openapi('UpsolverDestinationProperties')

const HoneycodeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: ' The object specified in the Amazon Honeycode flow destination. ',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Amazon Honeycode is used as a destination. ',
  })
  .openapi('HoneycodeDestinationProperties')

const DomainNameSchema = z.string().regex(/\S+/).max(64).openapi('DomainName')

const ObjectTypeNameSchema = z.string().regex(/\S+/).max(255).openapi('ObjectTypeName')

const CustomerProfilesDestinationPropertiesSchema = z
  .object({
    domainName: DomainNameSchema.openapi({
      description: ' The unique name of the Amazon Connect Customer Profiles domain. ',
    }),
    objectTypeName: ObjectTypeNameSchema.exactOptional().openapi({
      description:
        ' The object specified in the Amazon Connect Customer Profiles flow destination. ',
    }),
  })
  .openapi({
    required: ['domainName'],
    description:
      ' The properties that are applied when Amazon Connect Customer Profiles is used as a destination. ',
  })
  .openapi('CustomerProfilesDestinationProperties')

const ZendeskDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: 'The object specified in the Zendesk flow destination.',
    }),
    idFieldNames: IdFieldNameListSchema.exactOptional(),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
    writeOperationType: WriteOperationTypeSchema.exactOptional(),
  })
  .openapi({
    required: ['object'],
    description: 'The properties that are applied when Zendesk is used as a destination.',
  })
  .openapi('ZendeskDestinationProperties')

const MarketoDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.openapi({
      description: 'The object specified in the Marketo flow destination.',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['object'],
    description:
      'The properties that Amazon AppFlow applies when you use Marketo as a flow destination.',
  })
  .openapi('MarketoDestinationProperties')

const CustomConnectorDestinationPropertiesSchema = z
  .object({
    entityName: EntityNameSchema.openapi({
      description: 'The entity specified in the custom connector as a destination in the flow.',
    }),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional().openapi({
      description:
        'The settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination.',
    }),
    writeOperationType: WriteOperationTypeSchema.exactOptional().openapi({
      description:
        "Specifies the type of write operation to be performed in the custom connector when it's used as destination.",
    }),
    idFieldNames: IdFieldNameListSchema.exactOptional().openapi({
      description:
        'The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.',
    }),
    customProperties: CustomPropertiesSchema.exactOptional().openapi({
      description:
        "The custom properties that are specific to the connector when it's used as a destination in the flow.",
    }),
  })
  .openapi({
    required: ['entityName'],
    description:
      'The properties that are applied when the custom connector is being used as a destination.',
  })
  .openapi('CustomConnectorDestinationProperties')

const SuccessResponseHandlingConfigSchema = z
  .object({
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description: 'The Amazon S3 bucket prefix.',
    }),
    bucketName: BucketNameSchema.exactOptional().openapi({
      description: 'The name of the Amazon S3 bucket.',
    }),
  })
  .openapi({
    description:
      '<p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p>',
    required: [],
  })
  .openapi('SuccessResponseHandlingConfig')

const SAPODataDestinationPropertiesSchema = z
  .object({
    objectPath: ObjectSchema.openapi({
      description: 'The object path specified in the SAPOData flow destination.',
    }),
    successResponseHandlingConfig: SuccessResponseHandlingConfigSchema.exactOptional().openapi({
      description:
        '<p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from a destination connector upon a successful insert operation.</p>',
    }),
    idFieldNames: IdFieldNameListSchema.exactOptional(),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
    writeOperationType: WriteOperationTypeSchema.exactOptional(),
  })
  .openapi({
    required: ['objectPath'],
    description: 'The properties that are applied when using SAPOData as a flow destination',
  })
  .openapi('SAPODataDestinationProperties')

const DestinationConnectorPropertiesSchema = z
  .object({
    Redshift: RedshiftDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon Redshift. ',
    }),
    S3: S3DestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon S3. ',
    }),
    Salesforce: SalesforceDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Salesforce. ',
    }),
    Snowflake: SnowflakeDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Snowflake. ',
    }),
    EventBridge: EventBridgeDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon EventBridge. ',
    }),
    LookoutMetrics: LookoutMetricsDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon Lookout for Metrics. ',
    }),
    Upsolver: UpsolverDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Upsolver. ',
    }),
    Honeycode: HoneycodeDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon Honeycode. ',
    }),
    CustomerProfiles: CustomerProfilesDestinationPropertiesSchema.exactOptional().openapi({
      description: ' The properties required to query Amazon Connect Customer Profiles. ',
    }),
    Zendesk: ZendeskDestinationPropertiesSchema.exactOptional().openapi({
      description: 'The properties required to query Zendesk.',
    }),
    Marketo: MarketoDestinationPropertiesSchema.exactOptional().openapi({
      description: 'The properties required to query Marketo.',
    }),
    CustomConnector: CustomConnectorDestinationPropertiesSchema.exactOptional().openapi({
      description: 'The properties that are required to query the custom Connector.',
    }),
    SAPOData: SAPODataDestinationPropertiesSchema.exactOptional().openapi({
      description: 'The properties required to query SAPOData.',
    }),
  })
  .openapi({
    description: ' This stores the information that is required to query a particular connector. ',
    required: [],
  })
  .openapi('DestinationConnectorProperties')

const DestinationFlowConfigSchema = z
  .object({
    connectorType: ConnectorTypeSchema.openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    apiVersion: ApiVersionSchema.exactOptional().openapi({
      description: 'The API version that the destination connector uses.',
    }),
    connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
    }),
    destinationConnectorProperties: DestinationConnectorPropertiesSchema.openapi({
      description:
        ' This stores the information that is required to query a particular connector. ',
    }),
  })
  .openapi({
    required: ['connectorType', 'destinationConnectorProperties'],
    description:
      ' Contains information about the configuration of destination connectors present in the flow. ',
  })
  .openapi('DestinationFlowConfig')

const DestinationFlowConfigListSchema = z
  .array(DestinationFlowConfigSchema)
  .openapi('DestinationFlowConfigList')

const MostRecentExecutionMessageSchema = z
  .string()
  .regex(/[\w!@#\-.?,\s]*/)
  .max(2048)
  .openapi('MostRecentExecutionMessage')

const ExecutionStatusSchema = z
  .enum(['InProgress', 'Successful', 'Error'])
  .openapi('ExecutionStatus')

const ExecutionDetailsSchema = z
  .object({
    mostRecentExecutionMessage: MostRecentExecutionMessageSchema.exactOptional().openapi({
      description: ' Describes the details of the most recent flow run. ',
    }),
    mostRecentExecutionTime: DateSchema.exactOptional().openapi({
      description: ' Specifies the time of the most recent flow run. ',
    }),
    mostRecentExecutionStatus: ExecutionStatusSchema.exactOptional().openapi({
      description: ' Specifies the status of the most recent flow run. ',
    }),
  })
  .openapi({
    description:
      ' Describes the details of the flow run, including the timestamp, status, and message. ',
    required: [],
  })
  .openapi('ExecutionDetails')

const ScheduleExpressionSchema = z.string().regex(/.*/).max(256).openapi('ScheduleExpression')

const DataPullModeSchema = z.enum(['Incremental', 'Complete']).openapi('DataPullMode')

const TimezoneSchema = z.string().regex(/.*/).max(256).openapi('Timezone')

const ScheduleOffsetSchema = z.int().min(0).max(36000).openapi('ScheduleOffset')

const FlowErrorDeactivationThresholdSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('FlowErrorDeactivationThreshold')

const ScheduledTriggerPropertiesSchema = z
  .object({
    scheduleExpression: ScheduleExpressionSchema.openapi({
      description:
        ' The scheduling expression that determines the rate at which the schedule will run, for example <code>rate(5minutes)</code>. ',
    }),
    dataPullMode: DataPullModeSchema.exactOptional().openapi({
      description:
        ' Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run. ',
    }),
    scheduleStartTime: DateSchema.exactOptional().openapi({
      description:
        'The time at which the scheduled flow starts. The time is formatted as a timestamp that follows the ISO 8601 standard, such as <code>2022-04-26T13:00:00-07:00</code>.',
    }),
    scheduleEndTime: DateSchema.exactOptional().openapi({
      description:
        'The time at which the scheduled flow ends. The time is formatted as a timestamp that follows the ISO 8601 standard, such as <code>2022-04-27T13:00:00-07:00</code>.',
    }),
    timezone: TimezoneSchema.exactOptional().openapi({
      description:
        "<p>Specifies the time zone used when referring to the dates and times of a scheduled flow, such as <code>America/New_York</code>. This time zone is only a descriptive label. It doesn't affect how Amazon AppFlow interprets the timestamps that you specify to schedule the flow.</p> <p>If you want to schedule a flow by using times in a particular time zone, indicate the time zone as a UTC offset in your timestamps. For example, the UTC offsets for the <code>America/New_York</code> timezone are <code>-04:00</code> EDT and <code>-05:00 EST</code>.</p>",
    }),
    scheduleOffset: ScheduleOffsetSchema.exactOptional().openapi({
      description:
        ' Specifies the optional offset that is added to the time interval for a schedule-triggered flow. ',
    }),
    firstExecutionFrom: DateSchema.exactOptional().openapi({
      description:
        ' Specifies the date range for the records to import from the connector in the first flow run. ',
    }),
    flowErrorDeactivationThreshold: FlowErrorDeactivationThresholdSchema.exactOptional().openapi({
      description:
        'Defines how many times a scheduled flow fails consecutively before Amazon AppFlow deactivates it.',
    }),
  })
  .openapi({
    required: ['scheduleExpression'],
    description:
      ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
  })
  .openapi('ScheduledTriggerProperties')

const TriggerPropertiesSchema = z
  .object({
    Scheduled: ScheduledTriggerPropertiesSchema.exactOptional().openapi({
      description:
        ' Specifies the configuration details of a schedule-triggered flow as defined by the user. ',
    }),
  })
  .openapi({
    description:
      ' Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
    required: [],
  })
  .openapi('TriggerProperties')

const TriggerConfigSchema = z
  .object({
    triggerType: TriggerTypeSchema.openapi({
      description:
        ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
    }),
    triggerProperties: TriggerPropertiesSchema.exactOptional().openapi({
      description:
        ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
    }),
  })
  .openapi({
    required: ['triggerType'],
    description:
      ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
  })
  .openapi('TriggerConfig')

const StringSchema = z.string().regex(/.*/).max(2048).openapi('String')

const SourceFieldsSchema = z.array(StringSchema).openapi('SourceFields')

const AmplitudeConnectorOperatorSchema = z.literal('BETWEEN').openapi('AmplitudeConnectorOperator')

const DatadogConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'BETWEEN',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('DatadogConnectorOperator')

const DynatraceConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'BETWEEN',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('DynatraceConnectorOperator')

const GoogleAnalyticsConnectorOperatorSchema = z
  .enum(['PROJECTION', 'BETWEEN'])
  .openapi('GoogleAnalyticsConnectorOperator')

const InforNexusConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'BETWEEN',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('InforNexusConnectorOperator')

const MarketoConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('MarketoConnectorOperator')

const S3ConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('S3ConnectorOperator')

const SalesforceConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'CONTAINS',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('SalesforceConnectorOperator')

const ServiceNowConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'CONTAINS',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('ServiceNowConnectorOperator')

const SingularConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('SingularConnectorOperator')

const SlackConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('SlackConnectorOperator')

const TrendmicroConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('TrendmicroConnectorOperator')

const VeevaConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'CONTAINS',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('VeevaConnectorOperator')

const ZendeskConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'GREATER_THAN',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('ZendeskConnectorOperator')

const SAPODataConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'CONTAINS',
    'GREATER_THAN',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('SAPODataConnectorOperator')

const OperatorSchema = z
  .enum([
    'PROJECTION',
    'LESS_THAN',
    'GREATER_THAN',
    'CONTAINS',
    'BETWEEN',
    'LESS_THAN_OR_EQUAL_TO',
    'GREATER_THAN_OR_EQUAL_TO',
    'EQUAL_TO',
    'NOT_EQUAL_TO',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
    'NO_OP',
  ])
  .openapi('Operator')

const PardotConnectorOperatorSchema = z
  .enum([
    'PROJECTION',
    'EQUAL_TO',
    'NO_OP',
    'ADDITION',
    'MULTIPLICATION',
    'DIVISION',
    'SUBTRACTION',
    'MASK_ALL',
    'MASK_FIRST_N',
    'MASK_LAST_N',
    'VALIDATE_NON_NULL',
    'VALIDATE_NON_ZERO',
    'VALIDATE_NON_NEGATIVE',
    'VALIDATE_NUMERIC',
  ])
  .openapi('PardotConnectorOperator')

const ConnectorOperatorSchema = z
  .object({
    Amplitude: AmplitudeConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Amplitude source fields. ',
    }),
    Datadog: DatadogConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Datadog source fields. ',
    }),
    Dynatrace: DynatraceConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Dynatrace source fields. ',
    }),
    GoogleAnalytics: GoogleAnalyticsConnectorOperatorSchema.exactOptional().openapi({
      description:
        ' The operation to be performed on the provided Google Analytics source fields. ',
    }),
    InforNexus: InforNexusConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Infor Nexus source fields. ',
    }),
    Marketo: MarketoConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Marketo source fields. ',
    }),
    S3: S3ConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Amazon S3 source fields. ',
    }),
    Salesforce: SalesforceConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Salesforce source fields. ',
    }),
    ServiceNow: ServiceNowConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided ServiceNow source fields. ',
    }),
    Singular: SingularConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Singular source fields. ',
    }),
    Slack: SlackConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Slack source fields. ',
    }),
    Trendmicro: TrendmicroConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Trend Micro source fields. ',
    }),
    Veeva: VeevaConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Veeva source fields. ',
    }),
    Zendesk: ZendeskConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided Zendesk source fields. ',
    }),
    SAPOData: SAPODataConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided SAPOData source fields. ',
    }),
    CustomConnector: OperatorSchema.exactOptional().openapi({
      description: 'Operators supported by the custom connector.',
    }),
    Pardot: PardotConnectorOperatorSchema.exactOptional().openapi({
      description: 'The operation to be performed on the provided Salesforce Pardot source fields.',
    }),
  })
  .openapi({
    description: ' The operation to be performed on the provided source fields. ',
    required: [],
  })
  .openapi('ConnectorOperator')

const DestinationFieldSchema = z.string().regex(/.*/).max(256).openapi('DestinationField')

const TaskTypeSchema = z
  .enum([
    'Arithmetic',
    'Filter',
    'Map',
    'Map_all',
    'Mask',
    'Merge',
    'Passthrough',
    'Truncate',
    'Validate',
    'Partition',
  ])
  .openapi('TaskType')

const PropertySchema = z.string().regex(/.+/).max(2048).openapi('Property')

const TaskPropertiesMapSchema = z.record(z.string(), PropertySchema).openapi('TaskPropertiesMap')

const TaskSchema = z
  .object({
    sourceFields: SourceFieldsSchema.openapi({
      description: ' The source fields to which a particular task is applied. ',
    }),
    connectorOperator: ConnectorOperatorSchema.exactOptional().openapi({
      description: ' The operation to be performed on the provided source fields. ',
    }),
    destinationField: DestinationFieldSchema.exactOptional().openapi({
      description:
        ' A field in a destination connector, or a field value against which Amazon AppFlow validates a source field. ',
    }),
    taskType: TaskTypeSchema.openapi({
      description: ' Specifies the particular task implementation that Amazon AppFlow performs. ',
    }),
    taskProperties: TaskPropertiesMapSchema.exactOptional().openapi({
      description:
        ' A map used to store task-related information. The execution service looks for particular information based on the <code>TaskType</code>. ',
    }),
  })
  .openapi({
    required: ['sourceFields', 'taskType'],
    description:
      ' A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. ',
  })
  .openapi('Task')

const TasksSchema = z.array(TaskSchema).openapi('Tasks')

const CreatedBySchema = z.string().regex(/\S+/).max(256).openapi('CreatedBy')

const UpdatedBySchema = z.string().regex(/\S+/).max(256).openapi('UpdatedBy')

const TagValueSchema = z
  .string()
  .regex(/[\s\w+-=\.:\/@]*/)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const GlueDataCatalogIAMRoleSchema = z
  .string()
  .regex(/arn:aws:iam:.*:[0-9]+:.*/)
  .max(512)
  .openapi('GlueDataCatalogIAMRole')

const GlueDataCatalogDatabaseNameSchema = z
  .string()
  .max(255)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('GlueDataCatalogDatabaseName')

const GlueDataCatalogTablePrefixSchema = z
  .string()
  .max(128)
  .openapi({ 'x-pattern': '[\\u0020-\\uD7FF\\uE000-\\uFFFD\\uD800\\uDC00-\\uDBFF\\uDFFF\\t]*' })
  .openapi('GlueDataCatalogTablePrefix')

const GlueDataCatalogConfigSchema = z
  .object({
    roleArn: GlueDataCatalogIAMRoleSchema.openapi({
      description:
        '<p>The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and partitions.</p> <p>For an example IAM policy that has the required permissions, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html">Identity-based policy examples for Amazon AppFlow</a>.</p>',
    }),
    databaseName: GlueDataCatalogDatabaseNameSchema.openapi({
      description:
        "<p>The name of the Data Catalog database that stores the metadata tables that Amazon AppFlow creates in your Amazon Web Services account. These tables contain metadata for the data that's transferred by the flow that you configure with this parameter.</p> <note> <p>When you configure a new flow with this parameter, you must specify an existing database.</p> </note>",
    }),
    tablePrefix: GlueDataCatalogTablePrefixSchema.openapi({
      description:
        'A naming prefix for each Data Catalog table that Amazon AppFlow creates for the flow that you configure with this setting. Amazon AppFlow adds the prefix to the beginning of the each table name.',
    }),
  })
  .openapi({
    required: ['roleArn', 'databaseName', 'tablePrefix'],
    description:
      "<p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.</p> <note> <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p> </note>",
  })
  .openapi('GlueDataCatalogConfig')

const MetadataCatalogConfigSchema = z
  .object({
    glueDataCatalog: GlueDataCatalogConfigSchema.exactOptional().openapi({
      description:
        'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
    }),
  })
  .openapi({
    description:
      'Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.',
    required: [],
  })
  .openapi('MetadataCatalogConfig')

const CatalogTypeSchema = z.literal('GLUE').openapi('CatalogType')

const RegistrationOutputSchema = z
  .object({
    message: StringSchema.exactOptional().openapi({
      description:
        'Explains the status of the registration attempt from Amazon AppFlow. If the attempt fails, the message explains why.',
    }),
    result: StringSchema.exactOptional().openapi({
      description:
        'Indicates the number of resources that Amazon AppFlow created or updated. Possible resources include metadata tables and data partitions.',
    }),
    status: ExecutionStatusSchema.exactOptional().openapi({
      description: 'Indicates the status of the registration attempt from Amazon AppFlow.',
    }),
  })
  .openapi({
    description:
      "<p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p> <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.</p>",
    required: [],
  })
  .openapi('RegistrationOutput')

const MetadataCatalogDetailSchema = z
  .object({
    catalogType: CatalogTypeSchema.exactOptional().openapi({
      description:
        '<p>The type of metadata catalog that Amazon AppFlow used for the associated flow run. This parameter returns the following value:</p> <dl> <dt>GLUE</dt> <dd> <p>The metadata catalog is provided by the Glue Data Catalog. Glue includes the Glue Data Catalog as a component.</p> </dd> </dl>',
    }),
    tableName: StringSchema.exactOptional().openapi({
      description:
        'The name of the table that stores the metadata for the associated flow run. The table stores metadata that represents the data that the flow transferred. Amazon AppFlow stores the table in the metadata catalog.',
    }),
    tableRegistrationOutput: RegistrationOutputSchema.exactOptional().openapi({
      description:
        'Describes the status of the attempt from Amazon AppFlow to register the metadata table with the metadata catalog. Amazon AppFlow creates or updates this table for the associated flow run.',
    }),
    partitionRegistrationOutput: RegistrationOutputSchema.exactOptional().openapi({
      description:
        "Describes the status of the attempt from Amazon AppFlow to register the data partitions with the metadata catalog. The data partitions organize the flow output into a hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the partitions (if they don't already exist) based on your flow configuration.",
    }),
  })
  .openapi({
    description:
      'Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.',
    required: [],
  })
  .openapi('MetadataCatalogDetail')

const MetadataCatalogDetailsSchema = z
  .array(MetadataCatalogDetailSchema)
  .openapi('MetadataCatalogDetails')

type DescribeFlowResponseType = {
  flowArn?: z.infer<typeof FlowArnSchema>
  description?: z.infer<typeof FlowDescriptionSchema>
  flowName?: z.infer<typeof FlowNameSchema>
  kmsArn?: z.infer<typeof KMSArnSchema>
  flowStatus?: z.infer<typeof FlowStatusSchema>
  flowStatusMessage?: z.infer<typeof FlowStatusMessageSchema>
  sourceFlowConfig?: z.infer<typeof SourceFlowConfigSchema>
  destinationFlowConfigList?: z.infer<typeof DestinationFlowConfigListSchema>
  lastRunExecutionDetails?: z.infer<typeof ExecutionDetailsSchema>
  triggerConfig?: z.infer<typeof TriggerConfigSchema>
  tasks?: z.infer<typeof TasksSchema>
  createdAt?: z.infer<typeof DateSchema>
  lastUpdatedAt?: z.infer<typeof DateSchema>
  createdBy?: z.infer<typeof CreatedBySchema>
  lastUpdatedBy?: z.infer<typeof UpdatedBySchema>
  tags?: z.infer<typeof TagMapSchema>
  metadataCatalogConfig?: z.infer<typeof MetadataCatalogConfigSchema>
  lastRunMetadataCatalogDetails?: z.infer<typeof MetadataCatalogDetailsSchema>
  schemaVersion?: z.infer<typeof LongSchema>
}

const ClientTokenSchema = z
  .string()
  .regex(/[ -~]+/)
  .min(1)
  .max(256)
  .openapi('ClientToken')

type CreateFlowRequestType = {
  flowName: z.infer<typeof FlowNameSchema>
  description?: z.infer<typeof FlowDescriptionSchema>
  kmsArn?: z.infer<typeof KMSArnSchema>
  triggerConfig: z.infer<typeof TriggerConfigSchema>
  sourceFlowConfig: z.infer<typeof SourceFlowConfigSchema>
  destinationFlowConfigList: z.infer<typeof DestinationFlowConfigListSchema>
  tasks: z.infer<typeof TasksSchema>
  tags?: z.infer<typeof TagMapSchema>
  metadataCatalogConfig?: z.infer<typeof MetadataCatalogConfigSchema>
  clientToken?: z.infer<typeof ClientTokenSchema>
}

type UpdateFlowRequestType = {
  flowName: z.infer<typeof FlowNameSchema>
  description?: z.infer<typeof FlowDescriptionSchema>
  triggerConfig: z.infer<typeof TriggerConfigSchema>
  sourceFlowConfig: z.infer<typeof SourceFlowConfigSchema>
  destinationFlowConfigList: z.infer<typeof DestinationFlowConfigListSchema>
  tasks: z.infer<typeof TasksSchema>
  metadataCatalogConfig?: z.infer<typeof MetadataCatalogConfigSchema>
  clientToken?: z.infer<typeof ClientTokenSchema>
}

const ConnectorProfileArnSchema = z
  .string()
  .regex(/arn:aws:appflow:.*:[0-9]+:.*/)
  .max(512)
  .openapi('ConnectorProfileArn')

const CreateConnectorProfileResponseSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the connector profile. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectorProfileResponse')

const AmplitudeConnectorProfilePropertiesSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector-specific profile properties required when using Amplitude. ',
  })
  .openapi('AmplitudeConnectorProfileProperties')

const InstanceUrlSchema = z.string().regex(/\S+/).max(256).openapi('InstanceUrl')

const DatadogConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Datadog resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Datadog. ',
  })
  .openapi('DatadogConnectorProfileProperties')

const DynatraceConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Dynatrace resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Dynatrace. ',
  })
  .openapi('DynatraceConnectorProfileProperties')

const GoogleAnalyticsConnectorProfilePropertiesSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector-specific profile properties required by Google Analytics. ',
  })
  .openapi('GoogleAnalyticsConnectorProfileProperties')

const HoneycodeConnectorProfilePropertiesSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector-specific properties required when using Amazon Honeycode. ',
  })
  .openapi('HoneycodeConnectorProfileProperties')

const InforNexusConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Infor Nexus resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Infor Nexus. ',
  })
  .openapi('InforNexusConnectorProfileProperties')

const MarketoConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Marketo resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Marketo. ',
  })
  .openapi('MarketoConnectorProfileProperties')

const DatabaseUrlSchema = z.string().regex(/\S+/).max(512).openapi('DatabaseUrl')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws:iam:.*:[0-9]+:.*/)
  .max(512)
  .openapi('RoleArn')

const DataApiRoleArnSchema = z
  .string()
  .regex(/arn:aws:iam:.*:[0-9]+:.*/)
  .max(512)
  .openapi('DataApiRoleArn')

const ClusterIdentifierSchema = z.string().regex(/\S+/).max(512).openapi('ClusterIdentifier')

const WorkgroupNameSchema = z.string().regex(/\S+/).max(512).openapi('WorkgroupName')

const DatabaseNameSchema = z.string().regex(/\S+/).max(512).openapi('DatabaseName')

const RedshiftConnectorProfilePropertiesSchema = z
  .object({
    databaseUrl: DatabaseUrlSchema.exactOptional().openapi({
      description: ' The JDBC URL of the Amazon Redshift cluster. ',
    }),
    bucketName: BucketNameSchema.openapi({
      description: ' A name for the associated Amazon S3 bucket. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
    }),
    roleArn: RoleArnSchema.openapi({
      description:
        ' The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift read-only access to Amazon S3. For more information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3">Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3</a>.',
    }),
    dataApiRoleArn: DataApiRoleArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift">Allow Amazon AppFlow to access Amazon Redshift databases with the Data API</a>.',
    }),
    isRedshiftServerless: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether the connector profile defines a connection to an Amazon Redshift Serverless data warehouse.',
    }),
    clusterIdentifier: ClusterIdentifierSchema.exactOptional().openapi({
      description: "The unique ID that's assigned to an Amazon Redshift cluster.",
    }),
    workgroupName: WorkgroupNameSchema.exactOptional().openapi({
      description: 'The name of an Amazon Redshift workgroup.',
    }),
    databaseName: DatabaseNameSchema.exactOptional().openapi({
      description: 'The name of an Amazon Redshift database.',
    }),
  })
  .openapi({
    required: ['bucketName', 'roleArn'],
    description: ' The connector-specific profile properties when using Amazon Redshift. ',
  })
  .openapi('RedshiftConnectorProfileProperties')

const SalesforceConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.exactOptional().openapi({
      description: ' The location of the Salesforce resource. ',
    }),
    isSandboxEnvironment: BooleanSchema.exactOptional().openapi({
      description:
        ' Indicates whether the connector profile applies to a sandbox or production environment. ',
    }),
    usePrivateLinkForMetadataAndAuthorization: BooleanSchema.exactOptional().openapi({
      description:
        '<p>If the connection mode for the connector profile is private, this parameter sets whether Amazon AppFlow uses the private network to send metadata and authorization calls to Salesforce. Amazon AppFlow sends private calls through Amazon Web Services PrivateLink. These calls travel through Amazon Web Services infrastructure without being exposed to the public internet.</p> <p>Set either of the following values:</p> <dl> <dt>true</dt> <dd> <p>Amazon AppFlow sends all calls to Salesforce over the private network.</p> <p>These private calls are:</p> <ul> <li> <p>Calls to get metadata about your Salesforce records. This metadata describes your Salesforce objects and their fields.</p> </li> <li> <p>Calls to get or refresh access tokens that allow Amazon AppFlow to access your Salesforce records.</p> </li> <li> <p>Calls to transfer your Salesforce records as part of a flow run.</p> </li> </ul> </dd> <dt>false</dt> <dd> <p>The default value. Amazon AppFlow sends some calls to Salesforce privately and other calls over the public internet.</p> <p>The public calls are: </p> <ul> <li> <p>Calls to get metadata about your Salesforce records.</p> </li> <li> <p>Calls to get or refresh access tokens.</p> </li> </ul> <p>The private calls are:</p> <ul> <li> <p>Calls to transfer your Salesforce records as part of a flow run.</p> </li> </ul> </dd> </dl>',
    }),
  })
  .openapi({
    description: ' The connector-specific profile properties required when using Salesforce. ',
    required: [],
  })
  .openapi('SalesforceConnectorProfileProperties')

const ServiceNowConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the ServiceNow resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using ServiceNow. ',
  })
  .openapi('ServiceNowConnectorProfileProperties')

const SingularConnectorProfilePropertiesSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector-specific profile properties required when using Singular. ',
  })
  .openapi('SingularConnectorProfileProperties')

const SlackConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Slack resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Slack. ',
  })
  .openapi('SlackConnectorProfileProperties')

const WarehouseSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(512)
  .openapi('Warehouse')

const StageSchema = z.string().regex(/\S+/).max(512).openapi('Stage')

const PrivateLinkServiceNameSchema = z
  .string()
  .regex(/^$|com.amazonaws.vpce.[\w\/!:@#.\-]+/)
  .max(512)
  .openapi('PrivateLinkServiceName')

const AccountNameSchema = z.string().regex(/\S+/).max(512).openapi('AccountName')

const SnowflakeConnectorProfilePropertiesSchema = z
  .object({
    warehouse: WarehouseSchema.openapi({ description: ' The name of the Snowflake warehouse. ' }),
    stage: StageSchema.openapi({
      description:
        ' The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: &lt; Database&gt;&lt; Schema&gt;&lt;Stage Name&gt;. ',
    }),
    bucketName: BucketNameSchema.openapi({
      description: ' The name of the Amazon S3 bucket associated with Snowflake. ',
    }),
    bucketPrefix: BucketPrefixSchema.exactOptional().openapi({
      description:
        ' The bucket path that refers to the Amazon S3 bucket associated with Snowflake. ',
    }),
    privateLinkServiceName: PrivateLinkServiceNameSchema.exactOptional().openapi({
      description:
        ' The Snowflake Private Link service name to be used for private data transfers. ',
    }),
    accountName: AccountNameSchema.exactOptional().openapi({
      description: ' The name of the account. ',
    }),
    region: RegionSchema.exactOptional().openapi({
      description: ' The Amazon Web Services Region of the Snowflake account. ',
    }),
  })
  .openapi({
    required: ['warehouse', 'stage', 'bucketName'],
    description: ' The connector-specific profile properties required when using Snowflake. ',
  })
  .openapi('SnowflakeConnectorProfileProperties')

const TrendmicroConnectorProfilePropertiesSchema = z
  .looseObject({})
  .openapi({
    description: ' The connector-specific profile properties required when using Trend Micro. ',
  })
  .openapi('TrendmicroConnectorProfileProperties')

const VeevaConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Veeva resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Veeva. ',
  })
  .openapi('VeevaConnectorProfileProperties')

const ZendeskConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.openapi({
      description: ' The location of the Zendesk resource. ',
    }),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Zendesk. ',
  })
  .openapi('ZendeskConnectorProfileProperties')

const ApplicationHostUrlSchema = z
  .string()
  .regex(/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('ApplicationHostUrl')

const ApplicationServicePathSchema = z
  .string()
  .regex(/\S+/)
  .max(512)
  .openapi('ApplicationServicePath')

const PortNumberSchema = z.int().min(1).max(65535).openapi('PortNumber')

const ClientNumberSchema = z
  .string()
  .regex(/^\d{3}$/)
  .length(3)
  .openapi('ClientNumber')

const LogonLanguageSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]*$/)
  .max(2)
  .openapi('LogonLanguage')

const OAuthPropertiesSchema = z
  .object({
    tokenUrl: TokenUrlSchema.openapi({
      description:
        ' The token url required to fetch access/refresh tokens using authorization code and also to refresh expired access token using refresh token.',
    }),
    authCodeUrl: AuthCodeUrlSchema.openapi({
      description:
        ' The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication. ',
    }),
    oAuthScopes: OAuthScopeListSchema.openapi({
      description: ' The OAuth scopes required for OAuth type authentication. ',
    }),
  })
  .openapi({
    required: ['tokenUrl', 'authCodeUrl', 'oAuthScopes'],
    description: ' The OAuth properties required for OAuth type authentication. ',
  })
  .openapi('OAuthProperties')

const SAPODataConnectorProfilePropertiesSchema = z
  .object({
    applicationHostUrl: ApplicationHostUrlSchema.openapi({
      description: ' The location of the SAPOData resource. ',
    }),
    applicationServicePath: ApplicationServicePathSchema.openapi({
      description: ' The application path to catalog service. ',
    }),
    portNumber: PortNumberSchema.openapi({
      description: ' The port number of the SAPOData instance. ',
    }),
    clientNumber: ClientNumberSchema.openapi({
      description: ' The client number for the client creating the connection. ',
    }),
    logonLanguage: LogonLanguageSchema.exactOptional().openapi({
      description: ' The logon language of SAPOData instance. ',
    }),
    privateLinkServiceName: PrivateLinkServiceNameSchema.exactOptional().openapi({
      description:
        ' The SAPOData Private Link service name to be used for private data transfers. ',
    }),
    oAuthProperties: OAuthPropertiesSchema.exactOptional().openapi({
      description: ' The SAPOData OAuth properties required for OAuth type authentication. ',
    }),
  })
  .openapi({
    required: ['applicationHostUrl', 'applicationServicePath', 'portNumber', 'clientNumber'],
    description: ' The connector-specific profile properties required when using SAPOData. ',
  })
  .openapi('SAPODataConnectorProfileProperties')

const ProfilePropertyValueSchema = z.string().regex(/\S+/).max(2048).openapi('ProfilePropertyValue')

const ProfilePropertiesMapSchema = z
  .record(z.string(), ProfilePropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('ProfilePropertiesMap')

const TokenUrlCustomPropertiesSchema = z
  .record(z.string(), CustomPropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TokenUrlCustomProperties')

const OAuth2PropertiesSchema = z
  .object({
    tokenUrl: TokenUrlSchema.openapi({
      description: 'The token URL required for OAuth 2.0 authentication.',
    }),
    oAuth2GrantType: OAuth2GrantTypeSchema.openapi({
      description: 'The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.',
    }),
    tokenUrlCustomProperties: TokenUrlCustomPropertiesSchema.exactOptional().openapi({
      description:
        'Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.',
    }),
  })
  .openapi({
    required: ['tokenUrl', 'oAuth2GrantType'],
    description: 'The OAuth 2.0 properties required for OAuth 2.0 authentication.',
  })
  .openapi('OAuth2Properties')

const CustomConnectorProfilePropertiesSchema = z
  .object({
    profileProperties: ProfilePropertiesMapSchema.exactOptional().openapi({
      description:
        'A map of properties that are required to create a profile for the custom connector.',
    }),
    oAuth2Properties: OAuth2PropertiesSchema.exactOptional(),
  })
  .openapi({
    description: 'The profile properties required by the custom connector.',
    required: [],
  })
  .openapi('CustomConnectorProfileProperties')

const BusinessUnitIdSchema = z.string().regex(/\S+/).max(18).openapi('BusinessUnitId')

const PardotConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.exactOptional().openapi({
      description: 'The location of the Salesforce Pardot resource.',
    }),
    isSandboxEnvironment: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether the connector profile applies to a sandbox or production environment.',
    }),
    businessUnitId: BusinessUnitIdSchema.exactOptional().openapi({
      description: 'The business unit id of Salesforce Pardot instance.',
    }),
  })
  .openapi({
    description: 'The connector-specific profile properties required when using Salesforce Pardot.',
    required: [],
  })
  .openapi('PardotConnectorProfileProperties')

const ConnectorProfilePropertiesSchema = z
  .object({
    Amplitude: AmplitudeConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Amplitude. ',
    }),
    Datadog: DatadogConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Datadog. ',
    }),
    Dynatrace: DynatraceConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Dynatrace. ',
    }),
    GoogleAnalytics: GoogleAnalyticsConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required Google Analytics. ',
    }),
    Honeycode: HoneycodeConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Amazon Honeycode. ',
    }),
    InforNexus: InforNexusConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Infor Nexus. ',
    }),
    Marketo: MarketoConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Marketo. ',
    }),
    Redshift: RedshiftConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Amazon Redshift. ',
    }),
    Salesforce: SalesforceConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Salesforce. ',
    }),
    ServiceNow: ServiceNowConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by serviceNow. ',
    }),
    Singular: SingularConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Singular. ',
    }),
    Slack: SlackConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Slack. ',
    }),
    Snowflake: SnowflakeConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Snowflake. ',
    }),
    Trendmicro: TrendmicroConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Trend Micro. ',
    }),
    Veeva: VeevaConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Veeva. ',
    }),
    Zendesk: ZendeskConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties required by Zendesk. ',
    }),
    SAPOData: SAPODataConnectorProfilePropertiesSchema.exactOptional(),
    CustomConnector: CustomConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: 'The properties required by the custom connector.',
    }),
    Pardot: PardotConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: 'The connector-specific properties required by Salesforce Pardot.',
    }),
  })
  .openapi({
    description: ' The connector-specific profile properties required by each connector. ',
    required: [],
  })
  .openapi('ConnectorProfileProperties')

const ApiKeySchema = z.string().regex(/\S+/).max(256).openapi('ApiKey')

const SecretKeySchema = z.string().regex(/\S+/).max(256).openapi('SecretKey')

const AmplitudeConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.openapi({
      description:
        ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
    }),
    secretKey: SecretKeySchema.openapi({
      description: ' The Secret Access Key portion of the credentials. ',
    }),
  })
  .openapi({
    required: ['apiKey', 'secretKey'],
    description: ' The connector-specific credentials required when using Amplitude. ',
  })
  .openapi('AmplitudeConnectorProfileCredentials')

const ApplicationKeySchema = z.string().regex(/\S+/).max(512).openapi('ApplicationKey')

const DatadogConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.openapi({
      description:
        ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
    }),
    applicationKey: ApplicationKeySchema.openapi({
      description:
        ' Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API. ',
    }),
  })
  .openapi({
    required: ['apiKey', 'applicationKey'],
    description: ' The connector-specific credentials required by Datadog. ',
  })
  .openapi('DatadogConnectorProfileCredentials')

const ApiTokenSchema = z.string().regex(/\S+/).max(256).openapi('ApiToken')

const DynatraceConnectorProfileCredentialsSchema = z
  .object({
    apiToken: ApiTokenSchema.openapi({
      description: ' The API tokens used by Dynatrace API to authenticate various API calls. ',
    }),
  })
  .openapi({
    required: ['apiToken'],
    description: ' The connector-specific profile credentials required by Dynatrace. ',
  })
  .openapi('DynatraceConnectorProfileCredentials')

const ClientIdSchema = z.string().regex(/\S+/).max(512).openapi('ClientId')

const ClientSecretSchema = z.string().regex(/\S+/).max(512).openapi('ClientSecret')

const AccessTokenSchema = z.string().regex(/\S+/).max(4096).openapi('AccessToken')

const RefreshTokenSchema = z.string().regex(/\S+/).max(2048).openapi('RefreshToken')

const AuthCodeSchema = z.string().regex(/\S+/).max(2048).openapi('AuthCode')

const RedirectUriSchema = z.string().regex(/\S+/).max(512).openapi('RedirectUri')

const ConnectorOAuthRequestSchema = z
  .object({
    authCode: AuthCodeSchema.exactOptional().openapi({
      description:
        ' The code provided by the connector when it has been authenticated via the connected app. ',
    }),
    redirectUri: RedirectUriSchema.exactOptional().openapi({
      description:
        ' The URL to which the authentication server redirects the browser after authorization has been granted. ',
    }),
  })
  .openapi({
    description:
      ' Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. ',
    required: [],
  })
  .openapi('ConnectorOAuthRequest')

const GoogleAnalyticsConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.openapi({ description: ' The identifier for the desired client. ' }),
    clientSecret: ClientSecretSchema.openapi({
      description:
        ' The client secret used by the OAuth client to authenticate to the authorization server. ',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Google Analytics resources. ',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description:
        ' The credentials used to acquire new access tokens. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required by Google Analytics. ',
  })
  .openapi('GoogleAnalyticsConnectorProfileCredentials')

const HoneycodeConnectorProfileCredentialsSchema = z
  .object({
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Amazon Honeycode resources. ',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description: ' The credentials used to acquire new access tokens. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
  })
  .openapi({
    description: ' The connector-specific credentials required when using Amazon Honeycode. ',
    required: [],
  })
  .openapi('HoneycodeConnectorProfileCredentials')

const AccessKeyIdSchema = z.string().regex(/\S+/).max(256).openapi('AccessKeyId')

const UsernameSchema = z.string().regex(/\S+/).max(512).openapi('Username')

const InforNexusConnectorProfileCredentialsSchema = z
  .object({
    accessKeyId: AccessKeyIdSchema.openapi({
      description: ' The Access Key portion of the credentials. ',
    }),
    userId: UsernameSchema.openapi({ description: ' The identifier for the user. ' }),
    secretAccessKey: KeySchema.openapi({ description: ' The secret key used to sign requests. ' }),
    datakey: KeySchema.openapi({ description: ' The encryption keys used to encrypt data. ' }),
  })
  .openapi({
    required: ['accessKeyId', 'userId', 'secretAccessKey', 'datakey'],
    description: ' The connector-specific profile credentials required by Infor Nexus. ',
  })
  .openapi('InforNexusConnectorProfileCredentials')

const MarketoConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.openapi({ description: ' The identifier for the desired client. ' }),
    clientSecret: ClientSecretSchema.openapi({
      description:
        ' The client secret used by the OAuth client to authenticate to the authorization server. ',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Marketo resources. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required by Marketo. ',
  })
  .openapi('MarketoConnectorProfileCredentials')

const PasswordSchema = z.string().regex(/.*/).max(512).openapi('Password')

const RedshiftConnectorProfileCredentialsSchema = z
  .object({
    username: StringSchema.exactOptional().openapi({ description: ' The name of the user. ' }),
    password: PasswordSchema.exactOptional().openapi({
      description: ' The password that corresponds to the user name. ',
    }),
  })
  .openapi({
    description:
      ' The connector-specific profile credentials required when using Amazon Redshift. ',
    required: [],
  })
  .openapi('RedshiftConnectorProfileCredentials')

const ClientCredentialsArnSchema = z
  .string()
  .regex(/arn:aws:secretsmanager:.*:[0-9]+:.*/)
  .min(20)
  .max(2048)
  .openapi('ClientCredentialsArn')

const SalesforceConnectorProfileCredentialsSchema = z
  .object({
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Salesforce resources. ',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description: ' The credentials used to acquire new access tokens. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
    clientCredentialsArn: ClientCredentialsArnSchema.exactOptional().openapi({
      description:
        ' The secret manager ARN, which contains the client ID and client secret of the connected app. ',
    }),
  })
  .openapi({
    description: ' The connector-specific profile credentials required when using Salesforce. ',
    required: [],
  })
  .openapi('SalesforceConnectorProfileCredentials')

const ServiceNowConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.openapi({ description: ' The name of the user. ' }),
    password: PasswordSchema.openapi({
      description: ' The password that corresponds to the user name. ',
    }),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using ServiceNow. ',
  })
  .openapi('ServiceNowConnectorProfileCredentials')

const SingularConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.openapi({
      description:
        ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
    }),
  })
  .openapi({
    required: ['apiKey'],
    description: ' The connector-specific profile credentials required when using Singular. ',
  })
  .openapi('SingularConnectorProfileCredentials')

const SlackConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.openapi({ description: ' The identifier for the client. ' }),
    clientSecret: ClientSecretSchema.openapi({
      description:
        ' The client secret used by the OAuth client to authenticate to the authorization server. ',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Slack resources. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required when using Slack. ',
  })
  .openapi('SlackConnectorProfileCredentials')

const SnowflakeConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.openapi({ description: ' The name of the user. ' }),
    password: PasswordSchema.openapi({
      description: ' The password that corresponds to the user name. ',
    }),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using Snowflake. ',
  })
  .openapi('SnowflakeConnectorProfileCredentials')

const ApiSecretKeySchema = z.string().regex(/\S+/).max(256).openapi('ApiSecretKey')

const TrendmicroConnectorProfileCredentialsSchema = z
  .object({
    apiSecretKey: ApiSecretKeySchema.openapi({
      description: ' The Secret Access Key portion of the credentials. ',
    }),
  })
  .openapi({
    required: ['apiSecretKey'],
    description: ' The connector-specific profile credentials required when using Trend Micro. ',
  })
  .openapi('TrendmicroConnectorProfileCredentials')

const VeevaConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.openapi({ description: ' The name of the user. ' }),
    password: PasswordSchema.openapi({
      description: ' The password that corresponds to the user name. ',
    }),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using Veeva. ',
  })
  .openapi('VeevaConnectorProfileCredentials')

const ZendeskConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.openapi({ description: ' The identifier for the desired client. ' }),
    clientSecret: ClientSecretSchema.openapi({
      description:
        ' The client secret used by the OAuth client to authenticate to the authorization server. ',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The credentials used to access protected Zendesk resources. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required when using Zendesk. ',
  })
  .openapi('ZendeskConnectorProfileCredentials')

const BasicAuthCredentialsSchema = z
  .object({
    username: UsernameSchema.openapi({
      description: ' The username to use to connect to a resource. ',
    }),
    password: PasswordSchema.openapi({
      description: ' The password to use to connect to a resource.',
    }),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The basic auth credentials required for basic authentication. ',
  })
  .openapi('BasicAuthCredentials')

const OAuthCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.openapi({ description: ' The identifier for the desired client. ' }),
    clientSecret: ClientSecretSchema.openapi({
      description:
        ' The client secret used by the OAuth client to authenticate to the authorization server. ',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: ' The access token used to access protected SAPOData resources. ',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description: ' The refresh token used to refresh expired access token. ',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional().openapi({
      description:
        ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
    }),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The OAuth credentials required for OAuth type authentication. ',
  })
  .openapi('OAuthCredentials')

const SAPODataConnectorProfileCredentialsSchema = z
  .object({
    basicAuthCredentials: BasicAuthCredentialsSchema.exactOptional().openapi({
      description: ' The SAPOData basic authentication credentials. ',
    }),
    oAuthCredentials: OAuthCredentialsSchema.exactOptional().openapi({
      description: ' The SAPOData OAuth type authentication credentials. ',
    }),
  })
  .openapi({
    description: ' The connector-specific profile credentials required when using SAPOData. ',
    required: [],
  })
  .openapi('SAPODataConnectorProfileCredentials')

const AuthenticationTypeSchema = z
  .enum(['OAUTH2', 'APIKEY', 'BASIC', 'CUSTOM'])
  .openapi('AuthenticationType')

const OAuth2CredentialsSchema = z
  .object({
    clientId: ClientIdSchema.exactOptional().openapi({
      description: 'The identifier for the desired client.',
    }),
    clientSecret: ClientSecretSchema.exactOptional().openapi({
      description:
        'The client secret used by the OAuth client to authenticate to the authorization server.',
    }),
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: 'The access token used to access the connector on your behalf.',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description: 'The refresh token used to refresh an expired access token.',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
  })
  .openapi({
    description: 'The OAuth 2.0 credentials required for OAuth 2.0 authentication.',
    required: [],
  })
  .openapi('OAuth2Credentials')

const ApiKeyCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.openapi({
      description: 'The API key required for API key authentication.',
    }),
    apiSecretKey: ApiSecretKeySchema.exactOptional().openapi({
      description: 'The API secret key required for API key authentication.',
    }),
  })
  .openapi({
    required: ['apiKey'],
    description: 'The API key credentials required for API key authentication.',
  })
  .openapi('ApiKeyCredentials')

const CredentialsMapValueSchema = z.string().regex(/\S+/).max(2048).openapi('CredentialsMapValue')

const CredentialsMapSchema = z
  .record(z.string(), CredentialsMapValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('CredentialsMap')

const CustomAuthCredentialsSchema = z
  .object({
    customAuthenticationType: CustomAuthenticationTypeSchema.openapi({
      description: 'The custom authentication type that the connector uses.',
    }),
    credentialsMap: CredentialsMapSchema.exactOptional().openapi({
      description: 'A map that holds custom authentication credentials.',
    }),
  })
  .openapi({
    required: ['customAuthenticationType'],
    description: 'The custom credentials required for custom authentication.',
  })
  .openapi('CustomAuthCredentials')

const CustomConnectorProfileCredentialsSchema = z
  .object({
    authenticationType: AuthenticationTypeSchema.openapi({
      description:
        'The authentication type that the custom connector uses for authenticating while creating a connector profile.',
    }),
    basic: BasicAuthCredentialsSchema.exactOptional().openapi({
      description: 'The basic credentials that are required for the authentication of the user.',
    }),
    oauth2: OAuth2CredentialsSchema.exactOptional().openapi({
      description: 'The OAuth 2.0 credentials required for the authentication of the user.',
    }),
    apiKey: ApiKeyCredentialsSchema.exactOptional().openapi({
      description: 'The API keys required for the authentication of the user.',
    }),
    custom: CustomAuthCredentialsSchema.exactOptional().openapi({
      description:
        'If the connector uses the custom authentication mechanism, this holds the required credentials.',
    }),
  })
  .openapi({
    required: ['authenticationType'],
    description:
      'The connector-specific profile credentials that are required when using the custom connector.',
  })
  .openapi('CustomConnectorProfileCredentials')

const PardotConnectorProfileCredentialsSchema = z
  .object({
    accessToken: AccessTokenSchema.exactOptional().openapi({
      description: 'The credentials used to access protected Salesforce Pardot resources.',
    }),
    refreshToken: RefreshTokenSchema.exactOptional().openapi({
      description: 'The credentials used to acquire new access tokens.',
    }),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
    clientCredentialsArn: ClientCredentialsArnSchema.exactOptional().openapi({
      description:
        'The secret manager ARN, which contains the client ID and client secret of the connected app.',
    }),
  })
  .openapi({
    description:
      'The connector-specific profile credentials required when using Salesforce Pardot.',
    required: [],
  })
  .openapi('PardotConnectorProfileCredentials')

const ConnectorProfileCredentialsSchema = z
  .object({
    Amplitude: AmplitudeConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Amplitude. ',
    }),
    Datadog: DatadogConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Datadog. ',
    }),
    Dynatrace: DynatraceConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Dynatrace. ',
    }),
    GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Google Analytics. ',
    }),
    Honeycode: HoneycodeConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Amazon Honeycode. ',
    }),
    InforNexus: InforNexusConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Infor Nexus. ',
    }),
    Marketo: MarketoConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Marketo. ',
    }),
    Redshift: RedshiftConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Amazon Redshift. ',
    }),
    Salesforce: SalesforceConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Salesforce. ',
    }),
    ServiceNow: ServiceNowConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using ServiceNow. ',
    }),
    Singular: SingularConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Singular. ',
    }),
    Slack: SlackConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Slack. ',
    }),
    Snowflake: SnowflakeConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Snowflake. ',
    }),
    Trendmicro: TrendmicroConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Trend Micro. ',
    }),
    Veeva: VeevaConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Veeva. ',
    }),
    Zendesk: ZendeskConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required when using Zendesk. ',
    }),
    SAPOData: SAPODataConnectorProfileCredentialsSchema.exactOptional(),
    CustomConnector: CustomConnectorProfileCredentialsSchema.exactOptional(),
    Pardot: PardotConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: 'The connector-specific credentials required when using Salesforce Pardot.',
    }),
  })
  .openapi({
    description: ' The connector-specific credentials required by a connector. ',
    required: [],
  })
  .openapi('ConnectorProfileCredentials')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConnectorAuthenticationExceptionSchema = z.any().openapi('ConnectorAuthenticationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const CreateFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.exactOptional().openapi({
      description: " The flow's Amazon Resource Name (ARN). ",
    }),
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: ' Indicates the current status of the flow. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateFlowResponse')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConnectorServerExceptionSchema = z.any().openapi('ConnectorServerException')

const DeleteConnectorProfileResponseSchema = z
  .looseObject({})
  .openapi('DeleteConnectorProfileResponse')

const DeleteFlowResponseSchema = z.looseObject({}).openapi('DeleteFlowResponse')

const DescribeConnectorResponseSchema: z.ZodType<DescribeConnectorResponseType> = z
  .object({
    connectorConfiguration: ConnectorConfigurationSchema.exactOptional().openapi({
      description: 'Configuration info of all the connectors that the user requested.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectorResponse')

const IdentifierSchema = z.string().regex(/\S+/).max(128).openapi('Identifier')

const FieldTypeSchema = z.string().openapi('FieldType')

const FilterOperatorListSchema = z.array(OperatorSchema).openapi('FilterOperatorList')

const ValueSchema = z.string().regex(/\S+/).max(128).openapi('Value')

const SupportedValueListSchema = z.array(ValueSchema).openapi('SupportedValueList')

const DoubleSchema = z.float64().openapi('Double')

const RangeSchema = z
  .object({
    maximum: DoubleSchema.exactOptional().openapi({
      description: 'Maximum value supported by the field.',
    }),
    minimum: DoubleSchema.exactOptional().openapi({
      description: 'Minimum value supported by the field.',
    }),
  })
  .openapi({ description: 'The range of values that the property supports.', required: [] })
  .openapi('Range')

const FieldTypeDetailsSchema = z
  .object({
    fieldType: FieldTypeSchema.openapi({
      description: ' The type of field, such as string, integer, date, and so on. ',
    }),
    filterOperators: FilterOperatorListSchema.openapi({
      description: ' The list of operators supported by a field. ',
    }),
    supportedValues: SupportedValueListSchema.exactOptional().openapi({
      description:
        ' The list of values that a field can contain. For example, a Boolean <code>fieldType</code> can have two values: "true" and "false". ',
    }),
    valueRegexPattern: StringSchema.exactOptional().openapi({
      description: 'The regular expression pattern for the field name.',
    }),
    supportedDateFormat: StringSchema.exactOptional().openapi({
      description: 'The date format that the field supports.',
    }),
    fieldValueRange: RangeSchema.exactOptional().openapi({
      description: 'The range of values this field can hold.',
    }),
    fieldLengthRange: RangeSchema.exactOptional().openapi({
      description: "This is the allowable length range for this field's value.",
    }),
  })
  .openapi({
    required: ['fieldType', 'filterOperators'],
    description:
      ' Contains details regarding the supported field type and the operators that can be applied for filtering. ',
  })
  .openapi('FieldTypeDetails')

const SupportedFieldTypeDetailsSchema = z
  .object({
    v1: FieldTypeDetailsSchema.openapi({
      description:
        ' The initial supported version for <code>fieldType</code>. If this is later changed to a different version, v2 will be introduced. ',
    }),
  })
  .openapi({
    required: ['v1'],
    description:
      ' Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. ',
  })
  .openapi('SupportedFieldTypeDetails')

const SourceFieldPropertiesSchema = z
  .object({
    isRetrievable: BooleanSchema.exactOptional().openapi({
      description: ' Indicates whether the field can be returned in a search result. ',
    }),
    isQueryable: BooleanSchema.exactOptional().openapi({
      description: ' Indicates if the field can be queried. ',
    }),
    isTimestampFieldForIncrementalQueries: BooleanSchema.exactOptional().openapi({
      description: 'Indicates if this timestamp field can be used for incremental queries.',
    }),
  })
  .openapi({
    description:
      ' The properties that can be applied to a field when the connector is being used as a source. ',
    required: [],
  })
  .openapi('SourceFieldProperties')

const DestinationFieldPropertiesSchema = z
  .object({
    isCreatable: BooleanSchema.exactOptional().openapi({
      description: ' Specifies if the destination field can be created by the current user. ',
    }),
    isNullable: BooleanSchema.exactOptional().openapi({
      description: ' Specifies if the destination field can have a null value. ',
    }),
    isUpsertable: BooleanSchema.exactOptional().openapi({
      description:
        ' Specifies if the flow run can either insert new rows in the destination field if they do not already exist, or update them if they do. ',
    }),
    isUpdatable: BooleanSchema.exactOptional().openapi({
      description:
        ' Specifies whether the field can be updated during an <code>UPDATE</code> or <code>UPSERT</code> write operation. ',
    }),
    isDefaultedOnCreate: BooleanSchema.exactOptional().openapi({
      description:
        'Specifies whether the field can use the default value during a Create operation.',
    }),
    supportedWriteOperations: SupportedWriteOperationListSchema.exactOptional().openapi({
      description:
        ' A list of supported write operations. For each write operation listed, this field can be used in <code>idFieldNames</code> when that write operation is present as a destination option. ',
    }),
  })
  .openapi({
    description:
      ' The properties that can be applied to a field when connector is being used as a destination. ',
    required: [],
  })
  .openapi('DestinationFieldProperties')

const ConnectorEntityFieldSchema = z
  .object({
    identifier: IdentifierSchema.openapi({
      description: ' The unique identifier of the connector field. ',
    }),
    parentIdentifier: IdentifierSchema.exactOptional().openapi({
      description: 'The parent identifier of the connector field.',
    }),
    label: LabelSchema.exactOptional().openapi({
      description: ' The label applied to a connector entity field. ',
    }),
    isPrimaryKey: BooleanSchema.exactOptional().openapi({
      description: 'Booelan value that indicates whether this field can be used as a primary key.',
    }),
    defaultValue: StringSchema.exactOptional().openapi({
      description: 'Default value that can be assigned to this field.',
    }),
    isDeprecated: BooleanSchema.exactOptional().openapi({
      description: 'Booelan value that indicates whether this field is deprecated or not.',
    }),
    supportedFieldTypeDetails: SupportedFieldTypeDetailsSchema.exactOptional().openapi({
      description:
        ' Contains details regarding the supported <code>FieldType</code>, including the corresponding <code>filterOperators</code> and <code>supportedValues</code>. ',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: ' A description of the connector entity field. ',
    }),
    sourceProperties: SourceFieldPropertiesSchema.exactOptional().openapi({
      description:
        ' The properties that can be applied to a field when the connector is being used as a source. ',
    }),
    destinationProperties: DestinationFieldPropertiesSchema.exactOptional().openapi({
      description:
        ' The properties applied to a field when the connector is being used as a destination. ',
    }),
    customProperties: CustomPropertiesSchema.exactOptional().openapi({
      description: 'A map that has specific properties related to the ConnectorEntityField.',
    }),
  })
  .openapi({
    required: ['identifier'],
    description:
      ' Describes the data model of a connector field. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. ',
  })
  .openapi('ConnectorEntityField')

const ConnectorEntityFieldListSchema = z
  .array(ConnectorEntityFieldSchema)
  .openapi('ConnectorEntityFieldList')

const DescribeConnectorEntityResponseSchema = z
  .object({
    connectorEntityFields: ConnectorEntityFieldListSchema.openapi({
      description:
        ' Describes the fields for that connector entity. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. ',
    }),
  })
  .openapi({ required: ['connectorEntityFields'] })
  .openapi('DescribeConnectorEntityResponse')

const ConnectionModeSchema = z.enum(['Public', 'Private']).openapi('ConnectionMode')

const PrivateConnectionProvisioningStatusSchema = z
  .enum(['FAILED', 'PENDING', 'CREATED'])
  .openapi('PrivateConnectionProvisioningStatus')

const PrivateConnectionProvisioningFailureMessageSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(2048)
  .openapi('PrivateConnectionProvisioningFailureMessage')

const PrivateConnectionProvisioningFailureCauseSchema = z
  .enum([
    'CONNECTOR_AUTHENTICATION',
    'CONNECTOR_SERVER',
    'INTERNAL_SERVER',
    'ACCESS_DENIED',
    'VALIDATION',
  ])
  .openapi('PrivateConnectionProvisioningFailureCause')

const PrivateConnectionProvisioningStateSchema = z
  .object({
    status: PrivateConnectionProvisioningStatusSchema.exactOptional().openapi({
      description: ' Specifies the private connection provisioning status. ',
    }),
    failureMessage: PrivateConnectionProvisioningFailureMessageSchema.exactOptional().openapi({
      description: ' Specifies the private connection provisioning failure reason. ',
    }),
    failureCause: PrivateConnectionProvisioningFailureCauseSchema.exactOptional().openapi({
      description: ' Specifies the private connection provisioning failure cause. ',
    }),
  })
  .openapi({ description: ' Specifies the private connection provisioning state. ', required: [] })
  .openapi('PrivateConnectionProvisioningState')

const ConnectorProfileSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the connector profile. ',
    }),
    connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description: 'The label for the connector profile being created.',
    }),
    connectionMode: ConnectionModeSchema.exactOptional().openapi({
      description: ' Indicates the connection mode and if it is public or private. ',
    }),
    credentialsArn: ARNSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the connector profile credentials. ',
    }),
    connectorProfileProperties: ConnectorProfilePropertiesSchema.exactOptional().openapi({
      description: ' The connector-specific properties of the profile configuration. ',
    }),
    createdAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the connector profile was created. ',
    }),
    lastUpdatedAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the connector profile was last updated. ',
    }),
    privateConnectionProvisioningState:
      PrivateConnectionProvisioningStateSchema.exactOptional().openapi({
        description: ' Specifies the private connection provisioning state. ',
      }),
  })
  .openapi({
    description:
      ' Describes an instance of a connector. This includes the provided name, credentials ARN, connection-mode, and so on. To keep the API intuitive and extensible, the fields that are common to all types of connector profiles are explicitly specified at the top level. The rest of the connector-specific properties are available via the <code>connectorProfileProperties</code> field. ',
    required: [],
  })
  .openapi('ConnectorProfile')

const ConnectorProfileDetailListSchema = z
  .array(ConnectorProfileSchema)
  .openapi('ConnectorProfileDetailList')

const DescribeConnectorProfilesResponseSchema = z
  .object({
    connectorProfileDetails: ConnectorProfileDetailListSchema.exactOptional().openapi({
      description: ' Returns information about the connector profiles associated with the flow. ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        ' The pagination token for the next page of data. If <code>nextToken=null</code>, this means that all records have been fetched. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectorProfilesResponse')

const DescribeConnectorsResponseSchema: z.ZodType<DescribeConnectorsResponseType> = z
  .object({
    connectorConfigurations: ConnectorConfigurationsMapSchema.exactOptional().openapi({
      description: ' The configuration that is applied to the connectors used in the flow. ',
    }),
    connectors: ConnectorListSchema.exactOptional().openapi({
      description: 'Information about the connectors supported in Amazon AppFlow.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for the next page of data. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectorsResponse')

const DescribeFlowResponseSchema: z.ZodType<DescribeFlowResponseType> = z
  .object({
    flowArn: FlowArnSchema.exactOptional().openapi({
      description: " The flow's Amazon Resource Name (ARN). ",
    }),
    description: FlowDescriptionSchema.exactOptional().openapi({
      description: ' A description of the flow. ',
    }),
    flowName: FlowNameSchema.exactOptional().openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    kmsArn: KMSArnSchema.exactOptional().openapi({
      description:
        " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
    }),
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: ' Indicates the current status of the flow. ',
    }),
    flowStatusMessage: FlowStatusMessageSchema.exactOptional().openapi({
      description:
        ' Contains an error message if the flow status is in a suspended or error state. This applies only to scheduled or event-triggered flows. ',
    }),
    sourceFlowConfig: SourceFlowConfigSchema.exactOptional().openapi({
      description:
        ' The configuration that controls how Amazon AppFlow retrieves data from the source connector. ',
    }),
    destinationFlowConfigList: DestinationFlowConfigListSchema.exactOptional().openapi({
      description:
        ' The configuration that controls how Amazon AppFlow transfers data to the destination connector. ',
    }),
    lastRunExecutionDetails: ExecutionDetailsSchema.exactOptional().openapi({
      description: ' Describes the details of the most recent flow run. ',
    }),
    triggerConfig: TriggerConfigSchema.exactOptional().openapi({
      description: ' The trigger settings that determine how and when the flow runs. ',
    }),
    tasks: TasksSchema.exactOptional().openapi({
      description:
        ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
    }),
    createdAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the flow was created. ',
    }),
    lastUpdatedAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the flow was last updated. ',
    }),
    createdBy: CreatedBySchema.exactOptional().openapi({
      description: ' The ARN of the user who created the flow. ',
    }),
    lastUpdatedBy: UpdatedBySchema.exactOptional().openapi({
      description:
        ' Specifies the user name of the account that performed the most recent update. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags used to organize, track, or control access for your flow. ',
    }),
    metadataCatalogConfig: MetadataCatalogConfigSchema.exactOptional().openapi({
      description:
        "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
    }),
    lastRunMetadataCatalogDetails: MetadataCatalogDetailsSchema.exactOptional().openapi({
      description:
        'Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.',
    }),
    schemaVersion: LongSchema.exactOptional().openapi({
      description:
        '<p>The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:</p> <ul> <li> <p>Source-to-destination field mappings</p> </li> <li> <p>Field data types</p> </li> <li> <p>Partition keys</p> </li> </ul>',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlowResponse')

const ExecutionIdSchema = z.string().regex(/\S+/).max(256).openapi('ExecutionId')

const ExecutionMessageSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(2048)
  .openapi('ExecutionMessage')

const ErrorInfoSchema = z
  .object({
    putFailuresCount: LongSchema.exactOptional().openapi({
      description: ' Specifies the failure count for the attempted flow. ',
    }),
    executionMessage: ExecutionMessageSchema.exactOptional().openapi({
      description: ' Specifies the error message that appears if a flow fails. ',
    }),
  })
  .openapi({
    description:
      ' Provides details in the event of a failed flow, including the failure count and the related error messages. ',
    required: [],
  })
  .openapi('ErrorInfo')

const ExecutionResultSchema = z
  .object({
    errorInfo: ErrorInfoSchema.exactOptional().openapi({
      description: ' Provides any error message information related to the flow run. ',
    }),
    bytesProcessed: LongSchema.exactOptional().openapi({
      description: ' The total number of bytes processed by the flow run. ',
    }),
    bytesWritten: LongSchema.exactOptional().openapi({
      description: ' The total number of bytes written as a result of the flow run. ',
    }),
    recordsProcessed: LongSchema.exactOptional().openapi({
      description: ' The number of records processed in the flow run. ',
    }),
  })
  .openapi({ description: ' Specifies the end result of the flow run. ', required: [] })
  .openapi('ExecutionResult')

const ExecutionRecordSchema = z
  .object({
    executionId: ExecutionIdSchema.exactOptional().openapi({
      description: ' Specifies the identifier of the given flow run. ',
    }),
    executionStatus: ExecutionStatusSchema.exactOptional().openapi({
      description:
        ' Specifies the flow run status and whether it is in progress, has completed successfully, or has failed. ',
    }),
    executionResult: ExecutionResultSchema.exactOptional().openapi({
      description: ' Describes the result of the given flow run. ',
    }),
    startedAt: DateSchema.exactOptional().openapi({
      description: ' Specifies the start time of the flow run. ',
    }),
    lastUpdatedAt: DateSchema.exactOptional().openapi({
      description: ' Specifies the time of the most recent update. ',
    }),
    dataPullStartTime: DateSchema.exactOptional().openapi({
      description:
        ' The timestamp that determines the first new or updated record to be transferred in the flow run. ',
    }),
    dataPullEndTime: DateSchema.exactOptional().openapi({
      description:
        ' The timestamp that indicates the last new or updated record to be transferred in the flow run. ',
    }),
    metadataCatalogDetails: MetadataCatalogDetailsSchema.exactOptional().openapi({
      description:
        'Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.',
    }),
  })
  .openapi({
    description: ' Specifies information about the past flow run instances for a given flow. ',
    required: [],
  })
  .openapi('ExecutionRecord')

const FlowExecutionListSchema = z.array(ExecutionRecordSchema).openapi('FlowExecutionList')

const DescribeFlowExecutionRecordsResponseSchema = z
  .object({
    flowExecutions: FlowExecutionListSchema.exactOptional().openapi({
      description: ' Returns a list of all instances when this flow was run. ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for the next page of data. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlowExecutionRecordsResponse')

const ConnectorEntitySchema = z
  .object({
    name: NameSchema.openapi({ description: ' The name of the connector entity. ' }),
    label: LabelSchema.exactOptional().openapi({
      description: ' The label applied to the connector entity. ',
    }),
    hasNestedEntities: BooleanSchema.exactOptional().openapi({
      description:
        ' Specifies whether the connector entity is a parent or a category and has more entities nested underneath it. If another call is made with <code>entitiesPath = "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested entities underneath it. This provides a way to retrieve all supported entities in a recursive fashion. ',
    }),
  })
  .openapi({
    required: ['name'],
    description:
      ' The high-level entity that can be queried in Amazon AppFlow. For example, a Salesforce entity might be an <i>Account</i> or <i>Opportunity</i>, whereas a ServiceNow entity might be an <i>Incident</i>. ',
  })
  .openapi('ConnectorEntity')

const ConnectorEntityListSchema = z.array(ConnectorEntitySchema).openapi('ConnectorEntityList')

const ConnectorEntityMapSchema = z
  .record(z.string(), ConnectorEntityListSchema)
  .openapi('ConnectorEntityMap')

const ListConnectorEntitiesResponseSchema = z
  .object({
    connectorEntityMap: ConnectorEntityMapSchema.openapi({
      description:
        " The response of <code>ListConnectorEntities</code> lists entities grouped by category. This map's key represents the group name, and its value contains the list of entities belonging to that group. ",
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token that you specify in your next <code>ListConnectorEntities</code> operation to get the next page of results in paginated response. The <code>ListConnectorEntities</code> operation provides this token if the response is too big for the page size.',
    }),
  })
  .openapi({ required: ['connectorEntityMap'] })
  .openapi('ListConnectorEntitiesResponse')

const ListConnectorsResponseSchema = z
  .object({
    connectors: ConnectorListSchema.exactOptional().openapi({
      description: 'Contains information about the connectors supported by Amazon AppFlow.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'The pagination token for the next page of data. If nextToken=null, this means that all records have been fetched.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListConnectorsResponse')

const FlowDefinitionSchema = z
  .object({
    flowArn: FlowArnSchema.exactOptional().openapi({
      description: " The flow's Amazon Resource Name (ARN). ",
    }),
    description: FlowDescriptionSchema.exactOptional().openapi({
      description: ' A user-entered description of the flow. ',
    }),
    flowName: FlowNameSchema.exactOptional().openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: ' Indicates the current status of the flow. ',
    }),
    sourceConnectorType: ConnectorTypeSchema.exactOptional().openapi({
      description:
        ' Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude, and so on. ',
    }),
    sourceConnectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description: 'The label of the source connector in the flow.',
    }),
    destinationConnectorType: ConnectorTypeSchema.exactOptional().openapi({
      description:
        ' Specifies the destination connector type, such as Salesforce, Amazon S3, Amplitude, and so on. ',
    }),
    destinationConnectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description: 'The label of the destination connector in the flow.',
    }),
    triggerType: TriggerTypeSchema.exactOptional().openapi({
      description:
        ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
    }),
    createdAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the flow was created. ',
    }),
    lastUpdatedAt: DateSchema.exactOptional().openapi({
      description: ' Specifies when the flow was last updated. ',
    }),
    createdBy: CreatedBySchema.exactOptional().openapi({
      description: ' The ARN of the user who created the flow. ',
    }),
    lastUpdatedBy: UpdatedBySchema.exactOptional().openapi({
      description: ' Specifies the account user name that most recently updated the flow. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags used to organize, track, or control access for your flow. ',
    }),
    lastRunExecutionDetails: ExecutionDetailsSchema.exactOptional().openapi({
      description: ' Describes the details of the most recent flow run. ',
    }),
  })
  .openapi({
    description:
      ' The properties of the flow, such as its source, destination, trigger type, and so on. ',
    required: [],
  })
  .openapi('FlowDefinition')

const FlowListSchema = z.array(FlowDefinitionSchema).openapi('FlowList')

const ListFlowsResponseSchema = z
  .object({
    flows: FlowListSchema.exactOptional().openapi({
      description: ' The list of flows associated with your account. ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for next page of data. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListFlowsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags used to organize, track, or control access for your flow. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RegisterConnectorResponseSchema = z
  .object({
    connectorArn: ARNSchema.exactOptional().openapi({
      description: 'The ARN of the connector being registered.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RegisterConnectorResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const StartFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.exactOptional().openapi({
      description: " The flow's Amazon Resource Name (ARN). ",
    }),
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: ' Indicates the current status of the flow. ',
    }),
    executionId: ExecutionIdSchema.exactOptional().openapi({
      description:
        ' Returns the internal execution ID of an on-demand flow when the flow is started. For scheduled or event-triggered flows, this value is null. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('StartFlowResponse')

const StopFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.exactOptional().openapi({
      description: " The flow's Amazon Resource Name (ARN). ",
    }),
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: ' Indicates the current status of the flow. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('StopFlowResponse')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UnregisterConnectorResponseSchema = z.looseObject({}).openapi('UnregisterConnectorResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateConnectorProfileResponseSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the connector profile. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectorProfileResponse')

const UpdateConnectorRegistrationResponseSchema = z
  .object({
    connectorArn: ARNSchema.exactOptional().openapi({
      description: 'The ARN of the connector being updated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectorRegistrationResponse')

const UpdateFlowResponseSchema = z
  .object({
    flowStatus: FlowStatusSchema.exactOptional().openapi({
      description: 'Indicates the current status of the flow. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowResponse')

const ConnectorProfileConfigSchema = z
  .object({
    connectorProfileProperties: ConnectorProfilePropertiesSchema.openapi({
      description: ' The connector-specific properties of the profile configuration. ',
    }),
    connectorProfileCredentials: ConnectorProfileCredentialsSchema.exactOptional().openapi({
      description: ' The connector-specific credentials required by each connector. ',
    }),
  })
  .openapi({
    required: ['connectorProfileProperties'],
    description:
      ' Defines the connector-specific configuration and credentials for the connector profile. ',
  })
  .openapi('ConnectorProfileConfig')

const ConnectorProfileNameListSchema = z
  .array(ConnectorProfileNameSchema)
  .min(0)
  .max(100)
  .openapi('ConnectorProfileNameList')

const CreateConnectorProfileRequestSchema = z
  .object({
    connectorProfileName: ConnectorProfileNameSchema.openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account. ',
    }),
    kmsArn: KMSArnSchema.exactOptional().openapi({
      description:
        " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
    }),
    connectorType: ConnectorTypeSchema.openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description:
        'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
    }),
    connectionMode: ConnectionModeSchema.openapi({
      description:
        ' Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet. ',
    }),
    connectorProfileConfig: ConnectorProfileConfigSchema.openapi({
      description: ' Defines the connector-specific configuration and credentials. ',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({
    required: ['connectorProfileName', 'connectorType', 'connectionMode', 'connectorProfileConfig'],
    title: 'CreateConnectorProfileRequest',
  })
  .openapi('CreateConnectorProfileRequest')

const CreateFlowRequestSchema: z.ZodType<CreateFlowRequestType> = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    description: FlowDescriptionSchema.exactOptional().openapi({
      description: ' A description of the flow you want to create. ',
    }),
    kmsArn: KMSArnSchema.exactOptional().openapi({
      description:
        " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
    }),
    triggerConfig: TriggerConfigSchema.openapi({
      description: ' The trigger settings that determine how and when the flow runs. ',
    }),
    sourceFlowConfig: SourceFlowConfigSchema.openapi({
      description:
        ' The configuration that controls how Amazon AppFlow retrieves data from the source connector. ',
    }),
    destinationFlowConfigList: DestinationFlowConfigListSchema.openapi({
      description:
        ' The configuration that controls how Amazon AppFlow places data in the destination connector. ',
    }),
    tasks: TasksSchema.openapi({
      description:
        ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags used to organize, track, or control access for your flow. ',
    }),
    metadataCatalogConfig: MetadataCatalogConfigSchema.exactOptional().openapi({
      description:
        "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({
    required: [
      'flowName',
      'triggerConfig',
      'sourceFlowConfig',
      'destinationFlowConfigList',
      'tasks',
    ],
    title: 'CreateFlowRequest',
  })
  .openapi('CreateFlowRequest')

const CredentialsMapKeySchema = z
  .string()
  .regex(/[\w]+/)
  .min(1)
  .max(128)
  .openapi('CredentialsMapKey')

const CustomPropertyKeySchema = z
  .string()
  .regex(/[\w]+/)
  .min(1)
  .max(128)
  .openapi('CustomPropertyKey')

const DeleteConnectorProfileRequestSchema = z
  .object({
    connectorProfileName: ConnectorProfileNameSchema.openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account. ',
    }),
    forceDelete: BooleanSchema.exactOptional().openapi({
      description:
        ' Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. ',
    }),
  })
  .openapi({ required: ['connectorProfileName'], title: 'DeleteConnectorProfileRequest' })
  .openapi('DeleteConnectorProfileRequest')

const DeleteFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    forceDelete: BooleanSchema.exactOptional().openapi({
      description:
        ' Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. ',
    }),
  })
  .openapi({ required: ['flowName'], title: 'DeleteFlowRequest' })
  .openapi('DeleteFlowRequest')

const DescribeConnectorEntityRequestSchema = z
  .object({
    connectorEntityName: EntityNameSchema.openapi({
      description: ' The entity name for that connector. ',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: ' The type of connector application, such as Salesforce, Amplitude, and so on. ',
    }),
    connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
    }),
    apiVersion: ApiVersionSchema.exactOptional().openapi({
      description: "The version of the API that's used by the connector.",
    }),
  })
  .openapi({ required: ['connectorEntityName'], title: 'DescribeConnectorEntityRequest' })
  .openapi('DescribeConnectorEntityRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const DescribeConnectorProfilesRequestSchema = z
  .object({
    connectorProfileNames: ConnectorProfileNameListSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description:
        'The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for the next page of data. ',
    }),
  })
  .openapi({ title: 'DescribeConnectorProfilesRequest', required: [] })
  .openapi('DescribeConnectorProfilesRequest')

const DescribeConnectorRequestSchema = z
  .object({
    connectorType: ConnectorTypeSchema.openapi({
      description:
        'The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.',
    }),
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description:
        'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
    }),
  })
  .openapi({ required: ['connectorType'], title: 'DescribeConnectorRequest' })
  .openapi('DescribeConnectorRequest')

const DescribeConnectorsRequestSchema = z
  .object({
    connectorTypes: ConnectorTypeListSchema.exactOptional().openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'The maximum number of items that should be returned in the result set. The default is 20.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for the next page of data. ',
    }),
  })
  .openapi({ title: 'DescribeConnectorsRequest', required: [] })
  .openapi('DescribeConnectorsRequest')

const DescribeFlowExecutionRecordsRequestSchema = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for the next page of data. ',
    }),
  })
  .openapi({ required: ['flowName'], title: 'DescribeFlowExecutionRecordsRequest' })
  .openapi('DescribeFlowExecutionRecordsRequest')

const DescribeFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
  })
  .openapi({ required: ['flowName'], title: 'DescribeFlowRequest' })
  .openapi('DescribeFlowRequest')

const EntitiesPathSchema = z
  .string()
  .regex(/[\s\w\/!@#+=,.-]*/)
  .max(256)
  .openapi('EntitiesPath')

const GroupSchema = z.string().regex(/\S+/).max(128).openapi('Group')

const ListEntitiesMaxResultsSchema = z.int().min(1).max(10000).openapi('ListEntitiesMaxResults')

const ListConnectorEntitiesRequestSchema = z
  .object({
    connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
      description:
        ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector. ',
    }),
    connectorType: ConnectorTypeSchema.exactOptional().openapi({
      description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
    }),
    entitiesPath: EntitiesPathSchema.exactOptional().openapi({
      description:
        ' This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider. ',
    }),
    apiVersion: ApiVersionSchema.exactOptional().openapi({
      description: "The version of the API that's used by the connector.",
    }),
    maxResults: ListEntitiesMaxResultsSchema.exactOptional().openapi({
      description: 'The maximum number of items that the operation returns in the response.',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description:
        'A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.',
    }),
  })
  .openapi({ title: 'ListConnectorEntitiesRequest', required: [] })
  .openapi('ListConnectorEntitiesRequest')

const ListConnectorsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        'Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: 'The pagination token for the next page of data.',
    }),
  })
  .openapi({ title: 'ListConnectorsRequest', required: [] })
  .openapi('ListConnectorsRequest')

const ListFlowsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.exactOptional().openapi({
      description:
        ' Specifies the maximum number of items that should be returned in the result set. ',
    }),
    nextToken: NextTokenSchema.exactOptional().openapi({
      description: ' The pagination token for next page of data. ',
    }),
  })
  .openapi({ title: 'ListFlowsRequest', required: [] })
  .openapi('ListFlowsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const OperatorPropertiesKeysSchema = z
  .enum([
    'VALUE',
    'VALUES',
    'DATA_TYPE',
    'UPPER_BOUND',
    'LOWER_BOUND',
    'SOURCE_DATA_TYPE',
    'DESTINATION_DATA_TYPE',
    'VALIDATION_ACTION',
    'MASK_VALUE',
    'MASK_LENGTH',
    'TRUNCATE_LENGTH',
    'MATH_OPERATION_FIELDS_ORDER',
    'CONCAT_FORMAT',
    'SUBFIELD_CATEGORY_MAP',
    'EXCLUDE_SOURCE_FIELDS_LIST',
    'INCLUDE_NEW_FIELDS',
    'ORDERED_PARTITION_KEYS_LIST',
  ])
  .openapi('OperatorPropertiesKeys')

const ProfilePropertyKeySchema = z
  .string()
  .regex(/[\w]+/)
  .min(1)
  .max(128)
  .openapi('ProfilePropertyKey')

const RegisterConnectorRequestSchema = z
  .object({
    connectorLabel: ConnectorLabelSchema.exactOptional().openapi({
      description:
        ' The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: "A description about the connector that's being registered.",
    }),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.exactOptional().openapi({
      description:
        'The provisioning type of the connector. Currently the only supported value is LAMBDA. ',
    }),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.exactOptional().openapi({
      description:
        'The provisioning type of the connector. Currently the only supported value is LAMBDA.',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({ title: 'RegisterConnectorRequest', required: [] })
  .openapi('RegisterConnectorRequest')

const StartFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({ required: ['flowName'], title: 'StartFlowRequest' })
  .openapi('StartFlowRequest')

const StopFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
  })
  .openapi({ required: ['flowName'], title: 'StopFlowRequest' })
  .openapi('StopFlowRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.openapi({
      description: ' The tags used to organize, track, or control access for your flow. ',
    }),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnregisterConnectorRequestSchema = z
  .object({
    connectorLabel: ConnectorLabelSchema.openapi({
      description:
        'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
    }),
    forceDelete: BooleanSchema.exactOptional().openapi({
      description:
        'Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.',
    }),
  })
  .openapi({ required: ['connectorLabel'], title: 'UnregisterConnectorRequest' })
  .openapi('UnregisterConnectorRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectorProfileRequestSchema = z
  .object({
    connectorProfileName: ConnectorProfileNameSchema.openapi({
      description:
        ' The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
    }),
    connectionMode: ConnectionModeSchema.openapi({
      description: ' Indicates the connection mode and if it is public or private. ',
    }),
    connectorProfileConfig: ConnectorProfileConfigSchema.openapi({
      description: ' Defines the connector-specific profile configuration and credentials. ',
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({
    required: ['connectorProfileName', 'connectionMode', 'connectorProfileConfig'],
    title: 'UpdateConnectorProfileRequest',
  })
  .openapi('UpdateConnectorProfileRequest')

const UpdateConnectorRegistrationRequestSchema = z
  .object({
    connectorLabel: ConnectorLabelSchema.openapi({
      description:
        'The name of the connector. The name is unique for each connector registration in your AWS account.',
    }),
    description: DescriptionSchema.exactOptional().openapi({
      description: "A description about the update that you're applying to the connector.",
    }),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.exactOptional(),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({ required: ['connectorLabel'], title: 'UpdateConnectorRegistrationRequest' })
  .openapi('UpdateConnectorRegistrationRequest')

const UpdateFlowRequestSchema: z.ZodType<UpdateFlowRequestType> = z
  .object({
    flowName: FlowNameSchema.openapi({
      description:
        ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
    }),
    description: FlowDescriptionSchema.exactOptional().openapi({
      description: ' A description of the flow. ',
    }),
    triggerConfig: TriggerConfigSchema.openapi({
      description: ' The trigger settings that determine how and when the flow runs. ',
    }),
    sourceFlowConfig: SourceFlowConfigSchema,
    destinationFlowConfigList: DestinationFlowConfigListSchema.openapi({
      description:
        ' The configuration that controls how Amazon AppFlow transfers data to the destination connector. ',
    }),
    tasks: TasksSchema.openapi({
      description:
        ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
    }),
    metadataCatalogConfig: MetadataCatalogConfigSchema.exactOptional().openapi({
      description:
        "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
    }),
    clientToken: ClientTokenSchema.exactOptional().openapi({
      description:
        "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>",
    }),
  })
  .openapi({
    required: [
      'flowName',
      'triggerConfig',
      'sourceFlowConfig',
      'destinationFlowConfigList',
      'tasks',
    ],
    title: 'UpdateFlowRequest',
  })
  .openapi('UpdateFlowRequest')

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

export const postCreateConnectorProfileRoute = createRoute({
  method: 'post',
  path: '/create-connector-profile',
  description:
    ' Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.',
  operationId: 'CreateConnectorProfile',
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
              connectorProfileName: z
                .string()
                .regex(/[\w\/!@#+=.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account. ',
                }),
              kmsArn: z
                .string()
                .regex(/arn:aws:kms:.*:[0-9]+:.*/)
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
                }),
              connectorType: z
                .enum([
                  'Salesforce',
                  'Singular',
                  'Slack',
                  'Redshift',
                  'S3',
                  'Marketo',
                  'Googleanalytics',
                  'Zendesk',
                  'Servicenow',
                  'Datadog',
                  'Trendmicro',
                  'Snowflake',
                  'Dynatrace',
                  'Infornexus',
                  'Amplitude',
                  'Veeva',
                  'EventBridge',
                  'LookoutMetrics',
                  'Upsolver',
                  'Honeycode',
                  'CustomerProfiles',
                  'SAPOData',
                  'CustomConnector',
                  'Pardot',
                ])
                .openapi({
                  description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                }),
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
                }),
              connectionMode: z
                .enum(['Public', 'Private'])
                .openapi({
                  description:
                    ' Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet. ',
                }),
              connectorProfileConfig: z
                .object({
                  connectorProfileProperties:
                    ConnectorProfilePropertiesSchema.exactOptional().openapi({
                      description:
                        ' The connector-specific properties of the profile configuration. ',
                    }),
                  connectorProfileCredentials:
                    ConnectorProfileCredentialsSchema.exactOptional().openapi({
                      description:
                        ' The connector-specific credentials required by each connector. ',
                    }),
                })
                .openapi({
                  description:
                    ' Defines the connector-specific configuration and credentials for the connector profile. ',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({
              required: [
                'connectorProfileName',
                'connectorType',
                'connectionMode',
                'connectorProfileConfig',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectorProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateFlowRoute = createRoute({
  method: 'post',
  path: '/create-flow',
  description:
    ' Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once. ',
  operationId: 'CreateFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
              description: z
                .string()
                .regex(/[\w!@#\-.?,\s]*/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' A description of the flow you want to create. ' }),
              kmsArn: z
                .string()
                .regex(/arn:aws:kms:.*:[0-9]+:.*/)
                .min(20)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
                }),
              triggerConfig: z
                .object({
                  triggerType: TriggerTypeSchema.exactOptional().openapi({
                    description:
                      ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
                  }),
                  triggerProperties: TriggerPropertiesSchema.exactOptional().openapi({
                    description:
                      ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
                  }),
                })
                .openapi({
                  description:
                    ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
                  required: [],
                }),
              sourceFlowConfig: z
                .object({
                  connectorType: ConnectorTypeSchema.exactOptional().openapi({
                    description:
                      ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                  }),
                  apiVersion: ApiVersionSchema.exactOptional().openapi({
                    description:
                      "The API version of the connector when it's used as a source in the flow.",
                  }),
                  connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
                    description:
                      ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
                  }),
                  sourceConnectorProperties:
                    SourceConnectorPropertiesSchema.exactOptional().openapi({
                      description:
                        ' Specifies the information that is required to query a particular source connector. ',
                    }),
                  incrementalPullConfig: IncrementalPullConfigSchema.exactOptional().openapi({
                    description:
                      ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
                  }),
                })
                .openapi({
                  description:
                    ' Contains information about the configuration of the source connector used in the flow. ',
                  required: [],
                }),
              destinationFlowConfigList: z
                .array(DestinationFlowConfigSchema)
                .openapi({
                  description:
                    ' The configuration that controls how Amazon AppFlow places data in the destination connector. ',
                }),
              tasks: z
                .array(TaskSchema)
                .openapi({
                  description:
                    ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    ' The tags used to organize, track, or control access for your flow. ',
                }),
              metadataCatalogConfig: z
                .object({
                  glueDataCatalog: GlueDataCatalogConfigSchema.exactOptional().openapi({
                    description:
                      'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({
              required: [
                'flowName',
                'triggerConfig',
                'sourceFlowConfig',
                'destinationFlowConfigList',
                'tasks',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateFlowResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    486: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
  },
})

export const postDeleteConnectorProfileRoute = createRoute({
  method: 'post',
  path: '/delete-connector-profile',
  description: ' Enables you to delete an existing connector profile. ',
  operationId: 'DeleteConnectorProfile',
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
              connectorProfileName: z
                .string()
                .regex(/[\w\/!@#+=.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account. ',
                }),
              forceDelete: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. ',
                }),
            })
            .openapi({ required: ['connectorProfileName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectorProfileResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteFlowRoute = createRoute({
  method: 'post',
  path: '/delete-flow',
  description:
    ' Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time. ',
  operationId: 'DeleteFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
              forceDelete: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    ' Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. ',
                }),
            })
            .openapi({ required: ['flowName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteFlowResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeConnectorRoute = createRoute({
  method: 'post',
  path: '/describe-connector',
  description:
    'Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.',
  operationId: 'DescribeConnector',
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
              connectorType: z
                .enum([
                  'Salesforce',
                  'Singular',
                  'Slack',
                  'Redshift',
                  'S3',
                  'Marketo',
                  'Googleanalytics',
                  'Zendesk',
                  'Servicenow',
                  'Datadog',
                  'Trendmicro',
                  'Snowflake',
                  'Dynatrace',
                  'Infornexus',
                  'Amplitude',
                  'Veeva',
                  'EventBridge',
                  'LookoutMetrics',
                  'Upsolver',
                  'Honeycode',
                  'CustomerProfiles',
                  'SAPOData',
                  'CustomConnector',
                  'Pardot',
                ])
                .openapi({
                  description:
                    'The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.',
                }),
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
                }),
            })
            .openapi({ required: ['connectorType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postDescribeConnectorEntityRoute = createRoute({
  method: 'post',
  path: '/describe-connector-entity',
  description:
    ' Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity. ',
  operationId: 'DescribeConnectorEntity',
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
              connectorEntityName: z
                .string()
                .regex(/\S+/)
                .max(1024)
                .openapi({ description: ' The entity name for that connector. ' }),
              connectorType: z
                .enum([
                  'Salesforce',
                  'Singular',
                  'Slack',
                  'Redshift',
                  'S3',
                  'Marketo',
                  'Googleanalytics',
                  'Zendesk',
                  'Servicenow',
                  'Datadog',
                  'Trendmicro',
                  'Snowflake',
                  'Dynatrace',
                  'Infornexus',
                  'Amplitude',
                  'Veeva',
                  'EventBridge',
                  'LookoutMetrics',
                  'Upsolver',
                  'Honeycode',
                  'CustomerProfiles',
                  'SAPOData',
                  'CustomConnector',
                  'Pardot',
                ])
                .exactOptional()
                .openapi({
                  description:
                    ' The type of connector application, such as Salesforce, Amplitude, and so on. ',
                }),
              connectorProfileName: z
                .string()
                .regex(/[\w\/!@#+=.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
                }),
              apiVersion: z
                .string()
                .regex(/\S+/)
                .max(256)
                .exactOptional()
                .openapi({ description: "The version of the API that's used by the connector." }),
            })
            .openapi({ required: ['connectorEntityName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConnectorEntityResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    483: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeConnectorProfilesRoute = createRoute({
  method: 'post',
  path: '/describe-connector-profiles',
  description:
    '<p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>',
  operationId: 'DescribeConnectorProfiles',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectorProfileNames: z
                .array(ConnectorProfileNameSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
                }),
              connectorType: z
                .enum([
                  'Salesforce',
                  'Singular',
                  'Slack',
                  'Redshift',
                  'S3',
                  'Marketo',
                  'Googleanalytics',
                  'Zendesk',
                  'Servicenow',
                  'Datadog',
                  'Trendmicro',
                  'Snowflake',
                  'Dynatrace',
                  'Infornexus',
                  'Amplitude',
                  'Veeva',
                  'EventBridge',
                  'LookoutMetrics',
                  'Upsolver',
                  'Honeycode',
                  'CustomerProfiles',
                  'SAPOData',
                  'CustomConnector',
                  'Pardot',
                ])
                .exactOptional()
                .openapi({
                  description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                }),
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    'The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The pagination token for the next page of data. ' }),
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
      content: { 'application/json': { schema: DescribeConnectorProfilesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeConnectorsRoute = createRoute({
  method: 'post',
  path: '/describe-connectors',
  description:
    " Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page. ",
  operationId: 'DescribeConnectors',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              connectorTypes: z
                .array(ConnectorTypeSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items that should be returned in the result set. The default is 20.',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The pagination token for the next page of data. ' }),
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
      content: { 'application/json': { schema: DescribeConnectorsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeFlowRoute = createRoute({
  method: 'post',
  path: '/describe-flow',
  description: ' Provides a description of the specified flow. ',
  operationId: 'DescribeFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
            })
            .openapi({ required: ['flowName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFlowResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDescribeFlowExecutionRecordsRoute = createRoute({
  method: 'post',
  path: '/describe-flow-execution-records',
  description: ' Fetches the execution history of the flow. ',
  operationId: 'DescribeFlowExecutionRecords',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The pagination token for the next page of data. ' }),
            })
            .openapi({ required: ['flowName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFlowExecutionRecordsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListConnectorEntitiesRoute = createRoute({
  method: 'post',
  path: '/list-connector-entities',
  description:
    ' Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity. ',
  operationId: 'ListConnectorEntities',
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
              connectorProfileName: z
                .string()
                .regex(/[\w\/!@#+=.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector. ',
                }),
              connectorType: z
                .enum([
                  'Salesforce',
                  'Singular',
                  'Slack',
                  'Redshift',
                  'S3',
                  'Marketo',
                  'Googleanalytics',
                  'Zendesk',
                  'Servicenow',
                  'Datadog',
                  'Trendmicro',
                  'Snowflake',
                  'Dynatrace',
                  'Infornexus',
                  'Amplitude',
                  'Veeva',
                  'EventBridge',
                  'LookoutMetrics',
                  'Upsolver',
                  'Honeycode',
                  'CustomerProfiles',
                  'SAPOData',
                  'CustomConnector',
                  'Pardot',
                ])
                .exactOptional()
                .openapi({
                  description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                }),
              entitiesPath: z
                .string()
                .regex(/[\s\w\/!@#+=,.-]*/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    ' This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider. ',
                }),
              apiVersion: z
                .string()
                .regex(/\S+/)
                .max(256)
                .exactOptional()
                .openapi({ description: "The version of the API that's used by the connector." }),
              maxResults: z
                .int()
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    'The maximum number of items that the operation returns in the response.',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    'A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.',
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
      content: { 'application/json': { schema: ListConnectorEntitiesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    483: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListConnectorsRoute = createRoute({
  method: 'post',
  path: '/list-connectors',
  description:
    'Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors. ',
  operationId: 'ListConnectors',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The pagination token for the next page of data.' }),
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
      content: { 'application/json': { schema: ListConnectorsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListFlowsRoute = createRoute({
  method: 'post',
  path: '/list-flows',
  description: ' Lists all of the flows associated with your account. ',
  operationId: 'ListFlows',
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
      maxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' Specifies the maximum number of items that should be returned in the result set. ',
                }),
              nextToken: z
                .string()
                .regex(/\S+/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The pagination token for next page of data. ' }),
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
      content: { 'application/json': { schema: ListFlowsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: ' Retrieves the tags that are associated with a specified flow. ',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:aws:.*:.*:[0-9]+:.*/)
        .max(512)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the specified flow. ',
            schema: { type: 'string', pattern: 'arn:aws:.*:.*:[0-9]+:.*', maxLength: 512 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: ' Applies a tag to the specified flow. ',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:aws:.*:.*:[0-9]+:.*/)
        .max(512)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the flow that you want to tag. ',
            schema: { type: 'string', pattern: 'arn:aws:.*:.*:[0-9]+:.*', maxLength: 512 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({
                  description:
                    ' The tags used to organize, track, or control access for your flow. ',
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
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postRegisterConnectorRoute = createRoute({
  method: 'post',
  path: '/register-connector',
  description:
    'Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.',
  operationId: 'RegisterConnector',
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
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    ' The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
                }),
              description: z
                .string()
                .regex(/[\s\w\/!@#+=.-]*/)
                .max(1024)
                .exactOptional()
                .openapi({
                  description: "A description about the connector that's being registered.",
                }),
              connectorProvisioningType: z
                .literal('LAMBDA')
                .exactOptional()
                .openapi({
                  description:
                    'The type of provisioning that the connector supports, such as Lambda.',
                }),
              connectorProvisioningConfig: z
                .object({
                  lambda: LambdaConnectorProvisioningConfigSchema.exactOptional().openapi({
                    description:
                      'Contains information about the configuration of the lambda which is being registered as the connector.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the configuration of the connector being registered.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>",
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
      content: { 'application/json': { schema: RegisterConnectorResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    487: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
    488: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
  },
})

export const postStartFlowRoute = createRoute({
  method: 'post',
  path: '/start-flow',
  description:
    ' Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow. ',
  operationId: 'StartFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({ required: ['flowName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartFlowResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postStopFlowRoute = createRoute({
  method: 'post',
  path: '/stop-flow',
  description:
    ' Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow. ',
  operationId: 'StopFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
            })
            .openapi({ required: ['flowName'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopFlowResponseSchema } },
    },
    480: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'UnsupportedOperationException',
      content: { 'application/json': { schema: UnsupportedOperationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUnregisterConnectorRoute = createRoute({
  method: 'post',
  path: '/unregister-connector',
  description:
    'Unregisters the custom connector registered in your account that matches the connector label provided in the request.',
  operationId: 'UnregisterConnector',
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
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
                }),
              forceDelete: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.',
                }),
            })
            .openapi({ required: ['connectorLabel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UnregisterConnectorResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: ' Removes a tag from the specified flow. ',
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
    params: z.object({
      resourceArn: z
        .string()
        .regex(/arn:aws:.*:.*:[0-9]+:.*/)
        .max(512)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the flow that you want to untag. ',
            schema: { type: 'string', pattern: 'arn:aws:.*:.*:[0-9]+:.*', maxLength: 512 },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(0).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description:
              ' The tag keys associated with the tag that you want to remove from your flow. ',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 0,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postUpdateConnectorProfileRoute = createRoute({
  method: 'post',
  path: '/update-connector-profile',
  description: ' Updates a given connector profile associated with your account. ',
  operationId: 'UpdateConnectorProfile',
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
              connectorProfileName: z
                .string()
                .regex(/[\w\/!@#+=.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
                }),
              connectionMode: z
                .enum(['Public', 'Private'])
                .openapi({
                  description: ' Indicates the connection mode and if it is public or private. ',
                }),
              connectorProfileConfig: z
                .object({
                  connectorProfileProperties:
                    ConnectorProfilePropertiesSchema.exactOptional().openapi({
                      description:
                        ' The connector-specific properties of the profile configuration. ',
                    }),
                  connectorProfileCredentials:
                    ConnectorProfileCredentialsSchema.exactOptional().openapi({
                      description:
                        ' The connector-specific credentials required by each connector. ',
                    }),
                })
                .openapi({
                  description:
                    ' Defines the connector-specific configuration and credentials for the connector profile. ',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({
              required: ['connectorProfileName', 'connectionMode', 'connectorProfileConfig'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectorProfileResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateConnectorRegistrationRoute = createRoute({
  method: 'post',
  path: '/update-connector-registration',
  description:
    "<p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>",
  operationId: 'UpdateConnectorRegistration',
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
              connectorLabel: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    'The name of the connector. The name is unique for each connector registration in your AWS account.',
                }),
              description: z
                .string()
                .regex(/[\s\w\/!@#+=.-]*/)
                .max(1024)
                .exactOptional()
                .openapi({
                  description:
                    "A description about the update that you're applying to the connector.",
                }),
              connectorProvisioningConfig: z
                .object({
                  lambda: LambdaConnectorProvisioningConfigSchema.exactOptional().openapi({
                    description:
                      'Contains information about the configuration of the lambda which is being registered as the connector.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains information about the configuration of the connector being registered.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({ required: ['connectorLabel'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateConnectorRegistrationResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    487: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
    488: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
  },
})

export const postUpdateFlowRoute = createRoute({
  method: 'post',
  path: '/update-flow',
  description: ' Updates an existing flow. ',
  operationId: 'UpdateFlow',
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
              flowName: z
                .string()
                .regex(/[a-zA-Z0-9][\w!@#.-]+/)
                .max(256)
                .openapi({
                  description:
                    ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
                }),
              description: z
                .string()
                .regex(/[\w!@#\-.?,\s]*/)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' A description of the flow. ' }),
              triggerConfig: z
                .object({
                  triggerType: TriggerTypeSchema.exactOptional().openapi({
                    description:
                      ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
                  }),
                  triggerProperties: TriggerPropertiesSchema.exactOptional().openapi({
                    description:
                      ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
                  }),
                })
                .openapi({
                  description:
                    ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
                  required: [],
                }),
              sourceFlowConfig: z
                .object({
                  connectorType: ConnectorTypeSchema.exactOptional().openapi({
                    description:
                      ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                  }),
                  apiVersion: ApiVersionSchema.exactOptional().openapi({
                    description:
                      "The API version of the connector when it's used as a source in the flow.",
                  }),
                  connectorProfileName: ConnectorProfileNameSchema.exactOptional().openapi({
                    description:
                      ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
                  }),
                  sourceConnectorProperties:
                    SourceConnectorPropertiesSchema.exactOptional().openapi({
                      description:
                        ' Specifies the information that is required to query a particular source connector. ',
                    }),
                  incrementalPullConfig: IncrementalPullConfigSchema.exactOptional().openapi({
                    description:
                      ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
                  }),
                })
                .openapi({
                  description:
                    ' Contains information about the configuration of the source connector used in the flow. ',
                  required: [],
                }),
              destinationFlowConfigList: z
                .array(DestinationFlowConfigSchema)
                .openapi({
                  description:
                    ' The configuration that controls how Amazon AppFlow transfers data to the destination connector. ',
                }),
              tasks: z
                .array(TaskSchema)
                .openapi({
                  description:
                    ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
                }),
              metadataCatalogConfig: z
                .object({
                  glueDataCatalog: GlueDataCatalogConfigSchema.exactOptional().openapi({
                    description:
                      'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Specifies the configuration that Amazon AppFlow uses when it catalogs your data. When Amazon AppFlow catalogs your data, it stores metadata in a data catalog.',
                  required: [],
                }),
              clientToken: z
                .string()
                .regex(/[ -~]+/)
                .min(1)
                .max(256)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>",
                }),
            })
            .openapi({
              required: [
                'flowName',
                'triggerConfig',
                'sourceFlowConfig',
                'destinationFlowConfigList',
                'tasks',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateFlowResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'ConnectorAuthenticationException',
      content: { 'application/json': { schema: ConnectorAuthenticationExceptionSchema } },
    },
    485: {
      description: 'ConnectorServerException',
      content: { 'application/json': { schema: ConnectorServerExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
