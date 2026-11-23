import { createRoute, z } from '@hono/zod-openapi'

const AuditManagerArnSchema = z
  .string()
  .regex(/^arn:.*:auditmanager:.*/)
  .min(20)
  .max(2048)
  .openapi('AuditManagerArn')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .length(12)
  .openapi('AccountId')

const EmailAddressSchema = z
  .string()
  .regex(/^.*@.*$/)
  .min(1)
  .max(320)
  .openapi('EmailAddress')

const AccountNameSchema = z
  .string()
  .regex(/^[\u0020-\u007E]+$/)
  .min(1)
  .max(50)
  .openapi('AccountName')

const AWSAccountSchema = z
  .object({
    id: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the Amazon Web Services account. ',
    }),
    emailAddress: EmailAddressSchema.exactOptional().openapi({
      description: " The email address that's associated with the Amazon Web Services account. ",
    }),
    name: AccountNameSchema.exactOptional().openapi({
      description: ' The name of the Amazon Web Services account. ',
    }),
  })
  .openapi({
    description:
      ' The wrapper of Amazon Web Services account details, such as account ID or email address. ',
    required: [],
  })
  .openapi('AWSAccount')

const AssessmentNameSchema = z
  .string()
  .regex(/^[^\\]*$/)
  .min(1)
  .max(300)
  .openapi('AssessmentName')

const UUIDSchema = z
  .string()
  .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .length(36)
  .openapi('UUID')

const AssessmentDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('AssessmentDescription')

const ComplianceTypeSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(100)
  .openapi('ComplianceType')

const AssessmentStatusSchema = z.enum(['ACTIVE', 'INACTIVE']).openapi('AssessmentStatus')

const AssessmentReportDestinationTypeSchema = z
  .literal('S3')
  .openapi('AssessmentReportDestinationType')

const S3UrlSchema = z
  .string()
  .regex(/^(S|s)3:\/\/[a-zA-Z0-9\-\.\(\)\'\*\_\!\/]+$/)
  .min(1)
  .max(1024)
  .openapi('S3Url')

const AssessmentReportsDestinationSchema = z
  .object({
    destinationType: AssessmentReportDestinationTypeSchema.exactOptional().openapi({
      description: ' The destination type, such as Amazon S3. ',
    }),
    destination: S3UrlSchema.exactOptional().openapi({
      description: ' The destination of the assessment report. ',
    }),
  })
  .openapi({
    description:
      ' The location where Audit Manager saves assessment reports for the given assessment. ',
    required: [],
  })
  .openapi('AssessmentReportsDestination')

const AWSAccountsSchema = z.array(AWSAccountSchema).openapi('AWSAccounts')

const AWSServiceNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-\s().]+$/)
  .min(1)
  .max(40)
  .openapi('AWSServiceName')

const AWSServiceSchema = z
  .object({
    serviceName: AWSServiceNameSchema.exactOptional().openapi({
      description: ' The name of the Amazon Web Service. ',
    }),
  })
  .openapi({
    description:
      '<p> An Amazon Web Service such as Amazon S3 or CloudTrail. </p> <p>For an example of how to find an Amazon Web Service name and how to define it in your assessment scope, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_2">Finding an Amazon Web Service name to use in your assessment scope</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_GetServicesInScope.html#API_GetServicesInScope_Example_3">Defining an Amazon Web Service name in your assessment scope</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('AWSService')

const AWSServicesSchema = z.array(AWSServiceSchema).openapi('AWSServices')

const ScopeSchema = z
  .object({
    awsAccounts: AWSAccountsSchema.exactOptional().openapi({
      description:
        ' The Amazon Web Services accounts that are included in the scope of the assessment. ',
    }),
    awsServices: AWSServicesSchema.exactOptional().openapi({
      description:
        ' The Amazon Web Services services that are included in the scope of the assessment. ',
    }),
  })
  .openapi({
    description:
      ' The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. ',
    required: [],
  })
  .openapi('Scope')

const RoleTypeSchema = z.enum(['PROCESS_OWNER', 'RESOURCE_OWNER']).openapi('RoleType')

const IamArnSchema = z
  .string()
  .regex(/^arn:.*:iam:.*/)
  .min(20)
  .max(2048)
  .openapi('IamArn')

const RoleSchema = z
  .object({
    roleType: RoleTypeSchema.openapi({
      description:
        '<p> The type of customer persona. </p> <note> <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p> <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p> <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p> </note>',
    }),
    roleArn: IamArnSchema.openapi({
      description: ' The Amazon Resource Name (ARN) of the IAM role. ',
    }),
  })
  .openapi({
    required: ['roleType', 'roleArn'],
    description:
      ' The wrapper that contains the Audit Manager role information of the current user. This includes the role type and IAM Amazon Resource Name (ARN). ',
  })
  .openapi('Role')

const RolesSchema = z.array(RoleSchema).openapi('Roles')

const DelegationStatusSchema = z
  .enum(['IN_PROGRESS', 'UNDER_REVIEW', 'COMPLETE'])
  .openapi('DelegationStatus')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ControlSetIdSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .min(1)
  .max(300)
  .openapi('ControlSetId')

const DelegationCommentSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(350)
  .openapi('DelegationComment')

const CreatedBySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s-_()\[\]]+$/)
  .min(1)
  .max(100)
  .openapi('CreatedBy')

const DelegationSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the delegation. ',
    }),
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: " The name of the assessment that's associated with the delegation. ",
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: " The identifier for the assessment that's associated with the delegation. ",
    }),
    status: DelegationStatusSchema.exactOptional().openapi({
      description: ' The status of the delegation. ',
    }),
    roleArn: IamArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the IAM role. ',
    }),
    roleType: RoleTypeSchema.exactOptional().openapi({
      description:
        '<p> The type of customer persona. </p> <note> <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p> <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p> <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p> </note>',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the delegation was created. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the delegation was last updated. ',
    }),
    controlSetId: ControlSetIdSchema.exactOptional().openapi({
      description: " The identifier for the control set that's associated with the delegation. ",
    }),
    comment: DelegationCommentSchema.exactOptional().openapi({
      description: " The comment that's related to the delegation. ",
    }),
    createdBy: CreatedBySchema.exactOptional().openapi({
      description: ' The user or role that created the delegation. ',
    }),
  })
  .openapi({
    description: ' The assignment of a control set to a delegate for review. ',
    required: [],
  })
  .openapi('Delegation')

const DelegationsSchema = z.array(DelegationSchema).openapi('Delegations')

const AssessmentMetadataSchema = z
  .object({
    name: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the assessment. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the assessment. ',
    }),
    description: AssessmentDescriptionSchema.exactOptional().openapi({
      description: ' The description of the assessment. ',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        " The name of the compliance standard that's related to the assessment, such as PCI-DSS. ",
    }),
    status: AssessmentStatusSchema.exactOptional().openapi({
      description: ' The overall status of the assessment. ',
    }),
    assessmentReportsDestination: AssessmentReportsDestinationSchema.exactOptional().openapi({
      description: ' The destination that evidence reports are stored in for the assessment. ',
    }),
    scope: ScopeSchema.exactOptional().openapi({
      description:
        ' The wrapper of Amazon Web Services accounts and services that are in scope for the assessment. ',
    }),
    roles: RolesSchema.exactOptional().openapi({
      description: ' The roles that are associated with the assessment. ',
    }),
    delegations: DelegationsSchema.exactOptional().openapi({
      description: ' The delegations that are associated with the assessment. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the assessment was created. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: ' The time of the most recent update. ',
    }),
  })
  .openapi({
    description: " The metadata that's associated with the specified assessment. ",
    required: [],
  })
  .openapi('AssessmentMetadata')

const AssessmentFrameworkDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .min(1)
  .max(200)
  .openapi('AssessmentFrameworkDescription')

const FilenameSchema = z
  .string()
  .regex(/^[\w,\s-]+\.[A-Za-z]+$/)
  .min(1)
  .max(255)
  .openapi('Filename')

const FrameworkMetadataSchema = z
  .object({
    name: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the framework. ',
    }),
    description: AssessmentFrameworkDescriptionSchema.exactOptional().openapi({
      description: ' The description of the framework. ',
    }),
    logo: FilenameSchema.exactOptional().openapi({
      description: " The logo that's associated with the framework. ",
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        " The compliance standard that's associated with the framework. For example, this could be PCI DSS or HIPAA. ",
    }),
  })
  .openapi({
    description: ' The metadata of a framework, such as the name, ID, or description. ',
    required: [],
  })
  .openapi('FrameworkMetadata')

const NonEmptyStringSchema = z
  .string()
  .regex(/.*\S.*/)
  .min(1)
  .max(2048)
  .openapi('NonEmptyString')

const ControlSetStatusSchema = z
  .enum(['ACTIVE', 'UNDER_REVIEW', 'REVIEWED'])
  .openapi('ControlSetStatus')

const ControlNameSchema = z
  .string()
  .regex(/^[^\\]*$/)
  .min(1)
  .max(300)
  .openapi('ControlName')

const ControlDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('ControlDescription')

const ControlStatusSchema = z
  .enum(['UNDER_REVIEW', 'REVIEWED', 'INACTIVE'])
  .openapi('ControlStatus')

const ControlResponseSchema = z
  .enum(['MANUAL', 'AUTOMATE', 'DEFER', 'IGNORE'])
  .openapi('ControlResponse')

const UsernameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_()\s\+=,.@]+$/)
  .min(1)
  .max(128)
  .openapi('Username')

const ControlCommentBodySchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(500)
  .openapi('ControlCommentBody')

const ControlCommentSchema = z
  .object({
    authorName: UsernameSchema.exactOptional().openapi({
      description: ' The name of the user who authored the comment. ',
    }),
    commentBody: ControlCommentBodySchema.exactOptional().openapi({
      description: ' The body text of a control comment. ',
    }),
    postedDate: TimestampSchema.exactOptional().openapi({
      description: ' The time when the comment was posted. ',
    }),
  })
  .openapi({
    description:
      " A comment that's posted by a user on a control. This includes the author's name, the comment text, and a timestamp. ",
    required: [],
  })
  .openapi('ControlComment')

const ControlCommentsSchema = z.array(ControlCommentSchema).openapi('ControlComments')

const EvidenceSourcesSchema = z.array(NonEmptyStringSchema).openapi('EvidenceSources')

const IntegerSchema = z.int().openapi('Integer')

const AssessmentControlSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({ description: ' The identifier for the control. ' }),
    name: ControlNameSchema.exactOptional().openapi({ description: ' The name of the control. ' }),
    description: ControlDescriptionSchema.exactOptional().openapi({
      description: ' The description of the control. ',
    }),
    status: ControlStatusSchema.exactOptional().openapi({
      description: ' The status of the control. ',
    }),
    response: ControlResponseSchema.exactOptional().openapi({
      description: ' The response of the control. ',
    }),
    comments: ControlCommentsSchema.exactOptional().openapi({
      description: " The list of comments that's attached to the control. ",
    }),
    evidenceSources: EvidenceSourcesSchema.exactOptional().openapi({
      description: ' The list of data sources for the evidence. ',
    }),
    evidenceCount: IntegerSchema.exactOptional().openapi({
      description: " The amount of evidence that's collected for the control. ",
    }),
    assessmentReportEvidenceCount: IntegerSchema.exactOptional().openapi({
      description: ' The amount of evidence in the assessment report. ',
    }),
  })
  .openapi({
    description:
      ' The control entity that represents a standard control or a custom control in an Audit Manager assessment. ',
    required: [],
  })
  .openapi('AssessmentControl')

const AssessmentControlsSchema = z.array(AssessmentControlSchema).openapi('AssessmentControls')

const AssessmentControlSetSchema = z
  .object({
    id: ControlSetIdSchema.exactOptional().openapi({
      description:
        ' The identifier of the control set in the assessment. This is the control set name in a plain string format. ',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: ' The description for the control set. ',
    }),
    status: ControlSetStatusSchema.exactOptional().openapi({
      description: ' The current status of the control set. ',
    }),
    roles: RolesSchema.exactOptional().openapi({
      description: ' The roles that are associated with the control set. ',
    }),
    controls: AssessmentControlsSchema.exactOptional().openapi({
      description: " The list of controls that's contained with the control set. ",
    }),
    delegations: DelegationsSchema.exactOptional().openapi({
      description: ' The delegations that are associated with the control set. ',
    }),
    systemEvidenceCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The total number of evidence objects that are retrieved automatically for the control set. ',
    }),
    manualEvidenceCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The total number of evidence objects that are uploaded manually to the control set. ',
    }),
  })
  .openapi({
    description: ' Represents a set of controls in an Audit Manager assessment. ',
    required: [],
  })
  .openapi('AssessmentControlSet')

const AssessmentControlSetsSchema = z
  .array(AssessmentControlSetSchema)
  .openapi('AssessmentControlSets')

const AssessmentFrameworkSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the framework. ',
    }),
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the framework. ',
    }),
    metadata: FrameworkMetadataSchema.exactOptional(),
    controlSets: AssessmentControlSetsSchema.exactOptional().openapi({
      description: ' The control sets that are associated with the framework. ',
    }),
  })
  .openapi({
    description:
      ' The file used to structure and automate Audit Manager assessments for a given compliance standard. ',
    required: [],
  })
  .openapi('AssessmentFramework')

const TagValueSchema = z
  .string()
  .regex(/.{0,255}/)
  .min(0)
  .max(256)
  .openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 0)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

type AssessmentType = {
  arn?: z.infer<typeof AuditManagerArnSchema>
  awsAccount?: z.infer<typeof AWSAccountSchema>
  metadata?: z.infer<typeof AssessmentMetadataSchema>
  framework?: z.infer<typeof AssessmentFrameworkSchema>
  tags?: z.infer<typeof TagMapSchema>
}

const AssessmentSchema: z.ZodType<AssessmentType> = z
  .object({
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the assessment. ',
    }),
    awsAccount: AWSAccountSchema.exactOptional().openapi({
      description: " The Amazon Web Services account that's associated with the assessment. ",
    }),
    metadata: AssessmentMetadataSchema.exactOptional().openapi({
      description: ' The metadata for the assessment. ',
    }),
    framework: AssessmentFrameworkSchema.exactOptional().openapi({
      description: ' The framework that the assessment was created from. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags that are associated with the assessment. ',
    }),
  })
  .openapi({
    description:
      ' An entity that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework. ',
    required: [],
  })
  .openapi('Assessment')

type CreateAssessmentResponseType = { assessment?: z.infer<typeof AssessmentSchema> }

const FrameworkNameSchema = z
  .string()
  .regex(/^[^\\]*$/)
  .min(1)
  .max(300)
  .openapi('FrameworkName')

const FrameworkTypeSchema = z.enum(['Standard', 'Custom']).openapi('FrameworkType')

const FrameworkDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .min(1)
  .max(1000)
  .openapi('FrameworkDescription')

const ControlSourcesSchema = z
  .string()
  .regex(/^[a-zA-Z_0-9-\s.,]+$/)
  .min(1)
  .max(100)
  .openapi('ControlSources')

const ControlSetNameSchema = z
  .string()
  .regex(/^[^\\\_]*$/)
  .min(1)
  .max(300)
  .openapi('ControlSetName')

const ControlTypeSchema = z.enum(['Standard', 'Custom']).openapi('ControlType')

const TestingInformationSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('TestingInformation')

const ActionPlanTitleSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(300)
  .openapi('ActionPlanTitle')

const ActionPlanInstructionsSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('ActionPlanInstructions')

const SourceNameSchema = z.string().min(1).max(100).openapi('SourceName')

const SourceDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('SourceDescription')

const SourceSetUpOptionSchema = z
  .enum(['System_Controls_Mapping', 'Procedural_Controls_Mapping'])
  .openapi('SourceSetUpOption')

const SourceTypeSchema = z
  .enum(['AWS_Cloudtrail', 'AWS_Config', 'AWS_Security_Hub', 'AWS_API_Call', 'MANUAL'])
  .openapi('SourceType')

const KeywordInputTypeSchema = z.literal('SELECT_FROM_LIST').openapi('KeywordInputType')

const KeywordValueSchema = z
  .string()
  .regex(/^[a-zA-Z_0-9-\s().]+$/)
  .min(1)
  .max(100)
  .openapi('KeywordValue')

const SourceKeywordSchema = z
  .object({
    keywordInputType: KeywordInputTypeSchema.exactOptional().openapi({
      description: ' The input method for the keyword. ',
    }),
    keywordValue: KeywordValueSchema.exactOptional().openapi({
      description:
        '<p> The value of the keyword that\'s used when mapping a control data source. For example, this can be a CloudTrail event name, a rule name for Config, a Security Hub control, or the name of an Amazon Web Services API call. </p> <p>If you’re mapping a data source to a rule in Config, the <code>keywordValue</code> that you specify depends on the type of rule:</p> <ul> <li> <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html">managed rules</a>, you can use the rule identifier as the <code>keywordValue</code>. You can find the rule identifier from the <a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">list of Config managed rules</a>.</p> <ul> <li> <p>Managed rule name: <a href="https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-acl-prohibited.html">s3-bucket-acl-prohibited</a> </p> <p> <code>keywordValue</code>: <code>S3_BUCKET_ACL_PROHIBITED</code> </p> </li> </ul> </li> <li> <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html">custom rules</a>, you form the <code>keywordValue</code> by adding the <code>Custom_</code> prefix to the rule name. This prefix distinguishes the rule from a managed rule.</p> <ul> <li> <p>Custom rule name: my-custom-config-rule</p> <p> <code>keywordValue</code>: <code>Custom_my-custom-config-rule</code> </p> </li> </ul> </li> <li> <p>For <a href="https://docs.aws.amazon.com/config/latest/developerguide/service-linked-awsconfig-rules.html">service-linked rules</a>, you form the <code>keywordValue</code> by adding the <code>Custom_</code> prefix to the rule name. In addition, you remove the suffix ID that appears at the end of the rule name.</p> <ul> <li> <p>Service-linked rule name: CustomRuleForAccount-conformance-pack-szsm1uv0w</p> <p> <code>keywordValue</code>: <code>Custom_CustomRuleForAccount-conformance-pack</code> </p> </li> <li> <p>Service-linked rule name: OrgConfigRule-s3-bucket-versioning-enabled-dbgzf8ba</p> <p> <code>keywordValue</code>: <code>Custom_OrgConfigRule-s3-bucket-versioning-enabled</code> </p> </li> </ul> </li> </ul>',
    }),
  })
  .openapi({
    description:
      '<p> The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul>',
    required: [],
  })
  .openapi('SourceKeyword')

const SourceFrequencySchema = z.enum(['DAILY', 'WEEKLY', 'MONTHLY']).openapi('SourceFrequency')

const TroubleshootingTextSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('TroubleshootingText')

