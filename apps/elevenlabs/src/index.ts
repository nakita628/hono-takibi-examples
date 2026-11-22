import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessAllHandler,
  agentsInsightsHandler,
  agentsPlatformHandler,
  agentsWorkspaceAnalyticsHandler,
  assetsHandler,
  audioEffectsHandler,
  audioIsolationHandler,
  audioNativeHandler,
  contentProvenanceHandler,
  conversationalAIHandler,
  docsHandler,
  dubbingHandler,
  flowsHandler,
  forcedAlignmentHandler,
  modelsHandler,
  musicFinetunesHandler,
  musicGenerationHandler,
  productionsHandler,
  pronunciationDictionaryHandler,
  pvcVoicesHandler,
  realtimeHandler,
  samplesHandler,
  singleUseTokenHandler,
  smbHandler,
  soundGenerationHandler,
  speechEngineHandler,
  speechHistoryHandler,
  speechToTextHandler,
  studioHandler,
  textToDialogueHandler,
  textToSpeechHandler,
  textToVoiceHandler,
  v1Handler,
  videoToMusicHandler,
  voiceChangerHandler,
  voicesHandler,
  workspaceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', speechHistoryHandler)
  .route('/', soundGenerationHandler)
  .route('/', audioIsolationHandler)
  .route('/', audioEffectsHandler)
  .route('/', samplesHandler)
  .route('/', textToSpeechHandler)
  .route('/', textToDialogueHandler)
  .route('/', voiceChangerHandler)
  .route('/', textToVoiceHandler)
  .route('/', v1Handler)
  .route('/', voicesHandler)
  .route('/', studioHandler)
  .route('/', audioNativeHandler)
  .route('/', dubbingHandler)
  .route('/', modelsHandler)
  .route('/', contentProvenanceHandler)
  .route('/', pronunciationDictionaryHandler)
  .route('/', workspaceHandler)
  .route('/', videoToMusicHandler)
  .route('/', speechToTextHandler)
  .route('/', singleUseTokenHandler)
  .route('/', forcedAlignmentHandler)
  .route('/', agentsPlatformHandler)
  .route('/', conversationalAIHandler)
  .route('/', agentsInsightsHandler)
  .route('/', speechEngineHandler)
  .route('/', agentsWorkspaceAnalyticsHandler)
  .route('/', realtimeHandler)
  .route('/', musicGenerationHandler)
  .route('/', musicFinetunesHandler)
  .route('/', productionsHandler)
  .route('/', pvcVoicesHandler)
  .route('/', flowsHandler)
  .route('/', assetsHandler)
  .route('/', accessAllHandler)
  .route('/', smbHandler)
  .route('/', docsHandler)

export default app
