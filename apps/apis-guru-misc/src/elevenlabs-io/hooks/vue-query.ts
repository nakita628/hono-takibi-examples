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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1HistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.history.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/history', keyArgs] as const
}

export function getV1HistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.history.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1History<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>
          >,
          ReturnType<typeof getV1HistoryQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1HistoryDeleteMutationKey() {
  return ['v1', '/v1/history/delete', 'POST'] as const
}

export function getPostV1HistoryDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.delete.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.history.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HistoryDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.history.delete.$post>) {
      return parseResponse(client.v1.history.delete.$post(args, options))
    },
  })
}

export function usePostV1HistoryDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.delete.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.history.delete.$post>,
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
  const mutationDefaults = getPostV1HistoryDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1HistoryDownloadMutationKey() {
  return ['v1', '/v1/history/download', 'POST'] as const
}

export function getPostV1HistoryDownloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.download.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.history.download.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1HistoryDownloadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.history.download.$post>) {
      return parseResponse(client.v1.history.download.$post(args, options))
    },
  })
}

export function usePostV1HistoryDownload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.history.download.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.history.download.$post>,
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
  const mutationDefaults = getPostV1HistoryDownloadMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1HistoryHistoryItemIdMutationKey() {
  return ['v1', '/v1/history/:history_item_id', 'DELETE'] as const
}

export function getDeleteV1HistoryHistoryItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1HistoryHistoryItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>,
    ) {
      return parseResponse(client.v1.history[':history_item_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1HistoryHistoryItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.history)[':history_item_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1HistoryHistoryItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1HistoryHistoryItemIdAudioQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/history/:history_item_id/audio', keyArgs] as const
}

export function getV1HistoryHistoryItemIdAudioQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1HistoryHistoryItemIdAudioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.history[':history_item_id'].audio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1HistoryHistoryItemIdAudio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1HistoryHistoryItemIdAudioQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.history)[':history_item_id']['audio']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1HistoryHistoryItemIdAudioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1HistoryHistoryItemIdAudioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.history[':history_item_id'].audio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TextToSpeechVoiceIdMutationKey() {
  return ['v1', '/v1/text-to-speech/:voice_id', 'POST'] as const
}

export function getPostV1TextToSpeechVoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TextToSpeechVoiceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>,
    ) {
      return parseResponse(client.v1['text-to-speech'][':voice_id'].$post(args, options))
    },
  })
}

export function usePostV1TextToSpeechVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['$post']>,
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
  const mutationDefaults = getPostV1TextToSpeechVoiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1TextToSpeechVoiceIdStreamMutationKey() {
  return ['v1', '/v1/text-to-speech/:voice_id/stream', 'POST'] as const
}

export function getPostV1TextToSpeechVoiceIdStreamMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TextToSpeechVoiceIdStreamMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>,
    ) {
      return parseResponse(client.v1['text-to-speech'][':voice_id'].stream.$post(args, options))
    },
  })
}

export function usePostV1TextToSpeechVoiceIdStream<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['text-to-speech'][':voice_id']['stream']['$post']>,
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
  const mutationDefaults = getPostV1TextToSpeechVoiceIdStreamMutationOptions<
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

export function getV1UserQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/user', keyArgs] as const
}

export function getV1UserQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.user.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>
          >,
          ReturnType<typeof getV1UserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1UserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.user.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1UserSubscriptionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.subscription.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/user/subscription', keyArgs] as const
}

export function getV1UserSubscriptionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.subscription.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1UserSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.user.subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1UserSubscription<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.user.subscription.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>
            >
          >,
          ReturnType<typeof getV1UserSubscriptionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.subscription.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1UserSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1UserSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.user.subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VoicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.voices.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/voices', keyArgs] as const
}

export function getV1VoicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.voices.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.voices.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Voices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.voices.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
          >,
          ReturnType<typeof getV1VoicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.voices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1VoicesAddMutationKey() {
  return ['v1', '/v1/voices/add', 'POST'] as const
}

