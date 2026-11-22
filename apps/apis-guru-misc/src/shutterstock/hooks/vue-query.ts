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

export function getV2Key() {
  return ['v2'] as const
}

export function getV2AiAudioDescriptorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.descriptors.$get>>,
) {
  return ['v2', '/v2/ai/audio/descriptors', toValue(args)] as const
}

export function getV2AiAudioDescriptorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.descriptors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AiAudioDescriptorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.ai.audio.descriptors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AiAudioDescriptors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.descriptors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
            >
          >,
          ReturnType<typeof getV2AiAudioDescriptorsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioDescriptorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AiAudioDescriptorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.ai.audio.descriptors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AiAudioInstrumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.instruments.$get>>,
) {
  return ['v2', '/v2/ai/audio/instruments', toValue(args)] as const
}

export function getV2AiAudioInstrumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.instruments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AiAudioInstrumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.ai.audio.instruments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AiAudioInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.instruments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
            >
          >,
          ReturnType<typeof getV2AiAudioInstrumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioInstrumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AiAudioInstrumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.ai.audio.instruments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AiAudioRendersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.renders.$get>>,
) {
  return ['v2', '/v2/ai/audio/renders', toValue(args)] as const
}

export function getV2AiAudioRendersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.renders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AiAudioRendersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.ai.audio.renders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AiAudioRenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.ai.audio.renders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
            >
          >,
          ReturnType<typeof getV2AiAudioRendersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioRendersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AiAudioRendersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.ai.audio.renders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AiAudioRendersMutationKey() {
  return ['v2', '/v2/ai/audio/renders', 'POST'] as const
}

export function getPostV2AiAudioRendersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.ai.audio.renders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AiAudioRendersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.ai.audio.renders.$post>) {
      return parseResponse(client.v2.ai.audio.renders.$post(args, options))
    },
  })
}

export function usePostV2AiAudioRenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.ai.audio.renders.$post>,
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
  const mutationDefaults = getPostV2AiAudioRendersMutationOptions<TError, TOnMutateResult>(
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

export function getV2AudioQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.$get>>,
) {
  return ['v2', '/v2/audio', toValue(args)] as const
}

export function getV2AudioQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Audio<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>
          >,
          ReturnType<typeof getV2AudioQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AudioQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.collections.$get>>,
) {
  return ['v2', '/v2/audio/collections', toValue(args)] as const
}

export function getV2AudioCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioCollectionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AudioCollectionsMutationKey() {
  return ['v2', '/v2/audio/collections', 'POST'] as const
}

export function getPostV2AudioCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.audio.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.audio.collections.$post>) {
      return parseResponse(client.v2.audio.collections.$post(args, options))
    },
  })
}

export function usePostV2AudioCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.audio.collections.$post>,
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
  const mutationDefaults = getPostV2AudioCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2AudioCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>>,
) {
  return ['v2', '/v2/audio/collections/:id', toValue(args)] as const
}

export function getV2AudioCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AudioCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AudioCollectionsIdMutationKey() {
  return ['v2', '/v2/audio/collections/:id', 'POST'] as const
}

export function getPostV2AudioCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioCollectionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']>) {
      return parseResponse(client.v2.audio.collections[':id'].$post(args, options))
    },
  })
}

export function usePostV2AudioCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.audio.collections)[':id']['$post']>,
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
  const mutationDefaults = getPostV2AudioCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2AudioCollectionsIdMutationKey() {
  return ['v2', '/v2/audio/collections/:id', 'DELETE'] as const
}

export function getDeleteV2AudioCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AudioCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']>,
    ) {
      return parseResponse(client.v2.audio.collections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2AudioCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.audio.collections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2AudioCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2AudioCollectionsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/audio/collections/:id/items', toValue(args)] as const
}

export function getV2AudioCollectionsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioCollectionsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.collections[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2AudioCollectionsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioCollectionsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioCollectionsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.collections[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AudioCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/audio/collections/:id/items', 'POST'] as const
}

export function getPostV2AudioCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']>,
    ) {
      return parseResponse(client.v2.audio.collections[':id'].items.$post(args, options))
    },
  })
}

export function usePostV2AudioCollectionsIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$post']>,
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
  const mutationDefaults = getPostV2AudioCollectionsIdItemsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2AudioCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/audio/collections/:id/items', 'DELETE'] as const
}

export function getDeleteV2AudioCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2AudioCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>,
    ) {
      return parseResponse(client.v2.audio.collections[':id'].items.$delete(args, options))
    },
  })
}

export function useDeleteV2AudioCollectionsIdItems<
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
                    ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$delete']>,
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
  const mutationDefaults = getDeleteV2AudioCollectionsIdItemsMutationOptions<
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

export function getV2AudioGenresQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.genres.$get>>,
) {
  return ['v2', '/v2/audio/genres', toValue(args)] as const
}

