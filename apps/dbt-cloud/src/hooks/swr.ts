import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiV3AccountsIndexKey(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
) {
  return ['api', '/api/v3/accounts/', args] as const
}

export function useGetApiV3AccountsIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
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
        ? getGetApiV3AccountsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsIndex<TError = unknown>(
  args: InferRequestType<typeof client.api.v3.accounts.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
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
        ? getGetApiV3AccountsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v3.accounts.index.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3.accounts.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdAssignGroupsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/assign-groups/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdAssignGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdAssignGroupsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['assign-groups']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['assign-groups'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdAuditLogsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/', args] as const
}

export function useGetApiV3AccountsAccountIdAuditLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdAuditLogsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdAuditLogsDownloadIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/download/', args] as const
}

export function useGetApiV3AccountsAccountIdAuditLogsDownloadIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsDownloadIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdAuditLogsDownloadIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsDownloadIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].download.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdAuditLogsExportIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/export/', args] as const
}

export function useGetApiV3AccountsAccountIdAuditLogsExportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsExportIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdAuditLogsExportIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsExportIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].export.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdAuditLogsExportIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/audit-logs/export/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdAuditLogsExportIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdAuditLogsExportIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['audit-logs'].export.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexKey(
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

export function useGetApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].export[
            ':job_identifier'
          ].download.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdAuditLogsExportJobIdentifierDownloadIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['audit-logs']['export'][':job_identifier']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id']['audit-logs'].export[
            ':job_identifier'
          ].download.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdConnectionsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/', args] as const
}

export function useGetApiV3AccountsAccountIdConnectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdConnectionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].connections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdConnectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdConnectionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].connections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdConnectionsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdConnectionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdConnectionsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['connections']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].connections.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdConnectionsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdConnectionsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdConnectionsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].connections[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdConnectionsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdConnectionsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].connections[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdConnectionsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdConnectionsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdConnectionsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].connections[':id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdConnectionsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/connections/:id/', 'PATCH'] as const
}

export function usePatchApiV3AccountsAccountIdConnectionsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV3AccountsAccountIdConnectionsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['connections'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].connections[':id'].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/environments/:environment_id/sao-cache/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdEnvironmentsEnvironmentIdSaoCacheIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['environments'][':environment_id']['sao-cache']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].environments[':environment_id'][
            'sao-cache'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdFavoriteAssetsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/favorite-assets/', args] as const
}

export function useGetApiV3AccountsAccountIdFavoriteAssetsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdFavoriteAssetsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
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
          client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdFavoriteAssetsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdFavoriteAssetsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['favorite-assets']['index']['$get']
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
          client.api.v3.accounts[':account_id']['favorite-assets'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/group-permissions/:group_id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdGroupPermissionsGroupIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdGroupPermissionsGroupIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['group-permissions'][':group_id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['group-permissions'][':group_id'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdGroupsIndexKey(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/', args] as const
}

export function useGetApiV3AccountsAccountIdGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
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
        ? getGetApiV3AccountsAccountIdGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.accounts[':account_id'].groups.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdGroupsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
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
        ? getGetApiV3AccountsAccountIdGroupsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.accounts[':account_id'].groups.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdGroupsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/groups/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdGroupsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdGroupsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['groups']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v3.accounts[':account_id'].groups.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdGroupsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/groups/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdGroupsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdGroupsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].groups[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdGroupsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdGroupsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].groups[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdGroupsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/groups/:id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdGroupsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdGroupsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['groups'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].groups[':id'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdInvitesIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/invites/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdInvitesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdInvitesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['invites']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].invites.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdIpRestrictionsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/', args] as const
}

export function useGetApiV3AccountsAccountIdIpRestrictionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdIpRestrictionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdIpRestrictionsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdIpRestrictionsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdIpRestrictionsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdIpRestrictionsSetIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions-set/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdIpRestrictionsSetIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdIpRestrictionsSetIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions-set'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions-set/:id/validate/', args] as const
}

export function useGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate']['index']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdKey(
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

export function useGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[
            ':rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsSetIdValidateRuleIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions-set'][':id']['validate'][':rule_id']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions-set'][':id'].validate[
            ':rule_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdIpRestrictionsIdKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', args] as const
}

export function useGetApiV3AccountsAccountIdIpRestrictionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdIpRestrictionsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdIpRestrictionsIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$get']
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
          client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdIpRestrictionsIdKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', 'PUT'] as const
}