const ControlMappingSourceSchema = z
  .object({
    sourceId: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the source. ',
    }),
    sourceName: SourceNameSchema.exactOptional().openapi({
      description: ' The name of the source. ',
    }),
    sourceDescription: SourceDescriptionSchema.exactOptional().openapi({
      description: ' The description of the source. ',
    }),
    sourceSetUpOption: SourceSetUpOptionSchema.exactOptional().openapi({
      description:
        ' The setup option for the data source. This option reflects if the evidence collection is automated or manual. ',
    }),
    sourceType: SourceTypeSchema.exactOptional().openapi({
      description: ' Specifies one of the five data source types for evidence collection. ',
    }),
    sourceKeyword: SourceKeywordSchema.exactOptional(),
    sourceFrequency: SourceFrequencySchema.exactOptional().openapi({
      description: ' The frequency of evidence collection for the control mapping source. ',
    }),
    troubleshootingText: TroubleshootingTextSchema.exactOptional().openapi({
      description: ' The instructions for troubleshooting the control. ',
    }),
  })
  .openapi({
    description:
      ' The data source that determines where Audit Manager collects evidence from for the control. ',
    required: [],
  })
  .openapi('ControlMappingSource')

const ControlMappingSourcesSchema = z
  .array(ControlMappingSourceSchema)
  .min(1)
  .openapi('ControlMappingSources')

const LastUpdatedBySchema = z
  .string()
  .regex(/^[a-zA-Z0-9\s-_()\[\]]+$/)
  .min(1)
  .max(100)
  .openapi('LastUpdatedBy')

const ControlSchema = z
  .object({
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the control. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the control. ',
    }),
    type: ControlTypeSchema.exactOptional().openapi({
      description: ' The type of control, such as a custom control or a standard control. ',
    }),
    name: ControlNameSchema.exactOptional().openapi({ description: ' The name of the control. ' }),
    description: ControlDescriptionSchema.exactOptional().openapi({
      description: ' The description of the control. ',
    }),
    testingInformation: TestingInformationSchema.exactOptional().openapi({
      description:
        ' The steps that you should follow to determine if the control has been satisfied. ',
    }),
    actionPlanTitle: ActionPlanTitleSchema.exactOptional().openapi({
      description: ' The title of the action plan for remediating the control. ',
    }),
    actionPlanInstructions: ActionPlanInstructionsSchema.exactOptional().openapi({
      description: " The recommended actions to carry out if the control isn't fulfilled. ",
    }),
    controlSources: ControlSourcesSchema.exactOptional().openapi({
      description:
        ' The data source types that determine where Audit Manager collects evidence from for the control. ',
    }),
    controlMappingSources: ControlMappingSourcesSchema.exactOptional().openapi({
      description: ' The data mapping sources for the control. ',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the control was created. ',
    }),
    lastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the control was most recently updated. ',
    }),
    createdBy: CreatedBySchema.exactOptional().openapi({
      description: ' The user or role that created the control. ',
    }),
    lastUpdatedBy: LastUpdatedBySchema.exactOptional().openapi({
      description: ' The user or role that most recently updated the control. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags associated with the control. ',
    }),
  })
  .openapi({ description: ' A control in Audit Manager. ', required: [] })
  .openapi('Control')

const ControlsSchema = z.array(ControlSchema).min(1).openapi('Controls')

const ControlSetSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description:
        ' The identifier of the control set in the assessment. This is the control set name in a plain string format. ',
    }),
    name: ControlSetNameSchema.exactOptional().openapi({
      description: ' The name of the control set. ',
    }),
    controls: ControlsSchema.exactOptional().openapi({
      description: ' The list of controls within the control set. ',
    }),
  })
  .openapi({ description: ' A set of controls in Audit Manager. ', required: [] })
  .openapi('ControlSet')

const ControlSetsSchema = z.array(ControlSetSchema).min(1).openapi('ControlSets')

type FrameworkType = {
  arn?: z.infer<typeof AuditManagerArnSchema>
  id?: z.infer<typeof UUIDSchema>
  name?: z.infer<typeof FrameworkNameSchema>
  type?: z.infer<typeof FrameworkTypeSchema>
  complianceType?: z.infer<typeof ComplianceTypeSchema>
  description?: z.infer<typeof FrameworkDescriptionSchema>
  logo?: z.infer<typeof FilenameSchema>
  controlSources?: z.infer<typeof ControlSourcesSchema>
  controlSets?: z.infer<typeof ControlSetsSchema>
  createdAt?: z.infer<typeof TimestampSchema>
  lastUpdatedAt?: z.infer<typeof TimestampSchema>
  createdBy?: z.infer<typeof CreatedBySchema>
  lastUpdatedBy?: z.infer<typeof LastUpdatedBySchema>
  tags?: z.infer<typeof TagMapSchema>
}

const FrameworkSchema: z.ZodType<FrameworkType> = z
  .object({
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the framework. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the framework. ',
    }),
    name: FrameworkNameSchema.exactOptional().openapi({
      description: ' The name of the framework. ',
    }),
    type: FrameworkTypeSchema.exactOptional().openapi({
      description: ' The framework type, such as a custom framework or a standard framework. ',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
    }),
    description: FrameworkDescriptionSchema.exactOptional().openapi({
      description: ' The description of the framework. ',
    }),
    logo: FilenameSchema.exactOptional().openapi({
      description: " The logo that's associated with the framework. ",
    }),
    controlSources: ControlSourcesSchema.exactOptional().openapi({
      description: ' The sources that Audit Manager collects evidence from for the control. ',
    }),
    controlSets: ControlSetsSchema.exactOptional().openapi({
      description: ' The control sets that are associated with the framework. ',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the framework was created. ',
    }),
    lastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the framework was most recently updated. ',
    }),
    createdBy: CreatedBySchema.exactOptional().openapi({
      description: ' The user or role that created the framework. ',
    }),
    lastUpdatedBy: LastUpdatedBySchema.exactOptional().openapi({
      description: ' The user or role that most recently updated the framework. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags that are associated with the framework. ',
    }),
  })
  .openapi({
    description:
      " The file that's used to structure and automate Audit Manager assessments for a given compliance standard. ",
    required: [],
  })
  .openapi('Framework')

type CreateAssessmentFrameworkResponseType = { framework?: z.infer<typeof FrameworkSchema> }

type GetAssessmentResponseType = {
  assessment?: z.infer<typeof AssessmentSchema>
  userRole?: z.infer<typeof RoleSchema>
}

type GetAssessmentFrameworkResponseType = { framework?: z.infer<typeof FrameworkSchema> }

type UpdateAssessmentResponseType = { assessment?: z.infer<typeof AssessmentSchema> }

type UpdateAssessmentFrameworkResponseType = { framework?: z.infer<typeof FrameworkSchema> }

type UpdateAssessmentStatusResponseType = { assessment?: z.infer<typeof AssessmentSchema> }

const AssociateAssessmentReportEvidenceFolderResponseSchema = z
  .looseObject({})
  .openapi('AssociateAssessmentReportEvidenceFolderResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const EvidenceIdsSchema = z.array(UUIDSchema).min(0).max(50).openapi('EvidenceIds')

const ErrorCodeSchema = z
  .string()
  .regex(/[0-9]{3}/)
  .length(3)
  .openapi('ErrorCode')

const ErrorMessageSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(300)
  .openapi('ErrorMessage')

const AssessmentReportEvidenceErrorSchema = z
  .object({
    evidenceId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the evidence. ',
    }),
    errorCode: ErrorCodeSchema.exactOptional().openapi({
      description: ' The error code that was returned. ',
    }),
    errorMessage: ErrorMessageSchema.exactOptional().openapi({
      description: ' The error message that was returned. ',
    }),
  })
  .openapi({
    description:
      ' An error entity for assessment report evidence errors. This is used to provide more meaningful errors than a simple string message. ',
    required: [],
  })
  .openapi('AssessmentReportEvidenceError')

const AssessmentReportEvidenceErrorsSchema = z
  .array(AssessmentReportEvidenceErrorSchema)
  .openapi('AssessmentReportEvidenceErrors')

