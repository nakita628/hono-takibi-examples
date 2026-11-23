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

export function getAccountSettingsKey() {
  return ['account-settings'] as const
}

export function getAuditKey() {
  return ['audit'] as const
}

export function getBackupKey() {
  return ['backup'] as const
}

export function getBackupJobsKey() {
  return ['backup-jobs'] as const
}

export function getBackupVaultsKey() {
  return ['backup-vaults'] as const
}

export function getCopyJobsKey() {
  return ['copy-jobs'] as const
}

export function getGlobalSettingsKey() {
  return ['global-settings'] as const
}

export function getLegalHoldsKey() {
  return ['legal-holds'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getRestoreJobsKey() {
  return ['restore-jobs'] as const
}

export function getSupportedResourceTypesKey() {
  return ['supported-resource-types'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getUntagKey() {
  return ['untag'] as const
}

export function getDeleteLegalHoldsLegalHoldIdCancelDescriptionMutationKey() {
  return ['legal-holds', '/legal-holds/:legalHoldId#cancelDescription', 'DELETE'] as const
}

export function getDeleteLegalHoldsLegalHoldIdCancelDescriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLegalHoldsLegalHoldIdCancelDescriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']
      >,
    ) {
      return parseResponse(
        client['legal-holds'][':legalHoldId#cancelDescription'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLegalHoldsLegalHoldIdCancelDescription<
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
                  (typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']
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
  const mutationDefaults = getDeleteLegalHoldsLegalHoldIdCancelDescriptionMutationOptions<
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

export function getBackupPlansIndexQueryKey(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/', keyArgs] as const
}

export function getBackupPlansIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.backup.plans.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansIndexQueryKey>
  >({
    queryKey: getBackupPlansIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackupPlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupPlansIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackupPlansIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupPlansIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBackupPlansIndexMutationKey() {
  return ['backup', '/backup/plans/', 'PUT'] as const
}

export function getPutBackupPlansIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.backup.plans.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupPlansIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backup.plans.index.$put>) {
      return parseResponse(client.backup.plans.index.$put(args, options))
    },
  })
}

export function usePutBackupPlansIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.backup.plans.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBackupPlansIndexMutationOptions<TError, TOnMutateResult>(
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

export function getBackupPlansBackupPlanIdSelectionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/selections/', keyArgs] as const
}

export function getBackupPlansBackupPlanIdSelectionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansBackupPlanIdSelectionsIndexQueryKey>
  >({
    queryKey: getBackupPlansBackupPlanIdSelectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].selections.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupPlansBackupPlanIdSelectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdSelectionsIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdSelectionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupPlansBackupPlanIdSelectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdSelectionsIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdSelectionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBackupPlansBackupPlanIdSelectionsIndexMutationKey() {
  return ['backup', '/backup/plans/:backupPlanId/selections/', 'PUT'] as const
}

export function getPutBackupPlansBackupPlanIdSelectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupPlansBackupPlanIdSelectionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].selections.index.$put(args, options),
      )
    },
  })
}

export function usePutBackupPlansBackupPlanIdSelectionsIndex<
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
                  (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']
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
  const mutationDefaults = getPutBackupPlansBackupPlanIdSelectionsIndexMutationOptions<
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

export function getBackupVaultsBackupVaultNameQueryKey(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName', keyArgs] as const
}

export function getBackupVaultsBackupVaultNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsBackupVaultNameQueryKey>
  >({
    queryKey: getBackupVaultsBackupVaultNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupVaultsBackupVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameQueryKey>
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
      ...getBackupVaultsBackupVaultNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameQueryKey>
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
      ...getBackupVaultsBackupVaultNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBackupVaultsBackupVaultNameMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName', 'PUT'] as const
}

export function getPutBackupVaultsBackupVaultNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupVaultsBackupVaultNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>,
    ) {
      return parseResponse(client['backup-vaults'][':backupVaultName'].$put(args, options))
    },
  })
}

export function usePutBackupVaultsBackupVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBackupVaultsBackupVaultNameMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName', 'DELETE'] as const
}

export function getDeleteBackupVaultsBackupVaultNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupVaultsBackupVaultNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>,
    ) {
      return parseResponse(client['backup-vaults'][':backupVaultName'].$delete(args, options))
    },
  })
}

export function useDeleteBackupVaultsBackupVaultName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBackupVaultsBackupVaultNameMutationOptions<
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

