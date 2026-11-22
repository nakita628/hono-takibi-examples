import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2Key() {
  return ['v2'] as const
}

export function getGetV2ApisKey(args: InferRequestType<typeof client.v2.apis.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis', keyArgs] as const
}

export function useGetV2Apis<TError = unknown>(
  args: InferRequestType<typeof client.v2.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Apis<TError = unknown>(
  args: InferRequestType<typeof client.v2.apis.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApisKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.apis.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutV2ApisKey() {
  return ['v2', '/v2/apis', 'PUT'] as const
}

export function usePutV2Apis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.apis.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ApisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.apis.$put> }) =>
        parseResponse(client.v2.apis.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2ApisKey() {
  return ['v2', '/v2/apis', 'POST'] as const
}

export function usePostV2Apis<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.apis.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.apis.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.apis.$post> }) =>
        parseResponse(client.v2.apis.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainnamesDomainNameApimappingsKey(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName/apimappings', keyArgs] as const
}

export function useGetV2DomainnamesDomainNameApimappings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
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
        ? getGetV2DomainnamesDomainNameApimappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domainnames[':domainName'].apimappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainnamesDomainNameApimappings<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
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
        ? getGetV2DomainnamesDomainNameApimappingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.domainnames[':domainName'].apimappings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DomainnamesDomainNameApimappingsKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings', 'POST'] as const
}

export function usePostV2DomainnamesDomainNameApimappings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['apimappings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainnamesDomainNameApimappingsKey()
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
            (typeof client.v2.domainnames)[':domainName']['apimappings']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.domainnames[':domainName'].apimappings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdAuthorizersKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/authorizers', keyArgs] as const
}

export function useGetV2ApisApiIdAuthorizers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdAuthorizersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].authorizers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdAuthorizers<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdAuthorizersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].authorizers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdAuthorizersKey() {
  return ['v2', '/v2/apis/:apiId/authorizers', 'POST'] as const
}

export function usePostV2ApisApiIdAuthorizers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdAuthorizersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].authorizers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdDeploymentsKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/deployments', keyArgs] as const
}

export function useGetV2ApisApiIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdDeploymentsKey() {
  return ['v2', '/v2/apis/:apiId/deployments', 'POST'] as const
}

export function usePostV2ApisApiIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainnamesKey(args: InferRequestType<typeof client.v2.domainnames.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames', keyArgs] as const
}

export function useGetV2Domainnames<TError = unknown>(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Domainnames<TError = unknown>(
  args: InferRequestType<typeof client.v2.domainnames.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2DomainnamesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domainnames.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DomainnamesKey() {
  return ['v2', '/v2/domainnames', 'POST'] as const
}

export function usePostV2Domainnames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.domainnames.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.domainnames.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainnamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.domainnames.$post> }) =>
        parseResponse(client.v2.domainnames.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdIntegrationsKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/integrations', keyArgs] as const
}

export function useGetV2ApisApiIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdIntegrationsKey() {
  return ['v2', '/v2/apis/:apiId/integrations', 'POST'] as const
}

export function usePostV2ApisApiIdIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['integrations']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses',
    keyArgs,
  ] as const
}

export function useGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesKey(args)
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesKey(args)
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId/integrationresponses', 'POST'] as const
}

export function usePostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponses<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesKey()
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
            (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdModelsKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models', keyArgs] as const
}

export function useGetV2ApisApiIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdModels<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].models.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdModelsKey() {
  return ['v2', '/v2/apis/:apiId/models', 'POST'] as const
}

export function usePostV2ApisApiIdModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdModelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['models']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].models.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdRoutesKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes', keyArgs] as const
}

export function useGetV2ApisApiIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdRoutesKey() {
  return ['v2', '/v2/apis/:apiId/routes', 'POST'] as const
}

export function usePostV2ApisApiIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['routes']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdRoutesRouteIdRouteresponsesKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses', keyArgs] as const
}

export function useGetV2ApisApiIdRoutesRouteIdRouteresponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
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
        ? getGetV2ApisApiIdRoutesRouteIdRouteresponsesKey(args)
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
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
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
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdRoutesRouteIdRouteresponses<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
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
        ? getGetV2ApisApiIdRoutesRouteIdRouteresponsesKey(args)
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
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$get']
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
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdRoutesRouteIdRouteresponsesKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses', 'POST'] as const
}

export function usePostV2ApisApiIdRoutesRouteIdRouteresponses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdRoutesRouteIdRouteresponsesKey()
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
            (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdStagesKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/stages', keyArgs] as const
}