export function getV2AudioGenresQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.genres.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioGenresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.genres.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.genres.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioGenresQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioGenresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioGenresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.genres.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioInstrumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.instruments.$get>>,
) {
  return ['v2', '/v2/audio/instruments', toValue(args)] as const
}

export function getV2AudioInstrumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.instruments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioInstrumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.instruments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioInstruments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.instruments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioInstrumentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioInstrumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioInstrumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.instruments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.licenses.$get>>,
) {
  return ['v2', '/v2/audio/licenses', toValue(args)] as const
}

export function getV2AudioLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioLicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2AudioLicensesMutationKey() {
  return ['v2', '/v2/audio/licenses', 'POST'] as const
}

export function getPostV2AudioLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.audio.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.audio.licenses.$post>) {
      return parseResponse(client.v2.audio.licenses.$post(args, options))
    },
  })
}

export function usePostV2AudioLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.audio.licenses.$post>,
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
  const mutationDefaults = getPostV2AudioLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2AudioLicensesIdDownloadsMutationKey() {
  return ['v2', '/v2/audio/licenses/:id/downloads', 'POST'] as const
}

export function getPostV2AudioLicensesIdDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioLicensesIdDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>,
    ) {
      return parseResponse(client.v2.audio.licenses[':id'].downloads.$post(args, options))
    },
  })
}

export function usePostV2AudioLicensesIdDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.audio.licenses)[':id']['downloads']['$post']>,
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
  const mutationDefaults = getPostV2AudioLicensesIdDownloadsMutationOptions<
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

export function getV2AudioMoodsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.moods.$get>>,
) {
  return ['v2', '/v2/audio/moods', toValue(args)] as const
}

export function getV2AudioMoodsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.moods.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioMoodsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.moods.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioMoods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.moods.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
          >,
          ReturnType<typeof getV2AudioMoodsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioMoodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioMoodsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.moods.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.search.$get>>,
) {
  return ['v2', '/v2/audio/search', toValue(args)] as const
}

export function getV2AudioSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.audio.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>
            >
          >,
          ReturnType<typeof getV2AudioSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2AudioIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio)[':id']['$get']>>,
) {
  return ['v2', '/v2/audio/:id', toValue(args)] as const
}

export function getV2AudioIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2AudioIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.audio[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2AudioId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.audio)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2AudioIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2AudioIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.audio[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2BulkSearchImagesMutationKey() {
  return ['v2', '/v2/bulk_search/images', 'POST'] as const
}

export function getPostV2BulkSearchImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulk_search.images.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.bulk_search.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BulkSearchImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.bulk_search.images.$post>) {
      return parseResponse(client.v2.bulk_search.images.$post(args, options))
    },
  })
}

export function usePostV2BulkSearchImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulk_search.images.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.bulk_search.images.$post>,
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
  const mutationDefaults = getPostV2BulkSearchImagesMutationOptions<TError, TOnMutateResult>(
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

export function getV2CatalogCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.collections.$get>>,
) {
  return ['v2', '/v2/catalog/collections', toValue(args)] as const
}

export function getV2CatalogCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CatalogCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.catalog.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CatalogCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
            >
          >,
          ReturnType<typeof getV2CatalogCollectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CatalogCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.catalog.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CatalogCollectionsMutationKey() {
  return ['v2', '/v2/catalog/collections', 'POST'] as const
}

export function getPostV2CatalogCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.catalog.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.catalog.collections.$post>) {
      return parseResponse(client.v2.catalog.collections.$post(args, options))
    },
  })
}

export function usePostV2CatalogCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.catalog.collections.$post>,
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
  const mutationDefaults = getPostV2CatalogCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2CatalogCollectionsCollectionIdMutationKey() {
  return ['v2', '/v2/catalog/collections/:collection_id', 'DELETE'] as const
}

export function getDeleteV2CatalogCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CatalogCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>,
    ) {
      return parseResponse(client.v2.catalog.collections[':collection_id'].$delete(args, options))
    },
  })
}

export function useDeleteV2CatalogCollectionsCollectionId<
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
                    ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$delete']>,
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
  const mutationDefaults = getDeleteV2CatalogCollectionsCollectionIdMutationOptions<
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

export function getPatchV2CatalogCollectionsCollectionIdMutationKey() {
  return ['v2', '/v2/catalog/collections/:collection_id', 'PATCH'] as const
}

export function getPatchV2CatalogCollectionsCollectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2CatalogCollectionsCollectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>,
    ) {
      return parseResponse(client.v2.catalog.collections[':collection_id'].$patch(args, options))
    },
  })
}

export function usePatchV2CatalogCollectionsCollectionId<
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
                  ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['$patch']>,
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
  const mutationDefaults = getPatchV2CatalogCollectionsCollectionIdMutationOptions<
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

export function getPostV2CatalogCollectionsCollectionIdItemsMutationKey() {
  return ['v2', '/v2/catalog/collections/:collection_id/items', 'POST'] as const
}

export function getPostV2CatalogCollectionsCollectionIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CatalogCollectionsCollectionIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.catalog.collections)[':collection_id']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.catalog.collections[':collection_id'].items.$post(args, options),
      )
    },
  })
}

export function usePostV2CatalogCollectionsCollectionIdItems<
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
                    (typeof client.v2.catalog.collections)[':collection_id']['items']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.catalog.collections)[':collection_id']['items']['$post']
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
  const mutationDefaults = getPostV2CatalogCollectionsCollectionIdItemsMutationOptions<
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

export function getDeleteV2CatalogCollectionsCollectionIdItemsMutationKey() {
  return ['v2', '/v2/catalog/collections/:collection_id/items', 'DELETE'] as const
}

export function getDeleteV2CatalogCollectionsCollectionIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2CatalogCollectionsCollectionIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.catalog.collections[':collection_id'].items.$delete(args, options),
      )
    },
  })
}

export function useDeleteV2CatalogCollectionsCollectionIdItems<
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
                    (typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.catalog.collections)[':collection_id']['items']['$delete']
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
  const mutationDefaults = getDeleteV2CatalogCollectionsCollectionIdItemsMutationOptions<
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

export function getV2CatalogSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.search.$get>>,
) {
  return ['v2', '/v2/catalog/search', toValue(args)] as const
}

export function getV2CatalogSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CatalogSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.catalog.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CatalogSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.catalog.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>
            >
          >,
          ReturnType<typeof getV2CatalogSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CatalogSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.catalog.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ContributorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.contributors.$get>>,
) {
  return ['v2', '/v2/contributors', toValue(args)] as const
}

export function getV2ContributorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.contributors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ContributorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.contributors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2Contributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.contributors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>
            >
          >,
          ReturnType<typeof getV2ContributorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ContributorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.contributors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ContributorsContributorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id', toValue(args)] as const
}

export function getV2ContributorsContributorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ContributorsContributorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ContributorsContributorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ContributorsContributorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsContributorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ContributorsContributorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.contributors[':contributor_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ContributorsContributorIdCollectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections', toValue(args)] as const
}

export function getV2ContributorsContributorIdCollectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ContributorsContributorIdCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ContributorsContributorIdCollections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
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
                    (typeof client.v2.contributors)[':contributor_id']['collections']['$get']
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
                    (typeof client.v2.contributors)[':contributor_id']['collections']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ContributorsContributorIdCollectionsQueryKey>
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
            ReturnType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsContributorIdCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ContributorsContributorIdCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.contributors[':contributor_id'].collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ContributorsContributorIdCollectionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
    >
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id', toValue(args)] as const
}

export function getV2ContributorsContributorIdCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ContributorsContributorIdCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ContributorsContributorIdCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
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
                    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
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
                    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ContributorsContributorIdCollectionsIdQueryKey>
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
              (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsContributorIdCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ContributorsContributorIdCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ContributorsContributorIdCollectionsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
    >
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id/items', toValue(args)] as const
}

export function getV2ContributorsContributorIdCollectionsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ContributorsContributorIdCollectionsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ContributorsContributorIdCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
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
                    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
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
                    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV2ContributorsContributorIdCollectionsIdItemsQueryKey>
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
              (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsContributorIdCollectionsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ContributorsContributorIdCollectionsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.contributors[':contributor_id'].collections[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2CvImagesMutationKey() {
  return ['v2', '/v2/cv/images', 'POST'] as const
}

export function getPostV2CvImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.images.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.cv.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2CvImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.cv.images.$post>) {
      return parseResponse(client.v2.cv.images.$post(args, options))
    },
  })
}

export function usePostV2CvImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.cv.images.$post>,
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
  const mutationDefaults = getPostV2CvImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2CvKeywordsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.keywords.$get>>,
) {
  return ['v2', '/v2/cv/keywords', toValue(args)] as const
}

export function getV2CvKeywordsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.keywords.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CvKeywordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cv.keywords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CvKeywords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.keywords.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
          >,
          ReturnType<typeof getV2CvKeywordsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvKeywordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CvKeywordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cv.keywords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CvSimilarImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.images.$get>>,
) {
  return ['v2', '/v2/cv/similar/images', toValue(args)] as const
}

export function getV2CvSimilarImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CvSimilarImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cv.similar.images.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CvSimilarImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
            >
          >,
          ReturnType<typeof getV2CvSimilarImagesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvSimilarImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CvSimilarImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cv.similar.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2CvSimilarVideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.videos.$get>>,
) {
  return ['v2', '/v2/cv/similar/videos', toValue(args)] as const
}

export function getV2CvSimilarVideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2CvSimilarVideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.cv.similar.videos.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2CvSimilarVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.cv.similar.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
            >
          >,
          ReturnType<typeof getV2CvSimilarVideosQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvSimilarVideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2CvSimilarVideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.cv.similar.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialCategoriesQueryKey() {
  return ['v2', '/v2/editorial/categories'] as const
}

