import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccentPhrasesKey() {
  return ['accent_phrases'] as const
}

export function getAddPresetKey() {
  return ['add_preset'] as const
}

export function getAivmModelsKey() {
  return ['aivm_models'] as const
}

export function getAudioQueryKey() {
  return ['audio_query'] as const
}

export function getAudioQueryFromPresetKey() {
  return ['audio_query_from_preset'] as const
}

export function getCancellableSynthesisKey() {
  return ['cancellable_synthesis'] as const
}

export function getConnectWavesKey() {
  return ['connect_waves'] as const
}

export function getCoreVersionsKey() {
  return ['core_versions'] as const
}

export function getDeletePresetKey() {
  return ['delete_preset'] as const
}

export function getEngineManifestKey() {
  return ['engine_manifest'] as const
}

export function getFrameSynthesisKey() {
  return ['frame_synthesis'] as const
}

export function getImportUserDictKey() {
  return ['import_user_dict'] as const
}

export function getInitializeSpeakerKey() {
  return ['initialize_speaker'] as const
}

export function getIsInitializedSpeakerKey() {
  return ['is_initialized_speaker'] as const
}

export function getMoraDataKey() {
  return ['mora_data'] as const
}

export function getMoraLengthKey() {
  return ['mora_length'] as const
}

export function getMoraPitchKey() {
  return ['mora_pitch'] as const
}

export function getMorphableTargetsKey() {
  return ['morphable_targets'] as const
}

export function getMultiSynthesisKey() {
  return ['multi_synthesis'] as const
}

export function getPresetsKey() {
  return ['presets'] as const
}

export function getSettingKey() {
  return ['setting'] as const
}

export function getSingFrameAudioQueryKey() {
  return ['sing_frame_audio_query'] as const
}

export function getSingFrameF0Key() {
  return ['sing_frame_f0'] as const
}

export function getSingFrameVolumeKey() {
  return ['sing_frame_volume'] as const
}

export function getSingerInfoKey() {
  return ['singer_info'] as const
}

export function getSingersKey() {
  return ['singers'] as const
}

export function getSpeakerInfoKey() {
  return ['speaker_info'] as const
}

export function getSpeakersKey() {
  return ['speakers'] as const
}

export function getSupportedDevicesKey() {
  return ['supported_devices'] as const
}

export function getSynthesisKey() {
  return ['synthesis'] as const
}

export function getSynthesisMorphingKey() {
  return ['synthesis_morphing'] as const
}

export function getUpdatePresetKey() {
  return ['update_preset'] as const
}

export function getUserDictKey() {
  return ['user_dict'] as const
}

export function getUserDictWordKey() {
  return ['user_dict_word'] as const
}