export function useGetV2ApisApiIdStages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdStagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].stages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdStages<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdStagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].stages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ApisApiIdStagesKey() {
  return ['v2', '/v2/apis/:apiId/stages', 'POST'] as const
}

export function usePostV2ApisApiIdStages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ApisApiIdStagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['stages']['$post']> },
      ) => parseResponse(client.v2.apis[':apiId'].stages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VpclinksKey(args: InferRequestType<typeof client.v2.vpclinks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/vpclinks', keyArgs] as const
}

export function useGetV2Vpclinks<TError = unknown>(
  args: InferRequestType<typeof client.v2.vpclinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VpclinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpclinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Vpclinks<TError = unknown>(
  args: InferRequestType<typeof client.v2.vpclinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2VpclinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpclinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2VpclinksKey() {
  return ['v2', '/v2/vpclinks', 'POST'] as const
}

export function usePostV2Vpclinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.vpclinks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.vpclinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2VpclinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.vpclinks.$post> }) =>
        parseResponse(client.v2.vpclinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/accesslogsettings', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdStagesStageNameAccesslogsettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdStagesStageNameAccesslogsettingsKey()
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
            (typeof client.v2.apis)[':apiId']['stages'][':stageName']['accesslogsettings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].stages[':stageName'].accesslogsettings.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId', keyArgs] as const
}

export function useGetV2ApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2ApisApiIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.apis[':apiId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV2ApisApiIdKey() {
  return ['v2', '/v2/apis/:apiId', 'PUT'] as const
}

export function usePutV2ApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2ApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['$put']> },
      ) => parseResponse(client.v2.apis[':apiId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdKey() {
  return ['v2', '/v2/apis/:apiId', 'DELETE'] as const
}

export function useDeleteV2ApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['$delete']> },
      ) => parseResponse(client.v2.apis[':apiId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdKey() {
  return ['v2', '/v2/apis/:apiId', 'PATCH'] as const
}

export function usePatchV2ApisApiId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['$patch']> },
      ) => parseResponse(client.v2.apis[':apiId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainnamesDomainNameApimappingsApiMappingIdKey(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', keyArgs] as const
}

