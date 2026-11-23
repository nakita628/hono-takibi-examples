import { createRoute, z } from '@hono/zod-openapi'

const ArnSchema = z.string().min(1).max(300).openapi('Arn')

const NumericVersionSchema = z.int().min(0).openapi('NumericVersion')

const ServiceNameSchema = z.string().min(0).max(128).openapi('ServiceName')

const InspectorServiceAttributesSchema = z
  .object({
    schemaVersion: NumericVersionSchema.openapi({
      description: 'The schema version of this data type.',
    }),
    assessmentRunArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the assessment run during which the finding is generated.',
    }),
    rulesPackageArn: ArnSchema.exactOptional().openapi({
      description: 'The ARN of the rules package that is used to generate the finding.',
    }),
  })
  .openapi({
    required: ['schemaVersion'],
    description: 'This data type is used in the <a>Finding</a> data type.',
  })
  .openapi('InspectorServiceAttributes')

const AssetTypeSchema = z.literal('ec2-instance').openapi('AssetType')

const AgentIdSchema = z.string().min(1).max(128).openapi('AgentId')

const AutoScalingGroupSchema = z.string().min(1).max(256).openapi('AutoScalingGroup')

const AmiIdSchema = z.string().min(0).max(256).openapi('AmiId')

const HostnameSchema = z.string().min(0).max(256).openapi('Hostname')

const Ipv4AddressSchema = z.string().min(7).max(15).openapi('Ipv4Address')

const Ipv4AddressListSchema = z.array(Ipv4AddressSchema).min(0).max(50).openapi('Ipv4AddressList')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const TagValueSchema = z.string().min(1).max(256).openapi('TagValue')

const TagSchema = z
  .object({
    key: TagKeySchema.openapi({ description: 'A tag key.' }),
    value: TagValueSchema.exactOptional().openapi({
      description: 'A value assigned to a tag key.',
    }),
  })
  .openapi({
    required: ['key'],
    description:
      'A key and value pair. This data type is used as a request parameter in the <a>SetTagsForResource</a> action and a response element in the <a>ListTagsForResource</a> action.',
  })
  .openapi('Tag')

const TagsSchema = z.array(TagSchema).openapi('Tags')

const TextSchema = z.string().min(0).max(20000).openapi('Text')

const PrivateIpSchema = z
  .object({
    privateDnsName: TextSchema.exactOptional().openapi({
      description: 'The DNS name of the private IP address.',
    }),
    privateIpAddress: TextSchema.exactOptional().openapi({
      description: 'The full IP address of the network inteface.',
    }),
  })
  .openapi({
    description:
      'Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.',
    required: [],
  })
  .openapi('PrivateIp')

const PrivateIpAddressesSchema = z.array(PrivateIpSchema).openapi('PrivateIpAddresses')

const Ipv6AddressesSchema = z.array(TextSchema).openapi('Ipv6Addresses')

const SecurityGroupSchema = z
  .object({
    groupName: TextSchema.exactOptional().openapi({
      description: 'The name of the security group.',
    }),
    groupId: TextSchema.exactOptional().openapi({ description: 'The ID of the security group.' }),
  })
  .openapi({
    description:
      'Contains information about a security group associated with a network interface. This data type is used as one of the elements of the <a>NetworkInterface</a> data type.',
    required: [],
  })
  .openapi('SecurityGroup')

const SecurityGroupsSchema = z.array(SecurityGroupSchema).openapi('SecurityGroups')

const NetworkInterfaceSchema = z
  .object({
    networkInterfaceId: TextSchema.exactOptional().openapi({
      description: 'The ID of the network interface.',
    }),
    subnetId: TextSchema.exactOptional().openapi({
      description: 'The ID of a subnet associated with the network interface.',
    }),
    vpcId: TextSchema.exactOptional().openapi({
      description: 'The ID of a VPC associated with the network interface.',
    }),
    privateDnsName: TextSchema.exactOptional().openapi({
      description: 'The name of a private DNS associated with the network interface.',
    }),
    privateIpAddress: TextSchema.exactOptional().openapi({
      description: 'The private IP address associated with the network interface.',
    }),
    privateIpAddresses: PrivateIpAddressesSchema.exactOptional().openapi({
      description:
        'A list of the private IP addresses associated with the network interface. Includes the privateDnsName and privateIpAddress.',
    }),
    publicDnsName: TextSchema.exactOptional().openapi({
      description: 'The name of a public DNS associated with the network interface.',
    }),
    publicIp: TextSchema.exactOptional().openapi({
      description: 'The public IP address from which the network interface is reachable.',
    }),
    ipv6Addresses: Ipv6AddressesSchema.exactOptional().openapi({
      description: 'The IP addresses associated with the network interface.',
    }),
    securityGroups: SecurityGroupsSchema.exactOptional().openapi({
      description:
        'A list of the security groups associated with the network interface. Includes the groupId and groupName.',
    }),
  })
  .openapi({
    description:
      'Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.',
    required: [],
  })
  .openapi('NetworkInterface')

const NetworkInterfacesSchema = z.array(NetworkInterfaceSchema).openapi('NetworkInterfaces')

const AssetAttributesSchema = z
  .object({
    schemaVersion: NumericVersionSchema.openapi({
      description: 'The schema version of this data type.',
    }),
    agentId: AgentIdSchema.exactOptional().openapi({
      description:
        'The ID of the agent that is installed on the EC2 instance where the finding is generated.',
    }),
    autoScalingGroup: AutoScalingGroupSchema.exactOptional().openapi({
      description: 'The Auto Scaling group of the EC2 instance where the finding is generated.',
    }),
    amiId: AmiIdSchema.exactOptional().openapi({
      description:
        'The ID of the Amazon Machine Image (AMI) that is installed on the EC2 instance where the finding is generated.',
    }),
    hostname: HostnameSchema.exactOptional().openapi({
      description: 'The hostname of the EC2 instance where the finding is generated.',
    }),
    ipv4Addresses: Ipv4AddressListSchema.exactOptional().openapi({
      description:
        'The list of IP v4 addresses of the EC2 instance where the finding is generated.',
    }),
    tags: TagsSchema.exactOptional().openapi({
      description: 'The tags related to the EC2 instance where the finding is generated.',
    }),
    networkInterfaces: NetworkInterfacesSchema.exactOptional().openapi({
      description:
        'An array of the network interfaces interacting with the EC2 instance where the finding is generated.',
    }),
  })
  .openapi({
    required: ['schemaVersion'],
    description: 'A collection of attributes of the host from which the finding is generated.',
  })
  .openapi('AssetAttributes')

const FindingIdSchema = z.string().min(0).max(128).openapi('FindingId')

const SeveritySchema = z
  .enum(['Low', 'Medium', 'High', 'Informational', 'Undefined'])
  .openapi('Severity')

const NumericSeveritySchema = z.float64().min(0).max(10).openapi('NumericSeverity')

const IocConfidenceSchema = z.int().min(0).max(10).openapi('IocConfidence')

const BoolSchema = z.boolean().openapi('Bool')

const AttributeKeySchema = z.string().min(1).max(128).openapi('AttributeKey')

const AttributeValueSchema = z.string().min(1).max(256).openapi('AttributeValue')

const AttributeSchema = z
  .object({
    key: AttributeKeySchema.openapi({ description: 'The attribute key.' }),
    value: AttributeValueSchema.exactOptional().openapi({
      description: 'The value assigned to the attribute key.',
    }),
  })
  .openapi({
    required: ['key'],
    description:
      'This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.',
  })
  .openapi('Attribute')

const AttributeListSchema = z.array(AttributeSchema).min(0).max(50).openapi('AttributeList')

const UserAttributeListSchema = z.array(AttributeSchema).min(0).max(10).openapi('UserAttributeList')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const FindingSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN that specifies the finding.' }),
    schemaVersion: NumericVersionSchema.exactOptional().openapi({
      description: 'The schema version of this data type.',
    }),
    service: ServiceNameSchema.exactOptional().openapi({
      description: 'The data element is set to "Inspector".',
    }),
    serviceAttributes: InspectorServiceAttributesSchema.exactOptional().openapi({
      description: 'This data type is used in the <a>Finding</a> data type.',
    }),
    assetType: AssetTypeSchema.exactOptional().openapi({
      description: 'The type of the host from which the finding is generated.',
    }),
    assetAttributes: AssetAttributesSchema.exactOptional().openapi({
      description: 'A collection of attributes of the host from which the finding is generated.',
    }),
    id: FindingIdSchema.exactOptional().openapi({ description: 'The ID of the finding.' }),
    title: TextSchema.exactOptional().openapi({ description: 'The name of the finding.' }),
    description: TextSchema.exactOptional().openapi({
      description: 'The description of the finding.',
    }),
    recommendation: TextSchema.exactOptional().openapi({
      description: 'The recommendation for the finding.',
    }),
    severity: SeveritySchema.exactOptional().openapi({
      description:
        'The finding severity. Values can be set to High, Medium, Low, and Informational.',
    }),
    numericSeverity: NumericSeveritySchema.exactOptional().openapi({
      description: 'The numeric value of the finding severity.',
    }),
    confidence: IocConfidenceSchema.exactOptional().openapi({
      description: 'This data element is currently not used.',
    }),
    indicatorOfCompromise: BoolSchema.exactOptional().openapi({
      description: 'This data element is currently not used.',
    }),
    attributes: AttributeListSchema.openapi({
      description: 'The system-defined attributes for the finding.',
    }),
    userAttributes: UserAttributeListSchema.openapi({
      description: 'The user-defined attributes that are assigned to the finding.',
    }),
    createdAt: TimestampSchema.openapi({ description: 'The time when the finding was generated.' }),
    updatedAt: TimestampSchema.openapi({
      description: 'The time when <a>AddAttributesToFindings</a> is called.',
    }),
  })
  .openapi({
    required: ['arn', 'attributes', 'userAttributes', 'createdAt', 'updatedAt'],
    description:
      'Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.',
  })
  .openapi('Finding')

const FindingListSchema = z.array(FindingSchema).min(0).max(100).openapi('FindingList')

const FailedItemErrorCodeSchema = z
  .enum([
    'INVALID_ARN',
    'DUPLICATE_ARN',
    'ITEM_DOES_NOT_EXIST',
    'ACCESS_DENIED',
    'LIMIT_EXCEEDED',
    'INTERNAL_ERROR',
  ])
  .openapi('FailedItemErrorCode')

const FailedItemDetailsSchema = z
  .object({
    failureCode: FailedItemErrorCodeSchema.openapi({
      description: 'The status code of a failed item.',
    }),
    retryable: BoolSchema.openapi({
      description:
        'Indicates whether you can immediately retry a request for this item for a specified resource.',
    }),
  })
  .openapi({
    required: ['failureCode', 'retryable'],
    description: 'Includes details about the failed items.',
  })
  .openapi('FailedItemDetails')

const FailedItemsSchema = z.record(z.string(), FailedItemDetailsSchema).openapi('FailedItems')

type DescribeFindingsResponseType = {
  findings: z.infer<typeof FindingListSchema>
  failedItems: z.infer<typeof FailedItemsSchema>
}

