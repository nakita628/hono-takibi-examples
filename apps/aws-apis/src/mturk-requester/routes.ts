import { createRoute, z } from '@hono/zod-openapi'

const AcceptQualificationRequestResponseSchema = z
  .object({})
  .openapi('AcceptQualificationRequestResponse')

const StringSchema = z.string().openapi('String')

const IntegerSchema = z.int().openapi('Integer')

const AcceptQualificationRequestRequestSchema = z
  .object({
    QualificationRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Qualification request, as returned by the <code>GetQualificationRequests</code> operation.',
        }),
    ),
    IntegerValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The value of the Qualification. You can omit this value if you are using the presence or absence of the Qualification as the basis for a HIT requirement. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QualificationRequestId'], title: 'AcceptQualificationRequestRequest' })
  .openapi('AcceptQualificationRequestRequest')

const ServiceFaultSchema = z.any().openapi('ServiceFault')

const RequestErrorSchema = z.any().openapi('RequestError')

const ApproveAssignmentResponseSchema = z.object({}).openapi('ApproveAssignmentResponse')

const EntityIdSchema = z
  .string()
  .regex(/^[A-Z0-9]+$/)
  .min(1)
  .max(64)
  .openapi('EntityId')

const BooleanSchema = z.boolean().openapi('Boolean')

const ApproveAssignmentRequestSchema = z
  .object({
    AssignmentId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the assignment. The assignment must correspond to a HIT created by the Requester. ',
        }),
    ),
    RequesterFeedback: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A message for the Worker, which the Worker can see in the Status section of the web site. ',
        }),
    ).exactOptional(),
    OverrideRejection: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A flag indicating that an assignment should be approved even if it was previously rejected. Defaults to <code>False</code>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AssignmentId'], title: 'ApproveAssignmentRequest' })
  .openapi('ApproveAssignmentRequest')

const AssociateQualificationWithWorkerResponseSchema = z
  .object({})
  .openapi('AssociateQualificationWithWorkerResponse')

const CustomerIdSchema = z
  .string()
  .regex(/^A[A-Z0-9]+$/)
  .min(1)
  .max(64)
  .openapi('CustomerId')

const AssociateQualificationWithWorkerRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Qualification type to use for the assigned Qualification.',
        }),
    ),
    WorkerId: CustomerIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the Worker to whom the Qualification is being assigned. Worker IDs are included with submitted HIT assignments and Qualification requests. ',
        }),
    ),
    IntegerValue: IntegerSchema.and(
      z.any().openapi({ description: 'The value of the Qualification to assign.' }),
    ).exactOptional(),
    SendNotification: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether to send a notification email message to the Worker saying that the qualification was assigned to the Worker. Note: this is true by default. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QualificationTypeId', 'WorkerId'],
    title: 'AssociateQualificationWithWorkerRequest',
  })
  .openapi('AssociateQualificationWithWorkerRequest')

const CreateAdditionalAssignmentsForHITResponseSchema = z
  .object({})
  .openapi('CreateAdditionalAssignmentsForHITResponse')

const IdempotencyTokenSchema = z.string().min(1).max(64).openapi('IdempotencyToken')

const CreateAdditionalAssignmentsForHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: 'The ID of the HIT to extend.' })),
    NumberOfAdditionalAssignments: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The number of additional assignments to request for this HIT.' }),
    ),
    UniqueRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique identifier for this request, which allows you to retry the call on error without extending the HIT multiple times. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the extend HIT already exists in the system from a previous call using the same <code>UniqueRequestToken</code>, subsequent calls will return an error with a message containing the request ID. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['HITId', 'NumberOfAdditionalAssignments'],
    title: 'CreateAdditionalAssignmentsForHITRequest',
  })
  .openapi('CreateAdditionalAssignmentsForHITRequest')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const HITStatusSchema = z
  .enum(['Assignable', 'Unassignable', 'Reviewable', 'Reviewing', 'Disposed'])
  .openapi('HITStatus')

const CurrencyAmountSchema = z
  .string()
  .regex(/^[0-9]+(\.)?[0-9]{0,2}$/)
  .openapi({ description: 'A string representing a currency amount.' })
  .openapi('CurrencyAmount')

const LongSchema = z.int().openapi('Long')

const ComparatorSchema = z
  .enum([
    'LessThan',
    'LessThanOrEqualTo',
    'GreaterThan',
    'GreaterThanOrEqualTo',
    'EqualTo',
    'NotEqualTo',
    'Exists',
    'DoesNotExist',
    'In',
    'NotIn',
  ])
  .openapi('Comparator')

const IntegerListSchema = z.array(IntegerSchema).openapi('IntegerList')

const CountryParametersSchema = z.string().length(2).openapi('CountryParameters')

const LocaleSchema = z
  .object({
    Country: CountryParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The country of the locale. Must be a valid ISO 3166 country code. For example, the code US refers to the United States of America. ',
        }),
    ),
    Subdivision: CountryParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'The state or subdivision of the locale. A valid ISO 3166-2 subdivision code. For example, the code WA refers to the state of Washington.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Country'],
    description: 'The Locale data structure represents a geographical region or location.',
  })
  .openapi('Locale')

const LocaleListSchema = z.array(LocaleSchema).openapi('LocaleList')

const HITAccessActionsSchema = z
  .enum(['Accept', 'PreviewAndAccept', 'DiscoverPreviewAndAccept'])
  .openapi('HITAccessActions')

const QualificationRequirementSchema = z
  .object({
    QualificationTypeId: StringSchema.and(
      z.any().openapi({ description: ' The ID of the Qualification type for the requirement.' }),
    ),
    Comparator: ComparatorSchema.and(
      z
        .any()
        .openapi({
          description:
            "The kind of comparison to make against a Qualification's value. You can compare a Qualification's value to an IntegerValue to see if it is LessThan, LessThanOrEqualTo, GreaterThan, GreaterThanOrEqualTo, EqualTo, or NotEqualTo the IntegerValue. You can compare it to a LocaleValue to see if it is EqualTo, or NotEqualTo the LocaleValue. You can check to see if the value is In or NotIn a set of IntegerValue or LocaleValue values. Lastly, a Qualification requirement can also test if a Qualification Exists or DoesNotExist in the user's profile, regardless of its value. ",
        }),
    ),
    IntegerValues: IntegerListSchema.and(
      z
        .any()
        .openapi({
          description:
            " The integer value to compare against the Qualification's value. IntegerValue must not be present if Comparator is Exists or DoesNotExist. IntegerValue can only be used if the Qualification type has an integer value; it cannot be used with the Worker_Locale QualificationType ID. When performing a set comparison by using the In or the NotIn comparator, you can use up to 15 IntegerValue elements in a QualificationRequirement data structure. ",
        }),
    ).exactOptional(),
    LocaleValues: LocaleListSchema.and(
      z
        .any()
        .openapi({
          description:
            " The locale value to compare against the Qualification's value. The local value must be a valid ISO 3166 country code or supports ISO 3166-2 subdivisions. LocaleValue can only be used with a Worker_Locale QualificationType ID. LocaleValue can only be used with the EqualTo, NotEqualTo, In, and NotIn comparators. You must only use a single LocaleValue element when using the EqualTo or NotEqualTo comparators. When performing a set comparison by using the In or the NotIn comparator, you can use up to 30 LocaleValue elements in a QualificationRequirement data structure. ",
        }),
    ).exactOptional(),
    RequiredToPreview: BooleanSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            " DEPRECATED: Use the <code>ActionsGuarded</code> field instead. If RequiredToPreview is true, the question data for the HIT will not be shown when a Worker whose Qualifications do not meet this requirement tries to preview the HIT. That is, a Worker's Qualifications must meet all of the requirements for which RequiredToPreview is true in order to preview the HIT. If a Worker meets all of the requirements where RequiredToPreview is true (or if there are no such requirements), but does not meet all of the requirements for the HIT, the Worker will be allowed to preview the HIT's question data, but will not be allowed to accept and complete the HIT. The default is false. This should not be used in combination with the <code>ActionsGuarded</code> field. ",
        }),
    ).exactOptional(),
    ActionsGuarded: HITAccessActionsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Setting this attribute prevents Workers whose Qualifications do not meet this QualificationRequirement from taking the specified action. Valid arguments include "Accept" (Worker cannot accept the HIT, but can preview the HIT and see it in their search results), "PreviewAndAccept" (Worker cannot accept or preview the HIT, but can see the HIT in their search results), and "DiscoverPreviewAndAccept" (Worker cannot accept, preview, or see the HIT in their search results). It\'s possible for you to create a HIT with multiple QualificationRequirements (which can have different values for the ActionGuarded attribute). In this case, the Worker is only permitted to perform an action when they have met all QualificationRequirements guarding the action. The actions in the order of least restrictive to most restrictive are Discover, Preview and Accept. For example, if a Worker meets all QualificationRequirements that are set to DiscoverPreviewAndAccept, but do not meet all requirements that are set with PreviewAndAccept, then the Worker will be able to Discover, i.e. see the HIT in their search result, but will not be able to Preview or Accept the HIT. ActionsGuarded should not be used in combination with the <code>RequiredToPreview</code> field. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['QualificationTypeId', 'Comparator'],
    description:
      ' The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results. ',
  })
  .openapi('QualificationRequirement')