export function usePutApiV3AccountsAccountIdIpRestrictionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3AccountsAccountIdIpRestrictionsIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdIpRestrictionsIdKey() {
  return ['api', '/api/v3/accounts/:account_id/ip-restrictions/:id', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdIpRestrictionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdIpRestrictionsIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['ip-restrictions'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['ip-restrictions'][':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdLicenseMapsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/', args] as const
}

export function useGetApiV3AccountsAccountIdLicenseMapsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdLicenseMapsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
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
          client.api.v3.accounts[':account_id']['license-maps'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdLicenseMapsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdLicenseMapsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$get']
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
          client.api.v3.accounts[':account_id']['license-maps'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdLicenseMapsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdLicenseMapsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdLicenseMapsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['license-maps']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['license-maps'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdLicenseMapsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdLicenseMapsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdLicenseMapsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdLicenseMapsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdLicenseMapsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdLicenseMapsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdLicenseMapsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdLicenseMapsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/license-maps/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdLicenseMapsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdLicenseMapsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['license-maps'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['license-maps'][':id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdMantleMigrationStatusIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/mantle-migration/status/', args] as const
}

export function useGetApiV3AccountsAccountIdMantleMigrationStatusIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMantleMigrationStatusIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
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
          client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdMantleMigrationStatusIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMantleMigrationStatusIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['mantle-migration']['status']['index']['$get']
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
          client.api.v3.accounts[':account_id']['mantle-migration'].status.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/disable/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesDisableIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['disable']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['migration-inventory'][
            'environment-overrides'
          ].disable.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/migration-inventory/environment-overrides/enable/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdMigrationInventoryEnvironmentOverridesEnableIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environment-overrides']['enable']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['migration-inventory'][
            'environment-overrides'
          ].enable.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/migration-inventory/environments/', args] as const
}

export function useGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexKey(
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

export function useGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].environments[
            ':environment_id'
          ]['job-groups'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventoryEnvironmentsEnvironmentIdJobGroupsIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['environments'][':environment_id']['job-groups']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].environments[
            ':environment_id'
          ]['job-groups'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdMigrationInventorySummaryIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/migration-inventory/summary/', args] as const
}

export function useGetApiV3AccountsAccountIdMigrationInventorySummaryIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventorySummaryIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdMigrationInventorySummaryIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdMigrationInventorySummaryIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['migration-inventory']['summary']['index']['$get']
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
          client.api.v3.accounts[':account_id']['migration-inventory'].summary.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdOauthConfigurationsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/', args] as const
}

export function useGetApiV3AccountsAccountIdOauthConfigurationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdOauthConfigurationsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
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
          client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdOauthConfigurationsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdOauthConfigurationsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$get']
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
          client.api.v3.accounts[':account_id']['oauth-configurations'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdOauthConfigurationsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdOauthConfigurationsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['oauth-configurations'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdOauthConfigurationsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdOauthConfigurationsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdOauthConfigurationsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdOauthConfigurationsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdOauthConfigurationsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdOauthConfigurationsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/oauth-configurations/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdOauthConfigurationsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['oauth-configurations'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['oauth-configurations'][':id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdPrivateEndpointsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/private-endpoints/', args] as const
}

export function useGetApiV3AccountsAccountIdPrivateEndpointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdPrivateEndpointsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
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
          client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdPrivateEndpointsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdPrivateEndpointsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$get']
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
          client.api.v3.accounts[':account_id']['private-endpoints'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdPrivateEndpointsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/private-endpoints/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdPrivateEndpointsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdPrivateEndpointsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['private-endpoints'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey(
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

export function useGetApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
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
          client.api.v3.accounts[':account_id']['private-endpoints'][
            ':pl_endpoint_ksuid'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$get']
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
          client.api.v3.accounts[':account_id']['private-endpoints'][
            ':pl_endpoint_ksuid'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['private-endpoints'][
            ':pl_endpoint_ksuid'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/private-endpoints/:pl_endpoint_ksuid/',
    'PATCH',
  ] as const
}

export function usePatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV3AccountsAccountIdPrivateEndpointsPlEndpointKsuidIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['private-endpoints'][':pl_endpoint_ksuid']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['private-endpoints'][
            ':pl_endpoint_ksuid'
          ].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':id'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdProjectsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[':id'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/adapters/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdAdaptersIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['adapters'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].adapters[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/connections/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/connections/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/connections/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdConnectionsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['connections'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].connections[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/credentials/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/credentials/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/credentials/:id/',
    'PATCH',
  ] as const
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV3AccountsAccountIdProjectsProjectIdCredentialsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['credentials'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].credentials[
            ':id'
          ].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['environment-variables'][
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'PUT',
  ] as const
}

export function usePutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].bulk.index.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].bulk.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environment-variables/bulk/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['bulk']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].bulk.index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].environment.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['environment']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].environment.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].job.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['job']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].job.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].user.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environment-variables']['user']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'environment-variables'
          ].user.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/environments/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/environments/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/environments/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentsIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['environments'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].environments[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'extended-attributes'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/extended-attributes/:id/',
    'PATCH',
  ] as const
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV3AccountsAccountIdProjectsProjectIdExtendedAttributesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['extended-attributes'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id']['extended-attributes'][
            ':id'
          ].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[
            ':project_id'
          ].integrations.lineage.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[
            ':project_id'
          ].integrations.lineage.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[
            ':project_id'
          ].integrations.lineage.index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/',
    'PATCH',
  ] as const
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections[':collection_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdCollectionsCollectionIdIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['collections'][':collection_id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].collections[':collection_id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/integrations/lineage/:id/selections',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdIntegrationsLineageIdSelectionsKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['integrations']['lineage'][':id']['selections']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].integrations.lineage[
            ':id'
          ].selections.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/managed-repositories/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'][
            'managed-repositories'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
            ':repository_id'
          ].download.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdManagedRepositoriesRepositoryIdDownloadIndexKey(
            args,
          )
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['managed-repositories'][':repository_id']['download']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id']['managed-repositories'][
            ':repository_id'
          ].download.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdProfilesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdProfilesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/profiles/:id/',
    'PATCH',
  ] as const
}

