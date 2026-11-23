import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getBatchGetRecordKey() {
  return ['BatchGetRecord'] as const
}

export function getFeatureGroupKey() {
  return ['FeatureGroup'] as const
}

export function getPostBatchGetRecordKey() {
  return ['BatchGetRecord', '/BatchGetRecord', 'POST'] as const
}

export function usePostBatchGetRecord<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.BatchGetRecord.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.BatchGetRecord.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBatchGetRecordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.BatchGetRecord.$post> }) =>
        parseResponse(client.BatchGetRecord.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeKey() {
  return [
    'FeatureGroup',
    '/FeatureGroup/:FeatureGroupName#RecordIdentifierValueAsString&EventTime',
    'DELETE',
  ] as const
}

export function useDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTime<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringEventTimeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString&EventTime']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString&EventTime'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringKey(
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

export function useGetFeatureGroupFeatureGroupNameRecordIdentifierValueAsString<TError = unknown>(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFeatureGroupFeatureGroupNameRecordIdentifierValueAsString<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.FeatureGroup)[':FeatureGroupName#RecordIdentifierValueAsString']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFeatureGroupFeatureGroupNameRecordIdentifierValueAsStringKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.FeatureGroup[':FeatureGroupName#RecordIdentifierValueAsString'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutFeatureGroupFeatureGroupNameKey() {
  return ['FeatureGroup', '/FeatureGroup/:FeatureGroupName', 'PUT'] as const
}

export function usePutFeatureGroupFeatureGroupName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFeatureGroupFeatureGroupNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.FeatureGroup)[':FeatureGroupName']['$put']> },
      ) => parseResponse(client.FeatureGroup[':FeatureGroupName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