const QualificationRequirementListSchema = z
  .array(QualificationRequirementSchema)
  .openapi('QualificationRequirementList')

const HITReviewStatusSchema = z
  .enum(['NotReviewed', 'MarkedForReview', 'ReviewedAppropriate', 'ReviewedInappropriate'])
  .openapi('HITReviewStatus')

const HITSchema = z
  .object({
    HITId: EntityIdSchema.and(
      z.any().openapi({ description: ' A unique identifier for the HIT.' }),
    ).exactOptional(),
    HITTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the HIT type of this HIT' }),
    ).exactOptional(),
    HITGroupId: EntityIdSchema.and(
      z.any().openapi({ description: ' The ID of the HIT Group of this HIT.' }),
    ).exactOptional(),
    HITLayoutId: EntityIdSchema.and(
      z.any().openapi({ description: ' The ID of the HIT Layout of this HIT.' }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time the HIT was created.' }),
    ).exactOptional(),
    Title: StringSchema.and(
      z.any().openapi({ description: ' The title of the HIT.' }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: ' A general description of the HIT.' }),
    ).exactOptional(),
    Question: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The data the Worker completing the HIT uses produce the results. This is either either a QuestionForm, HTMLQuestion or an ExternalQuestion data structure.',
        }),
    ).exactOptional(),
    Keywords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One or more words or phrases that describe the HIT, separated by commas. Search terms similar to the keywords of a HIT are more likely to have the HIT in the search results.',
        }),
    ).exactOptional(),
    HITStatus: HITStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            'The status of the HIT and its assignments. Valid Values are Assignable | Unassignable | Reviewable | Reviewing | Disposed. ',
        }),
    ).exactOptional(),
    MaxAssignments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of times the HIT can be accepted and completed before the HIT becomes unavailable. ',
        }),
    ).exactOptional(),
    Reward: CurrencyAmountSchema.exactOptional(),
    AutoApprovalDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, after the Worker submits an assignment for the HIT that the results are automatically approved by Amazon Mechanical Turk. This is the amount of time the Requester has to reject an assignment submitted by a Worker before the assignment is auto-approved and the Worker is paid. ',
        }),
    ).exactOptional(),
    Expiration: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time the HIT expires.' }),
    ).exactOptional(),
    AssignmentDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The length of time, in seconds, that a Worker has to complete the HIT after accepting it.',
        }),
    ).exactOptional(),
    RequesterAnnotation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An arbitrary data field the Requester who created the HIT can use. This field is visible only to the creator of the HIT.',
        }),
    ).exactOptional(),
    QualificationRequirements: QualificationRequirementListSchema.and(
      z
        .any()
        .openapi({
          description:
            " Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. ",
        }),
    ).exactOptional(),
    HITReviewStatus: HITReviewStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Indicates the review status of the HIT. Valid Values are NotReviewed | MarkedForReview | ReviewedAppropriate | ReviewedInappropriate.',
        }),
    ).exactOptional(),
    NumberOfAssignmentsPending: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of assignments for this HIT that are being previewed or have been accepted by Workers, but have not yet been submitted, returned, or abandoned.',
        }),
    ).exactOptional(),
    NumberOfAssignmentsAvailable: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of assignments for this HIT that are available for Workers to accept.',
        }),
    ).exactOptional(),
    NumberOfAssignmentsCompleted: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of assignments for this HIT that have been approved or rejected.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.',
    required: [],
  })
  .openapi('HIT')

const CreateHITResponseSchema = z
  .object({
    HIT: HITSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHITResponse')

const StringListSchema = z.array(StringSchema).openapi('StringList')

const ParameterMapEntrySchema = z
  .object({
    Key: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The QuestionID from the HIT that is used to identify which question requires Mechanical Turk to score as part of the ScoreMyKnownAnswers/2011-09-01 Review Policy. ',
        }),
    ).exactOptional(),
    Values: StringListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of answers to the question specified in the MapEntry Key element. The Worker must match all values in order for the answer to be scored correctly. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy. ',
    required: [],
  })
  .openapi('ParameterMapEntry')

const ParameterMapEntryListSchema = z
  .array(ParameterMapEntrySchema)
  .openapi('ParameterMapEntryList')

const PolicyParameterSchema = z
  .object({
    Key: StringSchema.and(
      z.any().openapi({ description: ' Name of the parameter from the list of Review Polices. ' }),
    ).exactOptional(),
    Values: StringListSchema.and(
      z.any().openapi({ description: ' The list of values of the Parameter' }),
    ).exactOptional(),
    MapEntries: ParameterMapEntryListSchema.and(
      z.any().openapi({ description: ' List of ParameterMapEntry objects. ' }),
    ).exactOptional(),
  })
  .openapi({ description: ' Name of the parameter from the Review policy. ', required: [] })
  .openapi('PolicyParameter')

const PolicyParameterListSchema = z.array(PolicyParameterSchema).openapi('PolicyParameterList')

const ReviewPolicySchema = z
  .object({
    PolicyName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Name of a Review Policy: SimplePlurality/2011-09-01 or ScoreMyKnownAnswers/2011-09-01 ',
        }),
    ),
    Parameters: PolicyParameterListSchema.and(
      z.any().openapi({ description: 'Name of the parameter from the Review policy.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PolicyName'],
    description:
      ' HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. ',
  })
  .openapi('ReviewPolicy')

const HITLayoutParameterSchema = z
  .object({
    Name: StringSchema.and(
      z.any().openapi({ description: ' The name of the parameter in the HITLayout. ' }),
    ),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The value substituted for the parameter referenced in the HITLayout. ',
        }),
    ),
  })
  .openapi({
    required: ['Name', 'Value'],
    description:
      ' The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. ',
  })
  .openapi('HITLayoutParameter')

const HITLayoutParameterListSchema = z
  .array(HITLayoutParameterSchema)
  .openapi('HITLayoutParameterList')

const CreateHITRequestSchema = z
  .object({
    MaxAssignments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of times the HIT can be accepted and completed before the HIT becomes unavailable. ',
        }),
    ).exactOptional(),
    AutoApprovalDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. ',
        }),
    ).exactOptional(),
    LifetimeInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. ',
        }),
    ),
    AssignmentDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. ',
        }),
    ),
    Reward: CurrencyAmountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of money the Requester will pay a Worker for successfully completing the HIT. ',
        }),
    ),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. ',
        }),
    ),
    Keywords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. ',
        }),
    ),
    Question: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The data the person completing the HIT uses to produce the results. </p> <p> Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. </p> <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>',
        }),
    ).exactOptional(),
    RequesterAnnotation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. </p> <p> The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. </p> <p> The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. </p>",
        }),
    ).exactOptional(),
    QualificationRequirements: QualificationRequirementListSchema.and(
      z
        .any()
        .openapi({
          description:
            " Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. ",
        }),
    ).exactOptional(),
    UniqueRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. </p> <note> <p> Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs. </p> </note>',
        }),
    ).exactOptional(),
    AssignmentReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. ',
        }),
    ).exactOptional(),
    HITReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. ',
        }),
    ).exactOptional(),
    HITLayoutId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. </p> <p> Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. </p>',
        }),
    ).exactOptional(),
    HITLayoutParameters: HITLayoutParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'LifetimeInSeconds',
      'AssignmentDurationInSeconds',
      'Reward',
      'Title',
      'Description',
    ],
    title: 'CreateHITRequest',
  })
  .openapi('CreateHITRequest')

