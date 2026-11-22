type GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats = {
  displayName?: string | undefined
  issue?: string | undefined
  labeledConversationsCount?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IssueModelLabelStats = {
  analyzedConversationsCount?: string | undefined
  issueStats?:
    | { [x: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats }
    | undefined
  unclassifiedConversationsCount?: string | undefined
}
type GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse = {
  currentStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats | undefined
}
type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval = {
  conversationCount?: number | undefined
  startTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries = {
  intervalDuration?: string | undefined
  points?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[] | undefined
}
type GoogleCloudContactcenterinsightsV1CalculateStatsResponse = {
  averageDuration?: string | undefined
  averageTurnCount?: number | undefined
  conversationCount?: number | undefined
  conversationCountTimeSeries?:
    | GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries
    | undefined
  customHighlighterMatches?: { [x: string]: number } | undefined
  issueMatches?: { [x: string]: number } | undefined
  issueMatchesStats?:
    | { [x: string]: GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats }
    | undefined
  smartHighlighterMatches?: { [x: string]: number } | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudContactcenterinsightsV1View = {
  createTime?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  updateTime?: string | undefined
  value?: string | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudContactcenterinsightsV1DeployIssueModelRequest = { name?: string | undefined }
type GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest = { name?: string | undefined }
type GoogleCloudContactcenterinsightsV1AnnotationBoundary = {
  transcriptIndex?: number | undefined
  wordIndex?: number | undefined
}
type GoogleCloudContactcenterinsightsV1SentimentData = {
  magnitude?: number | undefined
  score?: number | undefined
}
type GoogleCloudContactcenterinsightsV1EntityMentionData = {
  entityUniqueId?: string | undefined
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData | undefined
  type?: 'MENTION_TYPE_UNSPECIFIED' | 'PROPER' | 'COMMON' | undefined
}
type GoogleCloudContactcenterinsightsV1HoldData = { [x: string]: unknown }
type GoogleCloudContactcenterinsightsV1IntentMatchData = { intentUniqueId?: string | undefined }
type GoogleCloudContactcenterinsightsV1InterruptionData = { [x: string]: unknown }
type GoogleCloudContactcenterinsightsV1IssueAssignment = {
  displayName?: string | undefined
  issue?: string | undefined
  score?: number | undefined
}
type GoogleCloudContactcenterinsightsV1IssueMatchData = {
  issueAssignment?: GoogleCloudContactcenterinsightsV1IssueAssignment | undefined
}
type GoogleCloudContactcenterinsightsV1PhraseMatchData = {
  displayName?: string | undefined
  phraseMatcher?: string | undefined
}
type GoogleCloudContactcenterinsightsV1SilenceData = { [x: string]: unknown }
type GoogleCloudContactcenterinsightsV1CallAnnotation = {
  annotationEndBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary | undefined
  annotationStartBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary | undefined
  channelTag?: number | undefined
  entityMentionData?: GoogleCloudContactcenterinsightsV1EntityMentionData | undefined
  holdData?: GoogleCloudContactcenterinsightsV1HoldData | undefined
  intentMatchData?: GoogleCloudContactcenterinsightsV1IntentMatchData | undefined
  interruptionData?: GoogleCloudContactcenterinsightsV1InterruptionData | undefined
  issueMatchData?: GoogleCloudContactcenterinsightsV1IssueMatchData | undefined
  phraseMatchData?: GoogleCloudContactcenterinsightsV1PhraseMatchData | undefined
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData | undefined
  silenceData?: GoogleCloudContactcenterinsightsV1SilenceData | undefined
}
type GoogleCloudContactcenterinsightsV1Entity = {
  displayName?: string | undefined
  metadata?: { [x: string]: string } | undefined
  salience?: number | undefined
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData | undefined
  type?:
    | 'TYPE_UNSPECIFIED'
    | 'PERSON'
    | 'LOCATION'
    | 'ORGANIZATION'
    | 'EVENT'
    | 'WORK_OF_ART'
    | 'CONSUMER_GOOD'
    | 'OTHER'
    | 'PHONE_NUMBER'
    | 'ADDRESS'
    | 'DATE'
    | 'NUMBER'
    | 'PRICE'
    | undefined
}
type GoogleCloudContactcenterinsightsV1Intent = {
  displayName?: string | undefined
  id?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IssueModelResult = {
  issueModel?: string | undefined
  issues?: GoogleCloudContactcenterinsightsV1IssueAssignment[] | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationLevelSentiment = {
  channelTag?: number | undefined
  sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData | undefined
}
type GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata = {
  annotations?: GoogleCloudContactcenterinsightsV1CallAnnotation[] | undefined
  entities?: { [x: string]: GoogleCloudContactcenterinsightsV1Entity } | undefined
  intents?: { [x: string]: GoogleCloudContactcenterinsightsV1Intent } | undefined
  issueModelResult?: GoogleCloudContactcenterinsightsV1IssueModelResult | undefined
  phraseMatchers?: { [x: string]: GoogleCloudContactcenterinsightsV1PhraseMatchData } | undefined
  sentiments?: GoogleCloudContactcenterinsightsV1ConversationLevelSentiment[] | undefined
}
type GoogleCloudContactcenterinsightsV1AnalysisResult = {
  callAnalysisMetadata?:
    | GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata
    | undefined
  endTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1AnnotatorSelector = {
  issueModels?: string[] | undefined
  phraseMatchers?: string[] | undefined
  runEntityAnnotator?: boolean | undefined
  runIntentAnnotator?: boolean | undefined
  runInterruptionAnnotator?: boolean | undefined
  runIssueModelAnnotator?: boolean | undefined
  runPhraseMatcherAnnotator?: boolean | undefined
  runSentimentAnnotator?: boolean | undefined
  runSilenceAnnotator?: boolean | undefined
}
type GoogleCloudContactcenterinsightsV1Analysis = {
  analysisResult?: GoogleCloudContactcenterinsightsV1AnalysisResult | undefined
  annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector | undefined
  createTime?: string | undefined
  name?: string | undefined
  requestTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ListAnalysesResponse = {
  analyses?: GoogleCloudContactcenterinsightsV1Analysis[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationCallMetadata = {
  agentChannel?: number | undefined
  customerChannel?: number | undefined
}
type GoogleCloudContactcenterinsightsV1DialogflowSource = {
  audioUri?: string | undefined
  dialogflowConversation?: string | undefined
}
type GoogleCloudContactcenterinsightsV1GcsSource = {
  audioUri?: string | undefined
  transcriptUri?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationDataSource = {
  dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource | undefined
  gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource | undefined
}
type GoogleCloudContactcenterinsightsV1DialogflowIntent = { displayName?: string | undefined }
type GoogleCloudContactcenterinsightsV1AnswerFeedback = {
  clicked?: boolean | undefined
  correctnessLevel?:
    | 'CORRECTNESS_LEVEL_UNSPECIFIED'
    | 'NOT_CORRECT'
    | 'PARTIALLY_CORRECT'
    | 'FULLY_CORRECT'
    | undefined
  displayed?: boolean | undefined
}
type GoogleCloudContactcenterinsightsV1ArticleSuggestionData = {
  confidenceScore?: number | undefined
  metadata?: { [x: string]: string } | undefined
  queryRecord?: string | undefined
  source?: string | undefined
  title?: string | undefined
  uri?: string | undefined
}
type GoogleCloudContactcenterinsightsV1DialogflowInteractionData = {
  confidence?: number | undefined
  dialogflowIntentId?: string | undefined
}
type GoogleCloudContactcenterinsightsV1FaqAnswerData = {
  answer?: string | undefined
  confidenceScore?: number | undefined
  metadata?: { [x: string]: string } | undefined
  queryRecord?: string | undefined
  question?: string | undefined
  source?: string | undefined
}
type GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData = {
  confidenceScore?: number | undefined
  metadata?: { [x: string]: string } | undefined
  queryRecord?: string | undefined
  suggestion?: string | undefined
}
type GoogleCloudContactcenterinsightsV1SmartReplyData = {
  confidenceScore?: number | undefined
  metadata?: { [x: string]: string } | undefined
  queryRecord?: string | undefined
  reply?: string | undefined
}
type GoogleCloudContactcenterinsightsV1RuntimeAnnotation = {
  annotationId?: string | undefined
  answerFeedback?: GoogleCloudContactcenterinsightsV1AnswerFeedback | undefined
  articleSuggestion?: GoogleCloudContactcenterinsightsV1ArticleSuggestionData | undefined
  createTime?: string | undefined
  dialogflowInteraction?: GoogleCloudContactcenterinsightsV1DialogflowInteractionData | undefined
  endBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary | undefined
  faqAnswer?: GoogleCloudContactcenterinsightsV1FaqAnswerData | undefined
  smartComposeSuggestion?: GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData | undefined
  smartReply?: GoogleCloudContactcenterinsightsV1SmartReplyData | undefined
  startBoundary?: GoogleCloudContactcenterinsightsV1AnnotationBoundary | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata =
  { smartReplyAllowlistCovered?: boolean | undefined }
type GoogleCloudContactcenterinsightsV1ConversationParticipant = {
  dialogflowParticipant?: string | undefined
  dialogflowParticipantName?: string | undefined
  obfuscatedExternalUserId?: string | undefined
  role?:
    | 'ROLE_UNSPECIFIED'
    | 'HUMAN_AGENT'
    | 'AUTOMATED_AGENT'
    | 'END_USER'
    | 'ANY_AGENT'
    | undefined
  userId?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo = {
  confidence?: number | undefined
  endOffset?: string | undefined
  startOffset?: string | undefined
  word?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment = {
  channelTag?: number | undefined
  confidence?: number | undefined
  dialogflowSegmentMetadata?:
    | GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata
    | undefined
  languageCode?: string | undefined
  messageTime?: string | undefined
  segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant | undefined
  sentiment?: GoogleCloudContactcenterinsightsV1SentimentData | undefined
  text?: string | undefined
  words?:
    | GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[]
    | undefined
}
type GoogleCloudContactcenterinsightsV1ConversationTranscript = {
  transcriptSegments?:
    | GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[]
    | undefined
}
type GoogleCloudContactcenterinsightsV1Conversation = {
  agentId?: string | undefined
  callMetadata?: GoogleCloudContactcenterinsightsV1ConversationCallMetadata | undefined
  createTime?: string | undefined
  dataSource?: GoogleCloudContactcenterinsightsV1ConversationDataSource | undefined
  dialogflowIntents?:
    | { [x: string]: GoogleCloudContactcenterinsightsV1DialogflowIntent }
    | undefined
  duration?: string | undefined
  expireTime?: string | undefined
  labels?: { [x: string]: string } | undefined
  languageCode?: string | undefined
  latestAnalysis?: GoogleCloudContactcenterinsightsV1Analysis | undefined
  medium?: 'MEDIUM_UNSPECIFIED' | 'PHONE_CALL' | 'CHAT' | undefined
  name?: string | undefined
  obfuscatedUserId?: string | undefined
  runtimeAnnotations?: GoogleCloudContactcenterinsightsV1RuntimeAnnotation[] | undefined
  startTime?: string | undefined
  transcript?: GoogleCloudContactcenterinsightsV1ConversationTranscript | undefined
  ttl?: string | undefined
  turnCount?: number | undefined
  updateTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ListConversationsResponse = {
  conversations?: GoogleCloudContactcenterinsightsV1Conversation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest = {
  analysisPercentage?: number | undefined
  annotatorSelector?: GoogleCloudContactcenterinsightsV1AnnotatorSelector | undefined
  filter?: string | undefined
  parent?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig = {
  agentId?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource = {
  bucketUri?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig = {
  medium?: 'MEDIUM_UNSPECIFIED' | 'PHONE_CALL' | 'CHAT' | undefined
}
type GoogleCloudContactcenterinsightsV1IngestConversationsRequest = {
  conversationConfig?:
    | GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig
    | undefined
  gcsSource?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource | undefined
  parent?: string | undefined
  transcriptObjectConfig?:
    | GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig
    | undefined
}
type GoogleCloudContactcenterinsightsV1RedactionConfig = {
  deidentifyTemplate?: string | undefined
  inspectTemplate?: string | undefined
}
type GoogleCloudContactcenterinsightsV1UploadConversationRequest = {
  conversation?: GoogleCloudContactcenterinsightsV1Conversation | undefined
  conversationId?: string | undefined
  parent?: string | undefined
  redactionConfig?: GoogleCloudContactcenterinsightsV1RedactionConfig | undefined
}
type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination = {
  dataset?: string | undefined
  projectId?: string | undefined
  table?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest = {
  bigQueryDestination?:
    | GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination
    | undefined
  filter?: string | undefined
  kmsKey?: string | undefined
  parent?: string | undefined
  writeDisposition?: 'WRITE_DISPOSITION_UNSPECIFIED' | 'WRITE_TRUNCATE' | 'WRITE_APPEND' | undefined
}
type GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig = {
  filter?: string | undefined
  medium?: 'MEDIUM_UNSPECIFIED' | 'PHONE_CALL' | 'CHAT' | undefined
  trainingConversationsCount?: string | undefined
}
type GoogleCloudContactcenterinsightsV1IssueModel = {
  createTime?: string | undefined
  displayName?: string | undefined
  inputDataConfig?: GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig | undefined
  issueCount?: string | undefined
  name?: string | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'UNDEPLOYED'
    | 'DEPLOYING'
    | 'DEPLOYED'
    | 'UNDEPLOYING'
    | 'DELETING'
    | undefined
  trainingStats?: GoogleCloudContactcenterinsightsV1IssueModelLabelStats | undefined
  updateTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ListIssueModelsResponse = {
  issueModels?: GoogleCloudContactcenterinsightsV1IssueModel[] | undefined
}
type GoogleCloudContactcenterinsightsV1Issue = {
  createTime?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  sampleUtterances?: string[] | undefined
  updateTime?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ListIssuesResponse = {
  issues?: GoogleCloudContactcenterinsightsV1Issue[] | undefined
}
type GoogleCloudContactcenterinsightsV1ExactMatchConfig = { caseSensitive?: boolean | undefined }
type GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig = {
  exactMatchConfig?: GoogleCloudContactcenterinsightsV1ExactMatchConfig | undefined
}
type GoogleCloudContactcenterinsightsV1PhraseMatchRule = {
  config?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig | undefined
  negated?: boolean | undefined
  query?: string | undefined
}
type GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup = {
  phraseMatchRules?: GoogleCloudContactcenterinsightsV1PhraseMatchRule[] | undefined
  type?: 'PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED' | 'ALL_OF' | 'ANY_OF' | undefined
}
type GoogleCloudContactcenterinsightsV1PhraseMatcher = {
  activationUpdateTime?: string | undefined
  active?: boolean | undefined
  displayName?: string | undefined
  name?: string | undefined
  phraseMatchRuleGroups?: GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[] | undefined
  revisionCreateTime?: string | undefined
  revisionId?: string | undefined
  roleMatch?:
    | 'ROLE_UNSPECIFIED'
    | 'HUMAN_AGENT'
    | 'AUTOMATED_AGENT'
    | 'END_USER'
    | 'ANY_AGENT'
    | undefined
  type?: 'PHRASE_MATCHER_TYPE_UNSPECIFIED' | 'ALL_OF' | 'ANY_OF' | undefined
  updateTime?: string | undefined
  versionTag?: string | undefined
}
type GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse = {
  nextPageToken?: string | undefined
  phraseMatchers?: GoogleCloudContactcenterinsightsV1PhraseMatcher[] | undefined
}
type GoogleCloudContactcenterinsightsV1ListViewsResponse = {
  nextPageToken?: string | undefined
  views?: GoogleCloudContactcenterinsightsV1View[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:issueModel:calculateIssueModelStats': {
      $get: {
        input: { param: { issueModel: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:location/conversations:calculateStats': {
      $get: {
        input: { param: { location: string } } & {
          query: {
            filter?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1CalculateStatsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
        input: { param: { name: string } } & {
          query: {
            force?: boolean | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            view?: 'CONVERSATION_VIEW_UNSPECIFIED' | 'FULL' | 'BASIC' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1View
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1View }
        output: GoogleCloudContactcenterinsightsV1View
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name/operations': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:deploy': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1DeployIssueModelRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:undeploy': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/analyses': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListAnalysesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1Analysis }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/conversations': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'CONVERSATION_VIEW_UNSPECIFIED' | 'FULL' | 'BASIC' | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListConversationsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            conversationId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1Conversation }
        output: GoogleCloudContactcenterinsightsV1Conversation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/conversations:bulkAnalyze': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/conversations:ingest': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1IngestConversationsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/conversations:upload': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1UploadConversationRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/insightsdata:export': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/issueModels': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1IssueModel }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/issues': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListIssuesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/phraseMatchers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1PhraseMatcher }
        output: GoogleCloudContactcenterinsightsV1PhraseMatcher
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/views': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudContactcenterinsightsV1ListViewsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudContactcenterinsightsV1View }
        output: GoogleCloudContactcenterinsightsV1View
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
