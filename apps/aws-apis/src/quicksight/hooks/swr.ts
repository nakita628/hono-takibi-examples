import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
            ':IngestionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
            ':IngestionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
            ':IngestionId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
            ':IngestionId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdCustomizationsKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/customizations', keyArgs] as const
}

export function useGetAccountsAwsAccountIdCustomizations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
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
        ? getGetAccountsAwsAccountIdCustomizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].customizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdCustomizations<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
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
        ? getGetAccountsAwsAccountIdCustomizationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].customizations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdCustomizationsKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdCustomizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdCustomizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>
        },
      ) => parseResponse(client.accounts[':AwsAccountId'].customizations.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdCustomizationsKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'POST'] as const
}

export function usePostAccountsAwsAccountIdCustomizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdCustomizationsKey()
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
            (typeof client.accounts)[':AwsAccountId']['customizations']['$post']
          >
        },
      ) => parseResponse(client.accounts[':AwsAccountId'].customizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdCustomizationsKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdCustomizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdCustomizationsKey()
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
            (typeof client.accounts)[':AwsAccountId']['customizations']['$delete']
          >
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId'].customizations.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountAwsAccountIdKey(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/:AwsAccountId', keyArgs] as const
}

export function useGetAccountAwsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
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
        ? getGetAccountAwsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':AwsAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountAwsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
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
        ? getGetAccountAwsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account[':AwsAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountAwsAccountIdKey() {
  return ['account', '/account/:AwsAccountId', 'POST'] as const
}

export function usePostAccountAwsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)[':AwsAccountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountAwsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)[':AwsAccountId']['$post']> },
      ) => parseResponse(client.account[':AwsAccountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountAwsAccountIdKey() {
  return ['account', '/account/:AwsAccountId', 'DELETE'] as const
}

export function useDeleteAccountAwsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountAwsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']> },
      ) => parseResponse(client.account[':AwsAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdAnalysesAnalysisIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdAnalysesAnalysisId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdAnalysesAnalysisId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdAnalysesAnalysisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdAnalysesAnalysisIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdAnalysesAnalysisIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdAnalysesAnalysisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdAnalysesAnalysisIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdAnalysesAnalysisIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdAnalysesAnalysisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdAnalysesAnalysisIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsDashboardIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboardsDashboardId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDashboardsDashboardIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDashboardsDashboardIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDashboardsDashboardIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDashboardsDashboardIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdDashboardsDashboardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdDashboardsDashboardIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
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
        ? getGetAccountsAwsAccountIdDataSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['data-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSets<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
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
        ? getGetAccountsAwsAccountIdDataSetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['data-sets'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDataSetsKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets', 'POST'] as const
}

export function usePostAccountsAwsAccountIdDataSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDataSetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>
        },
      ) => parseResponse(client.accounts[':AwsAccountId']['data-sets'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSourcesKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sources', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSources<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
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
        ? getGetAccountsAwsAccountIdDataSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['data-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSources<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
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
        ? getGetAccountsAwsAccountIdDataSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['data-sources'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDataSourcesKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources', 'POST'] as const
}

export function usePostAccountsAwsAccountIdDataSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDataSourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId']['data-sources'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdFoldersFolderIdKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdFoldersFolderId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdFoldersFolderIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdFoldersFolderIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdFoldersFolderIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdFoldersFolderIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdFoldersFolderIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdFoldersFolderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdFoldersFolderIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/members/:MemberType/:MemberId',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][
            ':MemberId'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/members/:MemberType/:MemberId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][
            ':MemberId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceGroupsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/groups', keyArgs] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/groups', 'POST'] as const
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdNamespacesNamespaceGroupsKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
            ':MemberName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
            ':MemberName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
            ':MemberName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
            ':MemberName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/',
    'POST',
  ] as const
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'][
            'iam-policy-assignments'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdKey() {
  return ['accounts', '/accounts/:AwsAccountId', 'POST'] as const
}

export function usePostAccountsAwsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']> },
      ) => parseResponse(client.accounts[':AwsAccountId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    'POST',
  ] as const
}

export function usePostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdTemplatesTemplateIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdTemplatesTemplateIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdTemplatesTemplateIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdTemplatesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdTemplatesTemplateIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'POST',
  ] as const
}

