import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getDeleteLegalHoldsLegalHoldIdCancelDescriptionKey() {
  return ['legal-holds', '/legal-holds/:legalHoldId#cancelDescription', 'DELETE'] as const
}

export function useDeleteLegalHoldsLegalHoldIdCancelDescription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLegalHoldsLegalHoldIdCancelDescriptionKey()
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
            (typeof client)['legal-holds'][':legalHoldId#cancelDescription']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['legal-holds'][':legalHoldId#cancelDescription'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupPlansIndexKey(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/', keyArgs] as const
}

export function useGetBackupPlansIndex<TError = unknown>(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
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
        ? getGetBackupPlansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.plans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansIndex<TError = unknown>(
  args: InferRequestType<typeof client.backup.plans.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
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
        ? getGetBackupPlansIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.plans.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBackupPlansIndexKey() {
  return ['backup', '/backup/plans/', 'PUT'] as const
}

export function usePutBackupPlansIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.backup.plans.index.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.backup.plans.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupPlansIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.backup.plans.index.$put> }) =>
        parseResponse(client.backup.plans.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupPlansBackupPlanIdSelectionsIndexKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/selections/', keyArgs] as const
}

export function useGetBackupPlansBackupPlanIdSelectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdSelectionsIndexKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
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
          client.backup.plans[':backupPlanId'].selections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansBackupPlanIdSelectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdSelectionsIndexKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$get']
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
          client.backup.plans[':backupPlanId'].selections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBackupPlansBackupPlanIdSelectionsIndexKey() {
  return ['backup', '/backup/plans/:backupPlanId/selections/', 'PUT'] as const
}

export function usePutBackupPlansBackupPlanIdSelectionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupPlansBackupPlanIdSelectionsIndexKey()
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
            (typeof client.backup.plans)[':backupPlanId']['selections']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.backup.plans[':backupPlanId'].selections.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameKey(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName', keyArgs] as const
}

export function useGetBackupVaultsBackupVaultName<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
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
        ? getGetBackupVaultsBackupVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['backup-vaults'][':backupVaultName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultName<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
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
        ? getGetBackupVaultsBackupVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['backup-vaults'][':backupVaultName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBackupVaultsBackupVaultNameKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName', 'PUT'] as const
}

export function usePutBackupVaultsBackupVaultName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupVaultsBackupVaultNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$put']> },
      ) => parseResponse(client['backup-vaults'][':backupVaultName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName', 'DELETE'] as const
}

export function useDeleteBackupVaultsBackupVaultName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupVaultsBackupVaultNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['$delete']>
        },
      ) => parseResponse(client['backup-vaults'][':backupVaultName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditFrameworksKey(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/frameworks', keyArgs] as const
}

export function useGetAuditFrameworks<TError = unknown>(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
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
        ? getGetAuditFrameworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.frameworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditFrameworks<TError = unknown>(
  args: InferRequestType<typeof client.audit.frameworks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
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
        ? getGetAuditFrameworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit.frameworks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuditFrameworksKey() {
  return ['audit', '/audit/frameworks', 'POST'] as const
}

export function usePostAuditFrameworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.audit.frameworks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.audit.frameworks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditFrameworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.audit.frameworks.$post> }) =>
        parseResponse(client.audit.frameworks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLegalHoldsIndexKey(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/', keyArgs] as const
}

export function useGetLegalHoldsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
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
        ? getGetLegalHoldsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['legal-holds'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
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
        ? getGetLegalHoldsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['legal-holds'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLegalHoldsIndexKey() {
  return ['legal-holds', '/legal-holds/', 'POST'] as const
}

export function usePostLegalHoldsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['legal-holds']['index']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['legal-holds']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLegalHoldsIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['legal-holds']['index']['$post']> },
      ) => parseResponse(client['legal-holds'].index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditReportPlansKey(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-plans', keyArgs] as const
}

export function useGetAuditReportPlans<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
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
        ? getGetAuditReportPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['report-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditReportPlans<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
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
        ? getGetAuditReportPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['report-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuditReportPlansKey() {
  return ['audit', '/audit/report-plans', 'POST'] as const
}

export function usePostAuditReportPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-plans']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit)['report-plans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditReportPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.audit)['report-plans']['$post']> },
      ) => parseResponse(client.audit['report-plans'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBackupPlansBackupPlanIdKey() {
  return ['backup', '/backup/plans/:backupPlanId', 'POST'] as const
}

export function usePostBackupPlansBackupPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupPlansBackupPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$post']> },
      ) => parseResponse(client.backup.plans[':backupPlanId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupPlansBackupPlanIdKey() {
  return ['backup', '/backup/plans/:backupPlanId', 'DELETE'] as const
}

export function useDeleteBackupPlansBackupPlanId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupPlansBackupPlanIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['$delete']> },
      ) => parseResponse(client.backup.plans[':backupPlanId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupPlansBackupPlanIdSelectionsSelectionIdKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/selections/:selectionId', keyArgs] as const
}