export function getV2EditorialCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2EditorialCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
            >
          >,
          ReturnType<typeof getV2EditorialCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2EditorialCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesCategoriesQueryKey() {
  return ['v2', '/v2/editorial/images/categories'] as const
}

export function getV2EditorialImagesCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2EditorialImagesCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
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
                Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2EditorialImagesCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.licenses.$get>>,
) {
  return ['v2', '/v2/editorial/images/licenses', toValue(args)] as const
}

export function getV2EditorialImagesLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesLicensesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2EditorialImagesLicensesMutationKey() {
  return ['v2', '/v2/editorial/images/licenses', 'POST'] as const
}

export function getPostV2EditorialImagesLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.editorial.images.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EditorialImagesLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.editorial.images.licenses.$post>) {
      return parseResponse(client.v2.editorial.images.licenses.$post(args, options))
    },
  })
}

export function usePostV2EditorialImagesLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.editorial.images.licenses.$post>,
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
  const mutationDefaults = getPostV2EditorialImagesLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getV2EditorialImagesLivefeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>>,
) {
  return ['v2', '/v2/editorial/images/livefeeds', toValue(args)] as const
}

export function getV2EditorialImagesLivefeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesLivefeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.livefeeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesLivefeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesLivefeedsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLivefeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesLivefeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.livefeeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesLivefeedsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>
  >,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id', toValue(args)] as const
}

export function getV2EditorialImagesLivefeedsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesLivefeedsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.livefeeds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesLivefeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesLivefeedsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLivefeedsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesLivefeedsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.livefeeds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesLivefeedsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id/items', toValue(args)] as const
}

export function getV2EditorialImagesLivefeedsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesLivefeedsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.livefeeds[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesLivefeedsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
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
                  ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesLivefeedsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLivefeedsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesLivefeedsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.livefeeds[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.search.$get>>,
) {
  return ['v2', '/v2/editorial/images/search', toValue(args)] as const
}

export function getV2EditorialImagesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.updated.$get>>,
) {
  return ['v2', '/v2/editorial/images/updated', toValue(args)] as const
}

export function getV2EditorialImagesUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.updated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images.updated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.images.updated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesUpdatedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images.updated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>>,
) {
  return ['v2', '/v2/editorial/images/:id', toValue(args)] as const
}

export function getV2EditorialImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialImagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialImagesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2EditorialLicensesMutationKey() {
  return ['v2', '/v2/editorial/licenses', 'POST'] as const
}

export function getPostV2EditorialLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.licenses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.editorial.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EditorialLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.editorial.licenses.$post>) {
      return parseResponse(client.v2.editorial.licenses.$post(args, options))
    },
  })
}

export function usePostV2EditorialLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.licenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.editorial.licenses.$post>,
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
  const mutationDefaults = getPostV2EditorialLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getV2EditorialLivefeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.livefeeds.$get>>,
) {
  return ['v2', '/v2/editorial/livefeeds', toValue(args)] as const
}

export function getV2EditorialLivefeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.livefeeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialLivefeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.livefeeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialLivefeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.livefeeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
            >
          >,
          ReturnType<typeof getV2EditorialLivefeedsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialLivefeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialLivefeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.livefeeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialLivefeedsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>,
) {
  return ['v2', '/v2/editorial/livefeeds/:id', toValue(args)] as const
}

export function getV2EditorialLivefeedsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialLivefeedsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.livefeeds[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialLivefeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialLivefeedsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialLivefeedsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialLivefeedsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.livefeeds[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialLivefeedsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/editorial/livefeeds/:id/items', toValue(args)] as const
}

export function getV2EditorialLivefeedsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialLivefeedsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.livefeeds[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialLivefeedsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialLivefeedsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialLivefeedsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialLivefeedsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.livefeeds[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.search.$get>>,
) {
  return ['v2', '/v2/editorial/search', toValue(args)] as const
}

export function getV2EditorialSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
            >
          >,
          ReturnType<typeof getV2EditorialSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.updated.$get>>,
) {
  return ['v2', '/v2/editorial/updated', toValue(args)] as const
}

export function getV2EditorialUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.updated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.updated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.updated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
            >
          >,
          ReturnType<typeof getV2EditorialUpdatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.updated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialVideosCategoriesQueryKey() {
  return ['v2', '/v2/editorial/videos/categories'] as const
}

export function getV2EditorialVideosCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2EditorialVideosCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.videos.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialVideosCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
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
                Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialVideosCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2EditorialVideosCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.videos.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialVideosLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.licenses.$get>>,
) {
  return ['v2', '/v2/editorial/videos/licenses', toValue(args)] as const
}

export function getV2EditorialVideosLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialVideosLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.videos.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialVideosLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialVideosLicensesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialVideosLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.videos.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2EditorialVideosLicensesMutationKey() {
  return ['v2', '/v2/editorial/videos/licenses', 'POST'] as const
}

export function getPostV2EditorialVideosLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.editorial.videos.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EditorialVideosLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.editorial.videos.licenses.$post>) {
      return parseResponse(client.v2.editorial.videos.licenses.$post(args, options))
    },
  })
}