export function usePostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesThemeIdKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdThemesThemeId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
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
        ? getGetAccountsAwsAccountIdThemesThemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemesThemeId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
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
        ? getGetAccountsAwsAccountIdThemesThemeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdThemesThemeIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdThemesThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdThemesThemeIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']
          >
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId'].themes[':ThemeId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdThemesThemeIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdThemesThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdThemesThemeIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdThemesThemeIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdThemesThemeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdThemesThemeIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdThemesThemeIdAliasesAliasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemesThemeIdAliasesAliasName<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName', 'POST'] as const
}

export function usePostAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdDataSetsDataSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDataSetsDataSetIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdDataSetsDataSetIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSourcesDataSourceIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSourcesDataSourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSourcesDataSourceIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSourcesDataSourceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSourcesDataSourceIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDataSourcesDataSourceIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdDataSourcesDataSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDataSourcesDataSourceIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdDataSourcesDataSourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespace/:Namespace/iam-policy-assignments/:AssignmentName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespace[':Namespace']['iam-policy-assignments'][
            ':AssignmentName'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace', keyArgs] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespace<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespace<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace', 'DELETE'] as const
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdNamespacesNamespaceKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules/:ScheduleId',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
            ':ScheduleId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
            ':ScheduleId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules/:ScheduleId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
            ':ScheduleId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceUsersUserName<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/user-principals/:PrincipalId',
    'DELETE',
  ] as const
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['user-principals'][
            ':PrincipalId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdSettingsKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/settings', keyArgs] as const
}

export function useGetAccountsAwsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
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
        ? getGetAccountsAwsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
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
        ? getGetAccountsAwsAccountIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdSettingsKey() {
  return ['accounts', '/accounts/:AwsAccountId/settings', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']> },
      ) => parseResponse(client.accounts[':AwsAccountId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdAnalysesAnalysisIdDefinitionKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/definition', keyArgs] as const
}

export function useGetAccountsAwsAccountIdAnalysesAnalysisIdDefinition<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdAnalysesAnalysisIdDefinition<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdAnalysesAnalysisIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdAnalysesAnalysisIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdAnalysesAnalysisIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdAnalysesAnalysisIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdAnalysesAnalysisIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsDashboardIdDefinitionKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/definition',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDashboardsDashboardIdDefinition<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboardsDashboardIdDefinition<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsDashboardIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/permissions',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDashboardsDashboardIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboardsDashboardIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId/permissions', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdDashboardsDashboardIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions', 'POST'] as const
}

export function usePostAccountsAwsAccountIdDataSetsDataSetIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sources/:DataSourceId/permissions',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sources/:DataSourceId/permissions',
    'POST',
  ] as const
}

export function usePostAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdFoldersFolderIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/permissions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdFoldersFolderIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdFoldersFolderIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdFoldersFolderIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/permissions', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdFoldersFolderIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdFoldersFolderIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/resolved-permissions',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdFoldersFolderIdResolvedPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdFoldersFolderIdResolvedPermissions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/:AssignmentName',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
            ':AssignmentName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
            ':AssignmentName'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/:AssignmentName',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
            ':AssignmentName'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdIpRestrictionKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/ip-restriction', keyArgs] as const
}

export function useGetAccountsAwsAccountIdIpRestriction<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
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
        ? getGetAccountsAwsAccountIdIpRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['ip-restriction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdIpRestriction<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
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
        ? getGetAccountsAwsAccountIdIpRestrictionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId']['ip-restriction'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdIpRestrictionKey() {
  return ['accounts', '/accounts/:AwsAccountId/ip-restriction', 'POST'] as const
}

