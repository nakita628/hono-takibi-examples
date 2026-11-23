import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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

export function getPostAudioQueryMutationKey() {
  return ['audio_query', '/audio_query', 'POST'] as const
}

export function getPostAudioQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_query.$post>>>>>,
    TError,
    InferRequestType<typeof client.audio_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio_query.$post>) {
      return parseResponse(client.audio_query.$post(args, options))
    },
  })
}

export function usePostAudioQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audio_query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.audio_query.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAudioQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAudioQueryFromPresetMutationKey() {
  return ['audio_query_from_preset', '/audio_query_from_preset', 'POST'] as const
}

export function getPostAudioQueryFromPresetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.audio_query_from_preset.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.audio_query_from_preset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAudioQueryFromPresetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audio_query_from_preset.$post>) {
      return parseResponse(client.audio_query_from_preset.$post(args, options))
    },
  })
}

export function usePostAudioQueryFromPreset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.audio_query_from_preset.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.audio_query_from_preset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAudioQueryFromPresetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAccentPhrasesMutationKey() {
  return ['accent_phrases', '/accent_phrases', 'POST'] as const
}

export function getPostAccentPhrasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accent_phrases.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.accent_phrases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccentPhrasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accent_phrases.$post>) {
      return parseResponse(client.accent_phrases.$post(args, options))
    },
  })
}

export function usePostAccentPhrases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.accent_phrases.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.accent_phrases.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccentPhrasesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMoraDataMutationKey() {
  return ['mora_data', '/mora_data', 'POST'] as const
}

export function getPostMoraDataMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_data.$post>>>>>,
    TError,
    InferRequestType<typeof client.mora_data.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMoraDataMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mora_data.$post>) {
      return parseResponse(client.mora_data.$post(args, options))
    },
  })
}

export function usePostMoraData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_data.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mora_data.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMoraDataMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMoraLengthMutationKey() {
  return ['mora_length', '/mora_length', 'POST'] as const
}

export function getPostMoraLengthMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_length.$post>>>>>,
    TError,
    InferRequestType<typeof client.mora_length.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMoraLengthMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mora_length.$post>) {
      return parseResponse(client.mora_length.$post(args, options))
    },
  })
}

export function usePostMoraLength<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_length.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mora_length.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMoraLengthMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMoraPitchMutationKey() {
  return ['mora_pitch', '/mora_pitch', 'POST'] as const
}

export function getPostMoraPitchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_pitch.$post>>>>>,
    TError,
    InferRequestType<typeof client.mora_pitch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMoraPitchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mora_pitch.$post>) {
      return parseResponse(client.mora_pitch.$post(args, options))
    },
  })
}

export function usePostMoraPitch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mora_pitch.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.mora_pitch.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMoraPitchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSynthesisMutationKey() {
  return ['synthesis', '/synthesis', 'POST'] as const
}

export function getPostSynthesisMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synthesis.$post>>>>>,
    TError,
    InferRequestType<typeof client.synthesis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSynthesisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.synthesis.$post>) {
      return parseResponse(client.synthesis.$post(args, options))
    },
  })
}

export function usePostSynthesis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synthesis.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.synthesis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSynthesisMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCancellableSynthesisMutationKey() {
  return ['cancellable_synthesis', '/cancellable_synthesis', 'POST'] as const
}

export function getPostCancellableSynthesisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cancellable_synthesis.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cancellable_synthesis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCancellableSynthesisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cancellable_synthesis.$post>) {
      return parseResponse(client.cancellable_synthesis.$post(args, options))
    },
  })
}

export function usePostCancellableSynthesis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cancellable_synthesis.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.cancellable_synthesis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCancellableSynthesisMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMultiSynthesisMutationKey() {
  return ['multi_synthesis', '/multi_synthesis', 'POST'] as const
}

export function getPostMultiSynthesisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.multi_synthesis.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.multi_synthesis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMultiSynthesisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.multi_synthesis.$post>) {
      return parseResponse(client.multi_synthesis.$post(args, options))
    },
  })
}

export function usePostMultiSynthesis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.multi_synthesis.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.multi_synthesis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMultiSynthesisMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSingFrameAudioQueryMutationKey() {
  return ['sing_frame_audio_query', '/sing_frame_audio_query', 'POST'] as const
}

export function getPostSingFrameAudioQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_audio_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sing_frame_audio_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSingFrameAudioQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sing_frame_audio_query.$post>) {
      return parseResponse(client.sing_frame_audio_query.$post(args, options))
    },
  })
}