export function getPostV1VoicesAddMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.add.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.voices.add.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VoicesAddMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.voices.add.$post>) {
      return parseResponse(client.v1.voices.add.$post(args, options))
    },
  })
}

export function usePostV1VoicesAdd<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.add.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.voices.add.$post>,
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
  const mutationDefaults = getPostV1VoicesAddMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1VoicesSettingsDefaultQueryKey() {
  return ['v1', '/v1/voices/settings/default'] as const
}

export function getV1VoicesSettingsDefaultQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1VoicesSettingsDefaultQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.voices.settings.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VoicesSettingsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>
              >
            >
          >,
          ReturnType<typeof getV1VoicesSettingsDefaultQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.settings.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VoicesSettingsDefaultQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1VoicesSettingsDefaultQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.voices.settings.default.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VoicesVoiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/voices/:voice_id', keyArgs] as const
}

export function getV1VoicesVoiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VoicesVoiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.voices[':voice_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VoicesVoiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.voices)[':voice_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VoicesVoiceIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VoicesVoiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VoicesVoiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.voices[':voice_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1VoicesVoiceIdMutationKey() {
  return ['v1', '/v1/voices/:voice_id', 'DELETE'] as const
}

export function getDeleteV1VoicesVoiceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VoicesVoiceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>) {
      return parseResponse(client.v1.voices[':voice_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1VoicesVoiceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.voices)[':voice_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1VoicesVoiceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1VoicesVoiceIdEditMutationKey() {
  return ['v1', '/v1/voices/:voice_id/edit', 'POST'] as const
}

export function getPostV1VoicesVoiceIdEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VoicesVoiceIdEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>,
    ) {
      return parseResponse(client.v1.voices[':voice_id'].edit.$post(args, options))
    },
  })
}

export function usePostV1VoicesVoiceIdEdit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.voices)[':voice_id']['edit']['$post']>,
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
  const mutationDefaults = getPostV1VoicesVoiceIdEditMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1VoicesVoiceIdSamplesSampleIdMutationKey() {
  return ['v1', '/v1/voices/:voice_id/samples/:sample_id', 'DELETE'] as const
}

export function getDeleteV1VoicesVoiceIdSamplesSampleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1VoicesVoiceIdSamplesSampleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.voices[':voice_id'].samples[':sample_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV1VoicesVoiceIdSamplesSampleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteV1VoicesVoiceIdSamplesSampleIdMutationOptions<
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

export function getV1VoicesVoiceIdSamplesSampleIdAudioQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/voices/:voice_id/samples/:sample_id/audio', keyArgs] as const
}

export function getV1VoicesVoiceIdSamplesSampleIdAudioQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VoicesVoiceIdSamplesSampleIdAudioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VoicesVoiceIdSamplesSampleIdAudio<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1VoicesVoiceIdSamplesSampleIdAudioQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.voices)[':voice_id']['samples'][':sample_id']['audio']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VoicesVoiceIdSamplesSampleIdAudioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VoicesVoiceIdSamplesSampleIdAudioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.voices[':voice_id'].samples[':sample_id'].audio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1VoicesVoiceIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/voices/:voice_id/settings', keyArgs] as const
}

export function getV1VoicesVoiceIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1VoicesVoiceIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.voices[':voice_id'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1VoicesVoiceIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1VoicesVoiceIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1VoicesVoiceIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1VoicesVoiceIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.voices[':voice_id'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1VoicesVoiceIdSettingsEditMutationKey() {
  return ['v1', '/v1/voices/:voice_id/settings/edit', 'POST'] as const
}

export function getPostV1VoicesVoiceIdSettingsEditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1VoicesVoiceIdSettingsEditMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>,
    ) {
      return parseResponse(client.v1.voices[':voice_id'].settings.edit.$post(args, options))
    },
  })
}

export function usePostV1VoicesVoiceIdSettingsEdit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.voices)[':voice_id']['settings']['edit']['$post']>,
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
  const mutationDefaults = getPostV1VoicesVoiceIdSettingsEditMutationOptions<
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
