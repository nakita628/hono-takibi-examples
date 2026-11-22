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

export function getConsolidatedReportFormatKey() {
  return ['consolidatedReport#Format'] as const
}

export function getGlobalSettingsKey() {
  return ['global-settings'] as const
}

export function getImportLensKey() {
  return ['importLens'] as const
}

export function getLensesKey() {
  return ['lenses'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getShareInvitationsKey() {
  return ['shareInvitations'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getWorkloadsKey() {
  return ['workloads'] as const
}

export function getWorkloadsSummariesKey() {
  return ['workloadsSummaries'] as const
}

export function getPatchWorkloadsWorkloadIdAssociateLensesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/associateLenses', 'PATCH'] as const
}

export function getPatchWorkloadsWorkloadIdAssociateLensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdAssociateLensesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].associateLenses.$patch(args, options))
    },
  })
}

export function createPatchWorkloadsWorkloadIdAssociateLenses<
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
                ReturnType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>,
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
    const mutationDefaults = getPatchWorkloadsWorkloadIdAssociateLensesMutationOptions<
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

export function getLensesLensAliasSharesQueryKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/shares', keyArgs] as const
}

export function getLensesLensAliasSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasSharesQueryKey>
  >({
    queryKey: getLensesLensAliasSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lenses[':LensAlias'].shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLensesLensAliasShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLensesLensAliasSharesQueryKey>
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
      ...getLensesLensAliasSharesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostLensesLensAliasSharesMutationKey() {
  return ['lenses', '/lenses/:LensAlias/shares', 'POST'] as const
}

export function getPostLensesLensAliasSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLensesLensAliasSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']>,
    ) {
      return parseResponse(client.lenses[':LensAlias'].shares.$post(args, options))
    },
  })
}

export function createPostLensesLensAliasShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$post']>,
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
    const mutationDefaults = getPostLensesLensAliasSharesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostLensesLensAliasVersionsMutationKey() {
  return ['lenses', '/lenses/:LensAlias/versions', 'POST'] as const
}

export function getPostLensesLensAliasVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLensesLensAliasVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']>,
    ) {
      return parseResponse(client.lenses[':LensAlias'].versions.$post(args, options))
    },
  })
}

export function createPostLensesLensAliasVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.lenses)[':LensAlias']['versions']['$post']>,
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
    const mutationDefaults = getPostLensesLensAliasVersionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWorkloadsWorkloadIdMilestonesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/milestones', 'POST'] as const
}

export function getPostWorkloadsWorkloadIdMilestonesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsWorkloadIdMilestonesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].milestones.$post(args, options))
    },
  })
}

export function createPostWorkloadsWorkloadIdMilestones<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>,
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
    const mutationDefaults = getPostWorkloadsWorkloadIdMilestonesMutationOptions<
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

export function getPostWorkloadsMutationKey() {
  return ['workloads', '/workloads', 'POST'] as const
}

export function getPostWorkloadsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloads.$post>>>>>,
    TError,
    InferRequestType<typeof client.workloads.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workloads.$post>) {
      return parseResponse(client.workloads.$post(args, options))
    },
  })
}

export function createPostWorkloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloads.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.workloads.$post>,
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
    const mutationDefaults = getPostWorkloadsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdSharesQueryKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/shares', keyArgs] as const
}

export function getWorkloadsWorkloadIdSharesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdSharesQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdSharesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].shares.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdSharesQueryKey>
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
      ...getWorkloadsWorkloadIdSharesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkloadsWorkloadIdSharesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/shares', 'POST'] as const
}

export function getPostWorkloadsWorkloadIdSharesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsWorkloadIdSharesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].shares.$post(args, options))
    },
  })
}

export function createPostWorkloadsWorkloadIdShares<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$post']>,
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
    const mutationDefaults = getPostWorkloadsWorkloadIdSharesMutationOptions<
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

export function getDeleteLensesLensAliasClientRequestTokenLensStatusMutationKey() {
  return ['lenses', '/lenses/:LensAlias#ClientRequestToken&LensStatus', 'DELETE'] as const
}

export function getDeleteLensesLensAliasClientRequestTokenLensStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLensesLensAliasClientRequestTokenLensStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
      >,
    ) {
      return parseResponse(
        client.lenses[':LensAlias#ClientRequestToken&LensStatus'].$delete(args, options),
      )
    },
  })
}

