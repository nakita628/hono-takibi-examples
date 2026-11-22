import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAudioQuery(
  args: InferRequestType<typeof client.audio_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio_query.$post(args, options))
}

export async function postAudioQueryFromPreset(
  args: InferRequestType<typeof client.audio_query_from_preset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio_query_from_preset.$post(args, options))
}

export async function postAccentPhrases(
  args: InferRequestType<typeof client.accent_phrases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accent_phrases.$post(args, options))
}

export async function postMoraData(
  args: InferRequestType<typeof client.mora_data.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mora_data.$post(args, options))
}

export async function postMoraLength(
  args: InferRequestType<typeof client.mora_length.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mora_length.$post(args, options))
}

export async function postMoraPitch(
  args: InferRequestType<typeof client.mora_pitch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mora_pitch.$post(args, options))
}

export async function postSynthesis(
  args: InferRequestType<typeof client.synthesis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synthesis.$post(args, options))
}

export async function postCancellableSynthesis(
  args: InferRequestType<typeof client.cancellable_synthesis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cancellable_synthesis.$post(args, options))
}

export async function postMultiSynthesis(
  args: InferRequestType<typeof client.multi_synthesis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.multi_synthesis.$post(args, options))
}

export async function postSingFrameAudioQuery(
  args: InferRequestType<typeof client.sing_frame_audio_query.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sing_frame_audio_query.$post(args, options))
}

export async function postSingFrameF0(
  args: InferRequestType<typeof client.sing_frame_f0.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sing_frame_f0.$post(args, options))
}

export async function postSingFrameVolume(
  args: InferRequestType<typeof client.sing_frame_volume.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sing_frame_volume.$post(args, options))
}

export async function postFrameSynthesis(
  args: InferRequestType<typeof client.frame_synthesis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.frame_synthesis.$post(args, options))
}

export async function postConnectWaves(
  args: InferRequestType<typeof client.connect_waves.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.connect_waves.$post(args, options))
}

export async function postValidateKana(
  args: InferRequestType<typeof client.validate_kana.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validate_kana.$post(args, options))
}

export async function postInitializeSpeaker(
  args: InferRequestType<typeof client.initialize_speaker.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.initialize_speaker.$post(args, options))
}

export async function getIsInitializedSpeaker(
  args: InferRequestType<typeof client.is_initialized_speaker.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.is_initialized_speaker.$get(args, options))
}

export async function getSupportedDevices(
  args: InferRequestType<typeof client.supported_devices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.supported_devices.$get(args, options))
}

export async function postMorphableTargets(
  args: InferRequestType<typeof client.morphable_targets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.morphable_targets.$post(args, options))
}

export async function postSynthesisMorphing(
  args: InferRequestType<typeof client.synthesis_morphing.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.synthesis_morphing.$post(args, options))
}

export async function getSpeakers(
  args: InferRequestType<typeof client.speakers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.speakers.$get(args, options))
}

export async function getSpeakerInfo(
  args: InferRequestType<typeof client.speaker_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.speaker_info.$get(args, options))
}

export async function getSingers(
  args: InferRequestType<typeof client.singers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.singers.$get(args, options))
}

export async function getSingerInfo(
  args: InferRequestType<typeof client.singer_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.singer_info.$get(args, options))
}

export async function getAivmModels(options?: ClientRequestOptions) {
  return await parseResponse(client.aivm_models.$get(undefined, options))
}

export async function postAivmModelsInstall(
  args: InferRequestType<typeof client.aivm_models.install.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aivm_models.install.$post(args, options))
}

export async function getAivmModelsAivmModelUuid(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aivm_models[':aivm_model_uuid'].$get(args, options))
}

export async function postAivmModelsAivmModelUuidLoad(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aivm_models[':aivm_model_uuid'].load.$post(args, options))
}

export async function postAivmModelsAivmModelUuidUnload(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aivm_models[':aivm_model_uuid'].unload.$post(args, options))
}

export async function postAivmModelsAivmModelUuidUpdate(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.aivm_models[':aivm_model_uuid'].update.$post(args, options))
}

export async function deleteAivmModelsAivmModelUuidUninstall(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.aivm_models[':aivm_model_uuid'].uninstall.$delete(args, options),
  )
}

export async function getPresets(options?: ClientRequestOptions) {
  return await parseResponse(client.presets.$get(undefined, options))
}

export async function postAddPreset(
  args: InferRequestType<typeof client.add_preset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.add_preset.$post(args, options))
}

export async function postUpdatePreset(
  args: InferRequestType<typeof client.update_preset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.update_preset.$post(args, options))
}

export async function postDeletePreset(
  args: InferRequestType<typeof client.delete_preset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.delete_preset.$post(args, options))
}

export async function getUserDict(
  args: InferRequestType<typeof client.user_dict.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_dict.$get(args, options))
}

export async function postUserDictWord(
  args: InferRequestType<typeof client.user_dict_word.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_dict_word.$post(args, options))
}

export async function putUserDictWordWordUuid(
  args: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_dict_word[':word_uuid'].$put(args, options))
}

export async function deleteUserDictWordWordUuid(
  args: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.user_dict_word[':word_uuid'].$delete(args, options))
}

export async function postImportUserDict(
  args: InferRequestType<typeof client.import_user_dict.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.import_user_dict.$post(args, options))
}

export async function getSetting(options?: ClientRequestOptions) {
  return await parseResponse(client.setting.$get(undefined, options))
}

export async function postSetting(
  args: InferRequestType<typeof client.setting.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setting.$post(args, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}

export async function getCoreVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.core_versions.$get(undefined, options))
}

export async function getEngineManifest(options?: ClientRequestOptions) {
  return await parseResponse(client.engine_manifest.$get(undefined, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}
