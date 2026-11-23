type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type StandardError = {
  category: string
  context: { [x: string]: string[] }
  errors: ErrorDetail[]
  id?: string | undefined
  links: { [x: string]: string }
  message: string
  status: string
  subCategory?: { [x: string]: unknown } | undefined
}
type ActionItem = {
  assignee?: string | undefined
  assigneeObjectId?: string | undefined
  id: string
  title: string
}
type ConversationRecapActionItemsResult = {
  error?: StandardError | undefined
  items: ActionItem[]
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
}
type ConversationRecapCallStatsResult = {
  durationMs?: bigint | undefined
  error?: StandardError | undefined
  hasTranscript: boolean
  ownerTalkTimePercentage?: string | undefined
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
}
type ConversationRecapNotesResult = {
  error?: StandardError | undefined
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
  value?: string | undefined
}
type ParticipantInfo = {
  email?: string | undefined
  isHost: boolean
  name: string
  phoneNumber?: string | undefined
}
type ConversationRecapParticipantsResult = {
  error?: StandardError | undefined
  items: ParticipantInfo[]
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
}
type SpeakerStatement = {
  speakerName?: string | undefined
  text?: string | undefined
  timestampSeconds?: number | undefined
}
type QuestionAndAnswer = { answer?: SpeakerStatement | undefined; question: SpeakerStatement }
type ConversationRecapQuestionsAskedResult = {
  error?: StandardError | undefined
  questionsAndAnswers: QuestionAndAnswer[]
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
}
type ConversationRecapRecordingUrlResult = {
  error?: StandardError | undefined
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
  value?: string | undefined
}
type ConversationRecapSummaryResult = {
  error?: StandardError | undefined
  status: 'FAILED' | 'IN_PROGRESS' | 'NOT_FOUND' | 'NOT_SUPPORTED' | 'SUCCEEDED'
  value?: string | undefined
}
type ConversationRecapResponse = {
  actionItems: ConversationRecapActionItemsResult
  callStats: ConversationRecapCallStatsResult
  notes: ConversationRecapNotesResult
  participants: ConversationRecapParticipantsResult
  questionsAsked: ConversationRecapQuestionsAskedResult
  recordingUrl: ConversationRecapRecordingUrlResult
  summary?: ConversationRecapSummaryResult | undefined
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/notetaker/2026-09/conversation/recap/:objectTypeId/:objectId': {
      $get:
        | {
            input: { param: { objectId: string; objectTypeId: string } }
            output: ConversationRecapResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { objectId: string; objectTypeId: string } }
            output: Error
            outputFormat: 'text'
            status: 200
          }
    }
  },
  '/'
>
export default routes