const CreateHITTypeResponseSchema = z
  .object({
    HITTypeId: EntityIdSchema.and(
      z.any().openapi({ description: ' The ID of the newly registered HIT type.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHITTypeResponse')

const CreateHITTypeRequestSchema = z
  .object({
    AutoApprovalDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of seconds after an assignment for the HIT has been submitted, after which the assignment is considered Approved automatically unless the Requester explicitly rejects it. ',
        }),
    ).exactOptional(),
    AssignmentDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of time, in seconds, that a Worker has to complete the HIT after accepting it. If a Worker does not complete the assignment within the specified duration, the assignment is considered abandoned. If the HIT is still active (that is, its lifetime has not elapsed), the assignment becomes available for other users to find and accept. ',
        }),
    ),
    Reward: CurrencyAmountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of money the Requester will pay a Worker for successfully completing the HIT. ',
        }),
    ),
    Title: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The title of the HIT. A title should be short and descriptive about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT title appears in search results, and everywhere the HIT is mentioned. ',
        }),
    ),
    Keywords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One or more words or phrases that describe the HIT, separated by commas. These words are used in searches to find HITs. ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A general description of the HIT. A description includes detailed information about the kind of task the HIT contains. On the Amazon Mechanical Turk web site, the HIT description appears in the expanded view of search results, and in the HIT and assignment screens. A good description gives the user enough information to evaluate the HIT before accepting it. ',
        }),
    ),
    QualificationRequirements: QualificationRequirementListSchema.and(
      z
        .any()
        .openapi({
          description:
            " Conditions that a Worker's Qualifications must meet in order to accept the HIT. A HIT can have between zero and ten Qualification requirements. All requirements must be met in order for a Worker to accept the HIT. Additionally, other actions can be restricted using the <code>ActionsGuarded</code> field on each <code>QualificationRequirement</code> structure. ",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AssignmentDurationInSeconds', 'Reward', 'Title', 'Description'],
    title: 'CreateHITTypeRequest',
  })
  .openapi('CreateHITTypeRequest')

const CreateHITWithHITTypeResponseSchema = z
  .object({
    HIT: HITSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Contains the newly created HIT data. For a description of the HIT data structure as it appears in responses, see the HIT Data Structure documentation. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateHITWithHITTypeResponse')

const CreateHITWithHITTypeRequestSchema = z
  .object({
    HITTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The HIT type ID you want to create this HIT with.' }),
    ),
    MaxAssignments: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of times the HIT can be accepted and completed before the HIT becomes unavailable. ',
        }),
    ).exactOptional(),
    LifetimeInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' An amount of time, in seconds, after which the HIT is no longer available for users to accept. After the lifetime of the HIT elapses, the HIT no longer appears in HIT searches, even if not all of the assignments for the HIT have been accepted. ',
        }),
    ),
    Question: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The data the person completing the HIT uses to produce the results. </p> <p> Constraints: Must be a QuestionForm data structure, an ExternalQuestion data structure, or an HTMLQuestion data structure. The XML question data must not be larger than 64 kilobytes (65,535 bytes) in size, including whitespace. </p> <p>Either a Question parameter or a HITLayoutId parameter must be provided.</p>',
        }),
    ).exactOptional(),
    RequesterAnnotation: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> An arbitrary data field. The RequesterAnnotation parameter lets your application attach arbitrary data to the HIT for tracking purposes. For example, this parameter could be an identifier internal to the Requester's application that corresponds with the HIT. </p> <p> The RequesterAnnotation parameter for a HIT is only visible to the Requester who created the HIT. It is not shown to the Worker, or any other Requester. </p> <p> The RequesterAnnotation parameter may be different for each HIT you submit. It does not affect how your HITs are grouped. </p>",
        }),
    ).exactOptional(),
    UniqueRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> A unique identifier for this request which allows you to retry the call on error without creating duplicate HITs. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the HIT already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return a AWS.MechanicalTurk.HitAlreadyExists error with a message containing the HITId. </p> <note> <p> Note: It is your responsibility to ensure uniqueness of the token. The unique token expires after 24 hours. Subsequent calls using the same UniqueRequestToken made after the 24 hour limit could create duplicate HITs. </p> </note>',
        }),
    ).exactOptional(),
    AssignmentReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Assignment-level Review Policy applies to the assignments under the HIT. You can specify for Mechanical Turk to take various actions based on the policy. ',
        }),
    ).exactOptional(),
    HITReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The HIT-level Review Policy applies to the HIT. You can specify for Mechanical Turk to take various actions based on the policy. ',
        }),
    ).exactOptional(),
    HITLayoutId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The HITLayoutId allows you to use a pre-existing HIT design with placeholder values and create an additional HIT by providing those values as HITLayoutParameters. </p> <p> Constraints: Either a Question parameter or a HITLayoutId parameter must be provided. </p>',
        }),
    ).exactOptional(),
    HITLayoutParameters: HITLayoutParameterListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the HITLayoutId is provided, any placeholder values must be filled in with values using the HITLayoutParameter structure. For more information, see HITLayout. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HITTypeId', 'LifetimeInSeconds'], title: 'CreateHITWithHITTypeRequest' })
  .openapi('CreateHITWithHITTypeRequest')

const QualificationTypeStatusSchema = z
  .enum(['Active', 'Inactive'])
  .openapi('QualificationTypeStatus')

const QualificationTypeSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique identifier for the Qualification type. A Qualification type is given a Qualification type ID when you call the CreateQualificationType operation. ',
        }),
    ).exactOptional(),
    CreationTime: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time the Qualification type was created. ' }),
    ).exactOptional(),
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Qualification type. The type name is used to identify the type, and to find the type using a Qualification type search. ',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z.any().openapi({ description: ' A long description for the Qualification type. ' }),
    ).exactOptional(),
    Keywords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' One or more words or phrases that describe theQualification type, separated by commas. The Keywords make the type easier to find using a search. ',
        }),
    ).exactOptional(),
    QualificationTypeStatus: QualificationTypeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            " The status of the Qualification type. A Qualification type's status determines if users can apply to receive a Qualification of this type, and if HITs can be created with requirements based on this type. Valid values are Active | Inactive. ",
        }),
    ).exactOptional(),
    Test: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The questions for a Qualification test associated with this Qualification type that a user can take to obtain a Qualification of this type. This parameter must be specified if AnswerKey is present. A Qualification type cannot have both a specified Test parameter and an AutoGranted value of true. ',
        }),
    ).exactOptional(),
    TestDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of time, in seconds, given to a Worker to complete the Qualification test, beginning from the time the Worker requests the Qualification. ',
        }),
    ).exactOptional(),
    AnswerKey: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The answers to the Qualification test specified in the Test parameter.',
        }),
    ).exactOptional(),
    RetryDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The amount of time, in seconds, Workers must wait after taking the Qualification test before they can take it again. Workers can take a Qualification test multiple times if they were not granted the Qualification from a previous attempt, or if the test offers a gradient score and they want a better score. If not specified, retries are disabled and Workers can request a Qualification only once. ',
        }),
    ).exactOptional(),
    IsRequestable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether the Qualification type is one that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test. This value is False for Qualifications assigned automatically by the system. Valid values are True | False. ',
        }),
    ).exactOptional(),
    AutoGranted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test. Valid values are True | False.',
        }),
    ).exactOptional(),
    AutoGrantedValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Qualification integer value to use for automatically granted Qualifications, if AutoGranted is true. This is 1 by default. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. ',
    required: [],
  })
  .openapi('QualificationType')

const CreateQualificationTypeResponseSchema = z
  .object({
    QualificationType: QualificationTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The created Qualification type, returned as a QualificationType data structure.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateQualificationTypeResponse')

const CreateQualificationTypeRequestSchema = z
  .object({
    Name: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name you give to the Qualification type. The type name is used to represent the Qualification to Workers, and to find the type using a Qualification type search. It must be unique across all of your Qualification types.',
        }),
    ),
    Keywords: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'One or more words or phrases that describe the Qualification type, separated by commas. The keywords of a type make the type easier to find during a search.',
        }),
    ).exactOptional(),
    Description: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A long description for the Qualification type. On the Amazon Mechanical Turk website, the long description is displayed when a Worker examines a Qualification type.',
        }),
    ),
    QualificationTypeStatus: QualificationTypeStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The initial status of the Qualification type.</p> <p>Constraints: Valid values are: Active | Inactive</p>',
        }),
    ),
    RetryDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of seconds that a Worker must wait after requesting a Qualification of the Qualification type before the worker can retry the Qualification request.</p> <p>Constraints: None. If not specified, retries are disabled and Workers can request a Qualification of this type only once, even if the Worker has not been granted the Qualification. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must delete existing retry-enabled Qualification type and then create a new Qualification type with retries disabled.</p>',
        }),
    ).exactOptional(),
    Test: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified. </p> <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p> <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>',
        }),
    ).exactOptional(),
    AnswerKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.</p> <p>Constraints: Must not be longer than 65535 bytes.</p> <p>Constraints: None. If not specified, you must process Qualification requests manually.</p>',
        }),
    ).exactOptional(),
    TestDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.',
        }),
    ).exactOptional(),
    AutoGranted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p> <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>',
        }),
    ).exactOptional(),
    AutoGrantedValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Description', 'QualificationTypeStatus'],
    title: 'CreateQualificationTypeRequest',
  })
  .openapi('CreateQualificationTypeRequest')

const CreateWorkerBlockResponseSchema = z.object({}).openapi('CreateWorkerBlockResponse')

const CreateWorkerBlockRequestSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: 'The ID of the Worker to block.' }),
    ),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message explaining the reason for blocking the Worker. This parameter enables you to keep track of your Workers. The Worker does not see this message.',
        }),
    ),
  })
  .openapi({ required: ['WorkerId', 'Reason'], title: 'CreateWorkerBlockRequest' })
  .openapi('CreateWorkerBlockRequest')

const DeleteHITResponseSchema = z.object({}).openapi('DeleteHITResponse')

const DeleteHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: 'The ID of the HIT to be deleted.' })),
  })
  .openapi({ required: ['HITId'], title: 'DeleteHITRequest' })
  .openapi('DeleteHITRequest')

const DeleteQualificationTypeResponseSchema = z
  .object({})
  .openapi('DeleteQualificationTypeResponse')

const DeleteQualificationTypeRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the QualificationType to dispose.' }),
    ),
  })
  .openapi({ required: ['QualificationTypeId'], title: 'DeleteQualificationTypeRequest' })
  .openapi('DeleteQualificationTypeRequest')

const DeleteWorkerBlockResponseSchema = z.object({}).openapi('DeleteWorkerBlockResponse')

const DeleteWorkerBlockRequestSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: 'The ID of the Worker to unblock.' }),
    ),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that explains the reason for unblocking the Worker. The Worker does not see this message.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['WorkerId'], title: 'DeleteWorkerBlockRequest' })
  .openapi('DeleteWorkerBlockRequest')

const DisassociateQualificationFromWorkerResponseSchema = z
  .object({})
  .openapi('DisassociateQualificationFromWorkerResponse')

const DisassociateQualificationFromWorkerRequestSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Worker who possesses the Qualification to be revoked.',
        }),
    ),
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Qualification type of the Qualification to be revoked.',
        }),
    ),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A text message that explains why the Qualification was revoked. The user who had the Qualification sees this message.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WorkerId', 'QualificationTypeId'],
    title: 'DisassociateQualificationFromWorkerRequest',
  })
  .openapi('DisassociateQualificationFromWorkerRequest')

const GetAccountBalanceResponseSchema = z
  .object({
    AvailableBalance: CurrencyAmountSchema.exactOptional(),
    OnHoldBalance: CurrencyAmountSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAccountBalanceResponse')

const GetAccountBalanceRequestSchema = z
  .object({})
  .openapi({ title: 'GetAccountBalanceRequest' })
  .openapi('GetAccountBalanceRequest')

const AssignmentStatusSchema = z
  .enum(['Submitted', 'Approved', 'Rejected'])
  .openapi('AssignmentStatus')

const AssignmentSchema = z
  .object({
    AssignmentId: EntityIdSchema.and(
      z.any().openapi({ description: ' A unique identifier for the assignment.' }),
    ).exactOptional(),
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: ' The ID of the Worker who accepted the HIT.' }),
    ).exactOptional(),
    HITId: EntityIdSchema.and(
      z.any().openapi({ description: ' The ID of the HIT.' }),
    ).exactOptional(),
    AssignmentStatus: AssignmentStatusSchema.and(
      z.any().openapi({ description: ' The status of the assignment.' }),
    ).exactOptional(),
    AutoApprovalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If results have been submitted, AutoApprovalTime is the date and time the results of the assignment results are considered Approved automatically if they have not already been explicitly approved or rejected by the Requester. This value is derived from the auto-approval delay specified by the Requester in the HIT. This value is omitted from the assignment if the Worker has not yet submitted results.',
        }),
    ).exactOptional(),
    AcceptTime: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time the Worker accepted the assignment.' }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the Worker has submitted results, SubmitTime is the date and time the assignment was submitted. This value is omitted from the assignment if the Worker has not yet submitted results.',
        }),
    ).exactOptional(),
    ApprovalTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the Worker has submitted results and the Requester has approved the results, ApprovalTime is the date and time the Requester approved the results. This value is omitted from the assignment if the Requester has not yet approved the results.',
        }),
    ).exactOptional(),
    RejectionTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' If the Worker has submitted results and the Requester has rejected the results, RejectionTime is the date and time the Requester rejected the results.',
        }),
    ).exactOptional(),
    Deadline: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The date and time of the deadline for the assignment. This value is derived from the deadline specification for the HIT and the date and time the Worker accepted the HIT.',
        }),
    ).exactOptional(),
    Answer: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " The Worker's answers submitted for the HIT contained in a QuestionFormAnswers document, if the Worker provides an answer. If the Worker does not provide any answers, Answer may contain a QuestionFormAnswers document, or Answer may be empty.",
        }),
    ).exactOptional(),
    RequesterFeedback: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The feedback string included with the call to the ApproveAssignment operation or the RejectAssignment operation, if the Requester approved or rejected the assignment and specified feedback.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      " The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. ",
    required: [],
  })
  .openapi('Assignment')

const GetAssignmentResponseSchema = z
  .object({
    Assignment: AssignmentSchema.and(
      z
        .any()
        .openapi({
          description: ' The assignment. The response includes one Assignment element. ',
        }),
    ).exactOptional(),
    HIT: HITSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The HIT associated with this assignment. The response includes one HIT element.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAssignmentResponse')

const GetAssignmentRequestSchema = z
  .object({
    AssignmentId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the Assignment to be retrieved.' }),
    ),
  })
  .openapi({ required: ['AssignmentId'], title: 'GetAssignmentRequest' })
  .openapi('GetAssignmentRequest')

const GetFileUploadURLResponseSchema = z
  .object({
    FileUploadURL: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' A temporary URL for the file that the Worker uploaded for the answer. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetFileUploadURLResponse')

const GetFileUploadURLRequestSchema = z
  .object({
    AssignmentId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the assignment that contains the question with a FileUploadAnswer.',
        }),
    ),
    QuestionIdentifier: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier of the question with a FileUploadAnswer, as specified in the QuestionForm of the HIT.',
        }),
    ),
  })
  .openapi({ required: ['AssignmentId', 'QuestionIdentifier'], title: 'GetFileUploadURLRequest' })
  .openapi('GetFileUploadURLRequest')

const GetHITResponseSchema = z
  .object({
    HIT: HITSchema.and(
      z.any().openapi({ description: ' Contains the requested HIT data.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetHITResponse')

const GetHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the HIT to be retrieved.' }),
    ),
  })
  .openapi({ required: ['HITId'], title: 'GetHITRequest' })
  .openapi('GetHITRequest')

const QualificationStatusSchema = z.enum(['Granted', 'Revoked']).openapi('QualificationStatus')

const QualificationSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: ' The ID of the Qualification type for the Qualification.' }),
    ).exactOptional(),
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: ' The ID of the Worker who possesses the Qualification. ' }),
    ).exactOptional(),
    GrantTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            " The date and time the Qualification was granted to the Worker. If the Worker's Qualification was revoked, and then re-granted based on a new Qualification request, GrantTime is the date and time of the last call to the AcceptQualificationRequest operation.",
        }),
    ).exactOptional(),
    IntegerValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The value (score) of the Qualification, if the Qualification has an integer value.',
        }),
    ).exactOptional(),
    LocaleValue: LocaleSchema.exactOptional(),
    Status: QualificationStatusSchema.and(
      z
        .any()
        .openapi({
          description: ' The status of the Qualification. Valid values are Granted | Revoked.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score).',
    required: [],
  })
  .openapi('Qualification')

const GetQualificationScoreResponseSchema = z
  .object({
    Qualification: QualificationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Qualification data structure of the Qualification assigned to a user, including the Qualification type and the value (score). ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQualificationScoreResponse')

const GetQualificationScoreRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the QualificationType.' }),
    ),
    WorkerId: CustomerIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the Worker whose Qualification is being updated.' }),
    ),
  })
  .openapi({ required: ['QualificationTypeId', 'WorkerId'], title: 'GetQualificationScoreRequest' })
  .openapi('GetQualificationScoreRequest')

const GetQualificationTypeResponseSchema = z
  .object({
    QualificationType: QualificationTypeSchema.and(
      z.any().openapi({ description: ' The returned Qualification Type' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetQualificationTypeResponse')

const GetQualificationTypeRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the QualificationType.' }),
    ),
  })
  .openapi({ required: ['QualificationTypeId'], title: 'GetQualificationTypeRequest' })
  .openapi('GetQualificationTypeRequest')

const PaginationTokenSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({
    description:
      'If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results. ',
  })
  .openapi('PaginationToken')

const AssignmentListSchema = z.array(AssignmentSchema).openapi('AssignmentList')

const ListAssignmentsForHITResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.',
        }),
    ).exactOptional(),
    Assignments: AssignmentListSchema.and(
      z
        .any()
        .openapi({
          description: ' The collection of Assignment data structures returned by this call.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListAssignmentsForHITResponse')

const ResultSizeSchema = z.int().min(1).max(100).openapi('ResultSize')

const AssignmentStatusListSchema = z.array(AssignmentStatusSchema).openapi('AssignmentStatusList')

const ListAssignmentsForHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: 'The ID of the HIT.' })),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.exactOptional(),
    AssignmentStatuses: AssignmentStatusListSchema.and(
      z
        .any()
        .openapi({
          description: 'The status of the assignments to return: Submitted | Approved | Rejected',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HITId'], title: 'ListAssignmentsForHITRequest' })
  .openapi('ListAssignmentsForHITRequest')

const BonusPaymentSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: 'The ID of the Worker to whom the bonus was paid.' }),
    ).exactOptional(),
    BonusAmount: CurrencyAmountSchema.exactOptional(),
    AssignmentId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The ID of the assignment associated with this bonus payment.' }),
    ).exactOptional(),
    Reason: StringSchema.and(
      z.any().openapi({ description: 'The Reason text given when the bonus was granted, if any.' }),
    ).exactOptional(),
    GrantTime: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time of when the bonus was granted.' }),
    ).exactOptional(),
  })
  .openapi({
    description: 'An object representing a Bonus payment paid to a Worker.',
    required: [],
  })
  .openapi('BonusPayment')

const BonusPaymentListSchema = z.array(BonusPaymentSchema).openapi('BonusPaymentList')

const ListBonusPaymentsResponseSchema = z
  .object({
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of bonus payments on this page in the filtered results list, equivalent to the number of bonus payments being returned by this call. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
    BonusPayments: BonusPaymentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A successful request to the ListBonusPayments operation returns a list of BonusPayment objects. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListBonusPaymentsResponse')

const ListBonusPaymentsRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the HIT associated with the bonus payments to retrieve. If not specified, all bonus payments for all assignments for the given HIT are returned. Either the HITId parameter or the AssignmentId parameter must be specified',
        }),
    ).exactOptional(),
    AssignmentId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the assignment associated with the bonus payments to retrieve. If specified, only bonus payments for the given assignment are returned. Either the HITId parameter or the AssignmentId parameter must be specified',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.exactOptional(),
  })
  .openapi({ title: 'ListBonusPaymentsRequest', required: [] })
  .openapi('ListBonusPaymentsRequest')