const BatchAssociateAssessmentReportEvidenceResponseSchema = z
  .object({
    evidenceIds: EvidenceIdsSchema.exactOptional().openapi({
      description: ' The list of evidence identifiers. ',
    }),
    errors: AssessmentReportEvidenceErrorsSchema.exactOptional().openapi({
      description:
        ' A list of errors that the <code>BatchAssociateAssessmentReportEvidence</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchAssociateAssessmentReportEvidenceResponse')

const CreateDelegationRequestSchema = z
  .object({
    comment: DelegationCommentSchema.exactOptional().openapi({
      description: " A comment that's related to the delegation request. ",
    }),
    controlSetId: ControlSetIdSchema.exactOptional().openapi({
      description: ' The unique identifier for the control set. ',
    }),
    roleArn: IamArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the IAM role. ',
    }),
    roleType: RoleTypeSchema.exactOptional().openapi({
      description:
        '<p> The type of customer persona. </p> <note> <p>In <code>CreateAssessment</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>. </p> <p>In <code>UpdateSettings</code>, <code>roleType</code> can only be <code>PROCESS_OWNER</code>.</p> <p>In <code>BatchCreateDelegationByAssessment</code>, <code>roleType</code> can only be <code>RESOURCE_OWNER</code>.</p> </note>',
    }),
  })
  .openapi({
    description:
      " A collection of attributes that's used to create a delegation for an assessment in Audit Manager. ",
    required: [],
  })
  .openapi('CreateDelegationRequest')

const BatchCreateDelegationByAssessmentErrorSchema = z
  .object({
    createDelegationRequest: CreateDelegationRequestSchema.exactOptional().openapi({
      description: ' The API request to batch create delegations in Audit Manager. ',
    }),
    errorCode: ErrorCodeSchema.exactOptional().openapi({
      description:
        ' The error code that the <code>BatchCreateDelegationByAssessment</code> API returned. ',
    }),
    errorMessage: ErrorMessageSchema.exactOptional().openapi({
      description:
        ' The error message that the <code>BatchCreateDelegationByAssessment</code> API returned. ',
    }),
  })
  .openapi({
    description:
      ' An error entity for the <code>BatchCreateDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. ',
    required: [],
  })
  .openapi('BatchCreateDelegationByAssessmentError')

const BatchCreateDelegationByAssessmentErrorsSchema = z
  .array(BatchCreateDelegationByAssessmentErrorSchema)
  .openapi('BatchCreateDelegationByAssessmentErrors')

const BatchCreateDelegationByAssessmentResponseSchema = z
  .object({
    delegations: DelegationsSchema.exactOptional().openapi({
      description: ' The delegations that are associated with the assessment. ',
    }),
    errors: BatchCreateDelegationByAssessmentErrorsSchema.exactOptional().openapi({
      description:
        ' A list of errors that the <code>BatchCreateDelegationByAssessment</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchCreateDelegationByAssessmentResponse')

const BatchDeleteDelegationByAssessmentErrorSchema = z
  .object({
    delegationId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the delegation. ',
    }),
    errorCode: ErrorCodeSchema.exactOptional().openapi({
      description:
        ' The error code that the <code>BatchDeleteDelegationByAssessment</code> API returned. ',
    }),
    errorMessage: ErrorMessageSchema.exactOptional().openapi({
      description:
        ' The error message that the <code>BatchDeleteDelegationByAssessment</code> API returned. ',
    }),
  })
  .openapi({
    description:
      ' An error entity for the <code>BatchDeleteDelegationByAssessment</code> API. This is used to provide more meaningful errors than a simple string message. ',
    required: [],
  })
  .openapi('BatchDeleteDelegationByAssessmentError')

const BatchDeleteDelegationByAssessmentErrorsSchema = z
  .array(BatchDeleteDelegationByAssessmentErrorSchema)
  .openapi('BatchDeleteDelegationByAssessmentErrors')

const BatchDeleteDelegationByAssessmentResponseSchema = z
  .object({
    errors: BatchDeleteDelegationByAssessmentErrorsSchema.exactOptional().openapi({
      description:
        ' A list of errors that the <code>BatchDeleteDelegationByAssessment</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchDeleteDelegationByAssessmentResponse')

const BatchDisassociateAssessmentReportEvidenceResponseSchema = z
  .object({
    evidenceIds: EvidenceIdsSchema.exactOptional().openapi({
      description: ' The identifier for the evidence. ',
    }),
    errors: AssessmentReportEvidenceErrorsSchema.exactOptional().openapi({
      description:
        ' A list of errors that the <code>BatchDisassociateAssessmentReportEvidence</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchDisassociateAssessmentReportEvidenceResponse')

const ManualEvidenceSchema = z
  .object({
    s3ResourcePath: S3UrlSchema.exactOptional().openapi({
      description: ' The Amazon S3 URL that points to a manual evidence object. ',
    }),
  })
  .openapi({ description: " Evidence that's uploaded to Audit Manager manually. ", required: [] })
  .openapi('ManualEvidence')

const BatchImportEvidenceToAssessmentControlErrorSchema = z
  .object({
    manualEvidence: ManualEvidenceSchema.exactOptional().openapi({
      description: " Manual evidence that can't be collected automatically by Audit Manager. ",
    }),
    errorCode: ErrorCodeSchema.exactOptional().openapi({
      description:
        ' The error code that the <code>BatchImportEvidenceToAssessmentControl</code> API returned. ',
    }),
    errorMessage: ErrorMessageSchema.exactOptional().openapi({
      description:
        ' The error message that the <code>BatchImportEvidenceToAssessmentControl</code> API returned. ',
    }),
  })
  .openapi({
    description:
      ' An error entity for the <code>BatchImportEvidenceToAssessmentControl</code> API. This is used to provide more meaningful errors than a simple string message. ',
    required: [],
  })
  .openapi('BatchImportEvidenceToAssessmentControlError')

const BatchImportEvidenceToAssessmentControlErrorsSchema = z
  .array(BatchImportEvidenceToAssessmentControlErrorSchema)
  .openapi('BatchImportEvidenceToAssessmentControlErrors')

const BatchImportEvidenceToAssessmentControlResponseSchema = z
  .object({
    errors: BatchImportEvidenceToAssessmentControlErrorsSchema.exactOptional().openapi({
      description:
        ' A list of errors that the <code>BatchImportEvidenceToAssessmentControl</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('BatchImportEvidenceToAssessmentControlResponse')

const CreateAssessmentResponseSchema: z.ZodType<CreateAssessmentResponseType> = z
  .object({ assessment: AssessmentSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateAssessmentResponse')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const CreateAssessmentFrameworkResponseSchema: z.ZodType<CreateAssessmentFrameworkResponseType> = z
  .object({
    framework: FrameworkSchema.exactOptional().openapi({
      description:
        ' The name of the new framework that the <code>CreateAssessmentFramework</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateAssessmentFrameworkResponse')

const CreateAssessmentFrameworkControlSchema = z
  .object({ id: UUIDSchema.openapi({ description: ' The unique identifier of the control. ' }) })
  .openapi({
    required: ['id'],
    description:
      ' The control entity attributes that uniquely identify an existing control to be added to a framework in Audit Manager. ',
  })
  .openapi('CreateAssessmentFrameworkControl')

const CreateAssessmentFrameworkControlsSchema = z
  .array(CreateAssessmentFrameworkControlSchema)
  .min(1)
  .openapi('CreateAssessmentFrameworkControls')

const CreateAssessmentFrameworkControlSetSchema = z
  .object({
    name: ControlSetNameSchema.openapi({ description: ' The name of the control set. ' }),
    controls: CreateAssessmentFrameworkControlsSchema.exactOptional().openapi({
      description:
        " The list of controls within the control set. This doesn't contain the control set ID. ",
    }),
  })
  .openapi({
    required: ['name'],
    description:
      " A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. ",
  })
  .openapi('CreateAssessmentFrameworkControlSet')

const AssessmentReportNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_\.]+$/)
  .min(1)
  .max(300)
  .openapi('AssessmentReportName')

const AssessmentReportDescriptionSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(1000)
  .openapi('AssessmentReportDescription')

const AssessmentReportStatusSchema = z
  .enum(['COMPLETE', 'IN_PROGRESS', 'FAILED'])
  .openapi('AssessmentReportStatus')

const AssessmentReportSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the assessment report. ',
    }),
    name: AssessmentReportNameSchema.exactOptional().openapi({
      description: " The name that's given to the assessment report. ",
    }),
    description: AssessmentReportDescriptionSchema.exactOptional().openapi({
      description: ' The description of the specified assessment report. ',
    }),
    awsAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the specified Amazon Web Services account. ',
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the specified assessment. ',
    }),
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the associated assessment. ',
    }),
    author: UsernameSchema.exactOptional().openapi({
      description: ' The name of the user who created the assessment report. ',
    }),
    status: AssessmentReportStatusSchema.exactOptional().openapi({
      description: ' The current status of the specified assessment report. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the assessment report was created. ',
    }),
  })
  .openapi({
    description:
      " A finalized document that's generated from an Audit Manager assessment. These reports summarize the relevant evidence that was collected for your audit, and link to the relevant evidence folders. These evidence folders are named and organized according to the controls that are specified in your assessment. ",
    required: [],
  })
  .openapi('AssessmentReport')

const CreateAssessmentReportResponseSchema = z
  .object({
    assessmentReport: AssessmentReportSchema.exactOptional().openapi({
      description:
        ' The new assessment report that the <code>CreateAssessmentReport</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateAssessmentReportResponse')

const CreateControlResponseSchema = z
  .object({
    control: ControlSchema.exactOptional().openapi({
      description: ' The new control that the <code>CreateControl</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('CreateControlResponse')

const CreateControlMappingSourceSchema = z
  .object({
    sourceName: SourceNameSchema.exactOptional().openapi({
      description: ' The name of the control mapping data source. ',
    }),
    sourceDescription: SourceDescriptionSchema.exactOptional().openapi({
      description:
        ' The description of the data source that determines where Audit Manager collects evidence from for the control. ',
    }),
    sourceSetUpOption: SourceSetUpOptionSchema.exactOptional().openapi({
      description:
        ' The setup option for the data source, which reflects if the evidence collection is automated or manual. ',
    }),
    sourceType: SourceTypeSchema.exactOptional().openapi({
      description: ' Specifies one of the five types of data sources for evidence collection. ',
    }),
    sourceKeyword: SourceKeywordSchema.exactOptional(),
    sourceFrequency: SourceFrequencySchema.exactOptional().openapi({
      description: ' The frequency of evidence collection for the control mapping source. ',
    }),
    troubleshootingText: TroubleshootingTextSchema.exactOptional().openapi({
      description: ' The instructions for troubleshooting the control. ',
    }),
  })
  .openapi({
    description:
      " The control mapping fields that represent the source for evidence collection, along with related parameters and metadata. This doesn't contain <code>mappingID</code>. ",
    required: [],
  })
  .openapi('CreateControlMappingSource')

const DeleteAssessmentResponseSchema = z.looseObject({}).openapi('DeleteAssessmentResponse')

const DeleteAssessmentFrameworkResponseSchema = z
  .looseObject({})
  .openapi('DeleteAssessmentFrameworkResponse')

const DeleteAssessmentFrameworkShareResponseSchema = z
  .looseObject({})
  .openapi('DeleteAssessmentFrameworkShareResponse')

const DeleteAssessmentReportResponseSchema = z
  .looseObject({})
  .openapi('DeleteAssessmentReportResponse')

const DeleteControlResponseSchema = z.looseObject({}).openapi('DeleteControlResponse')

const AccountStatusSchema = z
  .enum(['ACTIVE', 'INACTIVE', 'PENDING_ACTIVATION'])
  .openapi('AccountStatus')

const DeregisterAccountResponseSchema = z
  .object({
    status: AccountStatusSchema.exactOptional().openapi({
      description: ' The registration status of the account. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeregisterAccountResponse')

const DeregisterOrganizationAdminAccountResponseSchema = z
  .looseObject({})
  .openapi('DeregisterOrganizationAdminAccountResponse')

const DisassociateAssessmentReportEvidenceFolderResponseSchema = z
  .looseObject({})
  .openapi('DisassociateAssessmentReportEvidenceFolderResponse')

const GetAccountStatusResponseSchema = z
  .object({
    status: AccountStatusSchema.exactOptional().openapi({
      description: ' The status of the Amazon Web Services account. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAccountStatusResponse')

const GetAssessmentResponseSchema: z.ZodType<GetAssessmentResponseType> = z
  .object({ assessment: AssessmentSchema.exactOptional(), userRole: RoleSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetAssessmentResponse')

const GetAssessmentFrameworkResponseSchema: z.ZodType<GetAssessmentFrameworkResponseType> = z
  .object({
    framework: FrameworkSchema.exactOptional().openapi({
      description: ' The framework that the <code>GetAssessmentFramework</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetAssessmentFrameworkResponse')

const HyperlinkNameSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .min(1)
  .max(200)
  .openapi('HyperlinkName')

const UrlLinkSchema = z
  .string()
  .regex(/^(https?:\/\/)?(www\.)?[a-zA-Z0-9-_]+([\.]+[a-zA-Z]+)+[\/\w]*$/)
  .min(1)
  .max(8192)
  .openapi('UrlLink')

const URLSchema = z
  .object({
    hyperlinkName: HyperlinkNameSchema.exactOptional().openapi({
      description: " The name or word that's used as a hyperlink to the URL. ",
    }),
    link: UrlLinkSchema.exactOptional().openapi({
      description: ' The unique identifier for the internet resource. ',
    }),
  })
  .openapi({
    description:
      ' Short for uniform resource locator. A URL is used as a unique identifier to locate a resource on the internet. ',
    required: [],
  })
  .openapi('URL')

const GetAssessmentReportUrlResponseSchema = z
  .object({ preSignedUrl: URLSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('GetAssessmentReportUrlResponse')

const ObjectTypeEnumSchema = z
  .enum(['ASSESSMENT', 'CONTROL_SET', 'CONTROL', 'DELEGATION', 'ASSESSMENT_REPORT'])
  .openapi('ObjectTypeEnum')

const ActionEnumSchema = z
  .enum([
    'CREATE',
    'UPDATE_METADATA',
    'ACTIVE',
    'INACTIVE',
    'DELETE',
    'UNDER_REVIEW',
    'REVIEWED',
    'IMPORT_EVIDENCE',
  ])
  .openapi('ActionEnum')

const ChangeLogSchema = z
  .object({
    objectType: ObjectTypeEnumSchema.exactOptional().openapi({
      description: ' The object that was changed, such as an assessment, control, or control set. ',
    }),
    objectName: NonEmptyStringSchema.exactOptional().openapi({
      description:
        ' The name of the object that changed. This could be the name of an assessment, control, or control set.',
    }),
    action: ActionEnumSchema.exactOptional().openapi({
      description: ' The action that was performed. ',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the action was performed and the changelog record was created. ',
    }),
    createdBy: IamArnSchema.exactOptional().openapi({
      description: ' The user or role that performed the action. ',
    }),
  })
  .openapi({
    description:
      ' The record of a change within Audit Manager. For example, this could be the status change of an assessment or the delegation of a control set. ',
    required: [],
  })
  .openapi('ChangeLog')

const ChangeLogsSchema = z.array(ChangeLogSchema).openapi('ChangeLogs')

const TokenSchema = z
  .string()
  .regex(/^[A-Za-z0-9+\/=]*$/)
  .min(1)
  .max(1000)
  .openapi('Token')

const GetChangeLogsResponseSchema = z
  .object({
    changeLogs: ChangeLogsSchema.exactOptional().openapi({
      description: 'The list of user activity for the control. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: "The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetChangeLogsResponse')

const GetControlResponseSchema = z
  .object({
    control: ControlSchema.exactOptional().openapi({
      description: ' The name of the control that the <code>GetControl</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetControlResponse')

const DelegationMetadataSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the delegation. ',
    }),
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the associated assessment. ',
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the assessment. ',
    }),
    status: DelegationStatusSchema.exactOptional().openapi({
      description: ' The current status of the delegation. ',
    }),
    roleArn: IamArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the IAM role. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the delegation was created. ',
    }),
    controlSetName: NonEmptyStringSchema.exactOptional().openapi({
      description: ' Specifies the name of the control set that was delegated for review. ',
    }),
  })
  .openapi({ description: " The metadata that's associated with the delegation. ", required: [] })
  .openapi('DelegationMetadata')

const DelegationMetadataListSchema = z
  .array(DelegationMetadataSchema)
  .openapi('DelegationMetadataList')

const GetDelegationsResponseSchema = z
  .object({
    delegations: DelegationMetadataListSchema.exactOptional().openapi({
      description: ' The list of delegations that the <code>GetDelegations</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetDelegationsResponse')

const StringSchema = z.string().regex(/.*/).min(0).max(2048).openapi('String')

const EventNameSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(100)
  .openapi('EventName')

const GenericArnSchema = z
  .string()
  .regex(/^arn:.*/)
  .min(20)
  .max(2048)
  .openapi('GenericArn')

const ResourceSchema = z
  .object({
    arn: GenericArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) for the resource. ',
    }),
    value: StringSchema.exactOptional().openapi({ description: ' The value of the resource. ' }),
    complianceCheck: StringSchema.exactOptional().openapi({
      description:
        "<p> The evaluation status for a resource that was assessed when collecting compliance check evidence. </p> <ul> <li> <p>Audit Manager classes the resource as non-compliant if Security Hub reports a <i>Fail</i> result, or if Config reports a <i>Non-compliant</i> result.</p> </li> <li> <p>Audit Manager classes the resource as compliant if Security Hub reports a <i>Pass</i> result, or if Config reports a <i>Compliant</i> result.</p> </li> <li> <p>If a compliance check isn't available or applicable, then no compliance evaluation can be made for that resource. This is the case if a resource assessment uses Config or Security Hub as the underlying data source type, but those services aren't enabled. This is also the case if the resource assessment uses an underlying data source type that doesn't support compliance checks (such as manual evidence, Amazon Web Services API calls, or CloudTrail). </p> </li> </ul>",
    }),
  })
  .openapi({
    description: " A system asset that's evaluated in an Audit Manager assessment. ",
    required: [],
  })
  .openapi('Resource')

const ResourcesSchema = z.array(ResourceSchema).openapi('Resources')

const EvidenceAttributeValueSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(200)
  .openapi('EvidenceAttributeValue')

const EvidenceAttributesSchema = z
  .record(z.string(), EvidenceAttributeValueSchema)
  .openapi('EvidenceAttributes')

const EvidenceSchema = z
  .object({
    dataSource: StringSchema.exactOptional().openapi({
      description: ' The data source where the evidence was collected from. ',
    }),
    evidenceAwsAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the Amazon Web Services account. ',
    }),
    time: TimestampSchema.exactOptional().openapi({
      description: ' The timestamp that represents when the evidence was collected. ',
    }),
    eventSource: AWSServiceNameSchema.exactOptional().openapi({
      description: ' The Amazon Web Service that the evidence is collected from. ',
    }),
    eventName: EventNameSchema.exactOptional().openapi({
      description: ' The name of the evidence event. ',
    }),
    evidenceByType: StringSchema.exactOptional().openapi({
      description: ' The type of automated evidence. ',
    }),
    resourcesIncluded: ResourcesSchema.exactOptional().openapi({
      description: ' The list of resources that are assessed to generate the evidence. ',
    }),
    attributes: EvidenceAttributesSchema.exactOptional().openapi({
      description:
        ' The names and values that are used by the evidence event. This includes an attribute name (such as <code>allowUsersToChangePassword</code>) and value (such as <code>true</code> or <code>false</code>). ',
    }),
    iamId: IamArnSchema.exactOptional().openapi({
      description:
        " The unique identifier for the user or role that's associated with the evidence. ",
    }),
    complianceCheck: StringSchema.exactOptional().openapi({
      description:
        "<p>The evaluation status for automated evidence that falls under the compliance check category.</p> <ul> <li> <p>Audit Manager classes evidence as non-compliant if Security Hub reports a <i>Fail</i> result, or if Config reports a <i>Non-compliant</i> result.</p> </li> <li> <p>Audit Manager classes evidence as compliant if Security Hub reports a <i>Pass</i> result, or if Config reports a <i>Compliant</i> result.</p> </li> <li> <p>If a compliance check isn't available or applicable, then no compliance evaluation can be made for that evidence. This is the case if the evidence uses Config or Security Hub as the underlying data source type, but those services aren't enabled. This is also the case if the evidence uses an underlying data source type that doesn't support compliance checks (such as manual evidence, Amazon Web Services API calls, or CloudTrail). </p> </li> </ul>",
    }),
    awsOrganization: StringSchema.exactOptional().openapi({
      description:
        ' The Amazon Web Services account that the evidence is collected from, and its organization path. ',
    }),
    awsAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the Amazon Web Services account. ',
    }),
    evidenceFolderId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the folder that the evidence is stored in. ',
    }),
    id: UUIDSchema.exactOptional().openapi({ description: ' The identifier for the evidence. ' }),
    assessmentReportSelection: StringSchema.exactOptional().openapi({
      description: ' Specifies whether the evidence is included in the assessment report. ',
    }),
  })
  .openapi({
    description:
      ' A record that contains the information needed to demonstrate compliance with the requirements specified by a control. Examples of evidence include change activity invoked by a user, or a system configuration snapshot. ',
    required: [],
  })
  .openapi('Evidence')

const GetEvidenceResponseSchema = z
  .object({
    evidence: EvidenceSchema.exactOptional().openapi({
      description: ' The evidence that the <code>GetEvidence</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEvidenceResponse')

const EvidenceListSchema = z.array(EvidenceSchema).openapi('EvidenceList')

const GetEvidenceByEvidenceFolderResponseSchema = z
  .object({
    evidence: EvidenceListSchema.exactOptional().openapi({
      description:
        ' The list of evidence that the <code>GetEvidenceByEvidenceFolder</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEvidenceByEvidenceFolderResponse')

const AssessmentEvidenceFolderNameSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .min(1)
  .max(300)
  .openapi('AssessmentEvidenceFolderName')

const AssessmentEvidenceFolderSchema = z
  .object({
    name: AssessmentEvidenceFolderNameSchema.exactOptional().openapi({
      description: ' The name of the evidence folder. ',
    }),
    date: TimestampSchema.exactOptional().openapi({
      description: ' The date when the first evidence was added to the evidence folder. ',
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the assessment. ',
    }),
    controlSetId: ControlSetIdSchema.exactOptional().openapi({
      description: ' The identifier for the control set. ',
    }),
    controlId: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the control. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the folder that the evidence is stored in. ',
    }),
    dataSource: StringSchema.exactOptional().openapi({
      description: ' The Amazon Web Service that the evidence was collected from. ',
    }),
    author: StringSchema.exactOptional().openapi({
      description: ' The name of the user who created the evidence folder. ',
    }),
    totalEvidence: IntegerSchema.exactOptional().openapi({
      description: ' The total amount of evidence in the evidence folder. ',
    }),
    assessmentReportSelectionCount: IntegerSchema.exactOptional().openapi({
      description: " The total count of evidence that's included in the assessment report. ",
    }),
    controlName: ControlNameSchema.exactOptional().openapi({
      description: ' The name of the control. ',
    }),
    evidenceResourcesIncludedCount: IntegerSchema.exactOptional().openapi({
      description: " The amount of evidence that's included in the evidence folder. ",
    }),
    evidenceByTypeConfigurationDataCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The number of evidence that falls under the configuration data category. This evidence is collected from configuration snapshots of other Amazon Web Services such as Amazon EC2, Amazon S3, or IAM. ',
    }),
    evidenceByTypeManualCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The number of evidence that falls under the manual category. This evidence is imported manually. ',
    }),
    evidenceByTypeComplianceCheckCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The number of evidence that falls under the compliance check category. This evidence is collected from Config or Security Hub. ',
    }),
    evidenceByTypeComplianceCheckIssuesCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The total number of issues that were reported directly from Security Hub, Config, or both. ',
    }),
    evidenceByTypeUserActivityCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The number of evidence that falls under the user activity category. This evidence is collected from CloudTrail logs. ',
    }),
    evidenceAwsServiceSourceCount: IntegerSchema.exactOptional().openapi({
      description:
        ' The total number of Amazon Web Services resources that were assessed to generate the evidence. ',
    }),
  })
  .openapi({
    description: ' The folder where Audit Manager stores evidence for an assessment. ',
    required: [],
  })
  .openapi('AssessmentEvidenceFolder')

const GetEvidenceFolderResponseSchema = z
  .object({
    evidenceFolder: AssessmentEvidenceFolderSchema.exactOptional().openapi({
      description: ' The folder that the evidence is stored in. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEvidenceFolderResponse')

const AssessmentEvidenceFoldersSchema = z
  .array(AssessmentEvidenceFolderSchema)
  .openapi('AssessmentEvidenceFolders')

const GetEvidenceFoldersByAssessmentResponseSchema = z
  .object({
    evidenceFolders: AssessmentEvidenceFoldersSchema.exactOptional().openapi({
      description:
        ' The list of evidence folders that the <code>GetEvidenceFoldersByAssessment</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEvidenceFoldersByAssessmentResponse')

const GetEvidenceFoldersByAssessmentControlResponseSchema = z
  .object({
    evidenceFolders: AssessmentEvidenceFoldersSchema.exactOptional().openapi({
      description:
        ' The list of evidence folders that the <code>GetEvidenceFoldersByAssessmentControl</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetEvidenceFoldersByAssessmentControlResponse')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const InsightsSchema = z
  .object({
    activeAssessmentsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The number of active assessments in Audit Manager. ',
    }),
    noncompliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as non-compliant on the <code>lastUpdated</code> date. This includes evidence that was collected from Security Hub with a <i>Fail</i> ruling, or collected from Config with a <i>Non-compliant</i> ruling. ',
    }),
    compliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as compliant on the <code>lastUpdated</code> date. This includes evidence that was collected from Security Hub with a <i>Pass</i> ruling, or collected from Config with a <i>Compliant</i> ruling. ',
    }),
    inconclusiveEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        "<p>The number of evidence without a compliance check ruling. Evidence is inconclusive when the associated control uses Security Hub or Config as a data source but you didn't enable those services. This is also the case when a control uses a data source that doesn’t support compliance checks (for example: manual evidence, API calls, or CloudTrail). </p> <note> <p>If evidence has a compliance check status of <i>not applicable</i>, it's classed as <i>inconclusive</i> in <code>Insights</code> data.</p> </note>",
    }),
    assessmentControlsCountByNoncompliantEvidence: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of assessment controls that collected non-compliant evidence on the <code>lastUpdated</code> date. ',
    }),
    totalAssessmentControlsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The total number of controls across all active assessments. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: 'The time when the cross-assessment insights were last updated. ',
    }),
  })
  .openapi({
    description:
      "<p>A summary of the latest analytics data for all your active assessments. </p> <p>This summary is a snapshot of the data that your active assessments collected on the <code>lastUpdated</code> date. It’s important to understand that the following totals are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>Insights</code> data is eventually consistent. This means that, when you read data from <code>Insights</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response should return the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note>",
    required: [],
  })
  .openapi('Insights')

const GetInsightsResponseSchema = z
  .object({
    insights: InsightsSchema.exactOptional().openapi({
      description: 'The analytics data that the <code>GetInsights</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetInsightsResponse')

const InsightsByAssessmentSchema = z
  .object({
    noncompliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as non-compliant. This includes evidence that was collected from Security Hub with a <i>Fail</i> ruling, or collected from Config with a <i>Non-compliant</i> ruling. ',
    }),
    compliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as compliant. This includes evidence that was collected from Security Hub with a <i>Pass</i> ruling, or collected from Config with a <i>Compliant</i> ruling. ',
    }),
    inconclusiveEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        "<p>The amount of evidence without a compliance check ruling. Evidence is inconclusive if the associated control uses Security Hub or Config as a data source and you didn't enable those services. This is also the case if a control uses a data source that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail). </p> <note> <p>If evidence has a compliance check status of <i>not applicable</i>, it's classified as <i>inconclusive</i> in <code>InsightsByAssessment</code> data.</p> </note>",
    }),
    assessmentControlsCountByNoncompliantEvidence: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of assessment controls that collected non-compliant evidence on the <code>lastUpdated</code> date. ',
    }),
    totalAssessmentControlsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The total number of controls in the assessment. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: 'The time when the assessment insights were last updated.',
    }),
  })
  .openapi({
    description:
      "<p>A summary of the latest analytics data for a specific active assessment.</p> <p>This summary is a snapshot of the data that was collected on the <code>lastUpdated</code> date. It’s important to understand that the totals in <code>InsightsByAssessment</code> are daily counts based on this date — they aren’t a total sum to date. </p> <p>The <code>InsightsByAssessment</code> data is eventually consistent. This means that when you read data from <code>InsightsByAssessment</code>, the response might not instantly reflect the results of a recently completed write or update operation. If you repeat your read request after a few hours, the response returns the latest data.</p> <note> <p>If you delete an assessment or change its status to inactive, <code>InsightsByAssessment</code> includes data for that assessment as follows.</p> <ul> <li> <p> <b>Inactive assessments</b> - If Audit Manager collected evidence for your assessment before you changed it inactive, that evidence is included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> <li> <p> <b>Deleted assessments</b> - If Audit Manager collected evidence for your assessment before you deleted it, that evidence isn't included in the <code>InsightsByAssessment</code> counts for that day.</p> </li> </ul> </note>",
    required: [],
  })
  .openapi('InsightsByAssessment')

const GetInsightsByAssessmentResponseSchema = z
  .object({
    insights: InsightsByAssessmentSchema.exactOptional().openapi({
      description:
        ' The assessment analytics data that the <code>GetInsightsByAssessment</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetInsightsByAssessmentResponse')

const OrganizationIdSchema = z
  .string()
  .regex(/o-[a-z0-9]{10,32}/)
  .min(12)
  .max(34)
  .openapi('OrganizationId')

const GetOrganizationAdminAccountResponseSchema = z
  .object({
    adminAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the administrator account. ',
    }),
    organizationId: OrganizationIdSchema.exactOptional().openapi({
      description: ' The identifier for the organization. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetOrganizationAdminAccountResponse')

const ServiceMetadataSchema = z
  .object({
    name: AWSServiceNameSchema.exactOptional().openapi({
      description: ' The name of the Amazon Web Service. ',
    }),
    displayName: NonEmptyStringSchema.exactOptional().openapi({
      description: ' The display name of the Amazon Web Service. ',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: ' The description of the Amazon Web Service. ',
    }),
    category: NonEmptyStringSchema.exactOptional().openapi({
      description:
        ' The category that the Amazon Web Service belongs to, such as compute, storage, or database. ',
    }),
  })
  .openapi({
    description: " The metadata that's associated with the Amazon Web Service. ",
    required: [],
  })
  .openapi('ServiceMetadata')

const ServiceMetadataListSchema = z.array(ServiceMetadataSchema).openapi('ServiceMetadataList')

const GetServicesInScopeResponseSchema = z
  .object({
    serviceMetadata: ServiceMetadataListSchema.exactOptional().openapi({
      description: " The metadata that's associated with the Amazon Web Service. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('GetServicesInScopeResponse')

const BooleanSchema = z.boolean().openapi('Boolean')

const SNSTopicSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-_\(\)\[\]]+$/)
  .min(1)
  .max(255)
  .openapi('SNSTopic')

const KmsKeySchema = z
  .string()
  .regex(/^arn:.*:kms:.*|DEFAULT/)
  .min(7)
  .max(2048)
  .openapi('KmsKey')

const CloudTrailArnSchema = z
  .string()
  .regex(/^arn:.*:cloudtrail:.*/)
  .min(20)
  .max(2048)
  .openapi('CloudTrailArn')

const EvidenceFinderEnablementStatusSchema = z
  .enum(['ENABLED', 'DISABLED', 'ENABLE_IN_PROGRESS', 'DISABLE_IN_PROGRESS'])
  .openapi('EvidenceFinderEnablementStatus')

const EvidenceFinderBackfillStatusSchema = z
  .enum(['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED'])
  .openapi('EvidenceFinderBackfillStatus')

const EvidenceFinderEnablementSchema = z
  .object({
    eventDataStoreArn: CloudTrailArnSchema.exactOptional().openapi({
      description:
        'The Amazon Resource Name (ARN) of the CloudTrail Lake event data store that’s used by evidence finder. The event data store is the lake of evidence data that evidence finder runs queries against.',
    }),
    enablementStatus: EvidenceFinderEnablementStatusSchema.exactOptional().openapi({
      description:
        "<p>The current status of the evidence finder feature and the related event data store. </p> <ul> <li> <p> <code>ENABLE_IN_PROGRESS</code> means that you requested to enable evidence finder. An event data store is currently being created to support evidence finder queries.</p> </li> <li> <p> <code>ENABLED</code> means that an event data store was successfully created and evidence finder is enabled. We recommend that you wait 7 days until the event data store is backfilled with your past two years’ worth of evidence data. You can use evidence finder in the meantime, but not all data might be available until the backfill is complete.</p> </li> <li> <p> <code>DISABLE_IN_PROGRESS</code> means that you requested to disable evidence finder, and your request is pending the deletion of the event data store.</p> </li> <li> <p> <code>DISABLED</code> means that you have permanently disabled evidence finder and the event data store has been deleted. You can't re-enable evidence finder after this point.</p> </li> </ul>",
    }),
    backfillStatus: EvidenceFinderBackfillStatusSchema.exactOptional().openapi({
      description:
        '<p>The current status of the evidence data backfill process. </p> <p>The backfill starts after you enable evidence finder. During this task, Audit Manager populates an event data store with your past two years’ worth of evidence data so that your evidence can be queried.</p> <ul> <li> <p> <code>NOT_STARTED</code> means that the backfill hasn’t started yet. </p> </li> <li> <p> <code>IN_PROGRESS</code> means that the backfill is in progress. This can take up to 7 days to complete, depending on the amount of evidence data. </p> </li> <li> <p> <code>COMPLETED</code> means that the backfill is complete. All of your past evidence is now queryable. </p> </li> </ul>',
    }),
    error: ErrorMessageSchema.exactOptional().openapi({
      description:
        'Represents any errors that occurred when enabling or disabling evidence finder. ',
    }),
  })
  .openapi({
    description:
      'The settings object that specifies whether evidence finder is enabled. This object also describes the related event data store, and the backfill status for populating the event data store with evidence data.',
    required: [],
  })
  .openapi('EvidenceFinderEnablement')

const DeleteResourcesSchema = z.enum(['ALL', 'DEFAULT']).openapi('DeleteResources')

const DeregistrationPolicySchema = z
  .object({
    deleteResources: DeleteResourcesSchema.exactOptional().openapi({
      description:
        '<p>Specifies which Audit Manager data will be deleted when you deregister Audit Manager.</p> <ul> <li> <p>If you set the value to <code>ALL</code>, all of your data is deleted within seven days of deregistration.</p> </li> <li> <p>If you set the value to <code>DEFAULT</code>, none of your data is deleted at the time of deregistration. However, keep in mind that the Audit Manager data retention policy still applies. As a result, any evidence data will be deleted two years after its creation date. Your other Audit Manager resources will continue to exist indefinitely.</p> </li> </ul>',
    }),
  })
  .openapi({
    description:
      '<p>The deregistration policy for the data that\'s stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important>',
    required: [],
  })
  .openapi('DeregistrationPolicy')

const SettingsSchema = z
  .object({
    isAwsOrgEnabled: BooleanSchema.exactOptional().openapi({
      description: ' Specifies whether Organizations is enabled. ',
    }),
    snsTopic: SNSTopicSchema.exactOptional().openapi({
      description: ' The designated Amazon Simple Notification Service (Amazon SNS) topic. ',
    }),
    defaultAssessmentReportsDestination: AssessmentReportsDestinationSchema.exactOptional().openapi(
      { description: ' The default storage destination for assessment reports. ' },
    ),
    defaultProcessOwners: RolesSchema.exactOptional().openapi({
      description: ' The designated default audit owners. ',
    }),
    kmsKey: KmsKeySchema.exactOptional().openapi({ description: ' The KMS key details. ' }),
    evidenceFinderEnablement: EvidenceFinderEnablementSchema.exactOptional().openapi({
      description: 'The current evidence finder status and event data store details.',
    }),
    deregistrationPolicy: DeregistrationPolicySchema.exactOptional().openapi({
      description:
        'The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager.',
    }),
  })
  .openapi({
    description: ' The settings object that holds all supported Audit Manager settings. ',
    required: [],
  })
  .openapi('Settings')

const GetSettingsResponseSchema = z
  .object({
    settings: SettingsSchema.exactOptional().openapi({
      description: ' The settings object that holds all supported Audit Manager settings. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('GetSettingsResponse')

const EvidenceInsightsSchema = z
  .object({
    noncompliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as non-compliant. This includes evidence that was collected from Security Hub with a <i>Fail</i> ruling, or collected from Config with a <i>Non-compliant</i> ruling. ',
    }),
    compliantEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of compliance check evidence that Audit Manager classified as compliant. This includes evidence that was collected from Security Hub with a <i>Pass</i> ruling, or collected from Config with a <i>Compliant</i> ruling. ',
    }),
    inconclusiveEvidenceCount: NullableIntegerSchema.exactOptional().openapi({
      description:
        "<p>The number of evidence that a compliance check ruling isn't available for. Evidence is inconclusive when the associated control uses Security Hub or Config as a data source but you didn't enable those services. This is also the case when a control uses a data source that doesn’t support compliance checks (for example, manual evidence, API calls, or CloudTrail). </p> <note> <p>If evidence has a compliance check status of <i>not applicable</i> in the console, it's classified as <i>inconclusive</i> in <code>EvidenceInsights</code> data.</p> </note>",
    }),
  })
  .openapi({
    description:
      'A breakdown of the latest compliance check status for the evidence in your Audit Manager assessments. ',
    required: [],
  })
  .openapi('EvidenceInsights')

const ControlInsightsMetadataByAssessmentItemSchema = z
  .object({
    name: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the assessment control. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: 'The unique identifier for the assessment control. ',
    }),
    evidenceInsights: EvidenceInsightsSchema.exactOptional().openapi({
      description:
        'A breakdown of the compliance check status for the evidence that’s associated with the assessment control. ',
    }),
    controlSetName: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the control set that the assessment control belongs to. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: 'The time when the assessment control insights were last updated. ',
    }),
  })
  .openapi({
    description:
      '<p>A summary of the latest analytics data for a specific control in a specific active assessment.</p> <p>Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence. </p>',
    required: [],
  })
  .openapi('ControlInsightsMetadataByAssessmentItem')

const ControlInsightsMetadataByAssessmentSchema = z
  .array(ControlInsightsMetadataByAssessmentItemSchema)
  .openapi('ControlInsightsMetadataByAssessment')

const ListAssessmentControlInsightsByControlDomainResponseSchema = z
  .object({
    controlInsightsByAssessment: ControlInsightsMetadataByAssessmentSchema.exactOptional().openapi({
      description:
        'The assessment control analytics data that the <code>ListAssessmentControlInsightsByControlDomain</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: "The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssessmentControlInsightsByControlDomainResponse')

const ShareRequestStatusSchema = z
  .enum(['ACTIVE', 'REPLICATING', 'SHARED', 'EXPIRING', 'FAILED', 'EXPIRED', 'DECLINED', 'REVOKED'])
  .openapi('ShareRequestStatus')

const RegionSchema = z
  .string()
  .regex(/^[a-z]{2}-[a-z]+-[0-9]{1}$/)
  .openapi('Region')

const ShareRequestCommentSchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(500)
  .openapi('ShareRequestComment')

const AssessmentFrameworkShareRequestSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the share request. ',
    }),
    frameworkId: UUIDSchema.exactOptional().openapi({
      description: 'The unique identifier for the shared custom framework. ',
    }),
    frameworkName: FrameworkNameSchema.exactOptional().openapi({
      description: ' The name of the custom framework that the share request is for. ',
    }),
    frameworkDescription: FrameworkDescriptionSchema.exactOptional().openapi({
      description: 'The description of the shared custom framework.',
    }),
    status: ShareRequestStatusSchema.exactOptional().openapi({
      description: ' The status of the share request. ',
    }),
    sourceAccount: AccountIdSchema.exactOptional().openapi({
      description: ' The Amazon Web Services account of the sender. ',
    }),
    destinationAccount: AccountIdSchema.exactOptional().openapi({
      description: ' The Amazon Web Services account of the recipient. ',
    }),
    destinationRegion: RegionSchema.exactOptional().openapi({
      description: ' The Amazon Web Services Region of the recipient. ',
    }),
    expirationTime: TimestampSchema.exactOptional().openapi({
      description: ' The time when the share request expires. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' The time when the share request was created. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the share request was last updated. ',
    }),
    comment: ShareRequestCommentSchema.exactOptional().openapi({
      description: ' An optional comment from the sender about the share request. ',
    }),
    standardControlsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The number of standard controls that are part of the shared custom framework. ',
    }),
    customControlsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The number of custom controls that are part of the shared custom framework.',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        'The compliance type that the shared custom framework supports, such as CIS or HIPAA.',
    }),
  })
  .openapi({
    description: ' Represents a share request for a custom framework in Audit Manager. ',
    required: [],
  })
  .openapi('AssessmentFrameworkShareRequest')

