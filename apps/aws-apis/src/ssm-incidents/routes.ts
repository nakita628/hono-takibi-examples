import { createRoute, z } from '@hono/zod-openapi'

const SnsArnSchema = z.string().min(0).max(1000).openapi('SnsArn')

const ChatbotSnsConfigurationSetSchema = z
  .array(SnsArnSchema)
  .min(1)
  .max(5)
  .openapi('ChatbotSnsConfigurationSet')

const EmptyChatChannelSchema = z
  .object({})
  .openapi({
    description: 'Used to remove the chat channel from an incident record or response plan.',
  })
  .openapi('EmptyChatChannel')

type ChatChannelType = {
  chatbotSns?: z.infer<typeof ChatbotSnsConfigurationSetSchema> & { [key: string]: unknown }
  empty?: z.infer<typeof EmptyChatChannelSchema> & { [key: string]: unknown }
}

const ArnSchema = z
  .string()
  .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
  .min(0)
  .max(1000)
  .openapi('Arn')

const CreateReplicationSetOutputSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication set. ' }),
    ),
  })
  .openapi({ required: ['arn'] })
  .openapi('CreateReplicationSetOutput')

const SseKmsKeySchema = z.string().min(0).max(2048).openapi('SseKmsKey')

const RegionMapInputValueSchema = z
  .object({
    sseKmsKeyId: SseKmsKeySchema.and(
      z
        .any()
        .openapi({ description: 'The KMS key used to encrypt the data in your replication set.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "The mapping between a Amazon Web Services Region and the key that's used to encrypt the data.",
    required: [],
  })
  .openapi('RegionMapInputValue')

const TagValueSchema = z
  .string()
  .regex(/^[A-Za-z0-9 _=@:.+-\/]*$/)
  .min(0)
  .max(256)
  .openapi('TagValue')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const CreateResponsePlanOutputSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
    ),
  })
  .openapi({ required: ['arn'] })
  .openapi('CreateResponsePlanOutput')

const SsmAutomationDocumentNameStringSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\-.:\/]{3,128}$/)
  .openapi('SsmAutomationDocumentNameString')

const SsmAutomationDocumentVersionStringSchema = z
  .string()
  .min(0)
  .max(128)
  .openapi('SsmAutomationDocumentVersionString')

const VariableTypeSchema = z
  .enum(['INCIDENT_RECORD_ARN', 'INVOLVED_RESOURCES'])
  .openapi('VariableType')

const DynamicSsmParameterValueSchema = z
  .object({
    variable: VariableTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Variable dynamic parameters. A parameter value is determined when an incident is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The dynamic SSM parameter value.', required: [] })
  .openapi('DynamicSsmParameterValue')

const DynamicSsmParametersSchema = z
  .record(z.string(), DynamicSsmParameterValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('DynamicSsmParameters')

const SsmParameterValuesMemberStringSchema = z
  .string()
  .min(0)
  .max(512)
  .openapi('SsmParameterValuesMemberString')

const SsmParameterValuesSchema = z
  .array(SsmParameterValuesMemberStringSchema)
  .min(0)
  .max(100)
  .openapi('SsmParameterValues')

const SsmParametersSchema = z
  .record(z.string(), SsmParameterValuesSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('SsmParameters')

const RoleArnSchema = z
  .string()
  .regex(/^arn:aws(-cn|-us-gov)?:iam::([0-9]{12})?:role\/.+$/)
  .min(0)
  .max(1000)
  .openapi('RoleArn')

const SsmTargetAccountSchema = z
  .enum(['RESPONSE_PLAN_OWNER_ACCOUNT', 'IMPACTED_ACCOUNT'])
  .openapi('SsmTargetAccount')

const SsmAutomationSchema = z
  .object({
    documentName: SsmAutomationDocumentNameStringSchema.and(
      z.any().openapi({ description: "The automation document's name." }),
    ),
    documentVersion: SsmAutomationDocumentVersionStringSchema.and(
      z.any().openapi({ description: "The automation document's version to use when running." }),
    ).exactOptional(),
    dynamicParameters: DynamicSsmParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook.',
        }),
    ).exactOptional(),
    parameters: SsmParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The key-value pair parameters to use when running the automation document.',
        }),
    ).exactOptional(),
    roleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the role that the automation document will assume when running commands.',
        }),
    ),
    targetAccount: SsmTargetAccountSchema.and(
      z
        .any()
        .openapi({
          description:
            'The account that the automation document will be run in. This can be in either the management account or an application account.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['documentName', 'roleArn'],
    description:
      'Details about the Systems Manager automation document that will be used as a runbook during an incident.',
  })
  .openapi('SsmAutomation')

const ActionSchema = z
  .object({
    ssmAutomation: SsmAutomationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Systems Manager automation document to start as the runbook at the beginning of the incident.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The action that starts at the beginning of an incident. The response plan defines the action.',
    required: [],
  })
  .openapi('Action')

const SsmContactsArnSchema = z
  .string()
  .regex(/^arn:aws(-cn|-us-gov)?:ssm-contacts:[a-z0-9-]*:([0-9]{12}):contact\/[a-z0-9_-]+$/)
  .min(0)
  .max(2048)
  .openapi('SsmContactsArn')

const DedupeStringSchema = z.string().min(0).max(1000).openapi('DedupeString')

const ImpactSchema = z.int().min(1).max(5).openapi('Impact')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const NotificationTargetItemSchema = z
  .object({
    snsTopicArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the SNS topic.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The SNS targets that are notified when updates are made to an incident.',
    required: [],
  })
  .openapi('NotificationTargetItem')

const NotificationTargetSetSchema = z
  .array(NotificationTargetItemSchema)
  .min(0)
  .max(10)
  .openapi('NotificationTargetSet')

const IncidentSummarySchema = z.string().min(0).max(8000).openapi('IncidentSummary')

const IncidentTitleSchema = z.string().min(0).max(200).openapi('IncidentTitle')

const PagerDutyConfigurationNameStringSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('PagerDutyConfigurationNameString')

const PagerDutyIncidentConfigurationServiceIdStringSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('PagerDutyIncidentConfigurationServiceIdString')

const PagerDutyIncidentConfigurationSchema = z
  .object({
    serviceId: PagerDutyIncidentConfigurationServiceIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the PagerDuty service that the response plan associates with an incident when it launches.',
        }),
    ),
  })
  .openapi({
    required: ['serviceId'],
    description: 'Details about the PagerDuty service where the response plan creates an incident.',
  })
  .openapi('PagerDutyIncidentConfiguration')

const PagerDutyConfigurationSecretIdStringSchema = z
  .string()
  .min(1)
  .max(512)
  .openapi('PagerDutyConfigurationSecretIdString')

const PagerDutyConfigurationSchema = z
  .object({
    name: PagerDutyConfigurationNameStringSchema.and(
      z.any().openapi({ description: 'The name of the PagerDuty configuration.' }),
    ),
    pagerDutyIncidentConfiguration: PagerDutyIncidentConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the PagerDuty service associated with the configuration.',
        }),
    ),
    secretId: PagerDutyConfigurationSecretIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.',
        }),
    ),
  })
  .openapi({
    required: ['name', 'pagerDutyIncidentConfiguration', 'secretId'],
    description: 'Details about the PagerDuty configuration for a response plan.',
  })
  .openapi('PagerDutyConfiguration')

const IntegrationSchema = z
  .object({
    pagerDutyConfiguration: PagerDutyConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the PagerDuty service where the response plan creates an incident.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Information about third-party services integrated into a response plan.',
    required: [],
  })
  .openapi('Integration')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const UUIDSchema = z.string().min(0).max(50).openapi('UUID')

const CreateTimelineEventOutputSchema = z
  .object({
    eventId: UUIDSchema.and(
      z.any().openapi({ description: 'The ID of the event for easy reference later. ' }),
    ),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of the incident record that you added the event to.' }),
    ),
  })
  .openapi({ required: ['eventId', 'incidentRecordArn'] })
  .openapi('CreateTimelineEventOutput')

const GeneratedIdSchema = z
  .string()
  .regex(
    /^related-item\/(ANALYSIS|INCIDENT|METRIC|PARENT|ATTACHMENT|OTHER|AUTOMATION|INVOLVED_RESOURCE|TASK)\/([0-9]|[A-F]){32}$/,
  )
  .min(0)
  .max(200)
  .openapi('GeneratedId')

const EventReferenceSchema = z
  .object({
    relatedItemId: GeneratedIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of a <code>RelatedItem</code> referenced in a <code>TimelineEvent</code>.',
        }),
    ).exactOptional(),
    resource: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of an Amazon Web Services resource referenced in a <code>TimelineEvent</code>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'An item referenced in a <code>TimelineEvent</code> that is involved in or somehow associated with an incident. You can specify an Amazon Resource Name (ARN) for an Amazon Web Services resource or a <code>RelatedItem</code> ID.',
    required: [],
  })
  .openapi('EventReference')

const DeleteIncidentRecordOutputSchema = z.object({}).openapi('DeleteIncidentRecordOutput')