const HITListSchema = z.array(HITSchema).openapi('HITList')

const ListHITsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call.',
        }),
    ).exactOptional(),
    HITs: HITListSchema.and(
      z.any().openapi({ description: ' The list of HIT elements returned by the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListHITsResponse')

const ListHITsRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.exactOptional(),
  })
  .openapi({ title: 'ListHITsRequest', required: [] })
  .openapi('ListHITsRequest')

const ListHITsForQualificationTypeResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. ',
        }),
    ).exactOptional(),
    HITs: HITListSchema.and(
      z.any().openapi({ description: ' The list of HIT elements returned by the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListHITsForQualificationTypeResponse')

const ListHITsForQualificationTypeRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: ' The ID of the Qualification type to use when querying HITs. ' }),
    ),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination Token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z.any().openapi({ description: ' Limit the number of results returned. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['QualificationTypeId'], title: 'ListHITsForQualificationTypeRequest' })
  .openapi('ListHITsForQualificationTypeRequest')

const QualificationRequestSchema = z
  .object({
    QualificationRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the Qualification request, a unique identifier generated when the request was submitted. ',
        }),
    ).exactOptional(),
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the Qualification type the Worker is requesting, as returned by the CreateQualificationType operation. ',
        }),
    ).exactOptional(),
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: ' The ID of the Worker requesting the Qualification.' }),
    ).exactOptional(),
    Test: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The contents of the Qualification test that was presented to the Worker, if the type has a test and the Worker has submitted answers. This value is identical to the QuestionForm associated with the Qualification type at the time the Worker requests the Qualification.',
        }),
    ).exactOptional(),
    Answer: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            " The Worker's answers for the Qualification type's test contained in a QuestionFormAnswers document, if the type has a test and the Worker has submitted answers. If the Worker does not provide any answers, Answer may be empty. ",
        }),
    ).exactOptional(),
    SubmitTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time the Qualification request had a status of Submitted. This is either the time the Worker submitted answers for a Qualification test, or the time the Worker requested the Qualification if the Qualification type does not have a test. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The QualificationRequest data structure represents a request a Worker has made for a Qualification. ',
    required: [],
  })
  .openapi('QualificationRequest')

const QualificationRequestListSchema = z
  .array(QualificationRequestSchema)
  .openapi('QualificationRequestList')

const ListQualificationRequestsResponseSchema = z
  .object({
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of Qualification requests on this page in the filtered results list, equivalent to the number of Qualification requests being returned by this call.',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
    QualificationRequests: QualificationRequestListSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Qualification request. The response includes one QualificationRequest element for each Qualification request returned by the query.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQualificationRequestsResponse')

const ListQualificationRequestsRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the QualificationType.' }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of results to return in a single call. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListQualificationRequestsRequest', required: [] })
  .openapi('ListQualificationRequestsRequest')

const QualificationTypeListSchema = z
  .array(QualificationTypeSchema)
  .openapi('QualificationTypeList')

const ListQualificationTypesResponseSchema = z
  .object({
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of Qualification types on this page in the filtered results list, equivalent to the number of types this operation returns. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
    QualificationTypes: QualificationTypeListSchema.and(
      z
        .any()
        .openapi({
          description: ' The list of QualificationType elements returned by the query. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListQualificationTypesResponse')

const ListQualificationTypesRequestSchema = z
  .object({
    Query: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A text query against all of the searchable attributes of Qualification types. ',
        }),
    ).exactOptional(),
    MustBeRequestable: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Specifies that only Qualification types that a user can request through the Amazon Mechanical Turk web site, such as by taking a Qualification test, are returned as results of the search. Some Qualification types, such as those assigned automatically by the system, cannot be requested directly by users. If false, all Qualification types, including those managed by the system, are considered. Valid values are True | False. ',
        }),
    ),
    MustBeOwnedByCaller: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies that only Qualification types that the Requester created are returned. If false, the operation returns all Qualification types. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z
        .any()
        .openapi({ description: ' The maximum number of results to return in a single call. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['MustBeRequestable'], title: 'ListQualificationTypesRequest' })
  .openapi('ListQualificationTypesRequest')

const ReviewResultDetailSchema = z
  .object({
    ActionId: EntityIdSchema.and(
      z.any().openapi({ description: ' A unique identifier of the Review action result. ' }),
    ).exactOptional(),
    SubjectId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HITID or AssignmentId about which this result was taken. Note that HIT-level Review Policies will often emit results about both the HIT itself and its Assignments, while Assignment-level review policies generally only emit results about the Assignment itself. ',
        }),
    ).exactOptional(),
    SubjectType: StringSchema.and(
      z.any().openapi({ description: ' The type of the object from the SubjectId field.' }),
    ).exactOptional(),
    QuestionId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            " Specifies the QuestionId the result is describing. Depending on whether the TargetType is a HIT or Assignment this results could specify multiple values. If TargetType is HIT and QuestionId is absent, then the result describes results of the HIT, including the HIT agreement score. If ObjectType is Assignment and QuestionId is absent, then the result describes the Worker's performance on the HIT. ",
        }),
    ).exactOptional(),
    Key: StringSchema.and(
      z
        .any()
        .openapi({ description: ' Key identifies the particular piece of reviewed information. ' }),
    ).exactOptional(),
    Value: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' The values of Key provided by the review policies you have selected. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' This data structure is returned multiple times for each result specified in the Review Policy. ',
    required: [],
  })
  .openapi('ReviewResultDetail')

const ReviewResultDetailListSchema = z
  .array(ReviewResultDetailSchema)
  .openapi('ReviewResultDetailList')

const ReviewActionStatusSchema = z
  .enum(['Intended', 'Succeeded', 'Failed', 'Cancelled'])
  .openapi('ReviewActionStatus')

const ReviewActionDetailSchema = z
  .object({
    ActionId: EntityIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the action.' }),
    ).exactOptional(),
    ActionName: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The nature of the action itself. The Review Policy is responsible for examining the HIT and Assignments, emitting results, and deciding which other actions will be necessary. ',
        }),
    ).exactOptional(),
    TargetId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: ' The specific HITId or AssignmentID targeted by the action.' }),
    ).exactOptional(),
    TargetType: StringSchema.and(
      z.any().openapi({ description: ' The type of object in TargetId.' }),
    ).exactOptional(),
    Status: ReviewActionStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The current disposition of the action: INTENDED, SUCCEEDED, FAILED, or CANCELLED. ',
        }),
    ).exactOptional(),
    CompleteTime: TimestampSchema.and(
      z.any().openapi({ description: ' The date when the action was completed.' }),
    ).exactOptional(),
    Result: StringSchema.and(
      z.any().openapi({ description: ' A description of the outcome of the review.' }),
    ).exactOptional(),
    ErrorCode: StringSchema.and(
      z.any().openapi({ description: ' Present only when the Results have a FAILED Status.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy. ',
    required: [],
  })
  .openapi('ReviewActionDetail')

const ReviewActionDetailListSchema = z
  .array(ReviewActionDetailSchema)
  .openapi('ReviewActionDetailList')

const ReviewReportSchema = z
  .object({
    ReviewResults: ReviewResultDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of ReviewResults objects for each action specified in the Review Policy. ',
        }),
    ).exactOptional(),
    ReviewActions: ReviewActionDetailListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A list of ReviewAction objects for each action specified in the Review Policy. ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: ' Contains both ReviewResult and ReviewAction elements for a particular HIT. ',
    required: [],
  })
  .openapi('ReviewReport')