export function usePatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV3AccountsAccountIdProjectsProjectIdProfilesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['profiles'][':id']['index']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].profiles[
            ':id'
          ].index.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/repositories/', args] as const
}

export function useGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/projects/:project_id/repositories/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey(
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

export function useGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/projects/:project_id/repositories/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiV3AccountsAccountIdProjectsProjectIdRepositoriesIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['projects'][':project_id']['repositories'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].projects[':project_id'].repositories[
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimConfigIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/', args] as const
}

export function useGetApiV3AccountsAccountIdScimConfigIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimConfigIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdScimConfigIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdScimConfigIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdScimConfigIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimConfigTokensIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/', args] as const
}

export function useGetApiV3AccountsAccountIdScimConfigTokensIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigTokensIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimConfigTokensIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigTokensIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdScimConfigTokensIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdScimConfigTokensIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdScimConfigTokensIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].tokens.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimConfigTokensIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdScimConfigTokensIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigTokensIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimConfigTokensIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimConfigTokensIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/scim-config/tokens/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdScimConfigTokensIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdScimConfigTokensIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim-config']['tokens'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['scim-config'].tokens[':id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2GroupsKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2GroupsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2Groups<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2GroupsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdScimV2GroupsKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdScimV2Groups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdScimV2GroupsKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2GroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2GroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2GroupsGroupIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2GroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2GroupsGroupIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdScimV2GroupsGroupIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'PUT'] as const
}

export function usePutApiV3AccountsAccountIdScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3AccountsAccountIdScimV2GroupsGroupIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdScimV2GroupsGroupIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Groups/:group_id', 'PATCH'] as const
}

export function usePatchApiV3AccountsAccountIdScimV2GroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV3AccountsAccountIdScimV2GroupsGroupIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Groups'][':group_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Groups[':group_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2ResourceTypesKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ResourceTypes', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2ResourceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ResourceTypesKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2ResourceTypes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ResourceTypesKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ResourceTypes/:resource_type', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2ResourceTypesResourceType<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2ResourceTypesResourceType<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ResourceTypesResourceTypeKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ResourceTypes'][':resource_type']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ResourceTypes[':resource_type'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2SchemasKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2Schemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2SchemasKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2Schemas<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2SchemasKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Schemas.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2SchemasSchemaUriKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Schemas/:schema_uri', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2SchemasSchemaUri<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2SchemasSchemaUriKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2SchemasSchemaUri<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2SchemasSchemaUriKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Schemas'][':schema_uri']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Schemas[':schema_uri'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2ServiceProviderConfigKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/ServiceProviderConfig', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2ServiceProviderConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ServiceProviderConfigKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2ServiceProviderConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2ServiceProviderConfigKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['ServiceProviderConfig']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.ServiceProviderConfig.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2UsersKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2UsersKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2Users<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2UsersKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Users.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdScimV2UsersKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdScimV2Users<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdScimV2UsersKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdScimV2UsersUserIdKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', args] as const
}

