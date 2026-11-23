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

export function getJournalS3ExportsKey() {
  return ['journal-s3-exports'] as const
}

export function getLedgersKey() {
  return ['ledgers'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getLedgersNameJournalKinesisStreamsStreamIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams/:streamId', keyArgs] as const
}

export function getLedgersNameJournalKinesisStreamsStreamIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersNameJournalKinesisStreamsStreamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLedgersNameJournalKinesisStreamsStreamId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
                    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
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
                    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLedgersNameJournalKinesisStreamsStreamIdQueryKey>
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
              (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameJournalKinesisStreamsStreamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersNameJournalKinesisStreamsStreamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLedgersNameJournalKinesisStreamsStreamIdMutationKey() {
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams/:streamId', 'DELETE'] as const
}

export function getDeleteLedgersNameJournalKinesisStreamsStreamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLedgersNameJournalKinesisStreamsStreamIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
      >,
    ) {
      return parseResponse(
        client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLedgersNameJournalKinesisStreamsStreamId<
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
                    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$delete']
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
  const mutationDefaults = getDeleteLedgersNameJournalKinesisStreamsStreamIdMutationOptions<
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

export function getLedgersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ledgers.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers', keyArgs] as const
}

export function getLedgersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ledgers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLedgers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ledgers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
          >,
          ReturnType<typeof getLedgersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLedgersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLedgersMutationKey() {
  return ['ledgers', '/ledgers', 'POST'] as const
}

export function getPostLedgersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$post>>>>>,
    TError,
    InferRequestType<typeof client.ledgers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ledgers.$post>) {
      return parseResponse(client.ledgers.$post(args, options))
    },
  })
}

export function usePostLedgers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ledgers.$post>,
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
  const mutationDefaults = getPostLedgersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLedgersNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ledgers)[':name']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers/:name', keyArgs] as const
}

export function getLedgersNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ledgers)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLedgersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ledgers)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getLedgersNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLedgersNameMutationKey() {
  return ['ledgers', '/ledgers/:name', 'DELETE'] as const
}

export function getDeleteLedgersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLedgersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ledgers)[':name']['$delete']>) {
      return parseResponse(client.ledgers[':name'].$delete(args, options))
    },
  })
}

export function useDeleteLedgersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteLedgersNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLedgersNameMutationKey() {
  return ['ledgers', '/ledgers/:name', 'PATCH'] as const
}

export function getPatchLedgersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLedgersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ledgers)[':name']['$patch']>) {
      return parseResponse(client.ledgers[':name'].$patch(args, options))
    },
  })
}

export function usePatchLedgersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['$patch']>,
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
  const mutationDefaults = getPatchLedgersNameMutationOptions<TError, TOnMutateResult>(
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

export function getLedgersNameJournalS3ExportsExportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers/:name/journal-s3-exports/:exportId', keyArgs] as const
}

export function getLedgersNameJournalS3ExportsExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersNameJournalS3ExportsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLedgersNameJournalS3ExportsExportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']>
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
                    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
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
                    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLedgersNameJournalS3ExportsExportIdQueryKey>
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
            ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameJournalS3ExportsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersNameJournalS3ExportsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLedgersNameJournalS3ExportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers/:name/journal-s3-exports', keyArgs] as const
}

export function getLedgersNameJournalS3ExportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersNameJournalS3ExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers[':name']['journal-s3-exports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLedgersNameJournalS3Exports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLedgersNameJournalS3ExportsQueryKey>
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
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameJournalS3ExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersNameJournalS3ExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers[':name']['journal-s3-exports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLedgersNameJournalS3ExportsMutationKey() {
  return ['ledgers', '/ledgers/:name/journal-s3-exports', 'POST'] as const
}

export function getPostLedgersNameJournalS3ExportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersNameJournalS3ExportsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>,
    ) {
      return parseResponse(client.ledgers[':name']['journal-s3-exports'].$post(args, options))
    },
  })
}

