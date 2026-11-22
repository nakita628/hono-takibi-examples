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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV3AccountsIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.accounts.index.$get>>,
) {
  return ['api', '/api/v3/accounts/', toValue(args)] as const
}

export function getApiV3AccountsIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.accounts.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.v3.accounts.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
            >
          >,
          ReturnType<typeof getApiV3AccountsIndexQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdAssignGroupsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/assign-groups/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdAssignGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdAssignGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['assign-groups'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdAssignGroupsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdAssignGroupsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdAuditLogsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdAuditLogsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdAuditLogsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdAuditLogsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdAuditLogsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['audit-logs'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/download/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdAuditLogsDownloadIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/export/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdAuditLogsExportIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdAuditLogsExportIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdAuditLogsExportIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/export/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdAuditLogsExportIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdAuditLogsExportIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].export.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdAuditLogsExportIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdAuditLogsExportIndexMutationOptions<
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

export function getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/audit-logs/export/:job_identifier/download/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].export[
          ':job_identifier'
        ].download.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['audit-logs'].export[
            ':job_identifier'
          ].download.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdConnectionsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].connections.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdConnectionsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdConnectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdConnectionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdConnectionsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdConnectionsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdConnectionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdConnectionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdConnectionsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdConnectionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdConnectionsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdConnectionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdConnectionsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].connections[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdConnectionsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdConnectionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections[':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdConnectionsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', 'PATCH'] as const
}

export function getPatchApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdConnectionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections[':id'].index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdConnectionsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
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
  const mutationDefaults = getPatchApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/environments/:environment_id/sao-cache/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].environments[':environment_id'][
          'sao-cache'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexMutationOptions<
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

export function getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/favorite-assets/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdFavoriteAssetsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdFavoriteAssetsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/group-permissions/:group_id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['group-permissions'][':group_id'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdGroupPermissionsGroupIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdGroupsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdGroupsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].groups.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdGroupsIndexQueryKey>
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
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdGroupsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdGroupsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].groups.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdGroupsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/groups/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdGroupsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdGroupsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v3.accounts[':account_id'].groups.index.$post(args, options))
    },
  })
}

export function usePostApiV3AccountsAccountIdGroupsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdGroupsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdGroupsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdGroupsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdGroupsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].groups[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdGroupsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdGroupsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdGroupsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdGroupsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].groups[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdGroupsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/groups/:id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdGroupsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdGroupsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].groups[':id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdGroupsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdGroupsIdIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdInvitesIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/invites/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdInvitesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdInvitesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v3.accounts[':account_id'].invites.index.$post(args, options))
    },
  })
}

export function usePostApiV3AccountsAccountIdInvitesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdInvitesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdIpRestrictionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdIpRestrictionsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdIpRestrictionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdIpRestrictionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdIpRestrictionsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdIpRestrictionsIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdIpRestrictionsSetIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions-set/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdIpRestrictionsSetIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdIpRestrictionsSetIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions-set'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdIpRestrictionsSetIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdIpRestrictionsSetIndexMutationOptions<
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

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/:rule_id',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[
          ':rule_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[
            ':rule_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdIpRestrictionsIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', toValue(args)] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdIpRestrictionsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdIpRestrictionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdIpRestrictionsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdIpRestrictionsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AccountsAccountIdIpRestrictionsIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', 'PUT'] as const
}

export function getPutApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AccountsAccountIdIpRestrictionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdIpRestrictionsId<
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
                    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
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
  const mutationDefaults = getPutApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdIpRestrictionsIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdIpRestrictionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdIpRestrictionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
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

export function getApiV3AccountsAccountIdLicenseMapsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdLicenseMapsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdLicenseMapsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdLicenseMapsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdLicenseMapsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdLicenseMapsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdLicenseMapsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['license-maps'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdLicenseMapsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdLicenseMapsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdLicenseMapsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdLicenseMapsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdLicenseMapsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdLicenseMapsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdLicenseMapsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdLicenseMapsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdLicenseMapsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdLicenseMapsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdLicenseMapsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/mantle-migration/status/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdMantleMigrationStatusIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/disable/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'][
          'environment-overrides'
        ].disable.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
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
    getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/enable/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'][
          'environment-overrides'
        ].enable.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
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
    getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexMutationOptions<
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

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environments/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environments/:environment_id/job-groups/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].environments[
          ':environment_id'
        ]['job-groups'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['migration-inventory'].environments[
            ':environment_id'
          ]['job-groups'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/summary/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdMigrationInventorySummaryIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdOauthConfigurationsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdOauthConfigurationsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdOauthConfigurationsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdOauthConfigurationsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdOauthConfigurationsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdOauthConfigurationsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/private-endpoints/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdPrivateEndpointsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdPrivateEndpointsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdPrivateEndpointsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/private-endpoints/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdPrivateEndpointsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdPrivateEndpointsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdPrivateEndpointsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdPrivateEndpointsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'][':pl_endpoint_ksuid'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['private-endpoints'][
            ':pl_endpoint_ksuid'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'][
          ':pl_endpoint_ksuid'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    'PATCH',
  ] as const
}

