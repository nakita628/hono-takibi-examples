import { createRoute, z } from '@hono/zod-openapi'

const AmplitudeConnectorProfilePropertiesSchema = z
  .object({})
  .openapi({
    description: ' The connector-specific profile properties required when using Amplitude. ',
  })
  .openapi('AmplitudeConnectorProfileProperties')

const InstanceUrlSchema = z.string().regex(/\S+/).max(256).openapi('InstanceUrl')

const DatadogConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Datadog resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Datadog. ',
  })
  .openapi('DatadogConnectorProfileProperties')

const DynatraceConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Dynatrace resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Dynatrace. ',
  })
  .openapi('DynatraceConnectorProfileProperties')

const GoogleAnalyticsConnectorProfilePropertiesSchema = z
  .object({})
  .openapi({
    description: ' The connector-specific profile properties required by Google Analytics. ',
  })
  .openapi('GoogleAnalyticsConnectorProfileProperties')

const HoneycodeConnectorProfilePropertiesSchema = z
  .object({})
  .openapi({
    description: ' The connector-specific properties required when using Amazon Honeycode. ',
  })
  .openapi('HoneycodeConnectorProfileProperties')

const InforNexusConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Infor Nexus resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required by Infor Nexus. ',
  })
  .openapi('InforNexusConnectorProfileProperties')

const MarketoConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Marketo resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Marketo. ',
  })
  .openapi('MarketoConnectorProfileProperties')

const DatabaseUrlSchema = z.string().regex(/\S+/).max(512).openapi('DatabaseUrl')

const BucketNameSchema = z.string().regex(/\S+/).min(3).max(63).openapi('BucketName')

const BucketPrefixSchema = z.string().regex(/.*/).max(512).openapi('BucketPrefix')

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

const BooleanSchema = z.boolean().openapi('Boolean')

const ClusterIdentifierSchema = z.string().regex(/\S+/).max(512).openapi('ClusterIdentifier')

const WorkgroupNameSchema = z.string().regex(/\S+/).max(512).openapi('WorkgroupName')

const DatabaseNameSchema = z.string().regex(/\S+/).max(512).openapi('DatabaseName')

const RedshiftConnectorProfilePropertiesSchema = z
  .object({
    databaseUrl: DatabaseUrlSchema.and(
      z.any().openapi({ description: ' The JDBC URL of the Amazon Redshift cluster. ' }),
    ).exactOptional(),
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: ' A name for the associated Amazon S3 bucket. ' }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon Resource Name (ARN) of IAM role that grants Amazon Redshift read-only access to Amazon S3. For more information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#redshift-access-s3">Allow Amazon Redshift to access your Amazon AppFlow data in Amazon S3</a>.',
        }),
    ),
    dataApiRoleArn: DataApiRoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that permits Amazon AppFlow to access your Amazon Redshift database through the Data API. For more information, and for the polices that you attach to this role, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_service-role-policies.html#access-redshift">Allow Amazon AppFlow to access Amazon Redshift databases with the Data API</a>.',
        }),
    ).exactOptional(),
    isRedshiftServerless: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the connector profile defines a connection to an Amazon Redshift Serverless data warehouse.',
        }),
    ).exactOptional(),
    clusterIdentifier: ClusterIdentifierSchema.and(
      z
        .any()
        .openapi({ description: "The unique ID that's assigned to an Amazon Redshift cluster." }),
    ).exactOptional(),
    workgroupName: WorkgroupNameSchema.and(
      z.any().openapi({ description: 'The name of an Amazon Redshift workgroup.' }),
    ).exactOptional(),
    databaseName: DatabaseNameSchema.and(
      z.any().openapi({ description: 'The name of an Amazon Redshift database.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['bucketName', 'roleArn'],
    description: ' The connector-specific profile properties when using Amazon Redshift. ',
  })
  .openapi('RedshiftConnectorProfileProperties')

const SalesforceConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Salesforce resource. ' }),
    ).exactOptional(),
    isSandboxEnvironment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether the connector profile applies to a sandbox or production environment. ',
        }),
    ).exactOptional(),
    usePrivateLinkForMetadataAndAuthorization: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If the connection mode for the connector profile is private, this parameter sets whether Amazon AppFlow uses the private network to send metadata and authorization calls to Salesforce. Amazon AppFlow sends private calls through Amazon Web Services PrivateLink. These calls travel through Amazon Web Services infrastructure without being exposed to the public internet.</p> <p>Set either of the following values:</p> <dl> <dt>true</dt> <dd> <p>Amazon AppFlow sends all calls to Salesforce over the private network.</p> <p>These private calls are:</p> <ul> <li> <p>Calls to get metadata about your Salesforce records. This metadata describes your Salesforce objects and their fields.</p> </li> <li> <p>Calls to get or refresh access tokens that allow Amazon AppFlow to access your Salesforce records.</p> </li> <li> <p>Calls to transfer your Salesforce records as part of a flow run.</p> </li> </ul> </dd> <dt>false</dt> <dd> <p>The default value. Amazon AppFlow sends some calls to Salesforce privately and other calls over the public internet.</p> <p>The public calls are: </p> <ul> <li> <p>Calls to get metadata about your Salesforce records.</p> </li> <li> <p>Calls to get or refresh access tokens.</p> </li> </ul> <p>The private calls are:</p> <ul> <li> <p>Calls to transfer your Salesforce records as part of a flow run.</p> </li> </ul> </dd> </dl>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The connector-specific profile properties required when using Salesforce. ',
    required: [],
  })
  .openapi('SalesforceConnectorProfileProperties')

const ServiceNowConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the ServiceNow resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using ServiceNow. ',
  })
  .openapi('ServiceNowConnectorProfileProperties')

const SingularConnectorProfilePropertiesSchema = z
  .object({})
  .openapi({
    description: ' The connector-specific profile properties required when using Singular. ',
  })
  .openapi('SingularConnectorProfileProperties')

const SlackConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Slack resource. ' }),
    ),
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

const RegionSchema = z.string().regex(/\S+/).max(64).openapi('Region')

const SnowflakeConnectorProfilePropertiesSchema = z
  .object({
    warehouse: WarehouseSchema.and(
      z.any().openapi({ description: ' The name of the Snowflake warehouse. ' }),
    ),
    stage: StageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Amazon S3 stage that was created while setting up an Amazon S3 stage in the Snowflake account. This is written in the following format: &lt; Database&gt;&lt; Schema&gt;&lt;Stage Name&gt;. ',
        }),
    ),
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: ' The name of the Amazon S3 bucket associated with Snowflake. ' }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The bucket path that refers to the Amazon S3 bucket associated with Snowflake. ',
        }),
    ).exactOptional(),
    privateLinkServiceName: PrivateLinkServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Snowflake Private Link service name to be used for private data transfers. ',
        }),
    ).exactOptional(),
    accountName: AccountNameSchema.and(
      z.any().openapi({ description: ' The name of the account. ' }),
    ).exactOptional(),
    region: RegionSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Web Services Region of the Snowflake account. ' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['warehouse', 'stage', 'bucketName'],
    description: ' The connector-specific profile properties required when using Snowflake. ',
  })
  .openapi('SnowflakeConnectorProfileProperties')

const TrendmicroConnectorProfilePropertiesSchema = z
  .object({})
  .openapi({
    description: ' The connector-specific profile properties required when using Trend Micro. ',
  })
  .openapi('TrendmicroConnectorProfileProperties')

const VeevaConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Veeva resource. ' }),
    ),
  })
  .openapi({
    required: ['instanceUrl'],
    description: ' The connector-specific profile properties required when using Veeva. ',
  })
  .openapi('VeevaConnectorProfileProperties')

const ZendeskConnectorProfilePropertiesSchema = z
  .object({
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: ' The location of the Zendesk resource. ' }),
    ),
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

const TokenUrlSchema = z
  .string()
  .regex(/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('TokenUrl')

const AuthCodeUrlSchema = z
  .string()
  .regex(/^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('AuthCodeUrl')

const OAuthScopeSchema = z.string().regex(/\S+/).max(128).openapi('OAuthScope')

const OAuthScopeListSchema = z.array(OAuthScopeSchema).openapi('OAuthScopeList')

const OAuthPropertiesSchema = z
  .object({
    tokenUrl: TokenUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The token url required to fetch access/refresh tokens using authorization code and also to refresh expired access token using refresh token.',
        }),
    ),
    authCodeUrl: AuthCodeUrlSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The authorization code url required to redirect to SAP Login Page to fetch authorization code for OAuth type authentication. ',
        }),
    ),
    oAuthScopes: OAuthScopeListSchema.and(
      z
        .any()
        .openapi({ description: ' The OAuth scopes required for OAuth type authentication. ' }),
    ),
  })
  .openapi({
    required: ['tokenUrl', 'authCodeUrl', 'oAuthScopes'],
    description: ' The OAuth properties required for OAuth type authentication. ',
  })
  .openapi('OAuthProperties')

const SAPODataConnectorProfilePropertiesSchema = z
  .object({
    applicationHostUrl: ApplicationHostUrlSchema.and(
      z.any().openapi({ description: ' The location of the SAPOData resource. ' }),
    ),
    applicationServicePath: ApplicationServicePathSchema.and(
      z.any().openapi({ description: ' The application path to catalog service. ' }),
    ),
    portNumber: PortNumberSchema.and(
      z.any().openapi({ description: ' The port number of the SAPOData instance. ' }),
    ),
    clientNumber: ClientNumberSchema.and(
      z
        .any()
        .openapi({ description: ' The client number for the client creating the connection. ' }),
    ),
    logonLanguage: LogonLanguageSchema.and(
      z.any().openapi({ description: ' The logon language of SAPOData instance. ' }),
    ).exactOptional(),
    privateLinkServiceName: PrivateLinkServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The SAPOData Private Link service name to be used for private data transfers. ',
        }),
    ).exactOptional(),
    oAuthProperties: OAuthPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' The SAPOData OAuth properties required for OAuth type authentication. ',
        }),
    ).exactOptional(),
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

const OAuth2GrantTypeSchema = z
  .enum(['CLIENT_CREDENTIALS', 'AUTHORIZATION_CODE'])
  .openapi('OAuth2GrantType')

const CustomPropertyValueSchema = z.string().regex(/\S+/).max(2048).openapi('CustomPropertyValue')

const TokenUrlCustomPropertiesSchema = z
  .record(z.string(), CustomPropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TokenUrlCustomProperties')

const OAuth2PropertiesSchema = z
  .object({
    tokenUrl: TokenUrlSchema.and(
      z.any().openapi({ description: 'The token URL required for OAuth 2.0 authentication.' }),
    ),
    oAuth2GrantType: OAuth2GrantTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The OAuth 2.0 grant type used by connector for OAuth 2.0 authentication.',
        }),
    ),
    tokenUrlCustomProperties: TokenUrlCustomPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Associates your token URL with a map of properties that you define. Use this parameter to provide any additional details that the connector requires to authenticate your request.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['tokenUrl', 'oAuth2GrantType'],
    description: 'The OAuth 2.0 properties required for OAuth 2.0 authentication.',
  })
  .openapi('OAuth2Properties')

const CustomConnectorProfilePropertiesSchema = z
  .object({
    profileProperties: ProfilePropertiesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of properties that are required to create a profile for the custom connector.',
        }),
    ).exactOptional(),
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
    instanceUrl: InstanceUrlSchema.and(
      z.any().openapi({ description: 'The location of the Salesforce Pardot resource.' }),
    ).exactOptional(),
    isSandboxEnvironment: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the connector profile applies to a sandbox or production environment.',
        }),
    ).exactOptional(),
    businessUnitId: BusinessUnitIdSchema.and(
      z.any().openapi({ description: 'The business unit id of Salesforce Pardot instance.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The connector-specific profile properties required when using Salesforce Pardot.',
    required: [],
  })
  .openapi('PardotConnectorProfileProperties')

type ConnectorProfilePropertiesType = {
  Amplitude?: z.infer<typeof AmplitudeConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Datadog?: z.infer<typeof DatadogConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Dynatrace?: z.infer<typeof DynatraceConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  GoogleAnalytics?: z.infer<typeof GoogleAnalyticsConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  Honeycode?: z.infer<typeof HoneycodeConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  InforNexus?: z.infer<typeof InforNexusConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  Marketo?: z.infer<typeof MarketoConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Redshift?: z.infer<typeof RedshiftConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Salesforce?: z.infer<typeof SalesforceConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  ServiceNow?: z.infer<typeof ServiceNowConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  Singular?: z.infer<typeof SingularConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Slack?: z.infer<typeof SlackConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Snowflake?: z.infer<typeof SnowflakeConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Trendmicro?: z.infer<typeof TrendmicroConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  Veeva?: z.infer<typeof VeevaConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  Zendesk?: z.infer<typeof ZendeskConnectorProfilePropertiesSchema> & { [key: string]: unknown }
  SAPOData?: z.infer<typeof SAPODataConnectorProfilePropertiesSchema>
  CustomConnector?: z.infer<typeof CustomConnectorProfilePropertiesSchema> & {
    [key: string]: unknown
  }
  Pardot?: z.infer<typeof PardotConnectorProfilePropertiesSchema> & { [key: string]: unknown }
}

const ApiKeySchema = z.string().regex(/\S+/).max(256).openapi('ApiKey')

const SecretKeySchema = z.string().regex(/\S+/).max(256).openapi('SecretKey')

const AmplitudeConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
        }),
    ),
    secretKey: SecretKeySchema.and(
      z.any().openapi({ description: ' The Secret Access Key portion of the credentials. ' }),
    ),
  })
  .openapi({
    required: ['apiKey', 'secretKey'],
    description: ' The connector-specific credentials required when using Amplitude. ',
  })
  .openapi('AmplitudeConnectorProfileCredentials')

const ApplicationKeySchema = z.string().regex(/\S+/).max(512).openapi('ApplicationKey')

const DatadogConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
        }),
    ),
    applicationKey: ApplicationKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API. ',
        }),
    ),
  })
  .openapi({
    required: ['apiKey', 'applicationKey'],
    description: ' The connector-specific credentials required by Datadog. ',
  })
  .openapi('DatadogConnectorProfileCredentials')

const ApiTokenSchema = z.string().regex(/\S+/).max(256).openapi('ApiToken')

const DynatraceConnectorProfileCredentialsSchema = z
  .object({
    apiToken: ApiTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The API tokens used by Dynatrace API to authenticate various API calls. ',
        }),
    ),
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
    authCode: AuthCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The code provided by the connector when it has been authenticated via the connected app. ',
        }),
    ).exactOptional(),
    redirectUri: RedirectUriSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The URL to which the authentication server redirects the browser after authorization has been granted. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack. ',
    required: [],
  })
  .openapi('ConnectorOAuthRequest')

const GoogleAnalyticsConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: ' The identifier for the desired client. ' }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client secret used by the OAuth client to authenticate to the authorization server. ',
        }),
    ),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The credentials used to access protected Google Analytics resources. ',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The credentials used to acquire new access tokens. This is required only for OAuth2 access tokens, and is not required for OAuth1 access tokens. ',
        }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required by Google Analytics. ',
  })
  .openapi('GoogleAnalyticsConnectorProfileCredentials')

const HoneycodeConnectorProfileCredentialsSchema = z
  .object({
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The credentials used to access protected Amazon Honeycode resources. ',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z.any().openapi({ description: ' The credentials used to acquire new access tokens. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
  })
  .openapi({
    description: ' The connector-specific credentials required when using Amazon Honeycode. ',
    required: [],
  })
  .openapi('HoneycodeConnectorProfileCredentials')

const AccessKeyIdSchema = z.string().regex(/\S+/).max(256).openapi('AccessKeyId')

const UsernameSchema = z.string().regex(/\S+/).max(512).openapi('Username')

const KeySchema = z.string().regex(/\S+/).max(512).openapi('Key')

const InforNexusConnectorProfileCredentialsSchema = z
  .object({
    accessKeyId: AccessKeyIdSchema.and(
      z.any().openapi({ description: ' The Access Key portion of the credentials. ' }),
    ),
    userId: UsernameSchema.and(z.any().openapi({ description: ' The identifier for the user. ' })),
    secretAccessKey: KeySchema.and(
      z.any().openapi({ description: ' The secret key used to sign requests. ' }),
    ),
    datakey: KeySchema.and(
      z.any().openapi({ description: ' The encryption keys used to encrypt data. ' }),
    ),
  })
  .openapi({
    required: ['accessKeyId', 'userId', 'secretAccessKey', 'datakey'],
    description: ' The connector-specific profile credentials required by Infor Nexus. ',
  })
  .openapi('InforNexusConnectorProfileCredentials')

const MarketoConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: ' The identifier for the desired client. ' }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client secret used by the OAuth client to authenticate to the authorization server. ',
        }),
    ),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({ description: ' The credentials used to access protected Marketo resources. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required by Marketo. ',
  })
  .openapi('MarketoConnectorProfileCredentials')

const StringSchema = z.string().regex(/.*/).max(2048).openapi('String')

const PasswordSchema = z.string().regex(/.*/).max(512).openapi('Password')

const RedshiftConnectorProfileCredentialsSchema = z
  .object({
    username: StringSchema.and(
      z.any().openapi({ description: ' The name of the user. ' }),
    ).exactOptional(),
    password: PasswordSchema.and(
      z.any().openapi({ description: ' The password that corresponds to the user name. ' }),
    ).exactOptional(),
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
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The credentials used to access protected Salesforce resources. ',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z.any().openapi({ description: ' The credentials used to acquire new access tokens. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
    clientCredentialsArn: ClientCredentialsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The secret manager ARN, which contains the client ID and client secret of the connected app. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The connector-specific profile credentials required when using Salesforce. ',
    required: [],
  })
  .openapi('SalesforceConnectorProfileCredentials')

const ServiceNowConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.and(z.any().openapi({ description: ' The name of the user. ' })),
    password: PasswordSchema.and(
      z.any().openapi({ description: ' The password that corresponds to the user name. ' }),
    ),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using ServiceNow. ',
  })
  .openapi('ServiceNowConnectorProfileCredentials')

const SingularConnectorProfileCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API. ',
        }),
    ),
  })
  .openapi({
    required: ['apiKey'],
    description: ' The connector-specific profile credentials required when using Singular. ',
  })
  .openapi('SingularConnectorProfileCredentials')

const SlackConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: ' The identifier for the client. ' }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client secret used by the OAuth client to authenticate to the authorization server. ',
        }),
    ),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({ description: ' The credentials used to access protected Slack resources. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required when using Slack. ',
  })
  .openapi('SlackConnectorProfileCredentials')

const SnowflakeConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.and(z.any().openapi({ description: ' The name of the user. ' })),
    password: PasswordSchema.and(
      z.any().openapi({ description: ' The password that corresponds to the user name. ' }),
    ),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using Snowflake. ',
  })
  .openapi('SnowflakeConnectorProfileCredentials')

const ApiSecretKeySchema = z.string().regex(/\S+/).max(256).openapi('ApiSecretKey')

const TrendmicroConnectorProfileCredentialsSchema = z
  .object({
    apiSecretKey: ApiSecretKeySchema.and(
      z.any().openapi({ description: ' The Secret Access Key portion of the credentials. ' }),
    ),
  })
  .openapi({
    required: ['apiSecretKey'],
    description: ' The connector-specific profile credentials required when using Trend Micro. ',
  })
  .openapi('TrendmicroConnectorProfileCredentials')

const VeevaConnectorProfileCredentialsSchema = z
  .object({
    username: UsernameSchema.and(z.any().openapi({ description: ' The name of the user. ' })),
    password: PasswordSchema.and(
      z.any().openapi({ description: ' The password that corresponds to the user name. ' }),
    ),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The connector-specific profile credentials required when using Veeva. ',
  })
  .openapi('VeevaConnectorProfileCredentials')

const ZendeskConnectorProfileCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: ' The identifier for the desired client. ' }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client secret used by the OAuth client to authenticate to the authorization server. ',
        }),
    ),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({ description: ' The credentials used to access protected Zendesk resources. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The connector-specific profile credentials required when using Zendesk. ',
  })
  .openapi('ZendeskConnectorProfileCredentials')

const BasicAuthCredentialsSchema = z
  .object({
    username: UsernameSchema.and(
      z.any().openapi({ description: ' The username to use to connect to a resource. ' }),
    ),
    password: PasswordSchema.and(
      z.any().openapi({ description: ' The password to use to connect to a resource.' }),
    ),
  })
  .openapi({
    required: ['username', 'password'],
    description: ' The basic auth credentials required for basic authentication. ',
  })
  .openapi('BasicAuthCredentials')

const OAuthCredentialsSchema = z
  .object({
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: ' The identifier for the desired client. ' }),
    ),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The client secret used by the OAuth client to authenticate to the authorization server. ',
        }),
    ),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description: ' The access token used to access protected SAPOData resources. ',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z.any().openapi({ description: ' The refresh token used to refresh expired access token. ' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The OAuth requirement needed to request security tokens from the connector endpoint. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['clientId', 'clientSecret'],
    description: ' The OAuth credentials required for OAuth type authentication. ',
  })
  .openapi('OAuthCredentials')

const SAPODataConnectorProfileCredentialsSchema = z
  .object({
    basicAuthCredentials: BasicAuthCredentialsSchema.and(
      z.any().openapi({ description: ' The SAPOData basic authentication credentials. ' }),
    ).exactOptional(),
    oAuthCredentials: OAuthCredentialsSchema.and(
      z.any().openapi({ description: ' The SAPOData OAuth type authentication credentials. ' }),
    ).exactOptional(),
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
    clientId: ClientIdSchema.and(
      z.any().openapi({ description: 'The identifier for the desired client.' }),
    ).exactOptional(),
    clientSecret: ClientSecretSchema.and(
      z
        .any()
        .openapi({
          description:
            'The client secret used by the OAuth client to authenticate to the authorization server.',
        }),
    ).exactOptional(),
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The access token used to access the connector on your behalf.' }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The refresh token used to refresh an expired access token.' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
  })
  .openapi({
    description: 'The OAuth 2.0 credentials required for OAuth 2.0 authentication.',
    required: [],
  })
  .openapi('OAuth2Credentials')

const ApiKeyCredentialsSchema = z
  .object({
    apiKey: ApiKeySchema.and(
      z.any().openapi({ description: 'The API key required for API key authentication.' }),
    ),
    apiSecretKey: ApiSecretKeySchema.and(
      z.any().openapi({ description: 'The API secret key required for API key authentication.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['apiKey'],
    description: 'The API key credentials required for API key authentication.',
  })
  .openapi('ApiKeyCredentials')

const CustomAuthenticationTypeSchema = z
  .string()
  .regex(/\S+/)
  .max(256)
  .openapi('CustomAuthenticationType')

const CredentialsMapValueSchema = z.string().regex(/\S+/).max(2048).openapi('CredentialsMapValue')

const CredentialsMapSchema = z
  .record(z.string(), CredentialsMapValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('CredentialsMap')

const CustomAuthCredentialsSchema = z
  .object({
    customAuthenticationType: CustomAuthenticationTypeSchema.and(
      z.any().openapi({ description: 'The custom authentication type that the connector uses.' }),
    ),
    credentialsMap: CredentialsMapSchema.and(
      z.any().openapi({ description: 'A map that holds custom authentication credentials.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['customAuthenticationType'],
    description: 'The custom credentials required for custom authentication.',
  })
  .openapi('CustomAuthCredentials')

const CustomConnectorProfileCredentialsSchema = z
  .object({
    authenticationType: AuthenticationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The authentication type that the custom connector uses for authenticating while creating a connector profile.',
        }),
    ),
    basic: BasicAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The basic credentials that are required for the authentication of the user.',
        }),
    ).exactOptional(),
    oauth2: OAuth2CredentialsSchema.and(
      z
        .any()
        .openapi({
          description: 'The OAuth 2.0 credentials required for the authentication of the user.',
        }),
    ).exactOptional(),
    apiKey: ApiKeyCredentialsSchema.and(
      z.any().openapi({ description: 'The API keys required for the authentication of the user.' }),
    ).exactOptional(),
    custom: CustomAuthCredentialsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the connector uses the custom authentication mechanism, this holds the required credentials.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['authenticationType'],
    description:
      'The connector-specific profile credentials that are required when using the custom connector.',
  })
  .openapi('CustomConnectorProfileCredentials')

const PardotConnectorProfileCredentialsSchema = z
  .object({
    accessToken: AccessTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The credentials used to access protected Salesforce Pardot resources.',
        }),
    ).exactOptional(),
    refreshToken: RefreshTokenSchema.and(
      z.any().openapi({ description: 'The credentials used to acquire new access tokens.' }),
    ).exactOptional(),
    oAuthRequest: ConnectorOAuthRequestSchema.exactOptional(),
    clientCredentialsArn: ClientCredentialsArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The secret manager ARN, which contains the client ID and client secret of the connected app.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The connector-specific profile credentials required when using Salesforce Pardot.',
    required: [],
  })
  .openapi('PardotConnectorProfileCredentials')

type ConnectorProfileCredentialsType = {
  Amplitude?: z.infer<typeof AmplitudeConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Datadog?: z.infer<typeof DatadogConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Dynatrace?: z.infer<typeof DynatraceConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  GoogleAnalytics?: z.infer<typeof GoogleAnalyticsConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Honeycode?: z.infer<typeof HoneycodeConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  InforNexus?: z.infer<typeof InforNexusConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Marketo?: z.infer<typeof MarketoConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Redshift?: z.infer<typeof RedshiftConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Salesforce?: z.infer<typeof SalesforceConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  ServiceNow?: z.infer<typeof ServiceNowConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Singular?: z.infer<typeof SingularConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Slack?: z.infer<typeof SlackConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Snowflake?: z.infer<typeof SnowflakeConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Trendmicro?: z.infer<typeof TrendmicroConnectorProfileCredentialsSchema> & {
    [key: string]: unknown
  }
  Veeva?: z.infer<typeof VeevaConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  Zendesk?: z.infer<typeof ZendeskConnectorProfileCredentialsSchema> & { [key: string]: unknown }
  SAPOData?: z.infer<typeof SAPODataConnectorProfileCredentialsSchema>
  CustomConnector?: z.infer<typeof CustomConnectorProfileCredentialsSchema>
  Pardot?: z.infer<typeof PardotConnectorProfileCredentialsSchema> & { [key: string]: unknown }
}

const ScheduleExpressionSchema = z.string().regex(/.*/).max(256).openapi('ScheduleExpression')

const DataPullModeSchema = z.enum(['Incremental', 'Complete']).openapi('DataPullMode')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const TimezoneSchema = z.string().regex(/.*/).max(256).openapi('Timezone')

const ScheduleOffsetSchema = z.int().min(0).max(36000).openapi('ScheduleOffset')

const FlowErrorDeactivationThresholdSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('FlowErrorDeactivationThreshold')

const ScheduledTriggerPropertiesSchema = z
  .object({
    scheduleExpression: ScheduleExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The scheduling expression that determines the rate at which the schedule will run, for example <code>rate(5minutes)</code>. ',
        }),
    ),
    dataPullMode: DataPullModeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether a scheduled flow has an incremental data transfer or a complete data transfer for each flow run. ',
        }),
    ).exactOptional(),
    scheduleStartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the scheduled flow starts. The time is formatted as a timestamp that follows the ISO 8601 standard, such as <code>2022-04-26T13:00:00-07:00</code>.',
        }),
    ).exactOptional(),
    scheduleEndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the scheduled flow ends. The time is formatted as a timestamp that follows the ISO 8601 standard, such as <code>2022-04-27T13:00:00-07:00</code>.',
        }),
    ).exactOptional(),
    timezone: TimezoneSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies the time zone used when referring to the dates and times of a scheduled flow, such as <code>America/New_York</code>. This time zone is only a descriptive label. It doesn't affect how Amazon AppFlow interprets the timestamps that you specify to schedule the flow.</p> <p>If you want to schedule a flow by using times in a particular time zone, indicate the time zone as a UTC offset in your timestamps. For example, the UTC offsets for the <code>America/New_York</code> timezone are <code>-04:00</code> EDT and <code>-05:00 EST</code>.</p>",
        }),
    ).exactOptional(),
    scheduleOffset: ScheduleOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the optional offset that is added to the time interval for a schedule-triggered flow. ',
        }),
    ).exactOptional(),
    firstExecutionFrom: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the date range for the records to import from the connector in the first flow run. ',
        }),
    ).exactOptional(),
    flowErrorDeactivationThreshold: FlowErrorDeactivationThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Defines how many times a scheduled flow fails consecutively before Amazon AppFlow deactivates it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['scheduleExpression'],
    description:
      ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
  })
  .openapi('ScheduledTriggerProperties')

type TriggerPropertiesType = {
  Scheduled?: z.infer<typeof ScheduledTriggerPropertiesSchema> & { [key: string]: unknown }
}

const ARNSchema = z
  .string()
  .regex(/arn:aws:.*:.*:[0-9]+:.*/)
  .max(512)
  .openapi('ARN')

const LambdaConnectorProvisioningConfigSchema = z
  .object({
    lambdaArn: ARNSchema.and(
      z.any().openapi({ description: 'Lambda ARN of the connector being registered.' }),
    ),
  })
  .openapi({
    required: ['lambdaArn'],
    description:
      'Contains information about the configuration of the lambda which is being registered as the connector.',
  })
  .openapi('LambdaConnectorProvisioningConfig')

