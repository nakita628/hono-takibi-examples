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

export function usePostV1Chat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.chat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.chat.$post>,
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
  const mutationDefaults = getPostV1ChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2Chat<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.chat.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.chat.$post>,
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
  const mutationDefaults = getPostV2ChatMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2Parse<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.parse.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.parse.$post>,
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
  const mutationDefaults = getPostV2ParseMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Generate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.generate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.generate.$post>,
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
  const mutationDefaults = getPostV1GenerateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Embed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.embed.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.embed.$post>,
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
  const mutationDefaults = getPostV1EmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2Embed<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.embed.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.embed.$post>,
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
  const mutationDefaults = getPostV2EmbedMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2AudioTranscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.audio.transcriptions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.audio.transcriptions.$post>,
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
  const mutationDefaults = getPostV2AudioTranscriptionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2BatchesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.batches.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/batches', keyArgs] as const
}

export function getV2BatchesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.batches.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BatchesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.batches.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Batches<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.batches.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>
          >,
          ReturnType<typeof getV2BatchesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2BatchesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BatchesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.batches.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2Batches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.batches.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.batches.$post>,
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
  const mutationDefaults = getPostV2BatchesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2BatchesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.batches)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v2', '/v2/batches/:id', keyArgs] as const
}

export function getV2BatchesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.batches)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2BatchesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.batches[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2BatchesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.batches)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV2BatchesIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.batches)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2BatchesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2BatchesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.batches[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV2BatchesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2BatchesIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1EmbedJobsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/embed-jobs', keyArgs] as const
}

export function getV1EmbedJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmbedJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['embed-jobs'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmbedJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
            >
          >,
          ReturnType<typeof getV1EmbedJobsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmbedJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['embed-jobs'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1EmbedJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['embed-jobs']['$post']>,
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
  const mutationDefaults = getPostV1EmbedJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1EmbedJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/embed-jobs/:id', keyArgs] as const
}

export function getV1EmbedJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EmbedJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['embed-jobs'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1EmbedJobsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['embed-jobs'][':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1EmbedJobsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['embed-jobs'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1EmbedJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EmbedJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['embed-jobs'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1EmbedJobsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1EmbedJobsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1Rerank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.rerank.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.rerank.$post>,
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
  const mutationDefaults = getPostV1RerankMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV2Rerank<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.rerank.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v2.rerank.$post>,
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
  const mutationDefaults = getPostV2RerankMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Classify<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.classify.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.classify.$post>,
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
  const mutationDefaults = getPostV1ClassifyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/datasets', keyArgs] as const
}

export function getV1DatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>
          >,
          ReturnType<typeof getV1DatasetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Datasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.datasets.$post>,
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
  const mutationDefaults = getPostV1DatasetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1DatasetsUsageQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.usage.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/datasets/usage', keyArgs] as const
}

export function getV1DatasetsUsageQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.usage.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsUsageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets.usage.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.datasets.usage.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>
            >
          >,
          ReturnType<typeof getV1DatasetsUsageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.datasets.usage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsUsageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets.usage.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DatasetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/datasets/:id', keyArgs] as const
}

export function getV1DatasetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DatasetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.datasets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DatasetsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.datasets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getV1DatasetsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1DatasetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DatasetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.datasets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1DatasetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.datasets)[':id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.datasets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1DatasetsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1Summarize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.summarize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.summarize.$post>,
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
  const mutationDefaults = getPostV1SummarizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Tokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tokenize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.tokenize.$post>,
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
  const mutationDefaults = getPostV1TokenizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostV1Detokenize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.detokenize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.detokenize.$post>,
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
  const mutationDefaults = getPostV1DetokenizeMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConnectorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/connectors', keyArgs] as const
}

export function getV1ConnectorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Connectors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.connectors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
          >,
          ReturnType<typeof getV1ConnectorsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Connectors<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connectors.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.connectors.$post>,
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
  const mutationDefaults = getPostV1ConnectorsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConnectorsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/connectors/:id', keyArgs] as const
}

export function getV1ConnectorsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConnectorsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.connectors[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConnectorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.connectors)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConnectorsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.connectors)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConnectorsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConnectorsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.connectors[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1ConnectorsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1ConnectorsIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1ConnectorsIdOauthAuthorize<
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
                  ReturnType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.connectors)[':id']['oauth']['authorize']['$post']>,
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
  const mutationDefaults = getPostV1ConnectorsIdOauthAuthorizeMutationOptions<
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

export function getV1ModelsModelQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/models/:model', keyArgs] as const
}

export function getV1ModelsModelQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsModelQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models[':model'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ModelsModel<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.models)[':model']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
            >
          >,
          ReturnType<typeof getV1ModelsModelQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.models)[':model']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ModelsModelQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsModelQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models[':model'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
) {
  return ['v1', '/v1/models', toValue(args)] as const
}

export function getV1ModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.models.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Models<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.models.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>
          >,
          ReturnType<typeof getV1ModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.models.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1ModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.models.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1CheckApiKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['check-api-key']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['check-api-key']['$post']>,
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
  const mutationDefaults = getPostV1CheckApiKeyMutationOptions<TError, TOnMutateResult>(
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

export function getV1FinetuningFinetunedModelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/finetuning/finetuned-models', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinetuningFinetunedModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinetuningFinetunedModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FinetuningFinetunedModelsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinetuningFinetunedModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.finetuning['finetuned-models'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FinetuningFinetunedModels<
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
                Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.finetuning)['finetuned-models']['$post']>,
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
  const mutationDefaults = getPostV1FinetuningFinetunedModelsMutationOptions<
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

export function getV1FinetuningFinetunedModelsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/finetuning/finetuned-models/:id', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinetuningFinetunedModelsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinetuningFinetunedModelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>
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
                  ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1FinetuningFinetunedModelsIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinetuningFinetunedModelsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.finetuning['finetuned-models'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1FinetuningFinetunedModelsId<
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
                  ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$delete']>,
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
  const mutationDefaults = getDeleteV1FinetuningFinetunedModelsIdMutationOptions<
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

export function usePatchV1FinetuningFinetunedModelsId<
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
                  ReturnType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.finetuning)['finetuned-models'][':id']['$patch']>,
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
  const mutationDefaults = getPatchV1FinetuningFinetunedModelsIdMutationOptions<
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

export function getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/finetuning/finetuned-models/:finetuned_model_id/events', keyArgs] as const
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FinetuningFinetunedModelsFinetunedModelIdEvents<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
                    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
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
                    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey>
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
              (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FinetuningFinetunedModelsFinetunedModelIdEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'].events.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/finetuning/finetuned-models/:finetuned_model_id/training-step-metrics',
    keyArgs,
  ] as const
}

export function getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.finetuning['finetuned-models'][':finetuned_model_id'][
          'training-step-metrics'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetrics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
                    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
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
                    (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey
          >
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
              (typeof client.v1.finetuning)['finetuned-models'][':finetuned_model_id']['training-step-metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1FinetuningFinetunedModelsFinetunedModelIdTrainingStepMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.finetuning['finetuned-models'][':finetuned_model_id'][
            'training-step-metrics'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}