export function getAuditFrameworksQueryKey(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/frameworks', keyArgs] as const
}

export function getAuditFrameworksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.audit.frameworks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAuditFrameworksQueryKey>
  >({
    queryKey: getAuditFrameworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.frameworks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuditFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuditFrameworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditFrameworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditFrameworks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAuditFrameworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditFrameworksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuditFrameworksMutationKey() {
  return ['audit', '/audit/frameworks', 'POST'] as const
}

export function getPostAuditFrameworksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.audit.frameworks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditFrameworksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.audit.frameworks.$post>) {
      return parseResponse(client.audit.frameworks.$post(args, options))
    },
  })
}

export function usePostAuditFrameworks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.audit.frameworks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditFrameworksMutationOptions<TError, TOnMutateResult>(
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

export function getLegalHoldsIndexQueryKey(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/', keyArgs] as const
}

export function getLegalHoldsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldsIndexQueryKey>
  >({
    queryKey: getLegalHoldsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['legal-holds'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLegalHoldsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLegalHoldsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLegalHoldsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLegalHoldsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLegalHoldsIndexMutationKey() {
  return ['legal-holds', '/legal-holds/', 'POST'] as const
}

export function getPostLegalHoldsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['legal-holds']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLegalHoldsIndexMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['legal-holds']['index']['$post']>) {
      return parseResponse(client['legal-holds'].index.$post(args, options))
    },
  })
}

export function usePostLegalHoldsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['legal-holds']['index']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['legal-holds']['index']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLegalHoldsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getAuditReportPlansQueryKey(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-plans', keyArgs] as const
}

export function getAuditReportPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditReportPlansQueryKey>
  >({
    queryKey: getAuditReportPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['report-plans'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuditReportPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditReportPlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditReportPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditReportPlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAuditReportPlansMutationKey() {
  return ['audit', '/audit/report-plans', 'POST'] as const
}

export function getPostAuditReportPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.audit)['report-plans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditReportPlansMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.audit)['report-plans']['$post']>) {
      return parseResponse(client.audit['report-plans'].$post(args, options))
    },
  })
}

export function usePostAuditReportPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-plans']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit)['report-plans']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditReportPlansMutationOptions<TError, TOnMutateResult>(
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

export function getPostBackupPlansBackupPlanIdMutationKey() {
  return ['backup', '/backup/plans/:backupPlanId', 'POST'] as const
}

export function getPostBackupPlansBackupPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupPlansBackupPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']>,
    ) {
      return parseResponse(client.backup.plans[':backupPlanId'].$post(args, options))
    },
  })
}

export function usePostBackupPlansBackupPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBackupPlansBackupPlanIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteBackupPlansBackupPlanIdMutationKey() {
  return ['backup', '/backup/plans/:backupPlanId', 'DELETE'] as const
}

export function getDeleteBackupPlansBackupPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupPlansBackupPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']>,
    ) {
      return parseResponse(client.backup.plans[':backupPlanId'].$delete(args, options))
    },
  })
}

export function useDeleteBackupPlansBackupPlanId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBackupPlansBackupPlanIdMutationOptions<TError, TOnMutateResult>(
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

export function getBackupPlansBackupPlanIdSelectionsSelectionIdQueryKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/selections/:selectionId', keyArgs] as const
}

export function getBackupPlansBackupPlanIdSelectionsSelectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansBackupPlanIdSelectionsSelectionIdQueryKey>
  >({
    queryKey: getBackupPlansBackupPlanIdSelectionsSelectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].selections[':selectionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupPlansBackupPlanIdSelectionsSelectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdSelectionsSelectionIdQueryKey>
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
      ...getBackupPlansBackupPlanIdSelectionsSelectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupPlansBackupPlanIdSelectionsSelectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdSelectionsSelectionIdQueryKey>
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
      ...getBackupPlansBackupPlanIdSelectionsSelectionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdMutationKey() {
  return ['backup', '/backup/plans/:backupPlanId/selections/:selectionId', 'DELETE'] as const
}

export function getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].selections[':selectionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBackupPlansBackupPlanIdSelectionsSelectionId<
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
                  (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
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
  const mutationDefaults = getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdMutationOptions<
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

export function getBackupVaultsBackupVaultNameAccessPolicyQueryKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', keyArgs] as const
}

export function getBackupVaultsBackupVaultNameAccessPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsBackupVaultNameAccessPolicyQueryKey>
  >({
    queryKey: getBackupVaultsBackupVaultNameAccessPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['access-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupVaultsBackupVaultNameAccessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameAccessPolicyQueryKey>
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
      ...getBackupVaultsBackupVaultNameAccessPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultNameAccessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameAccessPolicyQueryKey>
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
      ...getBackupVaultsBackupVaultNameAccessPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBackupVaultsBackupVaultNameAccessPolicyMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', 'PUT'] as const
}

export function getPutBackupVaultsBackupVaultNameAccessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupVaultsBackupVaultNameAccessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['access-policy'].$put(args, options),
      )
    },
  })
}