export function usePostV2EditorialVideosLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.editorial.videos.licenses.$post>,
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
  const mutationDefaults = getPostV2EditorialVideosLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getV2EditorialVideosSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.search.$get>>,
) {
  return ['v2', '/v2/editorial/videos/search', toValue(args)] as const
}

export function getV2EditorialVideosSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialVideosSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.videos.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialVideosSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.editorial.videos.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialVideosSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialVideosSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.videos.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialVideosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>>,
) {
  return ['v2', '/v2/editorial/videos/:id', toValue(args)] as const
}

export function getV2EditorialVideosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialVideosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial.videos[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialVideosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2EditorialVideosIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialVideosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial.videos[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2EditorialIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial)[':id']['$get']>>,
) {
  return ['v2', '/v2/editorial/:id', toValue(args)] as const
}

export function getV2EditorialIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2EditorialIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.editorial[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2EditorialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.editorial)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2EditorialIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2EditorialIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.editorial[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
) {
  return ['v2', '/v2/images', toValue(args)] as const
}

export function getV2ImagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Images<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
          >,
          ReturnType<typeof getV2ImagesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ImagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesMutationKey() {
  return ['v2', '/v2/images', 'POST'] as const
}

export function getPostV2ImagesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.images.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.$post>) {
      return parseResponse(client.v2.images.$post(args, options))
    },
  })
}

export function usePostV2Images<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.images.$post>,
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
  const mutationDefaults = getPostV2ImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2ImagesCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.categories.$get>>,
) {
  return ['v2', '/v2/images/categories', toValue(args)] as const
}

export function getV2ImagesCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
            >
          >,
          ReturnType<typeof getV2ImagesCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.$get>>,
) {
  return ['v2', '/v2/images/collections', toValue(args)] as const
}

export function getV2ImagesCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesCollectionsMutationKey() {
  return ['v2', '/v2/images/collections', 'POST'] as const
}

export function getPostV2ImagesCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.images.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.collections.$post>) {
      return parseResponse(client.v2.images.collections.$post(args, options))
    },
  })
}

export function usePostV2ImagesCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.images.collections.$post>,
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
  const mutationDefaults = getPostV2ImagesCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ImagesCollectionsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.featured.$get>>,
) {
  return ['v2', '/v2/images/collections/featured', toValue(args)] as const
}

export function getV2ImagesCollectionsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollectionsFeatured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.collections.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsFeaturedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesCollectionsFeaturedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>
  >,
) {
  return ['v2', '/v2/images/collections/featured/:id', toValue(args)] as const
}

export function getV2ImagesCollectionsFeaturedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsFeaturedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections.featured[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollectionsFeaturedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsFeaturedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsFeaturedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsFeaturedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections.featured[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesCollectionsFeaturedIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/images/collections/featured/:id/items', toValue(args)] as const
}

export function getV2ImagesCollectionsFeaturedIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsFeaturedIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections.featured[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollectionsFeaturedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
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
                  ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsFeaturedIdItemsQueryKey>
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
            ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsFeaturedIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsFeaturedIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections.featured[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>>,
) {
  return ['v2', '/v2/images/collections/:id', toValue(args)] as const
}

export function getV2ImagesCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesCollectionsIdMutationKey() {
  return ['v2', '/v2/images/collections/:id', 'POST'] as const
}

export function getPostV2ImagesCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images.collections)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images.collections)[':id']['$post']>,
    ) {
      return parseResponse(client.v2.images.collections[':id'].$post(args, options))
    },
  })
}

export function usePostV2ImagesCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.images.collections)[':id']['$post']>,
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
  const mutationDefaults = getPostV2ImagesCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2ImagesCollectionsIdMutationKey() {
  return ['v2', '/v2/images/collections/:id', 'DELETE'] as const
}

export function getDeleteV2ImagesCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ImagesCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']>,
    ) {
      return parseResponse(client.v2.images.collections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2ImagesCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.images.collections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2ImagesCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2ImagesCollectionsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/images/collections/:id/items', toValue(args)] as const
}

export function getV2ImagesCollectionsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesCollectionsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.collections[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesCollectionsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesCollectionsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.collections[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/images/collections/:id/items', 'POST'] as const
}

export function getPostV2ImagesCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>,
    ) {
      return parseResponse(client.v2.images.collections[':id'].items.$post(args, options))
    },
  })
}

export function usePostV2ImagesCollectionsIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.images.collections)[':id']['items']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$post']>,
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
  const mutationDefaults = getPostV2ImagesCollectionsIdItemsMutationOptions<
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

export function getDeleteV2ImagesCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/images/collections/:id/items', 'DELETE'] as const
}

export function getDeleteV2ImagesCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ImagesCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>,
    ) {
      return parseResponse(client.v2.images.collections[':id'].items.$delete(args, options))
    },
  })
}

