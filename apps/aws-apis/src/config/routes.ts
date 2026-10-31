import { createRoute, z } from '@hono/zod-openapi'

const ResourceEvaluationStatusSchema = z
  .enum(['IN_PROGRESS', 'FAILED', 'SUCCEEDED'])
  .openapi('ResourceEvaluationStatus')

const StringWithCharLimit1024Schema = z.string().min(1).max(1024).openapi('StringWithCharLimit1024')

type EvaluationStatusType = {
  Status: z.infer<typeof ResourceEvaluationStatusSchema> & { [key: string]: unknown }
  FailureReason?: z.infer<typeof StringWithCharLimit1024Schema> & { [key: string]: unknown }
}

const VersionSchema = z.string().openapi('Version')

const AccountIdSchema = z
  .string()
  .regex(/\d{12}/)
  .openapi('AccountId')

const ConfigurationItemCaptureTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi('ConfigurationItemCaptureTime')

const ConfigurationItemStatusSchema = z
  .enum([
    'OK',
    'ResourceDiscovered',
    'ResourceNotRecorded',
    'ResourceDeleted',
    'ResourceDeletedNotRecorded',
  ])
  .openapi('ConfigurationItemStatus')

const ConfigurationStateIdSchema = z.string().openapi('ConfigurationStateId')

const ARNSchema = z.string().openapi('ARN')

const ResourceTypeSchema = z
  .enum([
    'AWS::EC2::CustomerGateway',
    'AWS::EC2::EIP',
    'AWS::EC2::Host',
    'AWS::EC2::Instance',
    'AWS::EC2::InternetGateway',
    'AWS::EC2::NetworkAcl',
    'AWS::EC2::NetworkInterface',
    'AWS::EC2::RouteTable',
    'AWS::EC2::SecurityGroup',
    'AWS::EC2::Subnet',
    'AWS::CloudTrail::Trail',
    'AWS::EC2::Volume',
    'AWS::EC2::VPC',
    'AWS::EC2::VPNConnection',
    'AWS::EC2::VPNGateway',
    'AWS::EC2::RegisteredHAInstance',
    'AWS::EC2::NatGateway',
    'AWS::EC2::EgressOnlyInternetGateway',
    'AWS::EC2::VPCEndpoint',
    'AWS::EC2::VPCEndpointService',
    'AWS::EC2::FlowLog',
    'AWS::EC2::VPCPeeringConnection',
    'AWS::Elasticsearch::Domain',
    'AWS::IAM::Group',
    'AWS::IAM::Policy',
    'AWS::IAM::Role',
    'AWS::IAM::User',
    'AWS::ElasticLoadBalancingV2::LoadBalancer',
    'AWS::ACM::Certificate',
    'AWS::RDS::DBInstance',
    'AWS::RDS::DBSubnetGroup',
    'AWS::RDS::DBSecurityGroup',
    'AWS::RDS::DBSnapshot',
    'AWS::RDS::DBCluster',
    'AWS::RDS::DBClusterSnapshot',
    'AWS::RDS::EventSubscription',
    'AWS::S3::Bucket',
    'AWS::S3::AccountPublicAccessBlock',
    'AWS::Redshift::Cluster',
    'AWS::Redshift::ClusterSnapshot',
    'AWS::Redshift::ClusterParameterGroup',
    'AWS::Redshift::ClusterSecurityGroup',
    'AWS::Redshift::ClusterSubnetGroup',
    'AWS::Redshift::EventSubscription',
    'AWS::SSM::ManagedInstanceInventory',
    'AWS::CloudWatch::Alarm',
    'AWS::CloudFormation::Stack',
    'AWS::ElasticLoadBalancing::LoadBalancer',
    'AWS::AutoScaling::AutoScalingGroup',
    'AWS::AutoScaling::LaunchConfiguration',
    'AWS::AutoScaling::ScalingPolicy',
    'AWS::AutoScaling::ScheduledAction',
    'AWS::DynamoDB::Table',
    'AWS::CodeBuild::Project',
    'AWS::WAF::RateBasedRule',
    'AWS::WAF::Rule',
    'AWS::WAF::RuleGroup',
    'AWS::WAF::WebACL',
    'AWS::WAFRegional::RateBasedRule',
    'AWS::WAFRegional::Rule',
    'AWS::WAFRegional::RuleGroup',
    'AWS::WAFRegional::WebACL',
    'AWS::CloudFront::Distribution',
    'AWS::CloudFront::StreamingDistribution',
    'AWS::Lambda::Function',
    'AWS::NetworkFirewall::Firewall',
    'AWS::NetworkFirewall::FirewallPolicy',
    'AWS::NetworkFirewall::RuleGroup',
    'AWS::ElasticBeanstalk::Application',
    'AWS::ElasticBeanstalk::ApplicationVersion',
    'AWS::ElasticBeanstalk::Environment',
    'AWS::WAFv2::WebACL',
    'AWS::WAFv2::RuleGroup',
    'AWS::WAFv2::IPSet',
    'AWS::WAFv2::RegexPatternSet',
    'AWS::WAFv2::ManagedRuleSet',
    'AWS::XRay::EncryptionConfig',
    'AWS::SSM::AssociationCompliance',
    'AWS::SSM::PatchCompliance',
    'AWS::Shield::Protection',
    'AWS::ShieldRegional::Protection',
    'AWS::Config::ConformancePackCompliance',
    'AWS::Config::ResourceCompliance',
    'AWS::ApiGateway::Stage',
    'AWS::ApiGateway::RestApi',
    'AWS::ApiGatewayV2::Stage',
    'AWS::ApiGatewayV2::Api',
    'AWS::CodePipeline::Pipeline',
    'AWS::ServiceCatalog::CloudFormationProvisionedProduct',
    'AWS::ServiceCatalog::CloudFormationProduct',
    'AWS::ServiceCatalog::Portfolio',
    'AWS::SQS::Queue',
    'AWS::KMS::Key',
    'AWS::QLDB::Ledger',
    'AWS::SecretsManager::Secret',
    'AWS::SNS::Topic',
    'AWS::SSM::FileData',
    'AWS::Backup::BackupPlan',
    'AWS::Backup::BackupSelection',
    'AWS::Backup::BackupVault',
    'AWS::Backup::RecoveryPoint',
    'AWS::ECR::Repository',
    'AWS::ECS::Cluster',
    'AWS::ECS::Service',
    'AWS::ECS::TaskDefinition',
    'AWS::EFS::AccessPoint',
    'AWS::EFS::FileSystem',
    'AWS::EKS::Cluster',
    'AWS::OpenSearch::Domain',
    'AWS::EC2::TransitGateway',
    'AWS::Kinesis::Stream',
    'AWS::Kinesis::StreamConsumer',
    'AWS::CodeDeploy::Application',
    'AWS::CodeDeploy::DeploymentConfig',
    'AWS::CodeDeploy::DeploymentGroup',
    'AWS::EC2::LaunchTemplate',
    'AWS::ECR::PublicRepository',
    'AWS::GuardDuty::Detector',
    'AWS::EMR::SecurityConfiguration',
    'AWS::SageMaker::CodeRepository',
    'AWS::Route53Resolver::ResolverEndpoint',
    'AWS::Route53Resolver::ResolverRule',
    'AWS::Route53Resolver::ResolverRuleAssociation',
    'AWS::DMS::ReplicationSubnetGroup',
    'AWS::DMS::EventSubscription',
    'AWS::MSK::Cluster',
    'AWS::StepFunctions::Activity',
    'AWS::WorkSpaces::Workspace',
    'AWS::WorkSpaces::ConnectionAlias',
    'AWS::SageMaker::Model',
    'AWS::ElasticLoadBalancingV2::Listener',
    'AWS::StepFunctions::StateMachine',
    'AWS::Batch::JobQueue',
    'AWS::Batch::ComputeEnvironment',
    'AWS::AccessAnalyzer::Analyzer',
    'AWS::Athena::WorkGroup',
    'AWS::Athena::DataCatalog',
    'AWS::Detective::Graph',
    'AWS::GlobalAccelerator::Accelerator',
    'AWS::GlobalAccelerator::EndpointGroup',
    'AWS::GlobalAccelerator::Listener',
    'AWS::EC2::TransitGatewayAttachment',
    'AWS::EC2::TransitGatewayRouteTable',
    'AWS::DMS::Certificate',
    'AWS::AppConfig::Application',
    'AWS::AppSync::GraphQLApi',
    'AWS::DataSync::LocationSMB',
    'AWS::DataSync::LocationFSxLustre',
    'AWS::DataSync::LocationS3',
    'AWS::DataSync::LocationEFS',
    'AWS::DataSync::Task',
    'AWS::DataSync::LocationNFS',
    'AWS::EC2::NetworkInsightsAccessScopeAnalysis',
    'AWS::EKS::FargateProfile',
    'AWS::Glue::Job',
    'AWS::GuardDuty::ThreatIntelSet',
    'AWS::GuardDuty::IPSet',
    'AWS::SageMaker::Workteam',
    'AWS::SageMaker::NotebookInstanceLifecycleConfig',
    'AWS::ServiceDiscovery::Service',
    'AWS::ServiceDiscovery::PublicDnsNamespace',
    'AWS::SES::ContactList',
    'AWS::SES::ConfigurationSet',
    'AWS::Route53::HostedZone',
    'AWS::IoTEvents::Input',
    'AWS::IoTEvents::DetectorModel',
    'AWS::IoTEvents::AlarmModel',
    'AWS::ServiceDiscovery::HttpNamespace',
    'AWS::Events::EventBus',
    'AWS::ImageBuilder::ContainerRecipe',
    'AWS::ImageBuilder::DistributionConfiguration',
    'AWS::ImageBuilder::InfrastructureConfiguration',
    'AWS::DataSync::LocationObjectStorage',
    'AWS::DataSync::LocationHDFS',
    'AWS::Glue::Classifier',
    'AWS::Route53RecoveryReadiness::Cell',
    'AWS::Route53RecoveryReadiness::ReadinessCheck',
    'AWS::ECR::RegistryPolicy',
    'AWS::Backup::ReportPlan',
    'AWS::Lightsail::Certificate',
    'AWS::RUM::AppMonitor',
    'AWS::Events::Endpoint',
    'AWS::SES::ReceiptRuleSet',
    'AWS::Events::Archive',
    'AWS::Events::ApiDestination',
    'AWS::Lightsail::Disk',
    'AWS::FIS::ExperimentTemplate',
    'AWS::DataSync::LocationFSxWindows',
    'AWS::SES::ReceiptFilter',
    'AWS::GuardDuty::Filter',
    'AWS::SES::Template',
    'AWS::AmazonMQ::Broker',
    'AWS::AppConfig::Environment',
    'AWS::AppConfig::ConfigurationProfile',
    'AWS::Cloud9::EnvironmentEC2',
    'AWS::EventSchemas::Registry',
    'AWS::EventSchemas::RegistryPolicy',
    'AWS::EventSchemas::Discoverer',
    'AWS::FraudDetector::Label',
    'AWS::FraudDetector::EntityType',
    'AWS::FraudDetector::Variable',
    'AWS::FraudDetector::Outcome',
    'AWS::IoT::Authorizer',
    'AWS::IoT::SecurityProfile',
    'AWS::IoT::RoleAlias',
    'AWS::IoT::Dimension',
    'AWS::IoTAnalytics::Datastore',
    'AWS::Lightsail::Bucket',
    'AWS::Lightsail::StaticIp',
    'AWS::MediaPackage::PackagingGroup',
    'AWS::Route53RecoveryReadiness::RecoveryGroup',
    'AWS::ResilienceHub::ResiliencyPolicy',
    'AWS::Transfer::Workflow',
    'AWS::EKS::IdentityProviderConfig',
    'AWS::EKS::Addon',
    'AWS::Glue::MLTransform',
    'AWS::IoT::Policy',
    'AWS::IoT::MitigationAction',
    'AWS::IoTTwinMaker::Workspace',
    'AWS::IoTTwinMaker::Entity',
    'AWS::IoTAnalytics::Dataset',
    'AWS::IoTAnalytics::Pipeline',
    'AWS::IoTAnalytics::Channel',
    'AWS::IoTSiteWise::Dashboard',
    'AWS::IoTSiteWise::Project',
    'AWS::IoTSiteWise::Portal',
    'AWS::IoTSiteWise::AssetModel',
    'AWS::IVS::Channel',
    'AWS::IVS::RecordingConfiguration',
    'AWS::IVS::PlaybackKeyPair',
    'AWS::KinesisAnalyticsV2::Application',
    'AWS::RDS::GlobalCluster',
    'AWS::S3::MultiRegionAccessPoint',
    'AWS::DeviceFarm::TestGridProject',
    'AWS::Budgets::BudgetsAction',
    'AWS::Lex::Bot',
    'AWS::CodeGuruReviewer::RepositoryAssociation',
    'AWS::IoT::CustomMetric',
    'AWS::Route53Resolver::FirewallDomainList',
    'AWS::RoboMaker::RobotApplicationVersion',
    'AWS::EC2::TrafficMirrorSession',
    'AWS::IoTSiteWise::Gateway',
    'AWS::Lex::BotAlias',
    'AWS::LookoutMetrics::Alert',
    'AWS::IoT::AccountAuditConfiguration',
    'AWS::EC2::TrafficMirrorTarget',
    'AWS::S3::StorageLens',
    'AWS::IoT::ScheduledAudit',
    'AWS::Events::Connection',
    'AWS::EventSchemas::Schema',
    'AWS::MediaPackage::PackagingConfiguration',
    'AWS::KinesisVideo::SignalingChannel',
    'AWS::AppStream::DirectoryConfig',
    'AWS::LookoutVision::Project',
    'AWS::Route53RecoveryControl::Cluster',
    'AWS::Route53RecoveryControl::SafetyRule',
    'AWS::Route53RecoveryControl::ControlPanel',
    'AWS::Route53RecoveryControl::RoutingControl',
    'AWS::Route53RecoveryReadiness::ResourceSet',
    'AWS::RoboMaker::SimulationApplication',
    'AWS::RoboMaker::RobotApplication',
    'AWS::HealthLake::FHIRDatastore',
    'AWS::Pinpoint::Segment',
    'AWS::Pinpoint::ApplicationSettings',
    'AWS::Events::Rule',
    'AWS::EC2::DHCPOptions',
    'AWS::EC2::NetworkInsightsPath',
    'AWS::EC2::TrafficMirrorFilter',
    'AWS::EC2::IPAM',
    'AWS::IoTTwinMaker::Scene',
    'AWS::NetworkManager::TransitGatewayRegistration',
    'AWS::CustomerProfiles::Domain',
    'AWS::AutoScaling::WarmPool',
    'AWS::Connect::PhoneNumber',
  ])
  .openapi('ResourceType')

const ResourceIdSchema = z.string().min(1).max(768).openapi('ResourceId')

const ResourceNameSchema = z.string().openapi('ResourceName')

const AwsRegionSchema = z.string().min(1).max(64).openapi('AwsRegion')

const AvailabilityZoneSchema = z.string().openapi('AvailabilityZone')

const ResourceCreationTimeSchema = z.iso.datetime({ offset: true }).openapi('ResourceCreationTime')

const ConfigurationSchema = z.string().openapi('Configuration')

const SupplementaryConfigurationValueSchema = z.string().openapi('SupplementaryConfigurationValue')

const SupplementaryConfigurationSchema = z
  .record(z.string(), SupplementaryConfigurationValueSchema)
  .openapi('SupplementaryConfiguration')

const BaseConfigurationItemSchema = z
  .object({
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version number of the resource configuration.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit Amazon Web Services account ID associated with the resource.',
        }),
    ).exactOptional(),
    configurationItemCaptureTime: ConfigurationItemCaptureTimeSchema.and(
      z.any().openapi({ description: 'The time when the configuration recording was initiated.' }),
    ).exactOptional(),
    configurationItemStatus: ConfigurationItemStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration item status. The valid values are:</p> <ul> <li> <p>OK – The resource configuration has been updated</p> </li> <li> <p>ResourceDiscovered – The resource was newly discovered</p> </li> <li> <p>ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder excludes the recording of resources of this type</p> </li> <li> <p>ResourceDeleted – The resource was deleted</p> </li> <li> <p>ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder excludes the recording of resources of this type</p> </li> </ul> <note> <p>The CIs do not incur any cost.</p> </note>',
        }),
    ).exactOptional(),
    configurationStateId: ConfigurationStateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that indicates the ordering of the configuration items of a resource.',
        }),
    ).exactOptional(),
    arn: ARNSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the resource.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of Amazon Web Services resource.' }),
    ).exactOptional(),
    resourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource (for example., sg-xxxxxx).' }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The custom name of the resource, if available.' }),
    ).exactOptional(),
    awsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region where the resource resides.' }),
    ).exactOptional(),
    availabilityZone: AvailabilityZoneSchema.and(
      z.any().openapi({ description: 'The Availability Zone associated with the resource.' }),
    ).exactOptional(),
    resourceCreationTime: ResourceCreationTimeSchema.and(
      z.any().openapi({ description: 'The time stamp when the resource was created.' }),
    ).exactOptional(),
    configuration: ConfigurationSchema.and(
      z.any().openapi({ description: 'The description of the resource configuration.' }),
    ).exactOptional(),
    supplementaryConfiguration: SupplementaryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration attributes that Config returns for certain resource types to supplement the information returned for the configuration parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The detailed configuration of a specified resource.', required: [] })
  .openapi('BaseConfigurationItem')

const BaseConfigurationItemsSchema = z
  .array(BaseConfigurationItemSchema)
  .openapi('BaseConfigurationItems')

const AggregateResourceIdentifierSchema = z
  .object({
    SourceAccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account.' }),
    ),
    SourceRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region where data is aggregated.' }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the Amazon Web Services resource.' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the Amazon Web Services resource.' }),
    ),
    ResourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the Amazon Web Services resource.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['SourceAccountId', 'SourceRegion', 'ResourceId', 'ResourceType'],
    description:
      'The details that identify a resource that is collected by Config aggregator, including the resource type, ID, (if available) the custom resource name, the source account, and source region.',
  })
  .openapi('AggregateResourceIdentifier')

const UnprocessedResourceIdentifierListSchema = z
  .array(AggregateResourceIdentifierSchema)
  .openapi('UnprocessedResourceIdentifierList')

const BatchGetAggregateResourceConfigResponseSchema = z
  .object({
    BaseConfigurationItems: BaseConfigurationItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the current configuration of one or more resources.',
        }),
    ).exactOptional(),
    UnprocessedResourceIdentifiers: UnprocessedResourceIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource identifiers that were not processed with current scope. The list is empty if all the resources are processed.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetAggregateResourceConfigResponse')

const ConfigurationAggregatorNameSchema = z
  .string()
  .regex(/[\w\-]+/)
  .min(1)
  .max(256)
  .openapi('ConfigurationAggregatorName')

const ResourceIdentifiersListSchema = z
  .array(AggregateResourceIdentifierSchema)
  .min(1)
  .max(100)
  .openapi('ResourceIdentifiersList')

const BatchGetAggregateResourceConfigRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    ResourceIdentifiers: ResourceIdentifiersListSchema.and(
      z.any().openapi({ description: 'A list of aggregate ResourceIdentifiers objects. ' }),
    ),
  })
  .openapi({
    required: ['ConfigurationAggregatorName', 'ResourceIdentifiers'],
    title: 'BatchGetAggregateResourceConfigRequest',
  })
  .openapi('BatchGetAggregateResourceConfigRequest')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const NoSuchConfigurationAggregatorExceptionSchema = z
  .any()
  .openapi('NoSuchConfigurationAggregatorException')

const ResourceKeySchema = z
  .object({
    resourceType: ResourceTypeSchema.and(z.any().openapi({ description: 'The resource type.' })),
    resourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource (for example., sg-xxxxxx). ' }),
    ),
  })
  .openapi({
    required: ['resourceType', 'resourceId'],
    description:
      'The details that identify a resource within Config, including the resource type and resource ID.',
  })
  .openapi('ResourceKey')

const ResourceKeysSchema = z.array(ResourceKeySchema).min(1).max(100).openapi('ResourceKeys')

const BatchGetResourceConfigResponseSchema = z
  .object({
    baseConfigurationItems: BaseConfigurationItemsSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the current configuration of one or more resources.',
        }),
    ).exactOptional(),
    unprocessedResourceKeys: ResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource keys that were not processed with the current response. The unprocessesResourceKeys value is in the same form as ResourceKeys, so the value can be directly provided to a subsequent BatchGetResourceConfig operation. If there are no unprocessed resource keys, the response contains an empty unprocessedResourceKeys list. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BatchGetResourceConfigResponse')

const BatchGetResourceConfigRequestSchema = z
  .object({
    resourceKeys: ResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID.',
        }),
    ),
  })
  .openapi({ required: ['resourceKeys'], title: 'BatchGetResourceConfigRequest' })
  .openapi('BatchGetResourceConfigRequest')

const NoAvailableConfigurationRecorderExceptionSchema = z
  .any()
  .openapi('NoAvailableConfigurationRecorderException')

const DeleteAggregationAuthorizationRequestSchema = z
  .object({
    AuthorizedAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the account authorized to aggregate data.',
        }),
    ),
    AuthorizedAwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region authorized to collect aggregated data.' }),
    ),
  })
  .openapi({
    required: ['AuthorizedAccountId', 'AuthorizedAwsRegion'],
    title: 'DeleteAggregationAuthorizationRequest',
  })
  .openapi('DeleteAggregationAuthorizationRequest')

const InvalidParameterValueExceptionSchema = z.any().openapi('InvalidParameterValueException')

const ConfigRuleNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(128)
  .openapi('ConfigRuleName')

const DeleteConfigRuleRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule that you want to delete.' }),
    ),
  })
  .openapi({ required: ['ConfigRuleName'], title: 'DeleteConfigRuleRequest', description: '<p/>' })
  .openapi('DeleteConfigRuleRequest')

const NoSuchConfigRuleExceptionSchema = z.any().openapi('NoSuchConfigRuleException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const DeleteConfigurationAggregatorRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'DeleteConfigurationAggregatorRequest',
  })
  .openapi('DeleteConfigurationAggregatorRequest')

const RecorderNameSchema = z.string().min(1).max(256).openapi('RecorderName')

const DeleteConfigurationRecorderRequestSchema = z
  .object({
    ConfigurationRecorderName: RecorderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the configuration recorder to be deleted. You can retrieve the name of your configuration recorder by using the <code>DescribeConfigurationRecorders</code> action.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationRecorderName'],
    title: 'DeleteConfigurationRecorderRequest',
    description: 'The request object for the <code>DeleteConfigurationRecorder</code> action.',
  })
  .openapi('DeleteConfigurationRecorderRequest')

const NoSuchConfigurationRecorderExceptionSchema = z
  .any()
  .openapi('NoSuchConfigurationRecorderException')

const ConformancePackNameSchema = z
  .string()
  .regex(/[a-zA-Z][-a-zA-Z0-9]*/)
  .min(1)
  .max(256)
  .openapi('ConformancePackName')

const DeleteConformancePackRequestSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack you want to delete.' }),
    ),
  })
  .openapi({ required: ['ConformancePackName'], title: 'DeleteConformancePackRequest' })
  .openapi('DeleteConformancePackRequest')

const NoSuchConformancePackExceptionSchema = z.any().openapi('NoSuchConformancePackException')

const ChannelNameSchema = z.string().min(1).max(256).openapi('ChannelName')

const DeleteDeliveryChannelRequestSchema = z
  .object({
    DeliveryChannelName: ChannelNameSchema.and(
      z.any().openapi({ description: 'The name of the delivery channel to delete.' }),
    ),
  })
  .openapi({
    required: ['DeliveryChannelName'],
    title: 'DeleteDeliveryChannelRequest',
    description:
      'The input for the <a>DeleteDeliveryChannel</a> action. The action accepts the following data, in JSON format. ',
  })
  .openapi('DeleteDeliveryChannelRequest')

const NoSuchDeliveryChannelExceptionSchema = z.any().openapi('NoSuchDeliveryChannelException')

const LastDeliveryChannelDeleteFailedExceptionSchema = z
  .any()
  .openapi('LastDeliveryChannelDeleteFailedException')

const DeleteEvaluationResultsResponseSchema = z
  .object({})
  .openapi({
    description: 'The output when you delete the evaluation results for the specified Config rule.',
  })
  .openapi('DeleteEvaluationResultsResponse')

const StringWithCharLimit64Schema = z.string().min(1).max(64).openapi('StringWithCharLimit64')

const DeleteEvaluationResultsRequestSchema = z
  .object({
    ConfigRuleName: StringWithCharLimit64Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Config rule for which you want to delete the evaluation results.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigRuleName'],
    title: 'DeleteEvaluationResultsRequest',
    description: '<p/>',
  })
  .openapi('DeleteEvaluationResultsRequest')

const OrganizationConfigRuleNameSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(64)
  .openapi('OrganizationConfigRuleName')

const DeleteOrganizationConfigRuleRequestSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of organization Config rule that you want to delete.' }),
    ),
  })
  .openapi({
    required: ['OrganizationConfigRuleName'],
    title: 'DeleteOrganizationConfigRuleRequest',
  })
  .openapi('DeleteOrganizationConfigRuleRequest')

const NoSuchOrganizationConfigRuleExceptionSchema = z
  .any()
  .openapi('NoSuchOrganizationConfigRuleException')

const OrganizationAccessDeniedExceptionSchema = z.any().openapi('OrganizationAccessDeniedException')

const OrganizationConformancePackNameSchema = z
  .string()
  .regex(/[a-zA-Z][-a-zA-Z0-9]*/)
  .min(1)
  .max(128)
  .openapi('OrganizationConformancePackName')

const DeleteOrganizationConformancePackRequestSchema = z
  .object({
    OrganizationConformancePackName: OrganizationConformancePackNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of organization conformance pack that you want to delete.',
        }),
    ),
  })
  .openapi({
    required: ['OrganizationConformancePackName'],
    title: 'DeleteOrganizationConformancePackRequest',
  })
  .openapi('DeleteOrganizationConformancePackRequest')

const NoSuchOrganizationConformancePackExceptionSchema = z
  .any()
  .openapi('NoSuchOrganizationConformancePackException')

const DeletePendingAggregationRequestRequestSchema = z
  .object({
    RequesterAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the account requesting to aggregate data.',
        }),
    ),
    RequesterAwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region requesting to aggregate data.' }),
    ),
  })
  .openapi({
    required: ['RequesterAccountId', 'RequesterAwsRegion'],
    title: 'DeletePendingAggregationRequestRequest',
  })
  .openapi('DeletePendingAggregationRequestRequest')

const DeleteRemediationConfigurationResponseSchema = z
  .object({})
  .openapi('DeleteRemediationConfigurationResponse')

const StringSchema = z.string().openapi('String')

const DeleteRemediationConfigurationRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Config rule for which you want to delete remediation configuration.',
        }),
    ),
    ResourceType: StringSchema.and(
      z.any().openapi({ description: 'The type of a resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConfigRuleName'], title: 'DeleteRemediationConfigurationRequest' })
  .openapi('DeleteRemediationConfigurationRequest')

const NoSuchRemediationConfigurationExceptionSchema = z
  .any()
  .openapi('NoSuchRemediationConfigurationException')

const RemediationInProgressExceptionSchema = z.any().openapi('RemediationInProgressException')

const InsufficientPermissionsExceptionSchema = z.any().openapi('InsufficientPermissionsException')

const StringWithCharLimit256Schema = z.string().min(1).max(256).openapi('StringWithCharLimit256')

const RemediationExceptionResourceKeySchema = z
  .object({
    ResourceType: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The type of a resource.' }),
    ).exactOptional(),
    ResourceId: StringWithCharLimit1024Schema.and(
      z.any().openapi({ description: 'The ID of the resource (for example., sg-xxxxxx).' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details that identify a resource within Config, including the resource type and resource ID. ',
    required: [],
  })
  .openapi('RemediationExceptionResourceKey')

const RemediationExceptionResourceKeysSchema = z
  .array(RemediationExceptionResourceKeySchema)
  .min(1)
  .max(100)
  .openapi('RemediationExceptionResourceKeys')

const FailedDeleteRemediationExceptionsBatchSchema = z
  .object({
    FailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a failure message for delete remediation exception. For example, Config creates an exception due to an internal error.',
        }),
    ).exactOptional(),
    FailedItems: RemediationExceptionResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns remediation exception resource key object of the failed items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'List of each of the failed delete remediation exceptions with specific reasons.',
    required: [],
  })
  .openapi('FailedDeleteRemediationExceptionsBatch')

const FailedDeleteRemediationExceptionsBatchesSchema = z
  .array(FailedDeleteRemediationExceptionsBatchSchema)
  .openapi('FailedDeleteRemediationExceptionsBatches')

const DeleteRemediationExceptionsResponseSchema = z
  .object({
    FailedBatches: FailedDeleteRemediationExceptionsBatchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of failed delete remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DeleteRemediationExceptionsResponse')

const DeleteRemediationExceptionsRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Config rule for which you want to delete remediation exception configuration.',
        }),
    ),
    ResourceKeys: RemediationExceptionResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. ',
        }),
    ),
  })
  .openapi({
    required: ['ConfigRuleName', 'ResourceKeys'],
    title: 'DeleteRemediationExceptionsRequest',
  })
  .openapi('DeleteRemediationExceptionsRequest')

const NoSuchRemediationExceptionExceptionSchema = z
  .any()
  .openapi('NoSuchRemediationExceptionException')

const ResourceTypeStringSchema = z.string().min(1).max(196).openapi('ResourceTypeString')

const DeleteResourceConfigRequestSchema = z
  .object({
    ResourceType: ResourceTypeStringSchema.and(
      z.any().openapi({ description: 'The type of the resource.' }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Unique identifier of the resource.' }),
    ),
  })
  .openapi({ required: ['ResourceType', 'ResourceId'], title: 'DeleteResourceConfigRequest' })
  .openapi('DeleteResourceConfigRequest')

const NoRunningConfigurationRecorderExceptionSchema = z
  .any()
  .openapi('NoRunningConfigurationRecorderException')

const RetentionConfigurationNameSchema = z
  .string()
  .regex(/[\w\-]+/)
  .min(1)
  .max(256)
  .openapi('RetentionConfigurationName')

const DeleteRetentionConfigurationRequestSchema = z
  .object({
    RetentionConfigurationName: RetentionConfigurationNameSchema.and(
      z.any().openapi({ description: 'The name of the retention configuration to delete.' }),
    ),
  })
  .openapi({
    required: ['RetentionConfigurationName'],
    title: 'DeleteRetentionConfigurationRequest',
  })
  .openapi('DeleteRetentionConfigurationRequest')

const NoSuchRetentionConfigurationExceptionSchema = z
  .any()
  .openapi('NoSuchRetentionConfigurationException')

const DeleteStoredQueryResponseSchema = z.object({}).openapi('DeleteStoredQueryResponse')

const QueryNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]+$/)
  .min(1)
  .max(64)
  .openapi('QueryName')

const DeleteStoredQueryRequestSchema = z
  .object({
    QueryName: QueryNameSchema.and(
      z.any().openapi({ description: 'The name of the query that you want to delete.' }),
    ),
  })
  .openapi({ required: ['QueryName'], title: 'DeleteStoredQueryRequest' })
  .openapi('DeleteStoredQueryRequest')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const DeliverConfigSnapshotResponseSchema = z
  .object({
    configSnapshotId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the snapshot that is being created.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.',
    required: [],
  })
  .openapi('DeliverConfigSnapshotResponse')

const DeliverConfigSnapshotRequestSchema = z
  .object({
    deliveryChannelName: ChannelNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the delivery channel through which the snapshot is delivered.',
        }),
    ),
  })
  .openapi({
    required: ['deliveryChannelName'],
    title: 'DeliverConfigSnapshotRequest',
    description: 'The input for the <a>DeliverConfigSnapshot</a> action.',
  })
  .openapi('DeliverConfigSnapshotRequest')

const ComplianceTypeSchema = z
  .enum(['COMPLIANT', 'NON_COMPLIANT', 'NOT_APPLICABLE', 'INSUFFICIENT_DATA'])
  .openapi('ComplianceType')

const IntegerSchema = z.int().openapi('Integer')

const BooleanSchema = z.boolean().openapi('Boolean')

const ComplianceContributorCountSchema = z
  .object({
    CappedCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item.',
        }),
    ).exactOptional(),
    CapExceeded: BooleanSchema.and(
      z.any().openapi({ description: 'Indicates whether the maximum count is reached.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of Amazon Web Services resources or Config rules responsible for the current compliance of the item, up to a maximum number.',
    required: [],
  })
  .openapi('ComplianceContributorCount')

const ComplianceSchema = z
  .object({
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether an Amazon Web Services resource or Config rule is compliant.</p> <p>A resource is compliant if it complies with all of the Config rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.</p> <p>A rule is compliant if all of the resources that the rule evaluates comply with it. A rule is noncompliant if any of these resources do not comply.</p> <p>Config returns the <code>INSUFFICIENT_DATA</code> value when no evaluation results are available for the Amazon Web Services resource or Config rule.</p> <p>For the <code>Compliance</code> data type, Config supports only <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>INSUFFICIENT_DATA</code> values. Config does not support the <code>NOT_APPLICABLE</code> value for the <code>Compliance</code> data type.</p>',
        }),
    ).exactOptional(),
    ComplianceContributorCount: ComplianceContributorCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources or Config rules that cause a result of <code>NON_COMPLIANT</code>, up to a maximum number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.',
    required: [],
  })
  .openapi('Compliance')

const AggregateComplianceByConfigRuleSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ).exactOptional(),
    Compliance: ComplianceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether an Amazon Web Services resource or Config rule is compliant and provides the number of contributors that affect the compliance.',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region from where the data is aggregated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Indicates whether an Config rule is compliant based on account ID, region, compliance, and rule name.</p> <p>A rule is compliant if all of the resources that the rule evaluated comply with it. It is noncompliant if any of these resources do not comply.</p>',
    required: [],
  })
  .openapi('AggregateComplianceByConfigRule')

const AggregateComplianceByConfigRuleListSchema = z
  .array(AggregateComplianceByConfigRuleSchema)
  .openapi('AggregateComplianceByConfigRuleList')

const NextTokenSchema = z.string().openapi('NextToken')