const AddAttributesToFindingsResponseSchema = z
  .object({
    failedItems: FailedItemsSchema.openapi({
      description:
        'Attribute details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({ required: ['failedItems'], example: { failedItems: {} } })
  .openapi('AddAttributesToFindingsResponse')

const AddRemoveAttributesFindingArnListSchema = z
  .array(ArnSchema)
  .min(1)
  .max(10)
  .openapi('AddRemoveAttributesFindingArnList')

const AddAttributesToFindingsRequestSchema = z
  .object({
    findingArns: AddRemoveAttributesFindingArnListSchema.openapi({
      description: 'The ARNs that specify the findings that you want to assign attributes to.',
    }),
    attributes: UserAttributeListSchema.openapi({
      description: 'The array of attributes that you want to assign to specified findings.',
    }),
  })
  .openapi({ required: ['findingArns', 'attributes'], title: 'AddAttributesToFindingsRequest' })
  .openapi('AddAttributesToFindingsRequest')

const InternalExceptionSchema = z.any().openapi('InternalException')

const InvalidInputExceptionSchema = z.any().openapi('InvalidInputException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const NoSuchEntityExceptionSchema = z.any().openapi('NoSuchEntityException')

const ServiceTemporarilyUnavailableExceptionSchema = z
  .any()
  .openapi('ServiceTemporarilyUnavailableException')

const CreateAssessmentTargetResponseSchema = z
  .object({
    assessmentTargetArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment target that is created.',
    }),
  })
  .openapi({
    required: ['assessmentTargetArn'],
    example: { assessmentTargetArn: 'arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX' },
  })
  .openapi('CreateAssessmentTargetResponse')

const AssessmentTargetNameSchema = z.string().min(1).max(140).openapi('AssessmentTargetName')

const CreateAssessmentTargetRequestSchema = z
  .object({
    assessmentTargetName: AssessmentTargetNameSchema.openapi({
      description:
        'The user-defined name that identifies the assessment target that you want to create. The name must be unique within the AWS account.',
    }),
    resourceGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN that specifies the resource group that is used to create the assessment target. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.',
    }),
  })
  .openapi({ required: ['assessmentTargetName'], title: 'CreateAssessmentTargetRequest' })
  .openapi('CreateAssessmentTargetRequest')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const InvalidCrossAccountRoleExceptionSchema = z.any().openapi('InvalidCrossAccountRoleException')

const CreateAssessmentTemplateResponseSchema = z
  .object({
    assessmentTemplateArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment template that is created.',
    }),
  })
  .openapi({
    required: ['assessmentTemplateArn'],
    example: {
      assessmentTemplateArn:
        'arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T',
    },
  })
  .openapi('CreateAssessmentTemplateResponse')

const AssessmentTemplateNameSchema = z.string().min(1).max(140).openapi('AssessmentTemplateName')

const AssessmentRunDurationSchema = z.int().min(180).max(86400).openapi('AssessmentRunDuration')

const AssessmentTemplateRulesPackageArnListSchema = z
  .array(ArnSchema)
  .min(0)
  .max(50)
  .openapi('AssessmentTemplateRulesPackageArnList')

const CreateAssessmentTemplateRequestSchema = z
  .object({
    assessmentTargetArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the assessment target for which you want to create the assessment template.',
    }),
    assessmentTemplateName: AssessmentTemplateNameSchema.openapi({
      description:
        'The user-defined name that identifies the assessment template that you want to create. You can create several assessment templates for an assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.',
    }),
    durationInSeconds: AssessmentRunDurationSchema.openapi({
      description: 'The duration of the assessment run in seconds.',
    }),
    rulesPackageArns: AssessmentTemplateRulesPackageArnListSchema.openapi({
      description:
        'The ARNs that specify the rules packages that you want to attach to the assessment template.',
    }),
    userAttributesForFindings: UserAttributeListSchema.exactOptional().openapi({
      description:
        'The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template. An attribute is a key and value pair (an <a>Attribute</a> object). Within an assessment template, each key must be unique.',
    }),
  })
  .openapi({
    required: [
      'assessmentTargetArn',
      'assessmentTemplateName',
      'durationInSeconds',
      'rulesPackageArns',
    ],
    title: 'CreateAssessmentTemplateRequest',
  })
  .openapi('CreateAssessmentTemplateRequest')

const UUIDSchema = z
  .string()
  .regex(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/)
  .openapi('UUID')

const CreateExclusionsPreviewResponseSchema = z
  .object({
    previewToken: UUIDSchema.openapi({
      description:
        'Specifies the unique identifier of the requested exclusions preview. You can use the unique identifier to retrieve the exclusions preview when running the GetExclusionsPreview API.',
    }),
  })
  .openapi({ required: ['previewToken'] })
  .openapi('CreateExclusionsPreviewResponse')

const CreateExclusionsPreviewRequestSchema = z
  .object({
    assessmentTemplateArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the assessment template for which you want to create an exclusions preview.',
    }),
  })
  .openapi({ required: ['assessmentTemplateArn'], title: 'CreateExclusionsPreviewRequest' })
  .openapi('CreateExclusionsPreviewRequest')

const PreviewGenerationInProgressExceptionSchema = z
  .any()
  .openapi('PreviewGenerationInProgressException')

const CreateResourceGroupResponseSchema = z
  .object({
    resourceGroupArn: ArnSchema.openapi({
      description: 'The ARN that specifies the resource group that is created.',
    }),
  })
  .openapi({
    required: ['resourceGroupArn'],
    example: {
      resourceGroupArn: 'arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-AB6DMKnv',
    },
  })
  .openapi('CreateResourceGroupResponse')

const ResourceGroupTagSchema = z
  .object({
    key: TagKeySchema.openapi({ description: 'A tag key.' }),
    value: TagValueSchema.exactOptional().openapi({
      description: 'The value assigned to a tag key.',
    }),
  })
  .openapi({
    required: ['key'],
    description:
      'This data type is used as one of the elements of the <a>ResourceGroup</a> data type.',
  })
  .openapi('ResourceGroupTag')

const ResourceGroupTagsSchema = z
  .array(ResourceGroupTagSchema)
  .min(1)
  .max(10)
  .openapi('ResourceGroupTags')

const CreateResourceGroupRequestSchema = z
  .object({
    resourceGroupTags: ResourceGroupTagsSchema.openapi({
      description:
        '<p>A collection of keys and an array of possible values, \'[{"key":"key1","values":["Value1","Value2"]},{"key":"Key2","values":["Value3"]}]\'.</p> <p>For example,\'[{"key":"Name","values":["TestEC2Instance"]}]\'.</p>',
    }),
  })
  .openapi({ required: ['resourceGroupTags'], title: 'CreateResourceGroupRequest' })
  .openapi('CreateResourceGroupRequest')

const DeleteAssessmentRunRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment run that you want to delete.',
    }),
  })
  .openapi({ required: ['assessmentRunArn'], title: 'DeleteAssessmentRunRequest' })
  .openapi('DeleteAssessmentRunRequest')

const AssessmentRunInProgressExceptionSchema = z.any().openapi('AssessmentRunInProgressException')

const DeleteAssessmentTargetRequestSchema = z
  .object({
    assessmentTargetArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment target that you want to delete.',
    }),
  })
  .openapi({ required: ['assessmentTargetArn'], title: 'DeleteAssessmentTargetRequest' })
  .openapi('DeleteAssessmentTargetRequest')

const DeleteAssessmentTemplateRequestSchema = z
  .object({
    assessmentTemplateArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment template that you want to delete.',
    }),
  })
  .openapi({ required: ['assessmentTemplateArn'], title: 'DeleteAssessmentTemplateRequest' })
  .openapi('DeleteAssessmentTemplateRequest')

const AssessmentRunNameSchema = z.string().min(1).max(140).openapi('AssessmentRunName')

const AssessmentRunStateSchema = z
  .enum([
    'CREATED',
    'START_DATA_COLLECTION_PENDING',
    'START_DATA_COLLECTION_IN_PROGRESS',
    'COLLECTING_DATA',
    'STOP_DATA_COLLECTION_PENDING',
    'DATA_COLLECTED',
    'START_EVALUATING_RULES_PENDING',
    'EVALUATING_RULES',
    'FAILED',
    'ERROR',
    'COMPLETED',
    'COMPLETED_WITH_ERRORS',
    'CANCELED',
  ])
  .openapi('AssessmentRunState')

const AssessmentRulesPackageArnListSchema = z
  .array(ArnSchema)
  .min(1)
  .max(50)
  .openapi('AssessmentRulesPackageArnList')

const AssessmentRunStateChangeSchema = z
  .object({
    stateChangedAt: TimestampSchema.openapi({
      description: 'The last time the assessment run state changed.',
    }),
    state: AssessmentRunStateSchema.openapi({ description: 'The assessment run state.' }),
  })
  .openapi({
    required: ['stateChangedAt', 'state'],
    description: 'Used as one of the elements of the <a>AssessmentRun</a> data type.',
  })
  .openapi('AssessmentRunStateChange')

const AssessmentRunStateChangeListSchema = z
  .array(AssessmentRunStateChangeSchema)
  .min(0)
  .max(50)
  .openapi('AssessmentRunStateChangeList')

const InspectorEventSchema = z
  .enum([
    'ASSESSMENT_RUN_STARTED',
    'ASSESSMENT_RUN_COMPLETED',
    'ASSESSMENT_RUN_STATE_CHANGED',
    'FINDING_REPORTED',
    'OTHER',
  ])
  .openapi('InspectorEvent')

const MessageSchema = z.string().min(0).max(1000).openapi('Message')

const AssessmentRunNotificationSnsStatusCodeSchema = z
  .enum(['SUCCESS', 'TOPIC_DOES_NOT_EXIST', 'ACCESS_DENIED', 'INTERNAL_ERROR'])
  .openapi('AssessmentRunNotificationSnsStatusCode')

const AssessmentRunNotificationSchema = z
  .object({
    date: TimestampSchema.openapi({ description: 'The date of the notification.' }),
    event: InspectorEventSchema.openapi({
      description: 'The event for which a notification is sent.',
    }),
    message: MessageSchema.exactOptional().openapi({
      description: 'The message included in the notification.',
    }),
    error: BoolSchema.openapi({
      description: 'The Boolean value that specifies whether the notification represents an error.',
    }),
    snsTopicArn: ArnSchema.exactOptional().openapi({
      description: 'The SNS topic to which the SNS notification is sent.',
    }),
    snsPublishStatusCode: AssessmentRunNotificationSnsStatusCodeSchema.exactOptional().openapi({
      description: 'The status code of the SNS notification.',
    }),
  })
  .openapi({
    required: ['date', 'event', 'error'],
    description: 'Used as one of the elements of the <a>AssessmentRun</a> data type.',
  })
  .openapi('AssessmentRunNotification')

const AssessmentRunNotificationListSchema = z
  .array(AssessmentRunNotificationSchema)
  .min(0)
  .max(50)
  .openapi('AssessmentRunNotificationList')

const FindingCountSchema = z.int().openapi('FindingCount')

const AssessmentRunFindingCountsSchema = z
  .record(z.string(), FindingCountSchema)
  .openapi('AssessmentRunFindingCounts')

const AssessmentRunSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN of the assessment run.' }),
    name: AssessmentRunNameSchema.openapi({
      description: 'The auto-generated name for the assessment run.',
    }),
    assessmentTemplateArn: ArnSchema.openapi({
      description: 'The ARN of the assessment template that is associated with the assessment run.',
    }),
    state: AssessmentRunStateSchema.openapi({ description: 'The state of the assessment run.' }),
    durationInSeconds: AssessmentRunDurationSchema.openapi({
      description: 'The duration of the assessment run.',
    }),
    rulesPackageArns: AssessmentRulesPackageArnListSchema.openapi({
      description: 'The rules packages selected for the assessment run.',
    }),
    userAttributesForFindings: UserAttributeListSchema.openapi({
      description: 'The user-defined attributes that are assigned to every generated finding.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time when <a>StartAssessmentRun</a> was called.',
    }),
    startedAt: TimestampSchema.exactOptional().openapi({
      description: 'The time when <a>StartAssessmentRun</a> was called.',
    }),
    completedAt: TimestampSchema.exactOptional().openapi({
      description:
        'The assessment run completion time that corresponds to the rules packages evaluation completion time or failure.',
    }),
    stateChangedAt: TimestampSchema.openapi({
      description: "The last time when the assessment run's state changed.",
    }),
    dataCollected: BoolSchema.openapi({
      description:
        'A Boolean value (true or false) that specifies whether the process of collecting data from the agents is completed.',
    }),
    stateChanges: AssessmentRunStateChangeListSchema.openapi({
      description: 'A list of the assessment run state changes.',
    }),
    notifications: AssessmentRunNotificationListSchema.openapi({
      description:
        'A list of notifications for the event subscriptions. A notification about a particular generated finding is added to this list only once.',
    }),
    findingCounts: AssessmentRunFindingCountsSchema.openapi({
      description: 'Provides a total count of generated findings per severity.',
    }),
  })
  .openapi({
    required: [
      'arn',
      'name',
      'assessmentTemplateArn',
      'state',
      'durationInSeconds',
      'rulesPackageArns',
      'userAttributesForFindings',
      'createdAt',
      'stateChangedAt',
      'dataCollected',
      'stateChanges',
      'notifications',
      'findingCounts',
    ],
    description:
      '<p>A snapshot of an Amazon Inspector assessment run that contains the findings of the assessment run .</p> <p>Used as the response element in the <a>DescribeAssessmentRuns</a> action.</p>',
  })
  .openapi('AssessmentRun')

const AssessmentRunListSchema = z
  .array(AssessmentRunSchema)
  .min(0)
  .max(10)
  .openapi('AssessmentRunList')

const DescribeAssessmentRunsResponseSchema = z
  .object({
    assessmentRuns: AssessmentRunListSchema.openapi({
      description: 'Information about the assessment run.',
    }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Assessment run details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['assessmentRuns', 'failedItems'],
    example: {
      assessmentRuns: [
        {
          name: 'Run 1 for ExampleAssessmentTemplate',
          arn: 'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE',
          assessmentTemplateArn:
            'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw',
          completedAt: '1458680301.4',
          createdAt: '1458680170.035',
          dataCollected: true,
          durationInSeconds: 3600,
          findingCounts: { High: 14, Informational: 0, Low: 0, Medium: 2, Undefined: 0 },
          notifications: [],
          rulesPackageArns: ['arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP'],
          startedAt: '1458680170.161',
          state: 'COMPLETED',
          stateChangedAt: '1458680301.4',
          stateChanges: [
            { state: 'CREATED', stateChangedAt: '1458680170.035' },
            { state: 'START_DATA_COLLECTION_PENDING', stateChangedAt: '1458680170.065' },
            { state: 'START_DATA_COLLECTION_IN_PROGRESS', stateChangedAt: '1458680170.096' },
            { state: 'COLLECTING_DATA', stateChangedAt: '1458680170.161' },
            { state: 'STOP_DATA_COLLECTION_PENDING', stateChangedAt: '1458680239.883' },
            { state: 'DATA_COLLECTED', stateChangedAt: '1458680299.847' },
            { state: 'EVALUATING_RULES', stateChangedAt: '1458680300.099' },
            { state: 'COMPLETED', stateChangedAt: '1458680301.4' },
          ],
          userAttributesForFindings: [],
        },
      ],
      failedItems: {},
    },
  })
  .openapi('DescribeAssessmentRunsResponse')

const BatchDescribeArnListSchema = z.array(ArnSchema).min(1).max(10).openapi('BatchDescribeArnList')

const DescribeAssessmentRunsRequestSchema = z
  .object({
    assessmentRunArns: BatchDescribeArnListSchema.openapi({
      description: 'The ARN that specifies the assessment run that you want to describe.',
    }),
  })
  .openapi({ required: ['assessmentRunArns'], title: 'DescribeAssessmentRunsRequest' })
  .openapi('DescribeAssessmentRunsRequest')

const AssessmentTargetSchema = z
  .object({
    arn: ArnSchema.openapi({
      description: 'The ARN that specifies the Amazon Inspector assessment target.',
    }),
    name: AssessmentTargetNameSchema.openapi({
      description: 'The name of the Amazon Inspector assessment target.',
    }),
    resourceGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN that specifies the resource group that is associated with the assessment target.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time at which the assessment target is created.',
    }),
    updatedAt: TimestampSchema.openapi({
      description: 'The time at which <a>UpdateAssessmentTarget</a> is called.',
    }),
  })
  .openapi({
    required: ['arn', 'name', 'createdAt', 'updatedAt'],
    description:
      'Contains information about an Amazon Inspector application. This data type is used as the response element in the <a>DescribeAssessmentTargets</a> action.',
  })
  .openapi('AssessmentTarget')

const AssessmentTargetListSchema = z
  .array(AssessmentTargetSchema)
  .min(0)
  .max(10)
  .openapi('AssessmentTargetList')

const DescribeAssessmentTargetsResponseSchema = z
  .object({
    assessmentTargets: AssessmentTargetListSchema.openapi({
      description: 'Information about the assessment targets.',
    }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Assessment target details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['assessmentTargets', 'failedItems'],
    example: {
      assessmentTargets: [
        {
          name: 'ExampleAssessmentTarget',
          arn: 'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq',
          createdAt: '1458074191.459',
          resourceGroupArn: 'arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI',
          updatedAt: '1458074191.459',
        },
      ],
      failedItems: {},
    },
  })
  .openapi('DescribeAssessmentTargetsResponse')

const DescribeAssessmentTargetsRequestSchema = z
  .object({
    assessmentTargetArns: BatchDescribeArnListSchema.openapi({
      description: 'The ARNs that specifies the assessment targets that you want to describe.',
    }),
  })
  .openapi({ required: ['assessmentTargetArns'], title: 'DescribeAssessmentTargetsRequest' })
  .openapi('DescribeAssessmentTargetsRequest')

const ArnCountSchema = z.int().openapi('ArnCount')

const AssessmentTemplateSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN of the assessment template.' }),
    name: AssessmentTemplateNameSchema.openapi({
      description: 'The name of the assessment template.',
    }),
    assessmentTargetArn: ArnSchema.openapi({
      description: 'The ARN of the assessment target that corresponds to this assessment template.',
    }),
    durationInSeconds: AssessmentRunDurationSchema.openapi({
      description:
        'The duration in seconds specified for this assessment template. The default value is 3600 seconds (one hour). The maximum value is 86400 seconds (one day).',
    }),
    rulesPackageArns: AssessmentTemplateRulesPackageArnListSchema.openapi({
      description: 'The rules packages that are specified for this assessment template.',
    }),
    userAttributesForFindings: UserAttributeListSchema.openapi({
      description:
        'The user-defined attributes that are assigned to every generated finding from the assessment run that uses this assessment template.',
    }),
    lastAssessmentRunArn: ArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the most recent assessment run associated with this assessment template. This value exists only when the value of assessmentRunCount is greaterpa than zero.',
    }),
    assessmentRunCount: ArnCountSchema.openapi({
      description:
        'The number of existing assessment runs associated with this assessment template. This value can be zero or a positive integer.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time at which the assessment template is created.',
    }),
  })
  .openapi({
    required: [
      'arn',
      'name',
      'assessmentTargetArn',
      'durationInSeconds',
      'rulesPackageArns',
      'userAttributesForFindings',
      'assessmentRunCount',
      'createdAt',
    ],
    description:
      'Contains information about an Amazon Inspector assessment template. This data type is used as the response element in the <a>DescribeAssessmentTemplates</a> action.',
  })
  .openapi('AssessmentTemplate')

const AssessmentTemplateListSchema = z
  .array(AssessmentTemplateSchema)
  .min(0)
  .max(10)
  .openapi('AssessmentTemplateList')

const DescribeAssessmentTemplatesResponseSchema = z
  .object({
    assessmentTemplates: AssessmentTemplateListSchema.openapi({
      description: 'Information about the assessment templates.',
    }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Assessment template details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['assessmentTemplates', 'failedItems'],
    example: {
      assessmentTemplates: [
        {
          name: 'ExampleAssessmentTemplate',
          arn: 'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw',
          assessmentRunCount: 0,
          assessmentTargetArn: 'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq',
          createdAt: '1458074191.844',
          durationInSeconds: 3600,
          rulesPackageArns: ['arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP'],
          userAttributesForFindings: [],
        },
      ],
      failedItems: {},
    },
  })
  .openapi('DescribeAssessmentTemplatesResponse')

const DescribeAssessmentTemplatesRequestSchema = z
  .object({ assessmentTemplateArns: BatchDescribeArnListSchema })
  .openapi({ required: ['assessmentTemplateArns'], title: 'DescribeAssessmentTemplatesRequest' })
  .openapi('DescribeAssessmentTemplatesRequest')

const DescribeCrossAccountAccessRoleResponseSchema = z
  .object({
    roleArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the IAM role that Amazon Inspector uses to access your AWS account.',
    }),
    valid: BoolSchema.openapi({
      description:
        'A Boolean value that specifies whether the IAM role has the necessary policies attached to enable Amazon Inspector to access your AWS account.',
    }),
    registeredAt: TimestampSchema.openapi({
      description: 'The date when the cross-account access role was registered.',
    }),
  })
  .openapi({
    required: ['roleArn', 'valid', 'registeredAt'],
    example: {
      registeredAt: '1458069182.826',
      roleArn: 'arn:aws:iam::123456789012:role/inspector',
      valid: true,
    },
  })
  .openapi('DescribeCrossAccountAccessRoleResponse')

const ScopeTypeSchema = z.enum(['INSTANCE_ID', 'RULES_PACKAGE_ARN']).openapi('ScopeType')

const ScopeValueSchema = z.string().openapi('ScopeValue')

const ScopeSchema = z
  .object({
    key: ScopeTypeSchema.exactOptional().openapi({ description: 'The type of the scope.' }),
    value: ScopeValueSchema.exactOptional().openapi({
      description: 'The resource identifier for the specified scope type.',
    }),
  })
  .openapi({
    description: 'This data type contains key-value pairs that identify various Amazon resources.',
    required: [],
  })
  .openapi('Scope')

const ScopeListSchema = z.array(ScopeSchema).min(1).openapi('ScopeList')

const ExclusionSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN that specifies the exclusion.' }),
    title: TextSchema.openapi({ description: 'The name of the exclusion.' }),
    description: TextSchema.openapi({ description: 'The description of the exclusion.' }),
    recommendation: TextSchema.openapi({ description: 'The recommendation for the exclusion.' }),
    scopes: ScopeListSchema.openapi({
      description: 'The AWS resources for which the exclusion pertains.',
    }),
    attributes: AttributeListSchema.exactOptional().openapi({
      description: 'The system-defined attributes for the exclusion.',
    }),
  })
  .openapi({
    required: ['arn', 'title', 'description', 'recommendation', 'scopes'],
    description: 'Contains information about what was excluded from an assessment run.',
  })
  .openapi('Exclusion')

const ExclusionMapSchema = z
  .record(z.string(), ExclusionSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 100)
  .openapi('ExclusionMap')