type ConnectorProvisioningConfigType = {
  lambda?: z.infer<typeof LambdaConnectorProvisioningConfigSchema> & { [key: string]: unknown }
}

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

type ConnectorOperatorType = {
  Amplitude?: z.infer<typeof AmplitudeConnectorOperatorSchema> & { [key: string]: unknown }
  Datadog?: z.infer<typeof DatadogConnectorOperatorSchema> & { [key: string]: unknown }
  Dynatrace?: z.infer<typeof DynatraceConnectorOperatorSchema> & { [key: string]: unknown }
  GoogleAnalytics?: z.infer<typeof GoogleAnalyticsConnectorOperatorSchema> & {
    [key: string]: unknown
  }
  InforNexus?: z.infer<typeof InforNexusConnectorOperatorSchema> & { [key: string]: unknown }
  Marketo?: z.infer<typeof MarketoConnectorOperatorSchema> & { [key: string]: unknown }
  S3?: z.infer<typeof S3ConnectorOperatorSchema> & { [key: string]: unknown }
  Salesforce?: z.infer<typeof SalesforceConnectorOperatorSchema> & { [key: string]: unknown }
  ServiceNow?: z.infer<typeof ServiceNowConnectorOperatorSchema> & { [key: string]: unknown }
  Singular?: z.infer<typeof SingularConnectorOperatorSchema> & { [key: string]: unknown }
  Slack?: z.infer<typeof SlackConnectorOperatorSchema> & { [key: string]: unknown }
  Trendmicro?: z.infer<typeof TrendmicroConnectorOperatorSchema> & { [key: string]: unknown }
  Veeva?: z.infer<typeof VeevaConnectorOperatorSchema> & { [key: string]: unknown }
  Zendesk?: z.infer<typeof ZendeskConnectorOperatorSchema> & { [key: string]: unknown }
  SAPOData?: z.infer<typeof SAPODataConnectorOperatorSchema> & { [key: string]: unknown }
  CustomConnector?: z.infer<typeof OperatorSchema> & { [key: string]: unknown }
  Pardot?: z.infer<typeof PardotConnectorOperatorSchema> & { [key: string]: unknown }
}

const ConnectorProfileArnSchema = z
  .string()
  .regex(/arn:aws:appflow:.*:[0-9]+:.*/)
  .max(512)
  .openapi('ConnectorProfileArn')

const CreateConnectorProfileResponseSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) of the connector profile. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateConnectorProfileResponse')

const ConnectorProfilePropertiesSchema: z.ZodType<ConnectorProfilePropertiesType> = z
  .lazy(() =>
    z
      .object({
        Amplitude: AmplitudeConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Amplitude. ' }),
        ).exactOptional(),
        Datadog: DatadogConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Datadog. ' }),
        ).exactOptional(),
        Dynatrace: DynatraceConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Dynatrace. ' }),
        ).exactOptional(),
        GoogleAnalytics: GoogleAnalyticsConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required Google Analytics. ',
            }),
        ).exactOptional(),
        Honeycode: HoneycodeConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by Amazon Honeycode. ',
            }),
        ).exactOptional(),
        InforNexus: InforNexusConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by Infor Nexus. ',
            }),
        ).exactOptional(),
        Marketo: MarketoConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Marketo. ' }),
        ).exactOptional(),
        Redshift: RedshiftConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by Amazon Redshift. ',
            }),
        ).exactOptional(),
        Salesforce: SalesforceConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by Salesforce. ',
            }),
        ).exactOptional(),
        ServiceNow: ServiceNowConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by serviceNow. ',
            }),
        ).exactOptional(),
        Singular: SingularConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Singular. ' }),
        ).exactOptional(),
        Slack: SlackConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Slack. ' }),
        ).exactOptional(),
        Snowflake: SnowflakeConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Snowflake. ' }),
        ).exactOptional(),
        Trendmicro: TrendmicroConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific properties required by Trend Micro. ',
            }),
        ).exactOptional(),
        Veeva: VeevaConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Veeva. ' }),
        ).exactOptional(),
        Zendesk: ZendeskConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({ description: ' The connector-specific properties required by Zendesk. ' }),
        ).exactOptional(),
        SAPOData: SAPODataConnectorProfilePropertiesSchema.exactOptional(),
        CustomConnector: CustomConnectorProfilePropertiesSchema.and(
          z.any().openapi({ description: 'The properties required by the custom connector.' }),
        ).exactOptional(),
        Pardot: PardotConnectorProfilePropertiesSchema.and(
          z
            .any()
            .openapi({
              description: 'The connector-specific properties required by Salesforce Pardot.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: ' The connector-specific profile properties required by each connector. ',
        required: [],
      }),
  )
  .openapi('ConnectorProfileProperties')

const ConnectorProfileCredentialsSchema: z.ZodType<ConnectorProfileCredentialsType> = z
  .lazy(() =>
    z
      .object({
        Amplitude: AmplitudeConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Amplitude. ',
            }),
        ).exactOptional(),
        Datadog: DatadogConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Datadog. ',
            }),
        ).exactOptional(),
        Dynatrace: DynatraceConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Dynatrace. ',
            }),
        ).exactOptional(),
        GoogleAnalytics: GoogleAnalyticsConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The connector-specific credentials required when using Google Analytics. ',
            }),
        ).exactOptional(),
        Honeycode: HoneycodeConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The connector-specific credentials required when using Amazon Honeycode. ',
            }),
        ).exactOptional(),
        InforNexus: InforNexusConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Infor Nexus. ',
            }),
        ).exactOptional(),
        Marketo: MarketoConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Marketo. ',
            }),
        ).exactOptional(),
        Redshift: RedshiftConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The connector-specific credentials required when using Amazon Redshift. ',
            }),
        ).exactOptional(),
        Salesforce: SalesforceConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Salesforce. ',
            }),
        ).exactOptional(),
        ServiceNow: ServiceNowConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using ServiceNow. ',
            }),
        ).exactOptional(),
        Singular: SingularConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Singular. ',
            }),
        ).exactOptional(),
        Slack: SlackConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Slack. ',
            }),
        ).exactOptional(),
        Snowflake: SnowflakeConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Snowflake. ',
            }),
        ).exactOptional(),
        Trendmicro: TrendmicroConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Trend Micro. ',
            }),
        ).exactOptional(),
        Veeva: VeevaConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Veeva. ',
            }),
        ).exactOptional(),
        Zendesk: ZendeskConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description: ' The connector-specific credentials required when using Zendesk. ',
            }),
        ).exactOptional(),
        SAPOData: SAPODataConnectorProfileCredentialsSchema.exactOptional(),
        CustomConnector: CustomConnectorProfileCredentialsSchema.exactOptional(),
        Pardot: PardotConnectorProfileCredentialsSchema.and(
          z
            .any()
            .openapi({
              description:
                'The connector-specific credentials required when using Salesforce Pardot.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: ' The connector-specific credentials required by a connector. ',
        required: [],
      }),
  )
  .openapi('ConnectorProfileCredentials')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConnectorAuthenticationExceptionSchema = z.any().openapi('ConnectorAuthenticationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const FlowArnSchema = z
  .string()
  .regex(/arn:aws:appflow:.*:[0-9]+:.*/)
  .max(512)
  .openapi('FlowArn')

const FlowStatusSchema = z
  .enum(['Active', 'Deprecated', 'Deleted', 'Draft', 'Errored', 'Suspended'])
  .openapi('FlowStatus')

const CreateFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.and(
      z.any().openapi({ description: " The flow's Amazon Resource Name (ARN). " }),
    ).exactOptional(),
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: ' Indicates the current status of the flow. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateFlowResponse')

const TriggerTypeSchema = z.enum(['Scheduled', 'Event', 'OnDemand']).openapi('TriggerType')

const TriggerPropertiesSchema: z.ZodType<TriggerPropertiesType> = z
  .lazy(() =>
    z
      .object({
        Scheduled: ScheduledTriggerPropertiesSchema.and(
          z
            .any()
            .openapi({
              description:
                ' Specifies the configuration details of a schedule-triggered flow as defined by the user. ',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          ' Specifies the configuration details that control the trigger for a flow. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
        required: [],
      }),
  )
  .openapi('TriggerProperties')

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

const ApiVersionSchema = z.string().regex(/\S+/).max(256).openapi('ApiVersion')

const ConnectorProfileNameSchema = z
  .string()
  .regex(/[\w\/!@#+=.-]+/)
  .max(256)
  .openapi('ConnectorProfileName')

const ObjectSchema = z.string().regex(/\S+/).max(512).openapi('Object')

const AmplitudeSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Amplitude flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Amplitude is being used as a source. ',
  })
  .openapi('AmplitudeSourceProperties')

const DatadogSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Datadog flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Datadog is being used as a source. ',
  })
  .openapi('DatadogSourceProperties')

const DynatraceSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Dynatrace flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Dynatrace is being used as a source. ',
  })
  .openapi('DynatraceSourceProperties')

const GoogleAnalyticsSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({ description: ' The object specified in the Google Analytics flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Google Analytics is being used as a source. ',
  })
  .openapi('GoogleAnalyticsSourceProperties')

const InforNexusSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Infor Nexus flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Infor Nexus is being used as a source. ',
  })
  .openapi('InforNexusSourceProperties')

const MarketoSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Marketo flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Marketo is being used as a source. ',
  })
  .openapi('MarketoSourceProperties')

const S3InputFileTypeSchema = z.enum(['CSV', 'JSON']).openapi('S3InputFileType')

const S3InputFormatConfigSchema = z
  .object({
    s3InputFileType: S3InputFileTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The file type that Amazon AppFlow gets from your Amazon S3 bucket. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' When you use Amazon S3 as the source, the configuration format that you provide the flow input data. ',
    required: [],
  })
  .openapi('S3InputFormatConfig')

const S3SourcePropertiesSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon S3 bucket name where the source files are stored. ' }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the Amazon S3 bucket in which the source files are stored. ',
        }),
    ).exactOptional(),
    s3InputFormatConfig: S3InputFormatConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['bucketName'],
    description:
      ' The properties that are applied when Amazon S3 is being used as the flow source. ',
  })
  .openapi('S3SourceProperties')

const SalesforceDataTransferApiSchema = z
  .enum(['AUTOMATIC', 'BULKV2', 'REST_SYNC'])
  .openapi('SalesforceDataTransferApi')

const SalesforceSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Salesforce flow source. ' }),
    ),
    enableDynamicFieldUpdate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The flag that enables dynamic fetching of new (recently added) fields in the Salesforce objects while running a flow. ',
        }),
    ).exactOptional(),
    includeDeletedRecords: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates whether Amazon AppFlow includes deleted files in the flow run. ',
        }),
    ).exactOptional(),
    dataTransferApi: SalesforceDataTransferApiSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data from Salesforce.</p> <dl> <dt>AUTOMATIC</dt> <dd> <p>The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers from Salesforce. If your flow transfers fewer than 1,000,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p> <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900,000 records, and it might use Bulk API 2.0 on the next day to transfer 1,100,000 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.</p> <p>By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.</p> </dd> <dt>BULKV2</dt> <dd> <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.</p> <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p> </dd> <dt>REST_SYNC</dt> <dd> <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail wituh a timed out error.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Salesforce is being used as a source. ',
  })
  .openapi('SalesforceSourceProperties')

const ServiceNowSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the ServiceNow flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when ServiceNow is being used as a source. ',
  })
  .openapi('ServiceNowSourceProperties')

const SingularSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Singular flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Singular is being used as a source. ',
  })
  .openapi('SingularSourceProperties')

const SlackSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Slack flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when Slack is being used as a source. ',
  })
  .openapi('SlackSourceProperties')

const TrendmicroSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Trend Micro flow source. ' }),
    ),
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
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Veeva flow source. ' }),
    ),
    documentType: DocumentTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The document type specified in the Veeva document extract flow.',
        }),
    ).exactOptional(),
    includeSourceFiles: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value to include source files in Veeva document extract flow.',
        }),
    ).exactOptional(),
    includeRenditions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Boolean value to include file renditions in Veeva document extract flow.',
        }),
    ).exactOptional(),
    includeAllVersions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Boolean value to include All Versions of files in Veeva document extract flow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when using Veeva as a flow source. ',
  })
  .openapi('VeevaSourceProperties')

const ZendeskSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Zendesk flow source. ' }),
    ),
  })
  .openapi({
    required: ['object'],
    description: ' The properties that are applied when using Zendesk as a flow source. ',
  })
  .openapi('ZendeskSourceProperties')

const SAPODataSourcePropertiesSchema = z
  .object({
    objectPath: ObjectSchema.and(
      z.any().openapi({ description: ' The object path specified in the SAPOData flow source. ' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The properties that are applied when using SAPOData as a flow source. ',
    required: [],
  })
  .openapi('SAPODataSourceProperties')

const EntityNameSchema = z.string().regex(/\S+/).max(1024).openapi('EntityName')

const CustomPropertiesSchema = z
  .record(z.string(), CustomPropertyValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('CustomProperties')

const CustomConnectorSourcePropertiesSchema = z
  .object({
    entityName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The entity specified in the custom connector as a source in the flow.',
        }),
    ),
    customProperties: CustomPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Custom properties that are required to use the custom connector as a source.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entityName'],
    description:
      'The properties that are applied when the custom connector is being used as a source.',
  })
  .openapi('CustomConnectorSourceProperties')

const PardotSourcePropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({ description: 'The object specified in the Salesforce Pardot flow source.' }),
    ),
  })
  .openapi({
    required: ['object'],
    description:
      'The properties that are applied when Salesforce Pardot is being used as a source.',
  })
  .openapi('PardotSourceProperties')

const SourceConnectorPropertiesSchema = z
  .object({
    Amplitude: AmplitudeSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Amplitude. ',
        }),
    ).exactOptional(),
    Datadog: DatadogSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Datadog. ',
        }),
    ).exactOptional(),
    Dynatrace: DynatraceSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Dynatrace. ',
        }),
    ).exactOptional(),
    GoogleAnalytics: GoogleAnalyticsSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the information that is required for querying Google Analytics. ',
        }),
    ).exactOptional(),
    InforNexus: InforNexusSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Infor Nexus. ',
        }),
    ).exactOptional(),
    Marketo: MarketoSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Marketo. ',
        }),
    ).exactOptional(),
    S3: S3SourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Amazon S3. ',
        }),
    ).exactOptional(),
    Salesforce: SalesforceSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Salesforce. ',
        }),
    ).exactOptional(),
    ServiceNow: ServiceNowSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying ServiceNow. ',
        }),
    ).exactOptional(),
    Singular: SingularSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Singular. ',
        }),
    ).exactOptional(),
    Slack: SlackSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Slack. ',
        }),
    ).exactOptional(),
    Trendmicro: TrendmicroSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Trend Micro. ',
        }),
    ).exactOptional(),
    Veeva: VeevaSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Veeva. ',
        }),
    ).exactOptional(),
    Zendesk: ZendeskSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the information that is required for querying Zendesk. ',
        }),
    ).exactOptional(),
    SAPOData: SAPODataSourcePropertiesSchema.exactOptional(),
    CustomConnector: CustomConnectorSourcePropertiesSchema.exactOptional(),
    Pardot: PardotSourcePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies the information that is required for querying Salesforce Pardot.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Specifies the information that is required to query a particular connector. ',
    required: [],
  })
  .openapi('SourceConnectorProperties')

