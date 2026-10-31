import { createRoute, z } from '@hono/zod-openapi'

const AssociateCreatedArtifactResultSchema = z.object({}).openapi('AssociateCreatedArtifactResult')

const ProgressUpdateStreamSchema = z
  .string()
  .regex(/[^\/:|\000-\037]+/)
  .min(1)
  .max(50)
  .openapi('ProgressUpdateStream')

const MigrationTaskNameSchema = z
  .string()
  .regex(/[^:|]+/)
  .min(1)
  .max(256)
  .openapi('MigrationTaskName')

const CreatedArtifactNameSchema = z
  .string()
  .regex(/arn:[a-z-]+:[a-z0-9-]+:(?:[a-z0-9-]+|):(?:[0-9]{12}|):.*/)
  .min(1)
  .max(1600)
  .openapi('CreatedArtifactName')

const CreatedArtifactDescriptionSchema = z
  .string()
  .regex(/^.{0,500}$/)
  .min(0)
  .max(500)
  .openapi('CreatedArtifactDescription')

const CreatedArtifactSchema = z
  .object({
    Name: CreatedArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description: 'An ARN that uniquely identifies the result of a migration task.',
        }),
    ),
    Description: CreatedArtifactDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description that can be free-form text to record additional detail about the artifact for clarity or for later reference.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name'],
    description:
      'An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).',
  })
  .openapi('CreatedArtifact')

const DryRunSchema = z.boolean().openapi('DryRun')

const AssociateCreatedArtifactRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    CreatedArtifact: CreatedArtifactSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.) ',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName', 'CreatedArtifact'],
    title: 'AssociateCreatedArtifactRequest',
  })
  .openapi('AssociateCreatedArtifactRequest')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const InternalServerErrorSchema = z.any().openapi('InternalServerError')

const ServiceUnavailableExceptionSchema = z.any().openapi('ServiceUnavailableException')

const DryRunOperationSchema = z.any().openapi('DryRunOperation')

const UnauthorizedOperationSchema = z.any().openapi('UnauthorizedOperation')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const HomeRegionNotSetExceptionSchema = z.any().openapi('HomeRegionNotSetException')

const AssociateDiscoveredResourceResultSchema = z
  .object({})
  .openapi('AssociateDiscoveredResourceResult')

const ConfigurationIdSchema = z
  .string()
  .regex(/^.{1,1600}$/)
  .min(1)
  .max(1600)
  .openapi('ConfigurationId')

const DiscoveredResourceDescriptionSchema = z
  .string()
  .regex(/^.{0,500}$/)
  .min(0)
  .max(500)
  .openapi('DiscoveredResourceDescription')

const DiscoveredResourceSchema = z
  .object({
    ConfigurationId: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurationId in Application Discovery Service that uniquely identifies the on-premise resource.',
        }),
    ),
    Description: DiscoveredResourceDescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ConfigurationId'],
    description: 'Object representing the on-premises resource being migrated.',
  })
  .openapi('DiscoveredResource')

const AssociateDiscoveredResourceRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream.' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    DiscoveredResource: DiscoveredResourceSchema.and(
      z.any().openapi({ description: 'Object representing a Resource.' }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName', 'DiscoveredResource'],
    title: 'AssociateDiscoveredResourceRequest',
  })
  .openapi('AssociateDiscoveredResourceRequest')

const PolicyErrorExceptionSchema = z.any().openapi('PolicyErrorException')

const CreateProgressUpdateStreamResultSchema = z
  .object({})
  .openapi('CreateProgressUpdateStreamResult')

