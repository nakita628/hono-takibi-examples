import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudContactcenterinsightsV1AnnotationBoundarySchema = z
  .object({
    transcriptIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.',
      }),
    wordIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.',
      }),
  })
  .openapi({
    description: 'A point in a conversation that marks the start or the end of an annotation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1AnnotationBoundary')

const GoogleCloudContactcenterinsightsV1SentimentDataSchema = z
  .object({
    magnitude: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The sentiment score between -1.0 (negative) and 1.0 (positive).' }),
  })
  .openapi({ description: 'The data for a sentiment annotation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1SentimentData')

const GoogleCloudContactcenterinsightsV1EntityMentionDataSchema = z
  .object({
    entityUniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.',
      }),
    sentiment: GoogleCloudContactcenterinsightsV1SentimentDataSchema.exactOptional().openapi({
      description: 'Sentiment expressed for this mention of the entity.',
    }),
    type: z
      .enum(['MENTION_TYPE_UNSPECIFIED', 'PROPER', 'COMMON'])
      .exactOptional()
      .openapi({ description: 'The type of the entity mention.' }),
  })
  .openapi({
    description:
      'The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1EntityMentionData')

const GoogleCloudContactcenterinsightsV1HoldDataSchema = z
  .object({})
  .openapi({ description: 'The data for a hold annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1HoldData')

const GoogleCloudContactcenterinsightsV1IntentMatchDataSchema = z
  .object({
    intentUniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the matched intent. Can be used to retrieve the corresponding intent information.',
      }),
  })
  .openapi({
    description:
      'The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1IntentMatchData')

const GoogleCloudContactcenterinsightsV1InterruptionDataSchema = z
  .object({})
  .openapi({ description: 'The data for an interruption annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1InterruptionData')

const GoogleCloudContactcenterinsightsV1IssueAssignmentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.',
      }),
    issue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name of the assigned issue.' }),
    score: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Score indicating the likelihood of the issue assignment. currently bounded on [0,1].',
      }),
  })
  .openapi({ description: 'Information about the issue.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueAssignment')

const GoogleCloudContactcenterinsightsV1IssueMatchDataSchema = z
  .object({
    issueAssignment:
      GoogleCloudContactcenterinsightsV1IssueAssignmentSchema.exactOptional().openapi({
        description: "Information about the issue's assignment.",
      }),
  })
  .openapi({ description: 'The data for an issue match annotation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueMatchData')

const GoogleCloudContactcenterinsightsV1PhraseMatchDataSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the phrase matcher.' }),
    phraseMatcher: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier (the resource name) of the phrase matcher.' }),
  })
  .openapi({
    description:
      'The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1PhraseMatchData')

const GoogleCloudContactcenterinsightsV1SilenceDataSchema = z
  .object({})
  .openapi({ description: 'The data for a silence annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1SilenceData')

const GoogleCloudContactcenterinsightsV1CallAnnotationSchema = z
  .object({
    annotationEndBoundary:
      GoogleCloudContactcenterinsightsV1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation ends, inclusive.',
      }),
    annotationStartBoundary:
      GoogleCloudContactcenterinsightsV1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation starts, inclusive.',
      }),
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.',
      }),
    entityMentionData:
      GoogleCloudContactcenterinsightsV1EntityMentionDataSchema.exactOptional().openapi({
        description: 'Data specifying an entity mention.',
      }),
    holdData: GoogleCloudContactcenterinsightsV1HoldDataSchema.exactOptional().openapi({
      description: 'Data specifying a hold.',
    }),
    intentMatchData:
      GoogleCloudContactcenterinsightsV1IntentMatchDataSchema.exactOptional().openapi({
        description: 'Data specifying an intent match.',
      }),
    interruptionData:
      GoogleCloudContactcenterinsightsV1InterruptionDataSchema.exactOptional().openapi({
        description: 'Data specifying an interruption.',
      }),
    issueMatchData: GoogleCloudContactcenterinsightsV1IssueMatchDataSchema.exactOptional().openapi({
      description: 'Data specifying an issue match.',
    }),
    phraseMatchData:
      GoogleCloudContactcenterinsightsV1PhraseMatchDataSchema.exactOptional().openapi({
        description: 'Data specifying a phrase match.',
      }),
    sentimentData: GoogleCloudContactcenterinsightsV1SentimentDataSchema.exactOptional().openapi({
      description: 'Data specifying sentiment.',
    }),
    silenceData: GoogleCloudContactcenterinsightsV1SilenceDataSchema.exactOptional().openapi({
      description: 'Data specifying silence.',
    }),
  })
  .openapi({ description: 'A piece of metadata that applies to a window of a call.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CallAnnotation')

const GoogleCloudContactcenterinsightsV1EntitySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the entity.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.',
      }),
    salience: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.',
      }),
    sentiment: GoogleCloudContactcenterinsightsV1SentimentDataSchema.exactOptional().openapi({
      description: 'The aggregate sentiment expressed for this entity in the conversation.',
    }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'PERSON',
        'LOCATION',
        'ORGANIZATION',
        'EVENT',
        'WORK_OF_ART',
        'CONSUMER_GOOD',
        'OTHER',
        'PHONE_NUMBER',
        'ADDRESS',
        'DATE',
        'NUMBER',
        'PRICE',
      ])
      .exactOptional()
      .openapi({ description: 'The entity type.' }),
  })
  .openapi({
    description:
      'The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1Entity')

const GoogleCloudContactcenterinsightsV1IntentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the intent.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the intent.' }),
  })
  .openapi({
    description:
      'The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1Intent')

const GoogleCloudContactcenterinsightsV1IssueModelResultSchema = z
  .object({
    issueModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model}',
      }),
    issues: z
      .array(GoogleCloudContactcenterinsightsV1IssueAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'All the matched issues.' }),
  })
  .openapi({ description: 'Issue Modeling result on a conversation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueModelResult')

const GoogleCloudContactcenterinsightsV1ConversationLevelSentimentSchema = z
  .object({
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The channel of the audio that the data applies to.' }),
    sentimentData: GoogleCloudContactcenterinsightsV1SentimentDataSchema.exactOptional().openapi({
      description: 'Data specifying sentiment.',
    }),
  })
  .openapi({ description: 'One channel of conversation-level sentiment data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationLevelSentiment')

const GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadataSchema = z
  .object({
    annotations: z
      .array(GoogleCloudContactcenterinsightsV1CallAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'A list of call annotations that apply to this call.' }),
    entities: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1EntitySchema)
      .exactOptional()
      .openapi({ description: 'All the entities in the call.' }),
    intents: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1IntentSchema)
      .exactOptional()
      .openapi({ description: 'All the matched intents in the call.' }),
    issueModelResult:
      GoogleCloudContactcenterinsightsV1IssueModelResultSchema.exactOptional().openapi({
        description: 'Overall conversation-level issue modeling result.',
      }),
    phraseMatchers: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1PhraseMatchDataSchema)
      .exactOptional()
      .openapi({ description: 'All the matched phrase matchers in the call.' }),
    sentiments: z
      .array(GoogleCloudContactcenterinsightsV1ConversationLevelSentimentSchema)
      .exactOptional()
      .openapi({
        description: 'Overall conversation-level sentiment for each channel of the call.',
      }),
  })
  .openapi({ description: 'Call-specific metadata created during analysis.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadata')

const GoogleCloudContactcenterinsightsV1AnalysisResultSchema = z
  .object({
    callAnalysisMetadata:
      GoogleCloudContactcenterinsightsV1AnalysisResultCallAnalysisMetadataSchema.exactOptional().openapi(
        { description: 'Call-specific metadata created by the analysis.' },
      ),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the analysis ended.' }),
  })
  .openapi({ description: 'The result of an analysis.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1AnalysisResult')

const GoogleCloudContactcenterinsightsV1AnnotatorSelectorSchema = z
  .object({
    issueModels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.',
      }),
    phraseMatchers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}',
      }),
    runEntityAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the entity annotator.' }),
    runIntentAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the intent annotator.' }),
    runInterruptionAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the interruption annotator.' }),
    runIssueModelAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to run the issue model annotator. A model should have already been deployed for this to take effect.',
      }),
    runPhraseMatcherAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the active phrase matcher annotator(s).' }),
    runSentimentAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the sentiment annotator.' }),
    runSilenceAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the silence annotator.' }),
  })
  .openapi({
    description: 'Selector of all available annotators and phrase matchers to run.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1AnnotatorSelector')

const GoogleCloudContactcenterinsightsV1AnalysisSchema = z
  .object({
    analysisResult: GoogleCloudContactcenterinsightsV1AnalysisResultSchema.exactOptional().openapi({
      description:
        'Output only. The result of the analysis, which is populated when the analysis finishes.',
      readOnly: true,
    }),
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1AnnotatorSelectorSchema.exactOptional().openapi({
        description:
          'To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the analysis was created, which occurs when the long-running operation completes.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}',
      }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the analysis was requested.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The analysis resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1Analysis')

const GoogleCloudContactcenterinsightsV1AnswerFeedbackSchema = z
  .object({
    clicked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether an answer or item was clicked by the human agent.',
      }),
    correctnessLevel: z
      .enum(['CORRECTNESS_LEVEL_UNSPECIFIED', 'NOT_CORRECT', 'PARTIALLY_CORRECT', 'FULLY_CORRECT'])
      .exactOptional()
      .openapi({ description: 'The correctness level of an answer.' }),
    displayed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.',
      }),
  })
  .openapi({
    description: 'The feedback that the customer has about a certain answer in the conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1AnswerFeedback')

const GoogleCloudContactcenterinsightsV1ArticleSuggestionDataSchema = z
  .object({
    confidenceScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Article Suggestion and the document that it originates from.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}',
      }),
    title: z.string().exactOptional().openapi({ description: 'Article title.' }),
    uri: z.string().exactOptional().openapi({ description: 'Article URI.' }),
  })
  .openapi({ description: 'Agent Assist Article Suggestion data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ArticleSuggestionData')

const GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestSchema = z
  .object({
    analysisPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Required. Percentage of selected conversation to analyze, between [0, 100].',
      }),
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1AnnotatorSelectorSchema.exactOptional().openapi({
        description:
          'To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Filter used to select the subset of conversations to analyze.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource to create analyses in.' }),
  })
  .openapi({ description: 'The request to analyze conversations in bulk.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest')

const GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadataSchema = z
  .object({
    completedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of requested analyses that have completed successfully so far.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    failedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of requested analyses that have failed so far.' }),
    request:
      GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestSchema.exactOptional().openapi(
        { description: 'The original request for bulk analyze.' },
      ),
    totalRequestedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.',
      }),
  })
  .openapi({
    description: 'The metadata for a bulk analyze conversations operation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsMetadata')

const GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponseSchema = z
  .object({
    failedAnalysisCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of failed analyses.' }),
    successfulAnalysisCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of successful analyses.' }),
  })
  .openapi({
    description: 'The response for a bulk analyze conversations operation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsResponse')

const GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Display name of the issue.' }),
    issue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}',
      }),
    labeledConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of conversations attached to the issue at this point in time.',
      }),
  })
  .openapi({ description: 'Aggregated statistics about an issue.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats')

const GoogleCloudContactcenterinsightsV1IssueModelLabelStatsSchema = z
  .object({
    analyzedConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of conversations the issue model has analyzed at this point in time.',
      }),
    issueStats: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsSchema)
      .exactOptional()
      .openapi({ description: "Statistics on each issue. Key is the issue's resource name." }),
    unclassifiedConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of analyzed conversations for which no issue was applicable at this point in time.',
      }),
  })
  .openapi({ description: 'Aggregated statistics about an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueModelLabelStats')

const GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponseSchema = z
  .object({
    currentStats:
      GoogleCloudContactcenterinsightsV1IssueModelLabelStatsSchema.exactOptional().openapi({
        description:
          'The latest label statistics for the queried issue model. Includes results on both training data and data labeled after deployment.',
      }),
  })
  .openapi({ description: "Response of querying an issue model's statistics.", required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse')

const GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesIntervalSchema = z
  .object({
    conversationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of conversations created in this interval.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The start time of this interval.' }),
  })
  .openapi({ description: 'A single interval in a time series.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval')

const GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesSchema = z
  .object({
    intervalDuration: z
      .string()
      .exactOptional()
      .openapi({ description: 'The duration of each interval.' }),
    points: z
      .array(GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesIntervalSchema)
      .exactOptional()
      .openapi({
        description:
          'An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window.',
      }),
  })
  .openapi({ description: 'A time series representing conversations over time.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries')

const GoogleCloudContactcenterinsightsV1CalculateStatsResponseSchema = z
  .object({
    averageDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The average duration of all conversations. The average is calculated using only conversations that have a time duration.',
      }),
    averageTurnCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The average number of turns per conversation.' }),
    conversationCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of conversations.' }),
    conversationCountTimeSeries:
      GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesSchema.exactOptional().openapi(
        {
          description:
            'A time series representing the count of conversations created over time that match that requested filter criteria.',
        },
      ),
    customHighlighterMatches: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'A map associating each custom highlighter resource name with its respective number of matches in the set of conversations.',
      }),
    issueMatches: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/` Deprecated, use `issue_matches_stats` field instead.',
      }),
    issueMatchesStats: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStatsSchema)
      .exactOptional()
      .openapi({
        description:
          'A map associating each issue resource name with its respective number of matches in the set of conversations. Key has the format: `projects//locations//issueModels//issues/`',
      }),
    smartHighlighterMatches: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({
        description:
          'A map associating each smart highlighter display name with its respective number of matches in the set of conversations.',
      }),
  })
  .openapi({ description: 'The response for calculating conversation statistics.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CalculateStatsResponse')

const GoogleCloudContactcenterinsightsV1ConversationCallMetadataSchema = z
  .object({
    agentChannel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The audio channel that contains the agent.' }),
    customerChannel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The audio channel that contains the customer.' }),
  })
  .openapi({ description: 'Call-specific metadata.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationCallMetadata')

const GoogleCloudContactcenterinsightsV1DialogflowSourceSchema = z
  .object({
    audioUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage URI that points to a file that contains the conversation audio.',
      }),
    dialogflowConversation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation}',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Dialogflow source of conversation data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DialogflowSource')