export function usePostAccountsAwsAccountIdIpRestriction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdIpRestrictionKey()
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
            (typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']
          >
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId']['ip-restriction'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdDefinitionKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/definition', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateIdDefinition<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateIdDefinition<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdDefinitionKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/permissions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/permissions', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdTemplatesTemplateIdPermissions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesThemeIdPermissionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/permissions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdThemesThemeIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemesThemeIdPermissions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdPermissionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdThemesThemeIdPermissionsKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/permissions', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdThemesThemeIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdThemesThemeIdPermissionsKey()
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
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdEmbedUrlAnonymousUserKey() {
  return ['accounts', '/accounts/:AwsAccountId/embed-url/anonymous-user', 'POST'] as const
}

export function usePostAccountsAwsAccountIdEmbedUrlAnonymousUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdEmbedUrlAnonymousUserKey()
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
            (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['embed-url']['anonymous-user'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdEmbedUrlRegisteredUserKey() {
  return ['accounts', '/accounts/:AwsAccountId/embed-url/registered-user', 'POST'] as const
}

export function usePostAccountsAwsAccountIdEmbedUrlRegisteredUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdEmbedUrlRegisteredUserKey()
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
            (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['embed-url']['registered-user'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/embed-url#creds-type',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsType<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdSessionEmbedUrlKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/session-embed-url', keyArgs] as const
}

export function useGetAccountsAwsAccountIdSessionEmbedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
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
        ? getGetAccountsAwsAccountIdSessionEmbedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId']['session-embed-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdSessionEmbedUrl<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
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
        ? getGetAccountsAwsAccountIdSessionEmbedUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.accounts[':AwsAccountId']['session-embed-url'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdAnalysesKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses', keyArgs] as const
}

export function useGetAccountsAwsAccountIdAnalyses<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
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
        ? getGetAccountsAwsAccountIdAnalysesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].analyses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdAnalyses<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
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
        ? getGetAccountsAwsAccountIdAnalysesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].analyses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsDashboardIdVersionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId/versions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDashboardsDashboardIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboardsDashboardIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdDashboardsDashboardIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDashboardsKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDashboards<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
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
        ? getGetAccountsAwsAccountIdDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDashboards<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
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
        ? getGetAccountsAwsAccountIdDashboardsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].dashboards.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdFoldersFolderIdMembersKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/members', keyArgs] as const
}

export function useGetAccountsAwsAccountIdFoldersFolderIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdMembersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdFoldersFolderIdMembers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
        ? getGetAccountsAwsAccountIdFoldersFolderIdMembersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
          client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdFoldersKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders', keyArgs] as const
}

export function useGetAccountsAwsAccountIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
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
        ? getGetAccountsAwsAccountIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':AwsAccountId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdFolders<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
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
        ? getGetAccountsAwsAccountIdFoldersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':AwsAccountId'].folders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[
            ':GroupName'
          ].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembers<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[
            ':GroupName'
          ].members.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/iam-policy-assignments',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
            'iam-policy-assignments'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignments<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
            'iam-policy-assignments'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdDataSetsDataSetIdIngestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdDataSetsDataSetIdIngestions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
        ? getGetAccountsAwsAccountIdDataSetsDataSetIdIngestionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces', keyArgs] as const
}

export function useGetAccountsAwsAccountIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
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
        ? getGetAccountsAwsAccountIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
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
        ? getGetAccountsAwsAccountIdNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesResourceArnTagsKey(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:ResourceArn/tags', keyArgs] as const
}

export function useGetResourcesResourceArnTags<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
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
        ? getGetResourcesResourceArnTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':ResourceArn'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesResourceArnTags<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
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
        ? getGetResourcesResourceArnTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':ResourceArn'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostResourcesResourceArnTagsKey() {
  return ['resources', '/resources/:ResourceArn/tags', 'POST'] as const
}

export function usePostResourcesResourceArnTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostResourcesResourceArnTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']> },
      ) => parseResponse(client.resources[':ResourceArn'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/aliases', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateIdAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateIdAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdAliasesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesTemplateIdVersionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/versions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplatesTemplateIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplatesTemplateIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdTemplatesTemplateIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdTemplatesKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates', keyArgs] as const
}