const CreateProgressUpdateStreamRequestSchema = z
  .object({
    ProgressUpdateStreamName: ProgressUpdateStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ProgressUpdateStream. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProgressUpdateStreamName'], title: 'CreateProgressUpdateStreamRequest' })
  .openapi('CreateProgressUpdateStreamRequest')

const DeleteProgressUpdateStreamResultSchema = z
  .object({})
  .openapi('DeleteProgressUpdateStreamResult')

const DeleteProgressUpdateStreamRequestSchema = z
  .object({
    ProgressUpdateStreamName: ProgressUpdateStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ProgressUpdateStream. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ProgressUpdateStreamName'], title: 'DeleteProgressUpdateStreamRequest' })
  .openapi('DeleteProgressUpdateStreamRequest')

const ApplicationStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
  .openapi('ApplicationStatus')

const UpdateDateTimeSchema = z.iso.datetime({ offset: true }).openapi('UpdateDateTime')

const DescribeApplicationStateResultSchema = z
  .object({
    ApplicationStatus: ApplicationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Status of the application - Not Started, In-Progress, Complete.',
        }),
    ).exactOptional(),
    LastUpdatedTime: UpdateDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the application status was last updated.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeApplicationStateResult')

const ApplicationIdSchema = z
  .string()
  .regex(/^.{1,1600}$/)
  .min(1)
  .max(1600)
  .openapi('ApplicationId')

const DescribeApplicationStateRequestSchema = z
  .object({
    ApplicationId: ApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurationId in Application Discovery Service that uniquely identifies the grouped application.',
        }),
    ),
  })
  .openapi({ required: ['ApplicationId'], title: 'DescribeApplicationStateRequest' })
  .openapi('DescribeApplicationStateRequest')

const StatusSchema = z.enum(['NOT_STARTED', 'IN_PROGRESS', 'FAILED', 'COMPLETED']).openapi('Status')

const StatusDetailSchema = z
  .string()
  .regex(/^.{0,500}$/)
  .min(0)
  .max(500)
  .openapi('StatusDetail')

const ProgressPercentSchema = z.int().min(0).max(100).openapi('ProgressPercent')

const TaskSchema = z
  .object({
    Status: StatusSchema.and(
      z.any().openapi({ description: 'Status of the task - Not Started, In-Progress, Complete.' }),
    ),
    StatusDetail: StatusDetailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of task status as notified by a migration tool. A tool might use this field to provide clarifying information about the status that is unique to that tool or that explains an error state.',
        }),
    ).exactOptional(),
    ProgressPercent: ProgressPercentSchema.and(
      z.any().openapi({ description: 'Indication of the percentage completion of the task.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Status'], description: 'Task object encapsulating task information.' })
  .openapi('Task')

const ResourceAttributeTypeSchema = z
  .enum([
    'IPV4_ADDRESS',
    'IPV6_ADDRESS',
    'MAC_ADDRESS',
    'FQDN',
    'VM_MANAGER_ID',
    'VM_MANAGED_OBJECT_REFERENCE',
    'VM_NAME',
    'VM_PATH',
    'BIOS_ID',
    'MOTHERBOARD_SERIAL_NUMBER',
  ])
  .openapi('ResourceAttributeType')

const ResourceAttributeValueSchema = z
  .string()
  .regex(/^.{1,256}$/)
  .min(1)
  .max(256)
  .openapi('ResourceAttributeValue')

const ResourceAttributeSchema = z
  .object({
    Type: ResourceAttributeTypeSchema.and(z.any().openapi({ description: 'Type of resource.' })),
    Value: ResourceAttributeValueSchema.and(
      z.any().openapi({ description: 'Value of the resource type.' }),
    ),
  })
  .openapi({
    required: ['Type', 'Value'],
    description:
      '<p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\\\\\/?,=\\\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl>',
  })
  .openapi('ResourceAttribute')

const LatestResourceAttributeListSchema = z
  .array(ResourceAttributeSchema)
  .min(0)
  .max(100)
  .openapi('LatestResourceAttributeList')

const MigrationTaskSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z
        .any()
        .openapi({
          description: 'A name that identifies the vendor of the migration tool being used.',
        }),
    ).exactOptional(),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ).exactOptional(),
    Task: TaskSchema.and(
      z.any().openapi({ description: 'Task object encapsulating task information.' }),
    ).exactOptional(),
    UpdateDateTime: UpdateDateTimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the task was gathered.' }),
    ).exactOptional(),
    ResourceAttributeList: LatestResourceAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Represents a migration task in a migration tool.', required: [] })
  .openapi('MigrationTask')

const DescribeMigrationTaskResultSchema = z
  .object({
    MigrationTask: MigrationTaskSchema.and(
      z
        .any()
        .openapi({ description: 'Object encapsulating information about the migration task.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeMigrationTaskResult')

const DescribeMigrationTaskRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ',
        }),
    ),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName'],
    title: 'DescribeMigrationTaskRequest',
  })
  .openapi('DescribeMigrationTaskRequest')

const DisassociateCreatedArtifactResultSchema = z
  .object({})
  .openapi('DisassociateCreatedArtifactResult')

const DisassociateCreatedArtifactRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task to be disassociated with the artifact. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    CreatedArtifactName: CreatedArtifactNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName', 'CreatedArtifactName'],
    title: 'DisassociateCreatedArtifactRequest',
  })
  .openapi('DisassociateCreatedArtifactRequest')

const DisassociateDiscoveredResourceResultSchema = z
  .object({})
  .openapi('DisassociateDiscoveredResourceResult')

const DisassociateDiscoveredResourceRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream.' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier given to the MigrationTask. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    ConfigurationId: ConfigurationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'ConfigurationId of the Application Discovery Service resource to be disassociated.',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName', 'ConfigurationId'],
    title: 'DisassociateDiscoveredResourceRequest',
  })
  .openapi('DisassociateDiscoveredResourceRequest')

const ImportMigrationTaskResultSchema = z.object({}).openapi('ImportMigrationTaskResult')

const ImportMigrationTaskRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. &gt;' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName'],
    title: 'ImportMigrationTaskRequest',
  })
  .openapi('ImportMigrationTaskRequest')

const ApplicationStateSchema = z
  .object({
    ApplicationId: ApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurationId from the Application Discovery Service that uniquely identifies an application.',
        }),
    ).exactOptional(),
    ApplicationStatus: ApplicationStatusSchema.and(
      z.any().openapi({ description: 'The current status of an application.' }),
    ).exactOptional(),
    LastUpdatedTime: UpdateDateTimeSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp when the application status was last updated.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.',
    required: [],
  })
  .openapi('ApplicationState')

const ApplicationStateListSchema = z
  .array(ApplicationStateSchema)
  .min(0)
  .max(1000)
  .openapi('ApplicationStateList')

const TokenSchema = z
  .string()
  .regex(/^[a-zA-Z0-9\/\+\=]{0,2048}$/)
  .min(0)
  .max(2048)
  .openapi('Token')

const ListApplicationStatesResultSchema = z
  .object({
    ApplicationStateList: ApplicationStateListSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of Applications that exist in Application Discovery Service.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListApplicationStatesResult')

const ApplicationIdsSchema = z.array(ApplicationIdSchema).min(1).max(100).openapi('ApplicationIds')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const ListApplicationStatesRequestSchema = z
  .object({
    ApplicationIds: ApplicationIdsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurationIds from the Application Discovery Service that uniquely identifies your applications.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Maximum number of results to be returned per page.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListApplicationStatesRequest', required: [] })
  .openapi('ListApplicationStatesRequest')

const CreatedArtifactListSchema = z.array(CreatedArtifactSchema).openapi('CreatedArtifactList')

const ListCreatedArtifactsResultSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more created artifacts than the max result, return the next token to be passed to the next call as a bookmark of where to start from.',
        }),
    ).exactOptional(),
    CreatedArtifactList: CreatedArtifactListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of created artifacts up to the maximum number of results specified in the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCreatedArtifactsResult')

const MaxResultsCreatedArtifactsSchema = z
  .int()
  .min(1)
  .max(10)
  .openapi('MaxResultsCreatedArtifacts')

const ListCreatedArtifactsRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsCreatedArtifactsSchema.and(
      z.any().openapi({ description: 'Maximum number of results to be returned per page.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName'],
    title: 'ListCreatedArtifactsRequest',
  })
  .openapi('ListCreatedArtifactsRequest')

const DiscoveredResourceListSchema = z
  .array(DiscoveredResourceSchema)
  .openapi('DiscoveredResourceList')

const ListDiscoveredResourcesResultSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more discovered resources than the max result, return the next token to be passed to the next call as a bookmark of where to start from.',
        }),
    ).exactOptional(),
    DiscoveredResourceList: DiscoveredResourceListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Returned list of discovered resources associated with the given MigrationTask.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDiscoveredResourcesResult')

const MaxResultsResourcesSchema = z.int().min(1).max(10).openapi('MaxResultsResources')

const ListDiscoveredResourcesRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream.' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the MigrationTask. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsResourcesSchema.and(
      z.any().openapi({ description: 'The maximum number of results returned per page.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName'],
    title: 'ListDiscoveredResourcesRequest',
  })
  .openapi('ListDiscoveredResourcesRequest')

const MigrationTaskSummarySchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool.',
        }),
    ).exactOptional(),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ).exactOptional(),
    Status: StatusSchema.and(
      z.any().openapi({ description: 'Status of the task.' }),
    ).exactOptional(),
    ProgressPercent: ProgressPercentSchema.and(
      z.any().openapi({ description: 'Indication of the percentage completion of the task.' }),
    ).exactOptional(),
    StatusDetail: StatusDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'Detail information of what is being done within the overall status state.',
        }),
    ).exactOptional(),
    UpdateDateTime: UpdateDateTimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the task was gathered.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task.',
    required: [],
  })
  .openapi('MigrationTaskSummary')

const MigrationTaskSummaryListSchema = z
  .array(MigrationTaskSummarySchema)
  .openapi('MigrationTaskSummaryList')

const ListMigrationTasksResultSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more migration tasks than the max result, return the next token to be passed to the next call as a bookmark of where to start from.',
        }),
    ).exactOptional(),
    MigrationTaskSummaryList: MigrationTaskSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Lists the migration task's summary which includes: <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and the <code>UpdateDateTime</code> for each task.",
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListMigrationTasksResult')

const ResourceNameSchema = z
  .string()
  .regex(/^.{1,1600}$/)
  .min(1)
  .max(1600)
  .openapi('ResourceName')

const ListMigrationTasksRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'Value to specify how many results are returned per page.' }),
    ).exactOptional(),
    ResourceName: ResourceNameSchema.and(
      z.any().openapi({ description: 'Filter migration tasks by discovered resource name.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListMigrationTasksRequest', required: [] })
  .openapi('ListMigrationTasksRequest')

const ProgressUpdateStreamSummarySchema = z
  .object({
    ProgressUpdateStreamName: ProgressUpdateStreamSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the ProgressUpdateStream. <i>Do not store personal data in this field.</i> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Summary of the AWS resource used for access control that is implicitly linked to your AWS account.',
    required: [],
  })
  .openapi('ProgressUpdateStreamSummary')

const ProgressUpdateStreamSummaryListSchema = z
  .array(ProgressUpdateStreamSummarySchema)
  .openapi('ProgressUpdateStreamSummaryList')

const ListProgressUpdateStreamsResultSchema = z
  .object({
    ProgressUpdateStreamSummaryList: ProgressUpdateStreamSummaryListSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of progress update streams up to the max number of results passed in the input.',
        }),
    ).exactOptional(),
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If there are more streams created than the max result, return the next token to be passed to the next call as a bookmark of where to start from.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProgressUpdateStreamsResult')

const ListProgressUpdateStreamsRequestSchema = z
  .object({
    NextToken: TokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If a <code>NextToken</code> was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in <code>NextToken</code>.',
        }),
    ).exactOptional(),
    MaxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description: 'Filter to limit the maximum number of results to list per page.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListProgressUpdateStreamsRequest', required: [] })
  .openapi('ListProgressUpdateStreamsRequest')

const NotifyApplicationStateResultSchema = z.object({}).openapi('NotifyApplicationStateResult')

const NotifyApplicationStateRequestSchema = z
  .object({
    ApplicationId: ApplicationIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configurationId in Application Discovery Service that uniquely identifies the grouped application.',
        }),
    ),
    Status: ApplicationStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'Status of the application - Not Started, In-Progress, Complete.',
        }),
    ),
    UpdateDateTime: UpdateDateTimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the application state changed.' }),
    ).exactOptional(),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['ApplicationId', 'Status'], title: 'NotifyApplicationStateRequest' })
  .openapi('NotifyApplicationStateRequest')

const NotifyMigrationTaskStateResultSchema = z.object({}).openapi('NotifyMigrationTaskStateResult')

const NextUpdateSecondsSchema = z.int().min(0).openapi('NextUpdateSeconds')

const NotifyMigrationTaskStateRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    Task: TaskSchema.and(
      z.any().openapi({ description: "Information about the task's progress and status." }),
    ),
    UpdateDateTime: UpdateDateTimeSchema.and(
      z.any().openapi({ description: 'The timestamp when the task was gathered.' }),
    ),
    NextUpdateSeconds: NextUpdateSecondsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'ProgressUpdateStream',
      'MigrationTaskName',
      'Task',
      'UpdateDateTime',
      'NextUpdateSeconds',
    ],
    title: 'NotifyMigrationTaskStateRequest',
  })
  .openapi('NotifyMigrationTaskStateRequest')