export function usePutBackupVaultsBackupVaultNameAccessPolicy<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
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
  const mutationDefaults = getPutBackupVaultsBackupVaultNameAccessPolicyMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameAccessPolicyMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', 'DELETE'] as const
}

export function getDeleteBackupVaultsBackupVaultNameAccessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupVaultsBackupVaultNameAccessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['access-policy'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBackupVaultsBackupVaultNameAccessPolicy<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
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
  const mutationDefaults = getDeleteBackupVaultsBackupVaultNameAccessPolicyMutationOptions<
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

export function getPutBackupVaultsBackupVaultNameVaultLockMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/vault-lock', 'PUT'] as const
}

export function getPutBackupVaultsBackupVaultNameVaultLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupVaultsBackupVaultNameVaultLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['vault-lock'].$put(args, options),
      )
    },
  })
}

export function usePutBackupVaultsBackupVaultNameVaultLock<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']
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
  const mutationDefaults = getPutBackupVaultsBackupVaultNameVaultLockMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameVaultLockMutationKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/vault-lock', 'DELETE'] as const
}

export function getDeleteBackupVaultsBackupVaultNameVaultLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupVaultsBackupVaultNameVaultLockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['vault-lock'].$delete(args, options),
      )
    },
  })
}

export function useDeleteBackupVaultsBackupVaultNameVaultLock<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
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
  const mutationDefaults = getDeleteBackupVaultsBackupVaultNameVaultLockMutationOptions<
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

export function getBackupVaultsBackupVaultNameNotificationConfigurationQueryKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/notification-configuration',
    keyArgs,
  ] as const
}

export function getBackupVaultsBackupVaultNameNotificationConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsBackupVaultNameNotificationConfigurationQueryKey>
  >({
    queryKey: getBackupVaultsBackupVaultNameNotificationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['notification-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupVaultsBackupVaultNameNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameNotificationConfigurationQueryKey>
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
      ...getBackupVaultsBackupVaultNameNotificationConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultNameNotificationConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameNotificationConfigurationQueryKey>
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
      ...getBackupVaultsBackupVaultNameNotificationConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutBackupVaultsBackupVaultNameNotificationConfigurationMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/notification-configuration',
    'PUT',
  ] as const
}

export function getPutBackupVaultsBackupVaultNameNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutBackupVaultsBackupVaultNameNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['notification-configuration'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutBackupVaultsBackupVaultNameNotificationConfiguration<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
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
  const mutationDefaults =
    getPutBackupVaultsBackupVaultNameNotificationConfigurationMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameNotificationConfigurationMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/notification-configuration',
    'DELETE',
  ] as const
}

export function getDeleteBackupVaultsBackupVaultNameNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupVaultsBackupVaultNameNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['notification-configuration'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteBackupVaultsBackupVaultNameNotificationConfiguration<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
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
  const mutationDefaults =
    getDeleteBackupVaultsBackupVaultNameNotificationConfigurationMutationOptions<
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

export function getAuditFrameworksFrameworkNameQueryKey(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/frameworks/:frameworkName', keyArgs] as const
}

export function getAuditFrameworksFrameworkNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditFrameworksFrameworkNameQueryKey>
  >({
    queryKey: getAuditFrameworksFrameworkNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit.frameworks[':frameworkName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuditFrameworksFrameworkName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditFrameworksFrameworkNameQueryKey>
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
      ...getAuditFrameworksFrameworkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditFrameworksFrameworkName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditFrameworksFrameworkNameQueryKey>
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
      ...getAuditFrameworksFrameworkNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAuditFrameworksFrameworkNameMutationKey() {
  return ['audit', '/audit/frameworks/:frameworkName', 'PUT'] as const
}

export function getPutAuditFrameworksFrameworkNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuditFrameworksFrameworkNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']>,
    ) {
      return parseResponse(client.audit.frameworks[':frameworkName'].$put(args, options))
    },
  })
}