export function getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'][
          ':pl_endpoint_ksuid'
        ].index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
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
    getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdProjectsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdProjectsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsIndexQueryKey>
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
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdProjectsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdProjectsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdProjectsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdProjectsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdProjectsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].adapters.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/connections/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections[':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/credentials/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'PATCH',
  ] as const
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
          ':id'
        ].index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
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
    getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
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

export function getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'PUT',
  ] as const
}

export function getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].bulk.index.$put(args, options),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
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
    getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].bulk.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].bulk.index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/environment/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].environment.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].environment.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/job/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].job.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].job.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/user/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].user.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].user.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/environments/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
          ':id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'extended-attributes'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
          ':id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    'PATCH',
  ] as const
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
          ':id'
        ].index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
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
    getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[
          ':project_id'
        ].integrations.lineage.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[
            ':project_id'
          ].integrations.lineage.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[
          ':project_id'
        ].integrations.lineage.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    'PATCH',
  ] as const
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].index.$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
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
    getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].collections.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/:collection_id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].collections[':collection_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections[':collection_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/selections',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].selections.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelections<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsMutationOptions<
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

export function getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'managed-repositories'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/:repository_id/download/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
          ':repository_id'
        ].download.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
            ':repository_id'
          ].download.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
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

export function getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/',
    'PATCH',
  ] as const
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
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
    getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/repositories/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
          ':id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimConfigIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimConfigIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimConfigIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimConfigIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimConfigIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimConfigIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdScimConfigIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdScimConfigIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdScimConfigIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdScimConfigIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdScimConfigIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimConfigTokensIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimConfigTokensIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdScimConfigTokensIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdScimConfigTokensIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdScimConfigTokensIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdScimConfigTokensIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdScimConfigTokensIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimConfigTokensIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdScimConfigTokensIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2GroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2GroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2GroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2Groups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2GroupsQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2GroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2GroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdScimV2GroupsMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdScimV2GroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdScimV2GroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdScimV2Groups<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdScimV2GroupsMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2GroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'PUT'] as const
}

export function getPutApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdScimV2GroupsGroupId<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
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
  const mutationDefaults = getPutApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdScimV2GroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'PATCH'] as const
}

export function getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdScimV2GroupsGroupId<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
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
  const mutationDefaults = getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ResourceTypes', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2ResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/scim/v2/ResourceTypes/:resource_type',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2ResourceTypesResourceType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdScimV2SchemasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2SchemasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2SchemasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2Schemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2SchemasQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2SchemasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2SchemasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas/:schema_uri', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2SchemasSchemaUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/scim/v2/ServiceProviderConfig',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2ServiceProviderConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdScimV2UsersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2UsersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2Users<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2UsersQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdScimV2UsersMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdScimV2UsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdScimV2UsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
      >,
    ) {
      return parseResponse(client.api.v3.accounts[':account_id'].scim.v2.Users.$post(args, options))
    },
  })
}

export function usePostApiV3AccountsAccountIdScimV2Users<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdScimV2UsersMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', toValue(args)] as const
}

export function getApiV3AccountsAccountIdScimV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdScimV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AccountsAccountIdScimV2UsersUserIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'PUT'] as const
}

export function getPutApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AccountsAccountIdScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$put(args, options),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdScimV2UsersUserId<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
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
  const mutationDefaults = getPutApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdScimV2UsersUserIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdScimV2UsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function getPatchApiV3AccountsAccountIdScimV2UsersUserIdMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'PATCH'] as const
}

export function getPatchApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiV3AccountsAccountIdScimV2UsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiV3AccountsAccountIdScimV2UsersUserId<
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
                    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
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
  const mutationDefaults = getPatchApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/semantic-layer-credentials/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdSemanticLayerCredentialsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdServiceTokensIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdServiceTokensIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdServiceTokensIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdServiceTokensIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdServiceTokensIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdServiceTokensIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdServiceTokensIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdServiceTokensIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdServiceTokensIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdServiceTokensIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdServiceTokensIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdServiceTokensIndexMutationOptions<
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

export function getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdServiceTokensIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdServiceTokensIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AccountsAccountIdServiceTokensIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', 'PUT'] as const
}

export function getPutApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AccountsAccountIdServiceTokensIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$put(args, options),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdServiceTokensIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
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
  const mutationDefaults = getPutApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdServiceTokensIdIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', 'DELETE'] as const
}