const AssessmentFrameworkShareRequestListSchema = z
  .array(AssessmentFrameworkShareRequestSchema)
  .openapi('AssessmentFrameworkShareRequestList')

const ListAssessmentFrameworkShareRequestsResponseSchema = z
  .object({
    assessmentFrameworkShareRequests:
      AssessmentFrameworkShareRequestListSchema.exactOptional().openapi({
        description:
          ' The list of share requests that the <code>ListAssessmentFrameworkShareRequests</code> API returned. ',
      }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssessmentFrameworkShareRequestsResponse')

const ControlsCountSchema = z.int().openapi('ControlsCount')

const ControlSetsCountSchema = z.int().openapi('ControlSetsCount')

const AssessmentFrameworkMetadataSchema = z
  .object({
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the framework. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the framework. ',
    }),
    type: FrameworkTypeSchema.exactOptional().openapi({
      description: ' The framework type, such as a standard framework or a custom framework. ',
    }),
    name: FrameworkNameSchema.exactOptional().openapi({
      description: ' The name of the framework. ',
    }),
    description: FrameworkDescriptionSchema.exactOptional().openapi({
      description: ' The description of the framework. ',
    }),
    logo: FilenameSchema.exactOptional().openapi({
      description: " The logo that's associated with the framework. ",
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
    }),
    controlsCount: ControlsCountSchema.exactOptional().openapi({
      description: ' The number of controls that are associated with the framework. ',
    }),
    controlSetsCount: ControlSetsCountSchema.exactOptional().openapi({
      description: ' The number of control sets that are associated with the framework. ',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the framework was created. ',
    }),
    lastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the framework was most recently updated. ',
    }),
  })
  .openapi({
    description:
      " The metadata that's associated with a standard framework or a custom framework. ",
    required: [],
  })
  .openapi('AssessmentFrameworkMetadata')

const FrameworkMetadataListSchema = z
  .array(AssessmentFrameworkMetadataSchema)
  .openapi('FrameworkMetadataList')

const ListAssessmentFrameworksResponseSchema = z
  .object({
    frameworkMetadataList: FrameworkMetadataListSchema.exactOptional().openapi({
      description: ' The list of metadata objects for the framework. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssessmentFrameworksResponse')

const AssessmentReportMetadataSchema = z
  .object({
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the assessment report. ',
    }),
    name: AssessmentReportNameSchema.exactOptional().openapi({
      description: ' The name of the assessment report. ',
    }),
    description: AssessmentReportDescriptionSchema.exactOptional().openapi({
      description: ' The description of the assessment report. ',
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the associated assessment. ',
    }),
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: 'The name of the associated assessment. ',
    }),
    author: UsernameSchema.exactOptional().openapi({
      description: ' The name of the user who created the assessment report. ',
    }),
    status: AssessmentReportStatusSchema.exactOptional().openapi({
      description: ' The current status of the assessment report. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the assessment report was created. ',
    }),
  })
  .openapi({
    description: ' The metadata objects that are associated with the specified assessment report. ',
    required: [],
  })
  .openapi('AssessmentReportMetadata')

const AssessmentReportsMetadataSchema = z
  .array(AssessmentReportMetadataSchema)
  .openapi('AssessmentReportsMetadata')