const DescribeExclusionsResponseSchema = z
  .object({
    exclusions: ExclusionMapSchema.openapi({ description: 'Information about the exclusions.' }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Exclusion details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({ required: ['exclusions', 'failedItems'] })
  .openapi('DescribeExclusionsResponse')

const BatchDescribeExclusionsArnListSchema = z
  .array(ArnSchema)
  .min(1)
  .max(100)
  .openapi('BatchDescribeExclusionsArnList')

const LocaleSchema = z.literal('EN_US').openapi('Locale')

const DescribeExclusionsRequestSchema = z
  .object({
    exclusionArns: BatchDescribeExclusionsArnListSchema.openapi({
      description: 'The list of ARNs that specify the exclusions that you want to describe.',
    }),
    locale: LocaleSchema.exactOptional().openapi({
      description:
        "The locale into which you want to translate the exclusion's title, description, and recommendation.",
    }),
  })
  .openapi({ required: ['exclusionArns'], title: 'DescribeExclusionsRequest' })
  .openapi('DescribeExclusionsRequest')

const DescribeFindingsResponseSchema: z.ZodType<DescribeFindingsResponseType> = z
  .object({
    findings: FindingListSchema.openapi({ description: 'Information about the finding.' }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Finding details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['findings', 'failedItems'],
    example: {
      failedItems: {},
      findings: [
        {
          arn: 'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4',
          assetAttributes: { ipv4Addresses: [], schemaVersion: 1 },
          assetType: 'ec2-instance',
          attributes: [],
          confidence: 10,
          createdAt: '1458680301.37',
          description:
            'Amazon Inspector did not find any potential security issues during this assessment.',
          indicatorOfCompromise: false,
          numericSeverity: 0,
          recommendation: 'No remediation needed.',
          schemaVersion: 1,
          service: 'Inspector',
          serviceAttributes: {
            assessmentRunArn:
              'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE',
            rulesPackageArn: 'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP',
            schemaVersion: 1,
          },
          severity: 'Informational',
          title: 'No potential security issues found',
          updatedAt: '1458680301.37',
          userAttributes: [],
        },
      ],
    },
  })
  .openapi('DescribeFindingsResponse')

const DescribeFindingsRequestSchema = z
  .object({
    findingArns: BatchDescribeArnListSchema.openapi({
      description: 'The ARN that specifies the finding that you want to describe.',
    }),
    locale: LocaleSchema.exactOptional().openapi({
      description:
        'The locale into which you want to translate a finding description, recommendation, and the short description that identifies the finding.',
    }),
  })
  .openapi({ required: ['findingArns'], title: 'DescribeFindingsRequest' })
  .openapi('DescribeFindingsRequest')

const ResourceGroupSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN of the resource group.' }),
    tags: ResourceGroupTagsSchema.openapi({
      description:
        'The tags (key and value pairs) of the resource group. This data type property is used in the <a>CreateResourceGroup</a> action.',
    }),
    createdAt: TimestampSchema.openapi({
      description: 'The time at which resource group is created.',
    }),
  })
  .openapi({
    required: ['arn', 'tags', 'createdAt'],
    description:
      'Contains information about a resource group. The resource group defines a set of tags that, when queried, identify the AWS resources that make up the assessment target. This data type is used as the response element in the <a>DescribeResourceGroups</a> action.',
  })
  .openapi('ResourceGroup')

const ResourceGroupListSchema = z
  .array(ResourceGroupSchema)
  .min(0)
  .max(10)
  .openapi('ResourceGroupList')

const DescribeResourceGroupsResponseSchema = z
  .object({
    resourceGroups: ResourceGroupListSchema.openapi({
      description: 'Information about a resource group.',
    }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Resource group details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['resourceGroups', 'failedItems'],
    example: {
      failedItems: {},
      resourceGroups: [
        {
          arn: 'arn:aws:inspector:us-west-2:123456789012:resourcegroup/0-PyGXopAI',
          createdAt: '1458074191.098',
          tags: [{ key: 'Name', value: 'example' }],
        },
      ],
    },
  })
  .openapi('DescribeResourceGroupsResponse')

const DescribeResourceGroupsRequestSchema = z
  .object({
    resourceGroupArns: BatchDescribeArnListSchema.openapi({
      description: 'The ARN that specifies the resource group that you want to describe.',
    }),
  })
  .openapi({ required: ['resourceGroupArns'], title: 'DescribeResourceGroupsRequest' })
  .openapi('DescribeResourceGroupsRequest')

const RulesPackageNameSchema = z.string().min(0).max(1000).openapi('RulesPackageName')

const VersionSchema = z.string().min(0).max(1000).openapi('Version')

const ProviderNameSchema = z.string().min(0).max(1000).openapi('ProviderName')

const RulesPackageSchema = z
  .object({
    arn: ArnSchema.openapi({ description: 'The ARN of the rules package.' }),
    name: RulesPackageNameSchema.openapi({ description: 'The name of the rules package.' }),
    version: VersionSchema.openapi({ description: 'The version ID of the rules package.' }),
    provider: ProviderNameSchema.openapi({ description: 'The provider of the rules package.' }),
    description: TextSchema.exactOptional().openapi({
      description: 'The description of the rules package.',
    }),
  })
  .openapi({
    required: ['arn', 'name', 'version', 'provider'],
    description:
      'Contains information about an Amazon Inspector rules package. This data type is used as the response element in the <a>DescribeRulesPackages</a> action.',
  })
  .openapi('RulesPackage')

const RulesPackageListSchema = z
  .array(RulesPackageSchema)
  .min(0)
  .max(10)
  .openapi('RulesPackageList')

const DescribeRulesPackagesResponseSchema = z
  .object({
    rulesPackages: RulesPackageListSchema.openapi({
      description: 'Information about the rules package.',
    }),
    failedItems: FailedItemsSchema.openapi({
      description:
        'Rules package details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({
    required: ['rulesPackages', 'failedItems'],
    example: {
      failedItems: {},
      rulesPackages: [
        {
          version: '1.1',
          name: 'Security Best Practices',
          arn: 'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ',
          description:
            'The rules in this package help determine whether your systems are configured securely.',
          provider: 'Amazon Web Services, Inc.',
        },
      ],
    },
  })
  .openapi('DescribeRulesPackagesResponse')

const DescribeRulesPackagesRequestSchema = z
  .object({
    rulesPackageArns: BatchDescribeArnListSchema.openapi({
      description: 'The ARN that specifies the rules package that you want to describe.',
    }),
    locale: LocaleSchema.exactOptional().openapi({
      description: 'The locale that you want to translate a rules package description into.',
    }),
  })
  .openapi({ required: ['rulesPackageArns'], title: 'DescribeRulesPackagesRequest' })
  .openapi('DescribeRulesPackagesRequest')

const ReportStatusSchema = z
  .enum(['WORK_IN_PROGRESS', 'FAILED', 'COMPLETED'])
  .openapi('ReportStatus')

const UrlSchema = z.string().max(2048).openapi('Url')

const GetAssessmentReportResponseSchema = z
  .object({
    status: ReportStatusSchema.openapi({
      description: 'Specifies the status of the request to generate an assessment report. ',
    }),
    url: UrlSchema.exactOptional().openapi({
      description:
        'Specifies the URL where you can find the generated assessment report. This parameter is only returned if the report is successfully generated.',
    }),
  })
  .openapi({ required: ['status'] })
  .openapi('GetAssessmentReportResponse')

const ReportFileFormatSchema = z.enum(['HTML', 'PDF']).openapi('ReportFileFormat')

const ReportTypeSchema = z.enum(['FINDING', 'FULL']).openapi('ReportType')

const GetAssessmentReportRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the assessment run for which you want to generate a report.',
    }),
    reportFileFormat: ReportFileFormatSchema.openapi({
      description:
        'Specifies the file format (html or pdf) of the assessment report that you want to generate.',
    }),
    reportType: ReportTypeSchema.openapi({
      description:
        'Specifies the type of the assessment report that you want to generate. There are two types of assessment reports: a finding report and a full report. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_reports.html">Assessment Reports</a>. ',
    }),
  })
  .openapi({
    required: ['assessmentRunArn', 'reportFileFormat', 'reportType'],
    title: 'GetAssessmentReportRequest',
  })
  .openapi('GetAssessmentReportRequest')

const UnsupportedFeatureExceptionSchema = z.any().openapi('UnsupportedFeatureException')

const PreviewStatusSchema = z.enum(['WORK_IN_PROGRESS', 'COMPLETED']).openapi('PreviewStatus')

const ExclusionPreviewSchema = z
  .object({
    title: TextSchema.openapi({ description: 'The name of the exclusion preview.' }),
    description: TextSchema.openapi({ description: 'The description of the exclusion preview.' }),
    recommendation: TextSchema.openapi({
      description: 'The recommendation for the exclusion preview.',
    }),
    scopes: ScopeListSchema.openapi({
      description: 'The AWS resources for which the exclusion preview pertains.',
    }),
    attributes: AttributeListSchema.exactOptional().openapi({
      description: 'The system-defined attributes for the exclusion preview.',
    }),
  })
  .openapi({
    required: ['title', 'description', 'recommendation', 'scopes'],
    description:
      'Contains information about what is excluded from an assessment run given the current state of the assessment template.',
  })
  .openapi('ExclusionPreview')

const ExclusionPreviewListSchema = z
  .array(ExclusionPreviewSchema)
  .min(0)
  .max(100)
  .openapi('ExclusionPreviewList')

const PaginationTokenSchema = z.string().min(1).max(300).openapi('PaginationToken')

const GetExclusionsPreviewResponseSchema = z
  .object({
    previewStatus: PreviewStatusSchema.openapi({
      description: 'Specifies the status of the request to generate an exclusions preview.',
    }),
    exclusionPreviews: ExclusionPreviewListSchema.exactOptional().openapi({
      description: 'Information about the exclusions included in the preview.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({ required: ['previewStatus'] })
  .openapi('GetExclusionsPreviewResponse')

const ListMaxResultsSchema = z.int().openapi('ListMaxResults')

const GetExclusionsPreviewRequestSchema = z
  .object({
    assessmentTemplateArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the assessment template for which the exclusions preview was requested.',
    }),
    previewToken: UUIDSchema.openapi({
      description: 'The unique identifier associated of the exclusions preview.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the GetExclusionsPreviewRequest action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 100. The maximum value is 500.',
    }),
    locale: LocaleSchema.exactOptional().openapi({
      description:
        "The locale into which you want to translate the exclusion's title, description, and recommendation.",
    }),
  })
  .openapi({
    required: ['assessmentTemplateArn', 'previewToken'],
    title: 'GetExclusionsPreviewRequest',
  })
  .openapi('GetExclusionsPreviewRequest')

const MessageTypeSchema = z.string().min(1).max(300).openapi('MessageType')

const LongSchema = z.int().openapi('Long')

const TelemetryMetadataSchema = z
  .object({
    messageType: MessageTypeSchema.openapi({
      description: 'A specific type of behavioral data that is collected by the agent.',
    }),
    count: LongSchema.openapi({
      description: 'The count of messages that the agent sends to the Amazon Inspector service.',
    }),
    dataSize: LongSchema.exactOptional().openapi({
      description:
        'The data size of messages that the agent sends to the Amazon Inspector service.',
    }),
  })
  .openapi({
    required: ['messageType', 'count'],
    description:
      'The metadata about the Amazon Inspector application data metrics collected by the agent. This data type is used as the response element in the <a>GetTelemetryMetadata</a> action.',
  })
  .openapi('TelemetryMetadata')

const TelemetryMetadataListSchema = z
  .array(TelemetryMetadataSchema)
  .min(0)
  .max(5000)
  .openapi('TelemetryMetadataList')

const GetTelemetryMetadataResponseSchema = z
  .object({
    telemetryMetadata: TelemetryMetadataListSchema.openapi({ description: 'Telemetry details.' }),
  })
  .openapi({
    required: ['telemetryMetadata'],
    example: {
      telemetryMetadata: [
        { count: 2, dataSize: 345, messageType: 'InspectorDuplicateProcess' },
        { count: 3, dataSize: 255, messageType: 'InspectorTimeEventMsg' },
        { count: 4, dataSize: 1082, messageType: 'InspectorNetworkInterface' },
        { count: 2, dataSize: 349, messageType: 'InspectorDnsEntry' },
        { count: 11, dataSize: 2514, messageType: 'InspectorDirectoryInfoMsg' },
        { count: 1, dataSize: 179, messageType: 'InspectorTcpV6ListeningPort' },
        { count: 101, dataSize: 10949, messageType: 'InspectorTerminal' },
        { count: 26, dataSize: 5916, messageType: 'InspectorUser' },
        { count: 282, dataSize: 32148, messageType: 'InspectorDynamicallyLoadedCodeModule' },
        { count: 18, dataSize: 10172, messageType: 'InspectorCreateProcess' },
        { count: 3, dataSize: 8001, messageType: 'InspectorProcessPerformance' },
        { count: 1, dataSize: 360, messageType: 'InspectorOperatingSystem' },
        { count: 6, dataSize: 546, messageType: 'InspectorStopProcess' },
        { count: 1, dataSize: 1553, messageType: 'InspectorInstanceMetaData' },
        { count: 2, dataSize: 434, messageType: 'InspectorTcpV4Connection' },
        { count: 474, dataSize: 2960322, messageType: 'InspectorPackageInfo' },
        { count: 3, dataSize: 2235, messageType: 'InspectorSystemPerformance' },
        { count: 105, dataSize: 46048, messageType: 'InspectorCodeModule' },
        { count: 1, dataSize: 182, messageType: 'InspectorUdpV6ListeningPort' },
        { count: 2, dataSize: 371, messageType: 'InspectorUdpV4ListeningPort' },
        { count: 18, dataSize: 8362, messageType: 'InspectorKernelModule' },
        { count: 29, dataSize: 48788, messageType: 'InspectorConfigurationInfo' },
        { count: 1, dataSize: 79, messageType: 'InspectorMonitoringStart' },
        { count: 5, dataSize: 0, messageType: 'InspectorSplitMsgBegin' },
        { count: 51, dataSize: 4593, messageType: 'InspectorGroup' },
        { count: 1, dataSize: 184, messageType: 'InspectorTcpV4ListeningPort' },
        { count: 1159, dataSize: 3146579, messageType: 'Total' },
        { count: 5, dataSize: 0, messageType: 'InspectorSplitMsgEnd' },
        { count: 1, dataSize: 612, messageType: 'InspectorLoadImageInProcess' },
      ],
    },
  })
  .openapi('GetTelemetryMetadataResponse')

const GetTelemetryMetadataRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description:
        'The ARN that specifies the assessment run that has the telemetry data that you want to obtain.',
    }),
  })
  .openapi({ required: ['assessmentRunArn'], title: 'GetTelemetryMetadataRequest' })
  .openapi('GetTelemetryMetadataRequest')