export function useGetV2DomainnamesDomainNameApimappingsApiMappingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
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
        ? getGetV2DomainnamesDomainNameApimappingsApiMappingIdKey(args)
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
                (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
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
          client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainnamesDomainNameApimappingsApiMappingId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
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
        ? getGetV2DomainnamesDomainNameApimappingsApiMappingIdKey(args)
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
                (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$get']
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
          client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', 'DELETE'] as const
}

export function useDeleteV2DomainnamesDomainNameApimappingsApiMappingId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainnamesDomainNameApimappingsApiMappingIdKey()
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
            (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2DomainnamesDomainNameApimappingsApiMappingIdKey() {
  return ['v2', '/v2/domainnames/:domainName/apimappings/:apiMappingId', 'PATCH'] as const
}

export function usePatchV2DomainnamesDomainNameApimappingsApiMappingId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2DomainnamesDomainNameApimappingsApiMappingIdKey()
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
            (typeof client.v2.domainnames)[':domainName']['apimappings'][':apiMappingId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.domainnames[':domainName'].apimappings[':apiMappingId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdAuthorizersAuthorizerIdKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', keyArgs] as const
}

export function useGetV2ApisApiIdAuthorizersAuthorizerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
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
        ? getGetV2ApisApiIdAuthorizersAuthorizerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.apis[':apiId'].authorizers[':authorizerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdAuthorizersAuthorizerId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
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
        ? getGetV2ApisApiIdAuthorizersAuthorizerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.apis[':apiId'].authorizers[':authorizerId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdAuthorizersAuthorizerIdKey() {
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdAuthorizersAuthorizerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdAuthorizersAuthorizerIdKey()
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
            (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].authorizers[':authorizerId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdAuthorizersAuthorizerIdKey() {
  return ['v2', '/v2/apis/:apiId/authorizers/:authorizerId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdAuthorizersAuthorizerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdAuthorizersAuthorizerIdKey()
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
            (typeof client.v2.apis)[':apiId']['authorizers'][':authorizerId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].authorizers[':authorizerId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdCorsKey() {
  return ['v2', '/v2/apis/:apiId/cors', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdCors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdCorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.apis)[':apiId']['cors']['$delete']> },
      ) => parseResponse(client.v2.apis[':apiId'].cors.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdDeploymentsDeploymentIdKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', keyArgs] as const
}

export function useGetV2ApisApiIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
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
        ? getGetV2ApisApiIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.apis[':apiId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdDeploymentsDeploymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
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
        ? getGetV2ApisApiIdDeploymentsDeploymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.apis[':apiId'].deployments[':deploymentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdDeploymentsDeploymentIdKey() {
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdDeploymentsDeploymentIdKey()
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
            (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].deployments[':deploymentId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdDeploymentsDeploymentIdKey() {
  return ['v2', '/v2/apis/:apiId/deployments/:deploymentId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdDeploymentsDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdDeploymentsDeploymentIdKey()
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
            (typeof client.v2.apis)[':apiId']['deployments'][':deploymentId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].deployments[':deploymentId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DomainnamesDomainNameKey(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/domainnames/:domainName', keyArgs] as const
}

export function useGetV2DomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domainnames[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DomainnamesDomainName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2DomainnamesDomainNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.domainnames[':domainName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DomainnamesDomainNameKey() {
  return ['v2', '/v2/domainnames/:domainName', 'DELETE'] as const
}

export function useDeleteV2DomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$delete']> },
      ) => parseResponse(client.v2.domainnames[':domainName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2DomainnamesDomainNameKey() {
  return ['v2', '/v2/domainnames/:domainName', 'PATCH'] as const
}

export function usePatchV2DomainnamesDomainName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domainnames)[':domainName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2DomainnamesDomainNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.domainnames)[':domainName']['$patch']> },
      ) => parseResponse(client.v2.domainnames[':domainName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdIntegrationsIntegrationIdKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', keyArgs] as const
}

export function useGetV2ApisApiIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdKey(args)
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdIntegrationsIntegrationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdKey(args)
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdIntegrationsIntegrationIdKey()
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
            (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].integrations[':integrationId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdIntegrationsIntegrationIdKey() {
  return ['v2', '/v2/apis/:apiId/integrations/:integrationId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdIntegrationsIntegrationIdKey()
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
            (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].integrations[':integrationId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId',
    keyArgs,
  ] as const
}

export function useGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey(
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
            ':integrationResponseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
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
        ? getGetV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey(
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
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$get']
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
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
            ':integrationResponseId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey() {
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId',
    'DELETE',
  ] as const
}

export function useDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey()
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
            (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
            ':integrationResponseId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey() {
  return [
    'v2',
    '/v2/apis/:apiId/integrations/:integrationId/integrationresponses/:integrationResponseId',
    'PATCH',
  ] as const
}

export function usePatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV2ApisApiIdIntegrationsIntegrationIdIntegrationresponsesIntegrationResponseIdKey()
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
            (typeof client.v2.apis)[':apiId']['integrations'][':integrationId']['integrationresponses'][':integrationResponseId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].integrations[':integrationId'].integrationresponses[
            ':integrationResponseId'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdModelsModelIdKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models/:modelId', keyArgs] as const
}

export function useGetV2ApisApiIdModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdModelsModelId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdModelsModelIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].models[':modelId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdModelsModelIdKey() {
  return ['v2', '/v2/apis/:apiId/models/:modelId', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$delete']>
        },
      ) => parseResponse(client.v2.apis[':apiId'].models[':modelId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdModelsModelIdKey() {
  return ['v2', '/v2/apis/:apiId/models/:modelId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdModelsModelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdModelsModelIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apis)[':apiId']['models'][':modelId']['$patch']>
        },
      ) => parseResponse(client.v2.apis[':apiId'].models[':modelId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdRoutesRouteIdKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId', keyArgs] as const
}

export function useGetV2ApisApiIdRoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdRoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdRoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdRoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdRoutesRouteIdKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdRoutesRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdRoutesRouteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$delete']>
        },
      ) => parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdRoutesRouteIdKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdRoutesRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdRoutesRouteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apis)[':apiId']['routes'][':routeId']['$patch']>
        },
      ) => parseResponse(client.v2.apis[':apiId'].routes[':routeId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyKey() {
  return [
    'v2',
    '/v2/apis/:apiId/routes/:routeId/requestparameters/:requestParameterKey',
    'DELETE',
  ] as const
}

export function useDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV2ApisApiIdRoutesRouteIdRequestparametersRequestParameterKeyKey()
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
            (typeof client.v2.apis)[':apiId']['routes'][':routeId']['requestparameters'][':requestParameterKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].routes[':routeId'].requestparameters[
            ':requestParameterKey'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId', keyArgs] as const
}

export function useGetV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
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
        ? getGetV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey(args)
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
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
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
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
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
        ? getGetV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey(args)
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
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$get']
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
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey() {
  return [
    'v2',
    '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId',
    'DELETE',
  ] as const
}

export function useDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey()
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
            (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey() {
  return ['v2', '/v2/apis/:apiId/routes/:routeId/routeresponses/:routeResponseId', 'PATCH'] as const
}

export function usePatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdRoutesRouteIdRouteresponsesRouteResponseIdKey()
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
            (typeof client.v2.apis)[':apiId']['routes'][':routeId']['routeresponses'][':routeResponseId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].routes[':routeId'].routeresponses[':routeResponseId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/routesettings/:routeKey', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdStagesStageNameRoutesettingsRouteKeyKey()
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
            (typeof client.v2.apis)[':apiId']['stages'][':stageName']['routesettings'][':routeKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].stages[':stageName'].routesettings[':routeKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdStagesStageNameKey(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/stages/:stageName', keyArgs] as const
}

export function useGetV2ApisApiIdStagesStageName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdStagesStageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdStagesStageName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ApisApiIdStagesStageNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdStagesStageNameKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdStagesStageName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdStagesStageNameKey()
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
            (typeof client.v2.apis)[':apiId']['stages'][':stageName']['$delete']
          >
        },
      ) => parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ApisApiIdStagesStageNameKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName', 'PATCH'] as const
}

export function usePatchV2ApisApiIdStagesStageName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ApisApiIdStagesStageNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.apis)[':apiId']['stages'][':stageName']['$patch']>
        },
      ) => parseResponse(client.v2.apis[':apiId'].stages[':stageName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VpclinksVpcLinkIdKey(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/vpclinks/:vpcLinkId', keyArgs] as const
}

export function useGetV2VpclinksVpcLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2VpclinksVpcLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpclinks[':vpcLinkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VpclinksVpcLinkId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2VpclinksVpcLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.vpclinks[':vpcLinkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2VpclinksVpcLinkIdKey() {
  return ['v2', '/v2/vpclinks/:vpcLinkId', 'DELETE'] as const
}

export function useDeleteV2VpclinksVpcLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2VpclinksVpcLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$delete']> },
      ) => parseResponse(client.v2.vpclinks[':vpcLinkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2VpclinksVpcLinkIdKey() {
  return ['v2', '/v2/vpclinks/:vpcLinkId', 'PATCH'] as const
}

export function usePatchV2VpclinksVpcLinkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2VpclinksVpcLinkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.vpclinks)[':vpcLinkId']['$patch']> },
      ) => parseResponse(client.v2.vpclinks[':vpcLinkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdExportsSpecificationOutputTypeKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/exports/:specification#outputType', keyArgs] as const
}

export function useGetV2ApisApiIdExportsSpecificationOutputType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
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
        ? getGetV2ApisApiIdExportsSpecificationOutputTypeKey(args)
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
                (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
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
          client.v2.apis[':apiId'].exports[':specification#outputType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdExportsSpecificationOutputType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
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
        ? getGetV2ApisApiIdExportsSpecificationOutputTypeKey(args)
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
                (typeof client.v2.apis)[':apiId']['exports'][':specification#outputType']['$get']
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
          client.v2.apis[':apiId'].exports[':specification#outputType'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersKey() {
  return ['v2', '/v2/apis/:apiId/stages/:stageName/cache/authorizers', 'DELETE'] as const
}

export function useDeleteV2ApisApiIdStagesStageNameCacheAuthorizers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ApisApiIdStagesStageNameCacheAuthorizersKey()
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
            (typeof client.v2.apis)[':apiId']['stages'][':stageName']['cache']['authorizers']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.apis[':apiId'].stages[':stageName'].cache.authorizers.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ApisApiIdModelsModelIdTemplateKey(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/apis/:apiId/models/:modelId/template', keyArgs] as const
}

export function useGetV2ApisApiIdModelsModelIdTemplate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
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
        ? getGetV2ApisApiIdModelsModelIdTemplateKey(args)
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
                (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
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
          client.v2.apis[':apiId'].models[':modelId'].template.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ApisApiIdModelsModelIdTemplate<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
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
        ? getGetV2ApisApiIdModelsModelIdTemplateKey(args)
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
                (typeof client.v2.apis)[':apiId']['models'][':modelId']['template']['$get']
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
          client.v2.apis[':apiId'].models[':modelId'].template.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TagsResourceArnKey(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v2', '/v2/tags/:resource-arn', keyArgs] as const
}

export function useGetV2TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2TagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TagsResourceArnKey() {
  return ['v2', '/v2/tags/:resource-arn', 'POST'] as const
}

export function usePostV2TagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.v2.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TagsResourceArnTagKeysKey() {
  return ['v2', '/v2/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteV2TagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.v2.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