export function createDeleteLensesLensAliasClientRequestTokenLensStatus<
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
                  (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.lenses)[':LensAlias#ClientRequestToken&LensStatus']['$delete']
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
    const mutationDefaults = getDeleteLensesLensAliasClientRequestTokenLensStatusMutationOptions<
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

export function getDeleteLensesLensAliasSharesShareIdClientRequestTokenMutationKey() {
  return ['lenses', '/lenses/:LensAlias/shares/:ShareId#ClientRequestToken', 'DELETE'] as const
}

export function getDeleteLensesLensAliasSharesShareIdClientRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLensesLensAliasSharesShareIdClientRequestTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
      >,
    ) {
      return parseResponse(
        client.lenses[':LensAlias'].shares[':ShareId#ClientRequestToken'].$delete(args, options),
      )
    },
  })
}

export function createDeleteLensesLensAliasSharesShareIdClientRequestToken<
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
                  (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.lenses)[':LensAlias']['shares'][':ShareId#ClientRequestToken']['$delete']
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
    const mutationDefaults = getDeleteLensesLensAliasSharesShareIdClientRequestTokenMutationOptions<
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

export function getDeleteWorkloadsWorkloadIdClientRequestTokenMutationKey() {
  return ['workloads', '/workloads/:WorkloadId#ClientRequestToken', 'DELETE'] as const
}

export function getDeleteWorkloadsWorkloadIdClientRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkloadsWorkloadIdClientRequestTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']
      >,
    ) {
      return parseResponse(
        client.workloads[':WorkloadId#ClientRequestToken'].$delete(args, options),
      )
    },
  })
}

export function createDeleteWorkloadsWorkloadIdClientRequestToken<
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
                ReturnType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>,
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
    const mutationDefaults = getDeleteWorkloadsWorkloadIdClientRequestTokenMutationOptions<
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

export function getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenMutationKey() {
  return [
    'workloads',
    '/workloads/:WorkloadId/shares/:ShareId#ClientRequestToken',
    'DELETE',
  ] as const
}

export function getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
      >,
    ) {
      return parseResponse(
        client.workloads[':WorkloadId'].shares[':ShareId#ClientRequestToken'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteWorkloadsWorkloadIdSharesShareIdClientRequestToken<
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
                  (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workloads)[':WorkloadId']['shares'][':ShareId#ClientRequestToken']['$delete']
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
      getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenMutationOptions<
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

export function getPatchWorkloadsWorkloadIdDisassociateLensesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/disassociateLenses', 'PATCH'] as const
}

export function getPatchWorkloadsWorkloadIdDisassociateLensesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdDisassociateLensesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']
      >,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].disassociateLenses.$patch(args, options))
    },
  })
}

export function createPatchWorkloadsWorkloadIdDisassociateLenses<
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
                ReturnType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']>,
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
    const mutationDefaults = getPatchWorkloadsWorkloadIdDisassociateLensesMutationOptions<
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

export function getLensesLensAliasExportQueryKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/export', keyArgs] as const
}

export function getLensesLensAliasExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasExportQueryKey>
  >({
    queryKey: getLensesLensAliasExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lenses[':LensAlias'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLensesLensAliasExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLensesLensAliasExportQueryKey>
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
      ...getLensesLensAliasExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId',
    keyArgs,
  ] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdMutationKey() {
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId',
    'PATCH',
  ] as const
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function createPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
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
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$patch']
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
      getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdMutationOptions<
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

export function getConsolidatedReportFormatQueryKey(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['consolidatedReport#Format', '/consolidatedReport#Format', keyArgs] as const
}

export function getConsolidatedReportFormatQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsolidatedReportFormatQueryKey>
  >({
    queryKey: getConsolidatedReportFormatQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['consolidatedReport#Format'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConsolidatedReportFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsolidatedReportFormatQueryKey>
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
      ...getConsolidatedReportFormatQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLensesLensAliasQueryKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias', keyArgs] as const
}

export function getLensesLensAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasQueryKey>
  >({
    queryKey: getLensesLensAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lenses[':LensAlias'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLensesLensAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLensesLensAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLensesLensAliasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviewsLensAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsLensAliasQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias', 'PATCH'] as const
}

export function getPatchWorkloadsWorkloadIdLensReviewsLensAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdLensReviewsLensAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
      >,
    ) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$patch(args, options),
      )
    },
  })
}