const DeleteReplicationSetOutputSchema = z.object({}).openapi('DeleteReplicationSetOutput')

const DeleteResourcePolicyOutputSchema = z.object({}).openapi('DeleteResourcePolicyOutput')

const DeleteResponsePlanOutputSchema = z.object({}).openapi('DeleteResponsePlanOutput')

const DeleteTimelineEventOutputSchema = z.object({}).openapi('DeleteTimelineEventOutput')

const AutomationExecutionSchema = z
  .object({
    ssmExecutionArn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the automation process.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Systems Manager automation document process to start as the runbook at the beginning of the incident.',
    required: [],
  })
  .openapi('AutomationExecution')

const AutomationExecutionSetSchema = z
  .array(AutomationExecutionSchema)
  .min(0)
  .max(100)
  .openapi('AutomationExecutionSet')

const ChatChannelSchema: z.ZodType<ChatChannelType> = z
  .lazy(() =>
    z
      .object({
        chatbotSns: ChatbotSnsConfigurationSetSchema.and(
          z
            .any()
            .openapi({
              description:
                'The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics. ',
            }),
        ).exactOptional(),
        empty: EmptyChatChannelSchema.and(
          z
            .any()
            .openapi({
              description:
                'Used to remove the chat channel from an incident record or response plan.',
            }),
        ).exactOptional(),
      })
      .openapi({
        description: 'The Chatbot chat channel used for collaboration during an incident.',
        required: [],
      }),
  )
  .openapi('ChatChannel')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ServicePrincipalSchema = z.string().min(0).max(1000).openapi('ServicePrincipal')

const IncidentSourceSchema = z.string().min(0).max(50).openapi('IncidentSource')

const IncidentRecordSourceSchema = z
  .object({
    createdBy: ArnSchema.and(
      z.any().openapi({ description: 'The principal that started the incident.' }),
    ),
    invokedBy: ServicePrincipalSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service principal that assumed the role specified in <code>createdBy</code>. If no service principal assumed the role this will be left blank.',
        }),
    ).exactOptional(),
    resourceArn: ArnSchema.and(
      z.any().openapi({ description: 'The resource that caused the incident to be created.' }),
    ).exactOptional(),
    source: IncidentSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The service that started the incident. This can be manually created from Incident Manager, automatically created using an Amazon CloudWatch alarm, or Amazon EventBridge event.',
        }),
    ),
  })
  .openapi({
    required: ['createdBy', 'source'],
    description: 'Details about what created the incident record and when it was created.',
  })
  .openapi('IncidentRecordSource')

const IncidentRecordStatusSchema = z.enum(['OPEN', 'RESOLVED']).openapi('IncidentRecordStatus')

const IncidentRecordSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the incident record.' }),
    ),
    automationExecutions: AutomationExecutionSetSchema.and(
      z
        .any()
        .openapi({
          description:
            "The runbook, or automation document, that's run at the beginning of the incident.",
        }),
    ).exactOptional(),
    chatChannel: ChatChannelSchema.and(
      z
        .any()
        .openapi({ description: 'The chat channel used for collaboration during an incident.' }),
    ).exactOptional(),
    creationTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time that Incident Manager created the incident record.' }),
    ),
    dedupeString: DedupeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.',
        }),
    ),
    impact: ImpactSchema.and(
      z.any().openapi({ description: 'The impact of the incident on customers and applications.' }),
    ),
    incidentRecordSource: IncidentRecordSourceSchema.and(
      z.any().openapi({ description: 'Details about the action that started the incident.' }),
    ),
    lastModifiedBy: ArnSchema.and(
      z.any().openapi({ description: 'Who modified the incident most recently.' }),
    ),
    lastModifiedTime: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The time at which the incident was most recently modified.' }),
    ),
    notificationTargets: NotificationTargetSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS targets that are notified when updates are made to an incident.',
        }),
    ).exactOptional(),
    resolvedTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time at which the incident was resolved. This appears as a timeline event.',
        }),
    ).exactOptional(),
    status: IncidentRecordStatusSchema.and(
      z.any().openapi({ description: 'The current status of the incident.' }),
    ),
    summary: IncidentSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context of the incident.",
        }),
    ).exactOptional(),
    title: IncidentTitleSchema.and(z.any().openapi({ description: 'The title of the incident.' })),
  })
  .openapi({
    required: [
      'arn',
      'creationTime',
      'dedupeString',
      'impact',
      'incidentRecordSource',
      'lastModifiedBy',
      'lastModifiedTime',
      'status',
      'title',
    ],
    description: "The record of the incident that's created when an incident occurs.",
  })
  .openapi('IncidentRecord')

const GetIncidentRecordOutputSchema = z
  .object({
    incidentRecord: IncidentRecordSchema.and(
      z.any().openapi({ description: 'Details the structure of the incident record.' }),
    ),
  })
  .openapi({ required: ['incidentRecord'] })
  .openapi('GetIncidentRecordOutput')

const BooleanSchema = z.boolean().openapi('Boolean')

const RegionStatusSchema = z
  .enum(['ACTIVE', 'CREATING', 'DELETING', 'FAILED'])
  .openapi('RegionStatus')

const StringSchema = z.string().openapi('String')

const RegionInfoSchema = z
  .object({
    sseKmsKeyId: SseKmsKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the KMS key used to encrypt the data in this Amazon Web Services Region.',
        }),
    ).exactOptional(),
    status: RegionStatusSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the Amazon Web Services Region in the replication set.',
        }),
    ),
    statusMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Information displayed about the status of the Amazon Web Services Region.',
        }),
    ).exactOptional(),
    statusUpdateDateTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "The most recent date and time that Incident Manager updated the Amazon Web Services Region's status.",
        }),
    ),
  })
  .openapi({
    required: ['status', 'statusUpdateDateTime'],
    description: 'Information about a Amazon Web Services Region in your replication set.',
  })
  .openapi('RegionInfo')

const RegionInfoMapSchema = z.record(z.string(), RegionInfoSchema).openapi('RegionInfoMap')

const ReplicationSetStatusSchema = z
  .enum(['ACTIVE', 'CREATING', 'UPDATING', 'DELETING', 'FAILED'])
  .openapi('ReplicationSetStatus')

const ReplicationSetSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the replication set.' }),
    ).exactOptional(),
    createdBy: ArnSchema.and(
      z.any().openapi({ description: 'Details about who created the replication set.' }),
    ),
    createdTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the replication set was created.' }),
    ),
    deletionProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Determines if the replication set deletion protection is enabled or not. If deletion protection is enabled, you can't delete the last Amazon Web Services Region in the replication set. ",
        }),
    ),
    lastModifiedBy: ArnSchema.and(
      z.any().openapi({ description: 'Who last modified the replication set.' }),
    ),
    lastModifiedTime: TimestampSchema.and(
      z.any().openapi({ description: 'When the replication set was last updated.' }),
    ),
    regionMap: RegionInfoMapSchema.and(
      z
        .any()
        .openapi({
          description:
            "The map between each Amazon Web Services Region in your replication set and the KMS key that's used to encrypt the data in that Region.",
        }),
    ),
    status: ReplicationSetStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            "The status of the replication set. If the replication set is still pending, you can't use Incident Manager functionality.",
        }),
    ),
  })
  .openapi({
    required: [
      'createdBy',
      'createdTime',
      'deletionProtected',
      'lastModifiedBy',
      'lastModifiedTime',
      'regionMap',
      'status',
    ],
    description:
      'The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data. ',
  })
  .openapi('ReplicationSet')

const GetReplicationSetOutputSchema = z
  .object({
    replicationSet: ReplicationSetSchema.and(
      z.any().openapi({ description: 'Details of the replication set.' }),
    ),
  })
  .openapi({ required: ['replicationSet'] })
  .openapi('GetReplicationSetOutput')

const NextTokenSchema = z.string().min(0).max(2000).openapi('NextToken')

const PolicySchema = z.string().min(0).max(4000).openapi('Policy')

const PolicyIdSchema = z.string().min(0).max(256).openapi('PolicyId')

const ResourcePolicySchema = z
  .object({
    policyDocument: PolicySchema.and(
      z.any().openapi({ description: 'The JSON blob that describes the policy.' }),
    ),
    policyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource policy.' }),
    ),
    ramResourceShareRegion: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region that policy allows resources to be used in.',
        }),
    ),
  })
  .openapi({
    required: ['policyDocument', 'policyId', 'ramResourceShareRegion'],
    description:
      'The resource policy that allows Incident Manager to perform actions on resources on your behalf.',
  })
  .openapi('ResourcePolicy')

const ResourcePolicyListSchema = z
  .array(ResourcePolicySchema)
  .min(0)
  .max(100)
  .openapi('ResourcePolicyList')

const GetResourcePoliciesOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    resourcePolicies: ResourcePolicyListSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the resource policy attached to the response plan.',
        }),
    ),
  })
  .openapi({ required: ['resourcePolicies'] })
  .openapi('GetResourcePoliciesOutput')

