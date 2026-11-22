type AgentThinkModelsV1ResponseModelsItemsOneOf0Id =
  | 'gpt-5'
  | 'gpt-5-mini'
  | 'gpt-5-nano'
  | 'gpt-4.1'
  | 'gpt-4.1-mini'
  | 'gpt-4.1-nano'
  | 'gpt-4o'
  | 'gpt-4o-mini'
type AgentThinkModelsV1ResponseModelsItems0 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf0Id
  name: string
  provider: { [x: string]: unknown }
}
type AgentThinkModelsV1ResponseModelsItemsOneOf1Id =
  | 'claude-3-5-haiku-latest'
  | 'claude-sonnet-4-20250514'
type AgentThinkModelsV1ResponseModelsItems1 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf1Id
  name: string
  provider: { [x: string]: unknown }
}
type AgentThinkModelsV1ResponseModelsItemsOneOf2Id =
  | 'gemini-2.5-flash'
  | 'gemini-2.0-flash'
  | 'gemini-2.0-flash-lite'
type AgentThinkModelsV1ResponseModelsItems2 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf2Id
  name: string
  provider: { [x: string]: unknown }
}
type AgentThinkModelsV1ResponseModelsItemsOneOf3Id = 'openai/gpt-oss-20b'
type AgentThinkModelsV1ResponseModelsItems3 = {
  id: AgentThinkModelsV1ResponseModelsItemsOneOf3Id
  name: string
  provider: { [x: string]: unknown }
}
type AgentThinkModelsV1ResponseModelsItems4 = {
  id: string
  name: string
  provider: { [x: string]: unknown }
}
type AgentThinkModelsV1ResponseModelsItems =
  | AgentThinkModelsV1ResponseModelsItems0
  | AgentThinkModelsV1ResponseModelsItems1
  | AgentThinkModelsV1ResponseModelsItems2
  | AgentThinkModelsV1ResponseModelsItems3
  | AgentThinkModelsV1ResponseModelsItems4
type AgentThinkModelsV1Response = { models: AgentThinkModelsV1ResponseModelsItems[] }
type ErrorResponseTextError = string
type ErrorResponseLegacyError = {
  err_code?: string | undefined
  err_msg?: string | undefined
  request_id?: string | undefined
}
type ErrorResponseModernError = {
  category?: string | undefined
  message?: string | undefined
  details?: string | undefined
  request_id?: string | undefined
}
type ErrorResponse = ErrorResponseTextError | ErrorResponseLegacyError | ErrorResponseModernError
type CreateAgentConfigurationV1Request = {
  config: string
  metadata?: { [x: string]: string } | undefined
  api_version?: number | undefined
}
type CreateAgentConfigurationV1ResponseConfig = { [x: string]: unknown }
type CreateAgentConfigurationV1Response = {
  agent_id: string
  config: CreateAgentConfigurationV1ResponseConfig
  metadata?: { [x: string]: string } | undefined
}
type AgentConfigurationV1Config = { [x: string]: unknown }
type AgentConfigurationV1 = {
  agent_id: string
  config: AgentConfigurationV1Config
  metadata?: { [x: string]: string } | undefined
  created_at?: string | undefined
  updated_at?: string | undefined
}
type ListAgentConfigurationsV1Response = { agents?: AgentConfigurationV1[] | undefined }
type UpdateAgentMetadataV1Request = { metadata: { [x: string]: string } }
type DeleteAgentConfigurationV1Response = { [x: string]: unknown }
type CreateAgentVariableV1Request = {
  key: string
  value: { [x: string]: unknown }
  api_version?: number | undefined
}
type AgentVariableV1 = {
  variable_id: string
  key: string
  value: { [x: string]: unknown }
  created_at?: string | undefined
  updated_at?: string | undefined
}
type ListAgentVariablesV1Response = { variables?: AgentVariableV1[] | undefined }
type UpdateAgentVariableV1Request = { value: { [x: string]: unknown } }
type DeleteAgentVariableV1Response = { [x: string]: unknown }
type V1ListenPostParametersCallbackMethod = 'POST' | 'PUT'
type V1ListenPostParametersExtra = string | string[]
type V1ListenPostParametersSummarize0 = 'v2'
type V1ListenPostParametersSummarize = V1ListenPostParametersSummarize0 | boolean
type V1ListenPostParametersTag = string | string[]
type V1ListenPostParametersCustomTopic = string | string[]
type V1ListenPostParametersCustomTopicMode = 'extended' | 'strict'
type V1ListenPostParametersCustomIntent = string | string[]
type V1ListenPostParametersCustomIntentMode = 'extended' | 'strict'
type V1ListenPostParametersDetectLanguage = boolean | string[]
type V1ListenPostParametersDiarizeModel = 'latest' | 'v1' | 'v2'
type V1ListenPostParametersEncoding =
  | 'linear16'
  | 'flac'
  | 'mulaw'
  | 'amr-nb'
  | 'amr-wb'
  | 'opus'
  | 'speex'
  | 'g729'
type V1ListenPostParametersKeywords = string | string[]
type V1ListenPostParametersLanguageHint = string | string[]
type V1ListenPostParametersModel0 =
  | 'nova-3'
  | 'nova-3-general'
  | 'nova-3-medical'
  | 'nova-2'
  | 'nova-2-general'
  | 'nova-2-meeting'
  | 'nova-2-finance'
  | 'nova-2-conversationalai'
  | 'nova-2-voicemail'
  | 'nova-2-video'
  | 'nova-2-medical'
  | 'nova-2-drivethru'
  | 'nova-2-automotive'
  | 'nova'
  | 'nova-general'
  | 'nova-phonecall'
  | 'nova-medical'
  | 'enhanced'
  | 'enhanced-general'
  | 'enhanced-meeting'
  | 'enhanced-phonecall'
  | 'enhanced-finance'
  | 'base'
  | 'meeting'
  | 'phonecall'
  | 'finance'
  | 'conversationalai'
  | 'voicemail'
  | 'video'