export function useDeleteV2ImagesCollectionsIdItems<
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
                    ReturnType<(typeof client.v2.images.collections)[':id']['items']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$delete']>,
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
  const mutationDefaults = getDeleteV2ImagesCollectionsIdItemsMutationOptions<
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

export function getV2ImagesLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.licenses.$get>>,
) {
  return ['v2', '/v2/images/licenses', toValue(args)] as const
}

export function getV2ImagesLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>
            >
          >,
          ReturnType<typeof getV2ImagesLicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesLicensesMutationKey() {
  return ['v2', '/v2/images/licenses', 'POST'] as const
}

export function getPostV2ImagesLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.images.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.licenses.$post>) {
      return parseResponse(client.v2.images.licenses.$post(args, options))
    },
  })
}

export function usePostV2ImagesLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.images.licenses.$post>,
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
  const mutationDefaults = getPostV2ImagesLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ImagesLicensesIdDownloadsMutationKey() {
  return ['v2', '/v2/images/licenses/:id/downloads', 'POST'] as const
}

export function getPostV2ImagesLicensesIdDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesLicensesIdDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>,
    ) {
      return parseResponse(client.v2.images.licenses[':id'].downloads.$post(args, options))
    },
  })
}

export function usePostV2ImagesLicensesIdDownloads<
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
                Awaited<ReturnType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.images.licenses)[':id']['downloads']['$post']>,
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
  const mutationDefaults = getPostV2ImagesLicensesIdDownloadsMutationOptions<
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

export function getV2ImagesRecommendationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.recommendations.$get>>,
) {
  return ['v2', '/v2/images/recommendations', toValue(args)] as const
}

export function getV2ImagesRecommendationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.recommendations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesRecommendationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.recommendations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.recommendations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesRecommendationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesRecommendationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesRecommendationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.recommendations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.$get>>,
) {
  return ['v2', '/v2/images/search', toValue(args)] as const
}

export function getV2ImagesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>
            >
          >,
          ReturnType<typeof getV2ImagesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesSearchSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.suggestions.$get>>,
) {
  return ['v2', '/v2/images/search/suggestions', toValue(args)] as const
}

export function getV2ImagesSearchSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesSearchSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.search.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesSearchSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.search.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesSearchSuggestionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesSearchSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesSearchSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.search.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ImagesSearchSuggestionsMutationKey() {
  return ['v2', '/v2/images/search/suggestions', 'POST'] as const
}

export function getPostV2ImagesSearchSuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.images.search.suggestions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ImagesSearchSuggestionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.images.search.suggestions.$post>) {
      return parseResponse(client.v2.images.search.suggestions.$post(args, options))
    },
  })
}

export function usePostV2ImagesSearchSuggestions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.images.search.suggestions.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.images.search.suggestions.$post>,
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
  const mutationDefaults = getPostV2ImagesSearchSuggestionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ImagesUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.updated.$get>>,
) {
  return ['v2', '/v2/images/updated', toValue(args)] as const
}

export function getV2ImagesUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.updated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images.updated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.images.updated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>
            >
          >,
          ReturnType<typeof getV2ImagesUpdatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images.updated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['$get']>>,
) {
  return ['v2', '/v2/images/:id', toValue(args)] as const
}

export function getV2ImagesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2ImagesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ImagesIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>>,
) {
  return ['v2', '/v2/images/:id/similar', toValue(args)] as const
}

export function getV2ImagesIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ImagesIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.images[':id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ImagesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ImagesIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ImagesIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.images[':id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2OauthAccessTokenMutationKey() {
  return ['v2', '/v2/oauth/access_token', 'POST'] as const
}

export function getPostV2OauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.access_token.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2OauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.oauth.access_token.$post>) {
      return parseResponse(client.v2.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostV2OauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.access_token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.oauth.access_token.$post>,
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
  const mutationDefaults = getPostV2OauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getV2OauthAuthorizeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.oauth.authorize.$get>>,
) {
  return ['v2', '/v2/oauth/authorize', toValue(args)] as const
}

export function getV2OauthAuthorizeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.oauth.authorize.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2OauthAuthorizeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.oauth.authorize.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2OauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.oauth.authorize.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>
            >
          >,
          ReturnType<typeof getV2OauthAuthorizeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthAuthorizeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2OauthAuthorizeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.oauth.authorize.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SfxQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.$get>>,
) {
  return ['v2', '/v2/sfx', toValue(args)] as const
}

export function getV2SfxQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SfxQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sfx.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Sfx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
          ReturnType<typeof getV2SfxQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SfxQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SfxQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sfx.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SfxLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.licenses.$get>>,
) {
  return ['v2', '/v2/sfx/licenses', toValue(args)] as const
}

export function getV2SfxLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SfxLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sfx.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SfxLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>
            >
          >,
          ReturnType<typeof getV2SfxLicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SfxLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sfx.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2SfxLicensesMutationKey() {
  return ['v2', '/v2/sfx/licenses', 'POST'] as const
}