const AgentHealthSchema = z.enum(['HEALTHY', 'UNHEALTHY', 'UNKNOWN']).openapi('AgentHealth')

const AgentHealthCodeSchema = z
  .enum(['IDLE', 'RUNNING', 'SHUTDOWN', 'UNHEALTHY', 'THROTTLED', 'UNKNOWN'])
  .openapi('AgentHealthCode')

const AssessmentRunAgentSchema = z
  .object({
    agentId: AgentIdSchema.openapi({
      description: 'The AWS account of the EC2 instance where the agent is installed.',
    }),
    assessmentRunArn: ArnSchema.openapi({
      description: 'The ARN of the assessment run that is associated with the agent.',
    }),
    agentHealth: AgentHealthSchema.openapi({
      description: 'The current health state of the agent.',
    }),
    agentHealthCode: AgentHealthCodeSchema.openapi({
      description: 'The detailed health state of the agent.',
    }),
    agentHealthDetails: MessageSchema.exactOptional().openapi({
      description: 'The description for the agent health code.',
    }),
    autoScalingGroup: AutoScalingGroupSchema.exactOptional().openapi({
      description: 'The Auto Scaling group of the EC2 instance that is specified by the agent ID.',
    }),
    telemetryMetadata: TelemetryMetadataListSchema.openapi({
      description: 'The Amazon Inspector application data metrics that are collected by the agent.',
    }),
  })
  .openapi({
    required: [
      'agentId',
      'assessmentRunArn',
      'agentHealth',
      'agentHealthCode',
      'telemetryMetadata',
    ],
    description:
      'Contains information about an Amazon Inspector agent. This data type is used as a response element in the <a>ListAssessmentRunAgents</a> action.',
  })
  .openapi('AssessmentRunAgent')

const AssessmentRunAgentListSchema = z
  .array(AssessmentRunAgentSchema)
  .min(0)
  .max(500)
  .openapi('AssessmentRunAgentList')

const ListAssessmentRunAgentsResponseSchema = z
  .object({
    assessmentRunAgents: AssessmentRunAgentListSchema.openapi({
      description: 'A list of ARNs that specifies the agents returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['assessmentRunAgents'],
    example: {
      assessmentRunAgents: [
        {
          agentHealth: 'HEALTHY',
          agentHealthCode: 'RUNNING',
          agentId: 'i-49113b93',
          assessmentRunArn:
            'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE',
          telemetryMetadata: [
            { count: 2, dataSize: 345, messageType: 'InspectorDuplicateProcess' },
            { count: 3, dataSize: 255, messageType: 'InspectorTimeEventMsg' },
            { count: 4, dataSize: 1082, messageType: 'InspectorNetworkInterface' },
            { count: 2, dataSize: 349, messageType: 'InspectorDnsEntry' },
            { count: 11, dataSize: 2514, messageType: 'InspectorDirectoryInfoMsg' },
            { count: 1, dataSize: 179, messageType: 'InspectorTcpV6ListeningPort' },
            { count: 101, dataSize: 10949, messageType: 'InspectorTerminal' },
            { count: 26, dataSize: 5916, messageType: 'InspectorUser' },
            { count: 282, dataSize: 32148, messageType: 'InspectorDynamicallyLoadedCodeModule' },
            { count: 18, dataSize: 10172, messageType: 'InspectorCreateProcess' },
            { count: 3, dataSize: 8001, messageType: 'InspectorProcessPerformance' },
            { count: 1, dataSize: 360, messageType: 'InspectorOperatingSystem' },
            { count: 6, dataSize: 546, messageType: 'InspectorStopProcess' },
            { count: 1, dataSize: 1553, messageType: 'InspectorInstanceMetaData' },
            { count: 2, dataSize: 434, messageType: 'InspectorTcpV4Connection' },
            { count: 474, dataSize: 2960322, messageType: 'InspectorPackageInfo' },
            { count: 3, dataSize: 2235, messageType: 'InspectorSystemPerformance' },
            { count: 105, dataSize: 46048, messageType: 'InspectorCodeModule' },
            { count: 1, dataSize: 182, messageType: 'InspectorUdpV6ListeningPort' },
            { count: 2, dataSize: 371, messageType: 'InspectorUdpV4ListeningPort' },
            { count: 18, dataSize: 8362, messageType: 'InspectorKernelModule' },
            { count: 29, dataSize: 48788, messageType: 'InspectorConfigurationInfo' },
            { count: 1, dataSize: 79, messageType: 'InspectorMonitoringStart' },
            { count: 5, dataSize: 0, messageType: 'InspectorSplitMsgBegin' },
            { count: 51, dataSize: 4593, messageType: 'InspectorGroup' },
            { count: 1, dataSize: 184, messageType: 'InspectorTcpV4ListeningPort' },
            { count: 1159, dataSize: 3146579, messageType: 'Total' },
            { count: 5, dataSize: 0, messageType: 'InspectorSplitMsgEnd' },
            { count: 1, dataSize: 612, messageType: 'InspectorLoadImageInProcess' },
          ],
        },
      ],
      nextToken: '1',
    },
  })
  .openapi('ListAssessmentRunAgentsResponse')

const AgentHealthListSchema = z.array(AgentHealthSchema).min(0).max(10).openapi('AgentHealthList')

const AgentHealthCodeListSchema = z
  .array(AgentHealthCodeSchema)
  .min(0)
  .max(10)
  .openapi('AgentHealthCodeList')

const AgentFilterSchema = z
  .object({
    agentHealths: AgentHealthListSchema.openapi({
      description:
        'The current health state of the agent. Values can be set to <b>HEALTHY</b> or <b>UNHEALTHY</b>.',
    }),
    agentHealthCodes: AgentHealthCodeListSchema.openapi({
      description:
        'The detailed health state of the agent. Values can be set to <b>IDLE</b>, <b>RUNNING</b>, <b>SHUTDOWN</b>, <b>UNHEALTHY</b>, <b>THROTTLED</b>, and <b>UNKNOWN</b>. ',
    }),
  })
  .openapi({
    required: ['agentHealths', 'agentHealthCodes'],
    description:
      'Contains information about an Amazon Inspector agent. This data type is used as a request parameter in the <a>ListAssessmentRunAgents</a> action.',
  })
  .openapi('AgentFilter')

const ListAssessmentRunAgentsRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment run whose agents you want to list.',
    }),
    filter: AgentFilterSchema.exactOptional().openapi({
      description:
        "<p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListAssessmentRunAgents</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ required: ['assessmentRunArn'], title: 'ListAssessmentRunAgentsRequest' })
  .openapi('ListAssessmentRunAgentsRequest')

const ListReturnedArnListSchema = z.array(ArnSchema).min(0).max(100).openapi('ListReturnedArnList')

const ListAssessmentRunsResponseSchema = z
  .object({
    assessmentRunArns: ListReturnedArnListSchema.openapi({
      description:
        'A list of ARNs that specifies the assessment runs that are returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['assessmentRunArns'],
    example: {
      assessmentRunArns: [
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE',
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-v5D6fI3v',
      ],
      nextToken: '1',
    },
  })
  .openapi('ListAssessmentRunsResponse')

const ListParentArnListSchema = z.array(ArnSchema).min(0).max(50).openapi('ListParentArnList')

const NamePatternSchema = z.string().min(1).max(140).openapi('NamePattern')

const AssessmentRunStateListSchema = z
  .array(AssessmentRunStateSchema)
  .min(0)
  .max(50)
  .openapi('AssessmentRunStateList')

const DurationRangeSchema = z
  .object({
    minSeconds: AssessmentRunDurationSchema.exactOptional().openapi({
      description: 'The minimum value of the duration range. Must be greater than zero.',
    }),
    maxSeconds: AssessmentRunDurationSchema.exactOptional().openapi({
      description:
        'The maximum value of the duration range. Must be less than or equal to 604800 seconds (1 week).',
    }),
  })
  .openapi({
    description: 'This data type is used in the <a>AssessmentTemplateFilter</a> data type.',
    required: [],
  })
  .openapi('DurationRange')

const FilterRulesPackageArnListSchema = z
  .array(ArnSchema)
  .min(0)
  .max(50)
  .openapi('FilterRulesPackageArnList')

const TimestampRangeSchema = z
  .object({
    beginDate: TimestampSchema.exactOptional().openapi({
      description: 'The minimum value of the timestamp range.',
    }),
    endDate: TimestampSchema.exactOptional().openapi({
      description: 'The maximum value of the timestamp range.',
    }),
  })
  .openapi({
    description: 'This data type is used in the <a>AssessmentRunFilter</a> data type.',
    required: [],
  })
  .openapi('TimestampRange')

const AssessmentRunFilterSchema = z
  .object({
    namePattern: NamePatternSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, an explicit value or a string containing a wildcard that is specified for this data type property must match the value of the <b>assessmentRunName</b> property of the <a>AssessmentRun</a> data type.',
    }),
    states: AssessmentRunStateListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values specified for this data type property must be the exact match of the value of the <b>assessmentRunState</b> property of the <a>AssessmentRun</a> data type.',
    }),
    durationRange: DurationRangeSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentRun</a> data type.',
    }),
    rulesPackageArns: FilterRulesPackageArnListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>rulesPackages</b> property of the <a>AssessmentRun</a> data type.',
    }),
    startTimeRange: TimestampRangeSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>startTime</b> property of the <a>AssessmentRun</a> data type.',
    }),
    completionTimeRange: TimestampRangeSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>completedAt</b> property of the <a>AssessmentRun</a> data type.',
    }),
    stateChangeTimeRange: TimestampRangeSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must match the <b>stateChangedAt</b> property of the <a>AssessmentRun</a> data type.',
    }),
  })
  .openapi({
    description: 'Used as the request parameter in the <a>ListAssessmentRuns</a> action.',
    required: [],
  })
  .openapi('AssessmentRunFilter')

