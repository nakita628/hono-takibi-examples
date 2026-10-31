import { createRoute, z } from '@hono/zod-openapi'

const LensAliasSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({
    description:
      '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
  })
  .openapi('LensAlias')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ShareIdSchema = z
  .string()
  .regex(/[0-9a-f]{32}/)
  .openapi({ description: 'The ID associated with the workload share.' })
  .openapi('ShareId')

const CreateLensShareOutputSchema = z
  .object({ ShareId: ShareIdSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('CreateLensShareOutput')

const ServiceQuotaExceededExceptionSchema = z.any().openapi('ServiceQuotaExceededException')

const LensArnSchema = z.string().openapi('LensArn')

const LensVersionSchema = z.string().min(1).max(32).openapi('LensVersion')

const CreateLensVersionOutputSchema = z
  .object({
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of the lens.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateLensVersionOutput')

const WorkloadIdSchema = z
  .string()
  .regex(/[0-9a-f]{32}/)
  .openapi({
    description:
      'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
  })
  .openapi('WorkloadId')

const MilestoneNumberSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi({
    description:
      '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
  })
  .openapi('MilestoneNumber')

const CreateMilestoneOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a create milestone call.', required: [] })
  .openapi('CreateMilestoneOutput')

const WorkloadArnSchema = z
  .string()
  .openapi({ description: 'The ARN for the workload.' })
  .openapi('WorkloadArn')

const CreateWorkloadOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadArn: WorkloadArnSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a create workload call.', required: [] })
  .openapi('CreateWorkloadOutput')

const AwsAccountIdSchema = z
  .string()
  .regex(/[0-9]{12}/)
  .openapi({ description: 'An Amazon Web Services account ID.' })
  .openapi('AwsAccountId')

const AwsRegionSchema = z
  .string()
  .max(100)
  .openapi({
    description:
      'An Amazon Web Services Region, for example, <code>us-west-2</code> or <code>ap-northeast-1</code>.',
  })
  .openapi('AwsRegion')

const WorkloadNonAwsRegionSchema = z.string().min(3).max(25).openapi('WorkloadNonAwsRegion')

const PillarIdSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({
    description:
      '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
  })
  .openapi('PillarId')

const TagValueSchema = z.string().min(0).max(256).openapi('TagValue')

const TrustedAdvisorIntegrationStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('TrustedAdvisorIntegrationStatus')

const ApplicationArnSchema = z
  .string()
  .regex(/arn:aws[-a-z]*:servicecatalog:[a-z]{2}(-gov)?-[a-z]+-\d:\d{12}:\/applications\/[a-z0-9]+/)
  .max(2084)
  .openapi('ApplicationArn')

const CreateWorkloadShareOutputSchema = z
  .object({ WorkloadId: WorkloadIdSchema.exactOptional(), ShareId: ShareIdSchema.exactOptional() })
  .openapi({ description: 'Input for Create Workload Share', required: [] })
  .openapi('CreateWorkloadShareOutput')

const LensJSONSchema = z.string().min(2).max(500000).openapi('LensJSON')

const ExportLensOutputSchema = z
  .object({
    LensJSON: LensJSONSchema.and(
      z.any().openapi({ description: 'The JSON representation of a lens.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExportLensOutput')

const QuestionIdSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ description: 'The ID of the question.' })
  .openapi('QuestionId')

const QuestionTitleSchema = z
  .string()
  .min(1)
  .max(512)
  .openapi({ description: 'The title of the question.' })
  .openapi('QuestionTitle')

const QuestionDescriptionSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ description: 'The description of the question.' })
  .openapi('QuestionDescription')

const ImprovementPlanUrlSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({
    description:
      '<p>The improvement plan URL for a question in an Amazon Web Services official lenses.</p> <p>This value is only available if the question has been answered.</p> <p>This value does not apply to custom lenses.</p>',
  })
  .openapi('ImprovementPlanUrl')

const HelpfulResourceUrlSchema = z
  .string()
  .min(1)
  .max(2048)
  .openapi({
    description:
      '<p>The helpful resource URL.</p> <p>For Amazon Web Services official lenses, this is the helpful resource URL for a question or choice.</p> <p>For custom lenses, this is the helpful resource URL for a question and is only provided if <code>HelpfulResourceDisplayText</code> was specified for the question.</p>',
  })
  .openapi('HelpfulResourceUrl')

const DisplayTextSchema = z.string().min(1).max(64).openapi('DisplayText')

const ChoiceIdSchema = z
  .string()
  .min(1)
  .max(64)
  .openapi({ description: 'The ID of a choice.' })
  .openapi('ChoiceId')

const ChoiceTitleSchema = z
  .string()
  .min(1)
  .max(512)
  .openapi({ description: 'The title of a choice.' })
  .openapi('ChoiceTitle')

const ChoiceDescriptionSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ description: 'The description of a choice.' })
  .openapi('ChoiceDescription')

const ChoiceContentDisplayTextSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi('ChoiceContentDisplayText')

const ChoiceContentUrlSchema = z.string().min(1).max(1024).openapi('ChoiceContentUrl')

const ChoiceContentSchema = z
  .object({
    DisplayText: ChoiceContentDisplayTextSchema.and(
      z.any().openapi({ description: 'The display text for the choice content.' }),
    ).exactOptional(),
    Url: ChoiceContentUrlSchema.and(
      z.any().openapi({ description: 'The URL for the choice content.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The choice content.', required: [] })
  .openapi('ChoiceContent')

const AdditionalResourceTypeSchema = z
  .enum(['HELPFUL_RESOURCE', 'IMPROVEMENT_PLAN'])
  .openapi('AdditionalResourceType')

const UrlsSchema = z.array(ChoiceContentSchema).openapi('Urls')

const AdditionalResourcesSchema = z
  .object({
    Type: AdditionalResourceTypeSchema.and(
      z.any().openapi({ description: 'Type of additional resource for a custom lens.' }),
    ).exactOptional(),
    Content: UrlsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URLs for additional resources, either helpful resources or improvement plans, for a custom lens. Up to five additional URLs can be specified.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The choice level additional resources for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p>',
    required: [],
  })
  .openapi('AdditionalResources')

const AdditionalResourcesListSchema = z
  .array(AdditionalResourcesSchema)
  .openapi('AdditionalResourcesList')

const ChoiceSchema = z
  .object({
    ChoiceId: ChoiceIdSchema.exactOptional(),
    Title: ChoiceTitleSchema.exactOptional(),
    Description: ChoiceDescriptionSchema.exactOptional(),
    HelpfulResource: ChoiceContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The helpful resource (both text and URL) for a particular choice.</p> <p>This field only applies to custom lenses. Each choice can have only one helpful resource.</p>',
        }),
    ).exactOptional(),
    ImprovementPlan: ChoiceContentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The improvement plan (both text and URL) for a particular choice.</p> <p>This field only applies to custom lenses. Each choice can have only one improvement plan.</p>',
        }),
    ).exactOptional(),
    AdditionalResources: AdditionalResourcesListSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The additional resources for a choice in a custom lens.</p> <p>A choice can have up to two additional resources: one of type <code>HELPFUL_RESOURCE</code>, one of type <code>IMPROVEMENT_PLAN</code>, or both.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A choice available to answer question.', required: [] })
  .openapi('Choice')

const ChoicesSchema = z
  .array(ChoiceSchema)
  .openapi({ description: 'List of choices available for a question.' })
  .openapi('Choices')

const SelectedChoicesSchema = z
  .array(ChoiceIdSchema)
  .openapi({
    description:
      '<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>',
  })
  .openapi('SelectedChoices')

const ChoiceStatusSchema = z
  .enum(['SELECTED', 'NOT_APPLICABLE', 'UNSELECTED'])
  .openapi('ChoiceStatus')

const ChoiceReasonSchema = z
  .enum(['OUT_OF_SCOPE', 'BUSINESS_PRIORITIES', 'ARCHITECTURE_CONSTRAINTS', 'OTHER', 'NONE'])
  .openapi('ChoiceReason')

const ChoiceNotesSchema = z.string().max(250).openapi('ChoiceNotes')

const ChoiceAnswerSchema = z
  .object({
    ChoiceId: ChoiceIdSchema.exactOptional(),
    Status: ChoiceStatusSchema.and(
      z.any().openapi({ description: 'The status of a choice.' }),
    ).exactOptional(),
    Reason: ChoiceReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason why a choice is non-applicable to a question in your workload.',
        }),
    ).exactOptional(),
    Notes: ChoiceNotesSchema.and(
      z.any().openapi({ description: 'The notes associated with a choice.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A choice that has been answered on a question in your workload.',
    required: [],
  })
  .openapi('ChoiceAnswer')

const ChoiceAnswersSchema = z.array(ChoiceAnswerSchema).openapi('ChoiceAnswers')

const IsApplicableSchema = z
  .boolean()
  .openapi({ description: 'Defines whether this question is applicable to a lens review.' })
  .openapi('IsApplicable')

const RiskSchema = z
  .enum(['UNANSWERED', 'HIGH', 'MEDIUM', 'NONE', 'NOT_APPLICABLE'])
  .openapi({ description: 'The risk for a given workload, lens review, pillar, or question.' })
  .openapi('Risk')

const NotesSchema = z
  .string()
  .max(2084)
  .openapi({ description: 'The notes associated with the workload.' })
  .openapi('Notes')

const AnswerReasonSchema = z
  .enum(['OUT_OF_SCOPE', 'BUSINESS_PRIORITIES', 'ARCHITECTURE_CONSTRAINTS', 'OTHER', 'NONE'])
  .openapi('AnswerReason')

const AnswerSchema = z
  .object({
    QuestionId: QuestionIdSchema.exactOptional(),
    PillarId: PillarIdSchema.exactOptional(),
    QuestionTitle: QuestionTitleSchema.exactOptional(),
    QuestionDescription: QuestionDescriptionSchema.exactOptional(),
    ImprovementPlanUrl: ImprovementPlanUrlSchema.exactOptional(),
    HelpfulResourceUrl: HelpfulResourceUrlSchema.exactOptional(),
    HelpfulResourceDisplayText: DisplayTextSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The helpful resource text to be displayed for a custom lens.</p> <p>This field does not apply to Amazon Web Services official lenses.</p>',
        }),
    ).exactOptional(),
    Choices: ChoicesSchema.exactOptional(),
    SelectedChoices: SelectedChoicesSchema.exactOptional(),
    ChoiceAnswers: ChoiceAnswersSchema.and(
      z
        .any()
        .openapi({ description: 'A list of selected choices to a question in your workload.' }),
    ).exactOptional(),
    IsApplicable: IsApplicableSchema.exactOptional(),
    Risk: RiskSchema.exactOptional(),
    Notes: NotesSchema.exactOptional(),
    Reason: AnswerReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason why the question is not applicable to your workload.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An answer of the question.', required: [] })
  .openapi('Answer')

const GetAnswerOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    Answer: AnswerSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a get answer call.', required: [] })
  .openapi('GetAnswerOutput')

const MetricTypeSchema = z.literal('WORKLOAD').openapi('MetricType')

const CountSchema = z
  .int()
  .min(0)
  .openapi({ description: 'A non-negative integer that denotes how many.' })
  .openapi('Count')

const RiskCountsSchema = z
  .record(z.string(), CountSchema)
  .openapi({
    description: 'A map from risk names to the count of how many questions have that rating.',
  })
  .openapi('RiskCounts')

const WorkloadNameSchema = z
  .string()
  .min(3)
  .max(100)
  .openapi({
    description:
      '<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>',
  })
  .openapi('WorkloadName')

const TimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'The date and time recorded.' })
  .openapi('Timestamp')

const BestPracticeSchema = z
  .object({
    ChoiceId: ChoiceIdSchema.exactOptional(),
    ChoiceTitle: ChoiceTitleSchema.exactOptional(),
  })
  .openapi({
    description:
      'A best practice, or question choice, that has been identified as a risk in this question.',
    required: [],
  })
  .openapi('BestPractice')

const BestPracticesSchema = z.array(BestPracticeSchema).openapi('BestPractices')