const PutResourceAttributesResultSchema = z.object({}).openapi('PutResourceAttributesResult')

const ResourceAttributeListSchema = z
  .array(ResourceAttributeSchema)
  .min(1)
  .max(100)
  .openapi('ResourceAttributeList')

const PutResourceAttributesRequestSchema = z
  .object({
    ProgressUpdateStream: ProgressUpdateStreamSchema.and(
      z.any().openapi({ description: 'The name of the ProgressUpdateStream. ' }),
    ),
    MigrationTaskName: MigrationTaskNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'Unique identifier that references the migration task. <i>Do not store personal data in this field.</i> ',
        }),
    ),
    ResourceAttributeList: ResourceAttributeListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.</p> <note> <p>Takes the object array of <code>ResourceAttribute</code> where the <code>Type</code> field is reserved for the following values: <code>IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER</code> where the identifying value can be a string up to 256 characters.</p> </note> <important> <ul> <li> <p>If any "VM" related value is set for a <code>ResourceAttribute</code> object, it is required that <code>VM_MANAGER_ID</code>, as a minimum, is always set. If <code>VM_MANAGER_ID</code> is not set, then all "VM" fields will be discarded and "VM" fields will not be used for matching the migration task to a server in Application Discovery Service repository. See the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples">Example</a> section below for a use case of specifying "VM" related values.</p> </li> <li> <p> If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the <code>ResourceAttributeList</code> parameter to maximize the chances of matching.</p> </li> </ul> </important>',
        }),
    ),
    DryRun: DryRunSchema.and(
      z
        .any()
        .openapi({
          description:
            'Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ProgressUpdateStream', 'MigrationTaskName', 'ResourceAttributeList'],
    title: 'PutResourceAttributesRequest',
  })
  .openapi('PutResourceAttributesRequest')

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

