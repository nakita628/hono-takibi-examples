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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams/:streamId', keyArgs] as const
}

export function getLedgersNameJournalKinesisStreamsStreamIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLedgersNameJournalKinesisStreamsStreamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers[':name']['journal-kinesis-streams'][':streamId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLedgersNameJournalKinesisStreamsStreamIdQueryKey>
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
      ...getLedgersNameJournalKinesisStreamsStreamIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLedgersNameJournalKinesisStreamsStreamId<
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-kinesis-streams'][':streamId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLedgersNameJournalKinesisStreamsStreamIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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

export function getLedgersQueryKey(args: InferRequestType<typeof client.ledgers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers', keyArgs] as const
}

export function getLedgersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ledgers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLedgersQueryKey>
  >({
    queryKey: getLedgersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLedgers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ledgers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLedgersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLedgersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLedgers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.ledgers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLedgersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLedgersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ledgers.$post>>>>>,
        TError,
        InferRequestType<typeof client.ledgers.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name', keyArgs] as const
}

export function getLedgersNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLedgersNameQueryKey>
  >({
    queryKey: getLedgersNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLedgersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLedgersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLedgersNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLedgersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ledgers)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLedgersNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLedgersNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-s3-exports/:exportId', keyArgs] as const
}

export function getLedgersNameJournalS3ExportsExportIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLedgersNameJournalS3ExportsExportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers[':name']['journal-s3-exports'][':exportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLedgersNameJournalS3ExportsExportIdQueryKey>
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
      ...getLedgersNameJournalS3ExportsExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLedgersNameJournalS3ExportsExportId<
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
  args: InferRequestType<
    (typeof client.ledgers)[':name']['journal-s3-exports'][':exportId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getLedgersNameJournalS3ExportsExportIdQueryKey>
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
      ...getLedgersNameJournalS3ExportsExportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLedgersNameJournalS3ExportsQueryKey(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-s3-exports', keyArgs] as const
}

export function getLedgersNameJournalS3ExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLedgersNameJournalS3ExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers[':name']['journal-s3-exports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLedgersNameJournalS3ExportsQueryKey>
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
      ...getLedgersNameJournalS3ExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLedgersNameJournalS3Exports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-s3-exports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getLedgersNameJournalS3ExportsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['ledgers', '/ledgers/:name/journal-kinesis-streams', keyArgs] as const
}

export function getLedgersNameJournalKinesisStreamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLedgersNameJournalKinesisStreamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ledgers[':name']['journal-kinesis-streams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getLedgersNameJournalKinesisStreamsQueryKey>
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
      ...getLedgersNameJournalKinesisStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLedgersNameJournalKinesisStreams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.ledgers)[':name']['journal-kinesis-streams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getLedgersNameJournalKinesisStreamsQueryKey>
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
      ...getLedgersNameJournalKinesisStreamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['journal-s3-exports', '/journal-s3-exports', keyArgs] as const
}

export function getJournalS3ExportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getJournalS3ExportsQueryKey>
  >({
    queryKey: getJournalS3ExportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['journal-s3-exports'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useJournalS3Exports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalS3ExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getJournalS3ExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseJournalS3Exports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['journal-s3-exports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['journal-s3-exports']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getJournalS3ExportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getJournalS3ExportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
        TOnMutateResult
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