export function getPostV2SfxLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.sfx.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SfxLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.sfx.licenses.$post>) {
      return parseResponse(client.v2.sfx.licenses.$post(args, options))
    },
  })
}

export function usePostV2SfxLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.sfx.licenses.$post>,
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
  const mutationDefaults = getPostV2SfxLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SfxLicensesIdDownloadsMutationKey() {
  return ['v2', '/v2/sfx/licenses/:id/downloads', 'POST'] as const
}

export function getPostV2SfxLicensesIdDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SfxLicensesIdDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>,
    ) {
      return parseResponse(client.v2.sfx.licenses[':id'].downloads.$post(args, options))
    },
  })
}

export function usePostV2SfxLicensesIdDownloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.sfx.licenses)[':id']['downloads']['$post']>,
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
  const mutationDefaults = getPostV2SfxLicensesIdDownloadsMutationOptions<TError, TOnMutateResult>(
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

export function getV2SfxSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.search.$get>>,
) {
  return ['v2', '/v2/sfx/search', toValue(args)] as const
}

export function getV2SfxSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SfxSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sfx.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SfxSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sfx.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
          >,
          ReturnType<typeof getV2SfxSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SfxSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sfx.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SfxIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sfx)[':id']['$get']>>,
) {
  return ['v2', '/v2/sfx/:id', toValue(args)] as const
}

export function getV2SfxIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sfx)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SfxIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sfx[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SfxId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.sfx)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2SfxIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SfxIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sfx[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.$get>>,
) {
  return ['v2', '/v2/test', toValue(args)] as const
}

export function getV2TestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.test.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Test<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>
          >,
          ReturnType<typeof getV2TestQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.test.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2TestValidateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.validate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/test/validate', keyArgs] as const
}

export function getV2TestValidateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.validate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2TestValidateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.test.validate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2TestValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.test.validate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>
            >
          >,
          ReturnType<typeof getV2TestValidateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2TestValidateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2TestValidateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.test.validate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UserQueryKey() {
  return ['v2', '/v2/user'] as const
}

export function getV2UserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
          >,
          ReturnType<typeof getV2UserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UserAccessTokenQueryKey() {
  return ['v2', '/v2/user/access_token'] as const
}

export function getV2UserAccessTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UserAccessTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.user.access_token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UserAccessToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>
            >
          >,
          ReturnType<typeof getV2UserAccessTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UserAccessTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.user.access_token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UserSubscriptionsQueryKey() {
  return ['v2', '/v2/user/subscriptions'] as const
}

export function getV2UserSubscriptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UserSubscriptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.user.subscriptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UserSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getV2UserSubscriptionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UserSubscriptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.user.subscriptions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.$get>>,
) {
  return ['v2', '/v2/videos', toValue(args)] as const
}

export function getV2VideosQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
          >,
          ReturnType<typeof getV2VideosQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VideosQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.categories.$get>>,
) {
  return ['v2', '/v2/videos/categories', toValue(args)] as const
}

export function getV2VideosCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.categories.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.categories.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.categories.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
            >
          >,
          ReturnType<typeof getV2VideosCategoriesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.categories.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosCollectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.$get>>,
) {
  return ['v2', '/v2/videos/collections', toValue(args)] as const
}

export function getV2VideosCollectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
            >
          >,
          ReturnType<typeof getV2VideosCollectionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VideosCollectionsMutationKey() {
  return ['v2', '/v2/videos/collections', 'POST'] as const
}

export function getPostV2VideosCollectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.videos.collections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VideosCollectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.videos.collections.$post>) {
      return parseResponse(client.v2.videos.collections.$post(args, options))
    },
  })
}

export function usePostV2VideosCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.videos.collections.$post>,
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
  const mutationDefaults = getPostV2VideosCollectionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2VideosCollectionsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.featured.$get>>,
) {
  return ['v2', '/v2/videos/collections/featured', toValue(args)] as const
}

export function getV2VideosCollectionsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollectionsFeatured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.collections.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
              >
            >
          >,
          ReturnType<typeof getV2VideosCollectionsFeaturedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosCollectionsFeaturedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>
  >,
) {
  return ['v2', '/v2/videos/collections/featured/:id', toValue(args)] as const
}

export function getV2VideosCollectionsFeaturedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsFeaturedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections.featured[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollectionsFeaturedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VideosCollectionsFeaturedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsFeaturedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsFeaturedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections.featured[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosCollectionsFeaturedIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/videos/collections/featured/:id/items', toValue(args)] as const
}

export function getV2VideosCollectionsFeaturedIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsFeaturedIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections.featured[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollectionsFeaturedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
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
                  ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV2VideosCollectionsFeaturedIdItemsQueryKey>
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
            ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsFeaturedIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsFeaturedIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections.featured[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosCollectionsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>>,
) {
  return ['v2', '/v2/videos/collections/:id', toValue(args)] as const
}

export function getV2VideosCollectionsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VideosCollectionsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VideosCollectionsIdMutationKey() {
  return ['v2', '/v2/videos/collections/:id', 'POST'] as const
}

export function getPostV2VideosCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VideosCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']>,
    ) {
      return parseResponse(client.v2.videos.collections[':id'].$post(args, options))
    },
  })
}

