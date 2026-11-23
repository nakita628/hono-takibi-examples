type GoogleCloudDialogflowCxV3beta1IntentCoverageIntent = {
  covered?: boolean | undefined
  intent?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1IntentCoverage = {
  coverageScore?: number | undefined
  intents?: GoogleCloudDialogflowCxV3beta1IntentCoverageIntent[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction = { [x: string]: unknown }
type GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff = {
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment = {
  allowPlaybackInterruption?: boolean | undefined
  audio?: string | undefined
  uri?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio = {
  segments?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText = {
  allowPlaybackInterruption?: boolean | undefined
  ssml?: string | undefined
  text?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio = {
  allowPlaybackInterruption?: boolean | undefined
  audioUri?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall = {
  phoneNumber?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessageText = {
  allowPlaybackInterruption?: boolean | undefined
  text?: string[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ResponseMessage = {
  channel?: string | undefined
  conversationSuccess?: GoogleCloudDialogflowCxV3beta1ResponseMessageConversationSuccess | undefined
  endInteraction?: GoogleCloudDialogflowCxV3beta1ResponseMessageEndInteraction | undefined
  liveAgentHandoff?: GoogleCloudDialogflowCxV3beta1ResponseMessageLiveAgentHandoff | undefined
  mixedAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudio | undefined
  outputAudioText?: GoogleCloudDialogflowCxV3beta1ResponseMessageOutputAudioText | undefined
  payload?: { [x: string]: { [x: string]: unknown } } | undefined
  playAudio?: GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio | undefined
  telephonyTransferCall?:
    | GoogleCloudDialogflowCxV3beta1ResponseMessageTelephonyTransferCall
    | undefined
  text?: GoogleCloudDialogflowCxV3beta1ResponseMessageText | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent = {
  additionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases | undefined
  message?: GoogleCloudDialogflowCxV3beta1ResponseMessage | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase = {
  caseContent?:
    | GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent[]
    | undefined
  condition?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases = {
  cases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase[] | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction = {
  parameter?: string | undefined
  value?: { [x: string]: unknown } | undefined
}
type GoogleCloudDialogflowCxV3beta1Fulfillment = {
  conditionalCases?: GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases[] | undefined
  messages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[] | undefined
  returnPartialResponses?: boolean | undefined
  setParameterActions?: GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction[] | undefined
  tag?: string | undefined
  webhook?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionRoute = {
  condition?: string | undefined
  intent?: string | undefined
  name?: string | undefined
  targetFlow?: string | undefined
  targetPage?: string | undefined
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroup = {
  displayName?: string | undefined
  name?: string | undefined
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[] | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition = {
  covered?: boolean | undefined
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage = {
  coverageScore?: number | undefined
  routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup | undefined
  transitions?:
    | GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[]
    | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage = {
  coverageScore?: number | undefined
  coverages?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage[] | undefined
}
type GoogleCloudDialogflowCxV3beta1EventHandler = {
  event?: string | undefined
  name?: string | undefined
  targetFlow?: string | undefined
  targetPage?: string | undefined
  triggerFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment | undefined
}
type GoogleCloudDialogflowCxV3beta1NluSettings = {
  classificationThreshold?: number | undefined
  modelTrainingMode?:
    | 'MODEL_TRAINING_MODE_UNSPECIFIED'
    | 'MODEL_TRAINING_MODE_AUTOMATIC'
    | 'MODEL_TRAINING_MODE_MANUAL'
    | undefined
  modelType?: 'MODEL_TYPE_UNSPECIFIED' | 'MODEL_TYPE_STANDARD' | 'MODEL_TYPE_ADVANCED' | undefined
}
type GoogleCloudDialogflowCxV3beta1Flow = {
  description?: string | undefined
  displayName?: string | undefined
  eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[] | undefined
  name?: string | undefined
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings | undefined
  transitionRouteGroups?: string[] | undefined
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[] | undefined
}
type GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior = {
  initialPromptFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment | undefined
  repromptEventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[] | undefined
}
type GoogleCloudDialogflowCxV3beta1FormParameter = {
  defaultValue?: { [x: string]: unknown } | undefined
  displayName?: string | undefined
  entityType?: string | undefined
  fillBehavior?: GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior | undefined
  isList?: boolean | undefined
  redact?: boolean | undefined
  required?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1Form = {
  parameters?: GoogleCloudDialogflowCxV3beta1FormParameter[] | undefined
}
type GoogleCloudDialogflowCxV3beta1Page = {
  displayName?: string | undefined
  entryFulfillment?: GoogleCloudDialogflowCxV3beta1Fulfillment | undefined
  eventHandlers?: GoogleCloudDialogflowCxV3beta1EventHandler[] | undefined
  form?: GoogleCloudDialogflowCxV3beta1Form | undefined
  name?: string | undefined
  transitionRouteGroups?: string[] | undefined
  transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[] | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode = {
  flow?: GoogleCloudDialogflowCxV3beta1Flow | undefined
  page?: GoogleCloudDialogflowCxV3beta1Page | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition = {
  covered?: boolean | undefined
  eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler | undefined
  index?: number | undefined
  source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode | undefined
  target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode | undefined
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute | undefined
}
type GoogleCloudDialogflowCxV3beta1TransitionCoverage = {
  coverageScore?: number | undefined
  transitions?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition[] | undefined
}
type GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse = {
  agent?: string | undefined
  intentCoverage?: GoogleCloudDialogflowCxV3beta1IntentCoverage | undefined
  routeGroupCoverage?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverage | undefined
  transitionCoverage?: GoogleCloudDialogflowCxV3beta1TransitionCoverage | undefined
}
type GoogleCloudDialogflowCxV3beta1CompareVersionsRequest = {
  languageCode?: string | undefined
  targetVersion?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1CompareVersionsResponse = {
  baseVersionContentJson?: string | undefined
  compareTime?: string | undefined
  targetVersionContentJson?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1DeployFlowRequest = { flowVersion?: string | undefined }
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
type GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest = { [x: string]: unknown }
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings = {
  audioExportPattern?: string | undefined
  audioFormat?: 'AUDIO_FORMAT_UNSPECIFIED' | 'MULAW' | 'MP3' | 'OGG' | undefined
  enableAudioRedaction?: boolean | undefined
  gcsBucket?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings = {
  enableInsightsExport?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1SecuritySettings = {
  audioExportSettings?:
    | GoogleCloudDialogflowCxV3beta1SecuritySettingsAudioExportSettings
    | undefined
  deidentifyTemplate?: string | undefined
  displayName?: string | undefined
  insightsExportSettings?:
    | GoogleCloudDialogflowCxV3beta1SecuritySettingsInsightsExportSettings
    | undefined
  inspectTemplate?: string | undefined
  name?: string | undefined
  purgeDataTypes?: ('PURGE_DATA_TYPE_UNSPECIFIED' | 'DIALOGFLOW_HISTORY')[] | undefined
  redactionScope?: 'REDACTION_SCOPE_UNSPECIFIED' | 'REDACT_DISK_STORAGE' | undefined
  redactionStrategy?: 'REDACTION_STRATEGY_UNSPECIFIED' | 'REDACT_WITH_SERVICE' | undefined
  retentionWindowDays?: number | undefined
}
type GoogleCloudLocationLocation = {
  displayName?: string | undefined
  labels?: { [x: string]: string } | undefined
  locationId?: string | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
}
type GoogleCloudLocationListLocationsResponse = {
  locations?: GoogleCloudLocationLocation[] | undefined
  nextPageToken?: string | undefined
}
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ExportFlowRequest = {
  flowUri?: string | undefined
  includeReferencedFlows?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1LoadVersionRequest = {
  allowOverrideAgentResources?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig = {
  enableContinuousRun?: boolean | undefined
  enablePredeploymentRun?: boolean | undefined
  testCases?: string[] | undefined
}
type GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig = { version?: string | undefined }
type GoogleCloudDialogflowCxV3beta1WebhookGenericWebService = {
  allowedCaCerts?: string[] | undefined
  password?: string | undefined
  requestHeaders?: { [x: string]: string } | undefined
  uri?: string | undefined
  username?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig = {
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService | undefined
  service?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1Webhook = {
  disabled?: boolean | undefined
  displayName?: string | undefined
  genericWebService?: GoogleCloudDialogflowCxV3beta1WebhookGenericWebService | undefined
  name?: string | undefined
  serviceDirectory?: GoogleCloudDialogflowCxV3beta1WebhookServiceDirectoryConfig | undefined
  timeout?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig = {
  webhookOverrides?: GoogleCloudDialogflowCxV3beta1Webhook[] | undefined
}
type GoogleCloudDialogflowCxV3beta1Environment = {
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  testCasesConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentTestCasesConfig | undefined
  updateTime?: string | undefined
  versionConfigs?: GoogleCloudDialogflowCxV3beta1EnvironmentVersionConfig[] | undefined
  webhookConfig?: GoogleCloudDialogflowCxV3beta1EnvironmentWebhookConfig | undefined
}
type GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse = {
  environments?: GoogleCloudDialogflowCxV3beta1Environment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1RestoreAgentRequest = {
  agentContent?: string | undefined
  agentUri?: string | undefined
  restoreOption?: 'RESTORE_OPTION_UNSPECIFIED' | 'KEEP' | 'FALLBACK' | undefined
}
type GoogleCloudDialogflowCxV3beta1RunTestCaseRequest = { environment?: string | undefined }
type GoogleCloudDialogflowCxV3beta1StartExperimentRequest = { [x: string]: unknown }
type GoogleCloudDialogflowCxV3beta1VersionVariantsVariant = {
  isControlGroup?: boolean | undefined
  trafficAllocation?: number | undefined
  version?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1VersionVariants = {
  variants?: GoogleCloudDialogflowCxV3beta1VersionVariantsVariant[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ExperimentDefinition = {
  condition?: string | undefined
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants | undefined
}
type GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval = {
  confidenceLevel?: number | undefined
  lowerBound?: number | undefined
  ratio?: number | undefined
  upperBound?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1ExperimentResultMetric = {
  confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval | undefined
  count?: number | undefined
  countType?:
    | 'COUNT_TYPE_UNSPECIFIED'
    | 'TOTAL_NO_MATCH_COUNT'
    | 'TOTAL_TURN_COUNT'
    | 'AVERAGE_TURN_COUNT'
    | undefined
  ratio?: number | undefined
  type?:
    | 'METRIC_UNSPECIFIED'
    | 'CONTAINED_SESSION_NO_CALLBACK_RATE'
    | 'LIVE_AGENT_HANDOFF_RATE'
    | 'CALLBACK_SESSION_RATE'
    | 'ABANDONED_SESSION_RATE'
    | 'SESSION_END_RATE'
    | undefined
}
type GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics = {
  metrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetric[] | undefined
  sessionCount?: number | undefined
  version?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ExperimentResult = {
  lastUpdateTime?: string | undefined
  versionMetrics?: GoogleCloudDialogflowCxV3beta1ExperimentResultVersionMetrics[] | undefined
}
type GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep = {
  displayName?: string | undefined
  minDuration?: string | undefined
  trafficPercent?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1RolloutConfig = {
  failureCondition?: string | undefined
  rolloutCondition?: string | undefined
  rolloutSteps?: GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep[] | undefined
}
type GoogleCloudDialogflowCxV3beta1RolloutState = {
  startTime?: string | undefined
  step?: string | undefined
  stepIndex?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1VariantsHistory = {
  updateTime?: string | undefined
  versionVariants?: GoogleCloudDialogflowCxV3beta1VersionVariants | undefined
}
type GoogleCloudDialogflowCxV3beta1Experiment = {
  createTime?: string | undefined
  definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition | undefined
  description?: string | undefined
  displayName?: string | undefined
  endTime?: string | undefined
  experimentLength?: string | undefined
  lastUpdateTime?: string | undefined
  name?: string | undefined
  result?: GoogleCloudDialogflowCxV3beta1ExperimentResult | undefined
  rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig | undefined
  rolloutFailureReason?: string | undefined
  rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'DRAFT' | 'RUNNING' | 'DONE' | 'ROLLOUT_FAILED' | undefined
  variantsHistory?: GoogleCloudDialogflowCxV3beta1VariantsHistory[] | undefined
}
type GoogleCloudDialogflowCxV3beta1StopExperimentRequest = { [x: string]: unknown }
type GoogleCloudDialogflowCxV3beta1TrainFlowRequest = { [x: string]: unknown }
type GoogleCloudDialogflowCxV3beta1ValidateFlowRequest = { languageCode?: string | undefined }
type GoogleCloudDialogflowCxV3beta1ResourceName = {
  displayName?: string | undefined
  name?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ValidationMessage = {
  detail?: string | undefined
  resourceNames?: GoogleCloudDialogflowCxV3beta1ResourceName[] | undefined
  resourceType?:
    | 'RESOURCE_TYPE_UNSPECIFIED'
    | 'AGENT'
    | 'INTENT'
    | 'INTENT_TRAINING_PHRASE'
    | 'INTENT_PARAMETER'
    | 'INTENTS'
    | 'INTENT_TRAINING_PHRASES'
    | 'ENTITY_TYPE'
    | 'ENTITY_TYPES'
    | 'WEBHOOK'
    | 'FLOW'
    | 'PAGE'
    | 'PAGES'
    | 'TRANSITION_ROUTE_GROUP'
    | undefined
  resources?: string[] | undefined
  severity?: 'SEVERITY_UNSPECIFIED' | 'INFO' | 'WARNING' | 'ERROR' | undefined
}
type GoogleCloudDialogflowCxV3beta1FlowValidationResult = {
  name?: string | undefined
  updateTime?: string | undefined
  validationMessages?: GoogleCloudDialogflowCxV3beta1ValidationMessage[] | undefined
}
type GoogleCloudDialogflowCxV3beta1GcsDestination = { uri?: string | undefined }
type GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings = {
  enableInteractionLogging?: boolean | undefined
  enableStackdriverLogging?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1AdvancedSettings = {
  audioExportGcsDestination?: GoogleCloudDialogflowCxV3beta1GcsDestination | undefined
  loggingSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettingsLoggingSettings | undefined
}
type GoogleCloudDialogflowCxV3beta1SpeechToTextSettings = {
  enableSpeechAdaptation?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1VoiceSelectionParams = {
  name?: string | undefined
  ssmlGender?:
    | 'SSML_VOICE_GENDER_UNSPECIFIED'
    | 'SSML_VOICE_GENDER_MALE'
    | 'SSML_VOICE_GENDER_FEMALE'
    | 'SSML_VOICE_GENDER_NEUTRAL'
    | undefined
}
type GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig = {
  effectsProfileId?: string[] | undefined
  pitch?: number | undefined
  speakingRate?: number | undefined
  voice?: GoogleCloudDialogflowCxV3beta1VoiceSelectionParams | undefined
  volumeGainDb?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1TextToSpeechSettings = {
  synthesizeSpeechConfigs?:
    | { [x: string]: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig }
    | undefined
}
type GoogleCloudDialogflowCxV3beta1Agent = {
  advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings | undefined
  avatarUri?: string | undefined
  defaultLanguageCode?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  enableSpellCorrection?: boolean | undefined
  enableStackdriverLogging?: boolean | undefined
  locked?: boolean | undefined
  name?: string | undefined
  securitySettings?: string | undefined
  speechToTextSettings?: GoogleCloudDialogflowCxV3beta1SpeechToTextSettings | undefined
  startFlow?: string | undefined
  supportedLanguageCodes?: string[] | undefined
  textToSpeechSettings?: GoogleCloudDialogflowCxV3beta1TextToSpeechSettings | undefined
  timeZone?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListAgentsResponse = {
  agents?: GoogleCloudDialogflowCxV3beta1Agent[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1Changelog = {
  action?: string | undefined
  createTime?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  resource?: string | undefined
  type?: string | undefined
  userEmail?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListChangelogsResponse = {
  changelogs?: GoogleCloudDialogflowCxV3beta1Changelog[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ContinuousTestResult = {
  name?: string | undefined
  result?: 'AGGREGATED_TEST_RESULT_UNSPECIFIED' | 'PASSED' | 'FAILED' | undefined
  runTime?: string | undefined
  testCaseResults?: string[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse = {
  continuousTestResults?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1DeploymentResult = {
  deploymentTestResults?: string[] | undefined
  experiment?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1Deployment = {
  endTime?: string | undefined
  flowVersion?: string | undefined
  name?: string | undefined
  result?: GoogleCloudDialogflowCxV3beta1DeploymentResult | undefined
  startTime?: string | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | undefined
}
type GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse = {
  deployments?: GoogleCloudDialogflowCxV3beta1Deployment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1EntityTypeEntity = {
  synonyms?: string[] | undefined
  value?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1SessionEntityType = {
  entities?: GoogleCloudDialogflowCxV3beta1EntityTypeEntity[] | undefined
  entityOverrideMode?:
    | 'ENTITY_OVERRIDE_MODE_UNSPECIFIED'
    | 'ENTITY_OVERRIDE_MODE_OVERRIDE'
    | 'ENTITY_OVERRIDE_MODE_SUPPLEMENT'
    | undefined
  name?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse = {
  nextPageToken?: string | undefined
  sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse = {
  environments?: GoogleCloudDialogflowCxV3beta1Environment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListExperimentsResponse = {
  experiments?: GoogleCloudDialogflowCxV3beta1Experiment[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListFlowsResponse = {
  flows?: GoogleCloudDialogflowCxV3beta1Flow[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ImportFlowRequest = {
  flowContent?: string | undefined
  flowUri?: string | undefined
  importOption?: 'IMPORT_OPTION_UNSPECIFIED' | 'KEEP' | 'FALLBACK' | undefined
}
type GoogleCloudDialogflowCxV3beta1IntentParameter = {
  entityType?: string | undefined
  id?: string | undefined
  isList?: boolean | undefined
  redact?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart = {
  parameterId?: string | undefined
  text?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase = {
  id?: string | undefined
  parts?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart[] | undefined
  repeatCount?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1Intent = {
  description?: string | undefined
  displayName?: string | undefined
  isFallback?: boolean | undefined
  labels?: { [x: string]: string } | undefined
  name?: string | undefined
  parameters?: GoogleCloudDialogflowCxV3beta1IntentParameter[] | undefined
  priority?: number | undefined
  trainingPhrases?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ListIntentsResponse = {
  intents?: GoogleCloudDialogflowCxV3beta1Intent[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListPagesResponse = {
  nextPageToken?: string | undefined
  pages?: GoogleCloudDialogflowCxV3beta1Page[] | undefined
}
type GoogleCloudDialogflowCxV3beta1InputAudioConfig = {
  audioEncoding?:
    | 'AUDIO_ENCODING_UNSPECIFIED'
    | 'AUDIO_ENCODING_LINEAR_16'
    | 'AUDIO_ENCODING_FLAC'
    | 'AUDIO_ENCODING_MULAW'
    | 'AUDIO_ENCODING_AMR'
    | 'AUDIO_ENCODING_AMR_WB'
    | 'AUDIO_ENCODING_OGG_OPUS'
    | 'AUDIO_ENCODING_SPEEX_WITH_HEADER_BYTE'
    | undefined
  enableWordInfo?: boolean | undefined
  model?: string | undefined
  modelVariant?:
    | 'SPEECH_MODEL_VARIANT_UNSPECIFIED'
    | 'USE_BEST_AVAILABLE'
    | 'USE_STANDARD'
    | 'USE_ENHANCED'
    | undefined
  phraseHints?: string[] | undefined
  sampleRateHertz?: number | undefined
  singleUtterance?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1AudioInput = {
  audio?: string | undefined
  config?: GoogleCloudDialogflowCxV3beta1InputAudioConfig | undefined
}
type GoogleCloudDialogflowCxV3beta1DtmfInput = {
  digits?: string | undefined
  finishDigit?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1EventInput = { event?: string | undefined }
type GoogleCloudDialogflowCxV3beta1IntentInput = { intent?: string | undefined }
type GoogleCloudDialogflowCxV3beta1TextInput = { text?: string | undefined }
type GoogleCloudDialogflowCxV3beta1QueryInput = {
  audio?: GoogleCloudDialogflowCxV3beta1AudioInput | undefined
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput | undefined
  event?: GoogleCloudDialogflowCxV3beta1EventInput | undefined
  intent?: GoogleCloudDialogflowCxV3beta1IntentInput | undefined
  languageCode?: string | undefined
  text?: GoogleCloudDialogflowCxV3beta1TextInput | undefined
}
type GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput = {
  enableSentimentAnalysis?: boolean | undefined
  injectedParameters?: { [x: string]: { [x: string]: unknown } } | undefined
  input?: GoogleCloudDialogflowCxV3beta1QueryInput | undefined
  isWebhookEnabled?: boolean | undefined
}
type GoogleCloudDialogflowCxV3beta1TestRunDifference = {
  description?: string | undefined
  type?: 'DIFF_TYPE_UNSPECIFIED' | 'INTENT' | 'PAGE' | 'PARAMETERS' | 'UTTERANCE' | undefined
}
type GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput = {
  currentPage?: GoogleCloudDialogflowCxV3beta1Page | undefined
  diagnosticInfo?: { [x: string]: { [x: string]: unknown } } | undefined
  differences?: GoogleCloudDialogflowCxV3beta1TestRunDifference[] | undefined
  sessionParameters?: { [x: string]: { [x: string]: unknown } } | undefined
  status?: GoogleRpcStatus | undefined
  textResponses?: GoogleCloudDialogflowCxV3beta1ResponseMessageText[] | undefined
  triggeredIntent?: GoogleCloudDialogflowCxV3beta1Intent | undefined
}
type GoogleCloudDialogflowCxV3beta1ConversationTurn = {
  userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput | undefined
  virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput | undefined
}
type GoogleCloudDialogflowCxV3beta1TestCaseResult = {
  conversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[] | undefined
  environment?: string | undefined
  name?: string | undefined
  testResult?: 'TEST_RESULT_UNSPECIFIED' | 'PASSED' | 'FAILED' | undefined
  testTime?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse = {
  nextPageToken?: string | undefined
  testCaseResults?: GoogleCloudDialogflowCxV3beta1TestCaseResult[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse = {
  nextPageToken?: string | undefined
  securitySettings?: GoogleCloudDialogflowCxV3beta1SecuritySettings[] | undefined
}
type GoogleCloudDialogflowCxV3beta1TestConfig = {
  flow?: string | undefined
  page?: string | undefined
  trackingParameters?: string[] | undefined
}
type GoogleCloudDialogflowCxV3beta1TestCase = {
  creationTime?: string | undefined
  displayName?: string | undefined
  lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult | undefined
  name?: string | undefined
  notes?: string | undefined
  tags?: string[] | undefined
  testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[] | undefined
  testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig | undefined
}
type GoogleCloudDialogflowCxV3beta1ListTestCasesResponse = {
  nextPageToken?: string | undefined
  testCases?: GoogleCloudDialogflowCxV3beta1TestCase[] | undefined
}
type GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest = { names?: string[] | undefined }
type GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest = {
  environment?: string | undefined
  testCases?: string[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest = {
  dataFormat?: 'DATA_FORMAT_UNSPECIFIED' | 'BLOB' | 'JSON' | undefined
  filter?: string | undefined
  gcsUri?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest = {
  content?: string | undefined
  gcsUri?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse = {
  nextPageToken?: string | undefined
  transitionRouteGroups?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[] | undefined
}
type GoogleCloudDialogflowCxV3beta1Version = {
  createTime?: string | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
  nluSettings?: GoogleCloudDialogflowCxV3beta1NluSettings | undefined
  state?: 'STATE_UNSPECIFIED' | 'RUNNING' | 'SUCCEEDED' | 'FAILED' | undefined
}
type GoogleCloudDialogflowCxV3beta1ListVersionsResponse = {
  nextPageToken?: string | undefined
  versions?: GoogleCloudDialogflowCxV3beta1Version[] | undefined
}
type GoogleCloudDialogflowCxV3beta1ListWebhooksResponse = {
  nextPageToken?: string | undefined
  webhooks?: GoogleCloudDialogflowCxV3beta1Webhook[] | undefined
}
type GoogleCloudDialogflowCxV3beta1OutputAudioConfig = {
  audioEncoding?:
    | 'OUTPUT_AUDIO_ENCODING_UNSPECIFIED'
    | 'OUTPUT_AUDIO_ENCODING_LINEAR_16'
    | 'OUTPUT_AUDIO_ENCODING_MP3'
    | 'OUTPUT_AUDIO_ENCODING_MP3_64_KBPS'
    | 'OUTPUT_AUDIO_ENCODING_OGG_OPUS'
    | 'OUTPUT_AUDIO_ENCODING_MULAW'
    | undefined
  sampleRateHertz?: number | undefined
  synthesizeSpeechConfig?: GoogleCloudDialogflowCxV3beta1SynthesizeSpeechConfig | undefined
}
type GoogleTypeLatLng = { latitude?: number | undefined; longitude?: number | undefined }
type GoogleCloudDialogflowCxV3beta1QueryParameters = {
  analyzeQueryTextSentiment?: boolean | undefined
  channel?: string | undefined
  currentPage?: string | undefined
  disableWebhook?: boolean | undefined
  flowVersions?: string[] | undefined
  geoLocation?: GoogleTypeLatLng | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  payload?: { [x: string]: { [x: string]: unknown } } | undefined
  sessionEntityTypes?: GoogleCloudDialogflowCxV3beta1SessionEntityType[] | undefined
  timeZone?: string | undefined
  webhookHeaders?: { [x: string]: string } | undefined
}
type GoogleCloudDialogflowCxV3beta1DetectIntentRequest = {
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig | undefined
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput | undefined
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters | undefined
}
type GoogleCloudDialogflowCxV3beta1Match = {
  confidence?: number | undefined
  event?: string | undefined
  intent?: GoogleCloudDialogflowCxV3beta1Intent | undefined
  matchType?:
    | 'MATCH_TYPE_UNSPECIFIED'
    | 'INTENT'
    | 'DIRECT_INTENT'
    | 'PARAMETER_FILLING'
    | 'NO_MATCH'
    | 'NO_INPUT'
    | 'EVENT'
    | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  resolvedInput?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult = {
  magnitude?: number | undefined
  score?: number | undefined
}
type GoogleCloudDialogflowCxV3beta1QueryResult = {
  currentPage?: GoogleCloudDialogflowCxV3beta1Page | undefined
  diagnosticInfo?: { [x: string]: { [x: string]: unknown } } | undefined
  dtmf?: GoogleCloudDialogflowCxV3beta1DtmfInput | undefined
  intent?: GoogleCloudDialogflowCxV3beta1Intent | undefined
  intentDetectionConfidence?: number | undefined
  languageCode?: string | undefined
  match?: GoogleCloudDialogflowCxV3beta1Match | undefined
  parameters?: { [x: string]: { [x: string]: unknown } } | undefined
  responseMessages?: GoogleCloudDialogflowCxV3beta1ResponseMessage[] | undefined
  sentimentAnalysisResult?: GoogleCloudDialogflowCxV3beta1SentimentAnalysisResult | undefined
  text?: string | undefined
  transcript?: string | undefined
  triggerEvent?: string | undefined
  triggerIntent?: string | undefined
  webhookPayloads?: { [x: string]: { [x: string]: unknown } }[] | undefined
  webhookStatuses?: GoogleRpcStatus[] | undefined
}
type GoogleCloudDialogflowCxV3beta1DetectIntentResponse = {
  allowCancellation?: boolean | undefined
  outputAudio?: string | undefined
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig | undefined
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult | undefined
  responseId?: string | undefined
  responseType?: 'RESPONSE_TYPE_UNSPECIFIED' | 'PARTIAL' | 'FINAL' | undefined
}
type GoogleCloudDialogflowCxV3beta1MatchIntentRequest = {
  persistParameterChanges?: boolean | undefined
  queryInput?: GoogleCloudDialogflowCxV3beta1QueryInput | undefined
  queryParams?: GoogleCloudDialogflowCxV3beta1QueryParameters | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillIntentRequest = {
  match?: GoogleCloudDialogflowCxV3beta1Match | undefined
  matchIntentRequest?: GoogleCloudDialogflowCxV3beta1MatchIntentRequest | undefined
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig | undefined
}
type GoogleCloudDialogflowCxV3beta1FulfillIntentResponse = {
  outputAudio?: string | undefined
  outputAudioConfig?: GoogleCloudDialogflowCxV3beta1OutputAudioConfig | undefined
  queryResult?: GoogleCloudDialogflowCxV3beta1QueryResult | undefined
  responseId?: string | undefined
}
type GoogleCloudDialogflowCxV3beta1MatchIntentResponse = {
  currentPage?: GoogleCloudDialogflowCxV3beta1Page | undefined
  matches?: GoogleCloudDialogflowCxV3beta1Match[] | undefined
  text?: string | undefined
  transcript?: string | undefined
  triggerEvent?: string | undefined
  triggerIntent?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v3beta1/:agent/testCases:calculateCoverage': {
      $get: {
        input: { param: { agent: string } } & {
          query: {
            type?:
              | 'COVERAGE_TYPE_UNSPECIFIED'
              | 'INTENT'
              | 'PAGE_TRANSITION'
              | 'TRANSITION_ROUTE_GROUP'
              | undefined
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
        output: GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:baseVersion:compareVersions': {
      $post: {
        input: { param: { baseVersion: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1CompareVersionsRequest }
        output: GoogleCloudDialogflowCxV3beta1CompareVersionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:environment:deployFlow': {
      $post: {
        input: { param: { environment: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1DeployFlowRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:environment:runContinuousTest': {
      $post: {
        input: { param: { environment: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1RunContinuousTestRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name': {
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
            languageCode?: string | undefined
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
        output: GoogleLongrunningOperation
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
        } & { json: GoogleCloudDialogflowCxV3beta1SecuritySettings }
        output: GoogleCloudDialogflowCxV3beta1SecuritySettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name/locations': {
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
        output: GoogleCloudLocationListLocationsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name/operations': {
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
    '/v3beta1/:name:cancel': {
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
    '/v3beta1/:name:export': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1ExportFlowRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:load': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1LoadVersionRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:lookupEnvironmentHistory': {
      $get: {
        input: { param: { name: string } } & {
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
        output: GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:restore': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1RestoreAgentRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:run': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1RunTestCaseRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:start': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1StartExperimentRequest }
        output: GoogleCloudDialogflowCxV3beta1Experiment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:stop': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1StopExperimentRequest }
        output: GoogleCloudDialogflowCxV3beta1Experiment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:train': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1TrainFlowRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:name:validate': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1ValidateFlowRequest }
        output: GoogleCloudDialogflowCxV3beta1FlowValidationResult
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/agents': {
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
        output: GoogleCloudDialogflowCxV3beta1ListAgentsResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1Agent }
        output: GoogleCloudDialogflowCxV3beta1Agent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/changelogs': {
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
        output: GoogleCloudDialogflowCxV3beta1ListChangelogsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/continuousTestResults': {
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
        output: GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/deployments': {
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
        output: GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/entityTypes': {
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
        output: GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        } & { json: GoogleCloudDialogflowCxV3beta1SessionEntityType }
        output: GoogleCloudDialogflowCxV3beta1SessionEntityType
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/environments': {
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
        output: GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1Environment }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/experiments': {
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
        output: GoogleCloudDialogflowCxV3beta1ListExperimentsResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1Experiment }
        output: GoogleCloudDialogflowCxV3beta1Experiment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/flows': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: GoogleCloudDialogflowCxV3beta1ListFlowsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        } & { json: GoogleCloudDialogflowCxV3beta1Flow }
        output: GoogleCloudDialogflowCxV3beta1Flow
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/flows:import': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1ImportFlowRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/intents': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            intentView?:
              | 'INTENT_VIEW_UNSPECIFIED'
              | 'INTENT_VIEW_PARTIAL'
              | 'INTENT_VIEW_FULL'
              | undefined
            languageCode?: string | undefined
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
        output: GoogleCloudDialogflowCxV3beta1ListIntentsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        } & { json: GoogleCloudDialogflowCxV3beta1Intent }
        output: GoogleCloudDialogflowCxV3beta1Intent
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/pages': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: GoogleCloudDialogflowCxV3beta1ListPagesResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        } & { json: GoogleCloudDialogflowCxV3beta1Page }
        output: GoogleCloudDialogflowCxV3beta1Page
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/results': {
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
        output: GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/securitySettings': {
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
        output: GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1SecuritySettings }
        output: GoogleCloudDialogflowCxV3beta1SecuritySettings
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/testCases': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'TEST_CASE_VIEW_UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: GoogleCloudDialogflowCxV3beta1ListTestCasesResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1TestCase }
        output: GoogleCloudDialogflowCxV3beta1TestCase
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/testCases:batchDelete': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/testCases:batchRun': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/testCases:export': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1ExportTestCasesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/testCases:import': {
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
        } & { json: GoogleCloudDialogflowCxV3beta1ImportTestCasesRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/transitionRouteGroups': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        } & { json: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup }
        output: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/versions': {
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
        output: GoogleCloudDialogflowCxV3beta1ListVersionsResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1Version }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:parent/webhooks': {
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
        output: GoogleCloudDialogflowCxV3beta1ListWebhooksResponse
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
        } & { json: GoogleCloudDialogflowCxV3beta1Webhook }
        output: GoogleCloudDialogflowCxV3beta1Webhook
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:session:detectIntent': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1DetectIntentRequest }
        output: GoogleCloudDialogflowCxV3beta1DetectIntentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:session:fulfillIntent': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1FulfillIntentRequest }
        output: GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3beta1/:session:matchIntent': {
      $post: {
        input: { param: { session: string } } & {
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
        } & { json: GoogleCloudDialogflowCxV3beta1MatchIntentRequest }
        output: GoogleCloudDialogflowCxV3beta1MatchIntentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