const ListAssessmentRunsRequestSchema = z
  .object({
    assessmentTemplateArns: ListParentArnListSchema.exactOptional().openapi({
      description:
        'The ARNs that specify the assessment templates whose assessment runs you want to list.',
    }),
    filter: AssessmentRunFilterSchema.exactOptional().openapi({
      description:
        "<p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListAssessmentRuns</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListAssessmentRunsRequest', required: [] })
  .openapi('ListAssessmentRunsRequest')

const ListAssessmentTargetsResponseSchema = z
  .object({
    assessmentTargetArns: ListReturnedArnListSchema.openapi({
      description:
        'A list of ARNs that specifies the assessment targets that are returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['assessmentTargetArns'],
    example: {
      assessmentTargetArns: ['arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq'],
      nextToken: '1',
    },
  })
  .openapi('ListAssessmentTargetsResponse')

const AssessmentTargetFilterSchema = z
  .object({
    assessmentTargetNamePattern: NamePatternSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the <b>assessmentTargetName</b> property of the <a>AssessmentTarget</a> data type.',
    }),
  })
  .openapi({
    description: 'Used as the request parameter in the <a>ListAssessmentTargets</a> action.',
    required: [],
  })
  .openapi('AssessmentTargetFilter')

const ListAssessmentTargetsRequestSchema = z
  .object({
    filter: AssessmentTargetFilterSchema.exactOptional().openapi({
      description:
        "<p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListAssessmentTargets</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListAssessmentTargetsRequest', required: [] })
  .openapi('ListAssessmentTargetsRequest')

const ListAssessmentTemplatesResponseSchema = z
  .object({
    assessmentTemplateArns: ListReturnedArnListSchema.openapi({
      description: 'A list of ARNs that specifies the assessment templates returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['assessmentTemplateArns'],
    example: {
      assessmentTemplateArns: [
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw',
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-Uza6ihLh',
      ],
      nextToken: '1',
    },
  })
  .openapi('ListAssessmentTemplatesResponse')

const AssessmentTemplateFilterSchema = z
  .object({
    namePattern: NamePatternSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, an explicit value or a string that contains a wildcard that is specified for this data type property must match the value of the <b>assessmentTemplateName</b> property of the <a>AssessmentTemplate</a> data type.',
    }),
    durationRange: DurationRangeSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value specified for this data type property must inclusively match any value between the specified minimum and maximum values of the <b>durationInSeconds</b> property of the <a>AssessmentTemplate</a> data type.',
    }),
    rulesPackageArns: FilterRulesPackageArnListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the values that are specified for this data type property must be contained in the list of values of the <b>rulesPackageArns</b> property of the <a>AssessmentTemplate</a> data type.',
    }),
  })
  .openapi({
    description: 'Used as the request parameter in the <a>ListAssessmentTemplates</a> action.',
    required: [],
  })
  .openapi('AssessmentTemplateFilter')

const ListAssessmentTemplatesRequestSchema = z
  .object({
    assessmentTargetArns: ListParentArnListSchema.exactOptional().openapi({
      description:
        'A list of ARNs that specifies the assessment targets whose assessment templates you want to list.',
    }),
    filter: AssessmentTemplateFilterSchema.exactOptional().openapi({
      description:
        "<p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListAssessmentTemplates</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListAssessmentTemplatesRequest', required: [] })
  .openapi('ListAssessmentTemplatesRequest')

const EventSubscriptionSchema = z
  .object({
    event: InspectorEventSchema.openapi({
      description:
        'The event for which Amazon Simple Notification Service (SNS) notifications are sent.',
    }),
    subscribedAt: TimestampSchema.openapi({
      description: 'The time at which <a>SubscribeToEvent</a> is called.',
    }),
  })
  .openapi({
    required: ['event', 'subscribedAt'],
    description: 'This data type is used in the <a>Subscription</a> data type.',
  })
  .openapi('EventSubscription')

const EventSubscriptionListSchema = z
  .array(EventSubscriptionSchema)
  .min(1)
  .max(50)
  .openapi('EventSubscriptionList')

const SubscriptionSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description:
        'The ARN of the assessment template that is used during the event for which the SNS notification is sent.',
    }),
    topicArn: ArnSchema.openapi({
      description:
        'The ARN of the Amazon Simple Notification Service (SNS) topic to which the SNS notifications are sent.',
    }),
    eventSubscriptions: EventSubscriptionListSchema.openapi({
      description: 'The list of existing event subscriptions.',
    }),
  })
  .openapi({
    required: ['resourceArn', 'topicArn', 'eventSubscriptions'],
    description:
      'This data type is used as a response element in the <a>ListEventSubscriptions</a> action.',
  })
  .openapi('Subscription')

const SubscriptionListSchema = z
  .array(SubscriptionSchema)
  .min(0)
  .max(50)
  .openapi('SubscriptionList')

const ListEventSubscriptionsResponseSchema = z
  .object({
    subscriptions: SubscriptionListSchema.openapi({
      description: 'Details of the returned event subscriptions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['subscriptions'],
    example: {
      nextToken: '1',
      subscriptions: [
        {
          eventSubscriptions: [
            { event: 'ASSESSMENT_RUN_COMPLETED', subscribedAt: '1459455440.867' },
          ],
          resourceArn:
            'arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-7sbz2Kz0',
          topicArn: 'arn:aws:sns:us-west-2:123456789012:exampletopic',
        },
      ],
    },
  })
  .openapi('ListEventSubscriptionsResponse')

const ListEventSubscriptionsMaxResultsSchema = z.int().openapi('ListEventSubscriptionsMaxResults')

const ListEventSubscriptionsRequestSchema = z
  .object({
    resourceArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the assessment template for which you want to list the existing event subscriptions.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListEventSubscriptions</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListEventSubscriptionsMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListEventSubscriptionsRequest', required: [] })
  .openapi('ListEventSubscriptionsRequest')

const ListExclusionsResponseSchema = z
  .object({
    exclusionArns: ListReturnedArnListSchema.openapi({
      description: "A list of exclusions' ARNs returned by the action.",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'When a response is generated, if there is more data to be listed, this parameters is present in the response and contains the value to use for the nextToken parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({ required: ['exclusionArns'] })
  .openapi('ListExclusionsResponse')

const ListExclusionsRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description:
        'The ARN of the assessment run that generated the exclusions that you want to list.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the ListExclusionsRequest action. Subsequent calls to the action fill nextToken in the request with the value of nextToken from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 100. The maximum value is 500.',
    }),
  })
  .openapi({ required: ['assessmentRunArn'], title: 'ListExclusionsRequest' })
  .openapi('ListExclusionsRequest')

const ListFindingsResponseSchema = z
  .object({
    findingArns: ListReturnedArnListSchema.openapi({
      description: 'A list of ARNs that specifies the findings returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['findingArns'],
    example: {
      findingArns: [
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4',
        'arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-v5D6fI3v/finding/0-tyvmqBLy',
      ],
      nextToken: '1',
    },
  })
  .openapi('ListFindingsResponse')

const AgentIdListSchema = z.array(AgentIdSchema).min(0).max(99).openapi('AgentIdList')

const AutoScalingGroupListSchema = z
  .array(AutoScalingGroupSchema)
  .min(0)
  .max(20)
  .openapi('AutoScalingGroupList')

const RuleNameSchema = z.string().max(1000).openapi('RuleName')

const RuleNameListSchema = z.array(RuleNameSchema).min(0).max(50).openapi('RuleNameList')

const SeverityListSchema = z.array(SeveritySchema).min(0).max(50).openapi('SeverityList')

const FindingFilterSchema = z
  .object({
    agentIds: AgentIdListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>agentId</b> property of the <a>Finding</a> data type.',
    }),
    autoScalingGroups: AutoScalingGroupListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>autoScalingGroup</b> property of the <a>Finding</a> data type.',
    }),
    ruleNames: RuleNameListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>ruleName</b> property of the <a>Finding</a> data type.',
    }),
    severities: SeverityListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>severity</b> property of the <a>Finding</a> data type.',
    }),
    rulesPackageArns: FilterRulesPackageArnListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, one of the values that is specified for this data type property must be the exact match of the value of the <b>rulesPackageArn</b> property of the <a>Finding</a> data type.',
    }),
    attributes: AttributeListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the list of values that are specified for this data type property must be contained in the list of values of the <b>attributes</b> property of the <a>Finding</a> data type.',
    }),
    userAttributes: AttributeListSchema.exactOptional().openapi({
      description:
        'For a record to match a filter, the value that is specified for this data type property must be contained in the list of values of the <b>userAttributes</b> property of the <a>Finding</a> data type.',
    }),
    creationTimeRange: TimestampRangeSchema.exactOptional().openapi({
      description: 'The time range during which the finding is generated.',
    }),
  })
  .openapi({
    description: 'This data type is used as a request parameter in the <a>ListFindings</a> action.',
    required: [],
  })
  .openapi('FindingFilter')