const ActionsListSchema = z.array(ActionSchema).min(0).max(1).openapi('ActionsList')

const ResponsePlanDisplayNameSchema = z.string().min(0).max(200).openapi('ResponsePlanDisplayName')

const EngagementSetSchema = z.array(SsmContactsArnSchema).min(0).max(5).openapi('EngagementSet')

const IncidentTemplateSchema = z
  .object({
    dedupeString: DedupeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'Used to stop Incident Manager from creating multiple incident records for the same incident. ',
        }),
    ).exactOptional(),
    impact: ImpactSchema.and(
      z
        .any()
        .openapi({
          description: 'The impact of the incident on your customers and applications. ',
        }),
    ),
    incidentTags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident.',
        }),
    ).exactOptional(),
    notificationTargets: NotificationTargetSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS targets that are notified when updates are made to an incident.',
        }),
    ).exactOptional(),
    summary: IncidentSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context.",
        }),
    ).exactOptional(),
    title: IncidentTitleSchema.and(z.any().openapi({ description: 'The title of the incident. ' })),
  })
  .openapi({
    required: ['impact', 'title'],
    description:
      'Basic details used in creating a response plan. The response plan is then used to create an incident record.',
  })
  .openapi('IncidentTemplate')

const IntegrationsSchema = z.array(IntegrationSchema).min(0).max(1).openapi('Integrations')

const ResponsePlanNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_]*$/)
  .min(1)
  .max(200)
  .openapi('ResponsePlanName')

const GetResponsePlanOutputSchema = z
  .object({
    actions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The actions that this response plan takes at the beginning of the incident.',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(z.any().openapi({ description: 'The ARN of the response plan.' })),
    chatChannel: ChatChannelSchema.and(
      z
        .any()
        .openapi({
          description: 'The Chatbot chat channel used for collaboration during an incident.',
        }),
    ).exactOptional(),
    displayName: ResponsePlanDisplayNameSchema.and(
      z
        .any()
        .openapi({ description: 'The long format name of the response plan. Can contain spaces.' }),
    ).exactOptional(),
    engagements: EngagementSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.',
        }),
    ).exactOptional(),
    incidentTemplate: IncidentTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'Details used to create the incident when using this response plan.',
        }),
    ),
    integrations: IntegrationsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about third-party services integrated into the Incident Manager response plan.',
        }),
    ).exactOptional(),
    name: ResponsePlanNameSchema.and(
      z
        .any()
        .openapi({
          description: "The short format name of the response plan. The name can't contain spaces.",
        }),
    ),
  })
  .openapi({ required: ['arn', 'incidentTemplate', 'name'] })
  .openapi('GetResponsePlanOutput')

const EventDataSchema = z.string().min(0).max(12000).openapi('EventData')

const EventReferenceListSchema = z
  .array(EventReferenceSchema)
  .min(0)
  .max(10)
  .openapi('EventReferenceList')

const TimelineEventTypeSchema = z.string().min(0).max(100).openapi('TimelineEventType')

const TimelineEventSchema = z
  .object({
    eventData: EventDataSchema.and(
      z.any().openapi({ description: 'A short description of the event.' }),
    ),
    eventId: UUIDSchema.and(z.any().openapi({ description: 'The ID of the timeline event.' })),
    eventReferences: EventReferenceListSchema.and(
      z.any().openapi({ description: 'A list of references in a <code>TimelineEvent</code>.' }),
    ).exactOptional(),
    eventTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the event occurred.' }),
    ),
    eventType: TimelineEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event that occurred. Currently Incident Manager supports only the <code>Custom Event</code> type.',
        }),
    ),
    eventUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the timeline event was last updated.' }),
    ),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident that the event occurred during.',
        }),
    ),
  })
  .openapi({
    required: [
      'eventData',
      'eventId',
      'eventTime',
      'eventType',
      'eventUpdatedTime',
      'incidentRecordArn',
    ],
    description: 'A significant event that happened during the incident. ',
  })
  .openapi('TimelineEvent')

const GetTimelineEventOutputSchema = z
  .object({
    event: TimelineEventSchema.and(
      z.any().openapi({ description: 'Details about the timeline event.' }),
    ),
  })
  .openapi({ required: ['event'] })
  .openapi('GetTimelineEventOutput')

const IncidentRecordSummarySchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the incident.' }),
    ),
    creationTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the incident was created.' }),
    ),
    impact: ImpactSchema.and(
      z.any().openapi({ description: 'Defines the impact to customers and applications.' }),
    ),
    incidentRecordSource: IncidentRecordSourceSchema.and(
      z.any().openapi({ description: 'What caused Incident Manager to create the incident.' }),
    ),
    resolvedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time the incident was resolved.' }),
    ).exactOptional(),
    status: IncidentRecordStatusSchema.and(
      z.any().openapi({ description: 'The current status of the incident.' }),
    ),
    title: IncidentTitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The title of the incident. This value is either provided by the response plan or overwritten on creation.',
        }),
    ),
  })
  .openapi({
    required: ['arn', 'creationTime', 'impact', 'incidentRecordSource', 'status', 'title'],
    description: 'Details describing an incident record.',
  })
  .openapi('IncidentRecordSummary')

const IncidentRecordSummaryListSchema = z
  .array(IncidentRecordSummarySchema)
  .min(0)
  .max(100)
  .openapi('IncidentRecordSummaryList')

const ListIncidentRecordsOutputSchema = z
  .object({
    incidentRecordSummaries: IncidentRecordSummaryListSchema.and(
      z.any().openapi({ description: 'The details of each listed incident record.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['incidentRecordSummaries'] })
  .openapi('ListIncidentRecordsOutput')

const IntegerSchema = z.int().openapi('Integer')

const IntegerListSchema = z.array(IntegerSchema).min(0).max(100).openapi('IntegerList')

const StringListMemberStringSchema = z.string().min(0).max(1000).openapi('StringListMemberString')

const StringListSchema = z.array(StringListMemberStringSchema).min(0).max(100).openapi('StringList')

const AttributeValueListSchema = z
  .object({
    integerValues: IntegerListSchema.and(
      z.any().openapi({ description: 'The list of integer values that the filter matches.' }),
    ).exactOptional(),
    stringValues: StringListSchema.and(
      z.any().openapi({ description: 'The list of string values that the filter matches.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Use the AttributeValueList to filter by string or integer values.',
    required: [],
  })
  .openapi('AttributeValueList')

const ConditionSchema = z
  .object({
    after: TimestampSchema.and(
      z.any().openapi({ description: 'After the specified timestamp.' }),
    ).exactOptional(),
    before: TimestampSchema.and(
      z.any().openapi({ description: 'Before the specified timestamp' }),
    ).exactOptional(),
    equals: AttributeValueListSchema.and(
      z.any().openapi({ description: 'The value is equal to the provided string or integer. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A conditional statement with which to compare a value, after a timestamp, before a timestamp, or equal to a string or integer. If multiple conditions are specified, the conditionals become an <code>AND</code>ed statement. If multiple values are specified for a conditional, the values are <code>OR</code>d.',
    required: [],
  })
  .openapi('Condition')

const FilterKeyStringSchema = z.string().min(0).max(50).openapi('FilterKeyString')

const FilterSchema = z
  .object({
    condition: ConditionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The condition accepts before or after a specified time, equal to a string, or equal to an integer.',
        }),
    ),
    key: FilterKeyStringSchema.and(
      z.any().openapi({ description: "The key that you're filtering on." }),
    ),
  })
  .openapi({
    required: ['condition', 'key'],
    description: 'Filter the selection by using a condition.',
  })
  .openapi('Filter')

const ItemTypeSchema = z
  .enum([
    'ANALYSIS',
    'INCIDENT',
    'METRIC',
    'PARENT',
    'ATTACHMENT',
    'OTHER',
    'AUTOMATION',
    'INVOLVED_RESOURCE',
    'TASK',
  ])
  .openapi('ItemType')

const MetricDefinitionSchema = z.string().min(0).max(4000).openapi('MetricDefinition')

const PagerDutyIncidentDetailIdStringSchema = z
  .string()
  .min(1)
  .max(200)
  .openapi('PagerDutyIncidentDetailIdString')

const PagerDutyIncidentDetailSecretIdStringSchema = z
  .string()
  .min(1)
  .max(512)
  .openapi('PagerDutyIncidentDetailSecretIdString')

const PagerDutyIncidentDetailSchema = z
  .object({
    autoResolve: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates whether to resolve the PagerDuty incident when you resolve the associated Incident Manager incident.',
        }),
    ).exactOptional(),
    id: PagerDutyIncidentDetailIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the incident associated with the PagerDuty service for the response plan.',
        }),
    ),
    secretId: PagerDutyIncidentDetailSecretIdStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Amazon Web Services Secrets Manager secret that stores your PagerDuty key, either a General Access REST API Key or User Token REST API Key, and other user credentials.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['id'],
    description:
      'Details about the PagerDuty incident associated with an incident created by an Incident Manager response plan.',
  })
  .openapi('PagerDutyIncidentDetail')

const UrlSchema = z.string().min(0).max(1000).openapi('Url')

const ItemValueSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the related item, if the related item is an Amazon resource.',
        }),
    ).exactOptional(),
    metricDefinition: MetricDefinitionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric definition, if the related item is a metric in Amazon CloudWatch.',
        }),
    ).exactOptional(),
    pagerDutyIncidentDetail: PagerDutyIncidentDetailSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about an incident that is associated with a PagerDuty incident.',
        }),
    ).exactOptional(),
    url: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL, if the related item is a non-Amazon Web Services resource.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Describes a related item.', required: [] })
  .openapi('ItemValue')