export const postXAmzTargetAWSMigrationHubAssociateCreatedArtifactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact',
  description:
    "<p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>",
  operationId: 'AssociateCreatedArtifact',
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
        .literal('AWSMigrationHub.AssociateCreatedArtifact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.AssociateCreatedArtifact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateCreatedArtifactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateCreatedArtifactResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubAssociateDiscoveredResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource',
  description:
    'Associates a discovered resource ID from Application Discovery Service with a migration task.',
  operationId: 'AssociateDiscoveredResource',
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
        .literal('AWSMigrationHub.AssociateDiscoveredResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.AssociateDiscoveredResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AssociateDiscoveredResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AssociateDiscoveredResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'PolicyErrorException',
      content: { 'application/json': { schema: PolicyErrorExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubCreateProgressUpdateStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream',
  description:
    'Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.',
  operationId: 'CreateProgressUpdateStream',
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
        .literal('AWSMigrationHub.CreateProgressUpdateStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.CreateProgressUpdateStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateProgressUpdateStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateProgressUpdateStreamResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubDeleteProgressUpdateStreamRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream',
  description:
    '<p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>',
  operationId: 'DeleteProgressUpdateStream',
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
        .literal('AWSMigrationHub.DeleteProgressUpdateStream')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.DeleteProgressUpdateStream'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteProgressUpdateStreamRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteProgressUpdateStreamResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubDescribeApplicationStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.DescribeApplicationState',
  description: 'Gets the migration status of an application.',
  operationId: 'DescribeApplicationState',
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
        .literal('AWSMigrationHub.DescribeApplicationState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.DescribeApplicationState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeApplicationStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeApplicationStateResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'PolicyErrorException',
      content: { 'application/json': { schema: PolicyErrorExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubDescribeMigrationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask',
  description: 'Retrieves a list of all attributes associated with a specific migration task.',
  operationId: 'DescribeMigrationTask',
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
        .literal('AWSMigrationHub.DescribeMigrationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.DescribeMigrationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeMigrationTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMigrationTaskResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubDisassociateCreatedArtifactRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact',
  description:
    "<p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>",
  operationId: 'DisassociateCreatedArtifact',
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
        .literal('AWSMigrationHub.DisassociateCreatedArtifact')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.DisassociateCreatedArtifact'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateCreatedArtifactRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateCreatedArtifactResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubDisassociateDiscoveredResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource',
  description:
    'Disassociate an Application Discovery Service discovered resource from a migration task.',
  operationId: 'DisassociateDiscoveredResource',
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
        .literal('AWSMigrationHub.DisassociateDiscoveredResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.DisassociateDiscoveredResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DisassociateDiscoveredResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DisassociateDiscoveredResourceResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubImportMigrationTaskRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ImportMigrationTask',
  description:
    '<p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>',
  operationId: 'ImportMigrationTask',
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
        .literal('AWSMigrationHub.ImportMigrationTask')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ImportMigrationTask'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ImportMigrationTaskRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportMigrationTaskResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubListApplicationStatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ListApplicationStates',
  description:
    'Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.',
  operationId: 'ListApplicationStates',
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
        .literal('AWSMigrationHub.ListApplicationStates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ListApplicationStates'] },
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
      content: { 'application/json': { schema: ListApplicationStatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListApplicationStatesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubListCreatedArtifactsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts',
  description:
    '<p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>',
  operationId: 'ListCreatedArtifacts',
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
        .literal('AWSMigrationHub.ListCreatedArtifacts')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ListCreatedArtifacts'] },
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
      content: { 'application/json': { schema: ListCreatedArtifactsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCreatedArtifactsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubListDiscoveredResourcesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources',
  description: 'Lists discovered resources associated with the given <code>MigrationTask</code>.',
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
        .literal('AWSMigrationHub.ListDiscoveredResources')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ListDiscoveredResources'] },
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
      content: { 'application/json': { schema: ListDiscoveredResourcesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListDiscoveredResourcesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubListMigrationTasksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ListMigrationTasks',
  description:
    '<p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>',
  operationId: 'ListMigrationTasks',
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
        .literal('AWSMigrationHub.ListMigrationTasks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ListMigrationTasks'] },
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
      content: { 'application/json': { schema: ListMigrationTasksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMigrationTasksResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'PolicyErrorException',
      content: { 'application/json': { schema: PolicyErrorExceptionSchema } },
    },
    486: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    487: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubListProgressUpdateStreamsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams',
  description: 'Lists progress update streams associated with the user account making this call.',
  operationId: 'ListProgressUpdateStreams',
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
        .literal('AWSMigrationHub.ListProgressUpdateStreams')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.ListProgressUpdateStreams'] },
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
      content: { 'application/json': { schema: ListProgressUpdateStreamsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProgressUpdateStreamsResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    485: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubNotifyApplicationStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.NotifyApplicationState',
  description:
    'Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.',
  operationId: 'NotifyApplicationState',
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
        .literal('AWSMigrationHub.NotifyApplicationState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.NotifyApplicationState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NotifyApplicationStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotifyApplicationStateResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'PolicyErrorException',
      content: { 'application/json': { schema: PolicyErrorExceptionSchema } },
    },
    488: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    489: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubNotifyMigrationTaskStateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState',
  description:
    '<p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>',
  operationId: 'NotifyMigrationTaskState',
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
        .literal('AWSMigrationHub.NotifyMigrationTaskState')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.NotifyMigrationTaskState'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NotifyMigrationTaskStateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotifyMigrationTaskStateResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})

export const postXAmzTargetAWSMigrationHubPutResourceAttributesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=AWSMigrationHub.PutResourceAttributes',
  description:
    '<p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>',
  operationId: 'PutResourceAttributes',
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
        .literal('AWSMigrationHub.PutResourceAttributes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['AWSMigrationHub.PutResourceAttributes'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PutResourceAttributesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourceAttributesResultSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'InternalServerError',
      content: { 'application/json': { schema: InternalServerErrorSchema } },
    },
    483: {
      description: 'ServiceUnavailableException',
      content: { 'application/json': { schema: ServiceUnavailableExceptionSchema } },
    },
    484: {
      description: 'DryRunOperation',
      content: { 'application/json': { schema: DryRunOperationSchema } },
    },
    485: {
      description: 'UnauthorizedOperation',
      content: { 'application/json': { schema: UnauthorizedOperationSchema } },
    },
    486: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    487: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    488: {
      description: 'HomeRegionNotSetException',
      content: { 'application/json': { schema: HomeRegionNotSetExceptionSchema } },
    },
  },
})
