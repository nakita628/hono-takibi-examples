import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z.string().regex(/.*/).min(0).max(51200).openapi('String')

const AppRunnerResourceArnSchema = z
  .string()
  .regex(/arn:aws(-[\w]+)*:[a-z0-9-\\.]{0,63}:[a-z0-9-\\.]{0,63}:[0-9]{12}:(\w|\/|-){1,1011}/)
  .min(1)
  .max(1011)
  .openapi('AppRunnerResourceArn')

const DomainNameSchema = z
  .string()
  .regex(/[A-Za-z0-9*.-]{1,255}/)
  .min(1)
  .max(255)
  .openapi('DomainName')

const NullableBooleanSchema = z.boolean().openapi('NullableBoolean')

const CertificateValidationRecordStatusSchema = z
  .enum(['PENDING_VALIDATION', 'SUCCESS', 'FAILED'])
  .openapi('CertificateValidationRecordStatus')

const CertificateValidationRecordSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The certificate CNAME record name.' }),
    ).exactOptional(),
    Type: StringSchema.and(
      z.any().openapi({ description: 'The record type, always <code>CNAME</code>.' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z.any().openapi({ description: 'The certificate CNAME record value.' }),
    ).exactOptional(),
    Status: CertificateValidationRecordStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the certificate CNAME record validation. It should change to <code>SUCCESS</code> after App Runner completes validation with your DNS.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a certificate CNAME record to add to your DNS. For more information, see <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_AssociateCustomDomain.html">AssociateCustomDomain</a>.',
    required: [],
  })
  .openapi('CertificateValidationRecord')

const CertificateValidationRecordListSchema = z
  .array(CertificateValidationRecordSchema)
  .openapi('CertificateValidationRecordList')

const CustomDomainAssociationStatusSchema = z
  .enum([
    'CREATING',
    'CREATE_FAILED',
    'ACTIVE',
    'DELETING',
    'DELETE_FAILED',
    'PENDING_CERTIFICATE_DNS_VALIDATION',
    'BINDING_CERTIFICATE',
  ])
  .openapi('CustomDomainAssociationStatus')

const CustomDomainSchema = z
  .object({
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An associated custom domain endpoint. It can be a root domain (for example, <code>example.com</code>), a subdomain (for example, <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).',
        }),
    ),
    EnableWWWSubdomain: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, the subdomain <code>www.<i>DomainName</i> </code> is associated with the App Runner service in addition to the base domain.',
        }),
    ),
    CertificateValidationRecords: CertificateValidationRecordListSchema.and(
      z
        .any()
        .openapi({
          description: "A list of certificate CNAME records that's used for this domain name.",
        }),
    ).exactOptional(),
    Status: CustomDomainAssociationStatusSchema.and(
      z.any().openapi({ description: 'The current state of the domain name association.' }),
    ),
  })
  .openapi({
    required: ['DomainName', 'EnableWWWSubdomain', 'Status'],
    description: "Describes a custom domain that's associated with an App Runner service.",
  })
  .openapi('CustomDomain')

const VpcDNSTargetSchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the VPC Ingress Connection that is associated with your service.',
        }),
    ).exactOptional(),
    VpcId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon VPC that is associated with the custom domain name of the target DNS.',
        }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name of your target DNS that is associated with the Amazon VPC.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'DNS Target record for a custom domain of this Amazon VPC.',
    required: [],
  })
  .openapi('VpcDNSTarget')

const VpcDNSTargetListSchema = z.array(VpcDNSTargetSchema).openapi('VpcDNSTargetList')

const AssociateCustomDomainResponseSchema = z
  .object({
    DNSTarget: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The App Runner subdomain of the App Runner service. The custom domain name is mapped to this target name.',
        }),
    ),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service with which a custom domain name is associated.',
        }),
    ),
    CustomDomain: CustomDomainSchema.and(
      z.any().openapi({ description: "A description of the domain name that's being associated." }),
    ),
    VpcDNSTargets: VpcDNSTargetListSchema.and(
      z
        .any()
        .openapi({ description: 'DNS Target records for the custom domains of this Amazon VPC. ' }),
    ),
  })
  .openapi({ required: ['DNSTarget', 'ServiceArn', 'CustomDomain', 'VpcDNSTargets'] })
  .openapi('AssociateCustomDomainResponse')

const AssociateCustomDomainRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to associate a custom domain name with.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A custom domain endpoint to associate. Specify a root domain (for example, <code>example.com</code>), a subdomain (for example, <code>login.example.com</code> or <code>admin.login.example.com</code>), or a wildcard (for example, <code>*.example.com</code>).',
        }),
    ),
    EnableWWWSubdomain: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to associate the subdomain <code>www.<i>DomainName</i> </code> with the App Runner service in addition to the base domain.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceArn', 'DomainName'], title: 'AssociateCustomDomainRequest' })
  .openapi('AssociateCustomDomainRequest')

const InvalidRequestExceptionSchema = z.any().openapi('InvalidRequestException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const InvalidStateExceptionSchema = z.any().openapi('InvalidStateException')

const AutoScalingConfigurationNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{3,31}/)
  .min(4)
  .max(32)
  .openapi('AutoScalingConfigurationName')

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const AutoScalingConfigurationStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('AutoScalingConfigurationStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const AutoScalingConfigurationSchema = z
  .object({
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of this auto scaling configuration.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationName: AutoScalingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationRevision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision of this auto scaling configuration. It\'s unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the same <code>AutoScalingConfigurationName</code>.',
        }),
    ).exactOptional(),
    Latest: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same <code>AutoScalingConfigurationName</code>. It's set to <code>false</code> otherwise.",
        }),
    ).exactOptional(),
    Status: AutoScalingConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current state of the auto scaling configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted.",
        }),
    ).exactOptional(),
    MaxConcurrency: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up.',
        }),
    ).exactOptional(),
    MinSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of instances that App Runner provisions for a service. The service always has at least <code>MinSize</code> provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p> <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p>',
        }),
    ).exactOptional(),
    MaxSize: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of instances that a service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the auto scaling configuration was created. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
    DeletedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the auto scaling configuration was deleted. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an App Runner automatic scaling configuration resource.</p> <p>A higher <code>MinSize</code> increases the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>A lower <code>MaxSize</code> controls your cost. The tradeoff is lower responsiveness during peak demand.</p> <p>Multiple revisions of a configuration might have the same <code>AutoScalingConfigurationName</code> and different <code>AutoScalingConfigurationRevision</code> values.</p>',
    required: [],
  })
  .openapi('AutoScalingConfiguration')

const CreateAutoScalingConfigurationResponseSchema = z
  .object({
    AutoScalingConfiguration: AutoScalingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the App Runner auto scaling configuration that's created by this request.",
        }),
    ),
  })
  .openapi({ required: ['AutoScalingConfiguration'] })
  .openapi('CreateAutoScalingConfigurationResponse')

const ASConfigMaxConcurrencySchema = z.int().min(1).max(200).openapi('ASConfigMaxConcurrency')

const ASConfigMinSizeSchema = z.int().min(1).max(25).openapi('ASConfigMinSize')

const ASConfigMaxSizeSchema = z.int().min(1).openapi('ASConfigMaxSize')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:).+/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const TagValueSchema = z.string().regex(/.*/).min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(z.any().openapi({ description: 'The key of the tag.' })).exactOptional(),
    Value: TagValueSchema.and(
      z.any().openapi({ description: 'The value of the tag.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes a tag that is applied to an App Runner resource. A tag is a metadata item consisting of a key-value pair.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).openapi('TagList')

const CreateAutoScalingConfigurationRequestSchema = z
  .object({
    AutoScalingConfigurationName: AutoScalingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A name for the auto scaling configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p> <note> <p>The name <code>DefaultConfiguration</code> is reserved (it's the configuration that App Runner uses if you don't provide a custome one). You can't use it to create a new auto scaling configuration, and you can't create a revision of it.</p> <p>When you want to use your own auto scaling configuration for your App Runner service, <i>create a configuration with a different name</i>, and then provide it when you create or update your service.</p> </note>",
        }),
    ),
    MaxConcurrency: ASConfigMaxConcurrencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of concurrent requests that you want an instance to process. If the number of concurrent requests exceeds this limit, App Runner scales up your service.</p> <p>Default: <code>100</code> </p>',
        }),
    ).exactOptional(),
    MinSize: ASConfigMinSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The minimum number of instances that App Runner provisions for your service. The service always has at least <code>MinSize</code> provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.</p> <p>App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.</p> <p>Default: <code>1</code> </p>',
        }),
    ).exactOptional(),
    MaxSize: ASConfigMaxSizeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of instances that your service scales up to. At most <code>MaxSize</code> instances actively serve traffic for your service.</p> <p>Default: <code>25</code> </p>',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AutoScalingConfigurationName'],
    title: 'CreateAutoScalingConfigurationRequest',
  })
  .openapi('CreateAutoScalingConfigurationRequest')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ConnectionNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{3,31}/)
  .min(4)
  .max(32)
  .openapi('ConnectionName')

const ProviderTypeSchema = z.literal('GITHUB').openapi('ProviderType')

const ConnectionStatusSchema = z
  .enum(['PENDING_HANDSHAKE', 'AVAILABLE', 'ERROR', 'DELETED'])
  .openapi('ConnectionStatus')

const ConnectionSchema = z
  .object({
    ConnectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The customer-provided connection name.' }),
    ).exactOptional(),
    ConnectionArn: AppRunnerResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of this connection.' }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The source repository provider.' }),
    ).exactOptional(),
    Status: ConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The App Runner connection creation time, expressed as a Unix time stamp.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes an App Runner connection resource.', required: [] })
  .openapi('Connection')

const CreateConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.and(
      z
        .any()
        .openapi({
          description: "A description of the App Runner connection that's created by this request.",
        }),
    ),
  })
  .openapi({ required: ['Connection'] })
  .openapi('CreateConnectionResponse')