const ItemIdentifierSchema = z
  .object({
    type: ItemTypeSchema.and(z.any().openapi({ description: 'The type of related item. ' })),
    value: ItemValueSchema.and(z.any().openapi({ description: 'Details about the related item.' })),
  })
  .openapi({ required: ['type', 'value'], description: 'Details and type of a related item.' })
  .openapi('ItemIdentifier')

const RelatedItemTitleStringSchema = z.string().min(0).max(200).openapi('RelatedItemTitleString')

const RelatedItemSchema = z
  .object({
    generatedId: GeneratedIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A unique ID for a <code>RelatedItem</code>.</p> <important> <p>Don't specify this parameter when you add a <code>RelatedItem</code> by using the <a>UpdateRelatedItems</a> API action.</p> </important>",
        }),
    ).exactOptional(),
    identifier: ItemIdentifierSchema.and(
      z.any().openapi({ description: 'Details about the related item.' }),
    ),
    title: RelatedItemTitleStringSchema.and(
      z.any().openapi({ description: 'The title of the related item.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['identifier'],
    description: 'Resources that responders use to triage and mitigate the incident.',
  })
  .openapi('RelatedItem')

const RelatedItemListSchema = z.array(RelatedItemSchema).min(0).max(100).openapi('RelatedItemList')

const ListRelatedItemsOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    relatedItems: RelatedItemListSchema.and(
      z.any().openapi({ description: 'Details about each related item.' }),
    ),
  })
  .openapi({ required: ['relatedItems'] })
  .openapi('ListRelatedItemsOutput')

const ReplicationSetArnListSchema = z.array(ArnSchema).openapi('ReplicationSetArnList')

const ListReplicationSetsOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    replicationSetArns: ReplicationSetArnListSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the list replication set.' }),
    ),
  })
  .openapi({ required: ['replicationSetArns'] })
  .openapi('ListReplicationSetsOutput')

const ResponsePlanSummarySchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
    ),
    displayName: ResponsePlanDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The human readable name of the response plan. This can include spaces.',
        }),
    ).exactOptional(),
    name: ResponsePlanNameSchema.and(
      z.any().openapi({ description: "The name of the response plan. This can't include spaces." }),
    ),
  })
  .openapi({
    required: ['arn', 'name'],
    description: 'Details of the response plan that are used when creating an incident.',
  })
  .openapi('ResponsePlanSummary')

const ResponsePlanSummaryListSchema = z
  .array(ResponsePlanSummarySchema)
  .min(0)
  .max(100)
  .openapi('ResponsePlanSummaryList')

const ListResponsePlansOutputSchema = z
  .object({
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    responsePlanSummaries: ResponsePlanSummaryListSchema.and(
      z.any().openapi({ description: 'Details of each response plan.' }),
    ),
  })
  .openapi({ required: ['responsePlanSummaries'] })
  .openapi('ListResponsePlansOutput')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags for the response plan.' }),
    ),
  })
  .openapi({ required: ['tags'] })
  .openapi('ListTagsForResourceResponse')

const EventSummarySchema = z
  .object({
    eventId: UUIDSchema.and(z.any().openapi({ description: 'The timeline event ID.' })),
    eventReferences: EventReferenceListSchema.and(
      z.any().openapi({ description: 'A list of references in a <code>TimelineEvent</code>.' }),
    ).exactOptional(),
    eventTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the event occurred.' }),
    ),
    eventType: TimelineEventTypeSchema.and(
      z
        .any()
        .openapi({
          description: 'The type of event. The timeline event must be <code>Custom Event</code>.',
        }),
    ),
    eventUpdatedTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the timeline event was last updated.' }),
    ),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident that the event happened during.',
        }),
    ),
  })
  .openapi({
    required: ['eventId', 'eventTime', 'eventType', 'eventUpdatedTime', 'incidentRecordArn'],
    description: 'Details about a timeline event during an incident.',
  })
  .openapi('EventSummary')

const EventSummaryListSchema = z
  .array(EventSummarySchema)
  .min(0)
  .max(100)
  .openapi('EventSummaryList')

const ListTimelineEventsOutputSchema = z
  .object({
    eventSummaries: EventSummaryListSchema.and(
      z
        .any()
        .openapi({ description: 'Details about each event that occurred during the incident.' }),
    ),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['eventSummaries'] })
  .openapi('ListTimelineEventsOutput')

const PutResourcePolicyOutputSchema = z
  .object({
    policyId: PolicyIdSchema.and(
      z.any().openapi({ description: 'The ID of the resource policy.' }),
    ),
  })
  .openapi({ required: ['policyId'] })
  .openapi('PutResourcePolicyOutput')

const StartIncidentOutputSchema = z
  .object({
    incidentRecordArn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN of the newly created incident record.' }),
    ),
  })
  .openapi({ required: ['incidentRecordArn'] })
  .openapi('StartIncidentOutput')

const RawDataSchema = z.string().min(0).max(10000).openapi('RawData')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[A-Za-z0-9 _=@:.+-\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateDeletionProtectionOutputSchema = z.object({}).openapi('UpdateDeletionProtectionOutput')

const UpdateIncidentRecordOutputSchema = z.object({}).openapi('UpdateIncidentRecordOutput')

const UpdateRelatedItemsOutputSchema = z.object({}).openapi('UpdateRelatedItemsOutput')

const UpdateReplicationSetOutputSchema = z.object({}).openapi('UpdateReplicationSetOutput')

const RegionNameSchema = z.string().min(0).max(20).openapi('RegionName')

const AddRegionActionSchema = z
  .object({
    regionName: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Web Services Region name to add to the replication set.',
        }),
    ),
    sseKmsKeyId: SseKmsKeySchema.and(
      z.any().openapi({ description: 'The KMS key ID to use to encrypt your replication set.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['regionName'],
    description:
      'Defines the Amazon Web Services Region and KMS key to add to the replication set. ',
  })
  .openapi('AddRegionAction')

const DeleteRegionActionSchema = z
  .object({
    regionName: RegionNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The name of the Amazon Web Services Region you're deleting from the replication set.",
        }),
    ),
  })
  .openapi({
    required: ['regionName'],
    description:
      "Defines the information about the Amazon Web Services Region you're deleting from your replication set.",
  })
  .openapi('DeleteRegionAction')

const UpdateReplicationSetActionSchema = z
  .object({
    addRegionAction: AddRegionActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Details about the Amazon Web Services Region that you're adding to the replication set.",
        }),
    ).exactOptional(),
    deleteRegionAction: DeleteRegionActionSchema.and(
      z
        .any()
        .openapi({
          description:
            "Details about the Amazon Web Services Region that you're deleting to the replication set.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details used when updating the replication set.', required: [] })
  .openapi('UpdateReplicationSetAction')

const UpdateResponsePlanOutputSchema = z.object({}).openapi('UpdateResponsePlanOutput')

const UpdateTimelineEventOutputSchema = z.object({}).openapi('UpdateTimelineEventOutput')

const ClientTokenSchema = z.string().min(0).max(128).openapi('ClientToken')

const RegionMapInputSchema = z
  .record(z.string(), RegionMapInputValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 3)
  .openapi('RegionMapInput')

const CreateReplicationSetInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
    regions: RegionMapInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.',
        }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags to add to the replication set.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['regions'], title: 'CreateReplicationSetInput' })
  .openapi('CreateReplicationSetInput')

const CreateResponsePlanInputSchema = z
  .object({
    actions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The actions that the response plan starts at the beginning of an incident.',
        }),
    ).exactOptional(),
    chatChannel: ChatChannelSchema.and(
      z
        .any()
        .openapi({
          description: 'The Chatbot chat channel used for collaboration during an incident.',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
    displayName: ResponsePlanDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description: 'The long format of the response plan name. This field can contain spaces.',
        }),
    ).exactOptional(),
    engagements: EngagementSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.',
        }),
    ).exactOptional(),
    incidentTemplate: IncidentTemplateSchema.and(
      z
        .any()
        .openapi({
          description: 'Details used to create an incident when using this response plan.',
        }),
    ),
    integrations: IntegrationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about third-party services integrated into the response plan.',
        }),
    ).exactOptional(),
    name: ResponsePlanNameSchema.and(
      z
        .any()
        .openapi({
          description: "The short format name of the response plan. Can't include spaces.",
        }),
    ),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags that you are adding to the response plan.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['incidentTemplate', 'name'], title: 'CreateResponsePlanInput' })
  .openapi('CreateResponsePlanInput')

const CreateTimelineEventInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that a client calls the action only once with the specified details.',
        }),
    ).exactOptional(),
    eventData: EventDataSchema.and(
      z.any().openapi({ description: 'A short description of the event.' }),
    ),
    eventReferences: EventReferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            "Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.",
        }),
    ).exactOptional(),
    eventTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the event occurred.' }),
    ),
    eventType: TimelineEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event. You can create timeline events of type <code>Custom Event</code>.',
        }),
    ),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.',
        }),
    ),
  })
  .openapi({
    required: ['eventData', 'eventTime', 'eventType', 'incidentRecordArn'],
    title: 'CreateTimelineEventInput',
  })
  .openapi('CreateTimelineEventInput')

const DeleteIncidentRecordInputSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the incident record you are deleting.',
        }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteIncidentRecordInput' })
  .openapi('DeleteIncidentRecordInput')

const DeleteReplicationSetInputSchema = z
  .object({})
  .openapi({ title: 'DeleteReplicationSetInput' })
  .openapi('DeleteReplicationSetInput')

const DeleteResourcePolicyInputSchema = z
  .object({
    policyId: PolicyIdSchema.and(
      z.any().openapi({ description: "The ID of the resource policy you're deleting." }),
    ),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The Amazon Resource Name (ARN) of the resource you're deleting the policy from.",
        }),
    ),
  })
  .openapi({ required: ['policyId', 'resourceArn'], title: 'DeleteResourcePolicyInput' })
  .openapi('DeleteResourcePolicyInput')

const DeleteResponsePlanInputSchema = z
  .object({
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
    ),
  })
  .openapi({ required: ['arn'], title: 'DeleteResponsePlanInput' })
  .openapi('DeleteResponsePlanInput')

const DeleteTimelineEventInputSchema = z
  .object({
    eventId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.",
        }),
    ),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
        }),
    ),
  })
  .openapi({ required: ['eventId', 'incidentRecordArn'], title: 'DeleteTimelineEventInput' })
  .openapi('DeleteTimelineEventInput')

const DynamicSsmParametersKeyStringSchema = z
  .string()
  .min(1)
  .max(50)
  .openapi('DynamicSsmParametersKeyString')

const FilterListSchema = z.array(FilterSchema).min(0).max(5).openapi('FilterList')

const GetIncidentRecordInputSchema = z
  .object({})
  .openapi({ title: 'GetIncidentRecordInput' })
  .openapi('GetIncidentRecordInput')

const GetReplicationSetInputSchema = z
  .object({})
  .openapi({ title: 'GetReplicationSetInput' })
  .openapi('GetReplicationSetInput')

const MaxResultsSchema = z.int().min(1).max(100).openapi('MaxResults')

const GetResourcePoliciesInputSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum number of resource policies to display for each page of results.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetResourcePoliciesInput', required: [] })
  .openapi('GetResourcePoliciesInput')

const GetResponsePlanInputSchema = z
  .object({})
  .openapi({ title: 'GetResponsePlanInput' })
  .openapi('GetResponsePlanInput')

const GetTimelineEventInputSchema = z
  .object({})
  .openapi({ title: 'GetTimelineEventInput' })
  .openapi('GetTimelineEventInput')

const ListIncidentRecordsInputSchema = z
  .object({
    filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Filters the list of incident records you want to search through. You can filter on the following keys:</p> <ul> <li> <p> <code>creationTime</code> </p> </li> <li> <p> <code>impact</code> </p> </li> <li> <p> <code>status</code> </p> </li> <li> <p> <code>createdBy</code> </p> </li> </ul> <p>Note the following when when you use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all incident records.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns incident records that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns incident records that match any of the values provided.</p> </li> </ul>",
        }),
    ).exactOptional(),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results per page.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListIncidentRecordsInput', required: [] })
  .openapi('ListIncidentRecordsInput')

const ListRelatedItemsInputSchema = z
  .object({
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident record containing the listed related items.',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of related items per page.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['incidentRecordArn'], title: 'ListRelatedItemsInput' })
  .openapi('ListRelatedItemsInput')

const ListReplicationSetsInputSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results per page. ' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReplicationSetsInput', required: [] })
  .openapi('ListReplicationSetsInput')

const ListResponsePlansInputSchema = z
  .object({
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of response plans per page.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListResponsePlansInput', required: [] })
  .openapi('ListResponsePlansInput')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const TimelineEventSortSchema = z.literal('EVENT_TIME').openapi('TimelineEventSort')

const SortOrderSchema = z.enum(['ASCENDING', 'DESCENDING']).openapi('SortOrder')

const ListTimelineEventsInputSchema = z
  .object({
    filters: FilterListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:</p> <ul> <li> <p> <code>eventTime</code> </p> </li> <li> <p> <code>eventType</code> </p> </li> </ul> <p>Note the following when deciding how to use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all timeline events.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns timeline events that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.</p> </li> </ul>",
        }),
    ).exactOptional(),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
        }),
    ),
    maxResults: MaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results per page.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({ description: 'The pagination token to continue to the next page of results.' }),
    ).exactOptional(),
    sortBy: TimelineEventSortSchema.and(
      z.any().openapi({ description: 'Sort timeline events by the specified key value pair.' }),
    ).exactOptional(),
    sortOrder: SortOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            'Sorts the order of timeline events by the value specified in the <code>sortBy</code> field.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['incidentRecordArn'], title: 'ListTimelineEventsInput' })
  .openapi('ListTimelineEventsInput')

const PutResourcePolicyInputSchema = z
  .object({
    policy: PolicySchema.and(z.any().openapi({ description: 'Details of the resource policy.' })),
    resourceArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the response plan to add the resource policy to.',
        }),
    ),
  })
  .openapi({ required: ['policy', 'resourceArn'], title: 'PutResourcePolicyInput' })
  .openapi('PutResourcePolicyInput')

const RelatedItemsUpdateSchema = z
  .object({
    itemToAdd: RelatedItemSchema.and(
      z.any().openapi({ description: "Details about the related item you're adding." }),
    ).exactOptional(),
    itemToRemove: ItemIdentifierSchema.and(
      z.any().openapi({ description: "Details about the related item you're deleting." }),
    ).exactOptional(),
  })
  .openapi({ description: "Details about the related item you're adding.", required: [] })
  .openapi('RelatedItemsUpdate')

const SsmParametersKeyStringSchema = z.string().min(1).max(50).openapi('SsmParametersKeyString')

const TriggerDetailsSchema = z
  .object({
    rawData: RawDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.',
        }),
    ).exactOptional(),
    source: IncidentSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "<code>aws.</code>" Customer-generated events can have any value here, as long as it doesn\'t begin with "<code>aws.</code>" We recommend the use of Java package-name style reverse domain-name strings. ',
        }),
    ),
    timestamp: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the incident was detected.' }),
    ),
    triggerArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the source that detected the incident.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source', 'timestamp'],
    description: 'Details about what caused the incident to be created in Incident Manager.',
  })
  .openapi('TriggerDetails')

const StartIncidentInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
    impact: ImpactSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren\'t impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren\'t currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>',
        }),
    ).exactOptional(),
    relatedItems: RelatedItemListSchema.and(
      z
        .any()
        .openapi({
          description:
            'Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket. ',
        }),
    ).exactOptional(),
    responsePlanArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident. ',
        }),
    ),
    title: IncidentTitleSchema.and(
      z
        .any()
        .openapi({
          description:
            'Provide a title for the incident. Providing a title overwrites the title provided by the response plan. ',
        }),
    ).exactOptional(),
    triggerDetails: TriggerDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details of what created the incident record in Incident Manager.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['responsePlanArn'], title: 'StartIncidentInput' })
  .openapi('StartIncidentInput')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagMapUpdateSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMapUpdate')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags to add to the response plan.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateDeletionProtectionInputSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the replication set to update.',
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
    deletionProtected: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: 'Specifies if deletion protection is turned on or off in your account. ',
        }),
    ),
  })
  .openapi({ required: ['arn', 'deletionProtected'], title: 'UpdateDeletionProtectionInput' })
  .openapi('UpdateDeletionProtectionInput')

const UpdateIncidentRecordInputSchema = z
  .object({
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of the incident record you are updating.',
        }),
    ),
    chatChannel: ChatChannelSchema.and(
      z
        .any()
        .openapi({ description: 'The Chatbot chat channel where responders can collaborate.' }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that a client calls the operation only once with the specified details.',
        }),
    ).exactOptional(),
    impact: ImpactSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren\'t impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren\'t currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>',
        }),
    ).exactOptional(),
    notificationTargets: NotificationTargetSetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon SNS targets that Incident Manager notifies when a client updates an incident.</p> <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.</p>',
        }),
    ).exactOptional(),
    status: IncidentRecordStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>.',
        }),
    ).exactOptional(),
    summary: IncidentSummarySchema.and(
      z
        .any()
        .openapi({ description: 'A longer description of what occurred during the incident.' }),
    ).exactOptional(),
    title: IncidentTitleSchema.and(
      z.any().openapi({ description: 'A brief description of the incident.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateIncidentRecordInput' })
  .openapi('UpdateIncidentRecordInput')

const UpdateRelatedItemsInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that a client calls the operation only once with the specified details.',
        }),
    ).exactOptional(),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.',
        }),
    ),
    relatedItemsUpdate: RelatedItemsUpdateSchema.and(
      z
        .any()
        .openapi({
          description: 'Details about the item that you are add to, or delete from, an incident.',
        }),
    ),
  })
  .openapi({
    required: ['incidentRecordArn', 'relatedItemsUpdate'],
    title: 'UpdateRelatedItemsInput',
  })
  .openapi('UpdateRelatedItemsInput')