type V1ListenPostParametersModel = V1ListenPostParametersModel0 | string
type V1ListenPostParametersRedactSchemaOneOf1Items = 'pci' | 'pii' | 'numbers'
type V1ListenPostParametersRedact1 = V1ListenPostParametersRedactSchemaOneOf1Items[]
type V1ListenPostParametersRedact = string | V1ListenPostParametersRedact1
type V1ListenPostParametersReplace = string | string[]
type V1ListenPostParametersSearch = string | string[]
type V1ListenPostParametersVersion0 = 'latest'
type V1ListenPostParametersVersion = V1ListenPostParametersVersion0 | string
type ListenV1RequestUrl = { url: string }
type ListenV1ResponseMetadataModelInfo = { [x: string]: unknown }
type ListenV1ResponseMetadataDiarizeInfo = { model_uuid: string; arch: string }
type ListenV1ResponseMetadataSummaryInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ListenV1ResponseMetadataSentimentInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ListenV1ResponseMetadataTopicsInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ListenV1ResponseMetadataIntentsInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ListenV1ResponseMetadata = {
  transaction_key?: string | undefined
  request_id: string
  sha256: string
  created: string
  duration: number
  channels: number
  models: string[]
  model_info: ListenV1ResponseMetadataModelInfo
  diarize_info?: ListenV1ResponseMetadataDiarizeInfo | undefined
  summary_info?: ListenV1ResponseMetadataSummaryInfo | undefined
  sentiment_info?: ListenV1ResponseMetadataSentimentInfo | undefined
  topics_info?: ListenV1ResponseMetadataTopicsInfo | undefined
  intents_info?: ListenV1ResponseMetadataIntentsInfo | undefined
  tags?: string[] | undefined
}
type ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems = {
  confidence?: string | undefined
  start?: string | undefined
  end?: string | undefined
  snippet?: string | undefined
}
type ListenV1ResponseResultsChannelsItemsSearchItems = {
  query?: string | undefined
  hits?: ListenV1ResponseResultsChannelsItemsSearchItemsHitsItems[] | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems = {
  word?: string | undefined
  start?: string | undefined
  end?: string | undefined
  confidence?: string | undefined
  language?: string | undefined
  speaker?: number | undefined
  speaker_confidence?: string | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems =
  { text?: string | undefined; start?: string | undefined; end?: string | undefined }
type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems = {
  sentences?:
    | ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItemsSentencesItems[]
    | undefined
  speaker?: number | undefined
  num_words?: number | undefined
  start?: string | undefined
  end?: string | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs = {
  transcript?: string | undefined
  paragraphs?:
    | ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphsParagraphsItems[]
    | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems = {
  label?: string | undefined
  value?: string | undefined
  raw_value?: string | undefined
  confidence?: string | undefined
  start_word?: string | undefined
  end_word?: string | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems = {
  summary?: string | undefined
  start_word?: string | undefined
  end_word?: string | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems = {
  text?: string | undefined
  start_word?: string | undefined
  end_word?: string | undefined
  topics?: string[] | undefined
}
type ListenV1ResponseResultsChannelsItemsAlternativesItems = {
  transcript?: string | undefined
  confidence?: string | undefined
  languages?: string[] | undefined
  languages_hinted?: string[] | undefined
  words?: ListenV1ResponseResultsChannelsItemsAlternativesItemsWordsItems[] | undefined
  paragraphs?: ListenV1ResponseResultsChannelsItemsAlternativesItemsParagraphs | undefined
  entities?: ListenV1ResponseResultsChannelsItemsAlternativesItemsEntitiesItems[] | undefined
  summaries?: ListenV1ResponseResultsChannelsItemsAlternativesItemsSummariesItems[] | undefined
  topics?: ListenV1ResponseResultsChannelsItemsAlternativesItemsTopicsItems[] | undefined
}
type ListenV1ResponseResultsChannelsItems = {
  search?: ListenV1ResponseResultsChannelsItemsSearchItems[] | undefined
  alternatives?: ListenV1ResponseResultsChannelsItemsAlternativesItems[] | undefined
  detected_language?: string | undefined
}
type ListenV1ResponseResultsChannels = ListenV1ResponseResultsChannelsItems[]
type ListenV1ResponseResultsUtterancesItemsWordsItems = {
  word?: string | undefined
  start?: string | undefined
  end?: string | undefined
  confidence?: string | undefined
  language?: string | undefined
  speaker?: number | undefined
  speaker_confidence?: string | undefined
  punctuated_word?: string | undefined
}
type ListenV1ResponseResultsUtterancesItems = {
  start?: string | undefined
  end?: string | undefined
  confidence?: string | undefined
  channel?: number | undefined
  transcript?: string | undefined
  languages?: string[] | undefined
  words?: ListenV1ResponseResultsUtterancesItemsWordsItems[] | undefined
  speaker?: number | undefined
  id?: string | undefined
}
type ListenV1ResponseResultsUtterances = ListenV1ResponseResultsUtterancesItems[]
type ListenV1ResponseResultsSummary = { result?: string | undefined; short?: string | undefined }
type SharedTopicsSegmentsItemsTopicsItems = {
  topic?: string | undefined
  confidence_score?: string | undefined
}
type SharedTopicsSegmentsItems = {
  text?: string | undefined
  start_word?: number | undefined
  end_word?: number | undefined
  topics?: SharedTopicsSegmentsItemsTopicsItems[] | undefined
}
type SharedTopics = { segments?: SharedTopicsSegmentsItems[] | undefined }
type SharedIntentsSegmentsItemsIntentsItems = {
  intent?: string | undefined
  confidence_score?: string | undefined
}
type SharedIntentsSegmentsItems = {
  text?: string | undefined
  start_word?: number | undefined
  end_word?: number | undefined
  intents?: SharedIntentsSegmentsItemsIntentsItems[] | undefined
}
type SharedIntents = { segments?: SharedIntentsSegmentsItems[] | undefined }
type SharedSentimentsSegmentsItems = {
  text?: string | undefined
  start_word?: number | undefined
  end_word?: number | undefined
  sentiment?: string | undefined
  sentiment_score?: number | undefined
}
type SharedSentimentsAverage = {
  sentiment?: string | undefined
  sentiment_score?: number | undefined
}
type SharedSentiments = {
  segments?: SharedSentimentsSegmentsItems[] | undefined
  average?: SharedSentimentsAverage | undefined
}
type ListenV1ResponseResults = {
  channels: ListenV1ResponseResultsChannels
  utterances?: ListenV1ResponseResultsUtterances | undefined
  summary?: ListenV1ResponseResultsSummary | undefined
  topics?: SharedTopics | undefined
  intents?: SharedIntents | undefined
  sentiments?: SharedSentiments | undefined
}
type ListenV1Response = { metadata: ListenV1ResponseMetadata; results: ListenV1ResponseResults }
type ListenV1AcceptedResponse = { request_id: string }
type ListenV1MediaTranscribeResponse_200 = ListenV1Response | ListenV1AcceptedResponse
type V1SpeakPostParametersCallbackMethod = 'POST' | 'PUT'
type V1SpeakPostParametersTag = string | string[]
type V1SpeakPostParametersBitRate0 = '32000' | '48000'
type V1SpeakPostParametersBitRate = V1SpeakPostParametersBitRate0 | number | number
type V1SpeakPostParametersContainer0 = 'none'
type V1SpeakPostParametersContainer1 = 'wav'
type V1SpeakPostParametersContainer2 = 'wav'
type V1SpeakPostParametersContainer3 = 'wav'
type V1SpeakPostParametersContainer4 = 'ogg'
type V1SpeakPostParametersContainer =
  | V1SpeakPostParametersContainer0
  | V1SpeakPostParametersContainer1
  | V1SpeakPostParametersContainer2
  | V1SpeakPostParametersContainer3
  | V1SpeakPostParametersContainer4
type V1SpeakPostParametersEncoding0 = 'linear16'
type V1SpeakPostParametersEncoding1 = 'flac'
type V1SpeakPostParametersEncoding2 = 'mulaw'
type V1SpeakPostParametersEncoding3 = 'alaw'
type V1SpeakPostParametersEncoding4 = 'mp3'
type V1SpeakPostParametersEncoding5 = 'opus'
type V1SpeakPostParametersEncoding6 = 'aac'
type V1SpeakPostParametersEncoding =
  | V1SpeakPostParametersEncoding0
  | V1SpeakPostParametersEncoding1
  | V1SpeakPostParametersEncoding2
  | V1SpeakPostParametersEncoding3
  | V1SpeakPostParametersEncoding4
  | V1SpeakPostParametersEncoding5
  | V1SpeakPostParametersEncoding6
type V1SpeakPostParametersModel =
  | 'aura-angus-en'
  | 'aura-arcas-en'
  | 'aura-asteria-en'
  | 'aura-athena-en'
  | 'aura-helios-en'
  | 'aura-hera-en'
  | 'aura-luna-en'
  | 'aura-orion-en'
  | 'aura-orpheus-en'
  | 'aura-perseus-en'
  | 'aura-stella-en'
  | 'aura-zeus-en'
  | 'aura-2-amalthea-en'
  | 'aura-2-andromeda-en'
  | 'aura-2-apollo-en'
  | 'aura-2-arcas-en'
  | 'aura-2-aries-en'
  | 'aura-2-asteria-en'
  | 'aura-2-athena-en'
  | 'aura-2-atlas-en'
  | 'aura-2-aurora-en'
  | 'aura-2-callista-en'
  | 'aura-2-cora-en'
  | 'aura-2-cordelia-en'
  | 'aura-2-delia-en'
  | 'aura-2-draco-en'
  | 'aura-2-electra-en'
  | 'aura-2-harmonia-en'
  | 'aura-2-helena-en'
  | 'aura-2-hera-en'
  | 'aura-2-hermes-en'
  | 'aura-2-hyperion-en'
  | 'aura-2-iris-en'
  | 'aura-2-janus-en'
  | 'aura-2-juno-en'
  | 'aura-2-jupiter-en'
  | 'aura-2-luna-en'
  | 'aura-2-mars-en'
  | 'aura-2-minerva-en'
  | 'aura-2-neptune-en'
  | 'aura-2-odysseus-en'
  | 'aura-2-ophelia-en'
  | 'aura-2-orion-en'
  | 'aura-2-orpheus-en'
  | 'aura-2-pandora-en'
  | 'aura-2-phoebe-en'
  | 'aura-2-pluto-en'
  | 'aura-2-saturn-en'
  | 'aura-2-selene-en'
  | 'aura-2-thalia-en'
  | 'aura-2-theia-en'
  | 'aura-2-vesta-en'
  | 'aura-2-zeus-en'
  | 'aura-2-agustina-es'
  | 'aura-2-alvaro-es'
  | 'aura-2-antonia-es'
  | 'aura-2-aquila-es'
  | 'aura-2-carina-es'
  | 'aura-2-celeste-es'
  | 'aura-2-diana-es'
  | 'aura-2-estrella-es'
  | 'aura-2-gloria-es'
  | 'aura-2-javier-es'
  | 'aura-2-luciano-es'
  | 'aura-2-nestor-es'
  | 'aura-2-olivia-es'
  | 'aura-2-selena-es'
  | 'aura-2-silvia-es'
  | 'aura-2-sirio-es'
  | 'aura-2-valerio-es'
  | 'aura-2-aurelia-de'
  | 'aura-2-elara-de'
  | 'aura-2-fabian-de'
  | 'aura-2-julius-de'
  | 'aura-2-kara-de'
  | 'aura-2-lara-de'
  | 'aura-2-viktoria-de'
  | 'aura-2-beatrix-nl'
  | 'aura-2-cornelia-nl'
  | 'aura-2-daphne-nl'
  | 'aura-2-hestia-nl'
  | 'aura-2-lars-nl'
  | 'aura-2-leda-nl'
  | 'aura-2-rhea-nl'
  | 'aura-2-roman-nl'
  | 'aura-2-sander-nl'
  | 'aura-2-agathe-fr'
  | 'aura-2-hector-fr'
  | 'aura-2-cesare-it'
  | 'aura-2-cinzia-it'
  | 'aura-2-demetra-it'
  | 'aura-2-dionisio-it'
  | 'aura-2-elio-it'
  | 'aura-2-flavio-it'
  | 'aura-2-livia-it'
  | 'aura-2-maia-it'
  | 'aura-2-melia-it'
  | 'aura-2-ama-ja'
  | 'aura-2-ebisu-ja'
  | 'aura-2-fujin-ja'
  | 'aura-2-izanami-ja'
  | 'aura-2-uzume-ja'
type V1SpeakPostParametersSampleRate0 = '8000' | '16000' | '24000' | '32000' | '48000'
type V1SpeakPostParametersSampleRate1 = '8000' | '16000'
type V1SpeakPostParametersSampleRate2 = '8000' | '16000'
type V1SpeakPostParametersSampleRate3 = '22050'
type V1SpeakPostParametersSampleRate4 = '48000'
type V1SpeakPostParametersSampleRate =
  | V1SpeakPostParametersSampleRate0
  | V1SpeakPostParametersSampleRate1
  | V1SpeakPostParametersSampleRate2
  | V1SpeakPostParametersSampleRate3
  | V1SpeakPostParametersSampleRate4
type SpeakV1Request = { text: string }
type SpeakV1AudioGenerateResponse_200 = { [x: string]: unknown }
type V1ReadPostParametersCallbackMethod = 'POST' | 'PUT'
type V1ReadPostParametersSummarize0 = 'v2'
type V1ReadPostParametersSummarize = V1ReadPostParametersSummarize0 | boolean
type V1ReadPostParametersTag = string | string[]
type V1ReadPostParametersCustomTopic = string | string[]
type V1ReadPostParametersCustomTopicMode = 'extended' | 'strict'
type V1ReadPostParametersCustomIntent = string | string[]
type V1ReadPostParametersCustomIntentMode = 'extended' | 'strict'
type ReadV1RequestUrl = { url: string }
type ReadV1RequestText = { text: string }
type ReadV1Request = ReadV1RequestUrl | ReadV1RequestText
type ReadV1ResponseMetadataMetadataSummaryInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ReadV1ResponseMetadataMetadataSentimentInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ReadV1ResponseMetadataMetadataTopicsInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ReadV1ResponseMetadataMetadataIntentsInfo = {
  model_uuid?: string | undefined
  input_tokens?: number | undefined
  output_tokens?: number | undefined
}
type ReadV1ResponseMetadataMetadata = {
  request_id?: string | undefined
  created?: string | undefined
  language?: string | undefined
  summary_info?: ReadV1ResponseMetadataMetadataSummaryInfo | undefined
  sentiment_info?: ReadV1ResponseMetadataMetadataSentimentInfo | undefined
  topics_info?: ReadV1ResponseMetadataMetadataTopicsInfo | undefined
  intents_info?: ReadV1ResponseMetadataMetadataIntentsInfo | undefined
}
type ReadV1ResponseMetadata = { metadata?: ReadV1ResponseMetadataMetadata | undefined }
type ReadV1ResponseResultsSummaryResultsSummary = { text?: string | undefined }
type ReadV1ResponseResultsSummaryResults = {
  summary?: ReadV1ResponseResultsSummaryResultsSummary | undefined
}
type ReadV1ResponseResultsSummary = { results?: ReadV1ResponseResultsSummaryResults | undefined }
type ReadV1ResponseResults = {
  summary?: ReadV1ResponseResultsSummary | undefined
  topics?: SharedTopics | undefined
  intents?: SharedIntents | undefined
  sentiments?: SharedSentiments | undefined
}
type ReadV1Response = { metadata: ReadV1ResponseMetadata; results: ReadV1ResponseResults }
type ListProjectsV1ResponseProjectsItems = {
  project_id?: string | undefined
  name?: string | undefined
}
type ListProjectsV1Response = { projects?: ListProjectsV1ResponseProjectsItems[] | undefined }
type GetProjectV1Response = {
  project_id?: string | undefined
  mip_opt_out?: boolean | undefined
  name?: string | undefined
}
type UpdateProjectV1Request = { name?: string | undefined }
type UpdateProjectV1Response = { message?: string | undefined }
type DeleteProjectV1Response = { message?: string | undefined }
type LeaveProjectV1Response = { message?: string | undefined }
type ListModelsV1ResponseSttModels = {
  name?: string | undefined
  canonical_name?: string | undefined
  architecture?: string | undefined
  languages?: string[] | undefined
  version?: string | undefined
  uuid?: string | undefined
  batch?: boolean | undefined
  streaming?: boolean | undefined
  formatted_output?: boolean | undefined
}
type ListModelsV1ResponseTtsModelsMetadata = {
  accent?: string | undefined
  age?: string | undefined
  color?: string | undefined
  image?: string | undefined
  sample?: string | undefined
  tags?: string[] | undefined
  use_cases?: string[] | undefined
}
type ListModelsV1ResponseTtsModels = {
  name?: string | undefined
  canonical_name?: string | undefined
  architecture?: string | undefined
  languages?: string[] | undefined
  version?: string | undefined
  uuid?: string | undefined
  metadata?: ListModelsV1ResponseTtsModelsMetadata | undefined
}
type ListModelsV1Response = {
  stt?: ListModelsV1ResponseSttModels[] | undefined
  tts?: ListModelsV1ResponseTtsModels[] | undefined
}
type GetModelV1Response0 = {
  name?: string | undefined
  canonical_name?: string | undefined
  architecture?: string | undefined
  languages?: string[] | undefined
  version?: string | undefined
  uuid?: string | undefined
  batch?: boolean | undefined
  streaming?: boolean | undefined
  formatted_output?: boolean | undefined
}
type GetModelV1ResponseOneOf1Metadata = {
  accent?: string | undefined
  age?: string | undefined
  color?: string | undefined
  image?: string | undefined
  sample?: string | undefined
  tags?: string[] | undefined
  use_cases?: string[] | undefined
}
type GetModelV1Response1 = {
  name?: string | undefined
  canonical_name?: string | undefined
  architecture?: string | undefined
  languages?: string[] | undefined
  version?: string | undefined
  uuid?: string | undefined
  metadata?: GetModelV1ResponseOneOf1Metadata | undefined
}
type GetModelV1Response = GetModelV1Response0 | GetModelV1Response1
type V1ProjectsProjectIdKeysGetParametersStatus = 'active' | 'expired'
type ListProjectKeysV1ResponseApiKeysItemsMember = {
  member_id?: string | undefined
  email?: string | undefined
}
type ListProjectKeysV1ResponseApiKeysItemsApiKey = {
  api_key_id?: string | undefined
  comment?: string | undefined
  scopes?: string[] | undefined
  created?: string | undefined
}
type ListProjectKeysV1ResponseApiKeysItems = {
  member?: ListProjectKeysV1ResponseApiKeysItemsMember | undefined
  api_key?: ListProjectKeysV1ResponseApiKeysItemsApiKey | undefined
}
type ListProjectKeysV1Response = { api_keys?: ListProjectKeysV1ResponseApiKeysItems[] | undefined }
type CreateKeyV1Request = {
  comment: string
  scopes: string[]
  tags?: string[] | undefined
  expiration_date?: string | undefined
  time_to_live_in_seconds?: number | undefined
}
type CreateKeyV1Response = {
  api_key_id?: string | undefined
  key?: string | undefined
  comment?: string | undefined
  scopes?: string[] | undefined
  tags?: string[] | undefined
  expiration_date?: string | undefined
}
type GetProjectKeyV1ResponseItemMemberApiKey = {
  api_key_id?: string | undefined
  comment?: string | undefined
  scopes?: string[] | undefined
  tags?: string[] | undefined
  expiration_date?: string | undefined
  created?: string | undefined
}
type GetProjectKeyV1ResponseItemMember = {
  member_id?: string | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
  api_key?: GetProjectKeyV1ResponseItemMemberApiKey | undefined
}
type GetProjectKeyV1ResponseItem = { member?: GetProjectKeyV1ResponseItemMember | undefined }
type GetProjectKeyV1Response = { item?: GetProjectKeyV1ResponseItem | undefined }
type DeleteProjectKeyV1Response = { message?: string | undefined }
type ListProjectMembersV1ResponseMembersItems = {
  member_id?: string | undefined
  scopes?: string[] | undefined
  email?: string | undefined
  first_name?: string | undefined
  last_name?: string | undefined
}
type ListProjectMembersV1Response = {
  members?: ListProjectMembersV1ResponseMembersItems[] | undefined
}
type DeleteProjectMemberV1Response = { message?: string | undefined }
type ListProjectMemberScopesV1Response = { scopes?: string[] | undefined }
type UpdateProjectMemberScopesV1Request = { scope: string }
type UpdateProjectMemberScopesV1Response = { message?: string | undefined }
type ListProjectInvitesV1ResponseInvitesItems = {
  email?: string | undefined
  scope?: string | undefined
}
type ListProjectInvitesV1Response = {
  invites?: ListProjectInvitesV1ResponseInvitesItems[] | undefined
}
type CreateProjectInviteV1Request = { email: string; scope: string }
type CreateProjectInviteV1Response = { message?: string | undefined }
type DeleteProjectInviteV1Response = { message?: string | undefined }
type V1ProjectsProjectIdRequestsGetParametersDeployment = 'hosted' | 'beta' | 'self-hosted'
type V1ProjectsProjectIdRequestsGetParametersEndpoint = 'listen' | 'read' | 'speak' | 'agent'
type V1ProjectsProjectIdRequestsGetParametersMethod = 'sync' | 'async' | 'streaming'
type V1ProjectsProjectIdRequestsGetParametersStatus = 'succeeded' | 'failed'
type ProjectRequestResponseResponse = { [x: string]: unknown }
type ProjectRequestResponse = {
  request_id?: string | undefined
  project_uuid?: string | undefined
  created?: string | undefined
  path?: string | undefined
  api_key_id?: string | undefined
  response?: ProjectRequestResponseResponse | undefined
  code?: number | undefined
  deployment?: string | undefined
  callback?: string | undefined
}
type ListProjectRequestsV1Response = {
  page?: number | undefined
  limit?: number | undefined
  requests?: ProjectRequestResponse[] | undefined
}
type GetProjectRequestV1Response = { request?: ProjectRequestResponse | undefined }
type V1ProjectsProjectIdUsageGetParametersDeployment = 'hosted' | 'beta' | 'self-hosted'
type V1ProjectsProjectIdUsageGetParametersEndpoint = 'listen' | 'read' | 'speak' | 'agent'
type V1ProjectsProjectIdUsageGetParametersMethod = 'sync' | 'async' | 'streaming'
type UsageV1ResponseResolution = { units?: string | undefined; amount?: number | undefined }
type UsageV1Response = {
  start?: string | undefined
  end?: string | undefined
  resolution?: UsageV1ResponseResolution | undefined
}
type UsageFieldsV1ResponseModelsItems = {
  name?: string | undefined
  language?: string | undefined
  version?: string | undefined
  model_id?: string | undefined
}
type UsageFieldsV1Response = {
  tags?: string[] | undefined
  models?: UsageFieldsV1ResponseModelsItems[] | undefined
  processing_methods?: string[] | undefined
  features?: string[] | undefined
}
type V1ProjectsProjectIdUsageBreakdownGetParametersGrouping =
  | 'accessor'
  | 'endpoint'
  | 'feature_set'
  | 'models'
  | 'method'
  | 'tags'
  | 'deployment'
type V1ProjectsProjectIdUsageBreakdownGetParametersDeployment = 'hosted' | 'beta' | 'self-hosted'
type V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint = 'listen' | 'read' | 'speak' | 'agent'
type V1ProjectsProjectIdUsageBreakdownGetParametersMethod = 'sync' | 'async' | 'streaming'
type UsageBreakdownV1ResponseResolution = { units: string; amount: number }
type UsageBreakdownV1ResponseResultsItemsGrouping = {
  start?: string | undefined
  end?: string | undefined
  accessor?: (string | null) | undefined
  endpoint?: (string | null) | undefined
  feature_set?: (string | null) | undefined
  models?: string[] | undefined
  method?: (string | null) | undefined
  tags?: (string[] | null) | undefined
  deployment?: (string | null) | undefined
}
type UsageBreakdownV1ResponseResultsItems = {
  hours: string
  total_hours: string
  agent_hours: string
  tokens_in: number
  tokens_out: number
  tts_characters: number
  requests: number
  grouping: UsageBreakdownV1ResponseResultsItemsGrouping
}
type UsageBreakdownV1Response = {
  start: string
  end: string
  resolution: UsageBreakdownV1ResponseResolution
  results: UsageBreakdownV1ResponseResultsItems[]
}
type ListProjectBalancesV1ResponseBalancesItems = {
  balance_id?: string | undefined
  amount?: number | undefined
  units?: string | undefined
  purchase_order_id?: string | undefined
}
type ListProjectBalancesV1Response = {
  balances?: ListProjectBalancesV1ResponseBalancesItems[] | undefined
}
type GetProjectBalanceV1Response = {
  balance_id?: string | undefined
  amount?: number | undefined
  units?: string | undefined
  purchase_order_id?: string | undefined
}
type V1ProjectsProjectIdBillingBreakdownGetParametersDeployment = 'hosted' | 'beta' | 'self-hosted'
type V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems =
  | 'accessor'
  | 'deployment'
  | 'line_item'
  | 'tags'
type BillingBreakdownV1ResponseResolution = { units: string; amount: number }
type BillingBreakdownV1ResponseResultsItemsGrouping = {
  start?: string | undefined
  end?: string | undefined
  accessor?: (string | null) | undefined
  deployment?: (string | null) | undefined
  line_item?: (string | null) | undefined
  tags?: (string[] | null) | undefined
}
type BillingBreakdownV1ResponseResultsItems = {
  dollars: string
  grouping: BillingBreakdownV1ResponseResultsItemsGrouping
}
type BillingBreakdownV1Response = {
  start: string
  end: string
  resolution: BillingBreakdownV1ResponseResolution
  results: BillingBreakdownV1ResponseResultsItems[]
}
type ListBillingFieldsV1ResponseDeploymentsItems = 'hosted' | 'beta' | 'self-hosted' | 'dedicated'
type ListBillingFieldsV1Response = {
  accessors?: string[] | undefined
  deployments?: ListBillingFieldsV1ResponseDeploymentsItems[] | undefined
  tags?: string[] | undefined
  line_items?: { [x: string]: string } | undefined
}
type ListProjectPurchasesV1ResponseOrdersItems = {
  order_id?: string | undefined
  expiration?: string | undefined
  created?: string | undefined
  amount?: string | undefined
  units?: string | undefined
  order_type?: string | undefined
}
type ListProjectPurchasesV1Response = {
  orders?: ListProjectPurchasesV1ResponseOrdersItems[] | undefined
}
type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember = {
  member_id: string
  email: string
}
type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials =
  {
    distribution_credentials_id: string
    provider: string
    comment?: string | undefined
    scopes: string[]
    created: string
  }
type ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems = {
  member: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsMember
  distribution_credentials: ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItemsDistributionCredentials
}
type ListProjectDistributionCredentialsV1Response = {
  distribution_credentials?:
    | ListProjectDistributionCredentialsV1ResponseDistributionCredentialsItems[]
    | undefined
}
type V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems =
  | 'self-hosted:products'
  | 'self-hosted:product:api'
  | 'self-hosted:product:engine'
  | 'self-hosted:product:license-proxy'
  | 'self-hosted:product:dgtools'
  | 'self-hosted:product:billing'
  | 'self-hosted:product:hotpepper'
  | 'self-hosted:product:metrics-server'
type V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider = 'quay'
type CreateProjectDistributionCredentialsV1Request = { comment?: string | undefined }
type CreateProjectDistributionCredentialsV1ResponseMember = { member_id: string; email: string }
type CreateProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distribution_credentials_id: string
  provider: string
  comment?: string | undefined
  scopes: string[]
  created: string
}
type CreateProjectDistributionCredentialsV1Response = {
  member: CreateProjectDistributionCredentialsV1ResponseMember
  distribution_credentials: CreateProjectDistributionCredentialsV1ResponseDistributionCredentials
}
type GetProjectDistributionCredentialsV1ResponseMember = { member_id: string; email: string }
type GetProjectDistributionCredentialsV1ResponseDistributionCredentials = {
  distribution_credentials_id: string
  provider: string
  comment?: string | undefined
  scopes: string[]
  created: string
}
type GetProjectDistributionCredentialsV1Response = {
  member: GetProjectDistributionCredentialsV1ResponseMember
  distribution_credentials: GetProjectDistributionCredentialsV1ResponseDistributionCredentials
}
type GrantV1Request = { ttl_seconds?: number | undefined }
type GrantV1Response = { access_token: string; expires_in?: number | undefined }
type V2SpeakPostParametersCallbackMethod = 'POST' | 'PUT'
type V2SpeakPostParametersTag = string | string[]
type V2SpeakPostParametersBitRate0 = '8000' | '16000' | '24000' | '32000' | '40000' | '48000'
type V2SpeakPostParametersBitRate = V2SpeakPostParametersBitRate0 | number | number
type V2SpeakPostParametersContainer0 = 'none'
type V2SpeakPostParametersContainer1 = 'wav'
type V2SpeakPostParametersContainer2 = 'wav'
type V2SpeakPostParametersContainer3 = 'wav'
type V2SpeakPostParametersContainer4 = 'ogg'
type V2SpeakPostParametersContainer =
  | V2SpeakPostParametersContainer0
  | V2SpeakPostParametersContainer1
  | V2SpeakPostParametersContainer2
  | V2SpeakPostParametersContainer3
  | V2SpeakPostParametersContainer4
type V2SpeakPostParametersEncoding0 = 'linear16'
type V2SpeakPostParametersEncoding1 = 'flac'
type V2SpeakPostParametersEncoding2 = 'mulaw'
type V2SpeakPostParametersEncoding3 = 'alaw'
type V2SpeakPostParametersEncoding4 = 'mp3'
type V2SpeakPostParametersEncoding5 = 'opus'
type V2SpeakPostParametersEncoding6 = 'aac'
type V2SpeakPostParametersEncoding =
  | V2SpeakPostParametersEncoding0
  | V2SpeakPostParametersEncoding1
  | V2SpeakPostParametersEncoding2
  | V2SpeakPostParametersEncoding3
  | V2SpeakPostParametersEncoding4
  | V2SpeakPostParametersEncoding5
  | V2SpeakPostParametersEncoding6
type V2SpeakPostParametersExpressivity = '-2' | '-1' | '0' | '1' | '2'
type V2SpeakPostParametersSampleRate0 = '8000' | '16000' | '24000' | '32000' | '44100' | '48000'
type V2SpeakPostParametersSampleRate1 = '8000' | '16000'
type V2SpeakPostParametersSampleRate2 = '8000' | '16000'
type V2SpeakPostParametersSampleRate3 = '8000' | '16000' | '22050' | '32000' | '48000'
type V2SpeakPostParametersSampleRate =
  | V2SpeakPostParametersSampleRate0
  | V2SpeakPostParametersSampleRate1
  | V2SpeakPostParametersSampleRate2
  | V2SpeakPostParametersSampleRate3
type V2SpeakPostParametersPriority = 'low'
type SpeakV2Request = { text: string }
type SpeakV2AcceptedResponse = { request_id: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/agent/settings/think/models': {
      $get:
        | { input: {}; output: AgentThinkModelsV1Response; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/v1/projects/:project_id/agents': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateAgentConfigurationV1Request }
            output: CreateAgentConfigurationV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateAgentConfigurationV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListAgentConfigurationsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/agents/:agent_id': {
      $get:
        | {
            input: { param: { project_id: string; agent_id: string } }
            output: AgentConfigurationV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; agent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { project_id: string; agent_id: string } } & {
              json: UpdateAgentMetadataV1Request
            }
            output: AgentConfigurationV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; agent_id: string } } & {
              json: UpdateAgentMetadataV1Request
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { project_id: string; agent_id: string } }
            output: DeleteAgentConfigurationV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; agent_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/agent-variables': {
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateAgentVariableV1Request }
            output: AgentVariableV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateAgentVariableV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListAgentVariablesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/agent-variables/:variable_id': {
      $get:
        | {
            input: { param: { project_id: string; variable_id: string } }
            output: AgentVariableV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; variable_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { project_id: string; variable_id: string } } & {
              json: UpdateAgentVariableV1Request
            }
            output: AgentVariableV1
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; variable_id: string } } & {
              json: UpdateAgentVariableV1Request
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { project_id: string; variable_id: string } }
            output: DeleteAgentVariableV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; variable_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/listen': {
      $post:
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1ListenPostParametersCallbackMethod | undefined
                extra?: V1ListenPostParametersExtra | undefined
                sentiment?: boolean | undefined
                summarize?: V1ListenPostParametersSummarize | undefined
                tag?: V1ListenPostParametersTag | undefined
                topics?: boolean | undefined
                custom_topic?: V1ListenPostParametersCustomTopic | undefined
                custom_topic_mode?: V1ListenPostParametersCustomTopicMode | undefined
                intents?: boolean | undefined
                custom_intent?: V1ListenPostParametersCustomIntent | undefined
                custom_intent_mode?: V1ListenPostParametersCustomIntentMode | undefined
                detect_entities?: boolean | undefined
                detect_language?: V1ListenPostParametersDetectLanguage | undefined
                diarize?: boolean | undefined
                diarize_model?: V1ListenPostParametersDiarizeModel | undefined
                dictation?: boolean | undefined
                encoding?: V1ListenPostParametersEncoding | undefined
                filler_words?: boolean | undefined
                keyterm?: string[] | undefined
                keywords?: V1ListenPostParametersKeywords | undefined
                language?: string | undefined
                language_hint?: V1ListenPostParametersLanguageHint | undefined
                measurements?: boolean | undefined
                model?: V1ListenPostParametersModel | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: V1ListenPostParametersRedact | undefined
                redact_usage?: boolean | undefined
                replace?: V1ListenPostParametersReplace | undefined
                search?: V1ListenPostParametersSearch | undefined
                smart_format?: boolean | undefined
                utterances?: boolean | undefined
                utt_split?: number | undefined
                version?: V1ListenPostParametersVersion | undefined
                mip_opt_out?: boolean | undefined
              }
            } & { json: ListenV1RequestUrl }
            output: ListenV1MediaTranscribeResponse_200
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1ListenPostParametersCallbackMethod | undefined
                extra?: V1ListenPostParametersExtra | undefined
                sentiment?: boolean | undefined
                summarize?: V1ListenPostParametersSummarize | undefined
                tag?: V1ListenPostParametersTag | undefined
                topics?: boolean | undefined
                custom_topic?: V1ListenPostParametersCustomTopic | undefined
                custom_topic_mode?: V1ListenPostParametersCustomTopicMode | undefined
                intents?: boolean | undefined
                custom_intent?: V1ListenPostParametersCustomIntent | undefined
                custom_intent_mode?: V1ListenPostParametersCustomIntentMode | undefined
                detect_entities?: boolean | undefined
                detect_language?: V1ListenPostParametersDetectLanguage | undefined
                diarize?: boolean | undefined
                diarize_model?: V1ListenPostParametersDiarizeModel | undefined
                dictation?: boolean | undefined
                encoding?: V1ListenPostParametersEncoding | undefined
                filler_words?: boolean | undefined
                keyterm?: string[] | undefined
                keywords?: V1ListenPostParametersKeywords | undefined
                language?: string | undefined
                language_hint?: V1ListenPostParametersLanguageHint | undefined
                measurements?: boolean | undefined
                model?: V1ListenPostParametersModel | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: V1ListenPostParametersRedact | undefined
                redact_usage?: boolean | undefined
                replace?: V1ListenPostParametersReplace | undefined
                search?: V1ListenPostParametersSearch | undefined
                smart_format?: boolean | undefined
                utterances?: boolean | undefined
                utt_split?: number | undefined
                version?: V1ListenPostParametersVersion | undefined
                mip_opt_out?: boolean | undefined
              }
            } & { json: ListenV1RequestUrl }
            output: ListenV1Response
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/speak': {
      $post:
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1SpeakPostParametersCallbackMethod | undefined
                mip_opt_out?: boolean | undefined
                tag?: V1SpeakPostParametersTag | undefined
                bit_rate?: V1SpeakPostParametersBitRate | undefined
                container?: V1SpeakPostParametersContainer | undefined
                encoding?: V1SpeakPostParametersEncoding | undefined
                model?: V1SpeakPostParametersModel | undefined
                sample_rate?: V1SpeakPostParametersSampleRate | undefined
                speed?: number | undefined
              }
            } & { json: SpeakV1Request }
            output: SpeakV1AudioGenerateResponse_200
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1SpeakPostParametersCallbackMethod | undefined
                mip_opt_out?: boolean | undefined
                tag?: V1SpeakPostParametersTag | undefined
                bit_rate?: V1SpeakPostParametersBitRate | undefined
                container?: V1SpeakPostParametersContainer | undefined
                encoding?: V1SpeakPostParametersEncoding | undefined
                model?: V1SpeakPostParametersModel | undefined
                sample_rate?: V1SpeakPostParametersSampleRate | undefined
                speed?: number | undefined
              }
            } & { json: SpeakV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/read': {
      $post:
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1ReadPostParametersCallbackMethod | undefined
                sentiment?: boolean | undefined
                summarize?: V1ReadPostParametersSummarize | undefined
                tag?: V1ReadPostParametersTag | undefined
                topics?: boolean | undefined
                custom_topic?: V1ReadPostParametersCustomTopic | undefined
                custom_topic_mode?: V1ReadPostParametersCustomTopicMode | undefined
                intents?: boolean | undefined
                custom_intent?: V1ReadPostParametersCustomIntent | undefined
                custom_intent_mode?: V1ReadPostParametersCustomIntentMode | undefined
                language?: string | undefined
              }
            } & { json: ReadV1Request }
            output: ReadV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V1ReadPostParametersCallbackMethod | undefined
                sentiment?: boolean | undefined
                summarize?: V1ReadPostParametersSummarize | undefined
                tag?: V1ReadPostParametersTag | undefined
                topics?: boolean | undefined
                custom_topic?: V1ReadPostParametersCustomTopic | undefined
                custom_topic_mode?: V1ReadPostParametersCustomTopicMode | undefined
                intents?: boolean | undefined
                custom_intent?: V1ReadPostParametersCustomIntent | undefined
                custom_intent_mode?: V1ReadPostParametersCustomIntentMode | undefined
                language?: string | undefined
              }
            } & { json: ReadV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects': {
      $get:
        | { input: {}; output: ListProjectsV1Response; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 400 }
    }
  } & {
    '/v1/projects/:project_id': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; page?: number | undefined }
            }
            output: GetProjectV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { limit?: number | undefined; page?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $patch:
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectV1Request }
            output: UpdateProjectV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: UpdateProjectV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { project_id: string } }
            output: DeleteProjectV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/leave': {
      $delete:
        | {
            input: { param: { project_id: string } }
            output: LeaveProjectV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/models': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { include_outdated?: boolean | undefined }
            }
            output: ListModelsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { include_outdated?: boolean | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/models/:model_id': {
      $get:
        | {
            input: { param: { project_id: string; model_id: string } }
            output: GetModelV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; model_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/models': {
      $get:
        | {
            input: { query: { include_outdated?: boolean | undefined } }
            output: ListModelsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { include_outdated?: boolean | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/models/:model_id': {
      $get:
        | {
            input: { param: { model_id: string } }
            output: GetModelV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { model_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/keys': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { status?: V1ProjectsProjectIdKeysGetParametersStatus | undefined }
            }
            output: ListProjectKeysV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { status?: V1ProjectsProjectIdKeysGetParametersStatus | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateKeyV1Request }
            output: CreateKeyV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateKeyV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/keys/:key_id': {
      $get:
        | {
            input: { param: { project_id: string; key_id: string } }
            output: GetProjectKeyV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { project_id: string; key_id: string } }
            output: DeleteProjectKeyV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; key_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/members': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListProjectMembersV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/members/:member_id': {
      $delete:
        | {
            input: { param: { project_id: string; member_id: string } }
            output: DeleteProjectMemberV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; member_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/members/:member_id/scopes': {
      $get:
        | {
            input: { param: { project_id: string; member_id: string } }
            output: ListProjectMemberScopesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; member_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $put:
        | {
            input: { param: { project_id: string; member_id: string } } & {
              json: UpdateProjectMemberScopesV1Request
            }
            output: UpdateProjectMemberScopesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; member_id: string } } & {
              json: UpdateProjectMemberScopesV1Request
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/invites': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListProjectInvitesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { project_id: string } } & { json: CreateProjectInviteV1Request }
            output: CreateProjectInviteV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { json: CreateProjectInviteV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/invites/:email': {
      $delete:
        | {
            input: { param: { project_id: string; email: string } }
            output: DeleteProjectInviteV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; email: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/requests': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page?: number | undefined
                accessor?: string | undefined
                request_id?: string | undefined
                deployment?: V1ProjectsProjectIdRequestsGetParametersDeployment | undefined
                endpoint?: V1ProjectsProjectIdRequestsGetParametersEndpoint | undefined
                method?: V1ProjectsProjectIdRequestsGetParametersMethod | undefined
                status?: V1ProjectsProjectIdRequestsGetParametersStatus | undefined
              }
            }
            output: ListProjectRequestsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                limit?: number | undefined
                page?: number | undefined
                accessor?: string | undefined
                request_id?: string | undefined
                deployment?: V1ProjectsProjectIdRequestsGetParametersDeployment | undefined
                endpoint?: V1ProjectsProjectIdRequestsGetParametersEndpoint | undefined
                method?: V1ProjectsProjectIdRequestsGetParametersMethod | undefined
                status?: V1ProjectsProjectIdRequestsGetParametersStatus | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/requests/:request_id': {
      $get:
        | {
            input: { param: { project_id: string; request_id: string } }
            output: GetProjectRequestV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; request_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/usage': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                accessor?: string | undefined
                alternatives?: boolean | undefined
                callback_method?: boolean | undefined
                callback?: boolean | undefined
                channels?: boolean | undefined
                custom_intent_mode?: boolean | undefined
                custom_intent?: boolean | undefined
                custom_topic_mode?: boolean | undefined
                custom_topic?: boolean | undefined
                deployment?: V1ProjectsProjectIdUsageGetParametersDeployment | undefined
                detect_entities?: boolean | undefined
                detect_language?: boolean | undefined
                diarize?: boolean | undefined
                dictation?: boolean | undefined
                encoding?: boolean | undefined
                endpoint?: V1ProjectsProjectIdUsageGetParametersEndpoint | undefined
                extra?: boolean | undefined
                filler_words?: boolean | undefined
                intents?: boolean | undefined
                keyterm?: boolean | undefined
                keywords?: boolean | undefined
                language?: boolean | undefined
                measurements?: boolean | undefined
                method?: V1ProjectsProjectIdUsageGetParametersMethod | undefined
                model?: string | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: boolean | undefined
                replace?: boolean | undefined
                sample_rate?: boolean | undefined
                search?: boolean | undefined
                sentiment?: boolean | undefined
                smart_format?: boolean | undefined
                summarize?: boolean | undefined
                tag?: string | undefined
                topics?: boolean | undefined
                utt_split?: boolean | undefined
                utterances?: boolean | undefined
                version?: boolean | undefined
              }
            }
            output: UsageV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                accessor?: string | undefined
                alternatives?: boolean | undefined
                callback_method?: boolean | undefined
                callback?: boolean | undefined
                channels?: boolean | undefined
                custom_intent_mode?: boolean | undefined
                custom_intent?: boolean | undefined
                custom_topic_mode?: boolean | undefined
                custom_topic?: boolean | undefined
                deployment?: V1ProjectsProjectIdUsageGetParametersDeployment | undefined
                detect_entities?: boolean | undefined
                detect_language?: boolean | undefined
                diarize?: boolean | undefined
                dictation?: boolean | undefined
                encoding?: boolean | undefined
                endpoint?: V1ProjectsProjectIdUsageGetParametersEndpoint | undefined
                extra?: boolean | undefined
                filler_words?: boolean | undefined
                intents?: boolean | undefined
                keyterm?: boolean | undefined
                keywords?: boolean | undefined
                language?: boolean | undefined
                measurements?: boolean | undefined
                method?: V1ProjectsProjectIdUsageGetParametersMethod | undefined
                model?: string | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: boolean | undefined
                replace?: boolean | undefined
                sample_rate?: boolean | undefined
                search?: boolean | undefined
                sentiment?: boolean | undefined
                smart_format?: boolean | undefined
                summarize?: boolean | undefined
                tag?: string | undefined
                topics?: boolean | undefined
                utt_split?: boolean | undefined
                utterances?: boolean | undefined
                version?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/usage/fields': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: UsageFieldsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/usage/breakdown': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                grouping?: V1ProjectsProjectIdUsageBreakdownGetParametersGrouping | undefined
                accessor?: string | undefined
                alternatives?: boolean | undefined
                callback_method?: boolean | undefined
                callback?: boolean | undefined
                channels?: boolean | undefined
                custom_intent_mode?: boolean | undefined
                custom_intent?: boolean | undefined
                custom_topic_mode?: boolean | undefined
                custom_topic?: boolean | undefined
                deployment?: V1ProjectsProjectIdUsageBreakdownGetParametersDeployment | undefined
                detect_entities?: boolean | undefined
                detect_language?: boolean | undefined
                diarize?: boolean | undefined
                dictation?: boolean | undefined
                encoding?: boolean | undefined
                endpoint?: V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint | undefined
                extra?: boolean | undefined
                filler_words?: boolean | undefined
                intents?: boolean | undefined
                keyterm?: boolean | undefined
                keywords?: boolean | undefined
                language?: boolean | undefined
                measurements?: boolean | undefined
                method?: V1ProjectsProjectIdUsageBreakdownGetParametersMethod | undefined
                model?: string | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: boolean | undefined
                replace?: boolean | undefined
                sample_rate?: boolean | undefined
                search?: boolean | undefined
                sentiment?: boolean | undefined
                smart_format?: boolean | undefined
                summarize?: boolean | undefined
                tag?: string | undefined
                topics?: boolean | undefined
                utt_split?: boolean | undefined
                utterances?: boolean | undefined
                version?: boolean | undefined
              }
            }
            output: UsageBreakdownV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                grouping?: V1ProjectsProjectIdUsageBreakdownGetParametersGrouping | undefined
                accessor?: string | undefined
                alternatives?: boolean | undefined
                callback_method?: boolean | undefined
                callback?: boolean | undefined
                channels?: boolean | undefined
                custom_intent_mode?: boolean | undefined
                custom_intent?: boolean | undefined
                custom_topic_mode?: boolean | undefined
                custom_topic?: boolean | undefined
                deployment?: V1ProjectsProjectIdUsageBreakdownGetParametersDeployment | undefined
                detect_entities?: boolean | undefined
                detect_language?: boolean | undefined
                diarize?: boolean | undefined
                dictation?: boolean | undefined
                encoding?: boolean | undefined
                endpoint?: V1ProjectsProjectIdUsageBreakdownGetParametersEndpoint | undefined
                extra?: boolean | undefined
                filler_words?: boolean | undefined
                intents?: boolean | undefined
                keyterm?: boolean | undefined
                keywords?: boolean | undefined
                language?: boolean | undefined
                measurements?: boolean | undefined
                method?: V1ProjectsProjectIdUsageBreakdownGetParametersMethod | undefined
                model?: string | undefined
                multichannel?: boolean | undefined
                numerals?: boolean | undefined
                paragraphs?: boolean | undefined
                profanity_filter?: boolean | undefined
                punctuate?: boolean | undefined
                redact?: boolean | undefined
                replace?: boolean | undefined
                sample_rate?: boolean | undefined
                search?: boolean | undefined
                sentiment?: boolean | undefined
                smart_format?: boolean | undefined
                summarize?: boolean | undefined
                tag?: string | undefined
                topics?: boolean | undefined
                utt_split?: boolean | undefined
                utterances?: boolean | undefined
                version?: boolean | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/balances': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListProjectBalancesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/balances/:balance_id': {
      $get:
        | {
            input: { param: { project_id: string; balance_id: string } }
            output: GetProjectBalanceV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; balance_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/billing/breakdown': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                accessor?: string | undefined
                deployment?: V1ProjectsProjectIdBillingBreakdownGetParametersDeployment | undefined
                tag?: string | undefined
                line_item?: string | undefined
                grouping?:
                  | V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[]
                  | undefined
              }
            }
            output: BillingBreakdownV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                start?: string | undefined
                end?: string | undefined
                accessor?: string | undefined
                deployment?: V1ProjectsProjectIdBillingBreakdownGetParametersDeployment | undefined
                tag?: string | undefined
                line_item?: string | undefined
                grouping?:
                  | V1ProjectsProjectIdBillingBreakdownGetParametersGroupingSchemaItems[]
                  | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/billing/fields': {
      $get:
        | {
            input: { param: { project_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: ListBillingFieldsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: { start?: string | undefined; end?: string | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/purchases': {
      $get:
        | {
            input: { param: { project_id: string } } & { query: { limit?: number | undefined } }
            output: ListProjectPurchasesV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & { query: { limit?: number | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/self-hosted/distribution/credentials': {
      $get:
        | {
            input: { param: { project_id: string } }
            output: ListProjectDistributionCredentialsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $post:
        | {
            input: { param: { project_id: string } } & {
              query: {
                scopes?:
                  | V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[]
                  | undefined
                provider?:
                  | V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider
                  | undefined
              }
            } & { json: CreateProjectDistributionCredentialsV1Request }
            output: CreateProjectDistributionCredentialsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string } } & {
              query: {
                scopes?:
                  | V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersScopesSchemaItems[]
                  | undefined
                provider?:
                  | V1ProjectsProjectIdSelfHostedDistributionCredentialsPostParametersProvider
                  | undefined
              }
            } & { json: CreateProjectDistributionCredentialsV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/projects/:project_id/self-hosted/distribution/credentials/:distribution_credentials_id': {
      $get:
        | {
            input: { param: { project_id: string; distribution_credentials_id: string } }
            output: GetProjectDistributionCredentialsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; distribution_credentials_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { project_id: string; distribution_credentials_id: string } }
            output: GetProjectDistributionCredentialsV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { project_id: string; distribution_credentials_id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v1/auth/grant': {
      $post:
        | {
            input: { json: GrantV1Request }
            output: GrantV1Response
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: GrantV1Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/v2/speak': {
      $post:
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V2SpeakPostParametersCallbackMethod | undefined
                mip_opt_out?: boolean | undefined
                tag?: V2SpeakPostParametersTag | undefined
                bit_rate?: V2SpeakPostParametersBitRate | undefined
                container?: V2SpeakPostParametersContainer | undefined
                encoding?: V2SpeakPostParametersEncoding | undefined
                expressivity?: V2SpeakPostParametersExpressivity | undefined
                model: string
                normalize_volume?: boolean | undefined
                sample_rate?: V2SpeakPostParametersSampleRate | undefined
                speed?: number | undefined
                priority?: V2SpeakPostParametersPriority | undefined
              }
            } & { json: SpeakV2Request }
            output: SpeakV2AcceptedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                callback?: string | undefined
                callback_method?: V2SpeakPostParametersCallbackMethod | undefined
                mip_opt_out?: boolean | undefined
                tag?: V2SpeakPostParametersTag | undefined
                bit_rate?: V2SpeakPostParametersBitRate | undefined
                container?: V2SpeakPostParametersContainer | undefined
                encoding?: V2SpeakPostParametersEncoding | undefined
                expressivity?: V2SpeakPostParametersExpressivity | undefined
                model: string
                normalize_volume?: boolean | undefined
                sample_rate?: V2SpeakPostParametersSampleRate | undefined
                speed?: number | undefined
                priority?: V2SpeakPostParametersPriority | undefined
              }
            } & { json: SpeakV2Request }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
    }
  },
  '/'
>
export default routes