const CreateConnectionRequestSchema = z
  .object({
    ConnectionName: ConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the new connection. It must be unique across all App Runner connections for the Amazon Web Services account in the Amazon Web Services Region.',
        }),
    ),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The source repository provider.' }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of metadata items that you can associate with your connection resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectionName', 'ProviderType'], title: 'CreateConnectionRequest' })
  .openapi('CreateConnectionRequest')

const ObservabilityConfigurationNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{3,31}/)
  .min(4)
  .max(32)
  .openapi('ObservabilityConfigurationName')

const TracingVendorSchema = z.literal('AWSXRAY').openapi('TracingVendor')

const TraceConfigurationSchema = z
  .object({
    Vendor: TracingVendorSchema.and(
      z
        .any()
        .openapi({
          description: 'The implementation provider chosen for tracing App Runner services.',
        }),
    ),
  })
  .openapi({
    required: ['Vendor'],
    description:
      'Describes the configuration of the tracing feature within an App Runner observability configuration.',
  })
  .openapi('TraceConfiguration')

const ObservabilityConfigurationStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE'])
  .openapi('ObservabilityConfigurationStatus')

const ObservabilityConfigurationSchema = z
  .object({
    ObservabilityConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of this observability configuration.',
        }),
    ).exactOptional(),
    ObservabilityConfigurationName: ObservabilityConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.',
        }),
    ).exactOptional(),
    TraceConfiguration: TraceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The configuration of the tracing feature within this observability configuration. If not specified, tracing isn't enabled.",
        }),
    ).exactOptional(),
    ObservabilityConfigurationRevision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision of this observability configuration. It\'s unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the same <code>ObservabilityConfigurationName</code>.',
        }),
    ).exactOptional(),
    Latest: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "It's set to <code>true</code> for the configuration with the highest <code>Revision</code> among all configurations that share the same <code>ObservabilityConfigurationName</code>. It's set to <code>false</code> otherwise.",
        }),
    ).exactOptional(),
    Status: ObservabilityConfigurationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current state of the observability configuration. If the status of a configuration revision is <code>INACTIVE</code>, it was deleted and can't be used. Inactive configuration revisions are permanently removed some time after they are deleted.",
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the observability configuration was created. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
    DeletedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the observability configuration was deleted. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Describes an App Runner observability configuration resource. Multiple revisions of a configuration have the same <code>ObservabilityConfigurationName</code> and different <code>ObservabilityConfigurationRevision</code> values.</p> <p>The resource is designed to configure multiple features (currently one feature, tracing). This type contains optional members that describe the configuration of these features (currently one member, <code>TraceConfiguration</code>). If a feature member isn't specified, the feature isn't enabled.</p>",
    required: [],
  })
  .openapi('ObservabilityConfiguration')

const CreateObservabilityConfigurationResponseSchema = z
  .object({
    ObservabilityConfiguration: ObservabilityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the App Runner observability configuration that's created by this request.",
        }),
    ),
  })
  .openapi({ required: ['ObservabilityConfiguration'] })
  .openapi('CreateObservabilityConfigurationResponse')

const CreateObservabilityConfigurationRequestSchema = z
  .object({
    ObservabilityConfigurationName: ObservabilityConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A name for the observability configuration. When you use it for the first time in an Amazon Web Services Region, App Runner creates revision number <code>1</code> of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.</p> <note> <p>The name <code>DefaultConfiguration</code> is reserved. You can't use it to create a new observability configuration, and you can't create a revision of it.</p> <p>When you want to use your own observability configuration for your App Runner service, <i>create a configuration with a different name</i>, and then provide it when you create or update your service.</p> </note>",
        }),
    ),
    TraceConfiguration: TraceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.",
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObservabilityConfigurationName'],
    title: 'CreateObservabilityConfigurationRequest',
  })
  .openapi('CreateObservabilityConfigurationRequest')

const ServiceNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9-_]{3,39}/)
  .min(4)
  .max(40)
  .openapi('ServiceName')

const ServiceIdSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/)
  .length(32)
  .openapi('ServiceId')

const ServiceStatusSchema = z
  .enum(['CREATE_FAILED', 'RUNNING', 'DELETED', 'DELETE_FAILED', 'PAUSED', 'OPERATION_IN_PROGRESS'])
  .openapi('ServiceStatus')

const SourceCodeVersionTypeSchema = z.literal('BRANCH').openapi('SourceCodeVersionType')

const SourceCodeVersionSchema = z
  .object({
    Type: SourceCodeVersionTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of version identifier.</p> <p>For a git-based repository, branches represent versions.</p>',
        }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A source code version.</p> <p>For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.</p>',
        }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      'Identifies a version of code that App Runner refers to within a source code repository.',
  })
  .openapi('SourceCodeVersion')

const ConfigurationSourceSchema = z.enum(['REPOSITORY', 'API']).openapi('ConfigurationSource')

const RuntimeSchema = z
  .enum([
    'PYTHON_3',
    'NODEJS_12',
    'NODEJS_14',
    'CORRETTO_8',
    'CORRETTO_11',
    'NODEJS_16',
    'GO_1',
    'DOTNET_6',
    'PHP_81',
    'RUBY_31',
  ])
  .openapi('Runtime')

const BuildCommandSchema = z
  .string()
  .regex(/[^\x0a\x0d]+/)
  .openapi('BuildCommand')

const StartCommandSchema = z
  .string()
  .regex(/[^\x0a\x0d]+/)
  .openapi('StartCommand')

const RuntimeEnvironmentVariablesValueSchema = z
  .string()
  .regex(/.*/)
  .min(0)
  .max(51200)
  .openapi('RuntimeEnvironmentVariablesValue')

const RuntimeEnvironmentVariablesSchema = z
  .record(z.string(), RuntimeEnvironmentVariablesValueSchema)
  .openapi('RuntimeEnvironmentVariables')

const RuntimeEnvironmentSecretsValueSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('RuntimeEnvironmentSecretsValue')

const RuntimeEnvironmentSecretsSchema = z
  .record(z.string(), RuntimeEnvironmentSecretsValueSchema)
  .openapi('RuntimeEnvironmentSecrets')

const CodeConfigurationValuesSchema = z
  .object({
    Runtime: RuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'A runtime environment type for building and running an App Runner service. It represents a programming language runtime.',
        }),
    ),
    BuildCommand: BuildCommandSchema.and(
      z.any().openapi({ description: 'The command App Runner runs to build your application.' }),
    ).exactOptional(),
    StartCommand: StartCommandSchema.and(
      z.any().openapi({ description: 'The command App Runner runs to start your application.' }),
    ).exactOptional(),
    Port: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port that your application listens to in the container.</p> <p>Default: <code>8080</code> </p>',
        }),
    ).exactOptional(),
    RuntimeEnvironmentVariables: RuntimeEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The environment variables that are available to your running App Runner service. An array of key-value pairs.',
        }),
    ).exactOptional(),
    RuntimeEnvironmentSecrets: RuntimeEnvironmentSecretsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.</p> <note> <ul> <li> <p> If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified. </p> </li> <li> <p> Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported. </p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Runtime'],
    description:
      "Describes the basic configuration needed for building and running an App Runner service. This type doesn't support the full set of possible configuration options. Fur full configuration capabilities, use a <code>apprunner.yaml</code> file in the source code repository.",
  })
  .openapi('CodeConfigurationValues')

const CodeConfigurationSchema = z
  .object({
    ConfigurationSource: ConfigurationSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The source of the App Runner configuration. Values are interpreted as follows:</p> <ul> <li> <p> <code>REPOSITORY</code> – App Runner reads configuration values from the <code>apprunner.yaml</code> file in the source code repository and ignores <code>CodeConfigurationValues</code>.</p> </li> <li> <p> <code>API</code> – App Runner uses configuration values provided in <code>CodeConfigurationValues</code> and ignores the <code>apprunner.yaml</code> file in the source code repository.</p> </li> </ul>',
        }),
    ),
    CodeConfigurationValues: CodeConfigurationValuesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The basic configuration for building and running the App Runner service. Use it to quickly launch an App Runner service without providing a <code>apprunner.yaml</code> file in the source code repository (or ignoring the file if it exists).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationSource'],
    description:
      'Describes the configuration that App Runner uses to build and run an App Runner service from a source code repository.',
  })
  .openapi('CodeConfiguration')

const CodeRepositorySchema = z
  .object({
    RepositoryUrl: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The location of the repository that contains the source code.' }),
    ),
    SourceCodeVersion: SourceCodeVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version that should be used within the source code repository.',
        }),
    ),
    CodeConfiguration: CodeConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Configuration for building and running the service from a source code repository.</p> <note> <p> <code>CodeConfiguration</code> is required only for <code>CreateService</code> request.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RepositoryUrl', 'SourceCodeVersion'],
    description: 'Describes a source code repository.',
  })
  .openapi('CodeRepository')

const ImageIdentifierSchema = z
  .string()
  .regex(
    /([0-9]{12}.dkr.ecr.[a-z\-]+-[0-9]{1}.amazonaws.com\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([\w\d+\-=._:\/@])+|@([\w\d\:]+))?)|(^public\.ecr\.aws\/.+\/((?:[a-z0-9]+(?:[._-][a-z0-9]+)*\/)*[a-z0-9]+(?:[._-][a-z0-9]+)*)(:([\w\d+\-=._:\/@])+|@([\w\d\:]+))?)/,
  )
  .min(1)
  .max(1024)
  .openapi('ImageIdentifier')

