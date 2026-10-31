import { createRoute, z } from '@hono/zod-openapi'

const ActivationResponseSchema = z
  .object({
    end: z.string().exactOptional(),
    id: z.string().exactOptional(),
    info: z.string().exactOptional(),
    learnersCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'number of learners in the offering, excluding facilitators and coaches',
      }),
    metadata: z
      .object({ rootContentId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    start: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivationResponse')

const ActivityAttemptOpenResponseFeedbackSchema = z
  .object({ facilitatorEmail: z.string().exactOptional(), text: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ActivityAttemptOpenResponseFeedback')

const ActivityAttemptOpenResponseFilesSchema = z
  .object({
    filename: z.string().exactOptional(),
    mimetype: z.string().exactOptional(),
    size: z.string().exactOptional(),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityAttemptOpenResponseFiles')

const ActivityAttemptOpenResponseSchema = z
  .object({
    activityId: z.string().exactOptional(),
    activityType: z.string().exactOptional(),
    feedback: ActivityAttemptOpenResponseFeedbackSchema.exactOptional(),
    learnerEmail: z.string().exactOptional(),
    offeringId: z.string().exactOptional(),
    responseText: z.string().exactOptional(),
    uploadedFiles: ActivityAttemptOpenResponseFilesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ActivityAttemptOpenResponse')

const AssessmentSchema = z
  .object({
    content: z.string().exactOptional(),
    dueDate: z.iso.datetime({ offset: true }).exactOptional(),
    markNumber: z.string().min(1).exactOptional(),
    markType: z.string().min(1).exactOptional(),
    openDate: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Assessment')

const AssessmentGroupRequiredSchema = z
  .object({ title: z.string().min(1) })
  .openapi({ required: ['title'] })
  .openapi('AssessmentGroupRequired')

const AssessmentGroupResponseSchema = z
  .object({
    createdAt: z.string().exactOptional(),
    id: z.string().exactOptional(),
    title: z.string().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssessmentGroupResponse')

const DocumentSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    filename: z.string().exactOptional(),
    id: z.string().exactOptional(),
    mimetype: z.string().exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Document')

const ThemeResponseSchema = z
  .object({ filter: z.string().exactOptional(), numberOfQuestions: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('ThemeResponse')

const UserMetadataSchema = z
  .strictObject({ tags: z.array(z.string()).exactOptional() })
  .openapi({ required: [] })
  .openapi('UserMetadata')

const UserProfileRequestSchema = z
  .object({ displayName: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserProfileRequest')

const UserSchema = z
  .strictObject({
    email: z.email().min(1).exactOptional(),
    firstName: z.string().min(1).exactOptional(),
    lastName: z.string().min(1).exactOptional(),
    metadata: UserMetadataSchema.exactOptional(),
    personId: z.string().min(1).exactOptional(),
    profile: UserProfileRequestSchema.exactOptional(),
    sendInvite: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('User')

const AssessmentPendingSubmissionSchema = z
  .object({
    content: z.string().exactOptional(),
    documents: z.array(DocumentSchema).exactOptional(),
    dueDate: z.iso.datetime({ offset: true }).exactOptional(),
    durationMinutes: z.int32().exactOptional(),
    filename: z.string().exactOptional(),
    hidden: z.boolean().default(false).exactOptional(),
    id: z.string().exactOptional(),
    markNumber: z.string().min(1).exactOptional(),
    markType: z.string().min(1).exactOptional(),
    maxAttempts: z.int32().exactOptional(),
    offeringId: z.string().exactOptional(),
    offeringName: z.string().exactOptional(),
    openDate: z.iso.datetime({ offset: true }).exactOptional(),
    pid: z.string().exactOptional(),
    points: z.string().exactOptional(),
    themes: z.array(ThemeResponseSchema).exactOptional(),
    title: z.string().exactOptional(),
    totalQuestions: z.int32().exactOptional(),
    totalThemes: z.int32().exactOptional(),
    type: z.string().exactOptional(),
    users: z.array(UserSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssessmentPendingSubmission')

const AssessmentResponseSchema = z
  .object({
    content: z.string().exactOptional(),
    documents: z.array(DocumentSchema).exactOptional(),
    dueDate: z.iso.datetime({ offset: true }).exactOptional(),
    durationMinutes: z.int32().exactOptional(),
    filename: z.string().exactOptional(),
    hidden: z.boolean().default(false).exactOptional(),
    id: z.string().exactOptional(),
    markNumber: z.string().min(1).exactOptional(),
    markType: z.string().min(1).exactOptional(),
    maxAttempts: z.int32().exactOptional(),
    openDate: z.iso.datetime({ offset: true }).exactOptional(),
    pid: z.string().exactOptional(),
    points: z.string().exactOptional(),
    themes: z.array(ThemeResponseSchema).exactOptional(),
    title: z.string().exactOptional(),
    totalQuestions: z.int32().exactOptional(),
    totalThemes: z.int32().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AssessmentResponse')

const AssignmentMarkResponseSchema = z
  .object({
    assessmentId: z.string().exactOptional(),
    assessmentItemDetails: z.string().exactOptional(),
    assessmentItemName: z.string().exactOptional(),
    courseName: z.string().exactOptional(),
    learnerEmail: z.string().exactOptional(),
    learnerFirstName: z.string().exactOptional(),
    learnerLastName: z.string().exactOptional(),
    learnerPersonId: z.string().exactOptional(),
    mark: z.string().exactOptional(),
    markFeedback: z.string().exactOptional(),
    markedBy: z.string().exactOptional(),
    markedByEvaluator: z.boolean().exactOptional(),
    markedByFacilitator: z.boolean().exactOptional(),
    markedByMarker: z.boolean().exactOptional(),
    markedDateTime: z.iso.datetime({ offset: true }).exactOptional(),
    submissionDateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'AssignmentMark', required: [] })
  .openapi('AssignmentMarkResponse')

const MarkFeedbackSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    feedback: z.string().exactOptional(),
    feedbackBy: z.string().exactOptional(),
    id: z.string().exactOptional(),
    mark: z.string().exactOptional(),
    markerId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MarkFeedback')

const MarkSchema = z
  .object({
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    feedback: z.string().exactOptional(),
    id: z.string().exactOptional(),
    mark: z.string().exactOptional(),
    markFeedback: z.array(MarkFeedbackSchema).exactOptional(),
    markedBy: z.string().exactOptional(),
    markerId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Mark')

const AssignmentsSchema = z
  .object({
    files: z.array(DocumentSchema).exactOptional(),
    marks: z.array(MarkSchema).exactOptional(),
    status: z.string().exactOptional(),
    submittedAt: z.iso.datetime({ offset: true }).exactOptional(),
    updatedAt: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Assignments')

const AwardedResponseSchema = z
  .object({
    awarded: z.boolean().exactOptional(),
    badgeId: z.string().exactOptional(),
    badgeUrl: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AwardedResponse')

const BadgeExpirySchema = z
  .object({
    expirationDate: z.iso.datetime({ offset: true }).exactOptional(),
    expires: z.boolean().exactOptional(),
    expiryType: z.enum(['date', 'timeframe']).exactOptional(),
    timeframeAmount: z.number().exactOptional(),
    timeframeUnit: z.enum(['days', 'months', 'years']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BadgeExpiry')

const CriteriaSchema = z
  .object({
    hasCompletedCourse: z.boolean().default(true).exactOptional(),
    hasPassedMandatoryAssessedQuizzes: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Criteria')

const OpenBadgeClassSchema = z
  .object({
    criteria: z
      .strictObject({ narrative: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    description: z.string().exactOptional(),
    id: z.string().exactOptional(),
    image: z.string().exactOptional(),
    issuer: z.string().exactOptional(),
    name: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OpenBadgeClass')

const BadgeSchema = z
  .object({
    badgeExpiry: BadgeExpirySchema.exactOptional(),
    badgeUrl: z.string().exactOptional(),
    criterias: CriteriaSchema.exactOptional(),
    description: z.string().exactOptional(),
    openBadge: OpenBadgeClassSchema.exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Badge')

const ChannelSchema = z
  .object({
    group: z
      .object({ autoAssign: z.boolean().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    groupDiscussion: z.boolean().exactOptional(),
    isBroadcastOnly: z.boolean().exactOptional(),
    privateSupport: z.boolean().exactOptional(),
    title: z.string().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Channel')

const ChannelRequiredSchema = z
  .object({ isBroadcastOnly: z.boolean().default(false).exactOptional(), title: z.string().min(1) })
  .openapi({ required: ['title'] })
  .openapi('ChannelRequired')

const ChannelResponseSchema = z
  .object({
    id: z.string().exactOptional(),
    isBroadcastOnly: z.boolean().default(false).exactOptional(),
    title: z.string().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChannelResponse')

const ModeratorSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Moderator')

const ModerationSchema = z
  .object({
    isMuted: z.boolean().exactOptional(),
    moderator: ModeratorSchema.exactOptional(),
    reason: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Moderation')

const CommentSchema = z
  .object({
    content: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    id: z.string().exactOptional(),
    isFacilitatorPost: z.boolean().exactOptional(),
    moderation: ModerationSchema.exactOptional(),
    parentCommentId: z.string().exactOptional(),
    postId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Comment')

const LearningOutcomesSchema = z
  .object({ description: z.string().exactOptional(), id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('LearningOutcomes')

const CourseMetaResponseSchema = z
  .object({
    coverImageUrl: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().exactOptional(),
    metadata: z
      .object({
        category: z.string().exactOptional(),
        learning_outcomes: z.array(LearningOutcomesSchema).exactOptional(),
        level: z.string().exactOptional(),
        rootContentId: z.string().exactOptional(),
        tags: z.array(z.string()).exactOptional(),
        topic: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    tasksEnabled: z.boolean().exactOptional(),
  })
  .openapi({ title: 'Course', required: [] })
  .openapi('CourseMetaResponse')

const CourseResponseSchema = z
  .object({
    coverImageUrl: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().exactOptional(),
    metadata: z
      .object({ learning_outcomes: z.array(LearningOutcomesSchema).exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
  })
  .openapi({ title: 'Course', required: [] })
  .openapi('CourseResponse')

const DocumentResponseSchema = z
  .object({
    id: z.string().exactOptional(),
    mimetype: z.string().exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    url: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentResponse')

const ErrorSchema = z
  .object({
    error: z
      .object({ details: z.string().exactOptional(), name: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const InviteSchema = z
  .object({
    url: z.string().exactOptional().openapi({ description: 'if sendInvite in request is false' }),
  })
  .openapi({ required: [] })
  .openapi('Invite')

const LearnerOfferingDatesSchema = z
  .object({ start: z.iso.datetime({ offset: true }).exactOptional() })
  .openapi({ required: [] })
  .openapi('LearnerOfferingDates')

const LearnerProgressResponseSchema = z
  .object({
    completion: z.string().exactOptional(),
    courseId: z.string().exactOptional(),
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastLoggedInAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastName: z.string().exactOptional(),
    personId: z.string().exactOptional(),
  })
  .openapi({ title: 'LearnerProgress', required: [] })
  .openapi('LearnerProgressResponse')

const OfferingProgressRowSchema = z
  .object({ completion: z.string().exactOptional(), id: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OfferingProgressRow')

const LearnerResponseSchema = z
  .object({
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    id: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    offerings: z.array(OfferingProgressRowSchema).exactOptional(),
    personId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LearnerResponse')

const OfferingSchema = z
  .object({
    badge: z
      .strictObject({
        badgeExpiry: BadgeExpirySchema.exactOptional(),
        description: z.string().exactOptional(),
        requiresApproval: z.boolean().exactOptional(),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contentId: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The identifier for a specific version of a course' }),
    description: z.string().min(1).exactOptional(),
    earlyCloseOffDate: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    hasEarlyCloseOff: z.boolean().exactOptional(),
    identifier: z.string().exactOptional(),
    isReadonly: z.boolean().exactOptional(),
    metadata: z
      .strictObject({
        category: z.string().exactOptional(),
        level: z.string().exactOptional(),
        tags: z.array(z.string()).exactOptional(),
        topic: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().min(1).exactOptional(),
    overview: z.string().exactOptional(),
    rootContentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course.',
      }),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    trailerVideoUrl: z.string().min(1).exactOptional(),
    useRelativeDates: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Offering')

const OfferingActivitiesResponseSchema = z
  .object({
    activityId: z.string().exactOptional(),
    time: z.number().exactOptional().openapi({ description: 'expected minutes to complete' }),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingActivitiesResponse')

const OfferingMetadataSchema = z
  .strictObject({
    category: z.string().exactOptional(),
    level: z.string().exactOptional(),
    rootContentId: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    topic: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingMetadata')

const OfferingMetadataResponseSchema = z
  .object({
    contentId: z.string().min(1).exactOptional(),
    coverImageUrl: z.string().min(1).exactOptional(),
    currency: z.string().exactOptional(),
    description: z.string().min(1).exactOptional(),
    earlyCloseOffDate: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    enrollmentLimit: z.number().exactOptional(),
    hasEarlyCloseOff: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    isReadonly: z.boolean().exactOptional(),
    metadata: OfferingMetadataSchema.exactOptional(),
    name: z.string().min(1).exactOptional(),
    overview: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'content can contain html' }),
    price: z.number().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    tasksEnabled: z.boolean().exactOptional(),
    trailerVideoUrl: z.string().min(1).exactOptional(),
    useRelativeDates: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingMetadataResponse')

const OfferingRequiredSchema = z
  .object({
    badge: z
      .strictObject({
        badgeExpiry: BadgeExpirySchema.exactOptional(),
        description: z.string().exactOptional(),
        requiresApproval: z.boolean().exactOptional(),
        title: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    contentId: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The identifier for a specific version of a course' }),
    createDefaultChannels: z.boolean().default(false).exactOptional(),
    description: z.string().min(1).exactOptional(),
    earlyCloseOffDate: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    hasEarlyCloseOff: z.boolean().exactOptional(),
    identifier: z.string().exactOptional(),
    isReadonly: z.boolean().exactOptional(),
    metadata: z
      .strictObject({
        category: z.string().exactOptional(),
        level: z.string().exactOptional(),
        tags: z.array(z.string()).exactOptional(),
        topic: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().min(1).exactOptional(),
    rootContentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.",
      }),
    start: z.iso.datetime({ offset: true }),
    trailerVideoUrl: z.string().min(1).exactOptional(),
    useRelativeDates: z.boolean().default(false).exactOptional(),
  })
  .openapi({ required: ['start'] })
  .openapi('OfferingRequired')

const OfferingResponseSchema = z
  .object({
    contentId: z.string().min(1).exactOptional(),
    coverImageUrl: z.string().min(1).exactOptional(),
    currency: z.string().exactOptional(),
    description: z.string().min(1).exactOptional(),
    earlyCloseOffDate: z.iso.datetime({ offset: true }).exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    enrollmentLimit: z.number().exactOptional(),
    hasEarlyCloseOff: z.boolean().exactOptional(),
    id: z.string().exactOptional(),
    identifier: z.string().exactOptional(),
    isReadonly: z.boolean().exactOptional(),
    name: z.string().min(1).exactOptional(),
    price: z.number().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
    tasksEnabled: z.boolean().exactOptional(),
    trailerVideoUrl: z.string().min(1).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingResponse')

const OfferingUserSchema = z
  .strictObject({
    email: z.string().min(1),
    firstName: z.string().min(1).exactOptional(),
    isFacilitator: z.boolean().default(false).exactOptional(),
    isMarker: z.boolean().default(false).exactOptional(),
    isReadonly: z.boolean().default(false).exactOptional(),
    lastName: z.string().min(1).exactOptional(),
    metadata: UserMetadataSchema.exactOptional(),
    personId: z.string().min(1).exactOptional(),
    profile: UserProfileRequestSchema.exactOptional(),
    sendInvite: z.boolean().default(true).exactOptional(),
    sendNotificationEmail: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: ['email'] })
  .openapi('OfferingUser')

const OfferingUserAddResponseSchema = z
  .object({
    email: z.string().min(1).exactOptional(),
    firstName: z.string().min(1).exactOptional(),
    invite: InviteSchema.exactOptional(),
    isFacilitator: z.boolean().default(false).exactOptional(),
    isMarker: z.boolean().default(false).exactOptional(),
    isReadonly: z.boolean().default(false).exactOptional(),
    lastName: z.string().min(1).exactOptional(),
    metadata: UserMetadataSchema.exactOptional(),
    personId: z.string().min(1).exactOptional(),
    profile: UserProfileRequestSchema.exactOptional(),
    sendInvite: z.boolean().default(true).exactOptional(),
    sendNotificationEmail: z.boolean().default(true).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingUserAddResponse')

const UserProfileSchema = z
  .object({ displayName: z.string().exactOptional(), mobile: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('UserProfile')

const OfferingUserResponseSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    email: z.email().min(1).exactOptional(),
    evaluatedBy: z.array(z.string()).exactOptional(),
    evaluates: z.array(z.string()).exactOptional(),
    firstName: z.string().min(1).exactOptional(),
    id: z.string().exactOptional(),
    isFacilitator: z.boolean().default(false).exactOptional(),
    isMarker: z.boolean().default(false).exactOptional(),
    isReadonly: z.boolean().default(false).exactOptional(),
    lastName: z.string().min(1).exactOptional(),
    markedBy: z.array(z.string()).exactOptional(),
    marks: z.array(z.string()).exactOptional(),
    personId: z.string().min(1).exactOptional(),
    profile: UserProfileSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OfferingUserResponse')

const OrgRequestSchema = z
  .object({ id: z.string().exactOptional(), name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('OrgRequest')

const OrgResponseSchema = z
  .object({ id: z.string().exactOptional(), name: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('OrgResponse')

const PortfolioActivationsSchema = z
  .object({
    contentId: z.string().exactOptional(),
    end: z.iso.datetime({ offset: true }).exactOptional(),
    id: z.string().exactOptional(),
    info: z.string().exactOptional(),
    learnersCount: z
      .number()
      .exactOptional()
      .openapi({
        description: 'number of learners in the offering, excluding facilitators and coaches',
      }),
    metadata: z
      .object({ rootContentId: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
    name: z.string().exactOptional(),
    start: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortfolioActivations')

const PortfolioLicenseResponseSchema = z
  .object({ licenses: z.array(z.string()).exactOptional(), owner: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('PortfolioLicenseResponse')

const PortfolioMetadataSchema = z
  .strictObject({
    category: z.string().exactOptional(),
    level: z.string().exactOptional(),
    tags: z.array(z.string()).exactOptional(),
    topic: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PortfolioMetadata')

const PulseMCQOptionSchema = z
  .object({ option: z.string().exactOptional(), value: z.boolean().exactOptional() })
  .openapi({ title: 'MultiChoiceOption', required: [] })
  .openapi('PulseMCQOption')

const PulseSpatialOptionSchema = z
  .object({ option: z.string().exactOptional(), value: z.float32().exactOptional() })
  .openapi({ title: 'SpatialOption', required: [] })
  .openapi('PulseSpatialOption')

const PulseAnswerSchema = z
  .object({
    multiChoiceAnswer: z.array(PulseMCQOptionSchema).exactOptional(),
    spatialAnswer: z.array(PulseSpatialOptionSchema).exactOptional(),
    textAnswer: z.string().exactOptional(),
  })
  .openapi({ title: 'Answer', required: [] })
  .openapi('PulseAnswer')

const PulseResponseSchema = z
  .object({
    learnerFirstName: z.string().exactOptional(),
    learnerId: z.string().exactOptional(),
    learnerLastName: z.string().exactOptional(),
    pulseBaseId: z.string().exactOptional(),
    pulseInstanceId: z.string().exactOptional(),
    pulseQuestion: z.string().exactOptional(),
    pulseRunDurationMinutes: z.int().exactOptional(),
    pulseRunStart: z.iso.datetime({ offset: true }).exactOptional(),
    pulseType: z.string().exactOptional(),
    response: PulseAnswerSchema.exactOptional(),
    responseTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'Pulse', required: [] })
  .openapi('PulseResponse')

const QuizMarkResponseSchema = z
  .object({
    attempts: z.int32().exactOptional(),
    lastAttemptAt: z.iso.datetime({ offset: true }).exactOptional(),
    learnerEmail: z.string().exactOptional(),
    learnerFullname: z.string().exactOptional(),
    learnerPersonId: z.string().exactOptional(),
    mark: z.string().exactOptional(),
    quizId: z.string().exactOptional(),
    quizTitle: z.string().exactOptional(),
  })
  .openapi({ title: 'QuizMark', required: [] })
  .openapi('QuizMarkResponse')

const RevokedResponseSchema = z
  .object({
    badgeId: z.string().exactOptional(),
    badgeUrl: z.string().exactOptional(),
    revocationReason: z.string().exactOptional(),
    revoked: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RevokedResponse')

const SocialNotesResponseSchema = z
  .object({
    email: z.string().exactOptional(),
    firstName: z.string().exactOptional(),
    lastName: z.string().exactOptional(),
    pageId: z.string().exactOptional(),
    personId: z.string().exactOptional(),
    'social-note-content': z.string().exactOptional(),
    'social-note-paragraphId': z.string().exactOptional(),
    userId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SocialNotesResponse')

const SubmissionMarkResponseSchema = z
  .object({
    assessmentId: z.string().exactOptional(),
    assessmentItemDetails: z.string().exactOptional(),
    assessmentItemName: z.string().exactOptional(),
    courseName: z.string().exactOptional(),
    files: z.array(DocumentSchema).exactOptional(),
    html: z.string().exactOptional(),
    learnerEmail: z.string().exactOptional(),
    learnerFirstName: z.string().exactOptional(),
    learnerLastName: z.string().exactOptional(),
    learnerPersonId: z.string().exactOptional(),
    marks: z.array(MarkSchema).exactOptional(),
    status: z.string().exactOptional(),
    submissionDateTime: z.iso.datetime({ offset: true }).exactOptional(),
  })
  .openapi({ title: 'SubmissionMark', required: [] })
  .openapi('SubmissionMarkResponse')

const SuspendedRequestSchema = z
  .object({ suspended: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('SuspendedRequest')

const TransferRequestSchema = z
  .object({
    fromOfferingId: z.string().exactOptional(),
    sendInvite: z.boolean().exactOptional(),
    toOfferingId: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TransferRequest')

const UnitReactionsFeedbackSchema = z
  .object({ 'thumbs-down': z.number().exactOptional(), 'thumbs-up': z.number().exactOptional() })
  .openapi({ required: [] })
  .openapi('UnitReactionsFeedback')

const UnitReactionsAnalyticsResponseSchema = z
  .object({
    feedback: UnitReactionsFeedbackSchema.exactOptional(),
    pageId: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UnitReactionsAnalyticsResponse')

const UserBadgeSchema = z
  .object({
    awardedAt: z.iso.datetime({ offset: true }).exactOptional(),
    badgeExpiry: z
      .object({
        expirationDate: z.iso.datetime({ offset: true }).exactOptional(),
        expires: z.boolean().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    badgeUrl: z.string().exactOptional(),
    criterias: CriteriaSchema.exactOptional(),
    description: z.string().exactOptional(),
    offeringId: z.string().exactOptional(),
    openBadge: OpenBadgeClassSchema.exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserBadge')

const UserPermissionSchema = z
  .object({
    email: z.string().exactOptional(),
    isBuilder: z.boolean().exactOptional(),
    isReviewer: z.boolean().exactOptional(),
    name: z.string().exactOptional(),
  })
  .openapi({ title: 'User', required: [] })
  .openapi('UserPermission')

const UserResponseSchema = z
  .object({
    avatarUrl: z.string().exactOptional(),
    email: z.email().min(1).exactOptional(),
    firstAccessAt: z.iso.datetime({ offset: true }).exactOptional(),
    firstName: z.string().min(1).exactOptional(),
    id: z.string().exactOptional(),
    invite: InviteSchema.exactOptional(),
    lastAccessAt: z.iso.datetime({ offset: true }).exactOptional(),
    lastName: z.string().min(1).exactOptional(),
    metadata: UserMetadataSchema.exactOptional(),
    personId: z.string().min(1).exactOptional(),
    profile: UserProfileSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UserResponse')

const HttpPostSchema = z
  .object({
    attachments: z.array(DocumentResponseSchema).exactOptional(),
    content: z.string().exactOptional(),
    createdAt: z.iso.datetime({ offset: true }).exactOptional(),
    email: z.string().exactOptional(),
    id: z.string().exactOptional(),
    isFacilitatorPost: z.boolean().exactOptional(),
    moderation: ModerationSchema.exactOptional(),
    title: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('HttpPost')

const AccessDeniedErrorResponse = {
  description: 'You are not allowed to access this resource.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: {
        details: 'You are not allowed to access this resource',
        name: 'AccessDeniedError',
      },
    },
  },
}

const InvalidContentErrorResponse = {
  description: 'You need to specify content_id or rootContentId.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const NotAuthorizedErrorResponse = {
  description: 'No authorization token was found.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { details: 'No authorization token was found.', name: 'NotAuthorizedError' },
    },
  },
}

const NotImplementedErrorResponse = {
  description: 'Endpoint Not Implemented',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { details: 'The endpoint is not implemented.', name: 'NotImplementedError' },
    },
  },
}

const ObjectNotFoundErrorResponse = {
  description: 'Not Found',
  content: {
    'application/json': {
      schema: ErrorSchema,
      example: { details: 'The content badcontentId was not found.', name: 'ObjectNotFoundError' },
    },
  },
}

const RouteNotFoundErrorResponse = {
  description: 'Invalid path.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const ServerErrorResponse = {
  description: "We're sorry, but something went wrong.",
  content: { 'application/json': { schema: ErrorSchema } },
}

const TooManyRequestsErrorResponse = {
  description: 'Request rate is too large.',
  content: { 'application/json': { schema: ErrorSchema } },
}

const AssessmentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "assessment's id",
      in: 'path',
      name: 'assessmentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const BadgeIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "badge's id",
      in: 'path',
      name: 'badgeId',
      required: true,
      schema: { type: 'string' },
    },
  })

const ChannelIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "channel's id",
      in: 'path',
      name: 'channelId',
      required: true,
      schema: { type: 'string' },
    },
  })

const EvaluatorEmailParamsSchema = z
  .email()
  .openapi({
    param: {
      description: "Evaluator's email",
      in: 'path',
      name: 'evaluatorEmail',
      required: true,
      schema: { format: 'email', type: 'string' },
    },
  })

const ExternalCourseIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "external course's id",
      in: 'path',
      name: 'externalCourseId',
      required: true,
      schema: { type: 'string' },
    },
  })

const GroupIdParamsSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/)
  .openapi({
    param: {
      description: 'Assessment group id',
      in: 'path',
      name: 'groupId',
      required: true,
      schema: { pattern: '^[0-9a-fA-F]{24}$', type: 'string' },
    },
  })

const OfferingIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "offering's id",
      in: 'path',
      name: 'offeringId',
      required: true,
      schema: { type: 'string' },
    },
  })

const PermissionNameParamsSchema = z
  .enum(['builder', 'manager'])
  .openapi({
    param: {
      description: 'permission name',
      in: 'path',
      name: 'permissionName',
      required: true,
      schema: { enum: ['builder', 'manager'], type: 'string' },
    },
  })

const RootContentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Protfolio root content id',
      in: 'path',
      name: 'rootContentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const SectionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: "section's id",
      in: 'path',
      name: 'sectionId',
      required: true,
      schema: { type: 'string' },
    },
  })

const SubmissionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'submission id',
      in: 'path',
      name: 'submissionId',
      required: true,
      schema: { type: 'string' },
    },
  })

const TaskIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'task id',
      in: 'path',
      name: 'taskId',
      required: true,
      schema: { type: 'string' },
    },
  })

const UserEmailParamsSchema = z
  .email()
  .openapi({
    param: {
      description: "user's email",
      in: 'path',
      name: 'userEmail',
      required: true,
      schema: { format: 'email', type: 'string' },
    },
  })

const ApiValidationErrorExample = {
  summary: 'API validation error',
  value: { details: 'invalid $filter parameter.', name: 'ApiValidationError' },
}

const AssessmentNotSubmittedErrorExample = {
  summary: 'the specified user has not submitted an assessment',
  value: {
    details: 'The user alex.doe@test.te has not submitted assessment as1.',
    name: 'AssessmentNotSubmittedError',
  },
}

const ContentDoNotMatchErrorExample = {
  summary:
    'The specified content needs to be the same in order to perform the requested operation.',
  value: {
    details: 'contentId needs to be the same in order to perform the requested operation.',
    name: 'ContentDoNotMatchError',
  },
}

const IncompatibleParametersErrorExample = {
  summary: 'Two properties in the request contains incompatible values with each other',
  value: { details: 'A cannot be B when C is D', name: 'IncompatibleParametersError' },
}

const InvalidChannelPropertiesErrorExample = {
  summary:
    'A channel can only have one of these properties set as true: groupDiscussion, isBroadcastOnly or privateSupport',
  value: {
    details:
      'A channel can only have one of these properties set as true: groupDiscussion, isBroadcastOnly or privateSupport',
    name: 'InvalidChannelPropertiesError',
  },
}

const InvalidContentErrorExample = {
  summary: 'You need to specify content_id or rootContentId.',
  value: {
    details: 'You need to specify content_id or rootContentId.',
    name: 'InvalidContentError',
  },
}

const InvalidGroupChannelErrorExample = {
  summary: 'Specified channel is not a group discussion channel.',
  value: {
    details: 'Channel channel1 is not a group discussion channel.',
    name: 'InvalidGroupChannelError',
  },
}

const InvalidObjectIdErrorExample = {
  summary: 'The user has been suspended.',
  value: {
    details: "The specified task id has an invalid value '1111'.",
    name: 'InvalidObjectIdError',
  },
}

const InvalidParameterErrorExample = {
  summary: 'the specified source object already exists in the target object',
  value: {
    details:
      "The specified parameter file.mimetype (image mimetype) has an invalid value \\'text/plain\\'.",
    name: 'InvalidParameterError',
  },
}

const InvalidSourceAndTargetErrorExample = {
  summary: 'Source and target offerings cannot be the same.',
  value: {
    details: 'Source and target offerings cannot be the same.',
    name: 'InvalidSourceAndTargetError',
  },
}

const MissingInfoErrorExample = {
  summary: 'Specified info is missing.',
  value: { details: "The field 'Offering Badge' is missing or invalid.", name: 'MissingInfoError' },
}

const MultipleObjectsErrorExample = {
  summary: 'The specified object has multiple properties of which should have only one',
  value: {
    details: 'There are multiple permission with value true (isBuilder | isReviewer).',
    name: 'ObjectIsNotError',
  },
}

const ObjectAlreadyIsErrorExample = {
  summary: 'The specified object already has a property',
  value: {
    details: 'The user john.doe@test.te is already a manager.',
    name: 'ObjectAlreadyIsError',
  },
}

const ObjectExistsErrorExample = {
  summary: 'the specified source object already exists in the target object',
  value: {
    details: 'The badge already exists in the offering OFFERING ID.',
    name: 'ObjectExistsError',
  },
}

const ObjectInvalidPropertyErrorExample = {
  summary: 'the specified source object already exists in the target object',
  value: {
    details: 'The A property B is invalid. Expected value: C',
    name: 'ObjectInvalidPropertyError',
  },
}

const ObjectIsNotErrorExample = {
  summary: 'the specified object is not of the specified type',
  value: { details: 'The user john.doe@test.te is not a builder.', name: 'ObjectIsNotError' },
}

const ObjectNotFoundErrorExample = {
  summary: 'a referenced object is not found',
  value: { details: 'The content badcontentId was not found.', name: 'ObjectNotFoundError' },
}

const OfferingIncompatibleDatesErrorExample = {
  summary: 'The specified offering has relative dates enabled. Absolute task dates can not be set.',
  value: {
    details:
      'The specified offering has relative dates enabled. Absolute task dates can not be set.',
    name: 'OfferingIncompatibleDatesError',
  },
}

const SchemaAdditionalPropertiesErrorExample = {
  summary: 'The request body should not have extra properties',
  value: { details: 'should NOT have additional properties', name: 'SchemaValidationError' },
}

const SchemaAllowedValuesErrorExample = {
  summary: 'should be equal to one of the allowed values',
  value: {
    details: '[PARAMETER_NAME] PARAMETER_VALUE should be equal to one of the allowed values a, b',
    name: 'SchemaValidationError',
  },
}

const SchemaEmailErrorExample = {
  summary: 'Parameter should be a valid e-mail',
  value: {
    details: 'PARAMETER_NAME PARAMETER_VALUE should match format "email".',
    name: 'SchemaValidationError',
  },
}

const SchemaFormatErrorExample = {
  summary: 'should match specific format',
  value: {
    details: 'PARAMETER_NAME PARAMETER_VALUE should match format "example"',
    name: 'SchemaValidationError',
  },
}

const SchemaMediaErrorExample = {
  summary: 'unsupported media type in the content-type header',
  value: { details: 'unsupported media type application/json', name: 'SchemaValidationError' },
}

const SchemaMinLengthErrorExample = {
  summary: 'should be longer than the minimum required',
  value: {
    details: '[PARAMETER_NAME] PARAMETER_VALUE should NOT be shorter than 3 characters',
    name: 'SchemaValidationError',
  },
}

const SchemaQueryErrorExample = {
  summary: 'Unknown query parameter',
  value: {
    details: "[PARAMETER_NAME] PARAMETER_VALUE Unknown query parameter 'example'",
    name: 'SchemaValidationError',
  },
}

const SchemaRequiredErrorExample = {
  summary: 'should have a specific required property',
  value: { details: "should have required property 'example'", name: 'SchemaValidationError' },
}

const SchemaTypeErrorExample = {
  summary: 'should be of a specific type',
  value: {
    details: '[PARAMETER_NAME] PARAMETER_VALUE should be string',
    name: 'SchemaValidationError',
  },
}

const TextPatternErrorExample = {
  summary: 'Text pattern must be a minimum of n characters in length.',
  value: {
    details: 'Text pattern must be a minimum of 3 characters in length.',
    name: 'TextPatternError',
  },
}

const UserDoesNotHaveBadgeErrorExample = {
  summary: 'The specified user does not have a badge in the specified offering',
  value: {
    details: 'The user A has not been awarded a badge in the offering B.',
    name: 'UserDoesNotHaveBadgeError',
  },
}

const UserNotInChannelErrorExample = {
  summary: 'Specified user is not in the channel.',
  value: {
    details: 'The user john.doe@test.te is not a learner in the channel -MEF8kFyURUr6_CZ4IXD.',
    name: 'UserNotInChannelError',
  },
}

const UserNotInOfferingErrorExample = {
  summary: 'Specified user is not in the offering.',
  value: {
    details: 'The user john.doe@test.te is not a learner in the offering -MEF8kFyURUr6_CZ4IXD.',
    name: 'UserNotInOfferingError',
  },
}

const UserSuspendedErrorExample = {
  summary: 'The user has been suspended.',
  value: { details: 'The user (john.doe@test.te) has been suspended.', name: 'UserSuspendedError' },
}

const ValidationAllowTasksErrorExample = {
  summary: 'The specified parameter offeringId does not have tasks enabled',
  value: {
    details:
      "The specified parameter offeringId has an invalid value 'The specified parameter offeringId does not have tasks enabled'.",
    name: 'ValidationError',
  },
}

const ValidationErrorExample = {
  summary: 'The specified parameter dueDate has an invalid value',
  value: {
    details:
      'The specified parameter dueDate has an invalid value "Thu Apr 16 2020 19:15:00 GMT-0300 is before the openDate".',
    name: 'ValidationError',
  },
}

const ValidationTaskNotInOfferingErrorExample = {
  summary: 'The specified parameter taskId is not in the offering',
  value: {
    details:
      "The specified parameter taskId has an invalid value 'The specified parameter taskId is not in the offering'.",
    name: 'ValidationError',
  },
}

const AuthorizationSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['API info'],
  summary: 'List supported endpoints URLs',
  description: 'Responds with all supported endpoints URLs for v2 version.',
  responses: {
    200: {
      description: 'Supported endpoints',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const getCourseMappingsRoute = createRoute({
  method: 'get',
  path: '/course-mappings',
  tags: ['Course mappings'],
  summary: 'Find course mappings',
  description: 'Returns all course mappings for course offerings.',
  responses: {
    200: {
      description: 'Course Mappings',
      content: {
        'application/json': {
          schema: z.record(z.string(), z.string()).openapi({ title: 'course mappings' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getCourseMappingsExternalcourseExternalCourseIdRoute = createRoute({
  method: 'get',
  path: '/course-mappings/externalcourse/{externalCourseId}',
  tags: ['Course mappings'],
  summary: 'Find course mappings by externalCourseId',
  description: 'Responds with course mapping details by externalCourseId.',
  request: { params: z.object({ externalCourseId: ExternalCourseIdParamsSchema }) },
  responses: {
    200: {
      description: 'Course Mapping',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getCourseMappingsOfferingIdRoute = createRoute({
  method: 'get',
  path: '/course-mappings/{offeringId}',
  tags: ['Course mappings'],
  summary: 'Find course mappings by offeringId',
  description: 'Responds with course mapping details by offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Course Mapping',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putCourseMappingsOfferingIdExternalCourseIdRoute = createRoute({
  method: 'put',
  path: '/course-mappings/{offeringId}/{externalCourseId}',
  tags: ['Course mappings'],
  summary: 'Add course mapping',
  description: 'Creates a mapping between the offering and the externalCourseId.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      externalCourseId: ExternalCourseIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Course Mapping',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteCourseMappingsOfferingIdExternalCourseIdRoute = createRoute({
  method: 'delete',
  path: '/course-mappings/{offeringId}/{externalCourseId}',
  tags: ['Course mappings'],
  summary: 'Remove course mapping',
  description: 'Removes the course mapping between the offering and the externalCourseId.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      externalCourseId: ExternalCourseIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Course Mapping',
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getCoursesRoute = createRoute({
  method: 'get',
  path: '/courses',
  tags: ['Courses'],
  summary: 'Find courses',
  description: 'Responds with all courses (draft and published.)',
  responses: {
    200: {
      description: 'All courses (draft and published) in the organisation.',
      content: {
        'application/json': { schema: z.array(CourseResponseSchema).openapi({ title: 'Courses' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getCoursesContentIdRoute = createRoute({
  method: 'get',
  path: '/courses/{contentId}',
  tags: ['Courses'],
  summary: 'Find course by contentId',
  description: 'Responds with a course matching the contentId.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Course detail',
      content: { 'application/json': { schema: CourseMetaResponseSchema } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getCoursesContentIdActivationsRoute = createRoute({
  method: 'get',
  path: '/courses/{contentId}/activations',
  tags: ['Courses'],
  summary: 'Find activations for a contentId',
  description: 'Responds with all activations for the contentId provided.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Activation list.',
      content: { 'application/json': { schema: ActivationResponseSchema } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putCoursesContentIdMetadataCategoryRoute = createRoute({
  method: 'put',
  path: '/courses/{contentId}/metadata/category',
  tags: ['Course metadata'],
  summary: 'Update course category',
  description: 'Add or update course category in the metadata of a course.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ category: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Course detail',
      content: { 'application/json': { schema: CourseMetaResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaAdditionalPropertiesError: SchemaAdditionalPropertiesErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putCoursesContentIdMetadataLevelRoute = createRoute({
  method: 'put',
  path: '/courses/{contentId}/metadata/level',
  tags: ['Course metadata'],
  summary: 'Update course level',
  description: 'Add or update the course level in the metadata of a course.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ level: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Course detail',
      content: { 'application/json': { schema: CourseMetaResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaAdditionalPropertiesError: SchemaAdditionalPropertiesErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putCoursesContentIdMetadataTagsRoute = createRoute({
  method: 'put',
  path: '/courses/{contentId}/metadata/tags',
  tags: ['Course metadata'],
  summary: 'Update course tags',
  description: 'Add or update course tags in the metadata of a course.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ tags: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Course detail',
      content: { 'application/json': { schema: CourseMetaResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaAdditionalPropertiesError: SchemaAdditionalPropertiesErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putCoursesContentIdMetadataTopicRoute = createRoute({
  method: 'put',
  path: '/courses/{contentId}/metadata/topic',
  tags: ['Course metadata'],
  summary: 'Update course topic',
  description: 'Add or update the course topic in the metadata of a course.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ topic: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Course detail',
      content: { 'application/json': { schema: CourseMetaResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaAdditionalPropertiesError: SchemaAdditionalPropertiesErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getCoursesContentIdPermissionsRoute = createRoute({
  method: 'get',
  path: '/courses/{contentId}/permissions',
  tags: ['Courses'],
  summary: 'Find users who have access to the contentId provided',
  description: 'Responds with users who have access to a specific course by contentId.',
  request: {
    params: z.object({
      contentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'contentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of users who have access to the content ID provided.',
      content: { 'application/json': { schema: UserPermissionSchema } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postCoursesRootContentIdPermissionsUserEmailRoute = createRoute({
  method: 'post',
  path: '/courses/{rootContentId}/permissions/{userEmail}',
  tags: ['Courses'],
  summary: 'Update course access',
  description: 'Provide a user with access to a specific course by rootContentId.',
  request: {
    params: z.object({
      rootContentId: z
        .string()
        .openapi({
          param: {
            description: 'The content Id',
            in: 'path',
            name: 'rootContentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userEmail: z
        .string()
        .openapi({
          param: {
            description: 'The user email',
            in: 'path',
            name: 'userEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              isBuilder: z.boolean().default(true).exactOptional(),
              isReviewer: z.boolean().default(false).exactOptional(),
            })
            .openapi({ title: 'permission to be granted to the user.', required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'user successfully added to the course with the specified permission.',
      content: {
        'application/json': {
          schema: z.object({ contentId: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            MultipleObjectsError: MultipleObjectsErrorExample,
            ObjectIsNotError: ObjectIsNotErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsRoute = createRoute({
  method: 'get',
  path: '/offerings',
  tags: ['Offerings'],
  summary: 'Find current, past and future offerings',
  description: 'Responds with all offerings for your organisation.',
  responses: {
    200: {
      description: 'all offerings (current, past and future ones)',
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const postOfferingsRoute = createRoute({
  method: 'post',
  path: '/offerings',
  tags: ['Offerings'],
  summary: 'Create offering',
  description: 'Creates a new offering.',
  request: {
    body: { content: { 'application/json': { schema: OfferingRequiredSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'offering created',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            IncompatibleParametersError: IncompatibleParametersErrorExample,
            InvalidContentError: InvalidContentErrorExample,
            MissingInfoError: MissingInfoErrorExample,
            OfferingIncompatibleDatesError: OfferingIncompatibleDatesErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsCurrentRoute = createRoute({
  method: 'get',
  path: '/offerings/current',
  tags: ['Offerings'],
  summary: 'Find active offerings',
  description: 'Responds with active offerings for your organisation.',
  responses: {
    200: {
      description: 'current offerings',
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getOfferingsFutureRoute = createRoute({
  method: 'get',
  path: '/offerings/future',
  tags: ['Offerings'],
  summary: 'Find scheduled offerings',
  description:
    "Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).",
  responses: {
    200: {
      description: 'future offerings',
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getOfferingsInfoTextPatternRoute = createRoute({
  method: 'get',
  path: '/offerings/info/{textPattern}',
  tags: ['Offerings'],
  summary: 'Find offerings where info field matches the specified textPattern',
  description: 'Find offerings where info field matches the specified text pattern.',
  request: {
    params: z.object({
      textPattern: z
        .string()
        .openapi({
          param: {
            description: 'Text pattern to search for (minimum of 3 characters length).',
            in: 'path',
            name: 'textPattern',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Offerings',
      content: {
        'application/json': {
          schema: z.array(PortfolioActivationsSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { TextPatternError: TextPatternErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsPastRoute = createRoute({
  method: 'get',
  path: '/offerings/past',
  tags: ['Offerings'],
  summary: 'Find past offerings',
  description: 'Responds with past offerings for your organisation.',
  responses: {
    200: {
      description: 'past offerings',
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getOfferingsSummaryRoute = createRoute({
  method: 'get',
  path: '/offerings/summary',
  tags: ['Offerings'],
  summary: 'Offerings summary',
  description: 'Responds with a summary of all offerings for your organisation.',
  request: {
    query: z.object({
      $top: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns only the first n results.',
            in: 'query',
            name: '$top',
            schema: { default: '50', type: 'string' },
            required: false,
          },
        }),
      $orderby: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorts the results.',
            in: 'query',
            name: '$orderby',
            schema: { type: 'string' },
            required: false,
          },
        }),
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowReserved: true,
            description: 'Filters the results, based on a Boolean condition.',
            in: 'query',
            name: '$filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'all offerings.',
      content: {
        'application/json': {
          schema: z.array(PortfolioActivationsSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ApiValidationError: ApiValidationErrorExample,
            SchemaQueryError: SchemaQueryErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getOfferingsOfferingIdRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}',
  tags: ['Offerings'],
  summary: 'Find offering by ID',
  description: 'Responds with an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'offering',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const patchOfferingsOfferingIdRoute = createRoute({
  method: 'patch',
  path: '/offerings/{offeringId}',
  tags: ['Offerings'],
  summary: 'Update offering',
  description: 'Updates the offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: { content: { 'application/json': { schema: OfferingSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'offering updated',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            IncompatibleParametersError: IncompatibleParametersErrorExample,
            MissingInfoError: MissingInfoErrorExample,
            ObjectExistsError: ObjectExistsErrorExample,
            OfferingIncompatibleDatesError: OfferingIncompatibleDatesErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdActivitiesOpenresponseRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/activities/openresponse',
  tags: ['Assessment management'],
  summary: "Find offering's activities",
  description: 'Responds with the activities in a specific offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: "offering's learners",
      content: {
        'application/json': {
          schema: z.array(OfferingActivitiesResponseSchema).openapi({ title: 'Activities' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsActivitiesResponsesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/activities/responses',
  tags: ['Assessment data'],
  summary: 'Find open response activity attempts',
  description:
    'Responds with all learner activity attempts for open response activities in an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Offering activity attempt open responses',
      content: {
        'application/json': {
          schema: z
            .array(ActivityAttemptOpenResponseSchema)
            .openapi({ title: 'OfferingActivityAttemptOpenResponses' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsChannelsChannelIdCommentsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/channels/{channelId}/comments',
  tags: ['Channels'],
  summary: 'Find comments',
  description:
    'Responds with a list of comments made in any posts in a specified channel, within an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.array(CommentSchema).openapi({ title: 'Comments' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsChannelsChannelIdPostsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/channels/{channelId}/posts',
  tags: ['Channels'],
  summary: 'Find posts',
  description: 'Responds with a list of posts made in a specified channel, within an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.array(HttpPostSchema).openapi({ title: 'Posts' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsChannelsChannelIdRepliesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/channels/{channelId}/replies',
  tags: ['Channels'],
  summary: 'Find replies',
  description:
    'Responds with a list of replies to comments in any posts in a specified channel, within an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: z.array(CommentSchema).openapi({ title: 'Comments' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsLearnersProgressRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/learners-progress',
  tags: ['Learner activity'],
  summary: 'Find learner progress in a specified offering',
  description: 'Responds with all learner progress in the offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Learners progress',
      content: {
        'application/json': {
          schema: z.array(LearnerProgressResponseSchema).openapi({ title: 'LearnersProgress' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsMarksAssignmentsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/marks/assignments',
  tags: ['Assessment data'],
  summary: 'Find assessment marks',
  description: 'Responds with all learner assessment marks in an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Assignments marks',
      content: {
        'application/json': {
          schema: z.array(AssignmentMarkResponseSchema).openapi({ title: 'AssignmentsMarks' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsMarksQuizzesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/marks/quizzes',
  tags: ['Assessment data'],
  summary: 'Find quiz marks',
  description: 'Responds with all learner quiz marks in an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Quizzes marks',
      content: {
        'application/json': {
          schema: z.array(QuizMarkResponseSchema).openapi({ title: 'QuizzesMarks' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsPulsesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/pulses',
  tags: ['Pulses'],
  summary: 'Find all pulse IDs in the specified offering',
  description:
    'Responds with the IDs of all pulses that learners have responded to in a specified offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: "Pulses' ids",
      content: { 'application/json': { schema: z.array(z.string()) } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsPulsesResponsesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/pulses/responses',
  tags: ['Pulses'],
  summary: 'Find pulses by offeringId',
  description: "Responds with pulse's responses in an offering matching the offeringId.",
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    query: z.object({
      pulseType: z
        .enum(['submit_text', 'MCQ', 'spatial_triangular', 'spatial_planar', 'spatial_linear'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Filter pulse responses by type.',
            in: 'query',
            name: 'pulseType',
            schema: {
              enum: [
                'submit_text',
                'MCQ',
                'spatial_triangular',
                'spatial_planar',
                'spatial_linear',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      responseTime: z
        .xor([z.string().min(1), z.array(z.string())])
        .exactOptional()
        .openapi({
          param: {
            allowReserved: true,
            description:
              'Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__',
            in: 'query',
            name: 'responseTime',
            schema: {
              oneOf: [
                { minLength: 1, type: 'string' },
                { items: { type: 'string' }, type: 'array' },
              ],
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "All pulses' responses",
      content: {
        'application/json': { schema: z.array(PulseResponseSchema).openapi({ title: 'Pulses' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsPulsesPulseIdResponsesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/pulses/{pulseId}/responses',
  tags: ['Pulses'],
  summary: 'Find pulses by offeringId and pulseId',
  description:
    "Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.",
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      pulseId: z
        .string()
        .openapi({
          param: {
            description: "pulse's base id",
            in: 'path',
            name: 'pulseId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Pulse data matching pulseId',
      content: {
        'application/json': { schema: z.array(PulseResponseSchema).openapi({ title: 'Pulses' }) },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsSocialNotesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/social-notes',
  tags: ['Learner activity'],
  summary: 'Find shared social notes in an offering',
  description: 'Responds with all shared social notes in a specified offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Offering social notes',
      content: {
        'application/json': {
          schema: z.array(SocialNotesResponseSchema).openapi({ title: 'OfferingSocialNotes' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsSubmissionsAssignmentsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/submissions/assignments',
  tags: ['Assessment data'],
  summary: 'Find submissions to assessments, including marks if any',
  description:
    'Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Assignments submissions',
      content: {
        'application/json': {
          schema: z
            .array(AssignmentMarkResponseSchema)
            .openapi({ title: 'AssignmentsSubmissions' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsSubmissionsOpenResponseAssessmentIdRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}',
  tags: ['Assessment data'],
  summary: 'Find submissions to a specified open response assessment, including marks if any',
  description:
    'Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      assessmentId: AssessmentIdParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Responds with assignment submissions for the specified assignment.',
      content: {
        'application/json': {
          schema: z
            .array(SubmissionMarkResponseSchema)
            .openapi({ title: 'SubmissionMarkResponse' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAnalyticsSubmissionsUserEmailAssignmentsAssessmentIdRoute =
  createRoute({
    method: 'get',
    path: '/offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId}',
    tags: ['Assessment data'],
    summary: "Find a learner's submission to a specified assessment, including marks if any",
    description:
      "Responds with the learner's assessment submission and any marks for the submission.",
    request: {
      params: z.object({
        offeringId: OfferingIdParamsSchema,
        userEmail: UserEmailParamsSchema,
        assessmentId: AssessmentIdParamsSchema,
      }),
    },
    responses: {
      200: {
        description:
          "Responds with the learner's assessment submission and any marks for the submission.",
        content: {
          'application/json': {
            schema: z
              .array(SubmissionMarkResponseSchema)
              .openapi({ title: 'SubmissionMarkResponse' }),
          },
        },
      },
      401: NotAuthorizedErrorResponse,
      403: AccessDeniedErrorResponse,
      404: ObjectNotFoundErrorResponse,
    },
  })

export const getOfferingsOfferingIdAnalyticsUnitReactionsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/analytics/unit-reactions',
  tags: ['Learner activity'],
  summary: 'Find unit reactions',
  description: 'Responds with user reactions to units in a specified offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Unit Reactions',
      content: {
        'application/json': {
          schema: z
            .array(UnitReactionsAnalyticsResponseSchema)
            .openapi({ title: 'UnitReactiosAnalytics' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdAssessmentsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/assessments',
  tags: ['Assessment management'],
  summary: "Find offering's assessments",
  description: 'Responds with all assessments in an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: "offering's assessments",
      content: {
        'application/json': {
          schema: z.array(AssessmentResponseSchema).openapi({ title: 'Assessments' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const patchOfferingsOfferingIdAssessmentsAssessmentIdRoute = createRoute({
  method: 'patch',
  path: '/offerings/{offeringId}/assessments/{assessmentId}',
  tags: ['Assessment management'],
  summary: 'Update assessment details',
  description: 'Updates the assessment details for a specified assessment in an offering.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      assessmentId: z
        .string()
        .openapi({
          param: {
            description: "assessment's id",
            in: 'path',
            name: 'assessmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssessmentSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'assessment successfully updated',
      content: { 'application/json': { schema: AssessmentResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaMinLengthError: SchemaMinLengthErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdAssessmentsAssessmentIdDocumentsDocumentIdRoute = createRoute(
  {
    method: 'delete',
    path: '/offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId}',
    tags: ['Assessment management'],
    summary: 'Remove assessment document',
    description: 'Removes the assessment document file for a specified assessment in an offering.',
    request: {
      params: z.object({
        offeringId: OfferingIdParamsSchema,
        assessmentId: z
          .string()
          .openapi({
            param: {
              description: "assessment's id",
              in: 'path',
              name: 'assessmentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        documentId: z
          .string()
          .openapi({
            param: {
              description: "documents's id",
              in: 'path',
              name: 'documentId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: { description: 'assessment document successfully removed' },
      401: NotAuthorizedErrorResponse,
      403: AccessDeniedErrorResponse,
      404: ObjectNotFoundErrorResponse,
    },
  },
)

export const patchOfferingsOfferingIdAssessmentsAssessmentIdUserEmailRoute = createRoute({
  method: 'patch',
  path: '/offerings/{offeringId}/assessments/{assessmentId}/{userEmail}',
  tags: ['Assessment management'],
  summary: "Update the due dates for a learner's quiz attempt",
  description: "Updates the due dates for a learner's quiz attempt specified by the assessmentId.",
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      assessmentId: z
        .string()
        .openapi({
          param: {
            description: "assessment's id",
            in: 'path',
            name: 'assessmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userEmail: z
        .email()
        .openapi({
          param: {
            description: "user's email",
            in: 'path',
            name: 'userEmail',
            required: true,
            schema: { format: 'email', type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ dueDate: z.iso.datetime({ offset: true }).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successfully updated assessment due date.' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidParameterError: InvalidParameterErrorExample,
            ObjectInvalidPropertyError: ObjectInvalidPropertyErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdBadgesRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/badges',
  tags: ['Badges'],
  summary: 'Find offering badges',
  description: 'Responds with the badge for an offering matching the offeringId.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: { description: 'badges', content: { 'application/json': { schema: BadgeSchema } } },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdChannelsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/channels',
  tags: ['Channels'],
  summary: 'Find channels',
  description: 'Responds with a list of channels in an offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Succesful response',
      content: {
        'application/json': {
          schema: z
            .array(ChannelResponseSchema)
            .openapi({ title: 'List of channels in a offering' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdChannelsRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/channels',
  tags: ['Channels'],
  summary: 'Add channel',
  description: 'Adds new channel to the specified offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: { content: { 'application/json': { schema: ChannelRequiredSchema } }, required: true },
  },
  responses: {
    201: {
      description: 'channel successfully added',
      content: { 'application/json': { schema: ChannelResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const patchOfferingsOfferingIdChannelsChannelIdRoute = createRoute({
  method: 'patch',
  path: '/offerings/{offeringId}/channels/{channelId}',
  tags: ['Channels'],
  summary: 'Update channel',
  description: 'Updates a channel in an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
    body: { content: { 'application/json': { schema: ChannelSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'channel successfully updated',
      content: { 'application/json': { schema: ChannelResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdChannelsChannelIdLearnersRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/channels/{channelId}/learners',
  tags: ['Channels'],
  summary: 'Find learners in a group channel',
  description: 'Finds all learners in a specified group channel.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'channel data',
      content: { 'application/json': { schema: ChannelResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { InvalidGroupChannelError: InvalidGroupChannelErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdChannelsChannelIdLearnersRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/channels/{channelId}/learners',
  tags: ['Channels'],
  summary: 'Add learners to a group channel',
  description: 'Adds a learner to a specified group channel.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ email: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Learner successfully added to the channel.' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidGroupChannelError: InvalidGroupChannelErrorExample,
            ObjectExistsError: ObjectExistsErrorExample,
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
            UserNotInOfferingError: UserNotInOfferingErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdChannelsChannelIdLearnersRoute = createRoute({
  method: 'delete',
  path: '/offerings/{offeringId}/channels/{channelId}/learners',
  tags: ['Channels'],
  summary: 'Remove learners from a group channel',
  description: 'Removes a learner from the specified group channel.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, channelId: ChannelIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ email: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Learner successfully removed from the channel.' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidGroupChannelError: InvalidGroupChannelErrorExample,
            UserNotInOfferingError: UserNotInOfferingErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdGroupsRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/groups',
  tags: ['Assessment groups'],
  summary: 'Find assessment groups',
  description: 'Responds with a list of assessment groups in an offering.',
  request: { params: z.object({ offeringId: OfferingIdParamsSchema }) },
  responses: {
    200: {
      description: 'Succesful response',
      content: {
        'application/json': {
          schema: z
            .array(AssessmentGroupResponseSchema)
            .openapi({ title: 'List of assessment groups in an offering' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdGroupsRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/groups',
  tags: ['Assessment groups'],
  summary: 'Add an assessment group',
  description: 'Creates a new assessment group in an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: { 'application/json': { schema: AssessmentGroupRequiredSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'assessment group successfully added',
      content: { 'application/json': { schema: AssessmentGroupResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdGroupsGroupIdLearnersRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/groups/{groupId}/learners',
  tags: ['Assessment groups'],
  summary: 'Find learners in an assessment group',
  description: 'Responds with a list of learners in a specified assessment group.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, groupId: GroupIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Succesful response',
      content: {
        'application/json': {
          schema: z.array(UserResponseSchema).openapi({ title: 'List of learners' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdGroupsGroupIdLearnersRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/groups/{groupId}/learners',
  tags: ['Assessment groups'],
  summary: 'Add a learner to an assessment group',
  description: 'Adds a learner into the specified assessment group.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, groupId: GroupIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.object({ email: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Succesful response',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { ApiValidationError: ApiValidationErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdGroupsGroupIdLearnersUserEmailRoute = createRoute({
  method: 'delete',
  path: '/offerings/{offeringId}/groups/{groupId}/learners/{userEmail}',
  tags: ['Assessment groups'],
  summary: 'Remove a learner from an assessment group',
  description: 'Removes a learner from the specified assessment group.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      groupId: GroupIdParamsSchema,
      userEmail: UserEmailParamsSchema,
    }),
  },
  responses: {
    204: { description: 'user successfully removed from the assessment group' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { ApiValidationError: ApiValidationErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdLearnersPendingSubmissionRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/learners/pending-submission',
  tags: ['Assessment management'],
  summary:
    'Find learners with assessments pending x days before due date within the specified offeringId',
  description:
    'Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    query: z.object({
      days: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'days to assessment due date. Default is 3 days',
            in: 'query',
            name: 'days',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "offering's learners",
      content: {
        'application/json': {
          schema: z.array(AssessmentPendingSubmissionSchema).openapi({ title: 'Assessments' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaTypeError: SchemaTypeErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putOfferingsOfferingIdMetadataCategoryRoute = createRoute({
  method: 'put',
  path: '/offerings/{offeringId}/metadata/category',
  tags: ['Offering metadata'],
  summary: 'Update offering category metadata',
  description: 'Updates the offering category metadata.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ category: z.string().exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'offering updated',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaTypeError: SchemaTypeErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putOfferingsOfferingIdMetadataLevelRoute = createRoute({
  method: 'put',
  path: '/offerings/{offeringId}/metadata/level',
  tags: ['Offering metadata'],
  summary: 'Update offering level metadata',
  description: 'Updates the offering level metadata.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ level: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'offering updated',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaTypeError: SchemaTypeErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putOfferingsOfferingIdMetadataTagsRoute = createRoute({
  method: 'put',
  path: '/offerings/{offeringId}/metadata/tags',
  tags: ['Offering metadata'],
  summary: 'Update offering tags metadata',
  description: 'Updates the offering tags metadata.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .strictObject({ tags: z.array(z.string()).exactOptional() })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'offering updated',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaTypeError: SchemaTypeErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putOfferingsOfferingIdMetadataTopicRoute = createRoute({
  method: 'put',
  path: '/offerings/{offeringId}/metadata/topic',
  tags: ['Offering metadata'],
  summary: 'Update offering topic metadata',
  description: 'Updates the offering topic metadata.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z.strictObject({ topic: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'offering updated',
      content: { 'application/json': { schema: OfferingMetadataResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaTypeError: SchemaTypeErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdUsersRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/users',
  tags: ['Offering learners'],
  summary: "Find offering's users",
  description:
    'Responds with a list of users in the offering (facilitators, learners and markers.).',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    query: z.object({
      facilitators: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, facilitators are included in the results.',
            in: 'query',
            name: 'facilitators',
            schema: { default: 'true', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
      learners: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, learners are included in the results.',
            in: 'query',
            name: 'learners',
            schema: { default: 'true', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
      markers: z
        .enum(['true', 'false'])
        .default('true')
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, markers are included in the results.',
            in: 'query',
            name: 'markers',
            schema: { default: 'true', enum: ['true', 'false'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: "offering's users",
      content: {
        'application/json': {
          schema: z.array(OfferingUserResponseSchema).openapi({ title: "offering's users" }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaAllowedValuesError: SchemaAllowedValuesErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdUsersRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/users',
  tags: ['Offering learners'],
  summary: 'Adds user to the offering',
  description: 'Adds one or more users to the offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .array(OfferingUserSchema)
            .openapi({ title: 'users to be added to the offering.' }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'user successfully added to the offering',
      content: { 'application/json': { schema: z.array(OfferingUserAddResponseSchema) } },
    },
    207: {
      description: 'Partially successful response',
      content: {
        'application/json': {
          schema: z.array(z.xor([OfferingUserAddResponseSchema, ErrorSchema])),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ApiValidationError: ApiValidationErrorExample,
            ObjectExistsError: ObjectExistsErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaRequiredError: SchemaRequiredErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdUsersMarkerEmailMarksRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/users/{markerEmail}/marks',
  tags: ['Offering learners'],
  summary: 'Find Learners marked by a coach',
  description: 'Responds with all learners marked by the specified coach.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      markerEmail: z
        .string()
        .openapi({
          param: {
            description: "marker's email",
            in: 'path',
            name: 'markerEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'learners marked by the marker',
      content: {
        'application/json': {
          schema: z.array(OfferingUserSchema).openapi({ title: 'learners marked by the marker' }),
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdUsersMarkerEmailMarksRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/users/{markerEmail}/marks',
  tags: ['Offering learners'],
  summary: 'Add learners to be marked by a coach',
  description: 'Adds an array of learners to be marked by the specified coach.',
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      markerEmail: z
        .string()
        .openapi({
          param: {
            description: "marker's email",
            in: 'path',
            name: 'markerEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'array of learners e-mails',
      content: { 'application/json': { schema: z.array(z.string()) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'learners marked by the marker',
      content: {
        'application/json': {
          schema: z.array(OfferingUserSchema).openapi({ title: 'learners marked by the marker' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { ObjectIsNotError: ObjectIsNotErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdUsersMarkerEmailMarksRoute = createRoute({
  method: 'delete',
  path: '/offerings/{offeringId}/users/{markerEmail}/marks',
  tags: ['Offering learners'],
  summary: "Remove learners from coach's marking list",
  description: "Removes an array of learners from coach's marking list.",
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      markerEmail: z
        .string()
        .openapi({
          param: {
            description: "marker's email",
            in: 'path',
            name: 'markerEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'array of learners e-mails',
      content: { 'application/json': { schema: z.array(z.string()) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'learners marked by the marker',
      content: {
        'application/json': {
          schema: z.array(OfferingUserSchema).openapi({ title: 'learners marked by the marker' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { ObjectIsNotError: ObjectIsNotErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdUsersUserEmailRoute = createRoute({
  method: 'delete',
  path: '/offerings/{offeringId}/users/{userEmail}',
  tags: ['Offering learners'],
  summary: 'Removes user from the offering',
  description: 'Removes a user from the offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, userEmail: UserEmailParamsSchema }),
  },
  responses: {
    204: { description: 'user successfully removed from the offering' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ApiValidationError: ApiValidationErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const deleteOfferingsOfferingIdUsersUserEmailAssessmentsAssessmentIdRoute = createRoute({
  method: 'delete',
  path: '/offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId}',
  tags: ['Assessment management'],
  summary: "Reset user's assessment to draft state",
  description: "Resets the user's submitted assessment to a draft state.",
  request: {
    params: z.object({
      offeringId: OfferingIdParamsSchema,
      userEmail: UserEmailParamsSchema,
      assessmentId: AssessmentIdParamsSchema,
    }),
  },
  responses: {
    204: { description: "User's assessment successfully moved to draft state." },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            AssessmentNotSubmittedError: AssessmentNotSubmittedErrorExample,
            ObjectInvalidPropertyError: ObjectInvalidPropertyErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postOfferingsOfferingIdUsersUserEmailBadgesAwardRoute = createRoute({
  method: 'post',
  path: '/offerings/{offeringId}/users/{userEmail}/badges/award',
  tags: ['Badges'],
  summary: 'Award badge',
  description: 'Awards a badge to a user in the offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, userEmail: UserEmailParamsSchema }),
  },
  responses: {
    201: {
      description: 'Awarded badge response',
      content: { 'application/json': { schema: AwardedResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            MissingInfoError: MissingInfoErrorExample,
            UserNotInOfferingError: UserNotInOfferingErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOfferingsOfferingIdUsersUserEmailSubmissionsOpenResponseRoute = createRoute({
  method: 'get',
  path: '/offerings/{offeringId}/users/{userEmail}/submissions/open-response',
  tags: ['Assessment management'],
  summary: "Find learner's open response assessment submissions",
  description: 'Responds with open response assessment submissions by a learner in an offering.',
  request: {
    params: z.object({ offeringId: OfferingIdParamsSchema, userEmail: UserEmailParamsSchema }),
  },
  responses: {
    200: {
      description: 'user open response submission and mark details',
      content: {
        'application/json': {
          schema: z.array(AssignmentsSchema).openapi({ title: "user's assignments" }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaEmailError: SchemaEmailErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getOrgRoute = createRoute({
  method: 'get',
  path: '/org',
  tags: ['Organisation'],
  summary: 'Gets the current organisation',
  description: 'Returns the current organisation info.',
  responses: {
    200: {
      description: 'organisation summary data',
      content: { 'application/json': { schema: OrgResponseSchema } },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postUsersRoute = createRoute({
  method: 'post',
  path: '/users',
  tags: ['Users in iQualify'],
  summary: 'Add new user',
  description: 'Creates a new user.',
  request: {
    body: {
      description: 'user',
      content: { 'application/json': { schema: UserSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'user added',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ObjectExistsError: ObjectExistsErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
            UserSuspendedError: UserSuspendedErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getUsersAllProgressRoute = createRoute({
  method: 'get',
  path: '/users/all/progress',
  tags: ['Learner activity'],
  summary: 'Find learner progress in all offerings',
  description: "Responds with all learners' progress in all offerings.",
  request: {
    query: z.object({
      $top: z
        .string()
        .default('50')
        .exactOptional()
        .openapi({
          param: {
            description: 'Returns only the first n results.',
            in: 'query',
            name: '$top',
            schema: { default: '50', type: 'string' },
            required: false,
          },
        }),
      $orderby: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sorts the results.',
            in: 'query',
            name: '$orderby',
            schema: { type: 'string' },
            required: false,
          },
        }),
      $filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowReserved: true,
            description: 'Filters the results, based on a Boolean condition.',
            in: 'query',
            name: '$filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Learners progress',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  progress: z
                    .array(LearnerResponseSchema)
                    .exactOptional()
                    .openapi({ title: 'Learners' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              top: z.int().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ApiValidationError: ApiValidationErrorExample,
            SchemaQueryError: SchemaQueryErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
  },
})

export const getUsersUserEmailRoute = createRoute({
  method: 'get',
  path: '/users/{userEmail}',
  tags: ['Users in iQualify'],
  summary: 'Find user by email',
  description: 'Responds with a user matching the specified email.',
  request: { params: z.object({ userEmail: UserEmailParamsSchema }) },
  responses: {
    200: {
      description: 'user data',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaEmailError: SchemaEmailErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const patchUsersUserEmailRoute = createRoute({
  method: 'patch',
  path: '/users/{userEmail}',
  tags: ['Users in iQualify'],
  summary: 'Update user',
  description: 'Updates the specified user by email.',
  request: {
    params: z.object({ userEmail: UserEmailParamsSchema }),
    body: { content: { 'application/json': { schema: UserSchema } } },
  },
  responses: {
    200: {
      description: 'user updated',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ObjectExistsError: ObjectExistsErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaMinLengthError: SchemaMinLengthErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getUsersUserEmailBadgesRoute = createRoute({
  method: 'get',
  path: '/users/{userEmail}/badges',
  tags: ['Badges'],
  summary: "Find user's badges",
  description: 'Responds with all badges that the specified user has been awarded.',
  request: { params: z.object({ userEmail: UserEmailParamsSchema }) },
  responses: {
    200: {
      description: "user's badges",
      content: {
        'application/json': { schema: z.array(UserBadgeSchema).openapi({ title: 'Badges' }) },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaEmailError: SchemaEmailErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postUsersUserEmailInviteEmailRoute = createRoute({
  method: 'post',
  path: '/users/{userEmail}/invite-email',
  tags: ['Users in iQualify'],
  summary: 'Resend invitation email',
  description: 'Re-sends an invitation e-mail to the specified user.',
  request: { params: z.object({ userEmail: UserEmailParamsSchema }) },
  responses: {
    204: { description: 'successfully requested invitation e-mail sending' },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getUsersUserEmailOfferingsRoute = createRoute({
  method: 'get',
  path: '/users/{userEmail}/offerings',
  tags: ['Users in iQualify'],
  summary: "Find user's offerings",
  description: 'Responds with all offerings that the user in.',
  request: { params: z.object({ userEmail: UserEmailParamsSchema }) },
  responses: {
    200: {
      description: "user's offerings",
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaEmailError: SchemaEmailErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postUsersUserEmailOfferingsRoute = createRoute({
  method: 'post',
  path: '/users/{userEmail}/offerings',
  tags: ['Users in iQualify'],
  summary: 'Adds the user to the specified offerings as a learner',
  description: 'Adds a user to an array of offerings by offeringId.',
  request: {
    params: z.object({ userEmail: UserEmailParamsSchema }),
    body: {
      description: 'offering ids',
      content: { 'application/json': { schema: z.array(z.string()) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: "user's offerings",
      content: {
        'application/json': {
          schema: z.array(OfferingMetadataResponseSchema).openapi({ title: 'Offerings' }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            MissingInfoError: MissingInfoErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getUsersUserEmailOfferingsOfferingIdProgressRoute = createRoute({
  method: 'get',
  path: '/users/{userEmail}/offerings/{offeringId}/progress',
  tags: ['Learner activity'],
  summary: "Find learner's progress in a specified offering",
  description: "Responds with the learner's progress in a specified offering.",
  request: {
    params: z.object({ userEmail: UserEmailParamsSchema, offeringId: OfferingIdParamsSchema }),
  },
  responses: {
    200: {
      description: "user's offerings",
      content: {
        'application/json': {
          schema: z
            .object({
              completion: z.string().exactOptional(),
              email: z.string().exactOptional(),
              firstName: z.string().exactOptional(),
              id: z.string().exactOptional(),
              lastName: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            SchemaEmailError: SchemaEmailErrorExample,
            UserNotInOfferingError: UserNotInOfferingErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const postUsersUserEmailPermissionsPermissionNameRoute = createRoute({
  method: 'post',
  path: '/users/{userEmail}/permissions/{permissionName}',
  tags: ['Users in iQualify'],
  summary: 'Add permission to user',
  description: 'Adds additional permissions to the specified user.',
  request: {
    params: z.object({
      userEmail: UserEmailParamsSchema,
      permissionName: PermissionNameParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'permission successfully added to user',
      content: { 'application/json': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            MissingInfoError: MissingInfoErrorExample,
            ObjectAlreadyIsError: ObjectAlreadyIsErrorExample,
            SchemaAllowedValuesError: SchemaAllowedValuesErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const getUsersUserEmailProgressRoute = createRoute({
  method: 'get',
  path: '/users/{userEmail}/progress',
  tags: ['Learner activity'],
  summary: "Find learner's progress in offerings",
  description: "Responds with the specified learner's progress in all offerings.",
  request: { params: z.object({ userEmail: UserEmailParamsSchema }) },
  responses: {
    200: {
      description: 'Learner Progress',
      content: { 'application/json': { schema: LearnerResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { SchemaEmailError: SchemaEmailErrorExample },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const putUsersUserEmailSuspendRoute = createRoute({
  method: 'put',
  path: '/users/{userEmail}/suspend',
  tags: ['Users in iQualify'],
  summary: 'Suspend user',
  description: "Suspends the specified user's account.",
  request: {
    params: z.object({ userEmail: UserEmailParamsSchema }),
    body: { content: { 'application/json': { schema: SuspendedRequestSchema } }, required: true },
  },
  responses: {
    204: { description: 'User suspended.' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            InvalidParameterError: InvalidParameterErrorExample,
            ObjectExistsError: ObjectExistsErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
            SchemaFormatError: SchemaFormatErrorExample,
            SchemaTypeError: SchemaTypeErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})

export const patchUsersUserEmailTransferRoute = createRoute({
  method: 'patch',
  path: '/users/{userEmail}/transfer',
  tags: ['Offering learners'],
  summary: 'Transfer a user between offerings',
  description: "Moves the user's access and progress from one offering to another.",
  request: {
    params: z.object({ userEmail: UserEmailParamsSchema }),
    body: {
      description: 'transfer_data',
      content: { 'application/json': { schema: TransferRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'Updated user information' },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            ContentDoNotMatchError: ContentDoNotMatchErrorExample,
            InvalidSourceAndTargetError: InvalidSourceAndTargetErrorExample,
            SchemaEmailError: SchemaEmailErrorExample,
          },
        },
      },
    },
    401: NotAuthorizedErrorResponse,
    403: AccessDeniedErrorResponse,
    404: ObjectNotFoundErrorResponse,
  },
})