const DatetimeTypeFieldNameSchema = z.string().regex(/.*/).max(256).openapi('DatetimeTypeFieldName')

const IncrementalPullConfigSchema = z
  .object({
    datetimeTypeFieldName: DatetimeTypeFieldNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A field that specifies the date time or timestamp field as the criteria to use when importing incremental records from the source. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Specifies the configuration used when importing incremental records from the source. ',
    required: [],
  })
  .openapi('IncrementalPullConfig')

const ErrorHandlingConfigSchema = z
  .object({
    failOnFirstDestinationError: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies if the flow should fail after the first instance of a failure when attempting to place data in the destination. ',
        }),
    ).exactOptional(),
    bucketPrefix: BucketPrefixSchema.and(
      z.any().openapi({ description: ' Specifies the Amazon S3 bucket prefix. ' }),
    ).exactOptional(),
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: ' Specifies the name of the Amazon S3 bucket. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The settings that determine how Amazon AppFlow handles an error when placing data in the destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
    required: [],
  })
  .openapi('ErrorHandlingConfig')

const RedshiftDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' The object specified in the Amazon Redshift flow destination. ',
        }),
    ),
    intermediateBucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift. ',
        }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the bucket in which Amazon AppFlow places the destination files. ',
        }),
    ).exactOptional(),
    errorHandlingConfig: ErrorHandlingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The settings that determine how Amazon AppFlow handles an error when placing data in the Amazon Redshift destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
        }),
    ).exactOptional(),
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
    prefixType: PrefixTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Determines the format of the prefix, and whether it applies to the file name, file path, or both. ',
        }),
    ).exactOptional(),
    prefixFormat: PrefixFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            "Determines the level of granularity for the date and time that's included in the prefix. ",
        }),
    ).exactOptional(),
    pathPrefixHierarchy: PathPrefixHierarchySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether the destination file path includes either or both of the following elements:</p> <dl> <dt>EXECUTION_ID</dt> <dd> <p>The ID that Amazon AppFlow assigns to the flow run.</p> </dd> <dt>SCHEMA_VERSION</dt> <dd> <p>The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:</p> <ul> <li> <p>Source-to-destination field mappings</p> </li> <li> <p>Field data types</p> </li> <li> <p>Partition keys</p> </li> </ul> </dd> </dl>',
        }),
    ).exactOptional(),
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
    aggregationType: AggregationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether Amazon AppFlow aggregates the flow records into a single file, or leave them unaggregated. ',
        }),
    ).exactOptional(),
    targetFileSize: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The desired file size, in MB, for each output file that Amazon AppFlow writes to the flow destination. For each file, Amazon AppFlow attempts to achieve the size that you specify. The actual file sizes might differ from this target based on the number and size of the records that each file contains.',
        }),
    ).exactOptional(),
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
    fileType: FileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the file type that Amazon AppFlow places in the Amazon S3 bucket. ',
        }),
    ).exactOptional(),
    prefixConfig: PrefixConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Determines the prefix that Amazon AppFlow applies to the folder name in the Amazon S3 bucket. You can name folders according to the flow frequency and date. ',
        }),
    ).exactOptional(),
    aggregationConfig: AggregationConfigSchema.exactOptional(),
    preserveSourceDataTyping: JavaBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If your file output format is Parquet, use this parameter to set whether Amazon AppFlow preserves the data types in your source data when it writes the output to Amazon S3. </p> <ul> <li> <p> <code>true</code>: Amazon AppFlow preserves the data types when it writes to Amazon S3. For example, an integer or <code>1</code> in your source data is still an integer in your output.</p> </li> <li> <p> <code>false</code>: Amazon AppFlow converts all of the source data into strings when it writes to Amazon S3. For example, an integer of <code>1</code> in your source data becomes the string <code>"1"</code> in the output.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. ',
    required: [],
  })
  .openapi('S3OutputFormatConfig')

const S3DestinationPropertiesSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon S3 bucket name in which Amazon AppFlow places the transferred data. ',
        }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
        }),
    ).exactOptional(),
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

const WriteOperationTypeSchema = z
  .enum(['INSERT', 'UPSERT', 'UPDATE', 'DELETE'])
  .openapi({
    description:
      ' The possible write operations in the destination connector. When this value is not provided, this defaults to the <code>INSERT</code> operation. ',
  })
  .openapi('WriteOperationType')

const SalesforceDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({ description: ' The object specified in the Salesforce flow destination. ' }),
    ),
    idFieldNames: IdFieldNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update or delete. ',
        }),
    ).exactOptional(),
    errorHandlingConfig: ErrorHandlingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The settings that determine how Amazon AppFlow handles an error when placing data in the Salesforce destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
        }),
    ).exactOptional(),
    writeOperationType: WriteOperationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This specifies the type of write operation to be performed in Salesforce. When the value is <code>UPSERT</code>, then <code>idFieldNames</code> is required. ',
        }),
    ).exactOptional(),
    dataTransferApi: SalesforceDataTransferApiSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Specifies which Salesforce API is used by Amazon AppFlow when your flow transfers data to Salesforce.</p> <dl> <dt>AUTOMATIC</dt> <dd> <p>The default. Amazon AppFlow selects which API to use based on the number of records that your flow transfers to Salesforce. If your flow transfers fewer than 1,000 records, Amazon AppFlow uses Salesforce REST API. If your flow transfers 1,000 records or more, Amazon AppFlow uses Salesforce Bulk API 2.0.</p> <p>Each of these Salesforce APIs structures data differently. If Amazon AppFlow selects the API automatically, be aware that, for recurring flows, the data output might vary from one flow run to the next. For example, if a flow runs daily, it might use REST API on one day to transfer 900 records, and it might use Bulk API 2.0 on the next day to transfer 1,100 records. For each of these flow runs, the respective Salesforce API formats the data differently. Some of the differences include how dates are formatted and null values are represented. Also, Bulk API 2.0 doesn't transfer Salesforce compound fields.</p> <p>By choosing this option, you optimize flow performance for both small and large data transfers, but the tradeoff is inconsistent formatting in the output.</p> </dd> <dt>BULKV2</dt> <dd> <p>Amazon AppFlow uses only Salesforce Bulk API 2.0. This API runs asynchronous data transfers, and it's optimal for large sets of data. By choosing this option, you ensure that your flow writes consistent output, but you optimize performance only for large data transfers.</p> <p>Note that Bulk API 2.0 does not transfer Salesforce compound fields.</p> </dd> <dt>REST_SYNC</dt> <dd> <p>Amazon AppFlow uses only Salesforce REST API. By choosing this option, you ensure that your flow writes consistent output, but you decrease performance for large data transfers that are better suited for Bulk API 2.0. In some cases, if your flow attempts to transfer a vary large set of data, it might fail with a timed out error.</p> </dd> </dl>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Salesforce is being used as a destination. ',
  })
  .openapi('SalesforceDestinationProperties')

const SnowflakeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: ' The object specified in the Snowflake flow destination. ' }),
    ),
    intermediateBucketName: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The intermediate bucket that Amazon AppFlow uses when moving data into Snowflake. ',
        }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the destination bucket in which Amazon AppFlow places the files. ',
        }),
    ).exactOptional(),
    errorHandlingConfig: ErrorHandlingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The settings that determine how Amazon AppFlow handles an error when placing data in the Snowflake destination. For example, this setting would determine if the flow should fail after one insertion error, or continue and attempt to insert every record regardless of the initial failure. <code>ErrorHandlingConfig</code> is a part of the destination connector details. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['object', 'intermediateBucketName'],
    description: ' The properties that are applied when Snowflake is being used as a destination. ',
  })
  .openapi('SnowflakeDestinationProperties')

const EventBridgeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' The object specified in the Amazon EventBridge flow destination. ',
        }),
    ),
    errorHandlingConfig: ErrorHandlingConfigSchema.exactOptional(),
  })
  .openapi({
    required: ['object'],
    description:
      ' The properties that are applied when Amazon EventBridge is being used as a destination. ',
  })
  .openapi('EventBridgeDestinationProperties')

const LookoutMetricsDestinationPropertiesSchema = z
  .object({})
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
    fileType: FileTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the file type that Amazon AppFlow places in the Upsolver Amazon S3 bucket. ',
        }),
    ).exactOptional(),
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
    bucketName: UpsolverBucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Upsolver Amazon S3 bucket name in which Amazon AppFlow places the transferred data. ',
        }),
    ),
    bucketPrefix: BucketPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object key for the destination Upsolver Amazon S3 bucket in which Amazon AppFlow places the files. ',
        }),
    ).exactOptional(),
    s3OutputFormatConfig: UpsolverS3OutputFormatConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that determines how data is formatted when Upsolver is used as the flow destination. ',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 's3OutputFormatConfig'],
    description: ' The properties that are applied when Upsolver is used as a destination. ',
  })
  .openapi('UpsolverDestinationProperties')

const HoneycodeDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z
        .any()
        .openapi({
          description: ' The object specified in the Amazon Honeycode flow destination. ',
        }),
    ),
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
    domainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: ' The unique name of the Amazon Connect Customer Profiles domain. ',
        }),
    ),
    objectTypeName: ObjectTypeNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The object specified in the Amazon Connect Customer Profiles flow destination. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['domainName'],
    description:
      ' The properties that are applied when Amazon Connect Customer Profiles is used as a destination. ',
  })
  .openapi('CustomerProfilesDestinationProperties')

const ZendeskDestinationPropertiesSchema = z
  .object({
    object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the Zendesk flow destination.' }),
    ),
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
    object: ObjectSchema.and(
      z.any().openapi({ description: 'The object specified in the Marketo flow destination.' }),
    ),
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
    entityName: EntityNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The entity specified in the custom connector as a destination in the flow.',
        }),
    ),
    errorHandlingConfig: ErrorHandlingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination.',
        }),
    ).exactOptional(),
    writeOperationType: WriteOperationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the type of write operation to be performed in the custom connector when it's used as destination.",
        }),
    ).exactOptional(),
    idFieldNames: IdFieldNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.',
        }),
    ).exactOptional(),
    customProperties: CustomPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            "The custom properties that are specific to the connector when it's used as a destination in the flow.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['entityName'],
    description:
      'The properties that are applied when the custom connector is being used as a destination.',
  })
  .openapi('CustomConnectorDestinationProperties')

const SuccessResponseHandlingConfigSchema = z
  .object({
    bucketPrefix: BucketPrefixSchema.and(
      z.any().openapi({ description: 'The Amazon S3 bucket prefix.' }),
    ).exactOptional(),
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon S3 bucket.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from the destination connector upon a successful insert operation.</p>',
    required: [],
  })
  .openapi('SuccessResponseHandlingConfig')

const SAPODataDestinationPropertiesSchema = z
  .object({
    objectPath: ObjectSchema.and(
      z
        .any()
        .openapi({ description: 'The object path specified in the SAPOData flow destination.' }),
    ),
    successResponseHandlingConfig: SuccessResponseHandlingConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data.</p> <p>For example, this setting would determine where to write the response from a destination connector upon a successful insert operation.</p>',
        }),
    ).exactOptional(),
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
    Redshift: RedshiftDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Amazon Redshift. ' }),
    ).exactOptional(),
    S3: S3DestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Amazon S3. ' }),
    ).exactOptional(),
    Salesforce: SalesforceDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Salesforce. ' }),
    ).exactOptional(),
    Snowflake: SnowflakeDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Snowflake. ' }),
    ).exactOptional(),
    EventBridge: EventBridgeDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Amazon EventBridge. ' }),
    ).exactOptional(),
    LookoutMetrics: LookoutMetricsDestinationPropertiesSchema.and(
      z
        .any()
        .openapi({ description: ' The properties required to query Amazon Lookout for Metrics. ' }),
    ).exactOptional(),
    Upsolver: UpsolverDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Upsolver. ' }),
    ).exactOptional(),
    Honeycode: HoneycodeDestinationPropertiesSchema.and(
      z.any().openapi({ description: ' The properties required to query Amazon Honeycode. ' }),
    ).exactOptional(),
    CustomerProfiles: CustomerProfilesDestinationPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' The properties required to query Amazon Connect Customer Profiles. ',
        }),
    ).exactOptional(),
    Zendesk: ZendeskDestinationPropertiesSchema.and(
      z.any().openapi({ description: 'The properties required to query Zendesk.' }),
    ).exactOptional(),
    Marketo: MarketoDestinationPropertiesSchema.and(
      z.any().openapi({ description: 'The properties required to query Marketo.' }),
    ).exactOptional(),
    CustomConnector: CustomConnectorDestinationPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'The properties that are required to query the custom Connector.',
        }),
    ).exactOptional(),
    SAPOData: SAPODataDestinationPropertiesSchema.and(
      z.any().openapi({ description: 'The properties required to query SAPOData.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' This stores the information that is required to query a particular connector. ',
    required: [],
  })
  .openapi('DestinationConnectorProperties')

const DestinationFlowConfigSchema = z
  .object({
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ),
    apiVersion: ApiVersionSchema.and(
      z.any().openapi({ description: 'The API version that the destination connector uses.' }),
    ).exactOptional(),
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    destinationConnectorProperties: DestinationConnectorPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This stores the information that is required to query a particular connector. ',
        }),
    ),
  })
  .openapi({
    required: ['connectorType', 'destinationConnectorProperties'],
    description:
      ' Contains information about the configuration of destination connectors present in the flow. ',
  })
  .openapi('DestinationFlowConfig')

const SourceFieldsSchema = z.array(StringSchema).openapi('SourceFields')