const ImageConfigurationSchema = z
  .object({
    RuntimeEnvironmentVariables: RuntimeEnvironmentVariablesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Environment variables that are available to your running App Runner service. An array of key-value pairs.',
        }),
    ).exactOptional(),
    StartCommand: StartCommandSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional command that App Runner runs to start the application in the source image. If specified, this command overrides the Docker image’s default start command.',
        }),
    ).exactOptional(),
    Port: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The port that your application listens to in the container.</p> <p>Default: <code>8080</code> </p>',
        }),
    ).exactOptional(),
    RuntimeEnvironmentSecrets: RuntimeEnvironmentSecretsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>An array of key-value pairs representing the secrets and parameters that get referenced to your service as an environment variable. The supported values are either the full Amazon Resource Name (ARN) of the Secrets Manager secret or the full ARN of the parameter in the Amazon Web Services Systems Manager Parameter Store.</p> <note> <ul> <li> <p> If the Amazon Web Services Systems Manager Parameter Store parameter exists in the same Amazon Web Services Region as the service that you're launching, you can use either the full ARN or name of the secret. If the parameter exists in a different Region, then the full ARN must be specified. </p> </li> <li> <p> Currently, cross account referencing of Amazon Web Services Systems Manager Parameter Store parameter is not supported. </p> </li> </ul> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the configuration that App Runner uses to run an App Runner service using an image pulled from a source image repository.',
    required: [],
  })
  .openapi('ImageConfiguration')

const ImageRepositoryTypeSchema = z.enum(['ECR', 'ECR_PUBLIC']).openapi('ImageRepositoryType')

const ImageRepositorySchema = z
  .object({
    ImageIdentifier: ImageIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The identifier of an image.</p> <p>For an image in Amazon Elastic Container Registry (Amazon ECR), this is an image name. For the image name format, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html">Pulling an image</a> in the <i>Amazon ECR User Guide</i>.</p>',
        }),
    ),
    ImageConfiguration: ImageConfigurationSchema.and(
      z.any().openapi({ description: 'Configuration for running the identified image.' }),
    ).exactOptional(),
    ImageRepositoryType: ImageRepositoryTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the image repository. This reflects the repository provider and whether the repository is private or public.',
        }),
    ),
  })
  .openapi({
    required: ['ImageIdentifier', 'ImageRepositoryType'],
    description: 'Describes a source image repository.',
  })
  .openapi('ImageRepository')

const RoleArnSchema = z
  .string()
  .regex(
    /arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):iam::[0-9]{12}:(role|role\/service-role)\/[\w+=,.@\-\/]{1,1000}/,
  )
  .min(29)
  .max(1024)
  .openapi('RoleArn')

const AuthenticationConfigurationSchema = z
  .object({
    ConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the App Runner connection that enables the App Runner service to connect to a source repository. It's required for GitHub code repositories.",
        }),
    ).exactOptional(),
    AccessRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the IAM role that grants the App Runner service access to a source repository. It's required for ECR image repositories (but not for ECR Public repositories).",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes resources needed to authenticate access to some source repositories. The specific resource depends on the repository provider.',
    required: [],
  })
  .openapi('AuthenticationConfiguration')

const SourceConfigurationSchema = z
  .object({
    CodeRepository: CodeRepositorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The description of a source code repository.</p> <p>You must provide either this member or <code>ImageRepository</code> (but not both).</p>',
        }),
    ).exactOptional(),
    ImageRepository: ImageRepositorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The description of a source image repository.</p> <p>You must provide either this member or <code>CodeRepository</code> (but not both).</p>',
        }),
    ).exactOptional(),
    AutoDeploymentsEnabled: NullableBooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>If <code>true</code>, continuous integration from the source repository is enabled for the App Runner service. Each repository change (including any source code commit or new image version) starts a deployment.</p> <p>Default: App Runner sets to <code>false</code> for a source image that uses an ECR Public repository or an ECR repository that's in an Amazon Web Services account other than the one that the service is in. App Runner sets to <code>true</code> in all other cases (which currently include a source code repository or a source image using a same-account ECR repository).</p>",
        }),
    ).exactOptional(),
    AuthenticationConfiguration: AuthenticationConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the resources that are needed to authenticate access to some source repositories.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the source deployed to an App Runner service. It can be a code or an image repository.',
    required: [],
  })
  .openapi('SourceConfiguration')

const CpuSchema = z
  .string()
  .regex(/256|512|1024|2048|4096|(0.25|0.5|1|2|4) vCPU/)
  .min(3)
  .max(9)
  .openapi('Cpu')

const MemorySchema = z
  .string()
  .regex(/512|1024|2048|3072|4096|6144|8192|10240|12288|(0.5|1|2|3|4|6|8|10|12) GB/)
  .min(3)
  .max(6)
  .openapi('Memory')

const InstanceConfigurationSchema = z
  .object({
    Cpu: CpuSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of CPU units reserved for each instance of your App Runner service.</p> <p>Default: <code>1 vCPU</code> </p>',
        }),
    ).exactOptional(),
    Memory: MemorySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount of memory, in MB or GB, reserved for each instance of your App Runner service.</p> <p>Default: <code>2 GB</code> </p>',
        }),
    ).exactOptional(),
    InstanceRoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an IAM role that provides permissions to your App Runner service. These are permissions that your code needs when it calls any Amazon Web Services APIs.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the runtime configuration of an App Runner service instance (scaling unit).',
    required: [],
  })
  .openapi('InstanceConfiguration')

const KmsKeyArnSchema = z
  .string()
  .regex(
    /arn:aws(-[\w]+)*:kms:[a-z\-]+-[0-9]{1}:[0-9]{12}:key\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
  )
  .min(0)
  .max(256)
  .openapi('KmsKeyArn')

const EncryptionConfigurationSchema = z
  .object({
    KmsKey: KmsKeyArnSchema.and(
      z.any().openapi({ description: "The ARN of the KMS key that's used for encryption." }),
    ),
  })
  .openapi({
    required: ['KmsKey'],
    description:
      'Describes a custom encryption key that App Runner uses to encrypt copies of the source repository and service logs.',
  })
  .openapi('EncryptionConfiguration')

const HealthCheckProtocolSchema = z.enum(['TCP', 'HTTP']).openapi('HealthCheckProtocol')

const HealthCheckPathSchema = z.string().min(1).openapi('HealthCheckPath')

const HealthCheckIntervalSchema = z.int().min(1).max(20).openapi('HealthCheckInterval')

const HealthCheckTimeoutSchema = z.int().min(1).max(20).openapi('HealthCheckTimeout')

const HealthCheckHealthyThresholdSchema = z
  .int()
  .min(1)
  .max(20)
  .openapi('HealthCheckHealthyThreshold')

const HealthCheckUnhealthyThresholdSchema = z
  .int()
  .min(1)
  .max(20)
  .openapi('HealthCheckUnhealthyThreshold')

const HealthCheckConfigurationSchema = z
  .object({
    Protocol: HealthCheckProtocolSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The IP protocol that App Runner uses to perform health checks for your service.</p> <p>If you set <code>Protocol</code> to <code>HTTP</code>, App Runner sends health check requests to the HTTP path specified by <code>Path</code>.</p> <p>Default: <code>TCP</code> </p>',
        }),
    ).exactOptional(),
    Path: HealthCheckPathSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The URL that health check requests are sent to.</p> <p> <code>Path</code> is only applicable when you set <code>Protocol</code> to <code>HTTP</code>.</p> <p>Default: <code>"/"</code> </p>',
        }),
    ).exactOptional(),
    Interval: HealthCheckIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time interval, in seconds, between health checks.</p> <p>Default: <code>5</code> </p>',
        }),
    ).exactOptional(),
    Timeout: HealthCheckTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time, in seconds, to wait for a health check response before deciding it failed.</p> <p>Default: <code>2</code> </p>',
        }),
    ).exactOptional(),
    HealthyThreshold: HealthCheckHealthyThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of consecutive checks that must succeed before App Runner decides that the service is healthy.</p> <p>Default: <code>1</code> </p>',
        }),
    ).exactOptional(),
    UnhealthyThreshold: HealthCheckUnhealthyThresholdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of consecutive checks that must fail before App Runner decides that the service is unhealthy.</p> <p>Default: <code>5</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes the settings for the health check that App Runner performs to monitor the health of a service.',
    required: [],
  })
  .openapi('HealthCheckConfiguration')

const AutoScalingConfigurationSummarySchema = z
  .object({
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of this auto scaling configuration.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationName: AutoScalingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationRevision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision of this auto scaling configuration. It\'s unique among all the active configurations (<code>"Status": "ACTIVE"</code>) with the same <code>AutoScalingConfigurationName</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Provides summary information about an App Runner automatic scaling configuration resource.</p> <p>This type contains limited information about an auto scaling configuration. It includes only identification information, without configuration details. It's returned by the <a>ListAutoScalingConfigurations</a> action. Complete configuration information is returned by the <a>CreateAutoScalingConfiguration</a>, <a>DescribeAutoScalingConfiguration</a>, and <a>DeleteAutoScalingConfiguration</a> actions using the <a>AutoScalingConfiguration</a> type.</p>",
    required: [],
  })
  .openapi('AutoScalingConfigurationSummary')

const EgressTypeSchema = z.enum(['DEFAULT', 'VPC']).openapi('EgressType')

const EgressConfigurationSchema = z
  .object({
    EgressType: EgressTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of egress configuration.</p> <p>Set to <code>DEFAULT</code> for access to resources hosted on public networks.</p> <p>Set to <code>VPC</code> to associate your service to a custom VPC specified by <code>VpcConnectorArn</code>.</p>',
        }),
    ).exactOptional(),
    VpcConnectorArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to associate with your App Runner service. Only valid when <code>EgressType = VPC</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes configuration settings related to outbound network traffic of an App Runner service.',
    required: [],
  })
  .openapi('EgressConfiguration')

const IngressConfigurationSchema = z
  .object({
    IsPubliclyAccessible: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether your App Runner service is publicly accessible. To make the service publicly accessible set it to <code>True</code>. To make the service privately accessible, from only within an Amazon VPC set it to <code>False</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Network configuration settings for inbound network traffic.',
    required: [],
  })
  .openapi('IngressConfiguration')

