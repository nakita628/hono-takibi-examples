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

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions[':IngestionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions'][':IngestionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdDataSetsDataSetIdIngestionsIngestionIdMutationOptions<
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

export function getAccountsAwsAccountIdCustomizationsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/customizations', keyArgs] as const
}

export function getAccountsAwsAccountIdCustomizationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdCustomizationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].customizations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdCustomizations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAwsAccountIdCustomizationsQueryKey>
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
      ...getAccountsAwsAccountIdCustomizationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdCustomizations<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$put']>,
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
    const mutationDefaults = getPutAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function createPostAccountsAwsAccountIdCustomizations<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function createDeleteAccountsAwsAccountIdCustomizations<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['customizations']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsAwsAccountIdCustomizationsMutationOptions<
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

export function getAccountAwsAccountIdQueryKey(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account', '/account/:AwsAccountId', keyArgs] as const
}

export function getAccountAwsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAwsAccountIdQueryKey>
  >({
    queryKey: getAccountAwsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.account[':AwsAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountAwsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.account)[':AwsAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.account)[':AwsAccountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountAwsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountAwsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostAccountAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountAwsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteAccountAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountAwsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdAnalysesAnalysisId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAwsAccountIdAnalysesAnalysisIdQueryKey>
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
      ...getAccountsAwsAccountIdAnalysesAnalysisIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdAnalysesAnalysisId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function createPostAccountsAwsAccountIdAnalysesAnalysisId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdAnalysesAnalysisId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdAnalysesAnalysisIdMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsDashboardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboardsDashboardId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsDashboardIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDashboardsDashboardId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function createPostAccountsAwsAccountIdDashboardsDashboardId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdDashboardsDashboardId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdDashboardsDashboardIdMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sets']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdDataSets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdDataSetsMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sources', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdDataSources<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['data-sources']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdDataSourcesMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdQueryOptions<
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
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdFoldersFolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdFoldersFolderId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAwsAccountIdFoldersFolderIdQueryKey>
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
      ...getAccountsAwsAccountIdFoldersFolderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdFoldersFolderId<
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
                ReturnType<
                  (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['$put']>,
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
    const mutationDefaults = getPutAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function createPostAccountsAwsAccountIdFoldersFolderId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdFoldersFolderId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdFoldersFolderIdMutationOptions<
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

export function createPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdFoldersFolderIdMembersMemberTypeMemberIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/groups', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceGroups<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdNamespacesNamespaceGroups<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdNamespacesNamespaceGroupsMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members[
          ':MemberName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members'][':MemberName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersMemberNameMutationOptions<
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

export function createPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsIndexMutationOptions<
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

export function createPostAccountsAwsAccountId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey(
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
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

export function createPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedules<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdTemplatesTemplateId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function createPostAccountsAwsAccountIdTemplatesTemplateId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdTemplatesTemplateId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdTemplatesTemplateIdMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey(
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

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases[':AliasName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases'][':AliasName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function createPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdTemplatesTemplateIdAliasesAliasNameMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesThemeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemesThemeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesThemeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdThemesThemeId<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$put']>,
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
    const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function createPostAccountsAwsAccountIdThemesThemeId<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdThemesThemeId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdThemesThemeIdMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey(
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

export function getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases[':AliasName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases'][':AliasName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesThemeIdAliasesAliasNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function createPostAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdThemesThemeIdAliasesAliasNameMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAwsAccountIdDataSetsDataSetIdQueryKey>
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDataSetsDataSetId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdDataSetsDataSetId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdDataSetsDataSetIdMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey(
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-properties']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
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

export function createDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshProperties<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshPropertiesMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sources/:DataSourceId', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSourcesDataSourceIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSourcesDataSourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSourcesDataSourceId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSourcesDataSourceIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDataSourcesDataSourceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
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

export function createDeleteAccountsAwsAccountIdDataSourcesDataSourceId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdDataSourcesDataSourceIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdNamespaceNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespace<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountsAwsAccountIdNamespacesNamespace<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountsAwsAccountIdNamespacesNamespaceMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey(
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

export function getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][
          ':ScheduleId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['refresh-schedules'][':ScheduleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<
          typeof getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryKey
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdDataSetsDataSetIdRefreshSchedulesScheduleIdMutationOptions<
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

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdNamespacesNamespaceUsersUserNameMutationOptions<
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

export function createDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountsAwsAccountIdNamespacesNamespaceUserPrincipalsPrincipalIdMutationOptions<
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

export function getAccountsAwsAccountIdSettingsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/settings', keyArgs] as const
}

export function getAccountsAwsAccountIdSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['settings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdSettingsMutationOptions<
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

export function getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/definition', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].definition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdAnalysesAnalysisIdDefinition<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['definition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdAnalysesAnalysisIdDefinitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses/:AnalysisId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses[':AnalysisId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdAnalysesAnalysisIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['analyses'][':AnalysisId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdAnalysesAnalysisIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdAnalysesAnalysisIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdAnalysesAnalysisIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey(
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

export function getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].definition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboardsDashboardIdDefinition<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['definition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsDashboardIdDefinitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey(
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

export function getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboardsDashboardIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsDashboardIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdDashboardsDashboardIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdDashboardsDashboardIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdDataSetsDataSetIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdDataSetsDataSetIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey(
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

export function getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sources'][':DataSourceId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sources'][':DataSourceId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdDataSourcesDataSourceIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdFoldersFolderIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdFoldersFolderIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdFoldersFolderIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdFoldersFolderIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey(
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

export function getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId']['resolved-permissions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdFoldersFolderIdResolvedPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['resolved-permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdFoldersFolderIdResolvedPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'][
          ':AssignmentName'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments'][':AssignmentName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentName<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsAssignmentNameMutationOptions<
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

export function getAccountsAwsAccountIdIpRestrictionQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/ip-restriction', keyArgs] as const
}

export function getAccountsAwsAccountIdIpRestrictionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdIpRestrictionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['ip-restriction'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdIpRestriction<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountsAwsAccountIdIpRestrictionQueryKey>
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
      ...getAccountsAwsAccountIdIpRestrictionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdIpRestriction<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['ip-restriction']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdIpRestrictionMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/definition', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].definition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateIdDefinition<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['definition']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdDefinitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdTemplatesTemplateIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdTemplatesTemplateIdPermissionsMutationOptions<
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

export function getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/permissions', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdPermissionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesThemeIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemesThemeIdPermissions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['permissions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesThemeIdPermissionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAccountsAwsAccountIdThemesThemeIdPermissions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdThemesThemeIdPermissionsMutationOptions<
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

export function createPostAccountsAwsAccountIdEmbedUrlAnonymousUser<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdEmbedUrlAnonymousUserMutationOptions<
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

export function createPostAccountsAwsAccountIdEmbedUrlRegisteredUser<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdEmbedUrlRegisteredUserMutationOptions<
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

export function getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey(
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

export function getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId']['embed-url#creds-type'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsType<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['embed-url#creds-type']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsDashboardIdEmbedUrlCredsTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdSessionEmbedUrlQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/session-embed-url', keyArgs] as const
}

export function getAccountsAwsAccountIdSessionEmbedUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdSessionEmbedUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['session-embed-url'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdSessionEmbedUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['session-embed-url']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdSessionEmbedUrlQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdAnalysesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/analyses', keyArgs] as const
}

export function getAccountsAwsAccountIdAnalysesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdAnalysesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].analyses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdAnalyses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['analyses']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdAnalysesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards/:DashboardId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards[':DashboardId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboardsDashboardIdVersions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['dashboards'][':DashboardId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsDashboardIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdDashboardsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/dashboards', keyArgs] as const
}

export function getAccountsAwsAccountIdDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].dashboards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['dashboards']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDashboardsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders/:FolderId/members', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersFolderIdMembersQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdFoldersFolderIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders[':FolderId'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdFoldersFolderIdMembers<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['folders'][':FolderId']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdFoldersFolderIdMembersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdFoldersQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/folders', keyArgs] as const
}

export function getAccountsAwsAccountIdFoldersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].folders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdFolders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['folders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdFoldersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].groups[':GroupName'].members.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembers<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['groups'][':GroupName']['members']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceGroupsGroupNameMembersQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace']['iam-policy-assignments'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignments<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['iam-policy-assignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceIamPolicyAssignmentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'][
          'iam-policy-assignments'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignments<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['iam-policy-assignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameIamPolicyAssignmentsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/data-sets/:DataSetId/ingestions', keyArgs] as const
}

export function getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId']['data-sets'][':DataSetId'].ingestions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdDataSetsDataSetIdIngestions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['data-sets'][':DataSetId']['ingestions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdDataSetsDataSetIdIngestionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['namespaces']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getResourcesResourceArnTagsQueryKey(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:ResourceArn/tags', keyArgs] as const
}

export function getResourcesResourceArnTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getResourcesResourceArnTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':ResourceArn'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createResourcesResourceArnTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources)[':ResourceArn']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.resources)[':ResourceArn']['tags']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getResourcesResourceArnTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostResourcesResourceArnTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostResourcesResourceArnTagsMutationOptions<
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

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/aliases', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateIdAliases<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['aliases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdAliasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates/:TemplateId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates[':TemplateId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplatesTemplateIdVersions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['templates'][':TemplateId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesTemplateIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdTemplatesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/templates', keyArgs] as const
}

export function getAccountsAwsAccountIdTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['templates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/aliases', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdAliasesQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesThemeIdAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemesThemeIdAliases<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['aliases']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesThemeIdAliasesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes/:ThemeId/versions', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesThemeIdVersionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesThemeIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes[':ThemeId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemesThemeIdVersions<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['themes'][':ThemeId']['versions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesThemeIdVersionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdThemesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/themes', keyArgs] as const
}

export function getAccountsAwsAccountIdThemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].themes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AwsAccountId']['themes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdThemesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey(
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

export function getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users[':UserName'].groups.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroups<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users'][':UserName']['groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceUsersUserNameGroupsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AwsAccountId/namespaces/:Namespace/users', keyArgs] as const
}

export function getAccountsAwsAccountIdNamespacesNamespaceUsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAwsAccountIdNamespacesNamespaceUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AwsAccountId'].namespaces[':Namespace'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccountsAwsAccountIdNamespacesNamespaceUsers<
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
  args: () => InferRequestType<
    (typeof client.accounts)[':AwsAccountId']['namespaces'][':Namespace']['users']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAwsAccountIdNamespacesNamespaceUsersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostAccountsAwsAccountIdNamespacesNamespaceUsers<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdNamespacesNamespaceUsersMutationOptions<
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

export function createPostAccountsAwsAccountIdRestoreAnalysesAnalysisId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdRestoreAnalysesAnalysisIdMutationOptions<
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

export function createPostAccountsAwsAccountIdSearchAnalyses<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['analyses']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdSearchAnalysesMutationOptions<
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

export function createPostAccountsAwsAccountIdSearchDashboards<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdSearchDashboardsMutationOptions<
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

export function createPostAccountsAwsAccountIdSearchDataSets<
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
                ReturnType<
                  (typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['data-sets']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdSearchDataSetsMutationOptions<
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

export function createPostAccountsAwsAccountIdSearchDataSources<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountsAwsAccountIdSearchDataSourcesMutationOptions<
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

export function createPostAccountsAwsAccountIdSearchFolders<
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
                ReturnType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':AwsAccountId']['search']['folders']['$post']>,
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
    const mutationDefaults = getPostAccountsAwsAccountIdSearchFoldersMutationOptions<
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

export function createPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearch<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostAccountsAwsAccountIdNamespacesNamespaceGroupsSearchMutationOptions<
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

export function createDeleteResourcesResourceArnTagsKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteResourcesResourceArnTagsKeysMutationOptions<
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

export function createPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumber<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutAccountsAwsAccountIdDashboardsDashboardIdVersionsVersionNumberMutationOptions<
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

export function createPutAccountsAwsAccountIdPublicSharingSettings<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountsAwsAccountIdPublicSharingSettingsMutationOptions<
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