const GoogleCloudContactcenterinsightsV1GcsSourceSchema = z
  .object({
    audioUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage URI that points to a file that contains the conversation audio.',
      }),
    transcriptUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.',
      }),
  })
  .openapi({ description: 'A Cloud Storage source of conversation data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1GcsSource')

const GoogleCloudContactcenterinsightsV1ConversationDataSourceSchema = z
  .object({
    dialogflowSource:
      GoogleCloudContactcenterinsightsV1DialogflowSourceSchema.exactOptional().openapi({
        description: 'The source when the conversation comes from Dialogflow.',
      }),
    gcsSource: GoogleCloudContactcenterinsightsV1GcsSourceSchema.exactOptional().openapi({
      description: 'A Cloud Storage location specification for the audio and transcript.',
    }),
  })
  .openapi({
    description: 'The conversation source, which is a combination of transcript and audio.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationDataSource')

const GoogleCloudContactcenterinsightsV1DialogflowIntentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the intent.' }),
  })
  .openapi({
    description:
      'The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1DialogflowIntent')

const GoogleCloudContactcenterinsightsV1DialogflowInteractionDataSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).',
      }),
    dialogflowIntentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}',
      }),
  })
  .openapi({ description: 'Dialogflow interaction data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DialogflowInteractionData')

const GoogleCloudContactcenterinsightsV1FaqAnswerDataSchema = z
  .object({
    answer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The piece of text from the `source` knowledge base document.' }),
    confidenceScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the FAQ answer and the document that it originates from.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    question: z
      .string()
      .exactOptional()
      .openapi({ description: 'The corresponding FAQ question.' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}.',
      }),
  })
  .openapi({ description: 'Agent Assist frequently-asked-question answer data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1FaqAnswerData')

const GoogleCloudContactcenterinsightsV1SmartComposeSuggestionDataSchema = z
  .object({
    confidenceScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Smart Compose suggestion and the document from which it originates.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    suggestion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the suggestion.' }),
  })
  .openapi({ description: 'Agent Assist Smart Compose suggestion data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1SmartComposeSuggestionData')

const GoogleCloudContactcenterinsightsV1SmartReplyDataSchema = z
  .object({
    confidenceScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Smart Reply and the document from which it originates.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    reply: z.string().exactOptional().openapi({ description: 'The content of the reply.' }),
  })
  .openapi({ description: 'Agent Assist Smart Reply data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1SmartReplyData')

const GoogleCloudContactcenterinsightsV1RuntimeAnnotationSchema = z
  .object({
    annotationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation}',
      }),
    answerFeedback: GoogleCloudContactcenterinsightsV1AnswerFeedbackSchema.exactOptional().openapi({
      description: 'The feedback that the customer has about the answer in `data`.',
    }),
    articleSuggestion:
      GoogleCloudContactcenterinsightsV1ArticleSuggestionDataSchema.exactOptional().openapi({
        description: 'Agent Assist Article Suggestion data.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this annotation was created.' }),
    dialogflowInteraction:
      GoogleCloudContactcenterinsightsV1DialogflowInteractionDataSchema.exactOptional().openapi({
        description: 'Dialogflow interaction data.',
      }),
    endBoundary: GoogleCloudContactcenterinsightsV1AnnotationBoundarySchema.exactOptional().openapi(
      { description: 'The boundary in the conversation where the annotation ends, inclusive.' },
    ),
    faqAnswer: GoogleCloudContactcenterinsightsV1FaqAnswerDataSchema.exactOptional().openapi({
      description: 'Agent Assist FAQ answer data.',
    }),
    smartComposeSuggestion:
      GoogleCloudContactcenterinsightsV1SmartComposeSuggestionDataSchema.exactOptional().openapi({
        description: 'Agent Assist Smart Compose suggestion data.',
      }),
    smartReply: GoogleCloudContactcenterinsightsV1SmartReplyDataSchema.exactOptional().openapi({
      description: 'Agent Assist Smart Reply data.',
    }),
    startBoundary:
      GoogleCloudContactcenterinsightsV1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation starts, inclusive.',
      }),
  })
  .openapi({
    description: 'An annotation that was generated during the customer and agent interaction.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1RuntimeAnnotation')

const GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataSchema =
  z
    .object({
      smartReplyAllowlistCovered: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.',
        }),
    })
    .openapi({
      description: 'Metadata from Dialogflow relating to the current transcript segment.',
      required: [],
    })
    .openapi(
      'GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata',
    )