const UpdateReplicationSetInputActionsListSchema = z
  .array(UpdateReplicationSetActionSchema)
  .length(1)
  .openapi('UpdateReplicationSetInputActionsList')

const UpdateReplicationSetInputSchema = z
  .object({
    actions: UpdateReplicationSetInputActionsListSchema.and(
      z.any().openapi({ description: 'An action to add or delete a Region.' }),
    ),
    arn: ArnSchema.and(
      z
        .any()
        .openapi({
          description: "The Amazon Resource Name (ARN) of the replication set you're updating.",
        }),
    ),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['actions', 'arn'], title: 'UpdateReplicationSetInput' })
  .openapi('UpdateReplicationSetInput')

const UpdateResponsePlanInputSchema = z
  .object({
    actions: ActionsListSchema.and(
      z
        .any()
        .openapi({
          description: 'The actions that this response plan takes at the beginning of an incident.',
        }),
    ).exactOptional(),
    arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
    ),
    chatChannel: ChatChannelSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Chatbot chat channel used for collaboration during an incident.</p> <p>Use the empty structure to remove the chat channel from the response plan.</p>',
        }),
    ).exactOptional(),
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token ensuring that the operation is called only once with the specified details.',
        }),
    ).exactOptional(),
    displayName: ResponsePlanDisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            "The long format name of the response plan. The display name can't contain spaces.",
        }),
    ).exactOptional(),
    engagements: EngagementSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.',
        }),
    ).exactOptional(),
    incidentTemplateDedupeString: DedupeStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.',
        }),
    ).exactOptional(),
    incidentTemplateImpact: ImpactSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>',
        }),
    ).exactOptional(),
    incidentTemplateNotificationTargets: NotificationTargetSetSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS targets that are notified when updates are made to an incident.',
        }),
    ).exactOptional(),
    incidentTemplateSummary: IncidentSummarySchema.and(
      z
        .any()
        .openapi({
          description:
            "A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.",
        }),
    ).exactOptional(),
    incidentTemplateTags: TagMapUpdateSchema.and(
      z
        .any()
        .openapi({
          description:
            'Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource.',
        }),
    ).exactOptional(),
    incidentTemplateTitle: IncidentTitleSchema.and(
      z
        .any()
        .openapi({
          description: "The short format name of the incident. The title can't contain spaces.",
        }),
    ).exactOptional(),
    integrations: IntegrationsSchema.and(
      z
        .any()
        .openapi({
          description: 'Information about third-party services integrated into the response plan.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['arn'], title: 'UpdateResponsePlanInput' })
  .openapi('UpdateResponsePlanInput')

const UpdateTimelineEventInputSchema = z
  .object({
    clientToken: ClientTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that ensures that a client calls the operation only once with the specified details.',
        }),
    ).exactOptional(),
    eventData: EventDataSchema.and(
      z.any().openapi({ description: 'A short description of the event.' }),
    ).exactOptional(),
    eventId: UUIDSchema.and(
      z
        .any()
        .openapi({
          description:
            "The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.",
        }),
    ),
    eventReferences: EventReferenceListSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.</p> <important> <p>This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.</p> </important>",
        }),
    ).exactOptional(),
    eventTime: TimestampSchema.and(
      z.any().openapi({ description: 'The time that the event occurred.' }),
    ).exactOptional(),
    eventType: TimelineEventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of event. You can update events of type <code>Custom Event</code>.',
        }),
    ).exactOptional(),
    incidentRecordArn: ArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
        }),
    ),
  })
  .openapi({ required: ['eventId', 'incidentRecordArn'], title: 'UpdateTimelineEventInput' })
  .openapi('UpdateTimelineEventInput')

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

