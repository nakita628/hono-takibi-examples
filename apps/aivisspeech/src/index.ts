import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  accentPhrasesHandler,
  addPresetHandler,
  aivmModelsHandler,
  audioQueryFromPresetHandler,
  audioQueryHandler,
  cancellableSynthesisHandler,
  connectWavesHandler,
  coreVersionsHandler,
  deletePresetHandler,
  engineManifestHandler,
  frameSynthesisHandler,
  importUserDictHandler,
  initializeSpeakerHandler,
  isInitializedSpeakerHandler,
  moraDataHandler,
  moraLengthHandler,
  moraPitchHandler,
  morphableTargetsHandler,
  multiSynthesisHandler,
  presetsHandler,
  settingHandler,
  singerInfoHandler,
  singersHandler,
  singFrameAudioQueryHandler,
  singFrameF0Handler,
  singFrameVolumeHandler,
  speakerInfoHandler,
  speakersHandler,
  supportedDevicesHandler,
  synthesisHandler,
  synthesisMorphingHandler,
  updatePresetHandler,
  userDictHandler,
  userDictWordHandler,
  validateKanaHandler,
  versionHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', audioQueryHandler)
  .route('/', audioQueryFromPresetHandler)
  .route('/', accentPhrasesHandler)
  .route('/', moraDataHandler)
  .route('/', moraLengthHandler)
  .route('/', moraPitchHandler)
  .route('/', synthesisHandler)
  .route('/', cancellableSynthesisHandler)
  .route('/', multiSynthesisHandler)
  .route('/', singFrameAudioQueryHandler)
  .route('/', singFrameF0Handler)
  .route('/', singFrameVolumeHandler)
  .route('/', frameSynthesisHandler)
  .route('/', connectWavesHandler)
  .route('/', validateKanaHandler)
  .route('/', initializeSpeakerHandler)
  .route('/', isInitializedSpeakerHandler)
  .route('/', supportedDevicesHandler)
  .route('/', morphableTargetsHandler)
  .route('/', synthesisMorphingHandler)
  .route('/', speakersHandler)
  .route('/', speakerInfoHandler)
  .route('/', singersHandler)
  .route('/', singerInfoHandler)
  .route('/', aivmModelsHandler)
  .route('/', presetsHandler)
  .route('/', addPresetHandler)
  .route('/', updatePresetHandler)
  .route('/', deletePresetHandler)
  .route('/', userDictHandler)
  .route('/', userDictWordHandler)
  .route('/', importUserDictHandler)
  .route('/', settingHandler)
  .route('/', versionHandler)
  .route('/', coreVersionsHandler)
  .route('/', engineManifestHandler)
  .route('/', __rootHandler)

export default app