const ListReviewPolicyResultsForHITResponseSchema = z
  .object({
    HITId: EntityIdSchema.and(
      z
        .any()
        .openapi({ description: 'The HITId of the HIT for which results have been returned.' }),
    ).exactOptional(),
    AssignmentReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name of the Assignment-level Review Policy. This contains only the PolicyName element. ',
        }),
    ).exactOptional(),
    HITReviewPolicy: ReviewPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the HIT-level Review Policy. This contains only the PolicyName element.',
        }),
    ).exactOptional(),
    AssignmentReviewReport: ReviewReportSchema.and(
      z
        .any()
        .openapi({
          description: ' Contains both ReviewResult and ReviewAction elements for an Assignment. ',
        }),
    ).exactOptional(),
    HITReviewReport: ReviewReportSchema.and(
      z
        .any()
        .openapi({
          description:
            'Contains both ReviewResult and ReviewAction elements for a particular HIT. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReviewPolicyResultsForHITResponse')

const ReviewPolicyLevelSchema = z.enum(['Assignment', 'HIT']).openapi('ReviewPolicyLevel')

const ReviewPolicyLevelListSchema = z
  .array(ReviewPolicyLevelSchema)
  .openapi('ReviewPolicyLevelList')

const ListReviewPolicyResultsForHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier of the HIT to retrieve review results for.',
        }),
    ),
    PolicyLevels: ReviewPolicyLevelListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Policy Level(s) to retrieve review results for - HIT or Assignment. If omitted, the default behavior is to retrieve all data for both policy levels. For a list of all the described policies, see Review Policies. ',
        }),
    ).exactOptional(),
    RetrieveActions: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specify if the operation should retrieve a list of the actions taken executing the Review Policies and their outcomes. ',
        }),
    ).exactOptional(),
    RetrieveResults: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specify if the operation should retrieve a list of the results computed by the Review Policies. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z.any().openapi({ description: 'Limit the number of results returned.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['HITId'], title: 'ListReviewPolicyResultsForHITRequest' })
  .openapi('ListReviewPolicyResultsForHITRequest')

const ListReviewableHITsResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of HITs on this page in the filtered results list, equivalent to the number of HITs being returned by this call. ',
        }),
    ).exactOptional(),
    HITs: HITListSchema.and(
      z.any().openapi({ description: ' The list of HIT elements returned by the query.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListReviewableHITsResponse')

const ReviewableHITStatusSchema = z.enum(['Reviewable', 'Reviewing']).openapi('ReviewableHITStatus')

const ListReviewableHITsRequestSchema = z
  .object({
    HITTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the HIT type of the HITs to consider for the query. If not specified, all HITs for the Reviewer are considered ',
        }),
    ).exactOptional(),
    Status: ReviewableHITStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Can be either <code>Reviewable</code> or <code>Reviewing</code>. Reviewable is the default value. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination Token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z.any().openapi({ description: ' Limit the number of results returned. ' }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListReviewableHITsRequest', required: [] })
  .openapi('ListReviewableHITsRequest')

const WorkerBlockSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: ' The ID of the Worker who accepted the HIT.' }),
    ).exactOptional(),
    Reason: StringSchema.and(
      z.any().openapi({ description: ' A message explaining the reason the Worker was blocked. ' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block. ',
    required: [],
  })
  .openapi('WorkerBlock')

const WorkerBlockListSchema = z.array(WorkerBlockSchema).openapi('WorkerBlockList')

const ListWorkerBlocksResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of assignments on the page in the filtered results list, equivalent to the number of assignments returned by this call.',
        }),
    ).exactOptional(),
    WorkerBlocks: WorkerBlockListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of WorkerBlocks, containing the collection of Worker IDs and reasons for blocking.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkerBlocksResponse')

const ListWorkerBlocksRequestSchema = z
  .object({
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.exactOptional(),
  })
  .openapi({ title: 'ListWorkerBlocksRequest', required: [] })
  .openapi('ListWorkerBlocksRequest')

const QualificationListSchema = z.array(QualificationSchema).openapi('QualificationList')

const ListWorkersWithQualificationTypeResponseSchema = z
  .object({
    NextToken: PaginationTokenSchema.exactOptional(),
    NumResults: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The number of Qualifications on this page in the filtered results list, equivalent to the number of Qualifications being returned by this call.',
        }),
    ).exactOptional(),
    Qualifications: QualificationListSchema.and(
      z
        .any()
        .openapi({ description: ' The list of Qualification elements returned by this call. ' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListWorkersWithQualificationTypeResponse')

const ListWorkersWithQualificationTypeRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the Qualification type of the Qualifications to return.',
        }),
    ),
    Status: QualificationStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the Qualifications to return. Can be <code>Granted | Revoked</code>. ',
        }),
    ).exactOptional(),
    NextToken: PaginationTokenSchema.and(
      z.any().openapi({ description: 'Pagination Token' }),
    ).exactOptional(),
    MaxResults: ResultSizeSchema.and(
      z.any().openapi({ description: ' Limit the number of results returned. ' }),
    ).exactOptional(),
  })
  .openapi({ required: ['QualificationTypeId'], title: 'ListWorkersWithQualificationTypeRequest' })
  .openapi('ListWorkersWithQualificationTypeRequest')

const NotifyWorkersFailureCodeSchema = z
  .enum(['SoftFailure', 'HardFailure'])
  .openapi('NotifyWorkersFailureCode')

const NotifyWorkersFailureStatusSchema = z
  .object({
    NotifyWorkersFailureCode: NotifyWorkersFailureCodeSchema.and(
      z.any().openapi({ description: ' Encoded value for the failure type. ' }),
    ).exactOptional(),
    NotifyWorkersFailureMessage: StringSchema.and(
      z
        .any()
        .openapi({
          description: ' A message detailing the reason the Worker could not be notified. ',
        }),
    ).exactOptional(),
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: ' The ID of the Worker.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details. ',
    required: [],
  })
  .openapi('NotifyWorkersFailureStatus')

const NotifyWorkersFailureStatusListSchema = z
  .array(NotifyWorkersFailureStatusSchema)
  .openapi('NotifyWorkersFailureStatusList')

const NotifyWorkersResponseSchema = z
  .object({
    NotifyWorkersFailureStatuses: NotifyWorkersFailureStatusListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' When MTurk sends notifications to the list of Workers, it returns back any failures it encounters in this list of NotifyWorkersFailureStatus objects. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('NotifyWorkersResponse')

const CustomerIdListSchema = z.array(CustomerIdSchema).openapi('CustomerIdList')

const NotifyWorkersRequestSchema = z
  .object({
    Subject: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The subject line of the email message to send. Can include up to 200 characters.',
        }),
    ),
    MessageText: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The text of the email message to send. Can include up to 4,096 characters',
        }),
    ),
    WorkerIds: CustomerIdListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of Worker IDs you wish to notify. You can notify upto 100 Workers at a time.',
        }),
    ),
  })
  .openapi({ required: ['Subject', 'MessageText', 'WorkerIds'], title: 'NotifyWorkersRequest' })
  .openapi('NotifyWorkersRequest')

const RejectAssignmentResponseSchema = z.object({}).openapi('RejectAssignmentResponse')

const RejectAssignmentRequestSchema = z
  .object({
    AssignmentId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the assignment. The assignment must correspond to a HIT created by the Requester. ',
        }),
    ),
    RequesterFeedback: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A message for the Worker, which the Worker can see in the Status section of the web site. ',
        }),
    ),
  })
  .openapi({ required: ['AssignmentId', 'RequesterFeedback'], title: 'RejectAssignmentRequest' })
  .openapi('RejectAssignmentRequest')

const RejectQualificationRequestResponseSchema = z
  .object({})
  .openapi('RejectQualificationRequestResponse')

const RejectQualificationRequestRequestSchema = z
  .object({
    QualificationRequestId: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the Qualification request, as returned by the <code>ListQualificationRequests</code> operation. ',
        }),
    ),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A text message explaining why the request was rejected, to be shown to the Worker who made the request.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QualificationRequestId'], title: 'RejectQualificationRequestRequest' })
  .openapi('RejectQualificationRequestRequest')

const SendBonusResponseSchema = z.object({}).openapi('SendBonusResponse')

const SendBonusRequestSchema = z
  .object({
    WorkerId: CustomerIdSchema.and(
      z.any().openapi({ description: 'The ID of the Worker being paid the bonus.' }),
    ),
    BonusAmount: CurrencyAmountSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Bonus amount is a US Dollar amount specified using a string (for example, "5" represents $5.00 USD and "101.42" represents $101.42 USD). Do not include currency symbols or currency codes. ',
        }),
    ),
    AssignmentId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the assignment for which this bonus is paid.' }),
    ),
    Reason: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A message that explains the reason for the bonus payment. The Worker receiving the bonus can see this message.',
        }),
    ),
    UniqueRequestToken: IdempotencyTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A unique identifier for this request, which allows you to retry the call on error without granting multiple bonuses. This is useful in cases such as network timeouts where it is unclear whether or not the call succeeded on the server. If the bonus already exists in the system from a previous call using the same UniqueRequestToken, subsequent calls will return an error with a message containing the request ID.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['WorkerId', 'BonusAmount', 'AssignmentId', 'Reason'],
    title: 'SendBonusRequest',
  })
  .openapi('SendBonusRequest')

const SendTestEventNotificationResponseSchema = z
  .object({})
  .openapi('SendTestEventNotificationResponse')

const NotificationTransportSchema = z.enum(['Email', 'SQS', 'SNS']).openapi('NotificationTransport')

const EventTypeSchema = z
  .enum([
    'AssignmentAccepted',
    'AssignmentAbandoned',
    'AssignmentReturned',
    'AssignmentSubmitted',
    'AssignmentRejected',
    'AssignmentApproved',
    'HITCreated',
    'HITExpired',
    'HITReviewable',
    'HITExtended',
    'HITDisposed',
    'Ping',
  ])
  .openapi('EventType')

const EventTypeListSchema = z.array(EventTypeSchema).openapi('EventTypeList')

const NotificationSpecificationSchema = z
  .object({
    Destination: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The target for notification messages. The Destination’s format is determined by the specified Transport: </p> <ul> <li> <p>When Transport is Email, the Destination is your email address.</p> </li> <li> <p>When Transport is SQS, the Destination is your queue URL.</p> </li> <li> <p>When Transport is SNS, the Destination is the ARN of your topic.</p> </li> </ul>',
        }),
    ),
    Transport: NotificationTransportSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The method Amazon Mechanical Turk uses to send the notification. Valid Values: Email | SQS | SNS. ',
        }),
    ),
    Version: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the Notification API to use. Valid value is 2006-05-05.',
        }),
    ),
    EventTypes: EventTypeListSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation. ',
        }),
    ),
  })
  .openapi({
    required: ['Destination', 'Transport', 'Version', 'EventTypes'],
    description:
      'The NotificationSpecification data structure describes a HIT event notification for a HIT type.',
  })
  .openapi('NotificationSpecification')