export function createPatchWorkloadsWorkloadIdLensReviewsLensAlias<
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
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$patch']
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
    const mutationDefaults = getPatchWorkloadsWorkloadIdLensReviewsLensAliasMutationOptions<
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

export function getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/report', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviewsLensAliasReport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getLensesLensAliasVersionDifferenceQueryKey(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses/:LensAlias/versionDifference', keyArgs] as const
}

export function getLensesLensAliasVersionDifferenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasVersionDifferenceQueryKey>
  >({
    queryKey: getLensesLensAliasVersionDifferenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lenses[':LensAlias'].versionDifference.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createLensesLensAliasVersionDifference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLensesLensAliasVersionDifferenceQueryKey>
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
      ...getLensesLensAliasVersionDifferenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/milestones/:MilestoneNumber', keyArgs] as const
}

export function getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdMilestonesMilestoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey>
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
      ...getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdQueryKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId', keyArgs] as const
}

export function getWorkloadsWorkloadIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWorkloadsWorkloadIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPatchWorkloadsWorkloadIdMutationKey() {
  return ['workloads', '/workloads/:WorkloadId', 'PATCH'] as const
}

export function getPatchWorkloadsWorkloadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']>) {
      return parseResponse(client.workloads[':WorkloadId'].$patch(args, options))
    },
  })
}

export function createPatchWorkloadsWorkloadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['$patch']>,
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
    const mutationDefaults = getPatchWorkloadsWorkloadIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPutImportLensMutationKey() {
  return ['importLens', '/importLens', 'PUT'] as const
}

export function getPutImportLensMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importLens.$put>>>>>,
    TError,
    InferRequestType<typeof client.importLens.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutImportLensMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.importLens.$put>) {
      return parseResponse(client.importLens.$put(args, options))
    },
  })
}

export function createPutImportLens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importLens.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.importLens.$put>,
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
    const mutationDefaults = getPutImportLensMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/answers', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviewsLensAliasAnswers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkloadsWorkloadIdChecksMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/checks', 'POST'] as const
}

export function getPostWorkloadsWorkloadIdChecksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsWorkloadIdChecksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].checks.$post(args, options))
    },
  })
}

export function createPostWorkloadsWorkloadIdChecks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['checks']['$post']>,
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
    const mutationDefaults = getPostWorkloadsWorkloadIdChecksMutationOptions<
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

export function getPostWorkloadsWorkloadIdCheckSummariesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/checkSummaries', 'POST'] as const
}

export function getPostWorkloadsWorkloadIdCheckSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsWorkloadIdCheckSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].checkSummaries.$post(args, options))
    },
  })
}

export function createPostWorkloadsWorkloadIdCheckSummaries<
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
                ReturnType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>,
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
    const mutationDefaults = getPostWorkloadsWorkloadIdCheckSummariesMutationOptions<
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

export function getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/improvements',
    keyArgs,
  ] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviewsLensAliasImprovements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getWorkloadsWorkloadIdLensReviewsQueryKey(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workloads', '/workloads/:WorkloadId/lensReviews', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsQueryKey>
  >({
    queryKey: getWorkloadsWorkloadIdLensReviewsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkloadsWorkloadIdLensReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkloadsWorkloadIdLensReviewsQueryKey>
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
      ...getWorkloadsWorkloadIdLensReviewsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getLensesQueryKey(args: InferRequestType<typeof client.lenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['lenses', '/lenses', keyArgs] as const
}

export function getLensesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLensesQueryKey>
  >({
    queryKey: getLensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createLenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.lenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWorkloadsWorkloadIdMilestonesSummariesMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/milestonesSummaries', 'POST'] as const
}

export function getPostWorkloadsWorkloadIdMilestonesSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsWorkloadIdMilestonesSummariesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']
      >,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].milestonesSummaries.$post(args, options))
    },
  })
}

export function createPostWorkloadsWorkloadIdMilestonesSummaries<
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
                ReturnType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']>,
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
    const mutationDefaults = getPostWorkloadsWorkloadIdMilestonesSummariesMutationOptions<
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