const ConnectorOperatorSchema: z.ZodType<ConnectorOperatorType> = z
  .lazy(() =>
    z
      .object({
        Amplitude: AmplitudeConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Amplitude source fields. ',
            }),
        ).exactOptional(),
        Datadog: DatadogConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: ' The operation to be performed on the provided Datadog source fields. ',
            }),
        ).exactOptional(),
        Dynatrace: DynatraceConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Dynatrace source fields. ',
            }),
        ).exactOptional(),
        GoogleAnalytics: GoogleAnalyticsConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Google Analytics source fields. ',
            }),
        ).exactOptional(),
        InforNexus: InforNexusConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Infor Nexus source fields. ',
            }),
        ).exactOptional(),
        Marketo: MarketoConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: ' The operation to be performed on the provided Marketo source fields. ',
            }),
        ).exactOptional(),
        S3: S3ConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Amazon S3 source fields. ',
            }),
        ).exactOptional(),
        Salesforce: SalesforceConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Salesforce source fields. ',
            }),
        ).exactOptional(),
        ServiceNow: ServiceNowConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided ServiceNow source fields. ',
            }),
        ).exactOptional(),
        Singular: SingularConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Singular source fields. ',
            }),
        ).exactOptional(),
        Slack: SlackConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: ' The operation to be performed on the provided Slack source fields. ',
            }),
        ).exactOptional(),
        Trendmicro: TrendmicroConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided Trend Micro source fields. ',
            }),
        ).exactOptional(),
        Veeva: VeevaConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: ' The operation to be performed on the provided Veeva source fields. ',
            }),
        ).exactOptional(),
        Zendesk: ZendeskConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description: ' The operation to be performed on the provided Zendesk source fields. ',
            }),
        ).exactOptional(),
        SAPOData: SAPODataConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                ' The operation to be performed on the provided SAPOData source fields. ',
            }),
        ).exactOptional(),
        CustomConnector: OperatorSchema.and(
          z.any().openapi({ description: 'Operators supported by the custom connector.' }),
        ).exactOptional(),
        Pardot: PardotConnectorOperatorSchema.and(
          z
            .any()
            .openapi({
              description:
                'The operation to be performed on the provided Salesforce Pardot source fields.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: ' The operation to be performed on the provided source fields. ',
        required: [],
      }),
  )
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
    sourceFields: SourceFieldsSchema.and(
      z
        .any()
        .openapi({ description: ' The source fields to which a particular task is applied. ' }),
    ),
    connectorOperator: ConnectorOperatorSchema.and(
      z
        .any()
        .openapi({ description: ' The operation to be performed on the provided source fields. ' }),
    ).exactOptional(),
    destinationField: DestinationFieldSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A field in a destination connector, or a field value against which Amazon AppFlow validates a source field. ',
        }),
    ).exactOptional(),
    taskType: TaskTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the particular task implementation that Amazon AppFlow performs. ',
        }),
    ),
    taskProperties: TaskPropertiesMapSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A map used to store task-related information. The execution service looks for particular information based on the <code>TaskType</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['sourceFields', 'taskType'],
    description:
      ' A class for modeling different type of tasks. Task implementation varies based on the <code>TaskType</code>. ',
  })
  .openapi('Task')

const TagValueSchema = z
  .string()
  .regex(/[\s\w+-=\.:\/@]*/)
  .max(256)
  .openapi('TagValue')

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
    roleArn: GlueDataCatalogIAMRoleSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an IAM role that grants Amazon AppFlow the permissions it needs to create Data Catalog tables, databases, and partitions.</p> <p>For an example IAM policy that has the required permissions, see <a href="https://docs.aws.amazon.com/appflow/latest/userguide/security_iam_id-based-policy-examples.html">Identity-based policy examples for Amazon AppFlow</a>.</p>',
        }),
    ),
    databaseName: GlueDataCatalogDatabaseNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the Data Catalog database that stores the metadata tables that Amazon AppFlow creates in your Amazon Web Services account. These tables contain metadata for the data that's transferred by the flow that you configure with this parameter.</p> <note> <p>When you configure a new flow with this parameter, you must specify an existing database.</p> </note>",
        }),
    ),
    tablePrefix: GlueDataCatalogTablePrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'A naming prefix for each Data Catalog table that Amazon AppFlow creates for the flow that you configure with this setting. Amazon AppFlow adds the prefix to the beginning of the each table name.',
        }),
    ),
  })
  .openapi({
    required: ['roleArn', 'databaseName', 'tablePrefix'],
    description:
      "<p>Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog. When Amazon AppFlow catalogs your data, it stores metadata in Data Catalog tables. This metadata represents the data that's transferred by the flow that you configure with these settings.</p> <note> <p>You can configure a flow with these settings only when the flow destination is Amazon S3.</p> </note>",
  })
  .openapi('GlueDataCatalogConfig')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConnectorServerExceptionSchema = z.any().openapi('ConnectorServerException')

const DeleteConnectorProfileResponseSchema = z.object({}).openapi('DeleteConnectorProfileResponse')

const DeleteFlowResponseSchema = z.object({}).openapi('DeleteFlowResponse')

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

const TriggerTypeListSchema = z.array(TriggerTypeSchema).openapi('TriggerTypeList')

const AmplitudeMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Amplitude. ' })
  .openapi('AmplitudeMetadata')

const DatadogMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Datadog. ' })
  .openapi('DatadogMetadata')

const DynatraceMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Dynatrace. ' })
  .openapi('DynatraceMetadata')

const GoogleAnalyticsMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.and(
      z
        .any()
        .openapi({
          description: ' The desired authorization scope for the Google Analytics account. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Google Analytics. ', required: [] })
  .openapi('GoogleAnalyticsMetadata')

const InforNexusMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Infor Nexus. ' })
  .openapi('InforNexusMetadata')

const MarketoMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Marketo. ' })
  .openapi('MarketoMetadata')

const RedshiftMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Amazon Redshift. ' })
  .openapi('RedshiftMetadata')

const S3MetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Amazon S3. ' })
  .openapi('S3Metadata')

const SalesforceDataTransferApiListSchema = z
  .array(SalesforceDataTransferApiSchema)
  .openapi('SalesforceDataTransferApiList')

const SalesforceMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.and(
      z
        .any()
        .openapi({ description: ' The desired authorization scope for the Salesforce account. ' }),
    ).exactOptional(),
    dataTransferApis: SalesforceDataTransferApiListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Salesforce APIs that you can have Amazon AppFlow use when your flows transfers data to or from Salesforce.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Salesforce. ', required: [] })
  .openapi('SalesforceMetadata')

const ServiceNowMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to ServiceNow. ' })
  .openapi('ServiceNowMetadata')

const SingularMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Singular. ' })
  .openapi('SingularMetadata')

const SlackMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.and(
      z.any().openapi({ description: ' The desired authorization scope for the Slack account. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Slack. ', required: [] })
  .openapi('SlackMetadata')

const RegionListSchema = z.array(RegionSchema).openapi('RegionList')

const SnowflakeMetadataSchema = z
  .object({
    supportedRegions: RegionListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the supported Amazon Web Services Regions when using Snowflake. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Snowflake. ', required: [] })
  .openapi('SnowflakeMetadata')

const TrendmicroMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Trend Micro. ' })
  .openapi('TrendmicroMetadata')

const VeevaMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Veeva. ' })
  .openapi('VeevaMetadata')

const ZendeskMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.and(
      z
        .any()
        .openapi({ description: ' The desired authorization scope for the Zendesk account. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Zendesk. ', required: [] })
  .openapi('ZendeskMetadata')

const EventBridgeMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Amazon EventBridge. ' })
  .openapi('EventBridgeMetadata')

const UpsolverMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to Upsolver. ' })
  .openapi('UpsolverMetadata')

const CustomerProfilesMetadataSchema = z
  .object({})
  .openapi({
    description: ' The connector metadata specific to Amazon Connect Customer Profiles. ',
  })
  .openapi('CustomerProfilesMetadata')

const HoneycodeMetadataSchema = z
  .object({
    oAuthScopes: OAuthScopeListSchema.and(
      z
        .any()
        .openapi({
          description: ' The desired authorization scope for the Amazon Honeycode account. ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The connector metadata specific to Amazon Honeycode. ', required: [] })
  .openapi('HoneycodeMetadata')

const SAPODataMetadataSchema = z
  .object({})
  .openapi({ description: ' The connector metadata specific to SAPOData. ' })
  .openapi('SAPODataMetadata')

const PardotMetadataSchema = z
  .object({})
  .openapi({ description: 'The connector metadata specific to Salesforce Pardot.' })
  .openapi('PardotMetadata')

const ConnectorMetadataSchema = z
  .object({
    Amplitude: AmplitudeMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Amplitude. ' }),
    ).exactOptional(),
    Datadog: DatadogMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Datadog. ' }),
    ).exactOptional(),
    Dynatrace: DynatraceMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Dynatrace. ' }),
    ).exactOptional(),
    GoogleAnalytics: GoogleAnalyticsMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Google Analytics. ' }),
    ).exactOptional(),
    InforNexus: InforNexusMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Infor Nexus. ' }),
    ).exactOptional(),
    Marketo: MarketoMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Marketo. ' }),
    ).exactOptional(),
    Redshift: RedshiftMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Amazon Redshift. ' }),
    ).exactOptional(),
    S3: S3MetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Amazon S3. ' }),
    ).exactOptional(),
    Salesforce: SalesforceMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Salesforce. ' }),
    ).exactOptional(),
    ServiceNow: ServiceNowMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to ServiceNow. ' }),
    ).exactOptional(),
    Singular: SingularMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Singular. ' }),
    ).exactOptional(),
    Slack: SlackMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Slack. ' }),
    ).exactOptional(),
    Snowflake: SnowflakeMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Snowflake. ' }),
    ).exactOptional(),
    Trendmicro: TrendmicroMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Trend Micro. ' }),
    ).exactOptional(),
    Veeva: VeevaMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Veeva. ' }),
    ).exactOptional(),
    Zendesk: ZendeskMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Zendesk. ' }),
    ).exactOptional(),
    EventBridge: EventBridgeMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Amazon EventBridge. ' }),
    ).exactOptional(),
    Upsolver: UpsolverMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Upsolver. ' }),
    ).exactOptional(),
    CustomerProfiles: CustomerProfilesMetadataSchema.and(
      z
        .any()
        .openapi({
          description: ' The connector metadata specific to Amazon Connect Customer Profiles. ',
        }),
    ).exactOptional(),
    Honeycode: HoneycodeMetadataSchema.and(
      z.any().openapi({ description: ' The connector metadata specific to Amazon Honeycode. ' }),
    ).exactOptional(),
    SAPOData: SAPODataMetadataSchema.exactOptional(),
    Pardot: PardotMetadataSchema.and(
      z.any().openapi({ description: 'The connector metadata specific to Salesforce Pardot.' }),
    ).exactOptional(),
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

const ConnectorModeSchema = z.string().regex(/\S+/).max(256).openapi('ConnectorMode')

const ConnectorModeListSchema = z.array(ConnectorModeSchema).openapi('ConnectorModeList')

const TokenUrlListSchema = z.array(TokenUrlSchema).openapi('TokenUrlList')

const AuthCodeUrlListSchema = z.array(AuthCodeUrlSchema).openapi('AuthCodeUrlList')

const OAuth2GrantTypeSupportedListSchema = z
  .array(OAuth2GrantTypeSchema)
  .openapi('OAuth2GrantTypeSupportedList')

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
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description: 'The key of the custom parameter required for OAuth 2.0 authentication.',
        }),
    ).exactOptional(),
    isRequired: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the custom parameter for OAuth 2.0 authentication is required.',
        }),
    ).exactOptional(),
    label: LabelSchema.and(
      z
        .any()
        .openapi({
          description: 'The label of the custom parameter used for OAuth 2.0 authentication.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description about the custom parameter used for OAuth 2.0 authentication.',
        }),
    ).exactOptional(),
    isSensitiveField: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether this authentication custom parameter is a sensitive field.',
        }),
    ).exactOptional(),
    connectorSuppliedValues: ConnectorSuppliedValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains default values for this authentication parameter that are supplied by the connector.',
        }),
    ).exactOptional(),
    type: OAuth2CustomPropTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether custom parameter is used with TokenUrl or AuthUrl.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Custom parameter required for OAuth 2.0 authentication.', required: [] })
  .openapi('OAuth2CustomParameter')

const OAuth2CustomPropertiesListSchema = z
  .array(OAuth2CustomParameterSchema)
  .openapi('OAuth2CustomPropertiesList')

const OAuth2DefaultsSchema = z
  .object({
    oauthScopes: OAuthScopeListSchema.and(
      z.any().openapi({ description: 'OAuth 2.0 scopes that the connector supports.' }),
    ).exactOptional(),
    tokenUrls: TokenUrlListSchema.and(
      z.any().openapi({ description: 'Token URLs that can be used for OAuth 2.0 authentication.' }),
    ).exactOptional(),
    authCodeUrls: AuthCodeUrlListSchema.and(
      z
        .any()
        .openapi({ description: 'Auth code URLs that can be used for OAuth 2.0 authentication.' }),
    ).exactOptional(),
    oauth2GrantTypesSupported: OAuth2GrantTypeSupportedListSchema.and(
      z.any().openapi({ description: 'OAuth 2.0 grant types supported by the connector.' }),
    ).exactOptional(),
    oauth2CustomProperties: OAuth2CustomPropertiesListSchema.and(
      z
        .any()
        .openapi({
          description: 'List of custom parameters required for OAuth 2.0 authentication.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Contains the default values required for OAuth 2.0 authentication.',
    required: [],
  })
  .openapi('OAuth2Defaults')

const AuthParameterSchema = z
  .object({
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description: 'The authentication key required to authenticate with the connector.',
        }),
    ).exactOptional(),
    isRequired: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether this authentication parameter is required.' }),
    ).exactOptional(),
    label: LabelSchema.and(
      z.any().openapi({ description: 'Label used for authentication parameter.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description about the authentication parameter.' }),
    ).exactOptional(),
    isSensitiveField: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether this authentication parameter is a sensitive field.',
        }),
    ).exactOptional(),
    connectorSuppliedValues: ConnectorSuppliedValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains default values for this authentication parameter that are supplied by the connector.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about required authentication parameters.', required: [] })
  .openapi('AuthParameter')

const AuthParameterListSchema = z.array(AuthParameterSchema).openapi('AuthParameterList')

const CustomAuthConfigSchema = z
  .object({
    customAuthenticationType: CustomAuthenticationTypeSchema.and(
      z.any().openapi({ description: 'The authentication type that the custom connector uses.' }),
    ).exactOptional(),
    authParameters: AuthParameterListSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about authentication parameters required for authentication.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Configuration information required for custom authentication.',
    required: [],
  })
  .openapi('CustomAuthConfig')

const CustomAuthConfigListSchema = z.array(CustomAuthConfigSchema).openapi('CustomAuthConfigList')