const GoogleCloudContactcenterinsightsV1ConversationParticipantSchema = z
  .object({
    dialogflowParticipant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}',
      }),
    dialogflowParticipantName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}',
      }),
    obfuscatedExternalUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Obfuscated user ID from Dialogflow.' }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'HUMAN_AGENT', 'AUTOMATED_AGENT', 'END_USER', 'ANY_AGENT'])
      .exactOptional()
      .openapi({ description: 'The role of the participant.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-specified ID representing the participant.' }),
  })
  .openapi({ description: 'The call participant speaking for a given utterance.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationParticipant')

const GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfoSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.',
      }),
    endOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset of the end of this word relative to the beginning of the total conversation.',
      }),
    startOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Time offset of the start of this word relative to the beginning of the total conversation.',
      }),
    word: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The word itself. Includes punctuation marks that surround the word.',
      }),
  })
  .openapi({ description: 'Word-level info for words in a transcript.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo')

const GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentSchema = z
  .object({
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.",
      }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.',
      }),
    dialogflowSegmentMetadata:
      GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataSchema.exactOptional().openapi(
        { description: 'CCAI metadata relating to the current transcript segment.' },
      ),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".',
      }),
    messageTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that the message occurred, if provided.' }),
    segmentParticipant:
      GoogleCloudContactcenterinsightsV1ConversationParticipantSchema.exactOptional().openapi({
        description: 'The participant of this segment.',
      }),
    sentiment: GoogleCloudContactcenterinsightsV1SentimentDataSchema.exactOptional().openapi({
      description: 'The sentiment for this transcript segment.',
    }),
    text: z.string().exactOptional().openapi({ description: 'The text of this segment.' }),
    words: z
      .array(
        GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfoSchema,
      )
      .exactOptional()
      .openapi({
        description: 'A list of the word-specific information for each word in the segment.',
      }),
  })
  .openapi({ description: 'A segment of a full transcript.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment')

const GoogleCloudContactcenterinsightsV1ConversationTranscriptSchema = z
  .object({
    transcriptSegments: z
      .array(GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentSchema)
      .exactOptional()
      .openapi({
        description: 'A list of sequential transcript segments that comprise the conversation.',
      }),
  })
  .openapi({
    description: 'A message representing the transcript of a conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1ConversationTranscript')

const GoogleCloudContactcenterinsightsV1ConversationSchema = z
  .object({
    agentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque, user-specified string representing the human agent who handled the conversation.',
      }),
    callMetadata:
      GoogleCloudContactcenterinsightsV1ConversationCallMetadataSchema.exactOptional().openapi({
        description: 'Call-specific metadata.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the conversation was created.',
        readOnly: true,
      }),
    dataSource:
      GoogleCloudContactcenterinsightsV1ConversationDataSourceSchema.exactOptional().openapi({
        description: 'The source of the audio and transcription for the conversation.',
      }),
    dialogflowIntents: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1DialogflowIntentSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent}',
        readOnly: true,
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The duration of the conversation.', readOnly: true }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-specified language code for the conversation.' }),
    latestAnalysis: GoogleCloudContactcenterinsightsV1AnalysisSchema.exactOptional().openapi({
      description: "Output only. The conversation's latest analysis, if one exists.",
      readOnly: true,
    }),
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The conversation medium, if unspecified will default to PHONE_CALL.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}',
      }),
    obfuscatedUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Obfuscated user ID which the customer sent to us.' }),
    runtimeAnnotations: z
      .array(GoogleCloudContactcenterinsightsV1RuntimeAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The annotations that were generated during the customer and agent interaction.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the conversation started.' }),
    transcript:
      GoogleCloudContactcenterinsightsV1ConversationTranscriptSchema.exactOptional().openapi({
        description: 'Output only. The conversation transcript.',
        readOnly: true,
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.',
      }),
    turnCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of turns in the conversation.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the conversation was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The conversation resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1Conversation')

const GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadataSchema = z
  .object({
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1AnnotatorSelectorSchema.exactOptional().openapi({
        description: 'Output only. The annotator selector used for the analysis (if any).',
        readOnly: true,
      }),
    conversation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The Conversation that this Analysis Operation belongs to.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata for a create analysis operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CreateAnalysisOperationMetadata')

const GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter to reduce the conversations used for training the model to a specific subset.',
      }),
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
      .exactOptional()
      .openapi({
        description:
          'Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.',
      }),
    trainingConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of conversations used in training. Output only.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Configs for the input data used to create the issue model.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig')

const GoogleCloudContactcenterinsightsV1IssueModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this issue model was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the issue model.' }),
    inputDataConfig:
      GoogleCloudContactcenterinsightsV1IssueModelInputDataConfigSchema.exactOptional().openapi({
        description: 'Configs for the input data that used to create the issue model.',
      }),
    issueCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of issues in this issue model.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'UNDEPLOYED', 'DEPLOYING', 'DEPLOYED', 'UNDEPLOYING', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the model.', readOnly: true }),
    trainingStats:
      GoogleCloudContactcenterinsightsV1IssueModelLabelStatsSchema.exactOptional().openapi({
        description:
          "Output only. Immutable. The issue model's label statistics on its training data.",
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the issue model was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The issue model resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IssueModel')

const GoogleCloudContactcenterinsightsV1CreateIssueModelRequestSchema = z
  .object({
    issueModel: GoogleCloudContactcenterinsightsV1IssueModelSchema.exactOptional().openapi({
      description: 'Required. The issue model to create.',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource of the issue model.' }),
  })
  .openapi({ description: 'The request to create an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CreateIssueModelRequest')

const GoogleCloudContactcenterinsightsV1CreateIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1CreateIssueModelRequestSchema.exactOptional().openapi({
        description: 'The original request for creation.',
      }),
  })
  .openapi({ description: 'Metadata for creating an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1CreateIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1DeleteIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the issue model to delete.' }),
  })
  .openapi({ description: 'The request to delete an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DeleteIssueModelRequest')

const GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1DeleteIssueModelRequestSchema.exactOptional().openapi({
        description: 'The original request for deletion.',
      }),
  })
  .openapi({ description: 'Metadata for deleting an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DeleteIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1DeployIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The issue model to deploy.' }),
  })
  .openapi({ description: 'The request to deploy an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DeployIssueModelRequest')

const GoogleCloudContactcenterinsightsV1DeployIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1DeployIssueModelRequestSchema.exactOptional().openapi({
        description: 'The original request for deployment.',
      }),
  })
  .openapi({ description: 'Metadata for deploying an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1DeployIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1DeployIssueModelResponseSchema = z
  .object({})
  .openapi({ description: 'The response to deploy an issue model.' })
  .openapi('GoogleCloudContactcenterinsightsV1DeployIssueModelResponse')

const GoogleCloudContactcenterinsightsV1ExactMatchConfigSchema = z
  .object({
    caseSensitive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to consider case sensitivity when performing an exact match.',
      }),
  })
  .openapi({ description: 'Exact match configuration.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ExactMatchConfig')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestinationSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.',
      }),
    table: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.',
      }),
  })
  .openapi({ description: 'A BigQuery Table Reference.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestination')

const GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestSchema = z
  .object({
    bigQueryDestination:
      GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestBigQueryDestinationSchema.exactOptional().openapi(
        { description: 'Specified if sink is a BigQuery table.' },
      ),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.',
      }),
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource to export data from.' }),
    writeDisposition: z
      .enum(['WRITE_DISPOSITION_UNSPECIFIED', 'WRITE_TRUNCATE', 'WRITE_APPEND'])
      .exactOptional()
      .openapi({ description: 'Options for what to do if the destination table already exists.' }),
  })
  .openapi({ description: 'The request to export insights.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ExportInsightsDataRequest')

const GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    partialErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial errors during export operation that might cause the operation output to be incomplete.',
      }),
    request:
      GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestSchema.exactOptional().openapi({
        description: 'The original request for export.',
      }),
  })
  .openapi({ description: 'Metadata for an export insights operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ExportInsightsDataMetadata')

const GoogleCloudContactcenterinsightsV1ExportInsightsDataResponseSchema = z
  .object({})
  .openapi({ description: 'Response for an export insights operation.' })
  .openapi('GoogleCloudContactcenterinsightsV1ExportInsightsDataResponse')

const GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStatsSchema =
  z
    .object({
      duplicatesSkippedCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.',
          readOnly: true,
        }),
      failedIngestCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.',
          readOnly: true,
        }),
      processedObjectCount: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'Output only. The number of objects processed during the ingest operation.',
          readOnly: true,
        }),
      successfulIngestCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of new conversations added during this ingest operation.',
          readOnly: true,
        }),
    })
    .openapi({ description: 'Statistics for IngestConversations operation.', required: [] })
    .openapi(
      'GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStats',
    )

const GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfigSchema = z
  .object({
    agentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque, user-specified string representing the human agent who handled the conversations.',
      }),
  })
  .openapi({ description: 'Configuration that applies to all conversations.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfig')

const GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceSchema = z
  .object({
    bucketUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The Cloud Storage bucket containing source objects.' }),
  })
  .openapi({ description: 'Configuration for Cloud Storage bucket sources.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSource')

const GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigSchema = z
  .object({
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
      .exactOptional()
      .openapi({ description: 'Required. The medium transcript objects represent.' }),
  })
  .openapi({ description: 'Configuration for processing transcript objects.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig')

const GoogleCloudContactcenterinsightsV1IngestConversationsRequestSchema = z
  .object({
    conversationConfig:
      GoogleCloudContactcenterinsightsV1IngestConversationsRequestConversationConfigSchema.exactOptional().openapi(
        { description: 'Configuration that applies to all conversations.' },
      ),
    gcsSource:
      GoogleCloudContactcenterinsightsV1IngestConversationsRequestGcsSourceSchema.exactOptional().openapi(
        { description: 'A cloud storage bucket source.' },
      ),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource for new conversations.' }),
    transcriptObjectConfig:
      GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigSchema.exactOptional().openapi(
        { description: 'Configuration for when `source` contains conversation transcripts.' },
      ),
  })
  .openapi({ description: 'The request to ingest conversations.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsRequest')

const GoogleCloudContactcenterinsightsV1IngestConversationsMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    ingestConversationsStats:
      GoogleCloudContactcenterinsightsV1IngestConversationsMetadataIngestConversationsStatsSchema.exactOptional().openapi(
        {
          description: 'Output only. Statistics for IngestConversations operation.',
          readOnly: true,
        },
      ),
    partialErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1IngestConversationsRequestSchema.exactOptional().openapi({
        description: 'Output only. The original request for ingest.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The metadata for an IngestConversations operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsMetadata')

const GoogleCloudContactcenterinsightsV1IngestConversationsResponseSchema = z
  .object({})
  .openapi({ description: 'The response to an IngestConversations operation.' })
  .openapi('GoogleCloudContactcenterinsightsV1IngestConversationsResponse')

const GoogleCloudContactcenterinsightsV1IssueSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this issue was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the issue.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}',
      }),
    sampleUtterances: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource names of the sample representative utterances that match to this issue.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time that this issue was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The issue resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1Issue')

const GoogleCloudContactcenterinsightsV1ListAnalysesResponseSchema = z
  .object({
    analyses: z
      .array(GoogleCloudContactcenterinsightsV1AnalysisSchema)
      .exactOptional()
      .openapi({ description: 'The analyses that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response to list analyses.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListAnalysesResponse')

const GoogleCloudContactcenterinsightsV1ListConversationsResponseSchema = z
  .object({
    conversations: z
      .array(GoogleCloudContactcenterinsightsV1ConversationSchema)
      .exactOptional()
      .openapi({ description: 'The conversations that match the request.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token which can be sent as `page_token` to retrieve the next page. If this field is set, it means there is another page available. If it is not set, it means no other pages are available.',
      }),
  })
  .openapi({ description: 'The response of listing conversations.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListConversationsResponse')

const GoogleCloudContactcenterinsightsV1ListIssueModelsResponseSchema = z
  .object({
    issueModels: z
      .array(GoogleCloudContactcenterinsightsV1IssueModelSchema)
      .exactOptional()
      .openapi({ description: 'The issue models that match the request.' }),
  })
  .openapi({ description: 'The response of listing issue models.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListIssueModelsResponse')

const GoogleCloudContactcenterinsightsV1ListIssuesResponseSchema = z
  .object({
    issues: z
      .array(GoogleCloudContactcenterinsightsV1IssueSchema)
      .exactOptional()
      .openapi({ description: 'The issues that match the request.' }),
  })
  .openapi({ description: 'The response of listing issues.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListIssuesResponse')

const GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfigSchema = z
  .object({
    exactMatchConfig:
      GoogleCloudContactcenterinsightsV1ExactMatchConfigSchema.exactOptional().openapi({
        description: 'The configuration for the exact match rule.',
      }),
  })
  .openapi({ description: 'Configuration information of a phrase match rule.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig')

const GoogleCloudContactcenterinsightsV1PhraseMatchRuleSchema = z
  .object({
    config: GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfigSchema.exactOptional().openapi({
      description:
        'Provides additional information about the rule that specifies how to apply the rule.',
    }),
    negated: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The phrase to be matched.' }),
  })
  .openapi({ description: 'The data for a phrase match rule.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1PhraseMatchRule')

const GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupSchema = z
  .object({
    phraseMatchRules: z
      .array(GoogleCloudContactcenterinsightsV1PhraseMatchRuleSchema)
      .exactOptional()
      .openapi({ description: 'A list of phrase match rules that are included in this group.' }),
    type: z
      .enum(['PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED', 'ALL_OF', 'ANY_OF'])
      .exactOptional()
      .openapi({ description: 'Required. The type of this phrase match rule group.' }),
  })
  .openapi({ description: 'A message representing a rule in the phrase matcher.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup')

const GoogleCloudContactcenterinsightsV1PhraseMatcherSchema = z
  .object({
    activationUpdateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The most recent time at which the activation status was updated.',
        readOnly: true,
      }),
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Applies the phrase matcher only when it is active.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the phrase matcher.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the phrase matcher. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}',
      }),
    phraseMatchRuleGroups: z
      .array(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupSchema)
      .exactOptional()
      .openapi({
        description: 'A list of phase match rule groups that are included in this matcher.',
      }),
    revisionCreateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The timestamp of when the revision was created. It is also the create time when a new matcher is added.',
        readOnly: true,
      }),
    revisionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The revision ID of the phrase matcher. A new revision is committed whenever the matcher is changed, except when it is activated or deactivated. A server generated random ID will be used. Example: locations/global/phraseMatchers/my-first-matcher@1234567',
        readOnly: true,
      }),
    roleMatch: z
      .enum(['ROLE_UNSPECIFIED', 'HUMAN_AGENT', 'AUTOMATED_AGENT', 'END_USER', 'ANY_AGENT'])
      .exactOptional()
      .openapi({
        description:
          'The role whose utterances the phrase matcher should be matched against. If the role is ROLE_UNSPECIFIED it will be matched against any utterances in the transcript.',
      }),
    type: z
      .enum(['PHRASE_MATCHER_TYPE_UNSPECIFIED', 'ALL_OF', 'ANY_OF'])
      .exactOptional()
      .openapi({ description: 'Required. The type of this phrase matcher.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the phrase matcher was updated.',
        readOnly: true,
      }),
    versionTag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The customized version tag to use for the phrase matcher. If not specified, it will default to `revision_id`.',
      }),
  })
  .openapi({ description: 'The phrase matcher resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1PhraseMatcher')

const GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    phraseMatchers: z
      .array(GoogleCloudContactcenterinsightsV1PhraseMatcherSchema)
      .exactOptional()
      .openapi({ description: 'The phrase matchers that match the request.' }),
  })
  .openapi({ description: 'The response of listing phrase matchers.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse')

const GoogleCloudContactcenterinsightsV1ViewSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this view was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable display name of the view.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the view was updated.',
        readOnly: true,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'String with specific view properties, must be non-empty.' }),
  })
  .openapi({ description: 'The View resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1View')

const GoogleCloudContactcenterinsightsV1ListViewsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    views: z
      .array(GoogleCloudContactcenterinsightsV1ViewSchema)
      .exactOptional()
      .openapi({ description: 'The views that match the request.' }),
  })
  .openapi({ description: 'The response of listing views.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1ListViewsResponse')

const GoogleCloudContactcenterinsightsV1RedactionConfigSchema = z
  .object({
    deidentifyTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}`',
      }),
    inspectTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified DLP inspect template resource name. Format: `projects/{project}/inspectTemplates/{template}`',
      }),
  })
  .openapi({
    description: 'DLP resources used for redaction while ingesting conversations.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1RedactionConfig')

const GoogleCloudContactcenterinsightsV1SettingsAnalysisConfigSchema = z
  .object({
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1AnnotatorSelectorSchema.exactOptional().openapi({
        description:
          'To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.',
      }),
    runtimeIntegrationAnalysisPercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Percentage of conversations created using Dialogflow runtime integration to analyze automatically, between [0, 100].',
      }),
    uploadConversationAnalysisPercentage: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Percentage of conversations created using the UploadConversation endpoint to analyze automatically, between [0, 100].',
      }),
  })
  .openapi({
    description: 'Default configuration when creating Analyses in Insights.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1SettingsAnalysisConfig')

const GoogleCloudContactcenterinsightsV1SettingsSchema = z
  .object({
    analysisConfig:
      GoogleCloudContactcenterinsightsV1SettingsAnalysisConfigSchema.exactOptional().openapi({
        description: 'Default analysis settings.',
      }),
    conversationTtl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default TTL for newly-created conversations. If a conversation has a specified expiration, that value will be used instead. Changing this value will not change the expiration of existing conversations. Conversations with no expire time persist until they are deleted.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the settings was created.',
        readOnly: true,
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A language code to be applied to each transcript segment unless the segment already specifies a language code. Language code defaults to "en-US" if it is neither specified on the segment nor here.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the settings resource. Format: projects/{project}/locations/{location}/settings',
      }),
    pubsubNotificationSettings: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map that maps a notification trigger to a Pub/Sub topic. Each time a specified trigger occurs, Insights will notify the corresponding Pub/Sub topic. Keys are notification triggers. Supported keys are: * "all-triggers": Notify each time any of the supported triggers occurs. * "create-analysis": Notify each time an analysis is created. * "create-conversation": Notify each time a conversation is created. * "export-insights-data": Notify each time an export is complete. * "update-conversation": Notify each time a conversation is updated via UpdateConversation. Values are Pub/Sub topics. The format of each Pub/Sub topic is: projects/{project}/topics/{topic}',
      }),
    redactionConfig:
      GoogleCloudContactcenterinsightsV1RedactionConfigSchema.exactOptional().openapi({
        description: 'Default DLP redaction resources to be applied while ingesting conversations.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the settings were last updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The settings resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1Settings')

const GoogleCloudContactcenterinsightsV1UndeployIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The issue model to undeploy.' }),
  })
  .openapi({ description: 'The request to undeploy an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1UndeployIssueModelRequest')

const GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1UndeployIssueModelRequestSchema.exactOptional().openapi({
        description: 'The original request for undeployment.',
      }),
  })
  .openapi({ description: 'Metadata for undeploying an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1UndeployIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1UndeployIssueModelResponseSchema = z
  .object({})
  .openapi({ description: 'The response to undeploy an issue model.' })
  .openapi('GoogleCloudContactcenterinsightsV1UndeployIssueModelResponse')

const GoogleCloudContactcenterinsightsV1UploadConversationRequestSchema = z
  .object({
    conversation: GoogleCloudContactcenterinsightsV1ConversationSchema.exactOptional().openapi({
      description: 'Required. The conversation resource to create.',
    }),
    conversationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`",
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource of the conversation.' }),
    redactionConfig:
      GoogleCloudContactcenterinsightsV1RedactionConfigSchema.exactOptional().openapi({
        description:
          'Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.',
      }),
  })
  .openapi({ description: 'Request to upload a conversation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1UploadConversationRequest')

const GoogleCloudContactcenterinsightsV1UploadConversationMetadataSchema = z
  .object({
    analysisOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The operation name for a successfully created analysis operation, if any.',
        readOnly: true,
      }),
    appliedRedactionConfig:
      GoogleCloudContactcenterinsightsV1RedactionConfigSchema.exactOptional().openapi({
        description: 'Output only. The redaction config applied to the uploaded conversation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1UploadConversationRequestSchema.exactOptional().openapi({
        description: 'Output only. The original request.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The metadata for an UploadConversation operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1UploadConversationMetadata')

const GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundarySchema = z
  .object({
    transcriptIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The index in the sequence of transcribed pieces of the conversation where the boundary is located. This index starts at zero.',
      }),
    wordIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The word index of this boundary with respect to the first word in the transcript piece. This index starts at zero.',
      }),
  })
  .openapi({
    description: 'A point in a conversation that marks the start or the end of an annotation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary')

const GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema = z
  .object({
    magnitude: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.',
      }),
    score: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The sentiment score between -1.0 (negative) and 1.0 (positive).' }),
  })
  .openapi({ description: 'The data for a sentiment annotation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1SentimentData')

const GoogleCloudContactcenterinsightsV1alpha1EntityMentionDataSchema = z
  .object({
    entityUniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.',
      }),
    sentiment: GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema.exactOptional().openapi({
      description: 'Sentiment expressed for this mention of the entity.',
    }),
    type: z
      .enum(['MENTION_TYPE_UNSPECIFIED', 'PROPER', 'COMMON'])
      .exactOptional()
      .openapi({ description: 'The type of the entity mention.' }),
  })
  .openapi({
    description:
      'The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1EntityMentionData')

const GoogleCloudContactcenterinsightsV1alpha1HoldDataSchema = z
  .object({})
  .openapi({ description: 'The data for a hold annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1HoldData')

const GoogleCloudContactcenterinsightsV1alpha1IntentMatchDataSchema = z
  .object({
    intentUniqueId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The id of the matched intent. Can be used to retrieve the corresponding intent information.',
      }),
  })
  .openapi({
    description:
      'The data for an intent match. Represents an intent match for a text segment in the conversation. A text segment can be part of a sentence, a complete sentence, or an utterance with multiple sentences.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IntentMatchData')

const GoogleCloudContactcenterinsightsV1alpha1InterruptionDataSchema = z
  .object({})
  .openapi({ description: 'The data for an interruption annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1InterruptionData')

const GoogleCloudContactcenterinsightsV1alpha1IssueAssignmentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Display name of the assigned issue. This field is set at time of analyis and immutable since then.',
      }),
    issue: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource name of the assigned issue.' }),
    score: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Score indicating the likelihood of the issue assignment. currently bounded on [0,1].',
      }),
  })
  .openapi({ description: 'Information about the issue.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueAssignment')

const GoogleCloudContactcenterinsightsV1alpha1IssueMatchDataSchema = z
  .object({
    issueAssignment:
      GoogleCloudContactcenterinsightsV1alpha1IssueAssignmentSchema.exactOptional().openapi({
        description: "Information about the issue's assignment.",
      }),
  })
  .openapi({ description: 'The data for an issue match annotation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueMatchData')

const GoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the phrase matcher.' }),
    phraseMatcher: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier (the resource name) of the phrase matcher.' }),
  })
  .openapi({
    description:
      'The data for a matched phrase matcher. Represents information identifying a phrase matcher for a given match.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData')

const GoogleCloudContactcenterinsightsV1alpha1SilenceDataSchema = z
  .object({})
  .openapi({ description: 'The data for a silence annotation.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1SilenceData')

const GoogleCloudContactcenterinsightsV1alpha1CallAnnotationSchema = z
  .object({
    annotationEndBoundary:
      GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation ends, inclusive.',
      }),
    annotationStartBoundary:
      GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation starts, inclusive.',
      }),
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated.',
      }),
    entityMentionData:
      GoogleCloudContactcenterinsightsV1alpha1EntityMentionDataSchema.exactOptional().openapi({
        description: 'Data specifying an entity mention.',
      }),
    holdData: GoogleCloudContactcenterinsightsV1alpha1HoldDataSchema.exactOptional().openapi({
      description: 'Data specifying a hold.',
    }),
    intentMatchData:
      GoogleCloudContactcenterinsightsV1alpha1IntentMatchDataSchema.exactOptional().openapi({
        description: 'Data specifying an intent match.',
      }),
    interruptionData:
      GoogleCloudContactcenterinsightsV1alpha1InterruptionDataSchema.exactOptional().openapi({
        description: 'Data specifying an interruption.',
      }),
    issueMatchData:
      GoogleCloudContactcenterinsightsV1alpha1IssueMatchDataSchema.exactOptional().openapi({
        description: 'Data specifying an issue match.',
      }),
    phraseMatchData:
      GoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataSchema.exactOptional().openapi({
        description: 'Data specifying a phrase match.',
      }),
    sentimentData:
      GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema.exactOptional().openapi({
        description: 'Data specifying sentiment.',
      }),
    silenceData: GoogleCloudContactcenterinsightsV1alpha1SilenceDataSchema.exactOptional().openapi({
      description: 'Data specifying silence.',
    }),
  })
  .openapi({ description: 'A piece of metadata that applies to a window of a call.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1CallAnnotation')

const GoogleCloudContactcenterinsightsV1alpha1EntitySchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the entity.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.',
      }),
    salience: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.',
      }),
    sentiment: GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema.exactOptional().openapi({
      description: 'The aggregate sentiment expressed for this entity in the conversation.',
    }),
    type: z
      .enum([
        'TYPE_UNSPECIFIED',
        'PERSON',
        'LOCATION',
        'ORGANIZATION',
        'EVENT',
        'WORK_OF_ART',
        'CONSUMER_GOOD',
        'OTHER',
        'PHONE_NUMBER',
        'ADDRESS',
        'DATE',
        'NUMBER',
        'PRICE',
      ])
      .exactOptional()
      .openapi({ description: 'The entity type.' }),
  })
  .openapi({
    description:
      'The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1Entity')

const GoogleCloudContactcenterinsightsV1alpha1IntentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the intent.' }),
    id: z.string().exactOptional().openapi({ description: 'The unique identifier of the intent.' }),
  })
  .openapi({
    description:
      'The data for an intent. Represents a detected intent in the conversation, for example MAKES_PROMISE.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1Intent')

const GoogleCloudContactcenterinsightsV1alpha1IssueModelResultSchema = z
  .object({
    issueModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issue model that generates the result. Format: projects/{project}/locations/{location}/issueModels/{issue_model}',
      }),
    issues: z
      .array(GoogleCloudContactcenterinsightsV1alpha1IssueAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'All the matched issues.' }),
  })
  .openapi({ description: 'Issue Modeling result on a conversation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueModelResult')

const GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentimentSchema = z
  .object({
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The channel of the audio that the data applies to.' }),
    sentimentData:
      GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema.exactOptional().openapi({
        description: 'Data specifying sentiment.',
      }),
  })
  .openapi({ description: 'One channel of conversation-level sentiment data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment')

const GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadataSchema = z
  .object({
    annotations: z
      .array(GoogleCloudContactcenterinsightsV1alpha1CallAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'A list of call annotations that apply to this call.' }),
    entities: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1alpha1EntitySchema)
      .exactOptional()
      .openapi({ description: 'All the entities in the call.' }),
    intents: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1alpha1IntentSchema)
      .exactOptional()
      .openapi({ description: 'All the matched intents in the call.' }),
    issueModelResult:
      GoogleCloudContactcenterinsightsV1alpha1IssueModelResultSchema.exactOptional().openapi({
        description: 'Overall conversation-level issue modeling result.',
      }),
    phraseMatchers: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1alpha1PhraseMatchDataSchema)
      .exactOptional()
      .openapi({ description: 'All the matched phrase matchers in the call.' }),
    sentiments: z
      .array(GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentimentSchema)
      .exactOptional()
      .openapi({
        description: 'Overall conversation-level sentiment for each channel of the call.',
      }),
  })
  .openapi({ description: 'Call-specific metadata created during analysis.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata')

const GoogleCloudContactcenterinsightsV1alpha1AnalysisResultSchema = z
  .object({
    callAnalysisMetadata:
      GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadataSchema.exactOptional().openapi(
        { description: 'Call-specific metadata created by the analysis.' },
      ),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the analysis ended.' }),
  })
  .openapi({ description: 'The result of an analysis.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1AnalysisResult')

const GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSchema = z
  .object({
    issueModels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference.',
      }),
    phraseMatchers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher}',
      }),
    runEntityAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the entity annotator.' }),
    runIntentAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the intent annotator.' }),
    runInterruptionAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the interruption annotator.' }),
    runIssueModelAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to run the issue model annotator. A model should have already been deployed for this to take effect.',
      }),
    runPhraseMatcherAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the active phrase matcher annotator(s).' }),
    runSentimentAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the sentiment annotator.' }),
    runSilenceAnnotator: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to run the silence annotator.' }),
  })
  .openapi({
    description: 'Selector of all available annotators and phrase matchers to run.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector')

const GoogleCloudContactcenterinsightsV1alpha1AnalysisSchema = z
  .object({
    analysisResult:
      GoogleCloudContactcenterinsightsV1alpha1AnalysisResultSchema.exactOptional().openapi({
        description:
          'Output only. The result of the analysis, which is populated when the analysis finishes.',
        readOnly: true,
      }),
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSchema.exactOptional().openapi({
        description:
          'To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the analysis was created, which occurs when the long-running operation completes.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the analysis. Format: projects/{project}/locations/{location}/conversations/{conversation}/analyses/{analysis}',
      }),
    requestTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the analysis was requested.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The analysis resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1Analysis')

const GoogleCloudContactcenterinsightsV1alpha1AnswerFeedbackSchema = z
  .object({
    clicked: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether an answer or item was clicked by the human agent.',
      }),
    correctnessLevel: z
      .enum(['CORRECTNESS_LEVEL_UNSPECIFIED', 'NOT_CORRECT', 'PARTIALLY_CORRECT', 'FULLY_CORRECT'])
      .exactOptional()
      .openapi({ description: 'The correctness level of an answer.' }),
    displayed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether an answer or item was displayed to the human agent in the agent desktop UI.',
      }),
  })
  .openapi({
    description: 'The feedback that the customer has about a certain answer in the conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback')

const GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionDataSchema = z
  .object({
    confidenceScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Article Suggestion and the document that it originates from.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}',
      }),
    title: z.string().exactOptional().openapi({ description: 'Article title.' }),
    uri: z.string().exactOptional().openapi({ description: 'Article URI.' }),
  })
  .openapi({ description: 'Agent Assist Article Suggestion data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData')

const GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequestSchema = z
  .object({
    analysisPercentage: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Required. Percentage of selected conversation to analyze, between [0, 100].',
      }),
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSchema.exactOptional().openapi({
        description:
          'To select the annotators to run and the phrase matchers to use (if any). If not specified, all annotators will be run.',
      }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Filter used to select the subset of conversations to analyze.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource to create analyses in.' }),
  })
  .openapi({ description: 'The request to analyze conversations in bulk.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequest')

const GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadataSchema = z
  .object({
    completedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of requested analyses that have completed successfully so far.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation was created.' }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the operation finished running.' }),
    failedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of requested analyses that have failed so far.' }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsRequestSchema.exactOptional().openapi(
        { description: 'The original request for bulk analyze.' },
      ),
    totalRequestedAnalysesCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of analyses requested. Computed by the number of conversations returned by `filter` multiplied by `analysis_percentage` in the request.',
      }),
  })
  .openapi({
    description: 'The metadata for a bulk analyze conversations operation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsMetadata')

const GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponseSchema = z
  .object({
    failedAnalysisCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of failed analyses.' }),
    successfulAnalysisCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Count of successful analyses.' }),
  })
  .openapi({
    description: 'The response for a bulk analyze conversations operation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1BulkAnalyzeConversationsResponse')

const GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadataSchema = z
  .object({
    agentChannel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The audio channel that contains the agent.' }),
    customerChannel: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The audio channel that contains the customer.' }),
  })
  .openapi({ description: 'Call-specific metadata.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadata')

const GoogleCloudContactcenterinsightsV1alpha1DialogflowSourceSchema = z
  .object({
    audioUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage URI that points to a file that contains the conversation audio.',
      }),
    dialogflowConversation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The name of the Dialogflow conversation that this conversation resource is derived from. Format: projects/{project}/locations/{location}/conversations/{conversation}',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A Dialogflow source of conversation data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DialogflowSource')

const GoogleCloudContactcenterinsightsV1alpha1GcsSourceSchema = z
  .object({
    audioUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Cloud Storage URI that points to a file that contains the conversation audio.',
      }),
    transcriptUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.',
      }),
  })
  .openapi({ description: 'A Cloud Storage source of conversation data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1GcsSource')

const GoogleCloudContactcenterinsightsV1alpha1ConversationDataSourceSchema = z
  .object({
    dialogflowSource:
      GoogleCloudContactcenterinsightsV1alpha1DialogflowSourceSchema.exactOptional().openapi({
        description: 'The source when the conversation comes from Dialogflow.',
      }),
    gcsSource: GoogleCloudContactcenterinsightsV1alpha1GcsSourceSchema.exactOptional().openapi({
      description: 'A Cloud Storage location specification for the audio and transcript.',
    }),
  })
  .openapi({
    description: 'The conversation source, which is a combination of transcript and audio.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationDataSource')

const GoogleCloudContactcenterinsightsV1alpha1DialogflowIntentSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human-readable name of the intent.' }),
  })
  .openapi({
    description:
      'The data for a Dialogflow intent. Represents a detected intent in the conversation, e.g. MAKES_PROMISE.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DialogflowIntent')

const GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionDataSchema = z
  .object({
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The confidence of the match ranging from 0.0 (completely uncertain) to 1.0 (completely certain).',
      }),
    dialogflowIntentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Dialogflow intent resource path. Format: projects/{project}/agent/{agent}/intents/{intent}',
      }),
  })
  .openapi({ description: 'Dialogflow interaction data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData')

const GoogleCloudContactcenterinsightsV1alpha1FaqAnswerDataSchema = z
  .object({
    answer: z
      .string()
      .exactOptional()
      .openapi({ description: 'The piece of text from the `source` knowledge base document.' }),
    confidenceScore: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this answer is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the FAQ answer and the document that it originates from.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    question: z
      .string()
      .exactOptional()
      .openapi({ description: 'The corresponding FAQ question.' }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document}.',
      }),
  })
  .openapi({ description: 'Agent Assist frequently-asked-question answer data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData')

const GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionDataSchema = z
  .object({
    confidenceScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this suggestion is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Smart Compose suggestion and the document from which it originates.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    suggestion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the suggestion.' }),
  })
  .openapi({ description: 'Agent Assist Smart Compose suggestion data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData')

const GoogleCloudContactcenterinsightsV1alpha1SmartReplyDataSchema = z
  .object({
    confidenceScore: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The system's confidence score that this reply is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain).",
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'Map that contains metadata about the Smart Reply and the document from which it originates.',
      }),
    queryRecord: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record}',
      }),
    reply: z.string().exactOptional().openapi({ description: 'The content of the reply.' }),
  })
  .openapi({ description: 'Agent Assist Smart Reply data.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1SmartReplyData')

const GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotationSchema = z
  .object({
    annotationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation}',
      }),
    answerFeedback:
      GoogleCloudContactcenterinsightsV1alpha1AnswerFeedbackSchema.exactOptional().openapi({
        description: 'The feedback that the customer has about the answer in `data`.',
      }),
    articleSuggestion:
      GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionDataSchema.exactOptional().openapi({
        description: 'Agent Assist Article Suggestion data.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which this annotation was created.' }),
    dialogflowInteraction:
      GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionDataSchema.exactOptional().openapi(
        { description: 'Dialogflow interaction data.' },
      ),
    endBoundary:
      GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation ends, inclusive.',
      }),
    faqAnswer: GoogleCloudContactcenterinsightsV1alpha1FaqAnswerDataSchema.exactOptional().openapi({
      description: 'Agent Assist FAQ answer data.',
    }),
    smartComposeSuggestion:
      GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionDataSchema.exactOptional().openapi(
        { description: 'Agent Assist Smart Compose suggestion data.' },
      ),
    smartReply:
      GoogleCloudContactcenterinsightsV1alpha1SmartReplyDataSchema.exactOptional().openapi({
        description: 'Agent Assist Smart Reply data.',
      }),
    startBoundary:
      GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundarySchema.exactOptional().openapi({
        description: 'The boundary in the conversation where the annotation starts, inclusive.',
      }),
  })
  .openapi({
    description: 'An annotation that was generated during the customer and agent interaction.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation')

const GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataSchema =
  z
    .object({
      smartReplyAllowlistCovered: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Whether the transcript segment was covered under the configured smart reply allowlist in Agent Assist.',
        }),
    })
    .openapi({
      description: 'Metadata from Dialogflow relating to the current transcript segment.',
      required: [],
    })
    .openapi(
      'GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata',
    )

