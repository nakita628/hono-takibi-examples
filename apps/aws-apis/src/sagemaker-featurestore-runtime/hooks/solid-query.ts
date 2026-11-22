import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchGetRecordKey() {
  return ['BatchGetRecord'] as const
}

export function getFeatureGroupKey() {
  return ['FeatureGroup'] as const
}

export function getPostBatchGetRecordMutationKey() {
  return ['BatchGetRecord', '/BatchGetRecord', 'POST'] as const
}

export function getPostBatchGetRecordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetRecord.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.BatchGetRecord.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBatchGetRecordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.BatchGetRecord.$post>) {
      return parseResponse(client.BatchGetRecord.$post(args, options))
    },
  })
}

export function createPostBatchGetRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetRecord.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.BatchGetRecord.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostBatchGetRecordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeMutationKey() {
  return [
    'FeatureGroup',
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString&EventTime',
    'DELETE',
  ] as const
}

export function getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
      >,
    ) {
      return parseResponse(
        client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString&EventTime'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTime<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeMutationOptions<
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

export function getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'FeatureGroup',
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString',
    keyArgs,
  ] as const
}

export function getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey>
  >({
    queryKey: getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFeatureGroupFeatureGroupNameRecordIdentifierValueAsString<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey>
        >
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
      ...getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutFeatureGroupFeatureGroupNameMutationKey() {
  return ['FeatureGroup', '/FeatureGroup/:FeatureGroupName', 'PUT'] as const
}

export function getPutFeatureGroupFeatureGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFeatureGroupFeatureGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>,
    ) {
      return parseResponse(client.FeatureGroup[':FeatureGroupName'].$put(args, options))
    },
  })
}

export function createPutFeatureGroupFeatureGroupName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutFeatureGroupFeatureGroupNameMutationOptions<
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