const QuestionMetricSchema = z
  .object({
    QuestionId: QuestionIdSchema.exactOptional(),
    Risk: RiskSchema.exactOptional(),
    BestPractices: BestPracticesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The best practices, or choices, that have been identified as contributing to risk in a question.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A metric for a particular question in the pillar. ', required: [] })
  .openapi('QuestionMetric')

const QuestionMetricsSchema = z.array(QuestionMetricSchema).openapi('QuestionMetrics')

const PillarMetricSchema = z
  .object({
    PillarId: PillarIdSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
    Questions: QuestionMetricsSchema.and(
      z
        .any()
        .openapi({
          description: 'The questions that have been identified as risks in the pillar.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A metric for a particular pillar in a lens.', required: [] })
  .openapi('PillarMetric')

const PillarMetricsSchema = z.array(PillarMetricSchema).openapi('PillarMetrics')

const LensMetricSchema = z
  .object({
    LensArn: LensArnSchema.and(z.any().openapi({ description: 'The lens ARN.' })).exactOptional(),
    Pillars: PillarMetricsSchema.and(
      z.any().openapi({ description: 'The metrics for the pillars in a lens.' }),
    ).exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
  })
  .openapi({ description: 'A metric for a particular lens in a workload.', required: [] })
  .openapi('LensMetric')

const LensMetricsSchema = z.array(LensMetricSchema).openapi('LensMetrics')

const LensesAppliedCountSchema = z.int().min(0).openapi('LensesAppliedCount')

const ConsolidatedReportMetricSchema = z
  .object({
    MetricType: MetricTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The metric type of a metric in the consolidated report. Currently only WORKLOAD metric types are supported.',
        }),
    ).exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    WorkloadArn: WorkloadArnSchema.exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    Lenses: LensMetricsSchema.and(
      z.any().openapi({ description: 'The metrics for the lenses in the workload.' }),
    ).exactOptional(),
    LensesAppliedCount: LensesAppliedCountSchema.and(
      z.any().openapi({ description: 'The total number of lenses applied to the workload.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A metric that contributes to the consolidated report.', required: [] })
  .openapi('ConsolidatedReportMetric')

const ConsolidatedReportMetricsSchema = z
  .array(ConsolidatedReportMetricSchema)
  .openapi('ConsolidatedReportMetrics')

const NextTokenSchema = z
  .string()
  .openapi({ description: 'The token to use to retrieve the next set of results.' })
  .openapi('NextToken')

const Base64StringSchema = z
  .string()
  .openapi({
    description:
      '<p>The Base64-encoded string representation of a lens review report.</p> <p>This data can be used to create a PDF file.</p> <p>Only returned by <a>GetConsolidatedReport</a> when <code>PDF</code> format is requested.</p>',
  })
  .openapi('Base64String')

const GetConsolidatedReportOutputSchema = z
  .object({
    Metrics: ConsolidatedReportMetricsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The metrics that make up the consolidated report.</p> <p>Only returned when <code>JSON</code> format is requested.</p>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
    Base64String: Base64StringSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetConsolidatedReportOutput')

const LensNameSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ description: 'The full name of the lens.' })
  .openapi('LensName')

const LensDescriptionSchema = z
  .string()
  .min(1)
  .max(1024)
  .openapi({ description: 'The description of the lens.' })
  .openapi('LensDescription')

const LensOwnerSchema = z.string().openapi('LensOwner')

const ShareInvitationIdSchema = z
  .string()
  .regex(/[0-9a-f]{32}/)
  .openapi('ShareInvitationId')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 50)
  .openapi('TagMap')

const LensSchema = z
  .object({
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN of a lens.' }),
    ).exactOptional(),
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of a lens.' }),
    ).exactOptional(),
    Name: LensNameSchema.exactOptional(),
    Description: LensDescriptionSchema.exactOptional(),
    Owner: LensOwnerSchema.and(
      z.any().openapi({ description: 'The Amazon Web Services account ID that owns the lens.' }),
    ).exactOptional(),
    ShareInvitationId: ShareInvitationIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the share invitation.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags assigned to the lens.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A lens return object.', required: [] })
  .openapi('Lens')

const GetLensOutputSchema = z
  .object({
    Lens: LensSchema.and(z.any().openapi({ description: 'A lens return object.' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLensOutput')

const LensStatusSchema = z
  .enum(['CURRENT', 'NOT_CURRENT', 'DEPRECATED', 'DELETED', 'UNSHARED'])
  .openapi('LensStatus')

const PillarNameSchema = z
  .string()
  .min(1)
  .max(128)
  .openapi({ description: 'The name of the pillar.' })
  .openapi('PillarName')

const PillarReviewSummarySchema = z
  .object({
    PillarId: PillarIdSchema.exactOptional(),
    PillarName: PillarNameSchema.exactOptional(),
    Notes: NotesSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
  })
  .openapi({ description: 'A pillar review summary of a lens review.', required: [] })
  .openapi('PillarReviewSummary')

const PillarReviewSummariesSchema = z
  .array(PillarReviewSummarySchema)
  .openapi({ description: 'List of pillar review summaries of lens review in a workload.' })
  .openapi('PillarReviewSummaries')

const LensReviewSchema = z
  .object({
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of the lens.' }),
    ).exactOptional(),
    LensName: LensNameSchema.exactOptional(),
    LensStatus: LensStatusSchema.and(
      z.any().openapi({ description: 'The status of the lens.' }),
    ).exactOptional(),
    PillarReviewSummaries: PillarReviewSummariesSchema.exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    Notes: NotesSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'A lens review of a question.', required: [] })
  .openapi('LensReview')

const GetLensReviewOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensReview: LensReviewSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a get lens review call.', required: [] })
  .openapi('GetLensReviewOutput')

const LensReviewReportSchema = z
  .object({
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    Base64String: Base64StringSchema.exactOptional(),
  })
  .openapi({ description: 'A report of a lens review.', required: [] })
  .openapi('LensReviewReport')

const GetLensReviewReportOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensReviewReport: LensReviewReportSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a get lens review report call.', required: [] })
  .openapi('GetLensReviewReportOutput')

const DifferenceStatusSchema = z.enum(['UPDATED', 'NEW', 'DELETED']).openapi('DifferenceStatus')

const QuestionDifferenceSchema = z
  .object({
    QuestionId: QuestionIdSchema.exactOptional(),
    QuestionTitle: QuestionTitleSchema.exactOptional(),
    DifferenceStatus: DifferenceStatusSchema.and(
      z.any().openapi({ description: 'Indicates the type of change to the question.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A question difference return object.', required: [] })
  .openapi('QuestionDifference')

const QuestionDifferencesSchema = z.array(QuestionDifferenceSchema).openapi('QuestionDifferences')

const PillarDifferenceSchema = z
  .object({
    PillarId: PillarIdSchema.exactOptional(),
    PillarName: PillarNameSchema.exactOptional(),
    DifferenceStatus: DifferenceStatusSchema.and(
      z.any().openapi({ description: 'Indicates the type of change to the pillar.' }),
    ).exactOptional(),
    QuestionDifferences: QuestionDifferencesSchema.and(
      z.any().openapi({ description: 'List of question differences.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A pillar difference return object.', required: [] })
  .openapi('PillarDifference')

const PillarDifferencesSchema = z.array(PillarDifferenceSchema).openapi('PillarDifferences')

const VersionDifferencesSchema = z
  .object({
    PillarDifferences: PillarDifferencesSchema.and(
      z
        .any()
        .openapi({
          description: 'The differences between the base and latest versions of the lens.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The differences between the base and latest versions of the lens.',
    required: [],
  })
  .openapi('VersionDifferences')

const GetLensVersionDifferenceOutputSchema = z
  .object({
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    BaseLensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The base version of the lens.' }),
    ).exactOptional(),
    TargetLensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The target lens version for the lens.' }),
    ).exactOptional(),
    LatestLensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The latest version of the lens.' }),
    ).exactOptional(),
    VersionDifferences: VersionDifferencesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetLensVersionDifferenceOutput')

const MilestoneNameSchema = z
  .string()
  .min(3)
  .max(100)
  .openapi({
    description:
      '<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>',
  })
  .openapi('MilestoneName')

const WorkloadDescriptionSchema = z
  .string()
  .min(3)
  .max(250)
  .openapi({ description: 'The description for the workload.' })
  .openapi('WorkloadDescription')

const WorkloadEnvironmentSchema = z
  .enum(['PRODUCTION', 'PREPRODUCTION'])
  .openapi({ description: 'The environment for the workload.' })
  .openapi('WorkloadEnvironment')

const WorkloadAccountIdsSchema = z
  .array(AwsAccountIdSchema)
  .max(100)
  .openapi({
    description: 'The list of Amazon Web Services account IDs associated with the workload.',
  })
  .openapi('WorkloadAccountIds')

const WorkloadAwsRegionsSchema = z
  .array(AwsRegionSchema)
  .max(50)
  .openapi({
    description:
      'The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.',
  })
  .openapi('WorkloadAwsRegions')

const WorkloadNonAwsRegionsSchema = z
  .array(WorkloadNonAwsRegionSchema)
  .max(5)
  .openapi({
    description: ' The list of non-Amazon Web Services Regions associated with the workload.',
  })
  .openapi('WorkloadNonAwsRegions')

const WorkloadArchitecturalDesignSchema = z
  .string()
  .regex(/^(|(https?|ftp):\/\/[^\s\/$.?#].[^\s]*)$/)
  .max(2048)
  .openapi({ description: 'The URL of the architectural design for the workload.' })
  .openapi('WorkloadArchitecturalDesign')

const WorkloadReviewOwnerSchema = z
  .string()
  .min(3)
  .max(255)
  .openapi({
    description:
      'The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.',
  })
  .openapi('WorkloadReviewOwner')

const IsReviewOwnerUpdateAcknowledgedSchema = z.boolean().openapi('IsReviewOwnerUpdateAcknowledged')

const WorkloadIndustryTypeSchema = z
  .string()
  .max(100)
  .openapi({
    description:
      '<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>',
  })
  .openapi('WorkloadIndustryType')

const WorkloadIndustrySchema = z
  .string()
  .max(100)
  .openapi({ description: 'The industry for the workload.' })
  .openapi('WorkloadIndustry')

const WorkloadImprovementStatusSchema = z
  .enum(['NOT_APPLICABLE', 'NOT_STARTED', 'IN_PROGRESS', 'COMPLETE', 'RISK_ACKNOWLEDGED'])
  .openapi({ description: 'The improvement status for a workload.' })
  .openapi('WorkloadImprovementStatus')

const WorkloadPillarPrioritiesSchema = z
  .array(PillarIdSchema)
  .openapi({
    description:
      'The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.',
  })
  .openapi('WorkloadPillarPriorities')

const WorkloadLensesSchema = z
  .array(LensAliasSchema)
  .openapi({
    description:
      'The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.',
  })
  .openapi('WorkloadLenses')

const WorkloadDiscoveryConfigSchema = z
  .object({
    TrustedAdvisorIntegrationStatus: TrustedAdvisorIntegrationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'Discovery integration status in respect to Trusted Advisor for the workload.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Discovery configuration associated to the workload.', required: [] })
  .openapi('WorkloadDiscoveryConfig')

const WorkloadApplicationsSchema = z
  .array(ApplicationArnSchema)
  .max(1)
  .openapi('WorkloadApplications')

const WorkloadSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadArn: WorkloadArnSchema.exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    Description: WorkloadDescriptionSchema.exactOptional(),
    Environment: WorkloadEnvironmentSchema.exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    AccountIds: WorkloadAccountIdsSchema.exactOptional(),
    AwsRegions: WorkloadAwsRegionsSchema.exactOptional(),
    NonAwsRegions: WorkloadNonAwsRegionsSchema.exactOptional(),
    ArchitecturalDesign: WorkloadArchitecturalDesignSchema.exactOptional(),
    ReviewOwner: WorkloadReviewOwnerSchema.exactOptional(),
    ReviewRestrictionDate: TimestampSchema.exactOptional(),
    IsReviewOwnerUpdateAcknowledged: IsReviewOwnerUpdateAcknowledgedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>',
        }),
    ).exactOptional(),
    IndustryType: WorkloadIndustryTypeSchema.exactOptional(),
    Industry: WorkloadIndustrySchema.exactOptional(),
    Notes: NotesSchema.exactOptional(),
    ImprovementStatus: WorkloadImprovementStatusSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
    PillarPriorities: WorkloadPillarPrioritiesSchema.exactOptional(),
    Lenses: WorkloadLensesSchema.exactOptional(),
    Owner: AwsAccountIdSchema.exactOptional(),
    ShareInvitationId: ShareInvitationIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the share invitation.' }),
    ).exactOptional(),
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags associated with the workload.' }),
    ).exactOptional(),
    DiscoveryConfig: WorkloadDiscoveryConfigSchema.and(
      z.any().openapi({ description: 'Discovery configuration associated to the workload.' }),
    ).exactOptional(),
    Applications: WorkloadApplicationsSchema.and(
      z
        .any()
        .openapi({
          description: 'List of AppRegistry application ARNs associated to the workload.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'A workload return object.', required: [] })
  .openapi('Workload')

const MilestoneSchema = z
  .object({
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    MilestoneName: MilestoneNameSchema.exactOptional(),
    RecordedAt: TimestampSchema.exactOptional(),
    Workload: WorkloadSchema.exactOptional(),
  })
  .openapi({ description: 'A milestone return object.', required: [] })
  .openapi('Milestone')

const GetMilestoneOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    Milestone: MilestoneSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a get milestone call.', required: [] })
  .openapi('GetMilestoneOutput')

const GetWorkloadOutputSchema = z
  .object({ Workload: WorkloadSchema.exactOptional() })
  .openapi({ description: 'Output of a get workload call.', required: [] })
  .openapi('GetWorkloadOutput')

const ImportLensStatusSchema = z
  .enum(['IN_PROGRESS', 'COMPLETE', 'ERROR'])
  .openapi('ImportLensStatus')

const ImportLensOutputSchema = z
  .object({
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens that was created or updated.' }),
    ).exactOptional(),
    Status: ImportLensStatusSchema.and(
      z.any().openapi({ description: 'The status of the imported lens.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ImportLensOutput')

const ChoiceAnswerSummarySchema = z
  .object({
    ChoiceId: ChoiceIdSchema.exactOptional(),
    Status: ChoiceStatusSchema.and(
      z.any().openapi({ description: 'The status of a choice.' }),
    ).exactOptional(),
    Reason: ChoiceReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason why a choice is non-applicable to a question in your workload.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A choice summary that has been answered on a question in your workload.',
    required: [],
  })
  .openapi('ChoiceAnswerSummary')

const ChoiceAnswerSummariesSchema = z
  .array(ChoiceAnswerSummarySchema)
  .openapi('ChoiceAnswerSummaries')

const AnswerSummarySchema = z
  .object({
    QuestionId: QuestionIdSchema.exactOptional(),
    PillarId: PillarIdSchema.exactOptional(),
    QuestionTitle: QuestionTitleSchema.exactOptional(),
    Choices: ChoicesSchema.exactOptional(),
    SelectedChoices: SelectedChoicesSchema.exactOptional(),
    ChoiceAnswerSummaries: ChoiceAnswerSummariesSchema.and(
      z
        .any()
        .openapi({ description: 'A list of selected choices to a question in your workload.' }),
    ).exactOptional(),
    IsApplicable: IsApplicableSchema.exactOptional(),
    Risk: RiskSchema.exactOptional(),
    Reason: AnswerReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason why a choice is non-applicable to a question in your workload.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'An answer summary of a lens review in a workload.', required: [] })
  .openapi('AnswerSummary')

const AnswerSummariesSchema = z
  .array(AnswerSummarySchema)
  .openapi({ description: 'List of answer summaries of lens review in a workload.' })
  .openapi('AnswerSummaries')

const ListAnswersOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    AnswerSummaries: AnswerSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list answers call.', required: [] })
  .openapi('ListAnswersOutput')

const CheckIdSchema = z.string().openapi('CheckId')

const CheckNameSchema = z.string().openapi('CheckName')

const CheckDescriptionSchema = z.string().openapi('CheckDescription')

const CheckProviderSchema = z.literal('TRUSTED_ADVISOR').openapi('CheckProvider')

const CheckStatusSchema = z
  .enum(['OKAY', 'WARNING', 'ERROR', 'NOT_AVAILABLE', 'FETCH_FAILED'])
  .openapi('CheckStatus')

const FlaggedResourcesSchema = z.int().min(1).max(9999).openapi('FlaggedResources')

const CheckFailureReasonSchema = z
  .enum(['ASSUME_ROLE_ERROR', 'ACCESS_DENIED', 'UNKNOWN_ERROR', 'PREMIUM_SUPPORT_REQUIRED'])
  .openapi('CheckFailureReason')

const CheckDetailSchema = z
  .object({
    Id: CheckIdSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check ID.' }),
    ).exactOptional(),
    Name: CheckNameSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check name.' }),
    ).exactOptional(),
    Description: CheckDescriptionSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check description.' }),
    ).exactOptional(),
    Provider: CheckProviderSchema.and(
      z.any().openapi({ description: 'Provider of the check related to the best practice.' }),
    ).exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'Well-Architected Lens ARN associated to the check.' }),
    ).exactOptional(),
    PillarId: PillarIdSchema.exactOptional(),
    QuestionId: QuestionIdSchema.exactOptional(),
    ChoiceId: ChoiceIdSchema.exactOptional(),
    Status: CheckStatusSchema.and(
      z.any().openapi({ description: 'Status associated to the check.' }),
    ).exactOptional(),
    AccountId: AwsAccountIdSchema.exactOptional(),
    FlaggedResources: FlaggedResourcesSchema.and(
      z.any().openapi({ description: 'Count of flagged resources associated to the check.' }),
    ).exactOptional(),
    Reason: CheckFailureReasonSchema.and(
      z.any().openapi({ description: 'Reason associated to the check.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
  })
  .openapi({
    description:
      'Account details for a Well-Architected best practice in relation to Trusted Advisor checks.',
    required: [],
  })
  .openapi('CheckDetail')

const CheckDetailsSchema = z.array(CheckDetailSchema).openapi('CheckDetails')

const ListCheckDetailsOutputSchema = z
  .object({
    CheckDetails: CheckDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The details about the Trusted Advisor checks related to the Well-Architected best practice.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCheckDetailsOutput')

const CheckStatusCountSchema = z.int().min(1).max(101).openapi('CheckStatusCount')

const AccountSummarySchema = z
  .record(z.string(), CheckStatusCountSchema)
  .openapi({
    description:
      'Account summary for a Well-Architected best practice in relation to Trusted Advisor checks.',
  })
  .openapi('AccountSummary')

const CheckSummarySchema = z
  .object({
    Id: CheckIdSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check ID.' }),
    ).exactOptional(),
    Name: CheckNameSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check name.' }),
    ).exactOptional(),
    Provider: CheckProviderSchema.and(
      z.any().openapi({ description: 'Provider of the check related to the best practice.' }),
    ).exactOptional(),
    Description: CheckDescriptionSchema.and(
      z.any().openapi({ description: 'Trusted Advisor check description.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'Well-Architected Lens ARN associated to the check.' }),
    ).exactOptional(),
    PillarId: PillarIdSchema.exactOptional(),
    QuestionId: QuestionIdSchema.exactOptional(),
    ChoiceId: ChoiceIdSchema.exactOptional(),
    Status: CheckStatusSchema.and(
      z.any().openapi({ description: 'Status associated to the check.' }),
    ).exactOptional(),
    AccountSummary: AccountSummarySchema.and(
      z.any().openapi({ description: 'Account summary associated to the check.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Trusted Advisor check summary.', required: [] })
  .openapi('CheckSummary')

const CheckSummariesSchema = z.array(CheckSummarySchema).openapi('CheckSummaries')

const ListCheckSummariesOutputSchema = z
  .object({
    CheckSummaries: CheckSummariesSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of Trusted Advisor summaries related to the Well-Architected best practice.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListCheckSummariesOutput')

const ChoiceImprovementPlanSchema = z
  .object({
    ChoiceId: ChoiceIdSchema.exactOptional(),
    DisplayText: DisplayTextSchema.and(
      z.any().openapi({ description: 'The display text for the improvement plan.' }),
    ).exactOptional(),
    ImprovementPlanUrl: ImprovementPlanUrlSchema.exactOptional(),
  })
  .openapi({ description: 'The choice level improvement plan.', required: [] })
  .openapi('ChoiceImprovementPlan')

const ChoiceImprovementPlansSchema = z
  .array(ChoiceImprovementPlanSchema)
  .openapi('ChoiceImprovementPlans')

const ImprovementSummarySchema = z
  .object({
    QuestionId: QuestionIdSchema.exactOptional(),
    PillarId: PillarIdSchema.exactOptional(),
    QuestionTitle: QuestionTitleSchema.exactOptional(),
    Risk: RiskSchema.exactOptional(),
    ImprovementPlanUrl: ImprovementPlanUrlSchema.exactOptional(),
    ImprovementPlans: ChoiceImprovementPlansSchema.and(
      z.any().openapi({ description: 'The improvement plan details.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'An improvement summary of a lens review in a workload.', required: [] })
  .openapi('ImprovementSummary')

const ImprovementSummariesSchema = z
  .array(ImprovementSummarySchema)
  .openapi({ description: 'List of improvement summaries of lens review in a workload.' })
  .openapi('ImprovementSummaries')

const ListLensReviewImprovementsOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    ImprovementSummaries: ImprovementSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list lens review improvements call.', required: [] })
  .openapi('ListLensReviewImprovementsOutput')

const LensReviewSummarySchema = z
  .object({
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of the lens.' }),
    ).exactOptional(),
    LensName: LensNameSchema.exactOptional(),
    LensStatus: LensStatusSchema.and(
      z.any().openapi({ description: 'The status of the lens.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
  })
  .openapi({ description: 'A lens review summary of a workload.', required: [] })
  .openapi('LensReviewSummary')

const LensReviewSummariesSchema = z
  .array(LensReviewSummarySchema)
  .openapi({ description: 'List of lens summaries of lens reviews of a workload.' })
  .openapi('LensReviewSummaries')

const ListLensReviewsOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    LensReviewSummaries: LensReviewSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list lens reviews call.', required: [] })
  .openapi('ListLensReviewsOutput')

const SharedWithSchema = z
  .string()
  .min(12)
  .max(2048)
  .openapi({
    description:
      'The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.',
  })
  .openapi('SharedWith')

const ShareStatusSchema = z
  .enum([
    'ACCEPTED',
    'REJECTED',
    'PENDING',
    'REVOKED',
    'EXPIRED',
    'ASSOCIATING',
    'ASSOCIATED',
    'FAILED',
  ])
  .openapi({ description: 'The status of a workload share.' })
  .openapi('ShareStatus')

const StatusMessageSchema = z.string().min(1).max(512).openapi('StatusMessage')

const LensShareSummarySchema = z
  .object({
    ShareId: ShareIdSchema.exactOptional(),
    SharedWith: SharedWithSchema.exactOptional(),
    Status: ShareStatusSchema.exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'Optional message to compliment the Status field.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A lens share summary return object.', required: [] })
  .openapi('LensShareSummary')

const LensShareSummariesSchema = z.array(LensShareSummarySchema).openapi('LensShareSummaries')

const ListLensSharesOutputSchema = z
  .object({
    LensShareSummaries: LensShareSummariesSchema.and(
      z.any().openapi({ description: 'A list of lens share summaries.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListLensSharesOutput')

const LensTypeSchema = z.enum(['AWS_OFFICIAL', 'CUSTOM_SHARED', 'CUSTOM_SELF']).openapi('LensType')

const LensSummarySchema = z
  .object({
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN of the lens.' }),
    ).exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensName: LensNameSchema.exactOptional(),
    LensType: LensTypeSchema.and(
      z.any().openapi({ description: 'The type of the lens.' }),
    ).exactOptional(),
    Description: LensDescriptionSchema.exactOptional(),
    CreatedAt: TimestampSchema.exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of the lens.' }),
    ).exactOptional(),
    Owner: AwsAccountIdSchema.exactOptional(),
    LensStatus: LensStatusSchema.and(
      z.any().openapi({ description: 'The status of the lens.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A lens summary of a lens.', required: [] })
  .openapi('LensSummary')

const LensSummariesSchema = z
  .array(LensSummarySchema)
  .openapi({ description: 'List of lens summaries of available lenses.' })
  .openapi('LensSummaries')

const ListLensesOutputSchema = z
  .object({
    LensSummaries: LensSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list lenses call.', required: [] })
  .openapi('ListLensesOutput')

const WorkloadSummarySchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadArn: WorkloadArnSchema.exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    Owner: AwsAccountIdSchema.exactOptional(),
    UpdatedAt: TimestampSchema.exactOptional(),
    Lenses: WorkloadLensesSchema.exactOptional(),
    RiskCounts: RiskCountsSchema.exactOptional(),
    ImprovementStatus: WorkloadImprovementStatusSchema.exactOptional(),
  })
  .openapi({ description: 'A workload summary return object.', required: [] })
  .openapi('WorkloadSummary')

const MilestoneSummarySchema = z
  .object({
    MilestoneNumber: MilestoneNumberSchema.exactOptional(),
    MilestoneName: MilestoneNameSchema.exactOptional(),
    RecordedAt: TimestampSchema.exactOptional(),
    WorkloadSummary: WorkloadSummarySchema.exactOptional(),
  })
  .openapi({ description: 'A milestone summary return object.', required: [] })
  .openapi('MilestoneSummary')

const MilestoneSummariesSchema = z
  .array(MilestoneSummarySchema)
  .openapi({ description: 'A list of milestone summaries.' })
  .openapi('MilestoneSummaries')

const ListMilestonesOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    MilestoneSummaries: MilestoneSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list milestones call.', required: [] })
  .openapi('ListMilestonesOutput')

const NotificationTypeSchema = z
  .enum(['LENS_VERSION_UPGRADED', 'LENS_VERSION_DEPRECATED'])
  .openapi('NotificationType')

const LensUpgradeSummarySchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    CurrentLensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The current version of the lens.' }),
    ).exactOptional(),
    LatestLensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The latest version of the lens.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Lens upgrade summary return object.', required: [] })
  .openapi('LensUpgradeSummary')

const NotificationSummarySchema = z
  .object({
    Type: NotificationTypeSchema.and(
      z.any().openapi({ description: 'The type of notification.' }),
    ).exactOptional(),
    LensUpgradeSummary: LensUpgradeSummarySchema.and(
      z.any().openapi({ description: 'Summary of lens upgrade.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A notification summary return object.', required: [] })
  .openapi('NotificationSummary')

const NotificationSummariesSchema = z
  .array(NotificationSummarySchema)
  .openapi('NotificationSummaries')

const ListNotificationsOutputSchema = z
  .object({
    NotificationSummaries: NotificationSummariesSchema.and(
      z.any().openapi({ description: 'List of lens notification summaries in a workload.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListNotificationsOutput')

const PermissionTypeSchema = z
  .enum(['READONLY', 'CONTRIBUTOR'])
  .openapi({ description: 'Permission granted on a workload share.' })
  .openapi('PermissionType')

const ShareResourceTypeSchema = z.enum(['WORKLOAD', 'LENS']).openapi('ShareResourceType')

const ShareInvitationSummarySchema = z
  .object({
    ShareInvitationId: ShareInvitationIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the share invitation.' }),
    ).exactOptional(),
    SharedBy: AwsAccountIdSchema.exactOptional(),
    SharedWith: SharedWithSchema.exactOptional(),
    PermissionType: PermissionTypeSchema.exactOptional(),
    ShareResourceType: ShareResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the share invitation.' }),
    ).exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    WorkloadId: WorkloadIdSchema.exactOptional(),
    LensName: LensNameSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A share invitation summary return object.', required: [] })
  .openapi('ShareInvitationSummary')

const ShareInvitationSummariesSchema = z
  .array(ShareInvitationSummarySchema)
  .openapi('ShareInvitationSummaries')

const ListShareInvitationsOutputSchema = z
  .object({
    ShareInvitationSummaries: ShareInvitationSummariesSchema.and(
      z.any().openapi({ description: 'List of share invitation summaries in a workload.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Input for List Share Invitations', required: [] })
  .openapi('ListShareInvitationsOutput')

const ListTagsForResourceOutputSchema = z
  .object({
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags for the resource.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceOutput')

const WorkloadShareSummarySchema = z
  .object({
    ShareId: ShareIdSchema.exactOptional(),
    SharedWith: SharedWithSchema.exactOptional(),
    PermissionType: PermissionTypeSchema.exactOptional(),
    Status: ShareStatusSchema.exactOptional(),
    StatusMessage: StatusMessageSchema.and(
      z.any().openapi({ description: 'Optional message to compliment the Status field.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A workload share summary return object.', required: [] })
  .openapi('WorkloadShareSummary')

const WorkloadShareSummariesSchema = z
  .array(WorkloadShareSummarySchema)
  .openapi({ description: 'A list of workload share summaries.' })
  .openapi('WorkloadShareSummaries')

const ListWorkloadSharesOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadShareSummaries: WorkloadShareSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Input for List Workload Share', required: [] })
  .openapi('ListWorkloadSharesOutput')

const WorkloadSummariesSchema = z
  .array(WorkloadSummarySchema)
  .openapi({ description: 'A list of workload summaries.' })
  .openapi('WorkloadSummaries')

const ListWorkloadsOutputSchema = z
  .object({
    WorkloadSummaries: WorkloadSummariesSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a list workloads call.', required: [] })
  .openapi('ListWorkloadsOutput')

const TagResourceOutputSchema = z.object({}).openapi('TagResourceOutput')

const UntagResourceOutputSchema = z.object({}).openapi('UntagResourceOutput')

const TagKeySchema = z.string().min(1).max(128).openapi('TagKey')

const UpdateAnswerOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
    Answer: AnswerSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a update answer call.', required: [] })
  .openapi('UpdateAnswerOutput')

const ChoiceUpdateSchema = z
  .object({
    Status: ChoiceStatusSchema.and(z.any().openapi({ description: 'The status of a choice.' })),
    Reason: ChoiceReasonSchema.and(
      z
        .any()
        .openapi({
          description: 'The reason why a choice is non-applicable to a question in your workload.',
        }),
    ).exactOptional(),
    Notes: ChoiceNotesSchema.and(
      z.any().openapi({ description: 'The notes associated with a choice.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['Status'], description: 'A list of choices to be updated.' })
  .openapi('ChoiceUpdate')

const UpdateLensReviewOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    LensReview: LensReviewSchema.exactOptional(),
  })
  .openapi({ description: 'Output of a update lens review call.', required: [] })
  .openapi('UpdateLensReviewOutput')

const ShareInvitationSchema = z
  .object({
    ShareInvitationId: ShareInvitationIdSchema.and(
      z.any().openapi({ description: 'The ID assigned to the share invitation.' }),
    ).exactOptional(),
    ShareResourceType: ShareResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type of the share invitation.' }),
    ).exactOptional(),
    WorkloadId: WorkloadIdSchema.exactOptional(),
    LensAlias: LensAliasSchema.exactOptional(),
    LensArn: LensArnSchema.and(
      z.any().openapi({ description: 'The ARN for the lens.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The share invitation.', required: [] })
  .openapi('ShareInvitation')

const UpdateShareInvitationOutputSchema = z
  .object({
    ShareInvitation: ShareInvitationSchema.and(
      z.any().openapi({ description: 'The updated workload or custom lens share invitation.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateShareInvitationOutput')

const UpdateWorkloadOutputSchema = z
  .object({ Workload: WorkloadSchema.exactOptional() })
  .openapi({ description: 'Output of an update workload call.', required: [] })
  .openapi('UpdateWorkloadOutput')

const WorkloadShareSchema = z
  .object({
    ShareId: ShareIdSchema.exactOptional(),
    SharedBy: AwsAccountIdSchema.exactOptional(),
    SharedWith: SharedWithSchema.exactOptional(),
    PermissionType: PermissionTypeSchema.exactOptional(),
    Status: ShareStatusSchema.exactOptional(),
    WorkloadName: WorkloadNameSchema.exactOptional(),
    WorkloadId: WorkloadIdSchema.exactOptional(),
  })
  .openapi({ description: 'A workload share return object.', required: [] })
  .openapi('WorkloadShare')

const UpdateWorkloadShareOutputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    WorkloadShare: WorkloadShareSchema.exactOptional(),
  })
  .openapi({ description: 'Input for Update Workload Share', required: [] })
  .openapi('UpdateWorkloadShareOutput')

const LensAliasesSchema = z
  .array(LensAliasSchema)
  .min(1)
  .openapi({
    description:
      '<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>',
  })
  .openapi('LensAliases')

const AssociateLensesInputSchema = z
  .object({ LensAliases: LensAliasesSchema })
  .openapi({
    required: ['LensAliases'],
    title: 'AssociateLensesInput',
    description: 'Input to associate lens reviews.',
  })
  .openapi('AssociateLensesInput')

const ChoiceUpdatesSchema = z.record(z.string(), ChoiceUpdateSchema).openapi('ChoiceUpdates')

const ClientRequestTokenSchema = z
  .string()
  .openapi({
    description:
      '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
  })
  .openapi('ClientRequestToken')

const CreateLensShareInputSchema = z
  .object({ SharedWith: SharedWithSchema, ClientRequestToken: ClientRequestTokenSchema })
  .openapi({ required: ['SharedWith', 'ClientRequestToken'], title: 'CreateLensShareInput' })
  .openapi('CreateLensShareInput')

const IsMajorVersionSchema = z.boolean().openapi('IsMajorVersion')

const CreateLensVersionInputSchema = z
  .object({
    LensVersion: LensVersionSchema.and(
      z.any().openapi({ description: 'The version of the lens being created.' }),
    ),
    IsMajorVersion: IsMajorVersionSchema.and(
      z.any().openapi({ description: 'Set to true if this new major lens version.' }),
    ).exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema,
  })
  .openapi({ required: ['LensVersion', 'ClientRequestToken'], title: 'CreateLensVersionInput' })
  .openapi('CreateLensVersionInput')

const CreateMilestoneInputSchema = z
  .object({ MilestoneName: MilestoneNameSchema, ClientRequestToken: ClientRequestTokenSchema })
  .openapi({
    required: ['MilestoneName', 'ClientRequestToken'],
    title: 'CreateMilestoneInput',
    description: 'Input for milestone creation.',
  })
  .openapi('CreateMilestoneInput')

const CreateWorkloadInputSchema = z
  .object({
    WorkloadName: WorkloadNameSchema,
    Description: WorkloadDescriptionSchema,
    Environment: WorkloadEnvironmentSchema,
    AccountIds: WorkloadAccountIdsSchema.exactOptional(),
    AwsRegions: WorkloadAwsRegionsSchema.exactOptional(),
    NonAwsRegions: WorkloadNonAwsRegionsSchema.exactOptional(),
    PillarPriorities: WorkloadPillarPrioritiesSchema.exactOptional(),
    ArchitecturalDesign: WorkloadArchitecturalDesignSchema.exactOptional(),
    ReviewOwner: WorkloadReviewOwnerSchema.exactOptional(),
    IndustryType: WorkloadIndustryTypeSchema.exactOptional(),
    Industry: WorkloadIndustrySchema.exactOptional(),
    Lenses: WorkloadLensesSchema,
    Notes: NotesSchema.exactOptional(),
    ClientRequestToken: ClientRequestTokenSchema,
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'The tags to be associated with the workload.' }),
    ).exactOptional(),
    DiscoveryConfig: WorkloadDiscoveryConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Well-Architected discovery configuration settings associated to the workload.',
        }),
    ).exactOptional(),
    Applications: WorkloadApplicationsSchema.and(
      z
        .any()
        .openapi({
          description: 'List of AppRegistry application ARNs associated to the workload.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WorkloadName', 'Description', 'Environment', 'Lenses', 'ClientRequestToken'],
    title: 'CreateWorkloadInput',
    description: 'Input for workload creation.',
  })
  .openapi('CreateWorkloadInput')

const CreateWorkloadShareInputSchema = z
  .object({
    SharedWith: SharedWithSchema,
    PermissionType: PermissionTypeSchema,
    ClientRequestToken: ClientRequestTokenSchema,
  })
  .openapi({
    required: ['SharedWith', 'PermissionType', 'ClientRequestToken'],
    title: 'CreateWorkloadShareInput',
    description: 'Input for Create Workload Share',
  })
  .openapi('CreateWorkloadShareInput')

const LensStatusTypeSchema = z.enum(['ALL', 'DRAFT', 'PUBLISHED']).openapi('LensStatusType')

const DeleteLensInputSchema = z
  .object({})
  .openapi({ title: 'DeleteLensInput' })
  .openapi('DeleteLensInput')

const DeleteLensShareInputSchema = z
  .object({})
  .openapi({ title: 'DeleteLensShareInput' })
  .openapi('DeleteLensShareInput')

const DeleteWorkloadInputSchema = z
  .object({})
  .openapi({ title: 'DeleteWorkloadInput', description: 'Input for workload deletion.' })
  .openapi('DeleteWorkloadInput')

const DeleteWorkloadShareInputSchema = z
  .object({})
  .openapi({ title: 'DeleteWorkloadShareInput', description: 'Input for Delete Workload Share' })
  .openapi('DeleteWorkloadShareInput')

const DisassociateLensesInputSchema = z
  .object({ LensAliases: LensAliasesSchema })
  .openapi({
    required: ['LensAliases'],
    title: 'DisassociateLensesInput',
    description: 'Input to disassociate lens reviews.',
  })
  .openapi('DisassociateLensesInput')

const ExportLensInputSchema = z
  .object({})
  .openapi({ title: 'ExportLensInput' })
  .openapi('ExportLensInput')

const GetAnswerInputSchema = z
  .object({})
  .openapi({ title: 'GetAnswerInput', description: 'Input to get answer.' })
  .openapi('GetAnswerInput')

const ReportFormatSchema = z.enum(['PDF', 'JSON']).openapi('ReportFormat')

const IncludeSharedResourcesSchema = z.boolean().openapi('IncludeSharedResources')

const GetConsolidatedReportMaxResultsSchema = z
  .int()
  .min(1)
  .max(15)
  .openapi('GetConsolidatedReportMaxResults')

const GetConsolidatedReportInputSchema = z
  .object({})
  .openapi({ title: 'GetConsolidatedReportInput' })
  .openapi('GetConsolidatedReportInput')

const GetLensInputSchema = z.object({}).openapi({ title: 'GetLensInput' }).openapi('GetLensInput')

const GetLensReviewInputSchema = z
  .object({})
  .openapi({ title: 'GetLensReviewInput', description: 'Input to get lens review.' })
  .openapi('GetLensReviewInput')

const GetLensReviewReportInputSchema = z
  .object({})
  .openapi({ title: 'GetLensReviewReportInput', description: 'Input to get lens review report.' })
  .openapi('GetLensReviewReportInput')

const GetLensVersionDifferenceInputSchema = z
  .object({})
  .openapi({ title: 'GetLensVersionDifferenceInput' })
  .openapi('GetLensVersionDifferenceInput')

const GetMilestoneInputSchema = z
  .object({})
  .openapi({ title: 'GetMilestoneInput', description: 'Input to get a milestone.' })
  .openapi('GetMilestoneInput')

const GetWorkloadInputSchema = z
  .object({})
  .openapi({ title: 'GetWorkloadInput', description: 'Input to get a workload.' })
  .openapi('GetWorkloadInput')

const ImportLensInputSchema = z
  .object({
    LensAlias: LensAliasSchema.exactOptional(),
    JSONString: LensJSONSchema.and(
      z.any().openapi({ description: 'The JSON representation of a lens.' }),
    ),
    ClientRequestToken: ClientRequestTokenSchema,
    Tags: TagMapSchema.and(
      z.any().openapi({ description: 'Tags to associate to a lens.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['JSONString', 'ClientRequestToken'], title: 'ImportLensInput' })
  .openapi('ImportLensInput')

const LensNamePrefixSchema = z.string().max(100).openapi('LensNamePrefix')

const ListAnswersMaxResultsSchema = z.int().min(1).max(50).openapi('ListAnswersMaxResults')

const ListAnswersInputSchema = z
  .object({})
  .openapi({ title: 'ListAnswersInput', description: 'Input to list answers.' })
  .openapi('ListAnswersInput')

const MaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi({ description: 'The maximum number of results to return for this request.' })
  .openapi('MaxResults')

const ListCheckDetailsInputSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    LensArn: LensArnSchema.and(z.any().openapi({ description: 'Well-Architected Lens ARN.' })),
    PillarId: PillarIdSchema,
    QuestionId: QuestionIdSchema,
    ChoiceId: ChoiceIdSchema,
  })
  .openapi({
    required: ['LensArn', 'PillarId', 'QuestionId', 'ChoiceId'],
    title: 'ListCheckDetailsInput',
  })
  .openapi('ListCheckDetailsInput')

const ListCheckSummariesInputSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
    LensArn: LensArnSchema.and(z.any().openapi({ description: 'Well-Architected Lens ARN.' })),
    PillarId: PillarIdSchema,
    QuestionId: QuestionIdSchema,
    ChoiceId: ChoiceIdSchema,
  })
  .openapi({
    required: ['LensArn', 'PillarId', 'QuestionId', 'ChoiceId'],
    title: 'ListCheckSummariesInput',
  })
  .openapi('ListCheckSummariesInput')

const ListLensReviewImprovementsMaxResultsSchema = z
  .int()
  .min(1)
  .max(100)
  .openapi('ListLensReviewImprovementsMaxResults')

const ListLensReviewImprovementsInputSchema = z
  .object({})
  .openapi({
    title: 'ListLensReviewImprovementsInput',
    description: 'Input to list lens review improvements.',
  })
  .openapi('ListLensReviewImprovementsInput')

const ListLensReviewsInputSchema = z
  .object({})
  .openapi({ title: 'ListLensReviewsInput', description: 'Input to list lens reviews.' })
  .openapi('ListLensReviewsInput')

const SharedWithPrefixSchema = z.string().max(100).openapi('SharedWithPrefix')

const ListWorkloadSharesMaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListWorkloadSharesMaxResults')

const ListLensSharesInputSchema = z
  .object({})
  .openapi({ title: 'ListLensSharesInput' })
  .openapi('ListLensSharesInput')

const ListLensesInputSchema = z
  .object({})
  .openapi({ title: 'ListLensesInput', description: 'Input to list lenses.' })
  .openapi('ListLensesInput')

const ListMilestonesInputSchema = z
  .object({
    NextToken: NextTokenSchema.exactOptional(),
    MaxResults: MaxResultsSchema.exactOptional(),
  })
  .openapi({
    title: 'ListMilestonesInput',
    description: 'Input to list all milestones for a workload.',
    required: [],
  })
  .openapi('ListMilestonesInput')

const ListNotificationsMaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListNotificationsMaxResults')

const ListNotificationsInputSchema = z
  .object({
    WorkloadId: WorkloadIdSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
    MaxResults: ListNotificationsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return for this request.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListNotificationsInput', required: [] })
  .openapi('ListNotificationsInput')

const WorkloadNamePrefixSchema = z
  .string()
  .max(100)
  .openapi({
    description:
      'An optional string added to the beginning of each workload name returned in the results.',
  })
  .openapi('WorkloadNamePrefix')

const ListShareInvitationsMaxResultsSchema = z
  .int()
  .min(1)
  .max(50)
  .openapi('ListShareInvitationsMaxResults')

const ListShareInvitationsInputSchema = z
  .object({})
  .openapi({ title: 'ListShareInvitationsInput', description: 'Input for List Share Invitations' })
  .openapi('ListShareInvitationsInput')

const ListTagsForResourceInputSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceInput' })
  .openapi('ListTagsForResourceInput')

const ListWorkloadSharesInputSchema = z
  .object({})
  .openapi({ title: 'ListWorkloadSharesInput', description: 'Input for List Workload Share' })
  .openapi('ListWorkloadSharesInput')

const ListWorkloadsMaxResultsSchema = z.int().min(1).max(50).openapi('ListWorkloadsMaxResults')

const ListWorkloadsInputSchema = z
  .object({
    WorkloadNamePrefix: WorkloadNamePrefixSchema.exactOptional(),
    NextToken: NextTokenSchema.exactOptional(),
    MaxResults: ListWorkloadsMaxResultsSchema.and(
      z.any().openapi({ description: 'The maximum number of results to return for this request.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ListWorkloadsInput',
    description: 'Input to list all workloads.',
    required: [],
  })
  .openapi('ListWorkloadsInput')

const OrganizationSharingStatusSchema = z
  .enum(['ENABLED', 'DISABLED'])
  .openapi('OrganizationSharingStatus')

const PillarNotesSchema = z
  .record(z.string(), NotesSchema)
  .openapi({ description: 'List of pillar notes of a lens review in a workload.' })
  .openapi('PillarNotes')

const ShareInvitationActionSchema = z
  .enum(['ACCEPT', 'REJECT'])
  .openapi({ description: 'Share invitation action taken by contributor.' })
  .openapi('ShareInvitationAction')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(50).openapi('TagKeyList')

const TagResourceInputSchema = z
  .object({
    Tags: TagMapSchema.and(z.any().openapi({ description: 'The tags for the resource.' })),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceInput' })
  .openapi('TagResourceInput')

const UntagResourceInputSchema = z
  .object({})
  .openapi({ title: 'UntagResourceInput' })
  .openapi('UntagResourceInput')

const UpdateAnswerInputSchema = z
  .object({
    SelectedChoices: SelectedChoicesSchema.exactOptional(),
    ChoiceUpdates: ChoiceUpdatesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.',
        }),
    ).exactOptional(),
    Notes: NotesSchema.exactOptional(),
    IsApplicable: IsApplicableSchema.exactOptional(),
    Reason: AnswerReasonSchema.and(
      z
        .any()
        .openapi({ description: 'The reason why a question is not applicable to your workload.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateAnswerInput', description: 'Input to update answer.', required: [] })
  .openapi('UpdateAnswerInput')

const UpdateGlobalSettingsInputSchema = z
  .object({
    OrganizationSharingStatus: OrganizationSharingStatusSchema.and(
      z.any().openapi({ description: 'The status of organization sharing settings.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateGlobalSettingsInput', required: [] })
  .openapi('UpdateGlobalSettingsInput')

const UpdateLensReviewInputSchema = z
  .object({
    LensNotes: NotesSchema.exactOptional(),
    PillarNotes: PillarNotesSchema.exactOptional(),
  })
  .openapi({
    title: 'UpdateLensReviewInput',
    description: 'Input for update lens review.',
    required: [],
  })
  .openapi('UpdateLensReviewInput')

const UpdateShareInvitationInputSchema = z
  .object({ ShareInvitationAction: ShareInvitationActionSchema })
  .openapi({
    required: ['ShareInvitationAction'],
    title: 'UpdateShareInvitationInput',
    description: 'Input for Update Share Invitation',
  })
  .openapi('UpdateShareInvitationInput')

const UpdateWorkloadInputSchema = z
  .object({
    WorkloadName: WorkloadNameSchema.exactOptional(),
    Description: WorkloadDescriptionSchema.exactOptional(),
    Environment: WorkloadEnvironmentSchema.exactOptional(),
    AccountIds: WorkloadAccountIdsSchema.exactOptional(),
    AwsRegions: WorkloadAwsRegionsSchema.exactOptional(),
    NonAwsRegions: WorkloadNonAwsRegionsSchema.exactOptional(),
    PillarPriorities: WorkloadPillarPrioritiesSchema.exactOptional(),
    ArchitecturalDesign: WorkloadArchitecturalDesignSchema.exactOptional(),
    ReviewOwner: WorkloadReviewOwnerSchema.exactOptional(),
    IsReviewOwnerUpdateAcknowledged: IsReviewOwnerUpdateAcknowledgedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>',
        }),
    ).exactOptional(),
    IndustryType: WorkloadIndustryTypeSchema.exactOptional(),
    Industry: WorkloadIndustrySchema.exactOptional(),
    Notes: NotesSchema.exactOptional(),
    ImprovementStatus: WorkloadImprovementStatusSchema.exactOptional(),
    DiscoveryConfig: WorkloadDiscoveryConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            'Well-Architected discovery configuration settings to associate to the workload.',
        }),
    ).exactOptional(),
    Applications: WorkloadApplicationsSchema.and(
      z
        .any()
        .openapi({
          description: 'List of AppRegistry application ARNs to associate to the workload.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdateWorkloadInput',
    description: 'Input to update a workload.',
    required: [],
  })
  .openapi('UpdateWorkloadInput')

const UpdateWorkloadShareInputSchema = z
  .object({ PermissionType: PermissionTypeSchema })
  .openapi({
    required: ['PermissionType'],
    title: 'UpdateWorkloadShareInput',
    description: 'Input for Update Workload Share',
  })
  .openapi('UpdateWorkloadShareInput')

const UpgradeLensReviewInputSchema = z
  .object({
    MilestoneName: MilestoneNameSchema,
    ClientRequestToken: ClientRequestTokenSchema.exactOptional(),
  })
  .openapi({ required: ['MilestoneName'], title: 'UpgradeLensReviewInput' })
  .openapi('UpgradeLensReviewInput')

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

export const patchWorkloadsWorkloadIdAssociateLensesRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}/associateLenses',
  description:
    '<p>Associate a lens to a workload.</p> <p>Up to 10 lenses can be associated with a workload in a single API operation. A maximum of 20 lenses can be associated with a workload.</p> <note> <p> <b>Disclaimer</b> </p> <p>By accessing and/or applying custom lenses created by another Amazon Web Services user or account, you acknowledge that custom lenses created by other users and shared with you are Third Party Content as defined in the Amazon Web Services Customer Agreement. </p> </note>',
  operationId: 'AssociateLenses',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LensAliases: z
                .array(LensAliasSchema)
                .min(1)
                .openapi({
                  description:
                    '<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>',
                }),
            })
            .openapi({ required: ['LensAliases'] }),
        },
      },
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
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLensesLensAliasSharesRoute = createRoute({
  method: 'get',
  path: '/lenses/{LensAlias}/shares',
  description: 'List the lens shares associated with the lens.',
  operationId: 'ListLensShares',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      SharedWithPrefix: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'SharedWithPrefix',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the lens is shared.',
            schema: { type: 'string', maxLength: 100 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      Status: z
        .enum([
          'ACCEPTED',
          'REJECTED',
          'PENDING',
          'REVOKED',
          'EXPIRED',
          'ASSOCIATING',
          'ASSOCIATED',
          'FAILED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'Status',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              enum: [
                'ACCEPTED',
                'REJECTED',
                'PENDING',
                'REVOKED',
                'EXPIRED',
                'ASSOCIATING',
                'ASSOCIATED',
                'FAILED',
              ],
              description: 'The status of a workload share.',
            },
          },
          description: 'The status of a workload share.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLensSharesOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postLensesLensAliasSharesRoute = createRoute({
  method: 'post',
  path: '/lenses/{LensAlias}/shares',
  description:
    '<p>Create a lens share.</p> <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p> <p> Shared access to a lens is not removed until the lens invitation is deleted.</p> <p>If you share a lens with an organization or OU, all accounts in the organization or OU are granted access to the lens.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>',
  operationId: 'CreateLensShare',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SharedWith: z
                .string()
                .min(12)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.',
                }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
            })
            .openapi({ required: ['SharedWith', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLensShareOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postLensesLensAliasVersionsRoute = createRoute({
  method: 'post',
  path: '/lenses/{LensAlias}/versions',
  description:
    '<p>Create a new lens version.</p> <p>A lens can have up to 100 versions.</p> <p>Use this operation to publish a new lens version after you have imported a lens. The <code>LensAlias</code> is used to identify the lens to be published. The owner of a lens can share the lens with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Only the owner of a lens can delete it. </p>',
  operationId: 'CreateLensVersion',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LensVersion: z
                .string()
                .min(1)
                .max(32)
                .openapi({ description: 'The version of the lens being created.' }),
              IsMajorVersion: z
                .boolean()
                .exactOptional()
                .openapi({ description: 'Set to true if this new major lens version.' }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
            })
            .openapi({ required: ['LensVersion', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateLensVersionOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsWorkloadIdMilestonesRoute = createRoute({
  method: 'post',
  path: '/workloads/{WorkloadId}/milestones',
  description: 'Create a milestone for an existing workload.',
  operationId: 'CreateMilestone',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MilestoneName: z
                .string()
                .min(3)
                .max(100)
                .openapi({
                  description:
                    '<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>',
                }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
            })
            .openapi({ required: ['MilestoneName', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMilestoneOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsRoute = createRoute({
  method: 'post',
  path: '/workloads',
  description:
    '<p>Create a new workload.</p> <p>The owner of a workload can share the workload with other Amazon Web Services accounts, users, an organization, and organizational units (OUs) in the same Amazon Web Services Region. Only the owner of a workload can delete it.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/define-workload.html">Defining a Workload</a> in the <i>Well-Architected Tool User Guide</i>.</p> <important> <p>Either <code>AwsRegions</code>, <code>NonAwsRegions</code>, or both must be specified when creating a workload.</p> <p>You also must specify <code>ReviewOwner</code>, even though the parameter is listed as not being required in the following section. </p> </important>',
  operationId: 'CreateWorkload',
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
              WorkloadName: z
                .string()
                .min(3)
                .max(100)
                .openapi({
                  description:
                    '<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>',
                }),
              Description: z
                .string()
                .min(3)
                .max(250)
                .openapi({ description: 'The description for the workload.' }),
              Environment: z
                .enum(['PRODUCTION', 'PREPRODUCTION'])
                .openapi({ description: 'The environment for the workload.' }),
              AccountIds: z
                .array(AwsAccountIdSchema)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The list of Amazon Web Services account IDs associated with the workload.',
                }),
              AwsRegions: z
                .array(AwsRegionSchema)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.',
                }),
              NonAwsRegions: z
                .array(WorkloadNonAwsRegionSchema)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    ' The list of non-Amazon Web Services Regions associated with the workload.',
                }),
              PillarPriorities: z
                .array(PillarIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.',
                }),
              ArchitecturalDesign: z
                .string()
                .regex(/^(|(https?|ftp):\/\/[^\s\/$.?#].[^\s]*)$/)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The URL of the architectural design for the workload.' }),
              ReviewOwner: z
                .string()
                .min(3)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.',
                }),
              IndustryType: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>',
                }),
              Industry: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The industry for the workload.' }),
              Lenses: z
                .array(LensAliasSchema)
                .openapi({
                  description:
                    'The list of lenses associated with the workload. Each lens is identified by its <a>LensSummary$LensAlias</a>.',
                }),
              Notes: z
                .string()
                .max(2084)
                .exactOptional()
                .openapi({ description: 'The notes associated with the workload.' }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'The tags to be associated with the workload.' }),
              DiscoveryConfig: z
                .object({
                  TrustedAdvisorIntegrationStatus: TrustedAdvisorIntegrationStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Discovery integration status in respect to Trusted Advisor for the workload.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Discovery configuration associated to the workload.',
                  required: [],
                }),
              Applications: z
                .array(ApplicationArnSchema)
                .max(1)
                .exactOptional()
                .openapi({
                  description: 'List of AppRegistry application ARNs associated to the workload.',
                }),
            })
            .openapi({
              required: [
                'WorkloadName',
                'Description',
                'Environment',
                'Lenses',
                'ClientRequestToken',
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
      content: { 'application/json': { schema: CreateWorkloadOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdSharesRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/shares',
  description: 'List the workload shares associated with the workload.',
  operationId: 'ListWorkloadShares',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    query: z.object({
      SharedWithPrefix: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'SharedWithPrefix',
            in: 'query',
            required: false,
            description:
              'The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.',
            schema: { type: 'string', maxLength: 100 },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
      Status: z
        .enum([
          'ACCEPTED',
          'REJECTED',
          'PENDING',
          'REVOKED',
          'EXPIRED',
          'ASSOCIATING',
          'ASSOCIATED',
          'FAILED',
        ])
        .exactOptional()
        .openapi({
          param: {
            name: 'Status',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              enum: [
                'ACCEPTED',
                'REJECTED',
                'PENDING',
                'REVOKED',
                'EXPIRED',
                'ASSOCIATING',
                'ASSOCIATED',
                'FAILED',
              ],
              description: 'The status of a workload share.',
            },
          },
          description: 'The status of a workload share.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkloadSharesOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsWorkloadIdSharesRoute = createRoute({
  method: 'post',
  path: '/workloads/{WorkloadId}/shares',
  description:
    '<p>Create a workload share.</p> <p>The owner of a workload can share it with other Amazon Web Services accounts and users in the same Amazon Web Services Region. Shared access to a workload is not removed until the workload invitation is deleted.</p> <p>If you share a workload with an organization or OU, all accounts in the organization or OU are granted access to the workload.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/workloads-sharing.html">Sharing a workload</a> in the <i>Well-Architected Tool User Guide</i>.</p>',
  operationId: 'CreateWorkloadShare',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SharedWith: z
                .string()
                .min(12)
                .max(2048)
                .openapi({
                  description:
                    'The Amazon Web Services account ID, IAM role, organization ID, or organizational unit (OU) ID with which the workload is shared.',
                }),
              PermissionType: z
                .enum(['READONLY', 'CONTRIBUTOR'])
                .openapi({ description: 'Permission granted on a workload share.' }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
            })
            .openapi({ required: ['SharedWith', 'PermissionType', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkloadShareOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteLensesLensAliasClientRequestTokenLensStatusRoute = createRoute({
  method: 'delete',
  path: '/lenses/{LensAlias}#ClientRequestToken&LensStatus',
  description:
    '<p>Delete an existing lens.</p> <p>Only the owner of a lens can delete it. After the lens is deleted, Amazon Web Services accounts and users that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads. </p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>',
  operationId: 'DeleteLens',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      ClientRequestToken: z
        .string()
        .openapi({
          param: {
            name: 'ClientRequestToken',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
            },
          },
          description:
            '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
        }),
      LensStatus: z
        .enum(['ALL', 'DRAFT', 'PUBLISHED'])
        .openapi({
          param: {
            name: 'LensStatus',
            in: 'query',
            required: true,
            description: 'The status of the lens to be deleted.',
            schema: { type: 'string', enum: ['ALL', 'DRAFT', 'PUBLISHED'] },
          },
        }),
    }),
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteLensesLensAliasSharesShareIdClientRequestTokenRoute = createRoute({
  method: 'delete',
  path: '/lenses/{LensAlias}/shares/{ShareId}#ClientRequestToken',
  description:
    '<p>Delete a lens share.</p> <p>After the lens share is deleted, Amazon Web Services accounts, users, organizations, and organizational units (OUs) that you shared the lens with can continue to use it, but they will no longer be able to apply it to new workloads.</p> <note> <p> <b>Disclaimer</b> </p> <p>By sharing your custom lenses with other Amazon Web Services accounts, you acknowledge that Amazon Web Services will make your custom lenses available to those other accounts. Those other accounts may continue to access and use your shared custom lenses even if you delete the custom lenses from your own Amazon Web Services account or terminate your Amazon Web Services account.</p> </note>',
  operationId: 'DeleteLensShare',
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
      ShareId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'ShareId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description: 'The ID associated with the workload share.',
            },
          },
          description: 'The ID associated with the workload share.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      ClientRequestToken: z
        .string()
        .openapi({
          param: {
            name: 'ClientRequestToken',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
            },
          },
          description:
            '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWorkloadsWorkloadIdClientRequestTokenRoute = createRoute({
  method: 'delete',
  path: '/workloads/{WorkloadId}#ClientRequestToken',
  description: 'Delete an existing workload.',
  operationId: 'DeleteWorkload',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    query: z.object({
      ClientRequestToken: z
        .string()
        .openapi({
          param: {
            name: 'ClientRequestToken',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
            },
          },
          description:
            '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
        }),
    }),
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenRoute = createRoute({
  method: 'delete',
  path: '/workloads/{WorkloadId}/shares/{ShareId}#ClientRequestToken',
  description: 'Delete a workload share.',
  operationId: 'DeleteWorkloadShare',
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
      ShareId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'ShareId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description: 'The ID associated with the workload share.',
            },
          },
          description: 'The ID associated with the workload share.',
        }),
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    query: z.object({
      ClientRequestToken: z
        .string()
        .openapi({
          param: {
            name: 'ClientRequestToken',
            in: 'query',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
            },
          },
          description:
            '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
        }),
    }),
  },
  responses: {
    200: { description: 'Success' },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWorkloadsWorkloadIdDisassociateLensesRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}/disassociateLenses',
  description:
    '<p>Disassociate a lens from a workload.</p> <p>Up to 10 lenses can be disassociated from a workload in a single API operation.</p> <note> <p>The Amazon Web Services Well-Architected Framework lens (<code>wellarchitected</code>) cannot be removed from a workload.</p> </note>',
  operationId: 'DisassociateLenses',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LensAliases: z
                .array(LensAliasSchema)
                .min(1)
                .openapi({
                  description:
                    '<p>List of lens aliases to associate or disassociate with a workload. Up to 10 lenses can be specified.</p> <p>Identify a lens using its <a>LensSummary$LensAlias</a>.</p>',
                }),
            })
            .openapi({ required: ['LensAliases'] }),
        },
      },
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
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLensesLensAliasExportRoute = createRoute({
  method: 'get',
  path: '/lenses/{LensAlias}/export',
  description:
    '<p>Export an existing lens.</p> <p>Only the owner of a lens can export it. Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be exported.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>',
  operationId: 'ExportLens',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      LensVersion: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'LensVersion',
            in: 'query',
            required: false,
            description: 'The lens version to be exported.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ExportLensOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}',
  description: 'Get the answer to a specific question in a workload review.',
  operationId: 'GetAnswer',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
      QuestionId: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'QuestionId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the question.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'The ID of the question.',
        }),
    }),
    query: z.object({
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAnswerOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers/{QuestionId}',
  description: 'Update the answer to a specific question in a workload review.',
  operationId: 'UpdateAnswer',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
      QuestionId: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'QuestionId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description: 'The ID of the question.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'The ID of the question.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              SelectedChoices: z
                .array(ChoiceIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    '<p>List of selected choice IDs in a question answer.</p> <p>The values entered replace the previously selected choices.</p>',
                }),
              ChoiceUpdates: z
                .record(z.string(), ChoiceUpdateSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A list of choices to update on a question in your workload. The String key corresponds to the choice ID to be updated.',
                }),
              Notes: z
                .string()
                .max(2084)
                .exactOptional()
                .openapi({ description: 'The notes associated with the workload.' }),
              IsApplicable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description: 'Defines whether this question is applicable to a lens review.',
                }),
              Reason: z
                .enum([
                  'OUT_OF_SCOPE',
                  'BUSINESS_PRIORITIES',
                  'ARCHITECTURE_CONSTRAINTS',
                  'OTHER',
                  'NONE',
                ])
                .exactOptional()
                .openapi({
                  description: 'The reason why a question is not applicable to your workload.',
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
      content: { 'application/json': { schema: UpdateAnswerOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getConsolidatedReportFormatRoute = createRoute({
  method: 'get',
  path: '/consolidatedReport#Format',
  description:
    '<p>Get a consolidated report of your workloads.</p> <p>You can optionally choose to include workloads that have been shared with you.</p>',
  operationId: 'GetConsolidatedReport',
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
      Format: z
        .enum(['PDF', 'JSON'])
        .openapi({
          param: {
            name: 'Format',
            in: 'query',
            required: true,
            description:
              '<p>The format of the consolidated report.</p> <p>For <code>PDF</code>, <code>Base64String</code> is returned. For <code>JSON</code>, <code>Metrics</code> is returned.</p>',
            schema: { type: 'string', enum: ['PDF', 'JSON'] },
          },
        }),
      IncludeSharedResources: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'IncludeSharedResources',
            in: 'query',
            required: false,
            description:
              'Set to <code>true</code> to have shared resources included in the report.',
            schema: { type: 'boolean' },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(15),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 15 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetConsolidatedReportOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getLensesLensAliasRoute = createRoute({
  method: 'get',
  path: '/lenses/{LensAlias}',
  description: 'Get an existing lens.',
  operationId: 'GetLens',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      LensVersion: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'LensVersion',
            in: 'query',
            required: false,
            description: 'The lens version to be retrieved.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLensOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsLensAliasRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}',
  description: 'Get lens review.',
  operationId: 'GetLensReview',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLensReviewOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWorkloadsWorkloadIdLensReviewsLensAliasRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}',
  description: 'Update lens review for a particular workload.',
  operationId: 'UpdateLensReview',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              LensNotes: z
                .string()
                .max(2084)
                .exactOptional()
                .openapi({ description: 'The notes associated with the workload.' }),
              PillarNotes: z
                .record(z.string(), NotesSchema)
                .exactOptional()
                .openapi({ description: 'List of pillar notes of a lens review in a workload.' }),
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
      content: { 'application/json': { schema: UpdateLensReviewOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsLensAliasReportRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/report',
  description: 'Get lens review report.',
  operationId: 'GetLensReviewReport',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLensReviewReportOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLensesLensAliasVersionDifferenceRoute = createRoute({
  method: 'get',
  path: '/lenses/{LensAlias}/versionDifference',
  description: 'Get lens version differences.',
  operationId: 'GetLensVersionDifference',
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
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      BaseLensVersion: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'BaseLensVersion',
            in: 'query',
            required: false,
            description: 'The base version of the lens.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
      TargetLensVersion: z
        .string()
        .min(1)
        .max(32)
        .exactOptional()
        .openapi({
          param: {
            name: 'TargetLensVersion',
            in: 'query',
            required: false,
            description: 'The lens version to target a difference for.',
            schema: { type: 'string', minLength: 1, maxLength: 32 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetLensVersionDifferenceOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdMilestonesMilestoneNumberRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/milestones/{MilestoneNumber}',
  description: 'Get a milestone for an existing workload.',
  operationId: 'GetMilestone',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      MilestoneNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(100),
        )
        .openapi({
          param: {
            name: 'MilestoneNumber',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMilestoneOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}',
  description: 'Get an existing workload.',
  operationId: 'GetWorkload',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetWorkloadOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWorkloadsWorkloadIdRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}',
  description: 'Update an existing workload.',
  operationId: 'UpdateWorkload',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              WorkloadName: z
                .string()
                .min(3)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the workload.</p> <p>The name must be unique within an account within an Amazon Web Services Region. Spaces and capitalization are ignored when checking for uniqueness.</p>',
                }),
              Description: z
                .string()
                .min(3)
                .max(250)
                .exactOptional()
                .openapi({ description: 'The description for the workload.' }),
              Environment: z
                .enum(['PRODUCTION', 'PREPRODUCTION'])
                .exactOptional()
                .openapi({ description: 'The environment for the workload.' }),
              AccountIds: z
                .array(AwsAccountIdSchema)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'The list of Amazon Web Services account IDs associated with the workload.',
                }),
              AwsRegions: z
                .array(AwsRegionSchema)
                .max(50)
                .exactOptional()
                .openapi({
                  description:
                    'The list of Amazon Web Services Regions associated with the workload, for example, <code>us-east-2</code>, or <code>ca-central-1</code>.',
                }),
              NonAwsRegions: z
                .array(WorkloadNonAwsRegionSchema)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    ' The list of non-Amazon Web Services Regions associated with the workload.',
                }),
              PillarPriorities: z
                .array(PillarIdSchema)
                .exactOptional()
                .openapi({
                  description:
                    'The priorities of the pillars, which are used to order items in the improvement plan. Each pillar is represented by its <a>PillarReviewSummary$PillarId</a>.',
                }),
              ArchitecturalDesign: z
                .string()
                .regex(/^(|(https?|ftp):\/\/[^\s\/$.?#].[^\s]*)$/)
                .max(2048)
                .exactOptional()
                .openapi({ description: 'The URL of the architectural design for the workload.' }),
              ReviewOwner: z
                .string()
                .min(3)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The review owner of the workload. The name, email address, or identifier for the primary group or individual that owns the workload review process.',
                }),
              IsReviewOwnerUpdateAcknowledged: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '<p>Flag indicating whether the workload owner has acknowledged that the <i>Review owner</i> field is required.</p> <p>If a <b>Review owner</b> is not added to the workload within 60 days of acknowledgement, access to the workload is restricted until an owner is added.</p>',
                }),
              IndustryType: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The industry type for the workload.</p> <p>If specified, must be one of the following:</p> <ul> <li> <p> <code>Agriculture</code> </p> </li> <li> <p> <code>Automobile</code> </p> </li> <li> <p> <code>Defense</code> </p> </li> <li> <p> <code>Design and Engineering</code> </p> </li> <li> <p> <code>Digital Advertising</code> </p> </li> <li> <p> <code>Education</code> </p> </li> <li> <p> <code>Environmental Protection</code> </p> </li> <li> <p> <code>Financial Services</code> </p> </li> <li> <p> <code>Gaming</code> </p> </li> <li> <p> <code>General Public Services</code> </p> </li> <li> <p> <code>Healthcare</code> </p> </li> <li> <p> <code>Hospitality</code> </p> </li> <li> <p> <code>InfoTech</code> </p> </li> <li> <p> <code>Justice and Public Safety</code> </p> </li> <li> <p> <code>Life Sciences</code> </p> </li> <li> <p> <code>Manufacturing</code> </p> </li> <li> <p> <code>Media &amp; Entertainment</code> </p> </li> <li> <p> <code>Mining &amp; Resources</code> </p> </li> <li> <p> <code>Oil &amp; Gas</code> </p> </li> <li> <p> <code>Power &amp; Utilities</code> </p> </li> <li> <p> <code>Professional Services</code> </p> </li> <li> <p> <code>Real Estate &amp; Construction</code> </p> </li> <li> <p> <code>Retail &amp; Wholesale</code> </p> </li> <li> <p> <code>Social Protection</code> </p> </li> <li> <p> <code>Telecommunications</code> </p> </li> <li> <p> <code>Travel, Transportation &amp; Logistics</code> </p> </li> <li> <p> <code>Other</code> </p> </li> </ul>',
                }),
              Industry: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({ description: 'The industry for the workload.' }),
              Notes: z
                .string()
                .max(2084)
                .exactOptional()
                .openapi({ description: 'The notes associated with the workload.' }),
              ImprovementStatus: z
                .enum([
                  'NOT_APPLICABLE',
                  'NOT_STARTED',
                  'IN_PROGRESS',
                  'COMPLETE',
                  'RISK_ACKNOWLEDGED',
                ])
                .exactOptional()
                .openapi({ description: 'The improvement status for a workload.' }),
              DiscoveryConfig: z
                .object({
                  TrustedAdvisorIntegrationStatus: TrustedAdvisorIntegrationStatusSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Discovery integration status in respect to Trusted Advisor for the workload.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Discovery configuration associated to the workload.',
                  required: [],
                }),
              Applications: z
                .array(ApplicationArnSchema)
                .max(1)
                .exactOptional()
                .openapi({
                  description: 'List of AppRegistry application ARNs to associate to the workload.',
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
      content: { 'application/json': { schema: UpdateWorkloadOutputSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putImportLensRoute = createRoute({
  method: 'put',
  path: '/importLens',
  description:
    '<p>Import a new custom lens or update an existing custom lens.</p> <p>To update an existing custom lens, specify its ARN as the <code>LensAlias</code>. If no ARN is specified, a new custom lens is created.</p> <p>The new or updated lens will have a status of <code>DRAFT</code>. The lens cannot be applied to workloads or shared with other Amazon Web Services accounts until it\'s published with <a>CreateLensVersion</a>.</p> <p>Lenses are defined in JSON. For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-format-specification.html">JSON format specification</a> in the <i>Well-Architected Tool User Guide</i>.</p> <p>A custom lens cannot exceed 500 KB in size.</p> <note> <p> <b>Disclaimer</b> </p> <p>Do not include or gather personal identifiable information (PII) of end users or other identifiable individuals in or via your custom lenses. If your custom lens or those shared with you and used in your account do include or collect PII you are responsible for: ensuring that the included PII is processed in accordance with applicable law, providing adequate privacy notices, and obtaining necessary consents for processing such data.</p> </note>',
  operationId: 'ImportLens',
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
              LensAlias: z
                .string()
                .min(1)
                .max(128)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
                }),
              JSONString: z
                .string()
                .min(2)
                .max(500000)
                .openapi({ description: 'The JSON representation of a lens.' }),
              ClientRequestToken: z
                .string()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .exactOptional()
                .openapi({ description: 'Tags to associate to a lens.' }),
            })
            .openapi({ required: ['JSONString', 'ClientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ImportLensOutputSchema } },
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'ServiceQuotaExceededException',
      content: { 'application/json': { schema: ServiceQuotaExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    485: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    486: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsLensAliasAnswersRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/answers',
  description: 'List of answers for a particular workload and lens.',
  operationId: 'ListAnswers',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      PillarId: z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'PillarId',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
        }),
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAnswersOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsWorkloadIdChecksRoute = createRoute({
  method: 'post',
  path: '/workloads/{WorkloadId}/checks',
  description: 'List of Trusted Advisor check details by account related to the workload.',
  operationId: 'ListCheckDetails',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to use to retrieve the next set of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return for this request.',
                }),
              LensArn: z.string().openapi({ description: 'Well-Architected Lens ARN.' }),
              PillarId: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
                }),
              QuestionId: z
                .string()
                .min(1)
                .max(128)
                .openapi({ description: 'The ID of the question.' }),
              ChoiceId: z.string().min(1).max(64).openapi({ description: 'The ID of a choice.' }),
            })
            .openapi({ required: ['LensArn', 'PillarId', 'QuestionId', 'ChoiceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCheckDetailsOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsWorkloadIdCheckSummariesRoute = createRoute({
  method: 'post',
  path: '/workloads/{WorkloadId}/checkSummaries',
  description:
    'List of Trusted Advisor checks summarized for all accounts related to the workload.',
  operationId: 'ListCheckSummaries',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to use to retrieve the next set of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return for this request.',
                }),
              LensArn: z.string().openapi({ description: 'Well-Architected Lens ARN.' }),
              PillarId: z
                .string()
                .min(1)
                .max(64)
                .openapi({
                  description:
                    '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
                }),
              QuestionId: z
                .string()
                .min(1)
                .max(128)
                .openapi({ description: 'The ID of the question.' }),
              ChoiceId: z.string().min(1).max(64).openapi({ description: 'The ID of a choice.' }),
            })
            .openapi({ required: ['LensArn', 'PillarId', 'QuestionId', 'ChoiceId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListCheckSummariesOutputSchema } },
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
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/improvements',
  description: 'List lens review improvements.',
  operationId: 'ListLensReviewImprovements',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    query: z.object({
      PillarId: z
        .string()
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          param: {
            name: 'PillarId',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
              minLength: 1,
              maxLength: 64,
            },
          },
          description:
            '<p>The ID used to identify a pillar, for example, <code>security</code>.</p> <p>A pillar is identified by its <a>PillarReviewSummary$PillarId</a>.</p>',
        }),
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 100 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLensReviewImprovementsOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getWorkloadsWorkloadIdLensReviewsRoute = createRoute({
  method: 'get',
  path: '/workloads/{WorkloadId}/lensReviews',
  description: 'List lens reviews for a particular workload.',
  operationId: 'ListLensReviews',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    query: z.object({
      MilestoneNumber: z
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
            name: 'MilestoneNumber',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description:
                '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
              minimum: 1,
              maximum: 100,
            },
          },
          description:
            '<p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>',
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return for this request.',
              minimum: 1,
              maximum: 50,
            },
          },
          description: 'The maximum number of results to return for this request.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLensReviewsOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getLensesRoute = createRoute({
  method: 'get',
  path: '/lenses',
  description: 'List the available lenses.',
  operationId: 'ListLenses',
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
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'integer',
              description: 'The maximum number of results to return for this request.',
              minimum: 1,
              maximum: 50,
            },
          },
          description: 'The maximum number of results to return for this request.',
        }),
      LensType: z
        .enum(['AWS_OFFICIAL', 'CUSTOM_SHARED', 'CUSTOM_SELF'])
        .exactOptional()
        .openapi({
          param: {
            name: 'LensType',
            in: 'query',
            required: false,
            description: 'The type of lenses to be returned.',
            schema: { type: 'string', enum: ['AWS_OFFICIAL', 'CUSTOM_SHARED', 'CUSTOM_SELF'] },
          },
        }),
      LensStatus: z
        .enum(['ALL', 'DRAFT', 'PUBLISHED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'LensStatus',
            in: 'query',
            required: false,
            description: 'The status of lenses to be returned.',
            schema: { type: 'string', enum: ['ALL', 'DRAFT', 'PUBLISHED'] },
          },
        }),
      LensName: z
        .string()
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          param: {
            name: 'LensName',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The full name of the lens.',
              minLength: 1,
              maxLength: 128,
            },
          },
          description: 'The full name of the lens.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListLensesOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postWorkloadsWorkloadIdMilestonesSummariesRoute = createRoute({
  method: 'post',
  path: '/workloads/{WorkloadId}/milestonesSummaries',
  description: 'List all milestones for an existing workload.',
  operationId: 'ListMilestones',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
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
      content: {
        'application/json': {
          schema: z
            .object({
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to use to retrieve the next set of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return for this request.',
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
      content: { 'application/json': { schema: ListMilestonesOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const postNotificationsRoute = createRoute({
  method: 'post',
  path: '/notifications',
  description: 'List lens notifications.',
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
      content: {
        'application/json': {
          schema: z
            .object({
              WorkloadId: z
                .string()
                .regex(/[0-9a-f]{32}/)
                .exactOptional()
                .openapi({
                  description:
                    'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to use to retrieve the next set of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return for this request.',
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
      content: { 'application/json': { schema: ListNotificationsOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getShareInvitationsRoute = createRoute({
  method: 'get',
  path: '/shareInvitations',
  description: 'List the workload invitations.',
  operationId: 'ListShareInvitations',
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
      WorkloadNamePrefix: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'WorkloadNamePrefix',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description:
                'An optional string added to the beginning of each workload name returned in the results.',
              maxLength: 100,
            },
          },
          description:
            'An optional string added to the beginning of each workload name returned in the results.',
        }),
      LensNamePrefix: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'LensNamePrefix',
            in: 'query',
            required: false,
            description:
              'An optional string added to the beginning of each lens name returned in the results.',
            schema: { type: 'string', maxLength: 100 },
          },
        }),
      ShareResourceType: z
        .enum(['WORKLOAD', 'LENS'])
        .exactOptional()
        .openapi({
          param: {
            name: 'ShareResourceType',
            in: 'query',
            required: false,
            description: 'The type of share invitations to be returned.',
            schema: { type: 'string', enum: ['WORKLOAD', 'LENS'] },
          },
        }),
      NextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'NextToken',
            in: 'query',
            required: false,
            description: '',
            schema: {
              type: 'string',
              description: 'The token to use to retrieve the next set of results.',
            },
          },
          description: 'The token to use to retrieve the next set of results.',
        }),
      MaxResults: z
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
            name: 'MaxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to return for this request.',
            schema: { type: 'integer', minimum: 1, maximum: 50 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListShareInvitationsOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const getTagsWorkloadArnRoute = createRoute({
  method: 'get',
  path: '/tags/{WorkloadArn}',
  description:
    '<p>List the tags for a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>',
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
      WorkloadArn: z
        .string()
        .openapi({
          param: {
            name: 'WorkloadArn',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ARN for the workload.' },
          },
          description: 'The ARN for the workload.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListTagsForResourceOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postTagsWorkloadArnRoute = createRoute({
  method: 'post',
  path: '/tags/{WorkloadArn}',
  description:
    '<p>Adds one or more tags to the specified resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note>',
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
      WorkloadArn: z
        .string()
        .openapi({
          param: {
            name: 'WorkloadArn',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ARN for the workload.' },
          },
          description: 'The ARN for the workload.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 50)
                .openapi({ description: 'The tags for the resource.' }),
            })
            .openapi({ required: ['Tags'] }),
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const postWorkloadsSummariesRoute = createRoute({
  method: 'post',
  path: '/workloadsSummaries',
  description: 'Paginated list of workloads.',
  operationId: 'ListWorkloads',
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
      content: {
        'application/json': {
          schema: z
            .object({
              WorkloadNamePrefix: z
                .string()
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    'An optional string added to the beginning of each workload name returned in the results.',
                }),
              NextToken: z
                .string()
                .exactOptional()
                .openapi({ description: 'The token to use to retrieve the next set of results.' }),
              MaxResults: z
                .int()
                .min(1)
                .max(50)
                .exactOptional()
                .openapi({
                  description: 'The maximum number of results to return for this request.',
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
      content: { 'application/json': { schema: ListWorkloadsOutputSchema } },
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
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const deleteTagsWorkloadArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{WorkloadArn}#tagKeys',
  description:
    '<p>Deletes specified tags from a resource.</p> <note> <p>The WorkloadArn parameter can be either a workload ARN or a custom lens ARN.</p> </note> <p>To specify multiple tags, use separate <b>tagKeys</b> parameters, for example:</p> <p> <code>DELETE /tags/WorkloadArn?tagKeys=key1&amp;tagKeys=key2</code> </p>',
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
      WorkloadArn: z
        .string()
        .openapi({
          param: {
            name: 'WorkloadArn',
            in: 'path',
            required: true,
            description: '',
            schema: { type: 'string', description: 'The ARN for the workload.' },
          },
          description: 'The ARN for the workload.',
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
            description:
              'A list of tag keys. Existing tags of the resource whose keys are members of this list are removed from the resource.',
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
      content: { 'application/json': { schema: UntagResourceOutputSchema } },
    },
    480: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
  },
})

export const patchGlobalSettingsRoute = createRoute({
  method: 'patch',
  path: '/global-settings',
  description:
    'Updates whether the Amazon Web Services account is opted into organization sharing features.',
  operationId: 'UpdateGlobalSettings',
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
              OrganizationSharingStatus: z
                .enum(['ENABLED', 'DISABLED'])
                .exactOptional()
                .openapi({ description: 'The status of organization sharing settings.' }),
            })
            .openapi({ required: [] }),
        },
      },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    482: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    483: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    484: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchShareInvitationsShareInvitationIdRoute = createRoute({
  method: 'patch',
  path: '/shareInvitations/{ShareInvitationId}',
  description:
    '<p>Update a workload or custom lens share invitation.</p> <note> <p>This API operation can be called independently of any resource. Previous documentation implied that a workload ARN must be specified.</p> </note>',
  operationId: 'UpdateShareInvitation',
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
      ShareInvitationId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'ShareInvitationId',
            in: 'path',
            required: true,
            description: 'The ID assigned to the share invitation.',
            schema: { type: 'string', pattern: '[0-9a-f]{32}' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ShareInvitationAction: z
                .enum(['ACCEPT', 'REJECT'])
                .openapi({ description: 'Share invitation action taken by contributor.' }),
            })
            .openapi({ required: ['ShareInvitationAction'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateShareInvitationOutputSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const patchWorkloadsWorkloadIdSharesShareIdRoute = createRoute({
  method: 'patch',
  path: '/workloads/{WorkloadId}/shares/{ShareId}',
  description: 'Update a workload share.',
  operationId: 'UpdateWorkloadShare',
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
      ShareId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'ShareId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description: 'The ID associated with the workload share.',
            },
          },
          description: 'The ID associated with the workload share.',
        }),
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              PermissionType: z
                .enum(['READONLY', 'CONTRIBUTOR'])
                .openapi({ description: 'Permission granted on a workload share.' }),
            })
            .openapi({ required: ['PermissionType'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateWorkloadShareOutputSchema } },
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
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})

export const putWorkloadsWorkloadIdLensReviewsLensAliasUpgradeRoute = createRoute({
  method: 'put',
  path: '/workloads/{WorkloadId}/lensReviews/{LensAlias}/upgrade',
  description: 'Upgrade lens review for a particular workload.',
  operationId: 'UpgradeLensReview',
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
      WorkloadId: z
        .string()
        .regex(/[0-9a-f]{32}/)
        .openapi({
          param: {
            name: 'WorkloadId',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              pattern: '[0-9a-f]{32}',
              description:
                'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
            },
          },
          description:
            'The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.',
        }),
      LensAlias: z
        .string()
        .min(1)
        .max(128)
        .openapi({
          param: {
            name: 'LensAlias',
            in: 'path',
            required: true,
            description: '',
            schema: {
              type: 'string',
              description:
                '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
              minLength: 1,
              maxLength: 128,
            },
          },
          description:
            '<p>The alias of the lens.</p> <p>For Amazon Web Services official lenses, this is either the lens alias, such as <code>serverless</code>, or the lens ARN, such as <code>arn:aws:wellarchitected:us-east-1::lens/serverless</code>. Note that some operations (such as ExportLens and CreateLensShare) are not permitted on Amazon Web Services official lenses.</p> <p>For custom lenses, this is the lens ARN, such as <code>arn:aws:wellarchitected:us-west-2:123456789012:lens/0123456789abcdef01234567890abcdef</code>. </p> <p>Each lens is identified by its <a>LensSummary$LensAlias</a>.</p>',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              MilestoneName: z
                .string()
                .min(3)
                .max(100)
                .openapi({
                  description:
                    '<p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>',
                }),
              ClientRequestToken: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '<p>A unique case-sensitive string used to ensure that this request is idempotent (executes only once).</p> <p>You should not reuse the same token for other requests. If you retry a request with the same client request token and the same parameters after the original request has completed successfully, the result of the original request is returned.</p> <important> <p>This token is listed as required, however, if you do not specify it, the Amazon Web Services SDKs automatically generate one for you. If you are not using the Amazon Web Services SDK or the CLI, you must provide this token or the request will fail.</p> </important>',
                }),
            })
            .openapi({ required: ['MilestoneName'] }),
        },
      },
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
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
    484: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    485: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
  },
})