export function usePostSingFrameAudioQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_audio_query.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sing_frame_audio_query.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSingFrameAudioQueryMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSingFrameF0MutationKey() {
  return ['sing_frame_f0', '/sing_frame_f0', 'POST'] as const
}

export function getPostSingFrameF0MutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_f0.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sing_frame_f0.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSingFrameF0MutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sing_frame_f0.$post>) {
      return parseResponse(client.sing_frame_f0.$post(args, options))
    },
  })
}

export function usePostSingFrameF0<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_f0.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sing_frame_f0.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSingFrameF0MutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSingFrameVolumeMutationKey() {
  return ['sing_frame_volume', '/sing_frame_volume', 'POST'] as const
}

export function getPostSingFrameVolumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_volume.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sing_frame_volume.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSingFrameVolumeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sing_frame_volume.$post>) {
      return parseResponse(client.sing_frame_volume.$post(args, options))
    },
  })
}

export function usePostSingFrameVolume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.sing_frame_volume.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.sing_frame_volume.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSingFrameVolumeMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFrameSynthesisMutationKey() {
  return ['frame_synthesis', '/frame_synthesis', 'POST'] as const
}

export function getPostFrameSynthesisMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.frame_synthesis.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.frame_synthesis.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFrameSynthesisMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.frame_synthesis.$post>) {
      return parseResponse(client.frame_synthesis.$post(args, options))
    },
  })
}

export function usePostFrameSynthesis<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.frame_synthesis.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.frame_synthesis.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFrameSynthesisMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConnectWavesMutationKey() {
  return ['connect_waves', '/connect_waves', 'POST'] as const
}

export function getPostConnectWavesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_waves.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.connect_waves.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectWavesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connect_waves.$post>) {
      return parseResponse(client.connect_waves.$post(args, options))
    },
  })
}

export function usePostConnectWaves<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect_waves.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connect_waves.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConnectWavesMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostValidateKanaMutationKey() {
  return ['validate_kana', '/validate_kana', 'POST'] as const
}

export function getPostValidateKanaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate_kana.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validate_kana.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidateKanaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validate_kana.$post>) {
      return parseResponse(client.validate_kana.$post(args, options))
    },
  })
}

export function usePostValidateKana<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validate_kana.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.validate_kana.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostValidateKanaMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostInitializeSpeakerMutationKey() {
  return ['initialize_speaker', '/initialize_speaker', 'POST'] as const
}

export function getPostInitializeSpeakerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.initialize_speaker.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.initialize_speaker.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInitializeSpeakerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.initialize_speaker.$post>) {
      return parseResponse(client.initialize_speaker.$post(args, options))
    },
  })
}

export function usePostInitializeSpeaker<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.initialize_speaker.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.initialize_speaker.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInitializeSpeakerMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getIsInitializedSpeakerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.is_initialized_speaker.$get>>,
) {
  return ['is_initialized_speaker', '/is_initialized_speaker', toValue(args)] as const
}

export function getIsInitializedSpeakerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.is_initialized_speaker.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIsInitializedSpeakerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.is_initialized_speaker.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIsInitializedSpeaker<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.is_initialized_speaker.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
            >
          >,
          ReturnType<typeof getIsInitializedSpeakerQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.is_initialized_speaker.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIsInitializedSpeakerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIsInitializedSpeakerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.is_initialized_speaker.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSupportedDevicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supported_devices.$get>>,
) {
  return ['supported_devices', '/supported_devices', toValue(args)] as const
}

export function getSupportedDevicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supported_devices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSupportedDevicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.supported_devices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSupportedDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.supported_devices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>
            >
          >,
          ReturnType<typeof getSupportedDevicesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.supported_devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSupportedDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSupportedDevicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.supported_devices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMorphableTargetsMutationKey() {
  return ['morphable_targets', '/morphable_targets', 'POST'] as const
}

export function getPostMorphableTargetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.morphable_targets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.morphable_targets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMorphableTargetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.morphable_targets.$post>) {
      return parseResponse(client.morphable_targets.$post(args, options))
    },
  })
}

export function usePostMorphableTargets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.morphable_targets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.morphable_targets.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMorphableTargetsMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSynthesisMorphingMutationKey() {
  return ['synthesis_morphing', '/synthesis_morphing', 'POST'] as const
}

export function getPostSynthesisMorphingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.synthesis_morphing.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.synthesis_morphing.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSynthesisMorphingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.synthesis_morphing.$post>) {
      return parseResponse(client.synthesis_morphing.$post(args, options))
    },
  })
}