const AuthenticationConfigSchema = z
  .object({
    isBasicAuthSupported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether basic authentication is supported by the connector.',
        }),
    ).exactOptional(),
    isApiKeyAuthSupported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether API key authentication is supported by the connector',
        }),
    ).exactOptional(),
    isOAuth2Supported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether OAuth 2.0 authentication is supported by the connector.',
        }),
    ).exactOptional(),
    isCustomAuthSupported: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether custom authentication is supported by the connector',
        }),
    ).exactOptional(),
    oAuth2Defaults: OAuth2DefaultsSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains the default values required for OAuth 2.0 authentication.',
        }),
    ).exactOptional(),
    customAuthConfigs: CustomAuthConfigListSchema.and(
      z.any().openapi({ description: 'Contains information required for custom authentication.' }),
    ).exactOptional(),
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
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description: 'Contains value information about the connector runtime setting.',
        }),
    ).exactOptional(),
    dataType: ConnectorRuntimeSettingDataTypeSchema.and(
      z.any().openapi({ description: 'Data type of the connector runtime setting.' }),
    ).exactOptional(),
    isRequired: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether this connector runtime setting is required.' }),
    ).exactOptional(),
    label: LabelSchema.and(
      z.any().openapi({ description: 'A label used for connector runtime setting.' }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description about the connector runtime setting.' }),
    ).exactOptional(),
    scope: ConnectorRuntimeSettingScopeSchema.and(
      z.any().openapi({ description: 'Indicates the scope of the connector runtime setting.' }),
    ).exactOptional(),
    connectorSuppliedValueOptions: ConnectorSuppliedValueOptionListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains default values for the connector runtime setting that are supplied by the connector.',
        }),
    ).exactOptional(),
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

const SupportedWriteOperationListSchema = z
  .array(WriteOperationTypeSchema)
  .openapi('SupportedWriteOperationList')

const ConnectorProvisioningTypeSchema = z
  .literal('LAMBDA')
  .openapi({ description: 'The type of provisioning that the connector supports, such as Lambda.' })
  .openapi('ConnectorProvisioningType')

const ConnectorProvisioningConfigSchema: z.ZodType<ConnectorProvisioningConfigType> = z
  .lazy(() =>
    z
      .object({
        lambda: LambdaConnectorProvisioningConfigSchema.and(
          z
            .any()
            .openapi({
              description:
                'Contains information about the configuration of the lambda which is being registered as the connector.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Contains information about the configuration of the connector being registered.',
        required: [],
      }),
  )
  .openapi('ConnectorProvisioningConfig')

const LogoURLSchema = z
  .string()
  .regex(/^(https?|ftp|file):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/)
  .max(256)
  .openapi('LogoURL')

const RegisteredBySchema = z.string().regex(/\S+/).max(512).openapi('RegisteredBy')

const ConnectorConfigurationSchema = z
  .object({
    canUseAsSource: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' Specifies whether the connector can be used as a source. ' }),
    ).exactOptional(),
    canUseAsDestination: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies whether the connector can be used as a destination. ',
        }),
    ).exactOptional(),
    supportedDestinationConnectors: ConnectorTypeListSchema.and(
      z
        .any()
        .openapi({
          description: ' Lists the connectors that are available for use as destinations. ',
        }),
    ).exactOptional(),
    supportedSchedulingFrequencies: SchedulingFrequencyTypeListSchema.and(
      z
        .any()
        .openapi({ description: ' Specifies the supported flow frequency for that connector. ' }),
    ).exactOptional(),
    isPrivateLinkEnabled: BooleanSchema.and(
      z.any().openapi({ description: ' Specifies if PrivateLink is enabled for that connector. ' }),
    ).exactOptional(),
    isPrivateLinkEndpointUrlRequired: BooleanSchema.and(
      z.any().openapi({ description: ' Specifies if a PrivateLink endpoint URL is required. ' }),
    ).exactOptional(),
    supportedTriggerTypes: TriggerTypeListSchema.and(
      z.any().openapi({ description: ' Specifies the supported trigger types for the flow. ' }),
    ).exactOptional(),
    connectorMetadata: ConnectorMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies connector-specific metadata such as <code>oAuthScopes</code>, <code>supportedRegions</code>, <code>privateLinkServiceUrl</code>, and so on. ',
        }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z.any().openapi({ description: 'The connector type.' }),
    ).exactOptional(),
    connectorLabel: ConnectorLabelSchema.and(
      z.any().openapi({ description: 'The label used for registering the connector.' }),
    ).exactOptional(),
    connectorDescription: ConnectorDescriptionSchema.and(
      z.any().openapi({ description: 'A description about the connector.' }),
    ).exactOptional(),
    connectorOwner: ConnectorOwnerSchema.and(
      z.any().openapi({ description: 'The owner who developed the connector.' }),
    ).exactOptional(),
    connectorName: ConnectorNameSchema.and(
      z.any().openapi({ description: 'The connector name.' }),
    ).exactOptional(),
    connectorVersion: ConnectorVersionSchema.and(
      z.any().openapi({ description: 'The connector version.' }),
    ).exactOptional(),
    connectorArn: ARNSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) for the registered connector.' }),
    ).exactOptional(),
    connectorModes: ConnectorModeListSchema.and(
      z.any().openapi({ description: 'The connection modes that the connector supports.' }),
    ).exactOptional(),
    authenticationConfig: AuthenticationConfigSchema.and(
      z.any().openapi({ description: 'The authentication config required for the connector.' }),
    ).exactOptional(),
    connectorRuntimeSettings: ConnectorRuntimeSettingListSchema.and(
      z.any().openapi({ description: 'The required connector runtime settings.' }),
    ).exactOptional(),
    supportedApiVersions: SupportedApiVersionListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of API versions that are supported by the connector.' }),
    ).exactOptional(),
    supportedOperators: SupportedOperatorListSchema.and(
      z.any().openapi({ description: 'A list of operators supported by the connector.' }),
    ).exactOptional(),
    supportedWriteOperations: SupportedWriteOperationListSchema.and(
      z.any().openapi({ description: 'A list of write operations supported by the connector.' }),
    ).exactOptional(),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.and(
      z.any().openapi({ description: 'The provisioning type used to register the connector.' }),
    ).exactOptional(),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.and(
      z.any().openapi({ description: 'The configuration required for registering the connector.' }),
    ).exactOptional(),
    logoURL: LogoURLSchema.and(
      z.any().openapi({ description: 'Logo URL of the connector.' }),
    ).exactOptional(),
    registeredAt: DateSchema.and(
      z.any().openapi({ description: 'The date on which the connector was registered.' }),
    ).exactOptional(),
    registeredBy: RegisteredBySchema.and(
      z.any().openapi({ description: 'Information about who registered the connector.' }),
    ).exactOptional(),
  })
  .openapi({
    description: ' The configuration settings related to a given connector. ',
    required: [],
  })
  .openapi('ConnectorConfiguration')

const DescribeConnectorResponseSchema = z
  .object({
    connectorConfiguration: ConnectorConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Configuration info of all the connectors that the user requested.',
        }),
    ).exactOptional(),
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
    maximum: DoubleSchema.and(
      z.any().openapi({ description: 'Maximum value supported by the field.' }),
    ).exactOptional(),
    minimum: DoubleSchema.and(
      z.any().openapi({ description: 'Minimum value supported by the field.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The range of values that the property supports.', required: [] })
  .openapi('Range')

const FieldTypeDetailsSchema = z
  .object({
    fieldType: FieldTypeSchema.and(
      z
        .any()
        .openapi({ description: ' The type of field, such as string, integer, date, and so on. ' }),
    ),
    filterOperators: FilterOperatorListSchema.and(
      z.any().openapi({ description: ' The list of operators supported by a field. ' }),
    ),
    supportedValues: SupportedValueListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of values that a field can contain. For example, a Boolean <code>fieldType</code> can have two values: "true" and "false". ',
        }),
    ).exactOptional(),
    valueRegexPattern: StringSchema.and(
      z.any().openapi({ description: 'The regular expression pattern for the field name.' }),
    ).exactOptional(),
    supportedDateFormat: StringSchema.and(
      z.any().openapi({ description: 'The date format that the field supports.' }),
    ).exactOptional(),
    fieldValueRange: RangeSchema.and(
      z.any().openapi({ description: 'The range of values this field can hold.' }),
    ).exactOptional(),
    fieldLengthRange: RangeSchema.and(
      z
        .any()
        .openapi({ description: "This is the allowable length range for this field's value." }),
    ).exactOptional(),
  })
  .openapi({
    required: ['fieldType', 'filterOperators'],
    description:
      ' Contains details regarding the supported field type and the operators that can be applied for filtering. ',
  })
  .openapi('FieldTypeDetails')

const SupportedFieldTypeDetailsSchema = z
  .object({
    v1: FieldTypeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The initial supported version for <code>fieldType</code>. If this is later changed to a different version, v2 will be introduced. ',
        }),
    ),
  })
  .openapi({
    required: ['v1'],
    description:
      ' Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. ',
  })
  .openapi('SupportedFieldTypeDetails')

const SourceFieldPropertiesSchema = z
  .object({
    isRetrievable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates whether the field can be returned in a search result. ',
        }),
    ).exactOptional(),
    isQueryable: BooleanSchema.and(
      z.any().openapi({ description: ' Indicates if the field can be queried. ' }),
    ).exactOptional(),
    isTimestampFieldForIncrementalQueries: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates if this timestamp field can be used for incremental queries.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The properties that can be applied to a field when the connector is being used as a source. ',
    required: [],
  })
  .openapi('SourceFieldProperties')

const DestinationFieldPropertiesSchema = z
  .object({
    isCreatable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies if the destination field can be created by the current user. ',
        }),
    ).exactOptional(),
    isNullable: BooleanSchema.and(
      z
        .any()
        .openapi({ description: ' Specifies if the destination field can have a null value. ' }),
    ).exactOptional(),
    isUpsertable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies if the flow run can either insert new rows in the destination field if they do not already exist, or update them if they do. ',
        }),
    ).exactOptional(),
    isUpdatable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the field can be updated during an <code>UPDATE</code> or <code>UPSERT</code> write operation. ',
        }),
    ).exactOptional(),
    isDefaultedOnCreate: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether the field can use the default value during a Create operation.',
        }),
    ).exactOptional(),
    supportedWriteOperations: SupportedWriteOperationListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of supported write operations. For each write operation listed, this field can be used in <code>idFieldNames</code> when that write operation is present as a destination option. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The properties that can be applied to a field when connector is being used as a destination. ',
    required: [],
  })
  .openapi('DestinationFieldProperties')

const ConnectorEntityFieldSchema = z
  .object({
    identifier: IdentifierSchema.and(
      z.any().openapi({ description: ' The unique identifier of the connector field. ' }),
    ),
    parentIdentifier: IdentifierSchema.and(
      z.any().openapi({ description: 'The parent identifier of the connector field.' }),
    ).exactOptional(),
    label: LabelSchema.and(
      z.any().openapi({ description: ' The label applied to a connector entity field. ' }),
    ).exactOptional(),
    isPrimaryKey: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Booelan value that indicates whether this field can be used as a primary key.',
        }),
    ).exactOptional(),
    defaultValue: StringSchema.and(
      z.any().openapi({ description: 'Default value that can be assigned to this field.' }),
    ).exactOptional(),
    isDeprecated: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Booelan value that indicates whether this field is deprecated or not.',
        }),
    ).exactOptional(),
    supportedFieldTypeDetails: SupportedFieldTypeDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains details regarding the supported <code>FieldType</code>, including the corresponding <code>filterOperators</code> and <code>supportedValues</code>. ',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z.any().openapi({ description: ' A description of the connector entity field. ' }),
    ).exactOptional(),
    sourceProperties: SourceFieldPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The properties that can be applied to a field when the connector is being used as a source. ',
        }),
    ).exactOptional(),
    destinationProperties: DestinationFieldPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The properties applied to a field when the connector is being used as a destination. ',
        }),
    ).exactOptional(),
    customProperties: CustomPropertiesSchema.and(
      z
        .any()
        .openapi({
          description: 'A map that has specific properties related to the ConnectorEntityField.',
        }),
    ).exactOptional(),
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
    connectorEntityFields: ConnectorEntityFieldListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Describes the fields for that connector entity. For example, for an <i>account</i> entity, the fields would be <i>account name</i>, <i>account ID</i>, and so on. ',
        }),
    ),
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
    status: PrivateConnectionProvisioningStatusSchema.and(
      z.any().openapi({ description: ' Specifies the private connection provisioning status. ' }),
    ).exactOptional(),
    failureMessage: PrivateConnectionProvisioningFailureMessageSchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the private connection provisioning failure reason. ',
        }),
    ).exactOptional(),
    failureCause: PrivateConnectionProvisioningFailureCauseSchema.and(
      z
        .any()
        .openapi({ description: ' Specifies the private connection provisioning failure cause. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Specifies the private connection provisioning state. ', required: [] })
  .openapi('PrivateConnectionProvisioningState')

const ConnectorProfileSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) of the connector profile. ' }),
    ).exactOptional(),
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    connectorLabel: ConnectorLabelSchema.and(
      z.any().openapi({ description: 'The label for the connector profile being created.' }),
    ).exactOptional(),
    connectionMode: ConnectionModeSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates the connection mode and if it is public or private. ',
        }),
    ).exactOptional(),
    credentialsArn: ARNSchema.and(
      z
        .any()
        .openapi({
          description: ' The Amazon Resource Name (ARN) of the connector profile credentials. ',
        }),
    ).exactOptional(),
    connectorProfileProperties: ConnectorProfilePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' The connector-specific properties of the profile configuration. ',
        }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the connector profile was created. ' }),
    ).exactOptional(),
    lastUpdatedAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the connector profile was last updated. ' }),
    ).exactOptional(),
    privateConnectionProvisioningState: PrivateConnectionProvisioningStateSchema.and(
      z.any().openapi({ description: ' Specifies the private connection provisioning state. ' }),
    ).exactOptional(),
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

const NextTokenSchema = z.string().regex(/\S+/).max(2048).openapi('NextToken')