export function useGetAccountsAwsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
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
        ? getGetAccountsAwsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
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
        ? getGetAccountsAwsAccountIdTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':AwsAccountId'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesThemeIdAliasesKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases', keyArgs] as const
}

export function useGetAccountsAwsAccountIdThemesThemeIdAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdAliasesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemesThemeIdAliases<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdAliasesKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesThemeIdVersionsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/versions', keyArgs] as const
}

export function useGetAccountsAwsAccountIdThemesThemeIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemesThemeIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
        ? getGetAccountsAwsAccountIdThemesThemeIdVersionsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
          client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdThemesKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes', keyArgs] as const
}

export function useGetAccountsAwsAccountIdThemes<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
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
        ? getGetAccountsAwsAccountIdThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':AwsAccountId'].themes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdThemes<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
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
        ? getGetAccountsAwsAccountIdThemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':AwsAccountId'].themes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/groups',
    keyArgs,
  ] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroups<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAwsAccountIdNamespacesNamespaceUsersKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/users', keyArgs] as const
}

export function useGetAccountsAwsAccountIdNamespacesNamespaceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAwsAccountIdNamespacesNamespaceUsers<TError = unknown>(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
        ? getGetAccountsAwsAccountIdNamespacesNamespaceUsersKey(args)
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
                (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceUsersKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/users', 'POST'] as const
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdNamespacesNamespaceUsersKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdKey() {
  return ['accounts', '/accounts/:AwsAccountId/restore/analyses/:AnalysisId', 'POST'] as const
}

export function usePostAccountsAwsAccountIdRestoreAnalysesAnalysisId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdKey()
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
            (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].restore.analyses[':AnalysisId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdSearchAnalysesKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/analyses', 'POST'] as const
}

export function usePostAccountsAwsAccountIdSearchAnalyses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdSearchAnalysesKey()
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
            (typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']
          >
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId'].search.analyses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdSearchDashboardsKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/dashboards', 'POST'] as const
}

export function usePostAccountsAwsAccountIdSearchDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdSearchDashboardsKey()
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
            (typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']
          >
        },
      ) =>
        parseResponse(client.accounts[':AwsAccountId'].search.dashboards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdSearchDataSetsKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/data-sets', 'POST'] as const
}

export function usePostAccountsAwsAccountIdSearchDataSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdSearchDataSetsKey()
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
            (typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].search['data-sets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdSearchDataSourcesKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/data-sources', 'POST'] as const
}

export function usePostAccountsAwsAccountIdSearchDataSources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdSearchDataSourcesKey()
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
            (typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].search['data-sources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdSearchFoldersKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/folders', 'POST'] as const
}

export function usePostAccountsAwsAccountIdSearchFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdSearchFoldersKey()
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
            (typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']
          >
        },
      ) => parseResponse(client.accounts[':AwsAccountId'].search.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups-search',
    'POST',
  ] as const
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceGroupsSearch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchKey()
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
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['groups-search'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteResourcesResourceArnTagsKeysKey() {
  return ['resources', '/resources/:ResourceArn/tags#keys', 'DELETE'] as const
}

export function useDeleteResourcesResourceArnTagsKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteResourcesResourceArnTagsKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>
        },
      ) => parseResponse(client.resources[':ResourceArn']['tags#keys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/versions/:VersionNumber',
    'PUT',
  ] as const
}

export function usePutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumber<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberKey()
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
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions[
            ':VersionNumber'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutAccountsAwsAccountIdPublicSharingSettingsKey() {
  return ['accounts', '/accounts/:AwsAccountId/public-sharing-settings', 'PUT'] as const
}

export function usePutAccountsAwsAccountIdPublicSharingSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAwsAccountIdPublicSharingSettingsKey()
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
            (typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':AwsAccountId']['public-sharing-settings'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