export function getDeleteApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdServiceTokensIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdServiceTokensIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/service-tokens/:service_token_id/permissions/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][
          ':service_token_id'
        ].permissions.index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'][
            ':service_token_id'
          ].permissions.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdUsersIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdUsersIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdUsersIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdUsersIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
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
                    (typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdUsersIndexQueryKey>
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
            ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdUsersIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdUsersIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].users.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdUsersIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:id/', toValue(args)] as const
}

export function getApiV3AccountsAccountIdUsersIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdUsersIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdUsersIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdUsersIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdUsersIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdUsersIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].users[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
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
    getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexMutationOptions<
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

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
          ':id'
        ].index.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
            ':id'
          ].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/',
    'POST',
  ] as const
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
          ':id'
        ].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
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
                    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
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
    getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
          ':id'
        ].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
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
    getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/event/:event_id', toValue(args)] as const
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksEventEventId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/event/:event_id/receipts',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksEventEventIdReceipts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/receipt/:receipt_id',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksReceiptReceiptId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    'PUT',
  ] as const
}

export function getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
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
    getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
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

export function getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    'DELETE',
  ] as const
}

export function getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
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
    getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
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

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/event/:event_id/receipt',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
          ':event_id'
        ].receipt.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceipt<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
            ':event_id'
          ].receipt.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/events',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].events.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[
            ':subscription_id'
          ].events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
    >
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/test',
    toValue(args),
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
    >
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/subscriptions', toValue(args)] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AccountsAccountIdWebhooksSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey>
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
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3AccountsAccountIdWebhooksSubscriptionsMutationKey() {
  return ['api', '/api/v3/accounts/:account_id/webhooks/subscriptions', 'POST'] as const
}

export function getPostApiV3AccountsAccountIdWebhooksSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3AccountsAccountIdWebhooksSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscriptions.$post(args, options),
      )
    },
  })
}

export function usePostApiV3AccountsAccountIdWebhooksSubscriptions<
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
                    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
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
  const mutationDefaults = getPostApiV3AccountsAccountIdWebhooksSubscriptionsMutationOptions<
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

export function getApiV3AdapterSchemaIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/adapter-schema/', toValue(args)] as const
}

export function getApiV3AdapterSchemaIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3AdapterSchemaIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3['adapter-schema'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3AdapterSchemaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV3AdapterSchemaIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AdapterSchemaIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3AdapterSchemaIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3['adapter-schema'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV3UsersUserIdCredentialsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
  >,
) {
  return ['api', '/api/v3/users/:user_id/credentials/', toValue(args)] as const
}

export function getApiV3UsersUserIdCredentialsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3UsersUserIdCredentialsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3UsersUserIdCredentialsIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
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
                    (typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']
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
                    (typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3UsersUserIdCredentialsIndexQueryKey>
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
            ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UsersUserIdCredentialsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3UsersUserIdCredentialsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.users[':user_id'].credentials.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3UsersUserIdCredentialsIndexMutationKey() {
  return ['api', '/api/v3/users/:user_id/credentials/', 'POST'] as const
}

export function getPostApiV3UsersUserIdCredentialsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3UsersUserIdCredentialsIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']
      >,
    ) {
      return parseResponse(client.api.v3.users[':user_id'].credentials.index.$post(args, options))
    },
  })
}

export function usePostApiV3UsersUserIdCredentialsIndex<
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
                    (typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']
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
  const mutationDefaults = getPostApiV3UsersUserIdCredentialsIndexMutationOptions<
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

export function getApiV3UsersUserIdCredentialsIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
    >
  >,
) {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', toValue(args)] as const
}

export function getApiV3UsersUserIdCredentialsIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV3UsersUserIdCredentialsIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials[':id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV3UsersUserIdCredentialsIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
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
                    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
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
                    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiV3UsersUserIdCredentialsIdIndexQueryKey>
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
              (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3UsersUserIdCredentialsIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV3UsersUserIdCredentialsIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v3.users[':user_id'].credentials[':id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiV3UsersUserIdCredentialsIdIndexMutationKey() {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', 'POST'] as const
}

export function getPostApiV3UsersUserIdCredentialsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV3UsersUserIdCredentialsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials[':id'].index.$post(args, options),
      )
    },
  })
}

export function usePostApiV3UsersUserIdCredentialsIdIndex<
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
                    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
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
  const mutationDefaults = getPostApiV3UsersUserIdCredentialsIdIndexMutationOptions<
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

export function getDeleteApiV3UsersUserIdCredentialsIdIndexMutationKey() {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', 'DELETE'] as const
}

export function getDeleteApiV3UsersUserIdCredentialsIdIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV3UsersUserIdCredentialsIdIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials[':id'].index.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiV3UsersUserIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
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
  const mutationDefaults = getDeleteApiV3UsersUserIdCredentialsIdIndexMutationOptions<
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