export function usePostLedgersNameJournalS3Exports<
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
                Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$post']>,
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
  const mutationDefaults = getPostLedgersNameJournalS3ExportsMutationOptions<
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

export function getPostLedgersNameBlockMutationKey() {
  return ['ledgers', '/ledgers/:name/block', 'POST'] as const
}

export function getPostLedgersNameBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['block']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['block']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersNameBlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ledgers)[':name']['block']['$post']>) {
      return parseResponse(client.ledgers[':name'].block.$post(args, options))
    },
  })
}

export function usePostLedgersNameBlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ledgers)[':name']['block']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['block']['$post']>,
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
  const mutationDefaults = getPostLedgersNameBlockMutationOptions<TError, TOnMutateResult>(
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

export function getPostLedgersNameDigestMutationKey() {
  return ['ledgers', '/ledgers/:name/digest', 'POST'] as const
}

export function getPostLedgersNameDigestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['digest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersNameDigestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']>) {
      return parseResponse(client.ledgers[':name'].digest.$post(args, options))
    },
  })
}

export function usePostLedgersNameDigest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ledgers)[':name']['digest']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['digest']['$post']>,
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
  const mutationDefaults = getPostLedgersNameDigestMutationOptions<TError, TOnMutateResult>(
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

export function getPostLedgersNameRevisionMutationKey() {
  return ['ledgers', '/ledgers/:name/revision', 'POST'] as const
}

export function getPostLedgersNameRevisionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['revision']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersNameRevisionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']>,
    ) {
      return parseResponse(client.ledgers[':name'].revision.$post(args, options))
    },
  })
}

export function usePostLedgersNameRevision<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ledgers)[':name']['revision']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['revision']['$post']>,
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
  const mutationDefaults = getPostLedgersNameRevisionMutationOptions<TError, TOnMutateResult>(
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

export function getLedgersNameJournalKinesisStreamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams', keyArgs] as const
}

export function getLedgersNameJournalKinesisStreamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLedgersNameJournalKinesisStreamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ledgers[':name']['journal-kinesis-streams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLedgersNameJournalKinesisStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>
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
                  ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLedgersNameJournalKinesisStreamsQueryKey>
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
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameJournalKinesisStreamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLedgersNameJournalKinesisStreamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ledgers[':name']['journal-kinesis-streams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLedgersNameJournalKinesisStreamsMutationKey() {
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams', 'POST'] as const
}

export function getPostLedgersNameJournalKinesisStreamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLedgersNameJournalKinesisStreamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>,
    ) {
      return parseResponse(client.ledgers[':name']['journal-kinesis-streams'].$post(args, options))
    },
  })
}

export function usePostLedgersNameJournalKinesisStreams<
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
                  ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$post']>,
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
  const mutationDefaults = getPostLedgersNameJournalKinesisStreamsMutationOptions<
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

export function getJournalS3ExportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['journal-s3-exports']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['journal-s3-exports', '/journal-s3-exports', keyArgs] as const
}

export function getJournalS3ExportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['journal-s3-exports']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJournalS3ExportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['journal-s3-exports'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useJournalS3Exports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['journal-s3-exports']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>
              >
            >
          >,
          ReturnType<typeof getJournalS3ExportsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalS3ExportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJournalS3ExportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['journal-s3-exports'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLedgersNamePermissionsModeMutationKey() {
  return ['ledgers', '/ledgers/:name/permissions-mode', 'PATCH'] as const
}

export function getPatchLedgersNamePermissionsModeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLedgersNamePermissionsModeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>,
    ) {
      return parseResponse(client.ledgers[':name']['permissions-mode'].$patch(args, options))
    },
  })
}

export function usePatchLedgersNamePermissionsMode<
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
                Awaited<ReturnType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ledgers)[':name']['permissions-mode']['$patch']>,
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
  const mutationDefaults = getPatchLedgersNamePermissionsModeMutationOptions<
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