export function useGetApiV3AccountsAccountIdScimV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2UsersUserIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdScimV2UsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdScimV2UsersUserIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$get']
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
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdScimV2UsersUserIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'PUT'] as const
}

export function usePutApiV3AccountsAccountIdScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3AccountsAccountIdScimV2UsersUserIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdScimV2UsersUserIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdScimV2UsersUserIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiV3AccountsAccountIdScimV2UsersUserIdKey() {
  return ['api', '/api/v3/accounts/:account_id/scim/v2/Users/:user_id', 'PATCH'] as const
}

export function usePatchApiV3AccountsAccountIdScimV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiV3AccountsAccountIdScimV2UsersUserIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['scim']['v2']['Users'][':user_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].scim.v2.Users[':user_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdSemanticLayerCredentialsIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/semantic-layer-credentials/', args] as const
}

export function useGetApiV3AccountsAccountIdSemanticLayerCredentialsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdSemanticLayerCredentialsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
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
          client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdSemanticLayerCredentialsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdSemanticLayerCredentialsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['semantic-layer-credentials']['index']['$get']
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
          client.api.v3.accounts[':account_id']['semantic-layer-credentials'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdServiceTokensIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/', args] as const
}

export function useGetApiV3AccountsAccountIdServiceTokensIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdServiceTokensIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdServiceTokensIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdServiceTokensIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdServiceTokensIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['service-tokens']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdServiceTokensIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdServiceTokensIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdServiceTokensIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdServiceTokensIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', 'PUT'] as const
}

export function usePutApiV3AccountsAccountIdServiceTokensIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3AccountsAccountIdServiceTokensIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdServiceTokensIdIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/service-tokens/:id/', 'DELETE'] as const
}

export function useDeleteApiV3AccountsAccountIdServiceTokensIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdServiceTokensIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id']['service-tokens'][':id'].index.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexKey(
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

export function useGetApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'][
            ':service_token_id'
          ].permissions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdServiceTokensServiceTokenIdPermissionsIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['service-tokens'][':service_token_id']['permissions']['index']['$get']
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
          client.api.v3.accounts[':account_id']['service-tokens'][
            ':service_token_id'
          ].permissions.index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdUsersIndexKey(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
) {
  return ['api', '/api/v3/accounts/:account_id/users/', args] as const
}

export function useGetApiV3AccountsAccountIdUsersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
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
        ? getGetApiV3AccountsAccountIdUsersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.accounts[':account_id'].users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdUsersIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
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
        ? getGetApiV3AccountsAccountIdUsersIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.accounts)[':account_id']['users']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.accounts[':account_id'].users.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdUsersIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdUsersIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdUsersIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/', args] as const
}

export function useGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexKey() {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'].index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/', args] as const
}

export function useGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$get']
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
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
            ':id'
          ].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/',
    'POST',
  ] as const
}

export function usePostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
            ':id'
          ].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/users/:user_id/account-apikeys/:id/',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdUsersUserIdAccountApikeysIdIndexKey()
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
            (typeof client.api.v3.accounts)[':account_id']['users'][':user_id']['account-apikeys'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].users[':user_id']['account-apikeys'][
            ':id'
          ].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksEventEventIdKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/event/:event_id', args] as const
}

export function useGetApiV3AccountsAccountIdWebhooksEventEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksEventEventIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksEventEventId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksEventEventIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksEventEventIdReceiptsKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/event/:event_id/receipts', args] as const
}

export function useGetApiV3AccountsAccountIdWebhooksEventEventIdReceipts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksEventEventIdReceiptsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksEventEventIdReceipts<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksEventEventIdReceiptsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['event'][':event_id']['receipts']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.event[':event_id'].receipts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksReceiptReceiptIdKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/receipt/:receipt_id', args] as const
}

export function useGetApiV3AccountsAccountIdWebhooksReceiptReceiptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksReceiptReceiptIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksReceiptReceiptId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksReceiptReceiptIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['receipt'][':receipt_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.receipt[':receipt_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey(
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

export function useGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    'PUT',
  ] as const
}