const DescribeAggregateComplianceByConfigRulesResponseSchema = z
  .object({
    AggregateComplianceByConfigRules: AggregateComplianceByConfigRuleListSchema.and(
      z.any().openapi({ description: 'Returns a list of AggregateComplianceByConfigRule object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAggregateComplianceByConfigRulesResponse')

const ConfigRuleComplianceFiltersSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ).exactOptional(),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The rule compliance status.</p> <p>For the <code>ConfigRuleComplianceFilters</code> data type, Config supports only <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. Config does not support the <code>NOT_APPLICABLE</code> and the <code>INSUFFICIENT_DATA</code> values.</p>',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account. ' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region where the data is aggregated. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters the compliance results based on account ID, region, compliance type, and rule name.',
    required: [],
  })
  .openapi('ConfigRuleComplianceFilters')

const GroupByAPILimitSchema = z.int().min(0).max(1000).openapi('GroupByAPILimit')

const DescribeAggregateComplianceByConfigRulesRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Filters: ConfigRuleComplianceFiltersSchema.and(
      z
        .any()
        .openapi({ description: 'Filters the results by ConfigRuleComplianceFilters object. ' }),
    ).exactOptional(),
    Limit: GroupByAPILimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'DescribeAggregateComplianceByConfigRulesRequest',
  })
  .openapi('DescribeAggregateComplianceByConfigRulesRequest')

const InvalidLimitExceptionSchema = z.any().openapi('InvalidLimitException')

const InvalidNextTokenExceptionSchema = z.any().openapi('InvalidNextTokenException')

const ConformancePackComplianceTypeSchema = z
  .enum(['COMPLIANT', 'NON_COMPLIANT', 'INSUFFICIENT_DATA'])
  .openapi('ConformancePackComplianceType')

const AggregateConformancePackComplianceSchema = z
  .object({
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z.any().openapi({ description: 'The compliance status of the conformance pack.' }),
    ).exactOptional(),
    CompliantRuleCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of compliant Config Rules.' }),
    ).exactOptional(),
    NonCompliantRuleCount: IntegerSchema.and(
      z.any().openapi({ description: 'The number of noncompliant Config Rules.' }),
    ).exactOptional(),
    TotalRuleCount: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'Total number of compliant rules, noncompliant rules, and the rules that do not have any applicable resources to evaluate upon resulting in insufficient data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides the number of compliant and noncompliant rules within a conformance pack. Also provides the compliance status of the conformance pack and the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>',
    required: [],
  })
  .openapi('AggregateConformancePackCompliance')

const AggregateComplianceByConformancePackSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'The name of the conformance pack.' }),
    ).exactOptional(),
    Compliance: AggregateConformancePackComplianceSchema.and(
      z.any().openapi({ description: 'The compliance status of the conformance pack.' }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit Amazon Web Services account ID of the source account.',
        }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The source Amazon Web Services Region from where the data is aggregated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides aggregate compliance of the conformance pack. Indicates whether a conformance pack is compliant based on the name of the conformance pack, account ID, and region.</p> <p>A conformance pack is compliant if all of the rules in a conformance packs are compliant. It is noncompliant if any of the rules are not compliant. The compliance status of a conformance pack is INSUFFICIENT_DATA only if all rules within a conformance pack cannot be evaluated due to insufficient data. If some of the rules in a conformance pack are compliant but the compliance status of other rules in that same conformance pack is INSUFFICIENT_DATA, the conformance pack shows compliant.</p>',
    required: [],
  })
  .openapi('AggregateComplianceByConformancePack')

const AggregateComplianceByConformancePackListSchema = z
  .array(AggregateComplianceByConformancePackSchema)
  .openapi('AggregateComplianceByConformancePackList')

const DescribeAggregateComplianceByConformancePacksResponseSchema = z
  .object({
    AggregateComplianceByConformancePacks: AggregateComplianceByConformancePackListSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns the <code>AggregateComplianceByConformancePack</code> object.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAggregateComplianceByConformancePacksResponse')

const AggregateConformancePackComplianceFiltersSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'The name of the conformance pack.' }),
    ).exactOptional(),
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z.any().openapi({ description: 'The compliance status of the conformance pack.' }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit Amazon Web Services account ID of the source account.',
        }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The source Amazon Web Services Region from where the data is aggregated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters the conformance packs based on an account ID, region, compliance type, and the name of the conformance pack.',
    required: [],
  })
  .openapi('AggregateConformancePackComplianceFilters')

const LimitSchema = z.int().min(0).max(100).openapi('Limit')

const DescribeAggregateComplianceByConformancePacksRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Filters: AggregateConformancePackComplianceFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the result by <code>AggregateConformancePackComplianceFilters</code> object.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of conformance packs compliance details returned on each page. The default is maximum. If you specify 0, Config uses the default. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'DescribeAggregateComplianceByConformancePacksRequest',
  })
  .openapi('DescribeAggregateComplianceByConformancePacksRequest')

const DateSchema = z.iso.datetime({ offset: true }).openapi('Date')

const AggregationAuthorizationSchema = z
  .object({
    AggregationAuthorizationArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the aggregation object.' }),
    ).exactOptional(),
    AuthorizedAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the account authorized to aggregate data.',
        }),
    ).exactOptional(),
    AuthorizedAwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region authorized to collect aggregated data.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time stamp when the aggregation authorization was created.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the authorizations granted to aggregator accounts and regions.',
    required: [],
  })
  .openapi('AggregationAuthorization')

const AggregationAuthorizationListSchema = z
  .array(AggregationAuthorizationSchema)
  .openapi('AggregationAuthorizationList')

const DescribeAggregationAuthorizationsResponseSchema = z
  .object({
    AggregationAuthorizations: AggregationAuthorizationListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of authorizations granted to various aggregator accounts and regions.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeAggregationAuthorizationsResponse')

const DescribeAggregationAuthorizationsRequestSchema = z
  .object({
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of AggregationAuthorizations returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeAggregationAuthorizationsRequest', required: [] })
  .openapi('DescribeAggregationAuthorizationsRequest')

const ComplianceByConfigRuleSchema = z
  .object({
    ConfigRuleName: StringWithCharLimit64Schema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ).exactOptional(),
    Compliance: ComplianceSchema.and(
      z.any().openapi({ description: 'Indicates whether the Config rule is compliant.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether an Config rule is compliant. A rule is compliant if all of the resources that the rule evaluated comply with it. A rule is noncompliant if any of these resources do not comply.',
    required: [],
  })
  .openapi('ComplianceByConfigRule')

const ComplianceByConfigRulesSchema = z
  .array(ComplianceByConfigRuleSchema)
  .openapi('ComplianceByConfigRules')

const DescribeComplianceByConfigRuleResponseSchema = z
  .object({
    ComplianceByConfigRules: ComplianceByConfigRulesSchema.and(
      z
        .any()
        .openapi({
          description: 'Indicates whether each of the specified Config rules is compliant.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeComplianceByConfigRuleResponse')

const ConfigRuleNamesSchema = z
  .array(ConfigRuleNameSchema)
  .min(0)
  .max(25)
  .openapi('ConfigRuleNames')

const ComplianceTypesSchema = z.array(ComplianceTypeSchema).min(0).max(3).openapi('ComplianceTypes')

const DescribeComplianceByConfigRuleRequestSchema = z
  .object({
    ConfigRuleNames: ConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'Specify one or more Config rule names to filter the results by rule.',
        }),
    ).exactOptional(),
    ComplianceTypes: ComplianceTypesSchema.and(
      z.any().openapi({ description: 'Filters the results by compliance.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeComplianceByConfigRuleRequest', description: '<p/>', required: [] })
  .openapi('DescribeComplianceByConfigRuleRequest')

const BaseResourceIdSchema = z.string().min(1).max(768).openapi('BaseResourceId')

const ComplianceByResourceSchema = z
  .object({
    ResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description: 'The type of the Amazon Web Services resource that was evaluated.',
        }),
    ).exactOptional(),
    ResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    Compliance: ComplianceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the Amazon Web Services resource complies with all of the Config rules that evaluated it.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Indicates whether an Amazon Web Services resource that is evaluated according to one or more Config rules is compliant. A resource is compliant if it complies with all of the rules that evaluate it. A resource is noncompliant if it does not comply with one or more of these rules.',
    required: [],
  })
  .openapi('ComplianceByResource')

const ComplianceByResourcesSchema = z
  .array(ComplianceByResourceSchema)
  .openapi('ComplianceByResources')

const DescribeComplianceByResourceResponseSchema = z
  .object({
    ComplianceByResources: ComplianceByResourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the specified Amazon Web Services resource complies with all of the Config rules that evaluate it.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeComplianceByResourceResponse')

const DescribeComplianceByResourceRequestSchema = z
  .object({
    ResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The types of Amazon Web Services resources for which you want compliance information (for example, <code>AWS::EC2::Instance</code>). For this action, you can specify that the resource type is an Amazon Web Services account by specifying <code>AWS::::Account</code>.',
        }),
    ).exactOptional(),
    ResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services resource for which you want compliance information. You can specify only one resource ID. If you specify a resource ID, you must also specify a type for <code>ResourceType</code>.',
        }),
    ).exactOptional(),
    ComplianceTypes: ComplianceTypesSchema.and(
      z.any().openapi({ description: 'Filters the results by compliance.' }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeComplianceByResourceRequest', description: '<p/>', required: [] })
  .openapi('DescribeComplianceByResourceRequest')

const ConfigRuleEvaluationStatusSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ).exactOptional(),
    ConfigRuleArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Config rule.' }),
    ).exactOptional(),
    ConfigRuleId: StringSchema.and(
      z.any().openapi({ description: 'The ID of the Config rule.' }),
    ).exactOptional(),
    LastSuccessfulInvocationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that Config last successfully invoked the Config rule to evaluate your Amazon Web Services resources.',
        }),
    ).exactOptional(),
    LastFailedInvocationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that Config last failed to invoke the Config rule to evaluate your Amazon Web Services resources.',
        }),
    ).exactOptional(),
    LastSuccessfulEvaluationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that Config last successfully evaluated your Amazon Web Services resources against the rule.',
        }),
    ).exactOptional(),
    LastFailedEvaluationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time that Config last failed to evaluate your Amazon Web Services resources against the rule.',
        }),
    ).exactOptional(),
    FirstActivatedTime: DateSchema.and(
      z.any().openapi({ description: 'The time that you first activated the Config rule.' }),
    ).exactOptional(),
    LastDeactivatedTime: DateSchema.and(
      z.any().openapi({ description: 'The time that you last turned off the Config rule.' }),
    ).exactOptional(),
    LastErrorCode: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The error code that Config returned when the rule last failed.' }),
    ).exactOptional(),
    LastErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The error message that Config returned when the rule last failed.',
        }),
    ).exactOptional(),
    FirstEvaluationStarted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether Config has evaluated your resources against the rule at least once.</p> <ul> <li> <p> <code>true</code> - Config has evaluated your Amazon Web Services resources against the rule at least once.</p> </li> <li> <p> <code>false</code> - Config has not finished evaluating your Amazon Web Services resources against the rule at least once.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LastDebugLogDeliveryStatus: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the last attempted delivery of a debug log for your Config Custom Policy rules. Either <code>Successful</code> or <code>Failed</code>.',
        }),
    ).exactOptional(),
    LastDebugLogDeliveryStatusReason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The reason Config was not able to deliver a debug log. This is for the last failed attempt to retrieve a debug log for your Config Custom Policy rules.',
        }),
    ).exactOptional(),
    LastDebugLogDeliveryTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time Config last attempted to deliver a debug log for your Config Custom Policy rules.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Status information for your Config Managed rules and Config Custom Policy rules. The status includes information such as the last time the rule ran, the last time it failed, and the related error for the last failure.</p> <p>This action does not return status information about Config Custom Lambda rules.</p>',
    required: [],
  })
  .openapi('ConfigRuleEvaluationStatus')

const ConfigRuleEvaluationStatusListSchema = z
  .array(ConfigRuleEvaluationStatusSchema)
  .openapi('ConfigRuleEvaluationStatusList')

const DescribeConfigRuleEvaluationStatusResponseSchema = z
  .object({
    ConfigRulesEvaluationStatus: ConfigRuleEvaluationStatusListSchema.and(
      z.any().openapi({ description: 'Status information about your Config managed rules.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeConfigRuleEvaluationStatusResponse')

const RuleLimitSchema = z.int().min(0).max(50).openapi('RuleLimit')

const DescribeConfigRuleEvaluationStatusRequestSchema = z
  .object({
    ConfigRuleNames: ConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Config managed rules for which you want status information. If you do not specify any names, Config returns status information for all Config managed rules that you use.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    Limit: RuleLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of rule evaluation results that you want returned.</p> <p>This parameter is required if the rule limit for your account is more than the default of 150 rules.</p> <p>For information about requesting a rule limit increase, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_config">Config Limits</a> in the <i>Amazon Web Services General Reference Guide</i>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeConfigRuleEvaluationStatusRequest',
    description: '<p/>',
    required: [],
  })
  .openapi('DescribeConfigRuleEvaluationStatusRequest')

const EmptiableStringWithCharLimit256Schema = z
  .string()
  .min(0)
  .max(256)
  .openapi('EmptiableStringWithCharLimit256')

const ComplianceResourceTypesSchema = z
  .array(StringWithCharLimit256Schema)
  .min(0)
  .max(100)
  .openapi('ComplianceResourceTypes')

const StringWithCharLimit128Schema = z.string().min(1).max(128).openapi('StringWithCharLimit128')

const ScopeSchema = z
  .object({
    ComplianceResourceTypes: ComplianceResourceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource types of only those Amazon Web Services resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for <code>ComplianceResourceId</code>.',
        }),
    ).exactOptional(),
    TagKey: StringWithCharLimit128Schema.and(
      z
        .any()
        .openapi({
          description:
            'The tag key that is applied to only those Amazon Web Services resources that you want to trigger an evaluation for the rule.',
        }),
    ).exactOptional(),
    TagValue: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The tag value applied to only those Amazon Web Services resources that you want to trigger an evaluation for the rule. If you specify a value for <code>TagValue</code>, you must also specify a value for <code>TagKey</code>.',
        }),
    ).exactOptional(),
    ComplianceResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the only Amazon Web Services resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for <code>ComplianceResourceTypes</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Defines which resources trigger an evaluation for an Config rule. The scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. Specify a scope to constrain which resources trigger an evaluation for a rule. Otherwise, evaluations for the rule are triggered when any resource in your recording group changes in configuration.',
    required: [],
  })
  .openapi('Scope')

const OwnerSchema = z.enum(['CUSTOM_LAMBDA', 'AWS', 'CUSTOM_POLICY']).openapi('Owner')

const EventSourceSchema = z.literal('aws.config').openapi('EventSource')

const MessageTypeSchema = z
  .enum([
    'ConfigurationItemChangeNotification',
    'ConfigurationSnapshotDeliveryCompleted',
    'ScheduledNotification',
    'OversizedConfigurationItemChangeNotification',
  ])
  .openapi('MessageType')

const MaximumExecutionFrequencySchema = z
  .enum(['One_Hour', 'Three_Hours', 'Six_Hours', 'Twelve_Hours', 'TwentyFour_Hours'])
  .openapi('MaximumExecutionFrequency')

const SourceDetailSchema = z
  .object({
    EventSource: EventSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of the event, such as an Amazon Web Services service, that triggers Config to evaluate your Amazon Web Services resources.',
        }),
    ).exactOptional(),
    MessageType: MessageTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of notification that triggers Config to run an evaluation for a rule. You can specify the following notification types:</p> <ul> <li> <p> <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p> </li> <li> <p> <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p> </li> <li> <p> <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p> </li> <li> <p> <code>ConfigurationSnapshotDeliveryCompleted</code> - Triggers a periodic evaluation when Config delivers a configuration snapshot.</p> </li> </ul> <p>If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for <code>ConfigurationItemChangeNotification</code> and one for <code>OversizedConfigurationItemChangeNotification</code>.</p>',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frequency at which you want Config to run evaluations for a custom rule with a periodic trigger. If you specify a value for <code>MaximumExecutionFrequency</code>, then <code>MessageType</code> must use the <code>ScheduledNotification</code> value.</p> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> <p>Based on the valid value you choose, Config runs evaluations once for each valid value. For example, if you choose <code>Three_Hours</code>, Config runs evaluations once every three hours. In this case, <code>Three_Hours</code> is the frequency of this rule. </p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides the source and the message types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic. You can specify the parameter values for <code>SourceDetail</code> only for custom rules. ',
    required: [],
  })
  .openapi('SourceDetail')

const SourceDetailsSchema = z.array(SourceDetailSchema).min(0).max(25).openapi('SourceDetails')

const PolicyRuntimeSchema = z
  .string()
  .regex(/guard\-2\.x\.x/)
  .min(1)
  .max(64)
  .openapi('PolicyRuntime')

const PolicyTextSchema = z.string().min(0).max(10000).openapi('PolicyText')

const CustomPolicyDetailsSchema = z
  .object({
    PolicyRuntime: PolicyRuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>.',
        }),
    ),
    PolicyText: PolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy definition containing the logic for your Config Custom Policy rule.',
        }),
    ),
    EnableDebugLogDelivery: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is <code>false</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyRuntime', 'PolicyText'],
    description:
      'Provides the runtime system, policy definition, and whether debug logging enabled. You can specify the following CustomPolicyDetails parameter values only for Config Custom Policy rules.',
  })
  .openapi('CustomPolicyDetails')

const SourceSchema = z
  .object({
    Owner: OwnerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether Amazon Web Services or the customer owns and manages the Config rule.</p> <p>Config Managed Rules are predefined rules owned by Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Config Managed Rules</a> in the <i>Config developer guide</i>.</p> <p>Config Custom Rules are rules that you can develop either with Guard (<code>CUSTOM_POLICY</code>) or Lambda (<code>CUSTOM_LAMBDA</code>). For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html">Config Custom Rules </a> in the <i>Config developer guide</i>.</p>',
        }),
    ),
    SourceIdentifier: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For Config Managed rules, a predefined identifier from a list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p> <p>For Config Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule\'s Lambda function, such as <code>arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name</code>.</p> <p>For Config Custom Policy rules, this field will be ignored.</p>',
        }),
    ).exactOptional(),
    SourceDetails: SourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Provides the source and the message types that cause Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.</p> <p>If the owner is set to <code>CUSTOM_POLICY</code>, the only acceptable values for the Config rule trigger message type are <code>ConfigurationItemChangeNotification</code> and <code>OversizedConfigurationItemChangeNotification</code>.</p>',
        }),
    ).exactOptional(),
    CustomPolicyDetails: CustomPolicyDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to <code>CUSTOM_POLICY</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Owner'],
    description:
      'Provides the CustomPolicyDetails, the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the events that cause the evaluation of your Amazon Web Services resources.',
  })
  .openapi('Source')

const ConfigRuleStateSchema = z
  .enum(['ACTIVE', 'DELETING', 'DELETING_RESULTS', 'EVALUATING'])
  .openapi('ConfigRuleState')

const EvaluationModeSchema = z.enum(['DETECTIVE', 'PROACTIVE']).openapi('EvaluationMode')

const EvaluationModeConfigurationSchema = z
  .object({
    Mode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The mode of an evaluation. The valid values are Detective or Proactive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The configuration object for Config rule evaluation mode. The Supported valid values are Detective or Proactive.',
    required: [],
  })
  .openapi('EvaluationModeConfiguration')

const EvaluationModesSchema = z.array(EvaluationModeConfigurationSchema).openapi('EvaluationModes')

const ConfigRuleSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name that you assign to the Config rule. The name is required if you are adding a new rule.',
        }),
    ).exactOptional(),
    ConfigRuleArn: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the Config rule.' }),
    ).exactOptional(),
    ConfigRuleId: StringWithCharLimit64Schema.and(
      z.any().openapi({ description: 'The ID of the Config rule.' }),
    ).exactOptional(),
    Description: EmptiableStringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The description that you provide for the Config rule.' }),
    ).exactOptional(),
    Scope: ScopeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.</p> <note> <p>The scope can be empty. </p> </note>',
        }),
    ).exactOptional(),
    Source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provides the rule owner (<code>Amazon Web Services</code> for managed rules, <code>CUSTOM_POLICY</code> for Custom Policy rules, and <code>CUSTOM_LAMBDA</code> for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your Amazon Web Services resources.',
        }),
    ),
    InputParameters: StringWithCharLimit1024Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string, in JSON format, that is passed to the Config rule Lambda function.',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum frequency with which Config runs evaluations for a rule. You can specify a value for <code>MaximumExecutionFrequency</code> when:</p> <ul> <li> <p>This is for an Config managed rule that is triggered at a periodic frequency.</p> </li> <li> <p>Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </li> </ul> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    ConfigRuleState: ConfigRuleStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the Config rule is active or is currently being deleted by Config. It can also indicate the evaluation status for the Config rule.</p> <p>Config sets the state of the rule to <code>EVALUATING</code> temporarily after you use the <code>StartConfigRulesEvaluation</code> request to evaluate your resources against the Config rule.</p> <p>Config sets the state of the rule to <code>DELETING_RESULTS</code> temporarily after you use the <code>DeleteEvaluationResults</code> request to delete the current evaluation results for the Config rule.</p> <p>Config temporarily sets the state of a rule to <code>DELETING</code> after you use the <code>DeleteConfigRule</code> request to delete the rule. After Config deletes the rule, the rule and all of its evaluations are erased and are no longer available.</p>',
        }),
    ).exactOptional(),
    CreatedBy: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Service principal name of the service that created the rule.</p> <note> <p>The field is populated only if the service-linked rule is created by a service. The field is empty if you create your own rule.</p> </note>',
        }),
    ).exactOptional(),
    EvaluationModes: EvaluationModesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The modes the Config rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Source'],
    description:
      '<p>Config rules evaluate the configuration settings of your Amazon Web Services resources. A rule can run when Config detects a configuration change to an Amazon Web Services resource or at a periodic frequency that you choose (for example, every 24 hours). There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resource with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p>You can use the Amazon Web Services CLI and Amazon Web Services SDKs if you want to create a rule that triggers evaluations for your resources when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> </note>',
  })
  .openapi('ConfigRule')

const ConfigRulesSchema = z.array(ConfigRuleSchema).openapi('ConfigRules')

const DescribeConfigRulesResponseSchema = z
  .object({
    ConfigRules: ConfigRulesSchema.and(
      z.any().openapi({ description: 'The details about your Config rules.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('DescribeConfigRulesResponse')

const DescribeConfigRulesFiltersSchema = z
  .object({
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The mode of an evaluation. The valid values are Detective or Proactive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns a filtered list of Detective or Proactive Config rules. By default, if the filter is not defined, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the Config Developer Guide.',
    required: [],
  })
  .openapi('DescribeConfigRulesFilters')

const DescribeConfigRulesRequestSchema = z
  .object({
    ConfigRuleNames: ConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the Config rules for which you want details. If you do not specify any names, Config returns details for all your rules.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    Filters: DescribeConfigRulesFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of Detective or Proactive Config rules. By default, this API returns an unfiltered list. For more information on Detective or Proactive Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config-rules.html"> <b>Evaluation Mode</b> </a> in the Config Developer Guide.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConfigRulesRequest', description: '<p/>', required: [] })
  .openapi('DescribeConfigRulesRequest')

const AggregatedSourceTypeSchema = z
  .enum(['ACCOUNT', 'ORGANIZATION'])
  .openapi('AggregatedSourceType')

const AggregatedSourceStatusTypeSchema = z
  .enum(['FAILED', 'SUCCEEDED', 'OUTDATED'])
  .openapi('AggregatedSourceStatusType')

const AggregatedSourceStatusSchema = z
  .object({
    SourceId: StringSchema.and(
      z.any().openapi({ description: 'The source account ID or an organization.' }),
    ).exactOptional(),
    SourceType: AggregatedSourceTypeSchema.and(
      z.any().openapi({ description: 'The source account or an organization.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region authorized to collect aggregated data.' }),
    ).exactOptional(),
    LastUpdateStatus: AggregatedSourceStatusTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the last updated status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The time of the last update.' }),
    ).exactOptional(),
    LastErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The error code that Config returned when the source account aggregation last failed.',
        }),
    ).exactOptional(),
    LastErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The message indicating that the source account aggregation failed due to an error.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The current sync status between the source and the aggregator account.',
    required: [],
  })
  .openapi('AggregatedSourceStatus')

const AggregatedSourceStatusListSchema = z
  .array(AggregatedSourceStatusSchema)
  .openapi('AggregatedSourceStatusList')

const DescribeConfigurationAggregatorSourcesStatusResponseSchema = z
  .object({
    AggregatedSourceStatusList: AggregatedSourceStatusListSchema.and(
      z.any().openapi({ description: 'Returns an AggregatedSourceStatus object. ' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationAggregatorSourcesStatusResponse')

const AggregatedSourceStatusTypeListSchema = z
  .array(AggregatedSourceStatusTypeSchema)
  .min(1)
  .openapi('AggregatedSourceStatusTypeList')

const DescribeConfigurationAggregatorSourcesStatusRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    UpdateStatus: AggregatedSourceStatusTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the status type.</p> <ul> <li> <p>Valid value FAILED indicates errors while moving data.</p> </li> <li> <p>Valid value SUCCEEDED indicates the data was successfully moved.</p> </li> <li> <p>Valid value OUTDATED indicates the data is not the most recent.</p> </li> </ul>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of AggregatorSourceStatus returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'DescribeConfigurationAggregatorSourcesStatusRequest',
  })
  .openapi('DescribeConfigurationAggregatorSourcesStatusRequest')

const ConfigurationAggregatorArnSchema = z
  .string()
  .regex(/arn:aws[a-z\-]*:config:[a-z\-\d]+:\d+:config-aggregator\/config-aggregator-[a-z\d]+/)
  .openapi('ConfigurationAggregatorArn')

const AccountAggregationSourceAccountListSchema = z
  .array(AccountIdSchema)
  .min(1)
  .openapi('AccountAggregationSourceAccountList')

const AggregatorRegionListSchema = z.array(StringSchema).min(1).openapi('AggregatorRegionList')

const AccountAggregationSourceSchema = z
  .object({
    AccountIds: AccountAggregationSourceAccountListSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the account being aggregated. ' }),
    ),
    AllAwsRegions: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'If true, aggregate existing Config regions and future regions.' }),
    ).exactOptional(),
    AwsRegions: AggregatorRegionListSchema.and(
      z.any().openapi({ description: 'The source regions being aggregated.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['AccountIds'], description: 'A collection of accounts and regions.' })
  .openapi('AccountAggregationSource')

const AccountAggregationSourceListSchema = z
  .array(AccountAggregationSourceSchema)
  .min(0)
  .max(1)
  .openapi('AccountAggregationSourceList')

const OrganizationAggregationSourceSchema = z
  .object({
    RoleArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'ARN of the IAM role used to retrieve Amazon Web Services Organization details associated with the aggregator account.',
        }),
    ),
    AwsRegions: AggregatorRegionListSchema.and(
      z.any().openapi({ description: 'The source regions being aggregated.' }),
    ).exactOptional(),
    AllAwsRegions: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'If true, aggregate existing Config regions and future regions.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RoleArn'],
    description:
      'This object contains regions to set up the aggregator and an IAM role to retrieve organization details.',
  })
  .openapi('OrganizationAggregationSource')

const ConfigurationAggregatorSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the aggregator.' }),
    ).exactOptional(),
    ConfigurationAggregatorArn: ConfigurationAggregatorArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the aggregator.' }),
    ).exactOptional(),
    AccountAggregationSources: AccountAggregationSourceListSchema.and(
      z
        .any()
        .openapi({
          description: 'Provides a list of source accounts and regions to be aggregated.',
        }),
    ).exactOptional(),
    OrganizationAggregationSource: OrganizationAggregationSourceSchema.and(
      z
        .any()
        .openapi({ description: 'Provides an organization and list of regions to be aggregated.' }),
    ).exactOptional(),
    CreationTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time stamp when the configuration aggregator was created.' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z.any().openapi({ description: 'The time of the last update.' }),
    ).exactOptional(),
    CreatedBy: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description: 'Amazon Web Services service that created the configuration aggregator.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details about the configuration aggregator, including information about source accounts, regions, and metadata of the aggregator. ',
    required: [],
  })
  .openapi('ConfigurationAggregator')

const ConfigurationAggregatorListSchema = z
  .array(ConfigurationAggregatorSchema)
  .openapi('ConfigurationAggregatorList')

const DescribeConfigurationAggregatorsResponseSchema = z
  .object({
    ConfigurationAggregators: ConfigurationAggregatorListSchema.and(
      z.any().openapi({ description: 'Returns a ConfigurationAggregators object.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConfigurationAggregatorsResponse')

const ConfigurationAggregatorNameListSchema = z
  .array(ConfigurationAggregatorNameSchema)
  .min(0)
  .max(10)
  .openapi('ConfigurationAggregatorNameList')

const DescribeConfigurationAggregatorsRequestSchema = z
  .object({
    ConfigurationAggregatorNames: ConfigurationAggregatorNameListSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregators.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of configuration aggregators returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConfigurationAggregatorsRequest', required: [] })
  .openapi('DescribeConfigurationAggregatorsRequest')

const RecorderStatusSchema = z.enum(['Pending', 'Success', 'Failure']).openapi('RecorderStatus')

const ConfigurationRecorderStatusSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the configuration recorder.' }),
    ).exactOptional(),
    lastStartTime: DateSchema.and(
      z.any().openapi({ description: 'The time the recorder was last started.' }),
    ).exactOptional(),
    lastStopTime: DateSchema.and(
      z.any().openapi({ description: 'The time the recorder was last stopped.' }),
    ).exactOptional(),
    recording: BooleanSchema.and(
      z
        .any()
        .openapi({ description: 'Specifies whether or not the recorder is currently recording.' }),
    ).exactOptional(),
    lastStatus: RecorderStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the latest recording event processed by the recorder.',
        }),
    ).exactOptional(),
    lastErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The latest error code from when the recorder last failed.' }),
    ).exactOptional(),
    lastErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The latest error message from when the recorder last failed.' }),
    ).exactOptional(),
    lastStatusChangeTime: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the latest change in status of an recording event processed by the recorder.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The current status of the configuration recorder.</p> <note> <p>For a detailed status of recording events over time, add your Config events to CloudWatch metrics and use CloudWatch metrics.</p> </note>',
    required: [],
  })
  .openapi('ConfigurationRecorderStatus')

const ConfigurationRecorderStatusListSchema = z
  .array(ConfigurationRecorderStatusSchema)
  .openapi('ConfigurationRecorderStatusList')

const DescribeConfigurationRecorderStatusResponseSchema = z
  .object({
    ConfigurationRecordersStatus: ConfigurationRecorderStatusListSchema.and(
      z.any().openapi({ description: 'A list that contains status of the specified recorders.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The output for the <a>DescribeConfigurationRecorderStatus</a> action, in JSON format.',
    required: [],
  })
  .openapi('DescribeConfigurationRecorderStatusResponse')

const ConfigurationRecorderNameListSchema = z
  .array(RecorderNameSchema)
  .openapi('ConfigurationRecorderNameList')

const DescribeConfigurationRecorderStatusRequestSchema = z
  .object({
    ConfigurationRecorderNames: ConfigurationRecorderNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name(s) of the configuration recorder. If the name is not specified, the action returns the current status of all the configuration recorders associated with the account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeConfigurationRecorderStatusRequest',
    description: 'The input for the <a>DescribeConfigurationRecorderStatus</a> action.',
    required: [],
  })
  .openapi('DescribeConfigurationRecorderStatusRequest')

const AllSupportedSchema = z.boolean().openapi('AllSupported')

const IncludeGlobalResourceTypesSchema = z.boolean().openapi('IncludeGlobalResourceTypes')

const ResourceTypeListSchema = z.array(ResourceTypeSchema).openapi('ResourceTypeList')

const RecordingGroupSchema = z
  .object({
    allSupported: AllSupportedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether Config records configuration changes for every supported type of regional resource.</p> <p>If you set this option to <code>true</code>, when Config adds support for a new type of regional resource, it starts recording resources of that type automatically.</p> <p>If you set this option to <code>true</code>, you cannot enumerate a list of <code>resourceTypes</code>.</p>',
        }),
    ).exactOptional(),
    includeGlobalResourceTypes: IncludeGlobalResourceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether Config includes all supported types of global resources (for example, IAM resources) with the resources that it records.</p> <p>Before you can set this option to <code>true</code>, you must set the <code>allSupported</code> option to <code>true</code>.</p> <p>If you set this option to <code>true</code>, when Config adds support for a new type of global resource, it starts recording resources of that type automatically.</p> <p>The configuration details for any global resource are the same in all regions. To prevent duplicate configuration items, you should consider customizing Config in only one region to record global resources.</p>',
        }),
    ).exactOptional(),
    resourceTypes: ResourceTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A comma-separated list that specifies the types of Amazon Web Services resources for which Config records configuration changes (for example, <code>AWS::EC2::Instance</code> or <code>AWS::CloudTrail::Trail</code>).</p> <p>To record all configuration changes, you must set the <code>allSupported</code> option to <code>true</code>.</p> <p>If you set the <code>AllSupported</code> option to false and populate the <code>ResourceTypes</code> option with values, when Config adds support for a new type of resource, it will not record resources of that type unless you manually add that type to your recording group.</p> <p>For a list of valid <code>resourceTypes</code> values, see the <b>resourceType Value</b> column in <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Amazon Web Services resource Types</a>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Specifies which Amazon Web Services resource types Config records for configuration changes. In the recording group, you specify whether you want to record all supported resource types or only specific types of resources.</p> <p>By default, Config records the configuration changes for all supported types of <i>regional resources</i> that Config discovers in the region in which it is running. Regional resources are tied to a region and can be used only in that region. Examples of regional resources are EC2 instances and EBS volumes.</p> <p>You can also have Config record supported types of <i>global resources</i>. Global resources are not tied to a specific region and can be used in all regions. The global resource types that Config supports include IAM users, groups, roles, and customer managed policies.</p> <important> <p>Global resource types onboarded to Config recording after February 2022 will only be recorded in the service\'s home region for the commercial partition and Amazon Web Services GovCloud (US) West for the GovCloud partition. You can view the Configuration Items for these new global resource types only in their home region and Amazon Web Services GovCloud (US) West.</p> <p>Supported global resource types onboarded before February 2022 such as <code>AWS::IAM::Group</code>, <code>AWS::IAM::Policy</code>, <code>AWS::IAM::Role</code>, <code>AWS::IAM::User</code> remain unchanged, and they will continue to deliver Configuration Items in all supported regions in Config. The change will only affect new global resource types onboarded after February 2022.</p> <p>To record global resource types onboarded after February 2022, enable All Supported Resource Types in the home region of the global resource type you want to record.</p> </important> <p>If you don\'t want Config to record all resources, you can specify which types of resources it will record with the <code>resourceTypes</code> parameter.</p> <p>For a list of supported resource types, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/resource-config-reference.html#supported-resources">Supported Resource Types</a>.</p> <p>For more information and a table of the Home Regions for Global Resource Types Onboarded after February 2022, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/select-resources.html">Selecting Which Resources Config Records</a>.</p>',
    required: [],
  })
  .openapi('RecordingGroup')