export function useGetBackupPlansBackupPlanIdSelectionsSelectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdSelectionsSelectionIdKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
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
          client.backup.plans[':backupPlanId'].selections[':selectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansBackupPlanIdSelectionsSelectionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdSelectionsSelectionIdKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$get']
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
          client.backup.plans[':backupPlanId'].selections[':selectionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdKey() {
  return ['backup', '/backup/plans/:backupPlanId/selections/:selectionId', 'DELETE'] as const
}

export function useDeleteBackupPlansBackupPlanIdSelectionsSelectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupPlansBackupPlanIdSelectionsSelectionIdKey()
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
            (typeof client.backup.plans)[':backupPlanId']['selections'][':selectionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.backup.plans[':backupPlanId'].selections[':selectionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameAccessPolicyKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', keyArgs] as const
}

export function useGetBackupVaultsBackupVaultNameAccessPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameAccessPolicyKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
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
          client['backup-vaults'][':backupVaultName']['access-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultNameAccessPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameAccessPolicyKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$get']
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
          client['backup-vaults'][':backupVaultName']['access-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBackupVaultsBackupVaultNameAccessPolicyKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', 'PUT'] as const
}

export function usePutBackupVaultsBackupVaultNameAccessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupVaultsBackupVaultNameAccessPolicyKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['access-policy'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameAccessPolicyKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/access-policy', 'DELETE'] as const
}

export function useDeleteBackupVaultsBackupVaultNameAccessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupVaultsBackupVaultNameAccessPolicyKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['access-policy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['access-policy'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutBackupVaultsBackupVaultNameVaultLockKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/vault-lock', 'PUT'] as const
}

export function usePutBackupVaultsBackupVaultNameVaultLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupVaultsBackupVaultNameVaultLockKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$put']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['vault-lock'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameVaultLockKey() {
  return ['backup-vaults', '/backup-vaults/:backupVaultName/vault-lock', 'DELETE'] as const
}

export function useDeleteBackupVaultsBackupVaultNameVaultLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupVaultsBackupVaultNameVaultLockKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['vault-lock']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['vault-lock'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameNotificationConfigurationKey(
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

export function useGetBackupVaultsBackupVaultNameNotificationConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameNotificationConfigurationKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
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
          client['backup-vaults'][':backupVaultName']['notification-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultNameNotificationConfiguration<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameNotificationConfigurationKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$get']
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
          client['backup-vaults'][':backupVaultName']['notification-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutBackupVaultsBackupVaultNameNotificationConfigurationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/notification-configuration',
    'PUT',
  ] as const
}

export function usePutBackupVaultsBackupVaultNameNotificationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupVaultsBackupVaultNameNotificationConfigurationKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['notification-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameNotificationConfigurationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/notification-configuration',
    'DELETE',
  ] as const
}