export function usePutAuditFrameworksFrameworkName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuditFrameworksFrameworkNameMutationOptions<
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

export function getDeleteAuditFrameworksFrameworkNameMutationKey() {
  return ['audit', '/audit/frameworks/:frameworkName', 'DELETE'] as const
}

export function getDeleteAuditFrameworksFrameworkNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuditFrameworksFrameworkNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>,
    ) {
      return parseResponse(client.audit.frameworks[':frameworkName'].$delete(args, options))
    },
  })
}

export function useDeleteAuditFrameworksFrameworkName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuditFrameworksFrameworkNameMutationOptions<
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

export function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn',
    keyArgs,
  ] as const
}

export function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryKey>
  >({
    queryKey: getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryKey>
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryKey>
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn',
    'POST',
  ] as const
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
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
  const mutationDefaults =
    getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn',
    'DELETE',
  ] as const
}

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
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
  const mutationDefaults =
    getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnMutationOptions<
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

export function getAuditReportPlansReportPlanNameQueryKey(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-plans/:reportPlanName', keyArgs] as const
}

export function getAuditReportPlansReportPlanNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditReportPlansReportPlanNameQueryKey>
  >({
    queryKey: getAuditReportPlansReportPlanNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['report-plans'][':reportPlanName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuditReportPlansReportPlanName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportPlansReportPlanNameQueryKey>
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
      ...getAuditReportPlansReportPlanNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditReportPlansReportPlanName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportPlansReportPlanNameQueryKey>
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
      ...getAuditReportPlansReportPlanNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAuditReportPlansReportPlanNameMutationKey() {
  return ['audit', '/audit/report-plans/:reportPlanName', 'PUT'] as const
}

export function getPutAuditReportPlansReportPlanNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAuditReportPlansReportPlanNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>,
    ) {
      return parseResponse(client.audit['report-plans'][':reportPlanName'].$put(args, options))
    },
  })
}

export function usePutAuditReportPlansReportPlanName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAuditReportPlansReportPlanNameMutationOptions<
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

export function getDeleteAuditReportPlansReportPlanNameMutationKey() {
  return ['audit', '/audit/report-plans/:reportPlanName', 'DELETE'] as const
}

export function getDeleteAuditReportPlansReportPlanNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAuditReportPlansReportPlanNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>,
    ) {
      return parseResponse(client.audit['report-plans'][':reportPlanName'].$delete(args, options))
    },
  })
}

export function useDeleteAuditReportPlansReportPlanName<
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
                ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAuditReportPlansReportPlanNameMutationOptions<
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

export function getBackupJobsBackupJobIdQueryKey(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-jobs', '/backup-jobs/:backupJobId', keyArgs] as const
}

export function getBackupJobsBackupJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupJobsBackupJobIdQueryKey>
  >({
    queryKey: getBackupJobsBackupJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-jobs'][':backupJobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupJobsBackupJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupJobsBackupJobIdQueryKey>
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
      ...getBackupJobsBackupJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupJobsBackupJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupJobsBackupJobIdQueryKey>
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
      ...getBackupJobsBackupJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBackupJobsBackupJobIdMutationKey() {
  return ['backup-jobs', '/backup-jobs/:backupJobId', 'POST'] as const
}

export function getPostBackupJobsBackupJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupJobsBackupJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']>,
    ) {
      return parseResponse(client['backup-jobs'][':backupJobId'].$post(args, options))
    },
  })
}

export function usePostBackupJobsBackupJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBackupJobsBackupJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getCopyJobsCopyJobIdQueryKey(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['copy-jobs', '/copy-jobs/:copyJobId', keyArgs] as const
}

export function getCopyJobsCopyJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCopyJobsCopyJobIdQueryKey>
  >({
    queryKey: getCopyJobsCopyJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['copy-jobs'][':copyJobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCopyJobsCopyJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCopyJobsCopyJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCopyJobsCopyJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCopyJobsCopyJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCopyJobsCopyJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCopyJobsCopyJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGlobalSettingsQueryKey(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-settings', '/global-settings', keyArgs] as const
}

export function getGlobalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGlobalSettingsQueryKey>
  >({
    queryKey: getGlobalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['global-settings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGlobalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGlobalSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGlobalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGlobalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGlobalSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGlobalSettingsMutationKey() {
  return ['global-settings', '/global-settings', 'PUT'] as const
}

export function getPutGlobalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['global-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGlobalSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['global-settings']['$put']>) {
      return parseResponse(client['global-settings'].$put(args, options))
    },
  })
}

