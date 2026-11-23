import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionKey() {
  return ['action'] as const
}

export function getConnectKey() {
  return ['connect'] as const
}

export function getConnectionKey() {
  return ['connection'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getEnvironmentKey() {
  return ['environment'] as const
}

export function getEnvironmentVariablesKey() {
  return ['environment-variables'] as const
}

export function getEnvironmentsKey() {
  return ['environments'] as const
}

export function getFunctionsKey() {
  return ['functions'] as const
}

export function getIntegrationsKey() {
  return ['integrations'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getProxyKey() {
  return ['proxy'] as const
}

export function getRecordsKey() {
  return ['records'] as const
}

export function getScriptsKey() {
  return ['scripts'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getGetProvidersKey() {
  return ['providers', '/providers'] as const
}

export function useGetProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderKey(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
) {
  return ['providers', '/providers/:provider', args] as const
}

export function useGetProvidersProvider<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvidersProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProvider<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':provider']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProvidersProviderKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.providers)[':provider']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':provider'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProvidersProviderTemplatesKey(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
) {
  return ['providers', '/providers/:provider/templates', args] as const
}

export function useGetProvidersProviderTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
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
        ? getGetProvidersProviderTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':provider'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProvidersProviderTemplates<TError = unknown>(
  args: InferRequestType<(typeof client.providers)[':provider']['templates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
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
        ? getGetProvidersProviderTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.providers)[':provider']['templates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.providers[':provider'].templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsKey() {
  return ['integrations', '/integrations'] as const
}

export function useGetIntegrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIntegrationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostIntegrationsKey() {
  return ['integrations', '/integrations', 'POST'] as const
}

export function usePostIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.integrations.$post> }) =>
        parseResponse(client.integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIntegrationsQuickstartKey() {
  return ['integrations', '/integrations/quickstart', 'POST'] as const
}

export function usePostIntegrationsQuickstart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.integrations.quickstart.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.integrations.quickstart.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIntegrationsQuickstartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.integrations.quickstart.$post> },
      ) => parseResponse(client.integrations.quickstart.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsUniqueKeyKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey', args] as const
}

export function useGetIntegrationsUniqueKey<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
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
        ? getGetIntegrationsUniqueKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':uniqueKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsUniqueKey<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
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
        ? getGetIntegrationsUniqueKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.integrations[':uniqueKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteIntegrationsUniqueKeyKey() {
  return ['integrations', '/integrations/:uniqueKey', 'DELETE'] as const
}

export function useDeleteIntegrationsUniqueKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationsUniqueKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.integrations)[':uniqueKey']['$delete']> },
      ) => parseResponse(client.integrations[':uniqueKey'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIntegrationsUniqueKeyKey() {
  return ['integrations', '/integrations/:uniqueKey', 'PATCH'] as const
}

export function usePatchIntegrationsUniqueKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIntegrationsUniqueKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.integrations)[':uniqueKey']['$patch']> },
      ) => parseResponse(client.integrations[':uniqueKey'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsUniqueKeyFunctionsKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey/functions', args] as const
}

export function useGetIntegrationsUniqueKeyFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
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
        ? getGetIntegrationsUniqueKeyFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.integrations[':uniqueKey'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsUniqueKeyFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
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
        ? getGetIntegrationsUniqueKeyFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.integrations)[':uniqueKey']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.integrations[':uniqueKey'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIntegrationsUniqueKeyFunctionsNameKey(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
) {
  return ['integrations', '/integrations/:uniqueKey/functions/:name', args] as const
}

export function useGetIntegrationsUniqueKeyFunctionsName<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
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
        ? getGetIntegrationsUniqueKeyFunctionsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations[':uniqueKey'].functions[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsUniqueKeyFunctionsName<TError = unknown>(
  args: InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
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
        ? getGetIntegrationsUniqueKeyFunctionsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.integrations[':uniqueKey'].functions[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteIntegrationsUniqueKeyFunctionsNameKey() {
  return ['integrations', '/integrations/:uniqueKey/functions/:name', 'DELETE'] as const
}

export function useDeleteIntegrationsUniqueKeyFunctionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteIntegrationsUniqueKeyFunctionsNameKey()
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
            (typeof client.integrations)[':uniqueKey']['functions'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.integrations[':uniqueKey'].functions[':name'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetIntegrationsUniqueKeyFunctionsNameCodeKey(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
) {
  return ['integrations', '/integrations/:uniqueKey/functions/:name/code', args] as const
}

export function useGetIntegrationsUniqueKeyFunctionsNameCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
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
        ? getGetIntegrationsUniqueKeyFunctionsNameCodeKey(args)
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
                (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
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
          client.integrations[':uniqueKey'].functions[':name'].code.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIntegrationsUniqueKeyFunctionsNameCode<TError = unknown>(
  args: InferRequestType<
    (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
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
        ? getGetIntegrationsUniqueKeyFunctionsNameCodeKey(args)
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
                (typeof client.integrations)[':uniqueKey']['functions'][':name']['code']['$get']
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
          client.integrations[':uniqueKey'].functions[':name'].code.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionKey(args: InferRequestType<typeof client.connection.$get>) {
  return ['connection', '/connection', args] as const
}

export function useGetConnection<TError = unknown>(
  args: InferRequestType<typeof client.connection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnection<TError = unknown>(
  args: InferRequestType<typeof client.connection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionKey() {
  return ['connection', '/connection', 'POST'] as const
}

export function usePostConnection<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connection.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connection.$post> }) =>
        parseResponse(client.connection.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionConnectionIdKey(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
) {
  return ['connection', '/connection/:connectionId', args] as const
}

export function useGetConnectionConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
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
        ? getGetConnectionConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connection[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connection)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
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
        ? getGetConnectionConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connection)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connection[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConnectionConnectionIdKey() {
  return ['connection', '/connection/:connectionId', 'DELETE'] as const
}

export function useDeleteConnectionConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connection)[':connectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connection)[':connectionId']['$delete']> },
      ) => parseResponse(client.connection[':connectionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionMetadataKey() {
  return ['connection', '/connection/metadata', 'POST'] as const
}

export function usePostConnectionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.connection.metadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connection.metadata.$post> }) =>
        parseResponse(client.connection.metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConnectionMetadataKey() {
  return ['connection', '/connection/metadata', 'PATCH'] as const
}

export function usePatchConnectionMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connection.metadata.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.connection.metadata.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConnectionMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.connection.metadata.$patch> },
      ) => parseResponse(client.connection.metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionConnectionIdMetadataKey() {
  return ['connection', '/connection/:connectionId/metadata', 'POST'] as const
}

export function usePostConnectionConnectionIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionConnectionIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$post']>
        },
      ) => parseResponse(client.connection[':connectionId'].metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConnectionConnectionIdMetadataKey() {
  return ['connection', '/connection/:connectionId/metadata', 'PATCH'] as const
}

export function usePatchConnectionConnectionIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connection)[':connectionId']['metadata']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConnectionConnectionIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.connection)[':connectionId']['metadata']['$patch']>
        },
      ) => parseResponse(client.connection[':connectionId'].metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function useGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConnectionsKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function usePostConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connections.$post> }) =>
        parseResponse(client.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
) {
  return ['connections', '/connections/:connectionId', args] as const
}

export function useGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
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
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':connectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
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
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':connectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConnectionsConnectionIdKey() {
  return ['connections', '/connections/:connectionId', 'DELETE'] as const
}

export function useDeleteConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connectionId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':connectionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':connectionId']['$delete']> },
      ) => parseResponse(client.connections[':connectionId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConnectionsConnectionIdKey() {
  return ['connections', '/connections/:connectionId', 'PATCH'] as const
}

export function usePatchConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connectionId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.connections)[':connectionId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.connections)[':connectionId']['$patch']> },
      ) => parseResponse(client.connections[':connectionId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionsMetadataKey() {
  return ['connections', '/connections/metadata', 'POST'] as const
}

export function usePostConnectionsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.connections.metadata.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.connections.metadata.$post> },
      ) => parseResponse(client.connections.metadata.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchConnectionsMetadataKey() {
  return ['connections', '/connections/metadata', 'PATCH'] as const
}

export function usePatchConnectionsMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connections.metadata.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.connections.metadata.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchConnectionsMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.connections.metadata.$patch> },
      ) => parseResponse(client.connections.metadata.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetScriptsConfigKey(args: InferRequestType<typeof client.scripts.config.$get>) {
  return ['scripts', '/scripts/config', args] as const
}

export function useGetScriptsConfig<TError = unknown>(
  args: InferRequestType<typeof client.scripts.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScriptsConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetScriptsConfig<TError = unknown>(
  args: InferRequestType<typeof client.scripts.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetScriptsConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.scripts.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.scripts.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsCompileKey() {
  return ['functions', '/functions/compile', 'POST'] as const
}

export function usePostFunctionsCompile<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.compile.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.functions.compile.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsCompileKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.functions.compile.$post> }) =>
        parseResponse(client.functions.compile.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionsDryrunsKey() {
  return ['functions', '/functions/dryruns', 'POST'] as const
}

export function usePostFunctionsDryruns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.functions.dryruns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.functions.dryruns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsDryrunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.functions.dryruns.$post> }) =>
        parseResponse(client.functions.dryruns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsDryrunsIdKey(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
) {
  return ['functions', '/functions/dryruns/:id', args] as const
}

export function useGetFunctionsDryrunsId<TError = unknown>(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>
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
        ? getGetFunctionsDryrunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.dryruns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsDryrunsId<TError = unknown>(
  args: InferRequestType<(typeof client.functions.dryruns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>
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
        ? getGetFunctionsDryrunsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.dryruns)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.dryruns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFunctionsDeploymentsKey() {
  return ['functions', '/functions/deployments', 'POST'] as const
}

export function usePostFunctionsDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.functions.deployments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.functions.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionsDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.functions.deployments.$post> },
      ) => parseResponse(client.functions.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFunctionsDeploymentsIdKey(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
) {
  return ['functions', '/functions/deployments/:id', args] as const
}

export function useGetFunctionsDeploymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
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
        ? getGetFunctionsDeploymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.deployments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFunctionsDeploymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.functions.deployments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
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
        ? getGetFunctionsDeploymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.functions.deployments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.functions.deployments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRecordsKey(args: InferRequestType<typeof client.records.$get>) {
  const { header: _, ...keyArgs } = args
  return ['records', '/records', keyArgs] as const
}

export function useGetRecords<TError = unknown>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.records.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRecords<TError = unknown>(
  args: InferRequestType<typeof client.records.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.records.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPatchRecordsPruneKey() {
  return ['records', '/records/prune', 'PATCH'] as const
}

export function usePatchRecordsPrune<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.records.prune.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.records.prune.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchRecordsPruneKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.records.prune.$patch> }) =>
        parseResponse(client.records.prune.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncTriggerKey() {
  return ['sync', '/sync/trigger', 'POST'] as const
}

export function usePostSyncTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.trigger.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.trigger.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.trigger.$post> }) =>
        parseResponse(client.sync.trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncStartKey() {
  return ['sync', '/sync/start', 'POST'] as const
}

export function usePostSyncStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.start.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sync.start.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.start.$post> }) =>
        parseResponse(client.sync.start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSyncPauseKey() {
  return ['sync', '/sync/pause', 'POST'] as const
}

export function usePostSyncPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.pause.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sync.pause.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sync.pause.$post> }) =>
        parseResponse(client.sync.pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSyncStatusKey(args: InferRequestType<typeof client.sync.status.$get>) {
  return ['sync', '/sync/status', args] as const
}

export function useGetSyncStatus<TError = unknown>(
  args: InferRequestType<typeof client.sync.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSyncStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncStatus<TError = unknown>(
  args: InferRequestType<typeof client.sync.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSyncStatusKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sync.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSyncNameVariantVariantKey() {
  return ['sync', '/sync/:name/variant/:variant', 'POST'] as const
}

export function usePostSyncNameVariantVariant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSyncNameVariantVariantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$post']> },
      ) => parseResponse(client.sync[':name'].variant[':variant'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSyncNameVariantVariantKey() {
  return ['sync', '/sync/:name/variant/:variant', 'DELETE'] as const
}

export function useDeleteSyncNameVariantVariant<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSyncNameVariantVariantKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sync)[':name']['variant'][':variant']['$delete']>
        },
      ) => parseResponse(client.sync[':name'].variant[':variant'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionActionIdKey(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
) {
  return ['action', '/action/:actionId', args] as const
}

export function useGetActionActionId<TError = unknown>(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionActionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionActionId<TError = unknown>(
  args: InferRequestType<(typeof client.action)[':actionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetActionActionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.action)[':actionId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.action[':actionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSyncUpdateConnectionFrequencyKey() {
  return ['sync', '/sync/update-connection-frequency', 'PUT'] as const
}

export function usePutSyncUpdateConnectionFrequency<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sync)['update-connection-frequency']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSyncUpdateConnectionFrequencyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sync)['update-connection-frequency']['$put']> },
      ) => parseResponse(client.sync['update-connection-frequency'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionsConnectionIdToolsNameCallsKey() {
  return ['connections', '/connections/:connectionId/tools/:name/calls', 'POST'] as const
}

export function usePostConnectionsConnectionIdToolsNameCalls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsConnectionIdToolsNameCallsKey()
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
            (typeof client.connections)[':connectionId']['tools'][':name']['calls']['$post']
          >
        },
      ) =>
        parseResponse(
          client.connections[':connectionId'].tools[':name'].calls.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostActionTriggerKey() {
  return ['action', '/action/trigger', 'POST'] as const
}

export function usePostActionTrigger<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.action.trigger.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.action.trigger.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionTriggerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.action.trigger.$post> }) =>
        parseResponse(client.action.trigger.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsKey(args: InferRequestType<typeof client.environments.$get>) {
  return ['environments', '/environments', args] as const
}

export function useGetEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironments<TError = unknown>(
  args: InferRequestType<typeof client.environments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetEnvironmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentsKey() {
  return ['environments', '/environments', 'POST'] as const
}

export function usePostEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.environments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.environments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.environments.$post> }) =>
        parseResponse(client.environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsEnvironmentUuidKey(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
) {
  return ['environments', '/environments/:environmentUuid', args] as const
}

export function useGetEnvironmentsEnvironmentUuid<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
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
        ? getGetEnvironmentsEnvironmentUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environmentUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentsEnvironmentUuid<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
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
        ? getGetEnvironmentsEnvironmentUuidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.environments[':environmentUuid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnvironmentsEnvironmentUuidKey() {
  return ['environments', '/environments/:environmentUuid', 'DELETE'] as const
}

export function useDeleteEnvironmentsEnvironmentUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvironmentsEnvironmentUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environmentUuid']['$delete']> },
      ) => parseResponse(client.environments[':environmentUuid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchEnvironmentsEnvironmentUuidKey() {
  return ['environments', '/environments/:environmentUuid', 'PATCH'] as const
}

export function usePatchEnvironmentsEnvironmentUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEnvironmentsEnvironmentUuidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.environments)[':environmentUuid']['$patch']> },
      ) => parseResponse(client.environments[':environmentUuid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsEnvironmentUuidApiKeysKey(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
) {
  return ['environments', '/environments/:environmentUuid/api-keys', args] as const
}

export function useGetEnvironmentsEnvironmentUuidApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>
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
        ? getGetEnvironmentsEnvironmentUuidApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.environments[':environmentUuid']['api-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentsEnvironmentUuidApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>
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
        ? getGetEnvironmentsEnvironmentUuidApiKeysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.environments[':environmentUuid']['api-keys'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentsEnvironmentUuidApiKeysKey() {
  return ['environments', '/environments/:environmentUuid/api-keys', 'POST'] as const
}

export function usePostEnvironmentsEnvironmentUuidApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environments)[':environmentUuid']['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentsEnvironmentUuidApiKeysKey()
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
            (typeof client.environments)[':environmentUuid']['api-keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.environments[':environmentUuid']['api-keys'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentsEnvironmentUuidApiKeysKeyUuidKey(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
) {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', args] as const
}

export function useGetEnvironmentsEnvironmentUuidApiKeysKeyUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
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
        ? getGetEnvironmentsEnvironmentUuidApiKeysKeyUuidKey(args)
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
                (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
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
          client.environments[':environmentUuid']['api-keys'][':keyUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentsEnvironmentUuidApiKeysKeyUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
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
        ? getGetEnvironmentsEnvironmentUuidApiKeysKeyUuidKey(args)
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
                (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$get']
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
          client.environments[':environmentUuid']['api-keys'][':keyUuid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidKey() {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', 'DELETE'] as const
}

export function useDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteEnvironmentsEnvironmentUuidApiKeysKeyUuidKey()
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
            (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.environments[':environmentUuid']['api-keys'][':keyUuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidKey() {
  return ['environments', '/environments/:environmentUuid/api-keys/:keyUuid', 'PATCH'] as const
}

export function usePatchEnvironmentsEnvironmentUuidApiKeysKeyUuid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchEnvironmentsEnvironmentUuidApiKeysKeyUuidKey()
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
            (typeof client.environments)[':environmentUuid']['api-keys'][':keyUuid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.environments[':environmentUuid']['api-keys'][':keyUuid'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetEnvironmentVariablesKey() {
  return ['environment-variables', '/environment-variables'] as const
}

export function useGetEnvironmentVariables<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>>
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
        ? getGetEnvironmentVariablesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['environment-variables'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEnvironmentVariables<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>>
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
        ? getGetEnvironmentVariablesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['environment-variables']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['environment-variables'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostEnvironmentWebhookSigningKeyRotateKey() {
  return ['environment', '/environment/webhook-signing-key/rotate', 'POST'] as const
}

export function usePostEnvironmentWebhookSigningKeyRotate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.environment)['webhook-signing-key']['rotate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEnvironmentWebhookSigningKeyRotateKey()
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
            (typeof client.environment)['webhook-signing-key']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(client.environment['webhook-signing-key'].rotate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetProxyAnyPathKey(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['proxy', '/proxy/:anyPath', keyArgs] as const
}

export function useGetProxyAnyPath<TError = unknown>(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyAnyPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proxy[':anyPath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProxyAnyPath<TError = unknown>(
  args: InferRequestType<(typeof client.proxy)[':anyPath']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetProxyAnyPathKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.proxy[':anyPath'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutProxyAnyPathKey() {
  return ['proxy', '/proxy/:anyPath', 'PUT'] as const
}

export function usePutProxyAnyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proxy)[':anyPath']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProxyAnyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.proxy)[':anyPath']['$put']> },
      ) => parseResponse(client.proxy[':anyPath'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostProxyAnyPathKey() {
  return ['proxy', '/proxy/:anyPath', 'POST'] as const
}

export function usePostProxyAnyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proxy)[':anyPath']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProxyAnyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.proxy)[':anyPath']['$post']> },
      ) => parseResponse(client.proxy[':anyPath'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteProxyAnyPathKey() {
  return ['proxy', '/proxy/:anyPath', 'DELETE'] as const
}

export function useDeleteProxyAnyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proxy)[':anyPath']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteProxyAnyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.proxy)[':anyPath']['$delete']> },
      ) => parseResponse(client.proxy[':anyPath'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchProxyAnyPathKey() {
  return ['proxy', '/proxy/:anyPath', 'PATCH'] as const
}

export function usePatchProxyAnyPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.proxy)[':anyPath']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.proxy)[':anyPath']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchProxyAnyPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.proxy)[':anyPath']['$patch']> },
      ) => parseResponse(client.proxy[':anyPath'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectSessionsKey() {
  return ['connect', '/connect/sessions', 'POST'] as const
}

export function usePostConnectSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.sessions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.connect.sessions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectSessionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connect.sessions.$post> }) =>
        parseResponse(client.connect.sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectSessionsReconnectKey() {
  return ['connect', '/connect/sessions/reconnect', 'POST'] as const
}

export function usePostConnectSessionsReconnect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.connect.sessions.reconnect.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.connect.sessions.reconnect.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectSessionsReconnectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.connect.sessions.reconnect.$post> },
      ) => parseResponse(client.connect.sessions.reconnect.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectSessionKey() {
  return ['connect', '/connect/session'] as const
}

export function useGetConnectSession<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectSessionKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.session.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectSession<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectSessionKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connect.session.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteConnectSessionKey() {
  return ['connect', '/connect/session', 'DELETE'] as const
}

export function useDeleteConnectSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connect.session.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConnectSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.connect.session.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