const NetworkConfigurationSchema = z
  .object({
    EgressConfiguration: EgressConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Network configuration settings for outbound message traffic.' }),
    ).exactOptional(),
    IngressConfiguration: IngressConfigurationSchema.and(
      z
        .any()
        .openapi({ description: 'Network configuration settings for inbound message traffic.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Describes configuration settings related to network traffic of an App Runner service. Consists of embedded objects for each configurable network feature.',
    required: [],
  })
  .openapi('NetworkConfiguration')

const ServiceObservabilityConfigurationSchema = z
  .object({
    ObservabilityEnabled: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'When <code>true</code>, an observability configuration resource is associated with the service, and an <code>ObservabilityConfigurationArn</code> is specified.',
        }),
    ),
    ObservabilityConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the observability configuration that is associated with the service. Specified only when <code>ObservabilityEnabled</code> is <code>true</code>.</p> <p>Specify an ARN with a name and a revision number to associate that revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing/3</code> </p> <p>Specify just the name to associate the latest revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:observabilityconfiguration/xray-tracing</code> </p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ObservabilityEnabled'],
    description:
      "Describes the observability configuration of an App Runner service. These are additional observability features, like tracing, that you choose to enable. They're configured in a separate resource that you associate with your service.",
  })
  .openapi('ServiceObservabilityConfiguration')

const ServiceSchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The customer-provided service name.' }),
    ),
    ServiceId: ServiceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.",
        }),
    ),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of this service.' }),
    ),
    ServiceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the App Runner service was created. It's in the Unix time stamp format.",
        }),
    ),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the App Runner service was last updated at. It's in the Unix time stamp format.",
        }),
    ),
    DeletedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the App Runner service was deleted. It's in the Unix time stamp format.",
        }),
    ).exactOptional(),
    Status: ServiceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current state of the App Runner service. These particular values mean the following.</p> <ul> <li> <p> <code>CREATE_FAILED</code> – The service failed to create. To troubleshoot this failure, read the failure events and logs, change any parameters that need to be fixed, and retry the call to create the service.</p> <p>The failed service isn't usable, and still counts towards your service quota. When you're done analyzing the failure, delete the service.</p> </li> <li> <p> <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed.</p> </li> </ul>",
        }),
    ),
    SourceConfiguration: SourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source deployed to the App Runner service. It can be a code or an image repository.',
        }),
    ),
    InstanceConfiguration: InstanceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The runtime configuration of instances (scaling units) of this service.',
        }),
    ),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption key that App Runner uses to encrypt the service logs and the copy of the source repository that App Runner maintains for the service. It can be either a customer-provided encryption key or an Amazon Web Services managed key.',
        }),
    ).exactOptional(),
    HealthCheckConfiguration: HealthCheckConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the health check that App Runner performs to monitor the health of this service.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationSummary: AutoScalingConfigurationSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "Summary information for the App Runner automatic scaling configuration resource that's associated with this service.",
        }),
    ),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings related to network traffic of the web application that this service runs.',
        }),
    ),
    ObservabilityConfiguration: ServiceObservabilityConfigurationSchema.and(
      z.any().openapi({ description: 'The observability configuration of this service.' }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ServiceName',
      'ServiceId',
      'ServiceArn',
      'CreatedAt',
      'UpdatedAt',
      'Status',
      'SourceConfiguration',
      'InstanceConfiguration',
      'AutoScalingConfigurationSummary',
      'NetworkConfiguration',
    ],
    description:
      '<p>Describes an App Runner service. It can describe a service in any state, including deleted services.</p> <p>This type contains the full information about a service, including configuration details. It\'s returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions. A subset of this information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ServiceSummary.html">ServiceSummary</a> type.</p>',
  })
  .openapi('Service')

const UUIDSchema = z
  .string()
  .regex(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}/)
  .length(36)
  .openapi('UUID')

const CreateServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description: "A description of the App Runner service that's created by this request.",
        }),
    ),
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique ID of the asynchronous operation that this request started. You can use it combined with the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation\'s progress.',
        }),
    ),
  })
  .openapi({ required: ['Service', 'OperationId'] })
  .openapi('CreateServiceResponse')

const CreateServiceRequestSchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the App Runner service. It must be unique across all the running App Runner services in your Amazon Web Services account in the Amazon Web Services Region.',
        }),
    ),
    SourceConfiguration: SourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source to deploy to the App Runner service. It can be a code or an image repository.',
        }),
    ),
    InstanceConfiguration: InstanceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'The runtime configuration of instances (scaling units) of your service.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional list of metadata items that you can associate with the App Runner service resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
    EncryptionConfiguration: EncryptionConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an Amazon Web Services managed key.',
        }),
    ).exactOptional(),
    HealthCheckConfiguration: HealthCheckConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the health check that App Runner performs to monitor the health of the App Runner service.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.</p> <p>Specify an ARN with a name and a revision number to associate that revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability/3</code> </p> <p>Specify just the name to associate the latest revision. For example: <code>arn:aws:apprunner:us-east-1:123456789012:autoscalingconfiguration/high-availability</code> </p>',
        }),
    ).exactOptional(),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings related to network traffic of the web application that the App Runner service runs.',
        }),
    ).exactOptional(),
    ObservabilityConfiguration: ServiceObservabilityConfigurationSchema.and(
      z.any().openapi({ description: 'The observability configuration of your service.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceName', 'SourceConfiguration'], title: 'CreateServiceRequest' })
  .openapi('CreateServiceRequest')

const VpcConnectorNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{3,39}/)
  .min(4)
  .max(40)
  .openapi('VpcConnectorName')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const VpcConnectorStatusSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('VpcConnectorStatus')

const VpcConnectorSchema = z
  .object({
    VpcConnectorName: VpcConnectorNameSchema.and(
      z.any().openapi({ description: 'The customer-provided VPC connector name.' }),
    ).exactOptional(),
    VpcConnectorArn: AppRunnerResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of this VPC connector.' }),
    ).exactOptional(),
    VpcConnectorRevision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The revision of this VPC connector. It\'s unique among all the active connectors (<code>"Status": "ACTIVE"</code>) that share the same <code>Name</code>.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note>',
        }),
    ).exactOptional(),
    Subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs of subnets that App Runner uses for your service. All IDs are of subnets of a single Amazon VPC.',
        }),
    ).exactOptional(),
    SecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs of security groups that App Runner uses for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.',
        }),
    ).exactOptional(),
    Status: VpcConnectorStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The current state of the VPC connector. If the status of a connector revision is <code>INACTIVE</code>, it was deleted and can't be used. Inactive connector revisions are permanently removed some time after they are deleted.",
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the VPC connector was created. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
    DeletedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the VPC connector was deleted. It's in Unix time stamp format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Describes an App Runner VPC connector resource. A VPC connector describes the Amazon Virtual Private Cloud (Amazon VPC) that an App Runner service is associated with, and the subnets and security group that are used.</p> <p>Multiple revisions of a connector might have the same <code>Name</code> and different <code>Revision</code> values.</p> <note> <p>At this time, App Runner supports only one revision per name.</p> </note>',
    required: [],
  })
  .openapi('VpcConnector')

const CreateVpcConnectorResponseSchema = z
  .object({
    VpcConnector: VpcConnectorSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the App Runner VPC connector that's created by this request.",
        }),
    ),
  })
  .openapi({ required: ['VpcConnector'] })
  .openapi('CreateVpcConnectorResponse')

const CreateVpcConnectorRequestSchema = z
  .object({
    VpcConnectorName: VpcConnectorNameSchema.and(
      z.any().openapi({ description: 'A name for the VPC connector.' }),
    ),
    Subnets: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.</p> <note> <p> App Runner currently only provides support for IPv4. </p> </note>',
        }),
    ),
    SecurityGroups: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of IDs of security groups that App Runner should use for access to Amazon Web Services resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.',
        }),
    ).exactOptional(),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VpcConnectorName', 'Subnets'], title: 'CreateVpcConnectorRequest' })
  .openapi('CreateVpcConnectorRequest')

const VpcIngressConnectionNameSchema = z
  .string()
  .regex(/[A-Za-z0-9][A-Za-z0-9\-_]{3,39}/)
  .min(4)
  .max(40)
  .openapi('VpcIngressConnectionName')

const VpcIngressConnectionStatusSchema = z
  .enum([
    'AVAILABLE',
    'PENDING_CREATION',
    'PENDING_UPDATE',
    'PENDING_DELETION',
    'FAILED_CREATION',
    'FAILED_UPDATE',
    'FAILED_DELETION',
    'DELETED',
  ])
  .openapi('VpcIngressConnectionStatus')

const CustomerAccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .length(12)
  .openapi('CustomerAccountId')

const IngressVpcConfigurationSchema = z
  .object({
    VpcId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the VPC that is used for the VPC endpoint.' }),
    ).exactOptional(),
    VpcEndpointId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the VPC endpoint that your App Runner service connects to. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration of your VPC and the associated VPC endpoint. The VPC endpoint is an Amazon Web Services PrivateLink resource that allows access to your App Runner services from within an Amazon VPC.',
    required: [],
  })
  .openapi('IngressVpcConfiguration')

const VpcIngressConnectionSchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the VPC Ingress Connection. ' }),
    ).exactOptional(),
    VpcIngressConnectionName: VpcIngressConnectionNameSchema.and(
      z.any().openapi({ description: 'The customer-provided VPC Ingress Connection name.' }),
    ).exactOptional(),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection. ',
        }),
    ).exactOptional(),
    Status: VpcIngressConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current status of the VPC Ingress Connection. The VPC Ingress Connection displays one of the following statuses: <code>AVAILABLE</code>, <code>PENDING_CREATION</code>, <code>PENDING_UPDATE</code>, <code>PENDING_DELETION</code>,<code>FAILED_CREATION</code>, <code>FAILED_UPDATE</code>, <code>FAILED_DELETION</code>, and <code>DELETED</code>.. ',
        }),
    ).exactOptional(),
    AccountId: CustomerAccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The Account Id you use to create the VPC Ingress Connection resource.',
        }),
    ).exactOptional(),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name associated with the VPC Ingress Connection resource.',
        }),
    ).exactOptional(),
    IngressVpcConfiguration: IngressVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the customer’s VPC and related PrivateLink VPC endpoint that are used to associate with the VPC Ingress Connection resource.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the VPC Ingress Connection was created. It's in the Unix time stamp format.</p> <ul> <li> <p> Type: Timestamp </p> </li> <li> <p> Required: Yes </p> </li> </ul>",
        }),
    ).exactOptional(),
    DeletedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The time when the App Runner service was deleted. It's in the Unix time stamp format.</p> <ul> <li> <p> Type: Timestamp </p> </li> <li> <p> Required: No </p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC.',
    required: [],
  })
  .openapi('VpcIngressConnection')

const CreateVpcIngressConnectionResponseSchema = z
  .object({
    VpcIngressConnection: VpcIngressConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the App Runner VPC Ingress Connection resource that's created by this request. ",
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnection'] })
  .openapi('CreateVpcIngressConnectionResponse')

const CreateVpcIngressConnectionRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.',
        }),
    ),
    VpcIngressConnectionName: VpcIngressConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your Amazon Web Services account in the Amazon Web Services Region. ',
        }),
    ),
    IngressVpcConfiguration: IngressVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource.',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'An optional list of metadata items that you can associate with the VPC Ingress Connection resource. A tag is a key-value pair.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ServiceArn', 'VpcIngressConnectionName', 'IngressVpcConfiguration'],
    title: 'CreateVpcIngressConnectionRequest',
  })
  .openapi('CreateVpcIngressConnectionRequest')

const DeleteAutoScalingConfigurationResponseSchema = z
  .object({
    AutoScalingConfiguration: AutoScalingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner auto scaling configuration that this request just deleted.',
        }),
    ),
  })
  .openapi({ required: ['AutoScalingConfiguration'] })
  .openapi('DeleteAutoScalingConfigurationResponse')

const DeleteAutoScalingConfigurationRequestSchema = z
  .object({
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want to delete.</p> <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is deleted.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AutoScalingConfigurationArn'],
    title: 'DeleteAutoScalingConfigurationRequest',
  })
  .openapi('DeleteAutoScalingConfigurationRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeleteConnectionResponseSchema = z
  .object({
    Connection: ConnectionSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the App Runner connection that this request just deleted.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteConnectionResponse')

const DeleteConnectionRequestSchema = z
  .object({
    ConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner connection that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ConnectionArn'], title: 'DeleteConnectionRequest' })
  .openapi('DeleteConnectionRequest')

const DeleteObservabilityConfigurationResponseSchema = z
  .object({
    ObservabilityConfiguration: ObservabilityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner observability configuration that this request just deleted.',
        }),
    ),
  })
  .openapi({ required: ['ObservabilityConfiguration'] })
  .openapi('DeleteObservabilityConfigurationResponse')

const DeleteObservabilityConfigurationRequestSchema = z
  .object({
    ObservabilityConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want to delete.</p> <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is deleted.</p>",
        }),
    ),
  })
  .openapi({
    required: ['ObservabilityConfigurationArn'],
    title: 'DeleteObservabilityConfigurationRequest',
  })
  .openapi('DeleteObservabilityConfigurationRequest')

const DeleteServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the App Runner service that this request just deleted.',
        }),
    ),
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track the operation's progress.",
        }),
    ),
  })
  .openapi({ required: ['Service', 'OperationId'] })
  .openapi('DeleteServiceResponse')

const DeleteServiceRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn'], title: 'DeleteServiceRequest' })
  .openapi('DeleteServiceRequest')

const DeleteVpcConnectorResponseSchema = z
  .object({
    VpcConnector: VpcConnectorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner VPC connector that this request just deleted.',
        }),
    ),
  })
  .openapi({ required: ['VpcConnector'] })
  .openapi('DeleteVpcConnectorResponse')

const DeleteVpcConnectorRequestSchema = z
  .object({
    VpcConnectorArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want to delete.</p> <p>The ARN must be a full VPC connector ARN.</p>',
        }),
    ),
  })
  .openapi({ required: ['VpcConnectorArn'], title: 'DeleteVpcConnectorRequest' })
  .openapi('DeleteVpcConnectorRequest')

const DeleteVpcIngressConnectionResponseSchema = z
  .object({
    VpcIngressConnection: VpcIngressConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner VPC Ingress Connection that this request just deleted.',
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnection'] })
  .openapi('DeleteVpcIngressConnectionResponse')

const DeleteVpcIngressConnectionRequestSchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want to delete.',
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnectionArn'], title: 'DeleteVpcIngressConnectionRequest' })
  .openapi('DeleteVpcIngressConnectionRequest')

const DescribeAutoScalingConfigurationResponseSchema = z
  .object({
    AutoScalingConfiguration: AutoScalingConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A full description of the App Runner auto scaling configuration that you specified in this request.',
        }),
    ),
  })
  .openapi({ required: ['AutoScalingConfiguration'] })
  .openapi('DescribeAutoScalingConfigurationResponse')

const DescribeAutoScalingConfigurationRequestSchema = z
  .object({
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the App Runner auto scaling configuration that you want a description for.</p> <p>The ARN can be a full auto scaling configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is described.</p>",
        }),
    ),
  })
  .openapi({
    required: ['AutoScalingConfigurationArn'],
    title: 'DescribeAutoScalingConfigurationRequest',
  })
  .openapi('DescribeAutoScalingConfigurationRequest')

const CustomDomainListSchema = z.array(CustomDomainSchema).openapi('CustomDomainList')

const DescribeCustomDomainsResponseSchema = z
  .object({
    DNSTarget: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The App Runner subdomain of the App Runner service. The associated custom domain names are mapped to this target name.',
        }),
    ),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service whose associated custom domain names you want to describe.',
        }),
    ),
    CustomDomains: CustomDomainListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of descriptions of custom domain names that are associated with the service. In a paginated request, the request returns up to <code>MaxResults</code> records per call.',
        }),
    ),
    VpcDNSTargets: VpcDNSTargetListSchema.and(
      z
        .any()
        .openapi({ description: 'DNS Target records for the custom domains of this Amazon VPC. ' }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['DNSTarget', 'ServiceArn', 'CustomDomains', 'VpcDNSTargets'] })
  .openapi('DescribeCustomDomainsResponse')

const DescribeCustomDomainsMaxResultsSchema = z
  .int()
  .min(1)
  .max(5)
  .openapi('DescribeCustomDomainsMaxResults')

const DescribeCustomDomainsRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want associated custom domain names to be described for.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
    MaxResults: DescribeCustomDomainsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results that each response (result page) can include. It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceArn'], title: 'DescribeCustomDomainsRequest' })
  .openapi('DescribeCustomDomainsRequest')

const DescribeObservabilityConfigurationResponseSchema = z
  .object({
    ObservabilityConfiguration: ObservabilityConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'A full description of the App Runner observability configuration that you specified in this request.',
        }),
    ),
  })
  .openapi({ required: ['ObservabilityConfiguration'] })
  .openapi('DescribeObservabilityConfigurationResponse')

const DescribeObservabilityConfigurationRequestSchema = z
  .object({
    ObservabilityConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The Amazon Resource Name (ARN) of the App Runner observability configuration that you want a description for.</p> <p>The ARN can be a full observability configuration ARN, or a partial ARN ending with either <code>.../<i>name</i> </code> or <code>.../<i>name</i>/<i>revision</i> </code>. If a revision isn't specified, the latest active revision is described.</p>",
        }),
    ),
  })
  .openapi({
    required: ['ObservabilityConfigurationArn'],
    title: 'DescribeObservabilityConfigurationRequest',
  })
  .openapi('DescribeObservabilityConfigurationRequest')

const DescribeServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A full description of the App Runner service that you specified in this request.',
        }),
    ),
  })
  .openapi({ required: ['Service'] })
  .openapi('DescribeServiceResponse')

const DescribeServiceRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want a description for.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn'], title: 'DescribeServiceRequest' })
  .openapi('DescribeServiceRequest')

const DescribeVpcConnectorResponseSchema = z
  .object({
    VpcConnector: VpcConnectorSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner VPC connector that you specified in this request.',
        }),
    ),
  })
  .openapi({ required: ['VpcConnector'] })
  .openapi('DescribeVpcConnectorResponse')

const DescribeVpcConnectorRequestSchema = z
  .object({
    VpcConnectorArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the App Runner VPC connector that you want a description for.</p> <p>The ARN must be a full VPC connector ARN.</p>',
        }),
    ),
  })
  .openapi({ required: ['VpcConnectorArn'], title: 'DescribeVpcConnectorRequest' })
  .openapi('DescribeVpcConnectorRequest')

const DescribeVpcIngressConnectionResponseSchema = z
  .object({
    VpcIngressConnection: VpcIngressConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner VPC Ingress Connection that you specified in this request.',
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnection'] })
  .openapi('DescribeVpcIngressConnectionResponse')

const DescribeVpcIngressConnectionRequestSchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner VPC Ingress Connection that you want a description for.',
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnectionArn'], title: 'DescribeVpcIngressConnectionRequest' })
  .openapi('DescribeVpcIngressConnectionRequest')

const DisassociateCustomDomainResponseSchema = z
  .object({
    DNSTarget: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The App Runner subdomain of the App Runner service. The disassociated custom domain name was mapped to this target name.',
        }),
    ),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that a custom domain name is disassociated from.',
        }),
    ),
    CustomDomain: CustomDomainSchema.and(
      z
        .any()
        .openapi({ description: "A description of the domain name that's being disassociated." }),
    ),
    VpcDNSTargets: VpcDNSTargetListSchema.and(
      z
        .any()
        .openapi({ description: 'DNS Target records for the custom domains of this Amazon VPC. ' }),
    ),
  })
  .openapi({ required: ['DNSTarget', 'ServiceArn', 'CustomDomain', 'VpcDNSTargets'] })
  .openapi('DisassociateCustomDomainResponse')

const DisassociateCustomDomainRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to disassociate a custom domain name from.',
        }),
    ),
    DomainName: DomainNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The domain name that you want to disassociate from the App Runner service.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn', 'DomainName'], title: 'DisassociateCustomDomainRequest' })
  .openapi('DisassociateCustomDomainRequest')

const AutoScalingConfigurationSummaryListSchema = z
  .array(AutoScalingConfigurationSummarySchema)
  .openapi('AutoScalingConfigurationSummaryList')

const NextTokenSchema = z.string().regex(/.*/).min(1).max(1024).openapi('NextToken')

const ListAutoScalingConfigurationsResponseSchema = z
  .object({
    AutoScalingConfigurationSummaryList: AutoScalingConfigurationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of summary information records for auto scaling configurations. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AutoScalingConfigurationSummaryList'] })
  .openapi('ListAutoScalingConfigurationsResponse')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListAutoScalingConfigurationsRequestSchema = z
  .object({
    AutoScalingConfigurationName: AutoScalingConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the App Runner auto scaling configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.',
        }),
    ).exactOptional(),
    LatestOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p> <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListAutoScalingConfigurationsRequest', required: [] })
  .openapi('ListAutoScalingConfigurationsRequest')

const ConnectionSummarySchema = z
  .object({
    ConnectionName: ConnectionNameSchema.and(
      z.any().openapi({ description: 'The customer-provided connection name.' }),
    ).exactOptional(),
    ConnectionArn: AppRunnerResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of this connection.' }),
    ).exactOptional(),
    ProviderType: ProviderTypeSchema.and(
      z.any().openapi({ description: 'The source repository provider.' }),
    ).exactOptional(),
    Status: ConnectionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The current state of the App Runner connection. When the state is <code>AVAILABLE</code>, you can use the connection to create an App Runner service.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The App Runner connection creation time, expressed as a Unix time stamp.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides summary information about an App Runner connection resource.',
    required: [],
  })
  .openapi('ConnectionSummary')

const ConnectionSummaryListSchema = z
  .array(ConnectionSummarySchema)
  .openapi('ConnectionSummaryList')

const ListConnectionsResponseSchema = z
  .object({
    ConnectionSummaryList: ConnectionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of summary information records for connections. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token that you can pass in a subsequent request to get the next result page. Returned in a paginated request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConnectionSummaryList'] })
  .openapi('ListConnectionsResponse')

const ListConnectionsRequestSchema = z
  .object({
    ConnectionName: ConnectionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "If specified, only this connection is returned. If not specified, the result isn't filtered by name.",
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). Used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConnectionsRequest', required: [] })
  .openapi('ListConnectionsRequest')

const ObservabilityConfigurationSummarySchema = z
  .object({
    ObservabilityConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of this observability configuration.',
        }),
    ).exactOptional(),
    ObservabilityConfigurationName: ObservabilityConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The customer-provided observability configuration name. It can be used in multiple revisions of a configuration.',
        }),
    ).exactOptional(),
    ObservabilityConfigurationRevision: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision of this observability configuration. It\'s unique among all the active configurations (<code>"Status": "ACTIVE"</code>) that share the same <code>ObservabilityConfigurationName</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "<p>Provides summary information about an App Runner observability configuration resource.</p> <p>This type contains limited information about an observability configuration. It includes only identification information, without configuration details. It's returned by the <a>ListObservabilityConfigurations</a> action. Complete configuration information is returned by the <a>CreateObservabilityConfiguration</a>, <a>DescribeObservabilityConfiguration</a>, and <a>DeleteObservabilityConfiguration</a> actions using the <a>ObservabilityConfiguration</a> type.</p>",
    required: [],
  })
  .openapi('ObservabilityConfigurationSummary')

const ObservabilityConfigurationSummaryListSchema = z
  .array(ObservabilityConfigurationSummarySchema)
  .openapi('ObservabilityConfigurationSummaryList')

const ListObservabilityConfigurationsResponseSchema = z
  .object({
    ObservabilityConfigurationSummaryList: ObservabilityConfigurationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of summary information records for observability configurations. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ObservabilityConfigurationSummaryList'] })
  .openapi('ListObservabilityConfigurationsResponse')

const ListObservabilityConfigurationsRequestSchema = z
  .object({
    ObservabilityConfigurationName: ObservabilityConfigurationNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the App Runner observability configuration that you want to list. If specified, App Runner lists revisions that share this name. If not specified, App Runner returns revisions of all active configurations.',
        }),
    ).exactOptional(),
    LatestOnly: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Set to <code>true</code> to list only the latest revision for each requested configuration name.</p> <p>Set to <code>false</code> to list all revisions for each requested configuration name.</p> <p>Default: <code>true</code> </p>',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListObservabilityConfigurationsRequest', required: [] })
  .openapi('ListObservabilityConfigurationsRequest')

const OperationTypeSchema = z
  .enum([
    'START_DEPLOYMENT',
    'CREATE_SERVICE',
    'PAUSE_SERVICE',
    'RESUME_SERVICE',
    'DELETE_SERVICE',
    'UPDATE_SERVICE',
  ])
  .openapi('OperationType')

const OperationStatusSchema = z
  .enum([
    'PENDING',
    'IN_PROGRESS',
    'FAILED',
    'SUCCEEDED',
    'ROLLBACK_IN_PROGRESS',
    'ROLLBACK_FAILED',
    'ROLLBACK_SUCCEEDED',
  ])
  .openapi('OperationStatus')

const OperationSummarySchema = z
  .object({
    Id: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "A unique ID of this operation. It's unique in the scope of the App Runner service.",
        }),
    ).exactOptional(),
    Type: OperationTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of operation. It indicates a specific action that occured.',
        }),
    ).exactOptional(),
    Status: OperationStatusSchema.and(
      z.any().openapi({ description: 'The current state of the operation.' }),
    ).exactOptional(),
    TargetArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the resource that the operation acted on (for example, an App Runner service).',
        }),
    ).exactOptional(),
    StartedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: "The time when the operation started. It's in the Unix time stamp format.",
        }),
    ).exactOptional(),
    EndedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: "The time when the operation ended. It's in the Unix time stamp format.",
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the operation was last updated. It's in the Unix time stamp format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides summary information for an operation that occurred on an App Runner service.',
    required: [],
  })
  .openapi('OperationSummary')

const OperationSummaryListSchema = z.array(OperationSummarySchema).openapi('OperationSummaryList')

const ListOperationsResponseSchema = z
  .object({
    OperationSummaryList: OperationSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of operation summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListOperationsResponse')

const ListOperationsMaxResultsSchema = z.int().min(1).max(20).openapi('ListOperationsMaxResults')

const ListOperationsRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want a list of operations for.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
    MaxResults: ListOperationsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceArn'], title: 'ListOperationsRequest' })
  .openapi('ListOperationsRequest')

const ServiceSummarySchema = z
  .object({
    ServiceName: ServiceNameSchema.and(
      z.any().openapi({ description: 'The customer-provided service name.' }),
    ).exactOptional(),
    ServiceId: ServiceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "An ID that App Runner generated for this service. It's unique within the Amazon Web Services Region.",
        }),
    ).exactOptional(),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of this service.' }),
    ).exactOptional(),
    ServiceUrl: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.',
        }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the App Runner service was created. It's in the Unix time stamp format.",
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The time when the App Runner service was last updated. It's in theUnix time stamp format.",
        }),
    ).exactOptional(),
    Status: ServiceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The current state of the App Runner service. These particular values mean the following.</p> <ul> <li> <p> <code>CREATE_FAILED</code> – The service failed to create. Read the failure events and logs, change any parameters that need to be fixed, and retry the call to create the service.</p> <p>The failed service isn't usable, and still counts towards your service quota. When you're done analyzing the failure, delete the service.</p> </li> <li> <p> <code>DELETE_FAILED</code> – The service failed to delete and can't be successfully recovered. Retry the service deletion call to ensure that all related resources are removed.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides summary information for an App Runner service.</p> <p>This type contains limited information about a service. It doesn\'t include configuration details. It\'s returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListServices.html">ListServices</a> action. Complete service information is returned by the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_CreateService.html">CreateService</a>, <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DescribeService.html">DescribeService</a>, and <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_DeleteService.html">DeleteService</a> actions using the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_Service.html">Service</a> type.</p>',
    required: [],
  })
  .openapi('ServiceSummary')

const ServiceSummaryListSchema = z.array(ServiceSummarySchema).openapi('ServiceSummaryList')