export function usePostV2VideosCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.videos.collections)[':id']['$post']>,
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
  const mutationDefaults = getPostV2VideosCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV2VideosCollectionsIdMutationKey() {
  return ['v2', '/v2/videos/collections/:id', 'DELETE'] as const
}

export function getDeleteV2VideosCollectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VideosCollectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']>,
    ) {
      return parseResponse(client.v2.videos.collections[':id'].$delete(args, options))
    },
  })
}

export function useDeleteV2VideosCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.videos.collections)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV2VideosCollectionsIdMutationOptions<TError, TOnMutateResult>(
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

export function getV2VideosCollectionsIdItemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>
  >,
) {
  return ['v2', '/v2/videos/collections/:id/items', toValue(args)] as const
}

export function getV2VideosCollectionsIdItemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosCollectionsIdItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.collections[':id'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VideosCollectionsIdItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsIdItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosCollectionsIdItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.collections[':id'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VideosCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/videos/collections/:id/items', 'POST'] as const
}

export function getPostV2VideosCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VideosCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>,
    ) {
      return parseResponse(client.v2.videos.collections[':id'].items.$post(args, options))
    },
  })
}

export function usePostV2VideosCollectionsIdItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$post']>,
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
  const mutationDefaults = getPostV2VideosCollectionsIdItemsMutationOptions<
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

export function getDeleteV2VideosCollectionsIdItemsMutationKey() {
  return ['v2', '/v2/videos/collections/:id/items', 'DELETE'] as const
}

export function getDeleteV2VideosCollectionsIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2VideosCollectionsIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>,
    ) {
      return parseResponse(client.v2.videos.collections[':id'].items.$delete(args, options))
    },
  })
}

export function useDeleteV2VideosCollectionsIdItems<
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
                    ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$delete']>,
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
  const mutationDefaults = getDeleteV2VideosCollectionsIdItemsMutationOptions<
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

export function getV2VideosLicensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.licenses.$get>>,
) {
  return ['v2', '/v2/videos/licenses', toValue(args)] as const
}

export function getV2VideosLicensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.licenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosLicensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.licenses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.licenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>
            >
          >,
          ReturnType<typeof getV2VideosLicensesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosLicensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosLicensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.licenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2VideosLicensesMutationKey() {
  return ['v2', '/v2/videos/licenses', 'POST'] as const
}

export function getPostV2VideosLicensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.videos.licenses.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VideosLicensesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.videos.licenses.$post>) {
      return parseResponse(client.v2.videos.licenses.$post(args, options))
    },
  })
}

export function usePostV2VideosLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.videos.licenses.$post>,
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
  const mutationDefaults = getPostV2VideosLicensesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2VideosLicensesIdDownloadsMutationKey() {
  return ['v2', '/v2/videos/licenses/:id/downloads', 'POST'] as const
}

export function getPostV2VideosLicensesIdDownloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2VideosLicensesIdDownloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>,
    ) {
      return parseResponse(client.v2.videos.licenses[':id'].downloads.$post(args, options))
    },
  })
}

export function usePostV2VideosLicensesIdDownloads<
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
                Awaited<ReturnType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2.videos.licenses)[':id']['downloads']['$post']>,
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
  const mutationDefaults = getPostV2VideosLicensesIdDownloadsMutationOptions<
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

export function getV2VideosSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.$get>>,
) {
  return ['v2', '/v2/videos/search', toValue(args)] as const
}

export function getV2VideosSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>
            >
          >,
          ReturnType<typeof getV2VideosSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosSearchSuggestionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.suggestions.$get>>,
) {
  return ['v2', '/v2/videos/search/suggestions', toValue(args)] as const
}

export function getV2VideosSearchSuggestionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.suggestions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosSearchSuggestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.search.suggestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosSearchSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.search.suggestions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>
              >
            >
          >,
          ReturnType<typeof getV2VideosSearchSuggestionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosSearchSuggestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosSearchSuggestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.search.suggestions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosUpdatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.updated.$get>>,
) {
  return ['v2', '/v2/videos/updated', toValue(args)] as const
}

export function getV2VideosUpdatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.updated.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosUpdatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos.updated.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.videos.updated.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>
            >
          >,
          ReturnType<typeof getV2VideosUpdatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosUpdatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosUpdatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos.updated.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['$get']>>,
) {
  return ['v2', '/v2/videos/:id', toValue(args)] as const
}

export function getV2VideosIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2VideosIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2VideosIdSimilarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>>,
) {
  return ['v2', '/v2/videos/:id/similar', toValue(args)] as const
}

export function getV2VideosIdSimilarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2VideosIdSimilarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.videos[':id'].similar.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2VideosIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2VideosIdSimilarQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosIdSimilarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2VideosIdSimilarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.videos[':id'].similar.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