const ListFindingsRequestSchema = z
  .object({
    assessmentRunArns: ListParentArnListSchema.exactOptional().openapi({
      description:
        'The ARNs of the assessment runs that generate the findings that you want to list.',
    }),
    filter: FindingFilterSchema.exactOptional().openapi({
      description:
        "<p>You can use this parameter to specify a subset of data to be included in the action's response.</p> <p>For a record to match a filter, all specified filter attributes must match. When multiple values are specified for a filter attribute, any of the values can match.</p>",
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListFindings</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListFindingsRequest', required: [] })
  .openapi('ListFindingsRequest')

const ListRulesPackagesResponseSchema = z
  .object({
    rulesPackageArns: ListReturnedArnListSchema.openapi({
      description: 'The list of ARNs that specifies the rules packages returned by the action.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['rulesPackageArns'],
    example: {
      nextToken: '1',
      rulesPackageArns: [
        'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-9hgA516p',
        'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-H5hpSawc',
        'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-JJOtZiqQ',
        'arn:aws:inspector:us-west-2:758058086616:rulespackage/0-vg5GGHSD',
      ],
    },
  })
  .openapi('ListRulesPackagesResponse')

const ListRulesPackagesRequestSchema = z
  .object({
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>ListRulesPackages</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: ListMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ title: 'ListRulesPackagesRequest', required: [] })
  .openapi('ListRulesPackagesRequest')

const TagListSchema = z.array(TagSchema).min(0).max(10).openapi('TagList')

const ListTagsForResourceResponseSchema = z
  .object({ tags: TagListSchema.openapi({ description: 'A collection of key and value pairs.' }) })
  .openapi({ required: ['tags'], example: { tags: [{ key: 'Name', value: 'Example' }] } })
  .openapi('ListTagsForResourceResponse')

const ListTagsForResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description: 'The ARN that specifies the assessment template whose tags you want to list.',
    }),
  })
  .openapi({ required: ['resourceArn'], title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const AgentVersionSchema = z.string().min(1).max(128).openapi('AgentVersion')

const OperatingSystemSchema = z.string().min(1).max(256).openapi('OperatingSystem')

const KernelVersionSchema = z.string().min(1).max(128).openapi('KernelVersion')

const AgentPreviewSchema = z
  .object({
    hostname: HostnameSchema.exactOptional().openapi({
      description:
        'The hostname of the EC2 instance on which the Amazon Inspector Agent is installed.',
    }),
    agentId: AgentIdSchema.openapi({
      description: 'The ID of the EC2 instance where the agent is installed.',
    }),
    autoScalingGroup: AutoScalingGroupSchema.exactOptional().openapi({
      description: 'The Auto Scaling group for the EC2 instance where the agent is installed.',
    }),
    agentHealth: AgentHealthSchema.exactOptional().openapi({
      description: 'The health status of the Amazon Inspector Agent.',
    }),
    agentVersion: AgentVersionSchema.exactOptional().openapi({
      description: 'The version of the Amazon Inspector Agent.',
    }),
    operatingSystem: OperatingSystemSchema.exactOptional().openapi({
      description:
        'The operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.',
    }),
    kernelVersion: KernelVersionSchema.exactOptional().openapi({
      description:
        'The kernel version of the operating system running on the EC2 instance on which the Amazon Inspector Agent is installed.',
    }),
    ipv4Address: Ipv4AddressSchema.exactOptional().openapi({
      description:
        'The IP address of the EC2 instance on which the Amazon Inspector Agent is installed.',
    }),
  })
  .openapi({
    required: ['agentId'],
    description: 'Used as a response element in the <a>PreviewAgents</a> action.',
  })
  .openapi('AgentPreview')

const AgentPreviewListSchema = z
  .array(AgentPreviewSchema)
  .min(0)
  .max(100)
  .openapi('AgentPreviewList')

const PreviewAgentsResponseSchema = z
  .object({
    agentPreviews: AgentPreviewListSchema.openapi({ description: 'The resulting list of agents.' }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        ' When a response is generated, if there is more data to be listed, this parameter is present in the response and contains the value to use for the <b>nextToken</b> parameter in a subsequent pagination request. If there is no more data to be listed, this parameter is set to null.',
    }),
  })
  .openapi({
    required: ['agentPreviews'],
    example: { agentPreviews: [{ agentId: 'i-49113b93' }], nextToken: '1' },
  })
  .openapi('PreviewAgentsResponse')

const PreviewAgentsMaxResultsSchema = z.int().openapi('PreviewAgentsMaxResults')

const PreviewAgentsRequestSchema = z
  .object({
    previewAgentsArn: ArnSchema.openapi({
      description: 'The ARN of the assessment target whose agents you want to preview.',
    }),
    nextToken: PaginationTokenSchema.exactOptional().openapi({
      description:
        'You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the <b>PreviewAgents</b> action. Subsequent calls to the action fill <b>nextToken</b> in the request with the value of <b>NextToken</b> from the previous response to continue listing data.',
    }),
    maxResults: PreviewAgentsMaxResultsSchema.exactOptional().openapi({
      description:
        'You can use this parameter to indicate the maximum number of items you want in the response. The default value is 10. The maximum value is 500.',
    }),
  })
  .openapi({ required: ['previewAgentsArn'], title: 'PreviewAgentsRequest' })
  .openapi('PreviewAgentsRequest')

const RegisterCrossAccountAccessRoleRequestSchema = z
  .object({
    roleArn: ArnSchema.openapi({
      description:
        'The ARN of the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments. ',
    }),
  })
  .openapi({ required: ['roleArn'], title: 'RegisterCrossAccountAccessRoleRequest' })
  .openapi('RegisterCrossAccountAccessRoleRequest')

const RemoveAttributesFromFindingsResponseSchema = z
  .object({
    failedItems: FailedItemsSchema.openapi({
      description:
        'Attributes details that cannot be described. An error code is provided for each failed item.',
    }),
  })
  .openapi({ required: ['failedItems'], example: { failedItems: {} } })
  .openapi('RemoveAttributesFromFindingsResponse')

const UserAttributeKeyListSchema = z
  .array(AttributeKeySchema)
  .min(0)
  .max(10)
  .openapi('UserAttributeKeyList')

const RemoveAttributesFromFindingsRequestSchema = z
  .object({
    findingArns: AddRemoveAttributesFindingArnListSchema.openapi({
      description: 'The ARNs that specify the findings that you want to remove attributes from.',
    }),
    attributeKeys: UserAttributeKeyListSchema.openapi({
      description: 'The array of attribute keys that you want to remove from specified findings.',
    }),
  })
  .openapi({
    required: ['findingArns', 'attributeKeys'],
    title: 'RemoveAttributesFromFindingsRequest',
  })
  .openapi('RemoveAttributesFromFindingsRequest')

const SetTagsForResourceRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description: 'The ARN of the assessment template that you want to set tags to.',
    }),
    tags: TagListSchema.exactOptional().openapi({
      description:
        'A collection of key and value pairs that you want to set to the assessment template.',
    }),
  })
  .openapi({ required: ['resourceArn'], title: 'SetTagsForResourceRequest' })
  .openapi('SetTagsForResourceRequest')

const StartAssessmentRunResponseSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description: 'The ARN of the assessment run that has been started.',
    }),
  })
  .openapi({
    required: ['assessmentRunArn'],
    example: {
      assessmentRunArn:
        'arn:aws:inspector:us-west-2:123456789012:target/0-nvgVhaxX/template/0-it5r2S4T/run/0-jOoroxyY',
    },
  })
  .openapi('StartAssessmentRunResponse')

const StartAssessmentRunRequestSchema = z
  .object({
    assessmentTemplateArn: ArnSchema.openapi({
      description:
        'The ARN of the assessment template of the assessment run that you want to start.',
    }),
    assessmentRunName: AssessmentRunNameSchema.exactOptional().openapi({
      description:
        'You can specify the name for the assessment run. The name must be unique for the assessment template whose ARN is used to start the assessment run.',
    }),
  })
  .openapi({ required: ['assessmentTemplateArn'], title: 'StartAssessmentRunRequest' })
  .openapi('StartAssessmentRunRequest')

const AgentsAlreadyRunningAssessmentExceptionSchema = z
  .any()
  .openapi('AgentsAlreadyRunningAssessmentException')

const StopActionSchema = z.enum(['START_EVALUATION', 'SKIP_EVALUATION']).openapi('StopAction')

const StopAssessmentRunRequestSchema = z
  .object({
    assessmentRunArn: ArnSchema.openapi({
      description: 'The ARN of the assessment run that you want to stop.',
    }),
    stopAction: StopActionSchema.exactOptional().openapi({
      description:
        'An input option that can be set to either START_EVALUATION or SKIP_EVALUATION. START_EVALUATION (the default value), stops the AWS agent from collecting data and begins the results evaluation and the findings generation process. SKIP_EVALUATION cancels the assessment run immediately, after which no findings are generated.',
    }),
  })
  .openapi({ required: ['assessmentRunArn'], title: 'StopAssessmentRunRequest' })
  .openapi('StopAssessmentRunRequest')

const SubscribeToEventRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description:
        'The ARN of the assessment template that is used during the event for which you want to receive SNS notifications.',
    }),
    event: InspectorEventSchema.openapi({
      description: 'The event for which you want to receive SNS notifications.',
    }),
    topicArn: ArnSchema.openapi({
      description: 'The ARN of the SNS topic to which the SNS notifications are sent.',
    }),
  })
  .openapi({ required: ['resourceArn', 'event', 'topicArn'], title: 'SubscribeToEventRequest' })
  .openapi('SubscribeToEventRequest')

const UnsubscribeFromEventRequestSchema = z
  .object({
    resourceArn: ArnSchema.openapi({
      description:
        'The ARN of the assessment template that is used during the event for which you want to stop receiving SNS notifications.',
    }),
    event: InspectorEventSchema.openapi({
      description: 'The event for which you want to stop receiving SNS notifications.',
    }),
    topicArn: ArnSchema.openapi({
      description: 'The ARN of the SNS topic to which SNS notifications are sent.',
    }),
  })
  .openapi({ required: ['resourceArn', 'event', 'topicArn'], title: 'UnsubscribeFromEventRequest' })
  .openapi('UnsubscribeFromEventRequest')

const UpdateAssessmentTargetRequestSchema = z
  .object({
    assessmentTargetArn: ArnSchema.openapi({
      description: 'The ARN of the assessment target that you want to update.',
    }),
    assessmentTargetName: AssessmentTargetNameSchema.openapi({
      description: 'The name of the assessment target that you want to update.',
    }),
    resourceGroupArn: ArnSchema.exactOptional().openapi({
      description:
        'The ARN of the resource group that is used to specify the new resource group to associate with the assessment target.',
    }),
  })
  .openapi({
    required: ['assessmentTargetArn', 'assessmentTargetName'],
    title: 'UpdateAssessmentTargetRequest',
  })
  .openapi('UpdateAssessmentTargetRequest')

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