export function usePostSynthesisMorphing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.synthesis_morphing.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.synthesis_morphing.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSynthesisMorphingMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSpeakersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speakers.$get>>,
) {
  return ['speakers', '/speakers', toValue(args)] as const
}

export function getSpeakersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speakers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpeakersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.speakers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpeakers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speakers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>
          >,
          ReturnType<typeof getSpeakersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speakers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpeakersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpeakersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.speakers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSpeakerInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speaker_info.$get>>,
) {
  return ['speaker_info', '/speaker_info', toValue(args)] as const
}

export function getSpeakerInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speaker_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSpeakerInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.speaker_info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSpeakerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.speaker_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>
          >,
          ReturnType<typeof getSpeakerInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.speaker_info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSpeakerInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSpeakerInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.speaker_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSingersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singers.$get>>,
) {
  return ['singers', '/singers', toValue(args)] as const
}

export function getSingersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSingersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.singers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSingers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>
          >,
          ReturnType<typeof getSingersQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSingersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSingersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.singers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSingerInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singer_info.$get>>,
) {
  return ['singer_info', '/singer_info', toValue(args)] as const
}

export function getSingerInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singer_info.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSingerInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.singer_info.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSingerInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.singer_info.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>
          >,
          ReturnType<typeof getSingerInfoQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.singer_info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSingerInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSingerInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.singer_info.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAivmModelsQueryKey() {
  return ['aivm_models', '/aivm_models'] as const
}

export function getAivmModelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAivmModelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aivm_models.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAivmModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>
          >,
          ReturnType<typeof getAivmModelsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAivmModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAivmModelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.aivm_models.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAivmModelsInstallMutationKey() {
  return ['aivm_models', '/aivm_models/install', 'POST'] as const
}

export function getPostAivmModelsInstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.install.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.aivm_models.install.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAivmModelsInstallMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.aivm_models.install.$post>) {
      return parseResponse(client.aivm_models.install.$post(args, options))
    },
  })
}

export function usePostAivmModelsInstall<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.aivm_models.install.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.aivm_models.install.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAivmModelsInstallMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAivmModelsAivmModelUuidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>,
) {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid', toValue(args)] as const
}

export function getAivmModelsAivmModelUuidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAivmModelsAivmModelUuidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.aivm_models[':aivm_model_uuid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAivmModelsAivmModelUuid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAivmModelsAivmModelUuidQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAivmModelsAivmModelUuidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAivmModelsAivmModelUuidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.aivm_models[':aivm_model_uuid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAivmModelsAivmModelUuidLoadMutationKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/load', 'POST'] as const
}

export function getPostAivmModelsAivmModelUuidLoadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAivmModelsAivmModelUuidLoadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>,
    ) {
      return parseResponse(client.aivm_models[':aivm_model_uuid'].load.$post(args, options))
    },
  })
}

export function usePostAivmModelsAivmModelUuidLoad<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['load']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAivmModelsAivmModelUuidLoadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAivmModelsAivmModelUuidUnloadMutationKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/unload', 'POST'] as const
}

export function getPostAivmModelsAivmModelUuidUnloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAivmModelsAivmModelUuidUnloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>,
    ) {
      return parseResponse(client.aivm_models[':aivm_model_uuid'].unload.$post(args, options))
    },
  })
}

export function usePostAivmModelsAivmModelUuidUnload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['unload']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAivmModelsAivmModelUuidUnloadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAivmModelsAivmModelUuidUpdateMutationKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/update', 'POST'] as const
}

export function getPostAivmModelsAivmModelUuidUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAivmModelsAivmModelUuidUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>,
    ) {
      return parseResponse(client.aivm_models[':aivm_model_uuid'].update.$post(args, options))
    },
  })
}

export function usePostAivmModelsAivmModelUuidUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['update']['$post']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAivmModelsAivmModelUuidUpdateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAivmModelsAivmModelUuidUninstallMutationKey() {
  return ['aivm_models', '/aivm_models/:aivm_model_uuid/uninstall', 'DELETE'] as const
}

export function getDeleteAivmModelsAivmModelUuidUninstallMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAivmModelsAivmModelUuidUninstallMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']
      >,
    ) {
      return parseResponse(client.aivm_models[':aivm_model_uuid'].uninstall.$delete(args, options))
    },
  })
}

export function useDeleteAivmModelsAivmModelUuidUninstall<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.aivm_models)[':aivm_model_uuid']['uninstall']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAivmModelsAivmModelUuidUninstallMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPresetsQueryKey() {
  return ['presets', '/presets'] as const
}

