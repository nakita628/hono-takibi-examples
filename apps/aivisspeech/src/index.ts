import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAivmModelsAivmModelUuidUninstallRoute,
  deleteUserDictWordWordUuidRoute,
  getAivmModelsAivmModelUuidRoute,
  getAivmModelsRoute,
  getCoreVersionsRoute,
  getEngineManifestRoute,
  getIsInitializedSpeakerRoute,
  getPresetsRoute,
  getRoute,
  getSettingRoute,
  getSingerInfoRoute,
  getSingersRoute,
  getSpeakerInfoRoute,
  getSpeakersRoute,
  getSupportedDevicesRoute,
  getUserDictRoute,
  getVersionRoute,
  postAccentPhrasesRoute,
  postAddPresetRoute,
  postAivmModelsAivmModelUuidLoadRoute,
  postAivmModelsAivmModelUuidUnloadRoute,
  postAivmModelsAivmModelUuidUpdateRoute,
  postAivmModelsInstallRoute,
  postAudioQueryFromPresetRoute,
  postAudioQueryRoute,
  postCancellableSynthesisRoute,
  postConnectWavesRoute,
  postDeletePresetRoute,
  postFrameSynthesisRoute,
  postImportUserDictRoute,
  postInitializeSpeakerRoute,
  postMoraDataRoute,
  postMoraLengthRoute,
  postMoraPitchRoute,
  postMorphableTargetsRoute,
  postMultiSynthesisRoute,
  postSettingRoute,
  postSingFrameAudioQueryRoute,
  postSingFrameF0Route,
  postSingFrameVolumeRoute,
  postSynthesisMorphingRoute,
  postSynthesisRoute,
  postUpdatePresetRoute,
  postUserDictWordRoute,
  postValidateKanaRoute,
  putUserDictWordWordUuidRoute,
} from './routes'
import {
  deleteAivmModelsAivmModelUuidUninstallRouteHandler,
  deleteUserDictWordWordUuidRouteHandler,
  getAivmModelsAivmModelUuidRouteHandler,
  getAivmModelsRouteHandler,
  getCoreVersionsRouteHandler,
  getEngineManifestRouteHandler,
  getIsInitializedSpeakerRouteHandler,
  getPresetsRouteHandler,
  getRouteHandler,
  getSettingRouteHandler,
  getSingerInfoRouteHandler,
  getSingersRouteHandler,
  getSpeakerInfoRouteHandler,
  getSpeakersRouteHandler,
  getSupportedDevicesRouteHandler,
  getUserDictRouteHandler,
  getVersionRouteHandler,
  postAccentPhrasesRouteHandler,
  postAddPresetRouteHandler,
  postAivmModelsAivmModelUuidLoadRouteHandler,
  postAivmModelsAivmModelUuidUnloadRouteHandler,
  postAivmModelsAivmModelUuidUpdateRouteHandler,
  postAivmModelsInstallRouteHandler,
  postAudioQueryFromPresetRouteHandler,
  postAudioQueryRouteHandler,
  postCancellableSynthesisRouteHandler,
  postConnectWavesRouteHandler,
  postDeletePresetRouteHandler,
  postFrameSynthesisRouteHandler,
  postImportUserDictRouteHandler,
  postInitializeSpeakerRouteHandler,
  postMoraDataRouteHandler,
  postMoraLengthRouteHandler,
  postMoraPitchRouteHandler,
  postMorphableTargetsRouteHandler,
  postMultiSynthesisRouteHandler,
  postSettingRouteHandler,
  postSingFrameAudioQueryRouteHandler,
  postSingFrameF0RouteHandler,
  postSingFrameVolumeRouteHandler,
  postSynthesisMorphingRouteHandler,
  postSynthesisRouteHandler,
  postUpdatePresetRouteHandler,
  postUserDictWordRouteHandler,
  postValidateKanaRouteHandler,
  putUserDictWordWordUuidRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAudioQueryRoute, postAudioQueryRouteHandler)
  .openapi(postAudioQueryFromPresetRoute, postAudioQueryFromPresetRouteHandler)
  .openapi(postAccentPhrasesRoute, postAccentPhrasesRouteHandler)
  .openapi(postMoraDataRoute, postMoraDataRouteHandler)
  .openapi(postMoraLengthRoute, postMoraLengthRouteHandler)
  .openapi(postMoraPitchRoute, postMoraPitchRouteHandler)
  .openapi(postSynthesisRoute, postSynthesisRouteHandler)
  .openapi(postCancellableSynthesisRoute, postCancellableSynthesisRouteHandler)
  .openapi(postMultiSynthesisRoute, postMultiSynthesisRouteHandler)
  .openapi(postSingFrameAudioQueryRoute, postSingFrameAudioQueryRouteHandler)
  .openapi(postSingFrameF0Route, postSingFrameF0RouteHandler)
  .openapi(postSingFrameVolumeRoute, postSingFrameVolumeRouteHandler)
  .openapi(postFrameSynthesisRoute, postFrameSynthesisRouteHandler)
  .openapi(postConnectWavesRoute, postConnectWavesRouteHandler)
  .openapi(postValidateKanaRoute, postValidateKanaRouteHandler)
  .openapi(postInitializeSpeakerRoute, postInitializeSpeakerRouteHandler)
  .openapi(getIsInitializedSpeakerRoute, getIsInitializedSpeakerRouteHandler)
  .openapi(getSupportedDevicesRoute, getSupportedDevicesRouteHandler)
  .openapi(postMorphableTargetsRoute, postMorphableTargetsRouteHandler)
  .openapi(postSynthesisMorphingRoute, postSynthesisMorphingRouteHandler)
  .openapi(getSpeakersRoute, getSpeakersRouteHandler)
  .openapi(getSpeakerInfoRoute, getSpeakerInfoRouteHandler)
  .openapi(getSingersRoute, getSingersRouteHandler)
  .openapi(getSingerInfoRoute, getSingerInfoRouteHandler)
  .openapi(getAivmModelsRoute, getAivmModelsRouteHandler)
  .openapi(postAivmModelsInstallRoute, postAivmModelsInstallRouteHandler)
  .openapi(getAivmModelsAivmModelUuidRoute, getAivmModelsAivmModelUuidRouteHandler)
  .openapi(postAivmModelsAivmModelUuidLoadRoute, postAivmModelsAivmModelUuidLoadRouteHandler)
  .openapi(postAivmModelsAivmModelUuidUnloadRoute, postAivmModelsAivmModelUuidUnloadRouteHandler)
  .openapi(postAivmModelsAivmModelUuidUpdateRoute, postAivmModelsAivmModelUuidUpdateRouteHandler)
  .openapi(
    deleteAivmModelsAivmModelUuidUninstallRoute,
    deleteAivmModelsAivmModelUuidUninstallRouteHandler,
  )
  .openapi(getPresetsRoute, getPresetsRouteHandler)
  .openapi(postAddPresetRoute, postAddPresetRouteHandler)
  .openapi(postUpdatePresetRoute, postUpdatePresetRouteHandler)
  .openapi(postDeletePresetRoute, postDeletePresetRouteHandler)
  .openapi(getUserDictRoute, getUserDictRouteHandler)
  .openapi(postUserDictWordRoute, postUserDictWordRouteHandler)
  .openapi(putUserDictWordWordUuidRoute, putUserDictWordWordUuidRouteHandler)
  .openapi(deleteUserDictWordWordUuidRoute, deleteUserDictWordWordUuidRouteHandler)
  .openapi(postImportUserDictRoute, postImportUserDictRouteHandler)
  .openapi(getSettingRoute, getSettingRouteHandler)
  .openapi(postSettingRoute, postSettingRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(getCoreVersionsRoute, getCoreVersionsRouteHandler)
  .openapi(getEngineManifestRoute, getEngineManifestRouteHandler)
  .openapi(getRoute, getRouteHandler)

export default app