const ConfigurationRecorderSchema = z
  .object({
    name: RecorderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the recorder. By default, Config automatically assigns the name "default" when creating the configuration recorder. You cannot change the assigned name.',
        }),
    ).exactOptional(),
    roleARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Amazon Resource Name (ARN) of the IAM role used to describe the Amazon Web Services resources associated with the account.</p> <note> <p>While the API model does not require this field, the server will reject a request without a defined roleARN for the configuration recorder.</p> </note>',
        }),
    ).exactOptional(),
    recordingGroup: RecordingGroupSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies the types of Amazon Web Services resources for which Config records configuration changes.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the recording of configuration changes of an Amazon Web Services resource.',
    required: [],
  })
  .openapi('ConfigurationRecorder')

const ConfigurationRecorderListSchema = z
  .array(ConfigurationRecorderSchema)
  .openapi('ConfigurationRecorderList')

const DescribeConfigurationRecordersResponseSchema = z
  .object({
    ConfigurationRecorders: ConfigurationRecorderListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains the descriptions of the specified configuration recorders.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the <a>DescribeConfigurationRecorders</a> action.',
    required: [],
  })
  .openapi('DescribeConfigurationRecordersResponse')

const DescribeConfigurationRecordersRequestSchema = z
  .object({
    ConfigurationRecorderNames: ConfigurationRecorderNameListSchema.and(
      z.any().openapi({ description: 'A list of configuration recorder names.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeConfigurationRecordersRequest',
    description: 'The input for the <a>DescribeConfigurationRecorders</a> action.',
    required: [],
  })
  .openapi('DescribeConfigurationRecordersRequest')

const ControlsListSchema = z
  .array(StringWithCharLimit128Schema)
  .min(0)
  .max(20)
  .openapi('ControlsList')

const ConformancePackRuleComplianceSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'Name of the Config rule.' }),
    ).exactOptional(),
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z.any().openapi({ description: 'Compliance of the Config rule.' }),
    ).exactOptional(),
    Controls: ControlsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Controls for the conformance pack. A control is a process to prevent or detect problems while meeting objectives. A control can align with a specific compliance regime or map to internal controls defined by an organization.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Compliance information of one or more Config rules within a conformance pack. You can filter using Config rule names and compliance types.',
    required: [],
  })
  .openapi('ConformancePackRuleCompliance')

const ConformancePackRuleComplianceListSchema = z
  .array(ConformancePackRuleComplianceSchema)
  .min(0)
  .max(1000)
  .openapi('ConformancePackRuleComplianceList')

const DescribeConformancePackComplianceResponseSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    ConformancePackRuleComplianceList: ConformancePackRuleComplianceListSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns a list of <code>ConformancePackRuleCompliance</code> objects.',
        }),
    ),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConformancePackName', 'ConformancePackRuleComplianceList'] })
  .openapi('DescribeConformancePackComplianceResponse')

const ConformancePackConfigRuleNamesSchema = z
  .array(StringWithCharLimit64Schema)
  .min(0)
  .max(10)
  .openapi('ConformancePackConfigRuleNames')

const ConformancePackComplianceFiltersSchema = z
  .object({
    ConfigRuleNames: ConformancePackConfigRuleNamesSchema.and(
      z.any().openapi({ description: 'Filters the results by Config rule names.' }),
    ).exactOptional(),
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filters the conformance pack by compliance types and Config rule names.',
    required: [],
  })
  .openapi('ConformancePackComplianceFilters')

const DescribeConformancePackComplianceLimitSchema = z
  .int()
  .min(0)
  .max(1000)
  .openapi('DescribeConformancePackComplianceLimit')

const DescribeConformancePackComplianceRequestSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    Filters: ConformancePackComplianceFiltersSchema.and(
      z.any().openapi({ description: 'A <code>ConformancePackComplianceFilters</code> object.' }),
    ).exactOptional(),
    Limit: DescribeConformancePackComplianceLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of Config rules within a conformance pack are returned on each page.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConformancePackName'], title: 'DescribeConformancePackComplianceRequest' })
  .openapi('DescribeConformancePackComplianceRequest')

const NoSuchConfigRuleInConformancePackExceptionSchema = z
  .any()
  .openapi('NoSuchConfigRuleInConformancePackException')

const ConformancePackIdSchema = z.string().min(1).max(1024).openapi('ConformancePackId')

const ConformancePackArnSchema = z.string().min(1).max(2048).openapi('ConformancePackArn')

const ConformancePackStateSchema = z
  .enum([
    'CREATE_IN_PROGRESS',
    'CREATE_COMPLETE',
    'CREATE_FAILED',
    'DELETE_IN_PROGRESS',
    'DELETE_FAILED',
  ])
  .openapi('ConformancePackState')

const StackArnSchema = z.string().min(1).max(2048).openapi('StackArn')

const ConformancePackStatusReasonSchema = z
  .string()
  .min(0)
  .max(2000)
  .openapi('ConformancePackStatusReason')

const ConformancePackStatusDetailSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    ConformancePackId: ConformancePackIdSchema.and(
      z.any().openapi({ description: 'ID of the conformance pack.' }),
    ),
    ConformancePackArn: ConformancePackArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of comformance pack.' }),
    ),
    ConformancePackState: ConformancePackStateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status of conformance pack.</p> <p>Config sets the state of the conformance pack to:</p> <ul> <li> <p>CREATE_IN_PROGRESS when a conformance pack creation is in progress for an account.</p> </li> <li> <p>CREATE_COMPLETE when a conformance pack has been successfully created in your account.</p> </li> <li> <p>CREATE_FAILED when a conformance pack creation failed in your account.</p> </li> <li> <p>DELETE_IN_PROGRESS when a conformance pack deletion is in progress. </p> </li> <li> <p>DELETE_FAILED when a conformance pack deletion failed in your account.</p> </li> </ul>',
        }),
    ),
    StackArn: StackArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of CloudFormation stack. ' }),
    ),
    ConformancePackStatusReason: ConformancePackStatusReasonSchema.and(
      z.any().openapi({ description: 'The reason of conformance pack creation failure.' }),
    ).exactOptional(),
    LastUpdateRequestedTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'Last time when conformation pack creation and update was requested.',
        }),
    ),
    LastUpdateCompletedTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'Last time when conformation pack creation and update was successful.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ConformancePackName',
      'ConformancePackId',
      'ConformancePackArn',
      'ConformancePackState',
      'StackArn',
      'LastUpdateRequestedTime',
    ],
    description: 'Status details of a conformance pack.',
  })
  .openapi('ConformancePackStatusDetail')

const ConformancePackStatusDetailsListSchema = z
  .array(ConformancePackStatusDetailSchema)
  .min(0)
  .max(25)
  .openapi('ConformancePackStatusDetailsList')

const DescribeConformancePackStatusResponseSchema = z
  .object({
    ConformancePackStatusDetails: ConformancePackStatusDetailsListSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackStatusDetail</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConformancePackStatusResponse')

const ConformancePackNamesListSchema = z
  .array(ConformancePackNameSchema)
  .min(0)
  .max(25)
  .openapi('ConformancePackNamesList')

const PageSizeLimitSchema = z.int().min(0).max(20).openapi('PageSizeLimit')

const DescribeConformancePackStatusRequestSchema = z
  .object({
    ConformancePackNames: ConformancePackNamesListSchema.and(
      z.any().openapi({ description: 'Comma-separated list of conformance pack names.' }),
    ).exactOptional(),
    Limit: PageSizeLimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of conformance packs status returned on each page.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConformancePackStatusRequest', required: [] })
  .openapi('DescribeConformancePackStatusRequest')

const DeliveryS3BucketSchema = z.string().min(0).max(63).openapi('DeliveryS3Bucket')

const DeliveryS3KeyPrefixSchema = z.string().min(0).max(1024).openapi('DeliveryS3KeyPrefix')

const ParameterNameSchema = z.string().min(0).max(255).openapi('ParameterName')

const ParameterValueSchema = z.string().min(0).max(4096).openapi('ParameterValue')

const ConformancePackInputParameterSchema = z
  .object({
    ParameterName: ParameterNameSchema.and(
      z.any().openapi({ description: 'One part of a key-value pair.' }),
    ),
    ParameterValue: ParameterValueSchema.and(
      z.any().openapi({ description: 'Another part of the key-value pair. ' }),
    ),
  })
  .openapi({
    required: ['ParameterName', 'ParameterValue'],
    description:
      'Input parameters in the form of key-value pairs for the conformance pack, both of which you define. Keys can have a maximum character length of 255 characters, and values can have a maximum length of 4096 characters.',
  })
  .openapi('ConformancePackInputParameter')

const ConformancePackInputParametersSchema = z
  .array(ConformancePackInputParameterSchema)
  .min(0)
  .max(60)
  .openapi('ConformancePackInputParameters')

const SSMDocumentNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-.:\/]{3,200}$/)
  .openapi('SSMDocumentName')

const SSMDocumentVersionSchema = z
  .string()
  .regex(/([$]LATEST|[$]DEFAULT|^[1-9][0-9]*$)/)
  .openapi('SSMDocumentVersion')

const TemplateSSMDocumentDetailsSchema = z
  .object({
    DocumentName: SSMDocumentNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name or Amazon Resource Name (ARN) of the SSM document to use to create a conformance pack. If you use the document name, Config checks only your account and Amazon Web Services Region for the SSM document. If you want to use an SSM document from another Region or account, you must provide the ARN.',
        }),
    ),
    DocumentVersion: SSMDocumentVersionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The version of the SSM document to use to create a conformance pack. By default, Config uses the latest version.</p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DocumentName'],
    description:
      '<p>This API allows you to create a conformance pack template with an Amazon Web Services Systems Manager document (SSM document). To deploy a conformance pack using an SSM document, first create an SSM document with conformance pack content, and then provide the <code>DocumentName</code> in the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack API</a>. You can also provide the <code>DocumentVersion</code>.</p> <p>The <code>TemplateSSMDocumentDetails</code> object contains the name of the SSM document and the version of the SSM document.</p>',
  })
  .openapi('TemplateSSMDocumentDetails')

const ConformancePackDetailSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    ConformancePackArn: ConformancePackArnSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of the conformance pack.' }),
    ),
    ConformancePackId: ConformancePackIdSchema.and(
      z.any().openapi({ description: 'ID of the conformance pack.' }),
    ),
    DeliveryS3Bucket: DeliveryS3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket where Config stores conformance pack templates. </p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    DeliveryS3KeyPrefix: DeliveryS3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the Amazon S3 bucket.</p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    ConformancePackInputParameters: ConformancePackInputParametersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackInputParameter</code> objects.' }),
    ).exactOptional(),
    LastUpdateRequestedTime: DateSchema.and(
      z.any().openapi({ description: 'The last time a conformation pack update was requested. ' }),
    ).exactOptional(),
    CreatedBy: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services service that created the conformance pack.',
        }),
    ).exactOptional(),
    TemplateSSMDocumentDetails: TemplateSSMDocumentDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object that contains the name or Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConformancePackName', 'ConformancePackArn', 'ConformancePackId'],
    description:
      'Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.',
  })
  .openapi('ConformancePackDetail')

const ConformancePackDetailListSchema = z
  .array(ConformancePackDetailSchema)
  .min(0)
  .max(25)
  .openapi('ConformancePackDetailList')

const DescribeConformancePacksResponseSchema = z
  .object({
    ConformancePackDetails: ConformancePackDetailListSchema.and(
      z
        .any()
        .openapi({ description: 'Returns a list of <code>ConformancePackDetail</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeConformancePacksResponse')

const DescribeConformancePacksRequestSchema = z
  .object({
    ConformancePackNames: ConformancePackNamesListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Comma-separated list of conformance pack names for which you want details. If you do not specify any names, Config returns details for all your conformance packs. ',
        }),
    ).exactOptional(),
    Limit: PageSizeLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of conformance packs returned on each page.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeConformancePacksRequest', required: [] })
  .openapi('DescribeConformancePacksRequest')

const DeliveryStatusSchema = z
  .enum(['Success', 'Failure', 'Not_Applicable'])
  .openapi('DeliveryStatus')

const ConfigExportDeliveryInfoSchema = z
  .object({
    lastStatus: DeliveryStatusSchema.and(
      z.any().openapi({ description: 'Status of the last attempted delivery.' }),
    ).exactOptional(),
    lastErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code from the last attempted delivery.' }),
    ).exactOptional(),
    lastErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message from the last attempted delivery.' }),
    ).exactOptional(),
    lastAttemptTime: DateSchema.and(
      z.any().openapi({ description: 'The time of the last attempted delivery.' }),
    ).exactOptional(),
    lastSuccessfulTime: DateSchema.and(
      z.any().openapi({ description: 'The time of the last successful delivery.' }),
    ).exactOptional(),
    nextDeliveryTime: DateSchema.and(
      z.any().openapi({ description: 'The time that the next delivery occurs.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.',
    required: [],
  })
  .openapi('ConfigExportDeliveryInfo')

const ConfigStreamDeliveryInfoSchema = z
  .object({
    lastStatus: DeliveryStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Status of the last attempted delivery.</p> <p> <b>Note</b> Providing an SNS topic on a <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_DeliveryChannel.html">DeliveryChannel</a> for Config is optional. If the SNS delivery is turned off, the last status will be <b>Not_Applicable</b>.</p>',
        }),
    ).exactOptional(),
    lastErrorCode: StringSchema.and(
      z.any().openapi({ description: 'The error code from the last attempted delivery.' }),
    ).exactOptional(),
    lastErrorMessage: StringSchema.and(
      z.any().openapi({ description: 'The error message from the last attempted delivery.' }),
    ).exactOptional(),
    lastStatusChangeTime: DateSchema.and(
      z.any().openapi({ description: 'The time from the last status change.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.',
    required: [],
  })
  .openapi('ConfigStreamDeliveryInfo')

const DeliveryChannelStatusSchema = z
  .object({
    name: StringSchema.and(
      z.any().openapi({ description: 'The name of the delivery channel.' }),
    ).exactOptional(),
    configSnapshotDeliveryInfo: ConfigExportDeliveryInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the status of the delivery of the snapshot to the specified Amazon S3 bucket.',
        }),
    ).exactOptional(),
    configHistoryDeliveryInfo: ConfigExportDeliveryInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list that contains the status of the delivery of the configuration history to the specified Amazon S3 bucket.',
        }),
    ).exactOptional(),
    configStreamDeliveryInfo: ConfigStreamDeliveryInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list containing the status of the delivery of the configuration stream notification to the specified Amazon SNS topic.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>',
    required: [],
  })
  .openapi('DeliveryChannelStatus')

const DeliveryChannelStatusListSchema = z
  .array(DeliveryChannelStatusSchema)
  .openapi('DeliveryChannelStatusList')

const DescribeDeliveryChannelStatusResponseSchema = z
  .object({
    DeliveryChannelsStatus: DeliveryChannelStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the status of a specified delivery channel.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the <a>DescribeDeliveryChannelStatus</a> action.',
    required: [],
  })
  .openapi('DescribeDeliveryChannelStatusResponse')

const DeliveryChannelNameListSchema = z.array(ChannelNameSchema).openapi('DeliveryChannelNameList')

const DescribeDeliveryChannelStatusRequestSchema = z
  .object({
    DeliveryChannelNames: DeliveryChannelNameListSchema.and(
      z.any().openapi({ description: 'A list of delivery channel names.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDeliveryChannelStatusRequest',
    description: 'The input for the <a>DeliveryChannelStatus</a> action.',
    required: [],
  })
  .openapi('DescribeDeliveryChannelStatusRequest')

const ConfigSnapshotDeliveryPropertiesSchema = z
  .object({
    deliveryFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description: 'The frequency with which Config delivers configuration snapshots.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Provides options for how often Config delivers configuration snapshots to the Amazon S3 bucket in your delivery channel.</p> <p>The frequency for a rule that triggers evaluations for your resources when Config delivers the configuration snapshot is set by one of two values, depending on which is less frequent:</p> <ul> <li> <p>The value for the <code>deliveryFrequency</code> parameter within the delivery channel configuration, which sets how often Config delivers configuration snapshots. This value also sets how often Config invokes evaluations for Config rules.</p> </li> <li> <p>The value for the <code>MaximumExecutionFrequency</code> parameter, which sets the maximum frequency with which Config invokes evaluations for the rule. For more information, see <a>ConfigRule</a>.</p> </li> </ul> <p>If the <code>deliveryFrequency</code> value is less frequent than the <code>MaximumExecutionFrequency</code> value for a rule, Config invokes the rule only as often as the <code>deliveryFrequency</code> value.</p> <ol> <li> <p>For example, you want your rule to run evaluations when Config delivers the configuration snapshot.</p> </li> <li> <p>You specify the <code>MaximumExecutionFrequency</code> value for <code>Six_Hours</code>. </p> </li> <li> <p>You then specify the delivery channel <code>deliveryFrequency</code> value for <code>TwentyFour_Hours</code>.</p> </li> <li> <p>Because the value for <code>deliveryFrequency</code> is less frequent than <code>MaximumExecutionFrequency</code>, Config invokes evaluations for the rule every 24 hours. </p> </li> </ol> <p>You should set the <code>MaximumExecutionFrequency</code> value to be at least as frequent as the <code>deliveryFrequency</code> value. You can view the <code>deliveryFrequency</code> value by using the <code>DescribeDeliveryChannnels</code> action.</p> <p>To update the <code>deliveryFrequency</code> with which Config delivers your configuration snapshots, use the <code>PutDeliveryChannel</code> action.</p>',
    required: [],
  })
  .openapi('ConfigSnapshotDeliveryProperties')

const DeliveryChannelSchema = z
  .object({
    name: ChannelNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the delivery channel. By default, Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.',
        }),
    ).exactOptional(),
    s3BucketName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket to which Config delivers configuration snapshots and configuration history files.</p> <p>If you specify a bucket that belongs to another Amazon Web Services account, that bucket must have policies that grant access permissions to Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-policy.html">Permissions for the Amazon S3 Bucket</a> in the <i>Config Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    s3KeyPrefix: StringSchema.and(
      z.any().openapi({ description: 'The prefix for the specified Amazon S3 bucket.' }),
    ).exactOptional(),
    s3KmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the Key Management Service (KMS ) KMS key (KMS key) used to encrypt objects delivered by Config. Must belong to the same Region as the destination S3 bucket.',
        }),
    ).exactOptional(),
    snsTopicARN: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Config sends notifications about configuration changes.</p> <p>If you choose a topic from another account, the topic must have policies that grant access permissions to Config. For more information, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/sns-topic-policy.html">Permissions for the Amazon SNS Topic</a> in the <i>Config Developer Guide</i>.</p>',
        }),
    ).exactOptional(),
    configSnapshotDeliveryProperties: ConfigSnapshotDeliveryPropertiesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The options for how often Config delivers configuration snapshots to the Amazon S3 bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The channel through which Config delivers notifications and updated configuration states.',
    required: [],
  })
  .openapi('DeliveryChannel')

const DeliveryChannelListSchema = z.array(DeliveryChannelSchema).openapi('DeliveryChannelList')

const DescribeDeliveryChannelsResponseSchema = z
  .object({
    DeliveryChannels: DeliveryChannelListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the descriptions of the specified delivery channel.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the <a>DescribeDeliveryChannels</a> action.',
    required: [],
  })
  .openapi('DescribeDeliveryChannelsResponse')

const DescribeDeliveryChannelsRequestSchema = z
  .object({
    DeliveryChannelNames: DeliveryChannelNameListSchema.and(
      z.any().openapi({ description: 'A list of delivery channel names.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'DescribeDeliveryChannelsRequest',
    description: 'The input for the <a>DescribeDeliveryChannels</a> action.',
    required: [],
  })
  .openapi('DescribeDeliveryChannelsRequest')

const OrganizationRuleStatusSchema = z
  .enum([
    'CREATE_SUCCESSFUL',
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED',
    'DELETE_SUCCESSFUL',
    'DELETE_FAILED',
    'DELETE_IN_PROGRESS',
    'UPDATE_SUCCESSFUL',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED',
  ])
  .openapi('OrganizationRuleStatus')

const OrganizationConfigRuleStatusSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name that you assign to organization Config rule.' }),
    ),
    OrganizationRuleStatus: OrganizationRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status of an organization Config rule. When management account calls PutOrganizationConfigRule action for the first time, Config rule status is created in all the member accounts. When management account calls PutOrganizationConfigRule action for the second time, Config rule status is updated in all the member accounts. Additionally, Config rule status is updated when one or more member accounts join or leave an organization. Config rule status is deleted when the management account deletes OrganizationConfigRule in all the member accounts and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <p>Config sets the state of the rule to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when an organization Config rule has been successfully created in all the member accounts. </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when an organization Config rule creation is in progress.</p> </li> <li> <p> <code>CREATE_FAILED</code> when an organization Config rule creation failed in one or more member accounts within that organization.</p> </li> <li> <p> <code>DELETE_FAILED</code> when an organization Config rule deletion failed in one or more member accounts within that organization.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when an organization Config rule deletion is in progress.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when an organization Config rule has been successfully deleted from all the member accounts.</p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when an organization Config rule has been successfully updated in all the member accounts.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when an organization Config rule update is in progress.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when an organization Config rule update failed in one or more member accounts within that organization.</p> </li> </ul>',
        }),
    ),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that is returned when organization Config rule creation or deletion has failed.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message indicating that organization Config rule creation or deletion failed due to an error.',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp of the last update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConfigRuleName', 'OrganizationRuleStatus'],
    description: 'Returns the status for an organization Config rule in an organization.',
  })
  .openapi('OrganizationConfigRuleStatus')

const OrganizationConfigRuleStatusesSchema = z
  .array(OrganizationConfigRuleStatusSchema)
  .openapi('OrganizationConfigRuleStatuses')

const DescribeOrganizationConfigRuleStatusesResponseSchema = z
  .object({
    OrganizationConfigRuleStatuses: OrganizationConfigRuleStatusesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>OrganizationConfigRuleStatus</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConfigRuleStatusesResponse')

const OrganizationConfigRuleNamesSchema = z
  .array(StringWithCharLimit64Schema)
  .min(0)
  .max(25)
  .openapi('OrganizationConfigRuleNames')

const CosmosPageLimitSchema = z.int().min(0).max(100).openapi('CosmosPageLimit')

const DescribeOrganizationConfigRuleStatusesRequestSchema = z
  .object({
    OrganizationConfigRuleNames: OrganizationConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of organization Config rules for which you want status details. If you do not specify any names, Config returns details for all your organization Config rules.',
        }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of <code>OrganizationConfigRuleStatuses</code> returned on each page. If you do no specify a number, Config uses the default. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeOrganizationConfigRuleStatusesRequest', required: [] })
  .openapi('DescribeOrganizationConfigRuleStatusesRequest')

const StringWithCharLimit256Min0Schema = z
  .string()
  .min(0)
  .max(256)
  .openapi('StringWithCharLimit256Min0')

const StringWithCharLimit2048Schema = z.string().min(1).max(2048).openapi('StringWithCharLimit2048')

const ResourceTypesScopeSchema = z
  .array(StringWithCharLimit256Schema)
  .min(0)
  .max(100)
  .openapi('ResourceTypesScope')

const StringWithCharLimit768Schema = z.string().min(1).max(768).openapi('StringWithCharLimit768')

const OrganizationManagedRuleMetadataSchema = z
  .object({
    Description: StringWithCharLimit256Min0Schema.and(
      z
        .any()
        .openapi({
          description: 'The description that you provide for your organization Config rule.',
        }),
    ).exactOptional(),
    RuleIdentifier: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'For organization config managed rules, a predefined identifier from a list. For example, <code>IAM_PASSWORD_POLICY</code> is a managed rule. To reference a managed rule, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">Using Config managed rules</a>.',
        }),
    ),
    InputParameters: StringWithCharLimit2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string, in JSON format, that is passed to your organization Config rule Lambda function.',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum frequency with which Config runs evaluations for a rule. This is for an Config managed rule that is triggered at a periodic frequency.</p> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    ResourceTypesScope: ResourceTypesScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the Amazon Web Services resource that was evaluated.',
        }),
    ).exactOptional(),
    ResourceIdScope: StringWithCharLimit768Schema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    TagKeyScope: StringWithCharLimit128Schema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values. ',
        }),
    ).exactOptional(),
    TagValueScope: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['RuleIdentifier'],
    description:
      'An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.',
  })
  .openapi('OrganizationManagedRuleMetadata')

const OrganizationConfigRuleTriggerTypeSchema = z
  .enum([
    'ConfigurationItemChangeNotification',
    'OversizedConfigurationItemChangeNotification',
    'ScheduledNotification',
  ])
  .openapi('OrganizationConfigRuleTriggerType')

const OrganizationConfigRuleTriggerTypesSchema = z
  .array(OrganizationConfigRuleTriggerTypeSchema)
  .openapi('OrganizationConfigRuleTriggerTypes')

const OrganizationCustomRuleMetadataSchema = z
  .object({
    Description: StringWithCharLimit256Min0Schema.and(
      z
        .any()
        .openapi({
          description: 'The description that you provide for your organization Config rule.',
        }),
    ).exactOptional(),
    LambdaFunctionArn: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The lambda function ARN.' }),
    ),
    OrganizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of notification that triggers Config to run an evaluation for a rule. You can specify the following notification types:</p> <ul> <li> <p> <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p> </li> <li> <p> <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p> </li> <li> <p> <code>ScheduledNotification</code> - Triggers a periodic evaluation at the frequency specified for <code>MaximumExecutionFrequency</code>.</p> </li> </ul>',
        }),
    ),
    InputParameters: StringWithCharLimit2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string, in JSON format, that is passed to your organization Config rule Lambda function.',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum frequency with which Config runs evaluations for a rule. Your custom rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.</p> <note> <p>By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the <code>MaximumExecutionFrequency</code> parameter.</p> </note>',
        }),
    ).exactOptional(),
    ResourceTypesScope: ResourceTypesScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the Amazon Web Services resource that was evaluated.',
        }),
    ).exactOptional(),
    ResourceIdScope: StringWithCharLimit768Schema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    TagKeyScope: StringWithCharLimit128Schema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values. ',
        }),
    ).exactOptional(),
    TagValueScope: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key). ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['LambdaFunctionArn', 'OrganizationConfigRuleTriggerTypes'],
    description:
      'An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.',
  })
  .openapi('OrganizationCustomRuleMetadata')

const ExcludedAccountsSchema = z.array(AccountIdSchema).min(0).max(1000).openapi('ExcludedAccounts')

const OrganizationConfigRuleTriggerTypeNoSNSchema = z
  .enum(['ConfigurationItemChangeNotification', 'OversizedConfigurationItemChangeNotification'])
  .openapi('OrganizationConfigRuleTriggerTypeNoSN')

const OrganizationConfigRuleTriggerTypeNoSNsSchema = z
  .array(OrganizationConfigRuleTriggerTypeNoSNSchema)
  .openapi('OrganizationConfigRuleTriggerTypeNoSNs')

const DebugLogDeliveryAccountsSchema = z
  .array(AccountIdSchema)
  .min(0)
  .max(1000)
  .openapi('DebugLogDeliveryAccounts')

const OrganizationCustomPolicyRuleMetadataNoPolicySchema = z
  .object({
    Description: StringWithCharLimit256Min0Schema.and(
      z
        .any()
        .openapi({
          description:
            'The description that you provide for your organization Config Custom Policy rule.',
        }),
    ).exactOptional(),
    OrganizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypeNoSNsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of notification that triggers Config to run an evaluation for a rule. For Config Custom Policy rules, Config supports change triggered notification types:</p> <ul> <li> <p> <code>ConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers a configuration item as a result of a resource change.</p> </li> <li> <p> <code>OversizedConfigurationItemChangeNotification</code> - Triggers an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p> </li> </ul>',
        }),
    ).exactOptional(),
    InputParameters: StringWithCharLimit2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string, in JSON format, that is passed to your organization Config Custom Policy rule.',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum frequency with which Config runs evaluations for a rule. Your Config Custom Policy rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.',
        }),
    ).exactOptional(),
    ResourceTypesScope: ResourceTypesScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the Amazon Web Services resource that was evaluated.',
        }),
    ).exactOptional(),
    ResourceIdScope: StringWithCharLimit768Schema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    TagKeyScope: StringWithCharLimit128Schema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.',
        }),
    ).exactOptional(),
    TagValueScope: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
    PolicyRuntime: PolicyRuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>.',
        }),
    ).exactOptional(),
    DebugLogDeliveryAccounts: DebugLogDeliveryAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that specifies metadata for your organization Config Custom Policy rule including the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that trigger Config to evaluate Amazon Web Services resources against a rule.',
    required: [],
  })
  .openapi('OrganizationCustomPolicyRuleMetadataNoPolicy')

const OrganizationConfigRuleSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name that you assign to organization Config rule.' }),
    ),
    OrganizationConfigRuleArn: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of organization Config rule.' }),
    ),
    OrganizationManagedRuleMetadata: OrganizationManagedRuleMetadataSchema.and(
      z.any().openapi({ description: 'An <code>OrganizationManagedRuleMetadata</code> object.' }),
    ).exactOptional(),
    OrganizationCustomRuleMetadata: OrganizationCustomRuleMetadataSchema.and(
      z.any().openapi({ description: 'An <code>OrganizationCustomRuleMetadata</code> object.' }),
    ).exactOptional(),
    ExcludedAccounts: ExcludedAccountsSchema.and(
      z
        .any()
        .openapi({
          description: 'A comma-separated list of accounts excluded from organization Config rule.',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp of the last update.' }),
    ).exactOptional(),
    OrganizationCustomPolicyRuleMetadata: OrganizationCustomPolicyRuleMetadataNoPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            "An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConfigRuleName', 'OrganizationConfigRuleArn'],
    description:
      'An organization Config rule that has information about Config rules that Config creates in member accounts.',
  })
  .openapi('OrganizationConfigRule')

const OrganizationConfigRulesSchema = z
  .array(OrganizationConfigRuleSchema)
  .openapi('OrganizationConfigRules')

