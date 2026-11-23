type NextPage = { after: string; link?: string | undefined }
type PreviousPage = { before: string; link?: string | undefined }
type Paging = { next?: NextPage | undefined; prev?: PreviousPage | undefined }
type PublicSequenceLiteResponse = {
  createdAt: string
  folderId?: string | undefined
  id: string
  name: string
  updatedAt: string
  userId: string
}
type CollectionResponseWithTotalPublicSequenceLiteResponse = {
  paging?: Paging | undefined
  results: PublicSequenceLiteResponse[]
  total: number
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
type PublicSequenceEnrollmentRequest = {
  contactId: string
  senderAliasAddress?: string | undefined
  senderEmail: string
  sequenceId: string
}
type PublicSequenceEnrollmentLiteResponse = {
  enrolledAt: string
  id: string
  toEmail: string
  updatedAt: string
}
type PublicSequenceEnrollmentResponse = {
  enrolledAt: string
  enrolledBy: string
  enrolledByEmail: string
  id: string
  sequenceId: string
  sequenceName: string
  toEmail: string
  updatedAt: string
}
type PublicSequenceStepDependencyRequest = {
  branchNumber: number
  dependencyType: 'ADAPTIVE_COMPLETION' | 'MANUAL_PAUSE' | 'TASK_COMPLETION'
  reliesOnStepOrder: number
  requiredByStepOrder: number
}
type PublicSequenceEngagementTriggersRequest = {
  numberOfClicks?: number | undefined
  numberOfOpens?: number | undefined
}
type EmailSettingsResponse = {
  criteria: 'ALL' | 'NONE'
  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED'
}
type MeetingSettingsResponse = {
  criteria: 'ALL' | 'NONE'
  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED'
}
type UnenrollmentSettingsResponse = {
  emailSettings: EmailSettingsResponse
  meetingSettings: MeetingSettingsResponse
}
type PublicSequenceSettingsRequest = {
  eligibleFollowUpDays: 'BUSINESS_DAYS' | 'EVERYDAY' | 'WEEKDAYS_ONLY'
  individualTaskRemindersEnabled: boolean
  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED'
  sendWindowEndMinute: number
  sendWindowStartMinute: number
  taskCreationMinute: number
  taskReminderMinute: number
  unenrollmentSettings: UnenrollmentSettingsResponse
  useThreadedFollowUps: boolean
}
type PublicSequenceEmailPatternRequest = {
  templateId: string
  threadEmailToStepOrder?: number | undefined
}
type PublicSequenceTaskPatternRequest = {
  notes?: string | undefined
  queueId?: string | undefined
  subject?: string | undefined
  taskPriority: 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
  taskType: 'CALL' | 'EMAIL' | 'LINKED_IN_CONNECT' | 'LINKED_IN_MESSAGE' | 'MEETING' | 'TODO'
  templateId?: string | undefined
  threadEmailToStepOrder?: number | undefined
}
type PublicSequenceStepVariantRequest = {
  activated: boolean
  emailPattern?: PublicSequenceEmailPatternRequest | undefined
  taskPattern?: PublicSequenceTaskPatternRequest | undefined
  variantOrdinal: number
}
type PublicSequenceStepRequest = {
  actionType: 'ADAPTIVE_CONTAINER' | 'EMAIL' | 'FINISH_ENROLLMENT' | 'TASK'
  branchNumber: number
  delayMillis: bigint
  delayMillisMax?: bigint | undefined
  delayMillisMin?: bigint | undefined
  dynamic: boolean
  emailPattern?: PublicSequenceEmailPatternRequest | undefined
  stepOrder: number
  taskPattern?: PublicSequenceTaskPatternRequest | undefined
  variants: PublicSequenceStepVariantRequest[]
}
type PublicSequenceRequest = {
  dependencies: PublicSequenceStepDependencyRequest[]
  dynamic: boolean
  engagementTriggers?: PublicSequenceEngagementTriggersRequest | undefined
  folderId?: string | undefined
  name: string
  settings: PublicSequenceSettingsRequest
  steps: PublicSequenceStepRequest[]
}
type PublicSequenceStepDependencyResponse = {
  createdAt: string
  dependencyType: 'ADAPTIVE_COMPLETION' | 'MANUAL_PAUSE' | 'TASK_COMPLETION'
  id: string
  reliesOnSequenceStepId: string
  reliesOnStepOrder: number
  requiredBySequenceStepId: string
  requiredByStepOrder: number
  updatedAt: string
}
type PublicSequenceSettingsResponse = {
  createdAt: string
  eligibleFollowUpDays: 'BUSINESS_DAYS' | 'EVERYDAY' | 'WEEKDAYS_ONLY'
  id: string
  individualTaskRemindersEnabled: boolean
  sellingStrategy: 'ACCOUNT_BASED' | 'LEAD_BASED'
  sendWindowEndMinute: number
  sendWindowStartMinute: number
  taskReminderMinute: number
  updatedAt: string
}
type PublicEmailPatternResponse = {
  createdAt: string
  id: string
  templateId: string
  threadEmailToStepOrder?: number | undefined
  updatedAt: string
}
type PublicTaskPatternResponseV2 = {
  createdAt: string
  id: string
  notes?: string | undefined
  queueId?: string | undefined
  subject?: string | undefined
  taskPriority: 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
  taskType: 'CALL' | 'EMAIL' | 'LINKED_IN_CONNECT' | 'LINKED_IN_MESSAGE' | 'MEETING' | 'TODO'
  templateId?: string | undefined
  threadEmailToStepOrder?: number | undefined
  updatedAt: string
}
type PublicSequenceStepResponseV2 = {
  actionType: 'ADAPTIVE_CONTAINER' | 'EMAIL' | 'FINISH_ENROLLMENT' | 'TASK'
  createdAt: string
  delayMillis: bigint
  emailPattern?: PublicEmailPatternResponse | undefined
  id: string
  stepOrder: number
  taskPattern?: PublicTaskPatternResponseV2 | undefined
  updatedAt: string
}
type PublicSequenceResponseV2 = {
  createdAt: string
  dependencies: PublicSequenceStepDependencyResponse[]
  folderId?: string | undefined
  id: string
  name: string
  settings?: PublicSequenceSettingsResponse | undefined
  steps: PublicSequenceStepResponseV2[]
  updatedAt: string
  userId: string
}
type PublicCreateSequenceUserViewResponse = {
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
}
type PublicCreateSequenceResponse = {
  sequence: PublicSequenceResponseV2
  userView?: PublicCreateSequenceUserViewResponse | undefined
}
type PublicSequenceCompanyMetricsResponse = {
  companiesEngaged: bigint
  companiesEnrolled: bigint
  companiesScheduledMeeting: bigint
  contactsEnrolledWithCompanyId: bigint
}
type PublicSequenceEnrollmentStatusByStepResponse = {
  count: bigint
  currentStepOrder: number
  enrollmentStatus: string
}
type PublicSequenceStepPerformanceResponse = {
  calls: bigint
  callsConnected: bigint
  clicked: bigint
  executionCount: bigint
  meetingsBooked: bigint
  onTimeTaskCompletionCount: bigint
  onTimeTaskCompletionSum: bigint
  opened: bigint
  personalizationRateAvg?: number | undefined
  personalizationRateCount: bigint
  replied: bigint
  stepKey: string
  stepOrder: number
  tasksCompleted: bigint
}
type PublicSequencePerformanceSummaryResponse = {
  associatedDeals?: bigint | undefined
  bounced: bigint
  clicked: bigint
  contacts: bigint
  dealsClosed?: bigint | undefined
  engaged: bigint
  enrolled: bigint
  meetingsBooked: bigint
  noResponse: bigint
  opened: bigint
  replied: bigint
  totalRevenue?: number | undefined
  unsubscribed: bigint
}
type PublicSequenceTimelinePointResponse = {
  enrolledAt: bigint
  enrollments: bigint
  meetingsBooked: bigint
}
type PublicSequencePerformanceResponse = {
  companyMetrics?: PublicSequenceCompanyMetricsResponse | undefined
  sequenceId: string
  statusByStep: PublicSequenceEnrollmentStatusByStepResponse[]
  steps: PublicSequenceStepPerformanceResponse[]
  summary: PublicSequencePerformanceSummaryResponse
  timeline: PublicSequenceTimelinePointResponse[]
}
type PublicTaskPatternResponse = {
  createdAt: string
  id: string
  notes?: string | undefined
  queueId?: number | undefined
  subject?: string | undefined
  taskPriority: 'HIGH' | 'LOW' | 'MEDIUM' | 'NONE'
  taskType: 'CALL' | 'EMAIL' | 'LINKED_IN_CONNECT' | 'LINKED_IN_MESSAGE' | 'MEETING' | 'TODO'
  templateId?: bigint | undefined
  threadEmailToStepOrder?: number | undefined
  updatedAt: string
}
type PublicSequenceStepResponse = {
  actionType: 'ADAPTIVE_CONTAINER' | 'EMAIL' | 'FINISH_ENROLLMENT' | 'TASK'
  createdAt: string
  delayMillis: bigint
  emailPattern?: PublicEmailPatternResponse | undefined
  id: string
  stepOrder: number
  taskPattern?: PublicTaskPatternResponse | undefined
  updatedAt: string
}
type PublicSequenceResponse = {
  createdAt: string
  dependencies: PublicSequenceStepDependencyResponse[]
  folderId?: string | undefined
  id: string
  name: string
  settings?: PublicSequenceSettingsResponse | undefined
  steps: PublicSequenceStepResponse[]
  updatedAt: string
  userId: string
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/automation/sequences/2026-09': {
      $get:
        | {
            input: {
              query: {
                userId: string
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
              }
            }
            output: CollectionResponseWithTotalPublicSequenceLiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                userId: string
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/enrollments': {
      $post:
        | {
            input: { query: { userId: string } } & { json: PublicSequenceEnrollmentRequest }
            output: PublicSequenceEnrollmentLiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { userId: string } } & { json: PublicSequenceEnrollmentRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/enrollments/contact/:contactId': {
      $get:
        | {
            input: { param: { contactId: string } }
            output: PublicSequenceEnrollmentResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { contactId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/serviceaccounts/enrollments': {
      $post:
        | {
            input: { json: PublicSequenceEnrollmentRequest }
            output: PublicSequenceEnrollmentLiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicSequenceEnrollmentRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/serviceaccounts/sequences': {
      $get:
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
              }
            }
            output: CollectionResponseWithTotalPublicSequenceLiteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                after?: string | undefined
                limit?: number | undefined
                name?: string | undefined
              }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $post:
        | {
            input: { json: PublicSequenceRequest }
            output: PublicCreateSequenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: PublicSequenceRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId': {
      $get:
        | {
            input: { param: { sequenceId: string } }
            output: PublicSequenceResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sequenceId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $put:
        | {
            input: { param: { sequenceId: string } } & { json: PublicSequenceRequest }
            output: PublicSequenceResponseV2
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sequenceId: string } } & { json: PublicSequenceRequest }
            output: Error
            outputFormat: 'text'
            status: 200
          }
      $delete:
        | {
            input: { param: { sequenceId: string } } & {
              query: { overrideActiveEnrollment?: boolean | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { sequenceId: string } } & {
              query: { overrideActiveEnrollment?: boolean | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/serviceaccounts/sequences/:sequenceId/performance': {
      $get:
        | {
            input: { param: { sequenceId: string } } & {
              query: { timelineInterval?: string | undefined }
            }
            output: PublicSequencePerformanceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sequenceId: string } } & {
              query: { timelineInterval?: string | undefined }
            }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/automation/sequences/2026-09/:sequenceId': {
      $get:
        | {
            input: { param: { sequenceId: string } } & { query: { userId: string } }
            output: PublicSequenceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sequenceId: string } } & { query: { userId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