const ListServicesResponseSchema = z
  .object({
    ServiceSummaryList: ServiceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of service summary information records. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceSummaryList'] })
  .openapi('ListServicesResponse')

const ServiceMaxResultsSchema = z.int().min(1).max(20).openapi('ServiceMaxResults')

const ListServicesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. Used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
    MaxResults: ServiceMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListServicesRequest', required: [] })
  .openapi('ListServicesRequest')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of the tag key-value pairs that are associated with the resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource that a tag list is requested for.</p> <p>It must be the ARN of an App Runner resource.</p>',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const VpcConnectorsSchema = z.array(VpcConnectorSchema).openapi('VpcConnectors')

const ListVpcConnectorsResponseSchema = z
  .object({
    VpcConnectors: VpcConnectorsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of information records for VPC connectors. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VpcConnectors'] })
  .openapi('ListVpcConnectorsResponse')

const ListVpcConnectorsRequestSchema = z
  .object({
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListVpcConnectorsRequest', required: [] })
  .openapi('ListVpcConnectorsRequest')

const VpcIngressConnectionSummarySchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the VPC Ingress Connection. ' }),
    ).exactOptional(),
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the service associated with the VPC Ingress Connection. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides summary information about an VPC Ingress Connection, which includes its VPC Ingress Connection ARN and its associated Service ARN.',
    required: [],
  })
  .openapi('VpcIngressConnectionSummary')

const VpcIngressConnectionSummaryListSchema = z
  .array(VpcIngressConnectionSummarySchema)
  .openapi('VpcIngressConnectionSummaryList')

const ListVpcIngressConnectionsResponseSchema = z
  .object({
    VpcIngressConnectionSummaryList: VpcIngressConnectionSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of summary information records for VPC Ingress Connections. In a paginated request, the request returns up to <code>MaxResults</code> records for each call.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "The token that you can pass in a subsequent request to get the next result page. It's returned in a paginated request.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['VpcIngressConnectionSummaryList'] })
  .openapi('ListVpcIngressConnectionsResponse')

const ListVpcIngressConnectionsFilterSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of a service to filter by. ' }),
    ).exactOptional(),
    VpcEndpointId: StringSchema.and(
      z.any().openapi({ description: 'The ID of a VPC Endpoint to filter by. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns a list of VPC Ingress Connections based on the filter provided. It can return either <code>ServiceArn</code> or <code>VpcEndpointId</code>, or both.',
    required: [],
  })
  .openapi('ListVpcIngressConnectionsFilter')

const ListVpcIngressConnectionsRequestSchema = z
  .object({
    Filter: ListVpcIngressConnectionsFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The VPC Ingress Connections to be listed based on either the Service Arn or Vpc Endpoint Id, or both.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The maximum number of results to include in each response (result page). It's used for a paginated request.</p> <p>If you don't specify <code>MaxResults</code>, the request retrieves all available results in a single response.</p>",
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A token from a previous result page. It's used for a paginated request. The request retrieves the next result page. All other parameter values must be identical to the ones that are specified in the initial request.</p> <p>If you don't specify <code>NextToken</code>, the request retrieves the first result page.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListVpcIngressConnectionsRequest', required: [] })
  .openapi('ListVpcIngressConnectionsRequest')

const PauseServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the App Runner service that this request just paused.',
        }),
    ),
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track the operation's progress.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Service'] })
  .openapi('PauseServiceResponse')

const PauseServiceRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to pause.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn'], title: 'PauseServiceRequest' })
  .openapi('PauseServiceRequest')

const ResumeServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description: 'A description of the App Runner service that this request just resumed.',
        }),
    ),
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track the operation's progress.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Service'] })
  .openapi('ResumeServiceResponse')

const ResumeServiceRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to resume.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn'], title: 'ResumeServiceRequest' })
  .openapi('ResumeServiceRequest')

const StartDeploymentResponseSchema = z
  .object({
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track the operation's progress.",
        }),
    ),
  })
  .openapi({ required: ['OperationId'] })
  .openapi('StartDeploymentResponse')

const StartDeploymentRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to manually deploy to.',
        }),
    ),
  })
  .openapi({ required: ['ServiceArn'], title: 'StartDeploymentRequest' })
  .openapi('StartDeploymentRequest')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource that you want to update tags for.</p> <p>It must be the ARN of an App Runner resource.</p>',
        }),
    ),
    Tags: TagListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of tag key-value pairs to add or update. If a key is new to the resource, the tag is added with the provided value. If a key is already associated with the resource, the value of the tag is updated.',
        }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeyListSchema = z.array(TagKeySchema).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the resource that you want to remove tags from.</p> <p>It must be the ARN of an App Runner resource.</p>',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'A list of tag keys that you want to remove.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateServiceResponseSchema = z
  .object({
    Service: ServiceSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description of the App Runner service updated by this request. All configuration values in the returned <code>Service</code> structure reflect configuration changes that are being applied by this request.',
        }),
    ),
    OperationId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The unique ID of the asynchronous operation that this request started. You can use it combined with the <a>ListOperations</a> call to track the operation's progress.",
        }),
    ),
  })
  .openapi({ required: ['Service', 'OperationId'] })
  .openapi('UpdateServiceResponse')

const UpdateServiceRequestSchema = z
  .object({
    ServiceArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the App Runner service that you want to update.',
        }),
    ),
    SourceConfiguration: SourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The source configuration to apply to the App Runner service.</p> <p>You can change the configuration of the code or image repository that the service uses. However, you can't switch from code to image or the other way around. This means that you must provide the same structure member of <code>SourceConfiguration</code> that you originally included when you created the service. Specifically, you can include either <code>CodeRepository</code> or <code>ImageRepository</code>. To update the source configuration, set the values to members of the structure that you include.</p>",
        }),
    ).exactOptional(),
    InstanceConfiguration: InstanceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The runtime configuration to apply to instances (scaling units) of your service.',
        }),
    ).exactOptional(),
    AutoScalingConfigurationArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an App Runner automatic scaling configuration resource that you want to associate with the App Runner service.',
        }),
    ).exactOptional(),
    HealthCheckConfiguration: HealthCheckConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The settings for the health check that App Runner performs to monitor the health of the App Runner service.',
        }),
    ).exactOptional(),
    NetworkConfiguration: NetworkConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration settings related to network traffic of the web application that the App Runner service runs.',
        }),
    ).exactOptional(),
    ObservabilityConfiguration: ServiceObservabilityConfigurationSchema.and(
      z.any().openapi({ description: 'The observability configuration of your service.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ServiceArn'], title: 'UpdateServiceRequest' })
  .openapi('UpdateServiceRequest')

const UpdateVpcIngressConnectionResponseSchema = z
  .object({
    VpcIngressConnection: VpcIngressConnectionSchema.and(
      z
        .any()
        .openapi({
          description:
            "A description of the App Runner VPC Ingress Connection resource that's updated by this request.",
        }),
    ),
  })
  .openapi({ required: ['VpcIngressConnection'] })
  .openapi('UpdateVpcIngressConnectionResponse')

const UpdateVpcIngressConnectionRequestSchema = z
  .object({
    VpcIngressConnectionArn: AppRunnerResourceArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (Arn) for the App Runner VPC Ingress Connection resource that you want to update.',
        }),
    ),
    IngressVpcConfiguration: IngressVpcConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifications for the customer’s Amazon VPC and the related Amazon Web Services PrivateLink VPC endpoint that are used to update the VPC Ingress Connection resource.',
        }),
    ),
  })
  .openapi({
    required: ['VpcIngressConnectionArn', 'IngressVpcConfiguration'],
    title: 'UpdateVpcIngressConnectionRequest',
  })
  .openapi('UpdateVpcIngressConnectionRequest')

const RuntimeEnvironmentSecretsNameSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi('RuntimeEnvironmentSecretsName')

const RuntimeEnvironmentVariablesKeySchema = z
  .string()
  .regex(/.*/)
  .min(1)
  .max(51200)
  .openapi('RuntimeEnvironmentVariablesKey')

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