const DescribeOrganizationConfigRulesResponseSchema = z
  .object({
    OrganizationConfigRules: OrganizationConfigRulesSchema.and(
      z
        .any()
        .openapi({ description: 'Returns a list of <code>OrganizationConfigRule</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConfigRulesResponse')

const DescribeOrganizationConfigRulesRequestSchema = z
  .object({
    OrganizationConfigRuleNames: OrganizationConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of organization Config rules for which you want details. If you do not specify any names, Config returns details for all your organization Config rules.',
        }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of organization Config rules returned on each page. If you do no specify a number, Config uses the default. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeOrganizationConfigRulesRequest', required: [] })
  .openapi('DescribeOrganizationConfigRulesRequest')

const OrganizationResourceStatusSchema = z
  .enum([
    'CREATE_SUCCESSFUL',
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED',
    'DELETE_SUCCESSFUL',
    'DELETE_FAILED',
    'DELETE_IN_PROGRESS',
    'UPDATE_SUCCESSFUL',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED',
  ])
  .openapi('OrganizationResourceStatus')

const OrganizationConformancePackStatusSchema = z
  .object({
    OrganizationConformancePackName: OrganizationConformancePackNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name that you assign to organization conformance pack.' }),
    ),
    Status: OrganizationResourceStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status of an organization conformance pack. When management account calls PutOrganizationConformancePack for the first time, conformance pack status is created in all the member accounts. When management account calls PutOrganizationConformancePack for the second time, conformance pack status is updated in all the member accounts. Additionally, conformance pack status is updated when one or more member accounts join or leave an organization. Conformance pack status is deleted when the management account deletes OrganizationConformancePack in all the member accounts and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <p>Config sets the state of the conformance pack to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when an organization conformance pack has been successfully created in all the member accounts. </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when an organization conformance pack creation is in progress.</p> </li> <li> <p> <code>CREATE_FAILED</code> when an organization conformance pack creation failed in one or more member accounts within that organization.</p> </li> <li> <p> <code>DELETE_FAILED</code> when an organization conformance pack deletion failed in one or more member accounts within that organization.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when an organization conformance pack deletion is in progress.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when an organization conformance pack has been successfully deleted from all the member accounts.</p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when an organization conformance pack has been successfully updated in all the member accounts.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when an organization conformance pack update is in progress.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when an organization conformance pack update failed in one or more member accounts within that organization.</p> </li> </ul>',
        }),
    ),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that is returned when organization conformance pack creation or deletion has failed in a member account. ',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message indicating that organization conformance pack creation or deletion failed due to an error. ',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp of the last update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConformancePackName', 'Status'],
    description: 'Returns the status for an organization conformance pack in an organization.',
  })
  .openapi('OrganizationConformancePackStatus')

const OrganizationConformancePackStatusesSchema = z
  .array(OrganizationConformancePackStatusSchema)
  .openapi('OrganizationConformancePackStatuses')

const DescribeOrganizationConformancePackStatusesResponseSchema = z
  .object({
    OrganizationConformancePackStatuses: OrganizationConformancePackStatusesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>OrganizationConformancePackStatus</code> objects. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConformancePackStatusesResponse')

const OrganizationConformancePackNamesSchema = z
  .array(OrganizationConformancePackNameSchema)
  .min(0)
  .max(25)
  .openapi('OrganizationConformancePackNames')

const DescribeOrganizationConformancePackStatusesRequestSchema = z
  .object({
    OrganizationConformancePackNames: OrganizationConformancePackNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of organization conformance packs for which you want status details. If you do not specify any names, Config returns details for all your organization conformance packs. ',
        }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of OrganizationConformancePackStatuses returned on each page. If you do no specify a number, Config uses the default. The default is 100. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeOrganizationConformancePackStatusesRequest', required: [] })
  .openapi('DescribeOrganizationConformancePackStatusesRequest')

const OrganizationConformancePackSchema = z
  .object({
    OrganizationConformancePackName: OrganizationConformancePackNameSchema.and(
      z.any().openapi({ description: 'The name you assign to an organization conformance pack.' }),
    ),
    OrganizationConformancePackArn: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({ description: 'Amazon Resource Name (ARN) of organization conformance pack.' }),
    ),
    DeliveryS3Bucket: DeliveryS3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket where Config stores conformance pack templates. </p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    DeliveryS3KeyPrefix: DeliveryS3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Any folder structure you want to add to an Amazon S3 bucket.</p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    ConformancePackInputParameters: ConformancePackInputParametersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackInputParameter</code> objects.' }),
    ).exactOptional(),
    ExcludedAccounts: ExcludedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of accounts excluded from organization conformance pack.',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'Last time when organization conformation pack was updated.' }),
    ),
  })
  .openapi({
    required: [
      'OrganizationConformancePackName',
      'OrganizationConformancePackArn',
      'LastUpdateTime',
    ],
    description:
      'An organization conformance pack that has information about conformance packs that Config creates in member accounts. ',
  })
  .openapi('OrganizationConformancePack')

const OrganizationConformancePacksSchema = z
  .array(OrganizationConformancePackSchema)
  .openapi('OrganizationConformancePacks')

const DescribeOrganizationConformancePacksResponseSchema = z
  .object({
    OrganizationConformancePacks: OrganizationConformancePacksSchema.and(
      z.any().openapi({ description: 'Returns a list of OrganizationConformancePacks objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeOrganizationConformancePacksResponse')

const DescribeOrganizationConformancePacksRequestSchema = z
  .object({
    OrganizationConformancePackNames: OrganizationConformancePackNamesSchema.and(
      z
        .any()
        .openapi({ description: 'The name that you assign to an organization conformance pack.' }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of organization config packs returned on each page. If you do no specify a number, Config uses the default. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeOrganizationConformancePacksRequest', required: [] })
  .openapi('DescribeOrganizationConformancePacksRequest')

const PendingAggregationRequestSchema = z
  .object({
    RequesterAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the account requesting to aggregate data.',
        }),
    ).exactOptional(),
    RequesterAwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region requesting to aggregate data. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.',
    required: [],
  })
  .openapi('PendingAggregationRequest')

const PendingAggregationRequestListSchema = z
  .array(PendingAggregationRequestSchema)
  .openapi('PendingAggregationRequestList')

const DescribePendingAggregationRequestsResponseSchema = z
  .object({
    PendingAggregationRequests: PendingAggregationRequestListSchema.and(
      z.any().openapi({ description: 'Returns a PendingAggregationRequests object.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribePendingAggregationRequestsResponse')

const DescribePendingAggregationRequestsLimitSchema = z
  .int()
  .min(0)
  .max(20)
  .openapi('DescribePendingAggregationRequestsLimit')

const DescribePendingAggregationRequestsRequestSchema = z
  .object({
    Limit: DescribePendingAggregationRequestsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribePendingAggregationRequestsRequest', required: [] })
  .openapi('DescribePendingAggregationRequestsRequest')

const RemediationTargetTypeSchema = z.literal('SSM_DOCUMENT').openapi('RemediationTargetType')

const ResourceValueTypeSchema = z.literal('RESOURCE_ID').openapi('ResourceValueType')

const ResourceValueSchema = z
  .object({
    Value: ResourceValueTypeSchema.and(
      z.any().openapi({ description: 'The value is a resource ID.' }),
    ),
  })
  .openapi({ required: ['Value'], description: 'The dynamic value of the resource.' })
  .openapi('ResourceValue')

const StaticParameterValuesSchema = z
  .array(StringWithCharLimit256Schema)
  .min(0)
  .max(25)
  .openapi('StaticParameterValues')

const StaticValueSchema = z
  .object({
    Values: StaticParameterValuesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of values. For example, the ARN of the assumed role. ' }),
    ),
  })
  .openapi({ required: ['Values'], description: 'The static value of the resource.' })
  .openapi('StaticValue')

const RemediationParameterValueSchema = z
  .object({
    ResourceValue: ResourceValueSchema.and(
      z.any().openapi({ description: 'The value is dynamic and changes at run-time.' }),
    ).exactOptional(),
    StaticValue: StaticValueSchema.and(
      z.any().openapi({ description: 'The value is static and does not change at run-time.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The value is either a dynamic (resource) value or a static value. You must select either a dynamic value or a static value.',
    required: [],
  })
  .openapi('RemediationParameterValue')

const RemediationParametersSchema = z
  .record(z.string(), RemediationParameterValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 25)
  .openapi('RemediationParameters')

const PercentageSchema = z.int().min(1).max(100).openapi('Percentage')

const SsmControlsSchema = z
  .object({
    ConcurrentExecutionRatePercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. You can specify a percentage, such as 10%. The default value is 10. ',
        }),
    ).exactOptional(),
    ErrorPercentage: PercentageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. You can specify a percentage of errors, for example 10%. If you do not specifiy a percentage, the default is 50%. For example, if you set the ErrorPercentage to 40% for 10 non-compliant resources, then SSM stops running the automations when the fifth error is received. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Amazon Web Services Systems Manager (SSM) specific remediation controls.',
    required: [],
  })
  .openapi('SsmControls')

const ExecutionControlsSchema = z
  .object({
    SsmControls: SsmControlsSchema.and(
      z.any().openapi({ description: 'A SsmControls object.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The controls that Config uses for executing remediations.',
    required: [],
  })
  .openapi('ExecutionControls')

const AutoRemediationAttemptsSchema = z.int().min(1).max(25).openapi('AutoRemediationAttempts')

const AutoRemediationAttemptSecondsSchema = z
  .int()
  .min(1)
  .max(2678000)
  .openapi('AutoRemediationAttemptSeconds')

const RemediationConfigurationSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ),
    TargetType: RemediationTargetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the target. Target executes remediation. For example, SSM document.',
        }),
    ),
    TargetId: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'Target ID is the name of the SSM document.' }),
    ),
    TargetVersion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Version of the target. For example, version of the SSM document.</p> <note> <p>If you make backward incompatible changes to the SSM document, you must call PutRemediationConfiguration API again to ensure the remediations can run.</p> </note>',
        }),
    ).exactOptional(),
    Parameters: RemediationParametersSchema.and(
      z.any().openapi({ description: 'An object of the RemediationParameterValue.' }),
    ).exactOptional(),
    ResourceType: StringSchema.and(
      z.any().openapi({ description: 'The type of a resource. ' }),
    ).exactOptional(),
    Automatic: BooleanSchema.and(
      z.any().openapi({ description: 'The remediation is triggered automatically.' }),
    ).exactOptional(),
    ExecutionControls: ExecutionControlsSchema.and(
      z.any().openapi({ description: 'An ExecutionControls object.' }),
    ).exactOptional(),
    MaximumAutomaticAttempts: AutoRemediationAttemptsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5.</p> <p>For example, if you specify MaximumAutomaticAttempts as 5 with RetryAttemptSeconds as 50 seconds, Config will put a RemediationException on your behalf for the failing resource after the 5th failed attempt within 50 seconds.</p>',
        }),
    ).exactOptional(),
    RetryAttemptSeconds: AutoRemediationAttemptSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Maximum time in seconds that Config runs auto-remediation. If you do not select a number, the default is 60 seconds. </p> <p>For example, if you specify RetryAttemptSeconds as 50 seconds and MaximumAutomaticAttempts as 5, Config will run auto-remediations 5 times within 50 seconds before throwing an exception.</p>',
        }),
    ).exactOptional(),
    Arn: StringWithCharLimit1024Schema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) of remediation configuration.' }),
    ).exactOptional(),
    CreatedByService: StringWithCharLimit1024Schema.and(
      z
        .any()
        .openapi({
          description: 'Name of the service that owns the service-linked rule, if applicable.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigRuleName', 'TargetType', 'TargetId'],
    description:
      'An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.',
  })
  .openapi('RemediationConfiguration')

const RemediationConfigurationsSchema = z
  .array(RemediationConfigurationSchema)
  .min(0)
  .max(25)
  .openapi('RemediationConfigurations')

const DescribeRemediationConfigurationsResponseSchema = z
  .object({
    RemediationConfigurations: RemediationConfigurationsSchema.and(
      z.any().openapi({ description: 'Returns a remediation configuration object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRemediationConfigurationsResponse')

const DescribeRemediationConfigurationsRequestSchema = z
  .object({
    ConfigRuleNames: ConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Config rule names of remediation configurations for which you want details. ',
        }),
    ),
  })
  .openapi({ required: ['ConfigRuleNames'], title: 'DescribeRemediationConfigurationsRequest' })
  .openapi('DescribeRemediationConfigurationsRequest')

const RemediationExceptionSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ),
    ResourceType: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The type of a resource.' }),
    ),
    ResourceId: StringWithCharLimit1024Schema.and(
      z.any().openapi({ description: 'The ID of the resource (for example., sg-xxxxxx).' }),
    ),
    Message: StringWithCharLimit1024Schema.and(
      z.any().openapi({ description: 'An explanation of an remediation exception.' }),
    ).exactOptional(),
    ExpirationTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the remediation exception will be deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigRuleName', 'ResourceType', 'ResourceId'],
    description:
      'An object that represents the details about the remediation exception. The details include the rule name, an explanation of an exception, the time when the exception will be deleted, the resource ID, and resource type. ',
  })
  .openapi('RemediationException')

const RemediationExceptionsSchema = z
  .array(RemediationExceptionSchema)
  .min(0)
  .max(25)
  .openapi('RemediationExceptions')

const DescribeRemediationExceptionsResponseSchema = z
  .object({
    RemediationExceptions: RemediationExceptionsSchema.and(
      z.any().openapi({ description: 'Returns a list of remediation exception objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRemediationExceptionsResponse')

const DescribeRemediationExceptionsRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ),
    ResourceKeys: RemediationExceptionResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. ',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of RemediationExceptionResourceKey returned on each page. The default is 25. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConfigRuleName'], title: 'DescribeRemediationExceptionsRequest' })
  .openapi('DescribeRemediationExceptionsRequest')

const RemediationExecutionStateSchema = z
  .enum(['QUEUED', 'IN_PROGRESS', 'SUCCEEDED', 'FAILED'])
  .openapi('RemediationExecutionState')

const RemediationExecutionStepStateSchema = z
  .enum(['SUCCEEDED', 'PENDING', 'FAILED'])
  .openapi('RemediationExecutionStepState')

const RemediationExecutionStepSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: 'The details of the step.' }),
    ).exactOptional(),
    State: RemediationExecutionStepStateSchema.and(
      z.any().openapi({ description: 'The valid status of the step.' }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({ description: 'An error message if the step was interrupted during execution.' }),
    ).exactOptional(),
    StartTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the step started.' }),
    ).exactOptional(),
    StopTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the step stopped.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Name of the step from the SSM document.', required: [] })
  .openapi('RemediationExecutionStep')

const RemediationExecutionStepsSchema = z
  .array(RemediationExecutionStepSchema)
  .openapi('RemediationExecutionSteps')

const RemediationExecutionStatusSchema = z
  .object({
    ResourceKey: ResourceKeySchema.exactOptional(),
    State: RemediationExecutionStateSchema.and(
      z.any().openapi({ description: 'ENUM of the values.' }),
    ).exactOptional(),
    StepDetails: RemediationExecutionStepsSchema.and(
      z.any().openapi({ description: 'Details of every step.' }),
    ).exactOptional(),
    InvocationTime: DateSchema.and(
      z.any().openapi({ description: 'Start time when the remediation was executed.' }),
    ).exactOptional(),
    LastUpdatedTime: DateSchema.and(
      z.any().openapi({ description: 'The time when the remediation execution was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Provides details of the current status of the invoked remediation action for that resource.',
    required: [],
  })
  .openapi('RemediationExecutionStatus')

const RemediationExecutionStatusesSchema = z
  .array(RemediationExecutionStatusSchema)
  .openapi('RemediationExecutionStatuses')

const DescribeRemediationExecutionStatusResponseSchema = z
  .object({
    RemediationExecutionStatuses: RemediationExecutionStatusesSchema.and(
      z.any().openapi({ description: 'Returns a list of remediation execution statuses objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRemediationExecutionStatusResponse')

const DescribeRemediationExecutionStatusRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'A list of Config rule names.' }),
    ),
    ResourceKeys: ResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. ',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of RemediationExecutionStatuses returned on each page. The default is maximum. If you specify 0, Config uses the default. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConfigRuleName'], title: 'DescribeRemediationExecutionStatusRequest' })
  .openapi('DescribeRemediationExecutionStatusRequest')

const RetentionPeriodInDaysSchema = z.int().min(30).max(2557).openapi('RetentionPeriodInDays')

const RetentionConfigurationSchema = z
  .object({
    Name: RetentionConfigurationNameSchema.and(
      z.any().openapi({ description: 'The name of the retention configuration object.' }),
    ),
    RetentionPeriodInDays: RetentionPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Number of days Config stores your historical information.</p> <note> <p>Currently, only applicable to the configuration item history.</p> </note>',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'RetentionPeriodInDays'],
    description:
      'An object with the name of the retention configuration and the retention period in days. The object stores the configuration for data retention in Config.',
  })
  .openapi('RetentionConfiguration')

const RetentionConfigurationListSchema = z
  .array(RetentionConfigurationSchema)
  .openapi('RetentionConfigurationList')

const DescribeRetentionConfigurationsResponseSchema = z
  .object({
    RetentionConfigurations: RetentionConfigurationListSchema.and(
      z.any().openapi({ description: 'Returns a retention configuration object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeRetentionConfigurationsResponse')

const RetentionConfigurationNameListSchema = z
  .array(RetentionConfigurationNameSchema)
  .min(0)
  .max(1)
  .openapi('RetentionConfigurationNameList')

const DescribeRetentionConfigurationsRequestSchema = z
  .object({
    RetentionConfigurationNames: RetentionConfigurationNameListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of names of retention configurations for which you want details. If you do not specify a name, Config returns details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'DescribeRetentionConfigurationsRequest', required: [] })
  .openapi('DescribeRetentionConfigurationsRequest')

const EvaluationResultQualifierSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the Config rule that was used in the evaluation.' }),
    ).exactOptional(),
    ResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({ description: 'The type of Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    ResourceId: BaseResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the evaluated Amazon Web Services resource.' }),
    ).exactOptional(),
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The mode of an evaluation. The valid values are Detective or Proactive.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Identifies an Config rule that evaluated an Amazon Web Services resource, and provides the type and ID of the resource that the rule evaluated.',
    required: [],
  })
  .openapi('EvaluationResultQualifier')

const ResourceEvaluationIdSchema = z.string().min(1).max(128).openapi('ResourceEvaluationId')

const EvaluationResultIdentifierSchema = z
  .object({
    EvaluationResultQualifier: EvaluationResultQualifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies an Config rule used to evaluate an Amazon Web Services resource, and provides the type and ID of the evaluated resource.',
        }),
    ).exactOptional(),
    OrderingTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the event that triggered the evaluation of your Amazon Web Services resources. The time can indicate when Config delivered a configuration item change notification, or it can indicate when Config delivered the configuration snapshot, depending on which event triggered the evaluation.',
        }),
    ).exactOptional(),
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z.any().openapi({ description: 'A Unique ID for an evaluation result.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Uniquely identifies an evaluation result.', required: [] })
  .openapi('EvaluationResultIdentifier')

const AggregateEvaluationResultSchema = z
  .object({
    EvaluationResultIdentifier: EvaluationResultIdentifierSchema.and(
      z.any().openapi({ description: 'Uniquely identifies the evaluation result.' }),
    ).exactOptional(),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource compliance status.</p> <p>For the <code>AggregationEvaluationResult</code> data type, Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> value.</p>',
        }),
    ).exactOptional(),
    ResultRecordedTime: DateSchema.and(
      z
        .any()
        .openapi({ description: 'The time when Config recorded the aggregate evaluation result.' }),
    ).exactOptional(),
    ConfigRuleInvokedTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the Config rule evaluated the Amazon Web Services resource.',
        }),
    ).exactOptional(),
    Annotation: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary information about how the agrregate evaluation determined the compliance.',
        }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region from where the data is aggregated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of an Config evaluation for an account ID and region in an aggregator. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information. ',
    required: [],
  })
  .openapi('AggregateEvaluationResult')

const AggregateEvaluationResultListSchema = z
  .array(AggregateEvaluationResultSchema)
  .openapi('AggregateEvaluationResultList')

const GetAggregateComplianceDetailsByConfigRuleResponseSchema = z
  .object({
    AggregateEvaluationResults: AggregateEvaluationResultListSchema.and(
      z.any().openapi({ description: 'Returns an AggregateEvaluationResults object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAggregateComplianceDetailsByConfigRuleResponse')

const GetAggregateComplianceDetailsByConfigRuleRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Config rule for which you want compliance information.',
        }),
    ),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account.' }),
    ),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region from where the data is aggregated.' }),
    ),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The resource compliance status.</p> <note> <p>For the <code>GetAggregateComplianceDetailsByConfigRuleRequest</code> data type, Config supports only the <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. Config does not support the <code>NOT_APPLICABLE</code> and <code>INSUFFICIENT_DATA</code> values.</p> </note>',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is 50. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName', 'ConfigRuleName', 'AccountId', 'AwsRegion'],
    title: 'GetAggregateComplianceDetailsByConfigRuleRequest',
  })
  .openapi('GetAggregateComplianceDetailsByConfigRuleRequest')

const ComplianceSummarySchema = z
  .object({
    CompliantResourceCount: ComplianceContributorCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Config rules or Amazon Web Services resources that are compliant, up to a maximum of 25 for rules and 100 for resources.',
        }),
    ).exactOptional(),
    NonCompliantResourceCount: ComplianceContributorCountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Config rules or Amazon Web Services resources that are noncompliant, up to a maximum of 25 for rules and 100 for resources.',
        }),
    ).exactOptional(),
    ComplianceSummaryTimestamp: DateSchema.and(
      z.any().openapi({ description: 'The time that Config created the compliance summary.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of Config rules or Amazon Web Services resources that are compliant and noncompliant.',
    required: [],
  })
  .openapi('ComplianceSummary')

const AggregateComplianceCountSchema = z
  .object({
    GroupName: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID or region based on the GroupByKey value.',
        }),
    ).exactOptional(),
    ComplianceSummary: ComplianceSummarySchema.and(
      z.any().openapi({ description: 'The number of compliant and noncompliant Config rules.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.',
    required: [],
  })
  .openapi('AggregateComplianceCount')

const AggregateComplianceCountListSchema = z
  .array(AggregateComplianceCountSchema)
  .openapi('AggregateComplianceCountList')

const GetAggregateConfigRuleComplianceSummaryResponseSchema = z
  .object({
    GroupByKey: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'Groups the result based on ACCOUNT_ID or AWS_REGION.' }),
    ).exactOptional(),
    AggregateComplianceCounts: AggregateComplianceCountListSchema.and(
      z.any().openapi({ description: 'Returns a list of AggregateComplianceCounts object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAggregateConfigRuleComplianceSummaryResponse')

const ConfigRuleComplianceSummaryFiltersSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of the source account.' }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region where the data is aggregated.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filters the results based on the account IDs and regions.',
    required: [],
  })
  .openapi('ConfigRuleComplianceSummaryFilters')

const ConfigRuleComplianceSummaryGroupKeySchema = z
  .enum(['ACCOUNT_ID', 'AWS_REGION'])
  .openapi('ConfigRuleComplianceSummaryGroupKey')

const GetAggregateConfigRuleComplianceSummaryRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Filters: ConfigRuleComplianceSummaryFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the results based on the ConfigRuleComplianceSummaryFilters object.',
        }),
    ).exactOptional(),
    GroupByKey: ConfigRuleComplianceSummaryGroupKeySchema.and(
      z.any().openapi({ description: 'Groups the result based on ACCOUNT_ID or AWS_REGION.' }),
    ).exactOptional(),
    Limit: GroupByAPILimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'GetAggregateConfigRuleComplianceSummaryRequest',
  })
  .openapi('GetAggregateConfigRuleComplianceSummaryRequest')

const AggregateConformancePackComplianceCountSchema = z
  .object({
    CompliantConformancePackCount: IntegerSchema.and(
      z.any().openapi({ description: 'Number of compliant conformance packs.' }),
    ).exactOptional(),
    NonCompliantConformancePackCount: IntegerSchema.and(
      z.any().openapi({ description: 'Number of noncompliant conformance packs.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The number of conformance packs that are compliant and noncompliant.',
    required: [],
  })
  .openapi('AggregateConformancePackComplianceCount')

const AggregateConformancePackComplianceSummarySchema = z
  .object({
    ComplianceSummary: AggregateConformancePackComplianceCountSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns an <code>AggregateConformancePackComplianceCount</code> object. ',
        }),
    ).exactOptional(),
    GroupName: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Provides a summary of compliance based on either account ID or region. ',
    required: [],
  })
  .openapi('AggregateConformancePackComplianceSummary')

const AggregateConformancePackComplianceSummaryListSchema = z
  .array(AggregateConformancePackComplianceSummarySchema)
  .openapi('AggregateConformancePackComplianceSummaryList')

const GetAggregateConformancePackComplianceSummaryResponseSchema = z
  .object({
    AggregateConformancePackComplianceSummaries:
      AggregateConformancePackComplianceSummaryListSchema.and(
        z
          .any()
          .openapi({
            description:
              'Returns a list of <code>AggregateConformancePackComplianceSummary</code> object.',
          }),
      ).exactOptional(),
    GroupByKey: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAggregateConformancePackComplianceSummaryResponse')

const AggregateConformancePackComplianceSummaryFiltersSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit Amazon Web Services account ID of the source account.',
        }),
    ).exactOptional(),
    AwsRegion: AwsRegionSchema.and(
      z
        .any()
        .openapi({
          description: 'The source Amazon Web Services Region from where the data is aggregated.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Filters the results based on account ID and region. ', required: [] })
  .openapi('AggregateConformancePackComplianceSummaryFilters')

const AggregateConformancePackComplianceSummaryGroupKeySchema = z
  .enum(['ACCOUNT_ID', 'AWS_REGION'])
  .openapi('AggregateConformancePackComplianceSummaryGroupKey')

const GetAggregateConformancePackComplianceSummaryRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Filters: AggregateConformancePackComplianceSummaryFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the results based on the <code>AggregateConformancePackComplianceSummaryFilters</code> object.',
        }),
    ).exactOptional(),
    GroupByKey: AggregateConformancePackComplianceSummaryGroupKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'Groups the result based on Amazon Web Services account ID or Amazon Web Services Region.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of results returned on each page. The default is maximum. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'GetAggregateConformancePackComplianceSummaryRequest',
  })
  .openapi('GetAggregateConformancePackComplianceSummaryRequest')

const LongSchema = z.int().openapi('Long')

const GroupedResourceCountSchema = z
  .object({
    GroupName: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the group that can be region, account ID, or resource type. For example, region1, region2 if the region was chosen as <code>GroupByKey</code>.',
        }),
    ),
    ResourceCount: LongSchema.and(
      z.any().openapi({ description: 'The number of resources in the group.' }),
    ),
  })
  .openapi({
    required: ['GroupName', 'ResourceCount'],
    description: 'The count of resources that are grouped by the group name.',
  })
  .openapi('GroupedResourceCount')

const GroupedResourceCountListSchema = z
  .array(GroupedResourceCountSchema)
  .openapi('GroupedResourceCountList')

const GetAggregateDiscoveredResourceCountsResponseSchema = z
  .object({
    TotalDiscoveredResources: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of resources that are present in an aggregator with the filters that you provide.',
        }),
    ),
    GroupByKey: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The key passed into the request object. If <code>GroupByKey</code> is not provided, the result will be empty.',
        }),
    ).exactOptional(),
    GroupedResourceCounts: GroupedResourceCountListSchema.and(
      z.any().openapi({ description: 'Returns a list of GroupedResourceCount objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['TotalDiscoveredResources'] })
  .openapi('GetAggregateDiscoveredResourceCountsResponse')

const ResourceCountFiltersSchema = z
  .object({
    ResourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of the Amazon Web Services resource.' }),
    ).exactOptional(),
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit ID of the account.' }),
    ).exactOptional(),
    Region: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region where the account is located.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filters the resource count based on account ID, region, and resource type.',
    required: [],
  })
  .openapi('ResourceCountFilters')

const ResourceCountGroupKeySchema = z
  .enum(['RESOURCE_TYPE', 'ACCOUNT_ID', 'AWS_REGION'])
  .openapi('ResourceCountGroupKey')

const GetAggregateDiscoveredResourceCountsRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Filters: ResourceCountFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the results based on the <code>ResourceCountFilters</code> object.',
        }),
    ).exactOptional(),
    GroupByKey: ResourceCountGroupKeySchema.and(
      z.any().openapi({ description: 'The key to group the resource counts.' }),
    ).exactOptional(),
    Limit: GroupByAPILimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of <a>GroupedResourceCount</a> objects returned on each page. The default is 1000. You cannot specify a number greater than 1000. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'GetAggregateDiscoveredResourceCountsRequest',
  })
  .openapi('GetAggregateDiscoveredResourceCountsRequest')

const ConfigurationItemMD5HashSchema = z.string().openapi('ConfigurationItemMD5Hash')

const ValueSchema = z.string().openapi('Value')

const TagsSchema = z.record(z.string(), ValueSchema).openapi('Tags')

const RelatedEventSchema = z.string().openapi('RelatedEvent')

const RelatedEventListSchema = z.array(RelatedEventSchema).openapi('RelatedEventList')

const RelationshipNameSchema = z.string().openapi('RelationshipName')

const RelationshipSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the related resource.' }),
    ).exactOptional(),
    resourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the related resource (for example, <code>sg-xxxxxx</code>).',
        }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The custom name of the related resource, if available.' }),
    ).exactOptional(),
    relationshipName: RelationshipNameSchema.and(
      z.any().openapi({ description: 'The type of relationship with the related resource.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The relationship of the related resource to the main resource.',
    required: [],
  })
  .openapi('Relationship')

const RelationshipListSchema = z.array(RelationshipSchema).openapi('RelationshipList')

const ConfigurationItemSchema = z
  .object({
    version: VersionSchema.and(
      z.any().openapi({ description: 'The version number of the resource configuration.' }),
    ).exactOptional(),
    accountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit Amazon Web Services account ID associated with the resource.',
        }),
    ).exactOptional(),
    configurationItemCaptureTime: ConfigurationItemCaptureTimeSchema.and(
      z.any().openapi({ description: 'The time when the configuration recording was initiated.' }),
    ).exactOptional(),
    configurationItemStatus: ConfigurationItemStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration item status. The valid values are:</p> <ul> <li> <p>OK – The resource configuration has been updated</p> </li> <li> <p>ResourceDiscovered – The resource was newly discovered</p> </li> <li> <p>ResourceNotRecorded – The resource was discovered but its configuration was not recorded since the recorder excludes the recording of resources of this type</p> </li> <li> <p>ResourceDeleted – The resource was deleted</p> </li> <li> <p>ResourceDeletedNotRecorded – The resource was deleted but its configuration was not recorded since the recorder excludes the recording of resources of this type</p> </li> </ul> <note> <p>The CIs do not incur any cost.</p> </note>',
        }),
    ).exactOptional(),
    configurationStateId: ConfigurationStateIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'An identifier that indicates the ordering of the configuration items of a resource.',
        }),
    ).exactOptional(),
    configurationItemMD5Hash: ConfigurationItemMD5HashSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Unique MD5 hash that represents the configuration item's state.</p> <p>You can use MD5 hash to compare the states of two or more configuration items that are associated with the same resource.</p>",
        }),
    ).exactOptional(),
    arn: ARNSchema.and(
      z.any().openapi({ description: 'Amazon Resource Name (ARN) associated with the resource.' }),
    ).exactOptional(),
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of Amazon Web Services resource.' }),
    ).exactOptional(),
    resourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the resource (for example, <code>sg-xxxxxx</code>).' }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The custom name of the resource, if available.' }),
    ).exactOptional(),
    awsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region where the resource resides.' }),
    ).exactOptional(),
    availabilityZone: AvailabilityZoneSchema.and(
      z.any().openapi({ description: 'The Availability Zone associated with the resource.' }),
    ).exactOptional(),
    resourceCreationTime: ResourceCreationTimeSchema.and(
      z.any().openapi({ description: 'The time stamp when the resource was created.' }),
    ).exactOptional(),
    tags: TagsSchema.and(
      z.any().openapi({ description: 'A mapping of key value tags associated with the resource.' }),
    ).exactOptional(),
    relatedEvents: RelatedEventListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of CloudTrail event IDs.</p> <p>A populated field indicates that the current configuration was initiated by the events recorded in the CloudTrail log. For more information about CloudTrail, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">What Is CloudTrail</a>.</p> <p>An empty field indicates that the current configuration was not initiated by any event. As of Version 1.3, the relatedEvents field is empty. You can access the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/APIReference/API_LookupEvents.html">LookupEvents API</a> in the <i>CloudTrail API Reference</i> to retrieve the events for the resource.</p>',
        }),
    ).exactOptional(),
    relationships: RelationshipListSchema.and(
      z.any().openapi({ description: 'A list of related Amazon Web Services resources.' }),
    ).exactOptional(),
    configuration: ConfigurationSchema.and(
      z.any().openapi({ description: 'The description of the resource configuration.' }),
    ).exactOptional(),
    supplementaryConfiguration: SupplementaryConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Configuration attributes that Config returns for certain resource types to supplement the information returned for the <code>configuration</code> parameter.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list that contains detailed configurations of a specified resource.',
    required: [],
  })
  .openapi('ConfigurationItem')

const GetAggregateResourceConfigResponseSchema = z
  .object({
    ConfigurationItem: ConfigurationItemSchema.and(
      z.any().openapi({ description: 'Returns a <code>ConfigurationItem</code> object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAggregateResourceConfigResponse')

const GetAggregateResourceConfigRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    ResourceIdentifier: AggregateResourceIdentifierSchema.and(
      z.any().openapi({ description: 'An object that identifies aggregate resource.' }),
    ),
  })
  .openapi({
    required: ['ConfigurationAggregatorName', 'ResourceIdentifier'],
    title: 'GetAggregateResourceConfigRequest',
  })
  .openapi('GetAggregateResourceConfigRequest')

const OversizedConfigurationItemExceptionSchema = z
  .any()
  .openapi('OversizedConfigurationItemException')

const ResourceNotDiscoveredExceptionSchema = z.any().openapi('ResourceNotDiscoveredException')

const EvaluationResultSchema = z
  .object({
    EvaluationResultIdentifier: EvaluationResultIdentifierSchema.and(
      z.any().openapi({ description: 'Uniquely identifies the evaluation result.' }),
    ).exactOptional(),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the Amazon Web Services resource complies with the Config rule that evaluated it.</p> <p>For the <code>EvaluationResult</code> data type, Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. Config does not support the <code>INSUFFICIENT_DATA</code> value for the <code>EvaluationResult</code> data type.</p>',
        }),
    ).exactOptional(),
    ResultRecordedTime: DateSchema.and(
      z.any().openapi({ description: 'The time when Config recorded the evaluation result.' }),
    ).exactOptional(),
    ConfigRuleInvokedTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when the Config rule evaluated the Amazon Web Services resource.',
        }),
    ).exactOptional(),
    Annotation: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary information about how the evaluation determined the compliance.',
        }),
    ).exactOptional(),
    ResultToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An encrypted token that associates an evaluation with an Config rule. The token identifies the rule, the Amazon Web Services resource being evaluated, and the event that triggered the evaluation.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details of an Config evaluation. Provides the Amazon Web Services resource that was evaluated, the compliance of the resource, related time stamps, and supplementary information.',
    required: [],
  })
  .openapi('EvaluationResult')

const EvaluationResultsSchema = z.array(EvaluationResultSchema).openapi('EvaluationResults')

const GetComplianceDetailsByConfigRuleResponseSchema = z
  .object({
    EvaluationResults: EvaluationResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the Amazon Web Services resource complies with the specified Config rule.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetComplianceDetailsByConfigRuleResponse')

const GetComplianceDetailsByConfigRuleRequestSchema = z
  .object({
    ConfigRuleName: StringWithCharLimit64Schema.and(
      z
        .any()
        .openapi({
          description: 'The name of the Config rule for which you want compliance information.',
        }),
    ),
    ComplianceTypes: ComplianceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results by compliance.</p> <p> <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigRuleName'],
    title: 'GetComplianceDetailsByConfigRuleRequest',
    description: '<p/>',
  })
  .openapi('GetComplianceDetailsByConfigRuleRequest')

const GetComplianceDetailsByResourceResponseSchema = z
  .object({
    EvaluationResults: EvaluationResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether the specified Amazon Web Services resource complies each Config rule.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetComplianceDetailsByResourceResponse')

const GetComplianceDetailsByResourceRequestSchema = z
  .object({
    ResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The type of the Amazon Web Services resource for which you want compliance information.',
        }),
    ).exactOptional(),
    ResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services resource for which you want compliance information.',
        }),
    ).exactOptional(),
    ComplianceTypes: ComplianceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results by compliance.</p> <p> <code>INSUFFICIENT_DATA</code> is a valid <code>ComplianceType</code> that is returned when an Config rule cannot be evaluated. However, <code>INSUFFICIENT_DATA</code> cannot be used as a <code>ComplianceType</code> for filtering results.</p>',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The unique ID of Amazon Web Services resource execution for which you want to retrieve evaluation results. </p> <note> <p>You need to only provide either a <code>ResourceEvaluationID</code> or a <code>ResourceID </code>and <code>ResourceType</code>.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetComplianceDetailsByResourceRequest', description: '<p/>', required: [] })
  .openapi('GetComplianceDetailsByResourceRequest')

