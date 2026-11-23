import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiV3AccountsIndexQueryKey(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
) {
  return ['api', '/api/v3/accounts/', args] as const
}

export function getApiV3AccountsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV3AccountsIndexQueryKey>
  >({
    queryKey: getApiV3AccountsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v3.accounts.index.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV3AccountsIndexQueryKey>
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
    return { ...getApiV3AccountsIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdAssignGroupsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdAssignGroupsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdAuditLogsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/', args] as const
}

export function getApiV3AccountsAccountIdAuditLogsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdAuditLogsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdAuditLogsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdAuditLogsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/download/', args] as const
}

export function getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdAuditLogsDownloadIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdAuditLogsDownloadIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/export/', args] as const
}

export function getApiV3AccountsAccountIdAuditLogsExportIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdAuditLogsExportIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdAuditLogsExportIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdAuditLogsExportIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdAuditLogsExportIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdAuditLogsExportIndexMutationOptions<
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

export function getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/audit-logs/export/:job_identifier/download/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['audit-logs'].export[
          ':job_identifier'
        ].download.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryKey
          >
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
      ...getApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdConnectionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/', args] as const
}

export function getApiV3AccountsAccountIdConnectionsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdConnectionsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdConnectionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdConnectionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdConnectionsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdConnectionsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', args] as const
}

export function getApiV3AccountsAccountIdConnectionsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdConnectionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].connections[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdConnectionsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdConnectionsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV3AccountsAccountIdConnectionsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexMutationOptions<
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

export function getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/favorite-assets/', args] as const
}

export function getApiV3AccountsAccountIdFavoriteAssetsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdFavoriteAssetsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdFavoriteAssetsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdFavoriteAssetsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdGroupsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/', args] as const
}

export function getApiV3AccountsAccountIdGroupsIndexQueryOptions<
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
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdGroupsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].groups.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdGroupsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiV3AccountsAccountIdGroupsIndexQueryKey>
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
      ...getApiV3AccountsAccountIdGroupsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdGroupsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdGroupsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdGroupsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/:id/', args] as const
}

export function getApiV3AccountsAccountIdGroupsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdGroupsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].groups[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdGroupsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdGroupsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdGroupsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdGroupsIdIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdInvitesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdInvitesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/', args] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdIpRestrictionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdIpRestrictionsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdIpRestrictionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdIpRestrictionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdIpRestrictionsIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdIpRestrictionsSetIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdIpRestrictionsSetIndexMutationOptions<
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

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/', args] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/:rule_id',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[
          ':rule_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdIpRestrictionsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', args] as const
}

export function getApiV3AccountsAccountIdIpRestrictionsIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdIpRestrictionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdIpRestrictionsId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdIpRestrictionsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV3AccountsAccountIdIpRestrictionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdIpRestrictionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdIpRestrictionsIdMutationOptions<
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

export function getApiV3AccountsAccountIdLicenseMapsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/', args] as const
}

export function getApiV3AccountsAccountIdLicenseMapsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdLicenseMapsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdLicenseMapsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdLicenseMapsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdLicenseMapsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdLicenseMapsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', args] as const
}

export function getApiV3AccountsAccountIdLicenseMapsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdLicenseMapsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdLicenseMapsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdLicenseMapsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdLicenseMapsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdLicenseMapsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/mantle-migration/status/', args] as const
}

export function getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdMantleMigrationStatusIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdMantleMigrationStatusIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexMutationOptions<
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

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/migration-inventory/environments/', args] as const
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environments/:environment_id/job-groups/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].environments[
          ':environment_id'
        ]['job-groups'].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/migration-inventory/summary/', args] as const
}

export function getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdMigrationInventorySummaryIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdMigrationInventorySummaryIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/', args] as const
}

export function getApiV3AccountsAccountIdOauthConfigurationsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdOauthConfigurationsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdOauthConfigurationsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdOauthConfigurationsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdOauthConfigurationsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdOauthConfigurationsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', args] as const
}

export function getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdOauthConfigurationsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdOauthConfigurationsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/private-endpoints/', args] as const
}

export function getApiV3AccountsAccountIdPrivateEndpointsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdPrivateEndpointsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdPrivateEndpointsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdPrivateEndpointsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdPrivateEndpointsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdPrivateEndpointsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['private-endpoints'][':pl_endpoint_ksuid'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/', args] as const
}

export function getApiV3AccountsAccountIdProjectsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiV3AccountsAccountIdProjectsIndexQueryKey>
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
      ...getApiV3AccountsAccountIdProjectsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdProjectsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', args] as const
}

export function getApiV3AccountsAccountIdProjectsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdProjectsIdIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/connections/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].connections[':id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/credentials/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[':id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexMutationOptions<
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

export function createPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/environment/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].environment.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/job/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].job.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/user/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'][
          'environment-variables'
        ].user.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/environments/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
          ':id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
          ':id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryKey
          >
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
      ...getApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[
          ':project_id'
        ].integrations.lineage.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryKey
          >
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
      ...getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryKey
          >
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
      ...getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].collections.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/collections/:collection_id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
          ':id'
        ].collections[':collection_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelections<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsMutationOptions<
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/:repository_id/download/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
          ':repository_id'
        ].download.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdProfilesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
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

export function createPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/repositories/', args] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexMutationOptions<
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

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
          ':id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/', args] as const
}

export function getApiV3AccountsAccountIdScimConfigIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimConfigIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimConfigIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimConfigIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdScimConfigIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdScimConfigIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/', args] as const
}

export function getApiV3AccountsAccountIdScimConfigTokensIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimConfigTokensIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimConfigTokensIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimConfigTokensIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdScimConfigTokensIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdScimConfigTokensIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/:id/', args] as const
}

