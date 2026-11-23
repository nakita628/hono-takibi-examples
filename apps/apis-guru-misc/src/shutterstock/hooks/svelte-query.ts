import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getV2AiAudioDescriptorsQueryKey(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
) {
  return ['v2', '/v2/ai/audio/descriptors', args] as const
}

export function getV2AiAudioDescriptorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioDescriptorsQueryKey>
  >({
    queryKey: getV2AiAudioDescriptorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.ai.audio.descriptors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AiAudioDescriptors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.ai.audio.descriptors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.descriptors.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AiAudioDescriptorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2AiAudioDescriptorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AiAudioInstrumentsQueryKey(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
) {
  return ['v2', '/v2/ai/audio/instruments', args] as const
}

export function getV2AiAudioInstrumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioInstrumentsQueryKey>
  >({
    queryKey: getV2AiAudioInstrumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.ai.audio.instruments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AiAudioInstruments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.ai.audio.instruments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.instruments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AiAudioInstrumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2AiAudioInstrumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2AiAudioRendersQueryKey(
  args: InferRequestType<typeof client.v2.ai.audio.renders.$get>,
) {
  return ['v2', '/v2/ai/audio/renders', args] as const
}

export function getV2AiAudioRendersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.ai.audio.renders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AiAudioRendersQueryKey>
  >({
    queryKey: getV2AiAudioRendersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.ai.audio.renders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AiAudioRenders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.ai.audio.renders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AiAudioRendersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AiAudioRendersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2AiAudioRenders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.ai.audio.renders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.ai.audio.renders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AiAudioRendersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AudioQueryKey(args: InferRequestType<typeof client.v2.audio.$get>) {
  return ['v2', '/v2/audio', args] as const
}

export function getV2AudioQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2AudioQueryKey>
  >({
    queryKey: getV2AudioQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Audio<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2AudioQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2AudioCollectionsQueryKey(
  args: InferRequestType<typeof client.v2.audio.collections.$get>,
) {
  return ['v2', '/v2/audio/collections', args] as const
}

export function getV2AudioCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.collections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioCollectionsQueryKey>
  >({
    queryKey: getV2AudioCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2AudioCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.audio.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AudioCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AudioCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/audio/collections/:id', args] as const
}

export function getV2AudioCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AudioCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AudioCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.audio.collections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2AudioCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2AudioCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AudioCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2AudioCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AudioCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AudioCollectionsIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/audio/collections/:id/items', args] as const
}

export function getV2AudioCollectionsIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2AudioCollectionsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.collections[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2AudioCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.audio.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.audio.collections)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2AudioCollectionsIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2AudioCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AudioCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2AudioCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2AudioCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AudioGenresQueryKey(
  args: InferRequestType<typeof client.v2.audio.genres.$get>,
) {
  return ['v2', '/v2/audio/genres', args] as const
}

export function getV2AudioGenresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.genres.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioGenresQueryKey>
  >({
    queryKey: getV2AudioGenresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.genres.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioGenres<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.genres.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.genres.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioGenresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioGenresQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2AudioInstrumentsQueryKey(
  args: InferRequestType<typeof client.v2.audio.instruments.$get>,
) {
  return ['v2', '/v2/audio/instruments', args] as const
}

export function getV2AudioInstrumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.instruments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioInstrumentsQueryKey>
  >({
    queryKey: getV2AudioInstrumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.instruments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioInstruments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.instruments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.instruments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioInstrumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioInstrumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2AudioLicensesQueryKey(
  args: InferRequestType<typeof client.v2.audio.licenses.$get>,
) {
  return ['v2', '/v2/audio/licenses', args] as const
}

export function getV2AudioLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioLicensesQueryKey>
  >({
    queryKey: getV2AudioLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2AudioLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.licenses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.audio.licenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AudioLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2AudioLicensesIdDownloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2AudioLicensesIdDownloadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2AudioMoodsQueryKey(args: InferRequestType<typeof client.v2.audio.moods.$get>) {
  return ['v2', '/v2/audio/moods', args] as const
}

export function getV2AudioMoodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.moods.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioMoodsQueryKey>
  >({
    queryKey: getV2AudioMoodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.moods.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioMoods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.moods.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.moods.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioMoodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioMoodsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2AudioSearchQueryKey(
  args: InferRequestType<typeof client.v2.audio.search.$get>,
) {
  return ['v2', '/v2/audio/search', args] as const
}

export function getV2AudioSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.audio.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioSearchQueryKey>
  >({
    queryKey: getV2AudioSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.audio.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2AudioIdQueryKey(
  args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
) {
  return ['v2', '/v2/audio/:id', args] as const
}

export function getV2AudioIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2.audio)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2AudioIdQueryKey>
  >({
    queryKey: getV2AudioIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.audio[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2AudioId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.audio)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.audio)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2AudioIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2AudioIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2BulkSearchImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.bulk_search.images.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.bulk_search.images.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2BulkSearchImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CatalogCollectionsQueryKey(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
) {
  return ['v2', '/v2/catalog/collections', args] as const
}

export function getV2CatalogCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.catalog.collections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogCollectionsQueryKey>
  >({
    queryKey: getV2CatalogCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.catalog.collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2CatalogCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.catalog.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2CatalogCollectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2CatalogCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.catalog.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CatalogCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2CatalogCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2CatalogCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPatchV2CatalogCollectionsCollectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV2CatalogCollectionsCollectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2CatalogCollectionsCollectionIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CatalogCollectionsCollectionIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2CatalogCollectionsCollectionIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2CatalogCollectionsCollectionIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CatalogSearchQueryKey(
  args: InferRequestType<typeof client.v2.catalog.search.$get>,
) {
  return ['v2', '/v2/catalog/search', args] as const
}

export function getV2CatalogSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.catalog.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CatalogSearchQueryKey>
  >({
    queryKey: getV2CatalogSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.catalog.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CatalogSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.catalog.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.catalog.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CatalogSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CatalogSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ContributorsQueryKey(
  args: InferRequestType<typeof client.v2.contributors.$get>,
) {
  return ['v2', '/v2/contributors', args] as const
}

export function getV2ContributorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.contributors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ContributorsQueryKey>
  >({
    queryKey: getV2ContributorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contributors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Contributors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.contributors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.contributors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ContributorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ContributorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ContributorsContributorIdQueryKey(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
) {
  return ['v2', '/v2/contributors/:contributor_id', args] as const
}

export function getV2ContributorsContributorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ContributorsContributorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ContributorsContributorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.contributors)[':contributor_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.contributors)[':contributor_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ContributorsContributorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ContributorsContributorIdCollectionsQueryKey(
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections', args] as const
}

export function getV2ContributorsContributorIdCollectionsQueryOptions<
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
  args: InferRequestType<(typeof client.v2.contributors)[':contributor_id']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ContributorsContributorIdCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ContributorsContributorIdCollections<
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
  args: () => InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2ContributorsContributorIdCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ContributorsContributorIdCollectionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2ContributorsContributorIdCollectionsIdQueryKey(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id', args] as const
}

export function getV2ContributorsContributorIdCollectionsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ContributorsContributorIdCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ContributorsContributorIdCollectionsId<
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
  args: () => InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ContributorsContributorIdCollectionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV2ContributorsContributorIdCollectionsIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
) {
  return ['v2', '/v2/contributors/:contributor_id/collections/:id/items', args] as const
}

export function getV2ContributorsContributorIdCollectionsIdItemsQueryOptions<
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
  args: InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ContributorsContributorIdCollectionsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.contributors[':contributor_id'].collections[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ContributorsContributorIdCollectionsIdItems<
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
  args: () => InferRequestType<
    (typeof client.v2.contributors)[':contributor_id']['collections'][':id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ContributorsContributorIdCollectionsIdItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV2CvImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.images.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.cv.images.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2CvImagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2CvKeywordsQueryKey(args: InferRequestType<typeof client.v2.cv.keywords.$get>) {
  return ['v2', '/v2/cv/keywords', args] as const
}

export function getV2CvKeywordsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cv.keywords.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvKeywordsQueryKey>
  >({
    queryKey: getV2CvKeywordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cv.keywords.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CvKeywords<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.cv.keywords.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.keywords.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CvKeywordsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CvKeywordsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2CvSimilarImagesQueryKey(
  args: InferRequestType<typeof client.v2.cv.similar.images.$get>,
) {
  return ['v2', '/v2/cv/similar/images', args] as const
}

export function getV2CvSimilarImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cv.similar.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvSimilarImagesQueryKey>
  >({
    queryKey: getV2CvSimilarImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cv.similar.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CvSimilarImages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.cv.similar.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.images.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CvSimilarImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CvSimilarImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2CvSimilarVideosQueryKey(
  args: InferRequestType<typeof client.v2.cv.similar.videos.$get>,
) {
  return ['v2', '/v2/cv/similar/videos', args] as const
}

export function getV2CvSimilarVideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.cv.similar.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CvSimilarVideosQueryKey>
  >({
    queryKey: getV2CvSimilarVideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.cv.similar.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2CvSimilarVideos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.cv.similar.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.cv.similar.videos.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2CvSimilarVideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CvSimilarVideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialCategoriesQueryKey() {
  return ['v2', '/v2/editorial/categories'] as const
}

export function getV2EditorialCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialCategoriesQueryKey>
  >({
    queryKey: getV2EditorialCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialImagesCategoriesQueryKey() {
  return ['v2', '/v2/editorial/images/categories'] as const
}

export function getV2EditorialImagesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesCategoriesQueryKey>
  >({
    queryKey: getV2EditorialImagesCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.images.categories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialImagesCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialImagesCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialImagesLicensesQueryKey(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
) {
  return ['v2', '/v2/editorial/images/licenses', args] as const
}

export function getV2EditorialImagesLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLicensesQueryKey>
  >({
    queryKey: getV2EditorialImagesLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.images.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.images.licenses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialImagesLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesLicensesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2EditorialImagesLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EditorialImagesLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2EditorialImagesLivefeedsQueryKey(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
) {
  return ['v2', '/v2/editorial/images/livefeeds', args] as const
}

export function getV2EditorialImagesLivefeedsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesLivefeedsQueryKey>
  >({
    queryKey: getV2EditorialImagesLivefeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.livefeeds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesLivefeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.images.livefeeds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.images.livefeeds.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialImagesLivefeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesLivefeedsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialImagesLivefeedsIdQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id', args] as const
}

export function getV2EditorialImagesLivefeedsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialImagesLivefeedsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.livefeeds[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesLivefeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesLivefeedsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialImagesLivefeedsIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/editorial/images/livefeeds/:id/items', args] as const
}

export function getV2EditorialImagesLivefeedsIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialImagesLivefeedsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.livefeeds[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesLivefeedsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.editorial.images.livefeeds)[':id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getV2EditorialImagesLivefeedsIdItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesLivefeedsIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialImagesSearchQueryKey(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
) {
  return ['v2', '/v2/editorial/images/search', args] as const
}

export function getV2EditorialImagesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.images.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesSearchQueryKey>
  >({
    queryKey: getV2EditorialImagesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.images.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialImagesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialImagesUpdatedQueryKey(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
) {
  return ['v2', '/v2/editorial/images/updated', args] as const
}

export function getV2EditorialImagesUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.images.updated.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialImagesUpdatedQueryKey>
  >({
    queryKey: getV2EditorialImagesUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images.updated.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesUpdated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.images.updated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.images.updated.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialImagesUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialImagesUpdatedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialImagesIdQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/images/:id', args] as const
}

export function getV2EditorialImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.images[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialImagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.images)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial.images)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialImagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2EditorialLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.licenses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.editorial.licenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EditorialLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2EditorialLivefeedsQueryKey(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
) {
  return ['v2', '/v2/editorial/livefeeds', args] as const
}

export function getV2EditorialLivefeedsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialLivefeedsQueryKey>
  >({
    queryKey: getV2EditorialLivefeedsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.livefeeds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialLivefeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.livefeeds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.livefeeds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialLivefeedsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialLivefeedsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialLivefeedsIdQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/livefeeds/:id', args] as const
}

export function getV2EditorialLivefeedsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialLivefeedsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.livefeeds[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialLivefeedsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialLivefeedsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialLivefeedsIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/editorial/livefeeds/:id/items', args] as const
}

export function getV2EditorialLivefeedsIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialLivefeedsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.livefeeds[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialLivefeedsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial.livefeeds)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialLivefeedsIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialSearchQueryKey(
  args: InferRequestType<typeof client.v2.editorial.search.$get>,
) {
  return ['v2', '/v2/editorial/search', args] as const
}

export function getV2EditorialSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.editorial.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialSearchQueryKey>
  >({
    queryKey: getV2EditorialSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2EditorialSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialUpdatedQueryKey(
  args: InferRequestType<typeof client.v2.editorial.updated.$get>,
) {
  return ['v2', '/v2/editorial/updated', args] as const
}

export function getV2EditorialUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.editorial.updated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialUpdatedQueryKey>
  >({
    queryKey: getV2EditorialUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.updated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2EditorialUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.updated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.updated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialUpdatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialVideosCategoriesQueryKey() {
  return ['v2', '/v2/editorial/videos/categories'] as const
}

export function getV2EditorialVideosCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosCategoriesQueryKey>
  >({
    queryKey: getV2EditorialVideosCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.videos.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialVideosCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.videos.categories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialVideosCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialVideosCategoriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialVideosLicensesQueryKey(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
) {
  return ['v2', '/v2/editorial/videos/licenses', args] as const
}

export function getV2EditorialVideosLicensesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosLicensesQueryKey>
  >({
    queryKey: getV2EditorialVideosLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.videos.licenses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialVideosLicenses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.videos.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.editorial.videos.licenses.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialVideosLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialVideosLicensesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2EditorialVideosLicenses<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2EditorialVideosLicensesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2EditorialVideosSearchQueryKey(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
) {
  return ['v2', '/v2/editorial/videos/search', args] as const
}

export function getV2EditorialVideosSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.editorial.videos.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialVideosSearchQueryKey>
  >({
    queryKey: getV2EditorialVideosSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.videos.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialVideosSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.editorial.videos.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.editorial.videos.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialVideosSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2EditorialVideosSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2EditorialVideosIdQueryKey(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/videos/:id', args] as const
}

export function getV2EditorialVideosIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2EditorialVideosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial.videos[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2EditorialVideosId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial.videos)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial.videos)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialVideosIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2EditorialIdQueryKey(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
) {
  return ['v2', '/v2/editorial/:id', args] as const
}

export function getV2EditorialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2EditorialIdQueryKey>
  >({
    queryKey: getV2EditorialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.editorial[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2EditorialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.editorial)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.editorial)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2EditorialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2EditorialIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ImagesQueryKey(args: InferRequestType<typeof client.v2.images.$get>) {
  return ['v2', '/v2/images', args] as const
}

export function getV2ImagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2ImagesQueryKey>
  >({
    queryKey: getV2ImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Images<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2Images<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.images.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesCategoriesQueryKey(
  args: InferRequestType<typeof client.v2.images.categories.$get>,
) {
  return ['v2', '/v2/images/categories', args] as const
}

export function getV2ImagesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCategoriesQueryKey>
  >({
    queryKey: getV2ImagesCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ImagesCollectionsQueryKey(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
) {
  return ['v2', '/v2/images/collections', args] as const
}

export function getV2ImagesCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.images.collections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsQueryKey>
  >({
    queryKey: getV2ImagesCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2ImagesCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.images.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesCollectionsFeaturedQueryKey(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
) {
  return ['v2', '/v2/images/collections/featured', args] as const
}

export function getV2ImagesCollectionsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.images.collections.featured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesCollectionsFeaturedQueryKey>
  >({
    queryKey: getV2ImagesCollectionsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections.featured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesCollectionsFeatured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.collections.featured.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.images.collections.featured.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesCollectionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesCollectionsFeaturedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ImagesCollectionsFeaturedIdQueryKey(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
) {
  return ['v2', '/v2/images/collections/featured/:id', args] as const
}

export function getV2ImagesCollectionsFeaturedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ImagesCollectionsFeaturedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections.featured[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesCollectionsFeaturedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images.collections.featured)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesCollectionsFeaturedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ImagesCollectionsFeaturedIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/images/collections/featured/:id/items', args] as const
}

export function getV2ImagesCollectionsFeaturedIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ImagesCollectionsFeaturedIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections.featured[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesCollectionsFeaturedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.images.collections.featured)[':id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesCollectionsFeaturedIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ImagesCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/images/collections/:id', args] as const
}

export function getV2ImagesCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ImagesCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images.collections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ImagesCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2ImagesCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ImagesCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesCollectionsIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/images/collections/:id/items', args] as const
}

export function getV2ImagesCollectionsIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ImagesCollectionsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.collections[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.images.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images.collections)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesCollectionsIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ImagesCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2ImagesCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2ImagesCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesLicensesQueryKey(
  args: InferRequestType<typeof client.v2.images.licenses.$get>,
) {
  return ['v2', '/v2/images/licenses', args] as const
}

export function getV2ImagesLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesLicensesQueryKey>
  >({
    queryKey: getV2ImagesLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2ImagesLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.licenses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.images.licenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2ImagesLicensesIdDownloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesLicensesIdDownloadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesRecommendationsQueryKey(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
) {
  return ['v2', '/v2/images/recommendations', args] as const
}

export function getV2ImagesRecommendationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.images.recommendations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesRecommendationsQueryKey>
  >({
    queryKey: getV2ImagesRecommendationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.recommendations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesRecommendations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.recommendations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.recommendations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesRecommendationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesRecommendationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2ImagesSearchQueryKey(
  args: InferRequestType<typeof client.v2.images.search.$get>,
) {
  return ['v2', '/v2/images/search', args] as const
}

export function getV2ImagesSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesSearchQueryKey>
  >({
    queryKey: getV2ImagesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ImagesSearchSuggestionsQueryKey(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
) {
  return ['v2', '/v2/images/search/suggestions', args] as const
}

export function getV2ImagesSearchSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.images.search.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesSearchSuggestionsQueryKey>
  >({
    queryKey: getV2ImagesSearchSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.search.suggestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesSearchSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.search.suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.images.search.suggestions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesSearchSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2ImagesSearchSuggestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2ImagesSearchSuggestions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2ImagesSearchSuggestionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2ImagesUpdatedQueryKey(
  args: InferRequestType<typeof client.v2.images.updated.$get>,
) {
  return ['v2', '/v2/images/updated', args] as const
}

export function getV2ImagesUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.images.updated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesUpdatedQueryKey>
  >({
    queryKey: getV2ImagesUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images.updated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.images.updated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.images.updated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesUpdatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ImagesIdQueryKey(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
) {
  return ['v2', '/v2/images/:id', args] as const
}

export function getV2ImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ImagesIdQueryKey>
  >({
    queryKey: getV2ImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2ImagesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2ImagesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2ImagesIdSimilarQueryKey(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
) {
  return ['v2', '/v2/images/:id/similar', args] as const
}

export function getV2ImagesIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2ImagesIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.images[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2ImagesIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.images)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.images)[':id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2ImagesIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2OauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.oauth.access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2OauthAccessTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2OauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.v2.oauth.authorize.$get>,
) {
  return ['v2', '/v2/oauth/authorize', args] as const
}

export function getV2OauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2OauthAuthorizeQueryKey>
  >({
    queryKey: getV2OauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2OauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.oauth.authorize.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.oauth.authorize.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2OauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2OauthAuthorizeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2SfxQueryKey(args: InferRequestType<typeof client.v2.sfx.$get>) {
  return ['v2', '/v2/sfx', args] as const
}

export function getV2SfxQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sfx.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SfxQueryKey>
  >({
    queryKey: getV2SfxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sfx.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Sfx<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.sfx.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2SfxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SfxQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2SfxLicensesQueryKey(
  args: InferRequestType<typeof client.v2.sfx.licenses.$get>,
) {
  return ['v2', '/v2/sfx/licenses', args] as const
}

export function getV2SfxLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sfx.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxLicensesQueryKey>
  >({
    queryKey: getV2SfxLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sfx.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2SfxLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.sfx.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SfxLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SfxLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2SfxLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.licenses.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.sfx.licenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SfxLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2SfxLicensesIdDownloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SfxLicensesIdDownloadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2SfxSearchQueryKey(args: InferRequestType<typeof client.v2.sfx.search.$get>) {
  return ['v2', '/v2/sfx/search', args] as const
}

export function getV2SfxSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sfx.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxSearchQueryKey>
  >({
    queryKey: getV2SfxSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sfx.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2SfxSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.sfx.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sfx.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SfxSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SfxSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2SfxIdQueryKey(args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>) {
  return ['v2', '/v2/sfx/:id', args] as const
}

export function getV2SfxIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v2.sfx)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SfxIdQueryKey>
  >({
    queryKey: getV2SfxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sfx[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2SfxId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.sfx)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sfx)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SfxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SfxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2TestQueryKey(args: InferRequestType<typeof client.v2.test.$get>) {
  return ['v2', '/v2/test', args] as const
}

export function getV2TestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.test.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TestQueryKey>
  >({
    queryKey: getV2TestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.test.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Test<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.test.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2TestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2TestValidateQueryKey(
  args: InferRequestType<typeof client.v2.test.validate.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/test/validate', keyArgs] as const
}

export function getV2TestValidateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.test.validate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2TestValidateQueryKey>
  >({
    queryKey: getV2TestValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.test.validate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2TestValidate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.test.validate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.test.validate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TestValidateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2TestValidateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2UserQueryKey() {
  return ['v2', '/v2/user'] as const
}

export function getV2UserQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UserQueryKey>
  >({
    queryKey: getV2UserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2User<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UserQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2UserAccessTokenQueryKey() {
  return ['v2', '/v2/user/access_token'] as const
}

export function getV2UserAccessTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserAccessTokenQueryKey>
  >({
    queryKey: getV2UserAccessTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.access_token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UserAccessToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.access_token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserAccessTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UserAccessTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2UserSubscriptionsQueryKey() {
  return ['v2', '/v2/user/subscriptions'] as const
}

export function getV2UserSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UserSubscriptionsQueryKey>
  >({
    queryKey: getV2UserSubscriptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.user.subscriptions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2UserSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UserSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UserSubscriptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosQueryKey(args: InferRequestType<typeof client.v2.videos.$get>) {
  return ['v2', '/v2/videos', args] as const
}

export function getV2VideosQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.videos.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2VideosQueryKey>
  >({
    queryKey: getV2VideosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Videos<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosCategoriesQueryKey(
  args: InferRequestType<typeof client.v2.videos.categories.$get>,
) {
  return ['v2', '/v2/videos/categories', args] as const
}

export function getV2VideosCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.videos.categories.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCategoriesQueryKey>
  >({
    queryKey: getV2VideosCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.categories.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosCategoriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosCollectionsQueryKey(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
) {
  return ['v2', '/v2/videos/collections', args] as const
}

export function getV2VideosCollectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.videos.collections.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsQueryKey>
  >({
    queryKey: getV2VideosCollectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosCollections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.collections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosCollectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosCollectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2VideosCollections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.videos.collections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VideosCollectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2VideosCollectionsFeaturedQueryKey(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
) {
  return ['v2', '/v2/videos/collections/featured', args] as const
}

export function getV2VideosCollectionsFeaturedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.videos.collections.featured.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosCollectionsFeaturedQueryKey>
  >({
    queryKey: getV2VideosCollectionsFeaturedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections.featured.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosCollectionsFeatured<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.collections.featured.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.videos.collections.featured.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosCollectionsFeaturedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosCollectionsFeaturedQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VideosCollectionsFeaturedIdQueryKey(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/collections/featured/:id', args] as const
}

export function getV2VideosCollectionsFeaturedIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2VideosCollectionsFeaturedIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections.featured[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosCollectionsFeaturedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosCollectionsFeaturedIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VideosCollectionsFeaturedIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/videos/collections/featured/:id/items', args] as const
}

export function getV2VideosCollectionsFeaturedIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2VideosCollectionsFeaturedIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections.featured[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosCollectionsFeaturedIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections.featured)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v2.videos.collections.featured)[':id']['items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosCollectionsFeaturedIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VideosCollectionsIdQueryKey(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/collections/:id', args] as const
}

export function getV2VideosCollectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2VideosCollectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosCollectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.videos.collections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosCollectionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2VideosCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VideosCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2VideosCollectionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2VideosCollectionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2VideosCollectionsIdItemsQueryKey(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
) {
  return ['v2', '/v2/videos/collections/:id/items', args] as const
}

export function getV2VideosCollectionsIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2VideosCollectionsIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.collections[':id'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosCollectionsIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.videos.collections)[':id']['items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.videos.collections)[':id']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosCollectionsIdItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostV2VideosCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VideosCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteV2VideosCollectionsIdItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2VideosCollectionsIdItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2VideosLicensesQueryKey(
  args: InferRequestType<typeof client.v2.videos.licenses.$get>,
) {
  return ['v2', '/v2/videos/licenses', args] as const
}

export function getV2VideosLicensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.videos.licenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosLicensesQueryKey>
  >({
    queryKey: getV2VideosLicensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.licenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosLicenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.licenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosLicensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosLicensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV2VideosLicenses<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.licenses.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.videos.licenses.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VideosLicensesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostV2VideosLicensesIdDownloads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2VideosLicensesIdDownloadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2VideosSearchQueryKey(
  args: InferRequestType<typeof client.v2.videos.search.$get>,
) {
  return ['v2', '/v2/videos/search', args] as const
}

export function getV2VideosSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.videos.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosSearchQueryKey>
  >({
    queryKey: getV2VideosSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosSearchSuggestionsQueryKey(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
) {
  return ['v2', '/v2/videos/search/suggestions', args] as const
}

export function getV2VideosSearchSuggestionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosSearchSuggestionsQueryKey>
  >({
    queryKey: getV2VideosSearchSuggestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.search.suggestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosSearchSuggestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.search.suggestions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v2.videos.search.suggestions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosSearchSuggestionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV2VideosSearchSuggestionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV2VideosUpdatedQueryKey(
  args: InferRequestType<typeof client.v2.videos.updated.$get>,
) {
  return ['v2', '/v2/videos/updated', args] as const
}

export function getV2VideosUpdatedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.videos.updated.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosUpdatedQueryKey>
  >({
    queryKey: getV2VideosUpdatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos.updated.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosUpdated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.videos.updated.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.videos.updated.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosUpdatedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosUpdatedQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosIdQueryKey(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
) {
  return ['v2', '/v2/videos/:id', args] as const
}

export function getV2VideosIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2VideosIdQueryKey>
  >({
    queryKey: getV2VideosIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2VideosId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.videos)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2VideosIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV2VideosIdSimilarQueryKey(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
) {
  return ['v2', '/v2/videos/:id/similar', args] as const
}

export function getV2VideosIdSimilarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2VideosIdSimilarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.videos[':id'].similar.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV2VideosIdSimilar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.videos)[':id']['similar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.videos)[':id']['similar']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2VideosIdSimilarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