const SendTestEventNotificationRequestSchema = z
  .object({
    Notification: NotificationSpecificationSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The notification specification to test. This value is identical to the value you would provide to the UpdateNotificationSettings operation when you establish the notification specification for a HIT type. ',
        }),
    ),
    TestEventType: EventTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The event to simulate to test the notification specification. This event is included in the test message even if the notification specification does not include the event type. The notification specification does not filter out the test event. ',
        }),
    ),
  })
  .openapi({
    required: ['Notification', 'TestEventType'],
    title: 'SendTestEventNotificationRequest',
  })
  .openapi('SendTestEventNotificationRequest')

const UpdateExpirationForHITResponseSchema = z.object({}).openapi('UpdateExpirationForHITResponse')

const UpdateExpirationForHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: ' The HIT to update. ' })),
    ExpireAt: TimestampSchema.and(
      z.any().openapi({ description: ' The date and time at which you want the HIT to expire ' }),
    ),
  })
  .openapi({ required: ['HITId', 'ExpireAt'], title: 'UpdateExpirationForHITRequest' })
  .openapi('UpdateExpirationForHITRequest')

const UpdateHITReviewStatusResponseSchema = z.object({}).openapi('UpdateHITReviewStatusResponse')

const UpdateHITReviewStatusRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: ' The ID of the HIT to update. ' })),
    Revert: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> Specifies how to update the HIT status. Default is <code>False</code>. </p> <ul> <li> <p> Setting this to false will only transition a HIT from <code>Reviewable</code> to <code>Reviewing</code> </p> </li> <li> <p> Setting this to true will only transition a HIT from <code>Reviewing</code> to <code>Reviewable</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HITId'], title: 'UpdateHITReviewStatusRequest' })
  .openapi('UpdateHITReviewStatusRequest')

const UpdateHITTypeOfHITResponseSchema = z.object({}).openapi('UpdateHITTypeOfHITResponse')

const UpdateHITTypeOfHITRequestSchema = z
  .object({
    HITId: EntityIdSchema.and(z.any().openapi({ description: 'The HIT to update.' })),
    HITTypeId: EntityIdSchema.and(z.any().openapi({ description: 'The ID of the new HIT type.' })),
  })
  .openapi({ required: ['HITId', 'HITTypeId'], title: 'UpdateHITTypeOfHITRequest' })
  .openapi('UpdateHITTypeOfHITRequest')

const UpdateNotificationSettingsResponseSchema = z
  .object({})
  .openapi('UpdateNotificationSettingsResponse')

const UpdateNotificationSettingsRequestSchema = z
  .object({
    HITTypeId: EntityIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The ID of the HIT type whose notification specification is being updated. ',
        }),
    ),
    Notification: NotificationSpecificationSchema.and(
      z.any().openapi({ description: ' The notification specification for the HIT type. ' }),
    ).exactOptional(),
    Active: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            ' Specifies whether notifications are sent for HITs of this HIT type, according to the notification specification. You must specify either the Notification parameter or the Active parameter for the call to UpdateNotificationSettings to succeed. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['HITTypeId'], title: 'UpdateNotificationSettingsRequest' })
  .openapi('UpdateNotificationSettingsRequest')

const UpdateQualificationTypeResponseSchema = z
  .object({
    QualificationType: QualificationTypeSchema.and(
      z.any().openapi({ description: ' Contains a QualificationType data structure.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateQualificationTypeResponse')

const UpdateQualificationTypeRequestSchema = z
  .object({
    QualificationTypeId: EntityIdSchema.and(
      z.any().openapi({ description: 'The ID of the Qualification type to update.' }),
    ),
    Description: StringSchema.and(
      z.any().openapi({ description: 'The new description of the Qualification type.' }),
    ).exactOptional(),
    QualificationTypeStatus: QualificationTypeStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The new status of the Qualification type - Active | Inactive' }),
    ).exactOptional(),
    Test: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The questions for the Qualification test a Worker must answer correctly to obtain a Qualification of this type. If this parameter is specified, <code>TestDurationInSeconds</code> must also be specified.</p> <p>Constraints: Must not be longer than 65535 bytes. Must be a QuestionForm data structure. This parameter cannot be specified if AutoGranted is true.</p> <p>Constraints: None. If not specified, the Worker may request the Qualification without answering any questions.</p>',
        }),
    ).exactOptional(),
    AnswerKey: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The answers to the Qualification test specified in the Test parameter, in the form of an AnswerKey data structure.',
        }),
    ).exactOptional(),
    TestDurationInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The number of seconds the Worker has to complete the Qualification test, starting from the time the Worker requests the Qualification.',
        }),
    ).exactOptional(),
    RetryDelayInSeconds: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The amount of time, in seconds, that Workers must wait after requesting a Qualification of the specified Qualification type before they can retry the Qualification request. It is not possible to disable retries for a Qualification type after it has been created with retries enabled. If you want to disable retries, you must dispose of the existing retry-enabled Qualification type using DisposeQualificationType and then create a new Qualification type with retries disabled using CreateQualificationType.',
        }),
    ).exactOptional(),
    AutoGranted: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies whether requests for the Qualification type are granted immediately, without prompting the Worker with a Qualification test.</p> <p>Constraints: If the Test parameter is specified, this parameter cannot be true.</p>',
        }),
    ).exactOptional(),
    AutoGrantedValue: IntegerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Qualification value to use for automatically granted Qualifications. This parameter is used only if the AutoGranted parameter is true.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['QualificationTypeId'], title: 'UpdateQualificationTypeRequest' })
  .openapi('UpdateQualificationTypeRequest')

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

