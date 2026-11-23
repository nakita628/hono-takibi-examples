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

export function getAccountKey() {
  return ['account'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
            ':IngestionId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$put']
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
    getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions/:IngestionId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[
          ':IngestionId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$delete']
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
    getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
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

export function getAccountsAwsAccountIdCustomizationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/customizations', keyArgs] as const
}

export function getAccountsAwsAccountIdCustomizationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdCustomizationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].customizations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdCustomizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdCustomizationsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdCustomizationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdCustomizationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].customizations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdCustomizationsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdCustomizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdCustomizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].customizations.$put(args, options))
    },
  })
}

export function usePutAccountsAwsAccountIdCustomizations<
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>,
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
  const mutationDefaults = getPutAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function getPostAccountsAwsAccountIdCustomizationsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'POST'] as const
}

export function getPostAccountsAwsAccountIdCustomizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdCustomizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].customizations.$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdCustomizations<
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function getDeleteAccountsAwsAccountIdCustomizationsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/customizations', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdCustomizationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdCustomizationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['customizations']['$delete']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].customizations.$delete(args, options))
    },
  })
}

export function useDeleteAccountsAwsAccountIdCustomizations<
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>,
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function getAccountAwsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['account', '/account/:AwsAccountId', keyArgs] as const
}

export function getAccountAwsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountAwsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.account[':AwsAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountAwsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountAwsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAwsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountAwsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.account[':AwsAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountAwsAccountIdMutationKey() {
  return ['account', '/account/:AwsAccountId', 'POST'] as const
}

export function getPostAccountAwsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.account)[':AwsAccountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAwsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)[':AwsAccountId']['$post']>) {
      return parseResponse(client.account[':AwsAccountId'].$post(args, options))
    },
  })
}

export function usePostAccountAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)[':AwsAccountId']['$post']>,
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
  const mutationDefaults = getPostAccountAwsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountAwsAccountIdMutationKey() {
  return ['account', '/account/:AwsAccountId', 'DELETE'] as const
}

export function getDeleteAccountAwsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountAwsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']>) {
      return parseResponse(client.account[':AwsAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteAccountAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.account)[':AwsAccountId']['$delete']>,
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
  const mutationDefaults = getDeleteAccountAwsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdAnalysesAnalysisId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdAnalysesAnalysisIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdAnalysesAnalysisId<
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function getPostAccountsAwsAccountIdAnalysesAnalysisIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdAnalysesAnalysisIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdAnalysesAnalysisId<
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdAnalysesAnalysisIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdAnalysesAnalysisIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdAnalysesAnalysisId<
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboardsDashboardId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDashboardsDashboardId<
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function getPostAccountsAwsAccountIdDashboardsDashboardIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdDashboardsDashboardId<
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdDashboardsDashboardIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDashboardsDashboardId<
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sets', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdDataSetsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets', 'POST'] as const
}

export function getPostAccountsAwsAccountIdDataSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDataSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId']['data-sets'].$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdDataSets<
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
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdDataSetsMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sources', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdDataSourcesMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources', 'POST'] as const
}

export function getPostAccountsAwsAccountIdDataSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDataSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId']['data-sources'].$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdDataSources<
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdDataSourcesMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdFoldersFolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdFoldersFolderIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdFoldersFolderId<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function getPostAccountsAwsAccountIdFoldersFolderIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdFoldersFolderId<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdFoldersFolderIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdFoldersFolderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdFoldersFolderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdFoldersFolderId<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/members/:MemberType/:MemberId',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][
          ':MemberId'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$put']
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
    getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/members/:MemberType/:MemberId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].members[':MemberType'][
          ':MemberId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members'][':MemberType'][':MemberId']['$delete']
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
    getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/groups', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/groups', 'POST'] as const
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdNamespacesNamespaceGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceGroups<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdNamespacesNamespaceGroupsMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
          ':MemberName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
            ':MemberName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
          ':MemberName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$put']
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
    getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members/:MemberName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
          ':MemberName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$delete']
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
    getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
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

export function getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/',
    'POST',
  ] as const
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'][
          'iam-policy-assignments'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndex<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['index']['$post']
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
    getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexMutationOptions<
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

export function getPostAccountsAwsAccountIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']>) {
      return parseResponse(client.accounts[':AwsAccountId'].$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$put']
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
    getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
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

export function getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules',
    'POST',
  ] as const
}

export function getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$post']
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
    getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdTemplatesTemplateId<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getPostAccountsAwsAccountIdTemplatesTemplateIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdTemplatesTemplateId<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdTemplatesTemplateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdTemplatesTemplateId<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$put']
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
    getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'POST',
  ] as const
}

export function getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$post']
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
    getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/templates/:TemplateId/aliases/:AliasName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$delete']
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
    getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemesThemeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdThemesThemeIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdThemesThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdThemesThemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].themes[':ThemeId'].$put(args, options))
    },
  })
}

export function usePutAccountsAwsAccountIdThemesThemeId<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>,
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
  const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function getPostAccountsAwsAccountIdThemesThemeIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdThemesThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdThemesThemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].themes[':ThemeId'].$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdThemesThemeId<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdThemesThemeIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdThemesThemeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdThemesThemeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdThemesThemeId<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName', 'POST'] as const
}

export function getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/themes/:ThemeId/aliases/:AliasName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$delete']
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
    getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdQueryKey>
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
            ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDataSetsDataSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDataSetsDataSetId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdDataSetsDataSetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$put']
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
    getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
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

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-properties',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$delete']
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
    getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSourcesDataSourceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSourcesDataSourceId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDataSourcesDataSourceIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDataSourcesDataSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDataSourcesDataSourceId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
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

export function getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDataSourcesDataSourceId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$put']
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
    getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$delete']
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
    getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespace/:Namespace/iam-policy-assignments/:AssignmentName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespace[':Namespace']['iam-policy-assignments'][
          ':AssignmentName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespace'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$delete']
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
    getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']>
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace', 'DELETE'] as const
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdNamespacesNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespace<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$delete']
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
  const mutationDefaults = getDeleteAccountsAwsAccountIdNamespacesNamespaceMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules/:ScheduleId',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
          ':ScheduleId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
            ':ScheduleId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sets/:DataSetId/refresh-schedules/:ScheduleId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
          ':ScheduleId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$delete']
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
    getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$put']
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
    getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$delete']
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
    getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
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

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/user-principals/:PrincipalId',
    'DELETE',
  ] as const
}

export function getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['user-principals'][
          ':PrincipalId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalId<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['user-principals'][':PrincipalId']['$delete']
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
    getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdMutationOptions<
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

export function getAccountsAwsAccountIdSettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/settings', keyArgs] as const
}

export function getAccountsAwsAccountIdSettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdSettingsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/settings', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].settings.$put(args, options))
    },
  })
}

export function usePutAccountsAwsAccountIdSettings<
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
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$put']>,
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
  const mutationDefaults = getPutAccountsAwsAccountIdSettingsMutationOptions<
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

export function getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/definition', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdAnalysesAnalysisIdDefinition<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdAnalysesAnalysisIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdAnalysesAnalysisIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/definition',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboardsDashboardIdDefinition<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/permissions',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboardsDashboardIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId/permissions', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDashboardsDashboardIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$put']
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
    getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions', 'POST'] as const
}

export function getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdDataSetsDataSetIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sources/:DataSourceId/permissions',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/data-sources/:DataSourceId/permissions',
    'POST',
  ] as const
}

export function getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$post']
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
    getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdFoldersFolderIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdFoldersFolderIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/permissions', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdFoldersFolderIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdFoldersFolderIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdFoldersFolderIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdFoldersFolderIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/folders/:FolderId/resolved-permissions',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdFoldersFolderIdResolvedPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/:AssignmentName',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
          ':AssignmentName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
            ':AssignmentName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments/:AssignmentName',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
          ':AssignmentName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$put']
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
    getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
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

export function getAccountsAwsAccountIdIpRestrictionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/ip-restriction', keyArgs] as const
}

export function getAccountsAwsAccountIdIpRestrictionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdIpRestrictionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['ip-restriction'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdIpRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdIpRestrictionQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdIpRestrictionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdIpRestrictionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['ip-restriction'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdIpRestrictionMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/ip-restriction', 'POST'] as const
}

export function getPostAccountsAwsAccountIdIpRestrictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdIpRestrictionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>,
    ) {
      return parseResponse(client.accounts[':AwsAccountId']['ip-restriction'].$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdIpRestriction<
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdIpRestrictionMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/definition', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateIdDefinition<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/permissions', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdTemplatesTemplateIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemesThemeIdPermissions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAccountsAwsAccountIdThemesThemeIdPermissionsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/permissions', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdThemesThemeIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdThemesThemeIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdThemesThemeIdPermissions<
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdPermissionsMutationOptions<
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

export function getPostAccountsAwsAccountIdEmbedUrlAnonymousUserMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/embed-url/anonymous-user', 'POST'] as const
}

export function getPostAccountsAwsAccountIdEmbedUrlAnonymousUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdEmbedUrlAnonymousUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['embed-url']['anonymous-user'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdEmbedUrlAnonymousUser<
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
                    (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['embed-url']['anonymous-user']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdEmbedUrlAnonymousUserMutationOptions<
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

export function getPostAccountsAwsAccountIdEmbedUrlRegisteredUserMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/embed-url/registered-user', 'POST'] as const
}

export function getPostAccountsAwsAccountIdEmbedUrlRegisteredUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdEmbedUrlRegisteredUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['embed-url']['registered-user'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdEmbedUrlRegisteredUser<
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
                    (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['embed-url']['registered-user']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdEmbedUrlRegisteredUserMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/embed-url#creds-type',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsType<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdSessionEmbedUrlQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/session-embed-url', keyArgs] as const
}

export function getAccountsAwsAccountIdSessionEmbedUrlQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdSessionEmbedUrlQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['session-embed-url'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdSessionEmbedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
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
                  ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdSessionEmbedUrlQueryKey>
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
            ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdSessionEmbedUrlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdSessionEmbedUrlQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['session-embed-url'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdAnalysesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/analyses', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdAnalysesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdAnalyses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdAnalysesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdAnalysesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdAnalysesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].analyses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboardsDashboardIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdDashboardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/dashboards', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDashboardsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].dashboards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/members', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdFoldersFolderIdMembers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdFoldersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/folders', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdFoldersQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups/:GroupName/members',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[
            ':GroupName'
          ].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/iam-policy-assignments',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/iam-policy-assignments',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
          'iam-policy-assignments'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
            'iam-policy-assignments'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdDataSetsDataSetIdIngestions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/namespaces', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdNamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdNamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesResourceArnTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['resources', '/resources/:ResourceArn/tags', keyArgs] as const
}

export function getResourcesResourceArnTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesResourceArnTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':ResourceArn'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesResourceArnTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesResourceArnTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesResourceArnTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesResourceArnTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':ResourceArn'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostResourcesResourceArnTagsMutationKey() {
  return ['resources', '/resources/:ResourceArn/tags', 'POST'] as const
}

export function getPostResourcesResourceArnTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostResourcesResourceArnTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']>,
    ) {
      return parseResponse(client.resources[':ResourceArn'].tags.$post(args, options))
    },
  })
}

export function usePostResourcesResourceArnTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$post']>,
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
  const mutationDefaults = getPostResourcesResourceArnTagsMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/aliases', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateIdAliases<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplatesTemplateIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/templates', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdAliasesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemesThemeIdAliases<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemesThemeIdVersions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdThemesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/themes', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdThemesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdThemesQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdThemesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdThemesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].themes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/users/:UserName/groups',
    keyArgs,
  ] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroups<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/users', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAwsAccountIdNamespacesNamespaceUsers<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey>
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
              (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceUsersMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/users', 'POST'] as const
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdNamespacesNamespaceUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceUsers<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdNamespacesNamespaceUsersMutationOptions<
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

export function getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/restore/analyses/:AnalysisId', 'POST'] as const
}

