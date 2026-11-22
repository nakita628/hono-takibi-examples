type Error = { error?: { details?: string | undefined; name?: string | undefined } | undefined }
type LearningOutcomes = { description?: string | undefined; id?: string | undefined }
type CourseResponse = {
  coverImageUrl?: string | undefined
  createdAt?: string | undefined
  id?: string | undefined
  metadata?: { learning_outcomes?: LearningOutcomes[] | undefined } | undefined
  name?: string | undefined
}
type CourseMetaResponse = {
  coverImageUrl?: string | undefined
  createdAt?: string | undefined
  id?: string | undefined
  metadata?:
    | {
        category?: string | undefined
        learning_outcomes?: LearningOutcomes[] | undefined
        level?: string | undefined
        rootContentId?: string | undefined
        tags?: string[] | undefined
        topic?: string | undefined
      }
    | undefined
  name?: string | undefined
  tasksEnabled?: boolean | undefined
}
type ActivationResponse = {
  end?: string | undefined
  id?: string | undefined
  info?: string | undefined
  learnersCount?: string | undefined
  metadata?: { rootContentId?: string | undefined } | undefined
  name?: string | undefined
  start?: string | undefined
}
type UserPermission = {
  email?: string | undefined
  isBuilder?: boolean | undefined
  isReviewer?: boolean | undefined
  name?: string | undefined
}
type OfferingMetadata = {
  category?: string | undefined
  level?: string | undefined
  rootContentId?: string | undefined
  tags?: string[] | undefined
  topic?: string | undefined
}
type OfferingMetadataResponse = {
  contentId?: string | undefined
  coverImageUrl?: string | undefined
  currency?: string | undefined
  description?: string | undefined
  earlyCloseOffDate?: string | undefined
  end?: string | undefined
  enrollmentLimit?: number | undefined
  hasEarlyCloseOff?: boolean | undefined
  id?: string | undefined
  identifier?: string | undefined
  isReadonly?: boolean | undefined
  metadata?: OfferingMetadata | undefined
  name?: string | undefined
  overview?: string | undefined
  price?: number | undefined
  start?: string | undefined
  tasksEnabled?: boolean | undefined
  trailerVideoUrl?: string | undefined
  useRelativeDates?: boolean | undefined
}
type BadgeExpiry = {
  expirationDate?: string | undefined
  expires?: boolean | undefined
  expiryType?: 'date' | 'timeframe' | undefined
  timeframeAmount?: number | undefined
  timeframeUnit?: 'days' | 'months' | 'years' | undefined
}
type OfferingRequired = {
  badge?:
    | {
        badgeExpiry?: BadgeExpiry | undefined
        description?: string | undefined
        requiresApproval?: boolean | undefined
        title?: string | undefined
      }
    | undefined
  contentId?: string | undefined
  createDefaultChannels?: boolean | undefined
  description?: string | undefined
  earlyCloseOffDate?: string | undefined
  end?: string | undefined
  hasEarlyCloseOff?: boolean | undefined
  identifier?: string | undefined
  isReadonly?: boolean | undefined
  metadata?:
    | {
        category?: string | undefined
        level?: string | undefined
        tags?: string[] | undefined
        topic?: string | undefined
      }
    | undefined
  name?: string | undefined
  rootContentId?: string | undefined
  start: string
  trailerVideoUrl?: string | undefined
  useRelativeDates?: boolean | undefined
}
type PortfolioActivations = {
  contentId?: string | undefined
  end?: string | undefined
  id?: string | undefined
  info?: string | undefined
  learnersCount?: number | undefined
  metadata?: { rootContentId?: string | undefined } | undefined
  name?: string | undefined
  start?: string | undefined
}
type Offering = {
  badge?:
    | {
        badgeExpiry?: BadgeExpiry | undefined
        description?: string | undefined
        requiresApproval?: boolean | undefined
        title?: string | undefined
      }
    | undefined
  contentId?: string | undefined
  description?: string | undefined
  earlyCloseOffDate?: string | undefined
  end?: string | undefined
  hasEarlyCloseOff?: boolean | undefined
  identifier?: string | undefined
  isReadonly?: boolean | undefined
  metadata?:
    | {
        category?: string | undefined
        level?: string | undefined
        tags?: string[] | undefined
        topic?: string | undefined
      }
    | undefined
  name?: string | undefined
  overview?: string | undefined
  rootContentId?: string | undefined
  start?: string | undefined
  trailerVideoUrl?: string | undefined
  useRelativeDates?: boolean | undefined
}
type OfferingActivitiesResponse = {
  activityId?: string | undefined
  time?: number | undefined
  title?: string | undefined
}
type ActivityAttemptOpenResponseFeedback = {
  facilitatorEmail?: string | undefined
  text?: string | undefined
}
type ActivityAttemptOpenResponseFiles = {
  filename?: string | undefined
  mimetype?: string | undefined
  size?: string | undefined
  url?: string | undefined
}
type ActivityAttemptOpenResponse = {
  activityId?: string | undefined
  activityType?: string | undefined
  feedback?: ActivityAttemptOpenResponseFeedback | undefined
  learnerEmail?: string | undefined
  offeringId?: string | undefined
  responseText?: string | undefined
  uploadedFiles?: ActivityAttemptOpenResponseFiles | undefined
}
type Moderator = {
  avatarUrl?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
}
type Moderation = {
  isMuted?: boolean | undefined
  moderator?: Moderator | undefined
  reason?: string | undefined
}
type Comment = {
  content?: string | undefined
  createdAt?: string | undefined
  email?: string | undefined
  id?: string | undefined
  isFacilitatorPost?: boolean | undefined
  moderation?: Moderation | undefined
  parentCommentId?: string | undefined
  postId?: string | undefined
}
type DocumentResponse = {
  id?: string | undefined
  mimetype?: string | undefined
  size?: bigint | undefined
  url?: string | undefined
}
type HttpPost = {
  attachments?: DocumentResponse[] | undefined
  content?: string | undefined
  createdAt?: string | undefined
  email?: string | undefined
  id?: string | undefined
  isFacilitatorPost?: boolean | undefined
  moderation?: Moderation | undefined
  title?: string | undefined
}
type LearnerProgressResponse = {
  completion?: string | undefined
  courseId?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastLoggedInAt?: string | undefined
  lastName?: string | undefined
  personId?: string | undefined
}
type AssignmentMarkResponse = {
  assessmentId?: string | undefined
  assessmentItemDetails?: string | undefined
  assessmentItemName?: string | undefined
  courseName?: string | undefined
  learnerEmail?: string | undefined
  learnerFirstName?: string | undefined
  learnerLastName?: string | undefined
  learnerPersonId?: string | undefined
  mark?: string | undefined
  markFeedback?: string | undefined
  markedBy?: string | undefined
  markedByEvaluator?: boolean | undefined
  markedByFacilitator?: boolean | undefined
  markedByMarker?: boolean | undefined
  markedDateTime?: string | undefined
  submissionDateTime?: string | undefined
}
type QuizMarkResponse = {
  attempts?: number | undefined
  lastAttemptAt?: string | undefined
  learnerEmail?: string | undefined
  learnerFullname?: string | undefined
  learnerPersonId?: string | undefined
  mark?: string | undefined
  quizId?: string | undefined
  quizTitle?: string | undefined
}
type PulseMCQOption = { option?: string | undefined; value?: boolean | undefined }
type PulseSpatialOption = { option?: string | undefined; value?: number | undefined }
type PulseAnswer = {
  multiChoiceAnswer?: PulseMCQOption[] | undefined
  spatialAnswer?: PulseSpatialOption[] | undefined
  textAnswer?: string | undefined
}
type PulseResponse = {
  learnerFirstName?: string | undefined
  learnerId?: string | undefined
  learnerLastName?: string | undefined
  pulseBaseId?: string | undefined
  pulseInstanceId?: string | undefined
  pulseQuestion?: string | undefined
  pulseRunDurationMinutes?: number | undefined
  pulseRunStart?: string | undefined
  pulseType?: string | undefined
  response?: PulseAnswer | undefined
  responseTime?: string | undefined
}
type SocialNotesResponse = {
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  pageId?: string | undefined
  personId?: string | undefined
  'social-note-content'?: string | undefined
  'social-note-paragraphId'?: string | undefined
  userId?: string | undefined
}
type Document = {
  createdAt?: string | undefined
  filename?: string | undefined
  id?: string | undefined
  mimetype?: string | undefined
  size?: bigint | undefined
  url?: string | undefined
}
type MarkFeedback = {
  createdAt?: string | undefined
  feedback?: string | undefined
  feedbackBy?: string | undefined
  id?: string | undefined
  mark?: string | undefined
  markerId?: string | undefined
}
type Mark = {
  createdAt?: string | undefined
  feedback?: string | undefined
  id?: string | undefined
  mark?: string | undefined
  markFeedback?: MarkFeedback[] | undefined
  markedBy?: string | undefined
  markerId?: string | undefined
}
type SubmissionMarkResponse = {
  assessmentId?: string | undefined
  assessmentItemDetails?: string | undefined
  assessmentItemName?: string | undefined
  courseName?: string | undefined
  files?: Document[] | undefined
  html?: string | undefined
  learnerEmail?: string | undefined
  learnerFirstName?: string | undefined
  learnerLastName?: string | undefined
  learnerPersonId?: string | undefined
  marks?: Mark[] | undefined
  status?: string | undefined
  submissionDateTime?: string | undefined
}
type UnitReactionsFeedback = {
  'thumbs-down'?: number | undefined
  'thumbs-up'?: number | undefined
}
type UnitReactionsAnalyticsResponse = {
  feedback?: UnitReactionsFeedback | undefined
  pageId?: boolean | undefined
}
type ThemeResponse = { filter?: string | undefined; numberOfQuestions?: string | undefined }
type AssessmentResponse = {
  content?: string | undefined
  documents?: Document[] | undefined
  dueDate?: string | undefined
  durationMinutes?: number | undefined
  filename?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  markNumber?: string | undefined
  markType?: string | undefined
  maxAttempts?: number | undefined
  openDate?: string | undefined
  pid?: string | undefined
  points?: string | undefined
  themes?: ThemeResponse[] | undefined
  title?: string | undefined
  totalQuestions?: number | undefined
  totalThemes?: number | undefined
  type?: string | undefined
}
type Assessment = {
  content?: string | undefined
  dueDate?: string | undefined
  markNumber?: string | undefined
  markType?: string | undefined
  openDate?: string | undefined
}
type Badge = {
  badgeExpiry?: BadgeExpiry | undefined
  badgeUrl?: string | undefined
  criterias?:
    | {
        hasCompletedCourse?: boolean | undefined
        hasPassedMandatoryAssessedQuizzes?: boolean | undefined
      }
    | undefined
  description?: string | undefined
  openBadge?:
    | {
        criteria?: { narrative?: string | undefined } | undefined
        description?: string | undefined
        id?: string | undefined
        image?: string | undefined
        issuer?: string | undefined
        name?: string | undefined
        type?: string | undefined
      }
    | undefined
  title?: string | undefined
}
type ChannelResponse = {
  id?: string | undefined
  isBroadcastOnly?: boolean | undefined
  title?: string | undefined
}
type ChannelRequired = { isBroadcastOnly?: boolean | undefined; title: string }
type Channel = {
  group?: { autoAssign?: boolean | undefined } | undefined
  groupDiscussion?: boolean | undefined
  isBroadcastOnly?: boolean | undefined
  privateSupport?: boolean | undefined
  title?: string | undefined
}
type AssessmentGroupResponse = {
  createdAt?: string | undefined
  id?: string | undefined
  title?: string | undefined
}
type AssessmentGroupRequired = { title: string }
type Invite = { url?: string | undefined }
type UserMetadata = { tags?: string[] | undefined }
type UserProfile = { displayName?: string | undefined; mobile?: string | undefined }
type UserResponse = {
  avatarUrl?: string | undefined
  email?: string | undefined
  firstAccessAt?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  invite?: Invite | undefined
  lastAccessAt?: string | undefined
  lastName?: string | undefined
  metadata?: UserMetadata | undefined
  personId?: string | undefined
  profile?: UserProfile | undefined
}
type UserProfileRequest = { displayName?: string | undefined }
type User = {
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  metadata?: UserMetadata | undefined
  personId?: string | undefined
  profile?: UserProfileRequest | undefined
  sendInvite?: boolean | undefined
}
type AssessmentPendingSubmission = {
  content?: string | undefined
  documents?: Document[] | undefined
  dueDate?: string | undefined
  durationMinutes?: number | undefined
  filename?: string | undefined
  hidden?: boolean | undefined
  id?: string | undefined
  markNumber?: string | undefined
  markType?: string | undefined
  maxAttempts?: number | undefined
  offeringId?: string | undefined
  offeringName?: string | undefined
  openDate?: string | undefined
  pid?: string | undefined
  points?: string | undefined
  themes?: ThemeResponse[] | undefined
  title?: string | undefined
  totalQuestions?: number | undefined
  totalThemes?: number | undefined
  type?: string | undefined
  users?: User[] | undefined
}
type OfferingUserResponse = {
  avatarUrl?: string | undefined
  email?: string | undefined
  evaluatedBy?: string[] | undefined
  evaluates?: string[] | undefined
  firstName?: string | undefined
  id?: string | undefined
  isFacilitator?: boolean | undefined
  isMarker?: boolean | undefined
  isReadonly?: boolean | undefined
  lastName?: string | undefined
  markedBy?: string[] | undefined
  marks?: string[] | undefined
  personId?: string | undefined
  profile?: UserProfile | undefined
}
type OfferingUser = {
  email: string
  firstName?: string | undefined
  isFacilitator?: boolean | undefined
  isMarker?: boolean | undefined
  isReadonly?: boolean | undefined
  lastName?: string | undefined
  metadata?: UserMetadata | undefined
  personId?: string | undefined
  profile?: UserProfileRequest | undefined
  sendInvite?: boolean | undefined
  sendNotificationEmail?: boolean | undefined
}
type OfferingUserAddResponse = {
  email?: string | undefined
  firstName?: string | undefined
  invite?: Invite | undefined
  isFacilitator?: boolean | undefined
  isMarker?: boolean | undefined
  isReadonly?: boolean | undefined
  lastName?: string | undefined
  metadata?: UserMetadata | undefined
  personId?: string | undefined
  profile?: UserProfileRequest | undefined
  sendInvite?: boolean | undefined
  sendNotificationEmail?: boolean | undefined
}
type AwardedResponse = {
  awarded?: boolean | undefined
  badgeId?: string | undefined
  badgeUrl?: string | undefined
}
type Assignments = {
  files?: Document[] | undefined
  marks?: Mark[] | undefined
  status?: string | undefined
  submittedAt?: string | undefined
  updatedAt?: string | undefined
}
type OrgResponse = { id?: string | undefined; name?: string | undefined }
type OfferingProgressRow = { completion?: string | undefined; id?: string | undefined }
type LearnerResponse = {
  email?: string | undefined
  firstName?: string | undefined
  id?: string | undefined
  lastName?: string | undefined
  offerings?: OfferingProgressRow[] | undefined
  personId?: string | undefined
}
type UserBadge = {
  awardedAt?: string | undefined
  badgeExpiry?: { expirationDate?: string | undefined; expires?: boolean | undefined } | undefined
  badgeUrl?: string | undefined
  criterias?:
    | {
        hasCompletedCourse?: boolean | undefined
        hasPassedMandatoryAssessedQuizzes?: boolean | undefined
      }
    | undefined
  description?: string | undefined
  offeringId?: string | undefined
  openBadge?:
    | {
        criteria?: { narrative?: string | undefined } | undefined
        description?: string | undefined
        id?: string | undefined
        image?: string | undefined
        issuer?: string | undefined
        name?: string | undefined
        type?: string | undefined
      }
    | undefined
  title?: string | undefined
}
type SuspendedRequest = { suspended?: boolean | undefined }
type TransferRequest = {
  fromOfferingId?: string | undefined
  sendInvite?: boolean | undefined
  toOfferingId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/course-mappings': {
      $get:
        | { input: {}; output: { [x: string]: string }; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/course-mappings/externalcourse/:externalCourseId': {
      $get:
        | {
            input: { param: { externalCourseId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/course-mappings/:offeringId': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/course-mappings/:offeringId/:externalCourseId': {
      $delete:
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; externalCourseId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses': {
      $get:
        | { input: {}; output: CourseResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/courses/:contentId': {
      $get:
        | {
            input: { param: { contentId: string } }
            output: CourseMetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/activations': {
      $get:
        | {
            input: { param: { contentId: string } }
            output: ActivationResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/metadata/category': {
      $put:
        | {
            input: { param: { contentId: string } } & { json: { category?: string | undefined } }
            output: CourseMetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/metadata/level': {
      $put:
        | {
            input: { param: { contentId: string } } & { json: { level?: string | undefined } }
            output: CourseMetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/metadata/tags': {
      $put:
        | {
            input: { param: { contentId: string } } & { json: { tags?: string[] | undefined } }
            output: CourseMetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/metadata/topic': {
      $put:
        | {
            input: { param: { contentId: string } } & { json: { topic?: string | undefined } }
            output: CourseMetaResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { contentId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:contentId/permissions': {
      $get:
        | {
            input: { param: { contentId: string } }
            output: UserPermission
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { contentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/courses/:rootContentId/permissions/:userEmail': {
      $post:
        | {
            input: { param: { rootContentId: string; userEmail: string } } & {
              json: { isBuilder?: boolean | undefined; isReviewer?: boolean | undefined }
            }
            output: { contentId?: string | undefined }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { rootContentId: string; userEmail: string } } & {
              json: { isBuilder?: boolean | undefined; isReviewer?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { rootContentId: string; userEmail: string } } & {
              json: { isBuilder?: boolean | undefined; isReviewer?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { rootContentId: string; userEmail: string } } & {
              json: { isBuilder?: boolean | undefined; isReviewer?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { rootContentId: string; userEmail: string } } & {
              json: { isBuilder?: boolean | undefined; isReviewer?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings': {
      $get:
        | { input: {}; output: OfferingMetadataResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
      $post:
        | {
            input: { json: OfferingRequired }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: OfferingRequired }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: OfferingRequired }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: OfferingRequired }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: OfferingRequired }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/offerings/current': {
      $get:
        | { input: {}; output: OfferingMetadataResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/offerings/future': {
      $get:
        | { input: {}; output: OfferingMetadataResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/offerings/info/:textPattern': {
      $get:
        | {
            input: { param: { textPattern: string } }
            output: PortfolioActivations[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { textPattern: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { textPattern: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { textPattern: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { textPattern: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/past': {
      $get:
        | { input: {}; output: OfferingMetadataResponse[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
    }
  } & {
    '/offerings/summary': {
      $get:
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: PortfolioActivations[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/offerings/:offeringId': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { offeringId: string } } & { json: Offering }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { json: Offering }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: Offering }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: Offering }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: Offering }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/activities/openresponse': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: OfferingActivitiesResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/activities/responses': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: ActivityAttemptOpenResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/channels/:channelId/comments': {
      $get:
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/channels/:channelId/posts': {
      $get:
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: HttpPost[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/channels/:channelId/replies': {
      $get:
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Comment[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/learners-progress': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: LearnerProgressResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/marks/assignments': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: AssignmentMarkResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/marks/quizzes': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: QuizMarkResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/pulses': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/pulses/responses': {
      $get:
        | {
            input: { param: { offeringId: string } } & {
              query: {
                pulseType?:
                  | 'submit_text'
                  | 'MCQ'
                  | 'spatial_triangular'
                  | 'spatial_planar'
                  | 'spatial_linear'
                  | undefined
                responseTime?: string | string[] | undefined
              }
            }
            output: PulseResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                pulseType?:
                  | 'submit_text'
                  | 'MCQ'
                  | 'spatial_triangular'
                  | 'spatial_planar'
                  | 'spatial_linear'
                  | undefined
                responseTime?: string | string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                pulseType?:
                  | 'submit_text'
                  | 'MCQ'
                  | 'spatial_triangular'
                  | 'spatial_planar'
                  | 'spatial_linear'
                  | undefined
                responseTime?: string | string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                pulseType?:
                  | 'submit_text'
                  | 'MCQ'
                  | 'spatial_triangular'
                  | 'spatial_planar'
                  | 'spatial_linear'
                  | undefined
                responseTime?: string | string[] | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/pulses/:pulseId/responses': {
      $get:
        | {
            input: { param: { offeringId: string; pulseId: string } }
            output: PulseResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; pulseId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; pulseId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; pulseId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/social-notes': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: SocialNotesResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/submissions/assignments': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: AssignmentMarkResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/submissions/open-response/:assessmentId': {
      $get:
        | {
            input: { param: { offeringId: string; assessmentId: string } }
            output: SubmissionMarkResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/submissions/:userEmail/assignments/:assessmentId': {
      $get:
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: SubmissionMarkResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/analytics/unit-reactions': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: UnitReactionsAnalyticsResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/assessments': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: AssessmentResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/assessments/:assessmentId': {
      $patch:
        | {
            input: { param: { offeringId: string; assessmentId: string } } & { json: Assessment }
            output: AssessmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } } & { json: Assessment }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } } & { json: Assessment }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } } & { json: Assessment }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; assessmentId: string } } & { json: Assessment }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/assessments/:assessmentId/documents/:documentId': {
      $delete:
        | {
            input: { param: { offeringId: string; assessmentId: string; documentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; documentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/assessments/:assessmentId/:userEmail': {
      $patch:
        | {
            input: { param: { offeringId: string; assessmentId: string; userEmail: string } } & {
              json: { dueDate?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; userEmail: string } } & {
              json: { dueDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; userEmail: string } } & {
              json: { dueDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; userEmail: string } } & {
              json: { dueDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; assessmentId: string; userEmail: string } } & {
              json: { dueDate?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/badges': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: Badge
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/channels': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: ChannelResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string } } & { json: ChannelRequired }
            output: ChannelResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { offeringId: string } } & { json: ChannelRequired }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: ChannelRequired }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: ChannelRequired }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: ChannelRequired }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/channels/:channelId': {
      $patch:
        | {
            input: { param: { offeringId: string; channelId: string } } & { json: Channel }
            output: ChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & { json: Channel }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & { json: Channel }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & { json: Channel }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & { json: Channel }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/channels/:channelId/learners': {
      $delete:
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: ChannelResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; channelId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/groups': {
      $get:
        | {
            input: { param: { offeringId: string } }
            output: AssessmentGroupResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string } } & { json: AssessmentGroupRequired }
            output: AssessmentGroupResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { offeringId: string } } & { json: AssessmentGroupRequired }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: AssessmentGroupRequired }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: AssessmentGroupRequired }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: AssessmentGroupRequired }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/groups/:groupId/learners': {
      $get:
        | {
            input: { param: { offeringId: string; groupId: string } }
            output: UserResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; groupId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string; groupId: string } } & {
              json: { email?: string | undefined }
            }
            output: UserResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { offeringId: string; groupId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; groupId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; groupId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; groupId: string } } & {
              json: { email?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/groups/:groupId/learners/:userEmail': {
      $delete:
        | {
            input: { param: { offeringId: string; groupId: string; userEmail: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; groupId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; groupId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; groupId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; groupId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/learners/pending-submission': {
      $get:
        | {
            input: { param: { offeringId: string } } & { query: { days?: string | undefined } }
            output: AssessmentPendingSubmission[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { query: { days?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { query: { days?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { query: { days?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { query: { days?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/metadata/category': {
      $put:
        | {
            input: { param: { offeringId: string } } & { json: { category?: string | undefined } }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: { category?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/metadata/level': {
      $put:
        | {
            input: { param: { offeringId: string } } & { json: { level?: string | undefined } }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: { level?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/metadata/tags': {
      $put:
        | {
            input: { param: { offeringId: string } } & { json: { tags?: string[] | undefined } }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: { tags?: string[] | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/metadata/topic': {
      $put:
        | {
            input: { param: { offeringId: string } } & { json: { topic?: string | undefined } }
            output: OfferingMetadataResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: { topic?: string | undefined } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users': {
      $get:
        | {
            input: { param: { offeringId: string } } & {
              query: {
                facilitators?: 'true' | 'false' | undefined
                learners?: 'true' | 'false' | undefined
                markers?: 'true' | 'false' | undefined
              }
            }
            output: OfferingUserResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                facilitators?: 'true' | 'false' | undefined
                learners?: 'true' | 'false' | undefined
                markers?: 'true' | 'false' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                facilitators?: 'true' | 'false' | undefined
                learners?: 'true' | 'false' | undefined
                markers?: 'true' | 'false' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                facilitators?: 'true' | 'false' | undefined
                learners?: 'true' | 'false' | undefined
                markers?: 'true' | 'false' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & {
              query: {
                facilitators?: 'true' | 'false' | undefined
                learners?: 'true' | 'false' | undefined
                markers?: 'true' | 'false' | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: OfferingUserAddResponse[]
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: (OfferingUserAddResponse | Error)[]
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string } } & { json: OfferingUser[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users/:markerEmail/marks': {
      $delete:
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: OfferingUser[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { offeringId: string; markerEmail: string } }
            output: OfferingUser[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: OfferingUser[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; markerEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users/:userEmail': {
      $delete:
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users/:userEmail/assessments/:assessmentId': {
      $delete:
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; userEmail: string; assessmentId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users/:userEmail/badges/award': {
      $post:
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: AwardedResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/offerings/:offeringId/users/:userEmail/submissions/open-response': {
      $get:
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Assignments[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { offeringId: string; userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/org': {
      $get:
        | { input: {}; output: OrgResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users': {
      $post:
        | { input: { json: User }; output: UserResponse; outputFormat: 'json'; status: 201 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 401 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 403 }
        | { input: { json: User }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/users/all/progress': {
      $get:
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: {
              data?: { progress?: LearnerResponse[] | undefined } | undefined
              top?: number | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                $top?: string | undefined
                $orderby?: string | undefined
                $filter?: string | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
    }
  } & {
    '/users/:userEmail': {
      $get:
        | {
            input: { param: { userEmail: string } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { userEmail: string } } & { json: User }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } } & { json: User }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/badges': {
      $get:
        | {
            input: { param: { userEmail: string } }
            output: UserBadge[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/invite-email': {
      $post:
        | { input: { param: { userEmail: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/offerings': {
      $get:
        | {
            input: { param: { userEmail: string } }
            output: OfferingMetadataResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { userEmail: string } } & { json: string[] }
            output: OfferingMetadataResponse[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } } & { json: string[] }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/offerings/:offeringId/progress': {
      $get:
        | {
            input: { param: { userEmail: string; offeringId: string } }
            output: {
              completion?: string | undefined
              email?: string | undefined
              firstName?: string | undefined
              id?: string | undefined
              lastName?: string | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string; offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string; offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string; offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string; offeringId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/permissions/:permissionName': {
      $post:
        | {
            input: { param: { userEmail: string; permissionName: 'builder' | 'manager' } }
            output: UserResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string; permissionName: 'builder' | 'manager' } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string; permissionName: 'builder' | 'manager' } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string; permissionName: 'builder' | 'manager' } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string; permissionName: 'builder' | 'manager' } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/progress': {
      $get:
        | {
            input: { param: { userEmail: string } }
            output: LearnerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/suspend': {
      $put:
        | {
            input: { param: { userEmail: string } } & { json: SuspendedRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { userEmail: string } } & { json: SuspendedRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } } & { json: SuspendedRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } } & { json: SuspendedRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } } & { json: SuspendedRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/users/:userEmail/transfer': {
      $patch:
        | {
            input: { param: { userEmail: string } } & { json: TransferRequest }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { userEmail: string } } & { json: TransferRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { userEmail: string } } & { json: TransferRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { userEmail: string } } & { json: TransferRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { userEmail: string } } & { json: TransferRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