const GetComplianceSummaryByConfigRuleResponseSchema = z
  .object({
    ComplianceSummary: ComplianceSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Config rules that are compliant and the number that are noncompliant, up to a maximum of 25 for each.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetComplianceSummaryByConfigRuleResponse')

const ComplianceSummaryByResourceTypeSchema = z
  .object({
    ResourceType: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The type of Amazon Web Services resource.' }),
    ).exactOptional(),
    ComplianceSummary: ComplianceSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Amazon Web Services resources that are compliant or noncompliant, up to a maximum of 100 for each.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The number of Amazon Web Services resources of a specific type that are compliant or noncompliant, up to a maximum of 100 for each.',
    required: [],
  })
  .openapi('ComplianceSummaryByResourceType')

const ComplianceSummariesByResourceTypeSchema = z
  .array(ComplianceSummaryByResourceTypeSchema)
  .openapi('ComplianceSummariesByResourceType')

const GetComplianceSummaryByResourceTypeResponseSchema = z
  .object({
    ComplianceSummariesByResourceType: ComplianceSummariesByResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of resources that are compliant and the number that are noncompliant. If one or more resource types were provided with the request, the numbers are returned for each resource type. The maximum number returned is 100.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('GetComplianceSummaryByResourceTypeResponse')

const ResourceTypesSchema = z
  .array(StringWithCharLimit256Schema)
  .min(0)
  .max(20)
  .openapi('ResourceTypes')

const GetComplianceSummaryByResourceTypeRequestSchema = z
  .object({
    ResourceTypes: ResourceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one or more resource types to get the number of resources that are compliant and the number that are noncompliant for each resource type.</p> <p>For this request, you can specify an Amazon Web Services resource type such as <code>AWS::EC2::Instance</code>. You can specify that the resource type is an Amazon Web Services account by specifying <code>AWS::::Account</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'GetComplianceSummaryByResourceTypeRequest',
    description: '<p/>',
    required: [],
  })
  .openapi('GetComplianceSummaryByResourceTypeRequest')

const AnnotationSchema = z.string().min(0).max(256).openapi('Annotation')

const ConformancePackEvaluationResultSchema = z
  .object({
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compliance type. The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.',
        }),
    ),
    EvaluationResultIdentifier: EvaluationResultIdentifierSchema,
    ConfigRuleInvokedTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The time when Config rule evaluated Amazon Web Services resource.',
        }),
    ),
    ResultRecordedTime: DateSchema.and(
      z.any().openapi({ description: 'The time when Config recorded the evaluation result. ' }),
    ),
    Annotation: AnnotationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary information about how the evaluation determined the compliance. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ComplianceType',
      'EvaluationResultIdentifier',
      'ConfigRuleInvokedTime',
      'ResultRecordedTime',
    ],
    description:
      'The details of a conformance pack evaluation. Provides Config rule and Amazon Web Services resource type that was evaluated, the compliance of the conformance pack, related time stamps, and supplementary information. ',
  })
  .openapi('ConformancePackEvaluationResult')

const ConformancePackRuleEvaluationResultsListSchema = z
  .array(ConformancePackEvaluationResultSchema)
  .min(0)
  .max(100)
  .openapi('ConformancePackRuleEvaluationResultsList')

const GetConformancePackComplianceDetailsResponseSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    ConformancePackRuleEvaluationResults: ConformancePackRuleEvaluationResultsListSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns a list of <code>ConformancePackEvaluationResult</code> objects.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConformancePackName'] })
  .openapi('GetConformancePackComplianceDetailsResponse')

const ConformancePackComplianceResourceIdsSchema = z
  .array(StringWithCharLimit256Schema)
  .min(0)
  .max(5)
  .openapi('ConformancePackComplianceResourceIds')

const ConformancePackEvaluationFiltersSchema = z
  .object({
    ConfigRuleNames: ConformancePackConfigRuleNamesSchema.and(
      z.any().openapi({ description: 'Filters the results by Config rule names.' }),
    ).exactOptional(),
    ComplianceType: ConformancePackComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results by compliance.</p> <p>The allowed values are <code>COMPLIANT</code> and <code>NON_COMPLIANT</code>. <code>INSUFFICIENT_DATA</code> is not supported.</p>',
        }),
    ).exactOptional(),
    ResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the results by the resource type (for example, <code>"AWS::EC2::Instance"</code>). ',
        }),
    ).exactOptional(),
    ResourceIds: ConformancePackComplianceResourceIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Filters the results by resource IDs.</p> <note> <p>This is valid only when you provide resource type. If there is no resource type, you will see an error.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters a conformance pack by Config rule names, compliance types, Amazon Web Services resource types, and resource IDs.',
    required: [],
  })
  .openapi('ConformancePackEvaluationFilters')

const GetConformancePackComplianceDetailsLimitSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi('GetConformancePackComplianceDetailsLimit')

const GetConformancePackComplianceDetailsRequestSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'Name of the conformance pack.' }),
    ),
    Filters: ConformancePackEvaluationFiltersSchema.and(
      z.any().openapi({ description: 'A <code>ConformancePackEvaluationFilters</code> object.' }),
    ).exactOptional(),
    Limit: GetConformancePackComplianceDetailsLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluation results returned on each page. If you do no specify a number, Config uses the default. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConformancePackName'],
    title: 'GetConformancePackComplianceDetailsRequest',
  })
  .openapi('GetConformancePackComplianceDetailsRequest')

const ConformancePackComplianceSummarySchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'The name of the conformance pack name.' }),
    ),
    ConformancePackComplianceStatus: ConformancePackComplianceTypeSchema.and(
      z.any().openapi({ description: 'The status of the conformance pack.' }),
    ),
  })
  .openapi({
    required: ['ConformancePackName', 'ConformancePackComplianceStatus'],
    description: 'Summary includes the name and status of the conformance pack.',
  })
  .openapi('ConformancePackComplianceSummary')

const ConformancePackComplianceSummaryListSchema = z
  .array(ConformancePackComplianceSummarySchema)
  .min(1)
  .max(5)
  .openapi('ConformancePackComplianceSummaryList')

const GetConformancePackComplianceSummaryResponseSchema = z
  .object({
    ConformancePackComplianceSummaryList: ConformancePackComplianceSummaryListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of <code>ConformancePackComplianceSummary</code> objects. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConformancePackComplianceSummaryResponse')

const ConformancePackNamesToSummarizeListSchema = z
  .array(ConformancePackNameSchema)
  .min(1)
  .max(5)
  .openapi('ConformancePackNamesToSummarizeList')

const GetConformancePackComplianceSummaryRequestSchema = z
  .object({
    ConformancePackNames: ConformancePackNamesToSummarizeListSchema.and(
      z.any().openapi({ description: 'Names of conformance packs.' }),
    ),
    Limit: PageSizeLimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of conformance packs returned on each page.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConformancePackNames'],
    title: 'GetConformancePackComplianceSummaryRequest',
  })
  .openapi('GetConformancePackComplianceSummaryRequest')

const GetCustomRulePolicyResponseSchema = z
  .object({
    PolicyText: PolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy definition containing the logic for your Config Custom Policy rule.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetCustomRulePolicyResponse')

const GetCustomRulePolicyRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of your Config Custom Policy rule.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetCustomRulePolicyRequest', required: [] })
  .openapi('GetCustomRulePolicyRequest')

const ResourceCountSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The resource type (for example, <code>"AWS::EC2::Instance"</code>).',
        }),
    ).exactOptional(),
    count: LongSchema.and(
      z.any().openapi({ description: 'The number of resources.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object that contains the resource type and the number of resources.',
    required: [],
  })
  .openapi('ResourceCount')

const ResourceCountsSchema = z.array(ResourceCountSchema).openapi('ResourceCounts')

const GetDiscoveredResourceCountsResponseSchema = z
  .object({
    totalDiscoveredResources: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The total number of resources that Config is recording in the region for your account. If you specify resource types in the request, Config returns only the total number of resources for those resource types.</p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets, for a total of 60 resources.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify the resource type, <code>"AWS::EC2::Instances"</code>, in the request.</p> </li> <li> <p>Config returns 25 for <code>totalDiscoveredResources</code>.</p> </li> </ol>',
        }),
    ).exactOptional(),
    resourceCounts: ResourceCountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of <code>ResourceCount</code> objects. Each object is listed in descending order by the number of resources.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDiscoveredResourceCountsResponse')

const GetDiscoveredResourceCountsRequestSchema = z
  .object({
    resourceTypes: ResourceTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The comma-separated list that specifies the resource types that you want Config to return (for example, <code>"AWS::EC2::Instance"</code>, <code>"AWS::IAM::User"</code>).</p> <p>If a value for <code>resourceTypes</code> is not specified, Config returns all resource types that Config is recording in the region for your account.</p> <note> <p>If the configuration recorder is turned off, Config returns an empty list of <a>ResourceCount</a> objects. If the configuration recorder is not recording a specific resource type (for example, S3 buckets), that resource type is not returned in the list of <a>ResourceCount</a> objects.</p> </note>',
        }),
    ).exactOptional(),
    limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of <a>ResourceCount</a> objects returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDiscoveredResourceCountsRequest', required: [] })
  .openapi('GetDiscoveredResourceCountsRequest')

const MemberAccountRuleStatusSchema = z
  .enum([
    'CREATE_SUCCESSFUL',
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED',
    'DELETE_SUCCESSFUL',
    'DELETE_FAILED',
    'DELETE_IN_PROGRESS',
    'UPDATE_SUCCESSFUL',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED',
  ])
  .openapi('MemberAccountRuleStatus')

const MemberAccountStatusSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of a member account.' }),
    ),
    ConfigRuleName: StringWithCharLimit64Schema.and(
      z.any().openapi({ description: 'The name of Config rule deployed in the member account.' }),
    ),
    MemberAccountRuleStatus: MemberAccountRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status for Config rule in the member account. When management account calls <code>PutOrganizationConfigRule</code> action for the first time, Config rule status is created in the member account. When management account calls <code>PutOrganizationConfigRule</code> action for the second time, Config rule status is updated in the member account. Config rule status is deleted when the management account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p> Config sets the state of the rule to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when Config rule has been created in the member account. </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when Config rule is being created in the member account.</p> </li> <li> <p> <code>CREATE_FAILED</code> when Config rule creation has failed in the member account.</p> </li> <li> <p> <code>DELETE_FAILED</code> when Config rule deletion has failed in the member account.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when Config rule is being deleted in the member account.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when Config rule has been deleted in the member account. </p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when Config rule has been updated in the member account.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when Config rule is being updated in the member account.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when Config rule deletion has failed in the member account.</p> </li> </ul>',
        }),
    ),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that is returned when Config rule creation or deletion failed in the member account.',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message indicating that Config rule account creation or deletion has failed due to an error in the member account.',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp of the last status update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'ConfigRuleName', 'MemberAccountRuleStatus'],
    description:
      'Organization Config rule creation or deletion status in each member account. This includes the name of the rule, the status, error code and error message when the rule creation or deletion failed.',
  })
  .openapi('MemberAccountStatus')

const OrganizationConfigRuleDetailedStatusSchema = z
  .array(MemberAccountStatusSchema)
  .openapi('OrganizationConfigRuleDetailedStatus')

const GetOrganizationConfigRuleDetailedStatusResponseSchema = z
  .object({
    OrganizationConfigRuleDetailedStatus: OrganizationConfigRuleDetailedStatusSchema.and(
      z.any().openapi({ description: 'A list of <code>MemberAccountStatus</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOrganizationConfigRuleDetailedStatusResponse')

const StatusDetailFiltersSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the member account within an organization.',
        }),
    ).exactOptional(),
    MemberAccountRuleStatus: MemberAccountRuleStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status for Config rule in the member account. When management account calls <code>PutOrganizationConfigRule</code> action for the first time, Config rule status is created in the member account. When management account calls <code>PutOrganizationConfigRule</code> action for the second time, Config rule status is updated in the member account. Config rule status is deleted when the management account deletes <code>OrganizationConfigRule</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>Config sets the state of the rule to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when Config rule has been created in the member account.</p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when Config rule is being created in the member account.</p> </li> <li> <p> <code>CREATE_FAILED</code> when Config rule creation has failed in the member account.</p> </li> <li> <p> <code>DELETE_FAILED</code> when Config rule deletion has failed in the member account.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when Config rule is being deleted in the member account.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when Config rule has been deleted in the member account.</p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when Config rule has been updated in the member account.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when Config rule is being updated in the member account.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when Config rule deletion has failed in the member account.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Status filter object to filter results based on specific member account ID or status type for an organization Config rule. ',
    required: [],
  })
  .openapi('StatusDetailFilters')

const GetOrganizationConfigRuleDetailedStatusRequestSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of your organization Config rule for which you want status details for member accounts.',
        }),
    ),
    Filters: StatusDetailFiltersSchema.and(
      z.any().openapi({ description: 'A <code>StatusDetailFilters</code> object.' }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of <code>OrganizationConfigRuleDetailedStatus</code> returned on each page. If you do not specify a number, Config uses the default. The default is 100.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConfigRuleName'],
    title: 'GetOrganizationConfigRuleDetailedStatusRequest',
  })
  .openapi('GetOrganizationConfigRuleDetailedStatusRequest')

const OrganizationResourceDetailedStatusSchema = z
  .enum([
    'CREATE_SUCCESSFUL',
    'CREATE_IN_PROGRESS',
    'CREATE_FAILED',
    'DELETE_SUCCESSFUL',
    'DELETE_FAILED',
    'DELETE_IN_PROGRESS',
    'UPDATE_SUCCESSFUL',
    'UPDATE_IN_PROGRESS',
    'UPDATE_FAILED',
  ])
  .openapi('OrganizationResourceDetailedStatus')

const OrganizationConformancePackDetailedStatusSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit account ID of a member account.' }),
    ),
    ConformancePackName: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({ description: 'The name of conformance pack deployed in the member account.' }),
    ),
    Status: OrganizationResourceDetailedStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status for conformance pack in a member account. When management account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account. When management account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account. Conformance pack status is deleted when the management account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p> Config sets the state of the conformance pack to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p> </li> <li> <p> <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p> </li> <li> <p> <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p> </li> </ul>',
        }),
    ),
    ErrorCode: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error code that is returned when conformance pack creation or deletion failed in the member account. ',
        }),
    ).exactOptional(),
    ErrorMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An error message indicating that conformance pack account creation or deletion has failed due to an error in the member account. ',
        }),
    ).exactOptional(),
    LastUpdateTime: DateSchema.and(
      z.any().openapi({ description: 'The timestamp of the last status update.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AccountId', 'ConformancePackName', 'Status'],
    description:
      'Organization conformance pack creation or deletion status in each member account. This includes the name of the conformance pack, the status, error code and error message when the conformance pack creation or deletion failed. ',
  })
  .openapi('OrganizationConformancePackDetailedStatus')

const OrganizationConformancePackDetailedStatusesSchema = z
  .array(OrganizationConformancePackDetailedStatusSchema)
  .openapi('OrganizationConformancePackDetailedStatuses')

const GetOrganizationConformancePackDetailedStatusResponseSchema = z
  .object({
    OrganizationConformancePackDetailedStatuses:
      OrganizationConformancePackDetailedStatusesSchema.and(
        z
          .any()
          .openapi({
            description:
              'A list of <code>OrganizationConformancePackDetailedStatus</code> objects. ',
          }),
      ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOrganizationConformancePackDetailedStatusResponse')

const OrganizationResourceDetailedStatusFiltersSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the member account within an organization.',
        }),
    ).exactOptional(),
    Status: OrganizationResourceDetailedStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates deployment status for conformance pack in a member account. When management account calls <code>PutOrganizationConformancePack</code> action for the first time, conformance pack status is created in the member account. When management account calls <code>PutOrganizationConformancePack</code> action for the second time, conformance pack status is updated in the member account. Conformance pack status is deleted when the management account deletes <code>OrganizationConformancePack</code> and disables service access for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p> Config sets the state of the conformance pack to:</p> <ul> <li> <p> <code>CREATE_SUCCESSFUL</code> when conformance pack has been created in the member account. </p> </li> <li> <p> <code>CREATE_IN_PROGRESS</code> when conformance pack is being created in the member account.</p> </li> <li> <p> <code>CREATE_FAILED</code> when conformance pack creation has failed in the member account.</p> </li> <li> <p> <code>DELETE_FAILED</code> when conformance pack deletion has failed in the member account.</p> </li> <li> <p> <code>DELETE_IN_PROGRESS</code> when conformance pack is being deleted in the member account.</p> </li> <li> <p> <code>DELETE_SUCCESSFUL</code> when conformance pack has been deleted in the member account. </p> </li> <li> <p> <code>UPDATE_SUCCESSFUL</code> when conformance pack has been updated in the member account.</p> </li> <li> <p> <code>UPDATE_IN_PROGRESS</code> when conformance pack is being updated in the member account.</p> </li> <li> <p> <code>UPDATE_FAILED</code> when conformance pack deletion has failed in the member account.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Status filter object to filter results based on specific member account ID or status type for an organization conformance pack.',
    required: [],
  })
  .openapi('OrganizationResourceDetailedStatusFilters')

const GetOrganizationConformancePackDetailedStatusRequestSchema = z
  .object({
    OrganizationConformancePackName: OrganizationConformancePackNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of organization conformance pack for which you want status details for member accounts.',
        }),
    ),
    Filters: OrganizationResourceDetailedStatusFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'An <code>OrganizationResourceDetailedStatusFilters</code> object.',
        }),
    ).exactOptional(),
    Limit: CosmosPageLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of <code>OrganizationConformancePackDetailedStatuses</code> returned on each page. If you do not specify a number, Config uses the default. The default is 100. ',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConformancePackName'],
    title: 'GetOrganizationConformancePackDetailedStatusRequest',
  })
  .openapi('GetOrganizationConformancePackDetailedStatusRequest')

const GetOrganizationCustomRulePolicyResponseSchema = z
  .object({
    PolicyText: PolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy definition containing the logic for your organization Config Custom Policy rule.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetOrganizationCustomRulePolicyResponse')

const GetOrganizationCustomRulePolicyRequestSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of your organization Config Custom Policy rule. ' }),
    ),
  })
  .openapi({
    required: ['OrganizationConfigRuleName'],
    title: 'GetOrganizationCustomRulePolicyRequest',
  })
  .openapi('GetOrganizationCustomRulePolicyRequest')

const ConfigurationItemListSchema = z
  .array(ConfigurationItemSchema)
  .openapi('ConfigurationItemList')

const GetResourceConfigHistoryResponseSchema = z
  .object({
    configurationItems: ConfigurationItemListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list that contains the configuration history of one or more resources.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The output for the <a>GetResourceConfigHistory</a> action.',
    required: [],
  })
  .openapi('GetResourceConfigHistoryResponse')

const LaterTimeSchema = z.iso.datetime({ offset: true }).openapi('LaterTime')

const EarlierTimeSchema = z.iso.datetime({ offset: true }).openapi('EarlierTime')

const ChronologicalOrderSchema = z.enum(['Reverse', 'Forward']).openapi('ChronologicalOrder')

const GetResourceConfigHistoryRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(z.any().openapi({ description: 'The resource type.' })),
    resourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the resource (for example., <code>sg-xxxxxx</code>).' }),
    ),
    laterTime: LaterTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp that indicates a later time. If not specified, current time is taken.',
        }),
    ).exactOptional(),
    earlierTime: EarlierTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time stamp that indicates an earlier time. If not specified, the action returns paginated results that contain configuration items that start when the first configuration item was recorded.',
        }),
    ).exactOptional(),
    chronologicalOrder: ChronologicalOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The chronological order for configuration items listed. By default, the results are listed in reverse chronological order.',
        }),
    ).exactOptional(),
    limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of configuration items returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType', 'resourceId'],
    title: 'GetResourceConfigHistoryRequest',
    description: 'The input for the <a>GetResourceConfigHistory</a> action.',
  })
  .openapi('GetResourceConfigHistoryRequest')

const InvalidTimeRangeExceptionSchema = z.any().openapi('InvalidTimeRangeException')

const EvaluationStatusSchema: z.ZodType<EvaluationStatusType> = z
  .lazy(() =>
    z
      .object({
        Status: ResourceEvaluationStatusSchema.and(
          z
            .any()
            .openapi({
              description:
                'The status of an execution. The valid values are In_Progress, Succeeded or Failed. ',
            }),
        ),
        FailureReason: StringWithCharLimit1024Schema.and(
          z.any().openapi({ description: 'An explanation for failed execution status.' }),
        ).exactOptional(),
      })
      .openapi({ required: ['Status'], description: 'Returns status details of an evaluation.' }),
  )
  .openapi('EvaluationStatus')

const EvaluationContextIdentifierSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi('EvaluationContextIdentifier')

const EvaluationContextSchema = z
  .object({
    EvaluationContextIdentifier: EvaluationContextIdentifierSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique EvaluationContextIdentifier ID for an EvaluationContext.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Use EvaluationContext to group independently initiated proactive resource evaluations. For example, CFN Stack. If you want to check just a resource definition, you do not need to provide evaluation context.',
    required: [],
  })
  .openapi('EvaluationContext')

const ResourceConfigurationSchema = z.string().min(1).max(51200).openapi('ResourceConfiguration')

const ResourceConfigurationSchemaTypeSchema = z
  .literal('CFN_RESOURCE_SCHEMA')
  .openapi('ResourceConfigurationSchemaType')

const ResourceDetailsSchema = z
  .object({
    ResourceId: BaseResourceIdSchema.and(
      z.any().openapi({ description: 'A unique resource ID for an evaluation.' }),
    ),
    ResourceType: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'The type of resource being evaluated.' }),
    ),
    ResourceConfiguration: ResourceConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The resource definition to be evaluated as per the resource configuration schema type.',
        }),
    ),
    ResourceConfigurationSchemaType: ResourceConfigurationSchemaTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The schema type of the resource configuration.</p> <note> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a>, or <code>CFN_RESOURCE_SCHEMA</code>, in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceId', 'ResourceType', 'ResourceConfiguration'],
    description: 'Returns information about the resource being evaluated.',
  })
  .openapi('ResourceDetails')

const GetResourceEvaluationSummaryResponseSchema = z
  .object({
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique <code>ResourceEvaluationId</code> of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.',
        }),
    ).exactOptional(),
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Lists results of the mode that you requested to retrieve the resource evaluation summary. The valid values are Detective or Proactive.',
        }),
    ).exactOptional(),
    EvaluationStatus: EvaluationStatusSchema.and(
      z.any().openapi({ description: 'Returns an <code>EvaluationStatus</code> object.' }),
    ).exactOptional(),
    EvaluationStartTimestamp: DateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start timestamp when Config rule starts evaluating compliance for the provided resource details.',
        }),
    ).exactOptional(),
    Compliance: ComplianceTypeSchema.and(
      z.any().openapi({ description: 'The compliance status of the resource evaluation summary.' }),
    ).exactOptional(),
    EvaluationContext: EvaluationContextSchema.and(
      z.any().openapi({ description: 'Returns an <code>EvaluationContext</code> object.' }),
    ).exactOptional(),
    ResourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: 'Returns a <code>ResourceDetails</code> object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetResourceEvaluationSummaryResponse')

const GetResourceEvaluationSummaryRequestSchema = z
  .object({
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique <code>ResourceEvaluationId</code> of Amazon Web Services resource execution for which you want to retrieve the evaluation summary.',
        }),
    ),
  })
  .openapi({ required: ['ResourceEvaluationId'], title: 'GetResourceEvaluationSummaryRequest' })
  .openapi('GetResourceEvaluationSummaryRequest')

const QueryIdSchema = z.string().regex(/^\S+$/).min(1).max(36).openapi('QueryId')

const QueryArnSchema = z
  .string()
  .regex(
    /^arn:aws[a-z\-]*:config:[a-z\-\d]+:\d+:stored-query\/[a-zA-Z0-9-_]+\/query-[a-zA-Z\d-_\/]+$/,
  )
  .min(1)
  .max(500)
  .openapi('QueryArn')

const QueryDescriptionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(0)
  .max(256)
  .openapi('QueryDescription')

const QueryExpressionSchema = z
  .string()
  .regex(/[\s\S]*/)
  .min(1)
  .max(4096)
  .openapi('QueryExpression')

const StoredQuerySchema = z
  .object({
    QueryId: QueryIdSchema.and(
      z.any().openapi({ description: 'The ID of the query.' }),
    ).exactOptional(),
    QueryArn: QueryArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.',
        }),
    ).exactOptional(),
    QueryName: QueryNameSchema.and(z.any().openapi({ description: 'The name of the query.' })),
    Description: QueryDescriptionSchema.and(
      z.any().openapi({ description: 'A unique description for the query.' }),
    ).exactOptional(),
    Expression: QueryExpressionSchema.and(
      z
        .any()
        .openapi({
          description:
            "The expression of the query. For example, <code>SELECT resourceId, resourceType, supplementaryConfiguration.BucketVersioningConfiguration.status WHERE resourceType = 'AWS::S3::Bucket' AND supplementaryConfiguration.BucketVersioningConfiguration.status = 'Off'.</code> ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QueryName'], description: 'Provides the details of a stored query.' })
  .openapi('StoredQuery')

const GetStoredQueryResponseSchema = z
  .object({
    StoredQuery: StoredQuerySchema.and(
      z.any().openapi({ description: 'Returns a <code>StoredQuery</code> object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetStoredQueryResponse')

const GetStoredQueryRequestSchema = z
  .object({
    QueryName: QueryNameSchema.and(z.any().openapi({ description: 'The name of the query.' })),
  })
  .openapi({ required: ['QueryName'], title: 'GetStoredQueryRequest' })
  .openapi('GetStoredQueryRequest')

const DiscoveredResourceIdentifierListSchema = z
  .array(AggregateResourceIdentifierSchema)
  .openapi('DiscoveredResourceIdentifierList')

const ListAggregateDiscoveredResourcesResponseSchema = z
  .object({
    ResourceIdentifiers: DiscoveredResourceIdentifierListSchema.and(
      z
        .any()
        .openapi({ description: 'Returns a list of <code>ResourceIdentifiers</code> objects.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAggregateDiscoveredResourcesResponse')

const ResourceFiltersSchema = z
  .object({
    AccountId: AccountIdSchema.and(
      z.any().openapi({ description: 'The 12-digit source account ID.' }),
    ).exactOptional(),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource.' }),
    ).exactOptional(),
    ResourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The name of the resource.' }),
    ).exactOptional(),
    Region: AwsRegionSchema.and(
      z.any().openapi({ description: 'The source region.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Filters the results by resource account ID, region, resource ID, and resource name.',
    required: [],
  })
  .openapi('ResourceFilters')

const ListAggregateDiscoveredResourcesRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator. ' }),
    ),
    ResourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of resources that you want Config to list in the response.',
        }),
    ),
    Filters: ResourceFiltersSchema.and(
      z
        .any()
        .openapi({
          description: 'Filters the results based on the <code>ResourceFilters</code> object.',
        }),
    ).exactOptional(),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resource identifiers returned on each page. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName', 'ResourceType'],
    title: 'ListAggregateDiscoveredResourcesRequest',
  })
  .openapi('ListAggregateDiscoveredResourcesRequest')

const ComplianceScoreSchema = z.string().openapi('ComplianceScore')

const LastUpdatedTimeSchema = z.iso.datetime({ offset: true }).openapi('LastUpdatedTime')

const ConformancePackComplianceScoreSchema = z
  .object({
    Score: ComplianceScoreSchema.and(
      z
        .any()
        .openapi({
          description:
            'Compliance score for the conformance pack. Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.',
        }),
    ).exactOptional(),
    ConformancePackName: ConformancePackNameSchema.and(
      z.any().openapi({ description: 'The name of the conformance pack.' }),
    ).exactOptional(),
    LastUpdatedTime: LastUpdatedTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The time that the conformance pack compliance score was last updated.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.',
    required: [],
  })
  .openapi('ConformancePackComplianceScore')

const ConformancePackComplianceScoresSchema = z
  .array(ConformancePackComplianceScoreSchema)
  .openapi('ConformancePackComplianceScores')

const ListConformancePackComplianceScoresResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string that you can use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    ConformancePackComplianceScores: ConformancePackComplianceScoresSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackComplianceScore</code> objects.' }),
    ),
  })
  .openapi({ required: ['ConformancePackComplianceScores'] })
  .openapi('ListConformancePackComplianceScoresResponse')

const ConformancePackNameFilterSchema = z
  .array(ConformancePackNameSchema)
  .min(1)
  .max(25)
  .openapi('ConformancePackNameFilter')

const ConformancePackComplianceScoresFiltersSchema = z
  .object({
    ConformancePackNames: ConformancePackNameFilterSchema.and(
      z
        .any()
        .openapi({
          description:
            'The names of the conformance packs whose compliance scores you want to include in the conformance pack compliance score result set. You can include up to 25 conformance packs in the <code>ConformancePackNames</code> array of strings, each with a character limit of 256 characters for the conformance pack name.',
        }),
    ),
  })
  .openapi({
    required: ['ConformancePackNames'],
    description: 'A list of filters to apply to the conformance pack compliance score result set. ',
  })
  .openapi('ConformancePackComplianceScoresFilters')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const SortBySchema = z.literal('SCORE').openapi('SortBy')

const ListConformancePackComplianceScoresRequestSchema = z
  .object({
    Filters: ConformancePackComplianceScoresFiltersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters the results based on the <code>ConformancePackComplianceScoresFilters</code>.',
        }),
    ).exactOptional(),
    SortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Determines the order in which conformance pack compliance scores are sorted. Either in ascending or descending order.</p> <p>By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack. Conformance pack compliance scores are sorted in reverse alphabetical order if you enter <code>DESCENDING</code>.</p> <p>You can sort conformance pack compliance scores by the numerical value of the compliance score by entering <code>SCORE</code> in the <code>SortBy</code> action. When compliance scores are sorted by <code>SCORE</code>, conformance packs with a compliance score of <code>INSUFFICIENT_DATA</code> will be last when sorting by ascending order and first when sorting by descending order.</p>',
        }),
    ).exactOptional(),
    SortBy: SortBySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Sorts your conformance pack compliance scores in either ascending or descending order, depending on <code>SortOrder</code>.</p> <p>By default, conformance pack compliance scores are sorted in alphabetical order by name of the conformance pack. Enter <code>SCORE</code>, to sort conformance pack compliance scores by the numerical value of the compliance score.</p>',
        }),
    ).exactOptional(),
    Limit: PageSizeLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of conformance pack compliance scores returned on each page.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string in a prior request that you can use to get the paginated response for the next set of conformance pack compliance scores.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListConformancePackComplianceScoresRequest', required: [] })
  .openapi('ListConformancePackComplianceScoresRequest')

const ResourceDeletionTimeSchema = z.iso.datetime({ offset: true }).openapi('ResourceDeletionTime')

const ResourceIdentifierSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z.any().openapi({ description: 'The type of resource.' }),
    ).exactOptional(),
    resourceId: ResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the resource (for example, <code>sg-xxxxxx</code>).' }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'The custom name of the resource (if available).' }),
    ).exactOptional(),
    resourceDeletionTime: ResourceDeletionTimeSchema.and(
      z.any().openapi({ description: 'The time that the resource was deleted.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.',
    required: [],
  })
  .openapi('ResourceIdentifier')

const ResourceIdentifierListSchema = z
  .array(ResourceIdentifierSchema)
  .openapi('ResourceIdentifierList')

const ListDiscoveredResourcesResponseSchema = z
  .object({
    resourceIdentifiers: ResourceIdentifierListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details that identify a resource that is discovered by Config, including the resource type, ID, and (if available) the custom resource name.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string that you use in a subsequent request to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('ListDiscoveredResourcesResponse')

const ResourceIdListSchema = z.array(ResourceIdSchema).openapi('ResourceIdList')

const ListDiscoveredResourcesRequestSchema = z
  .object({
    resourceType: ResourceTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of resources that you want Config to list in the response.',
        }),
    ),
    resourceIds: ResourceIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IDs of only those resources that you want Config to list in the response. If you do not specify this parameter, Config lists all resources of the specified type that it has discovered. You can list a minimum of 1 resourceID and a maximum of 20 resourceIds.',
        }),
    ).exactOptional(),
    resourceName: ResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The custom name of only those resources that you want Config to list in the response. If you do not specify this parameter, Config lists all resources of the specified type that it has discovered.',
        }),
    ).exactOptional(),
    limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resource identifiers returned on each page. The default is 100. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    includeDeletedResources: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies whether Config includes deleted resources in the results. By default, deleted resources are not included.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['resourceType'],
    title: 'ListDiscoveredResourcesRequest',
    description: '<p/>',
  })
  .openapi('ListDiscoveredResourcesRequest')