export const postXAmzTargetInspectorServiceAddAttributesToFindingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.AddAttributesToFindings',
  description:
    'Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.',
  operationId: 'AddAttributesToFindings',
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
        .literal('InspectorService.AddAttributesToFindings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.AddAttributesToFindings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AddAttributesToFindingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddAttributesToFindingsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceCreateAssessmentTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.CreateAssessmentTarget',
  description:
    'Creates a new assessment target using the ARN of the resource group that is generated by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments. You can create up to 50 assessment targets per AWS account. You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html"> Amazon Inspector Assessment Targets</a>.',
  operationId: 'CreateAssessmentTarget',
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
        .literal('InspectorService.CreateAssessmentTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.CreateAssessmentTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAssessmentTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssessmentTargetResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'InvalidCrossAccountRoleException',
      content: { 'application/json': { schema: InvalidCrossAccountRoleExceptionSchema } },
    },
    486: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceCreateAssessmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.CreateAssessmentTemplate',
  description:
    'Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.',
  operationId: 'CreateAssessmentTemplate',
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
        .literal('InspectorService.CreateAssessmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.CreateAssessmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateAssessmentTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssessmentTemplateResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceCreateExclusionsPreviewRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.CreateExclusionsPreview',
  description:
    'Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment. ',
  operationId: 'CreateExclusionsPreview',
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
        .literal('InspectorService.CreateExclusionsPreview')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.CreateExclusionsPreview'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateExclusionsPreviewRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateExclusionsPreviewResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'PreviewGenerationInProgressException',
      content: { 'application/json': { schema: PreviewGenerationInProgressExceptionSchema } },
    },
    482: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceCreateResourceGroupRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.CreateResourceGroup',
  description:
    'Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see <a>CreateAssessmentTarget</a>.',
  operationId: 'CreateResourceGroup',
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
        .literal('InspectorService.CreateResourceGroup')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.CreateResourceGroup'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateResourceGroupRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateResourceGroupResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDeleteAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DeleteAssessmentRun',
  description: 'Deletes the assessment run that is specified by the ARN of the assessment run.',
  operationId: 'DeleteAssessmentRun',
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
        .literal('InspectorService.DeleteAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DeleteAssessmentRun'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAssessmentRunRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AssessmentRunInProgressException',
      content: { 'application/json': { schema: AssessmentRunInProgressExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDeleteAssessmentTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DeleteAssessmentTarget',
  description:
    'Deletes the assessment target that is specified by the ARN of the assessment target.',
  operationId: 'DeleteAssessmentTarget',
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
        .literal('InspectorService.DeleteAssessmentTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DeleteAssessmentTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAssessmentTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AssessmentRunInProgressException',
      content: { 'application/json': { schema: AssessmentRunInProgressExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDeleteAssessmentTemplateRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DeleteAssessmentTemplate',
  description:
    'Deletes the assessment template that is specified by the ARN of the assessment template.',
  operationId: 'DeleteAssessmentTemplate',
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
        .literal('InspectorService.DeleteAssessmentTemplate')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DeleteAssessmentTemplate'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteAssessmentTemplateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AssessmentRunInProgressException',
      content: { 'application/json': { schema: AssessmentRunInProgressExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeAssessmentRunsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeAssessmentRuns',
  description:
    'Describes the assessment runs that are specified by the ARNs of the assessment runs.',
  operationId: 'DescribeAssessmentRuns',
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
        .literal('InspectorService.DescribeAssessmentRuns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeAssessmentRuns'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAssessmentRunsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssessmentRunsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeAssessmentTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeAssessmentTargets',
  description:
    'Describes the assessment targets that are specified by the ARNs of the assessment targets.',
  operationId: 'DescribeAssessmentTargets',
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
        .literal('InspectorService.DescribeAssessmentTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeAssessmentTargets'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAssessmentTargetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssessmentTargetsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeAssessmentTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeAssessmentTemplates',
  description:
    'Describes the assessment templates that are specified by the ARNs of the assessment templates.',
  operationId: 'DescribeAssessmentTemplates',
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
        .literal('InspectorService.DescribeAssessmentTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeAssessmentTemplates'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeAssessmentTemplatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeAssessmentTemplatesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeCrossAccountAccessRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeCrossAccountAccessRole',
  description: 'Describes the IAM role that enables Amazon Inspector to access your AWS account.',
  operationId: 'DescribeCrossAccountAccessRole',
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
        .literal('InspectorService.DescribeCrossAccountAccessRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeCrossAccountAccessRole'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeCrossAccountAccessRoleResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeExclusionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeExclusions',
  description: "Describes the exclusions that are specified by the exclusions' ARNs.",
  operationId: 'DescribeExclusions',
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
        .literal('InspectorService.DescribeExclusions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeExclusions'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeExclusionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeExclusionsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeFindingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeFindings',
  description: 'Describes the findings that are specified by the ARNs of the findings.',
  operationId: 'DescribeFindings',
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
        .literal('InspectorService.DescribeFindings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeFindings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeFindingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeFindingsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeResourceGroupsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeResourceGroups',
  description:
    'Describes the resource groups that are specified by the ARNs of the resource groups.',
  operationId: 'DescribeResourceGroups',
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
        .literal('InspectorService.DescribeResourceGroups')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeResourceGroups'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeResourceGroupsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeResourceGroupsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceDescribeRulesPackagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.DescribeRulesPackages',
  description: 'Describes the rules packages that are specified by the ARNs of the rules packages.',
  operationId: 'DescribeRulesPackages',
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
        .literal('InspectorService.DescribeRulesPackages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.DescribeRulesPackages'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DescribeRulesPackagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeRulesPackagesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceGetAssessmentReportRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.GetAssessmentReport',
  description:
    'Produces an assessment report that includes detailed and comprehensive results of a specified assessment run. ',
  operationId: 'GetAssessmentReport',
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
        .literal('InspectorService.GetAssessmentReport')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.GetAssessmentReport'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAssessmentReportRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssessmentReportResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'AssessmentRunInProgressException',
      content: { 'application/json': { schema: AssessmentRunInProgressExceptionSchema } },
    },
    485: {
      description: 'UnsupportedFeatureException',
      content: { 'application/json': { schema: UnsupportedFeatureExceptionSchema } },
    },
    486: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceGetExclusionsPreviewRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.GetExclusionsPreview',
  description:
    'Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.',
  operationId: 'GetExclusionsPreview',
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
        .literal('InspectorService.GetExclusionsPreview')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.GetExclusionsPreview'] },
          },
        }),
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
      content: { 'application/json': { schema: GetExclusionsPreviewRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetExclusionsPreviewResponseSchema } },
    },
    480: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    481: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceGetTelemetryMetadataRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.GetTelemetryMetadata',
  description: 'Information about the data that is collected for the specified assessment run.',
  operationId: 'GetTelemetryMetadata',
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
        .literal('InspectorService.GetTelemetryMetadata')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.GetTelemetryMetadata'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetTelemetryMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetTelemetryMetadataResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListAssessmentRunAgentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListAssessmentRunAgents',
  description:
    'Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.',
  operationId: 'ListAssessmentRunAgents',
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
        .literal('InspectorService.ListAssessmentRunAgents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListAssessmentRunAgents'] },
          },
        }),
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
      content: { 'application/json': { schema: ListAssessmentRunAgentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentRunAgentsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListAssessmentRunsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListAssessmentRuns',
  description:
    'Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.',
  operationId: 'ListAssessmentRuns',
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
        .literal('InspectorService.ListAssessmentRuns')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListAssessmentRuns'] },
          },
        }),
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
      content: { 'application/json': { schema: ListAssessmentRunsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentRunsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListAssessmentTargetsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListAssessmentTargets',
  description:
    'Lists the ARNs of the assessment targets within this AWS account. For more information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment Targets</a>.',
  operationId: 'ListAssessmentTargets',
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
        .literal('InspectorService.ListAssessmentTargets')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListAssessmentTargets'] },
          },
        }),
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
      content: { 'application/json': { schema: ListAssessmentTargetsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentTargetsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListAssessmentTemplatesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListAssessmentTemplates',
  description:
    'Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.',
  operationId: 'ListAssessmentTemplates',
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
        .literal('InspectorService.ListAssessmentTemplates')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListAssessmentTemplates'] },
          },
        }),
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
      content: { 'application/json': { schema: ListAssessmentTemplatesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentTemplatesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListEventSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListEventSubscriptions',
  description:
    'Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.',
  operationId: 'ListEventSubscriptions',
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
        .literal('InspectorService.ListEventSubscriptions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListEventSubscriptions'] },
          },
        }),
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
      content: { 'application/json': { schema: ListEventSubscriptionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListEventSubscriptionsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListExclusionsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListExclusions',
  description: 'List exclusions that are generated by the assessment run.',
  operationId: 'ListExclusions',
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
        .literal('InspectorService.ListExclusions')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListExclusions'] },
          },
        }),
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
      content: { 'application/json': { schema: ListExclusionsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListExclusionsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListFindingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListFindings',
  description:
    'Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.',
  operationId: 'ListFindings',
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
        .literal('InspectorService.ListFindings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListFindings'] },
          },
        }),
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
      content: { 'application/json': { schema: ListFindingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListFindingsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListRulesPackagesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListRulesPackages',
  description: 'Lists all available Amazon Inspector rules packages.',
  operationId: 'ListRulesPackages',
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
        .literal('InspectorService.ListRulesPackages')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListRulesPackages'] },
          },
        }),
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
      content: { 'application/json': { schema: ListRulesPackagesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListRulesPackagesResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceListTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.ListTagsForResource',
  description: 'Lists all tags associated with an assessment template.',
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
        .literal('InspectorService.ListTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.ListTagsForResource'] },
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
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServicePreviewAgentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.PreviewAgents',
  description:
    'Previews the agents installed on the EC2 instances that are part of the specified assessment target.',
  operationId: 'PreviewAgents',
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
        .literal('InspectorService.PreviewAgents')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.PreviewAgents'] },
          },
        }),
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
      content: { 'application/json': { schema: PreviewAgentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PreviewAgentsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'InvalidCrossAccountRoleException',
      content: { 'application/json': { schema: InvalidCrossAccountRoleExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceRegisterCrossAccountAccessRoleRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.RegisterCrossAccountAccessRole',
  description:
    'Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.',
  operationId: 'RegisterCrossAccountAccessRole',
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
        .literal('InspectorService.RegisterCrossAccountAccessRole')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.RegisterCrossAccountAccessRole'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RegisterCrossAccountAccessRoleRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InvalidCrossAccountRoleException',
      content: { 'application/json': { schema: InvalidCrossAccountRoleExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceRemoveAttributesFromFindingsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.RemoveAttributesFromFindings',
  description:
    'Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.',
  operationId: 'RemoveAttributesFromFindings',
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
        .literal('InspectorService.RemoveAttributesFromFindings')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.RemoveAttributesFromFindings'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveAttributesFromFindingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveAttributesFromFindingsResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceSetTagsForResourceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.SetTagsForResource',
  description:
    'Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.',
  operationId: 'SetTagsForResource',
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
        .literal('InspectorService.SetTagsForResource')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.SetTagsForResource'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTagsForResourceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceStartAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.StartAssessmentRun',
  description:
    'Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.',
  operationId: 'StartAssessmentRun',
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
        .literal('InspectorService.StartAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.StartAssessmentRun'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StartAssessmentRunRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartAssessmentRunResponseSchema } },
    },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'InvalidCrossAccountRoleException',
      content: { 'application/json': { schema: InvalidCrossAccountRoleExceptionSchema } },
    },
    486: {
      description: 'AgentsAlreadyRunningAssessmentException',
      content: { 'application/json': { schema: AgentsAlreadyRunningAssessmentExceptionSchema } },
    },
    487: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceStopAssessmentRunRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.StopAssessmentRun',
  description: 'Stops the assessment run that is specified by the ARN of the assessment run.',
  operationId: 'StopAssessmentRun',
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
        .literal('InspectorService.StopAssessmentRun')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.StopAssessmentRun'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: StopAssessmentRunRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceSubscribeToEventRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.SubscribeToEvent',
  description:
    'Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.',
  operationId: 'SubscribeToEvent',
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
        .literal('InspectorService.SubscribeToEvent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.SubscribeToEvent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SubscribeToEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    485: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceUnsubscribeFromEventRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.UnsubscribeFromEvent',
  description:
    'Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.',
  operationId: 'UnsubscribeFromEvent',
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
        .literal('InspectorService.UnsubscribeFromEvent')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.UnsubscribeFromEvent'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UnsubscribeFromEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})

export const postXAmzTargetInspectorServiceUpdateAssessmentTargetRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=InspectorService.UpdateAssessmentTarget',
  description:
    '<p>Updates the assessment target that is specified by the ARN of the assessment target.</p> <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>',
  operationId: 'UpdateAssessmentTarget',
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
        .literal('InspectorService.UpdateAssessmentTarget')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['InspectorService.UpdateAssessmentTarget'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateAssessmentTargetRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'InternalException',
      content: { 'application/json': { schema: InternalExceptionSchema } },
    },
    481: {
      description: 'InvalidInputException',
      content: { 'application/json': { schema: InvalidInputExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'NoSuchEntityException',
      content: { 'application/json': { schema: NoSuchEntityExceptionSchema } },
    },
    484: {
      description: 'ServiceTemporarilyUnavailableException',
      content: { 'application/json': { schema: ServiceTemporarilyUnavailableExceptionSchema } },
    },
  },
})
