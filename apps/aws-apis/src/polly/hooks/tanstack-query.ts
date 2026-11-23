import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1LexiconsLexiconNameQueryKey(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/lexicons/:LexiconName', keyArgs] as const
}

export function getV1LexiconsLexiconNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1LexiconsLexiconNameQueryKey>
  >({
    queryKey: getV1LexiconsLexiconNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.lexicons[':LexiconName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1LexiconsLexiconName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LexiconsLexiconNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1LexiconsLexiconNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1LexiconsLexiconName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1LexiconsLexiconNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1LexiconsLexiconNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1LexiconsLexiconNameMutationKey() {
  return ['v1', '/v1/lexicons/:LexiconName', 'PUT'] as const
}

export function getPutV1LexiconsLexiconNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1LexiconsLexiconNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']>) {
      return parseResponse(client.v1.lexicons[':LexiconName'].$put(args, options))
    },
  })
}

export function usePutV1LexiconsLexiconName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1LexiconsLexiconNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV1LexiconsLexiconNameMutationKey() {
  return ['v1', '/v1/lexicons/:LexiconName', 'DELETE'] as const
}

export function getDeleteV1LexiconsLexiconNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1LexiconsLexiconNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>,
    ) {
      return parseResponse(client.v1.lexicons[':LexiconName'].$delete(args, options))
    },
  })
}

export function useDeleteV1LexiconsLexiconName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.lexicons)[':LexiconName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1LexiconsLexiconNameMutationOptions<TError, TOnMutateResult>(
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

export function getV1VoicesQueryKey(args: InferRequestType<typeof client.v1.voices.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/voices', keyArgs] as const
}

export function getV1VoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.voices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1VoicesQueryKey>
  >({
    queryKey: getV1VoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.voices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Voices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1VoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Voices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.voices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.voices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1VoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1VoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SynthesisTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/synthesisTasks/:TaskId', keyArgs] as const
}

export function getV1SynthesisTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SynthesisTasksTaskIdQueryKey>
  >({
    queryKey: getV1SynthesisTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.synthesisTasks[':TaskId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1SynthesisTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SynthesisTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1SynthesisTasksTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1SynthesisTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.synthesisTasks)[':TaskId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SynthesisTasksTaskIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1SynthesisTasksTaskIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1LexiconsQueryKey(args: InferRequestType<typeof client.v1.lexicons.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/lexicons', keyArgs] as const
}

export function getV1LexiconsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.lexicons.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1LexiconsQueryKey>
  >({
    queryKey: getV1LexiconsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.lexicons.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Lexicons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.lexicons.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LexiconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1LexiconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Lexicons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.lexicons.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.lexicons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1LexiconsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1LexiconsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1SynthesisTasksQueryKey(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/synthesisTasks', keyArgs] as const
}

export function getV1SynthesisTasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.synthesisTasks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SynthesisTasksQueryKey>
  >({
    queryKey: getV1SynthesisTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.synthesisTasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1SynthesisTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SynthesisTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1SynthesisTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1SynthesisTasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.synthesisTasks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SynthesisTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1SynthesisTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1SynthesisTasksMutationKey() {
  return ['v1', '/v1/synthesisTasks', 'POST'] as const
}

export function getPostV1SynthesisTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.synthesisTasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SynthesisTasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.synthesisTasks.$post>) {
      return parseResponse(client.v1.synthesisTasks.$post(args, options))
    },
  })
}

export function usePostV1SynthesisTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.synthesisTasks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.synthesisTasks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SynthesisTasksMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1SpeechMutationKey() {
  return ['v1', '/v1/speech', 'POST'] as const
}

export function getPostV1SpeechMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speech.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.speech.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SpeechMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.speech.$post>) {
      return parseResponse(client.v1.speech.$post(args, options))
    },
  })
}

export function usePostV1Speech<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.speech.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.speech.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1SpeechMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
