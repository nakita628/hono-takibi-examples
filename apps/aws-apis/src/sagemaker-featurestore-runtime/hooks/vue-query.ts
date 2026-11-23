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

export function usePostBatchGetRecord<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetRecord.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.BatchGetRecord.$post>,
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
  const mutationDefaults = getPostBatchGetRecordMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTime<
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
  const mutationDefaults =
    getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeMutationOptions<
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

export function getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'FeatureGroup',
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString',
    keyArgs,
  ] as const
}

export function getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFeatureGroupFeatureGroupNameRecordIdentifierValueAsString<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
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
                    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
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
                    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey>
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
              (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutFeatureGroupFeatureGroupName<
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
                Awaited<ReturnType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>,
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
  const mutationDefaults = getPutFeatureGroupFeatureGroupNameMutationOptions<
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