export function useDeleteBackupVaultsBackupVaultNameNotificationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteBackupVaultsBackupVaultNameNotificationConfigurationKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['notification-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['notification-configuration'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuditFrameworksFrameworkNameKey(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/frameworks/:frameworkName', keyArgs] as const
}

export function useGetAuditFrameworksFrameworkName<TError = unknown>(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
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
        ? getGetAuditFrameworksFrameworkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.frameworks[':frameworkName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditFrameworksFrameworkName<TError = unknown>(
  args: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
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
        ? getGetAuditFrameworksFrameworkNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit.frameworks[':frameworkName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuditFrameworksFrameworkNameKey() {
  return ['audit', '/audit/frameworks/:frameworkName', 'PUT'] as const
}

export function usePutAuditFrameworksFrameworkName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuditFrameworksFrameworkNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$put']> },
      ) => parseResponse(client.audit.frameworks[':frameworkName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuditFrameworksFrameworkNameKey() {
  return ['audit', '/audit/frameworks/:frameworkName', 'DELETE'] as const
}

export function useDeleteAuditFrameworksFrameworkName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuditFrameworksFrameworkNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.audit.frameworks)[':frameworkName']['$delete']> },
      ) => parseResponse(client.audit.frameworks[':frameworkName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey(
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

export function useGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn',
    'POST',
  ] as const
}

export function usePostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$post']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn',
    'DELETE',
  ] as const
}

export function useDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['recovery-points'][
            ':recoveryPointArn'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAuditReportPlansReportPlanNameKey(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-plans/:reportPlanName', keyArgs] as const
}

export function useGetAuditReportPlansReportPlanName<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
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
        ? getGetAuditReportPlansReportPlanNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['report-plans'][':reportPlanName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditReportPlansReportPlanName<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
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
        ? getGetAuditReportPlansReportPlanNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['report-plans'][':reportPlanName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAuditReportPlansReportPlanNameKey() {
  return ['audit', '/audit/report-plans/:reportPlanName', 'PUT'] as const
}

export function usePutAuditReportPlansReportPlanName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAuditReportPlansReportPlanNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$put']>
        },
      ) => parseResponse(client.audit['report-plans'][':reportPlanName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuditReportPlansReportPlanNameKey() {
  return ['audit', '/audit/report-plans/:reportPlanName', 'DELETE'] as const
}

export function useDeleteAuditReportPlansReportPlanName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuditReportPlansReportPlanNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.audit)['report-plans'][':reportPlanName']['$delete']>
        },
      ) =>
        parseResponse(client.audit['report-plans'][':reportPlanName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupJobsBackupJobIdKey(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-jobs', '/backup-jobs/:backupJobId', keyArgs] as const
}

export function useGetBackupJobsBackupJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
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
        ? getGetBackupJobsBackupJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-jobs'][':backupJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupJobsBackupJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
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
        ? getGetBackupJobsBackupJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-jobs'][':backupJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBackupJobsBackupJobIdKey() {
  return ['backup-jobs', '/backup-jobs/:backupJobId', 'POST'] as const
}

export function usePostBackupJobsBackupJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['backup-jobs'][':backupJobId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupJobsBackupJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['backup-jobs'][':backupJobId']['$post']> },
      ) => parseResponse(client['backup-jobs'][':backupJobId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCopyJobsCopyJobIdKey(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['copy-jobs', '/copy-jobs/:copyJobId', keyArgs] as const
}

export function useGetCopyJobsCopyJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
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
        ? getGetCopyJobsCopyJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['copy-jobs'][':copyJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCopyJobsCopyJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['copy-jobs'][':copyJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
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
        ? getGetCopyJobsCopyJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['copy-jobs'][':copyJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['copy-jobs'][':copyJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGlobalSettingsKey(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['global-settings', '/global-settings', keyArgs] as const
}

export function useGetGlobalSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGlobalSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['global-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGlobalSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['global-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetGlobalSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['global-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGlobalSettingsKey() {
  return ['global-settings', '/global-settings', 'PUT'] as const
}

export function usePutGlobalSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['global-settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGlobalSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['global-settings']['$put']> },
      ) => parseResponse(client['global-settings'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetResourcesResourceArnKey(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:resourceArn', keyArgs] as const
}

export function useGetResourcesResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
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
        ? getGetResourcesResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.resources)[':resourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
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
        ? getGetResourcesResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.resources)[':resourceArn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources[':resourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountSettingsKey(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-settings', '/account-settings', keyArgs] as const
}

export function useGetAccountSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
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
        ? getGetAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSettings<TError = unknown>(
  args: InferRequestType<(typeof client)['account-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
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
        ? getGetAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['account-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountSettingsKey() {
  return ['account-settings', '/account-settings', 'PUT'] as const
}

export function usePutAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['account-settings']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account-settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['account-settings']['$put']> },
      ) => parseResponse(client['account-settings'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuditReportJobsReportJobIdKey(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-jobs/:reportJobId', keyArgs] as const
}

export function useGetAuditReportJobsReportJobId<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
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
        ? getGetAuditReportJobsReportJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['report-jobs'][':reportJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditReportJobsReportJobId<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
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
        ? getGetAuditReportJobsReportJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.audit['report-jobs'][':reportJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestoreJobsRestoreJobIdKey(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restore-jobs', '/restore-jobs/:restoreJobId', keyArgs] as const
}

export function useGetRestoreJobsRestoreJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
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
        ? getGetRestoreJobsRestoreJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'][':restoreJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestoreJobsRestoreJobId<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
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
        ? getGetRestoreJobsRestoreJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs'][':restoreJobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'][':restoreJobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn/disassociate',
    'POST',
  ] as const
}

export function usePostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnDisassociateKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['disassociate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['recovery-points'][
            ':recoveryPointArn'
          ].disassociate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationKey() {
  return [
    'backup-vaults',
    '/backup-vaults/:backupVaultName/recovery-points/:recoveryPointArn/parentAssociation',
    'DELETE',
  ] as const
}

export function useDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociation<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnParentAssociationKey()
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
            (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['parentAssociation']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['backup-vaults'][':backupVaultName']['recovery-points'][
            ':recoveryPointArn'
          ].parentAssociation.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetBackupPlansBackupPlanIdToTemplateIndexKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/toTemplate/', keyArgs] as const
}

export function useGetBackupPlansBackupPlanIdToTemplateIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdToTemplateIndexKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
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
          client.backup.plans[':backupPlanId'].toTemplate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansBackupPlanIdToTemplateIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupPlansBackupPlanIdToTemplateIndexKey(args)
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
                (typeof client.backup.plans)[':backupPlanId']['toTemplate']['index']['$get']
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
          client.backup.plans[':backupPlanId'].toTemplate.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBackupPlansBackupPlanIdIndexKey(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/', keyArgs] as const
}

export function useGetBackupPlansBackupPlanIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
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
        ? getGetBackupPlansBackupPlanIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backup.plans[':backupPlanId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansBackupPlanIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
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
        ? getGetBackupPlansBackupPlanIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.backup.plans)[':backupPlanId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backup.plans[':backupPlanId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBackupTemplateJsonToPlanKey() {
  return ['backup', '/backup/template/json/toPlan', 'POST'] as const
}

export function usePostBackupTemplateJsonToPlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.json.toPlan.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.backup.template.json.toPlan.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBackupTemplateJsonToPlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.backup.template.json.toPlan.$post> },
      ) => parseResponse(client.backup.template.json.toPlan.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBackupTemplatePlansTemplateIdToPlanKey(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/template/plans/:templateId/toPlan', keyArgs] as const
}

export function useGetBackupTemplatePlansTemplateIdToPlan<TError = unknown>(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
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
        ? getGetBackupTemplatePlansTemplateIdToPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backup.template.plans[':templateId'].toPlan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupTemplatePlansTemplateIdToPlan<TError = unknown>(
  args: InferRequestType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
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
        ? getGetBackupTemplatePlansTemplateIdToPlanKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.template.plans)[':templateId']['toPlan']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.backup.template.plans[':templateId'].toPlan.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLegalHoldsLegalHoldIdIndexKey(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/:legalHoldId/', keyArgs] as const
}

export function useGetLegalHoldsLegalHoldIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
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
        ? getGetLegalHoldsLegalHoldIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['legal-holds'][':legalHoldId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldsLegalHoldIdIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
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
        ? getGetLegalHoldsLegalHoldIdIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['legal-holds'][':legalHoldId']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['legal-holds'][':legalHoldId'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataKey(
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

export function useGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadata<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'][
            'restore-metadata'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadata<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsRecoveryPointArnRestoreMetadataKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn']['restore-metadata']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'][':recoveryPointArn'][
            'restore-metadata'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSupportedResourceTypesKey(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['supported-resource-types', '/supported-resource-types', keyArgs] as const
}

export function useGetSupportedResourceTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
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
        ? getGetSupportedResourceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['supported-resource-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSupportedResourceTypes<TError = unknown>(
  args: InferRequestType<(typeof client)['supported-resource-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
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
        ? getGetSupportedResourceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['supported-resource-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['supported-resource-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupJobsIndexKey(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-jobs', '/backup-jobs/', keyArgs] as const
}

export function useGetBackupJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
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
        ? getGetBackupJobsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
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
        ? getGetBackupJobsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupTemplatePlansKey(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/template/plans', keyArgs] as const
}

export function useGetBackupTemplatePlans<TError = unknown>(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
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
        ? getGetBackupTemplatePlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.template.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupTemplatePlans<TError = unknown>(
  args: InferRequestType<typeof client.backup.template.plans.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
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
        ? getGetBackupTemplatePlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.backup.template.plans.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.backup.template.plans.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupPlansBackupPlanIdVersionsIndexKey(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup', '/backup/plans/:backupPlanId/versions/', keyArgs] as const
}

export function useGetBackupPlansBackupPlanIdVersionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
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
        ? getGetBackupPlansBackupPlanIdVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.backup.plans[':backupPlanId'].versions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupPlansBackupPlanIdVersionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
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
        ? getGetBackupPlansBackupPlanIdVersionsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.backup.plans)[':backupPlanId']['versions']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.backup.plans[':backupPlanId'].versions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetBackupVaultsIndexKey(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/', keyArgs] as const
}

export function useGetBackupVaultsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
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
        ? getGetBackupVaultsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-vaults'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['backup-vaults']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
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
        ? getGetBackupVaultsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['backup-vaults']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['backup-vaults'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCopyJobsIndexKey(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['copy-jobs', '/copy-jobs/', keyArgs] as const
}

export function useGetCopyJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCopyJobsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['copy-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCopyJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['copy-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetCopyJobsIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['index']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['copy-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesIndexKey(
  args: InferRequestType<typeof client.resources.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/', keyArgs] as const
}

export function useGetResourcesIndex<TError = unknown>(
  args: InferRequestType<typeof client.resources.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesIndex<TError = unknown>(
  args: InferRequestType<typeof client.resources.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetResourcesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resources.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.resources.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBackupVaultsBackupVaultNameRecoveryPointsIndexKey(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['backup-vaults', '/backup-vaults/:backupVaultName/recovery-points/', keyArgs] as const
}

export function useGetBackupVaultsBackupVaultNameRecoveryPointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsIndexKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBackupVaultsBackupVaultNameRecoveryPointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetBackupVaultsBackupVaultNameRecoveryPointsIndexKey(args)
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
                (typeof client)['backup-vaults'][':backupVaultName']['recovery-points']['index']['$get']
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
          client['backup-vaults'][':backupVaultName']['recovery-points'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLegalHoldsLegalHoldIdRecoveryPointsKey(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['legal-holds', '/legal-holds/:legalHoldId/recovery-points', keyArgs] as const
}

export function useGetLegalHoldsLegalHoldIdRecoveryPoints<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
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
        ? getGetLegalHoldsLegalHoldIdRecoveryPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['legal-holds'][':legalHoldId']['recovery-points'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLegalHoldsLegalHoldIdRecoveryPoints<TError = unknown>(
  args: InferRequestType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
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
        ? getGetLegalHoldsLegalHoldIdRecoveryPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['legal-holds'][':legalHoldId']['recovery-points']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['legal-holds'][':legalHoldId']['recovery-points'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetResourcesResourceArnRecoveryPointsIndexKey(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['resources', '/resources/:resourceArn/recovery-points/', keyArgs] as const
}

export function useGetResourcesResourceArnRecoveryPointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetResourcesResourceArnRecoveryPointsIndexKey(args)
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
                (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
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
          client.resources[':resourceArn']['recovery-points'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetResourcesResourceArnRecoveryPointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetResourcesResourceArnRecoveryPointsIndexKey(args)
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
                (typeof client.resources)[':resourceArn']['recovery-points']['index']['$get']
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
          client.resources[':resourceArn']['recovery-points'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAuditReportJobsKey(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['audit', '/audit/report-jobs', keyArgs] as const
}

export function useGetAuditReportJobs<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
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
        ? getGetAuditReportJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['report-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuditReportJobs<TError = unknown>(
  args: InferRequestType<(typeof client.audit)['report-jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
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
        ? getGetAuditReportJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.audit)['report-jobs']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.audit['report-jobs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRestoreJobsIndexKey(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['restore-jobs', '/restore-jobs/', keyArgs] as const
}

export function useGetRestoreJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
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
        ? getGetRestoreJobsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRestoreJobsIndex<TError = unknown>(
  args: InferRequestType<(typeof client)['restore-jobs']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
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
        ? getGetRestoreJobsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['restore-jobs']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['restore-jobs'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnIndexKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn/', keyArgs] as const
}

export function useGetTagsResourceArnIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
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
        ? getGetTagsResourceArnIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArnIndex<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
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
        ? getGetTagsResourceArnIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resourceArn']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resourceArn'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutBackupJobsKey() {
  return ['backup-jobs', '/backup-jobs', 'PUT'] as const
}

export function usePutBackupJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['backup-jobs']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['backup-jobs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutBackupJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['backup-jobs']['$put']> }) =>
        parseResponse(client['backup-jobs'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCopyJobsKey() {
  return ['copy-jobs', '/copy-jobs', 'PUT'] as const
}

export function usePutCopyJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['copy-jobs']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['copy-jobs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCopyJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['copy-jobs']['$put']> }) =>
        parseResponse(client['copy-jobs'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuditReportJobsReportPlanNameKey() {
  return ['audit', '/audit/report-jobs/:reportPlanName', 'POST'] as const
}

export function usePostAuditReportJobsReportPlanName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuditReportJobsReportPlanNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.audit)['report-jobs'][':reportPlanName']['$post']>
        },
      ) => parseResponse(client.audit['report-jobs'][':reportPlanName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRestoreJobsKey() {
  return ['restore-jobs', '/restore-jobs', 'PUT'] as const
}

export function usePutRestoreJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['restore-jobs']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['restore-jobs']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRestoreJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['restore-jobs']['$put']> }) =>
        parseResponse(client['restore-jobs'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resourceArn']['$post']> },
      ) => parseResponse(client.tags[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUntagResourceArnKey() {
  return ['untag', '/untag/:resourceArn', 'POST'] as const
}

export function usePostUntagResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.untag)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.untag)[':resourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUntagResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.untag)[':resourceArn']['$post']> },
      ) => parseResponse(client.untag[':resourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