export function getValidateKanaKey() {
  return ['validate_kana'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getPostAudioQueryKey() {
  return ['audio_query', '/audio_query', 'POST'] as const
}

export function usePostAudioQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.audio_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audio_query.$post> }) =>
        parseResponse(client.audio_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAudioQueryFromPresetKey() {
  return ['audio_query_from_preset', '/audio_query_from_preset', 'POST'] as const
}

export function usePostAudioQueryFromPreset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio_query_from_preset.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.audio_query_from_preset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAudioQueryFromPresetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.audio_query_from_preset.$post> },
      ) => parseResponse(client.audio_query_from_preset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccentPhrasesKey() {
  return ['accent_phrases', '/accent_phrases', 'POST'] as const
}

export function usePostAccentPhrases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accent_phrases.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.accent_phrases.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccentPhrasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accent_phrases.$post> }) =>
        parseResponse(client.accent_phrases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMoraDataKey() {
  return ['mora_data', '/mora_data', 'POST'] as const
}

export function usePostMoraData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_data.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mora_data.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMoraDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mora_data.$post> }) =>
        parseResponse(client.mora_data.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMoraLengthKey() {
  return ['mora_length', '/mora_length', 'POST'] as const
}

export function usePostMoraLength<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_length.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mora_length.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMoraLengthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mora_length.$post> }) =>
        parseResponse(client.mora_length.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMoraPitchKey() {
  return ['mora_pitch', '/mora_pitch', 'POST'] as const
}

export function usePostMoraPitch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_pitch.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.mora_pitch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMoraPitchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mora_pitch.$post> }) =>
        parseResponse(client.mora_pitch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSynthesisKey() {
  return ['synthesis', '/synthesis', 'POST'] as const
}

export function usePostSynthesis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synthesis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.synthesis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSynthesisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.synthesis.$post> }) =>
        parseResponse(client.synthesis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCancellableSynthesisKey() {
  return ['cancellable_synthesis', '/cancellable_synthesis', 'POST'] as const
}

export function usePostCancellableSynthesis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancellable_synthesis.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cancellable_synthesis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCancellableSynthesisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cancellable_synthesis.$post> },
      ) => parseResponse(client.cancellable_synthesis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMultiSynthesisKey() {
  return ['multi_synthesis', '/multi_synthesis', 'POST'] as const
}

export function usePostMultiSynthesis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.multi_synthesis.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.multi_synthesis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMultiSynthesisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.multi_synthesis.$post> }) =>
        parseResponse(client.multi_synthesis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSingFrameAudioQueryKey() {
  return ['sing_frame_audio_query', '/sing_frame_audio_query', 'POST'] as const
}

export function usePostSingFrameAudioQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_audio_query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sing_frame_audio_query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSingFrameAudioQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sing_frame_audio_query.$post> },
      ) => parseResponse(client.sing_frame_audio_query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSingFrameF0Key() {
  return ['sing_frame_f0', '/sing_frame_f0', 'POST'] as const
}

export function usePostSingFrameF0<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_f0.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sing_frame_f0.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSingFrameF0Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sing_frame_f0.$post> }) =>
        parseResponse(client.sing_frame_f0.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSingFrameVolumeKey() {
  return ['sing_frame_volume', '/sing_frame_volume', 'POST'] as const
}

export function usePostSingFrameVolume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_volume.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sing_frame_volume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSingFrameVolumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sing_frame_volume.$post> }) =>
        parseResponse(client.sing_frame_volume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFrameSynthesisKey() {
  return ['frame_synthesis', '/frame_synthesis', 'POST'] as const
}

export function usePostFrameSynthesis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frame_synthesis.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.frame_synthesis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFrameSynthesisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.frame_synthesis.$post> }) =>
        parseResponse(client.frame_synthesis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectWavesKey() {
  return ['connect_waves', '/connect_waves', 'POST'] as const
}

export function usePostConnectWaves<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_waves.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.connect_waves.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectWavesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connect_waves.$post> }) =>
        parseResponse(client.connect_waves.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostValidateKanaKey() {
  return ['validate_kana', '/validate_kana', 'POST'] as const
}

export function usePostValidateKana<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate_kana.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validate_kana.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidateKanaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validate_kana.$post> }) =>
        parseResponse(client.validate_kana.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInitializeSpeakerKey() {
  return ['initialize_speaker', '/initialize_speaker', 'POST'] as const
}

export function usePostInitializeSpeaker<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.initialize_speaker.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.initialize_speaker.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInitializeSpeakerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.initialize_speaker.$post> }) =>
        parseResponse(client.initialize_speaker.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIsInitializedSpeakerKey(
  args: InferRequestType<typeof client.is_initialized_speaker.$get>,
) {
  return ['is_initialized_speaker', '/is_initialized_speaker', args] as const
}

export function useGetIsInitializedSpeaker<TError = unknown>(
  args: InferRequestType<typeof client.is_initialized_speaker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIsInitializedSpeakerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.is_initialized_speaker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIsInitializedSpeaker<TError = unknown>(
  args: InferRequestType<typeof client.is_initialized_speaker.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetIsInitializedSpeakerKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.is_initialized_speaker.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSupportedDevicesKey(
  args: InferRequestType<typeof client.supported_devices.$get>,
) {
  return ['supported_devices', '/supported_devices', args] as const
}

export function useGetSupportedDevices<TError = unknown>(
  args: InferRequestType<typeof client.supported_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportedDevices<TError = unknown>(
  args: InferRequestType<typeof client.supported_devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSupportedDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.supported_devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMorphableTargetsKey() {
  return ['morphable_targets', '/morphable_targets', 'POST'] as const
}

export function usePostMorphableTargets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.morphable_targets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.morphable_targets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMorphableTargetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.morphable_targets.$post> }) =>
        parseResponse(client.morphable_targets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSynthesisMorphingKey() {
  return ['synthesis_morphing', '/synthesis_morphing', 'POST'] as const
}

export function usePostSynthesisMorphing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synthesis_morphing.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.synthesis_morphing.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSynthesisMorphingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.synthesis_morphing.$post> }) =>
        parseResponse(client.synthesis_morphing.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSpeakersKey(args: InferRequestType<typeof client.speakers.$get>) {
  return ['speakers', '/speakers', args] as const
}

export function useGetSpeakers<TError = unknown>(
  args: InferRequestType<typeof client.speakers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeakersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.speakers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSpeakers<TError = unknown>(
  args: InferRequestType<typeof client.speakers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeakersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.speakers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSpeakerInfoKey(args: InferRequestType<typeof client.speaker_info.$get>) {
  return ['speaker_info', '/speaker_info', args] as const
}

export function useGetSpeakerInfo<TError = unknown>(
  args: InferRequestType<typeof client.speaker_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeakerInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.speaker_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSpeakerInfo<TError = unknown>(
  args: InferRequestType<typeof client.speaker_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSpeakerInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.speaker_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSingersKey(args: InferRequestType<typeof client.singers.$get>) {
  return ['singers', '/singers', args] as const
}

export function useGetSingers<TError = unknown>(
  args: InferRequestType<typeof client.singers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSingersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.singers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSingers<TError = unknown>(
  args: InferRequestType<typeof client.singers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSingersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.singers.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSingerInfoKey(args: InferRequestType<typeof client.singer_info.$get>) {
  return ['singer_info', '/singer_info', args] as const
}

export function useGetSingerInfo<TError = unknown>(
  args: InferRequestType<typeof client.singer_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSingerInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.singer_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSingerInfo<TError = unknown>(
  args: InferRequestType<typeof client.singer_info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSingerInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.singer_info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAivmModelsKey() {
  return ['aivm_models', '/aivm_models'] as const
}

export function useGetAivmModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAivmModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aivm_models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAivmModels<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAivmModelsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aivm_models.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAivmModelsInstallKey() {
  return ['aivm_models', '/aivm_models/install', 'POST'] as const
}

export function usePostAivmModelsInstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.install.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.aivm_models.install.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAivmModelsInstallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.aivm_models.install.$post> }) =>
        parseResponse(client.aivm_models.install.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAivmModelsAivmModelUuidKey(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>,
) {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid', args] as const
}

export function useGetAivmModelsAivmModelUuid<TError = unknown>(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAivmModelsAivmModelUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aivm_models[':aivm_model_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAivmModelsAivmModelUuid<TError = unknown>(
  args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAivmModelsAivmModelUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.aivm_models[':aivm_model_uuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAivmModelsAivmModelUuidLoadKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/load', 'POST'] as const
}

export function usePostAivmModelsAivmModelUuidLoad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAivmModelsAivmModelUuidLoadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>
        },
      ) => parseResponse(client.aivm_models[':aivm_model_uuid'].load.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAivmModelsAivmModelUuidUnloadKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/unload', 'POST'] as const
}

export function usePostAivmModelsAivmModelUuidUnload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAivmModelsAivmModelUuidUnloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>
        },
      ) => parseResponse(client.aivm_models[':aivm_model_uuid'].unload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAivmModelsAivmModelUuidUpdateKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/update', 'POST'] as const
}

export function usePostAivmModelsAivmModelUuidUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAivmModelsAivmModelUuidUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>
        },
      ) => parseResponse(client.aivm_models[':aivm_model_uuid'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAivmModelsAivmModelUuidUninstallKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/uninstall', 'DELETE'] as const
}

export function useDeleteAivmModelsAivmModelUuidUninstall<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAivmModelsAivmModelUuidUninstallKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']
          >
        },
      ) =>
        parseResponse(client.aivm_models[':aivm_model_uuid'].uninstall.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPresetsKey() {
  return ['presets', '/presets'] as const
}

export function useGetPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPresets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPresetsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.presets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAddPresetKey() {
  return ['add_preset', '/add_preset', 'POST'] as const
}

export function usePostAddPreset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_preset.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.add_preset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAddPresetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.add_preset.$post> }) =>
        parseResponse(client.add_preset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUpdatePresetKey() {
  return ['update_preset', '/update_preset', 'POST'] as const
}

export function usePostUpdatePreset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update_preset.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.update_preset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUpdatePresetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.update_preset.$post> }) =>
        parseResponse(client.update_preset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeletePresetKey() {
  return ['delete_preset', '/delete_preset', 'POST'] as const
}

export function usePostDeletePreset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete_preset.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.delete_preset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeletePresetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delete_preset.$post> }) =>
        parseResponse(client.delete_preset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserDictKey(args: InferRequestType<typeof client.user_dict.$get>) {
  return ['user_dict', '/user_dict', args] as const
}

export function useGetUserDict<TError = unknown>(
  args: InferRequestType<typeof client.user_dict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserDictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_dict.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserDict<TError = unknown>(
  args: InferRequestType<typeof client.user_dict.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserDictKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user_dict.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserDictWordKey() {
  return ['user_dict_word', '/user_dict_word', 'POST'] as const
}

export function usePostUserDictWord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict_word.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user_dict_word.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserDictWordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user_dict_word.$post> }) =>
        parseResponse(client.user_dict_word.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutUserDictWordWordUuidKey() {
  return ['user_dict_word', '/user_dict_word/:word_uuid', 'PUT'] as const
}

export function usePutUserDictWordWordUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserDictWordWordUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']> },
      ) => parseResponse(client.user_dict_word[':word_uuid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserDictWordWordUuidKey() {
  return ['user_dict_word', '/user_dict_word/:word_uuid', 'DELETE'] as const
}

export function useDeleteUserDictWordWordUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserDictWordWordUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']> },
      ) => parseResponse(client.user_dict_word[':word_uuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostImportUserDictKey() {
  return ['import_user_dict', '/import_user_dict', 'POST'] as const
}

export function usePostImportUserDict<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import_user_dict.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.import_user_dict.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostImportUserDictKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.import_user_dict.$post> }) =>
        parseResponse(client.import_user_dict.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingKey() {
  return ['setting', '/setting'] as const
}

export function useGetSetting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSetting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.setting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingKey() {
  return ['setting', '/setting', 'POST'] as const
}

export function usePostSetting<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.setting.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.setting.$post> }) =>
        parseResponse(client.setting.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVersionKey() {
  return ['version', '/version'] as const
}

export function useGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVersion<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVersionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.version.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCoreVersionsKey() {
  return ['core_versions', '/core_versions'] as const
}

export function useGetCoreVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoreVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.core_versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCoreVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCoreVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.core_versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetEngineManifestKey() {
  return ['engine_manifest', '/engine_manifest'] as const
}

export function useGetEngineManifest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEngineManifestKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.engine_manifest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEngineManifest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEngineManifestKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.engine_manifest.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