export function getPresetsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getPresetsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.presets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePresets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>
          >,
          ReturnType<typeof getPresetsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.presets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPresetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getPresetsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.presets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAddPresetMutationKey() {
  return ['add_preset', '/add_preset', 'POST'] as const
}

export function getPostAddPresetMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_preset.$post>>>>>,
    TError,
    InferRequestType<typeof client.add_preset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAddPresetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.add_preset.$post>) {
      return parseResponse(client.add_preset.$post(args, options))
    },
  })
}

export function usePostAddPreset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.add_preset.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.add_preset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAddPresetMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUpdatePresetMutationKey() {
  return ['update_preset', '/update_preset', 'POST'] as const
}

export function getPostUpdatePresetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update_preset.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.update_preset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUpdatePresetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.update_preset.$post>) {
      return parseResponse(client.update_preset.$post(args, options))
    },
  })
}

export function usePostUpdatePreset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.update_preset.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.update_preset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUpdatePresetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDeletePresetMutationKey() {
  return ['delete_preset', '/delete_preset', 'POST'] as const
}

export function getPostDeletePresetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delete_preset.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.delete_preset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeletePresetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delete_preset.$post>) {
      return parseResponse(client.delete_preset.$post(args, options))
    },
  })
}

export function usePostDeletePreset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.delete_preset.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.delete_preset.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeletePresetMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserDictQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_dict.$get>>,
) {
  return ['user_dict', '/user_dict', toValue(args)] as const
}

export function getUserDictQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_dict.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserDictQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_dict.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserDict<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_dict.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>
          >,
          ReturnType<typeof getUserDictQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserDictQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserDictQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_dict.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUserDictWordMutationKey() {
  return ['user_dict_word', '/user_dict_word', 'POST'] as const
}

export function getPostUserDictWordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_dict_word.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.user_dict_word.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUserDictWordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user_dict_word.$post>) {
      return parseResponse(client.user_dict_word.$post(args, options))
    },
  })
}

export function usePostUserDictWord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_dict_word.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user_dict_word.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserDictWordMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUserDictWordWordUuidMutationKey() {
  return ['user_dict_word', '/user_dict_word/:word_uuid', 'PUT'] as const
}

export function getPutUserDictWordWordUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUserDictWordWordUuidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']>) {
      return parseResponse(client.user_dict_word[':word_uuid'].$put(args, options))
    },
  })
}

export function usePutUserDictWordWordUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$put']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$put']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUserDictWordWordUuidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUserDictWordWordUuidMutationKey() {
  return ['user_dict_word', '/user_dict_word/:word_uuid', 'DELETE'] as const
}

export function getDeleteUserDictWordWordUuidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserDictWordWordUuidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']>,
    ) {
      return parseResponse(client.user_dict_word[':word_uuid'].$delete(args, options))
    },
  })
}

export function useDeleteUserDictWordWordUuid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.user_dict_word)[':word_uuid']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.user_dict_word)[':word_uuid']['$delete']>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUserDictWordWordUuidMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostImportUserDictMutationKey() {
  return ['import_user_dict', '/import_user_dict', 'POST'] as const
}

export function getPostImportUserDictMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import_user_dict.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.import_user_dict.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportUserDictMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import_user_dict.$post>) {
      return parseResponse(client.import_user_dict.$post(args, options))
    },
  })
}

export function usePostImportUserDict<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.import_user_dict.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.import_user_dict.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportUserDictMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSettingQueryKey() {
  return ['setting', '/setting'] as const
}

export function getSettingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.setting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSetting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>
          >,
          ReturnType<typeof getSettingQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.setting.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSettingMutationKey() {
  return ['setting', '/setting', 'POST'] as const
}

export function getPostSettingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.setting.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.setting.$post>) {
      return parseResponse(client.setting.$post(args, options))
    },
  })
}

export function usePostSetting<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.setting.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.setting.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCoreVersionsQueryKey() {
  return ['core_versions', '/core_versions'] as const
}

export function getCoreVersionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCoreVersionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.core_versions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCoreVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
          >,
          ReturnType<typeof getCoreVersionsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.core_versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCoreVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCoreVersionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.core_versions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEngineManifestQueryKey() {
  return ['engine_manifest', '/engine_manifest'] as const
}

export function getEngineManifestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getEngineManifestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.engine_manifest.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEngineManifest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>
            >
          >,
          ReturnType<typeof getEngineManifestQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.engine_manifest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEngineManifestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getEngineManifestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.engine_manifest.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
