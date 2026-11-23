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

export function getV1Key() {
  return ['v1'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV1ChatMutationKey() {
  return ['v1', '/v1/chat', 'POST'] as const
}

export function getPostV1ChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.chat.$post>) {
      return parseResponse(client.v1.chat.$post(args, options))
    },
  })
}

export function createPostV1Chat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.chat.$post>,
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
    const mutationDefaults = getPostV1ChatMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2ChatMutationKey() {
  return ['v2', '/v2/chat', 'POST'] as const
}

export function getPostV2ChatMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chat.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.chat.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ChatMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.chat.$post>) {
      return parseResponse(client.v2.chat.$post(args, options))
    },
  })
}

export function createPostV2Chat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chat.$post>>>>>,
        TError,
        InferRequestType<typeof client.v2.chat.$post>,
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
    const mutationDefaults = getPostV2ChatMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2ParseMutationKey() {
  return ['v2', '/v2/parse', 'POST'] as const
}

export function getPostV2ParseMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parse.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.parse.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParseMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.parse.$post>) {
      return parseResponse(client.v2.parse.$post(args, options))
    },
  })
}

export function createPostV2Parse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parse.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.parse.$post>,
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
    const mutationDefaults = getPostV2ParseMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1GenerateMutationKey() {
  return ['v1', '/v1/generate', 'POST'] as const
}

export function getPostV1GenerateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generate.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.generate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1GenerateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.generate.$post>) {
      return parseResponse(client.v1.generate.$post(args, options))
    },
  })
}

export function createPostV1Generate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.generate.$post>,
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
    const mutationDefaults = getPostV1GenerateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1EmbedMutationKey() {
  return ['v1', '/v1/embed', 'POST'] as const
}

export function getPostV1EmbedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.embed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.embed.$post>) {
      return parseResponse(client.v1.embed.$post(args, options))
    },
  })
}

export function createPostV1Embed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.embed.$post>,
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
    const mutationDefaults = getPostV1EmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2EmbedMutationKey() {
  return ['v2', '/v2/embed', 'POST'] as const
}

export function getPostV2EmbedMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.embed.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.embed.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EmbedMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.embed.$post>) {
      return parseResponse(client.v2.embed.$post(args, options))
    },
  })
}

export function createPostV2Embed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.embed.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.embed.$post>,
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
    const mutationDefaults = getPostV2EmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2AudioTranscriptionsMutationKey() {
  return ['v2', '/v2/audio/transcriptions', 'POST'] as const
}

export function getPostV2AudioTranscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.transcriptions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v2.audio.transcriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2AudioTranscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.audio.transcriptions.$post>) {
      return parseResponse(client.v2.audio.transcriptions.$post(args, options))
    },
  })
}

export function createPostV2AudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.transcriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.audio.transcriptions.$post>,
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
    const mutationDefaults = getPostV2AudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BatchesQueryKey(args: InferRequestType<typeof client.v2.batches.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/batches', keyArgs] as const
}

export function getV2BatchesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.batches.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BatchesQueryKey>
  >({
    queryKey: getV2BatchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.batches.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2Batches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.batches.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2BatchesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BatchesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2BatchesMutationKey() {
  return ['v2', '/v2/batches', 'POST'] as const
}

export function getPostV2BatchesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.batches.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BatchesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.batches.$post>) {
      return parseResponse(client.v2.batches.$post(args, options))
    },
  })
}

export function createPostV2Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.batches.$post>,
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
    const mutationDefaults = getPostV2BatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV2BatchesIdQueryKey(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/batches/:id', keyArgs] as const
}

export function getV2BatchesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BatchesIdQueryKey>
  >({
    queryKey: getV2BatchesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.batches[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV2BatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.batches)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2BatchesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2BatchesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV2BatchesIdCancelMutationKey() {
  return ['v2', '/v2/batches/:id:cancel', 'POST'] as const
}

export function getPostV2BatchesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2BatchesIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']>) {
      return parseResponse(client.v2.batches[':id:cancel'].$post(args, options))
    },
  })
}

export function createPostV2BatchesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.batches)[':id:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.batches)[':id:cancel']['$post']>,
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
    const mutationDefaults = getPostV2BatchesIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EmbedJobsQueryKey(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/embed-jobs', keyArgs] as const
}

export function getV1EmbedJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedJobsQueryKey>
  >({
    queryKey: getV1EmbedJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['embed-jobs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1EmbedJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['embed-jobs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmbedJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmbedJobsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1EmbedJobsMutationKey() {
  return ['v1', '/v1/embed-jobs', 'POST'] as const
}

export function getPostV1EmbedJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['embed-jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbedJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['embed-jobs']['$post']>) {
      return parseResponse(client.v1['embed-jobs'].$post(args, options))
    },
  })
}

export function createPostV1EmbedJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['embed-jobs']['$post']>,
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
    const mutationDefaults = getPostV1EmbedJobsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1EmbedJobsIdQueryKey(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/embed-jobs/:id', keyArgs] as const
}

export function getV1EmbedJobsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedJobsIdQueryKey>
  >({
    queryKey: getV1EmbedJobsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['embed-jobs'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1EmbedJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1EmbedJobsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EmbedJobsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1EmbedJobsIdCancelMutationKey() {
  return ['v1', '/v1/embed-jobs/:id/cancel', 'POST'] as const
}

export function getPostV1EmbedJobsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1EmbedJobsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>,
    ) {
      return parseResponse(client.v1['embed-jobs'][':id'].cancel.$post(args, options))
    },
  })
}