export function usePutGlobalSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['global-settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGlobalSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getResourcesResourceArnQueryKey(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:resourceArn', keyArgs] as const
}

export function getResourcesResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesResourceArnQueryKey>
  >({
    queryKey: getResourcesResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourcesResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getAccountSettingsQueryKey(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-settings', '/account-settings', keyArgs] as const
}

export function getAccountSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountSettingsQueryKey>
  >({
    queryKey: getAccountSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-settings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountSettingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutAccountSettingsMutationKey() {
  return ['account-settings', '/account-settings', 'PUT'] as const
}

export function getPutAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['account-settings']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['account-settings']['$put']>) {
      return parseResponse(client['account-settings'].$put(args, options))
    },
  })
}

export function usePutAccountSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['account-settings']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getAuditReportJobsReportJobIdQueryKey(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-jobs/:reportJobId', keyArgs] as const
}

export function getAuditReportJobsReportJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditReportJobsReportJobIdQueryKey>
  >({
    queryKey: getAuditReportJobsReportJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['report-jobs'][':reportJobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAuditReportJobsReportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportJobsReportJobIdQueryKey>
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
      ...getAuditReportJobsReportJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAuditReportJobsReportJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportJobsReportJobIdQueryKey>
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
      ...getAuditReportJobsReportJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getRestoreJobsRestoreJobIdQueryKey(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restore-jobs', '/restore-jobs/:restoreJobId', keyArgs] as const
}

export function getRestoreJobsRestoreJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreJobsRestoreJobIdQueryKey>
  >({
    queryKey: getRestoreJobsRestoreJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['restore-jobs'][':restoreJobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRestoreJobsRestoreJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsRestoreJobIdQueryKey>
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
      ...getRestoreJobsRestoreJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRestoreJobsRestoreJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsRestoreJobIdQueryKey>
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
      ...getRestoreJobsRestoreJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn/disassociate',
    'POST',
  ] as const
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][
          ':recoveryPointArn'
        ].disassociate.$post(args, options),
      )
    },
  })
}

export function usePostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociate<
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
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
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
  const mutationDefaults =
    getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateMutationOptions<
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

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationMutationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn/parentAssociation',
    'DELETE',
  ] as const
}

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
      >,
    ) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][
          ':recoveryPointArn'
        ].parentAssociation.$delete(args, options),
      )
    },
  })
}

export function useDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
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
  const mutationDefaults =
    getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationMutationOptions<
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

export function getBackupPlansBackupPlanIdToTemplateIndexQueryKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/toTemplate/', keyArgs] as const
}

export function getBackupPlansBackupPlanIdToTemplateIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansBackupPlanIdToTemplateIndexQueryKey>
  >({
    queryKey: getBackupPlansBackupPlanIdToTemplateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].toTemplate.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupPlansBackupPlanIdToTemplateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdToTemplateIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdToTemplateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupPlansBackupPlanIdToTemplateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdToTemplateIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdToTemplateIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBackupPlansBackupPlanIdIndexQueryKey(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/', keyArgs] as const
}

export function getBackupPlansBackupPlanIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansBackupPlanIdIndexQueryKey>
  >({
    queryKey: getBackupPlansBackupPlanIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupPlansBackupPlanIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupPlansBackupPlanIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostBackupTemplateJsonToPlanMutationKey() {
  return ['backup', '/backup/template/json/toPlan', 'POST'] as const
}

export function getPostBackupTemplateJsonToPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.json.toPlan.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.backup.template.json.toPlan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBackupTemplateJsonToPlanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.backup.template.json.toPlan.$post>) {
      return parseResponse(client.backup.template.json.toPlan.$post(args, options))
    },
  })
}

export function usePostBackupTemplateJsonToPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.backup.template.json.toPlan.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.backup.template.json.toPlan.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBackupTemplateJsonToPlanMutationOptions<TError, TOnMutateResult>(
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

export function getBackupTemplatePlansTemplateIdToPlanQueryKey(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/template/plans/:templateId/toPlan', keyArgs] as const
}

export function getBackupTemplatePlansTemplateIdToPlanQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupTemplatePlansTemplateIdToPlanQueryKey>
  >({
    queryKey: getBackupTemplatePlansTemplateIdToPlanQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.template.plans[':templateId'].toPlan.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupTemplatePlansTemplateIdToPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupTemplatePlansTemplateIdToPlanQueryKey>
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
      ...getBackupTemplatePlansTemplateIdToPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupTemplatePlansTemplateIdToPlan<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupTemplatePlansTemplateIdToPlanQueryKey>
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
      ...getBackupTemplatePlansTemplateIdToPlanQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalHoldsLegalHoldIdIndexQueryKey(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/:legalHoldId/', keyArgs] as const
}

export function getLegalHoldsLegalHoldIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldsLegalHoldIdIndexQueryKey>
  >({
    queryKey: getLegalHoldsLegalHoldIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['legal-holds'][':legalHoldId'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalHoldsLegalHoldIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsLegalHoldIdIndexQueryKey>
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
      ...getLegalHoldsLegalHoldIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldsLegalHoldIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsLegalHoldIdIndexQueryKey>
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
      ...getLegalHoldsLegalHoldIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn/restore-metadata',
    keyArgs,
  ] as const
}

export function getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryKey
    >
  >({
    queryKey:
      getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'][
          'restore-metadata'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryKey
        >
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryKey
        >
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSupportedResourceTypesQueryKey(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['supported-resource-types', '/supported-resource-types', keyArgs] as const
}

export function getSupportedResourceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSupportedResourceTypesQueryKey>
  >({
    queryKey: getSupportedResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['supported-resource-types'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSupportedResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportedResourceTypesQueryKey>
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
      ...getSupportedResourceTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSupportedResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSupportedResourceTypesQueryKey>
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
      ...getSupportedResourceTypesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBackupJobsIndexQueryKey(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-jobs', '/backup-jobs/', keyArgs] as const
}

export function getBackupJobsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupJobsIndexQueryKey>
  >({
    queryKey: getBackupJobsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-jobs'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackupJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackupJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBackupTemplatePlansQueryKey(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/template/plans', keyArgs] as const
}

export function getBackupTemplatePlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupTemplatePlansQueryKey>
  >({
    queryKey: getBackupTemplatePlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.template.plans.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBackupTemplatePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupTemplatePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupTemplatePlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackupTemplatePlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupTemplatePlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupTemplatePlansQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBackupPlansBackupPlanIdVersionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/versions/', keyArgs] as const
}

export function getBackupPlansBackupPlanIdVersionsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupPlansBackupPlanIdVersionsIndexQueryKey>
  >({
    queryKey: getBackupPlansBackupPlanIdVersionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.backup.plans[':backupPlanId'].versions.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupPlansBackupPlanIdVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdVersionsIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupPlansBackupPlanIdVersionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupPlansBackupPlanIdVersionsIndexQueryKey>
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
      ...getBackupPlansBackupPlanIdVersionsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getBackupVaultsIndexQueryKey(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/', keyArgs] as const
}

export function getBackupVaultsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsIndexQueryKey>
  >({
    queryKey: getBackupVaultsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupVaultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBackupVaultsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBackupVaultsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBackupVaultsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCopyJobsIndexQueryKey(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['copy-jobs', '/copy-jobs/', keyArgs] as const
}

export function getCopyJobsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCopyJobsIndexQueryKey>
  >({
    queryKey: getCopyJobsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['copy-jobs'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCopyJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCopyJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCopyJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCopyJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCopyJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCopyJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getResourcesIndexQueryKey(
  args: InferRequestType<typeof client.resources.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/', keyArgs] as const
}

export function getResourcesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.resources.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesIndexQueryKey>
  >({
    queryKey: getResourcesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useResourcesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.index.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getResourcesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseResourcesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.resources.index.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getResourcesIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName/recovery-points/', keyArgs] as const
}

export function getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryKey>
  >({
    queryKey: getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['backup-vaults'][':backupVaultName']['recovery-points'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useBackupVaultsBackupVaultNameRecoveryPointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryKey>
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseBackupVaultsBackupVaultNameRecoveryPointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryKey>
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
      ...getBackupVaultsBackupVaultNameRecoveryPointsIndexQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getLegalHoldsLegalHoldIdRecoveryPointsQueryKey(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/:legalHoldId/recovery-points', keyArgs] as const
}

export function getLegalHoldsLegalHoldIdRecoveryPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLegalHoldsLegalHoldIdRecoveryPointsQueryKey>
  >({
    queryKey: getLegalHoldsLegalHoldIdRecoveryPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['legal-holds'][':legalHoldId']['recovery-points'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLegalHoldsLegalHoldIdRecoveryPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsLegalHoldIdRecoveryPointsQueryKey>
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
      ...getLegalHoldsLegalHoldIdRecoveryPointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLegalHoldsLegalHoldIdRecoveryPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLegalHoldsLegalHoldIdRecoveryPointsQueryKey>
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
      ...getLegalHoldsLegalHoldIdRecoveryPointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getResourcesResourceArnRecoveryPointsIndexQueryKey(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:resourceArn/recovery-points/', keyArgs] as const
}

export function getResourcesResourceArnRecoveryPointsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesResourceArnRecoveryPointsIndexQueryKey>
  >({
    queryKey: getResourcesResourceArnRecoveryPointsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.resources[':resourceArn']['recovery-points'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResourcesResourceArnRecoveryPointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceArnRecoveryPointsIndexQueryKey>
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
      ...getResourcesResourceArnRecoveryPointsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResourcesResourceArnRecoveryPointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResourcesResourceArnRecoveryPointsIndexQueryKey>
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
      ...getResourcesResourceArnRecoveryPointsIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAuditReportJobsQueryKey(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-jobs', keyArgs] as const
}

export function getAuditReportJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAuditReportJobsQueryKey>
  >({
    queryKey: getAuditReportJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.audit['report-jobs'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAuditReportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAuditReportJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAuditReportJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAuditReportJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAuditReportJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRestoreJobsIndexQueryKey(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restore-jobs', '/restore-jobs/', keyArgs] as const
}

export function getRestoreJobsIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRestoreJobsIndexQueryKey>
  >({
    queryKey: getRestoreJobsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['restore-jobs'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRestoreJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRestoreJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRestoreJobsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRestoreJobsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRestoreJobsIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTagsResourceArnIndexQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn/', keyArgs] as const
}

export function getTagsResourceArnIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnIndexQueryKey>
  >({
    queryKey: getTagsResourceArnIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTagsResourceArnIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArnIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutBackupJobsMutationKey() {
  return ['backup-jobs', '/backup-jobs', 'PUT'] as const
}

export function getPutBackupJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['backup-jobs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBackupJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['backup-jobs']['$put']>) {
      return parseResponse(client['backup-jobs'].$put(args, options))
    },
  })
}

export function usePutBackupJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['backup-jobs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutBackupJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutCopyJobsMutationKey() {
  return ['copy-jobs', '/copy-jobs', 'PUT'] as const
}

export function getPutCopyJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['copy-jobs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCopyJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['copy-jobs']['$put']>) {
      return parseResponse(client['copy-jobs'].$put(args, options))
    },
  })
}

export function usePutCopyJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['copy-jobs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCopyJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAuditReportJobsReportPlanNameMutationKey() {
  return ['audit', '/audit/report-jobs/:reportPlanName', 'POST'] as const
}

export function getPostAuditReportJobsReportPlanNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAuditReportJobsReportPlanNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>,
    ) {
      return parseResponse(client.audit['report-jobs'][':reportPlanName'].$post(args, options))
    },
  })
}

export function usePostAuditReportJobsReportPlanName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAuditReportJobsReportPlanNameMutationOptions<
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

export function getPutRestoreJobsMutationKey() {
  return ['restore-jobs', '/restore-jobs', 'PUT'] as const
}

export function getPutRestoreJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['restore-jobs']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRestoreJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['restore-jobs']['$put']>) {
      return parseResponse(client['restore-jobs'].$put(args, options))
    },
  })
}

export function usePutRestoreJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['restore-jobs']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRestoreJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
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

export function getPostUntagResourceArnMutationKey() {
  return ['untag', '/untag/:resourceArn', 'POST'] as const
}

export function getPostUntagResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.untag)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.untag)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUntagResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.untag)[':resourceArn']['$post']>) {
      return parseResponse(client.untag[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostUntagResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.untag)[':resourceArn']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.untag)[':resourceArn']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUntagResourceArnMutationOptions<TError, TOnMutateResult>(
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