const DescribeConnectorProfilesResponseSchema = z
  .object({
    connectorProfileDetails: ConnectorProfileDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Returns information about the connector profiles associated with the flow. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The pagination token for the next page of data. If <code>nextToken=null</code>, this means that all records have been fetched. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectorProfilesResponse')

const ConnectorConfigurationsMapSchema = z
  .record(z.string(), ConnectorConfigurationSchema)
  .openapi('ConnectorConfigurationsMap')

const ApplicationTypeSchema = z.string().regex(/\S+/).max(512).openapi('ApplicationType')

const ConnectorDetailSchema = z
  .object({
    connectorDescription: ConnectorDescriptionSchema.and(
      z.any().openapi({ description: 'A description about the registered connector.' }),
    ).exactOptional(),
    connectorName: ConnectorNameSchema.and(
      z.any().openapi({ description: 'The name of the connector.' }),
    ).exactOptional(),
    connectorOwner: ConnectorOwnerSchema.and(
      z.any().openapi({ description: 'The owner of the connector.' }),
    ).exactOptional(),
    connectorVersion: ConnectorVersionSchema.and(
      z.any().openapi({ description: 'The connector version.' }),
    ).exactOptional(),
    applicationType: ApplicationTypeSchema.and(
      z.any().openapi({ description: 'The application type of the connector.' }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z.any().openapi({ description: 'The connector type.' }),
    ).exactOptional(),
    connectorLabel: ConnectorLabelSchema.and(
      z.any().openapi({ description: 'A label used for the connector.' }),
    ).exactOptional(),
    registeredAt: DateSchema.and(
      z.any().openapi({ description: 'The time at which the connector was registered.' }),
    ).exactOptional(),
    registeredBy: RegisteredBySchema.and(
      z.any().openapi({ description: 'The user who registered the connector.' }),
    ).exactOptional(),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.and(
      z.any().openapi({ description: 'The provisioning type that the connector uses.' }),
    ).exactOptional(),
    connectorModes: ConnectorModeListSchema.and(
      z.any().openapi({ description: 'The connection mode that the connector supports.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the registered connector.', required: [] })
  .openapi('ConnectorDetail')

const ConnectorListSchema = z.array(ConnectorDetailSchema).openapi('ConnectorList')

const DescribeConnectorsResponseSchema = z
  .object({
    connectorConfigurations: ConnectorConfigurationsMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The configuration that is applied to the connectors used in the flow. ',
        }),
    ).exactOptional(),
    connectors: ConnectorListSchema.and(
      z
        .any()
        .openapi({ description: 'Information about the connectors supported in Amazon AppFlow.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for the next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConnectorsResponse')

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

const FlowStatusMessageSchema = z
  .string()
  .regex(/[\s\w\/!@#+=.-]*/)
  .max(2048)
  .openapi('FlowStatusMessage')

const SourceFlowConfigSchema = z
  .object({
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ),
    apiVersion: ApiVersionSchema.and(
      z
        .any()
        .openapi({
          description: "The API version of the connector when it's used as a source in the flow.",
        }),
    ).exactOptional(),
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    sourceConnectorProperties: SourceConnectorPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the information that is required to query a particular source connector. ',
        }),
    ),
    incrementalPullConfig: IncrementalPullConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['connectorType', 'sourceConnectorProperties'],
    description:
      ' Contains information about the configuration of the source connector used in the flow. ',
  })
  .openapi('SourceFlowConfig')

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
    mostRecentExecutionMessage: MostRecentExecutionMessageSchema.and(
      z.any().openapi({ description: ' Describes the details of the most recent flow run. ' }),
    ).exactOptional(),
    mostRecentExecutionTime: DateSchema.and(
      z.any().openapi({ description: ' Specifies the time of the most recent flow run. ' }),
    ).exactOptional(),
    mostRecentExecutionStatus: ExecutionStatusSchema.and(
      z.any().openapi({ description: ' Specifies the status of the most recent flow run. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Describes the details of the flow run, including the timestamp, status, and message. ',
    required: [],
  })
  .openapi('ExecutionDetails')

const TriggerConfigSchema = z
  .object({
    triggerType: TriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
        }),
    ),
    triggerProperties: TriggerPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['triggerType'],
    description:
      ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
  })
  .openapi('TriggerConfig')

const TasksSchema = z.array(TaskSchema).openapi('Tasks')

const CreatedBySchema = z.string().regex(/\S+/).max(256).openapi('CreatedBy')

const UpdatedBySchema = z.string().regex(/\S+/).max(256).openapi('UpdatedBy')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const MetadataCatalogConfigSchema = z
  .object({
    glueDataCatalog: GlueDataCatalogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
        }),
    ).exactOptional(),
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
    message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Explains the status of the registration attempt from Amazon AppFlow. If the attempt fails, the message explains why.',
        }),
    ).exactOptional(),
    result: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates the number of resources that Amazon AppFlow created or updated. Possible resources include metadata tables and data partitions.',
        }),
    ).exactOptional(),
    status: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates the status of the registration attempt from Amazon AppFlow.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes the status of an attempt from Amazon AppFlow to register a resource.</p> <p>When you run a flow that you've configured to use a metadata catalog, Amazon AppFlow registers a metadata table and data partitions with that catalog. This operation provides the status of that registration attempt. The operation also indicates how many related resources Amazon AppFlow created or updated.</p>",
    required: [],
  })
  .openapi('RegistrationOutput')

const MetadataCatalogDetailSchema = z
  .object({
    catalogType: CatalogTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of metadata catalog that Amazon AppFlow used for the associated flow run. This parameter returns the following value:</p> <dl> <dt>GLUE</dt> <dd> <p>The metadata catalog is provided by the Glue Data Catalog. Glue includes the Glue Data Catalog as a component.</p> </dd> </dl>',
        }),
    ).exactOptional(),
    tableName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the table that stores the metadata for the associated flow run. The table stores metadata that represents the data that the flow transferred. Amazon AppFlow stores the table in the metadata catalog.',
        }),
    ).exactOptional(),
    tableRegistrationOutput: RegistrationOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the status of the attempt from Amazon AppFlow to register the metadata table with the metadata catalog. Amazon AppFlow creates or updates this table for the associated flow run.',
        }),
    ).exactOptional(),
    partitionRegistrationOutput: RegistrationOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            "Describes the status of the attempt from Amazon AppFlow to register the data partitions with the metadata catalog. The data partitions organize the flow output into a hierarchical path, such as a folder path in an S3 bucket. Amazon AppFlow creates the partitions (if they don't already exist) based on your flow configuration.",
        }),
    ).exactOptional(),
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

const DescribeFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.and(
      z.any().openapi({ description: " The flow's Amazon Resource Name (ARN). " }),
    ).exactOptional(),
    description: FlowDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the flow. ' }),
    ).exactOptional(),
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ).exactOptional(),
    kmsArn: KMSArnSchema.and(
      z
        .any()
        .openapi({
          description:
            " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
        }),
    ).exactOptional(),
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: ' Indicates the current status of the flow. ' }),
    ).exactOptional(),
    flowStatusMessage: FlowStatusMessageSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains an error message if the flow status is in a suspended or error state. This applies only to scheduled or event-triggered flows. ',
        }),
    ).exactOptional(),
    sourceFlowConfig: SourceFlowConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that controls how Amazon AppFlow retrieves data from the source connector. ',
        }),
    ).exactOptional(),
    destinationFlowConfigList: DestinationFlowConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that controls how Amazon AppFlow transfers data to the destination connector. ',
        }),
    ).exactOptional(),
    lastRunExecutionDetails: ExecutionDetailsSchema.and(
      z.any().openapi({ description: ' Describes the details of the most recent flow run. ' }),
    ).exactOptional(),
    triggerConfig: TriggerConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' The trigger settings that determine how and when the flow runs. ',
        }),
    ).exactOptional(),
    tasks: TasksSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
        }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the flow was created. ' }),
    ).exactOptional(),
    lastUpdatedAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the flow was last updated. ' }),
    ).exactOptional(),
    createdBy: CreatedBySchema.and(
      z.any().openapi({ description: ' The ARN of the user who created the flow. ' }),
    ).exactOptional(),
    lastUpdatedBy: UpdatedBySchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the user name of the account that performed the most recent update. ',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The tags used to organize, track, or control access for your flow. ',
        }),
    ).exactOptional(),
    metadataCatalogConfig: MetadataCatalogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
        }),
    ).exactOptional(),
    lastRunMetadataCatalogDetails: MetadataCatalogDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.',
        }),
    ).exactOptional(),
    schemaVersion: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version number of your data schema. Amazon AppFlow assigns this version number. The version number increases by one when you change any of the following settings in your flow configuration:</p> <ul> <li> <p>Source-to-destination field mappings</p> </li> <li> <p>Field data types</p> </li> <li> <p>Partition keys</p> </li> </ul>',
        }),
    ).exactOptional(),
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
    putFailuresCount: LongSchema.and(
      z.any().openapi({ description: ' Specifies the failure count for the attempted flow. ' }),
    ).exactOptional(),
    executionMessage: ExecutionMessageSchema.and(
      z
        .any()
        .openapi({ description: ' Specifies the error message that appears if a flow fails. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Provides details in the event of a failed flow, including the failure count and the related error messages. ',
    required: [],
  })
  .openapi('ErrorInfo')

const ExecutionResultSchema = z
  .object({
    errorInfo: ErrorInfoSchema.and(
      z
        .any()
        .openapi({
          description: ' Provides any error message information related to the flow run. ',
        }),
    ).exactOptional(),
    bytesProcessed: LongSchema.and(
      z.any().openapi({ description: ' The total number of bytes processed by the flow run. ' }),
    ).exactOptional(),
    bytesWritten: LongSchema.and(
      z
        .any()
        .openapi({
          description: ' The total number of bytes written as a result of the flow run. ',
        }),
    ).exactOptional(),
    recordsProcessed: LongSchema.and(
      z.any().openapi({ description: ' The number of records processed in the flow run. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Specifies the end result of the flow run. ', required: [] })
  .openapi('ExecutionResult')

const ExecutionRecordSchema = z
  .object({
    executionId: ExecutionIdSchema.and(
      z.any().openapi({ description: ' Specifies the identifier of the given flow run. ' }),
    ).exactOptional(),
    executionStatus: ExecutionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the flow run status and whether it is in progress, has completed successfully, or has failed. ',
        }),
    ).exactOptional(),
    executionResult: ExecutionResultSchema.and(
      z.any().openapi({ description: ' Describes the result of the given flow run. ' }),
    ).exactOptional(),
    startedAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies the start time of the flow run. ' }),
    ).exactOptional(),
    lastUpdatedAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies the time of the most recent update. ' }),
    ).exactOptional(),
    dataPullStartTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp that determines the first new or updated record to be transferred in the flow run. ',
        }),
    ).exactOptional(),
    dataPullEndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The timestamp that indicates the last new or updated record to be transferred in the flow run. ',
        }),
    ).exactOptional(),
    metadataCatalogDetails: MetadataCatalogDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the metadata catalog, metadata table, and data partitions that Amazon AppFlow used for the associated flow run.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Specifies information about the past flow run instances for a given flow. ',
    required: [],
  })
  .openapi('ExecutionRecord')

const FlowExecutionListSchema = z.array(ExecutionRecordSchema).openapi('FlowExecutionList')

const DescribeFlowExecutionRecordsResponseSchema = z
  .object({
    flowExecutions: FlowExecutionListSchema.and(
      z.any().openapi({ description: ' Returns a list of all instances when this flow was run. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for the next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeFlowExecutionRecordsResponse')

const ConnectorEntitySchema = z
  .object({
    name: NameSchema.and(z.any().openapi({ description: ' The name of the connector entity. ' })),
    label: LabelSchema.and(
      z.any().openapi({ description: ' The label applied to the connector entity. ' }),
    ).exactOptional(),
    hasNestedEntities: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the connector entity is a parent or a category and has more entities nested underneath it. If another call is made with <code>entitiesPath = "the_current_entity_name_with_hasNestedEntities_true"</code>, then it returns the nested entities underneath it. This provides a way to retrieve all supported entities in a recursive fashion. ',
        }),
    ).exactOptional(),
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
    connectorEntityMap: ConnectorEntityMapSchema.and(
      z
        .any()
        .openapi({
          description:
            " The response of <code>ListConnectorEntities</code> lists entities grouped by category. This map's key represents the group name, and its value contains the list of entities belonging to that group. ",
        }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that you specify in your next <code>ListConnectorEntities</code> operation to get the next page of results in paginated response. The <code>ListConnectorEntities</code> operation provides this token if the response is too big for the page size.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorEntityMap'] })
  .openapi('ListConnectorEntitiesResponse')

const ListConnectorsResponseSchema = z
  .object({
    connectors: ConnectorListSchema.and(
      z
        .any()
        .openapi({
          description: 'Contains information about the connectors supported by Amazon AppFlow.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The pagination token for the next page of data. If nextToken=null, this means that all records have been fetched.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListConnectorsResponse')

const FlowDefinitionSchema = z
  .object({
    flowArn: FlowArnSchema.and(
      z.any().openapi({ description: " The flow's Amazon Resource Name (ARN). " }),
    ).exactOptional(),
    description: FlowDescriptionSchema.and(
      z.any().openapi({ description: ' A user-entered description of the flow. ' }),
    ).exactOptional(),
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ).exactOptional(),
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: ' Indicates the current status of the flow. ' }),
    ).exactOptional(),
    sourceConnectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the source connector type, such as Salesforce, Amazon S3, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    sourceConnectorLabel: ConnectorLabelSchema.and(
      z.any().openapi({ description: 'The label of the source connector in the flow.' }),
    ).exactOptional(),
    destinationConnectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the destination connector type, such as Salesforce, Amazon S3, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    destinationConnectorLabel: ConnectorLabelSchema.and(
      z.any().openapi({ description: 'The label of the destination connector in the flow.' }),
    ).exactOptional(),
    triggerType: TriggerTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
        }),
    ).exactOptional(),
    createdAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the flow was created. ' }),
    ).exactOptional(),
    lastUpdatedAt: DateSchema.and(
      z.any().openapi({ description: ' Specifies when the flow was last updated. ' }),
    ).exactOptional(),
    createdBy: CreatedBySchema.and(
      z.any().openapi({ description: ' The ARN of the user who created the flow. ' }),
    ).exactOptional(),
    lastUpdatedBy: UpdatedBySchema.and(
      z
        .any()
        .openapi({
          description: ' Specifies the account user name that most recently updated the flow. ',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The tags used to organize, track, or control access for your flow. ',
        }),
    ).exactOptional(),
    lastRunExecutionDetails: ExecutionDetailsSchema.and(
      z.any().openapi({ description: ' Describes the details of the most recent flow run. ' }),
    ).exactOptional(),
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
    flows: FlowListSchema.and(
      z.any().openapi({ description: ' The list of flows associated with your account. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFlowsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The tags used to organize, track, or control access for your flow. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RegisterConnectorResponseSchema = z
  .object({
    connectorArn: ARNSchema.and(
      z.any().openapi({ description: 'The ARN of the connector being registered.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RegisterConnectorResponse')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const StartFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.and(
      z.any().openapi({ description: " The flow's Amazon Resource Name (ARN). " }),
    ).exactOptional(),
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: ' Indicates the current status of the flow. ' }),
    ).exactOptional(),
    executionId: ExecutionIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Returns the internal execution ID of an on-demand flow when the flow is started. For scheduled or event-triggered flows, this value is null. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartFlowResponse')

const StopFlowResponseSchema = z
  .object({
    flowArn: FlowArnSchema.and(
      z.any().openapi({ description: " The flow's Amazon Resource Name (ARN). " }),
    ).exactOptional(),
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: ' Indicates the current status of the flow. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StopFlowResponse')

const UnsupportedOperationExceptionSchema = z.any().openapi('UnsupportedOperationException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UnregisterConnectorResponseSchema = z.object({}).openapi('UnregisterConnectorResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateConnectorProfileResponseSchema = z
  .object({
    connectorProfileArn: ConnectorProfileArnSchema.and(
      z
        .any()
        .openapi({ description: ' The Amazon Resource Name (ARN) of the connector profile. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectorProfileResponse')

const UpdateConnectorRegistrationResponseSchema = z
  .object({
    connectorArn: ARNSchema.and(
      z.any().openapi({ description: 'The ARN of the connector being updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateConnectorRegistrationResponse')

const UpdateFlowResponseSchema = z
  .object({
    flowStatus: FlowStatusSchema.and(
      z.any().openapi({ description: 'Indicates the current status of the flow. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateFlowResponse')

const ClientTokenSchema = z
  .string()
  .regex(/[ -~]+/)
  .min(1)
  .max(256)
  .openapi('ClientToken')

const ConnectorProfileConfigSchema = z
  .object({
    connectorProfileProperties: ConnectorProfilePropertiesSchema.and(
      z
        .any()
        .openapi({
          description: ' The connector-specific properties of the profile configuration. ',
        }),
    ),
    connectorProfileCredentials: ConnectorProfileCredentialsSchema.and(
      z
        .any()
        .openapi({
          description: ' The connector-specific credentials required by each connector. ',
        }),
    ).exactOptional(),
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
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your Amazon Web Services account. ',
        }),
    ),
    kmsArn: KMSArnSchema.and(
      z
        .any()
        .openapi({
          description:
            " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
        }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ),
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
        }),
    ).exactOptional(),
    connectionMode: ConnectionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the connection mode and specifies whether it is public or private. Private flows use Amazon Web Services PrivateLink to route data over Amazon Web Services infrastructure without exposing it to the public internet. ',
        }),
    ),
    connectorProfileConfig: ConnectorProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' Defines the connector-specific configuration and credentials. ',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateConnectorProfile</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['connectorProfileName', 'connectorType', 'connectionMode', 'connectorProfileConfig'],
    title: 'CreateConnectorProfileRequest',
  })
  .openapi('CreateConnectorProfileRequest')

const CreateFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
    description: FlowDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the flow you want to create. ' }),
    ).exactOptional(),
    kmsArn: KMSArnSchema.and(
      z
        .any()
        .openapi({
          description:
            " The ARN (Amazon Resource Name) of the Key Management Service (KMS) key you provide for encryption. This is required if you do not want to use the Amazon AppFlow-managed KMS key. If you don't provide anything here, Amazon AppFlow uses the Amazon AppFlow-managed KMS key. ",
        }),
    ).exactOptional(),
    triggerConfig: TriggerConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' The trigger settings that determine how and when the flow runs. ',
        }),
    ),
    sourceFlowConfig: SourceFlowConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that controls how Amazon AppFlow retrieves data from the source connector. ',
        }),
    ),
    destinationFlowConfigList: DestinationFlowConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that controls how Amazon AppFlow places data in the destination connector. ',
        }),
    ),
    tasks: TasksSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
        }),
    ),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The tags used to organize, track, or control access for your flow. ',
        }),
    ).exactOptional(),
    metadataCatalogConfig: MetadataCatalogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>CreateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>CreateFlow</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
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
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in your account. ',
        }),
    ),
    forceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Amazon AppFlow should delete the profile, even if it is currently in use in one or more flows. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorProfileName'], title: 'DeleteConnectorProfileRequest' })
  .openapi('DeleteConnectorProfileRequest')

const DeleteFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
    forceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates whether Amazon AppFlow should delete the flow, even if it is currently in use. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['flowName'], title: 'DeleteFlowRequest' })
  .openapi('DeleteFlowRequest')

const DescribeConnectorEntityRequestSchema = z
  .object({
    connectorEntityName: EntityNameSchema.and(
      z.any().openapi({ description: ' The entity name for that connector. ' }),
    ),
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The type of connector application, such as Salesforce, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    apiVersion: ApiVersionSchema.and(
      z.any().openapi({ description: "The version of the API that's used by the connector." }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorEntityName'], title: 'DescribeConnectorEntityRequest' })
  .openapi('DescribeConnectorEntityRequest')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const DescribeConnectorProfilesRequestSchema = z
  .object({
    connectorProfileNames: ConnectorProfileNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
        }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for the next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConnectorProfilesRequest', required: [] })
  .openapi('DescribeConnectorProfilesRequest')

const DescribeConnectorRequestSchema = z
  .object({
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The connector type, such as CUSTOMCONNECTOR, Saleforce, Marketo. Please choose CUSTOMCONNECTOR for Lambda based custom connectors.',
        }),
    ),
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account. Only needed if calling for CUSTOMCONNECTOR connector type/.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorType'], title: 'DescribeConnectorRequest' })
  .openapi('DescribeConnectorRequest')

const DescribeConnectorsRequestSchema = z
  .object({
    connectorTypes: ConnectorTypeListSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of items that should be returned in the result set. The default is 20.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for the next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConnectorsRequest', required: [] })
  .openapi('DescribeConnectorsRequest')

const DescribeFlowExecutionRecordsRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations). ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for the next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['flowName'], title: 'DescribeFlowExecutionRecordsRequest' })
  .openapi('DescribeFlowExecutionRecordsRequest')

const DescribeFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
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
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile. The name is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account, and is used to query the downstream connector. ',
        }),
    ).exactOptional(),
    connectorType: ConnectorTypeSchema.and(
      z
        .any()
        .openapi({
          description: ' The type of connector, such as Salesforce, Amplitude, and so on. ',
        }),
    ).exactOptional(),
    entitiesPath: EntitiesPathSchema.and(
      z
        .any()
        .openapi({
          description:
            ' This optional parameter is specific to connector implementation. Some connectors support multiple levels or categories of entities. You can find out the list of roots for such providers by sending a request without the <code>entitiesPath</code> parameter. If the connector supports entities at different roots, this initial request returns the list of roots. Otherwise, this request returns all entities supported by the provider. ',
        }),
    ).exactOptional(),
    apiVersion: ApiVersionSchema.and(
      z.any().openapi({ description: "The version of the API that's used by the connector." }),
    ).exactOptional(),
    maxResults: ListEntitiesMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of items that the operation returns in the response.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that was provided by your prior <code>ListConnectorEntities</code> operation if the response was too big for the page size. You specify this token to get the next page of results in paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectorEntitiesRequest', required: [] })
  .openapi('ListConnectorEntitiesRequest')

const ListConnectorsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the maximum number of items that should be returned in the result set. The default for <code>maxResults</code> is 20 (for all paginated API operations).',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'The pagination token for the next page of data.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectorsRequest', required: [] })
  .openapi('ListConnectorsRequest')

const ListFlowsRequestSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies the maximum number of items that should be returned in the result set. ',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: ' The pagination token for next page of data. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFlowsRequest', required: [] })
  .openapi('ListFlowsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
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
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector. The name is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
        }),
    ).exactOptional(),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({ description: "A description about the connector that's being registered." }),
    ).exactOptional(),
    connectorProvisioningType: ConnectorProvisioningTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provisioning type of the connector. Currently the only supported value is LAMBDA. ',
        }),
    ).exactOptional(),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'The provisioning type of the connector. Currently the only supported value is LAMBDA.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>RegisterConnector</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>RegisterConnector</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'RegisterConnectorRequest', required: [] })
  .openapi('RegisterConnectorRequest')

const StartFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>StartFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs for flows that run on a schedule or based on an event. However, the error doesn't occur for flows that run on demand. You set the conditions that initiate your flow for the <code>triggerConfig</code> parameter.</p> <p>If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>StartFlow</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['flowName'], title: 'StartFlowRequest' })
  .openapi('StartFlowRequest')

const StopFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
  })
  .openapi({ required: ['flowName'], title: 'StopFlowRequest' })
  .openapi('StopFlowRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(0).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: ' The tags used to organize, track, or control access for your flow. ',
        }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UnregisterConnectorRequestSchema = z
  .object({
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label of the connector. The label is unique for each <code>ConnectorRegistration</code> in your Amazon Web Services account.',
        }),
    ),
    forceDelete: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether Amazon AppFlow should unregister the connector, even if it is currently in use in one or more connector profiles. The default value is false.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorLabel'], title: 'UnregisterConnectorRequest' })
  .openapi('UnregisterConnectorRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateConnectorProfileRequestSchema = z
  .object({
    connectorProfileName: ConnectorProfileNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the connector profile and is unique for each <code>ConnectorProfile</code> in the Amazon Web Services account. ',
        }),
    ),
    connectionMode: ConnectionModeSchema.and(
      z
        .any()
        .openapi({
          description: ' Indicates the connection mode and if it is public or private. ',
        }),
    ),
    connectorProfileConfig: ConnectorProfileConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' Defines the connector-specific profile configuration and credentials. ',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorProfile</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorProfile</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['connectorProfileName', 'connectionMode', 'connectorProfileConfig'],
    title: 'UpdateConnectorProfileRequest',
  })
  .openapi('UpdateConnectorProfileRequest')

const UpdateConnectorRegistrationRequestSchema = z
  .object({
    connectorLabel: ConnectorLabelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the connector. The name is unique for each connector registration in your AWS account.',
        }),
    ),
    description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description: "A description about the update that you're applying to the connector.",
        }),
    ).exactOptional(),
    connectorProvisioningConfig: ConnectorProvisioningConfigSchema.exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateConnectorRegistration</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateConnectorRegistration</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['connectorLabel'], title: 'UpdateConnectorRegistrationRequest' })
  .openapi('UpdateConnectorRegistrationRequest')

const UpdateFlowRequestSchema = z
  .object({
    flowName: FlowNameSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The specified name of the flow. Spaces are not allowed. Use underscores (_) or hyphens (-) only. ',
        }),
    ),
    description: FlowDescriptionSchema.and(
      z.any().openapi({ description: ' A description of the flow. ' }),
    ).exactOptional(),
    triggerConfig: TriggerConfigSchema.and(
      z
        .any()
        .openapi({
          description: ' The trigger settings that determine how and when the flow runs. ',
        }),
    ),
    sourceFlowConfig: SourceFlowConfigSchema,
    destinationFlowConfigList: DestinationFlowConfigListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The configuration that controls how Amazon AppFlow transfers data to the destination connector. ',
        }),
    ),
    tasks: TasksSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of tasks that Amazon AppFlow performs while transferring the data in the flow run. ',
        }),
    ),
    metadataCatalogConfig: MetadataCatalogConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "Specifies the configuration that Amazon AppFlow uses when it catalogs the data that's transferred by the associated flow. When Amazon AppFlow catalogs the data from a flow, it stores metadata in a data catalog.",
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>clientToken</code> parameter is an idempotency token. It ensures that your <code>UpdateFlow</code> request completes only once. You choose the value to pass. For example, if you don't receive a response from your request, you can safely retry the request with the same <code>clientToken</code> parameter value.</p> <p>If you omit a <code>clientToken</code> value, the Amazon Web Services SDK that you are using inserts a value for you. This way, the SDK can safely retry requests multiple times after a network error. You must provide your own value for other use cases.</p> <p>If you specify input parameters that differ from your first request, an error occurs. If you use a different value for <code>clientToken</code>, Amazon AppFlow considers it a new call to <code>UpdateFlow</code>. The token is active for 8 hours.</p>",
        }),
    ).exactOptional(),
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
                  connectorProfileProperties: ConnectorProfilePropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The connector-specific properties of the profile configuration. ',
                      }),
                  ).exactOptional(),
                  connectorProfileCredentials: ConnectorProfileCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The connector-specific credentials required by each connector. ',
                      }),
                  ).exactOptional(),
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
                  triggerType: TriggerTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
                      }),
                  ).exactOptional(),
                  triggerProperties: TriggerPropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
                  required: [],
                }),
              sourceFlowConfig: z
                .object({
                  connectorType: ConnectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                      }),
                  ).exactOptional(),
                  apiVersion: ApiVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The API version of the connector when it's used as a source in the flow.",
                      }),
                  ).exactOptional(),
                  connectorProfileName: ConnectorProfileNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
                      }),
                  ).exactOptional(),
                  sourceConnectorProperties: SourceConnectorPropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the information that is required to query a particular source connector. ',
                      }),
                  ).exactOptional(),
                  incrementalPullConfig: IncrementalPullConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
                      }),
                  ).exactOptional(),
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
                  glueDataCatalog: GlueDataCatalogConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
                      }),
                  ).exactOptional(),
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
                  lambda: LambdaConnectorProvisioningConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains information about the configuration of the lambda which is being registered as the connector.',
                      }),
                  ).exactOptional(),
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
                  connectorProfileProperties: ConnectorProfilePropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The connector-specific properties of the profile configuration. ',
                      }),
                  ).exactOptional(),
                  connectorProfileCredentials: ConnectorProfileCredentialsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The connector-specific credentials required by each connector. ',
                      }),
                  ).exactOptional(),
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
                  lambda: LambdaConnectorProvisioningConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Contains information about the configuration of the lambda which is being registered as the connector.',
                      }),
                  ).exactOptional(),
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
                  triggerType: TriggerTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the type of flow trigger. This can be <code>OnDemand</code>, <code>Scheduled</code>, or <code>Event</code>. ',
                      }),
                  ).exactOptional(),
                  triggerProperties: TriggerPropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the <code>Scheduled</code> trigger type. ',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    ' The trigger settings that determine how and when Amazon AppFlow runs the specified flow. ',
                  required: [],
                }),
              sourceFlowConfig: z
                .object({
                  connectorType: ConnectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The type of connector, such as Salesforce, Amplitude, and so on. ',
                      }),
                  ).exactOptional(),
                  apiVersion: ApiVersionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The API version of the connector when it's used as a source in the flow.",
                      }),
                  ).exactOptional(),
                  connectorProfileName: ConnectorProfileNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name of the connector profile. This name must be unique for each connector profile in the Amazon Web Services account. ',
                      }),
                  ).exactOptional(),
                  sourceConnectorProperties: SourceConnectorPropertiesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Specifies the information that is required to query a particular source connector. ',
                      }),
                  ).exactOptional(),
                  incrementalPullConfig: IncrementalPullConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' Defines the configuration for a scheduled incremental data pull. If a valid configuration is provided, the fields specified in the configuration are used when querying for the incremental data pull. ',
                      }),
                  ).exactOptional(),
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
                  glueDataCatalog: GlueDataCatalogConfigSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Specifies the configuration that Amazon AppFlow uses when it catalogs your data with the Glue Data Catalog.',
                      }),
                  ).exactOptional(),
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