const ListAssessmentReportsResponseSchema = z
  .object({
    assessmentReports: AssessmentReportsMetadataSchema.exactOptional().openapi({
      description:
        ' The list of assessment reports that the <code>ListAssessmentReports</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssessmentReportsResponse')

const AssessmentMetadataItemSchema = z
  .object({
    name: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the assessment. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the assessment. ',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        " The name of the compliance standard that's related to the assessment, such as PCI-DSS. ",
    }),
    status: AssessmentStatusSchema.exactOptional().openapi({
      description: ' The current status of the assessment. ',
    }),
    roles: RolesSchema.exactOptional().openapi({
      description: ' The roles that are associated with the assessment. ',
    }),
    delegations: DelegationsSchema.exactOptional().openapi({
      description: ' The delegations that are associated with the assessment. ',
    }),
    creationTime: TimestampSchema.exactOptional().openapi({
      description: ' Specifies when the assessment was created. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: ' The time of the most recent update. ',
    }),
  })
  .openapi({
    description: " A metadata object that's associated with an assessment in Audit Manager. ",
    required: [],
  })
  .openapi('AssessmentMetadataItem')

const ListAssessmentMetadataSchema = z
  .array(AssessmentMetadataItemSchema)
  .openapi('ListAssessmentMetadata')

const ListAssessmentsResponseSchema = z
  .object({
    assessmentMetadata: ListAssessmentMetadataSchema.exactOptional().openapi({
      description: " The metadata that's associated with the assessment. ",
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListAssessmentsResponse')

const ControlDomainInsightsSchema = z
  .object({
    name: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the control domain. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: 'The unique identifier for the control domain. ',
    }),
    controlsCountByNoncompliantEvidence: NullableIntegerSchema.exactOptional().openapi({
      description:
        'The number of controls in the control domain that collected non-compliant evidence on the <code>lastUpdated</code> date. ',
    }),
    totalControlsCount: NullableIntegerSchema.exactOptional().openapi({
      description: 'The total number of controls in the control domain. ',
    }),
    evidenceInsights: EvidenceInsightsSchema.exactOptional().openapi({
      description:
        'A breakdown of the compliance check status for the evidence that’s associated with the control domain. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: 'The time when the control domain insights were last updated. ',
    }),
  })
  .openapi({
    description:
      '<p>A summary of the latest analytics data for a specific control domain.</p> <p>Control domain insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>',
    required: [],
  })
  .openapi('ControlDomainInsights')

const ControlDomainInsightsListSchema = z
  .array(ControlDomainInsightsSchema)
  .openapi('ControlDomainInsightsList')

const ListControlDomainInsightsResponseSchema = z
  .object({
    controlDomainInsights: ControlDomainInsightsListSchema.exactOptional().openapi({
      description:
        'The control domain analytics data that the <code>ListControlDomainInsights</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: "The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListControlDomainInsightsResponse')

const ListControlDomainInsightsByAssessmentResponseSchema = z
  .object({
    controlDomainInsights: ControlDomainInsightsListSchema.exactOptional().openapi({
      description:
        'The control domain analytics data that the <code>ListControlDomainInsightsByAssessment</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: "The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListControlDomainInsightsByAssessmentResponse')

const ControlInsightsMetadataItemSchema = z
  .object({
    name: NonEmptyStringSchema.exactOptional().openapi({
      description: 'The name of the control. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: 'The unique identifier for the control. ',
    }),
    evidenceInsights: EvidenceInsightsSchema.exactOptional().openapi({
      description:
        'A breakdown of the compliance check status for the evidence that’s associated with the control. ',
    }),
    lastUpdated: TimestampSchema.exactOptional().openapi({
      description: 'The time when the control insights were last updated. ',
    }),
  })
  .openapi({
    description:
      '<p>A summary of the latest analytics data for a specific control. </p> <p>This data reflects the total counts for the specified control across all active assessments. Control insights are grouped by control domain, and ranked by the highest total count of non-compliant evidence.</p>',
    required: [],
  })
  .openapi('ControlInsightsMetadataItem')

const ControlInsightsMetadataSchema = z
  .array(ControlInsightsMetadataItemSchema)
  .openapi('ControlInsightsMetadata')

const ListControlInsightsByControlDomainResponseSchema = z
  .object({
    controlInsightsMetadata: ControlInsightsMetadataSchema.exactOptional().openapi({
      description:
        'The control analytics data that the <code>ListControlInsightsByControlDomain</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: "The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListControlInsightsByControlDomainResponse')

const ControlMetadataSchema = z
  .object({
    arn: AuditManagerArnSchema.exactOptional().openapi({
      description: ' The Amazon Resource Name (ARN) of the control. ',
    }),
    id: UUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the control. ',
    }),
    name: ControlNameSchema.exactOptional().openapi({ description: ' The name of the control. ' }),
    controlSources: ControlSourcesSchema.exactOptional().openapi({
      description:
        ' The data source that determines where Audit Manager collects evidence from for the control. ',
    }),
    createdAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the control was created. ',
    }),
    lastUpdatedAt: TimestampSchema.exactOptional().openapi({
      description: ' The time when the control was most recently updated. ',
    }),
  })
  .openapi({
    description: " The metadata that's associated with the standard control or custom control. ",
    required: [],
  })
  .openapi('ControlMetadata')

const ControlMetadataListSchema = z.array(ControlMetadataSchema).openapi('ControlMetadataList')

const ListControlsResponseSchema = z
  .object({
    controlMetadataList: ControlMetadataListSchema.exactOptional().openapi({
      description:
        ' The list of control metadata objects that the <code>ListControls</code> API returned. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListControlsResponse')

const KeywordsSchema = z.array(KeywordValueSchema).openapi('Keywords')

const ListKeywordsForDataSourceResponseSchema = z
  .object({
    keywords: KeywordsSchema.exactOptional().openapi({
      description: ' The list of keywords for the event mapping source. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListKeywordsForDataSourceResponse')

const TimestampUUIDSchema = z
  .string()
  .regex(/^[0-9]{10,13}_[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
  .min(47)
  .max(50)
  .openapi('TimestampUUID')

const NotificationSchema = z
  .object({
    id: TimestampUUIDSchema.exactOptional().openapi({
      description: ' The unique identifier for the notification. ',
    }),
    assessmentId: UUIDSchema.exactOptional().openapi({
      description: ' The identifier for the assessment. ',
    }),
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the related assessment. ',
    }),
    controlSetId: ControlSetIdSchema.exactOptional().openapi({
      description: ' The identifier for the control set. ',
    }),
    controlSetName: NonEmptyStringSchema.exactOptional().openapi({
      description: ' Specifies the name of the control set that the notification is about. ',
    }),
    description: NonEmptyStringSchema.exactOptional().openapi({
      description: ' The description of the notification. ',
    }),
    eventTime: TimestampSchema.exactOptional().openapi({
      description: ' The time when the notification was sent. ',
    }),
    source: NonEmptyStringSchema.exactOptional().openapi({
      description: ' The sender of the notification. ',
    }),
  })
  .openapi({
    description:
      " The notification that informs a user of an update in Audit Manager. For example, this includes the notification that's sent when a control set is delegated for review. ",
    required: [],
  })
  .openapi('Notification')

const NotificationsSchema = z.array(NotificationSchema).openapi('Notifications')

const ListNotificationsResponseSchema = z
  .object({
    notifications: NotificationsSchema.exactOptional().openapi({
      description: ' The returned list of notifications. ',
    }),
    nextToken: TokenSchema.exactOptional().openapi({
      description: " The pagination token that's used to fetch the next set of results. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('ListNotificationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The list of tags that the <code>ListTagsForResource</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RegisterAccountResponseSchema = z
  .object({
    status: AccountStatusSchema.exactOptional().openapi({
      description: ' The status of the account registration request. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('RegisterAccountResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const RegisterOrganizationAdminAccountResponseSchema = z
  .object({
    adminAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the delegated administrator account. ',
    }),
    organizationId: OrganizationIdSchema.exactOptional().openapi({
      description: ' The identifier for the organization. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('RegisterOrganizationAdminAccountResponse')

const StartAssessmentFrameworkShareResponseSchema = z
  .object({
    assessmentFrameworkShareRequest: AssessmentFrameworkShareRequestSchema.exactOptional().openapi({
      description:
        " The share request that's created by the <code>StartAssessmentFrameworkShare</code> API. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('StartAssessmentFrameworkShareResponse')

const TagResourceResponseSchema = z.looseObject({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.looseObject({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const UpdateAssessmentResponseSchema: z.ZodType<UpdateAssessmentResponseType> = z
  .object({
    assessment: AssessmentSchema.exactOptional().openapi({
      description:
        ' The response object for the <code>UpdateAssessment</code> API. This is the name of the updated assessment.',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentResponse')

const UpdateAssessmentControlResponseSchema = z
  .object({
    control: AssessmentControlSchema.exactOptional().openapi({
      description:
        ' The name of the updated control set that the <code>UpdateAssessmentControl</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentControlResponse')

const UpdateAssessmentControlSetStatusResponseSchema = z
  .object({
    controlSet: AssessmentControlSetSchema.exactOptional().openapi({
      description:
        ' The name of the updated control set that the <code>UpdateAssessmentControlSetStatus</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentControlSetStatusResponse')

const UpdateAssessmentFrameworkResponseSchema: z.ZodType<UpdateAssessmentFrameworkResponseType> = z
  .object({
    framework: FrameworkSchema.exactOptional().openapi({
      description: ' The name of the framework. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentFrameworkResponse')

const UpdateAssessmentFrameworkControlSetSchema = z
  .object({
    id: ControlSetNameSchema.exactOptional().openapi({
      description: ' The unique identifier for the control set. ',
    }),
    name: ControlSetNameSchema.openapi({ description: ' The name of the control set. ' }),
    controls: CreateAssessmentFrameworkControlsSchema.openapi({
      description: ' The list of controls that are contained within the control set. ',
    }),
  })
  .openapi({
    required: ['name', 'controls'],
    description:
      " A <code>controlSet</code> entity that represents a collection of controls in Audit Manager. This doesn't contain the control set ID. ",
  })
  .openapi('UpdateAssessmentFrameworkControlSet')

const UpdateAssessmentFrameworkShareResponseSchema = z
  .object({
    assessmentFrameworkShareRequest: AssessmentFrameworkShareRequestSchema.exactOptional().openapi({
      description:
        " The updated share request that's returned by the <code>UpdateAssessmentFrameworkShare</code> operation. ",
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentFrameworkShareResponse')

const UpdateAssessmentStatusResponseSchema: z.ZodType<UpdateAssessmentStatusResponseType> = z
  .object({
    assessment: AssessmentSchema.exactOptional().openapi({
      description:
        ' The name of the updated assessment that the <code>UpdateAssessmentStatus</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssessmentStatusResponse')

const UpdateControlResponseSchema = z
  .object({
    control: ControlSchema.exactOptional().openapi({
      description:
        ' The name of the updated control set that the <code>UpdateControl</code> API returned. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateControlResponse')

const UpdateSettingsResponseSchema = z
  .object({
    settings: SettingsSchema.exactOptional().openapi({
      description: ' The current list of settings. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('UpdateSettingsResponse')

const ValidationErrorsSchema = z.array(NonEmptyStringSchema).openapi('ValidationErrors')

const ValidateAssessmentReportIntegrityResponseSchema = z
  .object({
    signatureValid: BooleanSchema.exactOptional().openapi({
      description: ' Specifies whether the signature key is valid. ',
    }),
    signatureAlgorithm: StringSchema.exactOptional().openapi({
      description: " The signature algorithm that's used to code sign the assessment report file. ",
    }),
    signatureDateTime: StringSchema.exactOptional().openapi({
      description:
        ' The date and time signature that specifies when the assessment report was created. ',
    }),
    signatureKeyId: StringSchema.exactOptional().openapi({
      description: ' The unique identifier for the validation signature key. ',
    }),
    validationErrors: ValidationErrorsSchema.exactOptional().openapi({
      description: ' Represents any errors that occurred when validating the assessment report. ',
    }),
  })
  .openapi({ required: [] })
  .openapi('ValidateAssessmentReportIntegrityResponse')

const AssociateAssessmentReportEvidenceFolderRequestSchema = z
  .object({
    evidenceFolderId: UUIDSchema.openapi({
      description: ' The identifier for the folder that the evidence is stored in. ',
    }),
  })
  .openapi({
    required: ['evidenceFolderId'],
    title: 'AssociateAssessmentReportEvidenceFolderRequest',
  })
  .openapi('AssociateAssessmentReportEvidenceFolderRequest')

const BatchAssociateAssessmentReportEvidenceRequestSchema = z
  .object({
    evidenceFolderId: UUIDSchema.openapi({
      description: ' The identifier for the folder that the evidence is stored in. ',
    }),
    evidenceIds: EvidenceIdsSchema.openapi({ description: ' The list of evidence identifiers. ' }),
  })
  .openapi({
    required: ['evidenceFolderId', 'evidenceIds'],
    title: 'BatchAssociateAssessmentReportEvidenceRequest',
  })
  .openapi('BatchAssociateAssessmentReportEvidenceRequest')

const CreateDelegationRequestsSchema = z
  .array(CreateDelegationRequestSchema)
  .min(1)
  .max(50)
  .openapi('CreateDelegationRequests')

const BatchCreateDelegationByAssessmentRequestSchema = z
  .object({
    createDelegationRequests: CreateDelegationRequestsSchema.openapi({
      description: ' The API request to batch create delegations in Audit Manager. ',
    }),
  })
  .openapi({
    required: ['createDelegationRequests'],
    title: 'BatchCreateDelegationByAssessmentRequest',
  })
  .openapi('BatchCreateDelegationByAssessmentRequest')

const DelegationIdsSchema = z.array(UUIDSchema).min(1).max(50).openapi('DelegationIds')

const BatchDeleteDelegationByAssessmentRequestSchema = z
  .object({
    delegationIds: DelegationIdsSchema.openapi({
      description: ' The identifiers for the delegations. ',
    }),
  })
  .openapi({ required: ['delegationIds'], title: 'BatchDeleteDelegationByAssessmentRequest' })
  .openapi('BatchDeleteDelegationByAssessmentRequest')

const BatchDisassociateAssessmentReportEvidenceRequestSchema = z
  .object({
    evidenceFolderId: UUIDSchema.openapi({
      description: ' The identifier for the folder that the evidence is stored in. ',
    }),
    evidenceIds: EvidenceIdsSchema.openapi({ description: ' The list of evidence identifiers. ' }),
  })
  .openapi({
    required: ['evidenceFolderId', 'evidenceIds'],
    title: 'BatchDisassociateAssessmentReportEvidenceRequest',
  })
  .openapi('BatchDisassociateAssessmentReportEvidenceRequest')

const ManualEvidenceListSchema = z
  .array(ManualEvidenceSchema)
  .min(1)
  .max(50)
  .openapi('ManualEvidenceList')

const BatchImportEvidenceToAssessmentControlRequestSchema = z
  .object({
    manualEvidence: ManualEvidenceListSchema.openapi({
      description: ' The list of manual evidence objects. ',
    }),
  })
  .openapi({ required: ['manualEvidence'], title: 'BatchImportEvidenceToAssessmentControlRequest' })
  .openapi('BatchImportEvidenceToAssessmentControlRequest')

const CreateAssessmentFrameworkControlSetsSchema = z
  .array(CreateAssessmentFrameworkControlSetSchema)
  .min(1)
  .openapi('CreateAssessmentFrameworkControlSets')

const CreateAssessmentFrameworkRequestSchema = z
  .object({
    name: FrameworkNameSchema.openapi({ description: ' The name of the new custom framework. ' }),
    description: FrameworkDescriptionSchema.exactOptional().openapi({
      description: ' An optional description for the new custom framework. ',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
    }),
    controlSets: CreateAssessmentFrameworkControlSetsSchema.openapi({
      description: ' The control sets that are associated with the framework. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags that are associated with the framework. ',
    }),
  })
  .openapi({ required: ['name', 'controlSets'], title: 'CreateAssessmentFrameworkRequest' })
  .openapi('CreateAssessmentFrameworkRequest')

const QueryStatementSchema = z
  .string()
  .regex(/\(\?s\).*/)
  .min(1)
  .max(10000)
  .openapi('QueryStatement')

const CreateAssessmentReportRequestSchema = z
  .object({
    name: AssessmentReportNameSchema.openapi({
      description: ' The name of the new assessment report. ',
    }),
    description: AssessmentReportDescriptionSchema.exactOptional().openapi({
      description: ' The description of the assessment report. ',
    }),
    queryStatement: QueryStatementSchema.exactOptional().openapi({
      description:
        '<p>A SQL statement that represents an evidence finder query.</p> <p>Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p> <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p> <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the <i>Audit Manager User Guide.</i> </p>',
    }),
  })
  .openapi({ required: ['name'], title: 'CreateAssessmentReportRequest' })
  .openapi('CreateAssessmentReportRequest')

const CreateAssessmentRequestSchema = z
  .object({
    name: AssessmentNameSchema.openapi({
      description: ' The name of the assessment to be created. ',
    }),
    description: AssessmentDescriptionSchema.exactOptional().openapi({
      description: ' The optional description of the assessment to be created. ',
    }),
    assessmentReportsDestination: AssessmentReportsDestinationSchema.openapi({
      description:
        " The assessment report storage destination for the assessment that's being created. ",
    }),
    scope: ScopeSchema,
    roles: RolesSchema.openapi({ description: ' The list of roles for the assessment. ' }),
    frameworkId: UUIDSchema.openapi({
      description: ' The identifier for the framework that the assessment will be created from. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags that are associated with the assessment. ',
    }),
  })
  .openapi({
    required: ['name', 'assessmentReportsDestination', 'scope', 'roles', 'frameworkId'],
    title: 'CreateAssessmentRequest',
  })
  .openapi('CreateAssessmentRequest')

const CreateControlMappingSourcesSchema = z
  .array(CreateControlMappingSourceSchema)
  .min(1)
  .openapi('CreateControlMappingSources')

const CreateControlRequestSchema = z
  .object({
    name: ControlNameSchema.openapi({ description: ' The name of the control. ' }),
    description: ControlDescriptionSchema.exactOptional().openapi({
      description: ' The description of the control. ',
    }),
    testingInformation: TestingInformationSchema.exactOptional().openapi({
      description: ' The steps to follow to determine if the control is satisfied. ',
    }),
    actionPlanTitle: ActionPlanTitleSchema.exactOptional().openapi({
      description: ' The title of the action plan for remediating the control. ',
    }),
    actionPlanInstructions: ActionPlanInstructionsSchema.exactOptional().openapi({
      description: " The recommended actions to carry out if the control isn't fulfilled. ",
    }),
    controlMappingSources: CreateControlMappingSourcesSchema.openapi({
      description: ' The data mapping sources for the control. ',
    }),
    tags: TagMapSchema.exactOptional().openapi({
      description: ' The tags that are associated with the control. ',
    }),
  })
  .openapi({ required: ['name', 'controlMappingSources'], title: 'CreateControlRequest' })
  .openapi('CreateControlRequest')

const DeleteAssessmentFrameworkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAssessmentFrameworkRequest' })
  .openapi('DeleteAssessmentFrameworkRequest')

const ShareRequestTypeSchema = z.enum(['SENT', 'RECEIVED']).openapi('ShareRequestType')

const DeleteAssessmentFrameworkShareRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAssessmentFrameworkShareRequest' })
  .openapi('DeleteAssessmentFrameworkShareRequest')

const DeleteAssessmentReportRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAssessmentReportRequest' })
  .openapi('DeleteAssessmentReportRequest')

const DeleteAssessmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteAssessmentRequest' })
  .openapi('DeleteAssessmentRequest')

const DeleteControlRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeleteControlRequest' })
  .openapi('DeleteControlRequest')

const DeregisterAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'DeregisterAccountRequest' })
  .openapi('DeregisterAccountRequest')

const DeregisterOrganizationAdminAccountRequestSchema = z
  .object({
    adminAccountId: AccountIdSchema.exactOptional().openapi({
      description: ' The identifier for the administrator account. ',
    }),
  })
  .openapi({ title: 'DeregisterOrganizationAdminAccountRequest', required: [] })
  .openapi('DeregisterOrganizationAdminAccountRequest')

const DisassociateAssessmentReportEvidenceFolderRequestSchema = z
  .object({
    evidenceFolderId: UUIDSchema.openapi({
      description: ' The unique identifier for the folder that the evidence is stored in. ',
    }),
  })
  .openapi({
    required: ['evidenceFolderId'],
    title: 'DisassociateAssessmentReportEvidenceFolderRequest',
  })
  .openapi('DisassociateAssessmentReportEvidenceFolderRequest')

const EvidenceAttributeKeySchema = z
  .string()
  .regex(/^[\w\W\s\S]*$/)
  .max(100)
  .openapi('EvidenceAttributeKey')

const GetAccountStatusRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAccountStatusRequest' })
  .openapi('GetAccountStatusRequest')

const GetAssessmentFrameworkRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAssessmentFrameworkRequest' })
  .openapi('GetAssessmentFrameworkRequest')

const GetAssessmentReportUrlRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAssessmentReportUrlRequest' })
  .openapi('GetAssessmentReportUrlRequest')

const GetAssessmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetAssessmentRequest' })
  .openapi('GetAssessmentRequest')

const MaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi({ description: 'Max results in the page.' })
  .openapi('MaxResults')

const GetChangeLogsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetChangeLogsRequest' })
  .openapi('GetChangeLogsRequest')

const GetControlRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetControlRequest' })
  .openapi('GetControlRequest')

const GetDelegationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetDelegationsRequest' })
  .openapi('GetDelegationsRequest')

const GetEvidenceByEvidenceFolderRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEvidenceByEvidenceFolderRequest' })
  .openapi('GetEvidenceByEvidenceFolderRequest')

const GetEvidenceFolderRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEvidenceFolderRequest' })
  .openapi('GetEvidenceFolderRequest')

const GetEvidenceFoldersByAssessmentControlRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEvidenceFoldersByAssessmentControlRequest' })
  .openapi('GetEvidenceFoldersByAssessmentControlRequest')

const GetEvidenceFoldersByAssessmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEvidenceFoldersByAssessmentRequest' })
  .openapi('GetEvidenceFoldersByAssessmentRequest')

const GetEvidenceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetEvidenceRequest' })
  .openapi('GetEvidenceRequest')

const GetInsightsByAssessmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetInsightsByAssessmentRequest' })
  .openapi('GetInsightsByAssessmentRequest')

const GetInsightsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetInsightsRequest' })
  .openapi('GetInsightsRequest')

const GetOrganizationAdminAccountRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetOrganizationAdminAccountRequest' })
  .openapi('GetOrganizationAdminAccountRequest')

const GetServicesInScopeRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetServicesInScopeRequest' })
  .openapi('GetServicesInScopeRequest')

const SettingAttributeSchema = z
  .enum([
    'ALL',
    'IS_AWS_ORG_ENABLED',
    'SNS_TOPIC',
    'DEFAULT_ASSESSMENT_REPORTS_DESTINATION',
    'DEFAULT_PROCESS_OWNERS',
    'EVIDENCE_FINDER_ENABLEMENT',
    'DEREGISTRATION_POLICY',
  ])
  .openapi('SettingAttribute')

const GetSettingsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'GetSettingsRequest' })
  .openapi('GetSettingsRequest')

const ListAssessmentControlInsightsByControlDomainRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssessmentControlInsightsByControlDomainRequest' })
  .openapi('ListAssessmentControlInsightsByControlDomainRequest')

const ListAssessmentFrameworkShareRequestsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssessmentFrameworkShareRequestsRequest' })
  .openapi('ListAssessmentFrameworkShareRequestsRequest')

const ListAssessmentFrameworksRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssessmentFrameworksRequest' })
  .openapi('ListAssessmentFrameworksRequest')

const ListAssessmentReportsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssessmentReportsRequest' })
  .openapi('ListAssessmentReportsRequest')

const ListAssessmentsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListAssessmentsRequest' })
  .openapi('ListAssessmentsRequest')

const ListControlDomainInsightsByAssessmentRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListControlDomainInsightsByAssessmentRequest' })
  .openapi('ListControlDomainInsightsByAssessmentRequest')

const ListControlDomainInsightsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListControlDomainInsightsRequest' })
  .openapi('ListControlDomainInsightsRequest')

const ListControlInsightsByControlDomainRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListControlInsightsByControlDomainRequest' })
  .openapi('ListControlInsightsByControlDomainRequest')

const ListControlsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListControlsRequest' })
  .openapi('ListControlsRequest')

const ListKeywordsForDataSourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListKeywordsForDataSourceRequest' })
  .openapi('ListKeywordsForDataSourceRequest')

const ListNotificationsRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListNotificationsRequest' })
  .openapi('ListNotificationsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RegisterAccountRequestSchema = z
  .object({
    kmsKey: KmsKeySchema.exactOptional().openapi({ description: ' The KMS key details. ' }),
    delegatedAdminAccount: AccountIdSchema.exactOptional().openapi({
      description: ' The delegated administrator account for Audit Manager. ',
    }),
  })
  .openapi({ title: 'RegisterAccountRequest', required: [] })
  .openapi('RegisterAccountRequest')

const RegisterOrganizationAdminAccountRequestSchema = z
  .object({
    adminAccountId: AccountIdSchema.openapi({
      description: ' The identifier for the delegated administrator account. ',
    }),
  })
  .openapi({ required: ['adminAccountId'], title: 'RegisterOrganizationAdminAccountRequest' })
  .openapi('RegisterOrganizationAdminAccountRequest')

const ShareRequestActionSchema = z
  .enum(['ACCEPT', 'DECLINE', 'REVOKE'])
  .openapi('ShareRequestAction')

const SnsArnSchema = z
  .string()
  .regex(/^arn:.*:sns:.*|NONE/)
  .min(4)
  .max(2048)
  .openapi('SnsArn')

const StartAssessmentFrameworkShareRequestSchema = z
  .object({
    destinationAccount: AccountIdSchema.openapi({
      description: ' The Amazon Web Services account of the recipient. ',
    }),
    destinationRegion: RegionSchema.openapi({
      description: ' The Amazon Web Services Region of the recipient. ',
    }),
    comment: ShareRequestCommentSchema.exactOptional().openapi({
      description: ' An optional comment from the sender about the share request. ',
    }),
  })
  .openapi({
    required: ['destinationAccount', 'destinationRegion'],
    title: 'StartAssessmentFrameworkShareRequest',
  })
  .openapi('StartAssessmentFrameworkShareRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.openapi({
      description: ' The tags that are associated with the resource. ',
    }),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .looseObject({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAssessmentControlRequestSchema = z
  .object({
    controlStatus: ControlStatusSchema.exactOptional().openapi({
      description: ' The status of the control. ',
    }),
    commentBody: ControlCommentBodySchema.exactOptional().openapi({
      description: ' The comment body text for the control. ',
    }),
  })
  .openapi({ title: 'UpdateAssessmentControlRequest', required: [] })
  .openapi('UpdateAssessmentControlRequest')

const UpdateAssessmentControlSetStatusRequestSchema = z
  .object({
    status: ControlSetStatusSchema.openapi({
      description: " The status of the control set that's being updated. ",
    }),
    comment: DelegationCommentSchema.openapi({
      description: " The comment that's related to the status update. ",
    }),
  })
  .openapi({ required: ['status', 'comment'], title: 'UpdateAssessmentControlSetStatusRequest' })
  .openapi('UpdateAssessmentControlSetStatusRequest')

const UpdateAssessmentFrameworkControlSetsSchema = z
  .array(UpdateAssessmentFrameworkControlSetSchema)
  .min(1)
  .openapi('UpdateAssessmentFrameworkControlSets')

const UpdateAssessmentFrameworkRequestSchema = z
  .object({
    name: FrameworkNameSchema.openapi({
      description: ' The name of the framework to be updated. ',
    }),
    description: FrameworkDescriptionSchema.exactOptional().openapi({
      description: ' The description of the updated framework. ',
    }),
    complianceType: ComplianceTypeSchema.exactOptional().openapi({
      description:
        ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
    }),
    controlSets: UpdateAssessmentFrameworkControlSetsSchema.openapi({
      description: ' The control sets that are associated with the framework. ',
    }),
  })
  .openapi({ required: ['name', 'controlSets'], title: 'UpdateAssessmentFrameworkRequest' })
  .openapi('UpdateAssessmentFrameworkRequest')

const UpdateAssessmentFrameworkShareRequestSchema = z
  .object({
    requestType: ShareRequestTypeSchema.openapi({
      description: 'Specifies whether the share request is a sent request or a received request.',
    }),
    action: ShareRequestActionSchema.openapi({
      description: 'Specifies the update action for the share request.',
    }),
  })
  .openapi({ required: ['requestType', 'action'], title: 'UpdateAssessmentFrameworkShareRequest' })
  .openapi('UpdateAssessmentFrameworkShareRequest')

const UpdateAssessmentRequestSchema = z
  .object({
    assessmentName: AssessmentNameSchema.exactOptional().openapi({
      description: ' The name of the assessment to be updated. ',
    }),
    assessmentDescription: AssessmentDescriptionSchema.exactOptional().openapi({
      description: ' The description of the assessment. ',
    }),
    scope: ScopeSchema.openapi({ description: ' The scope of the assessment. ' }),
    assessmentReportsDestination: AssessmentReportsDestinationSchema.exactOptional().openapi({
      description:
        " The assessment report storage destination for the assessment that's being updated. ",
    }),
    roles: RolesSchema.exactOptional().openapi({
      description: ' The list of roles for the assessment. ',
    }),
  })
  .openapi({ required: ['scope'], title: 'UpdateAssessmentRequest' })
  .openapi('UpdateAssessmentRequest')

const UpdateAssessmentStatusRequestSchema = z
  .object({
    status: AssessmentStatusSchema.openapi({
      description: ' The current status of the assessment. ',
    }),
  })
  .openapi({ required: ['status'], title: 'UpdateAssessmentStatusRequest' })
  .openapi('UpdateAssessmentStatusRequest')

const UpdateControlRequestSchema = z
  .object({
    name: ControlNameSchema.openapi({ description: ' The name of the updated control. ' }),
    description: ControlDescriptionSchema.exactOptional().openapi({
      description: ' The optional description of the control. ',
    }),
    testingInformation: TestingInformationSchema.exactOptional().openapi({
      description: ' The steps that you should follow to determine if the control is met. ',
    }),
    actionPlanTitle: ActionPlanTitleSchema.exactOptional().openapi({
      description: ' The title of the action plan for remediating the control. ',
    }),
    actionPlanInstructions: ActionPlanInstructionsSchema.exactOptional().openapi({
      description: " The recommended actions to carry out if the control isn't fulfilled. ",
    }),
    controlMappingSources: ControlMappingSourcesSchema.openapi({
      description: ' The data mapping sources for the control. ',
    }),
  })
  .openapi({ required: ['name', 'controlMappingSources'], title: 'UpdateControlRequest' })
  .openapi('UpdateControlRequest')

const UpdateSettingsRequestSchema = z
  .object({
    snsTopic: SnsArnSchema.exactOptional().openapi({
      description:
        ' The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to. ',
    }),
    defaultAssessmentReportsDestination: AssessmentReportsDestinationSchema.exactOptional().openapi(
      { description: ' The default storage destination for assessment reports. ' },
    ),
    defaultProcessOwners: RolesSchema.exactOptional().openapi({
      description: ' A list of the default audit owners. ',
    }),
    kmsKey: KmsKeySchema.exactOptional().openapi({ description: ' The KMS key details. ' }),
    evidenceFinderEnabled: BooleanSchema.exactOptional().openapi({
      description:
        '<p>Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.</p> <important> <p>When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a> Audit Manager. </p> </important>',
    }),
    deregistrationPolicy: DeregistrationPolicySchema.exactOptional().openapi({
      description:
        'The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager.',
    }),
  })
  .openapi({ title: 'UpdateSettingsRequest', required: [] })
  .openapi('UpdateSettingsRequest')

const ValidateAssessmentReportIntegrityRequestSchema = z
  .object({
    s3RelativePath: S3UrlSchema.openapi({
      description:
        ' The relative path of the Amazon S3 bucket that the assessment report is stored in. ',
    }),
  })
  .openapi({ required: ['s3RelativePath'], title: 'ValidateAssessmentReportIntegrityRequest' })
  .openapi('ValidateAssessmentReportIntegrityRequest')

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

export const putAssessmentsAssessmentIdAssociateToAssessmentReportRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/associateToAssessmentReport',
  description:
    ' Associates an evidence folder to an assessment report in an Audit Manager assessment. ',
  operationId: 'AssociateAssessmentReportEvidenceFolder',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              evidenceFolderId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .openapi({
                  description: ' The identifier for the folder that the evidence is stored in. ',
                }),
            })
            .openapi({ required: ['evidenceFolderId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: AssociateAssessmentReportEvidenceFolderResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdBatchAssociateToAssessmentReportRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/batchAssociateToAssessmentReport',
  description:
    ' Associates a list of evidence to an assessment report in an Audit Manager assessment. ',
  operationId: 'BatchAssociateAssessmentReportEvidence',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              evidenceFolderId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .openapi({
                  description: ' The identifier for the folder that the evidence is stored in. ',
                }),
              evidenceIds: z
                .array(UUIDSchema)
                .min(0)
                .max(50)
                .openapi({ description: ' The list of evidence identifiers. ' }),
            })
            .openapi({ required: ['evidenceFolderId', 'evidenceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BatchAssociateAssessmentReportEvidenceResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdDelegationsRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/delegations',
  description: ' Deletes a batch of delegations for an assessment in Audit Manager. ',
  operationId: 'BatchDeleteDelegationByAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              delegationIds: z
                .array(UUIDSchema)
                .min(1)
                .max(50)
                .openapi({ description: ' The identifiers for the delegations. ' }),
            })
            .openapi({ required: ['delegationIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchDeleteDelegationByAssessmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const postAssessmentsAssessmentIdDelegationsRoute = createRoute({
  method: 'post',
  path: '/assessments/{assessmentId}/delegations',
  description: ' Creates a batch of delegations for an assessment in Audit Manager. ',
  operationId: 'BatchCreateDelegationByAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              createDelegationRequests: z
                .array(CreateDelegationRequestSchema)
                .min(1)
                .max(50)
                .openapi({
                  description: ' The API request to batch create delegations in Audit Manager. ',
                }),
            })
            .openapi({ required: ['createDelegationRequests'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: BatchCreateDelegationByAssessmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const putAssessmentsAssessmentIdBatchDisassociateFromAssessmentReportRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/batchDisassociateFromAssessmentReport',
  description: ' Disassociates a list of evidence from an assessment report in Audit Manager. ',
  operationId: 'BatchDisassociateAssessmentReportEvidence',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              evidenceFolderId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .openapi({
                  description: ' The identifier for the folder that the evidence is stored in. ',
                }),
              evidenceIds: z
                .array(UUIDSchema)
                .min(0)
                .max(50)
                .openapi({ description: ' The list of evidence identifiers. ' }),
            })
            .openapi({ required: ['evidenceFolderId', 'evidenceIds'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: BatchDisassociateAssessmentReportEvidenceResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdEvidenceRoute =
  createRoute({
    method: 'post',
    path: '/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}/evidence',
    description:
      '<p>Uploads one or more pieces of evidence to a control in an Audit Manager assessment. You can upload manual evidence from any Amazon Simple Storage Service (Amazon S3) bucket by specifying the S3 URI of the evidence. </p> <p>You must upload manual evidence to your S3 bucket before you can upload it to your assessment. For instructions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html">CreateBucket</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html">PutObject</a> in the <i>Amazon Simple Storage Service API Reference.</i> </p> <p>The following restrictions apply to this action:</p> <ul> <li> <p>Maximum size of an individual evidence file: 100 MB</p> </li> <li> <p>Number of daily manual evidence uploads per control: 100</p> </li> <li> <p>Supported file formats: See <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/upload-evidence.html#supported-manual-evidence-files">Supported file types for manual evidence</a> in the <i>Audit Manager User Guide</i> </p> </li> </ul> <p>For more information about Audit Manager service restrictions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/service-quotas.html">Quotas and restrictions for Audit Manager</a>.</p>',
    operationId: 'BatchImportEvidenceToAssessmentControl',
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
        assessmentId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'assessmentId',
              in: 'path',
              required: true,
              description: ' The identifier for the assessment. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        controlSetId: z
          .string()
          .regex(/^[\w\W\s\S]*$/)
          .min(1)
          .max(300)
          .openapi({
            param: {
              name: 'controlSetId',
              in: 'path',
              required: true,
              description: ' The identifier for the control set. ',
              schema: {
                type: 'string',
                pattern: '^[\\w\\W\\s\\S]*$',
                minLength: 1,
                maxLength: 300,
              },
            },
          }),
        controlId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'controlId',
              in: 'path',
              required: true,
              description: ' The identifier for the control. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                manualEvidence: z
                  .array(ManualEvidenceSchema)
                  .min(1)
                  .max(50)
                  .openapi({ description: ' The list of manual evidence objects. ' }),
              })
              .openapi({ required: ['manualEvidence'] }),
          },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: BatchImportEvidenceToAssessmentControlResponseSchema },
        },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const getAssessmentsRoute = createRoute({
  method: 'get',
  path: '/assessments',
  description: ' Returns a list of current and past assessments from Audit Manager. ',
  operationId: 'ListAssessments',
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
      status: z
        .enum(['ACTIVE', 'INACTIVE'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: ' The current status of the assessment.',
            schema: { type: 'string', enum: ['ACTIVE', 'INACTIVE'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postAssessmentsRoute = createRoute({
  method: 'post',
  path: '/assessments',
  description: ' Creates an assessment in Audit Manager. ',
  operationId: 'CreateAssessment',
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
              name: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the assessment to be created. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: ' The optional description of the assessment to be created. ',
                }),
              assessmentReportsDestination: z
                .object({
                  destinationType: AssessmentReportDestinationTypeSchema.exactOptional().openapi({
                    description: ' The destination type, such as Amazon S3. ',
                  }),
                  destination: S3UrlSchema.exactOptional().openapi({
                    description: ' The destination of the assessment report. ',
                  }),
                })
                .openapi({
                  description:
                    ' The location where Audit Manager saves assessment reports for the given assessment. ',
                  required: [],
                }),
              scope: z
                .object({
                  awsAccounts: AWSAccountsSchema.exactOptional().openapi({
                    description:
                      ' The Amazon Web Services accounts that are included in the scope of the assessment. ',
                  }),
                  awsServices: AWSServicesSchema.exactOptional().openapi({
                    description:
                      ' The Amazon Web Services services that are included in the scope of the assessment. ',
                  }),
                })
                .openapi({
                  description:
                    ' The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. ',
                  required: [],
                }),
              roles: z
                .array(RoleSchema)
                .openapi({ description: ' The list of roles for the assessment. ' }),
              frameworkId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .openapi({
                  description:
                    ' The identifier for the framework that the assessment will be created from. ',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tags that are associated with the assessment. ' }),
            })
            .openapi({
              required: ['name', 'assessmentReportsDestination', 'scope', 'roles', 'frameworkId'],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssessmentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postAssessmentFrameworksRoute = createRoute({
  method: 'post',
  path: '/assessmentFrameworks',
  description: ' Creates a custom framework in Audit Manager. ',
  operationId: 'CreateAssessmentFramework',
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
              name: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the new custom framework. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: ' An optional description for the new custom framework. ',
                }),
              complianceType: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
                }),
              controlSets: z
                .array(CreateAssessmentFrameworkControlSetSchema)
                .min(1)
                .openapi({
                  description: ' The control sets that are associated with the framework. ',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tags that are associated with the framework. ' }),
            })
            .openapi({ required: ['name', 'controlSets'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssessmentFrameworkResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const postAssessmentsAssessmentIdReportsRoute = createRoute({
  method: 'post',
  path: '/assessments/{assessmentId}/reports',
  description: ' Creates an assessment report for the specified assessment. ',
  operationId: 'CreateAssessmentReport',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/^[a-zA-Z0-9-_\.]+$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the new assessment report. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description of the assessment report. ' }),
              queryStatement: z
                .string()
                .regex(/\(\?s\).*/)
                .min(1)
                .max(10000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>A SQL statement that represents an evidence finder query.</p> <p>Provide this parameter when you want to generate an assessment report from the results of an evidence finder search query. When you use this parameter, Audit Manager generates a one-time report using only the evidence from the query output. This report does not include any assessment evidence that was manually <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#generate-assessment-report-include-evidence">added to a report using the console</a>, or <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_BatchAssociateAssessmentReportEvidence.html">associated with a report using the API</a>. </p> <p>To use this parameter, the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_EvidenceFinderEnablement.html#auditmanager-Type-EvidenceFinderEnablement-enablementStatus">enablementStatus</a> of evidence finder must be <code>ENABLED</code>. </p> <p> For examples and help resolving <code>queryStatement</code> validation exceptions, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-finder-issues.html#querystatement-exceptions">Troubleshooting evidence finder issues</a> in the <i>Audit Manager User Guide.</i> </p>',
                }),
            })
            .openapi({ required: ['name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateAssessmentReportResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postControlsRoute = createRoute({
  method: 'post',
  path: '/controls',
  description: ' Creates a new custom control in Audit Manager. ',
  operationId: 'CreateControl',
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
              name: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the control. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description of the control. ' }),
              testingInformation: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description: ' The steps to follow to determine if the control is satisfied. ',
                }),
              actionPlanTitle: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(300)
                .exactOptional()
                .openapi({
                  description: ' The title of the action plan for remediating the control. ',
                }),
              actionPlanInstructions: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    " The recommended actions to carry out if the control isn't fulfilled. ",
                }),
              controlMappingSources: z
                .array(CreateControlMappingSourceSchema)
                .min(1)
                .openapi({ description: ' The data mapping sources for the control. ' }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 0)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: ' The tags that are associated with the control. ' }),
            })
            .openapi({ required: ['name', 'controlMappingSources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateControlResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const getAssessmentsAssessmentIdRoute = createRoute({
  method: 'get',
  path: '/assessments/{assessmentId}',
  description: 'Returns an assessment from Audit Manager. ',
  operationId: 'GetAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssessmentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}',
  description: ' Edits an Audit Manager assessment. ',
  operationId: 'UpdateAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              assessmentName: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .exactOptional()
                .openapi({ description: ' The name of the assessment to be updated. ' }),
              assessmentDescription: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description of the assessment. ' }),
              scope: z
                .object({
                  awsAccounts: AWSAccountsSchema.exactOptional().openapi({
                    description:
                      ' The Amazon Web Services accounts that are included in the scope of the assessment. ',
                  }),
                  awsServices: AWSServicesSchema.exactOptional().openapi({
                    description:
                      ' The Amazon Web Services services that are included in the scope of the assessment. ',
                  }),
                })
                .openapi({
                  description:
                    ' The wrapper that contains the Amazon Web Services accounts and services that are in scope for the assessment. ',
                  required: [],
                }),
              assessmentReportsDestination: z
                .object({
                  destinationType: AssessmentReportDestinationTypeSchema.exactOptional().openapi({
                    description: ' The destination type, such as Amazon S3. ',
                  }),
                  destination: S3UrlSchema.exactOptional().openapi({
                    description: ' The destination of the assessment report. ',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' The location where Audit Manager saves assessment reports for the given assessment. ',
                  required: [],
                }),
              roles: z
                .array(RoleSchema)
                .exactOptional()
                .openapi({ description: ' The list of roles for the assessment. ' }),
            })
            .openapi({ required: ['scope'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssessmentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteAssessmentsAssessmentIdRoute = createRoute({
  method: 'delete',
  path: '/assessments/{assessmentId}',
  description: ' Deletes an assessment in Audit Manager. ',
  operationId: 'DeleteAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssessmentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentFrameworksFrameworkIdRoute = createRoute({
  method: 'get',
  path: '/assessmentFrameworks/{frameworkId}',
  description: 'Returns a framework from Audit Manager. ',
  operationId: 'GetAssessmentFramework',
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
      frameworkId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'frameworkId',
            in: 'path',
            required: true,
            description: ' The identifier for the framework. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssessmentFrameworkResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putAssessmentFrameworksFrameworkIdRoute = createRoute({
  method: 'put',
  path: '/assessmentFrameworks/{frameworkId}',
  description: ' Updates a custom framework in Audit Manager. ',
  operationId: 'UpdateAssessmentFramework',
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
      frameworkId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'frameworkId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the framework. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the framework to be updated. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The description of the updated framework. ' }),
              complianceType: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    ' The compliance type that the new custom framework supports, such as CIS or HIPAA. ',
                }),
              controlSets: z
                .array(UpdateAssessmentFrameworkControlSetSchema)
                .min(1)
                .openapi({
                  description: ' The control sets that are associated with the framework. ',
                }),
            })
            .openapi({ required: ['name', 'controlSets'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssessmentFrameworkResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteAssessmentFrameworksFrameworkIdRoute = createRoute({
  method: 'delete',
  path: '/assessmentFrameworks/{frameworkId}',
  description: ' Deletes a custom framework in Audit Manager. ',
  operationId: 'DeleteAssessmentFramework',
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
      frameworkId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'frameworkId',
            in: 'path',
            required: true,
            description: ' The identifier for the custom framework. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssessmentFrameworkResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteAssessmentFrameworkShareRequestsRequestIdRequestTypeRoute = createRoute({
  method: 'delete',
  path: '/assessmentFrameworkShareRequests/{requestId}#requestType',
  description: ' Deletes a share request for a custom framework in Audit Manager. ',
  operationId: 'DeleteAssessmentFrameworkShare',
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
      requestId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'requestId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the share request to be deleted.',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      requestType: z
        .enum(['SENT', 'RECEIVED'])
        .openapi({
          param: {
            name: 'requestType',
            in: 'query',
            required: true,
            description:
              'Specifies whether the share request is a sent request or a received request.',
            schema: { type: 'string', enum: ['SENT', 'RECEIVED'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssessmentFrameworkShareResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteAssessmentsAssessmentIdReportsAssessmentReportIdRoute = createRoute({
  method: 'delete',
  path: '/assessments/{assessmentId}/reports/{assessmentReportId}',
  description:
    '<p>Deletes an assessment report in Audit Manager. </p> <p>When you run the <code>DeleteAssessmentReport</code> operation, Audit Manager attempts to delete the following data:</p> <ol> <li> <p>The specified assessment report that’s stored in your S3 bucket</p> </li> <li> <p>The associated metadata that’s stored in Audit Manager</p> </li> </ol> <p>If Audit Manager can’t access the assessment report in your S3 bucket, the report isn’t deleted. In this event, the <code>DeleteAssessmentReport</code> operation doesn’t fail. Instead, it proceeds to delete the associated metadata only. You must then delete the assessment report from the S3 bucket yourself. </p> <p>This scenario happens when Audit Manager receives a <code>403 (Forbidden)</code> or <code>404 (Not Found)</code> error from Amazon S3. To avoid this, make sure that your S3 bucket is available, and that you configured the correct permissions for Audit Manager to delete resources in your S3 bucket. For an example permissions policy that you can use, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/security_iam_id-based-policy-examples.html#full-administrator-access-assessment-report-destination">Assessment report destination permissions</a> in the <i>Audit Manager User Guide</i>. For information about the issues that could cause a <code>403 (Forbidden)</code> or <code>404 (Not Found</code>) error from Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#ErrorCodeList">List of Error Codes</a> in the <i>Amazon Simple Storage Service API Reference</i>. </p>',
  operationId: 'DeleteAssessmentReport',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      assessmentReportId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentReportId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment report. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteAssessmentReportResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getControlsControlIdRoute = createRoute({
  method: 'get',
  path: '/controls/{controlId}',
  description: ' Returns a control from Audit Manager. ',
  operationId: 'GetControl',
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
      controlId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlId',
            in: 'path',
            required: true,
            description: ' The identifier for the control. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetControlResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putControlsControlIdRoute = createRoute({
  method: 'put',
  path: '/controls/{controlId}',
  description: ' Updates a custom control in Audit Manager. ',
  operationId: 'UpdateControl',
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
      controlId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlId',
            in: 'path',
            required: true,
            description: ' The identifier for the control. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .regex(/^[^\\]*$/)
                .min(1)
                .max(300)
                .openapi({ description: ' The name of the updated control. ' }),
              description: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({ description: ' The optional description of the control. ' }),
              testingInformation: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    ' The steps that you should follow to determine if the control is met. ',
                }),
              actionPlanTitle: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(300)
                .exactOptional()
                .openapi({
                  description: ' The title of the action plan for remediating the control. ',
                }),
              actionPlanInstructions: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    " The recommended actions to carry out if the control isn't fulfilled. ",
                }),
              controlMappingSources: z
                .array(ControlMappingSourceSchema)
                .min(1)
                .openapi({ description: ' The data mapping sources for the control. ' }),
            })
            .openapi({ required: ['name', 'controlMappingSources'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateControlResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteControlsControlIdRoute = createRoute({
  method: 'delete',
  path: '/controls/{controlId}',
  description: ' Deletes a custom control in Audit Manager. ',
  operationId: 'DeleteControl',
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
      controlId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the control. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteControlResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postAccountDeregisterAccountRoute = createRoute({
  method: 'post',
  path: '/account/deregisterAccount',
  description:
    '<p> Deregisters an account in Audit Manager. </p> <note> <p>Before you deregister, you can use the <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_UpdateSettings.html">UpdateSettings</a> API operation to set your preferred data retention policy. By default, Audit Manager retains your data. If you want to delete your data, you can use the <code>DeregistrationPolicy</code> attribute to request the deletion of your data. </p> <p>For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>. </p> </note>',
  operationId: 'DeregisterAccount',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeregisterAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAccountDeregisterOrganizationAdminAccountRoute = createRoute({
  method: 'post',
  path: '/account/deregisterOrganizationAdminAccount',
  description:
    '<p>Removes the specified Amazon Web Services account as a delegated administrator for Audit Manager. </p> <p>When you remove a delegated administrator from your Audit Manager settings, you continue to have access to the evidence that you previously collected under that account. This is also the case when you deregister a delegated administrator from Organizations. However, Audit Manager stops collecting and attaching evidence to that delegated administrator account moving forward.</p> <important> <p>Keep in mind the following cleanup task if you use evidence finder:</p> <p>Before you use your management account to remove a delegated administrator, make sure that the current delegated administrator account signs in to Audit Manager and disables evidence finder first. Disabling evidence finder automatically deletes the event data store that was created in their account when they enabled evidence finder. If this task isn’t completed, the event data store remains in their account. In this case, we recommend that the original delegated administrator goes to CloudTrail Lake and manually <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-eds-disable-termination.html">deletes the event data store</a>.</p> <p>This cleanup task is necessary to ensure that you don\'t end up with multiple event data stores. Audit Manager ignores an unused event data store after you remove or change a delegated administrator account. However, the unused event data store continues to incur storage costs from CloudTrail Lake if you don\'t delete it.</p> </important> <p>When you deregister a delegated administrator account for Audit Manager, the data for that account isn’t deleted. If you want to delete resource data for a delegated administrator account, you must perform that task separately before you deregister the account. Either, you can do this in the Audit Manager console. Or, you can use one of the delete API operations that are provided by Audit Manager. </p> <p>To delete your Audit Manager resource data, see the following instructions: </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessment.html">DeleteAssessment</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-assessment.html">Deleting an assessment</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFramework.html">DeleteAssessmentFramework</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-custom-framework.html">Deleting a custom framework</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentFrameworkShare.html">DeleteAssessmentFrameworkShare</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/deleting-shared-framework-requests.html">Deleting a share request</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteAssessmentReport.html">DeleteAssessmentReport</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/generate-assessment-report.html#delete-assessment-report-steps">Deleting an assessment report</a> in the <i>Audit Manager User Guide</i>)</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeleteControl.html">DeleteControl</a> (see also: <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/delete-controls.html">Deleting a custom control</a> in the <i>Audit Manager User Guide</i>)</p> </li> </ul> <p>At this time, Audit Manager doesn\'t provide an option to delete evidence for a specific delegated administrator. Instead, when your management account deregisters Audit Manager, we perform a cleanup for the current delegated administrator account at the time of deregistration.</p>',
  operationId: 'DeregisterOrganizationAdminAccount',
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
              adminAccountId: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: ' The identifier for the administrator account. ' }),
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
      content: { 'application/json': { schema: DeregisterOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdDisassociateFromAssessmentReportRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/disassociateFromAssessmentReport',
  description:
    ' Disassociates an evidence folder from the specified assessment report in Audit Manager. ',
  operationId: 'DisassociateAssessmentReportEvidenceFolder',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              evidenceFolderId: z
                .string()
                .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
                .length(36)
                .openapi({
                  description:
                    ' The unique identifier for the folder that the evidence is stored in. ',
                }),
            })
            .openapi({ required: ['evidenceFolderId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: DisassociateAssessmentReportEvidenceFolderResponseSchema },
      },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAccountStatusRoute = createRoute({
  method: 'get',
  path: '/account/status',
  description: ' Returns the registration status of an account in Audit Manager. ',
  operationId: 'GetAccountStatus',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountStatusResponseSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentsAssessmentIdReportsAssessmentReportIdUrlRoute = createRoute({
  method: 'get',
  path: '/assessments/{assessmentId}/reports/{assessmentReportId}/url',
  description: ' Returns the URL of an assessment report in Audit Manager. ',
  operationId: 'GetAssessmentReportUrl',
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
      assessmentReportId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentReportId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment report. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssessmentReportUrlResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getAssessmentsAssessmentIdChangelogsRoute = createRoute({
  method: 'get',
  path: '/assessments/{assessmentId}/changelogs',
  description: ' Returns a list of changelogs from Audit Manager. ',
  operationId: 'GetChangeLogs',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      controlSetId: z
        .string()
        .regex(/^[\w\W\s\S]*$/)
        .min(1)
        .max(300)
        .exactOptional()
        .openapi({
          param: {
            name: 'controlSetId',
            in: 'query',
            required: false,
            description: ' The unique identifier for the control set. ',
            schema: { type: 'string', pattern: '^[\\w\\W\\s\\S]*$', minLength: 1, maxLength: 300 },
          },
        }),
      controlId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'controlId',
            in: 'query',
            required: false,
            description: ' The unique identifier for the control. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetChangeLogsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const getDelegationsRoute = createRoute({
  method: 'get',
  path: '/delegations',
  description: ' Returns a list of delegations from an audit owner to a delegate. ',
  operationId: 'GetDelegations',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDelegationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceEvidenceIdRoute =
  createRoute({
    method: 'get',
    path: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence/{evidenceId}',
    description: ' Returns evidence from Audit Manager. ',
    operationId: 'GetEvidence',
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
        assessmentId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'assessmentId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the assessment. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        controlSetId: z
          .string()
          .regex(/^[\w\W\s\S]*$/)
          .min(1)
          .max(300)
          .openapi({
            param: {
              name: 'controlSetId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the control set. ',
              schema: {
                type: 'string',
                pattern: '^[\\w\\W\\s\\S]*$',
                minLength: 1,
                maxLength: 300,
              },
            },
          }),
        evidenceFolderId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'evidenceFolderId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the folder that the evidence is stored in. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        evidenceId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'evidenceId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the evidence. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetEvidenceResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdEvidenceRoute =
  createRoute({
    method: 'get',
    path: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}/evidence',
    description: ' Returns all evidence from a specified evidence folder in Audit Manager. ',
    operationId: 'GetEvidenceByEvidenceFolder',
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
        assessmentId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'assessmentId',
              in: 'path',
              required: true,
              description: ' The identifier for the assessment. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        controlSetId: z
          .string()
          .regex(/^[\w\W\s\S]*$/)
          .min(1)
          .max(300)
          .openapi({
            param: {
              name: 'controlSetId',
              in: 'path',
              required: true,
              description: ' The identifier for the control set. ',
              schema: {
                type: 'string',
                pattern: '^[\\w\\W\\s\\S]*$',
                minLength: 1,
                maxLength: 300,
              },
            },
          }),
        evidenceFolderId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'evidenceFolderId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the folder that the evidence is stored in. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
      query: z.object({
        nextToken: z
          .string()
          .regex(/^[A-Za-z0-9+\/=]*$/)
          .min(1)
          .max(1000)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: " The pagination token that's used to fetch the next set of results. ",
              schema: {
                type: 'string',
                pattern: '^[A-Za-z0-9+\\/=]*$',
                minLength: 1,
                maxLength: 1000,
              },
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(1000),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description:
                ' Represents the maximum number of results on a page or for an API request call. ',
              schema: {
                type: 'integer',
                description: 'Max results in the page.',
                minimum: 1,
                maximum: 1000,
              },
            },
            description: 'Max results in the page.',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetEvidenceByEvidenceFolderResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getAssessmentsAssessmentIdControlSetsControlSetIdEvidenceFoldersEvidenceFolderIdRoute =
  createRoute({
    method: 'get',
    path: '/assessments/{assessmentId}/controlSets/{controlSetId}/evidenceFolders/{evidenceFolderId}',
    description: ' Returns an evidence folder from the specified assessment in Audit Manager. ',
    operationId: 'GetEvidenceFolder',
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
        assessmentId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'assessmentId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the assessment. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        controlSetId: z
          .string()
          .regex(/^[\w\W\s\S]*$/)
          .min(1)
          .max(300)
          .openapi({
            param: {
              name: 'controlSetId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the control set. ',
              schema: {
                type: 'string',
                pattern: '^[\\w\\W\\s\\S]*$',
                minLength: 1,
                maxLength: 300,
              },
            },
          }),
        evidenceFolderId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'evidenceFolderId',
              in: 'path',
              required: true,
              description: ' The unique identifier for the folder that the evidence is stored in. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: GetEvidenceFolderResponseSchema } },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getAssessmentsAssessmentIdEvidenceFoldersRoute = createRoute({
  method: 'get',
  path: '/assessments/{assessmentId}/evidenceFolders',
  description: ' Returns the evidence folders from a specified assessment in Audit Manager. ',
  operationId: 'GetEvidenceFoldersByAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEvidenceFoldersByAssessmentResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
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

export const getAssessmentsAssessmentIdEvidenceFoldersByAssessmentControlControlSetIdControlIdRoute =
  createRoute({
    method: 'get',
    path: '/assessments/{assessmentId}/evidenceFolders-by-assessment-control/{controlSetId}/{controlId}',
    description:
      ' Returns a list of evidence folders that are associated with a specified control in an Audit Manager assessment. ',
    operationId: 'GetEvidenceFoldersByAssessmentControl',
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
        assessmentId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'assessmentId',
              in: 'path',
              required: true,
              description: ' The identifier for the assessment. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
        controlSetId: z
          .string()
          .regex(/^[\w\W\s\S]*$/)
          .min(1)
          .max(300)
          .openapi({
            param: {
              name: 'controlSetId',
              in: 'path',
              required: true,
              description: ' The identifier for the control set. ',
              schema: {
                type: 'string',
                pattern: '^[\\w\\W\\s\\S]*$',
                minLength: 1,
                maxLength: 300,
              },
            },
          }),
        controlId: z
          .string()
          .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
          .length(36)
          .openapi({
            param: {
              name: 'controlId',
              in: 'path',
              required: true,
              description: ' The identifier for the control. ',
              schema: {
                type: 'string',
                pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
                minLength: 36,
                maxLength: 36,
              },
            },
          }),
      }),
      query: z.object({
        nextToken: z
          .string()
          .regex(/^[A-Za-z0-9+\/=]*$/)
          .min(1)
          .max(1000)
          .exactOptional()
          .openapi({
            param: {
              name: 'nextToken',
              in: 'query',
              required: false,
              description: " The pagination token that's used to fetch the next set of results. ",
              schema: {
                type: 'string',
                pattern: '^[A-Za-z0-9+\\/=]*$',
                minLength: 1,
                maxLength: 1000,
              },
            },
          }),
        maxResults: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(1000),
          )
          .exactOptional()
          .openapi({
            param: {
              name: 'maxResults',
              in: 'query',
              required: false,
              description:
                ' Represents the maximum number of results on a page or for an API request call. ',
              schema: {
                type: 'integer',
                description: 'Max results in the page.',
                minimum: 1,
                maximum: 1000,
              },
            },
            description: 'Max results in the page.',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: GetEvidenceFoldersByAssessmentControlResponseSchema },
        },
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
        description: 'AccessDeniedException',
        content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
      },
      483: {
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const getInsightsRoute = createRoute({
  method: 'get',
  path: '/insights',
  description: 'Gets the latest analytics data for all your current active assessments. ',
  operationId: 'GetInsights',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInsightsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getInsightsAssessmentsAssessmentIdRoute = createRoute({
  method: 'get',
  path: '/insights/assessments/{assessmentId}',
  description: 'Gets the latest analytics data for a specific active assessment. ',
  operationId: 'GetInsightsByAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetInsightsByAssessmentResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAccountOrganizationAdminAccountRoute = createRoute({
  method: 'get',
  path: '/account/organizationAdminAccount',
  description:
    ' Returns the name of the delegated Amazon Web Services administrator account for the organization. ',
  operationId: 'GetOrganizationAdminAccount',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const getServicesRoute = createRoute({
  method: 'get',
  path: '/services',
  description:
    'Returns a list of all of the Amazon Web Services that you can choose to include in your assessment. When you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_CreateAssessment.html">create an assessment</a>, specify which of these services you want to include to narrow the assessment\'s <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_Scope.html">scope</a>.',
  operationId: 'GetServicesInScope',
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
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetServicesInScopeResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getSettingsAttributeRoute = createRoute({
  method: 'get',
  path: '/settings/{attribute}',
  description: ' Returns the settings for the specified Amazon Web Services account. ',
  operationId: 'GetSettings',
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
      attribute: z
        .enum([
          'ALL',
          'IS_AWS_ORG_ENABLED',
          'SNS_TOPIC',
          'DEFAULT_ASSESSMENT_REPORTS_DESTINATION',
          'DEFAULT_PROCESS_OWNERS',
          'EVIDENCE_FINDER_ENABLEMENT',
          'DEREGISTRATION_POLICY',
        ])
        .openapi({
          param: {
            name: 'attribute',
            in: 'path',
            required: true,
            description: ' The list of setting attribute enum values. ',
            schema: {
              type: 'string',
              enum: [
                'ALL',
                'IS_AWS_ORG_ENABLED',
                'SNS_TOPIC',
                'DEFAULT_ASSESSMENT_REPORTS_DESTINATION',
                'DEFAULT_PROCESS_OWNERS',
                'EVIDENCE_FINDER_ENABLEMENT',
                'DEREGISTRATION_POLICY',
              ],
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSettingsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute = createRoute({
  method: 'get',
  path: '/insights/controls-by-assessment#controlDomainId&assessmentId',
  description:
    '<p>Lists the latest analytics data for controls within a specific control domain and a specific active assessment.</p> <note> <p>Control insights are listed only if the control belongs to the control domain and assessment that was specified. Moreover, the control must have collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsByAssessment</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>',
  operationId: 'ListAssessmentControlInsightsByControlDomain',
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
      controlDomainId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlDomainId',
            in: 'query',
            required: true,
            description: 'The unique identifier for the control domain. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'query',
            required: true,
            description: 'The unique identifier for the active assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: "The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListAssessmentControlInsightsByControlDomainResponseSchema },
      },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentFrameworkShareRequestsRequestTypeRoute = createRoute({
  method: 'get',
  path: '/assessmentFrameworkShareRequests#requestType',
  description:
    ' Returns a list of sent or received share requests for custom frameworks in Audit Manager. ',
  operationId: 'ListAssessmentFrameworkShareRequests',
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
      requestType: z
        .enum(['SENT', 'RECEIVED'])
        .openapi({
          param: {
            name: 'requestType',
            in: 'query',
            required: true,
            description:
              ' Specifies whether the share request is a sent request or a received request.',
            schema: { type: 'string', enum: ['SENT', 'RECEIVED'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListAssessmentFrameworkShareRequestsResponseSchema },
      },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentFrameworksFrameworkTypeRoute = createRoute({
  method: 'get',
  path: '/assessmentFrameworks#frameworkType',
  description:
    ' Returns a list of the frameworks that are available in the Audit Manager framework library. ',
  operationId: 'ListAssessmentFrameworks',
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
      frameworkType: z
        .enum(['Standard', 'Custom'])
        .openapi({
          param: {
            name: 'frameworkType',
            in: 'query',
            required: true,
            description:
              ' The type of framework, such as a standard framework or a custom framework. ',
            schema: { type: 'string', enum: ['Standard', 'Custom'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentFrameworksResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getAssessmentReportsRoute = createRoute({
  method: 'get',
  path: '/assessmentReports',
  description: ' Returns a list of assessment reports created in Audit Manager. ',
  operationId: 'ListAssessmentReports',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssessmentReportsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getInsightsControlDomainsRoute = createRoute({
  method: 'get',
  path: '/insights/control-domains',
  description:
    '<p>Lists the latest analytics data for control domains across all of your active assessments. </p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that control domain.</p> </note>',
  operationId: 'ListControlDomainInsights',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: "The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListControlDomainInsightsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getInsightsControlDomainsByAssessmentAssessmentIdRoute = createRoute({
  method: 'get',
  path: '/insights/control-domains-by-assessment#assessmentId',
  description:
    '<p>Lists analytics data for control domains within a specified active assessment.</p> <note> <p>A control domain is listed only if at least one of the controls within that domain collected evidence on the <code>lastUpdated</code> date of <code>controlDomainInsights</code>. If this condition isn’t met, no data is listed for that domain.</p> </note>',
  operationId: 'ListControlDomainInsightsByAssessment',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'query',
            required: true,
            description: 'The unique identifier for the active assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: "The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ListControlDomainInsightsByAssessmentResponseSchema },
      },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getInsightsControlsControlDomainIdRoute = createRoute({
  method: 'get',
  path: '/insights/controls#controlDomainId',
  description:
    '<p>Lists the latest analytics data for controls within a specific control domain across all active assessments.</p> <note> <p>Control insights are listed only if the control belongs to the control domain that was specified and the control collected evidence on the <code>lastUpdated</code> date of <code>controlInsightsMetadata</code>. If neither of these conditions are met, no data is listed for that control. </p> </note>',
  operationId: 'ListControlInsightsByControlDomain',
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
      controlDomainId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlDomainId',
            in: 'query',
            required: true,
            description: 'The unique identifier for the control domain. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: "The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListControlInsightsByControlDomainResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
  },
})

export const getControlsControlTypeRoute = createRoute({
  method: 'get',
  path: '/controls#controlType',
  description: ' Returns a list of controls from Audit Manager. ',
  operationId: 'ListControls',
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
      controlType: z
        .enum(['Standard', 'Custom'])
        .openapi({
          param: {
            name: 'controlType',
            in: 'query',
            required: true,
            description: ' The type of control, such as a standard control or a custom control. ',
            schema: { type: 'string', enum: ['Standard', 'Custom'] },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListControlsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getDataSourceKeywordsSourceRoute = createRoute({
  method: 'get',
  path: '/dataSourceKeywords#source',
  description:
    ' Returns a list of keywords that are pre-mapped to the specified control data source. ',
  operationId: 'ListKeywordsForDataSource',
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
      source: z
        .enum(['AWS_Cloudtrail', 'AWS_Config', 'AWS_Security_Hub', 'AWS_API_Call', 'MANUAL'])
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            required: true,
            description: ' The control mapping data source that the keywords apply to. ',
            schema: {
              type: 'string',
              enum: ['AWS_Cloudtrail', 'AWS_Config', 'AWS_Security_Hub', 'AWS_API_Call', 'MANUAL'],
            },
          },
        }),
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListKeywordsForDataSourceResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getNotificationsRoute = createRoute({
  method: 'get',
  path: '/notifications',
  description: ' Returns a list of all Audit Manager notifications. ',
  operationId: 'ListNotifications',
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
      nextToken: z
        .string()
        .regex(/^[A-Za-z0-9+\/=]*$/)
        .min(1)
        .max(1000)
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: " The pagination token that's used to fetch the next set of results. ",
            schema: {
              type: 'string',
              pattern: '^[A-Za-z0-9+\\/=]*$',
              minLength: 1,
              maxLength: 1000,
            },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              ' Represents the maximum number of results on a page or for an API request call. ',
            schema: {
              type: 'integer',
              description: 'Max results in the page.',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Max results in the page.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListNotificationsResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: ' Returns a list of tags for the specified resource in Audit Manager. ',
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
        .regex(/^arn:.*:auditmanager:.*/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the resource. ',
            schema: {
              type: 'string',
              pattern: '^arn:.*:auditmanager:.*',
              minLength: 20,
              maxLength: 2048,
            },
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
  description: ' Tags the specified resource in Audit Manager. ',
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
        .regex(/^arn:.*:auditmanager:.*/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the resource. ',
            schema: {
              type: 'string',
              pattern: '^arn:.*:auditmanager:.*',
              minLength: 20,
              maxLength: 2048,
            },
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
                .openapi({ description: ' The tags that are associated with the resource. ' }),
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

export const postAccountRegisterAccountRoute = createRoute({
  method: 'post',
  path: '/account/registerAccount',
  description: ' Enables Audit Manager for the specified Amazon Web Services account. ',
  operationId: 'RegisterAccount',
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
              kmsKey: z
                .string()
                .regex(/^arn:.*:kms:.*|DEFAULT/)
                .min(7)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The KMS key details. ' }),
              delegatedAdminAccount: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .exactOptional()
                .openapi({
                  description: ' The delegated administrator account for Audit Manager. ',
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
      content: { 'application/json': { schema: RegisterAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postAccountRegisterOrganizationAdminAccountRoute = createRoute({
  method: 'post',
  path: '/account/registerOrganizationAdminAccount',
  description:
    ' Enables an Amazon Web Services account within the organization as the delegated administrator for Audit Manager. ',
  operationId: 'RegisterOrganizationAdminAccount',
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
              adminAccountId: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .openapi({
                  description: ' The identifier for the delegated administrator account. ',
                }),
            })
            .openapi({ required: ['adminAccountId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RegisterOrganizationAdminAccountResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postAssessmentFrameworksFrameworkIdShareRequestsRoute = createRoute({
  method: 'post',
  path: '/assessmentFrameworks/{frameworkId}/shareRequests',
  description:
    '<p> Creates a share request for a custom framework in Audit Manager. </p> <p>The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.</p> <p>When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.</p> <p>Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:</p> <ul> <li> <p>The sender revokes the share request.</p> </li> <li> <p>The recipient declines the share request.</p> </li> <li> <p>The recipient encounters an error and doesn\'t successfully accept the share request.</p> </li> <li> <p>The share request expires before the recipient responds to the request.</p> </li> </ul> <p>When a sender <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend">resends a share request</a>, the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework. </p> <p>When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request. </p> <important> <p>When you invoke the <code>StartAssessmentFrameworkShare</code> API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility">Framework sharing eligibility</a> in the <i>Audit Manager User Guide</i>.</p> </important>',
  operationId: 'StartAssessmentFrameworkShare',
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
      frameworkId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'frameworkId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the custom framework to be shared. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destinationAccount: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .openapi({ description: ' The Amazon Web Services account of the recipient. ' }),
              destinationRegion: z
                .string()
                .regex(/^[a-z]{2}-[a-z]+-[0-9]{1}$/)
                .openapi({ description: ' The Amazon Web Services Region of the recipient. ' }),
              comment: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(500)
                .exactOptional()
                .openapi({
                  description: ' An optional comment from the sender about the share request. ',
                }),
            })
            .openapi({ required: ['destinationAccount', 'destinationRegion'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartAssessmentFrameworkShareResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description: ' Removes a tag from a resource in Audit Manager. ',
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
        .regex(/^arn:.*:auditmanager:.*/)
        .min(20)
        .max(2048)
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: ' The Amazon Resource Name (ARN) of the specified resource. ',
            schema: {
              type: 'string',
              pattern: '^arn:.*:auditmanager:.*',
              minLength: 20,
              maxLength: 2048,
            },
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
            description: ' The name or key of the tag. ',
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

export const putAssessmentsAssessmentIdControlSetsControlSetIdControlsControlIdRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/controlSets/{controlSetId}/controls/{controlId}',
  description: ' Updates a control within an assessment in Audit Manager. ',
  operationId: 'UpdateAssessmentControl',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      controlSetId: z
        .string()
        .regex(/^[\w\W\s\S]*$/)
        .min(1)
        .max(300)
        .openapi({
          param: {
            name: 'controlSetId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the control set. ',
            schema: { type: 'string', pattern: '^[\\w\\W\\s\\S]*$', minLength: 1, maxLength: 300 },
          },
        }),
      controlId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'controlId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the control. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              controlStatus: z
                .enum(['UNDER_REVIEW', 'REVIEWED', 'INACTIVE'])
                .exactOptional()
                .openapi({ description: ' The status of the control. ' }),
              commentBody: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(500)
                .exactOptional()
                .openapi({ description: ' The comment body text for the control. ' }),
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
      content: { 'application/json': { schema: UpdateAssessmentControlResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdControlSetsControlSetIdStatusRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/controlSets/{controlSetId}/status',
  description: ' Updates the status of a control set in an Audit Manager assessment. ',
  operationId: 'UpdateAssessmentControlSetStatus',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
      controlSetId: z
        .string()
        .regex(/.*/)
        .min(0)
        .max(2048)
        .openapi({
          param: {
            name: 'controlSetId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the control set. ',
            schema: { type: 'string', pattern: '.*', minLength: 0, maxLength: 2048 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['ACTIVE', 'UNDER_REVIEW', 'REVIEWED'])
                .openapi({ description: " The status of the control set that's being updated. " }),
              comment: z
                .string()
                .regex(/^[\w\W\s\S]*$/)
                .max(350)
                .openapi({ description: " The comment that's related to the status update. " }),
            })
            .openapi({ required: ['status', 'comment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssessmentControlSetStatusResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const putAssessmentFrameworkShareRequestsRequestIdRoute = createRoute({
  method: 'put',
  path: '/assessmentFrameworkShareRequests/{requestId}',
  description: ' Updates a share request for a custom framework in Audit Manager. ',
  operationId: 'UpdateAssessmentFrameworkShare',
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
      requestId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'requestId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the share request. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              requestType: z
                .enum(['SENT', 'RECEIVED'])
                .openapi({
                  description:
                    'Specifies whether the share request is a sent request or a received request.',
                }),
              action: z
                .enum(['ACCEPT', 'DECLINE', 'REVOKE'])
                .openapi({ description: 'Specifies the update action for the share request.' }),
            })
            .openapi({ required: ['requestType', 'action'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssessmentFrameworkShareResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putAssessmentsAssessmentIdStatusRoute = createRoute({
  method: 'put',
  path: '/assessments/{assessmentId}/status',
  description: ' Updates the status of an assessment in Audit Manager. ',
  operationId: 'UpdateAssessmentStatus',
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
      assessmentId: z
        .string()
        .regex(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/)
        .length(36)
        .openapi({
          param: {
            name: 'assessmentId',
            in: 'path',
            required: true,
            description: ' The unique identifier for the assessment. ',
            schema: {
              type: 'string',
              pattern: '^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$',
              minLength: 36,
              maxLength: 36,
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              status: z
                .enum(['ACTIVE', 'INACTIVE'])
                .openapi({ description: ' The current status of the assessment. ' }),
            })
            .openapi({ required: ['status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateAssessmentStatusResponseSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
  },
})

export const putSettingsRoute = createRoute({
  method: 'put',
  path: '/settings',
  description: ' Updates Audit Manager settings for the current account. ',
  operationId: 'UpdateSettings',
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
              snsTopic: z
                .string()
                .regex(/^arn:.*:sns:.*|NONE/)
                .min(4)
                .max(2048)
                .exactOptional()
                .openapi({
                  description:
                    ' The Amazon Simple Notification Service (Amazon SNS) topic that Audit Manager sends notifications to. ',
                }),
              defaultAssessmentReportsDestination: z
                .object({
                  destinationType: AssessmentReportDestinationTypeSchema.exactOptional().openapi({
                    description: ' The destination type, such as Amazon S3. ',
                  }),
                  destination: S3UrlSchema.exactOptional().openapi({
                    description: ' The destination of the assessment report. ',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    ' The location where Audit Manager saves assessment reports for the given assessment. ',
                  required: [],
                }),
              defaultProcessOwners: z
                .array(RoleSchema)
                .exactOptional()
                .openapi({ description: ' A list of the default audit owners. ' }),
              kmsKey: z
                .string()
                .regex(/^arn:.*:kms:.*|DEFAULT/)
                .min(7)
                .max(2048)
                .exactOptional()
                .openapi({ description: ' The KMS key details. ' }),
              evidenceFinderEnabled: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies whether the evidence finder feature is enabled. Change this attribute to enable or disable evidence finder.</p> <important> <p>When you use this attribute to disable evidence finder, Audit Manager deletes the event data store that’s used to query your evidence data. As a result, you can’t re-enable evidence finder and use the feature again. Your only alternative is to <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister</a> and then <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register</a> Audit Manager. </p> </important>',
                }),
              deregistrationPolicy: z
                .object({
                  deleteResources: DeleteResourcesSchema.exactOptional().openapi({
                    description:
                      '<p>Specifies which Audit Manager data will be deleted when you deregister Audit Manager.</p> <ul> <li> <p>If you set the value to <code>ALL</code>, all of your data is deleted within seven days of deregistration.</p> </li> <li> <p>If you set the value to <code>DEFAULT</code>, none of your data is deleted at the time of deregistration. However, keep in mind that the Audit Manager data retention policy still applies. As a result, any evidence data will be deleted two years after its creation date. Your other Audit Manager resources will continue to exist indefinitely.</p> </li> </ul>',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The deregistration policy for the data that\'s stored in Audit Manager. You can use this attribute to determine how your data is handled when you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_DeregisterAccount.html">deregister Audit Manager</a>.</p> <p>By default, Audit Manager retains evidence data for two years from the time of its creation. Other Audit Manager resources (including assessments, custom controls, and custom frameworks) remain in Audit Manager indefinitely, and are available if you <a href="https://docs.aws.amazon.com/audit-manager/latest/APIReference/API_RegisterAccount.html">re-register Audit Manager</a> in the future. For more information about data retention, see <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/data-protection.html">Data Protection</a> in the <i>Audit Manager User Guide</i>.</p> <important> <p>If you choose to delete all data, this action permanently deletes all evidence data in your account within seven days. It also deletes all of the Audit Manager resources that you created, including assessments, custom controls, and custom frameworks. Your data will not be available if you re-register Audit Manager in the future.</p> </important>',
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
      content: { 'application/json': { schema: UpdateSettingsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postAssessmentReportsIntegrityRoute = createRoute({
  method: 'post',
  path: '/assessmentReports/integrity',
  description: ' Validates the integrity of an assessment report in Audit Manager. ',
  operationId: 'ValidateAssessmentReportIntegrity',
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
              s3RelativePath: z
                .string()
                .regex(/^(S|s)3:\/\/[a-zA-Z0-9\-\.\(\)\'\*\_\!\/]+$/)
                .min(1)
                .max(1024)
                .openapi({
                  description:
                    ' The relative path of the Amazon S3 bucket that the assessment report is stored in. ',
                }),
            })
            .openapi({ required: ['s3RelativePath'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ValidateAssessmentReportIntegrityResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})