export function getPostNotificationsMutationKey() {
  return ['notifications', '/notifications', 'POST'] as const
}

export function getPostNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.notifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.notifications.$post>) {
      return parseResponse(client.notifications.$post(args, options))
    },
  })
}

export function createPostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.notifications.$post>,
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
    const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getShareInvitationsQueryKey(
  args: InferRequestType<typeof client.shareInvitations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['shareInvitations', '/shareInvitations', keyArgs] as const
}

export function getShareInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.shareInvitations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShareInvitationsQueryKey>
  >({
    queryKey: getShareInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shareInvitations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createShareInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.shareInvitations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getShareInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShareInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getTagsWorkloadArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:WorkloadArn', keyArgs] as const
}

export function getTagsWorkloadArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWorkloadArnQueryKey>
  >({
    queryKey: getTagsWorkloadArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':WorkloadArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsWorkloadArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsWorkloadArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTagsWorkloadArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsWorkloadArnMutationKey() {
  return ['tags', '/tags/:WorkloadArn', 'POST'] as const
}

export function getPostTagsWorkloadArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsWorkloadArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>) {
      return parseResponse(client.tags[':WorkloadArn'].$post(args, options))
    },
  })
}

export function createPostTagsWorkloadArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>,
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
    const mutationDefaults = getPostTagsWorkloadArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostWorkloadsSummariesMutationKey() {
  return ['workloadsSummaries', '/workloadsSummaries', 'POST'] as const
}

export function getPostWorkloadsSummariesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloadsSummaries.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.workloadsSummaries.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkloadsSummariesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workloadsSummaries.$post>) {
      return parseResponse(client.workloadsSummaries.$post(args, options))
    },
  })
}

export function createPostWorkloadsSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.workloadsSummaries.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.workloadsSummaries.$post>,
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
    const mutationDefaults = getPostWorkloadsSummariesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsWorkloadArnTagKeysMutationKey() {
  return ['tags', '/tags/:WorkloadArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsWorkloadArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsWorkloadArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':WorkloadArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsWorkloadArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tags)[':WorkloadArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsWorkloadArnTagKeysMutationOptions<
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

export function getPatchGlobalSettingsMutationKey() {
  return ['global-settings', '/global-settings', 'PATCH'] as const
}

export function getPatchGlobalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['global-settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchGlobalSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['global-settings']['$patch']>) {
      return parseResponse(client['global-settings'].$patch(args, options))
    },
  })
}

export function createPatchGlobalSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['global-settings']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['global-settings']['$patch']>,
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
    const mutationDefaults = getPatchGlobalSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPatchShareInvitationsShareInvitationIdMutationKey() {
  return ['shareInvitations', '/shareInvitations/:ShareInvitationId', 'PATCH'] as const
}

export function getPatchShareInvitationsShareInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchShareInvitationsShareInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>,
    ) {
      return parseResponse(client.shareInvitations[':ShareInvitationId'].$patch(args, options))
    },
  })
}

export function createPatchShareInvitationsShareInvitationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>,
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
    const mutationDefaults = getPatchShareInvitationsShareInvitationIdMutationOptions<
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

export function getPatchWorkloadsWorkloadIdSharesShareIdMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/shares/:ShareId', 'PATCH'] as const
}

export function getPatchWorkloadsWorkloadIdSharesShareIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWorkloadsWorkloadIdSharesShareIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']
      >,
    ) {
      return parseResponse(client.workloads[':WorkloadId'].shares[':ShareId'].$patch(args, options))
    },
  })
}

export function createPatchWorkloadsWorkloadIdSharesShareId<
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
                ReturnType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']>,
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
    const mutationDefaults = getPatchWorkloadsWorkloadIdSharesShareIdMutationOptions<
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

export function getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeMutationKey() {
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/upgrade', 'PUT'] as const
}

export function getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
      >,
    ) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].upgrade.$put(args, options),
      )
    },
  })
}

export function createPutWorkloadsWorkloadIdLensReviewsLensAliasUpgrade<
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
                  (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['upgrade']['$put']
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
    const mutationDefaults = getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeMutationOptions<
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