export const postCreateReplicationSetRoute = createRoute({
  method: 'post',
  path: '/createReplicationSet',
  description:
    'A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. ',
  operationId: 'CreateReplicationSet',
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
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that the operation is called only once with the specified details.',
                }),
              regions: z
                .record(z.string(), RegionMapInputValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 3)
                .openapi({
                  description:
                    'The Regions that Incident Manager replicates your data to. You can have up to three Regions in your replication set.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'A list of tags to add to the replication set.' }),
            })
            .openapi({ required: ['regions'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateReplicationSetOutputSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateResponsePlanRoute = createRoute({
  method: 'post',
  path: '/createResponsePlan',
  description:
    'Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.',
  operationId: 'CreateResponsePlan',
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
              actions: z
                .array(ActionSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'The actions that the response plan starts at the beginning of an incident.',
                }),
              chatChannel: z
                .object({
                  chatbotSns: ChatbotSnsConfigurationSetSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics. ',
                      }),
                  ).exactOptional(),
                  empty: EmptyChatChannelSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Used to remove the chat channel from an incident record or response plan.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Chatbot chat channel used for collaboration during an incident.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token ensuring that the operation is called only once with the specified details.',
                }),
              displayName: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'The long format of the response plan name. This field can contain spaces.',
                }),
              engagements: z
                .array(SsmContactsArnSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.',
                }),
              incidentTemplate: z
                .object({
                  dedupeString: DedupeStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Used to stop Incident Manager from creating multiple incident records for the same incident. ',
                      }),
                  ).exactOptional(),
                  impact: ImpactSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The impact of the incident on your customers and applications. ',
                      }),
                  ).exactOptional(),
                  incidentTags: TagMapSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident.',
                      }),
                  ).exactOptional(),
                  notificationTargets: NotificationTargetSetSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS targets that are notified when updates are made to an incident.',
                      }),
                  ).exactOptional(),
                  summary: IncidentSummarySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "The summary of the incident. The summary is a brief synopsis of what occurred, what's currently happening, and context.",
                      }),
                  ).exactOptional(),
                  title: IncidentTitleSchema.and(
                    z.any().openapi({ description: 'The title of the incident. ' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Basic details used in creating a response plan. The response plan is then used to create an incident record.',
                  required: [],
                }),
              integrations: z
                .array(IntegrationSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'Information about third-party services integrated into the response plan.',
                }),
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_]*$/)
                .min(1)
                .max(200)
                .openapi({
                  description: "The short format name of the response plan. Can't include spaces.",
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description: 'A list of tags that you are adding to the response plan.',
                }),
            })
            .openapi({ required: ['incidentTemplate', 'name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResponsePlanOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postCreateTimelineEventRoute = createRoute({
  method: 'post',
  path: '/createTimelineEvent',
  description:
    'Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.',
  operationId: 'CreateTimelineEvent',
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
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that a client calls the action only once with the specified details.',
                }),
              eventData: z
                .string()
                .min(0)
                .max(12000)
                .openapi({ description: 'A short description of the event.' }),
              eventReferences: z
                .array(EventReferenceSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    "Adds one or more references to the <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with a resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use the table's ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.",
                }),
              eventTime: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The time that the event occurred.' }),
              eventType: z
                .string()
                .min(0)
                .max(100)
                .openapi({
                  description:
                    'The type of event. You can create timeline events of type <code>Custom Event</code>.',
                }),
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident record that the action adds the incident to.',
                }),
            })
            .openapi({ required: ['eventData', 'eventTime', 'eventType', 'incidentRecordArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateTimelineEventOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteIncidentRecordRoute = createRoute({
  method: 'post',
  path: '/deleteIncidentRecord',
  description: 'Delete an incident record from Incident Manager. ',
  operationId: 'DeleteIncidentRecord',
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
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident record you are deleting.',
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteIncidentRecordOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteReplicationSetArnRoute = createRoute({
  method: 'post',
  path: '/deleteReplicationSet#arn',
  description:
    'Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.',
  operationId: 'DeleteReplicationSet',
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
      arn: z
        .string()
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description: "The Amazon Resource Name (ARN) of the replication set you're deleting.",
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReplicationSetOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/deleteResourcePolicy',
  description:
    'Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.',
  operationId: 'DeleteResourcePolicy',
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
              policyId: z
                .string()
                .min(0)
                .max(256)
                .openapi({ description: "The ID of the resource policy you're deleting." }),
              resourceArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) of the resource you're deleting the policy from.",
                }),
            })
            .openapi({ required: ['policyId', 'resourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResourcePolicyOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteResponsePlanRoute = createRoute({
  method: 'post',
  path: '/deleteResponsePlan',
  description:
    'Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.',
  operationId: 'DeleteResponsePlan',
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
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteResponsePlanOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postDeleteTimelineEventRoute = createRoute({
  method: 'post',
  path: '/deleteTimelineEvent',
  description: 'Deletes a timeline event from an incident.',
  operationId: 'DeleteTimelineEvent',
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
              eventId: z
                .string()
                .min(0)
                .max(50)
                .openapi({
                  description:
                    "The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.",
                }),
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
                }),
            })
            .openapi({ required: ['eventId', 'incidentRecordArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteTimelineEventOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGetIncidentRecordArnRoute = createRoute({
  method: 'get',
  path: '/getIncidentRecord#arn',
  description: 'Returns the details for the specified incident record.',
  operationId: 'GetIncidentRecord',
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
      arn: z
        .string()
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the incident record.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetIncidentRecordOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGetReplicationSetArnRoute = createRoute({
  method: 'get',
  path: '/getReplicationSet#arn',
  description: 'Retrieve your Incident Manager replication set.',
  operationId: 'GetReplicationSet',
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
      arn: z
        .string()
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the replication set you want to retrieve.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetReplicationSetOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postGetResourcePoliciesResourceArnRoute = createRoute({
  method: 'post',
  path: '/getResourcePolicies#resourceArn',
  description: 'Retrieves the resource policies attached to the specified response plan.',
  operationId: 'GetResourcePolicies',
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
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the response plan with the attached resource policy. ',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
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
                    'The maximum number of resource policies to display for each page of results.',
                }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
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
      content: { 'application/json': { schema: GetResourcePoliciesOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGetResponsePlanArnRoute = createRoute({
  method: 'get',
  path: '/getResponsePlan#arn',
  description: 'Retrieves the details of the specified response plan.',
  operationId: 'GetResponsePlan',
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
      arn: z
        .string()
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'arn',
            in: 'query',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the response plan.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetResponsePlanOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getGetTimelineEventEventIdIncidentRecordArnRoute = createRoute({
  method: 'get',
  path: '/getTimelineEvent#eventId&incidentRecordArn',
  description: 'Retrieves a timeline event based on its ID and incident record.',
  operationId: 'GetTimelineEvent',
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
      eventId: z
        .string()
        .min(0)
        .max(50)
        .openapi({
          param: {
            name: 'eventId',
            in: 'query',
            required: true,
            description:
              "The ID of the event. You can get an event's ID when you create it, or by using <code>ListTimelineEvents</code>.",
            schema: { type: 'string', minLength: 0, maxLength: 50 },
          },
        }),
      incidentRecordArn: z
        .string()
        .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
        .min(0)
        .max(1000)
        .openapi({
          param: {
            name: 'incidentRecordArn',
            in: 'query',
            required: true,
            description:
              'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
            schema: {
              type: 'string',
              pattern: '^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$',
              minLength: 0,
              maxLength: 1000,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTimelineEventOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListIncidentRecordsRoute = createRoute({
  method: 'post',
  path: '/listIncidentRecords',
  description:
    'Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. ',
  operationId: 'ListIncidentRecords',
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
              filters: z
                .array(FilterSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Filters the list of incident records you want to search through. You can filter on the following keys:</p> <ul> <li> <p> <code>creationTime</code> </p> </li> <li> <p> <code>impact</code> </p> </li> <li> <p> <code>status</code> </p> </li> <li> <p> <code>createdBy</code> </p> </li> </ul> <p>Note the following when when you use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all incident records.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns incident records that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns incident records that match any of the values provided.</p> </li> </ul>",
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results per page.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
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
      content: { 'application/json': { schema: ListIncidentRecordsOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListRelatedItemsRoute = createRoute({
  method: 'post',
  path: '/listRelatedItems',
  description: 'List all related items for an incident record.',
  operationId: 'ListRelatedItems',
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
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident record containing the listed related items.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of related items per page.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
                }),
            })
            .openapi({ required: ['incidentRecordArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRelatedItemsOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListReplicationSetsRoute = createRoute({
  method: 'post',
  path: '/listReplicationSets',
  description: 'Lists details about the replication set configured in your account. ',
  operationId: 'ListReplicationSets',
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
                .openapi({ description: 'The maximum number of results per page. ' }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
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
      content: { 'application/json': { schema: ListReplicationSetsOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListResponsePlansRoute = createRoute({
  method: 'post',
  path: '/listResponsePlans',
  description: 'Lists all response plans in your account.',
  operationId: 'ListResponsePlans',
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
                .openapi({ description: 'The maximum number of response plans per page.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
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
      content: { 'application/json': { schema: ListResponsePlansOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Lists the tags that are attached to the specified response plan.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) of the response plan.',
            schema: { type: 'string' },
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
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description: 'Adds a tag to a response plan.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "The Amazon Resource Name (ARN) of the response plan you're adding the tags to.",
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
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'A list of tags to add to the response plan.' }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: TagResourceResponseSchema } },
    },
    480: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    486: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postListTimelineEventsRoute = createRoute({
  method: 'post',
  path: '/listTimelineEvents',
  description: 'Lists timeline events for the specified incident record.',
  operationId: 'ListTimelineEvents',
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
              filters: z
                .array(FilterSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Filters the timeline events based on the provided conditional values. You can filter timeline events with the following keys:</p> <ul> <li> <p> <code>eventTime</code> </p> </li> <li> <p> <code>eventType</code> </p> </li> </ul> <p>Note the following when deciding how to use Filters:</p> <ul> <li> <p>If you don't specify a Filter, the response includes all timeline events.</p> </li> <li> <p>If you specify more than one filter in a single request, the response returns timeline events that match all filters.</p> </li> <li> <p>If you specify a filter with more than one value, the response returns timeline events that match any of the values provided.</p> </li> </ul>",
                }),
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
                }),
              maxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({ description: 'The maximum number of results per page.' }),
              nextToken: z
                .string()
                .min(0)
                .max(2000)
                .exactOptional()
                .openapi({
                  description: 'The pagination token to continue to the next page of results.',
                }),
              sortBy: z
                .literal('EVENT_TIME')
                .exactOptional()
                .openapi({ description: 'Sort timeline events by the specified key value pair.' }),
              sortOrder: z
                .enum(['ASCENDING', 'DESCENDING'])
                .exactOptional()
                .openapi({
                  description:
                    'Sorts the order of timeline events by the value specified in the <code>sortBy</code> field.',
                }),
            })
            .openapi({ required: ['incidentRecordArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTimelineEventsOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postPutResourcePolicyRoute = createRoute({
  method: 'post',
  path: '/putResourcePolicy',
  description:
    'Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.',
  operationId: 'PutResourcePolicy',
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
              policy: z
                .string()
                .min(0)
                .max(4000)
                .openapi({ description: 'Details of the resource policy.' }),
              resourceArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the response plan to add the resource policy to.',
                }),
            })
            .openapi({ required: ['policy', 'resourceArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutResourcePolicyOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postStartIncidentRoute = createRoute({
  method: 'post',
  path: '/startIncident',
  description:
    'Used to start an incident from CloudWatch alarms, EventBridge events, or manually. ',
  operationId: 'StartIncident',
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
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token ensuring that the operation is called only once with the specified details.',
                }),
              impact: z
                .int()
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, this typically relates to full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer might aren\'t impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren\'t currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>',
                }),
              relatedItems: z
                .array(RelatedItemSchema)
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'Add related items to the incident for other responders to use. Related items are Amazon Web Services resources, external links, or files uploaded to an Amazon S3 bucket. ',
                }),
              responsePlanArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the response plan that pre-defines summary, chat channels, Amazon SNS topics, runbooks, title, and impact of the incident. ',
                }),
              title: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'Provide a title for the incident. Providing a title overwrites the title provided by the response plan. ',
                }),
              triggerDetails: z
                .object({
                  rawData: RawDataSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Raw data passed from either Amazon EventBridge, Amazon CloudWatch, or Incident Manager when an incident is created.',
                      }),
                  ).exactOptional(),
                  source: IncidentSourceSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Identifies the service that sourced the event. All events sourced from within Amazon Web Services begin with "<code>aws.</code>" Customer-generated events can have any value here, as long as it doesn\'t begin with "<code>aws.</code>" We recommend the use of Java package-name style reverse domain-name strings. ',
                      }),
                  ).exactOptional(),
                  timestamp: TimestampSchema.and(
                    z.any().openapi({ description: 'The time that the incident was detected.' }),
                  ).exactOptional(),
                  triggerArn: ArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the source that detected the incident.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Details about what caused the incident to be created in Incident Manager.',
                  required: [],
                }),
            })
            .openapi({ required: ['responsePlanArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartIncidentOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: 'Removes a tag from a resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description:
              "The Amazon Resource Name (ARN) of the response plan you're removing a tag from.",
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(50),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'The name of the tag to remove from the response plan.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 50,
            },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UntagResourceResponseSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateDeletionProtectionRoute = createRoute({
  method: 'post',
  path: '/updateDeletionProtection',
  description:
    'Update deletion protection to either allow or deny deletion of the final Region in a replication set.',
  operationId: 'UpdateDeletionProtection',
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
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description: 'The Amazon Resource Name (ARN) of the replication set to update.',
                }),
              clientToken: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that the operation is called only once with the specified details.',
                }),
              deletionProtected: z
                .boolean()
                .openapi({
                  description:
                    'Specifies if deletion protection is turned on or off in your account. ',
                }),
            })
            .openapi({ required: ['arn', 'deletionProtected'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateDeletionProtectionOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateIncidentRecordRoute = createRoute({
  method: 'post',
  path: '/updateIncidentRecord',
  description:
    'Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.',
  operationId: 'UpdateIncidentRecord',
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
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident record you are updating.',
                }),
              chatChannel: z
                .object({
                  chatbotSns: ChatbotSnsConfigurationSetSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics. ',
                      }),
                  ).exactOptional(),
                  empty: EmptyChatChannelSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Used to remove the chat channel from an incident record or response plan.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Chatbot chat channel used for collaboration during an incident.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that a client calls the operation only once with the specified details.',
                }),
              impact: z
                .int()
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Defines the impact of the incident to customers and applications. If you provide an impact for an incident, it overwrites the impact provided by the response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>1</code> - Critical impact, full application failure that impacts many to all customers. </p> </li> <li> <p> <code>2</code> - High impact, partial application failure with impact to many customers.</p> </li> <li> <p> <code>3</code> - Medium impact, the application is providing reduced service to customers.</p> </li> <li> <p> <code>4</code> - Low impact, customer aren\'t impacted by the problem yet.</p> </li> <li> <p> <code>5</code> - No impact, customers aren\'t currently impacted but urgent action is needed to avoid impact.</p> </li> </ul>',
                }),
              notificationTargets: z
                .array(NotificationTargetItemSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon SNS targets that Incident Manager notifies when a client updates an incident.</p> <p>Using multiple SNS topics creates redundancy in the event that a Region is down during the incident.</p>',
                }),
              status: z
                .enum(['OPEN', 'RESOLVED'])
                .exactOptional()
                .openapi({
                  description:
                    'The status of the incident. Possible statuses are <code>Open</code> or <code>Resolved</code>.',
                }),
              summary: z
                .string()
                .min(0)
                .max(8000)
                .exactOptional()
                .openapi({
                  description: 'A longer description of what occurred during the incident.',
                }),
              title: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({ description: 'A brief description of the incident.' }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateIncidentRecordOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateRelatedItemsRoute = createRoute({
  method: 'post',
  path: '/updateRelatedItems',
  description: 'Add or remove related items from the related items tab of an incident record.',
  operationId: 'UpdateRelatedItems',
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
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that a client calls the operation only once with the specified details.',
                }),
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident record that contains the related items that you update.',
                }),
              relatedItemsUpdate: z
                .object({
                  itemToAdd: RelatedItemSchema.and(
                    z
                      .any()
                      .openapi({ description: "Details about the related item you're adding." }),
                  ).exactOptional(),
                  itemToRemove: ItemIdentifierSchema.and(
                    z
                      .any()
                      .openapi({ description: "Details about the related item you're deleting." }),
                  ).exactOptional(),
                })
                .openapi({
                  description: "Details about the related item you're adding.",
                  required: [],
                }),
            })
            .openapi({ required: ['incidentRecordArn', 'relatedItemsUpdate'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateRelatedItemsOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateReplicationSetRoute = createRoute({
  method: 'post',
  path: '/updateReplicationSet',
  description: 'Add or delete Regions from your replication set.',
  operationId: 'UpdateReplicationSet',
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
              actions: z
                .array(UpdateReplicationSetActionSchema)
                .length(1)
                .openapi({ description: 'An action to add or delete a Region.' }),
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    "The Amazon Resource Name (ARN) of the replication set you're updating.",
                }),
              clientToken: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that the operation is called only once with the specified details.',
                }),
            })
            .openapi({ required: ['actions', 'arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateReplicationSetOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateResponsePlanRoute = createRoute({
  method: 'post',
  path: '/updateResponsePlan',
  description: 'Updates the specified response plan.',
  operationId: 'UpdateResponsePlan',
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
              actions: z
                .array(ActionSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'The actions that this response plan takes at the beginning of an incident.',
                }),
              arn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({ description: 'The Amazon Resource Name (ARN) of the response plan.' }),
              chatChannel: z
                .object({
                  chatbotSns: ChatbotSnsConfigurationSetSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS targets that Chatbot uses to notify the chat channel of updates to an incident. You can also make updates to the incident through the chat channel by using the Amazon SNS topics. ',
                      }),
                  ).exactOptional(),
                  empty: EmptyChatChannelSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Used to remove the chat channel from an incident record or response plan.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The Chatbot chat channel used for collaboration during an incident.',
                  required: [],
                }),
              clientToken: z
                .string()
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token ensuring that the operation is called only once with the specified details.',
                }),
              displayName: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    "The long format name of the response plan. The display name can't contain spaces.",
                }),
              engagements: z
                .array(SsmContactsArnSchema)
                .min(0)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.',
                }),
              incidentTemplateDedupeString: z
                .string()
                .min(0)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The string Incident Manager uses to prevent duplicate incidents from being created by the same incident in the same account.',
                }),
              incidentTemplateImpact: z
                .int()
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    '<p>Defines the impact to the customers. Providing an impact overwrites the impact provided by a response plan.</p> <p class="title"> <b>Possible impacts:</b> </p> <ul> <li> <p> <code>5</code> - Severe impact</p> </li> <li> <p> <code>4</code> - High impact</p> </li> <li> <p> <code>3</code> - Medium impact</p> </li> <li> <p> <code>2</code> - Low impact</p> </li> <li> <p> <code>1</code> - No impact</p> </li> </ul>',
                }),
              incidentTemplateNotificationTargets: z
                .array(NotificationTargetItemSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon SNS targets that are notified when updates are made to an incident.',
                }),
              incidentTemplateSummary: z
                .string()
                .min(0)
                .max(8000)
                .exactOptional()
                .openapi({
                  description:
                    "A brief summary of the incident. This typically contains what has happened, what's currently happening, and next steps.",
                }),
              incidentTemplateTags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({
                  description:
                    'Tags to assign to the template. When the <code>StartIncident</code> API action is called, Incident Manager assigns the tags specified in the template to the incident. To call this action, you must also have permission to call the <code>TagResource</code> API action for the incident record resource.',
                }),
              incidentTemplateTitle: z
                .string()
                .min(0)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    "The short format name of the incident. The title can't contain spaces.",
                }),
              integrations: z
                .array(IntegrationSchema)
                .min(0)
                .max(1)
                .exactOptional()
                .openapi({
                  description:
                    'Information about third-party services integrated into the response plan.',
                }),
            })
            .openapi({ required: ['arn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateResponsePlanOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postUpdateTimelineEventRoute = createRoute({
  method: 'post',
  path: '/updateTimelineEvent',
  description: 'Updates a timeline event. You can update events of type <code>Custom Event</code>.',
  operationId: 'UpdateTimelineEvent',
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
                .min(0)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    'A token that ensures that a client calls the operation only once with the specified details.',
                }),
              eventData: z
                .string()
                .min(0)
                .max(12000)
                .exactOptional()
                .openapi({ description: 'A short description of the event.' }),
              eventId: z
                .string()
                .min(0)
                .max(50)
                .openapi({
                  description:
                    "The ID of the event to update. You can use <code>ListTimelineEvents</code> to find an event's ID.",
                }),
              eventReferences: z
                .array(EventReferenceSchema)
                .min(0)
                .max(10)
                .exactOptional()
                .openapi({
                  description:
                    "<p>Updates all existing references in a <code>TimelineEvent</code>. A reference is an Amazon Web Services resource involved or associated with the incident. To specify a reference, enter its Amazon Resource Name (ARN). You can also specify a related item associated with that resource. For example, to specify an Amazon DynamoDB (DynamoDB) table as a resource, use its ARN. You can also specify an Amazon CloudWatch metric associated with the DynamoDB table as a related item.</p> <important> <p>This update action overrides all existing references. If you want to keep existing references, you must specify them in the call. If you don't, this action removes any existing references and enters only new references.</p> </important>",
                }),
              eventTime: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({ description: 'The time that the event occurred.' }),
              eventType: z
                .string()
                .min(0)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The type of event. You can update events of type <code>Custom Event</code>.',
                }),
              incidentRecordArn: z
                .string()
                .regex(/^arn:aws(-cn|-us-gov)?:[a-z0-9-]*:[a-z0-9-]*:([0-9]{12})?:.+$/)
                .min(0)
                .max(1000)
                .openapi({
                  description:
                    'The Amazon Resource Name (ARN) of the incident that includes the timeline event.',
                }),
            })
            .openapi({ required: ['eventId', 'incidentRecordArn'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateTimelineEventOutputSchema } },
    },
    480: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})