export function createPostV1EmbedJobsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['embed-jobs'][':id']['cancel']['$post']>,
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
    const mutationDefaults = getPostV1EmbedJobsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1RerankMutationKey() {
  return ['v1', '/v1/rerank', 'POST'] as const
}

export function getPostV1RerankMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rerank.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.rerank.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1RerankMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.rerank.$post>) {
      return parseResponse(client.v1.rerank.$post(args, options))
    },
  })
}

export function createPostV1Rerank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rerank.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.rerank.$post>,
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
    const mutationDefaults = getPostV1RerankMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV2RerankMutationKey() {
  return ['v2', '/v2/rerank', 'POST'] as const
}

export function getPostV2RerankMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.rerank.$post>>>>>,
    TError,
    InferRequestType<typeof client.v2.rerank.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2RerankMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.rerank.$post>) {
      return parseResponse(client.v2.rerank.$post(args, options))
    },
  })
}

export function createPostV2Rerank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.rerank.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.rerank.$post>,
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
    const mutationDefaults = getPostV2RerankMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ClassifyMutationKey() {
  return ['v1', '/v1/classify', 'POST'] as const
}

export function getPostV1ClassifyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classify.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.classify.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ClassifyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.classify.$post>) {
      return parseResponse(client.v1.classify.$post(args, options))
    },
  })
}

export function createPostV1Classify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classify.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.classify.$post>,
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
    const mutationDefaults = getPostV1ClassifyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DatasetsQueryKey(args: InferRequestType<typeof client.v1.datasets.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets', keyArgs] as const
}

export function getV1DatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsQueryKey>
  >({
    queryKey: getV1DatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatasetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1DatasetsMutationKey() {
  return ['v1', '/v1/datasets', 'POST'] as const
}

export function getPostV1DatasetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.datasets.$post>) {
      return parseResponse(client.v1.datasets.$post(args, options))
    },
  })
}

export function createPostV1Datasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.datasets.$post>,
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
    const mutationDefaults = getPostV1DatasetsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1DatasetsUsageQueryKey(
  args: InferRequestType<typeof client.v1.datasets.usage.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets/usage', keyArgs] as const
}

export function getV1DatasetsUsageQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.datasets.usage.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsUsageQueryKey>
  >({
    queryKey: getV1DatasetsUsageQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datasets.usage.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DatasetsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.datasets.usage.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatasetsUsageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatasetsUsageQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1DatasetsIdQueryKey(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/datasets/:id', keyArgs] as const
}

export function getV1DatasetsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdQueryKey>
  >({
    queryKey: getV1DatasetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.datasets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1DatasetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.datasets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DatasetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DatasetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1DatasetsIdMutationKey() {
  return ['v1', '/v1/datasets/:id', 'DELETE'] as const
}

export function getDeleteV1DatasetsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1DatasetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>) {
      return parseResponse(client.v1.datasets[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1DatasetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1DatasetsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SummarizeMutationKey() {
  return ['v1', '/v1/summarize', 'POST'] as const
}

export function getPostV1SummarizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.summarize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.summarize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SummarizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.summarize.$post>) {
      return parseResponse(client.v1.summarize.$post(args, options))
    },
  })
}

export function createPostV1Summarize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.summarize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.summarize.$post>,
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
    const mutationDefaults = getPostV1SummarizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1TokenizeMutationKey() {
  return ['v1', '/v1/tokenize', 'POST'] as const
}

export function getPostV1TokenizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenize.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.tokenize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TokenizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tokenize.$post>) {
      return parseResponse(client.v1.tokenize.$post(args, options))
    },
  })
}

export function createPostV1Tokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tokenize.$post>,
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
    const mutationDefaults = getPostV1TokenizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1DetokenizeMutationKey() {
  return ['v1', '/v1/detokenize', 'POST'] as const
}

export function getPostV1DetokenizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.detokenize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.detokenize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1DetokenizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.detokenize.$post>) {
      return parseResponse(client.v1.detokenize.$post(args, options))
    },
  })
}

export function createPostV1Detokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.detokenize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.detokenize.$post>,
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
    const mutationDefaults = getPostV1DetokenizeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConnectorsQueryKey(args: InferRequestType<typeof client.v1.connectors.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/connectors', keyArgs] as const
}

export function getV1ConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.connectors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >({
    queryKey: getV1ConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.connectors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1ConnectorsMutationKey() {
  return ['v1', '/v1/connectors', 'POST'] as const
}

export function getPostV1ConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.connectors.$post>) {
      return parseResponse(client.v1.connectors.$post(args, options))
    },
  })
}