export function getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimConfigTokensIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimConfigTokensIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteApiV3AccountsAccountIdScimConfigTokensIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2GroupsQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups', args] as const
}

export function getApiV3AccountsAccountIdScimV2GroupsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2GroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2Groups<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2GroupsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdScimV2Groups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdScimV2GroupsMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', args] as const
}

export function getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2GroupsGroupId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2GroupsGroupIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV3AccountsAccountIdScimV2GroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdScimV2GroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function createPatchApiV3AccountsAccountIdScimV2GroupsGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ResourceTypes', args] as const
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2ResourceTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2ResourceTypes<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2ResourceTypesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ResourceTypes/:resource_type', args] as const
}

export function getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2ResourceTypesResourceType<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdScimV2SchemasQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas', args] as const
}

export function getApiV3AccountsAccountIdScimV2SchemasQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2SchemasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2Schemas<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2SchemasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas/:schema_uri', args] as const
}

export function getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2SchemasSchemaUri<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2SchemasSchemaUriQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ServiceProviderConfig', args] as const
}

export function getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2ServiceProviderConfig<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2ServiceProviderConfigQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdScimV2UsersQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users', args] as const
}

export function getApiV3AccountsAccountIdScimV2UsersQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2Users<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2UsersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdScimV2Users<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdScimV2UsersMutationOptions<
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

export function getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', args] as const
}

export function getApiV3AccountsAccountIdScimV2UsersUserIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdScimV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdScimV2UsersUserId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdScimV2UsersUserIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV3AccountsAccountIdScimV2UsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdScimV2UsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function createPatchApiV3AccountsAccountIdScimV2UsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiV3AccountsAccountIdScimV2UsersUserIdMutationOptions<
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

export function getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/semantic-layer-credentials/', args] as const
}

export function getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdSemanticLayerCredentialsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdSemanticLayerCredentialsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdServiceTokensIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/', args] as const
}

export function getApiV3AccountsAccountIdServiceTokensIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdServiceTokensIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdServiceTokensIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdServiceTokensIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdServiceTokensIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdServiceTokensIndexMutationOptions<
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

export function getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', args] as const
}

export function getApiV3AccountsAccountIdServiceTokensIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdServiceTokensIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdServiceTokensIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdServiceTokensIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV3AccountsAccountIdServiceTokensIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdServiceTokensIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3AccountsAccountIdServiceTokensIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/service-tokens/:service_token_id/permissions/',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id']['service-tokens'][
          ':service_token_id'
        ].permissions.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryKey
          >
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
      ...getApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdUsersIndexQueryKey(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
) {
  return ['api', '/api/v3/accounts/:account_id/users/', args] as const
}

export function getApiV3AccountsAccountIdUsersIndexQueryOptions<
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
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdUsersIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdUsersIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiV3AccountsAccountIdUsersIndexQueryKey>
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
      ...getApiV3AccountsAccountIdUsersIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdUsersIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:id/', args] as const
}

export function getApiV3AccountsAccountIdUsersIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdUsersIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdUsersIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdUsersIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/', args] as const
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexMutationOptions<
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

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/', args] as const
}

export function getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
          ':id'
        ].index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexMutationOptions<
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

export function getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/event/:event_id', args] as const
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksEventEventIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksEventEventId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksEventEventIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/event/:event_id/receipts', args] as const
}

export function getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksEventEventIdReceipts<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksEventEventIdReceiptsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/receipt/:receipt_id', args] as const
}

export function getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksReceiptReceiptId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksReceiptReceiptIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
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

export function createDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
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
      getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdMutationOptions<
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

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/event/:event_id/receipt',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey:
      getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
          ':event_id'
        ].receipt.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceipt<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/events',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].events.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEvents<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<
            typeof getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryKey
          >
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
      ...getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
) {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id/test',
    args,
  ] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTest<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/subscriptions', args] as const
}

export function getApiV3AccountsAccountIdWebhooksSubscriptionsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AccountsAccountIdWebhooksSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AccountsAccountIdWebhooksSubscriptions<
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
  args: () => InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AccountsAccountIdWebhooksSubscriptionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3AccountsAccountIdWebhooksSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3AccountsAccountIdWebhooksSubscriptionsMutationOptions<
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

export function getApiV3AdapterSchemaIndexQueryKey(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
) {
  return ['api', '/api/v3/adapter-schema/', args] as const
}

export function getApiV3AdapterSchemaIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3AdapterSchemaIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3['adapter-schema'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3AdapterSchemaIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3AdapterSchemaIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV3UsersUserIdCredentialsIndexQueryKey(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
) {
  return ['api', '/api/v3/users/:user_id/credentials/', args] as const
}

export function getApiV3UsersUserIdCredentialsIndexQueryOptions<
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
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3UsersUserIdCredentialsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3UsersUserIdCredentialsIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getApiV3UsersUserIdCredentialsIndexQueryKey>
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
      ...getApiV3UsersUserIdCredentialsIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3UsersUserIdCredentialsIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3UsersUserIdCredentialsIndexMutationOptions<
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

export function getApiV3UsersUserIdCredentialsIdIndexQueryKey(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', args] as const
}

export function getApiV3UsersUserIdCredentialsIdIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiV3UsersUserIdCredentialsIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v3.users[':user_id'].credentials[':id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV3UsersUserIdCredentialsIdIndex<
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
  args: () => InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getApiV3UsersUserIdCredentialsIdIndexQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostApiV3UsersUserIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiV3UsersUserIdCredentialsIdIndexMutationOptions<
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

export function createDeleteApiV3UsersUserIdCredentialsIdIndex<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiV3UsersUserIdCredentialsIdIndexMutationOptions<
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