export function usePutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey() {
  return [
    'api',
    '/api/v3/accounts/:account_id/webhooks/subscription/:subscription_id',
    'DELETE',
  ] as const
}

export function useDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdKey()
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
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptKey(
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

export function useGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceipt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
            ':event_id'
          ].receipt.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceipt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventEventIdReceiptKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['event'][':event_id']['receipt']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].event[
            ':event_id'
          ].receipt.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsKey(
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

export function useGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEvents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[
            ':subscription_id'
          ].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEvents<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdEventsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['events']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[
            ':subscription_id'
          ].events.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestKey(
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

export function useGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTest<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionSubscriptionIdTestKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscription'][':subscription_id']['test']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscription[':subscription_id'].test.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3AccountsAccountIdWebhooksSubscriptionsKey(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
) {
  return ['api', '/api/v3/accounts/:account_id/webhooks/subscriptions', args] as const
}

export function useGetApiV3AccountsAccountIdWebhooksSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AccountsAccountIdWebhooksSubscriptions<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3AccountsAccountIdWebhooksSubscriptionsKey(args)
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
                (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$get']
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
          client.api.v3.accounts[':account_id'].webhooks.subscriptions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3AccountsAccountIdWebhooksSubscriptionsKey() {
  return ['api', '/api/v3/accounts/:account_id/webhooks/subscriptions', 'POST'] as const
}

export function usePostApiV3AccountsAccountIdWebhooksSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3AccountsAccountIdWebhooksSubscriptionsKey()
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
            (typeof client.api.v3.accounts)[':account_id']['webhooks']['subscriptions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.accounts[':account_id'].webhooks.subscriptions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3AdapterSchemaIndexKey(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
) {
  return ['api', '/api/v3/adapter-schema/', args] as const
}

export function useGetApiV3AdapterSchemaIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
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
        ? getGetApiV3AdapterSchemaIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['adapter-schema'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3AdapterSchemaIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3)['adapter-schema']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
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
        ? getGetApiV3AdapterSchemaIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v3)['adapter-schema']['index']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v3['adapter-schema'].index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV3UsersUserIdCredentialsIndexKey(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
) {
  return ['api', '/api/v3/users/:user_id/credentials/', args] as const
}

export function useGetApiV3UsersUserIdCredentialsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
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
        ? getGetApiV3UsersUserIdCredentialsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.users[':user_id'].credentials.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3UsersUserIdCredentialsIndex<TError = unknown>(
  args: InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
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
        ? getGetApiV3UsersUserIdCredentialsIndexKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v3.users[':user_id'].credentials.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3UsersUserIdCredentialsIndexKey() {
  return ['api', '/api/v3/users/:user_id/credentials/', 'POST'] as const
}

export function usePostApiV3UsersUserIdCredentialsIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3UsersUserIdCredentialsIndexKey()
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
            (typeof client.api.v3.users)[':user_id']['credentials']['index']['$post']
          >
        },
      ) =>
        parseResponse(client.api.v3.users[':user_id'].credentials.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV3UsersUserIdCredentialsIdIndexKey(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
) {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', args] as const
}

export function useGetApiV3UsersUserIdCredentialsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3UsersUserIdCredentialsIdIndexKey(args)
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
                (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
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
          client.api.v3.users[':user_id'].credentials[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV3UsersUserIdCredentialsIdIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetApiV3UsersUserIdCredentialsIdIndexKey(args)
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
                (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$get']
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
          client.api.v3.users[':user_id'].credentials[':id'].index.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV3UsersUserIdCredentialsIdIndexKey() {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', 'POST'] as const
}

export function usePostApiV3UsersUserIdCredentialsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV3UsersUserIdCredentialsIdIndexKey()
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
            (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.users[':user_id'].credentials[':id'].index.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV3UsersUserIdCredentialsIdIndexKey() {
  return ['api', '/api/v3/users/:user_id/credentials/:id/', 'DELETE'] as const
}

export function useDeleteApiV3UsersUserIdCredentialsIdIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV3UsersUserIdCredentialsIdIndexKey()
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
            (typeof client.api.v3.users)[':user_id']['credentials'][':id']['index']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v3.users[':user_id'].credentials[':id'].index.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