const GoogleCloudContactcenterinsightsV1alpha1ConversationParticipantSchema = z
  .object({
    dialogflowParticipant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Use `dialogflow_participant_name` instead. The name of the Dialogflow participant. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}',
      }),
    dialogflowParticipantName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the participant provided by Dialogflow. Format: projects/{project}/locations/{location}/conversations/{conversation}/participants/{participant}',
      }),
    obfuscatedExternalUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Obfuscated user ID from Dialogflow.' }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'HUMAN_AGENT', 'AUTOMATED_AGENT', 'END_USER', 'ANY_AGENT'])
      .exactOptional()
      .openapi({ description: 'The role of the participant.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-specified ID representing the participant.' }),
  })
  .openapi({ description: 'The call participant speaking for a given utterance.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationParticipant')

const GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfoSchema =
  z
    .object({
      confidence: z
        .float32()
        .exactOptional()
        .openapi({
          description:
            'A confidence estimate between 0.0 and 1.0 of the fidelity of this word. A default value of 0.0 indicates that the value is unset.',
        }),
      endOffset: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Time offset of the end of this word relative to the beginning of the total conversation.',
        }),
      startOffset: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Time offset of the start of this word relative to the beginning of the total conversation.',
        }),
      word: z
        .string()
        .exactOptional()
        .openapi({
          description: 'The word itself. Includes punctuation marks that surround the word.',
        }),
    })
    .openapi({ description: 'Word-level info for words in a transcript.', required: [] })
    .openapi(
      'GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfo',
    )

const GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentSchema = z
  .object({
    channelTag: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.",
      }),
    confidence: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.',
      }),
    dialogflowSegmentMetadata:
      GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadataSchema.exactOptional().openapi(
        { description: 'CCAI metadata relating to the current transcript segment.' },
      ),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".',
      }),
    messageTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time that the message occurred, if provided.' }),
    segmentParticipant:
      GoogleCloudContactcenterinsightsV1alpha1ConversationParticipantSchema.exactOptional().openapi(
        { description: 'The participant of this segment.' },
      ),
    sentiment: GoogleCloudContactcenterinsightsV1alpha1SentimentDataSchema.exactOptional().openapi({
      description: 'The sentiment for this transcript segment.',
    }),
    text: z.string().exactOptional().openapi({ description: 'The text of this segment.' }),
    words: z
      .array(
        GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentWordInfoSchema,
      )
      .exactOptional()
      .openapi({
        description: 'A list of the word-specific information for each word in the segment.',
      }),
  })
  .openapi({ description: 'A segment of a full transcript.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegment')

const GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptSchema = z
  .object({
    transcriptSegments: z
      .array(GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptTranscriptSegmentSchema)
      .exactOptional()
      .openapi({
        description: 'A list of sequential transcript segments that comprise the conversation.',
      }),
  })
  .openapi({
    description: 'A message representing the transcript of a conversation.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ConversationTranscript')

const GoogleCloudContactcenterinsightsV1alpha1ConversationSchema = z
  .object({
    agentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque, user-specified string representing the human agent who handled the conversation.',
      }),
    callMetadata:
      GoogleCloudContactcenterinsightsV1alpha1ConversationCallMetadataSchema.exactOptional().openapi(
        { description: 'Call-specific metadata.' },
      ),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the conversation was created.',
        readOnly: true,
      }),
    dataSource:
      GoogleCloudContactcenterinsightsV1alpha1ConversationDataSourceSchema.exactOptional().openapi({
        description: 'The source of the audio and transcription for the conversation.',
      }),
    dialogflowIntents: z
      .record(z.string(), GoogleCloudContactcenterinsightsV1alpha1DialogflowIntentSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. All the matched Dialogflow intents in the call. The key corresponds to a Dialogflow intent, format: projects/{project}/agent/{agent}/intents/{intent}',
        readOnly: true,
      }),
    duration: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The duration of the conversation.', readOnly: true }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which this conversation should expire. After this time, the conversation data and any associated analyses will be deleted.',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A map for the user to specify any custom fields. A maximum of 20 labels per conversation is allowed, with a maximum of 256 characters per entry.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'A user-specified language code for the conversation.' }),
    latestAnalysis: GoogleCloudContactcenterinsightsV1alpha1AnalysisSchema.exactOptional().openapi({
      description: "Output only. The conversation's latest analysis, if one exists.",
      readOnly: true,
    }),
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
      .exactOptional()
      .openapi({
        description:
          'Immutable. The conversation medium, if unspecified will default to PHONE_CALL.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the conversation. Format: projects/{project}/locations/{location}/conversations/{conversation}',
      }),
    obfuscatedUserId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Obfuscated user ID which the customer sent to us.' }),
    runtimeAnnotations: z
      .array(GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotationSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. The annotations that were generated during the customer and agent interaction.',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time at which the conversation started.' }),
    transcript:
      GoogleCloudContactcenterinsightsV1alpha1ConversationTranscriptSchema.exactOptional().openapi({
        description: 'Output only. The conversation transcript.',
        readOnly: true,
      }),
    ttl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. The TTL for this resource. If specified, then this TTL will be used to calculate the expire time.',
      }),
    turnCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of turns in the conversation.',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the conversation was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The conversation resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1Conversation')

const GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadataSchema = z
  .object({
    annotatorSelector:
      GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSchema.exactOptional().openapi({
        description: 'Output only. The annotator selector used for the analysis (if any).',
        readOnly: true,
      }),
    conversation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The Conversation that this Analysis Operation belongs to.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Metadata for a create analysis operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1CreateAnalysisOperationMetadata')

const GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfigSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter to reduce the conversations used for training the model to a specific subset.',
      }),
    medium: z
      .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
      .exactOptional()
      .openapi({
        description:
          'Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the `medium` field on `filter`.',
      }),
    trainingConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of conversations used in training. Output only.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Configs for the input data used to create the issue model.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfig')

const GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStatsSchema = z
  .object({
    displayName: z.string().exactOptional().openapi({ description: 'Display name of the issue.' }),
    issue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issue resource. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue}',
      }),
    labeledConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of conversations attached to the issue at this point in time.',
      }),
  })
  .openapi({ description: 'Aggregated statistics about an issue.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStats')

const GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsSchema = z
  .object({
    analyzedConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of conversations the issue model has analyzed at this point in time.',
      }),
    issueStats: z
      .record(
        z.string(),
        GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsIssueStatsSchema,
      )
      .exactOptional()
      .openapi({ description: "Statistics on each issue. Key is the issue's resource name." }),
    unclassifiedConversationsCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of analyzed conversations for which no issue was applicable at this point in time.',
      }),
  })
  .openapi({ description: 'Aggregated statistics about an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStats')

const GoogleCloudContactcenterinsightsV1alpha1IssueModelSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which this issue model was created.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The representative name for the issue model.' }),
    inputDataConfig:
      GoogleCloudContactcenterinsightsV1alpha1IssueModelInputDataConfigSchema.exactOptional().openapi(
        { description: 'Configs for the input data that used to create the issue model.' },
      ),
    issueCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Number of issues in this issue model.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model}',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'UNDEPLOYED', 'DEPLOYING', 'DEPLOYED', 'UNDEPLOYING', 'DELETING'])
      .exactOptional()
      .openapi({ description: 'Output only. State of the model.', readOnly: true }),
    trainingStats:
      GoogleCloudContactcenterinsightsV1alpha1IssueModelLabelStatsSchema.exactOptional().openapi({
        description:
          "Output only. Immutable. The issue model's label statistics on its training data.",
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The most recent time at which the issue model was updated.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'The issue model resource.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IssueModel')

const GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequestSchema = z
  .object({
    issueModel: GoogleCloudContactcenterinsightsV1alpha1IssueModelSchema.exactOptional().openapi({
      description: 'Required. The issue model to create.',
    }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource of the issue model.' }),
  })
  .openapi({ description: 'The request to create an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequest')

const GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelRequestSchema.exactOptional().openapi(
        { description: 'The original request for creation.' },
      ),
  })
  .openapi({ description: 'Metadata for creating an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1CreateIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the issue model to delete.' }),
  })
  .openapi({ description: 'The request to delete an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequest')

const GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelRequestSchema.exactOptional().openapi(
        { description: 'The original request for deletion.' },
      ),
  })
  .openapi({ description: 'Metadata for deleting an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DeleteIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The issue model to deploy.' }),
  })
  .openapi({ description: 'The request to deploy an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequest')

const GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelRequestSchema.exactOptional().openapi(
        { description: 'The original request for deployment.' },
      ),
  })
  .openapi({ description: 'Metadata for deploying an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponseSchema = z
  .object({})
  .openapi({ description: 'The response to deploy an issue model.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1DeployIssueModelResponse')

const GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestinationSchema = z
  .object({
    dataset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The name of the BigQuery dataset that the snapshot result should be exported to. If this dataset does not exist, the export call returns an INVALID_ARGUMENT error.',
      }),
    projectId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A project ID or number. If specified, then export will attempt to write data to this project instead of the resource project. Otherwise, the resource project will be used.',
      }),
    table: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BigQuery table name to which the insights data should be written. If this table does not exist, the export call returns an INVALID_ARGUMENT error.',
      }),
  })
  .openapi({ description: 'A BigQuery Table Reference.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestination')

const GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestSchema = z
  .object({
    bigQueryDestination:
      GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestBigQueryDestinationSchema.exactOptional().openapi(
        { description: 'Specified if sink is a BigQuery table.' },
      ),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter to reduce results to a specific subset. Useful for exporting conversations with specific properties.',
      }),
    kmsKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A fully qualified KMS key name for BigQuery tables protected by CMEK. Format: projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}/cryptoKeyVersions/{version}',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource to export data from.' }),
    writeDisposition: z
      .enum(['WRITE_DISPOSITION_UNSPECIFIED', 'WRITE_TRUNCATE', 'WRITE_APPEND'])
      .exactOptional()
      .openapi({ description: 'Options for what to do if the destination table already exists.' }),
  })
  .openapi({ description: 'The request to export insights.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequest')

const GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    partialErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Partial errors during export operation that might cause the operation output to be incomplete.',
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataRequestSchema.exactOptional().openapi(
        { description: 'The original request for export.' },
      ),
  })
  .openapi({ description: 'Metadata for an export insights operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataMetadata')

const GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponseSchema = z
  .object({})
  .openapi({ description: 'Response for an export insights operation.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1ExportInsightsDataResponse')

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStatsSchema =
  z
    .object({
      duplicatesSkippedCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of objects skipped because another conversation with the same transcript uri had already been ingested.',
          readOnly: true,
        }),
      failedIngestCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of objects which were unable to be ingested due to errors. The errors are populated in the partial_errors field.',
          readOnly: true,
        }),
      processedObjectCount: z
        .int32()
        .exactOptional()
        .openapi({
          description: 'Output only. The number of objects processed during the ingest operation.',
          readOnly: true,
        }),
      successfulIngestCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. The number of new conversations added during this ingest operation.',
          readOnly: true,
        }),
    })
    .openapi({ description: 'Statistics for IngestConversations operation.', required: [] })
    .openapi(
      'GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStats',
    )

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfigSchema = z
  .object({
    agentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An opaque, user-specified string representing the human agent who handled the conversations.',
      }),
  })
  .openapi({ description: 'Configuration that applies to all conversations.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfig')

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSourceSchema = z
  .object({
    bucketUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The Cloud Storage bucket containing source objects.' }),
  })
  .openapi({ description: 'Configuration for Cloud Storage bucket sources.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSource')

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfigSchema =
  z
    .object({
      medium: z
        .enum(['MEDIUM_UNSPECIFIED', 'PHONE_CALL', 'CHAT'])
        .exactOptional()
        .openapi({ description: 'Required. The medium transcript objects represent.' }),
    })
    .openapi({ description: 'Configuration for processing transcript objects.', required: [] })
    .openapi(
      'GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfig',
    )

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestSchema = z
  .object({
    conversationConfig:
      GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestConversationConfigSchema.exactOptional().openapi(
        { description: 'Configuration that applies to all conversations.' },
      ),
    gcsSource:
      GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestGcsSourceSchema.exactOptional().openapi(
        { description: 'A cloud storage bucket source.' },
      ),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource for new conversations.' }),
    transcriptObjectConfig:
      GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestTranscriptObjectConfigSchema.exactOptional().openapi(
        { description: 'Configuration for when `source` contains conversation transcripts.' },
      ),
  })
  .openapi({ description: 'The request to ingest conversations.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequest')

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    ingestConversationsStats:
      GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadataIngestConversationsStatsSchema.exactOptional().openapi(
        {
          description: 'Output only. Statistics for IngestConversations operation.',
          readOnly: true,
        },
      ),
    partialErrors: z
      .array(GoogleRpcStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. Partial errors during ingest operation that might cause the operation output to be incomplete.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1IngestConversationsRequestSchema.exactOptional().openapi(
        { description: 'Output only. The original request for ingest.', readOnly: true },
      ),
  })
  .openapi({ description: 'The metadata for an IngestConversations operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IngestConversationsMetadata')

const GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponseSchema = z
  .object({})
  .openapi({ description: 'The response to an IngestConversations operation.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1IngestConversationsResponse')

const GoogleCloudContactcenterinsightsV1alpha1RedactionConfigSchema = z
  .object({
    deidentifyTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified DLP deidentify template resource name. Format: `projects/{project}/deidentifyTemplates/{template}`',
      }),
    inspectTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fully-qualified DLP inspect template resource name. Format: `projects/{project}/inspectTemplates/{template}`',
      }),
  })
  .openapi({
    description: 'DLP resources used for redaction while ingesting conversations.',
    required: [],
  })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1RedactionConfig')

const GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequestSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The issue model to undeploy.' }),
  })
  .openapi({ description: 'The request to undeploy an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequest')

const GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadataSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelRequestSchema.exactOptional().openapi(
        { description: 'The original request for undeployment.' },
      ),
  })
  .openapi({ description: 'Metadata for undeploying an issue model.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelMetadata')

const GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponseSchema = z
  .object({})
  .openapi({ description: 'The response to undeploy an issue model.' })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1UndeployIssueModelResponse')

const GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequestSchema = z
  .object({
    conversation:
      GoogleCloudContactcenterinsightsV1alpha1ConversationSchema.exactOptional().openapi({
        description: 'Required. The conversation resource to create.',
      }),
    conversationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`",
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The parent resource of the conversation.' }),
    redactionConfig:
      GoogleCloudContactcenterinsightsV1alpha1RedactionConfigSchema.exactOptional().openapi({
        description:
          'Optional. DLP settings for transcript redaction. Optional, will default to the config specified in Settings.',
      }),
  })
  .openapi({ description: 'Request to upload a conversation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequest')

const GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadataSchema = z
  .object({
    analysisOperation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The operation name for a successfully created analysis operation, if any.',
        readOnly: true,
      }),
    appliedRedactionConfig:
      GoogleCloudContactcenterinsightsV1alpha1RedactionConfigSchema.exactOptional().openapi({
        description: 'Output only. The redaction config applied to the uploaded conversation.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the operation was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time the operation finished running.',
        readOnly: true,
      }),
    request:
      GoogleCloudContactcenterinsightsV1alpha1UploadConversationRequestSchema.exactOptional().openapi(
        { description: 'Output only. The original request.', readOnly: true },
      ),
  })
  .openapi({ description: 'The metadata for an UploadConversation operation.', required: [] })
  .openapi('GoogleCloudContactcenterinsightsV1alpha1UploadConversationMetadata')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1IssueModelCalculateIssueModelStatsRoute = createRoute({
  method: 'get',
  path: '/v1/{issueModel}:calculateIssueModelStats',
  tags: ['projects'],
  description: "Gets an issue model's statistics.",
  operationId: 'contactcenterinsights.projects.locations.issueModels.calculateIssueModelStats',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      issueModel: z
        .string()
        .openapi({
          param: {
            description: 'Required. The resource name of the issue model to query against.',
            in: 'path',
            name: 'issueModel',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1LocationConversationsCalculateStatsRoute = createRoute({
  method: 'get',
  path: '/v1/{location}/conversations:calculateStats',
  tags: ['projects'],
  description: 'Gets conversation statistics.',
  operationId: 'contactcenterinsights.projects.locations.conversations.calculateStats',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to reduce results to a specific subset. This field is useful for getting statistics about conversations with specific properties.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description: 'Required. The location of the conversations.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1CalculateStatsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Gets a view.',
  operationId: 'contactcenterinsights.projects.locations.views.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      view: z
        .enum(['CONVERSATION_VIEW_UNSPECIFIED', 'FULL', 'BASIC'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of details of the conversation. Default is `FULL`.',
            in: 'query',
            name: 'view',
            schema: { enum: ['CONVERSATION_VIEW_UNSPECIFIED', 'FULL', 'BASIC'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the view to get.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1ViewSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes a view.',
  operationId: 'contactcenterinsights.projects.locations.views.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "If set to true, all of this conversation's analyses will also be deleted. Otherwise, the request will only succeed if the conversation has no analyses.",
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The name of the view to delete.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Updates a view.',
  operationId: 'contactcenterinsights.projects.locations.views.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to be updated.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Immutable. The resource name of the view. Format: projects/{project}/locations/{location}/views/{view}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1ViewSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1ViewSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'contactcenterinsights.projects.locations.operations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'contactcenterinsights.projects.locations.operations.cancel',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDeployRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:deploy',
  tags: ['projects'],
  description:
    'Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.',
  operationId: 'contactcenterinsights.projects.locations.issueModels.deploy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The issue model to deploy.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1DeployIssueModelRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameUndeployRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:undeploy',
  tags: ['projects'],
  description:
    'Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.',
  operationId: 'contactcenterinsights.projects.locations.issueModels.undeploy',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: 'Required. The issue model to undeploy.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1UndeployIssueModelRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentAnalysesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/analyses',
  tags: ['projects'],
  description: 'Lists analyses.',
  operationId: 'contactcenterinsights.projects.locations.conversations.analyses.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of analyses to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The value returned by the last `ListAnalysesResponse`; indicates that this is a continuation of a prior `ListAnalyses` call and the system should return the next page of data.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the analyses.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1ListAnalysesResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentAnalysesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/analyses',
  tags: ['projects'],
  description:
    'Creates an analysis. The long running operation is done when the analysis has completed.',
  operationId: 'contactcenterinsights.projects.locations.conversations.analyses.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the analysis.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1AnalysisSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentConversationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/conversations',
  tags: ['projects'],
  description: 'Lists conversations.',
  operationId: 'contactcenterinsights.projects.locations.conversations.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to reduce results to a specific subset. Useful for querying conversations with specific properties.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of conversations to return in the response. A valid page size ranges from 0 to 1,000 inclusive. If the page size is zero or unspecified, a default page size of 100 will be chosen. Note that a call might return fewer results than the requested page size.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The value returned by the last `ListConversationsResponse`. This value indicates that this is a continuation of a prior `ListConversations` call and that the system should return the next page of data.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['CONVERSATION_VIEW_UNSPECIFIED', 'FULL', 'BASIC'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The level of details of the conversation. Default is `BASIC`.',
            in: 'query',
            name: 'view',
            schema: { enum: ['CONVERSATION_VIEW_UNSPECIFIED', 'FULL', 'BASIC'], type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the conversation.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1ListConversationsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentConversationsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/conversations',
  tags: ['projects'],
  description: 'Creates a conversation.',
  operationId: 'contactcenterinsights.projects.locations.conversations.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      conversationId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "A unique ID for the new conversation. This ID will become the final component of the conversation's resource name. If no ID is specified, a server-generated ID will be used. This value should be 4-64 characters and must match the regular expression `^[a-z0-9-]{4,64}$`. Valid characters are `a-z-`",
            in: 'query',
            name: 'conversationId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the conversation.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1ConversationSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1ConversationSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentConversationsBulkAnalyzeRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/conversations:bulkAnalyze',
  tags: ['projects'],
  description: 'Analyzes multiple conversations in a single request.',
  operationId: 'contactcenterinsights.projects.locations.conversations.bulkAnalyze',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource to create analyses in.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentConversationsIngestRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/conversations:ingest',
  tags: ['projects'],
  description: "Imports conversations and processes them according to the user's configuration.",
  operationId: 'contactcenterinsights.projects.locations.conversations.ingest',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource for new conversations.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1IngestConversationsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentConversationsUploadRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/conversations:upload',
  tags: ['projects'],
  description:
    'Create a longrunning conversation upload operation. This method differs from CreateConversation by allowing audio transcription and optional DLP redaction.',
  operationId: 'contactcenterinsights.projects.locations.conversations.upload',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the conversation.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1UploadConversationRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentInsightsdataExportRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/insightsdata:export',
  tags: ['projects'],
  description: 'Export insights data to a destination defined in the request body.',
  operationId: 'contactcenterinsights.projects.locations.insightsdata.export',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource to export data from.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1ExportInsightsDataRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentIssueModelsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/issueModels',
  tags: ['projects'],
  description: 'Lists issue models.',
  operationId: 'contactcenterinsights.projects.locations.issueModels.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the issue model.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1ListIssueModelsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentIssueModelsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/issueModels',
  tags: ['projects'],
  description: 'Creates an issue model.',
  operationId: 'contactcenterinsights.projects.locations.issueModels.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the issue model.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1IssueModelSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentIssuesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/issues',
  tags: ['projects'],
  description: 'Lists issues.',
  operationId: 'contactcenterinsights.projects.locations.issueModels.issues.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the issue.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1ListIssuesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentPhraseMatchersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/phraseMatchers',
  tags: ['projects'],
  description: 'Lists phrase matchers.',
  operationId: 'contactcenterinsights.projects.locations.phraseMatchers.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter to reduce results to a specific subset. Useful for querying phrase matchers with specific properties.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of phrase matchers to return in the response. If this value is zero, the service will select a default size. A call might return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The value returned by the last `ListPhraseMatchersResponse`. This value indicates that this is a continuation of a prior `ListPhraseMatchers` call and that the system should return the next page of data.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the phrase matcher.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentPhraseMatchersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/phraseMatchers',
  tags: ['projects'],
  description: 'Creates a phrase matcher.',
  operationId: 'contactcenterinsights.projects.locations.phraseMatchers.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the phrase matcher. Required. The location to create a phrase matcher for. Format: `projects//locations/` or `projects//locations/`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1PhraseMatcherSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1PhraseMatcherSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentViewsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/views',
  tags: ['projects'],
  description: 'Lists views.',
  operationId: 'contactcenterinsights.projects.locations.views.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of views to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The value returned by the last `ListViewsResponse`; indicates that this is a continuation of a prior `ListViews` call and the system should return the next page of data.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. The parent resource of the views.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudContactcenterinsightsV1ListViewsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentViewsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/views',
  tags: ['projects'],
  description: 'Creates a view.',
  operationId: 'contactcenterinsights.projects.locations.views.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent resource of the view. Required. The location to create a view for. Format: `projects//locations/` or `projects//locations/`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1ViewSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudContactcenterinsightsV1ViewSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
