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

export function usePatchWorkloadsWorkloadIdAssociateLenses<
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
                  ReturnType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workloads)[':WorkloadId']['associateLenses']['$patch']>,
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
  const mutationDefaults = getPatchWorkloadsWorkloadIdAssociateLensesMutationOptions<
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

export function getLensesLensAliasSharesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lenses', '/lenses/:LensAlias/shares', keyArgs] as const
}

export function getLensesLensAliasSharesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLensesLensAliasSharesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lenses[':LensAlias'].shares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLensesLensAliasShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLensesLensAliasSharesQueryKey>
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
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasSharesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLensesLensAliasSharesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lenses[':LensAlias'].shares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLensesLensAliasShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLensesLensAliasSharesMutationOptions<TError, TOnMutateResult>(
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

export function usePostLensesLensAliasVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLensesLensAliasVersionsMutationOptions<TError, TOnMutateResult>(
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

export function usePostWorkloadsWorkloadIdMilestones<
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
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workloads)[':WorkloadId']['milestones']['$post']>,
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
  const mutationDefaults = getPostWorkloadsWorkloadIdMilestonesMutationOptions<
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

export function usePostWorkloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workloads.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workloads.$post>,
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
  const mutationDefaults = getPostWorkloadsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdSharesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/shares', keyArgs] as const
}

export function getWorkloadsWorkloadIdSharesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdSharesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].shares.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdShares<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdSharesQueryKey>
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
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['shares']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdSharesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdSharesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].shares.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkloadsWorkloadIdShares<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkloadsWorkloadIdSharesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteLensesLensAliasClientRequestTokenLensStatus<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLensesLensAliasClientRequestTokenLensStatusMutationOptions<
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

export function useDeleteLensesLensAliasSharesShareIdClientRequestToken<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLensesLensAliasSharesShareIdClientRequestTokenMutationOptions<
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

export function useDeleteWorkloadsWorkloadIdClientRequestToken<
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
                  ReturnType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workloads)[':WorkloadId#ClientRequestToken']['$delete']>,
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
  const mutationDefaults = getDeleteWorkloadsWorkloadIdClientRequestTokenMutationOptions<
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

export function useDeleteWorkloadsWorkloadIdSharesShareIdClientRequestToken<
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
    getDeleteWorkloadsWorkloadIdSharesShareIdClientRequestTokenMutationOptions<
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

export function usePatchWorkloadsWorkloadIdDisassociateLenses<
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
                    (typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workloads)[':WorkloadId']['disassociateLenses']['$patch']
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
  const mutationDefaults = getPatchWorkloadsWorkloadIdDisassociateLensesMutationOptions<
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

export function getLensesLensAliasExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lenses', '/lenses/:LensAlias/export', keyArgs] as const
}

export function getLensesLensAliasExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLensesLensAliasExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lenses[':LensAlias'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLensesLensAliasExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['export']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLensesLensAliasExportQueryKey>
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
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLensesLensAliasExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lenses[':LensAlias'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/answers/:QuestionId',
    keyArgs,
  ] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers'][':QuestionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers[':QuestionId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionId<
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
    getPatchWorkloadsWorkloadIdLensReviewsLensAliasAnswersQuestionIdMutationOptions<
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

export function getConsolidatedReportFormatQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['consolidatedReport#Format', '/consolidatedReport#Format', keyArgs] as const
}

export function getConsolidatedReportFormatQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsolidatedReportFormatQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['consolidatedReport#Format'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConsolidatedReportFormat<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['consolidatedReport#Format']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConsolidatedReportFormatQueryKey>
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
          Awaited<ReturnType<(typeof client)['consolidatedReport#Format']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsolidatedReportFormatQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsolidatedReportFormatQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['consolidatedReport#Format'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLensesLensAliasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lenses', '/lenses/:LensAlias', keyArgs] as const
}

export function getLensesLensAliasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLensesLensAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lenses[':LensAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLensesLensAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.lenses)[':LensAlias']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLensesLensAliasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLensesLensAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lenses[':LensAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviewsLensAlias<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']>
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchWorkloadsWorkloadIdLensReviewsLensAlias<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWorkloadsWorkloadIdLensReviewsLensAliasMutationOptions<
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

export function getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/report', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviewsLensAliasReport<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['report']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasReportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].report.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLensesLensAliasVersionDifferenceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lenses', '/lenses/:LensAlias/versionDifference', keyArgs] as const
}

export function getLensesLensAliasVersionDifferenceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLensesLensAliasVersionDifferenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lenses[':LensAlias'].versionDifference.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLensesLensAliasVersionDifference<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>
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
                  ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLensesLensAliasVersionDifferenceQueryKey>
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
          Awaited<ReturnType<(typeof client.lenses)[':LensAlias']['versionDifference']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLensesLensAliasVersionDifferenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLensesLensAliasVersionDifferenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lenses[':LensAlias'].versionDifference.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/milestones/:MilestoneNumber', keyArgs] as const
}