const ResourceEvaluationSchema = z
  .object({
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z.any().openapi({ description: 'The ResourceEvaluationId of a evaluation.' }),
    ).exactOptional(),
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description: 'The mode of an evaluation. The valid values are Detective or Proactive.',
        }),
    ).exactOptional(),
    EvaluationStartTimestamp: DateSchema.and(
      z.any().openapi({ description: 'The starting time of an execution.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Returns details of a resource evaluation.', required: [] })
  .openapi('ResourceEvaluation')

const ResourceEvaluationsSchema = z.array(ResourceEvaluationSchema).openapi('ResourceEvaluations')

const ListResourceEvaluationsResponseSchema = z
  .object({
    ResourceEvaluations: ResourceEvaluationsSchema.and(
      z.any().openapi({ description: 'Returns a <code>ResourceEvaluations</code> object.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListResourceEvaluationsResponse')

const TimeWindowSchema = z
  .object({
    StartTime: DateSchema.and(
      z.any().openapi({ description: 'The start time of an execution.' }),
    ).exactOptional(),
    EndTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The end time of an execution. The end time must be after the start date.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Filters evaluation results based on start and end times.',
    required: [],
  })
  .openapi('TimeWindow')

const ResourceEvaluationFiltersSchema = z
  .object({
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters all resource evaluations results based on an evaluation mode. the valid value for this API is <code>Proactive</code>.',
        }),
    ).exactOptional(),
    TimeWindow: TimeWindowSchema.and(
      z.any().openapi({ description: 'Returns a <code>TimeWindow</code> object.' }),
    ).exactOptional(),
    EvaluationContextIdentifier: EvaluationContextIdentifierSchema.and(
      z
        .any()
        .openapi({
          description:
            'Filters evaluations for a given infrastructure deployment. For example: CFN Stack.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Returns details of a resource evaluation based on the selected filter.',
    required: [],
  })
  .openapi('ResourceEvaluationFilters')

const ListResourceEvaluationsPageItemLimitSchema = z
  .int()
  .min(0)
  .max(100)
  .openapi('ListResourceEvaluationsPageItemLimit')

const ListResourceEvaluationsRequestSchema = z
  .object({
    Filters: ResourceEvaluationFiltersSchema.and(
      z.any().openapi({ description: 'Returns a <code>ResourceEvaluationFilters</code> object.' }),
    ).exactOptional(),
    Limit: ListResourceEvaluationsPageItemLimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of evaluations returned on each page. The default is 10. You cannot specify a number greater than 100. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResourceEvaluationsRequest', required: [] })
  .openapi('ListResourceEvaluationsRequest')

const StoredQueryMetadataSchema = z
  .object({
    QueryId: QueryIdSchema.and(z.any().openapi({ description: 'The ID of the query. ' })),
    QueryArn: QueryArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.',
        }),
    ),
    QueryName: QueryNameSchema.and(z.any().openapi({ description: 'The name of the query.' })),
    Description: QueryDescriptionSchema.and(
      z.any().openapi({ description: 'A unique description for the query.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QueryId', 'QueryArn', 'QueryName'],
    description: 'Returns details of a specific query. ',
  })
  .openapi('StoredQueryMetadata')

const StoredQueryMetadataListSchema = z
  .array(StoredQueryMetadataSchema)
  .openapi('StoredQueryMetadataList')

const ListStoredQueriesResponseSchema = z
  .object({
    StoredQueryMetadata: StoredQueryMetadataListSchema.and(
      z.any().openapi({ description: 'A list of <code>StoredQueryMetadata</code> objects.' }),
    ).exactOptional(),
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the previous paginated request didn't return all of the remaining results, the response object's <code>NextToken</code> parameter value is set to a token. To retrieve the next set of results, call this action again and assign that token to the request object's <code>NextToken</code> parameter. If there are no remaining results, the previous response object's <code>NextToken</code> parameter is set to <code>null</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListStoredQueriesResponse')

const ListStoredQueriesRequestSchema = z
  .object({
    NextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned in a previous request that you use to request the next page of results in a paginated response.',
        }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z
        .any()
        .openapi({
          description: 'The maximum number of results to be returned with a single call.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListStoredQueriesRequest', required: [] })
  .openapi('ListStoredQueriesRequest')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    Key: TagKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.',
        }),
    ).exactOptional(),
    Value: TagValueSchema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The tags for the resource. The metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.',
    required: [],
  })
  .openapi('Tag')

const TagListSchema = z.array(TagSchema).min(1).max(50).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: TagListSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const AmazonResourceNameSchema = z.string().min(1).max(1000).openapi('AmazonResourceName')

const ListTagsForResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.',
        }),
    ),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of tags returned on each page. The limit maximum is 50. You cannot specify a number greater than 50. If you specify 0, Config uses the default. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutAggregationAuthorizationResponseSchema = z
  .object({
    AggregationAuthorization: AggregationAuthorizationSchema.and(
      z.any().openapi({ description: 'Returns an AggregationAuthorization object. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutAggregationAuthorizationResponse')

const TagsListSchema = z.array(TagSchema).min(0).max(50).openapi('TagsList')

const PutAggregationAuthorizationRequestSchema = z
  .object({
    AuthorizedAccountId: AccountIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The 12-digit account ID of the account authorized to aggregate data.',
        }),
    ),
    AuthorizedAwsRegion: AwsRegionSchema.and(
      z.any().openapi({ description: 'The region authorized to collect aggregated data.' }),
    ),
    Tags: TagsListSchema.and(
      z.any().openapi({ description: 'An array of tag object.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AuthorizedAccountId', 'AuthorizedAwsRegion'],
    title: 'PutAggregationAuthorizationRequest',
  })
  .openapi('PutAggregationAuthorizationRequest')

const PutConfigRuleRequestSchema = z
  .object({
    ConfigRule: ConfigRuleSchema.and(
      z.any().openapi({ description: 'The rule that you want to add to your account.' }),
    ),
    Tags: TagsListSchema.and(
      z.any().openapi({ description: 'An array of tag object.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConfigRule'], title: 'PutConfigRuleRequest' })
  .openapi('PutConfigRuleRequest')

const MaxNumberOfConfigRulesExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfConfigRulesExceededException')

const PutConfigurationAggregatorResponseSchema = z
  .object({
    ConfigurationAggregator: ConfigurationAggregatorSchema.and(
      z.any().openapi({ description: 'Returns a ConfigurationAggregator object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutConfigurationAggregatorResponse')

const PutConfigurationAggregatorRequestSchema = z
  .object({
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    AccountAggregationSources: AccountAggregationSourceListSchema.and(
      z.any().openapi({ description: 'A list of AccountAggregationSource object. ' }),
    ).exactOptional(),
    OrganizationAggregationSource: OrganizationAggregationSourceSchema.and(
      z.any().openapi({ description: 'An OrganizationAggregationSource object.' }),
    ).exactOptional(),
    Tags: TagsListSchema.and(
      z.any().openapi({ description: 'An array of tag object.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationAggregatorName'],
    title: 'PutConfigurationAggregatorRequest',
  })
  .openapi('PutConfigurationAggregatorRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InvalidRoleExceptionSchema = z.any().openapi('InvalidRoleException')

const NoAvailableOrganizationExceptionSchema = z.any().openapi('NoAvailableOrganizationException')

const OrganizationAllFeaturesNotEnabledExceptionSchema = z
  .any()
  .openapi('OrganizationAllFeaturesNotEnabledException')

const PutConfigurationRecorderRequestSchema = z
  .object({
    ConfigurationRecorder: ConfigurationRecorderSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration recorder object that records each configuration change made to the resources.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationRecorder'],
    title: 'PutConfigurationRecorderRequest',
    description: 'The input for the <a>PutConfigurationRecorder</a> action.',
  })
  .openapi('PutConfigurationRecorderRequest')

const MaxNumberOfConfigurationRecordersExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfConfigurationRecordersExceededException')

const InvalidConfigurationRecorderNameExceptionSchema = z
  .any()
  .openapi('InvalidConfigurationRecorderNameException')

const InvalidRecordingGroupExceptionSchema = z.any().openapi('InvalidRecordingGroupException')

const PutConformancePackResponseSchema = z
  .object({
    ConformancePackArn: ConformancePackArnSchema.and(
      z.any().openapi({ description: 'ARN of the conformance pack.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutConformancePackResponse')

const TemplateS3UriSchema = z
  .string()
  .regex(/s3:\/\/.*/)
  .min(1)
  .max(1024)
  .openapi('TemplateS3Uri')

const TemplateBodySchema = z.string().min(1).max(51200).openapi('TemplateBody')

const PutConformancePackRequestSchema = z
  .object({
    ConformancePackName: ConformancePackNameSchema.and(
      z
        .any()
        .openapi({ description: 'The unique name of the conformance pack you want to deploy.' }),
    ),
    TemplateS3Uri: TemplateS3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The location of the file containing the template body (<code>s3://bucketname/prefix</code>). The uri must point to a conformance pack template (max size: 300 KB) that is located in an Amazon S3 bucket in the same Region as the conformance pack. </p> <note> <p>You must have access to read Amazon S3 bucket.</p> </note>',
        }),
    ).exactOptional(),
    TemplateBody: TemplateBodySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string containing the full conformance pack template body. The structure containing the template body has a minimum length of 1 byte and a maximum length of 51,200 bytes.</p> <note> <p>You can use a YAML template with two resource types: Config rule (<code>AWS::Config::ConfigRule</code>) and remediation action (<code>AWS::Config::RemediationConfiguration</code>).</p> </note>',
        }),
    ).exactOptional(),
    DeliveryS3Bucket: DeliveryS3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    DeliveryS3KeyPrefix: DeliveryS3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the Amazon S3 bucket. </p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    ConformancePackInputParameters: ConformancePackInputParametersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackInputParameter</code> objects.' }),
    ).exactOptional(),
    TemplateSSMDocumentDetails: TemplateSSMDocumentDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'An object of type <code>TemplateSSMDocumentDetails</code>, which contains the name or the Amazon Resource Name (ARN) of the Amazon Web Services Systems Manager document (SSM document) and the version of the SSM document that is used to create a conformance pack.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ConformancePackName'], title: 'PutConformancePackRequest' })
  .openapi('PutConformancePackRequest')

const ConformancePackTemplateValidationExceptionSchema = z
  .any()
  .openapi('ConformancePackTemplateValidationException')

const MaxNumberOfConformancePacksExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfConformancePacksExceededException')

const PutDeliveryChannelRequestSchema = z
  .object({
    DeliveryChannel: DeliveryChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration delivery channel object that delivers the configuration information to an Amazon S3 bucket and to an Amazon SNS topic.',
        }),
    ),
  })
  .openapi({
    required: ['DeliveryChannel'],
    title: 'PutDeliveryChannelRequest',
    description: 'The input for the <a>PutDeliveryChannel</a> action.',
  })
  .openapi('PutDeliveryChannelRequest')

const MaxNumberOfDeliveryChannelsExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfDeliveryChannelsExceededException')

const InvalidDeliveryChannelNameExceptionSchema = z
  .any()
  .openapi('InvalidDeliveryChannelNameException')

const NoSuchBucketExceptionSchema = z.any().openapi('NoSuchBucketException')

const InvalidS3KeyPrefixExceptionSchema = z.any().openapi('InvalidS3KeyPrefixException')

const InvalidS3KmsKeyArnExceptionSchema = z.any().openapi('InvalidS3KmsKeyArnException')

const InvalidSNSTopicARNExceptionSchema = z.any().openapi('InvalidSNSTopicARNException')

const InsufficientDeliveryPolicyExceptionSchema = z
  .any()
  .openapi('InsufficientDeliveryPolicyException')

const OrderingTimestampSchema = z.iso.datetime({ offset: true }).openapi('OrderingTimestamp')

const EvaluationSchema = z
  .object({
    ComplianceResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({ description: 'The type of Amazon Web Services resource that was evaluated.' }),
    ),
    ComplianceResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Indicates whether the Amazon Web Services resource complies with the Config rule that it was evaluated against.</p> <p>For the <code>Evaluation</code> data type, Config supports only the <code>COMPLIANT</code>, <code>NON_COMPLIANT</code>, and <code>NOT_APPLICABLE</code> values. Config does not support the <code>INSUFFICIENT_DATA</code> value for this data type.</p> <p>Similarly, Config does not accept <code>INSUFFICIENT_DATA</code> as the value for <code>ComplianceType</code> from a <code>PutEvaluations</code> request. For example, an Lambda function for a custom Config rule cannot pass an <code>INSUFFICIENT_DATA</code> value to Config.</p>',
        }),
    ),
    Annotation: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary information about how the evaluation determined the compliance.',
        }),
    ).exactOptional(),
    OrderingTimestamp: OrderingTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time of the event in Config that triggered the evaluation. For event-based evaluations, the time indicates when Config created the configuration item that triggered the evaluation. For periodic evaluations, the time indicates when Config triggered the evaluation at the frequency that you specified (for example, every 24 hours).',
        }),
    ),
  })
  .openapi({
    required: [
      'ComplianceResourceType',
      'ComplianceResourceId',
      'ComplianceType',
      'OrderingTimestamp',
    ],
    description:
      'Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.',
  })
  .openapi('Evaluation')

const EvaluationsSchema = z.array(EvaluationSchema).min(0).max(100).openapi('Evaluations')

const PutEvaluationsResponseSchema = z
  .object({
    FailedEvaluations: EvaluationsSchema.and(
      z.any().openapi({ description: 'Requests that failed because of a client or server error.' }),
    ).exactOptional(),
  })
  .openapi({ description: '<p/>', required: [] })
  .openapi('PutEvaluationsResponse')

const PutEvaluationsRequestSchema = z
  .object({
    Evaluations: EvaluationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The assessments that the Lambda function performs. Each evaluation identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that invokes the Lambda function.',
        }),
    ).exactOptional(),
    ResultToken: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'An encrypted token that associates an evaluation with an Config rule. Identifies the rule and the event that triggered the evaluation.',
        }),
    ),
    TestMode: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Use this parameter to specify a test run for <code>PutEvaluations</code>. You can verify whether your Lambda function will deliver evaluation results to Config. No updates occur to your existing evaluations, and evaluation results are not sent to Config.</p> <note> <p>When <code>TestMode</code> is <code>true</code>, <code>PutEvaluations</code> doesn't require a valid value for the <code>ResultToken</code> parameter, but the value cannot be null.</p> </note>",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ResultToken'], title: 'PutEvaluationsRequest', description: '<p/>' })
  .openapi('PutEvaluationsRequest')

const InvalidResultTokenExceptionSchema = z.any().openapi('InvalidResultTokenException')

const PutExternalEvaluationResponseSchema = z.object({}).openapi('PutExternalEvaluationResponse')

const ExternalEvaluationSchema = z
  .object({
    ComplianceResourceType: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The evaluated compliance resource type. Config accepts <code>AWS::::Account</code> resource type.',
        }),
    ),
    ComplianceResourceId: BaseResourceIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The evaluated compliance resource ID. Config accepts only Amazon Web Services account ID.',
        }),
    ),
    ComplianceType: ComplianceTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The compliance of the Amazon Web Services resource. The valid values are <code>COMPLIANT, NON_COMPLIANT, </code> and <code>NOT_APPLICABLE</code>.',
        }),
    ),
    Annotation: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary information about the reason of compliance. For example, this task was completed on a specific date.',
        }),
    ).exactOptional(),
    OrderingTimestamp: OrderingTimestampSchema.and(
      z.any().openapi({ description: 'The time when the compliance was recorded. ' }),
    ),
  })
  .openapi({
    required: [
      'ComplianceResourceType',
      'ComplianceResourceId',
      'ComplianceType',
      'OrderingTimestamp',
    ],
    description:
      'Identifies an Amazon Web Services resource and indicates whether it complies with the Config rule that it was evaluated against.',
  })
  .openapi('ExternalEvaluation')

const PutExternalEvaluationRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name of the Config rule.' }),
    ),
    ExternalEvaluation: ExternalEvaluationSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>ExternalEvaluation</code> object that provides details about compliance.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigRuleName', 'ExternalEvaluation'],
    title: 'PutExternalEvaluationRequest',
  })
  .openapi('PutExternalEvaluationRequest')

const PutOrganizationConfigRuleResponseSchema = z
  .object({
    OrganizationConfigRuleArn: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of an organization Config rule.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutOrganizationConfigRuleResponse')

const OrganizationCustomPolicyRuleMetadataSchema = z
  .object({
    Description: StringWithCharLimit256Min0Schema.and(
      z
        .any()
        .openapi({
          description:
            'The description that you provide for your organization Config Custom Policy rule.',
        }),
    ).exactOptional(),
    OrganizationConfigRuleTriggerTypes: OrganizationConfigRuleTriggerTypeNoSNsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of notification that initiates Config to run an evaluation for a rule. For Config Custom Policy rules, Config supports change-initiated notification types:</p> <ul> <li> <p> <code>ConfigurationItemChangeNotification</code> - Initiates an evaluation when Config delivers a configuration item as a result of a resource change.</p> </li> <li> <p> <code>OversizedConfigurationItemChangeNotification</code> - Initiates an evaluation when Config delivers an oversized configuration item. Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.</p> </li> </ul>',
        }),
    ).exactOptional(),
    InputParameters: StringWithCharLimit2048Schema.and(
      z
        .any()
        .openapi({
          description:
            'A string, in JSON format, that is passed to your organization Config Custom Policy rule.',
        }),
    ).exactOptional(),
    MaximumExecutionFrequency: MaximumExecutionFrequencySchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum frequency with which Config runs evaluations for a rule. Your Config Custom Policy rule is triggered when Config delivers the configuration snapshot. For more information, see <a>ConfigSnapshotDeliveryProperties</a>.',
        }),
    ).exactOptional(),
    ResourceTypesScope: ResourceTypesScopeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of the Amazon Web Services resource that was evaluated.',
        }),
    ).exactOptional(),
    ResourceIdScope: StringWithCharLimit768Schema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Amazon Web Services resource that was evaluated.' }),
    ).exactOptional(),
    TagKeyScope: StringWithCharLimit128Schema.and(
      z
        .any()
        .openapi({
          description:
            'One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.',
        }),
    ).exactOptional(),
    TagValueScope: StringWithCharLimit256Schema.and(
      z
        .any()
        .openapi({
          description:
            'The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).',
        }),
    ).exactOptional(),
    PolicyRuntime: PolicyRuntimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The runtime system for your organization Config Custom Policy rules. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the <a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>.',
        }),
    ),
    PolicyText: PolicyTextSchema.and(
      z
        .any()
        .openapi({
          description:
            'The policy definition containing the logic for your organization Config Custom Policy rule.',
        }),
    ),
    DebugLogDeliveryAccounts: DebugLogDeliveryAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of accounts that you can enable debug logging for your organization Config Custom Policy rule. List is null when debug logging is enabled for all accounts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyRuntime', 'PolicyText'],
    description:
      "An object that specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.",
  })
  .openapi('OrganizationCustomPolicyRuleMetadata')

const PutOrganizationConfigRuleRequestSchema = z
  .object({
    OrganizationConfigRuleName: OrganizationConfigRuleNameSchema.and(
      z.any().openapi({ description: 'The name that you assign to an organization Config rule.' }),
    ),
    OrganizationManagedRuleMetadata: OrganizationManagedRuleMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>OrganizationManagedRuleMetadata</code> object. This object specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.',
        }),
    ).exactOptional(),
    OrganizationCustomRuleMetadata: OrganizationCustomRuleMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'An <code>OrganizationCustomRuleMetadata</code> object. This object specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.',
        }),
    ).exactOptional(),
    ExcludedAccounts: ExcludedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A comma-separated list of accounts that you want to exclude from an organization Config rule.',
        }),
    ).exactOptional(),
    OrganizationCustomPolicyRuleMetadata: OrganizationCustomPolicyRuleMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            "An <code>OrganizationCustomPolicyRuleMetadata</code> object. This object specifies metadata for your organization's Config Custom Policy rule. The metadata includes the runtime system in use, which accounts have debug logging enabled, and other custom rule metadata, such as resource type, resource ID of Amazon Web Services resource, and organization trigger types that initiate Config to evaluate Amazon Web Services resources against a rule.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['OrganizationConfigRuleName'], title: 'PutOrganizationConfigRuleRequest' })
  .openapi('PutOrganizationConfigRuleRequest')

const MaxNumberOfOrganizationConfigRulesExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfOrganizationConfigRulesExceededException')

const PutOrganizationConformancePackResponseSchema = z
  .object({
    OrganizationConformancePackArn: StringWithCharLimit256Schema.and(
      z.any().openapi({ description: 'ARN of the organization conformance pack.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutOrganizationConformancePackResponse')

const PutOrganizationConformancePackRequestSchema = z
  .object({
    OrganizationConformancePackName: OrganizationConformancePackNameSchema.and(
      z
        .any()
        .openapi({ description: 'Name of the organization conformance pack you want to create.' }),
    ),
    TemplateS3Uri: TemplateS3UriSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Location of file containing the template body. The uri must point to the conformance pack template (max size: 300 KB).</p> <note> <p>You must have access to read Amazon S3 bucket.</p> </note>',
        }),
    ).exactOptional(),
    TemplateBody: TemplateBodySchema.and(
      z
        .any()
        .openapi({
          description:
            'A string containing full conformance pack template body. Structure containing the template body with a minimum length of 1 byte and a maximum length of 51,200 bytes.',
        }),
    ).exactOptional(),
    DeliveryS3Bucket: DeliveryS3BucketSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the Amazon S3 bucket where Config stores conformance pack templates.</p> <note> <p>This field is optional. If used, it must be prefixed with <code>awsconfigconforms</code>.</p> </note>',
        }),
    ).exactOptional(),
    DeliveryS3KeyPrefix: DeliveryS3KeyPrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for the Amazon S3 bucket.</p> <note> <p>This field is optional.</p> </note>',
        }),
    ).exactOptional(),
    ConformancePackInputParameters: ConformancePackInputParametersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of <code>ConformancePackInputParameter</code> objects.' }),
    ).exactOptional(),
    ExcludedAccounts: ExcludedAccountsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Amazon Web Services accounts to be excluded from an organization conformance pack while deploying a conformance pack.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['OrganizationConformancePackName'],
    title: 'PutOrganizationConformancePackRequest',
  })
  .openapi('PutOrganizationConformancePackRequest')

const MaxNumberOfOrganizationConformancePacksExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfOrganizationConformancePacksExceededException')

const OrganizationConformancePackTemplateValidationExceptionSchema = z
  .any()
  .openapi('OrganizationConformancePackTemplateValidationException')

const FailedRemediationBatchSchema = z
  .object({
    FailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns a failure message. For example, the resource is already compliant.',
        }),
    ).exactOptional(),
    FailedItems: RemediationConfigurationsSchema.and(
      z.any().openapi({ description: 'Returns remediation configurations of the failed items.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'List of each of the failed remediations with specific reasons.',
    required: [],
  })
  .openapi('FailedRemediationBatch')

const FailedRemediationBatchesSchema = z
  .array(FailedRemediationBatchSchema)
  .openapi('FailedRemediationBatches')

const PutRemediationConfigurationsResponseSchema = z
  .object({
    FailedBatches: FailedRemediationBatchesSchema.and(
      z.any().openapi({ description: 'Returns a list of failed remediation batch objects.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRemediationConfigurationsResponse')

const PutRemediationConfigurationsRequestSchema = z
  .object({
    RemediationConfigurations: RemediationConfigurationsSchema.and(
      z.any().openapi({ description: 'A list of remediation configuration objects.' }),
    ),
  })
  .openapi({
    required: ['RemediationConfigurations'],
    title: 'PutRemediationConfigurationsRequest',
  })
  .openapi('PutRemediationConfigurationsRequest')

const FailedRemediationExceptionBatchSchema = z
  .object({
    FailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns a failure message. For example, the auto-remediation has failed.',
        }),
    ).exactOptional(),
    FailedItems: RemediationExceptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns remediation exception resource key object of the failed items.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'List of each of the failed remediation exceptions with specific reasons.',
    required: [],
  })
  .openapi('FailedRemediationExceptionBatch')

const FailedRemediationExceptionBatchesSchema = z
  .array(FailedRemediationExceptionBatchSchema)
  .openapi('FailedRemediationExceptionBatches')

const PutRemediationExceptionsResponseSchema = z
  .object({
    FailedBatches: FailedRemediationExceptionBatchesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returns a list of failed remediation exceptions batch objects. Each object in the batch consists of a list of failed items and failure messages.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRemediationExceptionsResponse')

const PutRemediationExceptionsRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the Config rule for which you want to create remediation exception.',
        }),
    ),
    ResourceKeys: RemediationExceptionResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'An exception list of resource exception keys to be processed with the current request. Config adds exception for each resource key. For example, Config adds 3 exceptions for 3 resource keys. ',
        }),
    ),
    Message: StringWithCharLimit1024Schema.and(
      z.any().openapi({ description: 'The message contains an explanation of the exception.' }),
    ).exactOptional(),
    ExpirationTime: DateSchema.and(
      z
        .any()
        .openapi({
          description: 'The exception is automatically deleted after the expiration date.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigRuleName', 'ResourceKeys'],
    title: 'PutRemediationExceptionsRequest',
  })
  .openapi('PutRemediationExceptionsRequest')

const SchemaVersionIdSchema = z
  .string()
  .regex(/[A-Za-z0-9-]+/)
  .min(1)
  .max(128)
  .openapi('SchemaVersionId')

const PutResourceConfigRequestSchema = z
  .object({
    ResourceType: ResourceTypeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of the resource. The custom resource type must be registered with CloudFormation. </p> <note> <p>You cannot use the organization names “amzn”, “amazon”, “alexa”, “custom” with custom resource types. It is the first part of the ResourceType up to the first ::.</p> </note>',
        }),
    ),
    SchemaVersionId: SchemaVersionIdSchema.and(
      z
        .any()
        .openapi({
          description: 'Version of the schema registered for the ResourceType in CloudFormation.',
        }),
    ),
    ResourceId: ResourceIdSchema.and(
      z.any().openapi({ description: 'Unique identifier of the resource.' }),
    ),
    ResourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'Name of the resource.' }),
    ).exactOptional(),
    Configuration: ConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The configuration object of the resource in valid JSON format. It must match the schema registered with CloudFormation.</p> <note> <p>The configuration JSON must not exceed 64 KB.</p> </note>',
        }),
    ),
    Tags: TagsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Tags associated with the resource.</p> <note> <p>This field is not to be confused with the Amazon Web Services-wide tag feature for Amazon Web Services resources. Tags for <code>PutResourceConfig</code> are tags that you supply for the configuration items of your custom resources.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceType', 'SchemaVersionId', 'ResourceId', 'Configuration'],
    title: 'PutResourceConfigRequest',
  })
  .openapi('PutResourceConfigRequest')

const MaxActiveResourcesExceededExceptionSchema = z
  .any()
  .openapi('MaxActiveResourcesExceededException')