export function createPostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.connectors.$post>,
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
    const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConnectorsIdQueryKey(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/connectors/:id', keyArgs] as const
}

export function getV1ConnectorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsIdQueryKey>
  >({
    queryKey: getV1ConnectorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.connectors[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.connectors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ConnectorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConnectorsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1ConnectorsIdMutationKey() {
  return ['v1', '/v1/connectors/:id', 'DELETE'] as const
}

export function getDeleteV1ConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>) {
      return parseResponse(client.v1.connectors[':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connectors)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchV1ConnectorsIdMutationKey() {
  return ['v1', '/v1/connectors/:id', 'PATCH'] as const
}

export function getPatchV1ConnectorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1ConnectorsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>) {
      return parseResponse(client.v1.connectors[':id'].$patch(args, options))
    },
  })
}

export function createPatchV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connectors)[':id']['$patch']>,
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
    const mutationDefaults = getPatchV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1ConnectorsIdOauthAuthorizeMutationKey() {
  return ['v1', '/v1/connectors/:id/oauth/authorize', 'POST'] as const
}

export function getPostV1ConnectorsIdOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConnectorsIdOauthAuthorizeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>,
    ) {
      return parseResponse(client.v1.connectors[':id'].oauth.authorize.$post(args, options))
    },
  })
}

export function createPostV1ConnectorsIdOauthAuthorize<
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
                ReturnType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>,
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
    const mutationDefaults = getPostV1ConnectorsIdOauthAuthorizeMutationOptions<
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

export function getV1ModelsModelQueryKey(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/models/:model', keyArgs] as const
}

export function getV1ModelsModelQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.models)[':model']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelQueryKey>
  >({
    queryKey: getV1ModelsModelQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models[':model'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1ModelsModel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.models)[':model']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsModelQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsModelQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1ModelsQueryKey(args: InferRequestType<typeof client.v1.models.$get>) {
  return ['v1', '/v1/models', args] as const
}

export function getV1ModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >({
    queryKey: getV1ModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.models.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostV1CheckApiKeyMutationKey() {
  return ['v1', '/v1/check-api-key', 'POST'] as const
}

export function getPostV1CheckApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['check-api-key']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['check-api-key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1CheckApiKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['check-api-key']['$post']>) {
      return parseResponse(client.v1['check-api-key'].$post(args, options))
    },
  })
}

export function createPostV1CheckApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['check-api-key']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)['check-api-key']['$post']>,
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
    const mutationDefaults = getPostV1CheckApiKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1FinetuningFinetunedModelsQueryKey(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsQueryKey>
  >({
    queryKey: getV1FinetuningFinetunedModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinetuningFinetunedModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinetuningFinetunedModelsQueryKey>
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
      ...getV1FinetuningFinetunedModelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1FinetuningFinetunedModelsMutationKey() {
  return ['v1', '/v1/finetuning/finetuned-models', 'POST'] as const
}

export function getPostV1FinetuningFinetunedModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FinetuningFinetunedModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>,
    ) {
      return parseResponse(client.v1.finetuning['finetuned-models'].$post(args, options))
    },
  })
}

export function createPostV1FinetuningFinetunedModels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>,
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
    const mutationDefaults = getPostV1FinetuningFinetunedModelsMutationOptions<
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

export function getV1FinetuningFinetunedModelsIdQueryKey(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models/:id', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsIdQueryKey>
  >({
    queryKey: getV1FinetuningFinetunedModelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinetuningFinetunedModelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinetuningFinetunedModelsIdQueryKey>
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
      ...getV1FinetuningFinetunedModelsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1FinetuningFinetunedModelsIdMutationKey() {
  return ['v1', '/v1/finetuning/finetuned-models/:id', 'DELETE'] as const
}

export function getDeleteV1FinetuningFinetunedModelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1FinetuningFinetunedModelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>,
    ) {
      return parseResponse(client.v1.finetuning['finetuned-models'][':id'].$delete(args, options))
    },
  })
}

export function createDeleteV1FinetuningFinetunedModelsId<
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
                ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteV1FinetuningFinetunedModelsIdMutationOptions<
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

export function getPatchV1FinetuningFinetunedModelsIdMutationKey() {
  return ['v1', '/v1/finetuning/finetuned-models/:id', 'PATCH'] as const
}

export function getPatchV1FinetuningFinetunedModelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1FinetuningFinetunedModelsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>,
    ) {
      return parseResponse(client.v1.finetuning['finetuned-models'][':id'].$patch(args, options))
    },
  })
}

export function createPatchV1FinetuningFinetunedModelsId<
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
                ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>,
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
    const mutationDefaults = getPatchV1FinetuningFinetunedModelsIdMutationOptions<
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

export function getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/finetuning/finetuned-models/:finetuned_model_id/events', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey>
  >({
    queryKey: getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1FinetuningFinetunedModelsFinetunedModelIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey>
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
      ...getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/finetuning/finetuned-models/:finetuned_model_id/training-step-metrics',
    keyArgs,
  ] as const
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey>
  >({
    queryKey: getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':finetuned_model_id'][
          'training-step-metrics'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey>
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
      ...getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