export const postXAmzTargetAppRunnerAssociateCustomDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.AssociateCustomDomain',
  description:
    '<p>Associate your own domain name with the App Runner subdomain URL of your App Runner service.</p> <p>After you call <code>AssociateCustomDomain</code> and receive a successful response, use the information in the <a>CustomDomain</a> record that\'s returned to add CNAME records to your Domain Name System (DNS). For each mapped domain name, add a mapping to the target App Runner subdomain and one or more certificate validation records. App Runner then performs DNS validation to verify that you own or control the domain name that you associated. App Runner tracks domain validity in a certificate stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>.</p>',
  operationId: 'AssociateCustomDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.AssociateCustomDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.AssociateCustomDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateCustomDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateCustomDomainResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateAutoScalingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateAutoScalingConfiguration',
  description:
    '<p>Create an App Runner automatic scaling configuration resource. App Runner requires this resource when you create or update App Runner services and you require non-default auto scaling settings. You can share an auto scaling configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>AutoScalingConfigurationName</code>. The call returns incremental <code>AutoScalingConfigurationRevision</code> values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.</p> <p>Configure a higher <code>MinSize</code> to increase the spread of your App Runner service over more Availability Zones in the Amazon Web Services Region. The tradeoff is a higher minimal cost.</p> <p>Configure a lower <code>MaxSize</code> to control your cost. The tradeoff is lower responsiveness during peak demand.</p>',
  operationId: 'CreateAutoScalingConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateAutoScalingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateAutoScalingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAutoScalingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAutoScalingConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateConnection',
  description:
    '<p>Create an App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from certain third-party providers. You can share a connection across multiple services.</p> <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you can use the connection.</p>',
  operationId: 'CreateConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateObservabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateObservabilityConfiguration',
  description:
    "<p>Create an App Runner observability configuration resource. App Runner requires this resource when you create or update App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.</p> <p>Create multiple revisions of a configuration by calling this action multiple times using the same <code>ObservabilityConfigurationName</code>. The call returns incremental <code>ObservabilityConfigurationRevision</code> values. When you create a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.</p> <p>The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This action takes optional parameters that describe the configuration of these features (currently one parameter, <code>TraceConfiguration</code>). If you don't specify a feature parameter, App Runner doesn't enable the feature.</p>",
  operationId: 'CreateObservabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateObservabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateObservabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateObservabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateObservabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateService',
  description:
    '<p>Create an App Runner service. After the service is created, the action also automatically starts a deployment.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a href="https://docs.aws.amazon.com/apprunner/latest/api/API_ListOperations.html">ListOperations</a> call to track the operation\'s progress.</p>',
  operationId: 'CreateService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateVpcConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateVpcConnector',
  description:
    'Create an App Runner VPC connector resource. App Runner requires this resource when you want to associate your App Runner service to a custom Amazon Virtual Private Cloud (Amazon VPC).',
  operationId: 'CreateVpcConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateVpcConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateVpcConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVpcConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcConnectorResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerCreateVpcIngressConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.CreateVpcIngressConnection',
  description:
    'Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.',
  operationId: 'CreateVpcIngressConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.CreateVpcIngressConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.CreateVpcIngressConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateVpcIngressConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateVpcIngressConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteAutoScalingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteAutoScalingConfiguration',
  description:
    "Delete an App Runner automatic scaling configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.",
  operationId: 'DeleteAutoScalingConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteAutoScalingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteAutoScalingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAutoScalingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAutoScalingConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteConnection',
  description:
    'Delete an App Runner connection. You must first ensure that there are no running App Runner services that use this connection. If there are any, the <code>DeleteConnection</code> action fails.',
  operationId: 'DeleteConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteObservabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteObservabilityConfiguration',
  description:
    "Delete an App Runner observability configuration resource. You can delete a specific revision or the latest active revision. You can't delete a configuration that's used by one or more App Runner services.",
  operationId: 'DeleteObservabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteObservabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteObservabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteObservabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteObservabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteService',
  description:
    "<p>Delete an App Runner service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p> <note> <p>Make sure that you don't have any active VPCIngressConnections associated with the service you want to delete. </p> </note>",
  operationId: 'DeleteService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteVpcConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteVpcConnector',
  description:
    "Delete an App Runner VPC connector resource. You can't delete a connector that's used by one or more App Runner services.",
  operationId: 'DeleteVpcConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteVpcConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteVpcConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVpcConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcConnectorResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDeleteVpcIngressConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DeleteVpcIngressConnection',
  description:
    "<p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted: </p> <ul> <li> <p> <code>AVAILABLE</code> </p> </li> <li> <p> <code>FAILED_CREATION</code> </p> </li> <li> <p> <code>FAILED_UPDATE</code> </p> </li> <li> <p> <code>FAILED_DELETION</code> </p> </li> </ul>",
  operationId: 'DeleteVpcIngressConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DeleteVpcIngressConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DeleteVpcIngressConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteVpcIngressConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteVpcIngressConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeAutoScalingConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeAutoScalingConfiguration',
  description:
    'Return a full description of an App Runner automatic scaling configuration resource.',
  operationId: 'DescribeAutoScalingConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeAutoScalingConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeAutoScalingConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAutoScalingConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAutoScalingConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeCustomDomainsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeCustomDomains',
  description:
    'Return a description of custom domain names that are associated with an App Runner service.',
  operationId: 'DescribeCustomDomains',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeCustomDomains')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeCustomDomains'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeCustomDomainsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCustomDomainsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeObservabilityConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeObservabilityConfiguration',
  description: 'Return a full description of an App Runner observability configuration resource.',
  operationId: 'DescribeObservabilityConfiguration',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeObservabilityConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeObservabilityConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeObservabilityConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeObservabilityConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeService',
  description: 'Return a full description of an App Runner service.',
  operationId: 'DescribeService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeVpcConnectorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeVpcConnector',
  description: 'Return a description of an App Runner VPC connector resource.',
  operationId: 'DescribeVpcConnector',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeVpcConnector')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeVpcConnector'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVpcConnectorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcConnectorResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDescribeVpcIngressConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DescribeVpcIngressConnection',
  description: 'Return a full description of an App Runner VPC Ingress Connection resource.',
  operationId: 'DescribeVpcIngressConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DescribeVpcIngressConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DescribeVpcIngressConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeVpcIngressConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeVpcIngressConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerDisassociateCustomDomainRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.DisassociateCustomDomain',
  description:
    '<p>Disassociate a custom domain name from an App Runner service.</p> <p>Certificates tracking domain validity are associated with a custom domain and are stored in <a href="https://docs.aws.amazon.com/acm/latest/userguide">AWS Certificate Manager (ACM)</a>. These certificates aren\'t deleted as part of this action. App Runner delays certificate deletion for 30 days after a domain is disassociated from your service.</p>',
  operationId: 'DisassociateCustomDomain',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.DisassociateCustomDomain')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.DisassociateCustomDomain'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateCustomDomainRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateCustomDomainResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListAutoScalingConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListAutoScalingConfigurations',
  description:
    '<p>Returns a list of active App Runner automatic scaling configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListAutoScalingConfigurations</code>.</p>',
  operationId: 'ListAutoScalingConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListAutoScalingConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListAutoScalingConfigurations'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListAutoScalingConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAutoScalingConfigurationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListConnections',
  description:
    'Returns a list of App Runner connections that are associated with your Amazon Web Services account.',
  operationId: 'ListConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListConnections'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListConnectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListConnectionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListObservabilityConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListObservabilityConfigurations',
  description:
    '<p>Returns a list of active App Runner observability configurations in your Amazon Web Services account. You can query the revisions for a specific configuration name or the revisions for all active configurations in your account. You can optionally query only the latest revision of each requested name.</p> <p>To retrieve a full description of a particular configuration revision, call and provide one of the ARNs returned by <code>ListObservabilityConfigurations</code>.</p>',
  operationId: 'ListObservabilityConfigurations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListObservabilityConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListObservabilityConfigurations'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListObservabilityConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListObservabilityConfigurationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListOperationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListOperations',
  description:
    '<p>Return a list of operations that occurred on an App Runner service.</p> <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the last started operation.</p>',
  operationId: 'ListOperations',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListOperations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListOperations'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListOperationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListOperationsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListServicesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListServices',
  description: 'Returns a list of running App Runner services in your Amazon Web Services account.',
  operationId: 'ListServices',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListServices')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListServices'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListServicesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListServicesResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListTagsForResource',
  description:
    'List tags that are associated with for an App Runner resource. The response contains a list of tag key-value pairs.',
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
      'X-Amz-Target': z
        .literal('AppRunner.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListVpcConnectorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListVpcConnectors',
  description: 'Returns a list of App Runner VPC connectors in your Amazon Web Services account.',
  operationId: 'ListVpcConnectors',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListVpcConnectors')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListVpcConnectors'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVpcConnectorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVpcConnectorsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerListVpcIngressConnectionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ListVpcIngressConnections',
  description:
    'Return a list of App Runner VPC Ingress Connections in your Amazon Web Services account.',
  operationId: 'ListVpcIngressConnections',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ListVpcIngressConnections')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ListVpcIngressConnections'] },
          },
        }),
    }),
    query: z.object({
      MaxResults: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination limit',
            required: false,
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            schema: { type: 'string' },
            description: 'Pagination token',
            required: false,
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ListVpcIngressConnectionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListVpcIngressConnectionsResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerPauseServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.PauseService',
  description:
    "<p>Pause an active App Runner service. App Runner reduces compute capacity for the service to zero and loses state (for example, ephemeral storage is removed).</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
  operationId: 'PauseService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.PauseService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.PauseService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PauseServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PauseServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerResumeServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.ResumeService',
  description:
    "<p>Resume an active App Runner service. App Runner provisions compute capacity for the service.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
  operationId: 'ResumeService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.ResumeService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.ResumeService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ResumeServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ResumeServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerStartDeploymentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.StartDeployment',
  description:
    "<p>Initiate a manual deployment of the latest commit in a source code repository or the latest image in a source image repository to an App Runner service.</p> <p>For a source code repository, App Runner retrieves the commit and builds a Docker image. For a source image repository, App Runner retrieves the latest Docker image. In both cases, App Runner then deploys the new image to your service and starts a new container instance.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
  operationId: 'StartDeployment',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.StartDeployment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.StartDeployment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartDeploymentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartDeploymentResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.TagResource',
  description:
    'Add tags to, or update the tag values of, an App Runner resource. A tag is a key-value pair.',
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
      'X-Amz-Target': z
        .literal('AppRunner.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.UntagResource',
  description: 'Remove tags from an App Runner resource.',
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
      'X-Amz-Target': z
        .literal('AppRunner.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    482: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    483: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerUpdateServiceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.UpdateService',
  description:
    "<p>Update an App Runner service. You can update the source configuration and instance configuration of the service. You can also update the ARN of the auto scaling configuration resource that's associated with the service. However, you can't change the name or the encryption configuration of the service. These can be set only when you create the service.</p> <p>To update the tags applied to your service, use the separate actions <a>TagResource</a> and <a>UntagResource</a>.</p> <p>This is an asynchronous operation. On a successful call, you can use the returned <code>OperationId</code> and the <a>ListOperations</a> call to track the operation's progress.</p>",
  operationId: 'UpdateService',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.UpdateService')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.UpdateService'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateServiceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateServiceResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postXAmzTargetAppRunnerUpdateVpcIngressConnectionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AppRunner.UpdateVpcIngressConnection',
  description:
    '<p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p> <ul> <li> <p> AVAILABLE </p> </li> <li> <p> FAILED_CREATION </p> </li> <li> <p> FAILED_UPDATE </p> </li> </ul>',
  operationId: 'UpdateVpcIngressConnection',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      'X-Amz-Target': z
        .literal('AppRunner.UpdateVpcIngressConnection')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AppRunner.UpdateVpcIngressConnection'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateVpcIngressConnectionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateVpcIngressConnectionResponseSchema } },
    },
    480: {
      description: 'InvalidRequestException',
      content: { 'application/json': { schema: InvalidRequestExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'InvalidStateException',
      content: { 'application/json': { schema: InvalidStateExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})