const PutRetentionConfigurationResponseSchema = z
  .object({
    RetentionConfiguration: RetentionConfigurationSchema.and(
      z.any().openapi({ description: 'Returns a retention configuration object.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutRetentionConfigurationResponse')

const PutRetentionConfigurationRequestSchema = z
  .object({
    RetentionPeriodInDays: RetentionPeriodInDaysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Number of days Config stores your historical information.</p> <note> <p>Currently, only applicable to the configuration item history.</p> </note>',
        }),
    ),
  })
  .openapi({ required: ['RetentionPeriodInDays'], title: 'PutRetentionConfigurationRequest' })
  .openapi('PutRetentionConfigurationRequest')

const MaxNumberOfRetentionConfigurationsExceededExceptionSchema = z
  .any()
  .openapi('MaxNumberOfRetentionConfigurationsExceededException')

const PutStoredQueryResponseSchema = z
  .object({
    QueryArn: QueryArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'Amazon Resource Name (ARN) of the query. For example, arn:partition:service:region:account-id:resource-type/resource-name/resource-id.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutStoredQueryResponse')

const PutStoredQueryRequestSchema = z
  .object({
    StoredQuery: StoredQuerySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A list of <code>StoredQuery</code> objects. The mandatory fields are <code>QueryName</code> and <code>Expression</code>.</p> <note> <p>When you are creating a query, you must provide a query name and an expression. When you are updating a query, you must provide a query name but updating the description is optional.</p> </note>',
        }),
    ),
    Tags: TagsListSchema.and(
      z.any().openapi({ description: 'A list of <code>Tags</code> object.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['StoredQuery'], title: 'PutStoredQueryRequest' })
  .openapi('PutStoredQueryRequest')

const TooManyTagsExceptionSchema = z.any().openapi('TooManyTagsException')

const ResourceConcurrentModificationExceptionSchema = z
  .any()
  .openapi('ResourceConcurrentModificationException')

const ResultsSchema = z.array(StringSchema).openapi('Results')

const FieldNameSchema = z.string().openapi('FieldName')

const FieldInfoSchema = z
  .object({
    Name: FieldNameSchema.and(
      z.any().openapi({ description: 'Name of the field.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the fields such as name of the field.', required: [] })
  .openapi('FieldInfo')

const FieldInfoListSchema = z.array(FieldInfoSchema).openapi('FieldInfoList')

const QueryInfoSchema = z
  .object({
    SelectFields: FieldInfoListSchema.and(
      z.any().openapi({ description: 'Returns a <code>FieldInfo</code> object.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the query.', required: [] })
  .openapi('QueryInfo')

const SelectAggregateResourceConfigResponseSchema = z
  .object({
    Results: ResultsSchema.and(
      z.any().openapi({ description: 'Returns the results for the SQL query.' }),
    ).exactOptional(),
    QueryInfo: QueryInfoSchema.exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectAggregateResourceConfigResponse')

const ExpressionSchema = z.string().min(1).max(4096).openapi('Expression')

const SelectAggregateResourceConfigRequestSchema = z
  .object({
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The SQL query SELECT command. ' }),
    ),
    ConfigurationAggregatorName: ConfigurationAggregatorNameSchema.and(
      z.any().openapi({ description: 'The name of the configuration aggregator.' }),
    ),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of query results returned on each page. ' }),
    ).exactOptional(),
    MaxResults: LimitSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of query results returned on each page. Config also allows the Limit request parameter.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The nextToken string returned in a previous request that you use to request the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Expression', 'ConfigurationAggregatorName'],
    title: 'SelectAggregateResourceConfigRequest',
  })
  .openapi('SelectAggregateResourceConfigRequest')

const InvalidExpressionExceptionSchema = z.any().openapi('InvalidExpressionException')

const SelectResourceConfigResponseSchema = z
  .object({
    Results: ResultsSchema.and(
      z.any().openapi({ description: 'Returns the results for the SQL query.' }),
    ).exactOptional(),
    QueryInfo: QueryInfoSchema.and(
      z.any().openapi({ description: 'Returns the <code>QueryInfo</code> object.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SelectResourceConfigResponse')

const SelectResourceConfigRequestSchema = z
  .object({
    Expression: ExpressionSchema.and(
      z.any().openapi({ description: 'The SQL query <code>SELECT</code> command.' }),
    ),
    Limit: LimitSchema.and(
      z
        .any()
        .openapi({ description: 'The maximum number of query results returned on each page. ' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>nextToken</code> string returned in a previous request that you use to request the next page of results in a paginated response. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Expression'], title: 'SelectResourceConfigRequest' })
  .openapi('SelectResourceConfigRequest')

const StartConfigRulesEvaluationResponseSchema = z
  .object({})
  .openapi({
    description: 'The output when you start the evaluation for the specified Config rule.',
  })
  .openapi('StartConfigRulesEvaluationResponse')

const ReevaluateConfigRuleNamesSchema = z
  .array(ConfigRuleNameSchema)
  .min(1)
  .max(25)
  .openapi('ReevaluateConfigRuleNames')

const StartConfigRulesEvaluationRequestSchema = z
  .object({
    ConfigRuleNames: ReevaluateConfigRuleNamesSchema.and(
      z
        .any()
        .openapi({
          description: 'The list of names of Config rules that you want to run evaluations for.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'StartConfigRulesEvaluationRequest', description: '<p/>', required: [] })
  .openapi('StartConfigRulesEvaluationRequest')

const StartConfigurationRecorderRequestSchema = z
  .object({
    ConfigurationRecorderName: RecorderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the recorder object that records each configuration change made to the resources.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationRecorderName'],
    title: 'StartConfigurationRecorderRequest',
    description: 'The input for the <a>StartConfigurationRecorder</a> action.',
  })
  .openapi('StartConfigurationRecorderRequest')

const NoAvailableDeliveryChannelExceptionSchema = z
  .any()
  .openapi('NoAvailableDeliveryChannelException')

const StartRemediationExecutionResponseSchema = z
  .object({
    FailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Returns a failure message. For example, the resource is already compliant.',
        }),
    ).exactOptional(),
    FailedItems: ResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'For resources that have failed to start execution, the API returns a resource key object.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartRemediationExecutionResponse')

const StartRemediationExecutionRequestSchema = z
  .object({
    ConfigRuleName: ConfigRuleNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of names of Config rules that you want to run remediation execution for.',
        }),
    ),
    ResourceKeys: ResourceKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of resource keys to be processed with the current request. Each element in the list consists of the resource type and resource ID. ',
        }),
    ),
  })
  .openapi({
    required: ['ConfigRuleName', 'ResourceKeys'],
    title: 'StartRemediationExecutionRequest',
  })
  .openapi('StartRemediationExecutionRequest')

const StartResourceEvaluationResponseSchema = z
  .object({
    ResourceEvaluationId: ResourceEvaluationIdSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique ResourceEvaluationId that is associated with a single execution.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartResourceEvaluationResponse')

const EvaluationTimeoutSchema = z.int().min(0).max(3600).openapi('EvaluationTimeout')

const ClientTokenSchema = z.string().min(64).max(256).openapi('ClientToken')

const StartResourceEvaluationRequestSchema = z
  .object({
    ResourceDetails: ResourceDetailsSchema.and(
      z.any().openapi({ description: 'Returns a <code>ResourceDetails</code> object.' }),
    ),
    EvaluationContext: EvaluationContextSchema.and(
      z.any().openapi({ description: 'Returns an <code>EvaluationContext</code> object.' }),
    ).exactOptional(),
    EvaluationMode: EvaluationModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The mode of an evaluation. The valid values for this API are <code>DETECTIVE</code> and <code>PROACTIVE</code>.',
        }),
    ),
    EvaluationTimeout: EvaluationTimeoutSchema.and(
      z
        .any()
        .openapi({
          description:
            'The timeout for an evaluation. The default is 900 seconds. You cannot specify a number greater than 3600. If you specify 0, Config uses the default.',
        }),
    ).exactOptional(),
    ClientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A client token is a unique, case-sensitive string of up to 64 ASCII characters. To make an idempotent API request using one of these actions, specify a client token in the request.</p> <note> <p>Avoid reusing the same client token for other API requests. If you retry a request that completed successfully using the same client token and the same parameters, the retry succeeds without performing any further actions. If you retry a successful request using the same client token, but one or more of the parameters are different, other than the Region or Availability Zone, the retry fails with an IdempotentParameterMismatch error.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ResourceDetails', 'EvaluationMode'],
    title: 'StartResourceEvaluationRequest',
  })
  .openapi('StartResourceEvaluationRequest')

const IdempotentParameterMismatchSchema = z.any().openapi('IdempotentParameterMismatch')

const StopConfigurationRecorderRequestSchema = z
  .object({
    ConfigurationRecorderName: RecorderNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the recorder object that records each configuration change made to the resources.',
        }),
    ),
  })
  .openapi({
    required: ['ConfigurationRecorderName'],
    title: 'StopConfigurationRecorderRequest',
    description: 'The input for the <a>StopConfigurationRecorder</a> action.',
  })
  .openapi('StopConfigurationRecorderRequest')

const TagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.',
        }),
    ),
    Tags: TagListSchema.and(z.any().openapi({ description: 'An array of tag object.' })),
  })
  .openapi({ required: ['ResourceArn', 'Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const UntagResourceRequestSchema = z
  .object({
    ResourceArn: AmazonResourceNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are <code>ConfigRule</code>, <code>ConfigurationAggregator</code> and <code>AggregatorAuthorization</code>.',
        }),
    ),
    TagKeys: TagKeyListSchema.and(
      z.any().openapi({ description: 'The keys of the tags to be removed.' }),
    ),
  })
  .openapi({ required: ['ResourceArn', 'TagKeys'], title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const NameSchema = z.string().openapi('Name')

const SupplementaryConfigurationNameSchema = z.string().openapi('SupplementaryConfigurationName')

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

export const postXAmzTargetStarlingDoveServiceBatchGetAggregateResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.BatchGetAggregateResourceConfig',
  description:
    '<p>Returns the current configuration items for resources that are present in your Config aggregator. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty <code>unprocessedResourceIdentifiers</code> list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return tags and relationships.</p> </li> </ul> </note>',
  operationId: 'BatchGetAggregateResourceConfig',
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
        .literal('StarlingDoveService.BatchGetAggregateResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.BatchGetAggregateResourceConfig'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetAggregateResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetAggregateResourceConfigResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceBatchGetResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.BatchGetResourceConfig',
  description:
    '<p>Returns the <code>BaseConfigurationItem</code> for one or more requested resources. The operation also returns a list of resources that are not processed in the current request. If there are no unprocessed resources, the operation returns an empty unprocessedResourceKeys list. </p> <note> <ul> <li> <p>The API does not return results for deleted resources.</p> </li> <li> <p> The API does not return any tags for the requested resources. This information is filtered out of the supplementaryConfiguration section of the API response.</p> </li> </ul> </note>',
  operationId: 'BatchGetResourceConfig',
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
        .literal('StarlingDoveService.BatchGetResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.BatchGetResourceConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: BatchGetResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchGetResourceConfigResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteAggregationAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteAggregationAuthorization',
  description:
    'Deletes the authorization granted to the specified configuration aggregator account in a specified region.',
  operationId: 'DeleteAggregationAuthorization',
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
        .literal('StarlingDoveService.DeleteAggregationAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DeleteAggregationAuthorization'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAggregationAuthorizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteConfigRule',
  description:
    '<p>Deletes the specified Config rule and all of its evaluation results.</p> <p>Config sets the state of a rule to <code>DELETING</code> until the deletion is complete. You cannot update a rule while it is in this state. If you make a <code>PutConfigRule</code> or <code>DeleteConfigRule</code> request for the rule, you will receive a <code>ResourceInUseException</code>.</p> <p>You can check the state of a rule by using the <code>DescribeConfigRules</code> request.</p>',
  operationId: 'DeleteConfigRule',
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
        .literal('StarlingDoveService.DeleteConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteConfigRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteConfigurationAggregatorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationAggregator',
  description:
    'Deletes the specified configuration aggregator and the aggregated data associated with the aggregator.',
  operationId: 'DeleteConfigurationAggregator',
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
        .literal('StarlingDoveService.DeleteConfigurationAggregator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteConfigurationAggregator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConfigurationAggregatorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteConfigurationRecorderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteConfigurationRecorder',
  description:
    '<p>Deletes the configuration recorder.</p> <p>After the configuration recorder is deleted, Config will not record resource configuration changes until you create a new configuration recorder.</p> <p>This action does not delete the configuration information that was previously recorded. You will be able to access the previously recorded information by using the <code>GetResourceConfigHistory</code> action, but you will not be able to access this information in the Config console until you create a new configuration recorder.</p>',
  operationId: 'DeleteConfigurationRecorder',
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
        .literal('StarlingDoveService.DeleteConfigurationRecorder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteConfigurationRecorder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConfigurationRecorderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConfigurationRecorderException',
      content: { 'application/json': { schema: NoSuchConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteConformancePackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteConformancePack',
  description:
    '<p>Deletes the specified conformance pack and all the Config rules, remediation actions, and all evaluation results within that conformance pack.</p> <p>Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete. You cannot update a conformance pack while it is in this state.</p>',
  operationId: 'DeleteConformancePack',
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
        .literal('StarlingDoveService.DeleteConformancePack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteConformancePack'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteConformancePackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConformancePackException',
      content: { 'application/json': { schema: NoSuchConformancePackExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteDeliveryChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteDeliveryChannel',
  description:
    '<p>Deletes the delivery channel.</p> <p>Before you can delete the delivery channel, you must stop the configuration recorder by using the <a>StopConfigurationRecorder</a> action.</p>',
  operationId: 'DeleteDeliveryChannel',
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
        .literal('StarlingDoveService.DeleteDeliveryChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteDeliveryChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteDeliveryChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchDeliveryChannelException',
      content: { 'application/json': { schema: NoSuchDeliveryChannelExceptionSchema } },
    },
    481: {
      description: 'LastDeliveryChannelDeleteFailedException',
      content: { 'application/json': { schema: LastDeliveryChannelDeleteFailedExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteEvaluationResultsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteEvaluationResults',
  description:
    'Deletes the evaluation results for the specified Config rule. You can specify one Config rule per request. After you delete the evaluation results, you can call the <a>StartConfigRulesEvaluation</a> API to start evaluating your Amazon Web Services resources against the rule.',
  operationId: 'DeleteEvaluationResults',
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
        .literal('StarlingDoveService.DeleteEvaluationResults')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteEvaluationResults'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteEvaluationResultsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteEvaluationResultsResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteOrganizationConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConfigRule',
  description:
    '<p>Deletes the specified organization Config rule and all of its evaluation results from all member accounts in that organization. </p> <p>Only a management account and a delegated administrator account can delete an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a rule to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a rule while it is in this state.</p>',
  operationId: 'DeleteOrganizationConfigRule',
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
        .literal('StarlingDoveService.DeleteOrganizationConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteOrganizationConfigRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteOrganizationConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchOrganizationConfigRuleException',
      content: { 'application/json': { schema: NoSuchOrganizationConfigRuleExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteOrganizationConformancePackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteOrganizationConformancePack',
  description:
    '<p>Deletes the specified organization conformance pack and all of the Config rules and remediation actions from all member accounts in that organization. </p> <p> Only a management account or a delegated administrator account can delete an organization conformance pack. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added.</p> <p>Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete. You cannot update a conformance pack while it is in this state. </p>',
  operationId: 'DeleteOrganizationConformancePack',
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
        .literal('StarlingDoveService.DeleteOrganizationConformancePack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DeleteOrganizationConformancePack'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteOrganizationConformancePackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchOrganizationConformancePackException',
      content: { 'application/json': { schema: NoSuchOrganizationConformancePackExceptionSchema } },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeletePendingAggregationRequestRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeletePendingAggregationRequest',
  description:
    'Deletes pending authorization requests for a specified aggregator account in a specified region.',
  operationId: 'DeletePendingAggregationRequest',
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
        .literal('StarlingDoveService.DeletePendingAggregationRequest')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DeletePendingAggregationRequest'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeletePendingAggregationRequestRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteRemediationConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteRemediationConfiguration',
  description: 'Deletes the remediation configuration.',
  operationId: 'DeleteRemediationConfiguration',
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
        .literal('StarlingDoveService.DeleteRemediationConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DeleteRemediationConfiguration'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRemediationConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRemediationConfigurationResponseSchema } },
    },
    480: {
      description: 'NoSuchRemediationConfigurationException',
      content: { 'application/json': { schema: NoSuchRemediationConfigurationExceptionSchema } },
    },
    481: {
      description: 'RemediationInProgressException',
      content: { 'application/json': { schema: RemediationInProgressExceptionSchema } },
    },
    482: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteRemediationExceptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteRemediationExceptions',
  description:
    '<p>Deletes one or more remediation exceptions mentioned in the resource keys.</p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note>',
  operationId: 'DeleteRemediationExceptions',
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
        .literal('StarlingDoveService.DeleteRemediationExceptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteRemediationExceptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRemediationExceptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteRemediationExceptionsResponseSchema } },
    },
    480: {
      description: 'NoSuchRemediationExceptionException',
      content: { 'application/json': { schema: NoSuchRemediationExceptionExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteResourceConfig',
  description:
    'Records the configuration state for a custom resource that has been deleted. This API records a new ConfigurationItem with a ResourceDeleted status. You can retrieve the ConfigurationItems recorded for this resource in your Config History. ',
  operationId: 'DeleteResourceConfig',
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
        .literal('StarlingDoveService.DeleteResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteResourceConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NoRunningConfigurationRecorderException',
      content: { 'application/json': { schema: NoRunningConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteRetentionConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteRetentionConfiguration',
  description: 'Deletes the retention configuration.',
  operationId: 'DeleteRetentionConfiguration',
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
        .literal('StarlingDoveService.DeleteRetentionConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteRetentionConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteRetentionConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'NoSuchRetentionConfigurationException',
      content: { 'application/json': { schema: NoSuchRetentionConfigurationExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeleteStoredQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeleteStoredQuery',
  description:
    'Deletes the stored query for a single Amazon Web Services account and a single Amazon Web Services Region.',
  operationId: 'DeleteStoredQuery',
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
        .literal('StarlingDoveService.DeleteStoredQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeleteStoredQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteStoredQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteStoredQueryResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDeliverConfigSnapshotRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DeliverConfigSnapshot',
  description:
    '<p>Schedules delivery of a configuration snapshot to the Amazon S3 bucket in the specified delivery channel. After the delivery has started, Config sends the following notifications using an Amazon SNS topic that you have specified.</p> <ul> <li> <p>Notification of the start of the delivery.</p> </li> <li> <p>Notification of the completion of the delivery, if the delivery was successfully completed.</p> </li> <li> <p>Notification of delivery failure, if the delivery failed.</p> </li> </ul>',
  operationId: 'DeliverConfigSnapshot',
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
        .literal('StarlingDoveService.DeliverConfigSnapshot')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DeliverConfigSnapshot'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeliverConfigSnapshotRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeliverConfigSnapshotResponseSchema } },
    },
    480: {
      description: 'NoSuchDeliveryChannelException',
      content: { 'application/json': { schema: NoSuchDeliveryChannelExceptionSchema } },
    },
    481: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
    482: {
      description: 'NoRunningConfigurationRecorderException',
      content: { 'application/json': { schema: NoRunningConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConfigRulesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConfigRules',
    description:
      '<p>Returns a list of compliant and noncompliant rules with the number of resources for compliant and noncompliant rules. Does not display rules that do not have compliance results. </p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>',
    operationId: 'DescribeAggregateComplianceByConfigRules',
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
          .literal('StarlingDoveService.DescribeAggregateComplianceByConfigRules')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeAggregateComplianceByConfigRules'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeAggregateComplianceByConfigRulesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeAggregateComplianceByConfigRulesResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeAggregateComplianceByConformancePacksRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeAggregateComplianceByConformancePacks',
    description:
      '<p>Returns a list of the conformance packs and their associated compliance status with the count of compliant and noncompliant Config rules within each conformance pack. Also returns the total rule count which includes compliant rules, noncompliant rules, and rules that cannot be evaluated due to insufficient data.</p> <note> <p>The results can return an empty result page, but if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>',
    operationId: 'DescribeAggregateComplianceByConformancePacks',
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
          .literal('StarlingDoveService.DescribeAggregateComplianceByConformancePacks')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeAggregateComplianceByConformancePacks'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': {
            schema: DescribeAggregateComplianceByConformancePacksRequestSchema,
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DescribeAggregateComplianceByConformancePacksResponseSchema,
          },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeAggregationAuthorizationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeAggregationAuthorizations',
  description:
    'Returns a list of authorizations granted to various aggregator accounts and regions.',
  operationId: 'DescribeAggregationAuthorizations',
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
        .literal('StarlingDoveService.DescribeAggregationAuthorizations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeAggregationAuthorizations'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeAggregationAuthorizationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAggregationAuthorizationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeComplianceByConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByConfigRule',
  description:
    "<p>Indicates whether the specified Config rules are compliant. If a rule is noncompliant, this action returns the number of Amazon Web Services resources that do not comply with the rule.</p> <p>A rule is compliant if all of the evaluated resources comply with it. It is noncompliant if any of these resources do not comply.</p> <p>If Config has no current evaluation results for the rule, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>",
  operationId: 'DescribeComplianceByConfigRule',
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
        .literal('StarlingDoveService.DescribeComplianceByConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeComplianceByConfigRule'],
            },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: DescribeComplianceByConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeComplianceByConfigRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeComplianceByResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeComplianceByResource',
  description:
    "<p>Indicates whether the specified Amazon Web Services resources are compliant. If a resource is noncompliant, this action returns the number of Config rules that the resource does not comply with.</p> <p>A resource is compliant if it complies with all the Config rules that evaluate it. It is noncompliant if it does not comply with one or more of these rules.</p> <p>If Config has no current evaluation results for the resource, it returns <code>INSUFFICIENT_DATA</code>. This result might indicate one of the following conditions about the rules that evaluate the resource:</p> <ul> <li> <p>Config has never invoked an evaluation for the rule. To check whether it has, use the <code>DescribeConfigRuleEvaluationStatus</code> action to get the <code>LastSuccessfulInvocationTime</code> and <code>LastFailedInvocationTime</code>.</p> </li> <li> <p>The rule's Lambda function is failing to send evaluation results to Config. Verify that the role that you assigned to your configuration recorder includes the <code>config:PutEvaluations</code> permission. If the rule is a custom rule, verify that the Lambda execution role includes the <code>config:PutEvaluations</code> permission.</p> </li> <li> <p>The rule's Lambda function has returned <code>NOT_APPLICABLE</code> for all evaluation results. This can occur if the resources were deleted or removed from the rule's scope.</p> </li> </ul>",
  operationId: 'DescribeComplianceByResource',
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
        .literal('StarlingDoveService.DescribeComplianceByResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeComplianceByResource'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeComplianceByResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeComplianceByResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConfigRuleEvaluationStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigRuleEvaluationStatus',
    description:
      'Returns status information for each of your Config managed rules. The status includes information such as the last time Config invoked the rule, the last time Config failed to invoke the rule, and the related error for the last failure.',
    operationId: 'DescribeConfigRuleEvaluationStatus',
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
          .literal('StarlingDoveService.DescribeConfigRuleEvaluationStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeConfigRuleEvaluationStatus'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeConfigRuleEvaluationStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeConfigRuleEvaluationStatusResponseSchema },
        },
      },
      480: {
        description: 'NoSuchConfigRuleException',
        content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
      },
      481: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetStarlingDoveServiceDescribeConfigRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigRules',
  description: 'Returns details about your Config rules.',
  operationId: 'DescribeConfigRules',
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
        .literal('StarlingDoveService.DescribeConfigRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeConfigRules'] },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: DescribeConfigRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigRulesResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorSourcesStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus',
    description:
      'Returns status information for sources within an aggregator. The status includes information about the last time Config verified authorization between the source account and an aggregator account. In case of a failure, the status contains the related error code or message. ',
    operationId: 'DescribeConfigurationAggregatorSourcesStatus',
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
          .literal('StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeConfigurationAggregatorSourcesStatus'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeConfigurationAggregatorSourcesStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: DescribeConfigurationAggregatorSourcesStatusResponseSchema,
          },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeConfigurationAggregatorsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationAggregators',
  description:
    'Returns the details of one or more configuration aggregators. If the configuration aggregator is not specified, this action returns the details for all the configuration aggregators associated with the account. ',
  operationId: 'DescribeConfigurationAggregators',
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
        .literal('StarlingDoveService.DescribeConfigurationAggregators')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeConfigurationAggregators'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeConfigurationAggregatorsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationAggregatorsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConfigurationRecorderStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorderStatus',
    description:
      '<p>Returns the current status of the specified configuration recorder as well as the status of the last recording event for the recorder. If a configuration recorder is not specified, this action returns the status of all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics.</p> </note>',
    operationId: 'DescribeConfigurationRecorderStatus',
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
          .literal('StarlingDoveService.DescribeConfigurationRecorderStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeConfigurationRecorderStatus'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DescribeConfigurationRecorderStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeConfigurationRecorderStatusResponseSchema },
        },
      },
      480: {
        description: 'NoSuchConfigurationRecorderException',
        content: { 'application/json': { schema: NoSuchConfigurationRecorderExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeConfigurationRecordersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConfigurationRecorders',
  description:
    '<p>Returns the details for the specified configuration recorders. If the configuration recorder is not specified, this action returns the details for all configuration recorders associated with the account.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> </note>',
  operationId: 'DescribeConfigurationRecorders',
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
        .literal('StarlingDoveService.DescribeConfigurationRecorders')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeConfigurationRecorders'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeConfigurationRecordersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConfigurationRecordersResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigurationRecorderException',
      content: { 'application/json': { schema: NoSuchConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConformancePackComplianceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackCompliance',
  description:
    '<p>Returns compliance details for each rule in that conformance pack.</p> <note> <p>You must provide exact rule names.</p> </note>',
  operationId: 'DescribeConformancePackCompliance',
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
        .literal('StarlingDoveService.DescribeConformancePackCompliance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeConformancePackCompliance'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeConformancePackComplianceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConformancePackComplianceResponseSchema } },
    },
    480: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'NoSuchConfigRuleInConformancePackException',
      content: { 'application/json': { schema: NoSuchConfigRuleInConformancePackExceptionSchema } },
    },
    484: {
      description: 'NoSuchConformancePackException',
      content: { 'application/json': { schema: NoSuchConformancePackExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConformancePackStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConformancePackStatus',
  description:
    '<p>Provides one or more conformance packs deployment status.</p> <note> <p>If there are no conformance packs then you will see an empty result.</p> </note>',
  operationId: 'DescribeConformancePackStatus',
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
        .literal('StarlingDoveService.DescribeConformancePackStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeConformancePackStatus'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeConformancePackStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConformancePackStatusResponseSchema } },
    },
    480: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeConformancePacksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeConformancePacks',
  description: 'Returns a list of one or more conformance packs.',
  operationId: 'DescribeConformancePacks',
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
        .literal('StarlingDoveService.DescribeConformancePacks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeConformancePacks'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeConformancePacksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeConformancePacksResponseSchema } },
    },
    480: {
      description: 'NoSuchConformancePackException',
      content: { 'application/json': { schema: NoSuchConformancePackExceptionSchema } },
    },
    481: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannelStatus',
  description:
    '<p>Returns the current status of the specified delivery channel. If a delivery channel is not specified, this action returns the current status of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>',
  operationId: 'DescribeDeliveryChannelStatus',
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
        .literal('StarlingDoveService.DescribeDeliveryChannelStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeDeliveryChannelStatus'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDeliveryChannelStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeliveryChannelStatusResponseSchema } },
    },
    480: {
      description: 'NoSuchDeliveryChannelException',
      content: { 'application/json': { schema: NoSuchDeliveryChannelExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeDeliveryChannelsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeDeliveryChannels',
  description:
    '<p>Returns details about the specified delivery channel. If a delivery channel is not specified, this action returns the details of all delivery channels associated with the account.</p> <note> <p>Currently, you can specify only one delivery channel per region in your account.</p> </note>',
  operationId: 'DescribeDeliveryChannels',
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
        .literal('StarlingDoveService.DescribeDeliveryChannels')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeDeliveryChannels'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeDeliveryChannelsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeDeliveryChannelsResponseSchema } },
    },
    480: {
      description: 'NoSuchDeliveryChannelException',
      content: { 'application/json': { schema: NoSuchDeliveryChannelExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRuleStatusesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRuleStatuses',
    description:
      '<p>Provides organization Config rule deployment status for an organization.</p> <note> <p>The status is not considered successful until organization Config rule is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> </note>',
    operationId: 'DescribeOrganizationConfigRuleStatuses',
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
          .literal('StarlingDoveService.DescribeOrganizationConfigRuleStatuses')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeOrganizationConfigRuleStatuses'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeOrganizationConfigRuleStatusesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeOrganizationConfigRuleStatusesResponseSchema },
        },
      },
      480: {
        description: 'NoSuchOrganizationConfigRuleException',
        content: { 'application/json': { schema: NoSuchOrganizationConfigRuleExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'OrganizationAccessDeniedException',
        content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeOrganizationConfigRulesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConfigRules',
  description:
    "<p>Returns a list of organization Config rules. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response.</p> <p>Limit and next token are not applicable if you specify organization Config rule names. It is only applicable, when you request all the organization Config rules.</p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>",
  operationId: 'DescribeOrganizationConfigRules',
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
        .literal('StarlingDoveService.DescribeOrganizationConfigRules')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeOrganizationConfigRules'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeOrganizationConfigRulesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOrganizationConfigRulesResponseSchema } },
    },
    480: {
      description: 'NoSuchOrganizationConfigRuleException',
      content: { 'application/json': { schema: NoSuchOrganizationConfigRuleExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    483: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePackStatusesRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePackStatuses',
    description:
      '<p>Provides organization conformance pack deployment status for an organization. </p> <note> <p>The status is not considered successful until organization conformance pack is successfully deployed in all the member accounts with an exception of excluded accounts.</p> <p>When you specify the limit and the next token, you receive a paginated response. Limit and next token are not applicable if you specify organization conformance pack names. They are only applicable, when you request all the organization conformance packs.</p> </note>',
    operationId: 'DescribeOrganizationConformancePackStatuses',
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
          .literal('StarlingDoveService.DescribeOrganizationConformancePackStatuses')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeOrganizationConformancePackStatuses'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeOrganizationConformancePackStatusesRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeOrganizationConformancePackStatusesResponseSchema },
        },
      },
      480: {
        description: 'NoSuchOrganizationConformancePackException',
        content: {
          'application/json': { schema: NoSuchOrganizationConformancePackExceptionSchema },
        },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'OrganizationAccessDeniedException',
        content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribeOrganizationConformancePacksRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeOrganizationConformancePacks',
    description:
      "<p>Returns a list of organization conformance packs. </p> <note> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you specify organization conformance packs names. They are only applicable, when you request all the organization conformance packs. </p> <p> <i>For accounts within an organzation</i> </p> <p>If you deploy an organizational rule or conformance pack in an organization administrator account, and then establish a delegated administrator and deploy an organizational rule or conformance pack in the delegated administrator account, you won't be able to see the organizational rule or conformance pack in the organization administrator account from the delegated administrator account or see the organizational rule or conformance pack in the delegated administrator account from organization administrator account. The <code>DescribeOrganizationConfigRules</code> and <code>DescribeOrganizationConformancePacks</code> APIs can only see and interact with the organization-related resource that were deployed from within the account calling those APIs.</p> </note>",
    operationId: 'DescribeOrganizationConformancePacks',
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
          .literal('StarlingDoveService.DescribeOrganizationConformancePacks')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeOrganizationConformancePacks'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeOrganizationConformancePacksRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeOrganizationConformancePacksResponseSchema },
        },
      },
      480: {
        description: 'NoSuchOrganizationConformancePackException',
        content: {
          'application/json': { schema: NoSuchOrganizationConformancePackExceptionSchema },
        },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      483: {
        description: 'OrganizationAccessDeniedException',
        content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceDescribePendingAggregationRequestsRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribePendingAggregationRequests',
    description: 'Returns a list of all pending aggregation requests.',
    operationId: 'DescribePendingAggregationRequests',
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
          .literal('StarlingDoveService.DescribePendingAggregationRequests')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribePendingAggregationRequests'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribePendingAggregationRequestsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribePendingAggregationRequestsResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetStarlingDoveServiceDescribeRemediationConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeRemediationConfigurations',
  description: 'Returns the details of one or more remediation configurations.',
  operationId: 'DescribeRemediationConfigurations',
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
        .literal('StarlingDoveService.DescribeRemediationConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeRemediationConfigurations'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRemediationConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRemediationConfigurationsResponseSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeRemediationExceptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExceptions',
  description:
    '<p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted. When you specify the limit and the next token, you receive a paginated response. </p> <note> <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> <p>When you specify the limit and the next token, you receive a paginated response. </p> <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p> </note>',
  operationId: 'DescribeRemediationExceptions',
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
        .literal('StarlingDoveService.DescribeRemediationExceptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.DescribeRemediationExceptions'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: DescribeRemediationExceptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRemediationExceptionsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceDescribeRemediationExecutionStatusRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.DescribeRemediationExecutionStatus',
    description:
      'Provides a detailed view of a Remediation Execution for a set of resources including state, timestamps for when steps for the remediation execution occur, and any error messages for steps that have failed. When you specify the limit and the next token, you receive a paginated response.',
    operationId: 'DescribeRemediationExecutionStatus',
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
          .literal('StarlingDoveService.DescribeRemediationExecutionStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.DescribeRemediationExecutionStatus'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: DescribeRemediationExecutionStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DescribeRemediationExecutionStatusResponseSchema },
        },
      },
      480: {
        description: 'NoSuchRemediationConfigurationException',
        content: { 'application/json': { schema: NoSuchRemediationConfigurationExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetStarlingDoveServiceDescribeRetentionConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.DescribeRetentionConfigurations',
  description:
    '<p>Returns the details of one or more retention configurations. If the retention configuration name is not specified, this action returns the details for all the retention configurations for that account.</p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>',
  operationId: 'DescribeRetentionConfigurations',
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
        .literal('StarlingDoveService.DescribeRetentionConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.DescribeRetentionConfigurations'],
            },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: DescribeRetentionConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRetentionConfigurationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'NoSuchRetentionConfigurationException',
      content: { 'application/json': { schema: NoSuchRetentionConfigurationExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetAggregateComplianceDetailsByConfigRuleRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetAggregateComplianceDetailsByConfigRule',
    description:
      '<p>Returns the evaluation results for the specified Config rule for a specific resource in a rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule. </p> <note> <p>The results can return an empty result page. But if you have a <code>nextToken</code>, the results are displayed on the next page.</p> </note>',
    operationId: 'GetAggregateComplianceDetailsByConfigRule',
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
          .literal('StarlingDoveService.GetAggregateComplianceDetailsByConfigRule')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetAggregateComplianceDetailsByConfigRule'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetAggregateComplianceDetailsByConfigRuleRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetAggregateComplianceDetailsByConfigRuleResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetAggregateConfigRuleComplianceSummaryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetAggregateConfigRuleComplianceSummary',
    description:
      '<p>Returns the number of compliant and noncompliant rules for one or more accounts and regions in an aggregator.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>',
    operationId: 'GetAggregateConfigRuleComplianceSummary',
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
          .literal('StarlingDoveService.GetAggregateConfigRuleComplianceSummary')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetAggregateConfigRuleComplianceSummary'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetAggregateConfigRuleComplianceSummaryRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetAggregateConfigRuleComplianceSummaryResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetAggregateConformancePackComplianceSummaryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetAggregateConformancePackComplianceSummary',
    description:
      '<p>Returns the count of compliant and noncompliant conformance packs across all Amazon Web Services accounts and Amazon Web Services Regions in an aggregator. You can filter based on Amazon Web Services account ID or Amazon Web Services Region.</p> <note> <p>The results can return an empty result page, but if you have a nextToken, the results are displayed on the next page.</p> </note>',
    operationId: 'GetAggregateConformancePackComplianceSummary',
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
          .literal('StarlingDoveService.GetAggregateConformancePackComplianceSummary')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetAggregateConformancePackComplianceSummary'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetAggregateConformancePackComplianceSummaryRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: GetAggregateConformancePackComplianceSummaryResponseSchema,
          },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetAggregateDiscoveredResourceCountsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetAggregateDiscoveredResourceCounts',
    description:
      '<p>Returns the resource counts across accounts and regions that are present in your Config aggregator. You can request the resource counts by providing filters and GroupByKey.</p> <p>For example, if the input contains accountID 12345678910 and region us-east-1 in filters, the API returns the count of resources in account ID 12345678910 and region us-east-1. If the input contains ACCOUNT_ID as a GroupByKey, the API returns resource counts for all source accounts that are present in your aggregator.</p>',
    operationId: 'GetAggregateDiscoveredResourceCounts',
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
          .literal('StarlingDoveService.GetAggregateDiscoveredResourceCounts')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetAggregateDiscoveredResourceCounts'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetAggregateDiscoveredResourceCountsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetAggregateDiscoveredResourceCountsResponseSchema },
        },
      },
      480: {
        description: 'ValidationException',
        content: { 'application/json': { schema: ValidationExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigurationAggregatorException',
        content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetAggregateResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetAggregateResourceConfig',
  description:
    'Returns configuration item that is aggregated for your specific resource in a specific source account and region.',
  operationId: 'GetAggregateResourceConfig',
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
        .literal('StarlingDoveService.GetAggregateResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetAggregateResourceConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAggregateResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAggregateResourceConfigResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
    482: {
      description: 'OversizedConfigurationItemException',
      content: { 'application/json': { schema: OversizedConfigurationItemExceptionSchema } },
    },
    483: {
      description: 'ResourceNotDiscoveredException',
      content: { 'application/json': { schema: ResourceNotDiscoveredExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetComplianceDetailsByConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByConfigRule',
  description:
    'Returns the evaluation results for the specified Config rule. The results indicate which Amazon Web Services resources were evaluated by the rule, when each resource was last evaluated, and whether each resource complies with the rule.',
  operationId: 'GetComplianceDetailsByConfigRule',
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
        .literal('StarlingDoveService.GetComplianceDetailsByConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.GetComplianceDetailsByConfigRule'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: GetComplianceDetailsByConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComplianceDetailsByConfigRuleResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    482: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetComplianceDetailsByResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetComplianceDetailsByResource',
  description:
    'Returns the evaluation results for the specified Amazon Web Services resource. The results indicate which Config rules were used to evaluate the resource, when each rule was last invoked, and whether the resource complies with each rule.',
  operationId: 'GetComplianceDetailsByResource',
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
        .literal('StarlingDoveService.GetComplianceDetailsByResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.GetComplianceDetailsByResource'],
            },
          },
        }),
    }),
    query: z.object({
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
      content: { 'application/json': { schema: GetComplianceDetailsByResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComplianceDetailsByResourceResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetComplianceSummaryByConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByConfigRule',
  description:
    'Returns the number of Config rules that are compliant and noncompliant, up to a maximum of 25 for each.',
  operationId: 'GetComplianceSummaryByConfigRule',
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
        .literal('StarlingDoveService.GetComplianceSummaryByConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.GetComplianceSummaryByConfigRule'],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetComplianceSummaryByConfigRuleResponseSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetComplianceSummaryByResourceTypeRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetComplianceSummaryByResourceType',
    description:
      'Returns the number of resources that are compliant and the number that are noncompliant. You can specify one or more resource types to get these numbers for each resource type. The maximum number returned is 100.',
    operationId: 'GetComplianceSummaryByResourceType',
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
          .literal('StarlingDoveService.GetComplianceSummaryByResourceType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetComplianceSummaryByResourceType'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: GetComplianceSummaryByResourceTypeRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetComplianceSummaryByResourceTypeResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
    },
  },
)

export const postXAmzTargetStarlingDoveServiceGetConformancePackComplianceDetailsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceDetails',
    description:
      'Returns compliance details of a conformance pack for all Amazon Web Services resources that are monitered by conformance pack.',
    operationId: 'GetConformancePackComplianceDetails',
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
          .literal('StarlingDoveService.GetConformancePackComplianceDetails')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetConformancePackComplianceDetails'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetConformancePackComplianceDetailsRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetConformancePackComplianceDetailsResponseSchema },
        },
      },
      480: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      481: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      482: {
        description: 'NoSuchConformancePackException',
        content: { 'application/json': { schema: NoSuchConformancePackExceptionSchema } },
      },
      483: {
        description: 'NoSuchConfigRuleInConformancePackException',
        content: {
          'application/json': { schema: NoSuchConfigRuleInConformancePackExceptionSchema },
        },
      },
      484: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetConformancePackComplianceSummaryRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetConformancePackComplianceSummary',
    description:
      'Returns compliance details for the conformance pack based on the cumulative compliance results of all the rules in that conformance pack.',
    operationId: 'GetConformancePackComplianceSummary',
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
          .literal('StarlingDoveService.GetConformancePackComplianceSummary')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetConformancePackComplianceSummary'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetConformancePackComplianceSummaryRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetConformancePackComplianceSummaryResponseSchema },
        },
      },
      480: {
        description: 'NoSuchConformancePackException',
        content: { 'application/json': { schema: NoSuchConformancePackExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetCustomRulePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetCustomRulePolicy',
  description:
    'Returns the policy definition containing the logic for your Config Custom Policy rule.',
  operationId: 'GetCustomRulePolicy',
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
        .literal('StarlingDoveService.GetCustomRulePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetCustomRulePolicy'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetCustomRulePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetCustomRulePolicyResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetDiscoveredResourceCountsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetDiscoveredResourceCounts',
  description:
    '<p>Returns the resource types, the number of each resource type, and the total number of resources that Config is recording in this region for your Amazon Web Services account. </p> <p class="title"> <b>Example</b> </p> <ol> <li> <p>Config is recording three resource types in the US East (Ohio) Region for your account: 25 EC2 instances, 20 IAM users, and 15 S3 buckets.</p> </li> <li> <p>You make a call to the <code>GetDiscoveredResourceCounts</code> action and specify that you want all resource types. </p> </li> <li> <p>Config returns the following:</p> <ul> <li> <p>The resource types (EC2 instances, IAM users, and S3 buckets).</p> </li> <li> <p>The number of each resource type (25, 20, and 15).</p> </li> <li> <p>The total number of all resources (60).</p> </li> </ul> </li> </ol> <p>The response is paginated. By default, Config lists 100 <a>ResourceCount</a> objects on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>If you make a call to the <a>GetDiscoveredResourceCounts</a> action, you might not immediately receive resource counts in the following situations:</p> <ul> <li> <p>You are a new Config customer.</p> </li> <li> <p>You just enabled resource recording.</p> </li> </ul> <p>It might take a few minutes for Config to record and count your resources. Wait a few minutes and then retry the <a>GetDiscoveredResourceCounts</a> action. </p> </note>',
  operationId: 'GetDiscoveredResourceCounts',
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
        .literal('StarlingDoveService.GetDiscoveredResourceCounts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetDiscoveredResourceCounts'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: GetDiscoveredResourceCountsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDiscoveredResourceCountsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetOrganizationConfigRuleDetailedStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetOrganizationConfigRuleDetailedStatus',
    description:
      'Returns detailed status for each member account within an organization for a given organization Config rule.',
    operationId: 'GetOrganizationConfigRuleDetailedStatus',
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
          .literal('StarlingDoveService.GetOrganizationConfigRuleDetailedStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetOrganizationConfigRuleDetailedStatus'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetOrganizationConfigRuleDetailedStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetOrganizationConfigRuleDetailedStatusResponseSchema },
        },
      },
      480: {
        description: 'NoSuchOrganizationConfigRuleException',
        content: { 'application/json': { schema: NoSuchOrganizationConfigRuleExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'OrganizationAccessDeniedException',
        content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetOrganizationConformancePackDetailedStatusRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.GetOrganizationConformancePackDetailedStatus',
    description:
      'Returns detailed status for each member account within an organization for a given organization conformance pack.',
    operationId: 'GetOrganizationConformancePackDetailedStatus',
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
          .literal('StarlingDoveService.GetOrganizationConformancePackDetailedStatus')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.GetOrganizationConformancePackDetailedStatus'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: GetOrganizationConformancePackDetailedStatusRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: GetOrganizationConformancePackDetailedStatusResponseSchema,
          },
        },
      },
      480: {
        description: 'NoSuchOrganizationConformancePackException',
        content: {
          'application/json': { schema: NoSuchOrganizationConformancePackExceptionSchema },
        },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
      483: {
        description: 'OrganizationAccessDeniedException',
        content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceGetOrganizationCustomRulePolicyRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetOrganizationCustomRulePolicy',
  description:
    'Returns the policy definition containing the logic for your organization Config Custom Policy rule.',
  operationId: 'GetOrganizationCustomRulePolicy',
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
        .literal('StarlingDoveService.GetOrganizationCustomRulePolicy')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.GetOrganizationCustomRulePolicy'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetOrganizationCustomRulePolicyRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOrganizationCustomRulePolicyResponseSchema } },
    },
    480: {
      description: 'NoSuchOrganizationConfigRuleException',
      content: { 'application/json': { schema: NoSuchOrganizationConfigRuleExceptionSchema } },
    },
    481: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetResourceConfigHistoryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetResourceConfigHistory',
  description:
    '<p>Returns a list of <code>ConfigurationItems</code> for the specified resource. The list contains details about each state of the resource during the specified time interval. If you specified a retention period to retain your <code>ConfigurationItems</code> between a minimum of 30 days and a maximum of 7 years (2557 days), Config returns the <code>ConfigurationItems</code> for the specified retention period. </p> <p>The response is paginated. By default, Config returns a limit of 10 configuration items per page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p> <note> <p>Each call to the API is limited to span a duration of seven days. It is likely that the number of records returned is smaller than the specified <code>limit</code>. In such cases, you can make another call, using the <code>nextToken</code>.</p> </note>',
  operationId: 'GetResourceConfigHistory',
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
        .literal('StarlingDoveService.GetResourceConfigHistory')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetResourceConfigHistory'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: GetResourceConfigHistoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceConfigHistoryResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidTimeRangeException',
      content: { 'application/json': { schema: InvalidTimeRangeExceptionSchema } },
    },
    482: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    484: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
    485: {
      description: 'ResourceNotDiscoveredException',
      content: { 'application/json': { schema: ResourceNotDiscoveredExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetResourceEvaluationSummaryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetResourceEvaluationSummary',
  description:
    '<p>Returns a summary of resource evaluation for the specified resource evaluation ID from the proactive rules that were run. The results indicate which evaluation context was used to evaluate the rules, which resource details were evaluated, the evaluation mode that was run, and whether the resource details comply with the configuration of the proactive rules. </p> <note> <p>To see additional information about the evaluation result, such as which rule flagged a resource as NON_COMPLIANT, use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetComplianceDetailsByResource.html">GetComplianceDetailsByResource</a> API. For more information, see the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_GetResourceEvaluationSummary.html#API_GetResourceEvaluationSummary_Examples">Examples</a> section.</p> </note>',
  operationId: 'GetResourceEvaluationSummary',
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
        .literal('StarlingDoveService.GetResourceEvaluationSummary')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetResourceEvaluationSummary'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetResourceEvaluationSummaryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResourceEvaluationSummaryResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceGetStoredQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.GetStoredQuery',
  description: 'Returns the details of a specific stored query.',
  operationId: 'GetStoredQuery',
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
        .literal('StarlingDoveService.GetStoredQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.GetStoredQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetStoredQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetStoredQueryResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceListAggregateDiscoveredResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.ListAggregateDiscoveredResources',
  description:
    '<p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions. A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region. You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p> <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>',
  operationId: 'ListAggregateDiscoveredResources',
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
        .literal('StarlingDoveService.ListAggregateDiscoveredResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.ListAggregateDiscoveredResources'],
            },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: ListAggregateDiscoveredResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAggregateDiscoveredResourcesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceListConformancePackComplianceScoresRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=StarlingDoveService.ListConformancePackComplianceScores',
    description:
      '<p>Returns a list of conformance pack compliance scores. A compliance score is the percentage of the number of compliant rule-resource combinations in a conformance pack compared to the number of total possible rule-resource combinations in the conformance pack. This metric provides you with a high-level view of the compliance state of your conformance packs. You can use it to identify, investigate, and understand the level of compliance in your conformance packs.</p> <note> <p>Conformance packs with no evaluation results will have a compliance score of <code>INSUFFICIENT_DATA</code>.</p> </note>',
    operationId: 'ListConformancePackComplianceScores',
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
          .literal('StarlingDoveService.ListConformancePackComplianceScores')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['StarlingDoveService.ListConformancePackComplianceScores'],
              },
            },
          }),
      }),
      query: z.object({
        Limit: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'Limit',
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
        content: {
          'application/json': { schema: ListConformancePackComplianceScoresRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: ListConformancePackComplianceScoresResponseSchema },
        },
      },
      480: {
        description: 'InvalidParameterValueException',
        content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
      },
      481: {
        description: 'InvalidLimitException',
        content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
      },
      482: {
        description: 'InvalidNextTokenException',
        content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
      },
    },
  })

export const postXAmzTargetStarlingDoveServiceListDiscoveredResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.ListDiscoveredResources',
  description:
    '<p>Accepts a resource type and returns a list of resource identifiers for the resources of that type. A resource identifier includes the resource type, ID, and (if available) the custom resource name. The results consist of resources that Config has discovered, including those that Config is not currently recording. You can narrow the results to include only resources that have specific resource IDs or a resource name.</p> <note> <p>You can specify either resource IDs or a resource name, but not both, in the same request.</p> </note> <p>The response is paginated. By default, Config lists 100 resource identifiers on each page. You can customize this number with the <code>limit</code> parameter. The response includes a <code>nextToken</code> string. To get the next page of results, run the request again and specify the string for the <code>nextToken</code> parameter.</p>',
  operationId: 'ListDiscoveredResources',
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
        .literal('StarlingDoveService.ListDiscoveredResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.ListDiscoveredResources'] },
          },
        }),
    }),
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
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
      content: { 'application/json': { schema: ListDiscoveredResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDiscoveredResourcesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    483: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceListResourceEvaluationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.ListResourceEvaluations',
  description: 'Returns a list of proactive resource evaluations.',
  operationId: 'ListResourceEvaluations',
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
        .literal('StarlingDoveService.ListResourceEvaluations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.ListResourceEvaluations'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: ListResourceEvaluationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListResourceEvaluationsResponseSchema } },
    },
    480: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    482: {
      description: 'InvalidTimeRangeException',
      content: { 'application/json': { schema: InvalidTimeRangeExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceListStoredQueriesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.ListStoredQueries',
  description:
    'Lists the stored queries for a single Amazon Web Services account and a single Amazon Web Services Region. The default is 100. ',
  operationId: 'ListStoredQueries',
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
        .literal('StarlingDoveService.ListStoredQueries')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.ListStoredQueries'] },
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
      content: { 'application/json': { schema: ListStoredQueriesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListStoredQueriesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.ListTagsForResource',
  description: 'List the tags for Config resource.',
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
        .literal('StarlingDoveService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.ListTagsForResource'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutAggregationAuthorizationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutAggregationAuthorization',
  description:
    '<p>Authorizes the aggregator account and region to collect data from the source account and region. </p> <note> <p> <code>PutAggregationAuthorization</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>',
  operationId: 'PutAggregationAuthorization',
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
        .literal('StarlingDoveService.PutAggregationAuthorization')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutAggregationAuthorization'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutAggregationAuthorizationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutAggregationAuthorizationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutConfigRule',
  description:
    '<p>Adds or updates an Config rule to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule\'s identifier for the <code>SourceIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function that the rule invokes to evaluate your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function. You specify the ARN in the <code>SourceIdentifier</code> key. This key is part of the <code>Source</code> object, which is part of the <code>ConfigRule</code> object. </p> <p>For any new Config rule that you add, specify the <code>ConfigRuleName</code> in the <code>ConfigRule</code> object. Do not specify the <code>ConfigRuleArn</code> or the <code>ConfigRuleId</code>. These values are generated by Config for new rules.</p> <p>If you are updating a rule that you added previously, you can specify the rule by <code>ConfigRuleName</code>, <code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the <code>ConfigRule</code> data type that you use in this request.</p> <p>For more information about developing and using Config rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a> in the <i>Config Developer Guide</i>.</p> <note> <p> <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>',
  operationId: 'PutConfigRule',
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
        .literal('StarlingDoveService.PutConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutConfigRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MaxNumberOfConfigRulesExceededException',
      content: { 'application/json': { schema: MaxNumberOfConfigRulesExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    484: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutConfigurationAggregatorRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutConfigurationAggregator',
  description:
    '<p>Creates and updates the configuration aggregator with the selected source accounts and regions. The source account can be individual account(s) or an organization.</p> <p> <code>accountIds</code> that are passed will be replaced with existing accounts. If you want to add additional accounts into the aggregator, call <code>DescribeConfigurationAggregators</code> to get the previous accounts and then append new ones.</p> <note> <p>Config should be enabled in source accounts and regions you want to aggregate.</p> <p>If your source type is an organization, you must be signed in to the management account or a registered delegated administrator and all the features must be enabled in your organization. If the caller is a management account, Config calls <code>EnableAwsServiceAccess</code> API to enable integration between Config and Organizations. If the caller is a registered delegated administrator, Config calls <code>ListDelegatedAdministrators</code> API to verify whether the caller is a valid delegated administrator.</p> <p>To register a delegated administrator, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/set-up-aggregator-cli.html#register-a-delegated-administrator-cli">Register a Delegated Administrator</a> in the <i>Config developer guide</i>. </p> </note> <note> <p> <code>PutConfigurationAggregator</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>',
  operationId: 'PutConfigurationAggregator',
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
        .literal('StarlingDoveService.PutConfigurationAggregator')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutConfigurationAggregator'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutConfigurationAggregatorRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutConfigurationAggregatorResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    483: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoAvailableOrganizationException',
      content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
    },
    485: {
      description: 'OrganizationAllFeaturesNotEnabledException',
      content: { 'application/json': { schema: OrganizationAllFeaturesNotEnabledExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutConfigurationRecorderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutConfigurationRecorder',
  description:
    '<p>Creates a new configuration recorder to record the selected resource configurations.</p> <p>You can use this action to change the role <code>roleARN</code> or the <code>recordingGroup</code> of an existing recorder. To change the role, call the action on the existing configuration recorder and specify a role.</p> <note> <p>Currently, you can specify only one configuration recorder per region in your account.</p> <p>If <code>ConfigurationRecorder</code> does not have the <b>recordingGroup</b> parameter specified, the default is to record all supported resource types.</p> </note>',
  operationId: 'PutConfigurationRecorder',
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
        .literal('StarlingDoveService.PutConfigurationRecorder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutConfigurationRecorder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutConfigurationRecorderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MaxNumberOfConfigurationRecordersExceededException',
      content: {
        'application/json': { schema: MaxNumberOfConfigurationRecordersExceededExceptionSchema },
      },
    },
    481: {
      description: 'InvalidConfigurationRecorderNameException',
      content: { 'application/json': { schema: InvalidConfigurationRecorderNameExceptionSchema } },
    },
    482: {
      description: 'InvalidRoleException',
      content: { 'application/json': { schema: InvalidRoleExceptionSchema } },
    },
    483: {
      description: 'InvalidRecordingGroupException',
      content: { 'application/json': { schema: InvalidRecordingGroupExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutConformancePackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutConformancePack',
  description:
    '<p>Creates or updates a conformance pack. A conformance pack is a collection of Config rules that can be easily deployed in an account and a region and across an organization. For information on how many conformance packs you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>This API creates a service-linked role <code>AWSServiceRoleForConfigConforms</code> in your account. The service-linked role is created only when the role does not exist in your account. </p> <note> <p>You must specify only one of the follow parameters: <code>TemplateS3Uri</code>, <code>TemplateBody</code> or <code>TemplateSSMDocumentDetails</code>.</p> </note>',
  operationId: 'PutConformancePack',
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
        .literal('StarlingDoveService.PutConformancePack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutConformancePack'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutConformancePackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutConformancePackResponseSchema } },
    },
    480: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    481: {
      description: 'ConformancePackTemplateValidationException',
      content: { 'application/json': { schema: ConformancePackTemplateValidationExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    484: {
      description: 'MaxNumberOfConformancePacksExceededException',
      content: {
        'application/json': { schema: MaxNumberOfConformancePacksExceededExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutDeliveryChannelRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutDeliveryChannel',
  description:
    '<p>Creates a delivery channel object to deliver configuration information to an Amazon S3 bucket and Amazon SNS topic.</p> <p>Before you can create a delivery channel, you must create a configuration recorder.</p> <p>You can use this action to change the Amazon S3 bucket or an Amazon SNS topic of the existing delivery channel. To change the Amazon S3 bucket or an Amazon SNS topic, call this action and specify the changed values for the S3 bucket and the SNS topic. If you specify a different value for either the S3 bucket or the SNS topic, this action will keep the existing value for the parameter that is not changed.</p> <note> <p>You can have only one delivery channel per region in your account.</p> </note>',
  operationId: 'PutDeliveryChannel',
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
        .literal('StarlingDoveService.PutDeliveryChannel')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutDeliveryChannel'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutDeliveryChannelRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'MaxNumberOfDeliveryChannelsExceededException',
      content: {
        'application/json': { schema: MaxNumberOfDeliveryChannelsExceededExceptionSchema },
      },
    },
    481: {
      description: 'NoAvailableConfigurationRecorderException',
      content: { 'application/json': { schema: NoAvailableConfigurationRecorderExceptionSchema } },
    },
    482: {
      description: 'InvalidDeliveryChannelNameException',
      content: { 'application/json': { schema: InvalidDeliveryChannelNameExceptionSchema } },
    },
    483: {
      description: 'NoSuchBucketException',
      content: { 'application/json': { schema: NoSuchBucketExceptionSchema } },
    },
    484: {
      description: 'InvalidS3KeyPrefixException',
      content: { 'application/json': { schema: InvalidS3KeyPrefixExceptionSchema } },
    },
    485: {
      description: 'InvalidS3KmsKeyArnException',
      content: { 'application/json': { schema: InvalidS3KmsKeyArnExceptionSchema } },
    },
    486: {
      description: 'InvalidSNSTopicARNException',
      content: { 'application/json': { schema: InvalidSNSTopicARNExceptionSchema } },
    },
    487: {
      description: 'InsufficientDeliveryPolicyException',
      content: { 'application/json': { schema: InsufficientDeliveryPolicyExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutEvaluationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutEvaluations',
  description:
    'Used by an Lambda function to deliver evaluation results to Config. This action is required in every Lambda function that is invoked by an Config rule.',
  operationId: 'PutEvaluations',
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
        .literal('StarlingDoveService.PutEvaluations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutEvaluations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutEvaluationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutEvaluationsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InvalidResultTokenException',
      content: { 'application/json': { schema: InvalidResultTokenExceptionSchema } },
    },
    482: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutExternalEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutExternalEvaluation',
  description:
    'Add or updates the evaluations for process checks. This API checks if the rule is a process check when the name of the Config rule is provided.',
  operationId: 'PutExternalEvaluation',
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
        .literal('StarlingDoveService.PutExternalEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutExternalEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutExternalEvaluationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutExternalEvaluationResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutOrganizationConfigRuleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutOrganizationConfigRule',
  description:
    '<p>Adds or updates an Config rule for your entire organization to evaluate if your Amazon Web Services resources comply with your desired configurations. For information on how many organization Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the <i>Config Developer Guide</i>.</p> <p> Only a management account and a delegated administrator can create or update an organization Config rule. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. Config verifies the existence of role with <code>GetRole</code> action.</p> <p>To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegated-administrator</code> for <code>config-multiaccountsetup.amazonaws.com</code>. </p> <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>. You can use <code>PutOrganizationConfigRule</code> to create both Config Managed Rules and Config Custom Rules.</p> <p>Config Managed Rules are predefined, customizable rules created by Config. For a list of managed rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config Managed Rules</a>. If you are adding an Config managed rule, you must specify the rule\'s identifier for the <code>RuleIdentifier</code> key.</p> <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions (<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub Repository</a>), a policy-as-code language. Config custom rules created with Lambda are called <i>Config Custom Lambda Rules</i> and Config custom rules created with Guard are called <i>Config Custom Policy Rules</i>.</p> <p>If you are adding a new Config Custom Lambda rule, you first need to create an Lambda function in the management account or a delegated administrator that the rule invokes to evaluate your resources. You also need to create an IAM role in the managed account that can be assumed by the Lambda function. When you use <code>PutOrganizationConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource Name (ARN) that Lambda assigns to the function.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>Make sure to specify one of either <code>OrganizationCustomPolicyRuleMetadata</code> for Custom Policy rules, <code>OrganizationCustomRuleMetadata</code> for Custom Lambda rules, or <code>OrganizationManagedRuleMetadata</code> for managed rules.</p> </note>',
  operationId: 'PutOrganizationConfigRule',
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
        .literal('StarlingDoveService.PutOrganizationConfigRule')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutOrganizationConfigRule'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutOrganizationConfigRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutOrganizationConfigRuleResponseSchema } },
    },
    480: {
      description: 'MaxNumberOfOrganizationConfigRulesExceededException',
      content: {
        'application/json': { schema: MaxNumberOfOrganizationConfigRulesExceededExceptionSchema },
      },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
    485: {
      description: 'NoAvailableOrganizationException',
      content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
    },
    486: {
      description: 'OrganizationAllFeaturesNotEnabledException',
      content: { 'application/json': { schema: OrganizationAllFeaturesNotEnabledExceptionSchema } },
    },
    487: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutOrganizationConformancePackRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutOrganizationConformancePack',
  description:
    '<p>Deploys conformance packs across member accounts in an Amazon Web Services Organization. For information on how many organization conformance packs and how many Config rules you can have per account, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html"> <b>Service Limits</b> </a> in the Config Developer Guide.</p> <p>Only a management account and a delegated administrator can call this API. When calling this API with a delegated administrator, you must ensure Organizations <code>ListDelegatedAdministrator</code> permissions are added. An organization can have up to 3 delegated administrators.</p> <p>This API enables organization service access for <code>config-multiaccountsetup.amazonaws.com</code> through the <code>EnableAWSServiceAccess</code> action and creates a service-linked role <code>AWSServiceRoleForConfigMultiAccountSetup</code> in the management or delegated administrator account of your organization. The service-linked role is created only when the role does not exist in the caller account. To use this API with delegated administrator, register a delegated administrator by calling Amazon Web Services Organization <code>register-delegate-admin</code> for <code>config-multiaccountsetup.amazonaws.com</code>.</p> <note> <p>Prerequisite: Ensure you call <code>EnableAllFeatures</code> API to enable all features in an organization.</p> <p>You must specify either the <code>TemplateS3Uri</code> or the <code>TemplateBody</code> parameter, but not both. If you provide both Config uses the <code>TemplateS3Uri</code> parameter and ignores the <code>TemplateBody</code> parameter.</p> <p>Config sets the state of a conformance pack to CREATE_IN_PROGRESS and UPDATE_IN_PROGRESS until the conformance pack is created or updated. You cannot update a conformance pack while it is in this state.</p> </note>',
  operationId: 'PutOrganizationConformancePack',
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
        .literal('StarlingDoveService.PutOrganizationConformancePack')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['StarlingDoveService.PutOrganizationConformancePack'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutOrganizationConformancePackRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutOrganizationConformancePackResponseSchema } },
    },
    480: {
      description: 'MaxNumberOfOrganizationConformancePacksExceededException',
      content: {
        'application/json': {
          schema: MaxNumberOfOrganizationConformancePacksExceededExceptionSchema,
        },
      },
    },
    481: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'OrganizationAccessDeniedException',
      content: { 'application/json': { schema: OrganizationAccessDeniedExceptionSchema } },
    },
    484: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    485: {
      description: 'OrganizationConformancePackTemplateValidationException',
      content: {
        'application/json': {
          schema: OrganizationConformancePackTemplateValidationExceptionSchema,
        },
      },
    },
    486: {
      description: 'OrganizationAllFeaturesNotEnabledException',
      content: { 'application/json': { schema: OrganizationAllFeaturesNotEnabledExceptionSchema } },
    },
    487: {
      description: 'NoAvailableOrganizationException',
      content: { 'application/json': { schema: NoAvailableOrganizationExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutRemediationConfigurationsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutRemediationConfigurations',
  description:
    '<p>Adds or updates the remediation configuration with a specific Config rule with the selected target or action. The API creates the <code>RemediationConfiguration</code> object for the Config rule. The Config rule must already exist for you to add a remediation configuration. The target (SSM document) must exist and have permissions to use the target. </p> <note> <p>If you make backward incompatible changes to the SSM document, you must call this again to ensure the remediations can run.</p> <p>This API does not support adding remediation configurations for service-linked Config Rules such as Organization Config rules, the rules deployed by conformance packs, and rules deployed by Amazon Web Services Security Hub.</p> </note> <note> <p>For manual remediation configuration, you need to provide a value for <code>automationAssumeRole</code> or use a value in the <code>assumeRole</code>field to remediate your resources. The SSM automation document can use either as long as it maps to a valid parameter.</p> <p>However, for automatic remediation configuration, the only valid <code>assumeRole</code> field value is <code>AutomationAssumeRole</code> and you need to provide a value for <code>AutomationAssumeRole</code> to remediate your resources.</p> </note>',
  operationId: 'PutRemediationConfigurations',
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
        .literal('StarlingDoveService.PutRemediationConfigurations')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutRemediationConfigurations'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRemediationConfigurationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRemediationConfigurationsResponseSchema } },
    },
    480: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    481: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutRemediationExceptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutRemediationExceptions',
  description:
    '<p>A remediation exception is when a specified resource is no longer considered for auto-remediation. This API adds a new exception or updates an existing exception for a specified resource with a specified Config rule. </p> <note> <p>Config generates a remediation exception when a problem occurs running a remediation action for a specified resource. Remediation exceptions blocks auto-remediation until the exception is cleared.</p> </note> <note> <p>When placing an exception on an Amazon Web Services resource, it is recommended that remediation is set as manual remediation until the given Config rule for the specified resource evaluates the resource as <code>NON_COMPLIANT</code>. Once the resource has been evaluated as <code>NON_COMPLIANT</code>, you can add remediation exceptions and change the remediation type back from Manual to Auto if you want to use auto-remediation. Otherwise, using auto-remediation before a <code>NON_COMPLIANT</code> evaluation result can delete resources before the exception is applied.</p> </note> <note> <p>Placing an exception can only be performed on resources that are <code>NON_COMPLIANT</code>. If you use this API for <code>COMPLIANT</code> resources or resources that are <code>NOT_APPLICABLE</code>, a remediation exception will not be generated. For more information on the conditions that initiate the possible Config evaluation results, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/config-concepts.html#aws-config-rules">Concepts | Config Rules</a> in the Config Developer Guide.</p> </note>',
  operationId: 'PutRemediationExceptions',
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
        .literal('StarlingDoveService.PutRemediationExceptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutRemediationExceptions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRemediationExceptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRemediationExceptionsResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutResourceConfig',
  description:
    '<p>Records the configuration state for the resource provided in the request. The configuration state of a resource is represented in Config as Configuration Items. Once this API records the configuration item, you can retrieve the list of configuration items for the custom resource type using existing Config APIs. </p> <note> <p>The custom resource type must be registered with CloudFormation. This API accepts the configuration item registered with CloudFormation.</p> <p>When you call this API, Config only stores configuration state of the resource provided in the request. This API does not change or remediate the configuration of the resource. </p> <p>Write-only schema properites are not recorded as part of the published configuration item.</p> </note>',
  operationId: 'PutResourceConfig',
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
        .literal('StarlingDoveService.PutResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutResourceConfig'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    482: {
      description: 'NoRunningConfigurationRecorderException',
      content: { 'application/json': { schema: NoRunningConfigurationRecorderExceptionSchema } },
    },
    483: {
      description: 'MaxActiveResourcesExceededException',
      content: { 'application/json': { schema: MaxActiveResourcesExceededExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutRetentionConfigurationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutRetentionConfiguration',
  description:
    '<p>Creates and updates the retention configuration with details about retention period (number of days) that Config stores your historical information. The API creates the <code>RetentionConfiguration</code> object and names the object as <b>default</b>. When you have a <code>RetentionConfiguration</code> object named <b>default</b>, calling the API modifies the default object. </p> <note> <p>Currently, Config supports only one retention configuration per region in your account.</p> </note>',
  operationId: 'PutRetentionConfiguration',
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
        .literal('StarlingDoveService.PutRetentionConfiguration')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutRetentionConfiguration'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutRetentionConfigurationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutRetentionConfigurationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'MaxNumberOfRetentionConfigurationsExceededException',
      content: {
        'application/json': { schema: MaxNumberOfRetentionConfigurationsExceededExceptionSchema },
      },
    },
  },
})

export const postXAmzTargetStarlingDoveServicePutStoredQueryRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.PutStoredQuery',
  description:
    '<p>Saves a new query or updates an existing saved query. The <code>QueryName</code> must be unique for a single Amazon Web Services account and a single Amazon Web Services Region. You can create upto 300 queries in a single Amazon Web Services account and a single Amazon Web Services Region.</p> <note> <p> <code>PutStoredQuery</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values, Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p> </note>',
  operationId: 'PutStoredQuery',
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
        .literal('StarlingDoveService.PutStoredQuery')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.PutStoredQuery'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutStoredQueryRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutStoredQueryResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
    482: {
      description: 'ResourceConcurrentModificationException',
      content: { 'application/json': { schema: ResourceConcurrentModificationExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceSelectAggregateResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.SelectAggregateResourceConfig',
  description:
    "<p>Accepts a structured query language (SQL) SELECT command and an aggregator to query configuration state of Amazon Web Services resources across multiple accounts and regions, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href=\"https://docs.aws.amazon.com/config/latest/developerguide/query-components.html\"> <b>Query Components</b> </a> section in the Config Developer Guide.</p> <note> <p>If you run an aggregation query (i.e., using <code>GROUP BY</code> or using aggregate functions such as <code>COUNT</code>; e.g., <code>SELECT resourceId, COUNT(*) WHERE resourceType = 'AWS::IAM::Role' GROUP BY resourceId</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 500.</p> <p>If you run a non-aggregation query (i.e., not using <code>GROUP BY</code> or aggregate function; e.g., <code>SELECT * WHERE resourceType = 'AWS::IAM::Role'</code>) and do not specify the <code>MaxResults</code> or the <code>Limit</code> query parameters, the default page size is set to 25.</p> </note>",
  operationId: 'SelectAggregateResourceConfig',
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
        .literal('StarlingDoveService.SelectAggregateResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.SelectAggregateResourceConfig'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: SelectAggregateResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SelectAggregateResourceConfigResponseSchema } },
    },
    480: {
      description: 'InvalidExpressionException',
      content: { 'application/json': { schema: InvalidExpressionExceptionSchema } },
    },
    481: {
      description: 'NoSuchConfigurationAggregatorException',
      content: { 'application/json': { schema: NoSuchConfigurationAggregatorExceptionSchema } },
    },
    482: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    483: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceSelectResourceConfigRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.SelectResourceConfig',
  description:
    '<p>Accepts a structured query language (SQL) <code>SELECT</code> command, performs the corresponding search, and returns resource configurations matching the properties.</p> <p>For more information about query components, see the <a href="https://docs.aws.amazon.com/config/latest/developerguide/query-components.html"> <b>Query Components</b> </a> section in the <i>Config Developer Guide</i>.</p>',
  operationId: 'SelectResourceConfig',
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
        .literal('StarlingDoveService.SelectResourceConfig')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.SelectResourceConfig'] },
          },
        }),
    }),
    query: z.object({
      Limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'Limit',
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
      content: { 'application/json': { schema: SelectResourceConfigRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SelectResourceConfigResponseSchema } },
    },
    480: {
      description: 'InvalidExpressionException',
      content: { 'application/json': { schema: InvalidExpressionExceptionSchema } },
    },
    481: {
      description: 'InvalidLimitException',
      content: { 'application/json': { schema: InvalidLimitExceptionSchema } },
    },
    482: {
      description: 'InvalidNextTokenException',
      content: { 'application/json': { schema: InvalidNextTokenExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceStartConfigRulesEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.StartConfigRulesEvaluation',
  description:
    "<p>Runs an on-demand evaluation for the specified Config rules against the last known configuration state of the resources. Use <code>StartConfigRulesEvaluation</code> when you want to test that a rule you updated is working as expected. <code>StartConfigRulesEvaluation</code> does not re-record the latest configuration state for your resources. It re-runs an evaluation against the last known state of your resources. </p> <p>You can specify up to 25 Config rules per request. </p> <p>An existing <code>StartConfigRulesEvaluation</code> call for the specified rules must complete before you can call the API again. If you chose to have Config stream to an Amazon SNS topic, you will receive a <code>ConfigRuleEvaluationStarted</code> notification when the evaluation starts.</p> <note> <p>You don't need to call the <code>StartConfigRulesEvaluation</code> API to run an evaluation for a new rule. When you create a rule, Config evaluates your resources against the rule automatically. </p> </note> <p>The <code>StartConfigRulesEvaluation</code> API is useful if you want to run on-demand evaluations, such as the following example:</p> <ol> <li> <p>You have a custom rule that evaluates your IAM resources every 24 hours.</p> </li> <li> <p>You update your Lambda function to add additional conditions to your rule.</p> </li> <li> <p>Instead of waiting for the next periodic evaluation, you call the <code>StartConfigRulesEvaluation</code> API.</p> </li> <li> <p>Config invokes your Lambda function and evaluates your IAM resources.</p> </li> <li> <p>Your custom rule will still run periodic evaluations every 24 hours.</p> </li> </ol>",
  operationId: 'StartConfigRulesEvaluation',
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
        .literal('StarlingDoveService.StartConfigRulesEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.StartConfigRulesEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartConfigRulesEvaluationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartConfigRulesEvaluationResponseSchema } },
    },
    480: {
      description: 'NoSuchConfigRuleException',
      content: { 'application/json': { schema: NoSuchConfigRuleExceptionSchema } },
    },
    481: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    482: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    483: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceStartConfigurationRecorderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.StartConfigurationRecorder',
  description:
    '<p>Starts recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.</p> <p>You must have created at least one delivery channel to successfully start the configuration recorder.</p>',
  operationId: 'StartConfigurationRecorder',
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
        .literal('StarlingDoveService.StartConfigurationRecorder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.StartConfigurationRecorder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartConfigurationRecorderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConfigurationRecorderException',
      content: { 'application/json': { schema: NoSuchConfigurationRecorderExceptionSchema } },
    },
    481: {
      description: 'NoAvailableDeliveryChannelException',
      content: { 'application/json': { schema: NoAvailableDeliveryChannelExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceStartRemediationExecutionRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.StartRemediationExecution',
  description:
    '<p>Runs an on-demand remediation for the specified Config rules against the last known remediation configuration. It runs an execution against the current state of your resources. Remediation execution is asynchronous.</p> <p>You can specify up to 100 resource keys per request. An existing StartRemediationExecution call for the specified resource keys must complete before you can call the API again.</p>',
  operationId: 'StartRemediationExecution',
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
        .literal('StarlingDoveService.StartRemediationExecution')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.StartRemediationExecution'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartRemediationExecutionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartRemediationExecutionResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'InsufficientPermissionsException',
      content: { 'application/json': { schema: InsufficientPermissionsExceptionSchema } },
    },
    482: {
      description: 'NoSuchRemediationConfigurationException',
      content: { 'application/json': { schema: NoSuchRemediationConfigurationExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceStartResourceEvaluationRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.StartResourceEvaluation',
  description:
    '<p>Runs an on-demand evaluation for the specified resource to determine whether the resource details will comply with configured Config rules. You can also use it for evaluation purposes. Config recommends using an evaluation context. It runs an execution against the resource details with all of the Config rules in your account that match with the specified proactive mode and resource type.</p> <note> <p>Ensure you have the <code>cloudformation:DescribeType</code> role setup to validate the resource type schema.</p> <p>You can find the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-type-schema.html">Resource type schema</a> in "<i>Amazon Web Services public extensions</i>" within the CloudFormation registry or with the following CLI commmand: <code>aws cloudformation describe-type --type-name "AWS::S3::Bucket" --type RESOURCE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html#registry-view">Managing extensions through the CloudFormation registry</a> and <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">Amazon Web Services resource and property types reference</a> in the CloudFormation User Guide.</p> </note>',
  operationId: 'StartResourceEvaluation',
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
        .literal('StarlingDoveService.StartResourceEvaluation')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.StartResourceEvaluation'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartResourceEvaluationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartResourceEvaluationResponseSchema } },
    },
    480: {
      description: 'InvalidParameterValueException',
      content: { 'application/json': { schema: InvalidParameterValueExceptionSchema } },
    },
    481: {
      description: 'IdempotentParameterMismatch',
      content: { 'application/json': { schema: IdempotentParameterMismatchSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceStopConfigurationRecorderRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.StopConfigurationRecorder',
  description:
    'Stops recording configurations of the Amazon Web Services resources you have selected to record in your Amazon Web Services account.',
  operationId: 'StopConfigurationRecorder',
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
        .literal('StarlingDoveService.StopConfigurationRecorder')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.StopConfigurationRecorder'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopConfigurationRecorderRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'NoSuchConfigurationRecorderException',
      content: { 'application/json': { schema: NoSuchConfigurationRecorderExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceTagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.TagResource',
  description:
    'Associates the specified tags to a resource with the specified resourceArn. If existing tags on a resource are not specified in the request parameters, they are not changed. If existing tags are specified, however, then their values will be updated. When a resource is deleted, the tags associated with that resource are deleted as well.',
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
        .literal('StarlingDoveService.TagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.TagResource'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TagResourceRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'TooManyTagsException',
      content: { 'application/json': { schema: TooManyTagsExceptionSchema } },
    },
  },
})

export const postXAmzTargetStarlingDoveServiceUntagResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=StarlingDoveService.UntagResource',
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
      'X-Amz-Target': z
        .literal('StarlingDoveService.UntagResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['StarlingDoveService.UntagResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UntagResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