export function getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdMilestonesMilestoneNumber<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['milestones'][':MilestoneNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdMilestonesMilestoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].milestones[':MilestoneNumber'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId', keyArgs] as const
}

export function getWorkloadsWorkloadIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workloads)[':WorkloadId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchWorkloadsWorkloadId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchWorkloadsWorkloadIdMutationOptions<TError, TOnMutateResult>(
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

export function usePutImportLens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importLens.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.importLens.$put>,
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
  const mutationDefaults = getPutImportLensMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/lensReviews/:LensAlias/answers', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviewsLensAliasAnswers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['answers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasAnswersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].answers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkloadsWorkloadIdChecks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkloadsWorkloadIdChecksMutationOptions<TError, TOnMutateResult>(
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

export function usePostWorkloadsWorkloadIdCheckSummaries<
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
                  ReturnType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workloads)[':WorkloadId']['checkSummaries']['$post']>,
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
  const mutationDefaults = getPostWorkloadsWorkloadIdCheckSummariesMutationOptions<
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

export function getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'workloads',
    '/workloads/:WorkloadId/lensReviews/:LensAlias/improvements',
    keyArgs,
  ] as const
}

export function getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviewsLensAliasImprovements<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
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
                    (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey>
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
              (typeof client.workloads)[':WorkloadId']['lensReviews'][':LensAlias']['improvements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getWorkloadsWorkloadIdLensReviewsLensAliasImprovementsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews[':LensAlias'].improvements.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getWorkloadsWorkloadIdLensReviewsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workloads', '/workloads/:WorkloadId/lensReviews', keyArgs] as const
}

export function getWorkloadsWorkloadIdLensReviewsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workloads[':WorkloadId'].lensReviews.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkloadsWorkloadIdLensReviews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkloadsWorkloadIdLensReviewsQueryKey>
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
          Awaited<ReturnType<(typeof client.workloads)[':WorkloadId']['lensReviews']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkloadsWorkloadIdLensReviewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkloadsWorkloadIdLensReviewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workloads[':WorkloadId'].lensReviews.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['lenses', '/lenses', keyArgs] as const
}

export function getLensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.lenses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLenses<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.lenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
          ReturnType<typeof getLensesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.lenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkloadsWorkloadIdMilestonesSummaries<
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
                    (typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workloads)[':WorkloadId']['milestonesSummaries']['$post']
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
  const mutationDefaults = getPostWorkloadsWorkloadIdMilestonesSummariesMutationOptions<
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

export function usePostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.notifications.$post>,
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
  const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function getShareInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shareInvitations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['shareInvitations', '/shareInvitations', keyArgs] as const
}

export function getShareInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shareInvitations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShareInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shareInvitations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShareInvitations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.shareInvitations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>
            >
          >,
          ReturnType<typeof getShareInvitationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shareInvitations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getShareInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShareInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shareInvitations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTagsWorkloadArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:WorkloadArn', keyArgs] as const
}

export function getTagsWorkloadArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsWorkloadArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':WorkloadArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsWorkloadArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':WorkloadArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsWorkloadArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsWorkloadArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsWorkloadArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':WorkloadArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsWorkloadArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':WorkloadArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':WorkloadArn']['$post']>,
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
  const mutationDefaults = getPostTagsWorkloadArnMutationOptions<TError, TOnMutateResult>(
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

export function usePostWorkloadsSummaries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.workloadsSummaries.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.workloadsSummaries.$post>,
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
  const mutationDefaults = getPostWorkloadsSummariesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTagsWorkloadArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTagsWorkloadArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function usePatchGlobalSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['global-settings']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['global-settings']['$patch']>,
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
  const mutationDefaults = getPatchGlobalSettingsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchShareInvitationsShareInvitationId<
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
                  ReturnType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.shareInvitations)[':ShareInvitationId']['$patch']>,
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
  const mutationDefaults = getPatchShareInvitationsShareInvitationIdMutationOptions<
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

export function usePatchWorkloadsWorkloadIdSharesShareId<
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
                    (typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workloads)[':WorkloadId']['shares'][':ShareId']['$patch']
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
  const mutationDefaults = getPatchWorkloadsWorkloadIdSharesShareIdMutationOptions<
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

export function usePutWorkloadsWorkloadIdLensReviewsLensAliasUpgrade<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWorkloadsWorkloadIdLensReviewsLensAliasUpgradeMutationOptions<
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
