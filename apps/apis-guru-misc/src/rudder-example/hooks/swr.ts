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

export function getArchivesKey() {
  return ['archives'] as const
}

export function getBrandingKey() {
  return ['branding'] as const
}

export function getChangeRequestsKey() {
  return ['changeRequests'] as const
}

export function getComplianceKey() {
  return ['compliance'] as const
}

export function getCveKey() {
  return ['cve'] as const
}

export function getDatasourcesKey() {
  return ['datasources'] as const
}

export function getDirectivesKey() {
  return ['directives'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getInventoriesKey() {
  return ['inventories'] as const
}

export function getMethodsKey() {
  return ['methods'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getParametersKey() {
  return ['parameters'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getScaleoutrelayKey() {
  return ['scaleoutrelay'] as const
}

export function getSecretKey() {
  return ['secret'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getTechniquesKey() {
  return ['techniques'] as const
}

export function getUsermanagementKey() {
  return ['usermanagement'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getValidatedUsersKey() {
  return ['validatedUsers'] as const
}

export function getGetApiChangeRequestsKey() {
  return ['api', '/api/changeRequests'] as const
}

export function useGetApiChangeRequests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiChangeRequestsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.changeRequests.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiChangeRequests<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiChangeRequestsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.changeRequests.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetArchivesExportKey(
  args: InferRequestType<typeof client.archives.export.$get>,
) {
  return ['archives', '/archives/export', args] as const
}

export function useGetArchivesExport<TError = unknown>(
  args: InferRequestType<typeof client.archives.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchivesExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archives.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetArchivesExport<TError = unknown>(
  args: InferRequestType<typeof client.archives.export.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetArchivesExportKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.archives.export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostArchivesImportKey() {
  return ['archives', '/archives/import', 'POST'] as const
}

export function usePostArchivesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.archives.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostArchivesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.archives.import.$post> }) =>
        parseResponse(client.archives.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBrandingKey() {
  return ['branding', '/branding'] as const
}

export function useGetBranding<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.branding.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBranding<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetBrandingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.branding.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBrandingKey() {
  return ['branding', '/branding', 'POST'] as const
}

export function usePostBranding<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.branding.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrandingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.branding.$post> }) =>
        parseResponse(client.branding.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBrandingReloadKey() {
  return ['branding', '/branding/reload', 'POST'] as const
}

export function usePostBrandingReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBrandingReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.branding.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetChangeRequestsChangeRequestIdKey(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
) {
  return ['changeRequests', '/changeRequests/:changeRequestId', args] as const
}

export function useGetChangeRequestsChangeRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChangeRequestsChangeRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.changeRequests[':changeRequestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetChangeRequestsChangeRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetChangeRequestsChangeRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.changeRequests[':changeRequestId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostChangeRequestsChangeRequestIdKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId', 'POST'] as const
}

export function usePostChangeRequestsChangeRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangeRequestsChangeRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']> },
      ) => parseResponse(client.changeRequests[':changeRequestId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteChangeRequestsChangeRequestIdKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId', 'DELETE'] as const
}

export function useDeleteChangeRequestsChangeRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteChangeRequestsChangeRequestIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']> },
      ) => parseResponse(client.changeRequests[':changeRequestId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostChangeRequestsChangeRequestIdAcceptKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId/accept', 'POST'] as const
}

export function usePostChangeRequestsChangeRequestIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostChangeRequestsChangeRequestIdAcceptKey()
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
            (typeof client.changeRequests)[':changeRequestId']['accept']['$post']
          >
        },
      ) =>
        parseResponse(client.changeRequests[':changeRequestId'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetComplianceKey(args: InferRequestType<typeof client.compliance.$get>) {
  return ['compliance', '/compliance', args] as const
}

export function useGetCompliance<TError = unknown>(
  args: InferRequestType<typeof client.compliance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComplianceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCompliance<TError = unknown>(
  args: InferRequestType<typeof client.compliance.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetComplianceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComplianceNodesKey(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
) {
  return ['compliance', '/compliance/nodes', args] as const
}

export function useGetComplianceNodes<TError = unknown>(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComplianceNodes<TError = unknown>(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceNodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.nodes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComplianceNodesNodeIdKey(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
) {
  return ['compliance', '/compliance/nodes/:nodeId', args] as const
}

export function useGetComplianceNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComplianceNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceNodesNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComplianceRulesKey(
  args: InferRequestType<typeof client.compliance.rules.$get>,
) {
  return ['compliance', '/compliance/rules', args] as const
}

export function useGetComplianceRules<TError = unknown>(
  args: InferRequestType<typeof client.compliance.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComplianceRules<TError = unknown>(
  args: InferRequestType<typeof client.compliance.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetComplianceRulesRuleIdKey(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
) {
  return ['compliance', '/compliance/rules/:ruleId', args] as const
}

export function useGetComplianceRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetComplianceRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetComplianceRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.compliance.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCveKey() {
  return ['cve', '/cve'] as const
}

export function useGetCve<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCveKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cve.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCve<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetCveKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cve.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPostCveCheckKey() {
  return ['cve', '/cve/check', 'POST'] as const
}

export function usePostCveCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCveCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cve.check.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCveCheckConfigKey() {
  return ['cve', '/cve/check/config'] as const
}

export function useGetCveCheckConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCveCheckConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cve.check.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCveCheckConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCveCheckConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cve.check.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCveCheckConfigKey() {
  return ['cve', '/cve/check/config', 'POST'] as const
}

export function usePostCveCheckConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cve.check.config.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCveCheckConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cve.check.config.$post> }) =>
        parseResponse(client.cve.check.config.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCveCheckLastKey() {
  return ['cve', '/cve/check/last'] as const
}

export function useGetCveCheckLast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCveCheckLastKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cve.check.last.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCveCheckLast<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCveCheckLastKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cve.check.last.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCveListKey() {
  return ['cve', '/cve/list', 'POST'] as const
}

export function usePostCveList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cve.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCveListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cve.list.$post> }) =>
        parseResponse(client.cve.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCveUpdateIndexKey() {
  return ['cve', '/cve/update/', 'POST'] as const
}

export function usePostCveUpdateIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cve.update.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCveUpdateIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cve.update.index.$post> }) =>
        parseResponse(client.cve.update.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCveUpdateFsKey() {
  return ['cve', '/cve/update/fs', 'POST'] as const
}

export function usePostCveUpdateFs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.fs.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCveUpdateFsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cve.update.fs.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesKey() {
  return ['datasources', '/datasources'] as const
}

export function useGetDatasources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasourcesKey() {
  return ['datasources', '/datasources', 'PUT'] as const
}

export function usePutDatasources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasources.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasources.$put> }) =>
        parseResponse(client.datasources.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesReloadKey() {
  return ['datasources', '/datasources/reload', 'POST'] as const
}

export function usePostDatasourcesReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.datasources.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesReloadDatasourceIdKey() {
  return ['datasources', '/datasources/reload/:datasourceId', 'POST'] as const
}

export function usePostDatasourcesReloadDatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.reload)[':datasourceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesReloadDatasourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']> },
      ) => parseResponse(client.datasources.reload[':datasourceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesDatasourceIdKey(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
) {
  return ['datasources', '/datasources/:datasourceId', args] as const
}

export function useGetDatasourcesDatasourceId<TError = unknown>(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesDatasourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources[':datasourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesDatasourceId<TError = unknown>(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesDatasourceIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources[':datasourceId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasourcesDatasourceIdKey() {
  return ['datasources', '/datasources/:datasourceId', 'POST'] as const
}

export function usePostDatasourcesDatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':datasourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesDatasourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasources)[':datasourceId']['$post']> },
      ) => parseResponse(client.datasources[':datasourceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasourcesDatasourceIdKey() {
  return ['datasources', '/datasources/:datasourceId', 'DELETE'] as const
}

export function useDeleteDatasourcesDatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasourcesDatasourceIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']> },
      ) => parseResponse(client.datasources[':datasourceId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDirectivesKey() {
  return ['directives', '/directives'] as const
}

export function useGetDirectives<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectivesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directives.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectives<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDirectivesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directives.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDirectivesKey() {
  return ['directives', '/directives', 'PUT'] as const
}

export function usePutDirectives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.directives.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDirectivesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.directives.$put> }) =>
        parseResponse(client.directives.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDirectivesDirectiveIdKey(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
) {
  return ['directives', '/directives/:directiveId', args] as const
}

export function useGetDirectivesDirectiveId<TError = unknown>(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectivesDirectiveIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directives[':directiveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectivesDirectiveId<TError = unknown>(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDirectivesDirectiveIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.directives[':directiveId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDirectivesDirectiveIdKey() {
  return ['directives', '/directives/:directiveId', 'POST'] as const
}

export function usePostDirectivesDirectiveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.directives)[':directiveId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDirectivesDirectiveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.directives)[':directiveId']['$post']> },
      ) => parseResponse(client.directives[':directiveId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDirectivesDirectiveIdKey() {
  return ['directives', '/directives/:directiveId', 'DELETE'] as const
}

export function useDeleteDirectivesDirectiveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.directives)[':directiveId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDirectivesDirectiveIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.directives)[':directiveId']['$delete']> },
      ) => parseResponse(client.directives[':directiveId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDirectivesDirectiveIdCheckKey() {
  return ['directives', '/directives/:directiveId/check', 'POST'] as const
}

export function usePostDirectivesDirectiveIdCheck<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['check']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDirectivesDirectiveIdCheckKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']> },
      ) => parseResponse(client.directives[':directiveId'].check.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsKey() {
  return ['groups', '/groups'] as const
}

export function useGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroups<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupsKey() {
  return ['groups', '/groups', 'PUT'] as const
}

export function usePutGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.groups.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.$put> }) =>
        parseResponse(client.groups.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutGroupsCategoriesKey() {
  return ['groups', '/groups/categories', 'PUT'] as const
}

export function usePutGroupsCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.categories.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.groups.categories.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupsCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.groups.categories.$put> }) =>
        parseResponse(client.groups.categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsCategoriesGroupCategoryIdKey(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
) {
  return ['groups', '/groups/categories/:groupCategoryId', args] as const
}

export function useGetGroupsCategoriesGroupCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsCategoriesGroupCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups.categories[':groupCategoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsCategoriesGroupCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupsCategoriesGroupCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.groups.categories[':groupCategoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsCategoriesGroupCategoryIdKey() {
  return ['groups', '/groups/categories/:groupCategoryId', 'POST'] as const
}

export function usePostGroupsCategoriesGroupCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsCategoriesGroupCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>
        },
      ) => parseResponse(client.groups.categories[':groupCategoryId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsCategoriesGroupCategoryIdKey() {
  return ['groups', '/groups/categories/:groupCategoryId', 'DELETE'] as const
}

export function useDeleteGroupsCategoriesGroupCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsCategoriesGroupCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>
        },
      ) => parseResponse(client.groups.categories[':groupCategoryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupsTreeKey() {
  return ['groups', '/groups/tree'] as const
}

export function useGetGroupsTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsTreeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsTreeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupsGroupIdKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function useGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGroupsGroupIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.groups[':groupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupsGroupIdKey() {
  return ['groups', '/groups/:groupId', 'POST'] as const
}

export function usePostGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['$post']> },
      ) => parseResponse(client.groups[':groupId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGroupsGroupIdKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function useDeleteGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['$delete']> },
      ) => parseResponse(client.groups[':groupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGroupsGroupIdReloadKey() {
  return ['groups', '/groups/:groupId/reload', 'POST'] as const
}

export function usePostGroupsGroupIdReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['reload']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupsGroupIdReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']> },
      ) => parseResponse(client.groups[':groupId'].reload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInfoKey() {
  return ['info', '/info'] as const
}

export function useGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoDetailsEndpointNameKey(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
) {
  return ['info', '/info/details/:endpointName', args] as const
}

export function useGetInfoDetailsEndpointName<TError = unknown>(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInfoDetailsEndpointNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.details[':endpointName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoDetailsEndpointName<TError = unknown>(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInfoDetailsEndpointNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info.details[':endpointName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInfoSectionIdKey(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
) {
  return ['info', '/info/:sectionId', args] as const
}

export function useGetInfoSectionId<TError = unknown>(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSectionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info[':sectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInfoSectionId<TError = unknown>(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInfoSectionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.info[':sectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInventoriesInfoKey() {
  return ['inventories', '/inventories/info'] as const
}

export function useGetInventoriesInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInventoriesInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventories.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInventoriesInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInventoriesInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.inventories.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInventoriesUploadKey() {
  return ['inventories', '/inventories/upload', 'POST'] as const
}

export function usePostInventoriesUpload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.upload.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inventories.upload.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoriesUploadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inventories.upload.$post> }) =>
        parseResponse(client.inventories.upload.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoriesWatcherRestartKey() {
  return ['inventories', '/inventories/watcher/restart', 'POST'] as const
}

export function usePostInventoriesWatcherRestart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.restart.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoriesWatcherRestartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.inventories.watcher.restart.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoriesWatcherStartKey() {
  return ['inventories', '/inventories/watcher/start', 'POST'] as const
}

export function usePostInventoriesWatcherStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.start.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoriesWatcherStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.inventories.watcher.start.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInventoriesWatcherStopKey() {
  return ['inventories', '/inventories/watcher/stop', 'POST'] as const
}

export function usePostInventoriesWatcherStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.stop.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInventoriesWatcherStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.inventories.watcher.stop.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMethodsKey() {
  return ['methods', '/methods'] as const
}

export function useGetMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMethodsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMethodsReloadKey() {
  return ['methods', '/methods/reload', 'POST'] as const
}

export function usePostMethodsReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMethodsReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.methods.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesKey(args: InferRequestType<typeof client.nodes.$get>) {
  return ['nodes', '/nodes', args] as const
}

export function useGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetNodes<TError = unknown>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.nodes.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutNodesKey() {
  return ['nodes', '/nodes', 'PUT'] as const
}

export function usePutNodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.nodes.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.nodes.$put> }) =>
        parseResponse(client.nodes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodesApplyPolicyKey() {
  return ['nodes', '/nodes/applyPolicy', 'POST'] as const
}

export function usePostNodesApplyPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.applyPolicy.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesApplyPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.nodes.applyPolicy.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesPendingKey(args: InferRequestType<typeof client.nodes.pending.$get>) {
  return ['nodes', '/nodes/pending', args] as const
}

export function useGetNodesPending<TError = unknown>(
  args: InferRequestType<typeof client.nodes.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesPendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesPending<TError = unknown>(
  args: InferRequestType<typeof client.nodes.pending.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesPendingKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.pending.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesPendingNodeIdKey() {
  return ['nodes', '/nodes/pending/:nodeId', 'POST'] as const
}

export function usePostNodesPendingNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes.pending)[':nodeId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesPendingNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']> },
      ) => parseResponse(client.nodes.pending[':nodeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesStatusKey(args: InferRequestType<typeof client.nodes.status.$get>) {
  return ['nodes', '/nodes/status', args] as const
}

export function useGetNodesStatus<TError = unknown>(
  args: InferRequestType<typeof client.nodes.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesStatus<TError = unknown>(
  args: InferRequestType<typeof client.nodes.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNodesNodeIdKey(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
) {
  return ['nodes', '/nodes/:nodeId', args] as const
}

export function useGetNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetNodesNodeIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.nodes[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNodesNodeIdKey() {
  return ['nodes', '/nodes/:nodeId', 'POST'] as const
}

export function usePostNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':nodeId']['$post']> },
      ) => parseResponse(client.nodes[':nodeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNodesNodeIdKey() {
  return ['nodes', '/nodes/:nodeId', 'DELETE'] as const
}

export function useDeleteNodesNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNodesNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':nodeId']['$delete']> },
      ) => parseResponse(client.nodes[':nodeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodesNodeIdApplyPolicyKey() {
  return ['nodes', '/nodes/:nodeId/applyPolicy', 'POST'] as const
}

export function usePostNodesNodeIdApplyPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdApplyPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']> },
      ) => parseResponse(client.nodes[':nodeId'].applyPolicy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodesNodeIdFetchDataKey() {
  return ['nodes', '/nodes/:nodeId/fetchData', 'POST'] as const
}

export function usePostNodesNodeIdFetchData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdFetchDataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']> },
      ) => parseResponse(client.nodes[':nodeId'].fetchData.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNodesNodeIdFetchDataDatasourceIdKey() {
  return ['nodes', '/nodes/:nodeId/fetchData/:datasourceId', 'POST'] as const
}

export function usePostNodesNodeIdFetchDataDatasourceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNodesNodeIdFetchDataDatasourceIdKey()
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
            (typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']
          >
        },
      ) =>
        parseResponse(client.nodes[':nodeId'].fetchData[':datasourceId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNodesNodeIdInheritedPropertiesKey(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
) {
  return ['nodes', '/nodes/:nodeId/inheritedProperties', args] as const
}

export function useGetNodesNodeIdInheritedProperties<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodesNodeIdInheritedPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':nodeId'].inheritedProperties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNodesNodeIdInheritedProperties<TError = unknown>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNodesNodeIdInheritedPropertiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.nodes[':nodeId'].inheritedProperties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetParametersKey() {
  return ['parameters', '/parameters'] as const
}

export function useGetParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParametersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parameters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParameters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetParametersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parameters.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutParametersKey() {
  return ['parameters', '/parameters', 'PUT'] as const
}

export function usePutParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.parameters.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.parameters.$put> }) =>
        parseResponse(client.parameters.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetParametersParameterIdKey(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
) {
  return ['parameters', '/parameters/:parameterId', args] as const
}

export function useGetParametersParameterId<TError = unknown>(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParametersParameterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parameters[':parameterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetParametersParameterId<TError = unknown>(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetParametersParameterIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.parameters[':parameterId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostParametersParameterIdKey() {
  return ['parameters', '/parameters/:parameterId', 'POST'] as const
}

export function usePostParametersParameterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.parameters)[':parameterId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostParametersParameterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.parameters)[':parameterId']['$post']> },
      ) => parseResponse(client.parameters[':parameterId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteParametersParameterIdKey() {
  return ['parameters', '/parameters/:parameterId', 'DELETE'] as const
}

export function useDeleteParametersParameterId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.parameters)[':parameterId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteParametersParameterIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.parameters)[':parameterId']['$delete']> },
      ) => parseResponse(client.parameters[':parameterId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesKey() {
  return ['rules', '/rules'] as const
}

export function useGetRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRulesKey() {
  return ['rules', '/rules', 'PUT'] as const
}

export function usePutRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rules.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rules.$put> }) =>
        parseResponse(client.rules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutRulesCategoriesKey() {
  return ['rules', '/rules/categories', 'PUT'] as const
}

export function usePutRulesCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.categories.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rules.categories.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRulesCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rules.categories.$put> }) =>
        parseResponse(client.rules.categories.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesCategoriesRuleCategoryIdKey(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
) {
  return ['rules', '/rules/categories/:ruleCategoryId', args] as const
}

export function useGetRulesCategoriesRuleCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRulesCategoriesRuleCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rules.categories[':ruleCategoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesCategoriesRuleCategoryId<TError = unknown>(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRulesCategoriesRuleCategoryIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.rules.categories[':ruleCategoryId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesCategoriesRuleCategoryIdKey() {
  return ['rules', '/rules/categories/:ruleCategoryId', 'POST'] as const
}

export function usePostRulesCategoriesRuleCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesCategoriesRuleCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']> },
      ) => parseResponse(client.rules.categories[':ruleCategoryId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesCategoriesRuleCategoryIdKey() {
  return ['rules', '/rules/categories/:ruleCategoryId', 'DELETE'] as const
}

export function useDeleteRulesCategoriesRuleCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesCategoriesRuleCategoryIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>
        },
      ) => parseResponse(client.rules.categories[':ruleCategoryId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRulesTreeKey() {
  return ['rules', '/rules/tree'] as const
}

export function useGetRulesTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesTreeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesTree<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesTreeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules.tree.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRulesRuleIdKey(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
) {
  return ['rules', '/rules/:ruleId', args] as const
}

export function useGetRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRulesRuleIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRulesRuleIdKey() {
  return ['rules', '/rules/:ruleId', 'POST'] as const
}

export function usePostRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleId']['$post']> },
      ) => parseResponse(client.rules[':ruleId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRulesRuleIdKey() {
  return ['rules', '/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rules)[':ruleId']['$delete']> },
      ) => parseResponse(client.rules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScaleoutrelayDemoteNodeIdKey() {
  return ['scaleoutrelay', '/scaleoutrelay/demote/:nodeId', 'POST'] as const
}

export function usePostScaleoutrelayDemoteNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScaleoutrelayDemoteNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']> },
      ) => parseResponse(client.scaleoutrelay.demote[':nodeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostScaleoutrelayPromoteNodeIdKey() {
  return ['scaleoutrelay', '/scaleoutrelay/promote/:nodeId', 'POST'] as const
}

export function usePostScaleoutrelayPromoteNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostScaleoutrelayPromoteNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']> },
      ) => parseResponse(client.scaleoutrelay.promote[':nodeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretIndexKey() {
  return ['secret', '/secret/'] as const
}

export function useGetSecretIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secret.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretIndex<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretIndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secret.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSecretIndexKey() {
  return ['secret', '/secret/', 'PUT'] as const
}

export function usePutSecretIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.secret.index.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSecretIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secret.index.$put> }) =>
        parseResponse(client.secret.index.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSecretIndexKey() {
  return ['secret', '/secret/', 'POST'] as const
}

export function usePostSecretIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.secret.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSecretIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.secret.index.$post> }) =>
        parseResponse(client.secret.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSecretNameKey(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
) {
  return ['secret', '/secret/:name', args] as const
}

export function useGetSecretName<TError = unknown>(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secret[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSecretName<TError = unknown>(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSecretNameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.secret[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSecretNameKey() {
  return ['secret', '/secret/:name', 'DELETE'] as const
}

export function useDeleteSecretName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.secret)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSecretNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.secret)[':name']['$delete']> },
      ) => parseResponse(client.secret[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsKey() {
  return ['settings', '/settings'] as const
}

export function useGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSettingsAllowedNetworksNodeIdKey(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
) {
  return ['settings', '/settings/allowed_networks/:nodeId', args] as const
}

export function useGetSettingsAllowedNetworksNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsAllowedNetworksNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.allowed_networks[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsAllowedNetworksNodeId<TError = unknown>(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsAllowedNetworksNodeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.settings.allowed_networks[':nodeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsAllowedNetworksNodeIdKey() {
  return ['settings', '/settings/allowed_networks/:nodeId', 'POST'] as const
}

export function usePostSettingsAllowedNetworksNodeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsAllowedNetworksNodeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']> },
      ) => parseResponse(client.settings.allowed_networks[':nodeId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSettingsAllowedNetworksNodeIdDiffKey() {
  return ['settings', '/settings/allowed_networks/:nodeId/diff', 'POST'] as const
}

export function usePostSettingsAllowedNetworksNodeIdDiff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsAllowedNetworksNodeIdDiffKey()
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
            (typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']
          >
        },
      ) =>
        parseResponse(client.settings.allowed_networks[':nodeId'].diff.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSettingsSettingIdKey(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
) {
  return ['settings', '/settings/:settingId', args] as const
}

export function useGetSettingsSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings[':settingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSettingsSettingId<TError = unknown>(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSettingsSettingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.settings[':settingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSettingsSettingIdKey() {
  return ['settings', '/settings/:settingId', 'POST'] as const
}

export function usePostSettingsSettingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.settings)[':settingId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSettingsSettingIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.settings)[':settingId']['$post']> },
      ) => parseResponse(client.settings[':settingId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStatusKey() {
  return ['status', '/status'] as const
}

export function useGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemArchivesArchiveKindKey(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
) {
  return ['system', '/system/archives/:archiveKind', args] as const
}

export function useGetSystemArchivesArchiveKind<TError = unknown>(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemArchivesArchiveKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.archives[':archiveKind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemArchivesArchiveKind<TError = unknown>(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemArchivesArchiveKindKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.archives[':archiveKind'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemArchivesArchiveKindKey() {
  return ['system', '/system/archives/:archiveKind', 'POST'] as const
}

export function usePostSystemArchivesArchiveKind<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemArchivesArchiveKindKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']> },
      ) => parseResponse(client.system.archives[':archiveKind'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindKey() {
  return ['system', '/system/archives/:archiveKind/restore/:archiveRestoreKind', 'POST'] as const
}

export function usePostSystemArchivesArchiveKindRestoreArchiveRestoreKind<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindKey()
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
            (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
          >
        },
      ) =>
        parseResponse(
          client.system.archives[':archiveKind'].restore[':archiveRestoreKind'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSystemArchivesArchiveKindZipCommitIdKey(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
) {
  return ['system', '/system/archives/:archiveKind/zip/:commitId', args] as const
}

export function useGetSystemArchivesArchiveKindZipCommitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
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
        ? getGetSystemArchivesArchiveKindZipCommitIdKey(args)
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
                (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
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
          client.system.archives[':archiveKind'].zip[':commitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemArchivesArchiveKindZipCommitId<TError = unknown>(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
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
        ? getGetSystemArchivesArchiveKindZipCommitIdKey(args)
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
                (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
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
          client.system.archives[':archiveKind'].zip[':commitId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSystemHealthcheckKey() {
  return ['system', '/system/healthcheck'] as const
}

export function useGetSystemHealthcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemHealthcheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.healthcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemHealthcheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemHealthcheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.healthcheck.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemInfoKey() {
  return ['system', '/system/info'] as const
}

export function useGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemMaintenancePurgeSoftwareKey() {
  return ['system', '/system/maintenance/purgeSoftware', 'POST'] as const
}

export function usePostSystemMaintenancePurgeSoftware<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.system.maintenance.purgeSoftware.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemMaintenancePurgeSoftwareKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.system.maintenance.purgeSoftware.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemRegeneratePoliciesKey() {
  return ['system', '/system/regenerate/policies', 'POST'] as const
}

export function usePostSystemRegeneratePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.regenerate.policies.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemRegeneratePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.regenerate.policies.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemReloadKey() {
  return ['system', '/system/reload', 'POST'] as const
}

export function usePostSystemReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemReloadGroupsKey() {
  return ['system', '/system/reload/groups', 'POST'] as const
}

export function usePostSystemReloadGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.groups.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemReloadGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.reload.groups.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemReloadTechniquesKey() {
  return ['system', '/system/reload/techniques', 'POST'] as const
}

export function usePostSystemReloadTechniques<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.techniques.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemReloadTechniquesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.reload.techniques.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemStatusKey() {
  return ['system', '/system/status'] as const
}

export function useGetSystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemUpdatePoliciesKey() {
  return ['system', '/system/update/policies', 'POST'] as const
}

export function usePostSystemUpdatePolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.update.policies.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemUpdatePoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.system.update.policies.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTechniquesKey() {
  return ['techniques', '/techniques'] as const
}

export function useGetTechniques<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechniquesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniques<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechniquesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTechniquesKey() {
  return ['techniques', '/techniques', 'PUT'] as const
}

export function usePutTechniques<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.techniques.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTechniquesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.techniques.$put> }) =>
        parseResponse(client.techniques.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTechniquesCategoriesKey() {
  return ['techniques', '/techniques/categories'] as const
}

export function useGetTechniquesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesCategories<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesCategoriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.categories.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTechniquesReloadKey() {
  return ['techniques', '/techniques/reload', 'POST'] as const
}

export function usePostTechniquesReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTechniquesReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.techniques.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTechniquesVersionsKey() {
  return ['techniques', '/techniques/versions'] as const
}

export function useGetTechniquesVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechniquesVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesVersions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTechniquesVersionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques.versions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId', args] as const
}

export function useGetTechniquesTechniqueId<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques[':techniqueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueId<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.techniques[':techniqueId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdDirectivesKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId/directives', args] as const
}

export function useGetTechniquesTechniqueIdDirectives<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdDirectivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.techniques[':techniqueId'].directives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueIdDirectives<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdDirectivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.techniques[':techniqueId'].directives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdTechniqueVersionKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', args] as const
}

export function useGetTechniquesTechniqueIdTechniqueVersion<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdTechniqueVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueIdTechniqueVersion<TError = unknown>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTechniquesTechniqueIdTechniqueVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTechniquesTechniqueIdTechniqueVersionKey() {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', 'POST'] as const
}

export function usePostTechniquesTechniqueIdTechniqueVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTechniquesTechniqueIdTechniqueVersionKey()
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
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTechniquesTechniqueIdTechniqueVersionKey() {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', 'DELETE'] as const
}

export function useDeleteTechniquesTechniqueIdTechniqueVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTechniquesTechniqueIdTechniqueVersionKey()
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
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdTechniqueVersionDirectivesKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/directives', args] as const
}

export function useGetTechniquesTechniqueIdTechniqueVersionDirectives<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionDirectivesKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueIdTechniqueVersionDirectives<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionDirectivesKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdTechniqueVersionResourcesKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/resources', args] as const
}

export function useGetTechniquesTechniqueIdTechniqueVersionResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionResourcesKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueIdTechniqueVersionResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionResourcesKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTechniquesTechniqueIdTechniqueVersionRevisionsKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/revisions', args] as const
}

export function useGetTechniquesTechniqueIdTechniqueVersionRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionRevisionsKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTechniquesTechniqueIdTechniqueVersionRevisions<TError = unknown>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
        ? getGetTechniquesTechniqueIdTechniqueVersionRevisionsKey(args)
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
                (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
          client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostUsermanagementKey() {
  return ['usermanagement', '/usermanagement', 'POST'] as const
}

export function usePostUsermanagement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.usermanagement.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsermanagementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.usermanagement.$post> }) =>
        parseResponse(client.usermanagement.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsermanagementRolesKey() {
  return ['usermanagement', '/usermanagement/roles'] as const
}

export function useGetUsermanagementRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementRolesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsermanagementRoles<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementRolesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.roles.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUsermanagementUpdateUsernameKey() {
  return ['usermanagement', '/usermanagement/update/:username', 'POST'] as const
}

export function usePostUsermanagementUpdateUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usermanagement.update)[':username']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usermanagement.update)[':username']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsermanagementUpdateUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.usermanagement.update)[':username']['$post']> },
      ) => parseResponse(client.usermanagement.update[':username'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsermanagementUsersKey() {
  return ['usermanagement', '/usermanagement/users'] as const
}

export function useGetUsermanagementUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsermanagementUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsermanagementUsersReloadKey() {
  return ['usermanagement', '/usermanagement/users/reload'] as const
}

export function useGetUsermanagementUsersReload<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementUsersReloadKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.users.reload.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsermanagementUsersReload<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsermanagementUsersReloadKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.usermanagement.users.reload.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteUsermanagementUsernameKey() {
  return ['usermanagement', '/usermanagement/:username', 'DELETE'] as const
}

export function useDeleteUsermanagementUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usermanagement)[':username']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.usermanagement)[':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUsermanagementUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.usermanagement)[':username']['$delete']> },
      ) => parseResponse(client.usermanagement[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey() {
  return ['users', '/users'] as const
}

export function useGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUsersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostValidatedUsersKey() {
  return ['validatedUsers', '/validatedUsers', 'POST'] as const
}

export function usePostValidatedUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validatedUsers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.validatedUsers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostValidatedUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.validatedUsers.$post> }) =>
        parseResponse(client.validatedUsers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteValidatedUsersUsernameKey() {
  return ['validatedUsers', '/validatedUsers/:username', 'DELETE'] as const
}

export function useDeleteValidatedUsersUsername<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.validatedUsers)[':username']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.validatedUsers)[':username']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteValidatedUsersUsernameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.validatedUsers)[':username']['$delete']> },
      ) => parseResponse(client.validatedUsers[':username'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