export const postXAmzTargetMTurkRequesterServiceV20170117AcceptQualificationRequestRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest',
    description:
      "<p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>",
    operationId: 'AcceptQualificationRequest',
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
          .literal('MTurkRequesterServiceV20170117.AcceptQualificationRequest')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.AcceptQualificationRequest'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AcceptQualificationRequestRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AcceptQualificationRequestResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117ApproveAssignmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment',
  description:
    "<p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>",
  operationId: 'ApproveAssignment',
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
        .literal('MTurkRequesterServiceV20170117.ApproveAssignment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.ApproveAssignment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ApproveAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ApproveAssignmentResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117AssociateQualificationWithWorkerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker',
    description:
      '<p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>',
    operationId: 'AssociateQualificationWithWorker',
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
          .literal('MTurkRequesterServiceV20170117.AssociateQualificationWithWorker')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.AssociateQualificationWithWorker'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: AssociateQualificationWithWorkerRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: AssociateQualificationWithWorkerResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHITRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT',
    description:
      '<p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>',
    operationId: 'CreateAdditionalAssignmentsForHIT',
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
          .literal('MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateAdditionalAssignmentsForHITRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: CreateAdditionalAssignmentsForHITResponseSchema },
        },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117CreateHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT',
  description:
    '<p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>',
  operationId: 'CreateHIT',
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
        .literal('MTurkRequesterServiceV20170117.CreateHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.CreateHIT'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateHITRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117CreateHITTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType',
  description:
    ' The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned. ',
  operationId: 'CreateHITType',
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
        .literal('MTurkRequesterServiceV20170117.CreateHITType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.CreateHITType'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateHITTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHITTypeResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117CreateHITWithHITTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType',
  description:
    '<p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>',
  operationId: 'CreateHITWithHITType',
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
        .literal('MTurkRequesterServiceV20170117.CreateHITWithHITType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.CreateHITWithHITType'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateHITWithHITTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateHITWithHITTypeResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117CreateQualificationTypeRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType',
    description:
      ' The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure. ',
    operationId: 'CreateQualificationType',
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
          .literal('MTurkRequesterServiceV20170117.CreateQualificationType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.CreateQualificationType'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: CreateQualificationTypeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: CreateQualificationTypeResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  },
)

export const postXAmzTargetMTurkRequesterServiceV20170117CreateWorkerBlockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock',
  description:
    'The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.',
  operationId: 'CreateWorkerBlock',
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
        .literal('MTurkRequesterServiceV20170117.CreateWorkerBlock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.CreateWorkerBlock'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateWorkerBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CreateWorkerBlockResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117DeleteHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT',
  description:
    "<p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>",
  operationId: 'DeleteHIT',
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
        .literal('MTurkRequesterServiceV20170117.DeleteHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.DeleteHIT'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DeleteHITRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117DeleteQualificationTypeRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType',
    description:
      '<p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>',
    operationId: 'DeleteQualificationType',
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
          .literal('MTurkRequesterServiceV20170117.DeleteQualificationType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.DeleteQualificationType'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: DeleteQualificationTypeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: DeleteQualificationTypeResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  },
)

export const postXAmzTargetMTurkRequesterServiceV20170117DeleteWorkerBlockRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock',
  description:
    'The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.',
  operationId: 'DeleteWorkerBlock',
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
        .literal('MTurkRequesterServiceV20170117.DeleteWorkerBlock')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.DeleteWorkerBlock'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeleteWorkerBlockRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteWorkerBlockResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117DisassociateQualificationFromWorkerRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker',
    description:
      '<p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>',
    operationId: 'DisassociateQualificationFromWorker',
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
          .literal('MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker'],
              },
            },
          }),
      }),
      body: {
        content: {
          'application/json': { schema: DisassociateQualificationFromWorkerRequestSchema },
        },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': { schema: DisassociateQualificationFromWorkerResponseSchema },
        },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117GetAccountBalanceRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance',
  description:
    'The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester. Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing. Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.',
  operationId: 'GetAccountBalance',
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
        .literal('MTurkRequesterServiceV20170117.GetAccountBalance')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.GetAccountBalance'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAccountBalanceRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAccountBalanceResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117GetAssignmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment',
  description:
    ' The <code>GetAssignment</code> operation retrieves the details of the specified Assignment. ',
  operationId: 'GetAssignment',
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
        .literal('MTurkRequesterServiceV20170117.GetAssignment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.GetAssignment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssignmentResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117GetFileUploadURLRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL',
  description:
    ' The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3. ',
  operationId: 'GetFileUploadURL',
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
        .literal('MTurkRequesterServiceV20170117.GetFileUploadURL')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.GetFileUploadURL'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetFileUploadURLRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetFileUploadURLResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117GetHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT',
  description: ' The <code>GetHIT</code> operation retrieves the details of the specified HIT. ',
  operationId: 'GetHIT',
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
        .literal('MTurkRequesterServiceV20170117.GetHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.GetHIT'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GetHITRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117GetQualificationScoreRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore',
  description:
    "<p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>",
  operationId: 'GetQualificationScore',
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
        .literal('MTurkRequesterServiceV20170117.GetQualificationScore')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.GetQualificationScore'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetQualificationScoreRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQualificationScoreResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117GetQualificationTypeRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType',
  description:
    ' The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID. ',
  operationId: 'GetQualificationType',
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
        .literal('MTurkRequesterServiceV20170117.GetQualificationType')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.GetQualificationType'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GetQualificationTypeRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetQualificationTypeResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListAssignmentsForHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT',
  description:
    '<p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>',
  operationId: 'ListAssignmentsForHIT',
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
        .literal('MTurkRequesterServiceV20170117.ListAssignmentsForHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.ListAssignmentsForHIT'],
            },
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
      content: { 'application/json': { schema: ListAssignmentsForHITRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListAssignmentsForHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListBonusPaymentsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments',
  description:
    ' The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment. ',
  operationId: 'ListBonusPayments',
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
        .literal('MTurkRequesterServiceV20170117.ListBonusPayments')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.ListBonusPayments'] },
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
      content: { 'application/json': { schema: ListBonusPaymentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListBonusPaymentsResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListHITsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs',
  description:
    " The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted. ",
  operationId: 'ListHITs',
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
        .literal('MTurkRequesterServiceV20170117.ListHITs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.ListHITs'] },
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
    body: { content: { 'application/json': { schema: ListHITsRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListHITsResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListHITsForQualificationTypeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType',
    description:
      ' The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted. ',
    operationId: 'ListHITsForQualificationType',
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
          .literal('MTurkRequesterServiceV20170117.ListHITsForQualificationType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.ListHITsForQualificationType'],
              },
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
        content: { 'application/json': { schema: ListHITsForQualificationTypeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListHITsForQualificationTypeResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117ListQualificationRequestsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests',
    description:
      ' The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation. ',
    operationId: 'ListQualificationRequests',
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
          .literal('MTurkRequesterServiceV20170117.ListQualificationRequests')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.ListQualificationRequests'],
              },
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
        content: { 'application/json': { schema: ListQualificationRequestsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListQualificationRequestsResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117ListQualificationTypesRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes',
  description:
    ' The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term. ',
  operationId: 'ListQualificationTypes',
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
        .literal('MTurkRequesterServiceV20170117.ListQualificationTypes')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.ListQualificationTypes'],
            },
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
      content: { 'application/json': { schema: ListQualificationTypesRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListQualificationTypesResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListReviewPolicyResultsForHITRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT',
    description:
      ' The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results. ',
    operationId: 'ListReviewPolicyResultsForHIT',
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
          .literal('MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT'],
              },
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
        content: { 'application/json': { schema: ListReviewPolicyResultsForHITRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListReviewPolicyResultsForHITResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117ListReviewableHITsRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs',
  description:
    ' The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation. ',
  operationId: 'ListReviewableHITs',
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
        .literal('MTurkRequesterServiceV20170117.ListReviewableHITs')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.ListReviewableHITs'] },
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
      content: { 'application/json': { schema: ListReviewableHITsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListReviewableHITsResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListWorkerBlocksRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks',
  description:
    'The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.',
  operationId: 'ListWorkerBlocks',
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
        .literal('MTurkRequesterServiceV20170117.ListWorkerBlocks')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.ListWorkerBlocks'] },
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
      content: { 'application/json': { schema: ListWorkerBlocksRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListWorkerBlocksResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117ListWorkersWithQualificationTypeRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType',
    description:
      ' The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type. ',
    operationId: 'ListWorkersWithQualificationType',
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
          .literal('MTurkRequesterServiceV20170117.ListWorkersWithQualificationType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.ListWorkersWithQualificationType'],
              },
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
        content: { 'application/json': { schema: ListWorkersWithQualificationTypeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: ListWorkersWithQualificationTypeResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117NotifyWorkersRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers',
  description:
    ' The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker. ',
  operationId: 'NotifyWorkers',
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
        .literal('MTurkRequesterServiceV20170117.NotifyWorkers')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.NotifyWorkers'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: NotifyWorkersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: NotifyWorkersResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117RejectAssignmentRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment',
  description:
    '<p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>',
  operationId: 'RejectAssignment',
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
        .literal('MTurkRequesterServiceV20170117.RejectAssignment')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.RejectAssignment'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RejectAssignmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectAssignmentResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117RejectQualificationRequestRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest',
    description:
      "<p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>",
    operationId: 'RejectQualificationRequest',
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
          .literal('MTurkRequesterServiceV20170117.RejectQualificationRequest')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.RejectQualificationRequest'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: RejectQualificationRequestRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: RejectQualificationRequestResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117SendBonusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus',
  description:
    " The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees. ",
  operationId: 'SendBonus',
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
        .literal('MTurkRequesterServiceV20170117.SendBonus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.SendBonus'] },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SendBonusRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: SendBonusResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117SendTestEventNotificationRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification',
    description:
      ' The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately. ',
    operationId: 'SendTestEventNotification',
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
          .literal('MTurkRequesterServiceV20170117.SendTestEventNotification')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.SendTestEventNotification'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: SendTestEventNotificationRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: SendTestEventNotificationResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117UpdateExpirationForHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT',
  description:
    ' The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired. ',
  operationId: 'UpdateExpirationForHIT',
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
        .literal('MTurkRequesterServiceV20170117.UpdateExpirationForHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.UpdateExpirationForHIT'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateExpirationForHITRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateExpirationForHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117UpdateHITReviewStatusRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus',
  description:
    ' The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status. ',
  operationId: 'UpdateHITReviewStatus',
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
        .literal('MTurkRequesterServiceV20170117.UpdateHITReviewStatus')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: {
              type: 'string',
              enum: ['MTurkRequesterServiceV20170117.UpdateHITReviewStatus'],
            },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateHITReviewStatusRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateHITReviewStatusResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117UpdateHITTypeOfHITRoute = createRoute({
  method: 'post',
  path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT',
  description:
    ' The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones. ',
  operationId: 'UpdateHITTypeOfHIT',
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
        .literal('MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT')
        .openapi({
          param: {
            name: 'X-Amz-Target',
            in: 'header',
            required: true,
            schema: { type: 'string', enum: ['MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT'] },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateHITTypeOfHITRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateHITTypeOfHITResponseSchema } },
    },
    480: {
      description: 'ServiceFault',
      content: { 'application/json': { schema: ServiceFaultSchema } },
    },
    481: {
      description: 'RequestError',
      content: { 'application/json': { schema: RequestErrorSchema } },
    },
  },
})

export const postXAmzTargetMTurkRequesterServiceV20170117UpdateNotificationSettingsRoute =
  createRoute({
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings',
    description:
      " The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>. ",
    operationId: 'UpdateNotificationSettings',
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
          .literal('MTurkRequesterServiceV20170117.UpdateNotificationSettings')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.UpdateNotificationSettings'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateNotificationSettingsRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateNotificationSettingsResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  })

export const postXAmzTargetMTurkRequesterServiceV20170117UpdateQualificationTypeRoute = createRoute(
  {
    method: 'post',
    path: '/#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType',
    description:
      '<p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>',
    operationId: 'UpdateQualificationType',
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
          .literal('MTurkRequesterServiceV20170117.UpdateQualificationType')
          .openapi({
            param: {
              name: 'X-Amz-Target',
              in: 'header',
              required: true,
              schema: {
                type: 'string',
                enum: ['MTurkRequesterServiceV20170117.UpdateQualificationType'],
              },
            },
          }),
      }),
      body: {
        content: { 'application/json': { schema: UpdateQualificationTypeRequestSchema } },
        required: true,
      },
    },
    responses: {
      200: {
        description: 'Success',
        content: { 'application/json': { schema: UpdateQualificationTypeResponseSchema } },
      },
      480: {
        description: 'ServiceFault',
        content: { 'application/json': { schema: ServiceFaultSchema } },
      },
      481: {
        description: 'RequestError',
        content: { 'application/json': { schema: RequestErrorSchema } },
      },
    },
  },
)