export function getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].restore.analyses[':AnalysisId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdRestoreAnalysesAnalysisId<
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
                    (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['restore']['analyses'][':AnalysisId']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdMutationOptions<
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

export function getPostAccountsAwsAccountIdSearchAnalysesMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/analyses', 'POST'] as const
}

export function getPostAccountsAwsAccountIdSearchAnalysesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdSearchAnalysesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].search.analyses.$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdSearchAnalyses<
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
                    (typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdSearchAnalysesMutationOptions<
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

export function getPostAccountsAwsAccountIdSearchDashboardsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/dashboards', 'POST'] as const
}

export function getPostAccountsAwsAccountIdSearchDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdSearchDashboardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].search.dashboards.$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdSearchDashboards<
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
                    (typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['search']['dashboards']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdSearchDashboardsMutationOptions<
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

export function getPostAccountsAwsAccountIdSearchDataSetsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/data-sets', 'POST'] as const
}

export function getPostAccountsAwsAccountIdSearchDataSetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdSearchDataSetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].search['data-sets'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdSearchDataSets<
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
                    (typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdSearchDataSetsMutationOptions<
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

export function getPostAccountsAwsAccountIdSearchDataSourcesMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/data-sources', 'POST'] as const
}

export function getPostAccountsAwsAccountIdSearchDataSourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdSearchDataSourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].search['data-sources'].$post(args, options),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdSearchDataSources<
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
                    (typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['search']['data-sources']['$post']
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
  const mutationDefaults = getPostAccountsAwsAccountIdSearchDataSourcesMutationOptions<
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

export function getPostAccountsAwsAccountIdSearchFoldersMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/search/folders', 'POST'] as const
}

export function getPostAccountsAwsAccountIdSearchFoldersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdSearchFoldersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']
      >,
    ) {
      return parseResponse(client.accounts[':AwsAccountId'].search.folders.$post(args, options))
    },
  })
}

export function usePostAccountsAwsAccountIdSearchFolders<
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
                    (typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>,
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
  const mutationDefaults = getPostAccountsAwsAccountIdSearchFoldersMutationOptions<
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

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/namespaces/:Namespace/groups-search',
    'POST',
  ] as const
}

export function getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['groups-search'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountsAwsAccountIdNamespacesNamespaceGroupsSearch<
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
                    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups-search']['$post']
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
    getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchMutationOptions<
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

export function getDeleteResourcesResourceArnTagsKeysMutationKey() {
  return ['resources', '/resources/:ResourceArn/tags#keys', 'DELETE'] as const
}

export function getDeleteResourcesResourceArnTagsKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteResourcesResourceArnTagsKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>,
    ) {
      return parseResponse(client.resources[':ResourceArn']['tags#keys'].$delete(args, options))
    },
  })
}

export function useDeleteResourcesResourceArnTagsKeys<
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
                  ReturnType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.resources)[':ResourceArn']['tags#keys']['$delete']>,
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
  const mutationDefaults = getDeleteResourcesResourceArnTagsKeysMutationOptions<
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

export function getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberMutationKey() {
  return [
    'accounts',
    '/accounts/:AwsAccountId/dashboards/:DashboardId/versions/:VersionNumber',
    'PUT',
  ] as const
}

export function getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions[':VersionNumber'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumber<
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
                    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions'][':VersionNumber']['$put']
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
    getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberMutationOptions<
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

export function getPutAccountsAwsAccountIdPublicSharingSettingsMutationKey() {
  return ['accounts', '/accounts/:AwsAccountId/public-sharing-settings', 'PUT'] as const
}

export function getPutAccountsAwsAccountIdPublicSharingSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsAwsAccountIdPublicSharingSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']
      >,
    ) {
      return parseResponse(
        client.accounts[':AwsAccountId']['public-sharing-settings'].$put(args, options),
      )
    },
  })
}

export function usePutAccountsAwsAccountIdPublicSharingSettings<
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
                    (typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.accounts)[':AwsAccountId']['public-sharing-settings']['$put']
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
  const mutationDefaults = getPutAccountsAwsAccountIdPublicSharingSettingsMutationOptions<
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
